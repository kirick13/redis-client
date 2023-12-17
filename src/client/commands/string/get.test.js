
/* global test, expect */

import { redisClient } from '../../../../test/create-client.js';

await redisClient.sendCommand(
	'SET',
	'key',
	'foo',
);

test('existing key', async () => {
	const result = await redisClient.string.get('key');

	expect(result).toBe('foo');
});

test('non-existing key', async () => {
	const result = await redisClient.string.get('foo');

	expect(result).toBe(null);
});
