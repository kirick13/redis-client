
import {
	mapToHashBulk,
	objectToHashBulk,
	hashBulkToObject } from './hash-bulk.js';

// strings

export const INCRBYFLOAT = {
	output: (response) => Number.parseFloat(response),
};

// hashes

export const HGETALL = {
	output: (response) => hashBulkToObject(response),
};

export const hincrbyfloat = INCRBYFLOAT;

export const HMSET = {
	input(key, source, ...args) {
		if (args.length === 0) {
			if (source instanceof Map) {
				return [
					key,
					...mapToHashBulk(source),
				];
			}

			if (typeof source === 'object' && source !== null) {
				return [
					key,
					...objectToHashBulk(source),
				];
			}
		}
	},
};

export const HSET = HMSET;

// set

export const SISMEMBER = {
	output: (response) => response === 1,
};
export const SMISMEMBER = {
	output: (response) => response.map((a) => a === 1),
};
