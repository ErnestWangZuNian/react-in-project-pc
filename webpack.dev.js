const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist", //开发服务运行时的文件根目录
    historyApiFallback: true, //spa不跳转,history模式的路由需要true
    host: "localhost",
    port: 8080,
    hot: true,
    inline: true, //实时刷新
    compress: true, //Enable gzip compression for everything served
    overlay: true, //Shows a full-screen overlay in the browser
    // stats: "errors-only", //To show only errors in your bundle
    open: true, //When open is enabled, the dev server will open the browser.
    proxy: {
      "/": {
        target: "http://47.92.112.65",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/": ""
        },
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});
