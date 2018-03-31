/**
 * This module provides isomorphic configuration. At the client-side it serves
 * cofiguration object from the global CONFIG variable, injected into the page
 * during the server-side rendering; at the server side it is fetched directly
 * from node-config.
 */

/* eslint-env browser */

import { isClientSide } from './isomorphy';

/* eslint-disable global-require */
module.exports = isClientSide() ? window.CONFIG : require('config');
/* eslint-enable global-require */
