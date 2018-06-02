import actions from 'actions/item';
import reducer from 'reducers/item';
import mockDate from 'mockdate';

beforeAll(() => mockDate.set('2018-06-02T18:31:23+05:10'));
afterAll(() => mockDate.reset());

describe('Snapshot testing', () => {
  const a = actions.item;
  let state;

  function check(action) {
    state = reducer(state, action);
    expect(state).toMatchSnapshot();
    mockDate.set(Date.now() + 1234);
  }

  beforeEach(() => {
    state = undefined;
  });

  test('case #1', () => {
    check('@@INIT');
    check(a.updateReferenceCounter(1));
    check(a.setData('Test data'));
    check(a.dropData());
    check(a.updateReferenceCounter(-1));
    check(a.dropData());
  });

  test('case #2', () => {
    check('@@INIT');
    check(a.loadDataInit(12345));
    check(a.dropData());
    check(a.setData('Temporary Data'));
    check(a.loadDataDone(0, 'Wrong data'));
    check(a.loadDataDone(12345, 'Correct data'));
    check(a.dropData(Date.now() - 10000));
    check(a.updateReferenceCounter(-3));
    check(a.dropData());
  });
});
