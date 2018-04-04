import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Link from 'components/Link';
import NavLink from 'components/NavLink';
import ScalableRect from 'components/ScalableRect';
import utils from 'utils';

import 'styles/global.scss';

import { requireWeak } from 'utils/webpack';

const server = utils.isomorphy.isServerSide() ? requireWeak('topcoder-react-utils/dist/server') : null;

export {
  Avatar,
  Button,
  Link,
  NavLink,
  ScalableRect,
  server,
  utils,
};
