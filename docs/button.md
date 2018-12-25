# Button
Handles buttons and button-like links (components that look like buttons, but
behave as links) in the same uniform manner.

[Examples](#examples)

**Why?** &mdash; Sometimes we want a button to behave as an external or internal
link, i.e. either to redirect a visitor to another resource, outside of the app,
or to a different route, without reloading the app. Often there is also a need
to switch between this and the regular button behavior, without changin the
component look and layout. The `<Button>` component separates button styling
from its logic, helping to conveniently handle them independently.

Under the hood, a `<Button>` instance is rendered as:
1.  A `<div>` block, when the button is disabled. It helps to ensure exactly the
same style of disabled buttons and button-like links;
2.  A [`<Link>`](link-and-navlink.md) component, when `to` property is set. This
takes care about internal and external links.
3.  A `<button>` element, otherwise. In principle, our `<Link>` component can
play the button role as well, thus this third case could be avoided, but
rendering true buttons with `<button>` elements is somewhat more efficient.

### Button Properties
- **`active`** &mdash; *Boolean* &mdash; Optional. When *true*, the button is
rendered in active state, even if it is not active otherwise;
- **`disabled`** &mdash; *Boolean* &mdash; Optional. When *true*, the button is
disabled;
- **`enforceA`** &mdash; *Boolean* &mdash; Optional. When the button is rendered
as `<Link>`, this prop enforces it to be rendered as a simple `<a>` element
(external link);
- **`onClick`** &mdash; *Function* &mdash; Optional. *onClick* event handler;
- **`onMouseDown`** &mdash; *Function* &mdash; Optional. *onMouseDown* event
handler;
- **`opneNewTab`** &mdash; *Boolean* &mdash; Optional. When the button is
rendered as `<Link>`, this property tells to open the link in a new tab;
- **`replace`** &mdash; *Boolean* &mdash; Optional. When the button is rendered
as `<Link>`, and the URL is internal, this property tells that the new route
should replace the last record in the browser's history, rather than be pushed
as a new entry into the history stack;
- **`size`** &mdash; *String* &mdash; Optional. Button size. If specified, and
`theme[size]` is defined, `theme[size]` class is added to the root element of
the button. It is supposed to control button size, and although any values can
be used, it is recommended to stick with `xs`, `sm`, `md`, `lg`, and `xl` size
labels, with `md` size being the default, when no `size` property is passed in;
- **`theme`** &mdash; *Object* &mdash; Optional. Button theme. This object is
supposed to have the following fields:
  - **`button`** &mdash; *String* &mdash; The class to apply to the root element
  of the button in all cases;
  - **`disabled`** &mdash; *String* &mdash; The class to additionally apply to
  the root element of the button, when it is disabled;
  - **`link`** &mdash; *String* &mdash; Optional. The class to additionally
  apply to the root element of the button, when the button is rendered as
  `<Link>`;
  - **`regular`** &mdash; *String* &mdash; Optinal. The class to additionally
  apply to the root element of the button, when the button is rendered as
  `<button>`;
  - Other fields matching acceptable values of the `size` prop. Each of them
  will hold the class to additionally apply to the root element of the button,
  when the `<size>` value matches;
- **`to`** &mdash; *Object* or *String* &mdash; When specified, the button will
be rendered as `<Link>` (if non-disabled), and it will point to the specified
URL/location.
- **`type`** &mdash; *String* &mdash; Optional. Button type. It will have
  effect only when Button is rendered as `<button>`.

### <a name="examples">Examples</a>
```jsx
import React from 'react';
import { Button } from 'topcoder-react-utils';

export default function Example() {
  return <Button to="https://topcoder.com">Simple Button</Button>;
}
```
