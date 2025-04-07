import { defineConfig } from 'vite';

import path from "path";
import injectHTML from 'vite-plugin-html-inject';
import postcssImport from 'postcss-import';
import { resolve } from 'path';

export default defineConfig({
	base: './',

	plugins: [injectHTML()],
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: `@import "${resolve(__dirname, 'src/styles/_variables.scss')}";
				// 				@import "${resolve(__dirname, 'src/styles/_mixins.scss')}";`,
			},
		},
		postcss: {
		  plugins: [
			postcssImport(),
		  ],
		},
	},
	server: {
		// open: true,
	},
	root: './',
	build: {
		// lib: {
		// 	entry: resolve(__dirname, 'lib/main.js'),
		// 	name: 'MyLib',
		// 	// the proper extensions will be added
		// 	fileName: 'my-lib',
		// },

		// rollupOptions: {
		// 	input: {
		// 		index: 'index.html',
		// 	},
		// 	output: {
				
		// 	},
		// },
		// // Не обязательные опции
		minify: false,
	},
	resolve: {
		alias: {
		  "@": path.resolve(__dirname, "./src/"),
		  public: `${path.resolve(__dirname, "./public/")}`,
		  pages: path.resolve(__dirname, "./src/html"),
		},
	},
	preview: {

	},
});
