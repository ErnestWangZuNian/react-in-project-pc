const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = merge(common, {
  mode: 'production',
  entry: {
    main: resolve('src/components'),
  },
  output: {
    filename: 'index.js',
    path: resolve('dist'),
    library: 'wzn-extendantd-components',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
  },
});
