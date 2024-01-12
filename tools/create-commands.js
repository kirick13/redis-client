
/* global Bun */
/* eslint-disable jsdoc/require-jsdoc, max-depth */
/* eslint-disable no-await-in-loop */

import { readdir } from 'node:fs/promises';

const SECTIONS = [
	'string',
	'tools',
];

const METHOD_NAME_REGEXP = /export\s+default\s+function(?:\s*\*)?\s+([\dA-Za-z]+)\s*\(/m;
const JSDOC_PARAM_NAME_REGEXP = /@param\s+{[^}]+}\s+(?:\[\s*)?([\d_a-z]+)/;
const JSDOC_PARAM_IS_SPREAD_REGEXP = /@param\s+{\.{3}/;

const FILES = new Map();
for (const section of SECTIONS) {
	const section_directory = `./src/client/commands/${section}`;

	const file_names = await readdir(section_directory);

	const files_in_section = new Map();

	for (const file_name of file_names) {
		if (file_name.endsWith('.test.js')) {
			continue;
		}

		const file = Bun.file(
			`${section_directory}/${file_name}`,
		);

		const content = await file.text();
		// console.log('content', content);

		const [ , method_name ] = content.match(METHOD_NAME_REGEXP);
		// console.log('method_name', method_name);
		if (method_name === undefined) {
			throw new Error(`Method name not found in ${file_name}`);
		}

		const content_lines = content.split('\n');
		const export_line_number = content_lines.findIndex((line) => line.includes('export default'));

		files_in_section.set(
			method_name,
			{
				file_name,
				content_lines,
				export_line_number,
			},
		);
	}

	FILES.set(
		section,
		files_in_section,
	);
}

async function processCommands({
	directory,
	target,
	execute_method,
	is_async = true,
	typedefs,
	returns,
}) {
	for (const section of SECTIONS) {
		const path = `${directory}/${section}.js`;

		const section_file = {
			imports_lines: [
				'import { retrieveCommandArguments } from \'../../utils/args.js\';',
			],
			typedefs,
			methods: [],
		};

		for (
			const [
				method_name,
				{
					file_name,
					content_lines,
					export_line_number,
				},
			]
			of FILES.get(section)
		) {
			const jsdoc_lines = [];
			const method_arguments = [];

			let is_method_jsdoc = true;
			for (
				let line_id = export_line_number - 1;
				line_id >= 0;
				line_id--
			) {
				const line = content_lines[line_id];

				if (is_method_jsdoc) {
					if (
						(
							line.startsWith(' * @async')
							&& is_async !== true
						)
						|| line.startsWith(' * @yields')
					) {
						continue;
					}

					if (
						line.startsWith(' * @returns')
						&& returns !== undefined
					) {
						jsdoc_lines.unshift(`\t * @returns ${returns}`);
						continue;
					}

					if (line.startsWith(' * @param')) {
						const [ , argument_name ] = line.match(JSDOC_PARAM_NAME_REGEXP);
						const is_argument_spread = JSDOC_PARAM_IS_SPREAD_REGEXP.test(line);

						method_arguments.unshift(
							`${is_argument_spread ? '...' : ''}${argument_name}`,
						);
					}
				}
				else if (
					(
						line.startsWith('/**')
						|| line.startsWith(' *')
					) !== true
					|| line.startsWith(' * @typedef {')
				) {
					continue;
				}

				jsdoc_lines.unshift(`\t${line}`);

				if (line.startsWith('/**')) {
					is_method_jsdoc = false;
				}
			}

			// console.log('jsdoc_lines', jsdoc_lines.join('\n'));
			// console.log('method_arguments', method_arguments.join(', '));

			section_file.imports_lines.push(
				`import ${method_name} from '../commands/${section}/${file_name}';`,
			);

			if (section_file.methods.length > 0) {
				section_file.methods.push('');
			}

			section_file.methods.push(
				...jsdoc_lines,
				`\t${method_name}(${method_arguments.join(', ')}) {`,
				`\t\treturn this.#execute(${method_name}${method_arguments.length > 0 ? `, [ ${method_arguments.join(', ')} ]` : ''});`,
				'\t}',
			);
		}

		const section_file_lines = [
			'',
			`// Path: ${path}`,
			`// This file was automatically generated at ${new Date().toUTCString()} by tools/create-commands.js`,
			'',
			...section_file.imports_lines,
			'',
			'/**',
			...section_file.typedefs.map((typedef) => ` * @typedef ${typedef}`),
			' * @typedef {import("../../utils/args.js").RedisCommandArgument} RedisCommandArgument',
			' */',
			'',
			`export class ${target[0].toUpperCase()}${target.slice(1)}${section[0].toUpperCase()}${section.slice(1)}Commands {`,
			`\t#${target};`,
			'',
			'\t/**',
			`\t * @param {${target[0].toUpperCase()}${target.slice(1)}} ${target} -`,
			'\t */',
			`\tconstructor(${target}) {`,
			`\t\tthis.#${target} = ${target};`,
			'\t}',
			'',
			'\t#execute(fn, fn_args = []) {',
			`\t\treturn this.#${target}.${execute_method}(`,
			'\t\t\t...retrieveCommandArguments(fn, fn_args),',
			'\t\t);',
			'\t}',
			'',
			...section_file.methods,
			'}',
			'',
		];

		await Bun.write(
			path,
			section_file_lines.filter((line) => typeof line === 'string').join('\n'),
		);
	}
}

await processCommands({
	directory: 'src/client/commands',
	target: 'redisClient',
	execute_method: 'sendCommand',
	typedefs: [
		'{import(\'../../client.js\').RedisClient} RedisClient',
	],
});

await processCommands({
	directory: 'src/client/transaction',
	target: 'redisClientTransaction',
	execute_method: 'addCommand',
	is_async: false,
	typedefs: [
		'{import(\'../transaction.js\').RedisClientTransaction} RedisClientTransaction',
	],
	returns: '{RedisClientTransaction} RedisClientTransaction instance.',
});
