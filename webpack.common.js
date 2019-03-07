const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer")({
  browsers: [
    ">1%",
    "last 4 versions",
    "Firefox ESR",
    "not ie < 9" // React doesn't support IE8 anyway
  ]
});
const resolve = dir => {
  return path.resolve(__dirname, dir);
};
const context = resolve("src");

module.exports = {
  context,
  entry: {
    main: resolve("src/main.js"),
    vendor: ["wzn-api", "wzn-utils"]
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve("dist")
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".scss", ".less", ".css"],
    alias: {
      "@": context
    }
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-redux": "ReactRedux",
    "react-router": "ReactRouter",
    "react-router-dom": "ReactRouterDOM",
    moment: "moment",
    antd: "antd",
    axios: "axios",
    redux: "Redux"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: context,
        use: {
          loader: "babel-loader"
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
        include: resolve("src/pages"),
        use: [
          {
            loader: "style-loader/useable"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer]
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: resolve("src/pages"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer]
              }
            },
            {
              loader: "less-loader"
            }
          ]
        })
      },
      {
        test: /\.s[c|a]ss$/,
        include: resolve("src/pages"),
        use: [
          {
            loader: "style-loader/useable"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.s[c|a]ss$/,
        exclude: resolve("src/pages"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"],
      minChunks: Infinity,
      filename: "common.bundle.js"
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
