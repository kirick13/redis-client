
import { isGenerator }                          from '../utils/generators.js';
import { RedisClientTransactionStringCommands } from './transaction/string.js';
import { RedisClientTransactionToolsCommands }  from './transaction/tools.js';

/**
 * @typedef {import('../client.js').RedisClient} RedisClient
 */

export class RedisClientTransaction {
	#redis_client_multi;
	#generators = [];
	#queue_length = 0;
	#custom_names = null;

	/**
	 * @param {RedisClient} redisClient RedisClient instance.
	 */
	constructor(redisClient) {
		this.#redis_client_multi = redisClient.redis_client.MULTI();
	}

	get queue_length() {
		return this.#queue_length;
	}

	/**
	 * Adds command to the transaction.
	 * @param {string} command Command name.
	 * @param {...(string | number | ArrayBuffer | Buffer)} args Command arguments.
	 * @returns {RedisClientTransaction} RedisClientTransaction instance.
	 */
	addCommand(command, ...args) {
		{
			const arg_last = args.at(-1);
			if (
				arg_last instanceof Object
				&& isGenerator(arg_last)
			) {
				this.#generators.push([
					this.#queue_length,
					args.pop(),
				]);
			}
		}

		this.#redis_client_multi.addCommand([
			command,
			...args,
		]);

		this.#queue_length++;

		return this;
	}

	/**
	 * Collection of tools commands.
	 * @type {RedisClientTransactionToolsCommands}
	 */
	tools = new RedisClientTransactionToolsCommands(this);

	/**
	 * Collection of string commands.
	 * @type {RedisClientTransactionStringCommands}
	 */
	string = new RedisClientTransactionStringCommands(this);

	/**
	 * Sets custom name for the command result. From now on, EXEC() will return an object contains only named results.
	 * @param {*} field_name -
	 * @returns {RedisClientTransaction} RedisClientTransaction instance.
	 */
	as(field_name) {
		this.#custom_names ??= {};
		this.#custom_names[field_name] = this.#queue_length - 1;

		return this;
	}

	/**
	 * Sends transaction to the Redis server and returns response.
	 * @async
	 * @returns {Array | { [key: string]: any }} Array, if no custom names were set, otherwise Object.
	 */
	async execute() {
		const result = await this.#redis_client_multi.EXEC();

		for (const [ index, generator ] of this.#generators) {
			result[index] = generator.next(
				result[index],
			).value;
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
}
