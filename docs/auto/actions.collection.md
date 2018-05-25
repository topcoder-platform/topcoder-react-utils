<a name="module_actions.collection"></a>

## actions.collection
Actions for management of *Collection* segment of Redux store.


* [actions.collection](#module_actions.collection)
    * [.addItems(index)](#module_actions.collection.addItems) ⇒ <code>Action</code>
    * [.bookItems(ids, factor)](#module_actions.collection.bookItems) ⇒ <code>Action</code>
    * [.clean(timestamp)](#module_actions.collection.clean) ⇒ <code>Action</code>
    * [.freeItems(ids, factor)](#module_actions.collection.freeItems) ⇒ <code>Action</code>
    * [.loadItemInit(operationId, itemId)](#module_actions.collection.loadItemInit) ⇒ <code>Action</code>
    * [.loadItemDone(operationId, itemId, item)](#module_actions.collection.loadItemDone) ⇒ <code>Action</code>

<a name="module_actions.collection.addItems"></a>

### actions.collection.addItems(index) ⇒ <code>Action</code>
Creates an action that adds items to the collection.

**Kind**: static method of [<code>actions.collection</code>](#module_actions.collection)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Object</code> | The index of items to add. It is a JS object with  ID-to-item mapping. Each item will be added to the collection under the  specified index. |

<a name="module_actions.collection.bookItems"></a>

### actions.collection.bookItems(ids, factor) ⇒ <code>Action</code>
Creates an action that increments reference counters of the specified
 items.

**Kind**: static method of [<code>actions.collection</code>](#module_actions.collection)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ids | <code>String</code> \| <code>Array.&lt;String&gt;</code> |  | Item ID, or an array of IDs. |
| factor | <code>Number</code> | <code>1</code> | Optional. The increment value. |

<a name="module_actions.collection.clean"></a>

### actions.collection.clean(timestamp) ⇒ <code>Action</code>
Creates an action that removes from the collection all items that
 (i) are not used (i.e. their reference counters equal to zero); (ii) were
 added to the collection before the specified `timestamp`.

**Kind**: static method of [<code>actions.collection</code>](#module_actions.collection)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| timestamp | <code>Number</code> | <code>Number.MAX_VALUE</code> | The minimal timestamp value of  items that should be kept in the collection even if they are not currently  used. |

<a name="module_actions.collection.freeItems"></a>

### actions.collection.freeItems(ids, factor) ⇒ <code>Action</code>
Creates an action that decrements reference counters of the specified
 collection items.

**Kind**: static method of [<code>actions.collection</code>](#module_actions.collection)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ids | <code>String</code> \| <code>Array.&lt;String&gt;</code> |  | Item ID, or an array of IDs. |
| factor | <code>Number</code> | <code>1</code> | Optional. Decrement value. |

<a name="module_actions.collection.loadItemInit"></a>

### actions.collection.loadItemInit(operationId, itemId) ⇒ <code>Action</code>
Creates an action that signals beginning of an async loading of the
 specified item.

**Kind**: static method of [<code>actions.collection</code>](#module_actions.collection)  

| Param | Type | Description |
| --- | --- | --- |
| operationId | <code>String</code> | Operation UUID, to match with the corresponding  [loadItemDone](#module_actions.collection.loadItemDone) action. |
| itemId | <code>String</code> | Item ID. |

<a name="module_actions.collection.loadItemDone"></a>

### actions.collection.loadItemDone(operationId, itemId, item) ⇒ <code>Action</code>
Creates an action that finalizes an async loading of the specified
 item.

**Kind**: static method of [<code>actions.collection</code>](#module_actions.collection)  

| Param | Type | Description |
| --- | --- | --- |
| operationId | <code>String</code> | Operation UUID, to match with the corresponding  [loadItemDone](#module_actions.collection.loadItemDone) action. |
| itemId | <code>String</code> | Item ID. |
| item | <code>Any</code> | The loaded item, to be added into the collection. |

