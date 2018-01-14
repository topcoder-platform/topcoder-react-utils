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
dependencies. If you like to explicitly add them to the `package.json` of your
project do
```
$ npm install -g install-peerdeps
$ install-peerdeps topcoder-react-utils
```

Alternatively, you can do
```
$ npm install --save install-peerdeps
```

then add to your `package.json` the following script:
```json
"postinstall": "install-peerdeps -S topcoder-react-utils"
```

Now, in both cases, `$ npm install` will install all necessary dependencies, but
in the second case they won't be stored into your `package.json`.

### Configurations
- [**Babel Configurations**](docs/babel-config.md) &mdash; Standard configurations
for [Babel](https://babeljs.io/);
- [**ESLint Configurations**](docs/eslint-config.md) &mdash; Standard
configurations for [ESLint](https://eslint.org/).

### Components
- [**Link and NavLink**](docs/link-and-navlink.md) &mdash; Auxiliary wrappers around [React Router](https://github.com/ReactTraining/react-router)'s `<Link>` and `<NavLink>` components; they help to handle external and internal links in a single uniform manner;

### Utilities
*To be added*

### Development
*To be written*

### License
Topcoder React Utils is [MIT Licensed](LICENSE.md)
