'use strict';

const path = require('path');
const webpack = require('webpack');

require('babel-polyfill');

module.exports = {
  entry: {
    bundle  : path.join(__dirname, 'src', 'index.js'),
    polyfill: 'babel-polyfill'
  },
  output: {
    path      : path.join(__dirname, 'dist'),
    filename  : '[name].js',
    publicPath: '/dist/'
  },
  target : 'web',
  resolve: {
    extensions: ['', '.js', '.css'],
    fallback  : path.join(__dirname, 'node_modules')
  },
  resolveLoader: {
    root    : path.join(__dirname, 'node_modules'),
    fallback: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test   : /\.js$/,
        loader : 'babel',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test   : /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]'
        ]
      },
      {
        test  : /\.svg$/,
        loader: 'svg-inline'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('../package.json').version)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
