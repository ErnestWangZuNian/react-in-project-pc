const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const hasha = require('hasha');

const HappyPack = require('happypack');
const os = require('os');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir);
const context = resolve('src');
const isProduct = process.env.NODE_ENV === 'production';
const autoprefixer = require('autoprefixer');

const { getThemeVariables } = require('antd/dist/theme');
const config = require('./src/config/index');

const generateScopedName = (name, filename) => {
  const hash = hasha(filename + name, { algorithm: 'md5' });
  return `${name}-${hash.slice(0, 5)}`;
};

module.exports = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: {
    main: resolve('src/main.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        include: context,
        exclude: resolve('node_modules'),
      },
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        include: context,
        exclude: resolve('node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'happypack/loader?id=happyBabel',
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      //  less scss css的处理
      {
        test: /\.less$/,
        use: [
          {
            loader: isProduct ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              //  如果不自定义主题就是默认antd暗黑主题
              lessOptions: {
                modifyVars:
                  config.theme
                  || getThemeVariables({
                    dark: true,
                  }),
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      //  局部css模块化
      {
        test: /\.s[c|a]ss$/,
        exclude: resolve('src/styles'),
        use: [
          {
            loader: isProduct ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-modules-typescript-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent({ resourcePath }, localIdentName, localName) {
                  return generateScopedName(localName, resourcePath);
                },
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [resolve('src/styles/common.scss')],
            },
          },
        ],
      },
      //  全局css
      {
        test: /\.s[c|a]ss$/,
        include: resolve('src/styles'),
        use: [
          {
            loader: isProduct ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isProduct ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      //  static img  media font svg
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
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
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.css', '.scss', '.less'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    moment: 'moment',
    antd: 'antd',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new HappyPack({
      // 用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      // 如何处理  用法和loader 的配置一样
      loaders: [
        {
          loader: 'babel-loader?cacheDirectory=true',
        },
      ],
      // 共享进程池
      threadPool: happyThreadPool,
      // 允许 HappyPack 输出日志
      verbose: true,
    }),
  ],
  //  提取公共代码
  optimization: {
    namedModules: true,
    namedChunks: true,
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
        common: {
          // 抽离自己写的公共代码,common这个名字可以随意起
          chunks: 'initial',
          name: 'common', //  任意命名
          minSize: 0, // 只要超出0字节就生成一个新包
        },
      },
    },
  },
  //  日志输出
  stats: 'errors-only',
};
