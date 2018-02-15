import Avatar from 'components/Avatar';
import React from 'react';
import { snapshot } from 'utils/jest';

const testTheme = {
  avatar: 'avatarClassName',
};

function DefaultAvatar() {
  return 'DEFAULT_AVATAR';
}

test('Matches snapshots', () => {
  snapshot((
    <Avatar
      DefaultAvatar={DefaultAvatar}
      theme={testTheme}
    />
  ));
  snapshot((
    <Avatar
      DefaultAvatar={DefaultAvatar}
      theme={testTheme}
      url="url/to/the/avatar"
    />
  ));
});
