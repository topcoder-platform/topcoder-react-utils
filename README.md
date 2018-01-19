# Topcoder React Utils
The [Topcoder](https://www.topcoder.com) collection of generic ReactJS
configurations, components and utilities to be shared between all internal and
external ReactJS projects developed by the Topcoder community.

### Installation
Install this package as
```
$ npm install --save topcoder-react-utils
```

You are done if you will use only components and utilities provided by this
package. If you are to use configurations, you must also install peer
dependencies:
```
$ npm install -g install-peerdeps
$ install-peerdeps -d topcoder-react-utils
```

Peer dependencies will be also stored into `package.json` of your project, thus
future invokations of `npm install` will automatically install them, and you
won't need to use `install-peerdeps` as long as you don't update
`topcoder-react-utils` version.

### Configurations
- [**Babel Configurations**](docs/babel-config.md) &mdash; Standard configurations
for [Babel](https://babeljs.io/);
- [**ESLint Configurations**](docs/eslint-config.md) &mdash; Standard
configurations for [ESLint](https://eslint.org/);
- [**Webpack Configurations**](docs/webpack-conifg.md) &mdash; Standard configurations for [Webpack](https://webpack.js.org/).

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
