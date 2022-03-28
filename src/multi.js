
const COMMANDS = require('./commands');

const RedisClientMulti = function (redisClient) {
    this._multi = redisClient._client.multi();
    this.queue_length = 0;

    this._names = null;
};

for (const command of COMMANDS) {
    RedisClientMulti.prototype[command] = RedisClientMulti.prototype[command.toUpperCase()] = function (...args) {
        this._multi.addCommand([
            command,
            ...args,
        ]);
        this.queue_length++;

        return this;
    };
}

RedisClientMulti.prototype.EXEC = RedisClientMulti.prototype.exec = async function () {
    const result = await this._multi.EXEC();

    const names = this._names;
    if (names) {
        for (const key of Object.keys(names)) {
            const index = names[key];
            names[key] = result[index];
        }

        return names;
    }
    else {
        return result;
    }
};

RedisClientMulti.prototype.as = function (field_name) {
    this._names ??= {};
    this._names[field_name] = this.queue_length - 1;

    return this;
};

module.exports = RedisClientMulti;
