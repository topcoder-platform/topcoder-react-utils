import Avatar from 'components/Avatar';
import Button from 'components/Button';
import client from 'client';
import Link from 'components/Link';
import NavLink from 'components/NavLink';
import ScalableRect from 'components/ScalableRect';
import * as utils from 'utils';

import 'styles/global.scss';

import { requireWeak } from 'utils/webpack';

const server = utils.isomorphy.isServerSide() ?
  requireWeak('topcoder-react-utils/dist/server') : null;

module.exports = {
  Avatar,
  Button,
  client,
  Link,
  NavLink,
  ScalableRect,
  server,
  ...utils,
};
