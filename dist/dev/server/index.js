'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

require('raf/polyfill');

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Normalizes a port into a number, string, or false.
 * @param {String} value Port name or number.
 * @return Port number (Number), name (String), or false.
 */


/* Polyfill required by ReactJS. */
/**
 * Standard web servers.
 */

function normalizePort(value) {
  var port = _lodash2.default.toNumber(value);
  if (_lodash2.default.isFinite(port)) return port; /* port number */
  if (!_lodash2.default.isNumber(port)) return value; /* named pipe */
  return false;
}

/**
 * Creates and starts a new webserver.
 * @param {Object} webpackConfig The Webpack config that was used to build the
 *  frontend bundle.
 * @param {config} options Additional options:
 *  - Application {Function} - Optional. The root ReactJS component of the app
 *    to use for server-side rendering;
 *  - devMode {Boolean} - Whether the server should be started in dev mode;
 *  - favicon {String} - Path of the favicon to be used by the server;
 *  - logger {Object} - Optional. The logger to use. By default, the console
 *    is used (which is not a good decision performancewise, but it will be
 *    changed soon);
 *  - beforeRender {Function} - The hook into server-side rendering. It will get
 *    incoming request as the argument and it should return a promise that will
 *    resolve to the object with the following fields all optional:
 *    - config {Object} - Config object to be injected into the page;
 *    - extraScripts {Array} - Any additional scripts to be injected into
 *      HTML template;
 *    - store {Object} - Redux store, which state should be used for server-side
 *      rendering, if it is performed, and also injected into HTML template as
 *      the initial state.
 *  - onExpressJsSetup {Function} - Custom setup of ExpressJS server.
 *  - port {String} - Optional. The port to listen (number or name). If not
 *    specified the value will be taken from PORT environmental variable, or
 *    default to 3000 otherwise.
 * @return {Promise} Resolves to the result object has two fields:
 *  - express {Object} - ExpressJS server;
 *  - http {Object} - NodeJS HTTP server.
 */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(webpackConfig, options) {
    var ops, expressServer, httpServer;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /* Options normalization. */
            ops = options ? _lodash2.default.clone(options) : {};

            ops.port = normalizePort(ops.port || process.env.PORT || 3000);
            _lodash2.default.defaults(ops, {
              logger: console
            });

            /* Creates servers, resolves and sets the port. */
            _context.next = 5;
            return (0, _server2.default)(webpackConfig, ops);

          case 5:
            expressServer = _context.sent;
            httpServer = _http2.default.createServer(expressServer);

            /* Sets error handler for HTTP server. */

            httpServer.on('error', function (error) {
              if (error.syscall !== 'listen') throw error;
              var bind = _lodash2.default.isString(ops.port) ? 'Pipe ' + ops.port : 'Port ' + ops.port;

              /* Human-readable message for some specific listen errors. */
              switch (error.code) {
                case 'EACCES':
                  ops.logger.error(bind + ' requires elevated privileges');
                  process.exit(1);
                  break;
                case 'EADDRINUSE':
                  ops.logger.error(bind + ' is already in use');
                  process.exit(1);
                  break;
                default:
                  throw error;
              }
            });

            /* Listening event handler for HTTP server. */
            httpServer.on('listening', function () {
              var addr = httpServer.address();
              var bind = _lodash2.default.isString(addr) ? 'pipe ' + addr : 'port ' + addr.port;
              ops.logger.info('Server listening on ' + bind + ' in ' + process.env.NODE_ENV + ' mode');
            });

            httpServer.listen(ops.port);

            return _context.abrupt('return', {
              expressServer: expressServer,
              httpServer: httpServer
            });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function launch(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return launch;
}();