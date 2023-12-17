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
function set(key, value) {
  return [
    "SET",
    key,
    value
  ];
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
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * @async
   * @param {string} key Key name.
   * @param {string | number | ArrayBuffer | Buffer} value Value to set.
   * @returns {Promise<"OK" | null>} "OK" if SET was executed correctly, otherwise null.
   */
  set(key, value) {
    return this.#execute(set, [key, value]);
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
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * @param {string} key Key name.
   * @param {string | number | ArrayBuffer | Buffer} value Value to set.
   * @returns {RedisClientTransaction} RedisClientTransaction instance.
   */
  set(key, value) {
    return this.#execute(set, [key, value]);
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
  #redis_client_multi;
  #generators = [];
  #queue_length = 0;
  #custom_names = null;
  /**
   * @param {RedisClient} redisClient RedisClient instance.
   */
  constructor(redisClient) {
    this.#redis_client_multi = redisClient.redis_client.MULTI();
  }
  get queue_length() {
    return this.#queue_length;
  }
  /**
   * Adds command to the transaction.
   * @param {string} command Command name.
   * @param {...(string | number | ArrayBuffer | Buffer)} args Command arguments.
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
    this.#redis_client_multi.addCommand([
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
    const result = await this.#redis_client_multi.EXEC();
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
  #redis_client;
  #scripts_cache = /* @__PURE__ */ new Map();
  constructor(options) {
    this.#options = options;
    this.#redis_client = (0, import_redis.createClient)(options);
    this.#redis_client.on(
      "error",
      (error) => console.error("[@kirick/redis-client]", error)
    );
    this.#redis_client.connect();
  }
  get redis_client() {
    return this.#redis_client;
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
    let result = await this.#redis_client.sendCommand([
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
    return this.redis_client.subscribe(
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
    return this.redis_client.psubscribe(
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
    return this.redis_client.unsubscribe(
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
    return this.redis_client.unsubscribe(
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
    return this.#redis_client.scanIterator(options);
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
    return this.#redis_client.hScanIterator(key, options);
  }
  /**
   * Asynchronously iterates over keys in the set.
   * @param {string} key Key containing set.
   * @param {ScanTypedOptions?} options -
   * @returns {AsyncIterator<string>} Async iterator with members.
   */
  sScanIterator(key, options) {
    return this.#redis_client.sScanIterator(key, options);
  }
  /**
   * Asynchronously iterates over keys in the sorted set.
   * @param {string} key Key containing sorted set.
   * @param {ScanTypedOptions?} options -
   * @returns {AsyncIterator<{ value: string, score: number }>} Async iterator with members and scores.
   */
  zScanIterator(key, options) {
    return this.#redis_client.zScanIterator(key, options);
  }
  /* eslint-enable jsdoc/no-undefined-types */
  /**
   * Disconnects from the Redis server.
   * @async
   * @returns {Promise<void>} Promise that resolves when client is disconnected.
   */
  async disconnect() {
    return this.#redis_client.disconnect();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RedisClient
});
