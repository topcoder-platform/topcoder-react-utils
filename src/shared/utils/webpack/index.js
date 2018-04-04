/**
 * Requires the specified module without including it into the bundle during
 * Webpack build. This function should be executed only server-side.
 * @param {String} modulePath
 * @return Required module.
 */
export function requireWeak(modulePath) {
  /* eslint-disable global-require, import/no-dynamic-require */
  const mod = require('./require')(modulePath);
  /* eslint-enable global-require, import/no-dynamic-require */
  return mod.default || mod;
}

export default undefined;
