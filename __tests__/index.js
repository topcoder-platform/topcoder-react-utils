import * as exports from '../src';

test('Exports expected stuff', () => {
  expect(exports).toMatchSnapshot();
});
