
import { createHash } from 'node:crypto';
import { updateArguments } from '../utils/args.js';

export function getScriptHash(script) {
	return createHash('sha1').update(script).digest('hex');
}

/**
 * @typedef {import('../client.js').RedisClient} RedisClient
 */

export class RedisScript {
	#redisClient;
	#script;
	#script_sha1;

	/**
	 * @param {RedisClient} redisClient RedisClient instance.
	 * @param {string} script Lua script to upload.
	 */
	constructor(redisClient, script) {
		this.#redisClient = redisClient;

		this.#script = script;
		this.#script_sha1 = getScriptHash(script);
	}

	/**
	 * Runs the script.
	 * @param {(string | number)[]} args Script arguments.
	 * @returns {any} Script result.
	 */
	async run(...args) {
		updateArguments('EVALSHA', args);

		try {
			return await this.#redisClient.sendCommand(
				'EVALSHA',
				this.#script_sha1,
				0,
				...args,
			);
		}
		catch (error) {
			if (error.toString().includes('NOSCRIPT')) {
				await this.#loadScript();

				return this.run(...args);
			}

			throw error;
		}
	}

	async #loadScript() {
		this.#script_sha1 = await this.#redisClient.sendCommand(
			'SCRIPT',
			'LOAD',
			this.#script,
		);
	}
}
