/**
 * Requires the specified module without including it into the bundle during
 * Webpack build. This function should be executed only server-side.
 *
 * WARNING: Beware to pass in relative paths: they will be resolved relative
 *  to the library distribution function, this is not what you want in most of
 *  cases. To convert a relative path to the absolute one, do in the caller code
 *  ```
 *  import path from 'path';
 *  const p = path.resolve(__dirname, './relative/path');
 *  const module = requireWeak(p);
 *  ```
 *  In case you use an absolute path that relies on Babel module resolver,
 *  pass it through resolveWeak function below.
 *
 * @param {String} modulePath
 * @return Required module.
 */
export function requireWeak(modulePath) {
  /* eslint-disable global-require, import/no-dynamic-require */
  const mod = require('./require')(modulePath);
  /* eslint-enable global-require, import/no-dynamic-require */
  return mod.default || mod;
}

/**
 * Resolves specified module path with help of Babel's module resolver.
 * Yes, the function itself just returns its argument to the caller, but Babel
 * is configured to resolve the first argument of resolveWeak(..) function, thus
 * the result will be the resolved path.
 * @param {String} modulePath
 * @return {String} Absolute or relative path to the module.
 */
export function resolveWeak(modulePath) {
  return modulePath;
}
