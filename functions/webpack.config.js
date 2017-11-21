var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    libraryTarget: 'this'
  },
  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: debug ? [] : [
    new webpack.optimize.UglifyJsPlugin({mangle: false, warnings: false}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'
            ],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      }
    ]
  }
};