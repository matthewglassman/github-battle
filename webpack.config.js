var path = require('path');

//the following module will create an index.html file for us and put it in the dist folder
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	modules: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
		]
	},
	plugins: [new HTMLWebpackPlugin({
		template: 'app/index.html'
	})]
}