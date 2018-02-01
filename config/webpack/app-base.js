/**
 * Base Webpack configuration for ReactJS applications. It is further extended
 * for development and production use in the "app-development" and
 * "app-production" configs.
 */

const _ = require('lodash');
const autoprefixer = require('autoprefixer');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const forge = require('node-forge');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const webpack = require('webpack');

/**
 * Creates a new Webpack config object, and performs some auxiliary operations
 * on the way.
 *
 * @param {Object} ops Configuration params. This allows to modify some
 *  frequently changed options in a convenient way, without a need to manipulate
 *  directly with the created config object.
 *
 *  The following options are accepted:
 *
 * @param {String} ops.babelEnv BABEL_ENV to use for Babel during the build.
 *
 * @param {String} ops.context Base URL for resolution of relative
 *  config paths.
 *
 * @param {String} ops.cssLocalIdent Optional. The template for CSS classnames
 *  generation by css-loader (it will be passed into the "localIdentName" param
 *  of the loader). It should match the corresponding setting in the Babel
 *  config. Defaults to: [hash:base64:6].
 *
 * @param {Object|String|String[]} ops.entry Entry points. If an object is
 *  passed in, the "polyfills" entry point is extended or appended to
 *  include some polyfills we consider obligatory. If a string or an array is
 *  passed in, it is assigned to the "main" entry point, and the "polyfills"
 *  entry point will be added to it.
 *
 * @param {String} ops.publicPath Base URL for the output of the build assets.
 */
module.exports = function configFactory(ops) {
  const o = _.defaults(_.clone(ops), {
    cssLocalIdent: '[hash:base64:6]',
    publicPath: '',
  });

  /* Stores misc build info into the local ".build-info" file in the context
   * directory. */
  const buildInfo = {
    /* A random 32-bit key, that can be used for encryption. */
    rndkey: forge.random.getBytesSync(32),

    /* Build timestamp. */
    timestamp: moment.utc().toISOString(),
  };
  const buildInfoUrl = path.resolve(o.context, '.build-info');
  fs.writeFileSync(buildInfoUrl, JSON.stringify(buildInfo));

  /* Entry points normalization. */
  const entry = _.isPlainObject(o.entry)
    ? _.cloneDeep(o.entry) : { main: o.entry };
  if (!entry.polyfills) entry.polyfills = [];
  else if (!_.isArray(entry.polyfills)) {
    entry.polyfills = [entry.polyfills];
  }
  entry.polyfills = _.union(entry.polyfills, [
    'babel-polyfill',
    'nodelist-foreach-polyfill',
  ]);
  return {
    context: o.context,
    entry,
    node: {
      __dirname: true,
      fs: 'empty',
    },
    output: {
      chunkFilename: '[name].js',
      filename: '[name].js',
      path: path.resolve(__dirname, o.context, 'build'),
      publicPath: `${o.publicPath}/`,
    },
    plugins: [
      new ExtractCssChunks({
        filename: '[name].css',
      }),
      new webpack.DefinePlugin({
        BUILD_RNDKEY: JSON.stringify(buildInfo.rndkey),
        'process.env': {
          BUILD_TIMESTAMP: JSON.stringify(buildInfo.timestamp),
          FRONT_END: true,
        },
      }),
    ],
    resolve: {
      alias: {
        /* Aliases to JS an JSX files are handled by Babel. */
        assets: path.resolve(o.context, 'src/assets'),
        components: path.resolve(o.context, 'src/shared/components'),
        fonts: path.resolve(o.context, 'src/assets/fonts'),
        styles: path.resolve(o.context, 'src/styles'),
      },
      extensions: ['.js', '.json', '.jsx', '.scss'],
      symlinks: false,
    },
    module: {
      rules: [{
        /* Loads font resources from "src/assets/fonts" folder. */
        test: /\.(eot|otf|svg|ttf|woff2?)$/,
        include: [/src[/\\]assets[/\\]fonts/],
        loader: 'file-loader',
        options: {
          outputPath: '/fonts/',
          publicPath: o.publicPath,
        },
      }, {
        /* Loads JS and JSX moudles, and inlines SVG assets. */
        test: /\.(jsx?|svg)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          forceEnv: o.babelEnv,
          presets: ['topcoder-react-utils/config/babel/webpack'],
        },
      }, {
        /* Loads image assets. */
        test: /\.(gif|jpe?g|png)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/images/',
          publicPath: o.publicPath,
        },
      }, {
        /* Loads SCSS stylesheets. */
        test: /\.scss/,
        use: ExtractCssChunks.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              localIdentName: o.cssLocalIdent,
              modules: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          }, 'resolve-url-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
        }),
      }, {
        /* Loads CSS stylesheets. It is assumed that CSS stylesheets come only
        * from dependencies, as we use SCSS inside our own code. */
        test: /\.css$/,
        use: ExtractCssChunks.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      }],
    },
  };
};
