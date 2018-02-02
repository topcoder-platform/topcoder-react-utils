# Jest Configurations
Standard configurations for [Jest](https://facebook.github.io/jest/).

**Why?** &mdash; We use Jest for unit-testing of critical code. Having
a standard configuration and setup reused between our projects, helps a lot.

For Jest configuration this package provides:
- **`config/jest/default`** &mdash; The standard  Jest config;
- **`config/jest/setup`** &mdash; The standard Jest setup script. At the moment
  it just sets up [`raf/polyfill`](https://www.npmjs.com/package/raf), required
  by React.
