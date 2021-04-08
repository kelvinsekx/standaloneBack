const path = require("path");
const webpack = require("webpack");
const cwd = process.cwd();

const config = {
 	name: "production",
	entry: [path.join(cwd, 'client/main.js')],
	output: {
		path: path.join(cwd, '/dist'),
		filename: "bundle.js",
		publicPath: "/dist"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	}
};

module.exports = config
