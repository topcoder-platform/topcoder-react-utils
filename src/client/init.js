/**
 * Initialization of client-side environment.
 */

/* global BUILD_INFO, document, window */

import forge from 'node-forge';

window.TRU_BUILD_INFO = BUILD_INFO;
window.TRU_FRONT_END = true;

/* Removes data injection script out of the document. */
const block = document.querySelector('script[id="inj"]');
document.getElementsByTagName('body')[0].removeChild(block);

/* Decodes data injected at the server side. */
const { key } = window.TRU_BUILD_INFO;
let data = forge.util.decode64(window.INJ);
const decipher = forge.cipher.createDecipher('AES-CBC', key);
decipher.start({ iv: data.slice(0, 32) });
decipher.update(forge.util.createBuffer(data.slice(32)));
decipher.finish();
data = JSON.parse(forge.util.decodeUtf8(decipher.output.data));

window.CONFIG = data.CONFIG;
window.ISTATE = data.ISTATE;
