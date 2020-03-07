
var path = require('path');

var nodeExternals = require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/****************************************************************************************/

var clientConfig = {
	target: 'web',

	entry: {
		'exf': './src/client/index.js'
	},

	output: {
		path: path.join(__dirname, 'dist', 'assets'),
		filename: 'js/[name].min.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('css/exf.min.css'),
		new CopyWebpackPlugin([
			{ from: './resources/icons', to: 'icons' },
			{ from: './resources/images', to: 'images' }
		])
	]
};

/****************************************************************************************/

var serverConfig = {
	node: {
		__filename: true,
		__dirname: false
	},

	target: 'node',

	externals: [nodeExternals()],

	entry: {
		'index.js': './src/server/index.js',
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]'
	},

	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/server/config.json', to: 'config.json' },
			{ from: './src/server/api', to: 'api' }
		])
	]
};

/****************************************************************************************/

module.exports = [ clientConfig, serverConfig ];
