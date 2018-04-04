import config from './config';
import * as isomorphy from './isomorphy';
import * as webpack from './webpack';

const JU = isomorphy.isServerSide() ?
  webpack.requireWeak('topcoder-react-utils/dist/shared/utils/jest.js') : null;

export {
  config,
  isomorphy,
  JU,
  webpack,
};
