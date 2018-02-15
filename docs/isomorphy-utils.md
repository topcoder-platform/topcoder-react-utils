# Isomorphy
Collection of helpers to deal with isomorphic aspects of the code.

**Why?** &mdash; Most of our ReactJS code should be isomorphic, i.e. it should
be functional both when executed at client-side (in browser), and when executed
at server-side (in NodeJS), without extra care of the caller. In some cases, it
demands to explicitely check, where the code is executed, and proceed depending
on that. This module provides functions that allow to do such checks, and to get
some additional information about the currently running code.

All functions provided by this module should be imported and used like:
```js
import { utils } from 'topcoder-react-utils';

utils.isomorphy.isClientSide();
```

Note that `isClientSide()` and `isServerSide()` functions rely on the global
`FRONT_END` variable being defined only inside JS bundle build for the frontend
execution by our standard Wepback config for apps. It is assumed that this
variable won't be present in NodeJS environment.

`isDevBuild()` and `isProdBuild()` functions rely on `BABEL_ENV` environment
variable, and they tell about the build-time configuration of the code, which
should be the same at the client- and server-side to ensure proper server-side
rendering. This is independent of `NODE_ENV` environment variable, which sets
the runtime configuration of the app, e.g. the API keys and endpoints to call
for development and production, etc.

`buildTimestamp()` function  relies on the global `BUILD_TIMESTAMP` variable
defined in the frontend JS bundle build by our standard Webpack congif for app;
at the server-side it relies on our standard server to expose, via the global
`BUILD_INFO` object, the build info about the bundle served by the server.

### Provided Functions
- **`buildTimestamp()`** &mdash; Returns build timestamp of the frontend JS
  bundle, in form of ISO date/time string. At the server-side it will be the
  timestamp of bundle being served by the server.
- **`isClientSide()`** &mdash; Returns `true` if executed at client-side
  (in browser); `false` otherwise.
- **`isDevBuild()`** &mdash; Returns `true` if development version of the code
  is running; `false` otherwise.
- **`isProdBuild()`** &mdash; Returns `true` if the production version of the
  code is running; `false` otherwise.
  variable (`NODE_ENV`, in turns, determines runtime configuration of the app).
- **`isServerSide()`** &mdash; Returns `true` if executed at the server-side
  (in NodeJS); `false` otherwise.
