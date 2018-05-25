/**
 * @module "actions.collection"
 * @desc Actions for management of *Collection* segment of Redux store.
 */

import _ from 'lodash';
import * as redux from 'utils/redux';

/**
 * @static
 * @desc Creates an action that adds items to the collection.
 * @param {Object} index The index of items to add. It is a JS object with
 *  ID-to-item mapping. Each item will be added to the collection under the
 *  specified index.
 * @return {Action}
 */
function addItems(index) {
  return { index, timestamp: Date.now() };
}

/**
 * @static
 * @desc Creates an action that increments reference counters of the specified
 *  items.
 * @param {String|String[]} ids Item ID, or an array of IDs.
 * @param {Number} factor=1 Optional. The increment value.
 * @return {Action}
 */
function bookItems(ids, factor = 1) {
  return { factor, ids: _.isArray(ids) ? ids : [ids] };
}

/**
 * @static
 * @desc Creates an action that removes from the collection all items that
 *  (i) are not used (i.e. their reference counters equal to zero); (ii) were
 *  added to the collection before the specified `timestamp`.
 * @param {Number} timestamp=Number.MAX_VALUE The minimal timestamp value of
 *  items that should be kept in the collection even if they are not currently
 *  used.
 * @return {Action}
 */
function clean(timestamp = Number.MAX_VALUE) {
  return timestamp;
}

/**
 * @static
 * @desc Creates an action that decrements reference counters of the specified
 *  collection items.
 * @param {String|String[]} ids Item ID, or an array of IDs.
 * @param {Number} factor=1 Optional. Decrement value.
 * @return {Action}
 */
function freeItems(ids, factor = 1) {
  return { factor, ids: _.isArray(ids) ? ids : [ids] };
}

/**
 * @static
 * @desc Creates an action that signals beginning of an async loading of the
 *  specified item.
 * @param {String} operationId Operation UUID, to match with the corresponding
 *  {@link module:actions.collection.loadItemDone} action.
 * @param {String} itemId Item ID.
 * @return {Action}
 */
function loadItemInit(operationId, itemId) {
  return { itemId, operationId };
}

/**
 * @static
 * @desc Creates an action that finalizes an async loading of the specified
 *  item.
 * @param {String} operationId Operation UUID, to match with the corresponding
 *  {@link module:actions.collection.loadItemDone} action.
 * @param {String} itemId Item ID.
 * @param {Any} item The loaded item, to be added into the collection.
 * @return {Action}
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
