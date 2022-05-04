
const { mapToHashBulk,
        objectToHashBulk,
        hashBulkToObject } = require('./tools');

// strings

exports.incrbyfloat = {
    output: (response) => Number.parseFloat(response),
};

// hashes

exports.hgetall = {
    output: (response) => hashBulkToObject(response),
};

exports.hincrbyfloat = exports.incrbyfloat;

exports.hmset = {
    input: (key, source, ...args) => {
        if (args.length === 0) {
            if (source instanceof Map) {
                return [
                    key,
                    ...mapToHashBulk(source),
                ];
            }

            if (typeof source === 'object' && null !== source) {
                return [
                    key,
                    ...objectToHashBulk(source),
                ];
            }
        }
    },
};

exports.hset = exports.hmset;

// set

exports.sismember = {
    output: (response) => 1 === response,
};
exports.smismember = {
    output: (response) => response.map(a => 1 === a),
};
