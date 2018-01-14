/* NOTE: At the moment this file is just a draft, thus skip by linter */
/* eslint-disable */

const _ = require('lodash');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const forge = require('node-forge');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const webpack = require('webpack');

/**
 * Creates a new Webpack config object.
 * @param {String} context Base URL for resolution of relative config paths.
 * @param {String} publicPath Base URL for the output of the build assets.
 * @param {Object|String|String[]} entry Entry points. If an object is passed in
 *  the "polyfills" entry point will be extended or appended to include some
 *  polyfills we consider obligatory. If a string or an array is passed in,
 *  it will be turned into "main" entry point, and the "polyfills" entry point
 *  will be added to it.
 */
module.exports = function newConfig(context, publicPath, entry) {
  /* Writes UTC timestamp of the build time into .build-timestamp file. */
  const buildTimestamp = moment().toISOString();
  fs.writeFileSync(path.resolve(context, '.build-timestamp'), buildTimestamp);

  /* Writes a random 32-bit key into .build-key file. This key can be used for
   * encryption purposes. */
  const buildKey = forge.random.getBytesSync(32);
  fs.writeFileSync(path.resolve(context, '.build-key', buildKey));

  /* Entry points normalization. */
  let entry2 = _.isObject(entry) ? _.cloneDeep(entry) : { main: entry };
  if (!entry2.polyfills) entry2.polyfills = [];
  else if (!_.isArray(entry2.polyfills)) entry2.polyfills = [entry2.polyfills];
  entry2.polyfills = _.union(entry2.polyfills, [
    'babel-polyfill',
    'nodelist-foreach-polyfill',
  ]);

  return {
    context,
    entry: entry2,
    node: {
      __dirname: true,
      fs: 'empty',
    },
    output: {
      chunkFilename: '[name].js',
      filename: '[name].js',
      path: path.resolve(__dirname, path.resolve(context, 'build')),
      publicPath: `${PUBLIC_PATH}/`,
    },
    plugins: [
      new ExtractCssChunks({
        filename: '[name].css',
      }),
      new webpack.DefinePlugin({
        BUILD_KEY: JSON.stringify(buildKey),
        'process.env': {
          BUILD_TIMESTAMP: JSON.stringify(buildTimestamp),
          FRONT_END: true,
        },
      })
    ],
    resolve: {
      alias: {
        /* Aliases to JS an JSX files are handled by Babel. */
        assets: path.resolve(context, 'src/assets'),
        components: path.resolve(context, 'src/shared/components'),
        styles: path.resolve(context, 'src/styles'),
      },
    },
    rules: [{
      /* Loads font resources from "src/assets/fonts" folder. */
      test: /\.(eot|otf|svg|ttf|woff2?)$/,
      include: [/src[/\\]assets[/\\]fonts/],
      options: {
        outputPaths: '/fonts/',
        publicPath,
      },
    }, {
      /* Loads JS and JSX moudles, and inlines SVG assets. */
      test: /\.(jsx?|svg)$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: {
        babelrc: false,
        extends: 'topcoder-react-utils/config/babel/webpack.json',
        forceEnv: 'production',
      },
    }, {
      /* Loads image assets. */
      test: /\.(gif|jpe?g|png|svg)$/,
      loader: 'file-loader',
      options: {
        outputPath: '/images/',
        publicPath,
      },
    }, {
      /* Loads CSS stylesheets. It is assumed that CSS stylesheets come only
       * from dependencies, as we use SCSS inside our own code. */
      test: /\.css$/,
      use: ExtractCssChunks.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
      }),
    }],
  };
};
