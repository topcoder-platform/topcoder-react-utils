<a name="module_reducers.item"></a>

## reducers.item
Reducer for [actions.item](#module_actions.item) actions.

State segment managed by this reducer has the following structure:


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Any</code> | <code></code> | Actual item data. |
| loadingOperationId | <code>Number</code> \| <code>String</code> | <code></code> | `null` when no loading  operation is happening; unique identifier of the ongoing loading operation  otherwise (expected to be a truly value). |
| numRefs | <code>Number</code> | <code>0</code> | Number of references to this item from the code. |
| timestamp | <code>Number</code> | <code>0</code> | Timestamp of the most recent moment when item  data were loaded or set. |

