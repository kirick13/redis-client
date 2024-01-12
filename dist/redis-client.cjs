var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.js
var main_exports = {};
__export(main_exports, {
  RedisClient: () => RedisClient
});
module.exports = __toCommonJS(main_exports);

// src/client.js
var import_redis = require("redis");

// src/utils/generators.js
var GeneratorFunction = function* () {
}.constructor;
function isGenerator(value) {
  return value?.constructor?.constructor?.name === "GeneratorFunction";
}

// src/utils/args.js
function updateArguments(command, args) {
  for (const [index, arg] of args.entries()) {
    if (typeof arg === "number" && Number.isNaN(arg) !== true) {
      args[index] = String(arg);
    } else if (Buffer.isBuffer(arg) || arg instanceof ArrayBuffer) {
      args[index] = arg;
    } else if (typeof arg !== "string") {
      throw new TypeError(
        `Argument #${index + 1} of command "${command}" must be a string, non-NaN number, ArrayBuffer or Node.JS Buffer.`
      );
    }
  }
}
function retrieveCommandArguments(fn, fn_args) {
  let command_args;
  const fn_result = fn(...fn_args);
  if (isGenerator(fn_result)) {
    command_args = fn_result.next().value;
    command_args.push(fn_result);
  } else {
    command_args = fn_result;
  }
  return command_args;
}

// src/client/commands/string/get-many.js
function* getMany(...keys) {
  const response = yield ["MGET", ...keys];
  const result = {};
  for (const [index, value] of keys.entries()) {
    result[value] = response[index];
  }
  return result;
}

// src/client/commands/string/set.js
var import_valibot = require("valibot");

// src/utils/lodash/isObjectLike.js
function isObjectLike(value) {
  return Boolean(value) && typeof value === "object";
}

// src/utils/lodash/isPlainObject.js
var objectTag = "[object Object]";
function isHostObject(value) {
  let result = false;
  if (value != null && typeof value.toString !== "function") {
    try {
      result = Boolean(String(value));
    } catch {
    }
  }
  return result;
}
function overArgument(function_, transform) {
  return function(arg) {
    return function_(transform(arg));
  };
}
var functionProto = Function.prototype;
var objectProto = Object.prototype;
var functionToString = functionProto.toString;
var { hasOwnProperty } = objectProto;
var objectCtorString = functionToString.call(Object);
var objectToString = objectProto.toString;
var getPrototype = overArgument(Object.getPrototypeOf, Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  const proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  const Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && functionToString.call(Ctor) == objectCtorString;
}

// src/client/commands/string/set.js
var optionsValidator = (0, import_valibot.object)(
  {
    existing: (0, import_valibot.optional)(
      (0, import_valibot.boolean)()
    ),
    expire: (0, import_valibot.optional)(
      (0, import_valibot.union)(
        [
          (0, import_valibot.literal)("keep"),
          (0, import_valibot.object)(
            {
              in: (0, import_valibot.number)()
            },
            (0, import_valibot.never)()
          ),
          (0, import_valibot.object)(
            {
              in_ms: (0, import_valibot.number)()
            },
            (0, import_valibot.never)()
          ),
          (0, import_valibot.object)(
            {
              at: (0, import_valibot.number)()
            },
            (0, import_valibot.never)()
          ),
          (0, import_valibot.object)(
            {
              at_ms: (0, import_valibot.number)()
            },
            (0, import_valibot.never)()
          )
        ],
        'Property "expire" must be either "keep" or an object with one of the following properties: "in", "in_ms", "at", "at_ms".'
      )
    )
  },
  (0, import_valibot.never)('Unknown property found in "options" argument. Only "existing" and "expire" are allowed.')
);
function set(key, value, options = {}) {
  options = (0, import_valibot.parse)(
    optionsValidator,
    options
  );
  const args = [
    "SET",
    key,
    value
  ];
  switch (options.existing) {
    case true:
      args.push("XX");
      break;
    case false:
      args.push("NX");
      break;
  }
  if (options.expire === "keep") {
    args.push("KEEPTTL");
  } else if (isPlainObject(options.expire)) {
    if (options.expire.in) {
      args.push(
        "EX",
        options.expire.in
      );
    } else if (options.expire.in_ms) {
      args.push(
        "PX",
        options.expire.in_ms
      );
    } else if (options.expire.at) {
      args.push(
        "EXAT",
        options.expire.at
      );
    } else if (options.expire.at_ms) {
      args.push(
        "PXAT",
        options.expire.at_ms
      );
    }
  }
  return args;
}

