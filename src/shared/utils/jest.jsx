/**
 * Utilities for Jest tests.
 */

/* NOTE: At the moment here is no intention to use this module for runtime
 * execution, only for tests; thus we depend on Jest environment and dev
 * dependencies. */

/* global expect */

import PT from 'prop-types';
import React from 'react';
import TU from 'react-dom/test-utils';

/* eslint-disable import/no-extraneous-dependencies */
import Renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
/* eslint-enable import/no-extraneous-dependencies */

/**
 * Just an alias for TU.findRenderedDOMComponentWithClass(..).
 * @param {Object} dom
 * @param {String} className
 * @return {Object}
 */
export function findInDomByClass(dom, className) {
  return TU.findRenderedDOMComponentWithClass(dom, className);
}

/**
 * Auxiliary wrapper around ReactJS Test Renderer.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON representation of the rendered tree.
 */
export function render(component) {
  return Renderer.create(component).toJSON();
}

/* The Wrapper is necessary for the "renderDom(..)" function, because
 * the "renderIntoDocument(..)" function from "react-dom/test-utils" works
 * only with state components, so we have to wrap our ReactJS components into
 * such Wrapper. */
class Wrapper extends React.Component {
  componentDidMount() {}

  render() {
    return this.props.children;
  }
}

Wrapper.propTypes = {
  children: PT.node.isRequired,
};

/**
 * Renders given component into DOM, using "react-dom/test-utils".
 * @param {Object} component ReactJS component to render.
 * @return {Object} Rendered DOM.
 */
export function renderDom(component) {
  return TU.renderIntoDocument(<Wrapper>{component}</Wrapper>);
}

/**
 * Auxiliary wrapper around ReactJS Shallow Test Renderer.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON representation of the shallow component's render tree.
 */
export function shallowRender(component) {
  const renderer = new ShallowRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

/**
 * Renders provided ReactJS component with ReactJS Shallow Test Renderer,
 * creates/tests its snapshot, and returns the render result.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON representation of shallow render.
 */
export function shallowSnapshot(component) {
  const res = shallowRender(component);
  expect(res).toMatchSnapshot();
  return res;
}

/**
 * Renders provided ReactJS component with ReactJS Test Renderer,
 * creates/tests the snapshot, and returns the render.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON render of the component.
 */
export function snapshot(component) {
  const res = render(component);
  expect(res).toMatchSnapshot();
  return res;
}

export const simulate = TU.Simulate;
