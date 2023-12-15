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
  createClient: () => createClient2
});
module.exports = __toCommonJS(main_exports);

// src/client.js
var import_redis = require("redis");

// src/client/commands.js
var RedisClientCommands = class {
  #processCommand;
  constructor(processCommand) {
    this.#processCommand = processCommand;
  }
  /**
   * A container for Access List Control commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 6.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ACL(...args) {
    return this.#processCommand("ACL", ...args);
  }
  /**
   * A container for Access List Control commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 6.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  acl(...args) {
    return this.#processCommand("acl", ...args);
  }
  /**
   * Appends a string to the value of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  APPEND(...args) {
    return this.#processCommand("APPEND", ...args);
  }
  /**
   * Appends a string to the value of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  append(...args) {
    return this.#processCommand("append", ...args);
  }
  /**
   * Signals that a cluster client is following an -ASK redirect.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ASKING(...args) {
    return this.#processCommand("ASKING", ...args);
  }
  /**
   * Signals that a cluster client is following an -ASK redirect.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  asking(...args) {
    return this.#processCommand("asking", ...args);
  }
  /**
   * Authenticates the connection.
   *
   * Complexity: O(N) where N is the number of passwords defined for the user
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  AUTH(...args) {
    return this.#processCommand("AUTH", ...args);
  }
  /**
   * Authenticates the connection.
   *
   * Complexity: O(N) where N is the number of passwords defined for the user
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  auth(...args) {
    return this.#processCommand("auth", ...args);
  }
  /**
   * Asynchronously rewrites the append-only file to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BGREWRITEAOF(...args) {
    return this.#processCommand("BGREWRITEAOF", ...args);
  }
  /**
   * Asynchronously rewrites the append-only file to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bgrewriteaof(...args) {
    return this.#processCommand("bgrewriteaof", ...args);
  }
  /**
   * Asynchronously saves the database(s) to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BGSAVE(...args) {
    return this.#processCommand("BGSAVE", ...args);
  }
  /**
   * Asynchronously saves the database(s) to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bgsave(...args) {
    return this.#processCommand("bgsave", ...args);
  }
  /**
   * Counts the number of set bits (population counting) in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BITCOUNT(...args) {
    return this.#processCommand("BITCOUNT", ...args);
  }
  /**
   * Counts the number of set bits (population counting) in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bitcount(...args) {
    return this.#processCommand("bitcount", ...args);
  }
  /**
   * Performs arbitrary bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BITFIELD(...args) {
    return this.#processCommand("BITFIELD", ...args);
  }
  /**
   * Performs arbitrary bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bitfield(...args) {
    return this.#processCommand("bitfield", ...args);
  }
  /**
   * Performs arbitrary read-only bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 6.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BITFIELD_RO(...args) {
    return this.#processCommand("BITFIELD_RO", ...args);
  }
  /**
   * Performs arbitrary read-only bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 6.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bitfield_ro(...args) {
    return this.#processCommand("bitfield_ro", ...args);
  }
  /**
   * Performs bitwise operations on multiple strings, and stores the result.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BITOP(...args) {
    return this.#processCommand("BITOP", ...args);
  }
  /**
   * Performs bitwise operations on multiple strings, and stores the result.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bitop(...args) {
    return this.#processCommand("bitop", ...args);
  }
  /**
   * Finds the first set (1) or clear (0) bit in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.8.7
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BITPOS(...args) {
    return this.#processCommand("BITPOS", ...args);
  }
  /**
   * Finds the first set (1) or clear (0) bit in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.8.7
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bitpos(...args) {
    return this.#processCommand("bitpos", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Blocks until an element is available otherwise. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BLMOVE(...args) {
    return this.#processCommand("BLMOVE", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Blocks until an element is available otherwise. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  blmove(...args) {
    return this.#processCommand("blmove", ...args);
  }
  /**
   * Pops the first element from one of multiple lists. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BLMPOP(...args) {
    return this.#processCommand("BLMPOP", ...args);
  }
  /**
   * Pops the first element from one of multiple lists. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  blmpop(...args) {
    return this.#processCommand("blmpop", ...args);
  }
  /**
   * Removes and returns the first element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BLPOP(...args) {
    return this.#processCommand("BLPOP", ...args);
  }
  /**
   * Removes and returns the first element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  blpop(...args) {
    return this.#processCommand("blpop", ...args);
  }
  /**
   * Removes and returns the last element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BRPOP(...args) {
    return this.#processCommand("BRPOP", ...args);
  }
  /**
   * Removes and returns the last element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  brpop(...args) {
    return this.#processCommand("brpop", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Block until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BRPOPLPUSH(...args) {
    return this.#processCommand("BRPOPLPUSH", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Block until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  brpoplpush(...args) {
    return this.#processCommand("brpoplpush", ...args);
  }
  /**
   * Removes and returns a member by score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BZMPOP(...args) {
    return this.#processCommand("BZMPOP", ...args);
  }
  /**
   * Removes and returns a member by score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bzmpop(...args) {
    return this.#processCommand("bzmpop", ...args);
  }
  /**
   * Removes and returns the member with the highest score from one or more sorted sets. Blocks until a member available otherwise.  Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BZPOPMAX(...args) {
    return this.#processCommand("BZPOPMAX", ...args);
  }
  /**
   * Removes and returns the member with the highest score from one or more sorted sets. Blocks until a member available otherwise.  Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bzpopmax(...args) {
    return this.#processCommand("bzpopmax", ...args);
  }
  /**
   * Removes and returns the member with the lowest score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  BZPOPMIN(...args) {
    return this.#processCommand("BZPOPMIN", ...args);
  }
  /**
   * Removes and returns the member with the lowest score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  bzpopmin(...args) {
    return this.#processCommand("bzpopmin", ...args);
  }
  /**
   * A container for client connection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.4.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  CLIENT(...args) {
    return this.#processCommand("CLIENT", ...args);
  }
  /**
   * A container for client connection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.4.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  client(...args) {
    return this.#processCommand("client", ...args);
  }
  /**
   * A container for Redis Cluster commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  CLUSTER(...args) {
    return this.#processCommand("CLUSTER", ...args);
  }
  /**
   * A container for Redis Cluster commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  cluster(...args) {
    return this.#processCommand("cluster", ...args);
  }
  /**
   * Returns detailed information about all commands.
   *
   * Complexity: O(N) where N is the total number of Redis commands
   *
   * Available since 2.8.13
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  COMMAND(...args) {
    return this.#processCommand("COMMAND", ...args);
  }
  /**
   * Returns detailed information about all commands.
   *
   * Complexity: O(N) where N is the total number of Redis commands
   *
   * Available since 2.8.13
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  command(...args) {
    return this.#processCommand("command", ...args);
  }
  /**
   * A container for server configuration commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  CONFIG(...args) {
    return this.#processCommand("CONFIG", ...args);
  }
  /**
   * A container for server configuration commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  config(...args) {
    return this.#processCommand("config", ...args);
  }
  /**
   * Copies the value of a key to a new key.
   *
   * Complexity: O(N) worst case for collections, where N is the number of nested items. O(1) for string values.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  COPY(...args) {
    return this.#processCommand("COPY", ...args);
  }
  /**
   * Copies the value of a key to a new key.
   *
   * Complexity: O(N) worst case for collections, where N is the number of nested items. O(1) for string values.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  copy(...args) {
    return this.#processCommand("copy", ...args);
  }
  /**
   * Returns the number of keys in the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  DBSIZE(...args) {
    return this.#processCommand("DBSIZE", ...args);
  }
  /**
   * Returns the number of keys in the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  dbsize(...args) {
    return this.#processCommand("dbsize", ...args);
  }
  /**
   * A container for debugging commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  DEBUG(...args) {
    return this.#processCommand("DEBUG", ...args);
  }
  /**
   * A container for debugging commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  debug(...args) {
    return this.#processCommand("debug", ...args);
  }
  /**
   * Decrements the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  DECR(...args) {
    return this.#processCommand("DECR", ...args);
  }
  /**
   * Decrements the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  decr(...args) {
    return this.#processCommand("decr", ...args);
  }
  /**
   * Decrements a number from the integer value of a key. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  DECRBY(...args) {
    return this.#processCommand("DECRBY", ...args);
  }
  /**
   * Decrements a number from the integer value of a key. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  decrby(...args) {
    return this.#processCommand("decrby", ...args);
  }
  /**
   * Deletes one or more keys.
   *
   * Complexity: O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  DEL(...args) {
    return this.#processCommand("DEL", ...args);
  }
  /**
   * Deletes one or more keys.
   *
   * Complexity: O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  del(...args) {
    return this.#processCommand("del", ...args);
  }
  /**
   * Returns a serialized representation of the value stored at a key.
   *
   * Complexity: O(1) to access the key and additional O(N*M) to serialize it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  DUMP(...args) {
    return this.#processCommand("DUMP", ...args);
  }
  /**
   * Returns a serialized representation of the value stored at a key.
   *
   * Complexity: O(1) to access the key and additional O(N*M) to serialize it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  dump(...args) {
    return this.#processCommand("dump", ...args);
  }
  /**
   * Returns the given string.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ECHO(...args) {
    return this.#processCommand("ECHO", ...args);
  }
  /**
   * Returns the given string.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  echo(...args) {
    return this.#processCommand("echo", ...args);
  }
  /**
   * Executes a read-only server-side Lua script.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EVAL_RO(...args) {
    return this.#processCommand("EVAL_RO", ...args);
  }
  /**
   * Executes a read-only server-side Lua script.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  eval_ro(...args) {
    return this.#processCommand("eval_ro", ...args);
  }
  /**
   * Executes a server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EVALSHA(...args) {
    return this.#processCommand("EVALSHA", ...args);
  }
  /**
   * Executes a server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  evalsha(...args) {
    return this.#processCommand("evalsha", ...args);
  }
  /**
   * Executes a read-only server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EVALSHA_RO(...args) {
    return this.#processCommand("EVALSHA_RO", ...args);
  }
  /**
   * Executes a read-only server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  evalsha_ro(...args) {
    return this.#processCommand("evalsha_ro", ...args);
  }
  /**
   * Executes all commands in a transaction.
   *
   * Complexity: Depends on commands in the transaction
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EXEC(...args) {
    return this.#processCommand("EXEC", ...args);
  }
  /**
   * Executes all commands in a transaction.
   *
   * Complexity: Depends on commands in the transaction
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  exec(...args) {
    return this.#processCommand("exec", ...args);
  }
  /**
   * Determines whether one or more keys exist.
   *
   * Complexity: O(N) where N is the number of keys to check.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EXISTS(...args) {
    return this.#processCommand("EXISTS", ...args);
  }
  /**
   * Determines whether one or more keys exist.
   *
   * Complexity: O(N) where N is the number of keys to check.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  exists(...args) {
    return this.#processCommand("exists", ...args);
  }
  /**
   * Sets the expiration time of a key in seconds.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EXPIRE(...args) {
    return this.#processCommand("EXPIRE", ...args);
  }
  /**
   * Sets the expiration time of a key in seconds.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  expire(...args) {
    return this.#processCommand("expire", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EXPIREAT(...args) {
    return this.#processCommand("EXPIREAT", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  expireat(...args) {
    return this.#processCommand("expireat", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  EXPIRETIME(...args) {
    return this.#processCommand("EXPIRETIME", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  expiretime(...args) {
    return this.#processCommand("expiretime", ...args);
  }
  /**
   * Starts a coordinated failover from a server to one of its replicas.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  FAILOVER(...args) {
    return this.#processCommand("FAILOVER", ...args);
  }
  /**
   * Starts a coordinated failover from a server to one of its replicas.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  failover(...args) {
    return this.#processCommand("failover", ...args);
  }
  /**
   * Invokes a function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  FCALL(...args) {
    return this.#processCommand("FCALL", ...args);
  }
  /**
   * Invokes a function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  fcall(...args) {
    return this.#processCommand("fcall", ...args);
  }
  /**
   * Invokes a read-only function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  FCALL_RO(...args) {
    return this.#processCommand("FCALL_RO", ...args);
  }
  /**
   * Invokes a read-only function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  fcall_ro(...args) {
    return this.#processCommand("fcall_ro", ...args);
  }
  /**
   * Removes all keys from all databases.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  FLUSHALL(...args) {
    return this.#processCommand("FLUSHALL", ...args);
  }
  /**
   * Removes all keys from all databases.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  flushall(...args) {
    return this.#processCommand("flushall", ...args);
  }
  /**
   * Remove all keys from the current database.
   *
   * Complexity: O(N) where N is the number of keys in the selected database
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  FLUSHDB(...args) {
    return this.#processCommand("FLUSHDB", ...args);
  }
  /**
   * Remove all keys from the current database.
   *
   * Complexity: O(N) where N is the number of keys in the selected database
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  flushdb(...args) {
    return this.#processCommand("flushdb", ...args);
  }
  /**
   * A container for function commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  FUNCTION(...args) {
    return this.#processCommand("FUNCTION", ...args);
  }
  /**
   * A container for function commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  function(...args) {
    return this.#processCommand("function", ...args);
  }
  /**
   * Adds one or more members to a geospatial index. The key is created if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEOADD(...args) {
    return this.#processCommand("GEOADD", ...args);
  }
  /**
   * Adds one or more members to a geospatial index. The key is created if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  geoadd(...args) {
    return this.#processCommand("geoadd", ...args);
  }
  /**
   * Returns the distance between two members of a geospatial index.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEODIST(...args) {
    return this.#processCommand("GEODIST", ...args);
  }
  /**
   * Returns the distance between two members of a geospatial index.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  geodist(...args) {
    return this.#processCommand("geodist", ...args);
  }
  /**
   * Returns members from a geospatial index as geohash strings.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEOHASH(...args) {
    return this.#processCommand("GEOHASH", ...args);
  }
  /**
   * Returns members from a geospatial index as geohash strings.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  geohash(...args) {
    return this.#processCommand("geohash", ...args);
  }
  /**
   * Returns the longitude and latitude of members from a geospatial index.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEOPOS(...args) {
    return this.#processCommand("GEOPOS", ...args);
  }
  /**
   * Returns the longitude and latitude of members from a geospatial index.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  geopos(...args) {
    return this.#processCommand("geopos", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a coordinate, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEORADIUS(...args) {
    return this.#processCommand("GEORADIUS", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a coordinate, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  georadius(...args) {
    return this.#processCommand("georadius", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a coordinate.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEORADIUS_RO(...args) {
    return this.#processCommand("GEORADIUS_RO", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a coordinate.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  georadius_ro(...args) {
    return this.#processCommand("georadius_ro", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a member, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEORADIUSBYMEMBER(...args) {
    return this.#processCommand("GEORADIUSBYMEMBER", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a member, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  georadiusbymember(...args) {
    return this.#processCommand("georadiusbymember", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a member.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEORADIUSBYMEMBER_RO(...args) {
    return this.#processCommand("GEORADIUSBYMEMBER_RO", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a member.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  georadiusbymember_ro(...args) {
    return this.#processCommand("georadiusbymember_ro", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEOSEARCH(...args) {
    return this.#processCommand("GEOSEARCH", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  geosearch(...args) {
    return this.#processCommand("geosearch", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GEOSEARCHSTORE(...args) {
    return this.#processCommand("GEOSEARCHSTORE", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  geosearchstore(...args) {
    return this.#processCommand("geosearchstore", ...args);
  }
  /**
   * Returns the string value of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GET(...args) {
    return this.#processCommand("GET", ...args);
  }
  /**
   * Returns the string value of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  get(...args) {
    return this.#processCommand("get", ...args);
  }
  /**
   * Returns a bit value by offset.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GETBIT(...args) {
    return this.#processCommand("GETBIT", ...args);
  }
  /**
   * Returns a bit value by offset.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  getbit(...args) {
    return this.#processCommand("getbit", ...args);
  }
  /**
   * Returns the string value of a key after deleting the key.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GETDEL(...args) {
    return this.#processCommand("GETDEL", ...args);
  }
  /**
   * Returns the string value of a key after deleting the key.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  getdel(...args) {
    return this.#processCommand("getdel", ...args);
  }
  /**
   * Returns the string value of a key after setting its expiration time.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GETEX(...args) {
    return this.#processCommand("GETEX", ...args);
  }
  /**
   * Returns the string value of a key after setting its expiration time.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  getex(...args) {
    return this.#processCommand("getex", ...args);
  }
  /**
   * Returns a substring of the string stored at a key.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 2.4.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GETRANGE(...args) {
    return this.#processCommand("GETRANGE", ...args);
  }
  /**
   * Returns a substring of the string stored at a key.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 2.4.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  getrange(...args) {
    return this.#processCommand("getrange", ...args);
  }
  /**
   * Returns the previous string value of a key after setting it to a new value.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  GETSET(...args) {
    return this.#processCommand("GETSET", ...args);
  }
  /**
   * Returns the previous string value of a key after setting it to a new value.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  getset(...args) {
    return this.#processCommand("getset", ...args);
  }
  /**
   * Deletes one or more fields and their values from a hash. Deletes the hash if no fields remain.
   *
   * Complexity: O(N) where N is the number of fields to be removed.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HDEL(...args) {
    return this.#processCommand("HDEL", ...args);
  }
  /**
   * Deletes one or more fields and their values from a hash. Deletes the hash if no fields remain.
   *
   * Complexity: O(N) where N is the number of fields to be removed.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hdel(...args) {
    return this.#processCommand("hdel", ...args);
  }
  /**
   * Handshakes with the Redis server.
   *
   * Complexity: O(1)
   *
   * Available since 6.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HELLO(...args) {
    return this.#processCommand("HELLO", ...args);
  }
  /**
   * Handshakes with the Redis server.
   *
   * Complexity: O(1)
   *
   * Available since 6.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hello(...args) {
    return this.#processCommand("hello", ...args);
  }
  /**
   * Determines whether a field exists in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HEXISTS(...args) {
    return this.#processCommand("HEXISTS", ...args);
  }
  /**
   * Determines whether a field exists in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hexists(...args) {
    return this.#processCommand("hexists", ...args);
  }
  /**
   * Returns the value of a field in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HGET(...args) {
    return this.#processCommand("HGET", ...args);
  }
  /**
   * Returns the value of a field in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hget(...args) {
    return this.#processCommand("hget", ...args);
  }
  /**
   * Returns all fields and values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HGETALL(...args) {
    return this.#processCommand("HGETALL", ...args);
  }
  /**
   * Returns all fields and values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hgetall(...args) {
    return this.#processCommand("hgetall", ...args);
  }
  /**
   * Increments the integer value of a field in a hash by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HINCRBY(...args) {
    return this.#processCommand("HINCRBY", ...args);
  }
  /**
   * Increments the integer value of a field in a hash by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hincrby(...args) {
    return this.#processCommand("hincrby", ...args);
  }
  /**
   * Increments the floating point value of a field by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HINCRBYFLOAT(...args) {
    return this.#processCommand("HINCRBYFLOAT", ...args);
  }
  /**
   * Increments the floating point value of a field by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hincrbyfloat(...args) {
    return this.#processCommand("hincrbyfloat", ...args);
  }
  /**
   * Returns all fields in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HKEYS(...args) {
    return this.#processCommand("HKEYS", ...args);
  }
  /**
   * Returns all fields in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hkeys(...args) {
    return this.#processCommand("hkeys", ...args);
  }
  /**
   * Returns the number of fields in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HLEN(...args) {
    return this.#processCommand("HLEN", ...args);
  }
  /**
   * Returns the number of fields in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hlen(...args) {
    return this.#processCommand("hlen", ...args);
  }
  /**
   * Returns the values of all fields in a hash.
   *
   * Complexity: O(N) where N is the number of fields being requested.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HMGET(...args) {
    return this.#processCommand("HMGET", ...args);
  }
  /**
   * Returns the values of all fields in a hash.
   *
   * Complexity: O(N) where N is the number of fields being requested.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hmget(...args) {
    return this.#processCommand("hmget", ...args);
  }
  /**
   * Sets the values of multiple fields.
   *
   * Complexity: O(N) where N is the number of fields being set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HMSET(...args) {
    return this.#processCommand("HMSET", ...args);
  }
  /**
   * Sets the values of multiple fields.
   *
   * Complexity: O(N) where N is the number of fields being set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hmset(...args) {
    return this.#processCommand("hmset", ...args);
  }
  /**
   * Returns one or more random fields from a hash.
   *
   * Complexity: O(N) where N is the number of fields returned
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HRANDFIELD(...args) {
    return this.#processCommand("HRANDFIELD", ...args);
  }
  /**
   * Returns one or more random fields from a hash.
   *
   * Complexity: O(N) where N is the number of fields returned
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hrandfield(...args) {
    return this.#processCommand("hrandfield", ...args);
  }
  /**
   * Iterates over fields and values of a hash.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HSCAN(...args) {
    return this.#processCommand("HSCAN", ...args);
  }
  /**
   * Iterates over fields and values of a hash.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hscan(...args) {
    return this.#processCommand("hscan", ...args);
  }
  /**
   * Creates or modifies the value of a field in a hash.
   *
   * Complexity: O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HSET(...args) {
    return this.#processCommand("HSET", ...args);
  }
  /**
   * Creates or modifies the value of a field in a hash.
   *
   * Complexity: O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hset(...args) {
    return this.#processCommand("hset", ...args);
  }
  /**
   * Sets the value of a field in a hash only when the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HSETNX(...args) {
    return this.#processCommand("HSETNX", ...args);
  }
  /**
   * Sets the value of a field in a hash only when the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hsetnx(...args) {
    return this.#processCommand("hsetnx", ...args);
  }
  /**
   * Returns the length of the value of a field.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HSTRLEN(...args) {
    return this.#processCommand("HSTRLEN", ...args);
  }
  /**
   * Returns the length of the value of a field.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hstrlen(...args) {
    return this.#processCommand("hstrlen", ...args);
  }
  /**
   * Returns all values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  HVALS(...args) {
    return this.#processCommand("HVALS", ...args);
  }
  /**
   * Returns all values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  hvals(...args) {
    return this.#processCommand("hvals", ...args);
  }
  /**
   * Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  INCR(...args) {
    return this.#processCommand("INCR", ...args);
  }
  /**
   * Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  incr(...args) {
    return this.#processCommand("incr", ...args);
  }
  /**
   * Increments the integer value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  INCRBY(...args) {
    return this.#processCommand("INCRBY", ...args);
  }
  /**
   * Increments the integer value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  incrby(...args) {
    return this.#processCommand("incrby", ...args);
  }
  /**
   * Increment the floating point value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  INCRBYFLOAT(...args) {
    return this.#processCommand("INCRBYFLOAT", ...args);
  }
  /**
   * Increment the floating point value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  incrbyfloat(...args) {
    return this.#processCommand("incrbyfloat", ...args);
  }
  /**
   * Returns information and statistics about the server.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  INFO(...args) {
    return this.#processCommand("INFO", ...args);
  }
  /**
   * Returns information and statistics about the server.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  info(...args) {
    return this.#processCommand("info", ...args);
  }
  /**
   * Returns all key names that match a pattern.
   *
   * Complexity: O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  KEYS(...args) {
    return this.#processCommand("KEYS", ...args);
  }
  /**
   * Returns all key names that match a pattern.
   *
   * Complexity: O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  keys(...args) {
    return this.#processCommand("keys", ...args);
  }
  /**
   * Returns the Unix timestamp of the last successful save to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LASTSAVE(...args) {
    return this.#processCommand("LASTSAVE", ...args);
  }
  /**
   * Returns the Unix timestamp of the last successful save to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lastsave(...args) {
    return this.#processCommand("lastsave", ...args);
  }
  /**
   * A container for latency diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.13
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LATENCY(...args) {
    return this.#processCommand("LATENCY", ...args);
  }
  /**
   * A container for latency diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.13
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  latency(...args) {
    return this.#processCommand("latency", ...args);
  }
  /**
   * Finds the longest common substring.
   *
   * Complexity: O(N*M) where N and M are the lengths of s1 and s2, respectively
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LCS(...args) {
    return this.#processCommand("LCS", ...args);
  }
  /**
   * Finds the longest common substring.
   *
   * Complexity: O(N*M) where N and M are the lengths of s1 and s2, respectively
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lcs(...args) {
    return this.#processCommand("lcs", ...args);
  }
  /**
   * Returns an element from a list by its index.
   *
   * Complexity: O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LINDEX(...args) {
    return this.#processCommand("LINDEX", ...args);
  }
  /**
   * Returns an element from a list by its index.
   *
   * Complexity: O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lindex(...args) {
    return this.#processCommand("lindex", ...args);
  }
  /**
   * Inserts an element before or after another element in a list.
   *
   * Complexity: O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LINSERT(...args) {
    return this.#processCommand("LINSERT", ...args);
  }
  /**
   * Inserts an element before or after another element in a list.
   *
   * Complexity: O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  linsert(...args) {
    return this.#processCommand("linsert", ...args);
  }
  /**
   * Returns the length of a list.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LLEN(...args) {
    return this.#processCommand("LLEN", ...args);
  }
  /**
   * Returns the length of a list.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  llen(...args) {
    return this.#processCommand("llen", ...args);
  }
  /**
   * Returns an element after popping it from one list and pushing it to another. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LMOVE(...args) {
    return this.#processCommand("LMOVE", ...args);
  }
  /**
   * Returns an element after popping it from one list and pushing it to another. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lmove(...args) {
    return this.#processCommand("lmove", ...args);
  }
  /**
   * Returns multiple elements from a list after removing them. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LMPOP(...args) {
    return this.#processCommand("LMPOP", ...args);
  }
  /**
   * Returns multiple elements from a list after removing them. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lmpop(...args) {
    return this.#processCommand("lmpop", ...args);
  }
  /**
   * Displays computer art and the Redis version
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LOLWUT(...args) {
    return this.#processCommand("LOLWUT", ...args);
  }
  /**
   * Displays computer art and the Redis version
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lolwut(...args) {
    return this.#processCommand("lolwut", ...args);
  }
  /**
   * Returns the first elements in a list after removing it. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LPOP(...args) {
    return this.#processCommand("LPOP", ...args);
  }
  /**
   * Returns the first elements in a list after removing it. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lpop(...args) {
    return this.#processCommand("lpop", ...args);
  }
  /**
   * Returns the index of matching elements in a list.
   *
   * Complexity: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
   *
   * Available since 6.0.6
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LPOS(...args) {
    return this.#processCommand("LPOS", ...args);
  }
  /**
   * Returns the index of matching elements in a list.
   *
   * Complexity: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
   *
   * Available since 6.0.6
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lpos(...args) {
    return this.#processCommand("lpos", ...args);
  }
  /**
   * Prepends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LPUSH(...args) {
    return this.#processCommand("LPUSH", ...args);
  }
  /**
   * Prepends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lpush(...args) {
    return this.#processCommand("lpush", ...args);
  }
  /**
   * Prepends one or more elements to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LPUSHX(...args) {
    return this.#processCommand("LPUSHX", ...args);
  }
  /**
   * Prepends one or more elements to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lpushx(...args) {
    return this.#processCommand("lpushx", ...args);
  }
  /**
   * Returns a range of elements from a list.
   *
   * Complexity: O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LRANGE(...args) {
    return this.#processCommand("LRANGE", ...args);
  }
  /**
   * Returns a range of elements from a list.
   *
   * Complexity: O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lrange(...args) {
    return this.#processCommand("lrange", ...args);
  }
  /**
   * Removes elements from a list. Deletes the list if the last element was removed.
   *
   * Complexity: O(N+M) where N is the length of the list and M is the number of elements removed.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LREM(...args) {
    return this.#processCommand("LREM", ...args);
  }
  /**
   * Removes elements from a list. Deletes the list if the last element was removed.
   *
   * Complexity: O(N+M) where N is the length of the list and M is the number of elements removed.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lrem(...args) {
    return this.#processCommand("lrem", ...args);
  }
  /**
   * Sets the value of an element in a list by its index.
   *
   * Complexity: O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LSET(...args) {
    return this.#processCommand("LSET", ...args);
  }
  /**
   * Sets the value of an element in a list by its index.
   *
   * Complexity: O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  lset(...args) {
    return this.#processCommand("lset", ...args);
  }
  /**
   * Removes elements from both ends a list. Deletes the list if all elements were trimmed.
   *
   * Complexity: O(N) where N is the number of elements to be removed by the operation.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  LTRIM(...args) {
    return this.#processCommand("LTRIM", ...args);
  }
  /**
   * Removes elements from both ends a list. Deletes the list if all elements were trimmed.
   *
   * Complexity: O(N) where N is the number of elements to be removed by the operation.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ltrim(...args) {
    return this.#processCommand("ltrim", ...args);
  }
  /**
   * A container for memory diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MEMORY(...args) {
    return this.#processCommand("MEMORY", ...args);
  }
  /**
   * A container for memory diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  memory(...args) {
    return this.#processCommand("memory", ...args);
  }
  /**
   * Atomically returns the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to retrieve.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MGET(...args) {
    return this.#processCommand("MGET", ...args);
  }
  /**
   * Atomically returns the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to retrieve.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  mget(...args) {
    return this.#processCommand("mget", ...args);
  }
  /**
   * Atomically transfers a key from one Redis instance to another.
   *
   * Complexity: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MIGRATE(...args) {
    return this.#processCommand("MIGRATE", ...args);
  }
  /**
   * Atomically transfers a key from one Redis instance to another.
   *
   * Complexity: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  migrate(...args) {
    return this.#processCommand("migrate", ...args);
  }
  /**
   * A container for module commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MODULE(...args) {
    return this.#processCommand("MODULE", ...args);
  }
  /**
   * A container for module commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  module(...args) {
    return this.#processCommand("module", ...args);
  }
  /**
   * Listens for all requests received by the server in real-time.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MONITOR(...args) {
    return this.#processCommand("MONITOR", ...args);
  }
  /**
   * Listens for all requests received by the server in real-time.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  monitor(...args) {
    return this.#processCommand("monitor", ...args);
  }
  /**
   * Moves a key to another database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MOVE(...args) {
    return this.#processCommand("MOVE", ...args);
  }
  /**
   * Moves a key to another database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  move(...args) {
    return this.#processCommand("move", ...args);
  }
  /**
   * Atomically creates or modifies the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MSET(...args) {
    return this.#processCommand("MSET", ...args);
  }
  /**
   * Atomically creates or modifies the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  mset(...args) {
    return this.#processCommand("mset", ...args);
  }
  /**
   * Atomically modifies the string values of one or more keys only when all keys don't exist.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  MSETNX(...args) {
    return this.#processCommand("MSETNX", ...args);
  }
  /**
   * Atomically modifies the string values of one or more keys only when all keys don't exist.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  msetnx(...args) {
    return this.#processCommand("msetnx", ...args);
  }
  /**
   * A container for object introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.3
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  OBJECT(...args) {
    return this.#processCommand("OBJECT", ...args);
  }
  /**
   * A container for object introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.3
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  object(...args) {
    return this.#processCommand("object", ...args);
  }
  /**
   * Removes the expiration time of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PERSIST(...args) {
    return this.#processCommand("PERSIST", ...args);
  }
  /**
   * Removes the expiration time of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  persist(...args) {
    return this.#processCommand("persist", ...args);
  }
  /**
   * Sets the expiration time of a key in milliseconds.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PEXPIRE(...args) {
    return this.#processCommand("PEXPIRE", ...args);
  }
  /**
   * Sets the expiration time of a key in milliseconds.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pexpire(...args) {
    return this.#processCommand("pexpire", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PEXPIREAT(...args) {
    return this.#processCommand("PEXPIREAT", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pexpireat(...args) {
    return this.#processCommand("pexpireat", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PEXPIRETIME(...args) {
    return this.#processCommand("PEXPIRETIME", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pexpiretime(...args) {
    return this.#processCommand("pexpiretime", ...args);
  }
  /**
   * Adds elements to a HyperLogLog key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) to add every element.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PFADD(...args) {
    return this.#processCommand("PFADD", ...args);
  }
  /**
   * Adds elements to a HyperLogLog key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) to add every element.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pfadd(...args) {
    return this.#processCommand("pfadd", ...args);
  }
  /**
   * Returns the approximated cardinality of the set(s) observed by the HyperLogLog key(s).
   *
   * Complexity: O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PFCOUNT(...args) {
    return this.#processCommand("PFCOUNT", ...args);
  }
  /**
   * Returns the approximated cardinality of the set(s) observed by the HyperLogLog key(s).
   *
   * Complexity: O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pfcount(...args) {
    return this.#processCommand("pfcount", ...args);
  }
  /**
   * Internal commands for debugging HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PFDEBUG(...args) {
    return this.#processCommand("PFDEBUG", ...args);
  }
  /**
   * Internal commands for debugging HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pfdebug(...args) {
    return this.#processCommand("pfdebug", ...args);
  }
  /**
   * Merges one or more HyperLogLog values into a single key.
   *
   * Complexity: O(N) to merge N HyperLogLogs, but with high constant times.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PFMERGE(...args) {
    return this.#processCommand("PFMERGE", ...args);
  }
  /**
   * Merges one or more HyperLogLog values into a single key.
   *
   * Complexity: O(N) to merge N HyperLogLogs, but with high constant times.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pfmerge(...args) {
    return this.#processCommand("pfmerge", ...args);
  }
  /**
   * An internal command for testing HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PFSELFTEST(...args) {
    return this.#processCommand("PFSELFTEST", ...args);
  }
  /**
   * An internal command for testing HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pfselftest(...args) {
    return this.#processCommand("pfselftest", ...args);
  }
  /**
   * Returns the server's liveliness response.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PING(...args) {
    return this.#processCommand("PING", ...args);
  }
  /**
   * Returns the server's liveliness response.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ping(...args) {
    return this.#processCommand("ping", ...args);
  }
  /**
   * Sets both string value and expiration time in milliseconds of a key. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PSETEX(...args) {
    return this.#processCommand("PSETEX", ...args);
  }
  /**
   * Sets both string value and expiration time in milliseconds of a key. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  psetex(...args) {
    return this.#processCommand("psetex", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PSYNC(...args) {
    return this.#processCommand("PSYNC", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  psync(...args) {
    return this.#processCommand("psync", ...args);
  }
  /**
   * Returns the expiration time in milliseconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PTTL(...args) {
    return this.#processCommand("PTTL", ...args);
  }
  /**
   * Returns the expiration time in milliseconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pttl(...args) {
    return this.#processCommand("pttl", ...args);
  }
  /**
   * Posts a message to a channel.
   *
   * Complexity: O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PUBLISH(...args) {
    return this.#processCommand("PUBLISH", ...args);
  }
  /**
   * Posts a message to a channel.
   *
   * Complexity: O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  publish(...args) {
    return this.#processCommand("publish", ...args);
  }
  /**
   * A container for Pub/Sub commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  PUBSUB(...args) {
    return this.#processCommand("PUBSUB", ...args);
  }
  /**
   * A container for Pub/Sub commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  pubsub(...args) {
    return this.#processCommand("pubsub", ...args);
  }
  /**
   * Closes the connection.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  QUIT(...args) {
    return this.#processCommand("QUIT", ...args);
  }
  /**
   * Closes the connection.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  quit(...args) {
    return this.#processCommand("quit", ...args);
  }
  /**
   * Returns a random key name from the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RANDOMKEY(...args) {
    return this.#processCommand("RANDOMKEY", ...args);
  }
  /**
   * Returns a random key name from the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  randomkey(...args) {
    return this.#processCommand("randomkey", ...args);
  }
  /**
   * Enables read-only queries for a connection to a Redis Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  READONLY(...args) {
    return this.#processCommand("READONLY", ...args);
  }
  /**
   * Enables read-only queries for a connection to a Redis Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  readonly(...args) {
    return this.#processCommand("readonly", ...args);
  }
  /**
   * Enables read-write queries for a connection to a Reids Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  READWRITE(...args) {
    return this.#processCommand("READWRITE", ...args);
  }
  /**
   * Enables read-write queries for a connection to a Reids Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  readwrite(...args) {
    return this.#processCommand("readwrite", ...args);
  }
  /**
   * Renames a key and overwrites the destination.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RENAME(...args) {
    return this.#processCommand("RENAME", ...args);
  }
  /**
   * Renames a key and overwrites the destination.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  rename(...args) {
    return this.#processCommand("rename", ...args);
  }
  /**
   * Renames a key only when the target key name doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RENAMENX(...args) {
    return this.#processCommand("RENAMENX", ...args);
  }
  /**
   * Renames a key only when the target key name doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  renamenx(...args) {
    return this.#processCommand("renamenx", ...args);
  }
  /**
   * An internal command for configuring the replication stream.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  REPLCONF(...args) {
    return this.#processCommand("REPLCONF", ...args);
  }
  /**
   * An internal command for configuring the replication stream.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  replconf(...args) {
    return this.#processCommand("replconf", ...args);
  }
  /**
   * Configures a server as replica of another, or promotes it to a master.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  REPLICAOF(...args) {
    return this.#processCommand("REPLICAOF", ...args);
  }
  /**
   * Configures a server as replica of another, or promotes it to a master.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  replicaof(...args) {
    return this.#processCommand("replicaof", ...args);
  }
  /**
   * Resets the connection.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RESET(...args) {
    return this.#processCommand("RESET", ...args);
  }
  /**
   * Resets the connection.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  reset(...args) {
    return this.#processCommand("reset", ...args);
  }
  /**
   * Creates a key from the serialized representation of a value.
   *
   * Complexity: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RESTORE(...args) {
    return this.#processCommand("RESTORE", ...args);
  }
  /**
   * Creates a key from the serialized representation of a value.
   *
   * Complexity: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  restore(...args) {
    return this.#processCommand("restore", ...args);
  }
  /**
   * Returns the replication role.
   *
   * Complexity: O(1)
   *
   * Available since 2.8.12
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ROLE(...args) {
    return this.#processCommand("ROLE", ...args);
  }
  /**
   * Returns the replication role.
   *
   * Complexity: O(1)
   *
   * Available since 2.8.12
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  role(...args) {
    return this.#processCommand("role", ...args);
  }
  /**
   * Returns and removes the last elements of a list. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RPOP(...args) {
    return this.#processCommand("RPOP", ...args);
  }
  /**
   * Returns and removes the last elements of a list. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  rpop(...args) {
    return this.#processCommand("rpop", ...args);
  }
  /**
   * Returns the last element of a list after removing and pushing it to another list. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RPOPLPUSH(...args) {
    return this.#processCommand("RPOPLPUSH", ...args);
  }
  /**
   * Returns the last element of a list after removing and pushing it to another list. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  rpoplpush(...args) {
    return this.#processCommand("rpoplpush", ...args);
  }
  /**
   * Appends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RPUSH(...args) {
    return this.#processCommand("RPUSH", ...args);
  }
  /**
   * Appends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  rpush(...args) {
    return this.#processCommand("rpush", ...args);
  }
  /**
   * Appends an element to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  RPUSHX(...args) {
    return this.#processCommand("RPUSHX", ...args);
  }
  /**
   * Appends an element to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  rpushx(...args) {
    return this.#processCommand("rpushx", ...args);
  }
  /**
   * Adds one or more members to a set. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SADD(...args) {
    return this.#processCommand("SADD", ...args);
  }
  /**
   * Adds one or more members to a set. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sadd(...args) {
    return this.#processCommand("sadd", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SAVE(...args) {
    return this.#processCommand("SAVE", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  save(...args) {
    return this.#processCommand("save", ...args);
  }
  /**
   * Iterates over the key names in the database.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SCAN(...args) {
    return this.#processCommand("SCAN", ...args);
  }
  /**
   * Iterates over the key names in the database.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  scan(...args) {
    return this.#processCommand("scan", ...args);
  }
  /**
   * Returns the number of members in a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SCARD(...args) {
    return this.#processCommand("SCARD", ...args);
  }
  /**
   * Returns the number of members in a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  scard(...args) {
    return this.#processCommand("scard", ...args);
  }
  /**
   * A container for Lua scripts management commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SCRIPT(...args) {
    return this.#processCommand("SCRIPT", ...args);
  }
  /**
   * A container for Lua scripts management commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  script(...args) {
    return this.#processCommand("script", ...args);
  }
  /**
   * Returns the difference of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SDIFF(...args) {
    return this.#processCommand("SDIFF", ...args);
  }
  /**
   * Returns the difference of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sdiff(...args) {
    return this.#processCommand("sdiff", ...args);
  }
  /**
   * Stores the difference of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SDIFFSTORE(...args) {
    return this.#processCommand("SDIFFSTORE", ...args);
  }
  /**
   * Stores the difference of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sdiffstore(...args) {
    return this.#processCommand("sdiffstore", ...args);
  }
  /**
   * Changes the selected database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SELECT(...args) {
    return this.#processCommand("SELECT", ...args);
  }
  /**
   * Changes the selected database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  select(...args) {
    return this.#processCommand("select", ...args);
  }
  /**
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SET(...args) {
    return this.#processCommand("SET", ...args);
  }
  /**
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  set(...args) {
    return this.#processCommand("set", ...args);
  }
  /**
   * Sets or clears the bit at offset of the string value. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SETBIT(...args) {
    return this.#processCommand("SETBIT", ...args);
  }
  /**
   * Sets or clears the bit at offset of the string value. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  setbit(...args) {
    return this.#processCommand("setbit", ...args);
  }
  /**
   * Sets the string value and expiration time of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SETEX(...args) {
    return this.#processCommand("SETEX", ...args);
  }
  /**
   * Sets the string value and expiration time of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  setex(...args) {
    return this.#processCommand("setex", ...args);
  }
  /**
   * Set the string value of a key only when the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SETNX(...args) {
    return this.#processCommand("SETNX", ...args);
  }
  /**
   * Set the string value of a key only when the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  setnx(...args) {
    return this.#processCommand("setnx", ...args);
  }
  /**
   * Overwrites a part of a string value with another by an offset. Creates the key if it doesn't exist.
   *
   * Complexity: O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SETRANGE(...args) {
    return this.#processCommand("SETRANGE", ...args);
  }
  /**
   * Overwrites a part of a string value with another by an offset. Creates the key if it doesn't exist.
   *
   * Complexity: O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  setrange(...args) {
    return this.#processCommand("setrange", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk and shuts down the Redis server.
   *
   * Complexity: O(N) when saving, where N is the total number of keys in all databases when saving data, otherwise O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SHUTDOWN(...args) {
    return this.#processCommand("SHUTDOWN", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk and shuts down the Redis server.
   *
   * Complexity: O(N) when saving, where N is the total number of keys in all databases when saving data, otherwise O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  shutdown(...args) {
    return this.#processCommand("shutdown", ...args);
  }
  /**
   * Returns the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SINTER(...args) {
    return this.#processCommand("SINTER", ...args);
  }
  /**
   * Returns the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sinter(...args) {
    return this.#processCommand("sinter", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SINTERCARD(...args) {
    return this.#processCommand("SINTERCARD", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sintercard(...args) {
    return this.#processCommand("sintercard", ...args);
  }
  /**
   * Stores the intersect of multiple sets in a key.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SINTERSTORE(...args) {
    return this.#processCommand("SINTERSTORE", ...args);
  }
  /**
   * Stores the intersect of multiple sets in a key.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sinterstore(...args) {
    return this.#processCommand("sinterstore", ...args);
  }
  /**
   * Determines whether a member belongs to a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SISMEMBER(...args) {
    return this.#processCommand("SISMEMBER", ...args);
  }
  /**
   * Determines whether a member belongs to a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sismember(...args) {
    return this.#processCommand("sismember", ...args);
  }
  /**
   * Sets a Redis server as a replica of another, or promotes it to being a master.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SLAVEOF(...args) {
    return this.#processCommand("SLAVEOF", ...args);
  }
  /**
   * Sets a Redis server as a replica of another, or promotes it to being a master.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  slaveof(...args) {
    return this.#processCommand("slaveof", ...args);
  }
  /**
   * A container for slow log commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.12
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SLOWLOG(...args) {
    return this.#processCommand("SLOWLOG", ...args);
  }
  /**
   * A container for slow log commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.12
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  slowlog(...args) {
    return this.#processCommand("slowlog", ...args);
  }
  /**
   * Returns all members of a set.
   *
   * Complexity: O(N) where N is the set cardinality.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SMEMBERS(...args) {
    return this.#processCommand("SMEMBERS", ...args);
  }
  /**
   * Returns all members of a set.
   *
   * Complexity: O(N) where N is the set cardinality.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  smembers(...args) {
    return this.#processCommand("smembers", ...args);
  }
  /**
   * Determines whether multiple members belong to a set.
   *
   * Complexity: O(N) where N is the number of elements being checked for membership
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SMISMEMBER(...args) {
    return this.#processCommand("SMISMEMBER", ...args);
  }
  /**
   * Determines whether multiple members belong to a set.
   *
   * Complexity: O(N) where N is the number of elements being checked for membership
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  smismember(...args) {
    return this.#processCommand("smismember", ...args);
  }
  /**
   * Moves a member from one set to another.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SMOVE(...args) {
    return this.#processCommand("SMOVE", ...args);
  }
  /**
   * Moves a member from one set to another.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  smove(...args) {
    return this.#processCommand("smove", ...args);
  }
  /**
   * Sorts the elements in a list, a set, or a sorted set, optionally storing the result.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SORT(...args) {
    return this.#processCommand("SORT", ...args);
  }
  /**
   * Sorts the elements in a list, a set, or a sorted set, optionally storing the result.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sort(...args) {
    return this.#processCommand("sort", ...args);
  }
  /**
   * Returns the sorted elements of a list, a set, or a sorted set.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SORT_RO(...args) {
    return this.#processCommand("SORT_RO", ...args);
  }
  /**
   * Returns the sorted elements of a list, a set, or a sorted set.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sort_ro(...args) {
    return this.#processCommand("sort_ro", ...args);
  }
  /**
   * Returns one or more random members from a set after removing them. Deletes the set if the last member was popped.
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the value of the passed count.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SPOP(...args) {
    return this.#processCommand("SPOP", ...args);
  }
  /**
   * Returns one or more random members from a set after removing them. Deletes the set if the last member was popped.
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the value of the passed count.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  spop(...args) {
    return this.#processCommand("spop", ...args);
  }
  /**
   * Post a message to a shard channel
   *
   * Complexity: O(N) where N is the number of clients subscribed to the receiving shard channel.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SPUBLISH(...args) {
    return this.#processCommand("SPUBLISH", ...args);
  }
  /**
   * Post a message to a shard channel
   *
   * Complexity: O(N) where N is the number of clients subscribed to the receiving shard channel.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  spublish(...args) {
    return this.#processCommand("spublish", ...args);
  }
  /**
   * Get one or multiple random members from a set
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SRANDMEMBER(...args) {
    return this.#processCommand("SRANDMEMBER", ...args);
  }
  /**
   * Get one or multiple random members from a set
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  srandmember(...args) {
    return this.#processCommand("srandmember", ...args);
  }
  /**
   * Removes one or more members from a set. Deletes the set if the last member was removed.
   *
   * Complexity: O(N) where N is the number of members to be removed.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SREM(...args) {
    return this.#processCommand("SREM", ...args);
  }
  /**
   * Removes one or more members from a set. Deletes the set if the last member was removed.
   *
   * Complexity: O(N) where N is the number of members to be removed.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  srem(...args) {
    return this.#processCommand("srem", ...args);
  }
  /**
   * Iterates over members of a set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SSCAN(...args) {
    return this.#processCommand("SSCAN", ...args);
  }
  /**
   * Iterates over members of a set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sscan(...args) {
    return this.#processCommand("sscan", ...args);
  }
  /**
   * Listens for messages published to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to subscribe to.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SSUBSCRIBE(...args) {
    return this.#processCommand("SSUBSCRIBE", ...args);
  }
  /**
   * Listens for messages published to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to subscribe to.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ssubscribe(...args) {
    return this.#processCommand("ssubscribe", ...args);
  }
  /**
   * Returns the length of a string value.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  STRLEN(...args) {
    return this.#processCommand("STRLEN", ...args);
  }
  /**
   * Returns the length of a string value.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  strlen(...args) {
    return this.#processCommand("strlen", ...args);
  }
  /**
   * Returns a substring from a string value.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SUBSTR(...args) {
    return this.#processCommand("SUBSTR", ...args);
  }
  /**
   * Returns a substring from a string value.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  substr(...args) {
    return this.#processCommand("substr", ...args);
  }
  /**
   * Returns the union of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SUNION(...args) {
    return this.#processCommand("SUNION", ...args);
  }
  /**
   * Returns the union of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sunion(...args) {
    return this.#processCommand("sunion", ...args);
  }
  /**
   * Stores the union of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SUNIONSTORE(...args) {
    return this.#processCommand("SUNIONSTORE", ...args);
  }
  /**
   * Stores the union of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sunionstore(...args) {
    return this.#processCommand("sunionstore", ...args);
  }
  /**
   * Stops listening to messages posted to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to unsubscribe.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SUNSUBSCRIBE(...args) {
    return this.#processCommand("SUNSUBSCRIBE", ...args);
  }
  /**
   * Stops listening to messages posted to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to unsubscribe.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sunsubscribe(...args) {
    return this.#processCommand("sunsubscribe", ...args);
  }
  /**
   * Swaps two Redis databases.
   *
   * Complexity: O(N) where N is the count of clients watching or blocking on keys from both databases.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SWAPDB(...args) {
    return this.#processCommand("SWAPDB", ...args);
  }
  /**
   * Swaps two Redis databases.
   *
   * Complexity: O(N) where N is the count of clients watching or blocking on keys from both databases.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  swapdb(...args) {
    return this.#processCommand("swapdb", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  SYNC(...args) {
    return this.#processCommand("SYNC", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  sync(...args) {
    return this.#processCommand("sync", ...args);
  }
  /**
   * Returns the server time.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  TIME(...args) {
    return this.#processCommand("TIME", ...args);
  }
  /**
   * Returns the server time.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  time(...args) {
    return this.#processCommand("time", ...args);
  }
  /**
   * Returns the number of existing keys out of those specified after updating the time they were last accessed.
   *
   * Complexity: O(N) where N is the number of keys that will be touched.
   *
   * Available since 3.2.1
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  TOUCH(...args) {
    return this.#processCommand("TOUCH", ...args);
  }
  /**
   * Returns the number of existing keys out of those specified after updating the time they were last accessed.
   *
   * Complexity: O(N) where N is the number of keys that will be touched.
   *
   * Available since 3.2.1
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  touch(...args) {
    return this.#processCommand("touch", ...args);
  }
  /**
   * Returns the expiration time in seconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  TTL(...args) {
    return this.#processCommand("TTL", ...args);
  }
  /**
   * Returns the expiration time in seconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ttl(...args) {
    return this.#processCommand("ttl", ...args);
  }
  /**
   * Determines the type of value stored at a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  TYPE(...args) {
    return this.#processCommand("TYPE", ...args);
  }
  /**
   * Determines the type of value stored at a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  type(...args) {
    return this.#processCommand("type", ...args);
  }
  /**
   * Asynchronously deletes one or more keys.
   *
   * Complexity: O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  UNLINK(...args) {
    return this.#processCommand("UNLINK", ...args);
  }
  /**
   * Asynchronously deletes one or more keys.
   *
   * Complexity: O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.
   *
   * Available since 4.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  unlink(...args) {
    return this.#processCommand("unlink", ...args);
  }
  /**
   * Forgets about watched keys of a transaction.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  UNWATCH(...args) {
    return this.#processCommand("UNWATCH", ...args);
  }
  /**
   * Forgets about watched keys of a transaction.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  unwatch(...args) {
    return this.#processCommand("unwatch", ...args);
  }
  /**
   * Blocks until the asynchronous replication of all preceding write commands sent by the connection is completed.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  WAIT(...args) {
    return this.#processCommand("WAIT", ...args);
  }
  /**
   * Blocks until the asynchronous replication of all preceding write commands sent by the connection is completed.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  wait(...args) {
    return this.#processCommand("wait", ...args);
  }
  /**
   * Blocks until all of the preceding write commands sent by the connection are written to the append-only file of the master and/or replicas.
   *
   * Complexity: O(1)
   *
   * Available since 7.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  WAITAOF(...args) {
    return this.#processCommand("WAITAOF", ...args);
  }
  /**
   * Blocks until all of the preceding write commands sent by the connection are written to the append-only file of the master and/or replicas.
   *
   * Complexity: O(1)
   *
   * Available since 7.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  waitaof(...args) {
    return this.#processCommand("waitaof", ...args);
  }
  /**
   * Monitors changes to keys to determine the execution of a transaction.
   *
   * Complexity: O(1) for every key.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  WATCH(...args) {
    return this.#processCommand("WATCH", ...args);
  }
  /**
   * Monitors changes to keys to determine the execution of a transaction.
   *
   * Complexity: O(1) for every key.
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  watch(...args) {
    return this.#processCommand("watch", ...args);
  }
  /**
   * Returns the number of messages that were successfully acknowledged by the consumer group member of a stream.
   *
   * Complexity: O(1) for each message ID processed.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XACK(...args) {
    return this.#processCommand("XACK", ...args);
  }
  /**
   * Returns the number of messages that were successfully acknowledged by the consumer group member of a stream.
   *
   * Complexity: O(1) for each message ID processed.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xack(...args) {
    return this.#processCommand("xack", ...args);
  }
  /**
   * Appends a new message to a stream. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) when adding a new entry, O(N) when trimming where N being the number of entries evicted.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XADD(...args) {
    return this.#processCommand("XADD", ...args);
  }
  /**
   * Appends a new message to a stream. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) when adding a new entry, O(N) when trimming where N being the number of entries evicted.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xadd(...args) {
    return this.#processCommand("xadd", ...args);
  }
  /**
   * Changes, or acquires, ownership of messages in a consumer group, as if the messages were delivered to as consumer group member.
   *
   * Complexity: O(1) if COUNT is small.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XAUTOCLAIM(...args) {
    return this.#processCommand("XAUTOCLAIM", ...args);
  }
  /**
   * Changes, or acquires, ownership of messages in a consumer group, as if the messages were delivered to as consumer group member.
   *
   * Complexity: O(1) if COUNT is small.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xautoclaim(...args) {
    return this.#processCommand("xautoclaim", ...args);
  }
  /**
   * Changes, or acquires, ownership of a message in a consumer group, as if the message was delivered a consumer group member.
   *
   * Complexity: O(log N) with N being the number of messages in the PEL of the consumer group.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XCLAIM(...args) {
    return this.#processCommand("XCLAIM", ...args);
  }
  /**
   * Changes, or acquires, ownership of a message in a consumer group, as if the message was delivered a consumer group member.
   *
   * Complexity: O(log N) with N being the number of messages in the PEL of the consumer group.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xclaim(...args) {
    return this.#processCommand("xclaim", ...args);
  }
  /**
   * Returns the number of messages after removing them from a stream.
   *
   * Complexity: O(1) for each single item to delete in the stream, regardless of the stream size.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XDEL(...args) {
    return this.#processCommand("XDEL", ...args);
  }
  /**
   * Returns the number of messages after removing them from a stream.
   *
   * Complexity: O(1) for each single item to delete in the stream, regardless of the stream size.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xdel(...args) {
    return this.#processCommand("xdel", ...args);
  }
  /**
   * A container for consumer groups commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XGROUP(...args) {
    return this.#processCommand("XGROUP", ...args);
  }
  /**
   * A container for consumer groups commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xgroup(...args) {
    return this.#processCommand("xgroup", ...args);
  }
  /**
   * A container for stream introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XINFO(...args) {
    return this.#processCommand("XINFO", ...args);
  }
  /**
   * A container for stream introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xinfo(...args) {
    return this.#processCommand("xinfo", ...args);
  }
  /**
   * Return the number of messages in a stream.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XLEN(...args) {
    return this.#processCommand("XLEN", ...args);
  }
  /**
   * Return the number of messages in a stream.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xlen(...args) {
    return this.#processCommand("xlen", ...args);
  }
  /**
   * Returns the information and entries from a stream consumer group's pending entries list.
   *
   * Complexity: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). O(M), where M is the total number of entries scanned when used with the IDLE filter. When the command returns just the summary and the list of consumers is small, it runs in O(1) time; otherwise, an additional O(N) time for iterating every consumer.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XPENDING(...args) {
    return this.#processCommand("XPENDING", ...args);
  }
  /**
   * Returns the information and entries from a stream consumer group's pending entries list.
   *
   * Complexity: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). O(M), where M is the total number of entries scanned when used with the IDLE filter. When the command returns just the summary and the list of consumers is small, it runs in O(1) time; otherwise, an additional O(N) time for iterating every consumer.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xpending(...args) {
    return this.#processCommand("xpending", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs.
   *
   * Complexity: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XRANGE(...args) {
    return this.#processCommand("XRANGE", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs.
   *
   * Complexity: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xrange(...args) {
    return this.#processCommand("xrange", ...args);
  }
  /**
   * Returns messages from multiple streams with IDs greater than the ones requested. Blocks until a message is available otherwise.
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XREAD(...args) {
    return this.#processCommand("XREAD", ...args);
  }
  /**
   * Returns messages from multiple streams with IDs greater than the ones requested. Blocks until a message is available otherwise.
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xread(...args) {
    return this.#processCommand("xread", ...args);
  }
  /**
   * Returns new or historical messages from a stream for a consumer in a group. Blocks until a message is available otherwise.
   *
   * Complexity: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XREADGROUP(...args) {
    return this.#processCommand("XREADGROUP", ...args);
  }
  /**
   * Returns new or historical messages from a stream for a consumer in a group. Blocks until a message is available otherwise.
   *
   * Complexity: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xreadgroup(...args) {
    return this.#processCommand("xreadgroup", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs in reverse order.
   *
   * Complexity: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XREVRANGE(...args) {
    return this.#processCommand("XREVRANGE", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs in reverse order.
   *
   * Complexity: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xrevrange(...args) {
    return this.#processCommand("xrevrange", ...args);
  }
  /**
   * An internal command for replicating stream values.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XSETID(...args) {
    return this.#processCommand("XSETID", ...args);
  }
  /**
   * An internal command for replicating stream values.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xsetid(...args) {
    return this.#processCommand("xsetid", ...args);
  }
  /**
   * Deletes messages from the beginning of a stream.
   *
   * Complexity: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  XTRIM(...args) {
    return this.#processCommand("XTRIM", ...args);
  }
  /**
   * Deletes messages from the beginning of a stream.
   *
   * Complexity: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  xtrim(...args) {
    return this.#processCommand("xtrim", ...args);
  }
  /**
   * Adds one or more members to a sorted set, or updates their scores. Creates the key if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZADD(...args) {
    return this.#processCommand("ZADD", ...args);
  }
  /**
   * Adds one or more members to a sorted set, or updates their scores. Creates the key if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zadd(...args) {
    return this.#processCommand("zadd", ...args);
  }
  /**
   * Returns the number of members in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZCARD(...args) {
    return this.#processCommand("ZCARD", ...args);
  }
  /**
   * Returns the number of members in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zcard(...args) {
    return this.#processCommand("zcard", ...args);
  }
  /**
   * Returns the count of members in a sorted set that have scores within a range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZCOUNT(...args) {
    return this.#processCommand("ZCOUNT", ...args);
  }
  /**
   * Returns the count of members in a sorted set that have scores within a range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zcount(...args) {
    return this.#processCommand("zcount", ...args);
  }
  /**
   * Returns the difference between multiple sorted sets.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZDIFF(...args) {
    return this.#processCommand("ZDIFF", ...args);
  }
  /**
   * Returns the difference between multiple sorted sets.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zdiff(...args) {
    return this.#processCommand("zdiff", ...args);
  }
  /**
   * Stores the difference of multiple sorted sets in a key.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZDIFFSTORE(...args) {
    return this.#processCommand("ZDIFFSTORE", ...args);
  }
  /**
   * Stores the difference of multiple sorted sets in a key.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zdiffstore(...args) {
    return this.#processCommand("zdiffstore", ...args);
  }
  /**
   * Increments the score of a member in a sorted set.
   *
   * Complexity: O(log(N)) where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZINCRBY(...args) {
    return this.#processCommand("ZINCRBY", ...args);
  }
  /**
   * Increments the score of a member in a sorted set.
   *
   * Complexity: O(log(N)) where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zincrby(...args) {
    return this.#processCommand("zincrby", ...args);
  }
  /**
   * Returns the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZINTER(...args) {
    return this.#processCommand("ZINTER", ...args);
  }
  /**
   * Returns the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zinter(...args) {
    return this.#processCommand("zinter", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K) worst case with N being the smallest input sorted set, K being the number of input sorted sets.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZINTERCARD(...args) {
    return this.#processCommand("ZINTERCARD", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K) worst case with N being the smallest input sorted set, K being the number of input sorted sets.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zintercard(...args) {
    return this.#processCommand("zintercard", ...args);
  }
  /**
   * Stores the intersect of multiple sorted sets in a key.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZINTERSTORE(...args) {
    return this.#processCommand("ZINTERSTORE", ...args);
  }
  /**
   * Stores the intersect of multiple sorted sets in a key.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zinterstore(...args) {
    return this.#processCommand("zinterstore", ...args);
  }
  /**
   * Returns the number of members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZLEXCOUNT(...args) {
    return this.#processCommand("ZLEXCOUNT", ...args);
  }
  /**
   * Returns the number of members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zlexcount(...args) {
    return this.#processCommand("zlexcount", ...args);
  }
  /**
   * Returns the highest- or lowest-scoring members from one or more sorted sets after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZMPOP(...args) {
    return this.#processCommand("ZMPOP", ...args);
  }
  /**
   * Returns the highest- or lowest-scoring members from one or more sorted sets after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zmpop(...args) {
    return this.#processCommand("zmpop", ...args);
  }
  /**
   * Returns the score of one or more members in a sorted set.
   *
   * Complexity: O(N) where N is the number of members being requested.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZMSCORE(...args) {
    return this.#processCommand("ZMSCORE", ...args);
  }
  /**
   * Returns the score of one or more members in a sorted set.
   *
   * Complexity: O(N) where N is the number of members being requested.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zmscore(...args) {
    return this.#processCommand("zmscore", ...args);
  }
  /**
   * Returns the highest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZPOPMAX(...args) {
    return this.#processCommand("ZPOPMAX", ...args);
  }
  /**
   * Returns the highest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zpopmax(...args) {
    return this.#processCommand("zpopmax", ...args);
  }
  /**
   * Returns the lowest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZPOPMIN(...args) {
    return this.#processCommand("ZPOPMIN", ...args);
  }
  /**
   * Returns the lowest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zpopmin(...args) {
    return this.#processCommand("zpopmin", ...args);
  }
  /**
   * Returns one or more random members from a sorted set.
   *
   * Complexity: O(N) where N is the number of members returned
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZRANDMEMBER(...args) {
    return this.#processCommand("ZRANDMEMBER", ...args);
  }
  /**
   * Returns one or more random members from a sorted set.
   *
   * Complexity: O(N) where N is the number of members returned
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrandmember(...args) {
    return this.#processCommand("zrandmember", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZRANGE(...args) {
    return this.#processCommand("ZRANGE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrange(...args) {
    return this.#processCommand("zrange", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZRANGEBYLEX(...args) {
    return this.#processCommand("ZRANGEBYLEX", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrangebylex(...args) {
    return this.#processCommand("zrangebylex", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 1.0.5
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZRANGEBYSCORE(...args) {
    return this.#processCommand("ZRANGEBYSCORE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 1.0.5
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrangebyscore(...args) {
    return this.#processCommand("zrangebyscore", ...args);
  }
  /**
   * Stores a range of members from sorted set in a key.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements stored into the destination key.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZRANGESTORE(...args) {
    return this.#processCommand("ZRANGESTORE", ...args);
  }
  /**
   * Stores a range of members from sorted set in a key.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements stored into the destination key.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrangestore(...args) {
    return this.#processCommand("zrangestore", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by ascending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZRANK(...args) {
    return this.#processCommand("ZRANK", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by ascending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrank(...args) {
    return this.#processCommand("zrank", ...args);
  }
  /**
   * Removes one or more members from a sorted set. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREM(...args) {
    return this.#processCommand("ZREM", ...args);
  }
  /**
   * Removes one or more members from a sorted set. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrem(...args) {
    return this.#processCommand("zrem", ...args);
  }
  /**
   * Removes members in a sorted set within a lexicographical range. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREMRANGEBYLEX(...args) {
    return this.#processCommand("ZREMRANGEBYLEX", ...args);
  }
  /**
   * Removes members in a sorted set within a lexicographical range. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zremrangebylex(...args) {
    return this.#processCommand("zremrangebylex", ...args);
  }
  /**
   * Removes members in a sorted set within a range of indexes. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREMRANGEBYRANK(...args) {
    return this.#processCommand("ZREMRANGEBYRANK", ...args);
  }
  /**
   * Removes members in a sorted set within a range of indexes. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zremrangebyrank(...args) {
    return this.#processCommand("zremrangebyrank", ...args);
  }
  /**
   * Removes members in a sorted set within a range of scores. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREMRANGEBYSCORE(...args) {
    return this.#processCommand("ZREMRANGEBYSCORE", ...args);
  }
  /**
   * Removes members in a sorted set within a range of scores. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zremrangebyscore(...args) {
    return this.#processCommand("zremrangebyscore", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREVRANGE(...args) {
    return this.#processCommand("ZREVRANGE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrevrange(...args) {
    return this.#processCommand("zrevrange", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREVRANGEBYLEX(...args) {
    return this.#processCommand("ZREVRANGEBYLEX", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrevrangebylex(...args) {
    return this.#processCommand("zrevrangebylex", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREVRANGEBYSCORE(...args) {
    return this.#processCommand("ZREVRANGEBYSCORE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrevrangebyscore(...args) {
    return this.#processCommand("zrevrangebyscore", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by descending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZREVRANK(...args) {
    return this.#processCommand("ZREVRANK", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by descending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zrevrank(...args) {
    return this.#processCommand("zrevrank", ...args);
  }
  /**
   * Iterates over members and scores of a sorted set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZSCAN(...args) {
    return this.#processCommand("ZSCAN", ...args);
  }
  /**
   * Iterates over members and scores of a sorted set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zscan(...args) {
    return this.#processCommand("zscan", ...args);
  }
  /**
   * Returns the score of a member in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZSCORE(...args) {
    return this.#processCommand("ZSCORE", ...args);
  }
  /**
   * Returns the score of a member in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zscore(...args) {
    return this.#processCommand("zscore", ...args);
  }
  /**
   * Returns the union of multiple sorted sets.
   *
   * Complexity: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZUNION(...args) {
    return this.#processCommand("ZUNION", ...args);
  }
  /**
   * Returns the union of multiple sorted sets.
   *
   * Complexity: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zunion(...args) {
    return this.#processCommand("zunion", ...args);
  }
  /**
   * Stores the union of multiple sorted sets in a key.
   *
   * Complexity: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  ZUNIONSTORE(...args) {
    return this.#processCommand("ZUNIONSTORE", ...args);
  }
  /**
   * Stores the union of multiple sorted sets in a key.
   *
   * Complexity: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @async
   * @param {...(string | number)} args Command arguments.
   * @returns {any} Response from the Redis server.
   */
  zunionstore(...args) {
    return this.#processCommand("zunionstore", ...args);
  }
};

