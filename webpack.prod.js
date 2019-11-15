const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = merge(common, {
  mode: 'production',
  entry: {
    main: resolve('src/main.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Production',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new ExtractTextWebpackPlugin({ filename: 'css/style.[chunkhash].css', allChunks: true }),
    new CleanWebpackPlugin('dist'),
  ],
});
