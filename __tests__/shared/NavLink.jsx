import NavLink from 'components/NavLink';
import React from 'react';
import { shallowRender } from 'utils/jest';

test('Matches snapshots', () => {
  shallowRender(<NavLink />);
});
