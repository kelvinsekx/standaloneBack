const path = require("path");
const webpack = require("webpack");
const cwd = process.cwd();
const nodeExternals = require("webpack-node-externals");

const config = {
    name: "server",
    entry : [
        /**'/node_modules/regenerator-runtime/runtime.js',*/ path.join(cwd, "./server/server.js")],
    target: "node",
    output: {
        path : path.join(cwd, "/dist/"),
        filename: "server.gen.js",
        publicPath : "/dist/",
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}

module.exports = config
