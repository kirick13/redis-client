
import { RedisClientCommands } from './commands.js';

export class RedisClientCommandsExtended extends RedisClientCommands {
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
	 */
	SUBSCRIBE(channel, callback, is_buffer) {
		return this.redis_client.SUBSCRIBE(
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
	 */
	subscribe(channel, callback, is_buffer) {
		return this.redis_client.subscribe(
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
	 */
	PSUBSCRIBE(channel, callback, is_buffer) {
		return this.redis_client.PSUBSCRIBE(
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
	 */
	psubscribe(channel, callback, is_buffer) {
		return this.redis_client.psubscribe(
			channel,
			callback,
			is_buffer,
		);
	}

	/**
	 * Unsubscribes from the channel or channels.
	 * @param {string | string[]} channel Channel name.
	 * @param {RedisClientSubscribeCallback?} callback Callback function.
	 */
	UNSUBSCRIBE(channel, callback) {
		return this.redis_client.UNSUBSCRIBE(
			channel,
			callback,
		);
	}

	/**
	 * Unsubscribes from the channel or channels.
	 * @param {string | string[]} channel Channel name.
	 * @param {RedisClientSubscribeCallback?} callback Callback function.
	 */
	unsubscribe(channel, callback) {
		return this.redis_client.unsubscribe(
			channel,
			callback,
		);
	}

	/**
	 * Unsubscribes from the channel or channels.
	 * @param {string | string[]} channel Channel name.
	 * @param {RedisClientSubscribeCallback?} callback Callback function.
	 */
	PUNSUBSCRIBE(channel, callback) {
		return this.redis_client.UNSUBSCRIBE(
			channel,
			callback,
		);
	}

	/**
	 * Unsubscribes from the channel or channels.
	 * @param {string | string[]} channel Channel name.
	 * @param {RedisClientSubscribeCallback?} callback Callback function.
	 */
	punsubscribe(channel, callback) {
		return this.redis_client.unsubscribe(
			channel,
			callback,
		);
	}

	/**
	 * @typedef {Object} ScanOptions
	 * @property {string?} TYPE Type of keys to return.
	 * @property {string?} MATCH Pattern to match keys.
	 * @property {number?} COUNT Number of keys to return per iteration.
	 */
	/**
	 * Asynchronously iterates over keys in the database.
	 * @param {ScanOptions?} options
	 * @returns {AsyncIterator<string>} Async iterator with key names.
	 */
	scanIterator(options) {
		return this.redis_client.scanIterator(options);
	}

	/**
	 * @typedef {Object} ScanTypedOptions
	 * @property {string?} MATCH Pattern to match keys.
	 * @property {number?} COUNT Number of keys to return per iteration.
	 */

	/**
	 * Asynchronously iterates over keys in the hash.
	 * @param {string} key Key containing hash.
	 * @param {ScanTypedOptions?} options
	 * @returns {AsyncIterator<{ field: string, value: string }>} Async iterator with field names and values.
	 */
	hScanIterator(key, options) {
		return this.redis_client.hScanIterator(key, options);
	}

	/**
	 * Asynchronously iterates over keys in the set.
	 * @param {string} key Key containing set.
	 * @param {ScanTypedOptions?} options
	 * @returns {AsyncIterator<string>} Async iterator with members.
	 */
	sScanIterator(key, options) {
		return this.redis_client.sScanIterator(key, options);
	}

	/**
	 * Asynchronously iterates over keys in the sorted set.
	 * @param {string} key Key containing sorted set.
	 * @param {ScanTypedOptions?} options
	 * @returns {AsyncIterator<{ value: string, score: number }>} Async iterator with members and scores.
	 */
	zScanIterator(key, options) {
		return this.redis_client.zScanIterator(key, options);
	}
}
