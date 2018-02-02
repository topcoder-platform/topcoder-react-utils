/**
 * Base Webpack configuration for ReactJS libraries. It is further extended for
 * development and production use in the "lib-development" and "lib-production"
 * configs.
 */

const autoprefixer = require('autoprefixer');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path');

/**
 * Creates a new Webpack config object.
 *
 * @param {Object} ops Configuration params. This allows to conveniently set
 *  the options that should be customized for specific libraries.
 *
 * @param {String} ops.babelEnv BABEL_ENV to be used by Babel during the build.
 *
 * @param {String} ops.context Base URL for resolution of relative config paths.
 *
 * @param {String} ops.cssLocalIdent Template for CSS classname
 *  generation by css-loader (it will be passed into the "localIdentName" param
 *  of the loader). It should match the corresponding setting in the Babel
 *  config.
 *
 * @param {String} ops.entry Entry point of the library.
 *
 * @param {String} ops.library Name of the library.
 *
 * @return {Object} Webpack config.
 */
module.exports = function configFactory(ops) {
  return {
    context: ops.context,
    entry: ops.entry,
    externals: [
      'babel-runtime',
      'lodash',
      'moment',
      'prop-types',
      'raf',
      'react',
      'react-css-super-themr',
      'react-dom',
      'react-router-dom',
      'topcoder-react-utils',
      'url-parse',
    ],
    output: {
      filename: 'index.js',
      library: ops.library,
      path: path.resolve(__dirname, ops.context, 'dist'),
      libraryTarget: 'umd',
    },
    plugins: [
      new ExtractCssChunks({
        filename: 'style.css',
      }),
    ],
    module: {
      rules: [{
        /* Handles font imports in url(..) instructions in CSS. Effectively,
         * with such configuration it just rewrites those URLs to point to
         * the original location of the font assets in
         * the library being build. */
        test: /\.(eot|otf|svg|ttf|woff2?)$/,
        include: [/src[/\\]assets[/\\]fonts/],
        loader: 'file-loader',
        options: {
          emitFile: false,
          name: '[path][name].[ext]',
          outputPath: '/',
          publicPath: `~${ops.library}`,
        },
      }, {
        /* Loads JS and JSX moudles, and inlines SVG assets. */
        test: /\.(jsx?|svg)$/,
        exclude: [
          /node_modules/,
          /src[/\\]assets[/\\]fonts/,
        ],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          forceEnv: ops.babelEnv,
          presets: ['topcoder-react-utils/config/babel/webpack'],
        },
      }, {
        /* Loads SCSS stylesheets. */
        test: /\.scss/,
        exclude: /node_modules/,
        use: ExtractCssChunks.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              localIdentName: ops.cssLocalIdent,
              modules: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer,
              ],
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
    resolve: {
      alias: {
        /* Aliases to JS an JSX files are handled by Babel. */
        assets: path.resolve(ops.context, 'src/assets'),
        components: path.resolve(ops.context, 'src/shared/components'),
        fonts: path.resolve(ops.context, 'src/assets/fonts'),
        styles: path.resolve(ops.context, 'src/styles'),
      },
      extensions: ['.js', '.json', '.jsx', '.scss'],
      symlinks: false,
    },
  };
};

