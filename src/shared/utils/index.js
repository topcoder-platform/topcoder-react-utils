import path from 'path';

import config from './config';
import * as isomorphy from './isomorphy';
import * as redux from './redux';
import * as webpack from './webpack';

const juUrl = module.webpackPolyfill ? './shared/utils/jest'
  : path.resolve(__dirname, './jest');

const JU = isomorphy.isServerSide() ? webpack.requireWeak(juUrl) : null;

export {
  config,
  isomorphy,
  JU,
  redux,
  webpack,
};
