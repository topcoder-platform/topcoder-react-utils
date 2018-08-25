import _ from 'lodash';
import factory, { SCRIPT_LOCATIONS } from 'server/renderer';
import fs from 'fs';
import React from 'react';

import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { createStore } from 'redux';

let mockFailsForgeRandomGetBytesMethod = false;

jest.mock('node-forge', () => {
  const mockForge = require.requireActual('node-forge');
  mockForge.random.getBytes = (numBytes, cb) => {
    if (mockFailsForgeRandomGetBytesMethod) {
      cb(new Error('Emulated Failure of forge.random.getBytes(..)'));
    }
    let res = '';
    for (let i = 0; i < numBytes; i += 1) res += i % 10;
    cb(null, res);
  };
  return mockForge;
});

const TEST_CONTEXT = `${__dirname}/test_data`;

const TEST_REDUX_STATE = {
  stateKey1: 'State Value #1',
  stateKey2: 'State Value #2',
};

const TEST_HTTP_REQUEST = {
  info: 'I am a dummy HTTP request! No need for a complex mock here!',
};

const TEST_WEBPACK_CONFIG = {
  context: TEST_CONTEXT,
  output: {
    path: '/test/path',
    publicPath: '/test/public/path/',
  },
};

const testBuildInfo = JSON.parse(
  fs.readFileSync(`${TEST_CONTEXT}/.build-info`),
);

beforeAll(() => {
  Helmet.canUseDOM = false;
});

afterEach(() => {
  delete global.TRU_BUILD_INFO;
  mockFailsForgeRandomGetBytesMethod = false;
});

afterAll(() => {
  Helmet.canUseDOM = true;
});

/**
 * Performs tests with the specified configuration and options.
 * @param {Object} webpackConfig
 * @param {Object} options
 * @return {Promise}
 */
async function coreTest(webpackConfig, options) {
  expect(global.TRU_BUILD_INFO).toBeUndefined();

  let renderer;
  expect(() => {
    renderer = factory(webpackConfig, options);
  }).not.toThrow();
  expect(renderer).toBeInstanceOf(Function);
  expect(global.TRU_BUILD_INFO).toEqual(testBuildInfo);

  try {
    let render = '';
    await renderer(_.clone(TEST_HTTP_REQUEST), {
      locals: {
        webpackStats: {
          toJson: () => ({
            assetsByChunkName: {
              'test-chunk-a': 'test-chunk-a-1511941200000.css',
              'test-chunk-b': [
                'test-chunk-b-1511941200000.js',
                'test-chunk-b-1511941200000.css',
              ],
            },
          }),
        },
      },
      send: (x) => { render += x; },
      status: (x) => { render += `HTTP STATUS: ${x}\n`; },
    });
    expect(render).toMatchSnapshot();
  } catch (e) {
    expect(e).toMatchSnapshot();
  }
}

test('Base rendering of HTML template',
  () => coreTest(TEST_WEBPACK_CONFIG, {}));

test('Config overriding for injection',
  () => coreTest(TEST_WEBPACK_CONFIG, {
    beforeRender: async (res, sanitizedConfig) => {
      expect(res).toEqual(TEST_HTTP_REQUEST);
      expect(sanitizedConfig).toBeInstanceOf(Object);
      expect(sanitizedConfig).not.toHaveProperty('SECRET');
      return {
        configToInject: {
          ...sanitizedConfig,
          additionalKey: 'Additional Value',
        },
      };
    },
  }));

test('Hemlet integration works',
  () => coreTest(TEST_WEBPACK_CONFIG, {
    Application: () => (
      <div>
        <p>
          Hello World!
        </p>
        <Helmet>
          <title>
            Test Page Title
          </title>
          <meta property="description" content="Test Page Description" />
        </Helmet>
        <p>
          Goodbye World!
        </p>
      </div>
    ),
  }));

test('Injection of additional JS scripts',
  () => coreTest(TEST_WEBPACK_CONFIG, {
    beforeRender: async () => ({
      extraScripts: [
        '<script>Dummy JS Sript</script>',
        '<script>Another Dummy JS Script</script>', {
          code: '<script>Yet another Dummy JS Script</script>',
          location: SCRIPT_LOCATIONS.DEFAULT,
        }, {
          code: '<script>1-st script after opening <head></script>',
          location: SCRIPT_LOCATIONS.HEAD_OPEN,
        }, {
          code: '<script>1-st script after opening <body></script>',
          location: SCRIPT_LOCATIONS.BODY_OPEN,
        }, {
          code: '<script>2-nd script after opening <body></script>',
          location: SCRIPT_LOCATIONS.BODY_OPEN,
        }, {
          code: '<script>2-nd script after opening <head></script>',
          location: SCRIPT_LOCATIONS.HEAD_OPEN,
        },
      ],
    }),
  }));

test('Server-side rendering (SSR); injection of CSS chunks & Redux state',
  () => coreTest(TEST_WEBPACK_CONFIG, {
    Application: () => (
      <Route
        component={({ staticContext }) => {
          staticContext.chunks.push('test-chunk-a');
          staticContext.chunks.push('test-chunk-b');
          return (
            <div>
              Hello Wold!
            </div>
          );
        }}
      />
    ),
    beforeRender: async () => ({
      store: createStore(() => _.clone(TEST_REDUX_STATE)),
    }),
  }));

test('Setting of response HTTP status the server-side rendering', () => {
  coreTest(TEST_WEBPACK_CONFIG, {
    Application: () => (
      <Route
        component={({ staticContext }) => {
          staticContext.status = 404; // eslint-disable-line no-param-reassign
          return (
            <div>
              404 Error Test
            </div>
          );
        }}
      />
    ),
  });
});

test('Throws in case of forge.random.getBytes(..) failure', () => {
  mockFailsForgeRandomGetBytesMethod = true;
  return coreTest(TEST_WEBPACK_CONFIG, {});
});
