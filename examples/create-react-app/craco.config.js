const path = require('path')

module.exports = function ({ env }) {
	return {
		webpack: {
			/**
			 * @param {import("@types/webpack").Configuration} config
			 */
			configure: (config, { env, paths }) => {
				const rule = config.module.rules[2].oneOf[1]
				const oldOptions = rule.options
				delete rule.options
				const oldLoader = rule.loader
				delete rule.loader

				rule.use = [
					{ loader: oldLoader, options: oldOptions },
					{
						loader: require.resolve(
							path.join(__dirname, '../../integrations/webpack-loader')
						),
						options: { transforms: ['typescript', 'jsx' ]}
					},
				]
				rule.exclude = /node_modules/

				const rule2 = config.module.rules[2].oneOf[2]
				const oldOptions2 = rule2.options
				delete rule2.options
				const oldLoader2 = rule2.loader
				delete rule2.loader

				rule2.use = [
					{ loader: oldLoader2, options: oldOptions2 },
					{
						loader: require.resolve(
							path.join(__dirname, '../../integrations/webpack-loader')
						),
						options: { transforms: ['typescript', 'jsx' ]}
					},
				]
				rule2.exclude = /node_modules/

				// remove eslint
				Array.prototype.splice.apply(config.module.rules, [1, 1])

				console.log(require('util').inspect(config, { showHidden: false, depth: null, colors: true }));
				require('fs').writeFileSync('foo2', JSON.stringify(config))

				return config
			},
		},
	}
}
