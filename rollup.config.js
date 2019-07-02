import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write('public/bundle.css');
			}
		}),

		json({
			include: 'node_modules/**',
			exclude: ['node_modules/foo/**', 'node_modules/bar/**'],
			preferConst: true, 
			indent: '  ',
			compact: true, 
			namedExports: true
		}),

		resolve({ browser: true }),
		commonjs(),

		!production && livereload('public'),

		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
