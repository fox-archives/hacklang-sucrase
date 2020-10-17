let path = require('path')

/**
 * @type {import("@types/webpack").Configuration} config
 */
module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	module: {
		rules: [
			{
				test: /.js$/,
				loader: require.resolve(path.join(__dirname, '../../integrations/webpack-loader')),
				options: {
					transforms: []
				}
			},
		],
	},
}
