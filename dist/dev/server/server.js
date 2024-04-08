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

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _requestIp = require('request-ip');

var _requestIp2 = _interopRequireDefault(_requestIp);

var _stream = require('stream');

var _stream2 = _interopRequireDefault(_stream);

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(webpackConfig, options) {
    var renderer, publicPath, server, FORMAT, exludeSW, webpack, webpackDevMiddleware, webpackHotMiddleware, compiler;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            renderer = (0, _renderer2.default)(webpackConfig, options);
            publicPath = webpackConfig.output.publicPath;
            server = (0, _express2.default)();

            server.use((0, _compression2.default)());
            server.use((0, _helmet2.default)());

            if (options.favicon) {
              server.use((0, _serveFavicon2.default)(options.favicon));
            }

            server.use(_bodyParser2.default.json({ limit: '300kb' }));
            server.use(_bodyParser2.default.urlencoded({ extended: false }));
            server.use((0, _cookieParser2.default)());
            server.use(_requestIp2.default.mw());

            _morgan2.default.token('ip', function (req) {
              return req.clientIp;
            });
            FORMAT = ':ip > :status :method :url :response-time ms :res[content-length] :referrer :user-agent';

            server.use((0, _morgan2.default)(FORMAT, {
              stream: new _stream2.default.Writable({
                decodeStrings: false,
                write: function write(chunk, encoding, cb) {
                  options.logger.log(chunk);
                  cb();
                }
              })
            }));

            exludeSW = function exludeSW(middleware) {
              return function (req, res, next) {
                if (req.url.indexOf('/sw.js') > -1) {
                  next();
                  return;
                }
                middleware(req, res, next);
              };
            };

            /* Setup of Hot Module Reloading for development environment.
             * These dependencies are not used, nor installed for production use,
             * hence we should violate some import-related lint rules. */
            /* eslint-disable global-require */
            /* eslint-disable import/no-extraneous-dependencies */
            /* eslint-disable import/no-unresolved */


            if (options.devMode) {
              webpack = require('webpack');
              webpackDevMiddleware = require('webpack-dev-middleware');
              webpackHotMiddleware = require('webpack-hot-middleware');
              compiler = webpack(webpackConfig);

              compiler.apply(new webpack.ProgressPlugin());
              server.use(exludeSW(webpackDevMiddleware(compiler, {
                name: 'main.js',
                publicPath: publicPath,
                serverSideRender: true
              })));
              server.use(exludeSW(webpackHotMiddleware(compiler)));
            }
            /* eslint-enable global-require */
            /* eslint-enable import/no-extraneous-dependencies */
            /* eslint-enable import/no-unresolved */

            server.use(publicPath, exludeSW(_express2.default.static(webpackConfig.output.path)));

            if (!options.onExpressJsSetup) {
              _context.next = 19;
              break;
            }

            _context.next = 19;
            return options.onExpressJsSetup(server);

          case 19:
            server.use(renderer);

            /* Detects 404 errors, and forwards them to the error handler. */
            server.use(function (req, res, next) {
              var err = new Error('Not Found');
              err.status = 404;
              next(err);
            });

            /* Error handler. */
            server.use(function (err, req, res, next) {
              // eslint-disable-line no-unused-vars
              var errorResponse = null;
              var status = err.isJoi ? 400 : err.httpStatus || err.status || 500;

              if (err.isJoi && _lodash2.default.isArray(err.details)) {
                _lodash2.default.map(err.details, function (e) {
                  if (e.message) {
                    if (!errorResponse) errorResponse = e.message;else errorResponse += ', ' + e.message;
                  }
                });
              }
              errorResponse = errorResponse || err.message || 'Internal Server Error';

              /* Sets locals. The actual errors are exposed only in dev. */
              _lodash2.default.assign(res, {
                locals: {
                  error: req.app.get('env') === 'development' ? err : {},
                  message: err.message
                }
              });

              /* Finally, the error response. */
              res.status(status).send(errorResponse);
            });

            return _context.abrupt('return', server);

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function factory(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return factory;
}(); /**
      * Creation of standard ExpressJS server for ReactJS apps.
      */