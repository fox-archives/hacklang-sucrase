const path = require('path')

/**
 * @template T
 * @typedef {T extends (infer U)[] ? U : T} Unpacked
 */

/**
 * @param {RegExp} x
 * @param {RegExp} y
 * @returns boolean
 */
function isRegexEqual(x, y) {
	return (
		x instanceof RegExp &&
		y instanceof RegExp &&
		x.source === y.source &&
		x.global === y.global &&
		x.ignoreCase === y.ignoreCase &&
		x.multiline === y.multiline
	)
}
module.exports = {
	/**
	 * @param {import("@types/webpack").Configuration} config
	 */
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		/** @type {Unpacked<import("@types/webpack").Configuration["module"]["rules"]>} */
		let defaultRule = null

		for (const rule of config.module.rules) {
			if (isRegexEqual(rule.test, /\.(tsx|ts|js|mjs|jsx)$/)) {
				defaultRule = rule
			}
			// 	const item = rule.use && rule.use[1] && rule.use[1].loader
			// 	if (item === 'next-babel-loader') {
			// 		rule.use.push({
			// 			loader: path.resolve(path.join(__dirname, '../../babel-loader')),
			// 			options: {
			// 				plugins: [
			// 					path.join(
			// 						__dirname,
			// 						'../../babel/examples/plugin/index.js'
			// 					),
			// 				],
			// 			},
			// 		})
			// 		console.log('rr', rule)
			// 	}
		}

		config.module.rules.push({
			test: defaultRule.test,
			include: [
				'/home/edwin/docs/programming/repos/hacklang-babel/examples/next/pages',
			],
			use: [
				{
					loader:
						'/home/edwin/docs/programming/repos/hacklang-babel/examples/next/node_modules/next/dist/build/webpack/loaders/next-babel-loader',
					options: {},
				},
			],
		})

		console.info('aaaa', defaultRule)
		console.info('a', defaultRule.exclude.toString())

		return config
	},
}
