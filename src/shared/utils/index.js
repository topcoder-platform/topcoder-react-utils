import config from './config';
import * as isomorphy from './isomorphy';
import * as redux from './redux';
import * as webpack from './webpack';

let juUrl = isomorphy.isProdBuild() ? 'prod' : 'dev';
juUrl = `topcoder-react-utils/dist/${juUrl}/shared/utils/jest`;

const JU = isomorphy.isServerSide() ? webpack.requireWeak(juUrl) : null;

export {
  config,
  isomorphy,
  JU,
  redux,
  webpack,
};
