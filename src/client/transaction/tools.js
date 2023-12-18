
// Path: src/client/transaction/tools.js
// This file was automatically generated at Mon, 18 Dec 2023 13:44:00 GMT by tools/create-commands.js

import { retrieveCommandArguments } from '../../utils/args.js';
import ping from '../commands/tools/ping.js';

/**
 * @typedef {import('../transaction.js').RedisClientTransaction} RedisClientTransaction
 */

export class RedisClientTransactionToolsCommands {
	#redisClientTransaction;

	/**
	 * @param {RedisClientTransaction} redisClientTransaction -
	 */
	constructor(redisClientTransaction) {
		this.#redisClientTransaction = redisClientTransaction;
	}

	#execute(fn, fn_args = []) {
		return this.#redisClientTransaction.addCommand(
			...retrieveCommandArguments(fn, fn_args),
		);
	}

	/**
	 * Returns the server's liveliness response.
	 *
	 * Complexity: O(1)
	 *
	 * @returns {RedisClientTransaction} RedisClientTransaction instance.
	 */
	ping() {
		return this.#execute(ping);
	}
}
