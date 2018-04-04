jest.mock('utils/isomorphy');

const exports = require('../src');

test('Exports expected stuff', () => {
  expect(exports).toMatchSnapshot();
});
