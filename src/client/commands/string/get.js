
/**
 * Returns the string value of a key.
 *
 * Complexity: O(1)
 *
 * @async
 * @param {string} key Key name.
 * @returns {Promise<string | null>} Value of the key, or null when key does not exist.
 */
export default function get(key) {
	return [
		'GET',
		key,
	];
}
