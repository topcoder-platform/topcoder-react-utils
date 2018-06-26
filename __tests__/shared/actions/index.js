/**
 * Actions testing.
 */

import actions from 'actions';

test('Exports expected actions',
  () => expect(actions).toMatchSnapshot());
