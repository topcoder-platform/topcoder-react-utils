# Global Styles
Global styles necessary for a generic application.

**Why?** &mdash; There are some standard CSS code we are likely to reuse in any
web app, so here we provide it.

The global stylesheets are include into your app when you add to your root
ReactJS component the import
```js
import 'topcoder-react-utils/dist/style.css';
```

This stylesheet, beside bundled-in styles necessary for components provided by
this package, contains:

- [Eric Meyer's "Reset CSS" 2.0](https://meyerweb.com/eric/tools/css/reset/);
- Enables `geometryPrecision` for the text rendering quality.

