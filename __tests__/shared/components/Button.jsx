import _ from 'lodash';
import Button from 'components/Button';
import React from 'react';
import { shallowSnapshot } from 'utils/jest';

const testTheme = {
  active: 'ACTIVE_CLASS',
  button: 'BUTTON_CLASS',
  disabled: 'DISABLED_CLASS',
  link: 'LINK_CLASS',
  regular: 'REGULAR_CLASS',
  xl: 'XL_CLASS',
};

describe('Matches snapshots', () => {
  test('when active', () => {
    shallowSnapshot((
      <Button
        active
        onClick={_.noop}
        theme={testTheme}
      >BUTTON</Button>
    ));
    shallowSnapshot((
      <Button
        active
        onClick={_.noop}
        theme={_.omit(testTheme, 'regular')}
      >BUTTON</Button>
    ));
  });
  test('when disabled', () => {
    shallowSnapshot((
      <Button
        disabled
        onClick={_.noop}
        theme={testTheme}
        size="xl"
      >BUTTON</Button>
    ));
    shallowSnapshot((
      <Button
        disabled
        onClick={_.noop}
        theme={_.omit(testTheme, 'disabled')}
        size="xl"
      >BUTTON</Button>
    ));
  });
  test('when rendered as link', () => {
    shallowSnapshot((
      <Button
        active
        theme={testTheme}
        to="/SOME/TEST/URL"
      >BUTTON</Button>
    ));
    shallowSnapshot((
      <Button
        active
        theme={_.omit(testTheme, 'link')}
        to="/SOME/TEST/URL"
      >BUTTON</Button>
    ));
  });
});

