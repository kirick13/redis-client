
// Path: src/client/commands/string.js
// This file was automatically generated at Sun, 17 Dec 2023 15:05:27 GMT by tools/create-commands.js

import { retrieveCommandArguments } from '../../utils/args.js';
import getMany from '../commands/string/get-many.js';
import set from '../commands/string/set.js';
import get from '../commands/string/get.js';

/**
 * @typedef {import('../../client.js').RedisClient} RedisClient
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
	 * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
	 *
	 * Complexity: O(1)
	 *
	 * @async
	 * @param {string} key Key name.
	 * @param {string | number | ArrayBuffer | Buffer} value Value to set.
	 * @returns {Promise<"OK" | null>} "OK" if SET was executed correctly, otherwise null.
	 */
	set(key, value) {
		return this.#execute(set, [ key, value ]);
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
