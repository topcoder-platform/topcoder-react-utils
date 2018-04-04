/**
 * Collection of helpers to deal with isomorphic aspects of the code.
 */

/**
 * Returns `true` when executed at the front end side; `false` otherwise.
 * @return {Boolean}
 */
export function isClientSide() {
  return Boolean(global.TRU_FRONT_END);
}

/**
 * Returns `true` if executed at the server side; `false` otherwise.
 * @return {Boolean}
 */
export function isServerSide() {
  return !global.TRU_FRONT_END;
}

/**
 * @return {String} Code mode: "development" or "production".
 */
function getMode() {
  return isClientSide() ? global.TRU_CONSTANTS.mode : process.env.BABEL_ENV;
}

/**
 * Returns `true` if development version of the code is running;
 * `false` otherwise.
 * @return {Boolean}
 */
export function isDevBuild() {
  return getMode() === 'development';
}

/**
 * Returns `true` if production build of the code is running;
 * `false` otherwise.
 * @return {Boolean}
 */
export function isProdBuild() {
  return getMode() === 'production';
}

/**
 * Returns build timestamp of the front-end JS bundle.
 * @return {String} ISO date/time string.
 */
export function buildTimestamp() {
  return global.TRU_CONSTANTS.timestamp;
}
