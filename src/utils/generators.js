
const GeneratorFunction = (function * () {}).constructor;

/**
 * Checks if value is a generator function.
 * @param {any} value - Value to check.
 * @returns {boolean} True if value is a generator function, otherwise false.
 */
export function isGeneratorFunction(value) {
	return value instanceof GeneratorFunction;
}

/**
 * Checks if value is a generator.
 * @param {any} value - Value to check.
 * @returns {boolean} True if value is a generator, otherwise false.
 */
export function isGenerator(value) {
	return value?.constructor?.constructor?.name === 'GeneratorFunction';
}
