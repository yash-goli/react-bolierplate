const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  }
};

module.exports = merge(commonConfig, prodConfig);