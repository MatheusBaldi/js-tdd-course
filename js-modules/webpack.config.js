const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: {
    filename: './app.js'
  },
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        compress: {},
        mangle: true,
        output: { comments: false },
      }
    })],
  },
}