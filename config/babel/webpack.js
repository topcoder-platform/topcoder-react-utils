/* Babel preset for the Webpack build. */

const _ = require('lodash');

const reactCssModulesPluginOps = {
  filetypes: {
    '.scss': {
      syntax: 'postcss-scss',
    },
  },
};

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
    ['react-css-modules', reactCssModulesPluginOps],
  ],
};

function getPreset(babel) {
  switch (babel.getEnv()) {
    case 'development':
      reactCssModulesPluginOps.generateScopedName = '[path][name]___[local]___[hash:base64:6]';
      config.plugins.push('react-hot-loader/babel');
      break;
    case 'production':
      reactCssModulesPluginOps.generateScopedName = '[hash:base64:6]';
      break;
    default:
  }
  return _.cloneDeep(config);
}

module.exports = getPreset;
