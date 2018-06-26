/* Helper for loading of tested module. */

/* global window */

const m = () => require('utils/isomorphy');

afterEach(() => {
  delete global.TRU_BUILD_INFO;
  delete window.TRU_BUILD_INFO;
  delete window.TRU_FRONT_END;
  delete process.env.BABEL_ENV;
  process.env.NODE_ENV = 'test';
});

beforeEach(() => jest.resetModules());

test('Client-side detection', () => {
  window.TRU_FRONT_END = true;
  expect(m().isClientSide()).toBe(true);
  expect(m().isServerSide()).toBe(false);
});

test('Server-side detection', () => {
  expect(m().isClientSide()).toBe(false);
  expect(m().isServerSide()).toBe(true);
});

test('Dev mode detection - client side', () => {
  process.env.NODE_ENV = 'development';
  window.TRU_FRONT_END = true;
  expect(m().isDevBuild()).toBe(true);
  expect(m().isProdBuild()).toBe(false);
});

test('Dev mode detection - server side', () => {
  process.env.NODE_ENV = 'development';
  expect(m().isDevBuild()).toBe(true);
  expect(m().isProdBuild()).toBe(false);
});

test('Prod mode - client side', () => {
  process.env.NODE_ENV = 'production';
  window.TRU_FRONT_END = true;
  expect(m().isDevBuild()).toBe(false);
  expect(m().isProdBuild()).toBe(true);
});

test('Prod mode - server side', () => {
  process.env.NODE_ENV = 'production';
  expect(m().isDevBuild()).toBe(false);
  expect(m().isProdBuild()).toBe(true);
});

test('Build timestamp - client-side', () => {
  window.TRU_BUILD_INFO = { timestamp: 'Test build timestamp' };
  window.TRU_FRONT_END = true;
  expect(m().buildTimestamp()).toBe('Test build timestamp');
});

test('Build timestamp - server-side', () => {
  global.TRU_BUILD_INFO = { timestamp: 'Test build timestamp' };
  expect(window.FRONT_END).toBeUndefined();
  expect(m().buildTimestamp()).toBe('Test build timestamp');
});
