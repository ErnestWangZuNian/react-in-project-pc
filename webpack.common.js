const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const context = path.resolve(__dirname, "src");

module.exports = {
  context,
  entry: [path.resolve(__dirname, "src/main.js")],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".scss", ".less", ".css"],
    alias: {
      "@": context
    }
  },
  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        include: context,
        use: {
          loader: "babel-loader",
          options: {
            // plugins: [
            //   [
            //     "react-css-modules",
            //     {
            //       context: context,
            //       exclude: "node_modules",
            //       filetypes: {
            //         ".scss": {
            //           syntax: "postcss-scss"
            //         }
            //       },
            //       webpackHotModuleReloading: true,
            //       handleMissingStyleName: "ignore",
            //       generateScopedName: "[local]--[hash:base64:5]"
            //     }
            //   ]
            // ]
          }
        }
      },
      {
        test: /\.bundle\.jsx$/,
        use: {
          loader: "bundle-loader",
          options: {
            lazy: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            // {
            //   loader: "css-loader",
            //   options: {
            //     module: true,
            //     localIdentName: "[local]--[hash:base64:5]"
            //   }
            // },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "file-loader"
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader"
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.resolve(__dirname, "index.html")
    }),
    new ExtractTextPlugin("[name].styles.[id].[contenthash].css", {
      allChunks: false
    })
  ]
};