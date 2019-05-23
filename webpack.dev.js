const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist', //开发服务运行时的文件根目录
    historyApiFallback: true, //spa不跳转,history模式的路由需要true
    host: 'localhost',
    port: 8080,
    hot: true,
    inline: true, //实时刷新
    compress: true, //Enable gzip compression for everything served
    overlay: true, //Shows a full-screen overlay in the browser
    // stats: "errors-only", //To show only errors in your bundle
    open: true, //When open is enabled, the dev server will open the browser.
    proxy: {
      '/': {
        target: 'https://api.douban.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/': '',
        },
      },
    },
    // proxy: [
    //   {
    //     context: ['/metadata', '/obs', '/common', '/party'],
    //     target: 'http://139.224.146.187',
    //   },
    //   {
    //     context: '/',
    //     // target: 'http://192.168.34.141:8080',// 李东东
    //     // target: 'http://192.168.34.144:8081',// 罗伟
    //     // target: 'http:/192.168.34.135:8080', // 流程定义
    //     // target: 'http://139.224.146.187', // 流程实例
    //     target: 'http://139.224.146.187', // 产品
    //     // target: 'http://139.224.146.187', // 分布式
    //     // target: 'http://192.168.34.159:8081', // 分布式
    //   },
    // ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
});
