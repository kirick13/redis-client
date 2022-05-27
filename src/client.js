
const { createClient } = require('redis');

const COMMANDS         = require('./commands');
const RedisClientMulti = require('./multi');
const RedisScript      = require('./script');
const TRANSFORM        = require('./transform');

class RedisClient {
    constructor (client_configuration) {
        this._client_configuration = client_configuration;

        const client = this._client = createClient(client_configuration);

        client.on(
            'error',
            error => console.error('[REDIS CLIENT]', error),
        );

        client.connect();
    }

    duplicate () {
        return new RedisClient(
            this._client_configuration,
        );
    }

    sendCommand (...args) {
        return this._client.sendCommand(args);
    }

    createScript (script) {
        const scripts_cache = (this._scripts_cache ??= new Map());

        const script_hash = RedisScript.getHash(script);

        if (scripts_cache.has(script_hash) === false) {
            scripts_cache.set(
                script_hash,
                new RedisScript(
                    this,
                    script,
                ),
            );
        }

        return scripts_cache.get(script_hash);
    }
}

for (const command of COMMANDS) {
    RedisClient.prototype[command] = RedisClient.prototype[command.toUpperCase()] = async function (...args) {
        const transform = TRANSFORM[command] ?? {};

        if (typeof transform.input === 'function') {
            args = transform.input(...args) ?? args;
        }

        const response = await this._client.sendCommand([
            command,
            ...args,
        ]);

        if (typeof transform.output === 'function') {
            return transform.output(response);
        }
        else {
            return response;
        }
    };
}

RedisClient.prototype.MULTI = RedisClient.prototype.multi = function () {
    return new RedisClientMulti(this);
};

for (const method of [
    // commands
    'subscribe',
    'psubscribe',
    'unsubscribe',
    'punsubscribe',
    'publish',
    // methods
    'scanIterator',
    'hScanIterator',
    'sScanIterator',
    'zScanIterator',
]) {
    RedisClient.prototype[method] = RedisClient.prototype[method.toUpperCase()] = function (...args) {
        return this._client[method](...args);
    };
}

module.exports = RedisClient;
