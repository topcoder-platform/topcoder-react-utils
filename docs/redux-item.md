# Item (Redux Template)

The standard way to handle an async piece of data in Redux store.

**Why?** &mdash; It is a common need to keep in Redux store a piece of data that
is asyncroneously fetched from some API, or generated some other way, and should
be updated periodically. **item** actions and reducer provided by our library
implement a good way to handle this.

### Content
- [Overview](#overview)
- [Tutorial](#tutorial)

### Overview

Say you need to load (generate) and keep in Redux store some piece of `DATA`,
which can be of any JS type (Boolean, Number, String, Object, etc.). To handle
it efficiently you want:

- Record whether `DATA` are being loaded currently, and being able to cancel
  pending requests to load `DATA`, if necessary;

- Keep track of the last `DATA` update time, to refresh them when necessary,
  while avoiding to reload them more than needed;

- Keep track whether these data are used, to be able to drop them out of the
  store, when they are of no use anymore.

Our solution for this problem comes in two pieces:

- [**item reducer**](auto/reducers.item.md) manages a segment of Redux store
  that keeps your `DATA` in the following way:
  ```js
  {
    data: DATA,
    loadingOperationId,
    numRefs,
    timestamp,
  }
  ```
  In addition to the actual `DATA`, kept under the **data** field, the segment
  stores:
  - **loadingOperationId** &mdash; `null` when data are not being loaded,
    otherwises a unique ID of the loading operation. During an ongoing data
    loading operation you can change this ID, to silently ignore the result
    of the pending operation; thus cancelling it, or overriding with a new
    data request.
  - **numRefs** &mdash; Allows you to count, if you wish, refences to `DATA`
    from different objects in your code; to support a simple garbage collection
    mechanics.
  - **timestamp** &mdash; Timestamp [ms] of the latest update of `DATA`. Helps
    to reload stale data only when they are really outdated.

- [**item actions**](auto/actions.item.md) provide the control interface for
  the **item** reducer:
  - Allow to (re-)load data into the store segment;
  - Update reference counter;
  - Remove stale data with no references to them.

### Tutorial

Say, you want to add `myData` segment to your Redux store, using **item**
actions / reducers. You want multiple ReactJS containers rely on this segment,
and you want to properly clean-up stale data when no container is using them.

For `myData` actions module you should do:
```js
// src/shared/actions/myData.js

import { actions, redux } from 'topcoder-react-utils';

const itemActions = actions.item;

// This is the only payload creator you have to customize, to implement
// the actual loading of your data. Here `...args` stay for any arguments
// you need to get your data.
async function getDone(operationId, ...args) {
  // Here is your async operation(s) that produces the data you need.
  const data = await ...;
  // Here you proxy the result to the standard item's action:
  return redux.proxyAction(itemActions.loadItemDone)(operationId, data);
}

export default redux.createActions({
  MY_DATA: {
    CLEAN_UP: redux.proxyAction(itemActions.dropData),
    GET_INIT: redux.proxyAction(itemActions.loadItemInit),
    GET_DONE: getDone,
    UPDATE_REFERENCE_COUNTER:
      redux.proxyAction(itemActions.updateReferenceCounter),
  },
});
```

Now, you create `myData` reducer the following way (the layout of module follows
our standard practice):
```js
// src/shared/reducers/myData.js

import actions from 'actions/myData';
import { actions as truActions, reducers, redux } from 'topcoder-react-utils';

const itemActions = truActions.item;
const itemReducer = reducers.item;

/* Custom reducer function to handle possible errors in a custom way. */
function onGetDone(state, action) {
  if (action.error) {
    // SOME ERROR HANDLING HERE.
    return state;
  }
  const a = redux.proxyAction(itemActions.loadDataDone, action);
  return itemReducer(state, a);
  // Note, the code above is equivalent to the following one, but the former
  // one is a bit more efficient under the hood:
  // ```
  // const r = redux.proxyReducer(itemReducer, itemActions.loadDataDone);
  // return r(state, action);
  // ```
}

/**
 * Creates a new reducer.
 * @param {Object} intialState Optional. Initial state.
 * @return {Reducer}
 */
function create(initialState = itemReducer(undefined, '@@INIT')) {
  const a = actions.myData;
  return redux.handleActions({
    [a.cleanUp]: redux.proxyReducer(itemReducer, itemActions.dropData),
    [a.getInit]: redux.proxyReducer(itemReducer, itemActions.loadDataInit),
    [a.getDone]: onGetDone,
    [a.updateReferenceCounter]:
      redux.proxyReducer(itemReducer, itemActions.updateReferenceCounter),
  }, initialState);
}

/**
 * Reducer factory, that may use some `options` to generate initial state
 * more appropriate for the user request, thus taking care about a better
 * server-side rendering.
 * @param {Object} options Optional. SSR options.
 * @return {Promise} Resolves to the reducer.
 */
export async function factory(options) {
  if (options) {
    let initialState
    // PREPARES A CUSTOMIZED initialState HERE.
    return create(initialState)
  }
  return create();
}

/* Reducer with the default initial state. */
export default create();
```

Now, provided that you have embed this reducer into your root reducer in
the regular way, you can follow the following pattern for a container that
relies on these data:
```js
// src/shared/containers/example.js

import actions from 'actions/myData';
import Example from 'components/Example';
import PT from 'prop-types';
import React from 'react';
import shortId from 'shortid';
import { redux } from 'topcoder-react-utils';

const MAX_AGE = 5 * 60 * 1000; // 5 min.
const RELOAD_AGE = 1 * 60 * 1000; // 1 min.

class ExampleContainer extends React.Component {
  componentDidMount() {
    const {
      dataTimestamp,
      load,
      loadingData,
      updateReferenceCounter,
    } = this.props;
    const now = Date.now();

    /* If data are old enough and are not being loaded currently,
     * we trigger data reload. */
    if (!loadingData && dataTimestamp < now - RELOAD_AGE) {
      load(/* In most cases you'll pass in you own arguments, specifying
            * what data should be loaded, etc. */);
    }

    /* In all cases we update data reference counter, to keep track that
     * a newly updated component relies on the data now. */
    updateReferenceCounter(1);
  }

  componentDidUpdate() {
    /* In case you need update data in response to a prop change,
     * you can do it here. You should compare current props to the
     * new props to decide, whether data refresh is necessary, and
     * then use load(..) prop to trigger the reload. No need to update
     * the data reference counter. */
  }

  componentWillUnmount() {
    const = { cleanUp, updateReferenceCounter } = this.props;
    /* Mark that this container will not use the data anymore. */
    updateReferenceCounter(-1);
    /* This call will drop data out of the state if it was the last
     * container to rely on them. */
    cleanUp();
    /* In case you  want keep data in Redux for some more time (to be able
     * to use them in a newly created container), you can do: */
    const olderThan = Date.now() - MAXAGE;
    cleanUp(olderThan);
    /* Notice that in this case, if data are not removed by the last
     * container that uses them, they'll stay in the state until another
     * container is created and tries to clean them up on its destruction.
     * In case it is not good for performance of you app, you can implement
     * and fire here an async cleanUp operation, that will delay cleanUp to
     * some point in future. */
  }

  render() {
    /* In most cases, these are the only data you want to forward into
     * the actual rendering function. */
    const { data, loadingData } = this.props;

    /* It is up to you, what you want to do when `data` are old,
     * and the new data loading operation is already going on. However,
     * for a better user experience, in most of cases, it makes sense to
     * show old data anyway, and probably even do not show the reloading
     * indicator, thus making a silent data update. Depending on the nature
     * of you data and UI you might prefer different strategies. */
    return <Example data={data} loading={loadingData} />;
  }
}

ExampleContainer.defaultProps = {
  data: null,
};

ExampleContainer.propTypes = {
  cleanUp: PT.func.isRequired,
  data: PT.any, /* Should be the actual type of data you expect. */
  dataTimestamp: PT.number.isRequired,
  load: PT.func.isRequired,
  loadingData: PT.bool.isRequired,
  updateReferenceCounter: PT.func.isRequired,
};

function mapStateToProps(state) {
  const s = state.myData;
  return {
    data: s.data,
    dataTimestamp: s.timestamp,
    loadingData: Boolean(s.loadingOperationId),
  };
}

function mapDispatchToProps(dispatch) {
  const a = actions.myData;
  return {
    cleanUp: () => dispatch(a.cleanUp()),
    load: (...args) => {
      const operationId = shortId();
      dispatch(a.loadItemInit(operationId));
      dispatch(a.loadItemDone(operationId, ...args));
    },
    updateReferenceCounter: shift => dispatch(a.updateReferenceCounter(shift)),
  };
}

export default redux.connect(mapStateToProps, mapDispatchToProps)(Example);
```
