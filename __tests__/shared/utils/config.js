/* eslint-env browser */

import _ from 'lodash';
import config from 'config';
import { isClientSide, isServerSide } from 'utils/isomorphy';

test('Base test', () => {
  expect(config).toMatchSnapshot();
});

describe('Isomorphy behavior tests', () => {
  const CLIENT_SIDE_CONFIG = {
    TYPE: 'CLIENT_SIDE_CONFIG',
  };

  const SERVER_SIDE_CONFIG = {
    TYPE: 'SERVER_SIDE_CONFIG',
  };

  beforeEach(() => {
    jest.resetModules();
    jest.setMock('config', _.clone(SERVER_SIDE_CONFIG));
    window.CONFIG = _.clone(CLIENT_SIDE_CONFIG);
  });

  afterEach(() => delete window.TRU_FRONT_END);

  test('Serves injected config at the client side', () => {
    window.TRU_FRONT_END = true;
    expect(isClientSide()).toBe(true);
    expect(require('utils/config').default).toEqual(CLIENT_SIDE_CONFIG);
  });

  test('Serves node-config at the server side', () => {
    expect(isServerSide()).toBe(true);
    expect(require('utils/config').default).toEqual(SERVER_SIDE_CONFIG);
  });
});
