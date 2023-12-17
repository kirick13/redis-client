
import { RedisClient } from '../src/client.js';

export const redisClient = new RedisClient({
	socket: {
		host: 'localhost',
		port: 49145,
	},
});

await redisClient.sendCommand('FLUSHDB');
