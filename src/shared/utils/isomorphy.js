/**
 * Collection of helpers to deal with isomorphic aspects of the code.
 */

/**
 * Returns `true` when executed at the front end side; `false` otherwise.
 * @return {Boolean}
 */
export function isClientSide() {
  return Boolean(global.FRONT_END);
}

/**
 * Returns `true` if executed at the server side; `false` otherwise.
 * @return {Boolean}
 */
export function isServerSide() {
  return !global.FRONT_END;
}

/**
 * Returns `true` if development version of the code is running;
 * `false` otherwise.
 * @return {Boolean}
 */
export function isDevBuild() {
  return process.env.BABEL_ENV === 'development';
}

/**
 * Returns `true` if production build of the code is running;
 * `false` otherwise.
 * @return {Boolean}
 */
export function isProdBuild() {
  return process.env.BABEL_ENV === 'production';
}

/**
 * Returns build timestamp of the front-end JS bundle.
 * @return {String} ISO date/time string.
 */
export function buildTimestamp() {
  if (isClientSide()) return global.BUILD_TIMESTAMP;
  return global.BUILD_INFO.timestamp;
}
