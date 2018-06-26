import _ from 'lodash';
import serverFactory from 'server/server';

jest.mock('serve-favicon', () => jest.fn(() => (req, res, next) => next()));

jest.mock('webpack', () => {
  const mock = () => ({
    apply: jest.fn(),
    plugin: jest.fn(),
    watch: jest.fn(),
  });
  mock.ProgressPlugin = Object;
  return mock;
});

jest.mock('webpack-hot-middleware',
  () => jest.fn(() => (req, res, next) => next()));

const TEST_CONTEXT = `${__dirname}/test_data`;

const TEST_FAVICON_PATH = '/path/to/favicon.ico';

const TEST_WEBPACK_CONFIG = {
  context: TEST_CONTEXT,
  output: {
    path: '/path/to/assets',
    publicPath: '/test/public/path/',
  },
};

afterEach(() => {
  delete process.env.DEV_TOOLS;
  jest.resetAllMocks();
});

test('Favicon support', () => {
  const server = serverFactory(TEST_WEBPACK_CONFIG, {
    favicon: _.clone(TEST_FAVICON_PATH),
  });
  expect(require('serve-favicon')).toHaveBeenCalledWith(TEST_FAVICON_PATH);
  return server;
});

test('Launch with dev tools', () => {
  process.env.DEV_TOOLS = true;
  const server = serverFactory(TEST_WEBPACK_CONFIG, {});
  return server;
});
