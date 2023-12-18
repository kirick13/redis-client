
/* eslint-disable max-nested-callbacks */
/* global describe, test, expect */

import { testCommandArgumentsAndResponse } from '../../../../test/arguments-response.js';
import { getRandomKey } 				   from '../../../../test/random-key.js';
import set                                 from './set.js';

describe('correct', () => {
	test('just set', async () => {
		const key = getRandomKey();

		const { args, result } = await testCommandArgumentsAndResponse(
			set(key, 'foo'),
		);

		expect(args).toStrictEqual([ 'SET', key, 'foo' ]);
		expect(result).toBe('OK');
	});

	describe('existence', () => {
		test('already existing', async () => {
			const key = getRandomKey();

			const { args, result } = await testCommandArgumentsAndResponse(
				set(key, 'foo', { existing: true }),
			);

			expect(args).toStrictEqual([ 'SET', key, 'foo', 'XX' ]);
			expect(result).toBe(null);
		});

		test('not existing', async () => {
			const key = getRandomKey();

			const { args, result } = await testCommandArgumentsAndResponse(
				set(key, 'foo', { existing: false }),
			);

			expect(args).toStrictEqual([ 'SET', key, 'foo', 'NX' ]);
			expect(result).toBe('OK');
		});
	});

	describe('expiration', () => {
		describe('in some time', () => {
			test('seconds', () => {
				expect(
					set('key', 'foo', { expire: { in: 10 } }),
				).toStrictEqual(
					[ 'SET', 'key', 'foo', 'EX', 10 ],
				);
			});

			test('milliseconds', () => {
				expect(
					set('key', 'foo', { expire: { in_ms: 10 } }),
				).toStrictEqual(
					[ 'SET', 'key', 'foo', 'PX', 10 ],
				);
			});
		});

		describe('at some timestamp', () => {
			test('seconds', () => {
				expect(
					set('key', 'foo', { expire: { at: 1702902570 } }),
				).toStrictEqual(
					[ 'SET', 'key', 'foo', 'EXAT', 1702902570 ],
				);
			});

			test('milliseconds', () => {
				expect(
					set('key', 'foo', { expire: { at_ms: 1702902570513 } }),
				).toStrictEqual(
					[ 'SET', 'key', 'foo', 'PXAT', 1702902570513 ],
				);
			});
		});

		test('keep', () => {
			expect(
				set('key', 'foo', { expire: 'keep' }),
			).toStrictEqual(
				[ 'SET', 'key', 'foo', 'KEEPTTL' ],
			);
		});
	});
});

describe('incorrect', () => {
	describe('options', () => {
		test('invalid', () => {
			expect(() => {
				set(
					'key',
					'foo',
					10, // should be an object
				);
			}).toThrow();
		});

		test('unknown field', () => {
			expect(() => {
				set(
					'key',
					'foo',
					{
						foo: 'bar',
					},
				);
			}).toThrow();
		});

		describe('options.expire', () => {
			test('invalid type', () => {
				expect(() => {
					set(
						'key',
						'foo',
						{
							expire: 10, // should be an object
						},
					);
				}).toThrow();
			});

			test('invalid number of fields', () => {
				expect(() => {
					set(
						'key',
						'foo',
						{
							expire: {
								in: 10,
								at: 1702902570,
							},
						},
					);
				}).toThrow();
			});

			test('unknown field', () => {
				expect(() => {
					set(
						'key',
						'foo',
						{
							expire: {
								foo: 'bar',
							},
						},
					);
				}).toThrow();
			});
		});
	});
});
