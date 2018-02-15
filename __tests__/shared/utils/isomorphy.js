/* Helper for loading of tested module. */
const m = () => require('utils/isomorphy');

afterEach(() => {
  delete global.BUILD_INFO;
  delete global.BUILD_TIMESTAMP;
  delete global.FRONT_END;
  delete process.env.BABEL_ENV;
  process.env.NODE_ENV = 'test';
});

beforeEach(() => jest.resetModules());

test('Client-side detection', () => {
  global.FRONT_END = 'true';
  expect(m().isClientSide()).toBe(true);
  expect(m().isServerSide()).toBe(false);
});

test('Server-side detection', () => {
  expect(global.FRONT_END).toBeUndefined();
  expect(m().isClientSide()).toBe(false);
  expect(m().isServerSide()).toBe(true);
});

test('Dev code build detection', () => {
  process.env.BABEL_ENV = 'development';
  expect(m().isDevBuild()).toBe(true);
  expect(m().isProdBuild()).toBe(false);
});

test('Prod code build detection', () => {
  process.env.BABEL_ENV = 'production';
  expect(m().isDevBuild()).toBe(false);
  expect(m().isProdBuild()).toBe(true);
});

test('Build timestamp on client-side', () => {
  global.BUILD_TIMESTAMP = 'DUMMY_TIMESTAMP';
  global.FRONT_END = true;
  expect(m().buildTimestamp()).toBe('DUMMY_TIMESTAMP');
});

test('Build timestamp on server-side', () => {
  global.BUILD_INFO = { timestamp: 'DUMMY_TIMESTAMP' };
  expect(global.FRONT_END).toBeUndefined();
  expect(m().buildTimestamp()).toBe('DUMMY_TIMESTAMP');
});
