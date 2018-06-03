import _ from 'lodash';
import * as redux from 'utils/redux';
import { createAction } from 'redux-actions';

const DUMMY_ACTION = {
  type: 'DUMMY/ACTION',
  error: true,
  payload: 'DUMMY_PAYLOAD',
};

const sampleActionCreator = createAction('SAMPLE/ACTION', (...args) => args);

test('Module exports', () => expect(redux).toMatchSnapshot());

test('proxyAction: payload creator reconstruction', () => {
  const proxy = redux.proxyAction(sampleActionCreator);
  expect(proxy('ARG1', 'ARG2')).toEqual(['ARG1', 'ARG2']);
});

test('proxyAction: action mapping', () => {
  expect(redux.proxyAction(sampleActionCreator, _.clone(DUMMY_ACTION)))
    .toEqual({ ...DUMMY_ACTION, type: 'SAMPLE/ACTION' });
});

test('proxyReducer', () => {
  const mockReducer = jest.fn();
  const proxyReducer = redux.proxyReducer(mockReducer, sampleActionCreator);
  proxyReducer('DUMMY_STATE', _.clone(DUMMY_ACTION));
  expect(mockReducer).toHaveBeenCalledWith('DUMMY_STATE', {
    ...DUMMY_ACTION,
    type: 'SAMPLE/ACTION',
  });
});
