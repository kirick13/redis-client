
/* global describe, test, expect */
/* eslint-disable jsdoc/require-jsdoc */

import { redisClient } from '../test/create-client.js';

test('sendCommand', async () => {
	const result = await redisClient.sendCommand('PING');

	expect(result).toBe('PONG');
});

describe('transactions', () => {
	test('main', async () => {
		const result = await redisClient.createTransaction()
			.string.set('test', 'test')
			.string.get('test')
			.addCommand('DEL', 'test')
			.execute();

		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(3);
		expect(result[0]).toBe('OK');
		expect(result[1]).toBe('test');
		expect(result[2]).toBe(1);
	});

	test('named results', async () => {
		const result = await redisClient.createTransaction()
			.string.set('test', 'test')
			.addCommand('GET', 'test').as('test')
			.addCommand('DEL', 'test')
			.execute();

		expect(result).toBeInstanceOf(Object);
		expect(Object.keys(result)).toHaveLength(1);
		expect(result).toHaveProperty('test');
		expect(result.test).toBe('test');
	});
});

/* eslint-disable function-call-argument-newline */
await redisClient.createTransaction()
	.addCommand(
		'MSET',
		'key1', '1',
		'key2', '2',
		'key3', '3',
	)
	.addCommand(
		'HSET',
		'test-hash',
		'user_id', '1',
		'nick', 'deadbeef',
	)
	.addCommand(
		'SADD',
		'test-set',
		'member1',
		'member2',
	)
	.addCommand(
		'ZADD',
		'test-sorted-set',
		'1', 'member1',
		'2', 'member2',
	)
	.execute();
/* eslint-enable function-call-argument-newline */

describe('iterators', () => {
	describe('entire database', () => {
		test('all', async () => {
			let count = 0;
			for await (const key of redisClient.scanIterator()) {
				expect(typeof key).toBe('string');
				count++;
			}

			expect(count).toBe(6);
		});

		test('by type', async () => {
			let count = 0;
			// eslint-disable-next-line no-unused-vars
			for await (const _ of redisClient.scanIterator({ TYPE: 'hash' })) {
				count++;
			}

			expect(count).toBe(1);
		});

		test('by pattern', async () => {
			let count = 0;
			// eslint-disable-next-line no-unused-vars
			for await (const _ of redisClient.scanIterator({ MATCH: 'key*' })) {
				count++;
			}

			expect(count).toBe(3);
		});
	});

	describe('hash', () => {
		test('all', async () => {
			let count = 0;
			for await (const tuple of redisClient.hScanIterator('test-hash')) {
				expect(typeof tuple).toBe('object');

				expect(tuple).toHaveProperty('field');
				expect(typeof tuple.field).toBe('string');

				expect(tuple).toHaveProperty('value');
				expect(typeof tuple.value).toBe('string');

				count++;
			}

			expect(count).toBe(2);
		});

		test('by pattern', async () => {
			let count = 0;
			// eslint-disable-next-line no-unused-vars
			for await (const _ of redisClient.hScanIterator('test-hash', { MATCH: 'u*' })) {
				count++;
			}

			expect(count).toBe(1);
		});
	});

	describe('set', () => {
		test('all', async () => {
			let count = 0;
			for await (const member of redisClient.sScanIterator('test-set')) {
				expect(typeof member).toBe('string');

				count++;
			}

			expect(count).toBe(2);
		});

		test('by pattern', async () => {
			let count = 0;
			// eslint-disable-next-line no-unused-vars
			for await (const _ of redisClient.sScanIterator('test-set', { MATCH: 'member1*' })) {
				count++;
			}

			expect(count).toBe(1);
		});
	});

	describe('sorted set', () => {
		test('all', async () => {
			let count = 0;
			for await (const tuple of redisClient.zScanIterator('test-sorted-set')) {
				expect(typeof tuple).toBe('object');

				expect(tuple).toHaveProperty('value');
				expect(typeof tuple.value).toBe('string');

				expect(tuple).toHaveProperty('score');
				expect(typeof tuple.score).toBe('number');

				count++;
			}

			expect(count).toBe(2);
		});

		test('by pattern', async () => {
			let count = 0;
			// eslint-disable-next-line no-unused-vars
			for await (const _ of redisClient.zScanIterator('test-sorted-set', { MATCH: 'member1*' })) {
				count++;
			}

			expect(count).toBe(1);
		});
	});
});

describe('script', () => {
	const redisScript = redisClient.createScript('return redis.call("GET", ARGV[1])');

	test('existing key', async () => {
		const result = await redisScript.run('key1');

		expect(result).toBe('1');
	});

	test('non-existing key', async () => {
		const result = await redisScript.run('key1234');

		expect(result).toBe(null);
	});
});

function promiseWithResolvers() {
	let resolve;
	let reject;

	const promise = new Promise((...args) => {
		[ resolve, reject ] = args;
	});

	return {
		promise,
		resolve,
		reject,
	};
}
async function testPublish(value) {
	const subscribeClient = redisClient.duplicate();

	const { promise, resolve, reject } = promiseWithResolvers();

	setTimeout(
		() => {
			reject(
				new Error('timeout'),
			);
		},
		1000,
	);

	await subscribeClient.subscribe(
		'test-channel',
		(message) => {
			resolve(message);
		},
		value instanceof Buffer,
	);

	await redisClient.sendCommand(
		'PUBLISH',
		'test-channel',
		value,
	);

	const result = await promise;

	await subscribeClient.disconnect();

	return result;
}
describe('subscribe', () => {
	test('string', async () => {
		const value = 'test-message';
		const result = await testPublish(value);

		expect(result).toBe(value);
	});

	test('buffer', async () => {
		const value = Buffer.from([ 0xDE, 0xAD, 0xBE, 0xEF ]);
		const result = await testPublish(value);

		expect(
			result.toString('hex'),
		).toBe(
			value.toString('hex'),
		);
	});
});
