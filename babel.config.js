const hasha = require('hasha');

const generateScopedName = (name, filename) => {
  const hash = hasha(filename + name, { algorithm: 'md5' });
  return `${name}-${hash.slice(0, 5)}`;
};

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    development: {
      presets: [
        [
          '@babel/preset-react',
          {
            development: true,
          },
        ],
      ],
    },
  },
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'react-css-modules',
      {
        exclude: 'node_modules',
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss',
          },
        },
        generateScopedName,
      },
    ],
  ],
};
