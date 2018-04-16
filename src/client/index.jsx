/**
 * Initialization of client-side code.
 */

/* global document window */

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
 * @param {Function} options.Application Rendered app component.
 * @param {Function} options.storeFactory Optional. Given the initials state
 *  of redux store should create the store.
 */
export default async function Launch(options) {
  let store;
  if (options.storeFactory) {
    store = await options.storeFactory(window.ISTATE);
  }
  render(options.Application, store);

  if (module.hot) {
    module.hot.accept('.', () => render(options.Application, store));

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
