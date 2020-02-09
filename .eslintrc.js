const path = require('path');
module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')],
          ['@components', path.resolve(__dirname, 'src/components')],
        ],
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  globals: {
    React: true,
    ReactDOM: true,
    PropTypes: true,
    antd: true,
    Util: true,
    Api: true,
  },
  parser: 'babel-eslint',
  rules: {
    'global-require': 0,
    'import/no-unresolved': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': [2, { ignore: ['wzn-extendantd-components'] }],
    'linebreak-style': [0, 'error', 'windows'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
  },
};
