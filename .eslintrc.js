module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
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
    'no-console': 0,
    "no-dynamic-require": 0,
    'react/jsx-uses-vars': 2,
    'linebreak-style': [0, 'error', 'windows'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
