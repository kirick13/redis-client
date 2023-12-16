
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
