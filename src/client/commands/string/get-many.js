
/**
 * Atomically returns the string values of one or more keys.
 *
 * Complexity: O(N) where N is the number of keys to retrieve.
 *
 * @yields
 * @param {...string} keys Key name.
 * @returns {Promise<{[key: string]: string}>} Object with key-value pairs.
 */
export default function * getMany(...keys) {
	const response = yield [ 'MGET', ...keys ];

	const result = {};
	for (const [ index, value ] of keys.entries()) {
		result[value] = response[index];
	}

	return result;
}
