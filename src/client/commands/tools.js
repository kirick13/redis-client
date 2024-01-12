
// Path: src/client/commands/tools.js
// This file was automatically generated at Fri, 12 Jan 2024 12:36:34 GMT by tools/create-commands.js

import { retrieveCommandArguments } from '../../utils/args.js';
import ping from '../commands/tools/ping.js';

/**
 * @typedef {import('../../client.js').RedisClient} RedisClient
 * @typedef {import("../../utils/args.js").RedisCommandArgument} RedisCommandArgument
 */

export class RedisClientToolsCommands {
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
	 * Returns the server's liveliness response.
	 *
	 * Complexity: O(1)
	 *
	 * @async
	 * @returns {Promise<"PONG">} Response from the Redis server.
	 */
	ping() {
		return this.#execute(ping);
	}
}
