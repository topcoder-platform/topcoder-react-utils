/**
 * Entry point of the library.
 *
 * Depending on NODE_ENV variable, it proxies production or development build of
 * the library.
 */
/* eslint-disable global-require, import/no-unresolved */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/prod');
} else {
  module.exports = require('./dist/dev');
}
