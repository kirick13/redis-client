
/**
 * Returns the server's liveliness response.
 *
 * Complexity: O(1)
 *
 * @async
 * @returns {Promise<"PONG">} Response from the Redis server.
 */
export default function ping() {
	return [ 'PING' ];
}
