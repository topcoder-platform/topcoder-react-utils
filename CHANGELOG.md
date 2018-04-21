# Topcoder React Utils Changelog

### v0.3.4
- Small fixes in the client / server setup.
- `handleActions(..)` alias added to `redux` utils, to use that function without
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
