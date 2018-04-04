/* global window */

jest.mock('utils/webpack/require');

beforeEach(() => jest.resetModules());

afterEach(() => delete window.TRU_FRONT_END);

test('Export at client side', () => {
  window.TRU_FRONT_END = true;
  expect(require('../src')).toMatchSnapshot();
});

test('Export at server side', () => {
  expect(require('../src')).toMatchSnapshot();
});
