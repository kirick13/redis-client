
function toHashBulk(iterable) {
	const hash_bulk = [];

	for (const [ key, value ] of iterable) {
		hash_bulk.push(key, value);
	}

	return hash_bulk;
}

export function objectToHashBulk(object) {
	return toHashBulk(
		Object.entries(object),
	);
}

export function mapToHashBulk(map) {
	return toHashBulk(map.entries());
}

export function hashBulkToObject(hash_bulk) {
	const object = {};

	for (
		let index = 0;
		index < hash_bulk.length;
		index += 2
	) {
		object[hash_bulk[index]] = hash_bulk[index + 1];
	}

	return object;
}
