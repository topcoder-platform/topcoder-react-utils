/**
 * Testing of collection reducer.
 */

import actions from 'actions/collection';
import reducer from 'reducers/collection';
import MockDate from 'mockdate';

afterAll(() => MockDate.reset());

describe('Generic Snapshot Testing', () => {
  /* In this group of tests we just dispatch a bunch of collection actions that
   * initialize and modify the same state object. After each modification, make
   * a snapshot of the state, and compare it to the expected one. */

  const a = actions.collection;
  let state;

  test('State initialization', () => {
    MockDate.set(1);
    state = reducer(undefined, '@@INIT');
    expect(state).toMatchSnapshot();
  });

  test('Addition of items and booking', () => {
    MockDate.set(2);
    state = reducer(state, a.addItems({ id1: 'Item1', id2: 'Item2' }));
    expect(state).toMatchSnapshot();
    MockDate.set(3);
    state = reducer(state, a.bookItems('id3'));
    expect(state).toMatchSnapshot();
    MockDate.set(4);
    state = reducer(state, a.addItems({ id3: 'Item3' }));
    expect(state).toMatchSnapshot();
    MockDate.set(5);
    state = reducer(state, a.bookItems(['id1', 'id2', 'id3'], 2));
    expect(state).toMatchSnapshot();
  });

  test('Loading of items', () => {
    MockDate.set(6);
    state = reducer(state, a.loadItemInit('op1', 'id4'));
    expect(state).toMatchSnapshot();
    MockDate.set(7);
    state = reducer(state, a.bookItems('id5'));
    MockDate.set(8);
    state = reducer(state, a.loadItemInit('op2', 'id5'));
    expect(state).toMatchSnapshot();
    MockDate.set(9);
    state = reducer(state, a.loadItemDone('op1', 'id4', 'Item4'));
    expect(state).toMatchSnapshot();
    MockDate.set(10);
    state = reducer(state, a.loadItemInit('op3', 'id5'));
    expect(state).toMatchSnapshot();
    MockDate.set(11);
    state = reducer(state, a.loadItemDone('op2', 'id5', 'Item5a'));
    expect(state).toMatchSnapshot();
    MockDate.set(12);
    state = reducer(state, a.loadItemDone('op3', 'id5', 'Item5b'));
    expect(state).toMatchSnapshot();
  });
});
