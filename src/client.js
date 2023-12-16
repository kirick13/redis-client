
import { createClient }                from 'redis';
import { RedisClientCommandsExtended } from './client/commands.extended.js';
import { RedisClientMulti }            from './client/multi.js';
import {
	RedisScript,
	getScriptHash }                    from './client/script.js';
import { updateArguments }             from './utils/args.js';
import * as TRANSFORM                  from './utils/transform.js';

export class RedisClient extends RedisClientCommandsExtended {
	#options;
	#redis_client;

	#scripts_cache = new Map();

	constructor(options) {
		super(async (command, ...args) => {
			// eslint-disable-next-line import/namespace
			const transform = TRANSFORM[command] ?? {};

			if (typeof transform.input === 'function') {
				args = transform.input(...args) ?? args;
			}

			const response = await this.sendCommand(
				command,
				...args,
			);

			if (typeof transform.output === 'function') {
				return transform.output(response);
			}

			return response;
		});

		this.#options = options;

		this.#redis_client = createClient(options);

		this.#redis_client.on(
			'error',
			(error) => console.error('[@kirick/redis-client]', error),
		);

		this.#redis_client.connect();
	}

	get redis_client() {
		return this.#redis_client;
	}

	/**
	 * Duplicates client with the same options as the current client.
	 * @returns RedisClient
	 */
	duplicate() {
		return new RedisClient(
			this.#options,
		);
	}

	/**
	 * Sends raw command to the Redis server and returns raw response.
	 * @async
	 * @param {string} command Command name.
	 * @param {...any} args Command arguments.
	 * @returns {any} Response from the Redis server.
	 */
	async sendCommand(command, ...args) {
		updateArguments(command, args);

		return this.#redis_client.sendCommand([
			command,
			...args,
		]);
	}

	/**
	 * Creates a script to be executed using the EVALSHA commands.
	 * @param {string} script Lua script to upload.
	 * @returns {RedisScript} RedisScript instance.
	 */
	createScript(script) {
		const script_hash = getScriptHash(script);

		if (this.#scripts_cache.has(script_hash) === false) {
			this.#scripts_cache.set(
				script_hash,
				new RedisScript(
					this,
					script,
				),
			);
		}

		return this.#scripts_cache.get(script_hash);
	}

	/**
	 * Disconnects from the Redis server.
	 * @async
	 */
	async disconnect() {
		return this.#redis_client.disconnect();
	}

	/**
	 * Creates new MULTI transaction locally, without sending any commands to the Redis server.
	 *
	 * Transaction will be sent to the Redis server when EXEC methid will be called.
	 * @returns {RedisClientMulti}
	 */
	MULTI() {
		return new RedisClientMulti(this);
	}

	/**
	 * Creates new MULTI transaction locally, without sending any commands to the Redis server.
	 *
	 * Transaction will be sent to the Redis server when EXEC methid will be called.
	 * @returns {RedisClientMulti}
	 */
	multi() {
		return this.MULTI();
	}
}

