/**
 * @module "actions.item"
 * @desc Actions for management of item data in Redux store.
 */

import * as redux from 'utils/redux';

/**
 * @static
 * @desc Creates an action that drops item's data if (i) the value of item's
 *  reference counter is not positive; (ii) item's timestamp is older than
 *  `olderThan` value.
 * @param {Number} olderThan=Number.MAX_VALUE Optional. Timestamp [ms].
 *  If provided, item's  data will be dropped only if they were received / set
 *  prior to this moment in time.
 * @return {Action}
 */
function dropData(olderThan = Number.MAX_VALUE) {
  return olderThan;
}

/**
 * @static
 * @desc Creates an action that signals the beginning of async loading of
 *  item's data.
 * @param {Number|String} loadingOperationId The unique identifier of the
 *  loading operation. It will be written into item's segment of Redux store
 *  with the following efffects:
 *
 *  - We consider that item's data are being loaded if, and only if,
 *    the item's `loadingOperationId` has a truly value;
 *
 *  - `loadingOperationId` is used to match the corresponding
 *    {@link module:actions.item.loadDataDone} operation.
 *
 * @return {Action}
 */
function loadDataInit(loadingOperationId) {
  return loadingOperationId;
}

/**
 * @static
 * @desc Creates an action that handles the result of async loading of item's
 *  data.
 * @param {Number|String} loadingOperationId The unique identifier of the
 *  loading operation. If it does not match the value currently written for
 *  the item in the Redux store (see {@link module:actions.item.loadDataInit}),
 *  the action will be silently ignored.
 * @param {Any} data Any value to store as the item's data.
 * @return {Action}
 */
function loadDataDone(loadingOperationId, data) {
  return { data, loadingOperationId, timestamp: Date.now() };
}

/**
 * @static
 * @desc Creates an action that stores given data into the item.
 * @param {Any} data Any value to store as the item's data.
 * @return {Action}
 */
function setData(data) {
  return { data, timestamp: Date.now() };
}

/**
 * @static
 * @desc Creates an action that updates the item's reference counter.
 * @param {Number} shift The value to add to the item's reference counter.
 *  Should be `1` or `-1` in majority of cases, although any other values
 *  are permitted.
 * @return {Action}
 */
function updateReferenceCounter(shift) {
  return shift;
}

export default redux.createActions({
  ITEM: {
    DROP_DATA: dropData,
    LOAD_DATA_INIT: loadDataInit,
    LOAD_DATA_DONE: loadDataDone,
    SET_DATA: setData,
    UPDATE_REFERENCE_COUNTER: updateReferenceCounter,
  },
});
