/**
 * Testing of payload creators for item actions.
 */

import actions from 'actions/item';
import MockDate from 'mockdate';

const a = actions.item;

beforeAll(() => MockDate.set('2018-06-02T19:11:23+01:23'));
afterAll(() => MockDate.reset());

test('Module exports', () => expect(actions).toMatchSnapshot());

test('dropData', () => {
  expect(a.dropData()).toMatchSnapshot();
  expect(a.dropData(12345)).toMatchSnapshot();
});

test('getDataInit', () => {
  expect(a.loadDataInit('12345')).toMatchSnapshot();
});

test('getDataDone', () => {
  expect(a.loadDataDone('12345', 'Dummy Data')).toMatchSnapshot();
});

test('setData', () => {
  expect(a.setData('Dummy Data')).toMatchSnapshot();
});

test('updateReferenceCounter', () => {
  expect(a.updateReferenceCounter(123)).toMatchSnapshot();
  expect(a.updateReferenceCounter(-123)).toMatchSnapshot();
});
