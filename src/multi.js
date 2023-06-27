
const COMMANDS  = require('./commands');
const TRANSFORM = require('./transform');

class RedisClientMulti {
	constructor (redisClient) {
		this._multi = redisClient._client.multi();
		this._transforms = [];
		this.queue_length = 0;

		this._names = null;
	}

	as (field_name) {
		this._names ??= {};
		this._names[field_name] = this.queue_length - 1;

		return this;
	}
}

for (const command of COMMANDS) {
	RedisClientMulti.prototype[command] = RedisClientMulti.prototype[command.toUpperCase()] = function (...args) {
		const transform = TRANSFORM[command] ?? {};

		if (typeof transform.input === 'function') {
			args = transform.input(...args) ?? args;
		}

		for (let i = 0; i < args.length; i++) {
			if (typeof args[i] !== 'string') {
				args[i] = String(args[i]);
			}
		}

		this._multi.addCommand([
			command,
			...args,
		]);

		if (typeof transform.output === 'function') {
			this._transforms.push([
				this.queue_length,
				transform.output,
			]);
		}

		this.queue_length++;

		return this;
	};
}

RedisClientMulti.prototype.EXEC = RedisClientMulti.prototype.exec = async function () {
	const result = await this._multi.EXEC();

	for (const [ index, transform ] of this._transforms) {
		result[index] = transform(result[index]);
	}

	const names = this._names;
	if (names) {
		for (const key of Object.keys(names)) {
			const index = names[key];
			names[key] = result[index];
		}

		return names;
	}
	else {
		return result;
	}
};

module.exports = RedisClientMulti;
