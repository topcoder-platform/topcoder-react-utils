# Button
Handles buttons and button-like links (components that look like buttons, but
behave as links) in the same uniform manner.

[Examples](#examples)

**Why?** &mdash; Some buttons in our applications, although they look like
regular buttons, should behave as external (to different apps/webpages) or
internal (to different routes inside the app) links. Often, there is a need to
switch between this link-like and the true button behavior as the development
goes. The `<Button>` button component separates button styling from its logic,
helping to switch these behaviors without caring about styling, and update the
styling without caring about functionality.

Under the hood, a `<Button>` is rendered in one of the three ways:
1. When the `<Button>` is disabled it is rendered as `<div>` element with
button content, which allows to style disabled buttons the same way, whether
they are true or buttons or button-like links;
2. Otherwise, if the `<Button>` has `to` property set it is rendered as
[`<Link>`](link-and-navlink.md) (in this case it accepts all other props a
`<Link>` can accept). It helps to properly handle transitions both to external
URLs, and to other routes within the app (these are handled via the React
Router's mechanics, without reloading the app);
3. Otherwise the `<Button>` is rendered as a regular HTML `<button>` (we could
just use the `<Link>` in this case as well, but rendering and handling the
`<button>` is a bit more efficient.

### Button Properties
- **`active`** &mdash; *Boolean* &mdash; Optional. When *true* the button is
rendered in active state, even if it is not active otherwise;
- **`disabled`** &mdash; *Boolean* &mdash; Optional. When *true* the button is
disabled;
- **`enforceA`** &mdash; *Boolean* &mdash; Optional. When the button is rendered
as `<Link>` this prop enforces it to be rendered as a simple `<a>` element (thus
being treated as an external link);
- **`onClick`** &mdash; *Function* &mdash; Optional. *onClick* event handler;
- **`onMouseDown`** &mdash; *Function* &mdash; Optional. *onMouseDown* event
handler;
- **`opneNewTab`** &mdash; *Boolean* &mdash; Optional. When the button is
rendered as `<Link>` this property tells to open the link in a new tab;
- **`replace`** &mdash; *Boolean* &mdash; Optional. When the button is rendered
as `<Link>`, and the URL is internal, this property tells that the new route
should replace the last record in the browser's history, rather than be pushed
as a new entry into the history stack;
- **`size`** &mdash; *String* &mdash; Optional. Button size. If specified, and
`theme[size]` is defined, `theme[size]` class is added to the root element of
the button. It is supposed to control button size, and although any values can
be used, it is recommended to stick with `xs`, `sm`, `md`, `lg`, and `xl` size
labels, with `md` size being the default, when no `size` property is passed in;
- **`theme`** &mdash; *Object* &mdash; Button theme (we use
[react-css-super-themr](https://www.npmjs.com/package/react-css-super-themr)
to manage default / context / ad-hoc theming of components). This object is
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
- **`to`** &mdash; *Object* or *String* &mdash; When specified the button will
be rendered as `<Link>` (if non-disabled), and it will point to the specified
URL/location.

### <a name="examples">Examples</a>
Simple button:
```js
import { Button } from 'topcoder-react-utils';

export default function Example() {
  return <Button onClick={() => console.log('Clicked!')}>Click Me!</Button>;
}
```
