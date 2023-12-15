
import { RedisClient } from './client.js';

export function createClient(options) {
	return new RedisClient(options);
}
