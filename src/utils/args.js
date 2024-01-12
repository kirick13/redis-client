
import { isGenerator } from './generators.js';

/**
 * @typedef {string | number | ArrayBuffer | Buffer} RedisCommandArgument
 */

/**
 * Converts all arguments to strings.
 * @param {string} command Command name.
 * @param {RedisCommandArgument[]} args Command arguments.
 */
export function updateArguments(command, args) {
	for (const [ index, arg ] of args.entries()) {
		if (
			typeof arg === 'number'
			&& Number.isNaN(arg) !== true
		) {
			args[index] = String(arg);
		}
		else if (
			Buffer.isBuffer(arg)
			|| arg instanceof ArrayBuffer
		) {
			args[index] = arg;
		}
		else if (typeof arg !== 'string') {
			throw new TypeError(
				`Argument #${index + 1} of command "${command}" must be a string, non-NaN number, ArrayBuffer or Node.JS Buffer.`,
			);
		}
	}
}

/**
 * Retrieves command arguments from the function result.
 * @param {Function} fn Function to call.
 * @param {any[]} fn_args Function arguments.
 * @returns {RedisCommandArgument[]} Command arguments.
 */
export function retrieveCommandArguments(fn, fn_args) {
	let command_args;

	// FIXME: Bun somehow returns "Function" for GeneratorFunction constructor name in our case.
	// In plain tests it works normally.
	// I think it's because of the way we use it in the project: maybe it is loses its constructor name using default import? IDK
	const fn_result = fn(...fn_args);
	if (isGenerator(fn_result)) {
		command_args = fn_result.next().value;
		command_args.push(fn_result);
	}
	else {
		command_args = fn_result;
	}

	return command_args;
}
