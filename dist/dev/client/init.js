'use strict';

var _nodeForge = require('node-forge');

var _nodeForge2 = _interopRequireDefault(_nodeForge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.TRU_BUILD_INFO = BUILD_INFO; /**
                                     * Initialization of client-side environment.
                                     */

/* global BUILD_INFO, document, window */

window.TRU_FRONT_END = true;

/* Removes data injection script out of the document. */
var block = document.querySelector('script[id="inj"]');
document.getElementsByTagName('body')[0].removeChild(block);

/* Decodes data injected at the server side. */
var key = window.TRU_BUILD_INFO.key;

var data = _nodeForge2.default.util.decode64(window.INJ);
var decipher = _nodeForge2.default.cipher.createDecipher('AES-CBC', key);
decipher.start({ iv: data.slice(0, 32) });
decipher.update(_nodeForge2.default.util.createBuffer(data.slice(32)));
decipher.finish();
data = JSON.parse(_nodeForge2.default.util.decodeUtf8(decipher.output.data));

window.CONFIG = data.CONFIG;
window.ISTATE = data.ISTATE;
