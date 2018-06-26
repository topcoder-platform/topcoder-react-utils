import path from 'path';

/* Holds absolute path of the "src" directory. */
const ROOT = path.resolve(__dirname, '../../../..');

/* eslint-disable global-require, import/no-dynamic-require */
module.exports = modulePath => require(
  modulePath.replace(/^topcoder-react-utils\/dist\/dev/, ROOT),
);
