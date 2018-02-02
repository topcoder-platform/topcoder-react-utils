/* Just an alias for imports of Jest utils into host packages.
 * Probably, the same can be achieved via Babel, with no need for
 * such alias modules, but it should be tested. */

import * as utils from './src/shared/utils/jest';

module.exports = utils;
