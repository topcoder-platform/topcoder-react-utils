import * as exports from '../src';

test('Exports expected stuff', () => {
  expect(exports).toHaveProperty('Avatar');
  expect(exports).toHaveProperty('Button');
  expect(exports).toHaveProperty('Link');
  expect(exports).toHaveProperty('NavLink');
  expect(exports).toHaveProperty('ScalableRect');
});
