import 'styles/global.scss';

import actions from 'actions';
import AppChunk from 'containers/AppChunk';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import client from 'client';
import DevTools from 'components/DevTools';
import Link from 'components/Link';
import MetaTags from 'components/MetaTags';
import Modal, { BaseModal } from 'components/Modal';
import NavLink from 'components/NavLink';
import reducers from 'reducers';
import ScalableRect from 'components/ScalableRect';
import * as utils from 'utils';

import { isProdBuild, isServerSide } from 'utils/isomorphy';
import { requireWeak } from 'utils/webpack';

let serverUrl = isProdBuild() ? 'prod' : 'dev';
serverUrl = './server';
const server = isServerSide() ? requireWeak(serverUrl) : null;

export default {
  actions,
  AppChunk,
  Avatar,
  BaseModal,
  Button,
  client,
  DevTools,
  Link,
  NavLink,
  MetaTags,
  Modal,
  ScalableRect,
  reducers,
  server,
  ...utils,
};
