
exports.objectToHashBulk = (object) => {
    const hash_bulk = [];
    for (const [ key, value ] of Object.entries(object)) {
        hash_bulk.push(key, value);
    }
    return hash_bulk;
};

exports.mapToHashBulk = (map) => {
    const hash_bulk = [];
    for (const [ key, value ] of map.entries()) {
        hash_bulk.push(key, value);
    }
    return hash_bulk;
};

exports.hashBulkToObject = (hash_bulk) => {
    const object = {};
    for (let i = 0; i < hash_bulk.length; i += 2) {
        object[hash_bulk[i]] = hash_bulk[i + 1];
    }
    return object;
};
