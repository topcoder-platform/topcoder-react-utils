/**
 * Initialization of client-side code.
 */

/* global BUILD_INFO document window */

import forge from 'node-forge';
import React from 'react';
import ReactDom from 'react-dom';
import shortId from 'shortid';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/**
 * Renders given application into DOM, providing it with Redux store, if given.
 * @param {Function} Application Root ReactJS component of the app.
 * @param {Object} store Optional. Redux store.
 */
function render(Application, store) {
  let app = <BrowserRouter><Application /></BrowserRouter>;
  if (store) app = <Provider store={store}>{app}</Provider>;
  ReactDom.hydrate(app, document.getElementById('react-view'));
}

/**
 * Initializes the code at client side. It takes care about receiving the data
 * injected at the server-side, and also about setting up client side of hot
 * module reloading (HMR).
 * @param {Object} options Parameters accepted by the function.
 * @param {Function} options.Application Root component of the application to be
 *  rendered at the client side.
 * @param {String} options.appModulePath Optional. Path to the root module of
 *  the application. It should be provided to setup HMR.
 * @param {Function} options.customInit Optional. A custom function to be called
 *  before initial client-side rendering. It should return a promise that
 *  resolves to an object with the following params:
 *  - store {Object} - Optional. Redux store to be used.
 */
export default async function Init(options) {
  /* Injection of build-time data information into the client-side bundle. */
  window.TRU_BUILD_INFO = BUILD_INFO;
  window.TRU_FRONT_END = true;

  /* Removes data injection script out of the document. */
  const block = document.querySelector('script[id="inj"]');
  document.getElementsByTagName('body')[0].removeChild(block);

  /* Decodes data injected at the server side. */
  const { key } = window.TRU_BUILD_INFO;
  let data = forge.util.decode64(window.INJ);
  const decipher = forge.cipher.createDecipher('AES-CBC', key);
  decipher.start({ iv: data.slice(0, 32) });
  decipher.update(forge.util.createBuffer(data.slice(32)));
  decipher.finish();
  data = JSON.parse(forge.util.decodeUtf8(decipher.output.data));

  window.CONFIG = data.CONFIG;
  window.ISTATE = data.ISTATE;

  let store;
  if (options.customInit) ({ store } = await options.customInit());
  render(options.Application, store);

  if (module.hot && options.appModulePath) {
    module.hot.accept(
      options.appModulePath,
      () => render(options.Application, store),
    );

    /* HMR of CSS code each time webpack hot middleware updates the code. */
    /* eslint-disable no-underscore-dangle */
    const hotReporter = window.__webpack_hot_middleware_reporter__;
    /* eslint-enable no-underscore-dangle */
    const hotSuccess = hotReporter.success;
    hotReporter.success = () => {
      const stamp = shortId();
      const links = document.querySelectorAll('link[rel=stylesheet]');
      for (let i = 0; i < links.length; i += 1) {
        links[i].href = `${links[i].href.match(/[^?]*/)}?v=${stamp}`;
      }
      hotSuccess();
    };
  }
}
