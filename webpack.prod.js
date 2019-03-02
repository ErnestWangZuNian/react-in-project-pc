const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  externals: {
    react: "window.React" ? "window.React" : "React",
    "react-dom": "window.ReactDOM" ? "window.ReactDOM" : 'ReactDOM',
    "react-redux": "window.ReactRedux" ? "window.ReactRedux" : "ReactRedux",
    "react-router": "window.react-router" ? "window.ReactRouter" : "ReactRouter",
    "react-router-dom": "window.react-router-dom" ? "window.ReactRouterDOM" : "ReactRouterDOM",
    moment: "window.moment" ? "window.moment" : "moment",
    antd: "window.antd" ? "window.antd" : 'antd',
    axios: "window.axios" ? "window.axios" : "axios",
    redux: "window.Redux" ? "window.Redux" : "Redux"
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});