const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 1024,
    contentBase: "./dist",
    proxy: {
      "/": {
        target: "http://book.zhongxiaoyu.cn/",
        pathRewrite: { "^/": "" }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});
