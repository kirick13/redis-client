
/**
 * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
 *
 * Complexity: O(1)
 *
 * @async
 * @param {string} key Key name.
 * @param {string | number | ArrayBuffer | Buffer} value Value to set.
 * @returns {Promise<"OK" | null>} "OK" if SET was executed correctly, otherwise null.
 */
export default function set(key, value) {
	return [
		'SET',
		key,
		value,
	];
}
