
import { createClient }              from 'redis';
import { RedisClientStringCommands } from './client/commands/string.js';
import { RedisClientToolsCommands }  from './client/commands/tools.js';
import { RedisClientLru }            from './client/lru.js';
import { RedisClientTransaction }    from './client/transaction.js';
import {
	RedisScript,
	getScriptHash }                  from './client/script.js';
import { updateArguments }           from './utils/args.js';
import { isGenerator }               from './utils/generators.js';

export class RedisClient {
	#options;
	#rawClient;

	constructor(options) {
		this.#options = options;

		this.#rawClient = createClient(options);

		this.#rawClient.on(
			'error',
			(error) => console.error('[@kirick/redis-client]', error),
		);

		this.#rawClient.connect();
	}

	get rawClient() {
		return this.#rawClient;
	}

	/**
	 * Duplicates client with the same options as the current client.
	 * @returns {RedisClient} New RedisClient instance.
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
	 * @returns {Promise<any>} Response from the Redis server.
	 */
	async sendCommand(command, ...args) {
		let generator;
		{
			const arg_last = args.at(-1);
			if (
				arg_last instanceof Object
				&& isGenerator(arg_last)
			) {
				generator = args.pop();
			}
		}

		updateArguments(command, args);

		let result = await this.#rawClient.sendCommand([
			command,
			...args,
		]);

		if (generator !== undefined) {
			result = generator.next(result).value;
		}

		return result;
	}

	/**
	 * Collection of tools commands.
	 * @type {RedisClientToolsCommands}
	 */
	tools = new RedisClientToolsCommands(this);

	/**
	 * Collection of string commands.
	 * @type {RedisClientStringCommands}
	 */
	string = new RedisClientStringCommands(this);

	/**
	 * Creates new MULTI transaction locally, without sending any commands to the Redis server.
	 *
	 * Transaction will be sent to the Redis server when execute() method will be called.
	 *
	 * @returns {RedisClientTransaction} RedisClientTransaction instance.
	 */
	createTransaction() {
		return new RedisClientTransaction(this);
	}

	#scripts_cache = new Map();
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

	#lru_cache = new Map();
	/**
	 * @param {object} options -
	 * @param {string} options.key Key name.
	 * @param {number} options.epoch_length Epoch length in milliseconds.
	 * @param {number} [options.epoch_count] Number of epochs to keep. Default: 10.
	 * @returns {RedisClientLru} -
	 */
	createLru(options) {
		const { key } = options;

		if (this.#lru_cache.has(key) === false) {
			this.#lru_cache.set(
				key,
				new RedisClientLru(
					this,
					options,
				),
			);
		}

		return this.#lru_cache.get(key);
	}

	/**
	 * @callback RedisClientSubscribeCallback
	 * @param {string | Buffer} message Message received.
	 * @returns {void}
	 */

	/**
	 * Subscribes to the channel.
	 * @param {string} channel Channel name.
	 * @param {RedisClientSubscribeCallback} callback Callback function.
	 * @param {boolean} is_buffer Whether to receive messages as Buffers.
	 * @returns {Promise<void>} Promise that resolves when subscription is complete.
	 */
	subscribe(channel, callback, is_buffer) {
		return this.#rawClient.subscribe(
			channel,
			callback,
			is_buffer,
		);
	}

	/**
	 * Subscribes to the channel.
	 * @param {string} channel Channel name.
	 * @param {RedisClientSubscribeCallback} callback Callback function.
	 * @param {boolean} is_buffer Whether to receive messages as Buffers.
	 * @returns {Promise<void>} Promise that resolves when subscription is complete.
	 */
	psubscribe(channel, callback, is_buffer) {
		return this.#rawClient.psubscribe(
			channel,
			callback,
			is_buffer,
		);
	}

	/**
	 * Unsubscribes from the channel or channels.
	 * @param {string | string[]} channel Channel name.
	 * @param {RedisClientSubscribeCallback?} callback Callback function.
	 * @returns {Promise<void>} Promise that resolves when unsubscription is complete.
	 */
	unsubscribe(channel, callback) {
		return this.#rawClient.unsubscribe(
			channel,
			callback,
		);
	}

	/**
	 * Unsubscribes from the channel or channels.
	 * @param {string | string[]} channel Channel name.
	 * @param {RedisClientSubscribeCallback?} callback Callback function.
	 * @returns {Promise<void>} Promise that resolves when unsubscription is complete.
	 */
	punsubscribe(channel, callback) {
		return this.#rawClient.unsubscribe(
			channel,
			callback,
		);
	}

	/* eslint-disable jsdoc/no-undefined-types */

	/**
	 * @typedef {object} ScanOptions
	 * @property {string?} TYPE Type of keys to return.
	 * @property {string?} MATCH Pattern to match keys.
	 * @property {number?} COUNT Number of keys to return per iteration.
	 */
	/**
	 * Asynchronously iterates over keys in the database.
	 * @param {ScanOptions?} options -
	 * @returns {AsyncIterator<string>} Async iterator with key names.
	 */
	scanIterator(options) {
		return this.#rawClient.scanIterator(options);
	}

	/**
	 * @typedef {object} ScanTypedOptions
	 * @property {string?} MATCH Pattern to match keys.
	 * @property {number?} COUNT Number of keys to return per iteration.
	 */

	/**
	 * Asynchronously iterates over keys in the hash.
	 * @param {string} key Key containing hash.
	 * @param {ScanTypedOptions?} options -
	 * @returns {AsyncIterator<{ field: string, value: string }>} Async iterator with field names and values.
	 */
	hScanIterator(key, options) {
		return this.#rawClient.hScanIterator(key, options);
	}

	/**
	 * Asynchronously iterates over keys in the set.
	 * @param {string} key Key containing set.
	 * @param {ScanTypedOptions?} options -
	 * @returns {AsyncIterator<string>} Async iterator with members.
	 */
	sScanIterator(key, options) {
		return this.#rawClient.sScanIterator(key, options);
	}

	/**
	 * Asynchronously iterates over keys in the sorted set.
	 * @param {string} key Key containing sorted set.
	 * @param {ScanTypedOptions?} options -
	 * @returns {AsyncIterator<{ value: string, score: number }>} Async iterator with members and scores.
	 */
	zScanIterator(key, options) {
		return this.#rawClient.zScanIterator(key, options);
	}

	/* eslint-enable jsdoc/no-undefined-types */

	/**
	 * Disconnects from the Redis server.
	 * @async
	 * @returns {Promise<void>} Promise that resolves when client is disconnected.
	 */
	async disconnect() {
		return this.#rawClient.disconnect();
	}
}
