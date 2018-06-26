/**
 * Development Webpack configuration for ReactJS libraries.
 */

const path = require('path');
const baseFactory = require('./lib-base');

/**
 * Creates a new Webpack config.
 *
 * @param {Object} ops Configuration params. This helps to conveniently set
 * the most useful options. You still can modify other config parameters with
 * help of "webpack-merge", or by a direct mutation of the created config
 * object.
 *
 * @param {String} ops.context Base URL for resolution of relative config
 * paths.
 *
 * @param {String} ops.entry Entry point of the library.
 *
 * @return {Object} Webpack configuration.
 */
module.exports = function configFactory(ops) {
  return baseFactory({
    ...ops,
    babelEnv: 'development',
    cssLocalIdent: '[path][name]___[local]___[hash:base64:6]',
    mode: 'development',
    outputPath: path.resolve(__dirname, ops.context, 'dist/dev'),
  });
};
