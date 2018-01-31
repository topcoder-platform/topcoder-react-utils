# Topcoder React Utils
The [Topcoder](https://www.topcoder.com) collection of generic ReactJS
configurations, components and utilities to be shared between all internal and
external ReactJS projects developed by the Topcoder community.

### Content
- [Installation](#installation)
- [Configurations](#configurations)
- [Components](#components)
- [Utilities](#utilities)
- [Development](#development)
- [License](#license)

### <a name="installation">Installation</a>
Install this package as
```
$ npm install --save topcoder-react-utils
```

You are done if you only use components and utilities provided by this
package. If you are to use configurations to build or test your code, you
also need to install all development dependencies into your own package:
```
$ ./node_modules/.bin/adopt-dev-deps topcoder-react-utils
```

Installed dev dependencies will be stored into your `package.json`, thus
further invokations of `npm install` will automatically install them. You
only need to call `adopt-dev-deps` again if you update
`topcoder-react-utils` to a newer version.

### <a name="configurations">Configurations</a>
- [**Babel Configurations**](docs/babel-config.md) &mdash; Standard configurations
for [Babel](https://babeljs.io/);
- [**ESLint Configurations**](docs/eslint-config.md) &mdash; Standard
configurations for [ESLint](https://eslint.org/);
- [**Webpack Configurations**](docs/webpack-config.md) &mdash; Standard configurations for [Webpack](https://webpack.js.org/).

### <a name="components">Components</a>
- [**Button**](docs/button.md) &mdash; Handles buttons and button-like links
(components that look like regular buttons, but behave as links) in the same
uniform manner;
- [**Link and NavLink**](docs/link-and-navlink.md) &mdash; Auxiliary wrappers
around [React Router](https://github.com/ReactTraining/react-router)'s `<Link>`
and `<NavLink>` components; they help to handle external and internal links in
the same uniform manner.

### <a name="utilities">Utilities</a>
- [**SCSS Mixins**](docs/scss-mixins.md) &mdash; Collection of useful style
mixins;

### <a name="development">Development</a>
For convenient development you can link this package into your host package:
1.  Clone [`topcoder-react-utils`](https://github.com/topcoder-platform/topcoder-react-utils)
    to your machine, and checkout the branch you are going to work with;
2.  Inside `topcoder-react-utils` folder:
    - Install dependencies with `$ npm install`;
    - Locate `node_modules/extract-css-chunks-webpack-plugin/index.js` and
      inside the `isChunk(..)` function (line #358) add `return true;` statement,
      so that this function always returns *true*. This step is necessary at
      the moment, because the check `chunk instanceof Chunk` check inside this
      function does not work as expected when Webpack config is spread across
      multiple inter-linked packages.
    - Run the dev build `$ npm run build:dev`. It will compile the package, and
      also will watch for the file changes to automatically re-compile it as
      necessary.
3.  Inside the host package execute
    `$ npm link PATH_TO_TOPCODER_REACT_UTILS_FOLDER`. It will create a symlink
    from `HOST_PACKAGE/node_modules/topcoder-react-utils` to your local copy of
    the `topcoder-react-utils` package, so that any changes you do there become
    automatically available to the host package.

### <a name="license">License</a>
Topcoder React Utils is [MIT Licensed](LICENSE.md)
