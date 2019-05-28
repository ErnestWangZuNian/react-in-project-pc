const path = require('path');
const webpack = require('webpack');
const argv = require('yargs-parser')(process.argv.slice(2));

const pro = argv.mode == 'production'; //  区别是生产环境和开发环境
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer')({
  // React doesn't support IE8 anyway
  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
});

const resolve = dir => path.resolve(__dirname, dir);
const theme = require(resolve('src/styles/antdtheme.js'));
const context = resolve('src');

const plugins = [];
if (pro) {
  //  线上环境
  plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Production',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new ExtractTextWebpackPlugin('css/style.[chunkhash].css'),
    new CleanWebpackPlugin('dist'),
  );
} else {
  //  开发环境
  plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Production',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new ExtractTextWebpackPlugin('css/style.[chunkhash].css'),
    new webpack.HotModuleReplacementPlugin(), // 热更新，热更新不是刷新
  );
}

module.exports = {
  entry: {
    main: resolve('src/main.js'),
    vendor: ['wzn-api', 'wzn-utils', 'react-document-title'],
  },
  output: {
    filename: pro ? '[name].[chunkhash].js' : '[name].js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
          },
        ],
        include: context,
        exclude: resolve('node_modules'),
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer],
              },
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: theme,
                javascriptEnabled: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.s[c|a]ss$/,
        exclude: resolve('node_modules'),
        use: [
          {
            loader: 'style-loader/useable',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins,
  devServer: {
    contentBase: './dist', // 开发服务运行时的文件根目录
    historyApiFallback: true, // spa不跳转,history模式的路由需要true
    host: 'localhost',
    port: 8080,
    hot: true,
    inline: true, // 实时刷新
    compress: true, // Enable gzip compression for everything served
    overlay: true, // Shows a full-screen overlay in the browser
    open: true,
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
  },
  resolve: {
    // 别名
    alias: {
      '@': context,
      '@/components': path.join(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    moment: 'moment',
    antd: 'antd',
    axios: 'axios',
    redux: 'Redux',
  },
  //  提取公共代码
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // 抽离第三方插件
          test: /node_modules/, // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor', // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10,
        },
        utils: {
          // 抽离自己写的公共代码，utils这个名字可以随意起
          chunks: 'initial',
          name: 'utils', //  任意命名
          minSize: 0, // 只要超出0字节就生成一个新包
        },
      },
    },
  },
  devtool: pro ? '' : 'inline-source-map',
};
