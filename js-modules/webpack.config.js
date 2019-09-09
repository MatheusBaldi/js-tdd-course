const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
}