const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer')({
  browsers: [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9', // React doesn't support IE8 anyway
  ]
});

function resolve(dir) {
  return path.join(process.cwd(), dir)
}

const src = resolve('src');
const node_modules = resolve('node_modules');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({
  size: require('os').cpus().length
});

const vender = [
  'react-document-title',
  '@zd/zds-request-api',
  '@zd/zds-component-bundle',
  '@zd/zds-component-store',
  '@zd/zds-component-util',
  '@zd/factoring-component-lib',
  '@zd/zds-web-lib',
  '@zd/loadfactory',
  '@zd/resumefactory',
  '@zd/pagingtable',
  '@zd/formcreator',
  '@zd/validate'
];
const js = [
  '@/js/api',
  '@/js/jqueryplugin',
  '@/js/util'
];
module.exports = {
  entry: {
    main: resolve('src/main.js'),
    js,
    vender
  },
  output: {
    filename: '[name].[hash:6].js',
    path: path.join(__dirname, 'build'),
    chunkFilename: "chunk/[chunkhash:6].js",
    publicPath: "/"
  },
  resolve: {
    modules: ['node_modules', src],
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      '@': src,
      '~': node_modules
    }
  },
  plugins: [
    new ExtractTextWebpackPlugin(path.posix.join('static', 'css/[name].[contenthash:6].css')),
    new webpack.optimize.CommonsChunkPlugin('vender'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'modules',
      minChunks: function(module, count) {
        return (module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            node_modules
          ) === 0 && vender.filter(item => module.resource.indexOf(item) > -1).length == 0)
      }
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    })
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: [{
        loader: '@zd/zds-component-bundle/loader?lazy',
        options: {
          filter: /\?bundle/i
        }
      }, {
        loader: 'happypack/loader?id=js'
      }]
    }, {
      test: /\.s[c|a]ss$/,
      include: resolve('src/pages'),
      use: [{
        loader: "style-loader/useable"
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer]
        }
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.s[c|a]ss$/,
      exclude: resolve('src/pages'),
      use: ExtractTextWebpackPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer]
          }
        }, {
          loader: 'sass-loader'
        }]
      })
    }, {
      test: /\.css$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer]
          }
        }]
      })
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1024,
        name: path.posix.join('static', 'images/[hash:6].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        name: path.posix.join('static', 'fonts/[hash:6].[ext]')
      }
    }]
  }
}