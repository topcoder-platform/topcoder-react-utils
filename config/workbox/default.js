/**
 * Default Workbox config.
 */

/* global self, workbox */

workbox.slipWaiting();
workbox.clientsClaim();

/* eslint-disable no-restricted-globals, no-underscore-dangle */
workbox.precaching.precacheAndRoute(self.__precachingManifest);
/* eslint-enable no-restricted-globals, no-underscore-dangle */
