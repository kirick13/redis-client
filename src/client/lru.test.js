
/* global describe, test, expect */
/* eslint-disable jsdoc/require-jsdoc */

import { redisClient } from '../../test/create-client.js';

const redisClientLru = redisClient.createLru({
	key: 'test:lru',
	epoch_length: 1000,
	epoch_count: 3,
});

function asyncTimeout(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function getEpoch() {
	return Math.floor(Date.now() / 1000);
}

const epoch_start = getEpoch();

describe('set', () => {
	test('"foo"', async () => {
		await redisClientLru.set('foo', 'bar');

		expect(
			await redisClient.sendCommand(
				'HGET',
				`test:lru:${epoch_start}`,
				'foo',
			),
		).toBe('bar');
	});

	test('"foo", but in the next epoch', async () => {
		await asyncTimeout(1000);

		await redisClientLru.set('foo', 'baz');

		expect(
			await redisClient.sendCommand(
				'HGET',
				`test:lru:${epoch_start + 1}`,
				'foo',
			),
		).toBe('baz');

		expect(
			await redisClient.sendCommand(
				'HGET',
				`test:lru:${epoch_start}`,
				'foo',
			),
		).toBe(null);
	});
});

describe('get / mget', () => {
	test('"foo"', async () => {
		expect(
			await redisClientLru.get('foo'),
		).toBe('baz');
	});

	test('"foo", but in the next epoch', async () => {
		await asyncTimeout(1000);

		expect(
			await redisClientLru.get('foo'),
		).toBe('baz');

		expect(
			await redisClient.sendCommand(
				'HGET',
				`test:lru:${epoch_start + 2}`,
				'foo',
			),
		).toBe('baz');

		expect(
			await redisClient.sendCommand(
				'HGET',
				`test:lru:${epoch_start + 1}`,
				'foo',
			),
		).toBe(null);

		expect(
			await redisClient.sendCommand(
				'HGET',
				`test:lru:${epoch_start}`,
				'foo',
			),
		).toBe(null);
	});

	test('non-existing key and "foo"', async () => {
		expect(
			await redisClientLru.mget(
				'hello',
				'foo',
			),
		).toStrictEqual({
			hello: null,
			foo: 'baz',
		});
	});

	test('"foo", but it expired', async () => {
		await asyncTimeout(3000);

		expect(
			await redisClientLru.get('foo'),
		).toBe(null);

		expect(
			await redisClient.sendCommand(
				'EXISTS',
				`test:lru:${epoch_start + 2}`,
				`test:lru:${epoch_start + 1}`,
				`test:lru:${epoch_start}`,
			),
		).toBe(0);
	});
});

describe('del', () => {
	test('"foo"', async () => {
		const epoch = getEpoch();

		await redisClientLru.mset({
			foo: 'new',
			hello: 'world',
		});

		expect(
			await redisClient.sendCommand(
				'HMGET',
				`test:lru:${epoch}`,
				'foo',
				'hello',
			),
		).toStrictEqual([
			'new',
			'world',
		]);

		await redisClientLru.del('foo', 'hello');

		expect(
			await redisClient.sendCommand(
				'HMGET',
				`test:lru:${epoch}`,
				'foo',
				'hello',
			),
		).toStrictEqual([
			null,
			null,
		]);
	});
});
