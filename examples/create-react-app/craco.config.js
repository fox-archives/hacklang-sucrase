const path = require('path')

module.exports = function ({ env }) {
	return {
		reactScriptsVersion: 'react-scripts',
		webpack: {
			/**
			 * @param {import("@types/webpack").Configuration} config
			 */
			configure: (config, { env, paths }) => {
				console.info(config.module.rules[2])
				console.info(JSON.stringify(config.module.rules[2]))
				console.info(config.module.rules[2].oneOf[1])

				const rule = config.module.rules[2].oneOf[1]
				const opts = rule.options
				delete rule.options
				const lder = rule.loader
				delete rule.loader

				rule.use = [
					{ loader: lder, options: opts },
					{
						loader: require.resolve(
							path.join(__dirname, '../../babel-loader')
						),
						options: {
							plugins: [
								path.join(
									__dirname,
									'../../babel/examples/plugin/index.js'
								),
							],
						},
					},
				]

				return config
			},
		},
	}
}
