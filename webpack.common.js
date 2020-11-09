const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const context = resolve('src');
const autoprefixer = require('autoprefixer')({
  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduct = process.env.NODE_ENV !== 'production';

console.log(isProduct, 'www');

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
            query: {
              // presets: ['es2015', 'stage-0', 'react'],
              // plugins: ['transform-runtime']
            },
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
              plugins: [autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.s[c|a]ss$/,
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
        use: [isProduct ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
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
    extensions: ['.js', '.ts', '.jsx', '.json', '.css', '.scss', '.less'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    moment: 'moment',
    antd: 'antd',
  },
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
};
