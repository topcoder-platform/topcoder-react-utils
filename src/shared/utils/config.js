/**
 * This module provides isomorphic configuration. At the client-side it serves
 * cofiguration object from the global CONFIG variable, injected into the page
 * during the server-side rendering; at the server side it is fetched directly
 * from node-config.
 */

/* global window */

import { isClientSide } from './isomorphy';
import { requireWeak } from './webpack';

/* eslint-disable global-require */
export default isClientSide() ? window.CONFIG : requireWeak('config');
/* eslint-enable global-require */
