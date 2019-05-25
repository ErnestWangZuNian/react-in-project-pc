module.exports = {
  extends: 'airbnb',
  plugins: ['react','prettier'],
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
    "prettier/prettier": "error",
    'no-console': 0,
    'react/jsx-uses-vars': 2,
    'react/prefer-es6-class': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
