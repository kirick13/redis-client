/* eslint-disable jsdoc/require-jsdoc */

export function getRandomKey() {
	return 'key:' + Math.random().toString(36).slice(2, 12);
}