// src/client/commands.extended.js
var RedisClientCommandsExtended = class extends RedisClientCommands {
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
   */
  SUBSCRIBE(channel, callback, is_buffer) {
    return this.redis_client.SUBSCRIBE(
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
   */
  PSUBSCRIBE(channel, callback, is_buffer) {
    return this.redis_client.PSUBSCRIBE(
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
   */
  UNSUBSCRIBE(channel, callback) {
    return this.redis_client.UNSUBSCRIBE(
      channel,
      callback
    );
  }
  /**
   * Unsubscribes from the channel or channels.
   * @param {string | string[]} channel Channel name.
   * @param {RedisClientSubscribeCallback?} callback Callback function.
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
   */
  PUNSUBSCRIBE(channel, callback) {
    return this.redis_client.UNSUBSCRIBE(
      channel,
      callback
    );
  }
  /**
   * Unsubscribes from the channel or channels.
   * @param {string | string[]} channel Channel name.
   * @param {RedisClientSubscribeCallback?} callback Callback function.
   */
  punsubscribe(channel, callback) {
    return this.redis_client.unsubscribe(
      channel,
      callback
    );
  }
  /**
   * @typedef {Object} ScanOptions
   * @property {string?} TYPE Type of keys to return.
   * @property {string?} MATCH Pattern to match keys.
   * @property {number?} COUNT Number of keys to return per iteration.
   */
  /**
   * Asynchronously iterates over keys in the database.
   * @param {ScanOptions?} options
   * @returns {AsyncIterator<string>} Async iterator with key names.
   */
  scanIterator(options) {
    return this.redis_client.scanIterator(options);
  }
  /**
   * @typedef {Object} ScanTypedOptions
   * @property {string?} MATCH Pattern to match keys.
   * @property {number?} COUNT Number of keys to return per iteration.
   */
  /**
   * Asynchronously iterates over keys in the hash.
   * @param {string} key Key containing hash.
   * @param {ScanTypedOptions?} options
   * @returns {AsyncIterator<{ field: string, value: string }>} Async iterator with field names and values.
   */
  hScanIterator(key, options) {
    return this.redis_client.hScanIterator(key, options);
  }
  /**
   * Asynchronously iterates over keys in the set.
   * @param {string} key Key containing set.
   * @param {ScanTypedOptions?} options
   * @returns {AsyncIterator<string>} Async iterator with members.
   */
  sScanIterator(key, options) {
    return this.redis_client.sScanIterator(key, options);
  }
  /**
   * Asynchronously iterates over keys in the sorted set.
   * @param {string} key Key containing sorted set.
   * @param {ScanTypedOptions?} options
   * @returns {AsyncIterator<{ value: string, score: number }>} Async iterator with members and scores.
   */
  zScanIterator(key, options) {
    return this.redis_client.zScanIterator(key, options);
  }
};

// src/utils/args.js
function updateArguments(command, args) {
  for (const [index, arg] of args.entries()) {
    if (typeof arg === "number" && Number.isNaN(arg) !== true) {
      args[index] = String(arg);
    } else if (typeof arg !== "string") {
      throw new TypeError(
        `Argument #${index + 1} of command "${command}" must be a string or a number.`
      );
    }
  }
}

// src/utils/transform.js
var transform_exports = {};
__export(transform_exports, {
  HGETALL: () => HGETALL,
  HMSET: () => HMSET,
  HSET: () => HSET,
  INCRBYFLOAT: () => INCRBYFLOAT,
  SISMEMBER: () => SISMEMBER,
  SMISMEMBER: () => SMISMEMBER,
  hincrbyfloat: () => hincrbyfloat
});

// src/utils/hash-bulk.js
function toHashBulk(iterable) {
  const hash_bulk = [];
  for (const [key, value] of iterable) {
    hash_bulk.push(key, value);
  }
  return hash_bulk;
}
function objectToHashBulk(object) {
  return toHashBulk(
    Object.entries(object)
  );
}
function mapToHashBulk(map) {
  return toHashBulk(map.entries());
}
function hashBulkToObject(hash_bulk) {
  const object = {};
  for (let index = 0; index < hash_bulk.length; index += 2) {
    object[hash_bulk[index]] = hash_bulk[index + 1];
  }
  return object;
}

// src/utils/transform.js
var INCRBYFLOAT = {
  output: (response) => Number.parseFloat(response)
};
var HGETALL = {
  output: (response) => hashBulkToObject(response)
};
var hincrbyfloat = INCRBYFLOAT;
var HMSET = {
  input(key, source, ...args) {
    if (args.length === 0) {
      if (source instanceof Map) {
        return [
          key,
          ...mapToHashBulk(source)
        ];
      }
      if (typeof source === "object" && source !== null) {
        return [
          key,
          ...objectToHashBulk(source)
        ];
      }
    }
  }
};
var HSET = HMSET;
var SISMEMBER = {
  output: (response) => response === 1
};
var SMISMEMBER = {
  output: (response) => response.map((a) => a === 1)
};

// src/client/multi.commands.js
var RedisClientMultiCommands = class {
  #processCommand;
  constructor(processCommand) {
    this.#processCommand = processCommand;
  }
  /**
   * A container for Access List Control commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 6.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ACL(...args) {
    return this.#processCommand("ACL", ...args);
  }
  /**
   * A container for Access List Control commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 6.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  acl(...args) {
    return this.#processCommand("acl", ...args);
  }
  /**
   * Appends a string to the value of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  APPEND(...args) {
    return this.#processCommand("APPEND", ...args);
  }
  /**
   * Appends a string to the value of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  append(...args) {
    return this.#processCommand("append", ...args);
  }
  /**
   * Signals that a cluster client is following an -ASK redirect.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ASKING(...args) {
    return this.#processCommand("ASKING", ...args);
  }
  /**
   * Signals that a cluster client is following an -ASK redirect.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  asking(...args) {
    return this.#processCommand("asking", ...args);
  }
  /**
   * Authenticates the connection.
   *
   * Complexity: O(N) where N is the number of passwords defined for the user
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  AUTH(...args) {
    return this.#processCommand("AUTH", ...args);
  }
  /**
   * Authenticates the connection.
   *
   * Complexity: O(N) where N is the number of passwords defined for the user
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  auth(...args) {
    return this.#processCommand("auth", ...args);
  }
  /**
   * Asynchronously rewrites the append-only file to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BGREWRITEAOF(...args) {
    return this.#processCommand("BGREWRITEAOF", ...args);
  }
  /**
   * Asynchronously rewrites the append-only file to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bgrewriteaof(...args) {
    return this.#processCommand("bgrewriteaof", ...args);
  }
  /**
   * Asynchronously saves the database(s) to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BGSAVE(...args) {
    return this.#processCommand("BGSAVE", ...args);
  }
  /**
   * Asynchronously saves the database(s) to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bgsave(...args) {
    return this.#processCommand("bgsave", ...args);
  }
  /**
   * Counts the number of set bits (population counting) in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BITCOUNT(...args) {
    return this.#processCommand("BITCOUNT", ...args);
  }
  /**
   * Counts the number of set bits (population counting) in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bitcount(...args) {
    return this.#processCommand("bitcount", ...args);
  }
  /**
   * Performs arbitrary bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BITFIELD(...args) {
    return this.#processCommand("BITFIELD", ...args);
  }
  /**
   * Performs arbitrary bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bitfield(...args) {
    return this.#processCommand("bitfield", ...args);
  }
  /**
   * Performs arbitrary read-only bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 6.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BITFIELD_RO(...args) {
    return this.#processCommand("BITFIELD_RO", ...args);
  }
  /**
   * Performs arbitrary read-only bitfield integer operations on strings.
   *
   * Complexity: O(1) for each subcommand specified
   *
   * Available since 6.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bitfield_ro(...args) {
    return this.#processCommand("bitfield_ro", ...args);
  }
  /**
   * Performs bitwise operations on multiple strings, and stores the result.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BITOP(...args) {
    return this.#processCommand("BITOP", ...args);
  }
  /**
   * Performs bitwise operations on multiple strings, and stores the result.
   *
   * Complexity: O(N)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bitop(...args) {
    return this.#processCommand("bitop", ...args);
  }
  /**
   * Finds the first set (1) or clear (0) bit in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.8.7
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BITPOS(...args) {
    return this.#processCommand("BITPOS", ...args);
  }
  /**
   * Finds the first set (1) or clear (0) bit in a string.
   *
   * Complexity: O(N)
   *
   * Available since 2.8.7
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bitpos(...args) {
    return this.#processCommand("bitpos", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Blocks until an element is available otherwise. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BLMOVE(...args) {
    return this.#processCommand("BLMOVE", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Blocks until an element is available otherwise. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  blmove(...args) {
    return this.#processCommand("blmove", ...args);
  }
  /**
   * Pops the first element from one of multiple lists. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BLMPOP(...args) {
    return this.#processCommand("BLMPOP", ...args);
  }
  /**
   * Pops the first element from one of multiple lists. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  blmpop(...args) {
    return this.#processCommand("blmpop", ...args);
  }
  /**
   * Removes and returns the first element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BLPOP(...args) {
    return this.#processCommand("BLPOP", ...args);
  }
  /**
   * Removes and returns the first element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  blpop(...args) {
    return this.#processCommand("blpop", ...args);
  }
  /**
   * Removes and returns the last element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BRPOP(...args) {
    return this.#processCommand("BRPOP", ...args);
  }
  /**
   * Removes and returns the last element in a list. Blocks until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of provided keys.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  brpop(...args) {
    return this.#processCommand("brpop", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Block until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BRPOPLPUSH(...args) {
    return this.#processCommand("BRPOPLPUSH", ...args);
  }
  /**
   * Pops an element from a list, pushes it to another list and returns it. Block until an element is available otherwise. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  brpoplpush(...args) {
    return this.#processCommand("brpoplpush", ...args);
  }
  /**
   * Removes and returns a member by score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BZMPOP(...args) {
    return this.#processCommand("BZMPOP", ...args);
  }
  /**
   * Removes and returns a member by score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bzmpop(...args) {
    return this.#processCommand("bzmpop", ...args);
  }
  /**
   * Removes and returns the member with the highest score from one or more sorted sets. Blocks until a member available otherwise.  Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BZPOPMAX(...args) {
    return this.#processCommand("BZPOPMAX", ...args);
  }
  /**
   * Removes and returns the member with the highest score from one or more sorted sets. Blocks until a member available otherwise.  Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bzpopmax(...args) {
    return this.#processCommand("bzpopmax", ...args);
  }
  /**
   * Removes and returns the member with the lowest score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  BZPOPMIN(...args) {
    return this.#processCommand("BZPOPMIN", ...args);
  }
  /**
   * Removes and returns the member with the lowest score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  bzpopmin(...args) {
    return this.#processCommand("bzpopmin", ...args);
  }
  /**
   * A container for client connection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.4.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  CLIENT(...args) {
    return this.#processCommand("CLIENT", ...args);
  }
  /**
   * A container for client connection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.4.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  client(...args) {
    return this.#processCommand("client", ...args);
  }
  /**
   * A container for Redis Cluster commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  CLUSTER(...args) {
    return this.#processCommand("CLUSTER", ...args);
  }
  /**
   * A container for Redis Cluster commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  cluster(...args) {
    return this.#processCommand("cluster", ...args);
  }
  /**
   * Returns detailed information about all commands.
   *
   * Complexity: O(N) where N is the total number of Redis commands
   *
   * Available since 2.8.13
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  COMMAND(...args) {
    return this.#processCommand("COMMAND", ...args);
  }
  /**
   * Returns detailed information about all commands.
   *
   * Complexity: O(N) where N is the total number of Redis commands
   *
   * Available since 2.8.13
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  command(...args) {
    return this.#processCommand("command", ...args);
  }
  /**
   * A container for server configuration commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  CONFIG(...args) {
    return this.#processCommand("CONFIG", ...args);
  }
  /**
   * A container for server configuration commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  config(...args) {
    return this.#processCommand("config", ...args);
  }
  /**
   * Copies the value of a key to a new key.
   *
   * Complexity: O(N) worst case for collections, where N is the number of nested items. O(1) for string values.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  COPY(...args) {
    return this.#processCommand("COPY", ...args);
  }
  /**
   * Copies the value of a key to a new key.
   *
   * Complexity: O(N) worst case for collections, where N is the number of nested items. O(1) for string values.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  copy(...args) {
    return this.#processCommand("copy", ...args);
  }
  /**
   * Returns the number of keys in the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  DBSIZE(...args) {
    return this.#processCommand("DBSIZE", ...args);
  }
  /**
   * Returns the number of keys in the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  dbsize(...args) {
    return this.#processCommand("dbsize", ...args);
  }
  /**
   * A container for debugging commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  DEBUG(...args) {
    return this.#processCommand("DEBUG", ...args);
  }
  /**
   * A container for debugging commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  debug(...args) {
    return this.#processCommand("debug", ...args);
  }
  /**
   * Decrements the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  DECR(...args) {
    return this.#processCommand("DECR", ...args);
  }
  /**
   * Decrements the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  decr(...args) {
    return this.#processCommand("decr", ...args);
  }
  /**
   * Decrements a number from the integer value of a key. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  DECRBY(...args) {
    return this.#processCommand("DECRBY", ...args);
  }
  /**
   * Decrements a number from the integer value of a key. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  decrby(...args) {
    return this.#processCommand("decrby", ...args);
  }
  /**
   * Deletes one or more keys.
   *
   * Complexity: O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  DEL(...args) {
    return this.#processCommand("DEL", ...args);
  }
  /**
   * Deletes one or more keys.
   *
   * Complexity: O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  del(...args) {
    return this.#processCommand("del", ...args);
  }
  /**
   * Returns a serialized representation of the value stored at a key.
   *
   * Complexity: O(1) to access the key and additional O(N*M) to serialize it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  DUMP(...args) {
    return this.#processCommand("DUMP", ...args);
  }
  /**
   * Returns a serialized representation of the value stored at a key.
   *
   * Complexity: O(1) to access the key and additional O(N*M) to serialize it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  dump(...args) {
    return this.#processCommand("dump", ...args);
  }
  /**
   * Returns the given string.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ECHO(...args) {
    return this.#processCommand("ECHO", ...args);
  }
  /**
   * Returns the given string.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  echo(...args) {
    return this.#processCommand("echo", ...args);
  }
  /**
   * Executes a read-only server-side Lua script.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EVAL_RO(...args) {
    return this.#processCommand("EVAL_RO", ...args);
  }
  /**
   * Executes a read-only server-side Lua script.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  eval_ro(...args) {
    return this.#processCommand("eval_ro", ...args);
  }
  /**
   * Executes a server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EVALSHA(...args) {
    return this.#processCommand("EVALSHA", ...args);
  }
  /**
   * Executes a server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  evalsha(...args) {
    return this.#processCommand("evalsha", ...args);
  }
  /**
   * Executes a read-only server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EVALSHA_RO(...args) {
    return this.#processCommand("EVALSHA_RO", ...args);
  }
  /**
   * Executes a read-only server-side Lua script by SHA1 digest.
   *
   * Complexity: Depends on the script that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  evalsha_ro(...args) {
    return this.#processCommand("evalsha_ro", ...args);
  }
  /**
   * Executes all commands in a transaction.
   *
   * Complexity: Depends on commands in the transaction
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EXEC(...args) {
    return this.#processCommand("EXEC", ...args);
  }
  /**
   * Executes all commands in a transaction.
   *
   * Complexity: Depends on commands in the transaction
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  exec(...args) {
    return this.#processCommand("exec", ...args);
  }
  /**
   * Determines whether one or more keys exist.
   *
   * Complexity: O(N) where N is the number of keys to check.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EXISTS(...args) {
    return this.#processCommand("EXISTS", ...args);
  }
  /**
   * Determines whether one or more keys exist.
   *
   * Complexity: O(N) where N is the number of keys to check.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  exists(...args) {
    return this.#processCommand("exists", ...args);
  }
  /**
   * Sets the expiration time of a key in seconds.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EXPIRE(...args) {
    return this.#processCommand("EXPIRE", ...args);
  }
  /**
   * Sets the expiration time of a key in seconds.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  expire(...args) {
    return this.#processCommand("expire", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EXPIREAT(...args) {
    return this.#processCommand("EXPIREAT", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  expireat(...args) {
    return this.#processCommand("expireat", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  EXPIRETIME(...args) {
    return this.#processCommand("EXPIRETIME", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  expiretime(...args) {
    return this.#processCommand("expiretime", ...args);
  }
  /**
   * Starts a coordinated failover from a server to one of its replicas.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  FAILOVER(...args) {
    return this.#processCommand("FAILOVER", ...args);
  }
  /**
   * Starts a coordinated failover from a server to one of its replicas.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  failover(...args) {
    return this.#processCommand("failover", ...args);
  }
  /**
   * Invokes a function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  FCALL(...args) {
    return this.#processCommand("FCALL", ...args);
  }
  /**
   * Invokes a function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  fcall(...args) {
    return this.#processCommand("fcall", ...args);
  }
  /**
   * Invokes a read-only function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  FCALL_RO(...args) {
    return this.#processCommand("FCALL_RO", ...args);
  }
  /**
   * Invokes a read-only function.
   *
   * Complexity: Depends on the function that is executed.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  fcall_ro(...args) {
    return this.#processCommand("fcall_ro", ...args);
  }
  /**
   * Removes all keys from all databases.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  FLUSHALL(...args) {
    return this.#processCommand("FLUSHALL", ...args);
  }
  /**
   * Removes all keys from all databases.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  flushall(...args) {
    return this.#processCommand("flushall", ...args);
  }
  /**
   * Remove all keys from the current database.
   *
   * Complexity: O(N) where N is the number of keys in the selected database
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  FLUSHDB(...args) {
    return this.#processCommand("FLUSHDB", ...args);
  }
  /**
   * Remove all keys from the current database.
   *
   * Complexity: O(N) where N is the number of keys in the selected database
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  flushdb(...args) {
    return this.#processCommand("flushdb", ...args);
  }
  /**
   * A container for function commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  FUNCTION(...args) {
    return this.#processCommand("FUNCTION", ...args);
  }
  /**
   * A container for function commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  function(...args) {
    return this.#processCommand("function", ...args);
  }
  /**
   * Adds one or more members to a geospatial index. The key is created if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEOADD(...args) {
    return this.#processCommand("GEOADD", ...args);
  }
  /**
   * Adds one or more members to a geospatial index. The key is created if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  geoadd(...args) {
    return this.#processCommand("geoadd", ...args);
  }
  /**
   * Returns the distance between two members of a geospatial index.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEODIST(...args) {
    return this.#processCommand("GEODIST", ...args);
  }
  /**
   * Returns the distance between two members of a geospatial index.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  geodist(...args) {
    return this.#processCommand("geodist", ...args);
  }
  /**
   * Returns members from a geospatial index as geohash strings.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEOHASH(...args) {
    return this.#processCommand("GEOHASH", ...args);
  }
  /**
   * Returns members from a geospatial index as geohash strings.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  geohash(...args) {
    return this.#processCommand("geohash", ...args);
  }
  /**
   * Returns the longitude and latitude of members from a geospatial index.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEOPOS(...args) {
    return this.#processCommand("GEOPOS", ...args);
  }
  /**
   * Returns the longitude and latitude of members from a geospatial index.
   *
   * Complexity: O(1) for each member requested.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  geopos(...args) {
    return this.#processCommand("geopos", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a coordinate, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEORADIUS(...args) {
    return this.#processCommand("GEORADIUS", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a coordinate, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  georadius(...args) {
    return this.#processCommand("georadius", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a coordinate.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEORADIUS_RO(...args) {
    return this.#processCommand("GEORADIUS_RO", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a coordinate.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  georadius_ro(...args) {
    return this.#processCommand("georadius_ro", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a member, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEORADIUSBYMEMBER(...args) {
    return this.#processCommand("GEORADIUSBYMEMBER", ...args);
  }
  /**
   * Queries a geospatial index for members within a distance from a member, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  georadiusbymember(...args) {
    return this.#processCommand("georadiusbymember", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a member.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEORADIUSBYMEMBER_RO(...args) {
    return this.#processCommand("GEORADIUSBYMEMBER_RO", ...args);
  }
  /**
   * Returns members from a geospatial index that are within a distance from a member.
   *
   * Complexity: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
   *
   * Available since 3.2.10
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  georadiusbymember_ro(...args) {
    return this.#processCommand("georadiusbymember_ro", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEOSEARCH(...args) {
    return this.#processCommand("GEOSEARCH", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  geosearch(...args) {
    return this.#processCommand("geosearch", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GEOSEARCHSTORE(...args) {
    return this.#processCommand("GEOSEARCHSTORE", ...args);
  }
  /**
   * Queries a geospatial index for members inside an area of a box or a circle, optionally stores the result.
   *
   * Complexity: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  geosearchstore(...args) {
    return this.#processCommand("geosearchstore", ...args);
  }
  /**
   * Returns the string value of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GET(...args) {
    return this.#processCommand("GET", ...args);
  }
  /**
   * Returns the string value of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  get(...args) {
    return this.#processCommand("get", ...args);
  }
  /**
   * Returns a bit value by offset.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GETBIT(...args) {
    return this.#processCommand("GETBIT", ...args);
  }
  /**
   * Returns a bit value by offset.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  getbit(...args) {
    return this.#processCommand("getbit", ...args);
  }
  /**
   * Returns the string value of a key after deleting the key.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GETDEL(...args) {
    return this.#processCommand("GETDEL", ...args);
  }
  /**
   * Returns the string value of a key after deleting the key.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  getdel(...args) {
    return this.#processCommand("getdel", ...args);
  }
  /**
   * Returns the string value of a key after setting its expiration time.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GETEX(...args) {
    return this.#processCommand("GETEX", ...args);
  }
  /**
   * Returns the string value of a key after setting its expiration time.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  getex(...args) {
    return this.#processCommand("getex", ...args);
  }
  /**
   * Returns a substring of the string stored at a key.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 2.4.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GETRANGE(...args) {
    return this.#processCommand("GETRANGE", ...args);
  }
  /**
   * Returns a substring of the string stored at a key.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 2.4.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  getrange(...args) {
    return this.#processCommand("getrange", ...args);
  }
  /**
   * Returns the previous string value of a key after setting it to a new value.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  GETSET(...args) {
    return this.#processCommand("GETSET", ...args);
  }
  /**
   * Returns the previous string value of a key after setting it to a new value.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  getset(...args) {
    return this.#processCommand("getset", ...args);
  }
  /**
   * Deletes one or more fields and their values from a hash. Deletes the hash if no fields remain.
   *
   * Complexity: O(N) where N is the number of fields to be removed.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HDEL(...args) {
    return this.#processCommand("HDEL", ...args);
  }
  /**
   * Deletes one or more fields and their values from a hash. Deletes the hash if no fields remain.
   *
   * Complexity: O(N) where N is the number of fields to be removed.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hdel(...args) {
    return this.#processCommand("hdel", ...args);
  }
  /**
   * Handshakes with the Redis server.
   *
   * Complexity: O(1)
   *
   * Available since 6.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HELLO(...args) {
    return this.#processCommand("HELLO", ...args);
  }
  /**
   * Handshakes with the Redis server.
   *
   * Complexity: O(1)
   *
   * Available since 6.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hello(...args) {
    return this.#processCommand("hello", ...args);
  }
  /**
   * Determines whether a field exists in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HEXISTS(...args) {
    return this.#processCommand("HEXISTS", ...args);
  }
  /**
   * Determines whether a field exists in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hexists(...args) {
    return this.#processCommand("hexists", ...args);
  }
  /**
   * Returns the value of a field in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HGET(...args) {
    return this.#processCommand("HGET", ...args);
  }
  /**
   * Returns the value of a field in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hget(...args) {
    return this.#processCommand("hget", ...args);
  }
  /**
   * Returns all fields and values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HGETALL(...args) {
    return this.#processCommand("HGETALL", ...args);
  }
  /**
   * Returns all fields and values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hgetall(...args) {
    return this.#processCommand("hgetall", ...args);
  }
  /**
   * Increments the integer value of a field in a hash by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HINCRBY(...args) {
    return this.#processCommand("HINCRBY", ...args);
  }
  /**
   * Increments the integer value of a field in a hash by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hincrby(...args) {
    return this.#processCommand("hincrby", ...args);
  }
  /**
   * Increments the floating point value of a field by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HINCRBYFLOAT(...args) {
    return this.#processCommand("HINCRBYFLOAT", ...args);
  }
  /**
   * Increments the floating point value of a field by a number. Uses 0 as initial value if the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hincrbyfloat(...args) {
    return this.#processCommand("hincrbyfloat", ...args);
  }
  /**
   * Returns all fields in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HKEYS(...args) {
    return this.#processCommand("HKEYS", ...args);
  }
  /**
   * Returns all fields in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hkeys(...args) {
    return this.#processCommand("hkeys", ...args);
  }
  /**
   * Returns the number of fields in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HLEN(...args) {
    return this.#processCommand("HLEN", ...args);
  }
  /**
   * Returns the number of fields in a hash.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hlen(...args) {
    return this.#processCommand("hlen", ...args);
  }
  /**
   * Returns the values of all fields in a hash.
   *
   * Complexity: O(N) where N is the number of fields being requested.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HMGET(...args) {
    return this.#processCommand("HMGET", ...args);
  }
  /**
   * Returns the values of all fields in a hash.
   *
   * Complexity: O(N) where N is the number of fields being requested.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hmget(...args) {
    return this.#processCommand("hmget", ...args);
  }
  /**
   * Sets the values of multiple fields.
   *
   * Complexity: O(N) where N is the number of fields being set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HMSET(...args) {
    return this.#processCommand("HMSET", ...args);
  }
  /**
   * Sets the values of multiple fields.
   *
   * Complexity: O(N) where N is the number of fields being set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hmset(...args) {
    return this.#processCommand("hmset", ...args);
  }
  /**
   * Returns one or more random fields from a hash.
   *
   * Complexity: O(N) where N is the number of fields returned
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HRANDFIELD(...args) {
    return this.#processCommand("HRANDFIELD", ...args);
  }
  /**
   * Returns one or more random fields from a hash.
   *
   * Complexity: O(N) where N is the number of fields returned
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hrandfield(...args) {
    return this.#processCommand("hrandfield", ...args);
  }
  /**
   * Iterates over fields and values of a hash.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HSCAN(...args) {
    return this.#processCommand("HSCAN", ...args);
  }
  /**
   * Iterates over fields and values of a hash.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hscan(...args) {
    return this.#processCommand("hscan", ...args);
  }
  /**
   * Creates or modifies the value of a field in a hash.
   *
   * Complexity: O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HSET(...args) {
    return this.#processCommand("HSET", ...args);
  }
  /**
   * Creates or modifies the value of a field in a hash.
   *
   * Complexity: O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hset(...args) {
    return this.#processCommand("hset", ...args);
  }
  /**
   * Sets the value of a field in a hash only when the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HSETNX(...args) {
    return this.#processCommand("HSETNX", ...args);
  }
  /**
   * Sets the value of a field in a hash only when the field doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hsetnx(...args) {
    return this.#processCommand("hsetnx", ...args);
  }
  /**
   * Returns the length of the value of a field.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HSTRLEN(...args) {
    return this.#processCommand("HSTRLEN", ...args);
  }
  /**
   * Returns the length of the value of a field.
   *
   * Complexity: O(1)
   *
   * Available since 3.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hstrlen(...args) {
    return this.#processCommand("hstrlen", ...args);
  }
  /**
   * Returns all values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  HVALS(...args) {
    return this.#processCommand("HVALS", ...args);
  }
  /**
   * Returns all values in a hash.
   *
   * Complexity: O(N) where N is the size of the hash.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  hvals(...args) {
    return this.#processCommand("hvals", ...args);
  }
  /**
   * Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  INCR(...args) {
    return this.#processCommand("INCR", ...args);
  }
  /**
   * Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  incr(...args) {
    return this.#processCommand("incr", ...args);
  }
  /**
   * Increments the integer value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  INCRBY(...args) {
    return this.#processCommand("INCRBY", ...args);
  }
  /**
   * Increments the integer value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  incrby(...args) {
    return this.#processCommand("incrby", ...args);
  }
  /**
   * Increment the floating point value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  INCRBYFLOAT(...args) {
    return this.#processCommand("INCRBYFLOAT", ...args);
  }
  /**
   * Increment the floating point value of a key by a number. Uses 0 as initial value if the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  incrbyfloat(...args) {
    return this.#processCommand("incrbyfloat", ...args);
  }
  /**
   * Returns information and statistics about the server.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  INFO(...args) {
    return this.#processCommand("INFO", ...args);
  }
  /**
   * Returns information and statistics about the server.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  info(...args) {
    return this.#processCommand("info", ...args);
  }
  /**
   * Returns all key names that match a pattern.
   *
   * Complexity: O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  KEYS(...args) {
    return this.#processCommand("KEYS", ...args);
  }
  /**
   * Returns all key names that match a pattern.
   *
   * Complexity: O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  keys(...args) {
    return this.#processCommand("keys", ...args);
  }
  /**
   * Returns the Unix timestamp of the last successful save to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LASTSAVE(...args) {
    return this.#processCommand("LASTSAVE", ...args);
  }
  /**
   * Returns the Unix timestamp of the last successful save to disk.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lastsave(...args) {
    return this.#processCommand("lastsave", ...args);
  }
  /**
   * A container for latency diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.13
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LATENCY(...args) {
    return this.#processCommand("LATENCY", ...args);
  }
  /**
   * A container for latency diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.13
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  latency(...args) {
    return this.#processCommand("latency", ...args);
  }
  /**
   * Finds the longest common substring.
   *
   * Complexity: O(N*M) where N and M are the lengths of s1 and s2, respectively
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LCS(...args) {
    return this.#processCommand("LCS", ...args);
  }
  /**
   * Finds the longest common substring.
   *
   * Complexity: O(N*M) where N and M are the lengths of s1 and s2, respectively
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lcs(...args) {
    return this.#processCommand("lcs", ...args);
  }
  /**
   * Returns an element from a list by its index.
   *
   * Complexity: O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LINDEX(...args) {
    return this.#processCommand("LINDEX", ...args);
  }
  /**
   * Returns an element from a list by its index.
   *
   * Complexity: O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lindex(...args) {
    return this.#processCommand("lindex", ...args);
  }
  /**
   * Inserts an element before or after another element in a list.
   *
   * Complexity: O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LINSERT(...args) {
    return this.#processCommand("LINSERT", ...args);
  }
  /**
   * Inserts an element before or after another element in a list.
   *
   * Complexity: O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  linsert(...args) {
    return this.#processCommand("linsert", ...args);
  }
  /**
   * Returns the length of a list.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LLEN(...args) {
    return this.#processCommand("LLEN", ...args);
  }
  /**
   * Returns the length of a list.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  llen(...args) {
    return this.#processCommand("llen", ...args);
  }
  /**
   * Returns an element after popping it from one list and pushing it to another. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LMOVE(...args) {
    return this.#processCommand("LMOVE", ...args);
  }
  /**
   * Returns an element after popping it from one list and pushing it to another. Deletes the list if the last element was moved.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lmove(...args) {
    return this.#processCommand("lmove", ...args);
  }
  /**
   * Returns multiple elements from a list after removing them. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LMPOP(...args) {
    return this.#processCommand("LMPOP", ...args);
  }
  /**
   * Returns multiple elements from a list after removing them. Deletes the list if the last element was popped.
   *
   * Complexity: O(N+M) where N is the number of provided keys and M is the number of elements returned.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lmpop(...args) {
    return this.#processCommand("lmpop", ...args);
  }
  /**
   * Displays computer art and the Redis version
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LOLWUT(...args) {
    return this.#processCommand("LOLWUT", ...args);
  }
  /**
   * Displays computer art and the Redis version
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lolwut(...args) {
    return this.#processCommand("lolwut", ...args);
  }
  /**
   * Returns the first elements in a list after removing it. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LPOP(...args) {
    return this.#processCommand("LPOP", ...args);
  }
  /**
   * Returns the first elements in a list after removing it. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lpop(...args) {
    return this.#processCommand("lpop", ...args);
  }
  /**
   * Returns the index of matching elements in a list.
   *
   * Complexity: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
   *
   * Available since 6.0.6
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LPOS(...args) {
    return this.#processCommand("LPOS", ...args);
  }
  /**
   * Returns the index of matching elements in a list.
   *
   * Complexity: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
   *
   * Available since 6.0.6
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lpos(...args) {
    return this.#processCommand("lpos", ...args);
  }
  /**
   * Prepends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LPUSH(...args) {
    return this.#processCommand("LPUSH", ...args);
  }
  /**
   * Prepends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lpush(...args) {
    return this.#processCommand("lpush", ...args);
  }
  /**
   * Prepends one or more elements to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LPUSHX(...args) {
    return this.#processCommand("LPUSHX", ...args);
  }
  /**
   * Prepends one or more elements to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lpushx(...args) {
    return this.#processCommand("lpushx", ...args);
  }
  /**
   * Returns a range of elements from a list.
   *
   * Complexity: O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LRANGE(...args) {
    return this.#processCommand("LRANGE", ...args);
  }
  /**
   * Returns a range of elements from a list.
   *
   * Complexity: O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lrange(...args) {
    return this.#processCommand("lrange", ...args);
  }
  /**
   * Removes elements from a list. Deletes the list if the last element was removed.
   *
   * Complexity: O(N+M) where N is the length of the list and M is the number of elements removed.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LREM(...args) {
    return this.#processCommand("LREM", ...args);
  }
  /**
   * Removes elements from a list. Deletes the list if the last element was removed.
   *
   * Complexity: O(N+M) where N is the length of the list and M is the number of elements removed.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lrem(...args) {
    return this.#processCommand("lrem", ...args);
  }
  /**
   * Sets the value of an element in a list by its index.
   *
   * Complexity: O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LSET(...args) {
    return this.#processCommand("LSET", ...args);
  }
  /**
   * Sets the value of an element in a list by its index.
   *
   * Complexity: O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  lset(...args) {
    return this.#processCommand("lset", ...args);
  }
  /**
   * Removes elements from both ends a list. Deletes the list if all elements were trimmed.
   *
   * Complexity: O(N) where N is the number of elements to be removed by the operation.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  LTRIM(...args) {
    return this.#processCommand("LTRIM", ...args);
  }
  /**
   * Removes elements from both ends a list. Deletes the list if all elements were trimmed.
   *
   * Complexity: O(N) where N is the number of elements to be removed by the operation.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ltrim(...args) {
    return this.#processCommand("ltrim", ...args);
  }
  /**
   * A container for memory diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MEMORY(...args) {
    return this.#processCommand("MEMORY", ...args);
  }
  /**
   * A container for memory diagnostics commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  memory(...args) {
    return this.#processCommand("memory", ...args);
  }
  /**
   * Atomically returns the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to retrieve.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MGET(...args) {
    return this.#processCommand("MGET", ...args);
  }
  /**
   * Atomically returns the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to retrieve.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  mget(...args) {
    return this.#processCommand("mget", ...args);
  }
  /**
   * Atomically transfers a key from one Redis instance to another.
   *
   * Complexity: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MIGRATE(...args) {
    return this.#processCommand("MIGRATE", ...args);
  }
  /**
   * Atomically transfers a key from one Redis instance to another.
   *
   * Complexity: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  migrate(...args) {
    return this.#processCommand("migrate", ...args);
  }
  /**
   * A container for module commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MODULE(...args) {
    return this.#processCommand("MODULE", ...args);
  }
  /**
   * A container for module commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  module(...args) {
    return this.#processCommand("module", ...args);
  }
  /**
   * Listens for all requests received by the server in real-time.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MONITOR(...args) {
    return this.#processCommand("MONITOR", ...args);
  }
  /**
   * Listens for all requests received by the server in real-time.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  monitor(...args) {
    return this.#processCommand("monitor", ...args);
  }
  /**
   * Moves a key to another database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MOVE(...args) {
    return this.#processCommand("MOVE", ...args);
  }
  /**
   * Moves a key to another database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  move(...args) {
    return this.#processCommand("move", ...args);
  }
  /**
   * Atomically creates or modifies the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MSET(...args) {
    return this.#processCommand("MSET", ...args);
  }
  /**
   * Atomically creates or modifies the string values of one or more keys.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  mset(...args) {
    return this.#processCommand("mset", ...args);
  }
  /**
   * Atomically modifies the string values of one or more keys only when all keys don't exist.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  MSETNX(...args) {
    return this.#processCommand("MSETNX", ...args);
  }
  /**
   * Atomically modifies the string values of one or more keys only when all keys don't exist.
   *
   * Complexity: O(N) where N is the number of keys to set.
   *
   * Available since 1.0.1
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  msetnx(...args) {
    return this.#processCommand("msetnx", ...args);
  }
  /**
   * A container for object introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.3
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  OBJECT(...args) {
    return this.#processCommand("OBJECT", ...args);
  }
  /**
   * A container for object introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.3
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  object(...args) {
    return this.#processCommand("object", ...args);
  }
  /**
   * Removes the expiration time of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PERSIST(...args) {
    return this.#processCommand("PERSIST", ...args);
  }
  /**
   * Removes the expiration time of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  persist(...args) {
    return this.#processCommand("persist", ...args);
  }
  /**
   * Sets the expiration time of a key in milliseconds.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PEXPIRE(...args) {
    return this.#processCommand("PEXPIRE", ...args);
  }
  /**
   * Sets the expiration time of a key in milliseconds.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pexpire(...args) {
    return this.#processCommand("pexpire", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PEXPIREAT(...args) {
    return this.#processCommand("PEXPIREAT", ...args);
  }
  /**
   * Sets the expiration time of a key to a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pexpireat(...args) {
    return this.#processCommand("pexpireat", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PEXPIRETIME(...args) {
    return this.#processCommand("PEXPIRETIME", ...args);
  }
  /**
   * Returns the expiration time of a key as a Unix milliseconds timestamp.
   *
   * Complexity: O(1)
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pexpiretime(...args) {
    return this.#processCommand("pexpiretime", ...args);
  }
  /**
   * Adds elements to a HyperLogLog key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) to add every element.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PFADD(...args) {
    return this.#processCommand("PFADD", ...args);
  }
  /**
   * Adds elements to a HyperLogLog key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) to add every element.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pfadd(...args) {
    return this.#processCommand("pfadd", ...args);
  }
  /**
   * Returns the approximated cardinality of the set(s) observed by the HyperLogLog key(s).
   *
   * Complexity: O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PFCOUNT(...args) {
    return this.#processCommand("PFCOUNT", ...args);
  }
  /**
   * Returns the approximated cardinality of the set(s) observed by the HyperLogLog key(s).
   *
   * Complexity: O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pfcount(...args) {
    return this.#processCommand("pfcount", ...args);
  }
  /**
   * Internal commands for debugging HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PFDEBUG(...args) {
    return this.#processCommand("PFDEBUG", ...args);
  }
  /**
   * Internal commands for debugging HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pfdebug(...args) {
    return this.#processCommand("pfdebug", ...args);
  }
  /**
   * Merges one or more HyperLogLog values into a single key.
   *
   * Complexity: O(N) to merge N HyperLogLogs, but with high constant times.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PFMERGE(...args) {
    return this.#processCommand("PFMERGE", ...args);
  }
  /**
   * Merges one or more HyperLogLog values into a single key.
   *
   * Complexity: O(N) to merge N HyperLogLogs, but with high constant times.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pfmerge(...args) {
    return this.#processCommand("pfmerge", ...args);
  }
  /**
   * An internal command for testing HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PFSELFTEST(...args) {
    return this.#processCommand("PFSELFTEST", ...args);
  }
  /**
   * An internal command for testing HyperLogLog values.
   *
   * Complexity: N/A
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pfselftest(...args) {
    return this.#processCommand("pfselftest", ...args);
  }
  /**
   * Returns the server's liveliness response.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PING(...args) {
    return this.#processCommand("PING", ...args);
  }
  /**
   * Returns the server's liveliness response.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ping(...args) {
    return this.#processCommand("ping", ...args);
  }
  /**
   * Sets both string value and expiration time in milliseconds of a key. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PSETEX(...args) {
    return this.#processCommand("PSETEX", ...args);
  }
  /**
   * Sets both string value and expiration time in milliseconds of a key. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  psetex(...args) {
    return this.#processCommand("psetex", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PSYNC(...args) {
    return this.#processCommand("PSYNC", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  psync(...args) {
    return this.#processCommand("psync", ...args);
  }
  /**
   * Returns the expiration time in milliseconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PTTL(...args) {
    return this.#processCommand("PTTL", ...args);
  }
  /**
   * Returns the expiration time in milliseconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pttl(...args) {
    return this.#processCommand("pttl", ...args);
  }
  /**
   * Posts a message to a channel.
   *
   * Complexity: O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PUBLISH(...args) {
    return this.#processCommand("PUBLISH", ...args);
  }
  /**
   * Posts a message to a channel.
   *
   * Complexity: O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  publish(...args) {
    return this.#processCommand("publish", ...args);
  }
  /**
   * A container for Pub/Sub commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  PUBSUB(...args) {
    return this.#processCommand("PUBSUB", ...args);
  }
  /**
   * A container for Pub/Sub commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  pubsub(...args) {
    return this.#processCommand("pubsub", ...args);
  }
  /**
   * Closes the connection.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  QUIT(...args) {
    return this.#processCommand("QUIT", ...args);
  }
  /**
   * Closes the connection.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  quit(...args) {
    return this.#processCommand("quit", ...args);
  }
  /**
   * Returns a random key name from the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RANDOMKEY(...args) {
    return this.#processCommand("RANDOMKEY", ...args);
  }
  /**
   * Returns a random key name from the database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  randomkey(...args) {
    return this.#processCommand("randomkey", ...args);
  }
  /**
   * Enables read-only queries for a connection to a Redis Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  READONLY(...args) {
    return this.#processCommand("READONLY", ...args);
  }
  /**
   * Enables read-only queries for a connection to a Redis Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  readonly(...args) {
    return this.#processCommand("readonly", ...args);
  }
  /**
   * Enables read-write queries for a connection to a Reids Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  READWRITE(...args) {
    return this.#processCommand("READWRITE", ...args);
  }
  /**
   * Enables read-write queries for a connection to a Reids Cluster replica node.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  readwrite(...args) {
    return this.#processCommand("readwrite", ...args);
  }
  /**
   * Renames a key and overwrites the destination.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RENAME(...args) {
    return this.#processCommand("RENAME", ...args);
  }
  /**
   * Renames a key and overwrites the destination.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  rename(...args) {
    return this.#processCommand("rename", ...args);
  }
  /**
   * Renames a key only when the target key name doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RENAMENX(...args) {
    return this.#processCommand("RENAMENX", ...args);
  }
  /**
   * Renames a key only when the target key name doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  renamenx(...args) {
    return this.#processCommand("renamenx", ...args);
  }
  /**
   * An internal command for configuring the replication stream.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  REPLCONF(...args) {
    return this.#processCommand("REPLCONF", ...args);
  }
  /**
   * An internal command for configuring the replication stream.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  replconf(...args) {
    return this.#processCommand("replconf", ...args);
  }
  /**
   * Configures a server as replica of another, or promotes it to a master.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  REPLICAOF(...args) {
    return this.#processCommand("REPLICAOF", ...args);
  }
  /**
   * Configures a server as replica of another, or promotes it to a master.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  replicaof(...args) {
    return this.#processCommand("replicaof", ...args);
  }
  /**
   * Resets the connection.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RESET(...args) {
    return this.#processCommand("RESET", ...args);
  }
  /**
   * Resets the connection.
   *
   * Complexity: O(1)
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  reset(...args) {
    return this.#processCommand("reset", ...args);
  }
  /**
   * Creates a key from the serialized representation of a value.
   *
   * Complexity: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RESTORE(...args) {
    return this.#processCommand("RESTORE", ...args);
  }
  /**
   * Creates a key from the serialized representation of a value.
   *
   * Complexity: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  restore(...args) {
    return this.#processCommand("restore", ...args);
  }
  /**
   * Returns the replication role.
   *
   * Complexity: O(1)
   *
   * Available since 2.8.12
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ROLE(...args) {
    return this.#processCommand("ROLE", ...args);
  }
  /**
   * Returns the replication role.
   *
   * Complexity: O(1)
   *
   * Available since 2.8.12
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  role(...args) {
    return this.#processCommand("role", ...args);
  }
  /**
   * Returns and removes the last elements of a list. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RPOP(...args) {
    return this.#processCommand("RPOP", ...args);
  }
  /**
   * Returns and removes the last elements of a list. Deletes the list if the last element was popped.
   *
   * Complexity: O(N) where N is the number of elements returned
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  rpop(...args) {
    return this.#processCommand("rpop", ...args);
  }
  /**
   * Returns the last element of a list after removing and pushing it to another list. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RPOPLPUSH(...args) {
    return this.#processCommand("RPOPLPUSH", ...args);
  }
  /**
   * Returns the last element of a list after removing and pushing it to another list. Deletes the list if the last element was popped.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  rpoplpush(...args) {
    return this.#processCommand("rpoplpush", ...args);
  }
  /**
   * Appends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RPUSH(...args) {
    return this.#processCommand("RPUSH", ...args);
  }
  /**
   * Appends one or more elements to a list. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  rpush(...args) {
    return this.#processCommand("rpush", ...args);
  }
  /**
   * Appends an element to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  RPUSHX(...args) {
    return this.#processCommand("RPUSHX", ...args);
  }
  /**
   * Appends an element to a list only when the list exists.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  rpushx(...args) {
    return this.#processCommand("rpushx", ...args);
  }
  /**
   * Adds one or more members to a set. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SADD(...args) {
    return this.#processCommand("SADD", ...args);
  }
  /**
   * Adds one or more members to a set. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sadd(...args) {
    return this.#processCommand("sadd", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SAVE(...args) {
    return this.#processCommand("SAVE", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk.
   *
   * Complexity: O(N) where N is the total number of keys in all databases
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  save(...args) {
    return this.#processCommand("save", ...args);
  }
  /**
   * Iterates over the key names in the database.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SCAN(...args) {
    return this.#processCommand("SCAN", ...args);
  }
  /**
   * Iterates over the key names in the database.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  scan(...args) {
    return this.#processCommand("scan", ...args);
  }
  /**
   * Returns the number of members in a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SCARD(...args) {
    return this.#processCommand("SCARD", ...args);
  }
  /**
   * Returns the number of members in a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  scard(...args) {
    return this.#processCommand("scard", ...args);
  }
  /**
   * A container for Lua scripts management commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SCRIPT(...args) {
    return this.#processCommand("SCRIPT", ...args);
  }
  /**
   * A container for Lua scripts management commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  script(...args) {
    return this.#processCommand("script", ...args);
  }
  /**
   * Returns the difference of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SDIFF(...args) {
    return this.#processCommand("SDIFF", ...args);
  }
  /**
   * Returns the difference of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sdiff(...args) {
    return this.#processCommand("sdiff", ...args);
  }
  /**
   * Stores the difference of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SDIFFSTORE(...args) {
    return this.#processCommand("SDIFFSTORE", ...args);
  }
  /**
   * Stores the difference of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sdiffstore(...args) {
    return this.#processCommand("sdiffstore", ...args);
  }
  /**
   * Changes the selected database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SELECT(...args) {
    return this.#processCommand("SELECT", ...args);
  }
  /**
   * Changes the selected database.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  select(...args) {
    return this.#processCommand("select", ...args);
  }
  /**
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SET(...args) {
    return this.#processCommand("SET", ...args);
  }
  /**
   * Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  set(...args) {
    return this.#processCommand("set", ...args);
  }
  /**
   * Sets or clears the bit at offset of the string value. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SETBIT(...args) {
    return this.#processCommand("SETBIT", ...args);
  }
  /**
   * Sets or clears the bit at offset of the string value. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  setbit(...args) {
    return this.#processCommand("setbit", ...args);
  }
  /**
   * Sets the string value and expiration time of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SETEX(...args) {
    return this.#processCommand("SETEX", ...args);
  }
  /**
   * Sets the string value and expiration time of a key. Creates the key if it doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  setex(...args) {
    return this.#processCommand("setex", ...args);
  }
  /**
   * Set the string value of a key only when the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SETNX(...args) {
    return this.#processCommand("SETNX", ...args);
  }
  /**
   * Set the string value of a key only when the key doesn't exist.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  setnx(...args) {
    return this.#processCommand("setnx", ...args);
  }
  /**
   * Overwrites a part of a string value with another by an offset. Creates the key if it doesn't exist.
   *
   * Complexity: O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SETRANGE(...args) {
    return this.#processCommand("SETRANGE", ...args);
  }
  /**
   * Overwrites a part of a string value with another by an offset. Creates the key if it doesn't exist.
   *
   * Complexity: O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  setrange(...args) {
    return this.#processCommand("setrange", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk and shuts down the Redis server.
   *
   * Complexity: O(N) when saving, where N is the total number of keys in all databases when saving data, otherwise O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SHUTDOWN(...args) {
    return this.#processCommand("SHUTDOWN", ...args);
  }
  /**
   * Synchronously saves the database(s) to disk and shuts down the Redis server.
   *
   * Complexity: O(N) when saving, where N is the total number of keys in all databases when saving data, otherwise O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  shutdown(...args) {
    return this.#processCommand("shutdown", ...args);
  }
  /**
   * Returns the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SINTER(...args) {
    return this.#processCommand("SINTER", ...args);
  }
  /**
   * Returns the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sinter(...args) {
    return this.#processCommand("sinter", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SINTERCARD(...args) {
    return this.#processCommand("SINTERCARD", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sets.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sintercard(...args) {
    return this.#processCommand("sintercard", ...args);
  }
  /**
   * Stores the intersect of multiple sets in a key.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SINTERSTORE(...args) {
    return this.#processCommand("SINTERSTORE", ...args);
  }
  /**
   * Stores the intersect of multiple sets in a key.
   *
   * Complexity: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sinterstore(...args) {
    return this.#processCommand("sinterstore", ...args);
  }
  /**
   * Determines whether a member belongs to a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SISMEMBER(...args) {
    return this.#processCommand("SISMEMBER", ...args);
  }
  /**
   * Determines whether a member belongs to a set.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sismember(...args) {
    return this.#processCommand("sismember", ...args);
  }
  /**
   * Sets a Redis server as a replica of another, or promotes it to being a master.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SLAVEOF(...args) {
    return this.#processCommand("SLAVEOF", ...args);
  }
  /**
   * Sets a Redis server as a replica of another, or promotes it to being a master.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  slaveof(...args) {
    return this.#processCommand("slaveof", ...args);
  }
  /**
   * A container for slow log commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.12
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SLOWLOG(...args) {
    return this.#processCommand("SLOWLOG", ...args);
  }
  /**
   * A container for slow log commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 2.2.12
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  slowlog(...args) {
    return this.#processCommand("slowlog", ...args);
  }
  /**
   * Returns all members of a set.
   *
   * Complexity: O(N) where N is the set cardinality.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SMEMBERS(...args) {
    return this.#processCommand("SMEMBERS", ...args);
  }
  /**
   * Returns all members of a set.
   *
   * Complexity: O(N) where N is the set cardinality.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  smembers(...args) {
    return this.#processCommand("smembers", ...args);
  }
  /**
   * Determines whether multiple members belong to a set.
   *
   * Complexity: O(N) where N is the number of elements being checked for membership
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SMISMEMBER(...args) {
    return this.#processCommand("SMISMEMBER", ...args);
  }
  /**
   * Determines whether multiple members belong to a set.
   *
   * Complexity: O(N) where N is the number of elements being checked for membership
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  smismember(...args) {
    return this.#processCommand("smismember", ...args);
  }
  /**
   * Moves a member from one set to another.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SMOVE(...args) {
    return this.#processCommand("SMOVE", ...args);
  }
  /**
   * Moves a member from one set to another.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  smove(...args) {
    return this.#processCommand("smove", ...args);
  }
  /**
   * Sorts the elements in a list, a set, or a sorted set, optionally storing the result.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SORT(...args) {
    return this.#processCommand("SORT", ...args);
  }
  /**
   * Sorts the elements in a list, a set, or a sorted set, optionally storing the result.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sort(...args) {
    return this.#processCommand("sort", ...args);
  }
  /**
   * Returns the sorted elements of a list, a set, or a sorted set.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SORT_RO(...args) {
    return this.#processCommand("SORT_RO", ...args);
  }
  /**
   * Returns the sorted elements of a list, a set, or a sorted set.
   *
   * Complexity: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sort_ro(...args) {
    return this.#processCommand("sort_ro", ...args);
  }
  /**
   * Returns one or more random members from a set after removing them. Deletes the set if the last member was popped.
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the value of the passed count.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SPOP(...args) {
    return this.#processCommand("SPOP", ...args);
  }
  /**
   * Returns one or more random members from a set after removing them. Deletes the set if the last member was popped.
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the value of the passed count.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  spop(...args) {
    return this.#processCommand("spop", ...args);
  }
  /**
   * Post a message to a shard channel
   *
   * Complexity: O(N) where N is the number of clients subscribed to the receiving shard channel.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SPUBLISH(...args) {
    return this.#processCommand("SPUBLISH", ...args);
  }
  /**
   * Post a message to a shard channel
   *
   * Complexity: O(N) where N is the number of clients subscribed to the receiving shard channel.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  spublish(...args) {
    return this.#processCommand("spublish", ...args);
  }
  /**
   * Get one or multiple random members from a set
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SRANDMEMBER(...args) {
    return this.#processCommand("SRANDMEMBER", ...args);
  }
  /**
   * Get one or multiple random members from a set
   *
   * Complexity: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  srandmember(...args) {
    return this.#processCommand("srandmember", ...args);
  }
  /**
   * Removes one or more members from a set. Deletes the set if the last member was removed.
   *
   * Complexity: O(N) where N is the number of members to be removed.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SREM(...args) {
    return this.#processCommand("SREM", ...args);
  }
  /**
   * Removes one or more members from a set. Deletes the set if the last member was removed.
   *
   * Complexity: O(N) where N is the number of members to be removed.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  srem(...args) {
    return this.#processCommand("srem", ...args);
  }
  /**
   * Iterates over members of a set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SSCAN(...args) {
    return this.#processCommand("SSCAN", ...args);
  }
  /**
   * Iterates over members of a set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sscan(...args) {
    return this.#processCommand("sscan", ...args);
  }
  /**
   * Listens for messages published to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to subscribe to.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SSUBSCRIBE(...args) {
    return this.#processCommand("SSUBSCRIBE", ...args);
  }
  /**
   * Listens for messages published to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to subscribe to.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ssubscribe(...args) {
    return this.#processCommand("ssubscribe", ...args);
  }
  /**
   * Returns the length of a string value.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  STRLEN(...args) {
    return this.#processCommand("STRLEN", ...args);
  }
  /**
   * Returns the length of a string value.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  strlen(...args) {
    return this.#processCommand("strlen", ...args);
  }
  /**
   * Returns a substring from a string value.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SUBSTR(...args) {
    return this.#processCommand("SUBSTR", ...args);
  }
  /**
   * Returns a substring from a string value.
   *
   * Complexity: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  substr(...args) {
    return this.#processCommand("substr", ...args);
  }
  /**
   * Returns the union of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SUNION(...args) {
    return this.#processCommand("SUNION", ...args);
  }
  /**
   * Returns the union of multiple sets.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sunion(...args) {
    return this.#processCommand("sunion", ...args);
  }
  /**
   * Stores the union of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SUNIONSTORE(...args) {
    return this.#processCommand("SUNIONSTORE", ...args);
  }
  /**
   * Stores the union of multiple sets in a key.
   *
   * Complexity: O(N) where N is the total number of elements in all given sets.
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sunionstore(...args) {
    return this.#processCommand("sunionstore", ...args);
  }
  /**
   * Stops listening to messages posted to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to unsubscribe.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SUNSUBSCRIBE(...args) {
    return this.#processCommand("SUNSUBSCRIBE", ...args);
  }
  /**
   * Stops listening to messages posted to shard channels.
   *
   * Complexity: O(N) where N is the number of shard channels to unsubscribe.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sunsubscribe(...args) {
    return this.#processCommand("sunsubscribe", ...args);
  }
  /**
   * Swaps two Redis databases.
   *
   * Complexity: O(N) where N is the count of clients watching or blocking on keys from both databases.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SWAPDB(...args) {
    return this.#processCommand("SWAPDB", ...args);
  }
  /**
   * Swaps two Redis databases.
   *
   * Complexity: O(N) where N is the count of clients watching or blocking on keys from both databases.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  swapdb(...args) {
    return this.#processCommand("swapdb", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  SYNC(...args) {
    return this.#processCommand("SYNC", ...args);
  }
  /**
   * An internal command used in replication.
   *
   * Complexity: undefined
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  sync(...args) {
    return this.#processCommand("sync", ...args);
  }
  /**
   * Returns the server time.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  TIME(...args) {
    return this.#processCommand("TIME", ...args);
  }
  /**
   * Returns the server time.
   *
   * Complexity: O(1)
   *
   * Available since 2.6.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  time(...args) {
    return this.#processCommand("time", ...args);
  }
  /**
   * Returns the number of existing keys out of those specified after updating the time they were last accessed.
   *
   * Complexity: O(N) where N is the number of keys that will be touched.
   *
   * Available since 3.2.1
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  TOUCH(...args) {
    return this.#processCommand("TOUCH", ...args);
  }
  /**
   * Returns the number of existing keys out of those specified after updating the time they were last accessed.
   *
   * Complexity: O(N) where N is the number of keys that will be touched.
   *
   * Available since 3.2.1
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  touch(...args) {
    return this.#processCommand("touch", ...args);
  }
  /**
   * Returns the expiration time in seconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  TTL(...args) {
    return this.#processCommand("TTL", ...args);
  }
  /**
   * Returns the expiration time in seconds of a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ttl(...args) {
    return this.#processCommand("ttl", ...args);
  }
  /**
   * Determines the type of value stored at a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  TYPE(...args) {
    return this.#processCommand("TYPE", ...args);
  }
  /**
   * Determines the type of value stored at a key.
   *
   * Complexity: O(1)
   *
   * Available since 1.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  type(...args) {
    return this.#processCommand("type", ...args);
  }
  /**
   * Asynchronously deletes one or more keys.
   *
   * Complexity: O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  UNLINK(...args) {
    return this.#processCommand("UNLINK", ...args);
  }
  /**
   * Asynchronously deletes one or more keys.
   *
   * Complexity: O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.
   *
   * Available since 4.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  unlink(...args) {
    return this.#processCommand("unlink", ...args);
  }
  /**
   * Forgets about watched keys of a transaction.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  UNWATCH(...args) {
    return this.#processCommand("UNWATCH", ...args);
  }
  /**
   * Forgets about watched keys of a transaction.
   *
   * Complexity: O(1)
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  unwatch(...args) {
    return this.#processCommand("unwatch", ...args);
  }
  /**
   * Blocks until the asynchronous replication of all preceding write commands sent by the connection is completed.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  WAIT(...args) {
    return this.#processCommand("WAIT", ...args);
  }
  /**
   * Blocks until the asynchronous replication of all preceding write commands sent by the connection is completed.
   *
   * Complexity: O(1)
   *
   * Available since 3.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  wait(...args) {
    return this.#processCommand("wait", ...args);
  }
  /**
   * Blocks until all of the preceding write commands sent by the connection are written to the append-only file of the master and/or replicas.
   *
   * Complexity: O(1)
   *
   * Available since 7.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  WAITAOF(...args) {
    return this.#processCommand("WAITAOF", ...args);
  }
  /**
   * Blocks until all of the preceding write commands sent by the connection are written to the append-only file of the master and/or replicas.
   *
   * Complexity: O(1)
   *
   * Available since 7.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  waitaof(...args) {
    return this.#processCommand("waitaof", ...args);
  }
  /**
   * Monitors changes to keys to determine the execution of a transaction.
   *
   * Complexity: O(1) for every key.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  WATCH(...args) {
    return this.#processCommand("WATCH", ...args);
  }
  /**
   * Monitors changes to keys to determine the execution of a transaction.
   *
   * Complexity: O(1) for every key.
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  watch(...args) {
    return this.#processCommand("watch", ...args);
  }
  /**
   * Returns the number of messages that were successfully acknowledged by the consumer group member of a stream.
   *
   * Complexity: O(1) for each message ID processed.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XACK(...args) {
    return this.#processCommand("XACK", ...args);
  }
  /**
   * Returns the number of messages that were successfully acknowledged by the consumer group member of a stream.
   *
   * Complexity: O(1) for each message ID processed.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xack(...args) {
    return this.#processCommand("xack", ...args);
  }
  /**
   * Appends a new message to a stream. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) when adding a new entry, O(N) when trimming where N being the number of entries evicted.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XADD(...args) {
    return this.#processCommand("XADD", ...args);
  }
  /**
   * Appends a new message to a stream. Creates the key if it doesn't exist.
   *
   * Complexity: O(1) when adding a new entry, O(N) when trimming where N being the number of entries evicted.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xadd(...args) {
    return this.#processCommand("xadd", ...args);
  }
  /**
   * Changes, or acquires, ownership of messages in a consumer group, as if the messages were delivered to as consumer group member.
   *
   * Complexity: O(1) if COUNT is small.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XAUTOCLAIM(...args) {
    return this.#processCommand("XAUTOCLAIM", ...args);
  }
  /**
   * Changes, or acquires, ownership of messages in a consumer group, as if the messages were delivered to as consumer group member.
   *
   * Complexity: O(1) if COUNT is small.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xautoclaim(...args) {
    return this.#processCommand("xautoclaim", ...args);
  }
  /**
   * Changes, or acquires, ownership of a message in a consumer group, as if the message was delivered a consumer group member.
   *
   * Complexity: O(log N) with N being the number of messages in the PEL of the consumer group.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XCLAIM(...args) {
    return this.#processCommand("XCLAIM", ...args);
  }
  /**
   * Changes, or acquires, ownership of a message in a consumer group, as if the message was delivered a consumer group member.
   *
   * Complexity: O(log N) with N being the number of messages in the PEL of the consumer group.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xclaim(...args) {
    return this.#processCommand("xclaim", ...args);
  }
  /**
   * Returns the number of messages after removing them from a stream.
   *
   * Complexity: O(1) for each single item to delete in the stream, regardless of the stream size.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XDEL(...args) {
    return this.#processCommand("XDEL", ...args);
  }
  /**
   * Returns the number of messages after removing them from a stream.
   *
   * Complexity: O(1) for each single item to delete in the stream, regardless of the stream size.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xdel(...args) {
    return this.#processCommand("xdel", ...args);
  }
  /**
   * A container for consumer groups commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XGROUP(...args) {
    return this.#processCommand("XGROUP", ...args);
  }
  /**
   * A container for consumer groups commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xgroup(...args) {
    return this.#processCommand("xgroup", ...args);
  }
  /**
   * A container for stream introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XINFO(...args) {
    return this.#processCommand("XINFO", ...args);
  }
  /**
   * A container for stream introspection commands.
   *
   * Complexity: Depends on subcommand.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xinfo(...args) {
    return this.#processCommand("xinfo", ...args);
  }
  /**
   * Return the number of messages in a stream.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XLEN(...args) {
    return this.#processCommand("XLEN", ...args);
  }
  /**
   * Return the number of messages in a stream.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xlen(...args) {
    return this.#processCommand("xlen", ...args);
  }
  /**
   * Returns the information and entries from a stream consumer group's pending entries list.
   *
   * Complexity: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). O(M), where M is the total number of entries scanned when used with the IDLE filter. When the command returns just the summary and the list of consumers is small, it runs in O(1) time; otherwise, an additional O(N) time for iterating every consumer.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XPENDING(...args) {
    return this.#processCommand("XPENDING", ...args);
  }
  /**
   * Returns the information and entries from a stream consumer group's pending entries list.
   *
   * Complexity: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). O(M), where M is the total number of entries scanned when used with the IDLE filter. When the command returns just the summary and the list of consumers is small, it runs in O(1) time; otherwise, an additional O(N) time for iterating every consumer.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xpending(...args) {
    return this.#processCommand("xpending", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs.
   *
   * Complexity: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XRANGE(...args) {
    return this.#processCommand("XRANGE", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs.
   *
   * Complexity: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xrange(...args) {
    return this.#processCommand("xrange", ...args);
  }
  /**
   * Returns messages from multiple streams with IDs greater than the ones requested. Blocks until a message is available otherwise.
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XREAD(...args) {
    return this.#processCommand("XREAD", ...args);
  }
  /**
   * Returns messages from multiple streams with IDs greater than the ones requested. Blocks until a message is available otherwise.
   *
   * Complexity: undefined
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xread(...args) {
    return this.#processCommand("xread", ...args);
  }
  /**
   * Returns new or historical messages from a stream for a consumer in a group. Blocks until a message is available otherwise.
   *
   * Complexity: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XREADGROUP(...args) {
    return this.#processCommand("XREADGROUP", ...args);
  }
  /**
   * Returns new or historical messages from a stream for a consumer in a group. Blocks until a message is available otherwise.
   *
   * Complexity: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xreadgroup(...args) {
    return this.#processCommand("xreadgroup", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs in reverse order.
   *
   * Complexity: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XREVRANGE(...args) {
    return this.#processCommand("XREVRANGE", ...args);
  }
  /**
   * Returns the messages from a stream within a range of IDs in reverse order.
   *
   * Complexity: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xrevrange(...args) {
    return this.#processCommand("xrevrange", ...args);
  }
  /**
   * An internal command for replicating stream values.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XSETID(...args) {
    return this.#processCommand("XSETID", ...args);
  }
  /**
   * An internal command for replicating stream values.
   *
   * Complexity: O(1)
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xsetid(...args) {
    return this.#processCommand("xsetid", ...args);
  }
  /**
   * Deletes messages from the beginning of a stream.
   *
   * Complexity: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  XTRIM(...args) {
    return this.#processCommand("XTRIM", ...args);
  }
  /**
   * Deletes messages from the beginning of a stream.
   *
   * Complexity: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  xtrim(...args) {
    return this.#processCommand("xtrim", ...args);
  }
  /**
   * Adds one or more members to a sorted set, or updates their scores. Creates the key if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZADD(...args) {
    return this.#processCommand("ZADD", ...args);
  }
  /**
   * Adds one or more members to a sorted set, or updates their scores. Creates the key if it doesn't exist.
   *
   * Complexity: O(log(N)) for each item added, where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zadd(...args) {
    return this.#processCommand("zadd", ...args);
  }
  /**
   * Returns the number of members in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZCARD(...args) {
    return this.#processCommand("ZCARD", ...args);
  }
  /**
   * Returns the number of members in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zcard(...args) {
    return this.#processCommand("zcard", ...args);
  }
  /**
   * Returns the count of members in a sorted set that have scores within a range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZCOUNT(...args) {
    return this.#processCommand("ZCOUNT", ...args);
  }
  /**
   * Returns the count of members in a sorted set that have scores within a range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zcount(...args) {
    return this.#processCommand("zcount", ...args);
  }
  /**
   * Returns the difference between multiple sorted sets.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZDIFF(...args) {
    return this.#processCommand("ZDIFF", ...args);
  }
  /**
   * Returns the difference between multiple sorted sets.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zdiff(...args) {
    return this.#processCommand("zdiff", ...args);
  }
  /**
   * Stores the difference of multiple sorted sets in a key.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZDIFFSTORE(...args) {
    return this.#processCommand("ZDIFFSTORE", ...args);
  }
  /**
   * Stores the difference of multiple sorted sets in a key.
   *
   * Complexity: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zdiffstore(...args) {
    return this.#processCommand("zdiffstore", ...args);
  }
  /**
   * Increments the score of a member in a sorted set.
   *
   * Complexity: O(log(N)) where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZINCRBY(...args) {
    return this.#processCommand("ZINCRBY", ...args);
  }
  /**
   * Increments the score of a member in a sorted set.
   *
   * Complexity: O(log(N)) where N is the number of elements in the sorted set.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zincrby(...args) {
    return this.#processCommand("zincrby", ...args);
  }
  /**
   * Returns the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZINTER(...args) {
    return this.#processCommand("ZINTER", ...args);
  }
  /**
   * Returns the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zinter(...args) {
    return this.#processCommand("zinter", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K) worst case with N being the smallest input sorted set, K being the number of input sorted sets.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZINTERCARD(...args) {
    return this.#processCommand("ZINTERCARD", ...args);
  }
  /**
   * Returns the number of members of the intersect of multiple sorted sets.
   *
   * Complexity: O(N*K) worst case with N being the smallest input sorted set, K being the number of input sorted sets.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zintercard(...args) {
    return this.#processCommand("zintercard", ...args);
  }
  /**
   * Stores the intersect of multiple sorted sets in a key.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZINTERSTORE(...args) {
    return this.#processCommand("ZINTERSTORE", ...args);
  }
  /**
   * Stores the intersect of multiple sorted sets in a key.
   *
   * Complexity: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zinterstore(...args) {
    return this.#processCommand("zinterstore", ...args);
  }
  /**
   * Returns the number of members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZLEXCOUNT(...args) {
    return this.#processCommand("ZLEXCOUNT", ...args);
  }
  /**
   * Returns the number of members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)) with N being the number of elements in the sorted set.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zlexcount(...args) {
    return this.#processCommand("zlexcount", ...args);
  }
  /**
   * Returns the highest- or lowest-scoring members from one or more sorted sets after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZMPOP(...args) {
    return this.#processCommand("ZMPOP", ...args);
  }
  /**
   * Returns the highest- or lowest-scoring members from one or more sorted sets after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 7.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zmpop(...args) {
    return this.#processCommand("zmpop", ...args);
  }
  /**
   * Returns the score of one or more members in a sorted set.
   *
   * Complexity: O(N) where N is the number of members being requested.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZMSCORE(...args) {
    return this.#processCommand("ZMSCORE", ...args);
  }
  /**
   * Returns the score of one or more members in a sorted set.
   *
   * Complexity: O(N) where N is the number of members being requested.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zmscore(...args) {
    return this.#processCommand("zmscore", ...args);
  }
  /**
   * Returns the highest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZPOPMAX(...args) {
    return this.#processCommand("ZPOPMAX", ...args);
  }
  /**
   * Returns the highest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zpopmax(...args) {
    return this.#processCommand("zpopmax", ...args);
  }
  /**
   * Returns the lowest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZPOPMIN(...args) {
    return this.#processCommand("ZPOPMIN", ...args);
  }
  /**
   * Returns the lowest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.
   *
   * Complexity: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
   *
   * Available since 5.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zpopmin(...args) {
    return this.#processCommand("zpopmin", ...args);
  }
  /**
   * Returns one or more random members from a sorted set.
   *
   * Complexity: O(N) where N is the number of members returned
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZRANDMEMBER(...args) {
    return this.#processCommand("ZRANDMEMBER", ...args);
  }
  /**
   * Returns one or more random members from a sorted set.
   *
   * Complexity: O(N) where N is the number of members returned
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrandmember(...args) {
    return this.#processCommand("zrandmember", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZRANGE(...args) {
    return this.#processCommand("ZRANGE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrange(...args) {
    return this.#processCommand("zrange", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZRANGEBYLEX(...args) {
    return this.#processCommand("ZRANGEBYLEX", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrangebylex(...args) {
    return this.#processCommand("zrangebylex", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 1.0.5
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZRANGEBYSCORE(...args) {
    return this.#processCommand("ZRANGEBYSCORE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 1.0.5
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrangebyscore(...args) {
    return this.#processCommand("zrangebyscore", ...args);
  }
  /**
   * Stores a range of members from sorted set in a key.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements stored into the destination key.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZRANGESTORE(...args) {
    return this.#processCommand("ZRANGESTORE", ...args);
  }
  /**
   * Stores a range of members from sorted set in a key.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements stored into the destination key.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrangestore(...args) {
    return this.#processCommand("zrangestore", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by ascending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZRANK(...args) {
    return this.#processCommand("ZRANK", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by ascending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrank(...args) {
    return this.#processCommand("zrank", ...args);
  }
  /**
   * Removes one or more members from a sorted set. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREM(...args) {
    return this.#processCommand("ZREM", ...args);
  }
  /**
   * Removes one or more members from a sorted set. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrem(...args) {
    return this.#processCommand("zrem", ...args);
  }
  /**
   * Removes members in a sorted set within a lexicographical range. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREMRANGEBYLEX(...args) {
    return this.#processCommand("ZREMRANGEBYLEX", ...args);
  }
  /**
   * Removes members in a sorted set within a lexicographical range. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zremrangebylex(...args) {
    return this.#processCommand("zremrangebylex", ...args);
  }
  /**
   * Removes members in a sorted set within a range of indexes. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREMRANGEBYRANK(...args) {
    return this.#processCommand("ZREMRANGEBYRANK", ...args);
  }
  /**
   * Removes members in a sorted set within a range of indexes. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zremrangebyrank(...args) {
    return this.#processCommand("zremrangebyrank", ...args);
  }
  /**
   * Removes members in a sorted set within a range of scores. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREMRANGEBYSCORE(...args) {
    return this.#processCommand("ZREMRANGEBYSCORE", ...args);
  }
  /**
   * Removes members in a sorted set within a range of scores. Deletes the sorted set if all members were removed.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zremrangebyscore(...args) {
    return this.#processCommand("zremrangebyscore", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREVRANGE(...args) {
    return this.#processCommand("ZREVRANGE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of indexes in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrevrange(...args) {
    return this.#processCommand("zrevrange", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREVRANGEBYLEX(...args) {
    return this.#processCommand("ZREVRANGEBYLEX", ...args);
  }
  /**
   * Returns members in a sorted set within a lexicographical range in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.8.9
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrevrangebylex(...args) {
    return this.#processCommand("zrevrangebylex", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREVRANGEBYSCORE(...args) {
    return this.#processCommand("ZREVRANGEBYSCORE", ...args);
  }
  /**
   * Returns members in a sorted set within a range of scores in reverse order.
   *
   * Complexity: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
   *
   * Available since 2.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrevrangebyscore(...args) {
    return this.#processCommand("zrevrangebyscore", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by descending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZREVRANK(...args) {
    return this.#processCommand("ZREVRANK", ...args);
  }
  /**
   * Returns the index of a member in a sorted set ordered by descending scores.
   *
   * Complexity: O(log(N))
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zrevrank(...args) {
    return this.#processCommand("zrevrank", ...args);
  }
  /**
   * Iterates over members and scores of a sorted set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZSCAN(...args) {
    return this.#processCommand("ZSCAN", ...args);
  }
  /**
   * Iterates over members and scores of a sorted set.
   *
   * Complexity: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
   *
   * Available since 2.8.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zscan(...args) {
    return this.#processCommand("zscan", ...args);
  }
  /**
   * Returns the score of a member in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZSCORE(...args) {
    return this.#processCommand("ZSCORE", ...args);
  }
  /**
   * Returns the score of a member in a sorted set.
   *
   * Complexity: O(1)
   *
   * Available since 1.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zscore(...args) {
    return this.#processCommand("zscore", ...args);
  }
  /**
   * Returns the union of multiple sorted sets.
   *
   * Complexity: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZUNION(...args) {
    return this.#processCommand("ZUNION", ...args);
  }
  /**
   * Returns the union of multiple sorted sets.
   *
   * Complexity: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 6.2.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zunion(...args) {
    return this.#processCommand("zunion", ...args);
  }
  /**
   * Stores the union of multiple sorted sets in a key.
   *
   * Complexity: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  ZUNIONSTORE(...args) {
    return this.#processCommand("ZUNIONSTORE", ...args);
  }
  /**
   * Stores the union of multiple sorted sets in a key.
   *
   * Complexity: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
   *
   * Available since 2.0.0
   * @param {...(string | number)} args Command arguments.
   * @returns {RedisClientMulti} RedisClientMulti instance.
   */
  zunionstore(...args) {
    return this.#processCommand("zunionstore", ...args);
  }
};

// src/client/multi.js
var RedisClientMulti = class extends RedisClientMultiCommands {
  #redis_client_multi;
  #transforms = [];
  #queue_length = 0;
  #custom_names = null;
  /**
   * @param {RedisClient} redisClient RedisClient instance.
   */
  constructor(redisClient) {
    super((command, ...args) => {
      const transform = transform_exports[command] ?? {};
      if (typeof transform.input === "function") {
        args = transform.input(...args) ?? args;
      }
      updateArguments(command, args);
      this.#redis_client_multi.addCommand([
        command,
        ...args
      ]);
      if (typeof transform.output === "function") {
        this.#transforms.push([
          this.#queue_length,
          transform.output
        ]);
      }
      this.#queue_length++;
      return this;
    });
    this.#redis_client_multi = redisClient.redis_client.MULTI();
  }
  get queue_length() {
    return this.#queue_length;
  }
  /**
   * Sets custom name for the command result. From now on, EXEC() will return an object contains only named results.
   * @param {*} field_name
   * @returns
   */
  as(field_name) {
    this.#custom_names ??= {};
    this.#custom_names[field_name] = this.#queue_length - 1;
    return this;
  }
  /**
   * Sends transaction to the Redis server and returns response.
   * @async
   * @returns {Array | object} Array, if no custom names were set, otherwise Object.
   */
  async EXEC() {
    const result = await this.#redis_client_multi.EXEC();
    for (const [index, transform] of this.#transforms) {
      result[index] = transform(result[index]);
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
  /**
   * Sends transaction to the Redis server and returns response.
   * @async
   * @returns {Array | object} Array, if no custom names were set, otherwise Object.
   */
  async exec() {
    return this.EXEC();
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
      return await this.#redisClient.EVALSHA(
        this.#script_sha1,
        0,
        ...args
      );
    } catch (error) {
      console.error(error);
      if (error.toString().includes("NOSCRIPT")) {
        await this.#loadScript();
        return this.run(...args);
      }
      throw error;
    }
  }
  async #loadScript() {
    this.#script_sha1 = await this.#redisClient.SCRIPT("LOAD", this.#script);
  }
};

