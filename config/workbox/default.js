/**
 * Default Workbox config.
 */

/* global self, workbox */

workbox.skipWaiting();
workbox.clientsClaim();

/* eslint-disable no-restricted-globals, no-underscore-dangle */
workbox.precaching.precacheAndRoute(self.__precacheManifest);
/* eslint-enable no-restricted-globals, no-underscore-dangle */
