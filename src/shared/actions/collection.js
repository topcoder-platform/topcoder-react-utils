/**
 * Proof-of-concept code. Will be documented once stable. In case of any
 * questions before that, feel free to contact `birdofpreyru`.
 */

import _ from 'lodash';
import * as redux from 'utils/redux';

/**
 * Adds items to the collection.
 * @param {Object} index Item ID > item mapping for the items to add.
 * @return {Object}
 */
function addItems(index) {
  return { index, timestamp: Date.now() };
}

/**
 * Increments counters of item references.
 * @param {String|String[]} ids
 * @return {String[]}
 */
function bookItems(ids) {
  return _.isArray(ids) ? ids : [ids];
}

/**
 * Removes from the state all unuzed items with timestamps older than maxage.
 * @param {Number} timestamp
 */
function clean(timestamp) {
  return timestamp;
}

/**
 * Decreases counters of item references.
 * @param {String|String[]} ids
 * @return {String[]}
 */
function freeItems(ids) {
  return _.isArray(ids) ? ids : [ids];
}

/**
 * Inits loading of an item.
 * @param {String} operationId
 * @param {String} itemId
 * @return {Object}
 */
function loadItemInit(operationId, itemId) {
  return { itemId, operationId };
}

/**
 * Finalizes loading of an item.
 * @param {String} operationId
 * @param {String} itemId
 * @param {Any} item
 * @return {Object}
 */
function loadItemDone(operationId, itemId, item) {
  return {
    item,
    itemId,
    operationId,
    timestamp: Date.now(),
  };
}

export default redux.createActions({
  COLLECTION: {
    ADD_ITEMS: addItems,
    BOOK_ITEMS: bookItems,
    CLEAN: clean,
    FREE_ITEMS: freeItems,
    LOAD_ITEM_INIT: loadItemInit,
    LOAD_ITEM_DONE: loadItemDone,
  },
});
