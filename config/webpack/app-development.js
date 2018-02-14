/**
 * Development Webpack configuration for ReactJS applications.
 */

const _ = require('lodash');
const baseFactory = require('./app-base');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

/**
 * Creates a new development Webpack config, and performs some auxiliary
 * operations on the way.
 * @param {Object} ops Configuration options. This allows to modify some
 *  frequently changed options in a convenient way, without a need to manipulate
 *  directly with the created config object.
 *
 *  The following options are accepted:
 *
 * @param {String} ops.context Base URL for resolution of relative
 *  config paths.
 *
 * @param {Object|String|String[]} ops.entry Entry points. If an object is
 *  passed, in the "polyfills" entry point will be extended or appended to
 *  include some polyfills we consider obligatory. If a string or an array is
 *  passed in, it will be turned into "main" entry point, and the "polyfills"
 *  entry point will be added to it.
 *
 * @param {String} ops.publicPath Base URL for the output of the build assets.
 */
module.exports = function configFactory(ops) {
  const res = webpackMerge.smart(baseFactory({
    ...ops,
    babelEnv: 'development',
    cssLocalIdent: '[path][name]___[local]___[hash:base64:6]',
  }), {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BABEL_ENV: JSON.stringify('development'),
          DEV_TOOLS: JSON.stringify(true),
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  });
  if (!_.isArray(res.entry.main)) {
    res.entry.main = [res.entry.main];
  }
  res.entry.main = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
  ].concat(res.entry.main);
  return res;
};
