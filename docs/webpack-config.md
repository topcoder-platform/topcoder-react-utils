# Webpack Configurations
Standard configurations for [Webpack](https://webpack.js.org/).

[Example](#example)

**Why?** &mdash; Webpack is the heart of our build pipeline for ReactJS
applications. A proper Webpack configurations is necessary for many features in
our code, and it has a serious impact on the performance of the compiled code.
The standard Webpack configuration shared among our projects ensure consistency
and the ease of maintanance of our codebases.

Several Webpack configurations are provided by this package:
- [**config/webpack/app-base**](#app-base) &mdash; Base Webpack configuration for
  ReactJS applications. It is further extended for development and production
  use by the *app-development* and *app-production* configs below.
- [**config/webpack/app-development**](#app-development) &mdash; Development Webpack
  configuration for ReactJS applications;
- [**config/webpack/app-production**](#app-production) &mdash; Production Webpack
  configuration for ReactJS applications;
- [**config/webpack/lib-base**](#lib-base) &mdash; Base Webpack configuration
  for ReactJS libraries. It is further extended for development and production
  use by the *lib-development* and *lib-production* configs below;
- [**config/webpack/lib-development**](#lib-development) &mdash; Development
  Webpack configuration for ReactJS libraries;
- [**config/webpack/lib-production**](#lib-production) &mdash; Production
  Webpack configuration for ReactJS libraries.

Each of these modules provides a configuration factory that takes an option hash
as the argument, and returns config object. The option hash allows to easily
modify the most useful configuration options; while other options of the
returned config object can be further customized with use of
[webpackMerge](https://www.npmjs.com/package/webpack-merge), or by the direct
mutation of the config object.

### Configuration Details
- <a name="app-base">**`config/webpack/app-base`**</a>
  - Config factory handles the following fields in the options object:
    - **`babelEnv`** &mdash; *String* &mdash; Babel environment to use for
      the Babel compilation step;
    - **`context`** &mdash; *String* &mdash; Base URL for the resolution of
      relative config paths;
    - **`cssLocalIdent`** &mdash; *String* &mdash; Optional. The template for
      the CSS classnames generation by the Webpack's `css-loader`; it is passed
      into the `localIdentName` param of the loader. It should match the
      corresponding setting in the Babel config. Defaults to `[hash:base64:6]`.
    - **`entry`** &mdash; *Object*|*String*|*String[]* &mdash; Entry points.
      If an object is passed in, the `polyfills` entry point (chunk) is extended
      or appended to include some polyfills we consider obligatory
      ([babel-polyfill](https://babeljs.io/docs/usage/polyfill/),
      [nodelist-foreach-polyfill](https://www.npmjs.com/package/nodelist-foreach-polyfill)).
      If a string or a string array is passed in, it is assigned to the *main*
      entry pont, and the *polyfills* entry point is added then;
    - **`publicPath`** &mdash; *String* &mdash; Base URL for the output of
      the build assets;

  - The generated config will opt to:
    - Bundle the font assets (EOF, OTF, SVG, TTF, WOFF, WOFF2 files from
      the `src/assets/fonts` folder of your source code will be bundled
      and output into the `[PUBLIC_PATH]/fonts` folder);
    - Bundle image assets (GIF, JPEG, JPG, PNG files from any folder of
      your source code will be bundled and output into the
      `[PUBLIC_PATH]/images` folder);
    - Bundle SCSS files from any folder of your source code, beside
      `node_modules` and its subfolders. The files will be compiled,
      bundled and extracted into the `[PUBLIC_PATH]/[CHUNK_NAME].css`
      bundles;
    - Bundle CSS files from any folder of your code. The files will be
      bundled and extracted into the `[PUBLIC_PATH]/[CHUNK_NAME].css`
      bundles;
    - Bundle JS, JSX, and SVG files; they will be compiled into the
      `[PUBLIC_PATH]/[CHUNK_NAME].js` bundles, using the Babel environment
      specified in the factory options, and
      [`config/babel/webpack`](./babel-config.js#webpack) config.

  - The following path aliases will be automatically set:
    - **`assets`** for `[CONTEXT]/src/assets`;
    - **`components`** for `[CONTEXT]/src/shared/components`;
    - **`fonts`** for `[CONTEXT]/src/assets/fonts`;
    - **`styles`** for `[CONTEXT]/src/styles`.

    Also `resolve.symlinks` Webpack option is set to *false* to avoid problems
    with resolution of assets from packages linked with `npm link`.

  - The following environment variables will be emulated inside the output
    JS bundle:
    - **`BUILD_RNDKEY`** &mdash; A random 32 bit key that can be used
      for encryption, it is set just as a global variable accessible in
      the code;
    - **`BUILD_TIMESTAMP`** &mdash; UTC timestamp of the beginning of
      the build;
    - **`FRONT_END`** &mdash; It will be set *true* inside the bundle,
      so that shared code can use it to determine that it is executed
      at the client side.

  - It also opts to polyfill the `__dirname` global variable,
    and to ignore imports of the `fs` Node package;

  - Also, it will store to the disk (re-writes if exists) the file
    `[CONTEXT]/.build-info` which will contain a stringified JSON
    object with the following fields:
    - **`rndkey`** &mdash; The value set for `BUILD_RNDKEY`;
    - **`timestamp`** &mdash; The value set for `BUILD_TIMESTAMP`.

- <a name="app-development">**`config/webpack/app-development`**</a>

  This configration is based on the [`config/webpack/app-base`](#app-base) and
  it differs from that in the following:
  - *development* Babel environment is enforced, and sets
    `[path][name]___[local]___[hash:base64:6]` as the value of
    `cssLocalIdent` argument for the base config.
  - Adds as polyfills the code necessary to support the Hot Module
    Reloading:
    - [`react-hot-loader/patch`](https://github.com/gaearon/react-hot-loader)
    - [`webpack-hot-middleware/client?reload=true`](https://github.com/glenjamin/webpack-hot-middleware)
  - Emulates the following environment variables:
    - **`BABEL_ENV`** &mdash; It is set to *development* to inform any
      interested code that it is running in dev mode;
    - **`DEV_TOOLS`** &mdash; It is set to *true* to signal the code that
      Redux dev tools should be enabled;
    - **`NODE_ENV`** &mdash; It is set to *development*.
  - Adds the following plugins:
    - [HotModuleReplacementPlugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/);
    - [NoEmitOnErrorsPlugin](https://webpack.js.org/plugins/no-emit-on-errors-plugin/);
    - [NamedModulesPlugin](https://webpack.js.org/plugins/named-modules-plugin/).

- <a name="app-production">**`config/webpack/app-production`**</a>

  This configuration is based on the [`config/webpack/app-base`](#app-base) and
  it differs from that in the following:
  - *production* Babel environment is enforced;
  - Emulates the following environment variables:
    - **`BABEL_ENV`** &mdash; It is set to *production*;
    - **`NODE_ENV`** &mdash; It is set to *production*.
  - Adds the following plugins:
    - [OptimizeCssAssetsPlugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin);
    - [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/).

- <a name="lib-base">**`config/webpack/lib-base`**</a>

  This config is intended for ReactJS libraries; it allows to perform as much
  compilation of isomorphic ReactJS code as possible, so that the package can be
  further imported and used by another ReactJS package.

  - Config factory handles the following fields in the options object:

    - **`babelEnv`** &mdash; *String* &mdash; Babel environment to use for the
      Babel compilation step;

    - **`context`** &mdash; *String* &mdash; Base URL for the resolution of
      relative config paths;

    - **`cssLocalIdent`** &mdash; *String* &mdash; Optional. The template for
      the CSS classnames generation by the Webpack's css-loader; it is passed
      into the localIdentName param of the loader. It should match the
      corresponding setting in the Babel config. Defaults to [hash:base64:6].

    - **`entry`** &mdash; *Object|String|String[]* &mdash; Entry points. If an
      object is passed in, the polyfills entry point (chunk) is extended or
      appended to include some polyfills we consider obligatory (babel-polyfill,
      nodelist-foreach-polyfill). If a string or a string array is passed in, it
      is assigned to the main entry pont, and the polyfills entry point is added
      then;

    - **`library`** &mdash; *String* &mdash; Name of the library to be build.
      It is important for proper resolution of the library assets.

  - The generated config will opt to:
    - References to the font assets (EOF, OTF, SVG, TTF, WOFF, WOFF2 files from
      the `src/assets/fonts` folder of the library source code) will rewritten
      to `~LIBRARY_NAME/src/assets/fonts/FILENAME.FILE_EXTENSION`
      so that the host package of the library will be able to find and bundle
      them;
    - Bundle SCSS files from any folder of your source code, beside
      `node_modules` and its subfolders. The files will be compiled,
      bundled and extracted into the `dist/style.css`
      bundles;
    - Bundle JS, JSX, and SVG files; they will be compiled into the
      `dist/index.js` bundles, using the Babel environment
      specified in the factory options, and
      [`config/babel/webpack`](./babel-config.js#webpack) config.

  - The following path aliases will be automatically set:
    - **`assets`** for `[CONTEXT]/src/assets`;
    - **`components`** for `[CONTEXT]/src/shared/components`;
    - **`fonts`** for `[CONTEXT]/src/assets/fonts`;
    - **`styles`** for `[CONTEXT]/src/styles`.

    Also `resolve.symlinks` Webpack option is set to *false* to avoid problems
    with resolution of assets from packages linked with `npm link`.

  - The following packages are declared as externals:
    - `babel-runtime`,
    - `lodash`,
    - `moment`,
    - `prop-types`,
    - `react`,
    - `react-css-super-themr`,
    - `react-dom`,
    - `react-router-dom`,
    - `topcoder-react-utils`,
    - `url-parse`

- <a name="lib-development">**`config/webpack/lib-development`**</a>

  Extends and tunes [`config/webpack/lib-base`](#lib-base) to use *development*
  Babel environment, and sets `[path][name]___[local]___[hash:base64:6]` as
  the template for generated CSS classnames.

- <a name="lib-production">**`config/webpack/lib-production`**</a>

  Extends and tunes [`config/webpack/lib-base`](#lib-base) to use *production*
  Babel environment, and sets `[hash:base64:6]` as the template for generated
  CSS classnames.

### Example
Say, you want to setup Webpack configuration for development build in a new
project. Create the following configuration file inside `config/webpack` folder
(the exact folder is just a convention we like to use across the projects):
```js
// config/webpack/development.js

/* Note that config JS files are not processed by Babel, thus you should use
 * only the subset of JS syntax natively understood by the current Node version. */
const configFactory = require('topcoder-react-utils/config/webpack/app-development');
const path = require('path');

const standardConfig = configFactory({
  /* To resolve all paths in the config relative to the root folder of your code. */
  context: path.resolve(__dirname, '../..'),

  /* Entry point of you code. You can also pass in JS object with keys naming
   * the separate bundles you want to pack, and the values specifying their
   * entry points. */
  entry: './src',

  /* You can use "publicPath" option here if you want to serve generated
   * assets from a non-root folder of your server. */
});

/* Here you can make additional modifications of the config, if you need to,
 * using "webpack-merge" package, or in some custom way. */

module.exports = standardConfig;
```

To wire this config to your NPM build script, create another simple file in
the root of your code:
```js
// webpack.config.js

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

module.exports = function buildConfig(env) {
  return require(`./config/webpack/${env}.js`);
}
```

Now you can define your NPM build script, using the necessary config, like so
(the clean step is handy, it should be defined as a separate `clean` script):
```
"build:dev": "npm run clean && ./node_modules/.bin/webpack --env=development --progress --profile --colors --display-optimization-bailout"
```
