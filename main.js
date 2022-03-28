
const RedisClient = require('./src/client');

exports.createClient = (options) => new RedisClient(options);
