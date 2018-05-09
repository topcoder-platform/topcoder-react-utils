/**
 * Proof-of-concept code. Will be documented once stable. In case of any
 * questions before that, feel free to contact `birdofpreyru`.
 */

import _ from 'lodash';
import actions from 'actions/collection';
import * as redux from 'utils/redux';

/**
 * Inits, or replaces by its clone, the slot indexed under the specified id.
 * Returns the new slot indexed by that id.
 *
 * BEWARE: It mutates the index.
 *
 * @param {Object} index
 * @param {String} id
 * @return {Object}
 */
function prepare(index, id) {
  let slot = index[id];
  slot = slot ? _.clone(slot) : {
    item: null,
    loadingOperationId: '',
    numRefs: 0,
    timestamp: 0,
  };
  index[id] = slot; // eslint-disable-line no-param-reassign
  return slot;
}

function onAddItems(state, action) {
  const { index, timestamp } = action.payload;
  const result = _.clone(state);
  _.forOwn(index, (item, id) => {
    const slot = prepare(result, id);
    slot.timestamp = timestamp;
    slot.item = item;
  });
  return result;
}

function onBookItems(state, { payload: { factor, ids } }) {
  const result = _.clone(state);
  ids.forEach((id) => {
    prepare(result, id).numRefs += factor;
  });
  return result;
}

function onClean(state, { payload }) {
  const result = _.clone(state);
  _.forOwn(state, (item, id) => {
    const slot = state[id];
    if (slot.numRefs || slot.loadingOperationId
      || slot.timestamp > payload) return;
    delete result[id];
  });
  return result;
}

function onFreeItems(state, { payload: { factor, ids } }) {
  const result = _.clone(state);
  ids.forEach((id) => {
    prepare(result, id).numRefs -= factor;
  });
  return result;
}

function onLoadItemInit(state, { payload }) {
  const { itemId, operationId } = payload;
  const result = _.clone(state);
  const slot = prepare(result, itemId);
  slot.loadingOperationId = operationId;
  return result;
}

function onLoadItemDone(state, { payload }) {
  const {
    item,
    itemId,
    operationId,
    timestamp,
  } = payload;
  const slot = state[itemId];
  if (!slot || slot.loadingOperationId !== operationId) return state;
  return {
    ...state,
    [itemId]: {
      ...slot,
      item,
      loadingOperationId: '',
      timestamp,
    },
  };
}

const a = actions.collection;
export default redux.handleActions({
  [a.addItems]: onAddItems,
  [a.bookItems]: onBookItems,
  [a.clean]: onClean,
  [a.freeItems]: onFreeItems,
  [a.loadItemInit]: onLoadItemInit,
  [a.loadItemDone]: onLoadItemDone,
}, {});
