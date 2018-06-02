<a name="module_actions.item"></a>

## actions.item
Actions for management of item data in Redux store.


* [actions.item](#module_actions.item)
    * [.dropData(olderThan)](#module_actions.item.dropData) ⇒ <code>Action</code>
    * [.loadDataInit(loadingOperationId)](#module_actions.item.loadDataInit) ⇒ <code>Action</code>
    * [.loadDataDone(loadingOperationId, data)](#module_actions.item.loadDataDone) ⇒ <code>Action</code>
    * [.setData(data)](#module_actions.item.setData) ⇒ <code>Action</code>
    * [.updateReferenceCounter(shift)](#module_actions.item.updateReferenceCounter) ⇒ <code>Action</code>

<a name="module_actions.item.dropData"></a>

### actions.item.dropData(olderThan) ⇒ <code>Action</code>
Creates an action that drops item's data if (i) the value of item's
 reference counter is not positive; (ii) item's timestamp is older than
 `olderThan` value.

**Kind**: static method of [<code>actions.item</code>](#module_actions.item)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| olderThan | <code>Number</code> | <code>Number.MAX_VALUE</code> | Optional. Timestamp [ms].  If provided, item's  data will be dropped only if they were received / set  prior to this moment in time. |

<a name="module_actions.item.loadDataInit"></a>

### actions.item.loadDataInit(loadingOperationId) ⇒ <code>Action</code>
Creates an action that signals the beginning of async loading of
 item's data.

**Kind**: static method of [<code>actions.item</code>](#module_actions.item)  

| Param | Type | Description |
| --- | --- | --- |
| loadingOperationId | <code>Number</code> \| <code>String</code> | The unique identifier of the  loading operation. It will be written into item's segment of Redux store  with the following efffects:  - We consider that item's data are being loaded if, and only if,    the item's `loadingOperationId` has a truly value;  - `loadingOperationId` is used to match the corresponding    [loadDataDone](#module_actions.item.loadDataDone) operation. |

<a name="module_actions.item.loadDataDone"></a>

### actions.item.loadDataDone(loadingOperationId, data) ⇒ <code>Action</code>
Creates an action that handles the result of async loading of item's
 data.

**Kind**: static method of [<code>actions.item</code>](#module_actions.item)  

| Param | Type | Description |
| --- | --- | --- |
| loadingOperationId | <code>Number</code> \| <code>String</code> | The unique identifier of the  loading operation. If it does not match the value currently written for  the item in the Redux store (see [loadDataInit](#module_actions.item.loadDataInit)),  the action will be silently ignored. |
| data | <code>Any</code> | Any value to store as the item's data. |

<a name="module_actions.item.setData"></a>

### actions.item.setData(data) ⇒ <code>Action</code>
Creates an action that stores given data into the item.

**Kind**: static method of [<code>actions.item</code>](#module_actions.item)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Any</code> | Any value to store as the item's data. |

<a name="module_actions.item.updateReferenceCounter"></a>

### actions.item.updateReferenceCounter(shift) ⇒ <code>Action</code>
Creates an action that updates the item's reference counter.

**Kind**: static method of [<code>actions.item</code>](#module_actions.item)  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | The value to add to the item's reference counter.  Should be `1` or `-1` in majority of cases, although any other values  are permitted. |

