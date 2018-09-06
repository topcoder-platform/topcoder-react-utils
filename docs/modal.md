# Modal

Implements a simple themeable modal window.

*TODO: This is a raw description of the component, should be improved*

**topcoder-react-utils** exports two versions of the modal component,
`BaseModal` implements a non-themed version, and `Modal` is its version
wrapped into a default style, using `react-css-super-themr` lib.

### Props

Both **BaseModal** and **Modal** components accept:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactJS Node | `null` | Modal content to render.|
| onCancel | `Function` | `noop` | Callback to trigger when the modal is closed. |

**BaseModal** accepts additionally _theme_ prop, which should be an object,
and defaults to `{}`. Theme object may have the following fields:

| Field | Description |
| --- | --- |
| container | CSS class to apply to the **BaseModal** root container. |
| overlay | CSS class to apply to the overlay opened behind the **BaseModal** |

