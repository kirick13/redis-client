
import {
	boolean,
	literal,
	never,
	number,
	optional,
	object,
	parse,
	union }              from 'valibot';
import { isPlainObject } from '../../../utils/lodash/isPlainObject.js';

const optionsValidator = object(
	{
		existing: optional(
			boolean(),
		),
		expire: optional(
			union(
				[
					literal('keep'),
					object(
						{
							in: number(),
						},
						never(),
					),
					object(
						{
							in_ms: number(),
						},
						never(),
					),
					object(
						{
							at: number(),
						},
						never(),
					),
					object(
						{
							at_ms: number(),
						},
						never(),
					),
				],
				'Property "expire" must be either "keep" or an object with one of the following properties: "in", "in_ms", "at", "at_ms".',
			),
		),
	},
	never('Unknown property found in "options" argument. Only "existing" and "expire" are allowed.'),
);

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
 * @param {string | number | ArrayBuffer | Buffer} value Value to set.
 * @param {StringSetOptions} [options] -
 * @returns {Promise<"OK" | null>} "OK" if SET was executed correctly, otherwise null.
 */
export default function set(key, value, options = {}) {
	options = parse(
		optionsValidator,
		options,
	);

	const args = [
		'SET',
		key,
		value,
	];

	switch (options.existing) {
		case true:
			args.push('XX');
			break;
		case false:
			args.push('NX');
			break;
		// no default
	}

	if (options.expire === 'keep') {
		args.push('KEEPTTL');
	}
	else if (isPlainObject(options.expire)) {
		if (options.expire.in) {
			args.push(
				'EX',
				options.expire.in,
			);
		}
		else if (options.expire.in_ms) {
			args.push(
				'PX',
				options.expire.in_ms,
			);
		}
		else if (options.expire.at) {
			args.push(
				'EXAT',
				options.expire.at,
			);
		}
		else if (options.expire.at_ms) {
			args.push(
				'PXAT',
				options.expire.at_ms,
			);
		}
	}

	return args;
}
