/**
 * Mockup of the isomorphy module.
 */

const mock = require.requireActual('../isomorphy');

mock.buildTimestamp = () => 'Wed, 29 Nov 2017 07:40:00 GMT';

module.exports = mock;
