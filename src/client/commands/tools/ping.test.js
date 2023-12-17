
/* global test, expect */

import { redisClient } from '../../../../test/create-client.js';

test('ping', async () => {
	const result = await redisClient.tools.ping();

	expect(result).toBe('PONG');
});
