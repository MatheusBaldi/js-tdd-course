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
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        compress: {},
        output: { comments: false },
      }
    })],
  },
}