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
  - [Redux Templates](#redux-templates)
  - [Utilities](#utilities)
- [Development](#development)
  - [Local Testing of Library Updates within a Host Project](#local-testing-of-library-updates-within-a-host-project)
  - [Library Releases to NPM](#library-releases-to-npm)
- [License](#license)

## Installation
Install the package as
```bash
$ npm install --save topcoder-react-utils
$ ./node_modules/.bin/topcoder-lib-setup
```
Then import the global stylesheet into the root ReactJS component of your app:
```jsx
/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  require('topcoder-react-utils/dist/prod/style.css');
} else {
  require('topcoder-react-utils/dist/dev/style.css');
}
/* eslint-enable global-require */
```

To upgrade this library to the latest version just execute again
```bash
$ ./node_modules/.bin/topcoder-lib-setup
```

## Reference
### Configurations
- [**Babel Configurations**](docs/babel-config.md) &ndash; Standard
  configurations for [Babel](https://babeljs.io/);
- [**ESLint Configurations**](docs/eslint-config.md) &ndash; Standard
  configurations for [ESLint](https://eslint.org/);
- [**Jest Configurations**](docs/jest-config.md) &ndash; Standard configurations
  for [Jest](https://facebook.github.io/jest/);
- [**Stylelint Configurations**](docs/stylelint-config.md) &ndash; Standard
  configurations for [Stylelint](https://stylelint.io)
- [**Webpack Configurations**](docs/webpack-config.md) &ndash; Standard
  configurations for [Webpack](https://webpack.js.org/).

### Components
- [**`Avatar`**](docs/avatar.md) &ndash; The standard component for user avatars;
- [**`Button`**](docs/button.md) &ndash; Handles buttons and button-like links
  (components that look like regular buttons, but behave as links) in the same
  uniform manner;
- [**`Link` and `NavLink`**](docs/link-and-navlink.md) &ndash; Auxiliary wrappers
  around [React Router](https://github.com/ReactTraining/react-router)'s `<Link>`
  and `<NavLink>` components; they help to handle external and internal links in
  the same uniform manner;
- [**`Modal`**](docs/modal.md) &ndash; Themeable modal component;
- [**`ScalableRect`**](docs/scalable-rect.md) &ndash; Container that keeps
  the specified aspect ratio regardless the width you set.

### NodeJS Scripts
- [**topcoder-lib-setup**](docs/topcoder-lib-setup-script.md) &ndash; Helps to
  install and upgrade **topcoder-react-utils** and other similar libraries.

### Redux Templates
- [**Item**](docs/redux-item.md) &ndash; An async piece of data in Redux store.

### Utilities
- [**Client**](docs/client.md) &ndash; Client-side initialization code.
- [**Config**](docs/config.md) &ndash; Isomorphic app config;
- [**Global Styles**](docs/global-styles.md) &ndash; Global styles necessary for
  a generic application;
- [**Isomorphy**](docs/isomorphy-utils.md) &ndash; Collection of helpers to deal
  with isomorphic aspects of the code;
- [**Jest utils**](docs/jest-utils.md) &ndash; Collection of helpers to be used
  in Jest tests code;
- [**Redux utils**](docs/redux-utils.md) &ndash; *TO BE DOCUMENTED*
- [**SCSS Mixins**](docs/scss-mixins.md) &ndash; Collection of useful style
  mixins;
- [**Server**](docs/server.md) &ndash; Easy creation and launch of web-server
  with standard configuration, that serves a ReactJS application with or without
  server-side rendering, supports development tools (Hop Module Reloading), and
  can be further configured for the needs of specific projects.
- [**Webpack**](docs/webpack-utils.md) &ndash; Various utils related to the
  Webpack bundling process.

## Development

Whenever you are to do any changes in the library, keep in mind the following:

- Different projects rely on this library, the tooling it provides should be as
  generic and flexible as possible. When you change existing components, do your
  best to keep backward compatibility of the updated components, any changes
  that demand updates in the projects relying on the library, must be
  documented in the [changelog](CHANGELOG.md).

- Rely on unit tests to verify your changes, and prevent regression. Update
  existing unit tests to keep up with your changes, and add new unit tests
  when necessary.

- For the final testing of your updates within a host project relying on this
  lib, see the next section.

- The library use semantic versioning. In case your changes demand any changes
  in the project relying on the library, you should release it as a minor
  library update (more severe comparing to patch update). Consider to use
  a new branch, called after the minor version, and to not merge your changes
  into the main **develop** / **master** branches until everybody is prepared
  for that.

### Local Testing of Library Updates within a Host Project

To locally test how your library updates work within a host project relying on
the lib (without releasing them to NPM), do the following:

1.  In the library root execute `$ npm run build` to build the library, using
    the current code;

2.  In the library root execute `$ npm pack .` it will pack the library into the
    tarball file `topcoder-react-utils-x.y.z.tgz`, where **x.y.z** is the
    library version specified in `package.json`.

3.  In the host project execute
    `$ npm install --save PATH/TO/topcoder-react-utils-x.y.z.tgz` to install
    the local version of library build and packed at the previous steps. For
    all practical purposes, the installation will be performed the same way,
    as when the library is publised to NPM and installed from there.

4.  In case your update of **topcoder-react-utils** alters dependency versions,
    and you need to ensure the same dependency versions installed in the host
    project, execute `$ ./node_modules/.bin/topcoder-lib-setup --just-fix-deps`
    in the host project's root.

5.  Once you are done with the testing do not forget to ensure that the proper
    NPM version of **topcoder-react-utils** is saved back to the project's
    `package.json` file.

### Library Releases to NPM

Continious Integration and Delivery (CI/CD) is set up for this repository with
CircleCI 2.0. Commits to all branches trigger testing of the code with
`$ npm test` (it runs linters and unit tests), and also build the library.
CI/CD flow is interrupted in case of any problems.

To release updated library version to NPM do the following:

- Bump library version in `package.json` and `package-lock.json` by
  `$ npm version UPDATE_TYPE --no-git-tag` command, where `UPDATE_TYPE` should
  be one of `patch` / `minor` / `major` to update current version `x.y.z`
  to `x.y.(z+1)` / `x.(y+1).0` / `(x+1).0.0`. The `--no-git-tag` flag prevents
  automatic creation of the Git tag with the same name as the version.

- Tag the commit to be released with the git tag like `v0.1.2`, where `0.1.2` is
  the new version set in the previous step.

- Commit the tag to GitHub repository.

## License
Topcoder React Utils is [MIT Licensed](LICENSE.md)
