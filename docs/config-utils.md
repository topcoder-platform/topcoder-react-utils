# Config
Isomorphic app config.

**Why?** &mdash; we use [node-config](https://github.com/lorenwest/node-config)
for convenient configuration of our apps. `node-config` itself works in NodeJS
environment only. This utility exposes the config in isomorphic way that works
both at server- and client-side.

Use it this way:
```js
import { config } from 'topcoder-react-utils';

// Some code relying on the config.
```

Keep in mind that config still can be different at client- and server-side, due
to normalization during injection into the HTML page template:
- Some sensitive config params can be trimmed out of the injected config (by
  default we remove `SECRET` key);
- Some extra data can be appended to the config, anything that does not come
  from `node-config`, and is not stored in Redux state (although, most probably,
  it should be), but still should be transmitted to the client side and be
  available inside JS.
