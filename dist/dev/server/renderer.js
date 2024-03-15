'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = factory;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _nodeForge = require('node-forge');

var _nodeForge2 = _interopRequireDefault(_nodeForge);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = require('react-helmet');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ExpressJS middleware for server-side rendering of a ReactJS app.
 */

var sanitizedConfig = _lodash2.default.omit(_config2.default, 'SECRET');

/**
 * Reads build-time information about the app. This information is generated
 * by our standard Webpack config for apps, and it is written into
 * ".build-info" file in the context folder specified in Webpack config.
 * At the moment, that file contains build timestamp and a random 32-bit key,
 * suitable for cryptographical use.
 * @param {String} context Webpack context path used during the build.
 * @return {Object} Resolves to the build-time information.
 */
function getBuildInfo(context) {
  var url = _path2.default.resolve(context, '.build-info');
  return JSON.parse(_fs2.default.readFileSync(url));
}

/**
 * Attempts to read from the disk Webpack stats generated during the build.
 * It will not work for development builds, where these stats should be captured
 * via compilator callback.
 * @param {String} buildDir
 * @return {Object} Resolves to the stats, or null, if cannot be read.
 */
function getWebpackStats(buildDir) {
  var url = _path2.default.resolve(buildDir, '__stats__.json');
  var res = void 0;
  try {
    res = JSON.parse(_fs2.default.readFileSync(url));
  } catch (err) {
    res = null;
  }
  return res;
}

/**
 * Prepares a new Cipher for data encryption.
 * @param {String} key Encryption key (32-bit random key is expected, see
 *  node-forge documentation, in case of doubts).
 * @return {Promise} Resolves to the object with two fields:
 *  1. cipher - a new Cipher, ready for encryption;
 *  2. iv - initial vector used by the cipher.
 */
function prepareCipher(key) {
  return new _promise2.default(function (resolve, reject) {
    _nodeForge2.default.random.getBytes(32, function (err, iv) {
      if (err) reject(err);else {
        // console.log('KEY', key);
        var cipher = _nodeForge2.default.cipher.createCipher('AES-CBC', key);
        cipher.start({ iv: iv });
        resolve({ cipher: cipher, iv: iv });
      }
    });
  });
}

/**
 * Creates the middleware.
 * @param {Object} webpackConfig
 * @param {Object} options Additional options:
 * @return {Function} Created middleware.
 */
