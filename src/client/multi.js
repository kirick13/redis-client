
import { updateArguments }          from '../utils/args.js';
import * as TRANSFORM               from '../utils/transform.js';
import { RedisClientMultiCommands } from './multi.commands.js';

/**
 * @typedef {import('../client.js').RedisClient} RedisClient
 */

export class RedisClientMulti extends RedisClientMultiCommands {
	#redis_client_multi;
	#transforms = [];
	#queue_length = 0;
	#custom_names = null;

	/**
	 * @param {RedisClient} redisClient RedisClient instance.
	 */
	constructor(redisClient) {
		super((command, ...args) => {
			// eslint-disable-next-line import/namespace
			const transform = TRANSFORM[command] ?? {};

			if (typeof transform.input === 'function') {
				args = transform.input(...args) ?? args;
			}

			updateArguments(command, args);

			this.#redis_client_multi.addCommand([
				command,
				...args,
			]);

			if (typeof transform.output === 'function') {
				this.#transforms.push([
					this.#queue_length,
					transform.output,
				]);
			}

			this.#queue_length++;

			return this;
		});

		this.#redis_client_multi = redisClient.redis_client.MULTI();
	}

	get queue_length() {
		return this.#queue_length;
	}

	/**
	 * Sets custom name for the command result. From now on, EXEC() will return an object contains only named results.
	 * @param {*} field_name
	 * @returns
	 */
	as(field_name) {
		this.#custom_names ??= {};
		this.#custom_names[field_name] = this.#queue_length - 1;

		return this;
	}

	/**
	 * Sends transaction to the Redis server and returns response.
	 * @async
	 * @returns {Array | object} Array, if no custom names were set, otherwise Object.
	 */
	async EXEC() {
		const result = await this.#redis_client_multi.EXEC();

		for (const [ index, transform ] of this.#transforms) {
			result[index] = transform(result[index]);
		}

		const names = this.#custom_names;
		if (names) {
			for (const key of Object.keys(names)) {
				const index = names[key];
				names[key] = result[index];
			}

			return names;
		}

		return result;
	}

	/**
	 * Sends transaction to the Redis server and returns response.
	 * @async
	 * @returns {Array | object} Array, if no custom names were set, otherwise Object.
	 */
	async exec() {
		return this.EXEC();
	}
}
