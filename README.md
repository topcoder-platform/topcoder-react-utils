![Dev Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-utils/develop.svg?label=develop)
![Master Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-utils/master.svg?label=master)
![Latest NPM Release](https://img.shields.io/npm/v/topcoder-react-utils.svg)
![NPM Downloads](https://img.shields.io/npm/dm/topcoder-react-utils.svg)

# Topcoder React Utils
The [Topcoder](https://www.topcoder.com) collection of generic ReactJS
configurations, components and utilities to be shared between all internal and
external ReactJS projects developed by the Topcoder community.

## Content
- [Installation](#installation)
- [Reference](#reference)
  - [Configurations](#configurations)
  - [Components](#components)
  - [NodeJS Scripts](#nodejs-scripts)
  - [Utilities](#utilities)
- [Development](#development)
- [License](#license)

## Installation
Install the package as
```bash
$ npm install --save topcoder-react-utils
$ ./node_modules/.bin/topcoder-lib-setup
```
Then import the global stylesheet into the root ReactJS component of your app:
```js
import 'topcoder-react-utils/dist/style.css';
```

To upgrade this library to the latest version just execute again
```bash
$ ./node_modules/.bin/topcoder-lib-setup
```

## Reference
### Configurations
- [**Babel Configurations**](docs/babel-config.md) &mdash; Standard
  configurations for [Babel](https://babeljs.io/);
- [**ESLint Configurations**](docs/eslint-config.md) &mdash; Standard
  configurations for [ESLint](https://eslint.org/);
- [**Jest Configurations**](docs/jest-config.md) &mdash; Standard configurations
  for [Jest](https://facebook.github.io/jest/);
- [**Stylelint Configurations**](docs/stylelint-config.md) &mdash; Standard
  configurations for [Stylelint](https://stylelint.io)
- [**Webpack Configurations**](docs/webpack-config.md) &mdash; Standard
  configurations for [Webpack](https://webpack.js.org/).

### Components
- [**`Avatar`**](docs/avatar.md) &mdash; The standard component for user avatars;
- [**`Button`**](docs/button.md) &mdash; Handles buttons and button-like links
  (components that look like regular buttons, but behave as links) in the same
  uniform manner;
- [**`Link` and `NavLink`**](docs/link-and-navlink.md) &mdash; Auxiliary wrappers
  around [React Router](https://github.com/ReactTraining/react-router)'s `<Link>`
  and `<NavLink>` components; they help to handle external and internal links in
  the same uniform manner;
- [**`ScalableRect`**](docs/scalable-rect.md) &mdash; Container that keeps
  the specified aspect ratio regardless the width you set.

### NodeJS Scripts
- [**topcoder-lib-setup**](docs/topcoder-lib-setup-script.md) &mdash; Helps to
  install and upgrade **topcoder-react-utils** and other similar libraries.

### Utilities
- [**Client**](docs/client.md) &mdash; Client-side initialization code.
- [**Config**](docs/config.md) &mdash; Isomorphic app config;
- [**Global Styles**](docs/global-styles.md) &mdash; Global styles necessary for
  a generic application;
- [**Isomorphy**](docs/isomorphy-utils.md) &mdash; Collection of helpers to deal
  with isomorphic aspects of the code;
- [**Jest utils**](docs/jest-utils.md) &mdash; Collection of helpers to be used
  in Jest tests code;
- [**Redux utils**](docs/redux-utils.md) &mdash; *TO BE DOCUMENTED*
- [**SCSS Mixins**](docs/scss-mixins.md) &mdash; Collection of useful style
  mixins;
- [**Server**](docs/server.md) &mdash; Easy creation and launch of web-server
  with standard configuration, that serves a ReactJS application with or without
  server-side rendering, supports development tools (Hop Module Reloading), and
  can be further configured for the needs of specific projects.
- [**Webpack**](docs/webpack-utils.md) &mdash; Various utils related to the
  Webpack bundling process.

## Development
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

CI/CD is set up with CircleCI 2.0 for this repo. A commit to any branch, beside
`master` will trigger testing of the commited code (it will run `$ npm test` and
ensures that it does not fail). A commit to the protected `master` branch (only
organization members and repo admins can commit to `master`) will trigger the
testing, and, if successful, release of the updated package to the NPM registry.

For successful release to NPM you should bump the package version in the
`package.json`. To do it conveniently you can use `$ npm version UPDATE_TYPE`
command, where `UPDATE_TYPE` stays for one of `patch`/`minor`/`major` to bump up
`2`, `1`, or `0` in a sample version number `v0.1.2`. This command will update
`package.json` and `package-lock.json`, and create a new commit and tag in the
checked-out Git branch. Mind that `patch` updates should not introduce
any breaking changes into the codebase! Breaking changes should be done via
`minor` or `major` update, and they should be documented in
the [CHANGELOG](CHANGELOG.md).

## License
Topcoder React Utils is [MIT Licensed](LICENSE.md)
