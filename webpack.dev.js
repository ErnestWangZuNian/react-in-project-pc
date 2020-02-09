const merge = require('webpack-merge');
const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(
  common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
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
    ],
    devServer: {
      historyApiFallback: true, // spa不跳转,history模式的路由需要true
      host: 'localhost',
      port: 1024,
      // hot: true,
      inline: true, // 实时刷新
      compress: true, // Enable gzip compression for everything served
      overlay: true, // Shows a full-screen overlay in the browser
      open: true,
      proxy: {
        '/': {
          target: 'http://192.168.31.147:7002',
          secure: false,
          changeOrigin: true,
          pathRewrite: {
            '^/': '',
          },
        },
      },
    },
  },

);
