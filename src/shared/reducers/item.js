/**
 * @module "reducers.item"
 * @desc Reducer for {@link module:actions.item} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Any} data=null Actual item data.
 * @param {Number|String} loadingOperationId=null `null` when no loading
 *  operation is happening; unique identifier of the ongoing loading operation
 *  otherwise (expected to be a truly value).
 * @param {Number} numRefs=0 Number of references to this item from the code.
 * @param {Number} timestamp=0 Timestamp of the most recent moment when item
 *  data were loaded or set.
 */

import actions from 'actions/item';
import * as redux from 'utils/redux';

function onDropData(state, { payload: olderThan }) {
  if (state.numRefs > 0 || state.timestamp > olderThan) return state;
  return { ...state, data: null, timestamp: 0 };
}

function onLoadDataInit(state, { payload: loadingOperationId }) {
  return { ...state, loadingOperationId };
}

function onLoadDataDone(state, action) {
  const { data, loadingOperationId, timestamp } = action.payload;
  if (loadingOperationId !== state.loadingOperationId) return state;
  return {
    ...state,
    data,
    loadingOperationId: null,
    timestamp,
  };
}

function onSetData(state, { payload }) {
  return { ...state, ...payload };
}

function onUpdateReferenceCounter(state, { payload: shift }) {
  const numRefs = state.numRefs + shift;
  return { ...state, numRefs };
}

const a = actions.item;
export default redux.handleActions({
  [a.dropData]: onDropData,
  [a.loadDataInit]: onLoadDataInit,
  [a.loadDataDone]: onLoadDataDone,
  [a.setData]: onSetData,
  [a.updateReferenceCounter]: onUpdateReferenceCounter,
}, {
  data: null,
  loadingOperationId: null,
  numRefs: 0,
  timestamp: 0,
});
