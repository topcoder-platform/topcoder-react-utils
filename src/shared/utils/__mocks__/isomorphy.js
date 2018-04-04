/**
 * Mockup of the isomorphy module.
 */

const MOCK_BUILD_TIMESTAMP = 'Wed, 29 Nov 2017 07:40:00 GMT';

const mock = require.requireActual('../isomorphy');

mock.buildTimestamp = () => MOCK_BUILD_TIMESTAMP;

module.exports = mock;
