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
- **`theme`** &mdash; *Object* &mdash; Button theme. This object is
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

### <a name="examples">Examples</a>
First of all, you want to define button theme, here is a good example to start from:
```scss
// theme.scss

/* Base button style (medium size). */
.button {
  align-items: center;
  background: while;
  border: solid 1px black;
  color: black;
  display: inline-flex;
  font: normal 15px arial;
  justify-content: center;
  min-height: 40px;
  margin: 5px;
  padding: 5px 23px;
  vertical-align: middle;
}

/* Extra styling for the disabled buttons. */
.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

/* .link and .regular classes are applied only to active buttons and button-like
 * links. Here we provide visual feedback for button "active", "focus", and
 * "hover" states. */
.link,
.regular {
  /* To ensure that visited button-like links look the same as the non-visited
  * ones (as typical buttons should not look different if they used to be clicked
  * before). */
  &:visited {
    color: black;
    font: normal 15px arial;
  }

  &:focus {
    box-shadow: 0 0 2px 1px #cfe6ff;
    border-color: #59a7ff;
    outline: none;
  }

  &:hover {
    background-image: linear-gradient(to top, #f5f5f5, white 49%, white);
    border-color: $tc-gray-40;
  }

  /* We need both ":active" selector and ".active" class here, if we want to
   * properly support the "active" option of the <Button>. */
  &.active,
  &:active {
    background-image: linear-gradient(to bottom, #f5f5f5, white 49%, white);
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    border-color: $tc-gray-40;
  }
}

/* And a few extra classes to support "xs", "sm", and "lg" button sizes. */
.xs {
  font: normal 11px arial;
  min-height: 20px;
  padding: 1px 13px;
}

.sm {
  font: normal 13px arial;
  min-height: 30px;
  padding: 4px 18px;
}

.lg {
  font: normal 17px arial;
  min-height: 50px;
  padding: 5px 28px;
}
```

You can apply this theme directly to your `<Button>`, but it is more
convenient to use
[react-css-super-themr](https://www.npmjs.com/package/react-css-super-themr)
for management of the button default / context / and ad-hoc theming. To use it,
you should wrap the `<Button>` component with `themr(..)` decorator:
```jsx
// ThemedButton.js
import { Button } from 'topcoder-react-utils';
import { themr } from 'react-css-super-themr';
import theme from './theme.scss';

export default const ThemedButton = themr('ThemedButton', theme)(Button);
```

Now you can use the button in your code in multiple ways:
```js
import React from 'react';
import { ThemeProvider } from 'react-css-super-themr';
import Button from './ThemedButton';

// Some themes we want to use for the ad-hoc and context theming.
import adHocTheme from './adHocStyle.scss';
import contextTheme from './contextTheme';

export default function Example() {
  return (
    <div>
      <Button
        // Button with the default theme.
        onClick={() => console.log('Clicked!')}
      >Click Me!</Button>

      <Button
        // Button-like link with ad-hoc theming.
        theme={adHocTheme}
        to="https://www.topcoder.com"
      >Click Me!</Button>

      <ThemeProvider
        theme={{ ThemedButton: contextTheme }}
      >
        <Button
          // Button with context theming.
          onClick={() => console.log('Clicked!')}
        >Click Me!</Button>
      </ThemeProvider>
    </div>
  );
}
```
