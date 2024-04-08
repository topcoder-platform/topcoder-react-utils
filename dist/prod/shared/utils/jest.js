'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simulate = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.findInDomByClass = findInDomByClass;
exports.findInDomManyByClass = findInDomManyByClass;
exports.render = render;
exports.renderDom = renderDom;
exports.shallowRender = shallowRender;
exports.shallowSnapshot = shallowSnapshot;
exports.snapshot = snapshot;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _shallow = require('react-test-renderer/shallow');

var _shallow2 = _interopRequireDefault(_shallow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/**
 * Just an alias for TU.findRenderedDOMComponentWithClass(..).
 * @param {Object} dom
 * @param {String} className
 * @return {Object}
 */


/* eslint-disable import/no-extraneous-dependencies */
function findInDomByClass(dom, className) {
  return _testUtils2.default.findRenderedDOMComponentWithClass(dom, className);
}

/**
 * Just an alias for TU.scryRenderedDOMComponentsWithClass(..).
 * @param {Object} dom
 * @param {Stirng} className
 * @return {Array}
 */
/**
 * Utilities for Jest tests.
 */

/* NOTE: At the moment here is no intention to use this module for runtime
 * execution, only for tests; thus we depend on Jest environment and dev
 * dependencies. */

/* global expect */

function findInDomManyByClass(dom, className) {
  return _testUtils2.default.scryRenderedDOMComponentsWithClass(dom, className);
}

/**
 * Auxiliary wrapper around ReactJS Test Renderer.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON representation of the rendered tree.
 */
function render(component) {
  return _reactTestRenderer2.default.create(component).toJSON();
}

/* The Wrapper is necessary for the "renderDom(..)" function, because
 * the "renderIntoDocument(..)" function from "react-dom/test-utils" works
 * only with state components, so we have to wrap our ReactJS components into
 * such Wrapper. */

var Wrapper = function (_React$Component) {
  (0, _inherits3.default)(Wrapper, _React$Component);

  function Wrapper() {
    (0, _classCallCheck3.default)(this, Wrapper);
    return (0, _possibleConstructorReturn3.default)(this, (Wrapper.__proto__ || (0, _getPrototypeOf2.default)(Wrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Wrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);
  return Wrapper;
}(_react2.default.Component);

Wrapper.propTypes = {
  children: _propTypes2.default.node.isRequired
};

/**
 * Renders given component into DOM, using "react-dom/test-utils".
 * @param {Object} component ReactJS component to render.
 * @return {Object} Rendered DOM.
 */
function renderDom(component) {
  return _testUtils2.default.renderIntoDocument(_react2.default.createElement(
    Wrapper,
    null,
    component
  ));
}

/**
 * Auxiliary wrapper around ReactJS Shallow Test Renderer.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON representation of the shallow component's render tree.
 */
function shallowRender(component) {
  var renderer = new _shallow2.default();
  renderer.render(component);
  return renderer.getRenderOutput();
}

/**
 * Renders provided ReactJS component with ReactJS Shallow Test Renderer,
 * creates/tests its snapshot, and returns the render result.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON representation of shallow render.
 */
function shallowSnapshot(component) {
  var res = shallowRender(component);
  expect(res).toMatchSnapshot();
  return res;
}

/**
 * Renders provided ReactJS component with ReactJS Test Renderer,
 * creates/tests the snapshot, and returns the render.
 * @param {Object} component ReactJS component to render.
 * @return {Object} JSON render of the component.
 */
function snapshot(component) {
  var res = render(component);
  expect(res).toMatchSnapshot();
  return res;
}

var simulate = exports.simulate = _testUtils2.default.Simulate;
