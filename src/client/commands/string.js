
// Path: src/client/commands/string.js
// This file was automatically generated at Fri, 12 Jan 2024 12:36:34 GMT by tools/create-commands.js

import { retrieveCommandArguments } from '../../utils/args.js';
import getMany from '../commands/string/get-many.js';
import set from '../commands/string/set.js';
import get from '../commands/string/get.js';

/**
 * @typedef {import('../../client.js').RedisClient} RedisClient
 * @typedef {import("../../utils/args.js").RedisCommandArgument} RedisCommandArgument
 */

export class RedisClientStringCommands {
	#redisClient;

	/**
	 * @param {RedisClient} redisClient -
	 */
	constructor(redisClient) {
		this.#redisClient = redisClient;
	}

	#execute(fn, fn_args = []) {
		return this.#redisClient.sendCommand(
			...retrieveCommandArguments(fn, fn_args),
		);
	}

	/**
	 * Atomically returns the string values of one or more keys.
	 *
	 * Complexity: O(N) where N is the number of keys to retrieve.
	 *
	 * @param {...string} keys Key name.
	 * @returns {Promise<{[key: string]: string}>} Object with key-value pairs.
	 */
	getMany(...keys) {
		return this.#execute(getMany, [ ...keys ]);
	}

	/**
	 */
	/**
	 * @typedef StringSetOptions
	 * @property {boolean} [existing] If `true`, SET will only succeed if the key already exists (`XX` argument). If `false`, SET will only succeed if the key does not already exist (`NX` argument).
	 * @property {"keep" | StringSetOptionsExpire} [expire] -
	 */
	/**
	 * @typedef StringSetOptionsExpire
	 * @property {number} [in] Set the specified expire time in seconds.
	 * @property {number} [in_ms] Set the specified expire time in milliseconds.
	 * @property {number} [at] Set the specified Unix timestamp in seconds.
	 * @property {number} [at_ms] Set the specified Unix timestamp in milliseconds.
	 */
	/**
	 * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
	 *
	 * Complexity: O(1)
	 *
	 * @async
	 * @param {string} key Key name.
	 * @param {RedisCommandArgument} value Value to set.
	 * @param {StringSetOptions} [options] -
	 * @returns {Promise<"OK" | null>} "OK" if SET was executed correctly, otherwise null.
	 */
	set(key, value, options) {
		return this.#execute(set, [ key, value, options ]);
	}

	/**
	 * Returns the string value of a key.
	 *
	 * Complexity: O(1)
	 *
	 * @async
	 * @param {string} key Key name.
	 * @returns {Promise<string | null>} Value of the key, or null when key does not exist.
	 */
	get(key) {
		return this.#execute(get, [ key ]);
	}
}
