# ScalableRect
Container that keeps the specified aspect ratio regardless the width you set.

[Code Example](#example),
[Live Demo](https://community-app.topcoder-dev.com/examples/scalable-rect)

**Why?** &mdash; From time to time you need to render an HTML element with
a specified aspect ratio of its sizes. HTML/CSS allows to achieve that, but
it demands two nested `<div>` elements, and a non-intuitive CSS code. This
component hides all technical aspects of that solution under the hood.

**Accepted Props:**
- **`children`** &mdash; *Node* &mdash; Optional. Any content you want to render
  inside the container. Defaults to *null*;
- **`className`** &mdash; *String* &mdash; Optional. The style to be applied to
  the container itself. When provided, the rendered conainer will be wrapped into
  an additional `<div>` wrapper, and the style will be applied to that wrapper.
  Defaults to *null*;
- **`ratio`** &mdash; *String* &mdash; Optional. Size ratio of the rendered
  rectangle, in `W:H` form. Defaults to `1:1`.
- **`styleName`** &mdash; *String* &mdash; Optional. As an alternative to
  the `className`, you can pass in `styleName` instead. Babel will convert
  it to the correct classname, following our setup for CSS modules.

### <a name="example">Example</a>
```scss
// style.scss

.container {
  background: red;
  width: 640px;
}

.content {
  background: blue;
  height: 100%;
  margin: 10px;
  width: 100;
}
```

```js
// index.scss

import React from 'react';
import { ScalableRect } from 'topcoder-react-utils';

import './style.scss';

export default function Example() {
  return (
    <ScalableRect styleName="container" ratio="4:3">
      <div styleName="content" />
    </ScalableRect>
  );
}
```
