/* Babel preset for the Webpack build. */

const _ = require('lodash');

const config = {
  presets: [
    '@babel/env',
    '@babel/react',
  ],
  plugins: [
    ['module-resolver', {
      extensions: ['.js', '.jsx'],
      root: [
        './src/shared',
        './src',
      ],
    }],
    '@babel/syntax-dynamic-import',
    'inline-react-svg',
    '@babel/transform-runtime',
    ['react-css-modules', {
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss',
        },
      },
    }],
  ],
};

function getPreset(babel) {
  const res = _.cloneDeep(config);

  const reactCssModulePluginOptions = res.plugins.find(
    ([name]) => name === 'react-css-modules',
  )[1];

  switch (babel.getEnv()) {
    case 'development':
      reactCssModulePluginOptions
        .generateScopedName = '[path][name]___[local]___[hash:base64:6]';
      res.plugins.push('react-hot-loader/babel');
      break;
    case 'production':
      reactCssModulePluginOptions.generateScopedName = '[hash:base64:6]';
      break;
    default:
  }
  return res;
}

module.exports = getPreset;
