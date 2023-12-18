/* eslint-disable jsdoc/require-jsdoc */
/* global expect */

import { isGenerator } from '../src/utils/generators.js';
import { redisClient } from './create-client.js';

export async function testCommandArgumentsAndResponse(fn_output) {
	let args;
	let send_command_arguments;
	if (isGenerator(fn_output)) {
		args = fn_output.next().value;

		send_command_arguments = [
			...args,
			fn_output, // generator
		];
	}
	else {
		args = fn_output;
		send_command_arguments = [ ...args ];
	}

	const result = await redisClient.sendCommand(...send_command_arguments);

	return {
		args,
		result,
	};
}
