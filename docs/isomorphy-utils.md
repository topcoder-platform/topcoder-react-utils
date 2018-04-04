# Isomorphy
Collection of helpers to deal with isomorphic aspects of the code.

**Why?** &mdash; Most of our ReactJS code should be isomorphic, i.e. it should
be functional both when executed at the client-side (in browser), and when
executed at the server-side (in NodeJS), without extra care of the caller.
In some cases, it demands to explicitely check, where the code is executed, and
proceed depending on that. This module provides functions that allow to do such
checks, and to get some additional information about the currently running code.

**Important Notes:**
- All functionality of this module relies on `topcoder-react-utils`
  configuration / client initialization / server code beign used in your
  project;
- `isDevBuild()` and `isProdBuild()` functions return dev/prod mode of the
  currently executed code. While the server launched in dev mode always serve
  dev version of the frontend code, the server launched in prod mode can serve
  either prod, or dev versions of the code, depending on which of them was build
  before by the caller. Note that the mode depends on the value `BABEL_ENV`
  environment variable (at the build time, for the front-end code; or at
  the present time, for the server-side code). `NODE_ENV` variable, in turn,
  defines the runtime environment, which can be configured via
  [`config`](./config-utils.md).

[Example](#example)

### Reference

- **`buildTimestamp()`** &mdash; Returns build timestamp of the frontend JS
  bundle, in form of ISO date/time string. At the server-side it will be the
  timestamp of bundle being served by the server.
- **`isClientSide()`** &mdash; Returns `true` if executed at client-side
  (in browser); `false` otherwise.
- **`isDevBuild()`** &mdash; Returns `true` if development version of the code
  is running; `false` otherwise.
- **`isProdBuild()`** &mdash; Returns `true` if the production version of the
  code is running; `false` otherwise.
- **`isServerSide()`** &mdash; Returns `true` if executed at the server-side
  (in NodeJS); `false` otherwise.

### Example
```js
import { isomorphy } from 'topcoder-react-utils';

if (isomorphy.isClientSide()) {
  // Do some useful staff here, if executed at the client-side.
}
```
