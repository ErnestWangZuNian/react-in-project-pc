const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 8080,
    contentBase: "./dist",
    proxy: {
      "/": {
        target: "http://47.92.112.65",
        pathRewrite: {
          "^/": ""
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      "react-dom": 'react-dom',
      "react-router": 'react-router',
      'react-router-dom': 'react-router-dom',
      "antd": "antd",
      "redux": "redux",
      "react-redux": "react-redux"
    }),
    new webpack.NamedModulesPlugin()
  ]
});