// src/client.js
var RedisClient = class _RedisClient extends RedisClientCommandsExtended {
  #options;
  #redis_client;
  #scripts_cache = /* @__PURE__ */ new Map();
  constructor(options) {
    super(async (command, ...args) => {
      const transform = transform_exports[command] ?? {};
      if (typeof transform.input === "function") {
        args = transform.input(...args) ?? args;
      }
      updateArguments(command, args);
      const response = await this.#redis_client.sendCommand([
        command,
        ...args
      ]);
      if (typeof transform.output === "function") {
        return transform.output(response);
      }
      return response;
    });
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
   * @returns RedisClient
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
   * @returns {any} Response from the Redis server.
   */
  async sendCommand(command, ...args) {
    updateArguments(command, args);
    return this.#redis_client.sendCommand([
      command,
      ...args
    ]);
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
   * Disconnects from the Redis server.
   * @async
   */
  async disconnect() {
    return this.#redis_client.disconnect();
  }
  /**
   * Creates new MULTI transaction locally, without sending any commands to the Redis server.
   *
   * Transaction will be sent to the Redis server when EXEC methid will be called.
   * @returns {RedisClientMulti}
   */
  MULTI() {
    return new RedisClientMulti(this);
  }
  /**
   * Creates new MULTI transaction locally, without sending any commands to the Redis server.
   *
   * Transaction will be sent to the Redis server when EXEC methid will be called.
   * @returns {RedisClientMulti}
   */
  multi() {
    return this.MULTI();
  }
};

// src/main.js
function createClient2(options) {
  return new RedisClient(options);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createClient
});
