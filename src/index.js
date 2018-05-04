import actions from 'actions';
import AppChunk from 'containers/AppChunk';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import client from 'client';
import DevTools from 'components/DevTools';
import Link from 'components/Link';
import MetaTags from 'components/MetaTags';
import NavLink from 'components/NavLink';
import reducers from 'reducers';
import ScalableRect from 'components/ScalableRect';
import * as utils from 'utils';

import 'styles/global.scss';

import { requireWeak } from 'utils/webpack';

const server = utils.isomorphy.isServerSide() ?
  requireWeak('topcoder-react-utils/dist/server') : null;

module.exports = {
  actions,
  AppChunk,
  Avatar,
  Button,
  client,
  DevTools,
  Link,
  NavLink,
  MetaTags,
  ScalableRect,
  reducers,
  server,
  ...utils,
};