function factory(webpackConfig, options) {
  var _this = this;

  var buildInfo = getBuildInfo(webpackConfig.context);

  global.TRU_BUILD_INFO = buildInfo;

  var WEBPACK_STATS = getWebpackStats(webpackConfig.output.path);

  var ops = _lodash2.default.defaults(_lodash2.default.clone(options), {
    beforeRender: function beforeRender() {
      return _promise2.default.resolve({});
    }
  });

  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var _ref2, _ref3, _ref3$, configToInject, extraScripts, store, _ref3$2, cipher, iv, context, helmet, App, INJ, _webpackConfig$output, publicPath, crossOriginLoading, crossorigin, assetsByChunkName, webpackStats, _webpackStats$toJson, timestamp, styles;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _promise2.default.all([ops.beforeRender(req, sanitizedConfig), prepareCipher(buildInfo.key)]);

            case 3:
              _ref2 = _context.sent;
              _ref3 = (0, _slicedToArray3.default)(_ref2, 2);
              _ref3$ = _ref3[0];
              configToInject = _ref3$.configToInject;
              extraScripts = _ref3$.extraScripts;
              store = _ref3$.store;
              _ref3$2 = _ref3[1];
              cipher = _ref3$2.cipher;
              iv = _ref3$2.iv;


              /* Context for react-router and collection of data related to server-side
              * rendering (this will be moved into separate place in future). */
              context = {
                /* Array of chunk names, to use for stylesheet links injection. */
                chunks: [],

                /* Pre-rendered HTML markup for dynamic chunks. */
                splits: {},

                store: store
              };
              helmet = void 0;

              /* Optional server-side rendering. */

              App = options.Application;

              if (App) {
                App = _react2.default.createElement(
                  _reactRouterDom.StaticRouter,
                  {
                    context: context,
                    location: req.url
                  },
                  _react2.default.createElement(App, null)
                );

                if (store) {
                  App = _react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    App
                  );
                }

                App = _server2.default.renderToString(App);

                /* This takes care about server-side rendering of page title and meta tags
                * (still demands injection into HTML template, which happens below). */
                helmet = _reactHelmet.Helmet.renderStatic();
              }

              /* Encrypts data to be injected into HTML.
              * Keep in mind, that this encryption is no way secure: as the JS bundle
              * contains decryption key and is able to decode it at the client side.
              * Hovewer, for a number of reasons, encryption of injected data is still
              * better than injection of a plain text. */
              cipher.update(_nodeForge2.default.util.createBuffer((0, _stringify2.default)({
                CONFIG: configToInject || sanitizedConfig,
                ISTATE: store ? store.getState() : null
              }), 'utf8'));
              cipher.finish();
              INJ = _nodeForge2.default.util.encode64('' + iv + cipher.output.data);

              /* It is supposed to end with '/' symbol as path separator. */

              _webpackConfig$output = webpackConfig.output, publicPath = _webpackConfig$output.publicPath, crossOriginLoading = _webpackConfig$output.crossOriginLoading;
              crossorigin = crossOriginLoading ? 'crossorigin="' + crossOriginLoading + '"' : '';
              assetsByChunkName = void 0;
              webpackStats = res.locals.webpackStats;

              if (webpackStats) {
                _webpackStats$toJson = webpackStats.toJson();
                assetsByChunkName = _webpackStats$toJson.assetsByChunkName;
              } else if (WEBPACK_STATS) {
                ;
                assetsByChunkName = WEBPACK_STATS.assetsByChunkName;
              } else assetsByChunkName = {};

              timestamp = (0, _moment2.default)(buildInfo.timestamp).valueOf();


              if (context.status) res.status(context.status);
              styles = [];

              context.chunks.forEach(function (chunk) {
                var assets = assetsByChunkName[chunk];
                if (!assets) return;
                if (!_lodash2.default.isArray(assets)) assets = [assets];
                assets = assets.filter(function (asset) {
                  return asset.endsWith('.css');
                });
                assets.forEach(function (asset) {
                  styles.push('<link data-chunk="' + chunk + '" id="tru-style" href="' + publicPath + asset + '" ' + crossorigin + ' rel="stylesheet" />');
                });
              });

              res.send('<!DOCTYPE html>\n        <html lang="en">\n          <head>\n            ' + (helmet ? helmet.title.toString() : '') + '\n            ' + (helmet ? helmet.meta.toString() : '') + '\n            <meta name="theme-color" content="#FFFFFF"/>\n            <link rel="manifest" href="' + publicPath + 'manifest.json">\n            <link\n              href="' + publicPath + 'main-' + timestamp + '.css"\n              ' + crossorigin + '\n              id="tru-style"\n              rel="stylesheet"\n            />\n            ' + styles.join('') + '\n            <link rel="shortcut icon" href="/favicon.ico" />\n            <meta charset="utf-8" />\n            <meta\n              content="width=device-width,initial-scale=1.0"\n              name="viewport"\n            />\n          </head>\n          <body>\n            <div id="react-view">' + (App || '') + '</div>\n            <script id="inj" type="application/javascript">\n              window.SPLITS = ' + (0, _serializeJavascript2.default)(context.splits, { isJSON: true }) + '\n              window.INJ="' + INJ + '"\n            </script>\n            <script\n              src="' + publicPath + 'polyfills-' + timestamp + '.js"\n              ' + crossorigin + '\n              type="application/javascript"\n            ></script>\n            ' + (extraScripts ? extraScripts.join('') : '') + '\n            <script\n              src="' + publicPath + 'main-' + timestamp + '.js"\n              ' + crossorigin + '\n              type="application/javascript"\n            ></script>\n          </body>\n        </html>');
              _context.next = 34;
              break;

            case 31:
              _context.prev = 31;
              _context.t0 = _context['catch'](0);

              next(_context.t0);

            case 34:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 31]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
}