/**
 * Initialization of client-side code.
 */

/* global document, window */

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
  let app = (
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  );
  if (store) {
    app = (
      <Provider store={store}>
        {app}
      </Provider>
    );
  }
  ReactDom.hydrate(app, document.getElementById('react-view'));
}

/**
 * Initializes the code at client side. It takes care about receiving the data
 * injected at the server-side, and also about setting up client side of hot
 * module reloading (HMR).
 * @param {String} applicationModulePath Optional.
 * @param {Function} getApplication
 * @param {Object} moduleHot
 * @param {Function} storeFactory Optional.
 */
export default async function Launch({
  applicationModulePath,
  getApplication,
  moduleHot,
  storeFactory,
}) {
  let store;
  if (storeFactory) {
    store = await storeFactory(window.ISTATE);
  }
  render(getApplication(), store);

  if (moduleHot && applicationModulePath) {
    moduleHot.accept(applicationModulePath,
      () => render(getApplication(), store));

    /* HMR of CSS code each time webpack hot middleware updates the code. */
    moduleHot.addStatusHandler((status) => {
      if (status !== 'ready') return;
      const stamp = shortId();
      const links = document.querySelectorAll('link[rel=stylesheet][id="tru-style"]');
      for (let i = 0; i < links.length; i += 1) {
        links[i].href = `${links[i].href.match(/[^?]*/)}?v=${stamp}`;
      }
    });
  }
}
