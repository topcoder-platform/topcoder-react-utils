/**
 * Testing of the collection actions.
 */

import actions from 'actions/collection';
import MockDate from 'mockdate';

const a = actions.collection;

beforeAll(() => MockDate.set('2018-05-25T19:03:35+00:00'));

afterAll(() => MockDate.reset());

test('Exports expected actions', () => expect(actions).toMatchSnapshot());

test('`addItems` payload creator',
  () => expect(a.addItems({ id1: 'Item 1', id2: 'Item 2' })).toMatchSnapshot());

test('`bookItems` payload creator', () => {
  expect(a.bookItems('id1')).toMatchSnapshot();
  expect(a.bookItems('id1', 7)).toMatchSnapshot();
  expect(a.bookItems(['id1', 'id2', 'id3'])).toMatchSnapshot();
});

test('`clean` payload creator', () => {
  expect(a.clean()).toMatchSnapshot();
  expect(a.clean(100)).toMatchSnapshot();
});

test('`freeItems` payload creator', () => {
  expect(a.freeItems('id1')).toMatchSnapshot();
  expect(a.freeItems('id1', 7)).toMatchSnapshot();
  expect(a.freeItems(['id1', 'id2', 'id3'])).toMatchSnapshot();
});

test('`loadItemInit` payload creator',
  () => expect(a.loadItemInit('operation-id', 'item-id')).toMatchSnapshot());

test('`loadItemDone` payload creator', () => {
  expect(a.loadItemDone('operation-id', 'item-id', 'item')).toMatchSnapshot();
});
