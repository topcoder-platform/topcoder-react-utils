/**
 * Production Webpack configuration for ReactJS applications.
 */

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseFactory = require('./app-base');

/**
 * Creates a new production Webpack config, and performs some auxiliary
 * operations on the way.
 * @param {Object} ops Configuration options. This allows to modify some
 *  frequently changed options in a convenient way, without a need to manipulate
 *  directly with the created config object.
 *
 *  The following options are accepted:
 *
 * @param {Object|String|String[]} ops.entry Entry points. If an object is
 *  passed, in the "polyfills" entry point will be extended or appended to
 *  include some polyfills we consider obligatory. If a string or an array is
 *  passed in, it will be turned into "main" entry point, and the "polyfills"
 *  entry point will be added to it.
 *
 * @param {String} ops.context Base URL for resolution of relative
 *  config paths.
 *
 * @param {String} ops.publicPath Base URL for the output of the build assets.
 */
module.exports = function configFactory(ops) {
  const res = webpackMerge.smart(baseFactory({
    ...ops,
    babelEnv: 'production',
    mode: 'production',
  }), {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BABEL_ENV: JSON.stringify('production'),
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          /* Due to the way our styles are organized, these dangerous
           * optimizations can break our styles, thus they are disabled. */
          discardUnused: false,
          reduceIdents: false,
          zindex: false,
        },
      }),
    ],
  });
  res.entry.polyfills.push('topcoder-react-utils/dist/prod/client/init');
  return res;
};
