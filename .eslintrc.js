module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      arrowFunctions: true,
      classes: true,
      modules: true,
      defaultParams: true
    },
    sourceType: "module"
  },
  globals: {
    React: true,
    ReactDOM: true,
    PropTypes: true,
    antd: true,
    Util: true,
    Api: true
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "no-console": 0,
    "react/jsx-uses-vars": 2,
    "react/prefer-es6-class": ["error", "always"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "jsx-quotes": ["error", "prefer-double"]
  }
};
