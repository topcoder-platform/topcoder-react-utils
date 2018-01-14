# Link and NavLink

Auxiliary wrappers around [React Router](https://github.com/ReactTraining/react-router)'s
`<Link>` and `<NavLink>` components; they help to handle external and internal
links in a single uniform manner.

[Examples](#examples)

**Why?** &mdash; We use React Router to handle routing of our applications.
React Router's `<Link>` and `<NavLink>` components work only with the
application's internal links; to properly handle external links it is necessary
to render them as `<a>` HTML elements. Our custom wrappers hide the difference
between internal and extrenal links, allowing to handle them via the same
interface provided by React Router, and extended with a few extra properties for
advance behaviours. It is convenient both when the rendered links come from a
visitor / database (thus you don't have to check yourself whether they are
external or internal), and also when you have to frequently change the actual
link addresses, as it often happens during active development / prototyping.

Our `<Link>` and `<NavLink>` are rendered as simple `<a>` elements when:
1. Explicitly opted by the `enforceA` property;
2. The link should be opened in a new tab (`openNewTab` property);
3. The link points to an anchor (starts with `#` symbol).

Otherwise, `<Link>` and `<NavLink>` are rendered as the corresponding React
Router's components. If the URL provided via `to` property points to a different
domain, it is treated as an external link and transition is handled assigning it
to the `document.location`, otherwise transition is handled by the React Router.
In case an extrenal link shares the same domain with the application, you can
use `enforceA` property to handle such case.

Both `<Link>` and `<NavLink>` support all properties of the underlying React
Router's components, along with some additional props:

### Link properties
- **`children`** &mdash; *Node* &mdash; Optional. Child ReactJS node to render
inside the link;
- **`className`** &mdash; *String* &mdash; Optional. Class(es) to apply to the
rendered link;
- **`enforceA`** &mdash; *Boolean* &mdash; Optional. If *true* enforces
rendering of the link as a simple `<a>` element;
- **`onClick`** &mdash; *Function* &mdash; Optional. An event handler to trigger
on click;
- **`onMouseDown`** &mdash; *Function* &mdash; Optional. An event handler to
trigger on MouseDown event;
- **`openNewTab`** &mdash; *Boolean* &mdash; Optional. If *true* the link will
be opened in a new tab;
- **`replace`** &mdash; *Boolean* &mdash; Optional. When *true*, clicking the
link will replace the current entry in the history stack instead of adding a new
one;
- **`to`** &mdash; *String* &mdash; Optional. Link URL. Defaults to empty
string.

### NavLink properties
`<NavLink>` supports all properties of `<Link>`, listed above, and the following
additional ones, coming from React Router:
- **`activeClassName`** &mdash; *String* &mdash; Optional. Class(es) to apply to
the rendered link when it is active;
- **`activeStyle`** &mdash; *String* &mdash; Optional. Styles to apply to the
rendered link when it is active;
- **`exact`** &mdash; *Boolean* &mdash; Optional. When *true*, the active
class/style will only be applied if the location is matched exactly;
- **`isActive`** &mdash; *Function* &mdash; Optional. A function to add extra
logic for determining whether the link is active. This should be used if you
want to do more than verify that the link’s pathname matches the current URL’s
pathname;
- **`location`** &mdash; *Object* &mdash; Optional. The `isActive` compares the
current history location (usually the current browser URL). To compare to a
different location, a `location` can be passed.
- **`strict`** &mdash; *Boolean* &mdash; Optional. When `true`, the trailing
slash on a location’s pathname will be taken into consideration when determining
if the location matches the current URL. See the <Route strict> documentation
for more information.

### <a name="examples">Examples</a>

Minimal `<Link>` example:
```js
import { Link } from 'topcoder-react-utils';

export default function LinksExample() {
  return <Link to="some/url">Link to Some URL</a>;
}
```