// src/client/commands/string/get.js
function get(key) {
  return [
    "GET",
    key
  ];
}

// src/client/commands/string.js
var RedisClientStringCommands = class {
  #redisClient;
  /**
   * @param {RedisClient} redisClient -
   */
  constructor(redisClient) {
    this.#redisClient = redisClient;
  }
  #execute(fn, fn_args = []) {
    return this.#redisClient.sendCommand(
      ...retrieveCommandArguments(fn, fn_args)
    );
  }
  /**
   * Atomically returns the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to retrieve.
   *
   * @param {...string} keys Key name.
   * @returns {Promise<{[key: string]: string}>} Object with key-value pairs.
   */
  getMany(...keys) {
    return this.#execute(getMany, [...keys]);
  }
  /**
   */
  /**
   * @typedef StringSetOptions
   * @property {boolean} [existing] If `true`, SET will only succeed if the key already exists (`XX` argument). If `false`, SET will only succeed if the key does not already exist (`NX` argument).
   * @property {"keep" | StringSetOptionsExpire} [expire] -
   */
  /**
   * @typedef StringSetOptionsExpire
   * @property {number} [in] Set the specified expire time in seconds.
   * @property {number} [in_ms] Set the specified expire time in milliseconds.
   * @property {number} [at] Set the specified Unix timestamp in seconds.
   * @property {number} [at_ms] Set the specified Unix timestamp in milliseconds.
   */
  /**
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * @async
   * @param {string} key Key name.
   * @param {RedisCommandArgument} value Value to set.
   * @param {StringSetOptions} [options] -
   * @returns {Promise<"OK" | null>} "OK" if SET was executed correctly, otherwise null.
   */
  set(key, value, options) {
    return this.#execute(set, [key, value, options]);
  }
  /**
   * Returns the string value of a key.
   *
   * Complexity: O(1)
   *
   * @async
   * @param {string} key Key name.
   * @returns {Promise<string | null>} Value of the key, or null when key does not exist.
   */
  get(key) {
    return this.#execute(get, [key]);
  }
};

// src/client/commands/tools/ping.js
function ping() {
  return ["PING"];
}

// src/client/commands/tools.js
var RedisClientToolsCommands = class {
  #redisClient;
  /**
   * @param {RedisClient} redisClient -
   */
  constructor(redisClient) {
    this.#redisClient = redisClient;
  }
  #execute(fn, fn_args = []) {
    return this.#redisClient.sendCommand(
      ...retrieveCommandArguments(fn, fn_args)
    );
  }
  /**
   * Returns the server's liveliness response.
   *
   * Complexity: O(1)
   *
   * @async
   * @returns {Promise<"PONG">} Response from the Redis server.
   */
  ping() {
    return this.#execute(ping);
  }
};

