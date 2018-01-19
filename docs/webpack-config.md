# Webpack Configurations
Standard configurations for [Webpack](https://webpack.js.org/).

**Why?** &mdash; Webpack is the heart of our build pipeline for ReactJS
applications. A proper Webpack configurations is necessary for many features in
our code, and it has a serious impact on the performance of the compiled code.
The standard Webpack configuration shared among our projects ensure consistency
and the ease of maintanance of our codebases.

Several Webpack configurations are provided by this package:
- [**config/webpack/default**](#base) &mdash; Base Webpack configuration, it is
  extended in different ways both by *development* and *production* configs
  below. It might be useful for you if you need to compose a config alternative
  to them;
- [**config/webpack/development**](#development) &mdash; For development builds;
- [**config/webpack/production**](#production) &mdash; For production builds.

Each of these modules provides a configuration factory that takes an option hash
as the argument, and returns config object. The option hash allows to easily
modify the most useful configuration options; while other options of the
returned config object can be further customized with use of
[webpackMerge](https://www.npmjs.com/package/webpack-merge), or by the direct
mutation of the config object.

### Configuration Details
- <a name="base">**`config/webpack/default`**</a>
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
    - **`styles`** for `[CONTEXT]/src/styles`.

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

- <a name="development">**`config/webpack/development`**</a>

  This configration is based on the [`config/webpack/default`](#base) and
  it differs from that in the following:
  - *development* Babel environment is enforced, and sets
    `[path][name]___[local]___[hash:base64:6]` as the value of
    `cssLocalIdent` argument for the base config.
  - Adds as polyfills the code necessary to support the Hot Module
    Reloading:
    - [`react-hot-loader/patch`](https://github.com/gaearon/react-hot-loader)
    - [`webpack-hot-middleware/client?reload=true`](https://github.com/glenjamin/webpack-hot-middleware)
  - Emulates the following environment variables:
    - `DEV_TOOLS` &mdash; It is set to *true* to signal the code that
      Redux dev tools should be enabled;
    - `NODE_ENV` &mdash; It is set to *development* to inform any
      interested code that it is running in dev mode.
  - Adds the following plugins:
    - [HotModuleReplacementPlugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/);
    - [NoEmitOnErrorsPlugin](https://webpack.js.org/plugins/no-emit-on-errors-plugin/);
    - [NamedModulesPlugin](https://webpack.js.org/plugins/named-modules-plugin/).

- <a name="production">**`config/webpack/production`**</a>

  This configuration is based on the [`config/webpack/default`](#base) and
  it differs from that in the following:
  - *production* Babel environment is enforced;
  - Emulates the following environment variables:
    - `NODE_ENV` &mdash; It is set to *production*.
  - Adds the following plugins:
    - [OptimizeCssAssetsPlugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin);
    - [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/).

