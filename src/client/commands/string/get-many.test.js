
/* global test, expect */

import { redisClient } from '../../../../test/create-client.js';

test('transaction', async () => {
	const { result } = await redisClient.createTransaction()
		.addCommand(
			'SET',
			'key:1',
			'foo',
		)
		.string.getMany(
			'key:1',
			'key:2',
		).as('result')
		.execute();

	expect(result).toBeInstanceOf(Object);
	expect(Object.keys(result)).toHaveLength(2);

	expect(result).toHaveProperty('key:1');
	expect(result['key:1']).toBe('foo');

	expect(result).toHaveProperty('key:2');
	expect(result['key:2']).toBeNull();
});

test('command', async () => {
	const result = await redisClient.string.getMany(
		'key:1',
		'key:2',
	);

	expect(result).toBeInstanceOf(Object);
	expect(Object.keys(result)).toHaveLength(2);

	expect(result).toHaveProperty('key:1');
	expect(result['key:1']).toBe('foo');

	expect(result).toHaveProperty('key:2');
	expect(result['key:2']).toBeNull();
});
