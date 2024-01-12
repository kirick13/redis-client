
/**
 * @typedef {import("../utils/args.js").RedisCommandArgument} RedisCommandArgument
 */

export class RedisClientLru {
	#redisClient;
	#key;
	#epoch_length;
	#epoch_count;

	#redisScriptGet;

	/**
	 * @param {import("../client.js").RedisClient} redisClient RedisClient instance.
	 * @param {object} options -
	 * @param {string} options.key Key name.
	 * @param {number} options.epoch_length Epoch length in milliseconds.
	 * @param {number} [options.epoch_count] Number of epochs to keep. Default: 10.
	 */
	constructor(
		redisClient,
		{
			key,
			epoch_length,
			epoch_count = 10,
		},
	) {
		this.#redisClient = redisClient;
		this.#key = key;
		this.#epoch_length = epoch_length;
		this.#epoch_count = epoch_count;

		this.#redisScriptGet = redisClient.createScript(`
			local key = ARGV[1]
			local epoch_id_now = tonumber(ARGV[2])
			local epoch_length = tonumber(ARGV[3])
			local epoch_count = tonumber(ARGV[4])

			local fields = {}
			local response = {}
			for i = 5, #ARGV do
				table.insert(fields, ARGV[i])
				table.insert(response, false)
			end

			local epoch_id = epoch_id_now
			local hmset_args = {}

			-- query epochs in reverse order
			-- until we get all requested fields or reach the end of the cache
			while #fields > 0 and epoch_id > epoch_id_now - epoch_count do
				local key_epoch = key .. ':' .. epoch_id
				local hdel_args = {}
				local rdata = redis.call('HMGET', key_epoch, unpack(fields))
				for i = 1, #rdata do
					if rdata[i] ~= false then
						-- if we got that data from older epoch
						if epoch_id < epoch_id_now then
							-- transfer data to current epoch
							table.insert(hmset_args, fields[i])
							table.insert(hmset_args, rdata[i])
							-- remove data from this not-current-epoch
							table.insert(hdel_args, fields[i])
						end

						response[i] = rdata[i]
						fields[i] = nil
					end
				end

				-- remove fields that we got from this not-current-epoch
				if #hdel_args > 0 then
					redis.call('HDEL', key_epoch, unpack(hdel_args))
				end

				epoch_id = epoch_id - 1
			end

			-- if we have data to trasnfer to current epoch
			if #hmset_args > 0 then
				local key_epoch = key .. ':' .. epoch_id_now
				redis.call('HMSET', key_epoch, unpack(hmset_args))
				redis.call('PEXPIREAT', key_epoch, (epoch_id_now + epoch_count) * epoch_length)
			end

			return response
		`);
	}

	#getEpoch() {
		return Math.floor(
			Date.now() / this.#epoch_length,
		);
	}

	/**
	 * Sets value for the specified field.
	 * @param {string} field Field name.
	 * @param {RedisCommandArgument} value Field value.
	 * @returns {Promise<void>} -
	 */
	set(field, value) {
		return this.mset({
			[field]: value,
		});
	}

	/**
	 * Sets multiple field-value pairs.
	 * @param {{ [key: string]: RedisCommandArgument }} object Object with field-value pairs.
	 * @returns {Promise<void>} -
	 */
	async mset(object) {
		const epoch = this.#getEpoch();

		const redisTransaction = this.#redisClient.createTransaction();

		redisTransaction.addCommand(
			'HMSET',
			`${this.#key}:${epoch}`,
			...Object.entries(object).flat(),
		);
		redisTransaction.addCommand(
			'PEXPIREAT',
			`${this.#key}:${epoch}`,
			(epoch + this.#epoch_count) * this.#epoch_length,
		);

		for (
			let epoch_old = epoch - 1;
			epoch_old > epoch - this.#epoch_count;
			epoch_old--
		) {
			redisTransaction.addCommand(
				'HDEL',
				`${this.#key}:${epoch_old}`,
				...Object.keys(object),
			);
		}

		await redisTransaction.execute();
	}

	async #rawGet(fields, single_value) {
		const result = await this.#redisScriptGet.run(
			this.#key,
			this.#getEpoch(),
			this.#epoch_length,
			this.#epoch_count,
			...fields,
		);

		if (single_value === true) {
			return result[0];
		}

		const response = {};
		// eslint-disable-next-line unicorn/no-for-loop
		for (
			let index = 0;
			index < fields.length;
			index++
		) {
			response[fields[index]] = result[index];
		}

		return response;
	}

	/**
	 * Returns value for the specified field.
	 * @param {string} field Field name.
	 * @returns {Promise<string | null>} Field value. `null` if field does not exist.
	 */
	get(field) {
		return this.#rawGet(
			[ field ],
			true,
		);
	}

	/**
	 * Returns values for the specified fields.
	 * @param {...string} fields Field names.
	 * @returns {Promise<{ [ key: string ]: string | null }>} Object with field-value pairs.
	 */
	mget(...fields) {
		return this.#rawGet(
			fields,
			false,
		);
	}

	del(...fields) {
		const epoch_start = this.#getEpoch();

		const redisTransaction = this.#redisClient.createTransaction();

		for (
			let epoch = epoch_start;
			epoch > epoch_start - this.#epoch_count;
			epoch--
		) {
			redisTransaction.addCommand(
				'HDEL',
				`${this.#key}:${epoch}`,
				...fields,
			);
		}

		return redisTransaction.execute();
	}
}
