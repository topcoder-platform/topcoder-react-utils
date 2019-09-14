/* Babel preset for the Webpack build. */
/* eslint-disable */
module.exports = () => {
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
      require('@babel/plugin-syntax-dynamic-import'),
      require('@babel/plugin-syntax-import-meta'),
      [require('@babel/plugin-proposal-class-properties')],
      require('@babel/plugin-proposal-json-strings'),
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx'],
          root: ['./src/shared', './src'],
        },
      ],
      'inline-react-svg',
      [require('@babel/plugin-transform-runtime')],
      ['react-css-modules', reactCssModulesPluginOps],
    ],
  };

  switch (process.env.BABEL_ENV) {
    case 'development':
      reactCssModulesPluginOps.generateScopedName = '[path][name]___[local]___[hash:base64:6]';
      config.plugins.push('react-hot-loader/babel');
      break;
    case 'production':
      reactCssModulesPluginOps.generateScopedName = '[hash:base64:6]';
      break;
    default:
  }
  return config;
};
