const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 1023,
    contentBase: "./dist",
    proxy: {
      "/": {
        target: "http://47.92.112.65",
        pathRewrite: { "^/": "" }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});
