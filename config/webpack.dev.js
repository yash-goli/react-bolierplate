const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: 'http://localhost:8080/',
    path: path.resolve(__dirname, '..', '/dist'),
    filename: 'index.js'
  },
  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: {
      index: '/index.html'
    }
  }
};

module.exports = merge(commonConfig, devConfig);