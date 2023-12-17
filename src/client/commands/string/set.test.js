
/* global describe, test, expect */

import { redisClient } from '../../../../test/create-client.js';

test('transaction', async () => {
	const { result } = await redisClient.createTransaction()
		.string.set('key', 'foo').as('result')
		.execute();

	expect(result).toBe('OK');
});

describe('command', () => {
	test('success', async () => {
		const result = await redisClient.string.set('key', 'foo');

		expect(result).toBe('OK');
	});
});

// describe('fail', () => {
// 	test.todo('key already exists', async () => {
// 		const result = await redisClient.string.get('foo');

// 		expect(result).toBe(null);
// 	});

// 	test.todo('key not exists', async () => {
// 		const result = await redisClient.string.get('foo');

// 		expect(result).toBe(null);
// 	});
// });