// src/client/lru.js
var RedisClientLru = class {
  #redisClient;
  #key;
  #epoch_length;
  #epoch_count;
  #redisScriptGet;
  /**
   * @param {import("../client.js").RedisClient} redisClient RedisClient instance.
   * @param {object} options -
   * @param {string} options.key Key name.
   * @param {number} options.epoch_length Epoch length in milliseconds.
   * @param {number} [options.epoch_count] Number of epochs to keep. Default: 10.
   */
  constructor(redisClient, {
    key,
    epoch_length,
    epoch_count = 10
  }) {
    this.#redisClient = redisClient;
    this.#key = key;
    this.#epoch_length = epoch_length;
    this.#epoch_count = epoch_count;
    this.#redisScriptGet = redisClient.createScript(`
			local key = ARGV[1]
			local epoch_id_now = tonumber(ARGV[2])
			local epoch_length = tonumber(ARGV[3])
			local epoch_count = tonumber(ARGV[4])

			local fields = {}
			local response = {}
			for i = 5, #ARGV do
				table.insert(fields, ARGV[i])
				table.insert(response, false)
			end

			local epoch_id = epoch_id_now
			local hmset_args = {}

			-- query epochs in reverse order
			-- until we get all requested fields or reach the end of the cache
			while #fields > 0 and epoch_id > epoch_id_now - epoch_count do
				local key_epoch = key .. ':' .. epoch_id
				local hdel_args = {}
				local rdata = redis.call('HMGET', key_epoch, unpack(fields))
				for i = 1, #rdata do
					if rdata[i] ~= false then
						-- if we got that data from older epoch
						if epoch_id < epoch_id_now then
							-- transfer data to current epoch
							table.insert(hmset_args, fields[i])
							table.insert(hmset_args, rdata[i])
							-- remove data from this not-current-epoch
							table.insert(hdel_args, fields[i])
						end

						response[i] = rdata[i]
						fields[i] = nil
					end
				end

				-- remove fields that we got from this not-current-epoch
				if #hdel_args > 0 then
					redis.call('HDEL', key_epoch, unpack(hdel_args))
				end

				epoch_id = epoch_id - 1
			end

			-- if we have data to trasnfer to current epoch
			if #hmset_args > 0 then
				local key_epoch = key .. ':' .. epoch_id_now
				redis.call('HMSET', key_epoch, unpack(hmset_args))
				redis.call('PEXPIREAT', key_epoch, (epoch_id_now + epoch_count) * epoch_length)
			end

			return response
		`);
  }
  #getEpoch() {
    return Math.floor(
      Date.now() / this.#epoch_length
    );
  }
  /**
   * Sets value for the specified field.
   * @param {string} field Field name.
   * @param {RedisCommandArgument} value Field value.
   * @returns {Promise<void>} -
   */
  set(field, value) {
    return this.mset({
      [field]: value
    });
  }
  /**
   * Sets multiple field-value pairs.
   * @param {{ [key: string]: RedisCommandArgument }} object Object with field-value pairs.
   * @returns {Promise<void>} -
   */
  async mset(object2) {
    const epoch = this.#getEpoch();
    const redisTransaction = this.#redisClient.createTransaction();
    redisTransaction.addCommand(
      "HMSET",
      `${this.#key}:${epoch}`,
      ...Object.entries(object2).flat()
    );
    redisTransaction.addCommand(
      "PEXPIREAT",
      `${this.#key}:${epoch}`,
      (epoch + this.#epoch_count) * this.#epoch_length
    );
    for (let epoch_old = epoch - 1; epoch_old > epoch - this.#epoch_count; epoch_old--) {
      redisTransaction.addCommand(
        "HDEL",
        `${this.#key}:${epoch_old}`,
        ...Object.keys(object2)
      );
    }
    await redisTransaction.execute();
  }
  async #rawGet(fields, single_value) {
    const result = await this.#redisScriptGet.run(
      this.#key,
      this.#getEpoch(),
      this.#epoch_length,
      this.#epoch_count,
      ...fields
    );
    if (single_value === true) {
      return result[0];
    }
    const response = {};
    for (let index = 0; index < fields.length; index++) {
      response[fields[index]] = result[index];
    }
    return response;
  }
  /**
   * Returns value for the specified field.
   * @param {string} field Field name.
   * @returns {Promise<string | null>} Field value. `null` if field does not exist.
   */
  get(field) {
    return this.#rawGet(
      [field],
      true
    );
  }
  /**
   * Returns values for the specified fields.
   * @param {...string} fields Field names.
   * @returns {Promise<{ [ key: string ]: string | null }>} Object with field-value pairs.
   */
  mget(...fields) {
    return this.#rawGet(
      fields,
      false
    );
  }
  del(...fields) {
    const epoch_start = this.#getEpoch();
    const redisTransaction = this.#redisClient.createTransaction();
    for (let epoch = epoch_start; epoch > epoch_start - this.#epoch_count; epoch--) {
      redisTransaction.addCommand(
        "HDEL",
        `${this.#key}:${epoch}`,
        ...fields
      );
    }
    return redisTransaction.execute();
  }
};

