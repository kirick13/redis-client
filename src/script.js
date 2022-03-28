
const { createHash } = require('crypto');

class RedisScript {
    constructor (redisClient, script) {
        this._redisClient = redisClient;

        this.script = script;
        this.script_sha1 = createHash('sha1').update(script).digest('hex');
    }

    async run (...args) {
        try {
            return await this._redisClient.EVALSHA(
                this.script_sha1,
                0,
                ...args,
            );
        }
        catch (error) {
            if (error.toString().includes('ReplyError: NOSCRIPT')) {
                await this._loadScript();

                return this.run();
            }
            else {
                throw error;
            }
        }
    }

    async _loadScript () {
        this.script_sha1 = await this._redisClient.SCRIPT('load', this.script);
    }
}

module.exports = RedisScript;
