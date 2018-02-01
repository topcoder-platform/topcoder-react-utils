# Jest Utils
Collection of helpers to be used in Jest tests code.

**Why?** &mdash; We use Jest for unit testing of our code. Some common tests
demand too much boilerplate code. To reduce amount of this boilerplate code,
we provide collection of auxiliary functions that will help to speed-up writing
of the tests, and ensure that everybody does everything in the same manner
across our projects.

**IMPORTANT:** This module is intended only for use inside Jest tests!
Its code depends on Jest environment and development dependencies!

This module provides the following functions:

- **`findInDomByClass(dom, className)`** &mdash; Just an auxiliary alias for
  [`findRenderedDOMComponentWithClass(..)`](https://reactjs.org/docs/test-utils.html#findrendereddomcomponentwithclass)
  from `react-dom/test-utils`;

- **`render(component)`** &mdash; Renders provided ReactJS component into
  JSON representation of the component tree, using
  [`react-test-renderer`](https://www.npmjs.com/package/react-test-renderer),
  e.g.:

  ```jsx
  import { render } from 'topcoder-react-utils/jest-utils';

  console.log(render(<div>Example</div>));
  ```

- **`renderDom(component)`** &mdash; Renders given ReactJS component into DOM,
  using `react-dom/test-utils`. In many cases you will want to render and find
  a rendered node in the resulting tree, you can do it like this:
  ```jsx
  import React from 'react';
  import { findInDomByClass, renderDom } from 'topcoder-react-utils/jest-utils';

  const dom = renderDom(
    <div>
      Example component, containing a button you want to find in the render.
      <button className="BUTTON">Click me!</button>
    </div>
  );

  const button = findInDomByClass(dom, 'BUTTON');
  ```

- **`shallowRender(component)`** &mdash; Generates a shallow render of
  the provided ReactJS component, using
  [react-test-renderer/shallow](https://reactjs.org/docs/shallow-renderer.html)
  and returns the result.

  ```jsx
  import { shallowRender } from 'topcoder-react-utils/jest-utils';

  console.log(shallowRender(<div>Example</div>));
  ```

- **`shallowSnapshot(component)`** &mdash; Makes a shallow snapshot test of
  the given ReactJS component, and also returns JSON representation of
  the rendered component tree. Under the hood it uses `shallowRender(component)`
  to generate the render, then executes `expect(RENDER_RESULT).toMatchSnapshot()`,
  and finally returns the `RENDER_RESULT` to the caller.

  ```jsx
  // Sample Jest test.

  import { shallowSnapshot } from 'topcoder-react-utils/jest-utils';

  test('A snapshot test', () => {
    console.log(shallowSnapshot(<div>Example</div>));
  });
  ```

- **`simulate`** &mdash; Just an alias for the
  [`Simulate`](https://reactjs.org/docs/test-utils.html#simulate) from
  `react-dom/test-utils`.

- **`snapshot(component)`** &mdash; Makes snapshot test of the given ReactJS
  component, and also returns JSON representation of the rendered component
  tree. Under the hood, it uses `render(component)` to render it, then executes
  `expect(RENDER_RESULT).toMatchSnapshot()`, and then returns the `RENDER_RESULT`.

  ```jsx
  // Sample Jest test.

  import { snapshot } from 'topcoder-react-utils/jest-utils';

  test('A snapshot test', () => {
    console.log(snapshot(<div>Example</div>));
  });
  ```