// src/client/transaction/string.js
var RedisClientTransactionStringCommands = class {
  #redisClientTransaction;
  /**
   * @param {RedisClientTransaction} redisClientTransaction -
   */
  constructor(redisClientTransaction) {
    this.#redisClientTransaction = redisClientTransaction;
  }
  #execute(fn, fn_args = []) {
    return this.#redisClientTransaction.addCommand(
      ...retrieveCommandArguments(fn, fn_args)
    );
  }
  /**
   * Atomically returns the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to retrieve.
   *
   * @param {...string} keys Key name.
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  getMany(...keys) {
    return this.#execute(getMany, [...keys]);
  }
  /**
   */
  /**
   * @typedef StringSetOptions
   * @property {boolean} [existing] If `true`, SET will only succeed if the key already exists (`XX` argument). If `false`, SET will only succeed if the key does not already exist (`NX` argument).
   * @property {"keep" | StringSetOptionsExpire} [expire] -
   */
  /**
   * @typedef StringSetOptionsExpire
   * @property {number} [in] Set the specified expire time in seconds.
   * @property {number} [in_ms] Set the specified expire time in milliseconds.
   * @property {number} [at] Set the specified Unix timestamp in seconds.
   * @property {number} [at_ms] Set the specified Unix timestamp in milliseconds.
   */
  /**
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * @param {string} key Key name.
   * @param {RedisCommandArgument} value Value to set.
   * @param {StringSetOptions} [options] -
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  set(key, value, options) {
    return this.#execute(set, [key, value, options]);
  }
  /**
   * Returns the string value of a key.
   *
   * Complexity: O(1)
   *
   * @param {string} key Key name.
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  get(key) {
    return this.#execute(get, [key]);
  }
};

// src/client/transaction/tools.js
var RedisClientTransactionToolsCommands = class {
  #redisClientTransaction;
  /**
   * @param {RedisClientTransaction} redisClientTransaction -
   */
  constructor(redisClientTransaction) {
    this.#redisClientTransaction = redisClientTransaction;
  }
  #execute(fn, fn_args = []) {
    return this.#redisClientTransaction.addCommand(
      ...retrieveCommandArguments(fn, fn_args)
    );
  }
  /**
   * Returns the server's liveliness response.
   *
   * Complexity: O(1)
   *
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  ping() {
    return this.#execute(ping);
  }
};

// src/client/transaction.js
var RedisClientTransaction = class {
  #rawClientMulti;
  #generators = [];
  #queue_length = 0;
  #custom_names = null;
  /**
   * @param {RedisClient} redisClient RedisClient instance.
   */
  constructor(redisClient) {
    this.#rawClientMulti = redisClient.rawClient.MULTI();
  }
  get queue_length() {
    return this.#queue_length;
  }
  /**
   * Adds command to the transaction.
   * @param {string} command Command name.
   * @param {...RedisCommandArgument} args Command arguments.
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  addCommand(command, ...args) {
    {
      const arg_last = args.at(-1);
      if (arg_last instanceof Object && isGenerator(arg_last)) {
        this.#generators.push([
          this.#queue_length,
          args.pop()
        ]);
      }
    }
    updateArguments(command, args);
    this.#rawClientMulti.addCommand([
      command,
      ...args
    ]);
    this.#queue_length++;
    return this;
  }
  /**
   * Collection of tools commands.
   * @type {RedisClientTransactionToolsCommands}
   */
  tools = new RedisClientTransactionToolsCommands(this);
  /**
   * Collection of string commands.
   * @type {RedisClientTransactionStringCommands}
   */
  string = new RedisClientTransactionStringCommands(this);
  /**
   * Sets custom name for the command result. From now on, EXEC() will return an object contains only named results.
   * @param {*} field_name -
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  as(field_name) {
    this.#custom_names ??= {};
    this.#custom_names[field_name] = this.#queue_length - 1;
    return this;
  }
  /**
   * Sends transaction to the Redis server and returns response.
   * @async
   * @returns {Array | { [key: string]: any }} Array, if no custom names were set, otherwise Object.
   */
  async execute() {
    const result = await this.#rawClientMulti.EXEC();
    for (const [index, generator] of this.#generators) {
      result[index] = generator.next(
        result[index]
      ).value;
    }
    const names = this.#custom_names;
    if (names) {
      for (const key of Object.keys(names)) {
        const index = names[key];
        names[key] = result[index];
      }
      return names;
    }
    return result;
  }
};

