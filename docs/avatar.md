# Avatar
The standard component for user avatars.

[Example](#example)

**`Why?`** &mdash; User avatars are usual elements in the applications we
create. The component provided by this package separates avatar styling from
its logic, and ensures that it works the same across our projects.

**Accepted Props:**
- **`DefaultAvatar`** &mdash; *ReactJS Node* &mdash; ReactJS component to render
  as a default avatar image;
- **`theme`** &mdash; *Object* &mdash; `react-css-super-themr` map to apply to
  the `Avatar`. At the moment, only one field is accepted:
  - **`avatar`** &mdash; *String* &mdash; CSS class to apply to the rendered
    avatar;
- **`url`** &mdash; *String* &mdash; Optional. URL of the image to render as
  the user's avatar. When not provided, the `DefaultAvatar` will be rendered
  instead. Defaults to *null*.

### Example
First of all, you should wrap the `Avatar` into your own theme and provide
the default avatar image, e.g.:
```scss
// theme.scss

.avatar {
  border-radius: 16px;
  height: 32px;
  width: 32px;
}
```
```jsx
// MyThemedAvatar.jsx

import React from 'react';
import { Avatar } from 'topcoder-react-utils';
import { themr } from 'react-css-super-themr';

import DefaultAvatarImage from './default-avatar-image.svg';
import theme from './theme.scss';

/* Note that injection of "props" after "DefaultAvatar" props will allow
 * to override the default image for specific instances, should you need to. */
export themr('MyThemedAvatar', theme)(props =>
  <Avatar DefaultAvatar={DefaultAvatarImage} {...props} />);
```

Now, in your code you can render your themed avatar as:
```scss
// style.scss

/* To demonstrate ad-hoc styling, say you need larger size of the avatar
 * in some specific place. */
.largeAvatar {
  border-radius: 128px;
  height: 256px;
  width: 256px;
}
```

```jsx
// Example.jsx

import React from 'react';
import Avatar from './MyThemedAvatar';

/* To demonstrate ad-hoc styling. */
import style from './style.scss';

export default function Example() {
  return (
    <div>
      {/* Renders default avatar. */}
      <Avatar />

      {/* Renders the specified avatar image. */}
      <Avatar url="url/of/the/user/avatar/image.jpg" />

      {/* A large avatar. */}
      <Avatar theme={{ avatar: style.largeAvatar }} />
    </div>
  );
}
```
