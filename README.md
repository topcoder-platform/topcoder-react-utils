# Topcoder React Utils
The [Topcoder](https://www.topcoder.com) collection of generic ReactJS
configurations, components and utilities to be shared between all internal and
external ReactJS projects developed by the Topcoder community.

### Installation
Install this package as
```
$ npm install --save topcoder-react-utils
```

You are done if you only use components and utilities provided by this
package. If you are to use configurations to build or test your code, you
also need to install all development dependencies into your own package:
```
$ adopt-dev-deps
```

Installed dev dependencies will be stored into your `package.json`, thus
further invokations of `npm install` will automatically install them. You
only need to call `adopt-dev-deps` again if you update
`topcoder-react-utils` to a newer version.

### Configurations
- [**Babel Configurations**](docs/babel-config.md) &mdash; Standard configurations
for [Babel](https://babeljs.io/);
- [**ESLint Configurations**](docs/eslint-config.md) &mdash; Standard
configurations for [ESLint](https://eslint.org/);
- [**Webpack Configurations**](docs/webpack-config.md) &mdash; Standard configurations for [Webpack](https://webpack.js.org/).

### Components
- [**Button**](docs/button.md) &mdash; Handles buttons and button-like links
(components that look like regular buttons, but behave as links) in the same
uniform manner;
- [**Link and NavLink**](docs/link-and-navlink.md) &mdash; Auxiliary wrappers
around [React Router](https://github.com/ReactTraining/react-router)'s `<Link>`
and `<NavLink>` components; they help to handle external and internal links in
the same uniform manner.

### Utilities
- [**SCSS Mixins**](docs/scss-mixins.md) &mdash; Collection of useful style
mixins;

### Development
*To be written*

### License
Topcoder React Utils is [MIT Licensed](LICENSE.md)