// src/client/script.js
var import_node_crypto = require("node:crypto");
function getScriptHash(script) {
  return (0, import_node_crypto.createHash)("sha1").update(script).digest("hex");
}
var RedisScript = class {
  #redisClient;
  #script;
  #script_sha1;
  /**
   * @param {RedisClient} redisClient RedisClient instance.
   * @param {string} script Lua script to upload.
   */
  constructor(redisClient, script) {
    this.#redisClient = redisClient;
    this.#script = script;
    this.#script_sha1 = getScriptHash(script);
  }
  /**
   * Runs the script.
   * @param {(string | number)[]} args Script arguments.
   * @returns {any} Script result.
   */
  async run(...args) {
    updateArguments("EVALSHA", args);
    try {
      return await this.#redisClient.sendCommand(
        "EVALSHA",
        this.#script_sha1,
        0,
        ...args
      );
    } catch (error) {
      if (error.toString().includes("NOSCRIPT")) {
        await this.#loadScript();
        return this.run(...args);
      }
      throw error;
    }
  }
  async #loadScript() {
    this.#script_sha1 = await this.#redisClient.sendCommand(
      "SCRIPT",
      "LOAD",
      this.#script
    );
  }
};

// src/client.js
var RedisClient = class _RedisClient {
  #options;
  #rawClient;
  constructor(options) {
    this.#options = options;
    this.#rawClient = (0, import_redis.createClient)(options);
    this.#rawClient.on(
      "error",
      (error) => console.error("[@kirick/redis-client]", error)
    );
    this.#rawClient.connect();
  }
  get rawClient() {
    return this.#rawClient;
  }
  /**
   * Duplicates client with the same options as the current client.
   * @returns {RedisClient} New RedisClient instance.
   */
  duplicate() {
    return new _RedisClient(
      this.#options
    );
  }
  /**
   * Sends raw command to the Redis server and returns raw response.
   * @async
   * @param {string} command Command name.
   * @param {...any} args Command arguments.
   * @returns {Promise<any>} Response from the Redis server.
   */
  async sendCommand(command, ...args) {
    let generator;
    {
      const arg_last = args.at(-1);
      if (arg_last instanceof Object && isGenerator(arg_last)) {
        generator = args.pop();
      }
    }
    updateArguments(command, args);
    let result = await this.#rawClient.sendCommand([
      command,
      ...args
    ]);
    if (generator !== void 0) {
      result = generator.next(result).value;
    }
    return result;
  }
  /**
   * Collection of tools commands.
   * @type {RedisClientToolsCommands}
   */
  tools = new RedisClientToolsCommands(this);
  /**
   * Collection of string commands.
   * @type {RedisClientStringCommands}
   */
  string = new RedisClientStringCommands(this);
  /**
   * Creates new MULTI transaction locally, without sending any commands to the Redis server.
   *
   * Transaction will be sent to the Redis server when execute() method will be called.
   *
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  createTransaction() {
    return new RedisClientTransaction(this);
  }
  #scripts_cache = /* @__PURE__ */ new Map();
  /**
   * Creates a script to be executed using the EVALSHA commands.
   * @param {string} script Lua script to upload.
   * @returns {RedisScript} RedisScript instance.
   */
  createScript(script) {
    const script_hash = getScriptHash(script);
    if (this.#scripts_cache.has(script_hash) === false) {
      this.#scripts_cache.set(
        script_hash,
        new RedisScript(
          this,
          script
        )
      );
    }
    return this.#scripts_cache.get(script_hash);
  }
  #lru_cache = /* @__PURE__ */ new Map();
  /**
   * @param {object} options -
   * @param {string} options.key Key name.
   * @param {number} options.epoch_length Epoch length in milliseconds.
   * @param {number} [options.epoch_count] Number of epochs to keep. Default: 10.
   * @returns {RedisClientLru} -
   */
  createLru(options) {
    const { key } = options;
    if (this.#lru_cache.has(key) === false) {
      this.#lru_cache.set(
        key,
        new RedisClientLru(
          this,
          options
        )
      );
    }
    return this.#lru_cache.get(key);
  }
  /**
   * @callback RedisClientSubscribeCallback
   * @param {string | Buffer} message Message received.
   * @returns {void}
   */
  /**
   * Subscribes to the channel.
   * @param {string} channel Channel name.
   * @param {RedisClientSubscribeCallback} callback Callback function.
   * @param {boolean} is_buffer Whether to receive messages as Buffers.
   * @returns {Promise<void>} Promise that resolves when subscription is complete.
   */
  subscribe(channel, callback, is_buffer) {
    return this.#rawClient.subscribe(
      channel,
      callback,
      is_buffer
    );
  }
  /**
   * Subscribes to the channel.
   * @param {string} channel Channel name.
   * @param {RedisClientSubscribeCallback} callback Callback function.
   * @param {boolean} is_buffer Whether to receive messages as Buffers.
   * @returns {Promise<void>} Promise that resolves when subscription is complete.
   */
  psubscribe(channel, callback, is_buffer) {
    return this.#rawClient.psubscribe(
      channel,
      callback,
      is_buffer
    );
  }
  /**
   * Unsubscribes from the channel or channels.
   * @param {string | string[]} channel Channel name.
   * @param {RedisClientSubscribeCallback?} callback Callback function.
   * @returns {Promise<void>} Promise that resolves when unsubscription is complete.
   */
  unsubscribe(channel, callback) {
    return this.#rawClient.unsubscribe(
      channel,
      callback
    );
  }
  /**
   * Unsubscribes from the channel or channels.
   * @param {string | string[]} channel Channel name.
   * @param {RedisClientSubscribeCallback?} callback Callback function.
   * @returns {Promise<void>} Promise that resolves when unsubscription is complete.
   */
  punsubscribe(channel, callback) {
    return this.#rawClient.unsubscribe(
      channel,
      callback
    );
  }
  /* eslint-disable jsdoc/no-undefined-types */
  /**
   * @typedef {object} ScanOptions
   * @property {string?} TYPE Type of keys to return.
   * @property {string?} MATCH Pattern to match keys.
   * @property {number?} COUNT Number of keys to return per iteration.
   */
  /**
   * Asynchronously iterates over keys in the database.
   * @param {ScanOptions?} options -
   * @returns {AsyncIterator<string>} Async iterator with key names.
   */
  scanIterator(options) {
    return this.#rawClient.scanIterator(options);
  }
  /**
   * @typedef {object} ScanTypedOptions
   * @property {string?} MATCH Pattern to match keys.
   * @property {number?} COUNT Number of keys to return per iteration.
   */
  /**
   * Asynchronously iterates over keys in the hash.
   * @param {string} key Key containing hash.
   * @param {ScanTypedOptions?} options -
   * @returns {AsyncIterator<{ field: string, value: string }>} Async iterator with field names and values.
   */
  hScanIterator(key, options) {
    return this.#rawClient.hScanIterator(key, options);
  }
  /**
   * Asynchronously iterates over keys in the set.
   * @param {string} key Key containing set.
   * @param {ScanTypedOptions?} options -
   * @returns {AsyncIterator<string>} Async iterator with members.
   */
  sScanIterator(key, options) {
    return this.#rawClient.sScanIterator(key, options);
  }
  /**
   * Asynchronously iterates over keys in the sorted set.
   * @param {string} key Key containing sorted set.
   * @param {ScanTypedOptions?} options -
   * @returns {AsyncIterator<{ value: string, score: number }>} Async iterator with members and scores.
   */
  zScanIterator(key, options) {
    return this.#rawClient.zScanIterator(key, options);
  }
  /* eslint-enable jsdoc/no-undefined-types */
  /**
   * Disconnects from the Redis server.
   * @async
   * @returns {Promise<void>} Promise that resolves when client is disconnected.
   */
  async disconnect() {
    return this.#rawClient.disconnect();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RedisClient
});
