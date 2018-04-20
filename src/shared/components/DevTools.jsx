/**
 * The DevTools component is a container for Redux monitors that will be used
 * in the development mode.
 */

import React from 'react';

import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

export default createDevTools((
  <DockMonitor
    changePositionKey="ctrl-p"
    toggleVisibilityKey="ctrl-m"
  >
    <LogMonitor />
  </DockMonitor>
));
