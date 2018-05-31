/**
 * Creation of standard ExpressJS server for ReactJS apps.
 */

import _ from 'lodash';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import loggerMiddleware from 'morgan';
import requestIp from 'request-ip';
import stream from 'stream';

import rendererFactory from './renderer';

export default async function factory(webpackConfig, options) {
  const renderer = rendererFactory(webpackConfig, options);
  const { publicPath } = webpackConfig.output;

  const server = express();
  server.use(compression());
  server.use(helmet());

  if (options.favicon) {
    server.use(favicon(options.favicon));
  }

  server.use(bodyParser.json({ limit: '300kb' }));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use(requestIp.mw());

  loggerMiddleware.token('ip', req => req.clientIp);
  const FORMAT = ':ip > :status :method :url :response-time ms :res[content-length] :referrer :user-agent';
  server.use(loggerMiddleware(FORMAT, {
    stream: new stream.Writable({
      decodeStrings: false,
      write: (chunk, encoding, cb) => {
        options.logger.log(chunk);
        cb();
      },
    }),
  }));

  /* Setup of Hot Module Reloading for development environment.
   * These dependencies are not used, nor installed for production use,
   * hence we should violate some import-related lint rules. */
  /* eslint-disable global-require */
  /* eslint-disable import/no-extraneous-dependencies */
  /* eslint-disable import/no-unresolved */
  if (options.devMode) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    compiler.apply(new webpack.ProgressPlugin());
    server.use(webpackDevMiddleware(compiler, {
      name: 'main.js',
      publicPath,
      serverSideRender: true,
    }));
    server.use(webpackHotMiddleware(compiler));
  }
  /* eslint-enable global-require */
  /* eslint-enable import/no-extraneous-dependencies */
  /* eslint-enable import/no-unresolved */

  server.use(publicPath, express.static(webpackConfig.output.path));
  if (options.onExpressJsSetup) {
    await options.onExpressJsSetup(server);
  }
  server.use(renderer);

  /* Detects 404 errors, and forwards them to the error handler. */
  server.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /* Error handler. */
  server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    let errorResponse = null;
    const status = err.isJoi ? 400 : err.httpStatus || err.status || 500;

    if (err.isJoi && _.isArray(err.details)) {
      _.map(err.details, (e) => {
        if (e.message) {
          if (!errorResponse) errorResponse = e.message;
          else errorResponse += `, ${e.message}`;
        }
      });
    }
    errorResponse = errorResponse || err.message || 'Internal Server Error';

    /* Sets locals. The actual errors are exposed only in dev. */
    _.assign(res, {
      locals: {
        error: req.app.get('env') === 'development' ? err : {},
        message: err.message,
      },
    });

    /* Finally, the error response. */
    res.status(status).send(errorResponse);
  });

  return server;
}
