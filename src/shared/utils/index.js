import config from './config';
import * as isomorphy from './isomorphy';
import * as redux from './redux';
import * as webpack from './webpack';

const JU = isomorphy.isServerSide() ?
  webpack.requireWeak('topcoder-react-utils/dist/shared/utils/jest') : null;

export {
  config,
  isomorphy,
  JU,
  redux,
  webpack,
};
