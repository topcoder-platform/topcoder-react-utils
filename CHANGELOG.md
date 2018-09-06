# Topcoder React Utils Changelog

### v0.7.7
- Adds [**`Modal`**](docs/modal.md) component.

### v0.7.2
Fix of `<Link>` and `<NavLink>` logic.

### v0.7.0
Fixes various sins left in the previous version.

### v0.6.0
- A better way to build the library: both dev and prod builds are created; and
  the proper version is selected depending on `NODE_ENV` value at the buildtime
  (client-side) or runtime (server-side) of the host code.

  **BREAKING CHANGE:** You should update the way you include style the global
  stylesheet into the host code, from:
  ```jsx
  require('topcoder-react-utils/dist/style.css');
  ```
  to
  ```jsx
  /* eslint-disable global-require */
  if (process.env.NODE_ENV === 'production') {
    require('topcoder-react-utils/dist/prod/style.css');
  } else {
    require('topcoder-react-utils/dist/dev/style.css');
  }
  /* eslint-enable global-require */
  ```
  This will include the proper version of compiled global styles into the host
  code.

- Also most of NPM dependencies updated to their latest versions, which might
  demand some fixes in your code.

- Adds optional `type` prop to [`<Button>`](docs/button.md)

### v0.5.0
All dependencies are force-updated to their latest versions. It might introduce
breaking changes.

### v0.4.4
PoC implementation of **item** actions and reducer.

### v0.4.3
- Removes `adopt-dev-deps` script (use
  [`topcoder-lib-setup`](docs/topcoder-lib-setup-script.md) instead).

### v0.4.2
Adds `topcoder-lib-setup` script, which should help to update our ReactJS
libraries in the host packages. Not mentioned in the docs as it still pending
to be tested in prod.

### v0.4.0
- Updates many dependencies to the latest versions. Presumably, should not
  introduce breaking changes, but, just in case, tagged as a minor update.

### v0.3.9
- Adds `collection` actions and reducer.

### v0.3.8
- Fixes `webpack.resolveWeak(..)` for usage from within a host codebase.

### v0.3.7
- Adds `<AppChunk>` and `webpack.resolveWeak(..)`.

### v0.3.6
- Updated names pattern for static assets.

### v0.3.5
- ~~`cdnPublicPath` option added to the standard Webpack config for apps to support
  assets loading via CDN.~~ *Removed as not useful.*

### v0.3.4
- Small fixes in the client / server setup.
- `createActions(..)` alias added to `redux` utils, to use that function without
  explicit import of `redux-actions` module.

### v0.3.3
- Fixes and enhancements in the client / server setup (HMR, Redux, Server-side
  rendering);
- Added: `DevTools` (Redux Dev Tools); `<MetaTags>` (convenient management of
  meta-tags that provide content for page title, social sharing links, etc.);
  `redux` utils for creation of Redux store, and various auxiliary operations
  with actions and reducers.

### v0.3.2
- Adds the client-side initialization code, and makes some corrections of the
  standard Wepback configs and server setup.

### v0.3.0
- Added the standard, configurable server setup;
- Jest utils are now exposed in a different way;
- Config / isomorphy / webpack utils added;
- Updated dependencies.

### v0.2.0
- Webpack configs for apps updated to emulate `process.env.BABEL_ENV` instead of
  `process.env.NODE_ENV`. The original intent behind emulation of that constant
  was to distinguish development and production bundles during the runtime; in
  our code depending on this package it is `BABEL_ENV` allows to distinguish
  the builds, while `NODE_ENV` serve to switch between dev and prod APIs to be
  used during the runtime.

### v0.1.0
The first release of the package. In general, everything is set up, we are going
to move in difference stuff, without changing created package structure.

### v0.0.x
Pre-release drafts of the initial package version. A big journey starts here.
