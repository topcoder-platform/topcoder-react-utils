(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/core-js/object/assign"), require("babel-runtime/core-js/object/get-prototype-of"), require("babel-runtime/core-js/object/keys"), require("babel-runtime/core-js/promise"), require("babel-runtime/helpers/asyncToGenerator"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/extends"), require("babel-runtime/helpers/inherits"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/regenerator"), require("lodash"), require("moment"), require("prop-types"), require("react"), require("react-css-super-themr"), require("react-dom"), require("react-dom/server"), require("react-helmet"), require("react-hot-loader"), require("react-redux"), require("react-router-dom"), require("redux"), require("redux-actions"), require("redux-devtools"), require("redux-devtools-dock-monitor"), require("redux-devtools-log-monitor"), require("redux-promise"), require("shortid"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/core-js/object/assign", "babel-runtime/core-js/object/get-prototype-of", "babel-runtime/core-js/object/keys", "babel-runtime/core-js/promise", "babel-runtime/helpers/asyncToGenerator", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass", "babel-runtime/helpers/defineProperty", "babel-runtime/helpers/extends", "babel-runtime/helpers/inherits", "babel-runtime/helpers/possibleConstructorReturn", "babel-runtime/regenerator", "lodash", "moment", "prop-types", "react", "react-css-super-themr", "react-dom", "react-dom/server", "react-helmet", "react-hot-loader", "react-redux", "react-router-dom", "redux", "redux-actions", "redux-devtools", "redux-devtools-dock-monitor", "redux-devtools-log-monitor", "redux-promise", "shortid"], factory);
	else if(typeof exports === 'object')
		exports["topcoder-react-utils"] = factory(require("babel-runtime/core-js/object/assign"), require("babel-runtime/core-js/object/get-prototype-of"), require("babel-runtime/core-js/object/keys"), require("babel-runtime/core-js/promise"), require("babel-runtime/helpers/asyncToGenerator"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/extends"), require("babel-runtime/helpers/inherits"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/regenerator"), require("lodash"), require("moment"), require("prop-types"), require("react"), require("react-css-super-themr"), require("react-dom"), require("react-dom/server"), require("react-helmet"), require("react-hot-loader"), require("react-redux"), require("react-router-dom"), require("redux"), require("redux-actions"), require("redux-devtools"), require("redux-devtools-dock-monitor"), require("redux-devtools-log-monitor"), require("redux-promise"), require("shortid"));
	else
		root["topcoder-react-utils"] = factory(root["babel-runtime/core-js/object/assign"], root["babel-runtime/core-js/object/get-prototype-of"], root["babel-runtime/core-js/object/keys"], root["babel-runtime/core-js/promise"], root["babel-runtime/helpers/asyncToGenerator"], root["babel-runtime/helpers/classCallCheck"], root["babel-runtime/helpers/createClass"], root["babel-runtime/helpers/defineProperty"], root["babel-runtime/helpers/extends"], root["babel-runtime/helpers/inherits"], root["babel-runtime/helpers/possibleConstructorReturn"], root["babel-runtime/regenerator"], root["lodash"], root["moment"], root["prop-types"], root["react"], root["react-css-super-themr"], root["react-dom"], root["react-dom/server"], root["react-helmet"], root["react-hot-loader"], root["react-redux"], root["react-router-dom"], root["redux"], root["redux-actions"], root["redux-devtools"], root["redux-devtools-dock-monitor"], root["redux-devtools-log-monitor"], root["redux-promise"], root["shortid"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_object_assign__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_object_get_prototype_of__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_object_keys__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_promise__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_asyncToGenerator__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_classCallCheck__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_createClass__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_defineProperty__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_extends__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_inherits__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_possibleConstructorReturn__, __WEBPACK_EXTERNAL_MODULE_babel_runtime_regenerator__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_css_super_themr__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__, __WEBPACK_EXTERNAL_MODULE_react_hot_loader__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_redux_actions__, __WEBPACK_EXTERNAL_MODULE_redux_devtools__, __WEBPACK_EXTERNAL_MODULE_redux_devtools_dock_monitor__, __WEBPACK_EXTERNAL_MODULE_redux_devtools_log_monitor__, __WEBPACK_EXTERNAL_MODULE_redux_promise__, __WEBPACK_EXTERNAL_MODULE_shortid__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://topcoder-react-utils/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://topcoder-react-utils/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"babel-runtime/helpers/asyncToGenerator\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _shortid = __webpack_require__(/*! shortid */ \"shortid\");\n\nvar _shortid2 = _interopRequireDefault(_shortid);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * Initialization of client-side code.\n       */\n\n/* global document window */\n\n/**\n * Renders given application into DOM, providing it with Redux store, if given.\n * @param {Function} Application Root ReactJS component of the app.\n * @param {Object} store Optional. Redux store.\n */\nfunction render(Application, store) {\n  var app = _react2.default.createElement(\n    _reactRouterDom.BrowserRouter,\n    null,\n    _react2.default.createElement(Application, null)\n  );\n  if (store) {\n    app = _react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      app\n    );\n  }\n  _reactDom2.default.hydrate(app, document.getElementById('react-view'));\n}\n\n/**\n * Initializes the code at client side. It takes care about receiving the data\n * injected at the server-side, and also about setting up client side of hot\n * module reloading (HMR).\n * @param {String} applicationModulePath Optional.\n * @param {Function} getApplication\n * @param {Object} moduleHot\n * @param {Function} storeFactory Optional.\n */\n\nexports.default = function () {\n  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {\n    var applicationModulePath = _ref2.applicationModulePath,\n        getApplication = _ref2.getApplication,\n        moduleHot = _ref2.moduleHot,\n        storeFactory = _ref2.storeFactory;\n    var store;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = void 0;\n\n            if (!storeFactory) {\n              _context.next = 5;\n              break;\n            }\n\n            _context.next = 4;\n            return storeFactory(window.ISTATE);\n\n          case 4:\n            store = _context.sent;\n\n          case 5:\n            render(getApplication(), store);\n\n            if (moduleHot && applicationModulePath) {\n              moduleHot.accept(applicationModulePath, function () {\n                return render(getApplication(), store);\n              });\n\n              /* HMR of CSS code each time webpack hot middleware updates the code. */\n              moduleHot.addStatusHandler(function (status) {\n                if (status !== 'ready') return;\n                var stamp = (0, _shortid2.default)();\n                var links = document.querySelectorAll('link[rel=stylesheet][id=\"tru-style\"]');\n                for (var i = 0; i < links.length; i += 1) {\n                  links[i].href = links[i].href.match(/[^?]*/) + '?v=' + stamp;\n                }\n              });\n            }\n\n          case 7:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  function Launch(_x) {\n    return _ref.apply(this, arguments);\n  }\n\n  return Launch;\n}();\n\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(render, 'render', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/client/index.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/client/index.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\n__webpack_require__(/*! ./styles/global.scss */ \"./src/styles/global.scss\");\n\nvar _actions = __webpack_require__(/*! ./shared/actions */ \"./src/shared/actions/index.js\");\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nvar _AppChunk = __webpack_require__(/*! ./shared/containers/AppChunk */ \"./src/shared/containers/AppChunk/index.jsx\");\n\nvar _AppChunk2 = _interopRequireDefault(_AppChunk);\n\nvar _Avatar = __webpack_require__(/*! ./shared/components/Avatar */ \"./src/shared/components/Avatar.jsx\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Button = __webpack_require__(/*! ./shared/components/Button */ \"./src/shared/components/Button.jsx\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _client = __webpack_require__(/*! ./client */ \"./src/client/index.jsx\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _DevTools = __webpack_require__(/*! ./shared/components/DevTools */ \"./src/shared/components/DevTools.jsx\");\n\nvar _DevTools2 = _interopRequireDefault(_DevTools);\n\nvar _Link = __webpack_require__(/*! ./shared/components/Link */ \"./src/shared/components/Link.jsx\");\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nvar _MetaTags = __webpack_require__(/*! ./shared/components/MetaTags */ \"./src/shared/components/MetaTags.jsx\");\n\nvar _MetaTags2 = _interopRequireDefault(_MetaTags);\n\nvar _Modal = __webpack_require__(/*! ./shared/components/Modal */ \"./src/shared/components/Modal/index.jsx\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _NavLink = __webpack_require__(/*! ./shared/components/NavLink */ \"./src/shared/components/NavLink.jsx\");\n\nvar _NavLink2 = _interopRequireDefault(_NavLink);\n\nvar _reducers = __webpack_require__(/*! ./shared/reducers */ \"./src/shared/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _ScalableRect = __webpack_require__(/*! ./shared/components/ScalableRect */ \"./src/shared/components/ScalableRect/index.jsx\");\n\nvar _ScalableRect2 = _interopRequireDefault(_ScalableRect);\n\nvar _utils = __webpack_require__(/*! ./shared/utils */ \"./src/shared/utils/index.js\");\n\nvar utils = _interopRequireWildcard(_utils);\n\nvar _isomorphy = __webpack_require__(/*! ./shared/utils/isomorphy */ \"./src/shared/utils/isomorphy.js\");\n\nvar _webpack = __webpack_require__(/*! ./shared/utils/webpack */ \"./src/shared/utils/webpack/index.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar serverUrl = (0, _isomorphy.isProdBuild)() ? 'prod' : 'dev';\nserverUrl = 'topcoder-react-utils/dist/' + serverUrl + '/server';\nvar server = utils.isomorphy.isServerSide() ? (0, _webpack.requireWeak)(serverUrl) : null;\n\nmodule.exports = (0, _extends3.default)({\n  actions: _actions2.default,\n  AppChunk: _AppChunk2.default,\n  Avatar: _Avatar2.default,\n  BaseModal: _Modal.BaseModal,\n  Button: _Button2.default,\n  client: _client2.default,\n  DevTools: _DevTools2.default,\n  Link: _Link2.default,\n  NavLink: _NavLink2.default,\n  MetaTags: _MetaTags2.default,\n  Modal: _Modal2.default,\n  ScalableRect: _ScalableRect2.default,\n  reducers: _reducers2.default,\n  server: server\n}, utils);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(serverUrl, 'serverUrl', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/index.js');\n  reactHotLoader.register(server, 'server', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/index.js?");

/***/ }),

/***/ "./src/shared/actions/collection.js":
/*!******************************************!*\
  !*** ./src/shared/actions/collection.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _redux = __webpack_require__(/*! ../utils/redux */ \"./src/shared/utils/redux.js\");\n\nvar redux = _interopRequireWildcard(_redux);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * @module \"actions.collection\"\n       * @desc Actions for management of *Collection* segment of Redux store.\n       */\n\n/**\n * @static\n * @desc Creates an action that adds items to the collection.\n * @param {Object} index The index of items to add. It is a JS object with\n *  ID-to-item mapping. Each item will be added to the collection under the\n *  specified index.\n * @return {Action}\n */\nfunction addItems(index) {\n  return { index: index, timestamp: Date.now() };\n}\n\n/**\n * @static\n * @desc Creates an action that increments reference counters of the specified\n *  items.\n * @param {String|String[]} ids Item ID, or an array of IDs.\n * @param {Number} factor=1 Optional. The increment value.\n * @return {Action}\n */\nfunction bookItems(ids) {\n  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  return { factor: factor, ids: _lodash2.default.isArray(ids) ? ids : [ids] };\n}\n\n/**\n * @static\n * @desc Creates an action that removes from the collection all items that\n *  (i) are not used (i.e. their reference counters equal to zero); (ii) were\n *  added to the collection before the specified `timestamp`.\n * @param {Number} timestamp=Number.MAX_VALUE The minimal timestamp value of\n *  items that should be kept in the collection even if they are not currently\n *  used.\n * @return {Action}\n */\nfunction clean() {\n  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.MAX_VALUE;\n\n  return timestamp;\n}\n\n/**\n * @static\n * @desc Creates an action that decrements reference counters of the specified\n *  collection items.\n * @param {String|String[]} ids Item ID, or an array of IDs.\n * @param {Number} factor=1 Optional. Decrement value.\n * @return {Action}\n */\nfunction freeItems(ids) {\n  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  return { factor: factor, ids: _lodash2.default.isArray(ids) ? ids : [ids] };\n}\n\n/**\n * @static\n * @desc Creates an action that signals beginning of an async loading of the\n *  specified item.\n * @param {String} operationId Operation UUID, to match with the corresponding\n *  {@link module:actions.collection.loadItemDone} action.\n * @param {String} itemId Item ID.\n * @return {Action}\n */\nfunction loadItemInit(operationId, itemId) {\n  return { itemId: itemId, operationId: operationId };\n}\n\n/**\n * @static\n * @desc Creates an action that finalizes an async loading of the specified\n *  item.\n * @param {String} operationId Operation UUID, to match with the corresponding\n *  {@link module:actions.collection.loadItemDone} action.\n * @param {String} itemId Item ID.\n * @param {Any} item The loaded item, to be added into the collection.\n * @return {Action}\n */\nfunction loadItemDone(operationId, itemId, item) {\n  return {\n    item: item,\n    itemId: itemId,\n    operationId: operationId,\n    timestamp: Date.now()\n  };\n}\n\nvar _default = redux.createActions({\n  COLLECTION: {\n    ADD_ITEMS: addItems,\n    BOOK_ITEMS: bookItems,\n    CLEAN: clean,\n    FREE_ITEMS: freeItems,\n    LOAD_ITEM_INIT: loadItemInit,\n    LOAD_ITEM_DONE: loadItemDone\n  }\n});\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(addItems, 'addItems', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/collection.js');\n  reactHotLoader.register(bookItems, 'bookItems', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/collection.js');\n  reactHotLoader.register(clean, 'clean', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/collection.js');\n  reactHotLoader.register(freeItems, 'freeItems', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/collection.js');\n  reactHotLoader.register(loadItemInit, 'loadItemInit', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/collection.js');\n  reactHotLoader.register(loadItemDone, 'loadItemDone', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/collection.js');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/collection.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/actions/collection.js?");

/***/ }),

/***/ "./src/shared/actions/index.js":
/*!*************************************!*\
  !*** ./src/shared/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _collection = __webpack_require__(/*! ./collection */ \"./src/shared/actions/collection.js\");\n\nvar _collection2 = _interopRequireDefault(_collection);\n\nvar _item = __webpack_require__(/*! ./item */ \"./src/shared/actions/item.js\");\n\nvar _item2 = _interopRequireDefault(_item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = (0, _extends3.default)({}, _collection2.default, _item2.default);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/actions/index.js?");

/***/ }),

/***/ "./src/shared/actions/item.js":
/*!************************************!*\
  !*** ./src/shared/actions/item.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! ../utils/redux */ \"./src/shared/utils/redux.js\");\n\nvar redux = _interopRequireWildcard(_redux);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * @module \"actions.item\"\n       * @desc Actions for management of item data in Redux store.\n       */\n\n/**\n * @static\n * @desc Creates an action that drops item's data if (i) the value of item's\n *  reference counter is not positive; (ii) item's timestamp is older than\n *  `olderThan` value.\n * @param {Number} olderThan=Number.MAX_VALUE Optional. Timestamp [ms].\n *  If provided, item's  data will be dropped only if they were received / set\n *  prior to this moment in time.\n * @return {Action}\n */\nfunction dropData() {\n  var olderThan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.MAX_VALUE;\n\n  return olderThan;\n}\n\n/**\n * @static\n * @desc Creates an action that signals the beginning of async loading of\n *  item's data.\n * @param {Number|String} loadingOperationId The unique identifier of the\n *  loading operation. It will be written into item's segment of Redux store\n *  with the following efffects:\n *\n *  - We consider that item's data are being loaded if, and only if,\n *    the item's `loadingOperationId` has a truly value;\n *\n *  - `loadingOperationId` is used to match the corresponding\n *    {@link module:actions.item.loadDataDone} operation.\n *\n * @return {Action}\n */\nfunction loadDataInit(loadingOperationId) {\n  return loadingOperationId;\n}\n\n/**\n * @static\n * @desc Creates an action that handles the result of async loading of item's\n *  data.\n * @param {Number|String} loadingOperationId The unique identifier of the\n *  loading operation. If it does not match the value currently written for\n *  the item in the Redux store (see {@link module:actions.item.loadDataInit}),\n *  the action will be silently ignored.\n * @param {Any} data Any value to store as the item's data.\n * @return {Action}\n */\nfunction loadDataDone(loadingOperationId, data) {\n  return { data: data, loadingOperationId: loadingOperationId, timestamp: Date.now() };\n}\n\n/**\n * @static\n * @desc Creates an action that stores given data into the item.\n * @param {Any} data Any value to store as the item's data.\n * @return {Action}\n */\nfunction setData(data) {\n  return { data: data, timestamp: Date.now() };\n}\n\n/**\n * @static\n * @desc Creates an action that updates the item's reference counter.\n * @param {Number} shift The value to add to the item's reference counter.\n *  Should be `1` or `-1` in majority of cases, although any other values\n *  are permitted.\n * @return {Action}\n */\nfunction updateReferenceCounter(shift) {\n  return shift;\n}\n\nvar _default = redux.createActions({\n  ITEM: {\n    DROP_DATA: dropData,\n    LOAD_DATA_INIT: loadDataInit,\n    LOAD_DATA_DONE: loadDataDone,\n    SET_DATA: setData,\n    UPDATE_REFERENCE_COUNTER: updateReferenceCounter\n  }\n});\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(dropData, 'dropData', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/item.js');\n  reactHotLoader.register(loadDataInit, 'loadDataInit', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/item.js');\n  reactHotLoader.register(loadDataDone, 'loadDataDone', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/item.js');\n  reactHotLoader.register(setData, 'setData', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/item.js');\n  reactHotLoader.register(updateReferenceCounter, 'updateReferenceCounter', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/item.js');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/actions/item.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/actions/item.js?");

/***/ }),

/***/ "./src/shared/components/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/shared/components/Avatar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Avatar;\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * The standard Avatar component.\n       * To use it you will have to properly wrap it with react-css-super-themr,\n       * the component provided here takes care about the code interface and logic\n       * only.\n       */\n\nfunction Avatar(_ref) {\n  var DefaultAvatar = _ref.DefaultAvatar,\n      theme = _ref.theme,\n      url = _ref.url;\n\n  return url ? _react2.default.createElement('img', { alt: 'Avatar', src: url, className: theme.avatar }) : _react2.default.createElement(DefaultAvatar, { className: theme.avatar });\n}\n\nAvatar.defaultProps = {\n  url: null\n};\n\nAvatar.propTypes = {\n  DefaultAvatar: _propTypes2.default.func.isRequired,\n  theme: _propTypes2.default.shape({\n    avatar: _propTypes2.default.string.isRequired\n  }).isRequired,\n  url: _propTypes2.default.string\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Avatar, 'Avatar', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/Avatar.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/Avatar.jsx?");

/***/ }),

/***/ "./src/shared/components/Button.jsx":
/*!******************************************!*\
  !*** ./src/shared/components/Button.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Button;\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Link = __webpack_require__(/*! ./Link */ \"./src/shared/components/Link.jsx\");\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * The Button component provide a standard button / button-like link:\n       * - When disabled, it renders as <div>;\n       * - When no \"to\" prop is passed in, it renders as <button>;\n       * - Otherwise, it renders as <Link>.\n       */\n\nfunction Button(_ref) {\n  var active = _ref.active,\n      children = _ref.children,\n      disabled = _ref.disabled,\n      enforceA = _ref.enforceA,\n      onClick = _ref.onClick,\n      onMouseDown = _ref.onMouseDown,\n      openNewTab = _ref.openNewTab,\n      replace = _ref.replace,\n      size = _ref.size,\n      theme = _ref.theme,\n      to = _ref.to,\n      type = _ref.type;\n\n  var className = theme.button;\n  if (theme[size]) className += ' ' + theme[size];\n  if (active && theme.active) className += ' ' + theme.active;\n  if (disabled) {\n    if (theme.disabled) className += ' ' + theme.disabled;\n    return _react2.default.createElement(\n      'div',\n      { className: className },\n      children\n    );\n  }\n  if (to) {\n    if (theme.link) className += ' ' + theme.link;\n    return (\n      /* NOTE: This ESLint rule enforces us to use <a> and <button> properly\n       * in the situations where they are supposed to be used; it is correct\n       * from the document structure point of view, but it is not convenient\n       * from the developer point of view! The reason is that during active\n       * development / prototyping it is often necessary to replace a button\n       * by a link, and vice-versa, thus having a component that hides the\n       * visual and logic differences between button and links saves tons of\n       * developer time. Thus, we sacrifice this rule here in exchange for\n       * convenience and efficiency of development. */\n      _react2.default.createElement(\n        _Link2.default // eslint-disable-line jsx-a11y/anchor-is-valid\n        ,\n        { className: className,\n          enforceA: enforceA,\n          onClick: onClick,\n          onMouseDown: onMouseDown,\n          openNewTab: openNewTab,\n          replace: replace,\n          to: to\n        },\n        children\n      )\n    );\n  }\n  if (theme.regular) className += ' ' + theme.regular;\n  return (\n    /* The rule is temporary disabled, as its current implementation bans\n     * dynamic button types with no valid reason:\n     * https://github.com/yannickcr/eslint-plugin-react/issues/1555 */\n    /* eslint-disable react/button-has-type */\n    _react2.default.createElement(\n      'button',\n      {\n        className: className,\n        onClick: onClick,\n        onMouseDown: onMouseDown,\n        type: type\n      },\n      children\n    )\n    /* eslint-enable react/button-has-type */\n\n  );\n}\n\nButton.defaultProps = {\n  active: false,\n  children: null,\n  disabled: false,\n  enforceA: false,\n  onClick: null,\n  onMouseDown: null,\n  openNewTab: false,\n  replace: false,\n  size: null,\n  to: null,\n  type: 'button'\n};\n\nButton.propTypes = {\n  active: _propTypes2.default.bool,\n  children: _propTypes2.default.node,\n  disabled: _propTypes2.default.bool,\n  enforceA: _propTypes2.default.bool,\n  onClick: _propTypes2.default.func,\n  onMouseDown: _propTypes2.default.func,\n  openNewTab: _propTypes2.default.bool,\n  replace: _propTypes2.default.bool,\n  size: _propTypes2.default.string,\n  theme: _propTypes2.default.shape({\n    button: _propTypes2.default.string.isRequired,\n    disabled: _propTypes2.default.string,\n    link: _propTypes2.default.string,\n    regular: _propTypes2.default.string\n  }).isRequired,\n  to: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),\n  type: _propTypes2.default.oneOf(['button', 'reset', 'submit'])\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Button, 'Button', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/Button.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/Button.jsx?");

/***/ }),

/***/ "./src/shared/components/DevTools.jsx":
/*!********************************************!*\
  !*** ./src/shared/components/DevTools.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxDevtools = __webpack_require__(/*! redux-devtools */ \"redux-devtools\");\n\nvar _reduxDevtoolsDockMonitor = __webpack_require__(/*! redux-devtools-dock-monitor */ \"redux-devtools-dock-monitor\");\n\nvar _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);\n\nvar _reduxDevtoolsLogMonitor = __webpack_require__(/*! redux-devtools-log-monitor */ \"redux-devtools-log-monitor\");\n\nvar _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * The DevTools component is a container for Redux monitors that will be used\n       * in the development mode.\n       */\n\nvar _default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(\n  _reduxDevtoolsDockMonitor2.default,\n  {\n    changePositionKey: 'ctrl-p',\n    toggleVisibilityKey: 'ctrl-m'\n  },\n  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)\n));\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/DevTools.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/DevTools.jsx?");

/***/ }),

/***/ "./src/shared/components/GenericLink.jsx":
/*!***********************************************!*\
  !*** ./src/shared/components/GenericLink.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nexports.default = GenericLink;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * The GenericLink wraps around React Router's Link or NavLink component, to\n       * automatically replace them by regular <a> elements when:\n       * - The target reference points to another domain;\n       * - User opts to open the reference in a new tab;\n       * - User explicitely opts to use <a>.\n       */\n\n/* global window */\n\nfunction GenericLink(props) {\n  var children = props.children,\n      className = props.className,\n      enforceA = props.enforceA,\n      _onClick = props.onClick,\n      onMouseDown = props.onMouseDown,\n      openNewTab = props.openNewTab,\n      replace = props.replace,\n      routerLinkType = props.routerLinkType,\n      to = props.to;\n\n  /* Renders Link as <a> element if:\n   * - It is opted explicitely by `enforceA` prop;\n   * - It should be opened in a new tab;\n   * - It is an absolte URL (starts with http:// or https://);\n   * - It is anchor link (starts with #). */\n\n  if (enforceA || openNewTab || to.match(/^(#|https?:\\/\\/)/)) {\n    return _react2.default.createElement(\n      'a',\n      {\n        className: className,\n        href: to,\n        onClick: _onClick,\n        onMouseDown: onMouseDown,\n        rel: 'noopener noreferrer',\n        target: openNewTab ? '_blank' : ''\n      },\n      children\n    );\n  }\n\n  var linkProps = _lodash2.default.omit(props, ['children', 'enforceA', 'openNewTab', 'routerLinkType']);\n\n  /* Otherwise we render the link as React Router's Link or NavLink element. */\n  return _react2.default.createElement(routerLinkType, (0, _extends3.default)({}, linkProps, {\n    replace: replace,\n    onClick: function onClick(e) {\n      /* If a custom onClick(..) handler was provided we execute it. */\n      if (_onClick) _onClick(e);\n\n      /* The link to the current page will scroll to the top of the page. */\n      window.scroll(0, 0);\n    }\n  }), children);\n}\n\nGenericLink.defaultProps = {\n  children: null,\n  className: null,\n  enforceA: false,\n  onClick: null,\n  onMouseDown: null,\n  openNewTab: false,\n  replace: false,\n  to: ''\n};\n\nGenericLink.propTypes = {\n  children: _propTypes2.default.node,\n  className: _propTypes2.default.string,\n  enforceA: _propTypes2.default.bool,\n  onClick: _propTypes2.default.func,\n  onMouseDown: _propTypes2.default.func,\n  openNewTab: _propTypes2.default.bool,\n  replace: _propTypes2.default.bool,\n  routerLinkType: _propTypes2.default.func.isRequired,\n  to: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GenericLink, 'GenericLink', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/GenericLink.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/GenericLink.jsx?");

/***/ }),

/***/ "./src/shared/components/Link.jsx":
/*!****************************************!*\
  !*** ./src/shared/components/Link.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nexports.default = Link;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _GenericLink = __webpack_require__(/*! ./GenericLink */ \"./src/shared/components/GenericLink.jsx\");\n\nvar _GenericLink2 = _interopRequireDefault(_GenericLink);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * The Link wraps around React Router's Link component, to automatically replace\n       * it by the regular <a> element when:\n       * - The target reference points to another domain;\n       * - User opts to open the reference in a new tab;\n       * - User explicitely opts to use <a>.\n       */\n\nfunction Link(props) {\n  return _react2.default.createElement(_GenericLink2.default, (0, _extends3.default)({}, props, { routerLinkType: _reactRouterDom.Link }));\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Link, 'Link', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/Link.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/Link.jsx?");

/***/ }),

/***/ "./src/shared/components/MetaTags.jsx":
/*!********************************************!*\
  !*** ./src/shared/components/MetaTags.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * Auxiliary wrapper around React Helmet that helps to generate meta tags for\n       * generic use cases.\n       *\n       * NOTE: This component relies on `domain` path of Redux store to hold\n       * the current app domain, which will serve as the base path for the bundled\n       * images.\n       */\n\nfunction MetaTags(_ref) {\n  var description = _ref.description,\n      domain = _ref.domain,\n      image = _ref.image,\n      siteName = _ref.siteName,\n      socialDescription = _ref.socialDescription,\n      socialTitle = _ref.socialTitle,\n      title = _ref.title,\n      url = _ref.url;\n\n  var img = '' + domain + image;\n  var socTitle = socialTitle || title;\n  var socDesc = socialDescription || description;\n  return _react2.default.createElement(\n    _reactHelmet.Helmet,\n    null,\n    _react2.default.createElement(\n      'title',\n      null,\n      title\n    ),\n    _react2.default.createElement('meta', { property: 'description', content: description }),\n    _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),\n    _react2.default.createElement('meta', { name: 'twitter:title', content: socTitle }),\n    _react2.default.createElement('meta', { name: 'twitter:description', content: socDesc }),\n    image ? _react2.default.createElement('meta', { name: 'twitter:image', content: img }) : null,\n    siteName ? _react2.default.createElement('meta', { name: 'twitter:site', content: '@' + siteName }) : null,\n    _react2.default.createElement('meta', { property: 'og:title', content: socTitle }),\n    image ? _react2.default.createElement('meta', { property: 'og:image', content: img }) : null,\n    image ? _react2.default.createElement('meta', { property: 'og:image:alt', content: socTitle }) : null,\n    _react2.default.createElement('meta', { property: 'og:description', content: socDesc }),\n    siteName ? _react2.default.createElement('meta', { property: 'og:sitename', content: siteName }) : null,\n    url ? _react2.default.createElement('meta', { property: 'og:url', content: url }) : null\n  );\n}\n\nMetaTags.defaultProps = {\n  image: null,\n  siteName: null,\n  socialDescription: null,\n  socialTitle: null,\n  url: null\n};\n\nMetaTags.propTypes = {\n  description: _propTypes2.default.string.isRequired,\n  domain: _propTypes2.default.string.isRequired,\n  image: _propTypes2.default.string,\n  siteName: _propTypes2.default.string,\n  socialDescription: _propTypes2.default.string,\n  socialTitle: _propTypes2.default.string,\n  title: _propTypes2.default.string.isRequired,\n  url: _propTypes2.default.string\n};\n\n/* TODO: It is not good to depend on the domain written into redux state here,\n * better pass it via the renderer context at the server side, and get it from\n * the location at the frontend side, or something similar? */\n\nvar _default = (0, _reactRedux.connect)(function (state) {\n  return { domain: state.domain };\n})(MetaTags);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MetaTags, 'MetaTags', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/MetaTags.jsx');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/MetaTags.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/MetaTags.jsx?");

/***/ }),

/***/ "./src/shared/components/Modal/index.jsx":
/*!***********************************************!*\
  !*** ./src/shared/components/Modal/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BaseModal = undefined;\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"babel-runtime/core-js/object/get-prototype-of\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactCssSuperThemr = __webpack_require__(/*! react-css-super-themr */ \"react-css-super-themr\");\n\nvar _style = __webpack_require__(/*! ./style.scss */ \"./src/shared/components/Modal/style.scss\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * This generic component will implement the semi-transparent background\n       * and the white window in the center, which wraps the content provided as\n       * children.\n       *\n       * When semi-transparent background is clicked, it should trigger the onCancel()\n       * callback passed from the parent.\n       */\n\n/* global document */\n\n/* NOTE: Modal component is implemented as class, as it demands advanced\n * interaction with DOM upon mount and unmount. */\nvar BaseModal = function (_React$Component) {\n  (0, _inherits3.default)(BaseModal, _React$Component);\n\n  function BaseModal(props) {\n    (0, _classCallCheck3.default)(this, BaseModal);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseModal.__proto__ || (0, _getPrototypeOf2.default)(BaseModal)).call(this, props));\n\n    _this.portal = document.createElement('div');\n    return _this;\n  }\n\n  (0, _createClass3.default)(BaseModal, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      document.body.classList.add('scrolling-disabled-by-modal');\n      document.body.appendChild(this.portal);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      document.body.classList.remove('scrolling-disabled-by-modal');\n      document.body.removeChild(this.portal);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          onCancel = _props.onCancel,\n          theme = _props.theme;\n\n      return _reactDom2.default.createPortal(_react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\n          'div',\n          {\n            className: theme.container,\n            onWheel: function onWheel(event) {\n              return event.stopPropagation();\n            }\n          },\n          children\n        ),\n        _react2.default.createElement('button', {\n          onClick: function onClick() {\n            return onCancel();\n          },\n          className: theme.overlay,\n          type: 'button'\n        })\n      ), this.portal);\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n  return BaseModal;\n}(_react2.default.Component);\n\nBaseModal.defaultProps = {\n  onCancel: _lodash2.default.noop,\n  children: null,\n  theme: {}\n};\n\nBaseModal.propTypes = {\n  onCancel: _propTypes2.default.func,\n  children: _propTypes2.default.node,\n  theme: _propTypes2.default.shape()\n};\n\n/* Non-themed version of the Modal. */\nexports.BaseModal = BaseModal;\n\nvar _default = (0, _reactCssSuperThemr.themr)('Modal', _style2.default)(BaseModal);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BaseModal, 'BaseModal', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/Modal/index.jsx');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/Modal/index.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/Modal/index.jsx?");

/***/ }),

/***/ "./src/shared/components/Modal/style.scss":
/*!************************************************!*\
  !*** ./src/shared/components/Modal/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"overlay\":\"src-shared-components-Modal-style___overlay___X12tn9\",\"container\":\"src-shared-components-Modal-style___container___1SoeQl\"};\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/Modal/style.scss?");

/***/ }),

/***/ "./src/shared/components/NavLink.jsx":
/*!*******************************************!*\
  !*** ./src/shared/components/NavLink.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nexports.default = NavLink;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _GenericLink = __webpack_require__(/*! ./GenericLink */ \"./src/shared/components/GenericLink.jsx\");\n\nvar _GenericLink2 = _interopRequireDefault(_GenericLink);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * The NavLink wraps around React Router's NavLink component, to automatically\n       * replace it by the regular <a> element when:\n       * - The target reference points to another domain;\n       * - User opts to open the reference in a new tab;\n       * - User explicitely opts to use <a>.\n       */\n\nfunction NavLink(props) {\n  return _react2.default.createElement(_GenericLink2.default, (0, _extends3.default)({}, props, { routerLinkType: _reactRouterDom.NavLink }));\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NavLink, 'NavLink', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/NavLink.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/NavLink.jsx?");

/***/ }),

/***/ "./src/shared/components/ScalableRect/index.jsx":
/*!******************************************************!*\
  !*** ./src/shared/components/ScalableRect/index.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = ScalableRect;\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./style.scss */ \"./src/shared/components/ScalableRect/style.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n/**\n * Creates a dynamically scalable rectangular container with the specified fixed\n * ratio of its sides.\n *\n * Sometimes it is necessary, but not straightforward to implement with HTML and\n * CSS, thus this component: juts tell it what sides ration you need (in the\n * form W:H, like 4:3 or 16:9 via the \"ratio\" prop, and pass in the children\n * you want to render in this container).\n */\n\nfunction ScalableRect(_ref) {\n  var children = _ref.children,\n      className = _ref.className,\n      ratio = _ref.ratio;\n\n  var aux = ratio.split(':');\n  var paddingBottom = 100 * aux[1] / aux[0] + '%';\n\n  /* NOTE: In case the following code looks strange to you, mind that we want to\n   * allow the user to set custom styles on this component. If user passes in a\n   * \"className\" prop (possibly \"styleName\", but that one is converted to\n   * \"className\" by Babel just before being passed into this component), it\n   * should not interfere with the sizing behavior, thus we need an extra <div>\n   * level in this component; however, if user does not need a custom styling,\n   * we can save one level of HTML code, so we do it. */\n  var rect = _react2.default.createElement(\n    'div',\n    {\n      style: { paddingBottom: paddingBottom },\n      className: 'src-shared-components-ScalableRect-style___container___3YhfNf'\n    },\n    _react2.default.createElement(\n      'div',\n      { className: 'src-shared-components-ScalableRect-style___wrapper___3qZoWe' },\n      children\n    )\n  );\n  return className ? _react2.default.createElement(\n    'div',\n    { className: className },\n    rect\n  ) : rect;\n}\n\nScalableRect.defaultProps = {\n  children: null,\n  className: null,\n  ratio: '1:1'\n};\n\nScalableRect.propTypes = {\n  children: _propTypes2.default.node,\n  className: _propTypes2.default.string,\n  ratio: _propTypes2.default.string\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ScalableRect, 'ScalableRect', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/components/ScalableRect/index.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/ScalableRect/index.jsx?");

/***/ }),

/***/ "./src/shared/components/ScalableRect/style.scss":
/*!*******************************************************!*\
  !*** ./src/shared/components/ScalableRect/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"container\":\"src-shared-components-ScalableRect-style___container___3YhfNf\",\"wrapper\":\"src-shared-components-ScalableRect-style___wrapper___3qZoWe\"};\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/components/ScalableRect/style.scss?");

/***/ }),

/***/ "./src/shared/containers/AppChunk/ContentWrapper.jsx":
/*!***********************************************************!*\
  !*** ./src/shared/containers/AppChunk/ContentWrapper.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"babel-runtime/core-js/object/get-prototype-of\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * A helper class for SplitRoute. It just renders the specified content (wrapped\n       * into <div> to better match corresponding pre-rendered DOM), and calls reset()\n       * method of the parent SplitRoute when unmounted. This allows to reset\n       * SplitRoute to the initial state, which is necessary for its proper\n       * functioning.\n       */\n\nvar ContentWrapper = function (_React$Component) {\n  (0, _inherits3.default)(ContentWrapper, _React$Component);\n\n  function ContentWrapper() {\n    (0, _classCallCheck3.default)(this, ContentWrapper);\n    return (0, _possibleConstructorReturn3.default)(this, (ContentWrapper.__proto__ || (0, _getPrototypeOf2.default)(ContentWrapper)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(ContentWrapper, [{\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      var parent = this.props.parent;\n\n      parent.reset();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var content = this.props.content;\n\n      return content;\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n  return ContentWrapper;\n}(_react2.default.Component);\n\nvar _default = ContentWrapper;\nexports.default = _default;\n\n\nContentWrapper.propTypes = {\n  content: _propTypes2.default.element.isRequired,\n  parent: _propTypes2.default.shape({\n    reset: _propTypes2.default.func.isRequired\n  }).isRequired\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ContentWrapper, 'ContentWrapper', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/containers/AppChunk/ContentWrapper.jsx');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/containers/AppChunk/ContentWrapper.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/containers/AppChunk/ContentWrapper.jsx?");

/***/ }),

/***/ "./src/shared/containers/AppChunk/index.jsx":
/*!**************************************************!*\
  !*** ./src/shared/containers/AppChunk/index.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"babel-runtime/core-js/object/get-prototype-of\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _shortid = __webpack_require__(/*! shortid */ \"shortid\");\n\nvar _shortid2 = _interopRequireDefault(_shortid);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _isomorphy = __webpack_require__(/*! ../../utils/isomorphy */ \"./src/shared/utils/isomorphy.js\");\n\nvar _ContentWrapper = __webpack_require__(/*! ./ContentWrapper */ \"./src/shared/containers/AppChunk/ContentWrapper.jsx\");\n\nvar _ContentWrapper2 = _interopRequireDefault(_ContentWrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * A custom component for code splitting support, with react-router routes\n       * serving as the split points. Because it is quite complex, here are only\n       * some technical comments in the code. For instructions on how to use it\n       * refer to\n       * https://github.com/topcoder-platform/community-app/blob/develop/docs/code-splitting.md\n       */\n\n/* global document, window */\n\n/* Specifies the maximal number of unused CSS stylesheets to be kept in memory.\n */\nvar MAX_UNUSED_STYLESHEETS = 10;\n\nvar unusedCssStamp = 0;\n\nvar SplitRoute = function (_React$Component) {\n  (0, _inherits3.default)(SplitRoute, _React$Component);\n\n  function SplitRoute(props) {\n    (0, _classCallCheck3.default)(this, SplitRoute);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (SplitRoute.__proto__ || (0, _getPrototypeOf2.default)(SplitRoute)).call(this, props));\n\n    _this.state = { component: null };\n    return _this;\n  }\n\n  (0, _createClass3.default)(SplitRoute, [{\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.unmounted = true;\n    }\n  }, {\n    key: 'reset',\n    value: function reset() {\n      /* Marking chunk's stylesheet as unused.\n       * This works properly only when styling does not depend on the ordering\n       * of loaded stylesheets, which is how our CSS should be written. */\n      var chunkName = this.props.chunkName;\n\n      var link = document.querySelector('link[data-chunk=\"' + chunkName + '\"]');\n      if (link) link.setAttribute('data-chunk-unused', unusedCssStamp += 1);\n\n      /* Reset to the initial state. */\n      this.setState({ component: null });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          chunkName = _props.chunkName,\n          exact = _props.exact,\n          location = _props.location,\n          path = _props.path,\n          renderClientAsync = _props.renderClientAsync,\n          renderPlaceholder = _props.renderPlaceholder,\n          renderServer = _props.renderServer,\n          strict = _props.strict;\n\n\n      var PUBLIC_PATH = global.TRU_BUILD_INFO.publicPath;\n      var CROSS_ORIGIN_LOADING = global.TRU_BUILD_INFO.crossOriginLoading;\n\n      var timestamp = (0, _moment2.default)((0, _isomorphy.buildTimestamp)()).valueOf();\n\n      var component = this.state.component;\n\n\n      return _react2.default.createElement(_reactRouterDom.Route, {\n        component: component,\n        exact: exact,\n        location: location,\n        path: path,\n        render: function render(props) {\n          var res = null;\n          if ((0, _isomorphy.isServerSide)()) {\n            /* Server-side rendering */\n\n            /* 1. The component or its placeholder is rendered into HTML\n             *    string. And, yes, just in case we have to wrap it into\n             *    Provider, otherwise containers in the render will break\n             *    the code. */\n            var render = renderServer || renderPlaceholder || function () {\n              return _react2.default.createElement('div', null);\n            };\n            var html = _server2.default.renderToString(_react2.default.createElement(\n              _reactRedux.Provider,\n              { store: props.staticContext.store },\n              _react2.default.createElement(\n                _reactRouterDom.StaticRouter,\n                {\n                  context: props.staticContext,\n                  location: props.location\n                },\n                render(props)\n              )\n            ));\n\n            /* 2. The rendered HTML string is added to the router context,\n             *    to be injected by server/renderer.jsx into the rendered HTML\n             *    document as a field of window.SPLITS object. We also check\n             *    that route ID is unique among all matched SplitRoutes. */\n            /* eslint-disable react/prop-types */\n            var splits = props.staticContext.splits;\n            /* eslint-enable react/prop-types */\n\n            if (splits[chunkName]) throw new Error('SplitRoute: IDs clash!');else splits[chunkName] = html;\n\n            /* 3. The stylesheet links are injected via links elements in the\n             *    header of the document, to have a better control over styles\n             *    (re-)loading, independent of ReactJS mechanics of\n             *    the document updates. */\n            props.staticContext.chunks.push(chunkName);\n\n            /* 4. We also render the mounted component, or the placeholder,\n             *    into the document, using dangerouslySetInnerHTML to inject\n             *    previously rendered HTML string into the main body of the doc.\n             *    Thanks to (2) and (3), at the client side we will be able to\n             *    perform exactly the same rendering even before the splitted\n             *    code is loaded, thus not breaking the result of server-side\n             *    rendering. */\n            /* eslint-disable react/no-danger */\n            res = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } });\n            /* eslint-enable react/no-danger */\n          } else {\n            /* Client side rendering */\n            if (window.SPLITS[chunkName]) {\n              /* If the page has been pre-rendered at the server-side, we render\n               * exactly the same until the splitted code is loaded. */\n              /* eslint-disable react/no-danger */\n              res = _react2.default.createElement('div', {\n                dangerouslySetInnerHTML: {\n                  __html: window.SPLITS[chunkName]\n                }\n              });\n              /* eslint-disable react/no-danger */\n\n              /* We remove the pre-rendered HTML string from window.SPLITS,\n               * because if the vistor navigates around the app and comes back\n               * to this route, we want to re-render the page from scratch in\n               * that case (because the state of app has changed). */\n              delete window.SPLITS[chunkName];\n            } else if (renderPlaceholder) {\n              /* If the page has not been pre-rendered, the best we can do prior\n               * the loading of split code, is to render the placeholder, if\n               * provided.\n               *\n               * NOTE: The <div> wrappings here and in other places below may\n               * look unnecessary, but they are important: we want to be sure\n               * that all render options produce the same markup, thus helping\n               * ReactJS to be efficient.\n               */\n              res = _react2.default.createElement(\n                'div',\n                null,\n                renderPlaceholder(props)\n              );\n            }\n\n            /* The links to stylesheets are injected into document header using\n             * browser's API, rather than ReactJS rendering mechanism, because\n             * it gives a better control over reloading of the stylesheets and\n             * helps to avoid some unnecessary flickering when the app loads a\n             * page already pre-rendered at the server side. */\n            var link = document.querySelector('link[data-chunk=\"' + chunkName + '\"]');\n            if (link) {\n              /* Marking the chunk being used again. */\n              link.removeAttribute('data-chunk-unused');\n            } else {\n              link = document.createElement('link');\n              link.setAttribute('data-chunk', chunkName);\n              link.setAttribute('href', PUBLIC_PATH + '/' + chunkName + '-' + timestamp + '.css');\n              if (CROSS_ORIGIN_LOADING) {\n                link.setAttribute('crossorigin', CROSS_ORIGIN_LOADING);\n              }\n              link.setAttribute('id', 'tru-style');\n              link.setAttribute('rel', 'stylesheet');\n              var head = document.getElementsByTagName('head')[0];\n              head.appendChild(link);\n\n              /* Unloads unused CSS stylesheets, if too many of them are\n               * loaded. */\n              var unused = head.querySelectorAll('link[data-chunk-unused]');\n              if (unused.length > MAX_UNUSED_STYLESHEETS) {\n                var arr = [];\n                unused.forEach(function (x) {\n                  /* eslint-disable no-param-reassign */\n                  x.chunkOrder = Number(x.getAttribute('data-chunk-unused'));\n                  /* eslint-enable no-param-reassign */\n                  arr.push(x);\n                });\n                arr.sort(function (a, b) {\n                  return a.chunkOrder - b.chunkOrder;\n                });\n                arr.slice(0, unused.length - MAX_UNUSED_STYLESHEETS).forEach(function (x) {\n                  return head.removeChild(x);\n                });\n              }\n            }\n\n            /* Checking, whether we need to trigger async rendering process,\n             * as it might be already launched before and we can end up with\n             * a deadlock. We want to re-trigger it only if some props having\n             * impact on the rendering result have been changed. */\n            var shouldReRender = !_this2.pendingRender;\n            if (!shouldReRender) {\n              shouldReRender = _this2.pendingRender !== renderClientAsync;\n              _lodash2.default.forIn(_this2.pendingRenderProps, function (value, key) {\n                shouldReRender = shouldReRender || value !== props[key];\n              });\n            }\n            if (!shouldReRender) return res;\n\n            var renderUUID = (0, _shortid2.default)();\n            _this2.pendingRenderUUID = renderUUID;\n            _this2.pendingRender = renderClientAsync;\n            _this2.pendingRenderProps = props;\n\n            /* Finally, we call the async renderer and once the promise it\n             * returns is resolved, we set the resulting component to the state,\n             * which causes it to be set on this route via \"component\" props,\n             * that has a higher precedence that \"render\". The component is\n             * wrapped by ContentWrapper helper, which takes care about\n             * removing it from the state once it is unmounted, to ensure\n             * that the next time the route is matched, its content will\n             * be re-rendered from scratch. */\n            renderClientAsync(props).then(function (component2) {\n              if (renderUUID !== _this2.pendingRenderUUID) return;\n              _this2.pendingRenderUUID = null;\n              _this2.pendingRender = null;\n              _this2.pendingRenderProps = null;\n              _this2.setState({\n                component: function component() {\n                  return _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_ContentWrapper2.default, {\n                      chunkName: chunkName,\n                      content: component2,\n                      parent: _this2\n                    })\n                  );\n                }\n              });\n            });\n          }\n\n          return res;\n        },\n        strict: strict\n      });\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n  return SplitRoute;\n}(_react2.default.Component);\n\nvar _default = SplitRoute;\nexports.default = _default;\n\n\nSplitRoute.defaultProps = {\n  exact: false,\n  location: null,\n  path: null,\n  renderPlaceholder: null,\n  renderServer: null,\n  strict: false\n};\n\nSplitRoute.propTypes = {\n  chunkName: _propTypes2.default.string.isRequired,\n  exact: _propTypes2.default.bool,\n  location: _propTypes2.default.shape(),\n  path: _propTypes2.default.string,\n  renderClientAsync: _propTypes2.default.func.isRequired,\n  renderPlaceholder: _propTypes2.default.func,\n  renderServer: _propTypes2.default.func,\n  strict: _propTypes2.default.bool\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MAX_UNUSED_STYLESHEETS, 'MAX_UNUSED_STYLESHEETS', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/containers/AppChunk/index.jsx');\n  reactHotLoader.register(unusedCssStamp, 'unusedCssStamp', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/containers/AppChunk/index.jsx');\n  reactHotLoader.register(SplitRoute, 'SplitRoute', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/containers/AppChunk/index.jsx');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/containers/AppChunk/index.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/containers/AppChunk/index.jsx?");

/***/ }),

/***/ "./src/shared/reducers/collection.js":
/*!*******************************************!*\
  !*** ./src/shared/reducers/collection.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"babel-runtime/helpers/defineProperty\");\n\nvar _defineProperty3 = _interopRequireDefault(_defineProperty2);\n\nvar _extends3 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends4 = _interopRequireDefault(_extends3);\n\nvar _redux$handleActions; /**\n                           * Proof-of-concept code. Will be documented once stable. In case of any\n                           * questions before that, feel free to contact `birdofpreyru`.\n                           */\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _collection = __webpack_require__(/*! ../actions/collection */ \"./src/shared/actions/collection.js\");\n\nvar _collection2 = _interopRequireDefault(_collection);\n\nvar _redux = __webpack_require__(/*! ../utils/redux */ \"./src/shared/utils/redux.js\");\n\nvar redux = _interopRequireWildcard(_redux);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n/**\n * Inits, or replaces by its clone, the slot indexed under the specified id.\n * Returns the new slot indexed by that id.\n *\n * BEWARE: It mutates the index.\n *\n * @param {Object} index\n * @param {String} id\n * @return {Object}\n */\nfunction prepare(index, id) {\n  var slot = index[id];\n  slot = slot ? _lodash2.default.clone(slot) : {\n    item: null,\n    loadingOperationId: '',\n    numRefs: 0,\n    timestamp: 0\n  };\n  index[id] = slot; // eslint-disable-line no-param-reassign\n  return slot;\n}\n\nfunction onAddItems(state, action) {\n  var _action$payload = action.payload,\n      index = _action$payload.index,\n      timestamp = _action$payload.timestamp;\n\n  var result = _lodash2.default.clone(state);\n  _lodash2.default.forOwn(index, function (item, id) {\n    var slot = prepare(result, id);\n    slot.timestamp = timestamp;\n    slot.item = item;\n  });\n  return result;\n}\n\nfunction onBookItems(state, _ref) {\n  var _ref$payload = _ref.payload,\n      factor = _ref$payload.factor,\n      ids = _ref$payload.ids;\n\n  var result = _lodash2.default.clone(state);\n  ids.forEach(function (id) {\n    prepare(result, id).numRefs += factor;\n  });\n  return result;\n}\n\nfunction onClean(state, _ref2) {\n  var payload = _ref2.payload;\n\n  var result = _lodash2.default.clone(state);\n  _lodash2.default.forOwn(state, function (item, id) {\n    var slot = state[id];\n    if (slot.numRefs || slot.loadingOperationId || slot.timestamp > payload) return;\n    delete result[id];\n  });\n  return result;\n}\n\nfunction onFreeItems(state, _ref3) {\n  var _ref3$payload = _ref3.payload,\n      factor = _ref3$payload.factor,\n      ids = _ref3$payload.ids;\n\n  var result = _lodash2.default.clone(state);\n  ids.forEach(function (id) {\n    prepare(result, id).numRefs -= factor;\n  });\n  return result;\n}\n\nfunction onLoadItemInit(state, _ref4) {\n  var payload = _ref4.payload;\n  var itemId = payload.itemId,\n      operationId = payload.operationId;\n\n  var result = _lodash2.default.clone(state);\n  var slot = prepare(result, itemId);\n  slot.loadingOperationId = operationId;\n  return result;\n}\n\nfunction onLoadItemDone(state, _ref5) {\n  var payload = _ref5.payload;\n  var item = payload.item,\n      itemId = payload.itemId,\n      operationId = payload.operationId,\n      timestamp = payload.timestamp;\n\n  var slot = state[itemId];\n  if (!slot || slot.loadingOperationId !== operationId) return state;\n  return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, itemId, (0, _extends4.default)({}, slot, {\n    item: item,\n    loadingOperationId: '',\n    timestamp: timestamp\n  })));\n}\n\nvar a = _collection2.default.collection;\n\nvar _default = redux.handleActions((_redux$handleActions = {}, (0, _defineProperty3.default)(_redux$handleActions, a.addItems, onAddItems), (0, _defineProperty3.default)(_redux$handleActions, a.bookItems, onBookItems), (0, _defineProperty3.default)(_redux$handleActions, a.clean, onClean), (0, _defineProperty3.default)(_redux$handleActions, a.freeItems, onFreeItems), (0, _defineProperty3.default)(_redux$handleActions, a.loadItemInit, onLoadItemInit), (0, _defineProperty3.default)(_redux$handleActions, a.loadItemDone, onLoadItemDone), _redux$handleActions), {});\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(prepare, 'prepare', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(onAddItems, 'onAddItems', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(onBookItems, 'onBookItems', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(onClean, 'onClean', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(onFreeItems, 'onFreeItems', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(onLoadItemInit, 'onLoadItemInit', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(onLoadItemDone, 'onLoadItemDone', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(a, 'a', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/collection.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/reducers/collection.js?");

/***/ }),

/***/ "./src/shared/reducers/index.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _collection = __webpack_require__(/*! ./collection */ \"./src/shared/reducers/collection.js\");\n\nvar _collection2 = _interopRequireDefault(_collection);\n\nvar _item = __webpack_require__(/*! ./item */ \"./src/shared/reducers/item.js\");\n\nvar _item2 = _interopRequireDefault(_item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  collection: _collection2.default,\n  item: _item2.default\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/reducers/index.js?");

/***/ }),

/***/ "./src/shared/reducers/item.js":
/*!*************************************!*\
  !*** ./src/shared/reducers/item.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"babel-runtime/helpers/defineProperty\");\n\nvar _defineProperty3 = _interopRequireDefault(_defineProperty2);\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _redux$handleActions; /**\n                           * @module \"reducers.item\"\n                           * @desc Reducer for {@link module:actions.item} actions.\n                           *\n                           * State segment managed by this reducer has the following structure:\n                           * @param {Any} data=null Actual item data.\n                           * @param {Number|String} loadingOperationId=null `null` when no loading\n                           *  operation is happening; unique identifier of the ongoing loading operation\n                           *  otherwise (expected to be a truly value).\n                           * @param {Number} numRefs=0 Number of references to this item from the code.\n                           * @param {Number} timestamp=0 Timestamp of the most recent moment when item\n                           *  data were loaded or set.\n                           */\n\nvar _item = __webpack_require__(/*! ../actions/item */ \"./src/shared/actions/item.js\");\n\nvar _item2 = _interopRequireDefault(_item);\n\nvar _redux = __webpack_require__(/*! ../utils/redux */ \"./src/shared/utils/redux.js\");\n\nvar redux = _interopRequireWildcard(_redux);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction onDropData(state, _ref) {\n  var olderThan = _ref.payload;\n\n  if (state.numRefs > 0 || state.timestamp > olderThan) return state;\n  return (0, _extends3.default)({}, state, { data: null, timestamp: 0 });\n}\n\nfunction onLoadDataInit(state, _ref2) {\n  var loadingOperationId = _ref2.payload;\n\n  return (0, _extends3.default)({}, state, { loadingOperationId: loadingOperationId });\n}\n\nfunction onLoadDataDone(state, action) {\n  var _action$payload = action.payload,\n      data = _action$payload.data,\n      loadingOperationId = _action$payload.loadingOperationId,\n      timestamp = _action$payload.timestamp;\n\n  if (loadingOperationId !== state.loadingOperationId) return state;\n  return (0, _extends3.default)({}, state, {\n    data: data,\n    loadingOperationId: null,\n    timestamp: timestamp\n  });\n}\n\nfunction onSetData(state, _ref3) {\n  var payload = _ref3.payload;\n\n  return (0, _extends3.default)({}, state, payload);\n}\n\nfunction onUpdateReferenceCounter(state, _ref4) {\n  var shift = _ref4.payload;\n\n  var numRefs = state.numRefs + shift;\n  return (0, _extends3.default)({}, state, { numRefs: numRefs });\n}\n\nvar a = _item2.default.item;\n\nvar _default = redux.handleActions((_redux$handleActions = {}, (0, _defineProperty3.default)(_redux$handleActions, a.dropData, onDropData), (0, _defineProperty3.default)(_redux$handleActions, a.loadDataInit, onLoadDataInit), (0, _defineProperty3.default)(_redux$handleActions, a.loadDataDone, onLoadDataDone), (0, _defineProperty3.default)(_redux$handleActions, a.setData, onSetData), (0, _defineProperty3.default)(_redux$handleActions, a.updateReferenceCounter, onUpdateReferenceCounter), _redux$handleActions), {\n  data: null,\n  loadingOperationId: null,\n  numRefs: 0,\n  timestamp: 0\n});\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(onDropData, 'onDropData', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/item.js');\n  reactHotLoader.register(onLoadDataInit, 'onLoadDataInit', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/item.js');\n  reactHotLoader.register(onLoadDataDone, 'onLoadDataDone', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/item.js');\n  reactHotLoader.register(onSetData, 'onSetData', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/item.js');\n  reactHotLoader.register(onUpdateReferenceCounter, 'onUpdateReferenceCounter', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/item.js');\n  reactHotLoader.register(a, 'a', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/item.js');\n  reactHotLoader.register(_default, 'default', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/reducers/item.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/reducers/item.js?");

/***/ }),

/***/ "./src/shared/utils/config.js":
/*!************************************!*\
  !*** ./src/shared/utils/config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _isomorphy = __webpack_require__(/*! ./isomorphy */ \"./src/shared/utils/isomorphy.js\");\n\nvar _webpack = __webpack_require__(/*! ./webpack */ \"./src/shared/utils/webpack/index.js\");\n\n/* eslint-disable global-require */\n// console.log('IS CLIENT SIDE', isClientSide());\n/**\n * This module provides isomorphic configuration. At the client-side it serves\n * cofiguration object from the global CONFIG variable, injected into the page\n * during the server-side rendering; at the server side it is fetched directly\n * from node-config.\n */\n\n/* global window */\n\nmodule.exports = (0, _isomorphy.isClientSide)() ? window.CONFIG : (0, _webpack.requireWeak)('config');\n/* eslint-enable global-require */\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/utils/config.js?");

/***/ }),

/***/ "./src/shared/utils/index.js":
/*!***********************************!*\
  !*** ./src/shared/utils/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.webpack = exports.redux = exports.JU = exports.isomorphy = exports.config = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/shared/utils/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _isomorphy = __webpack_require__(/*! ./isomorphy */ \"./src/shared/utils/isomorphy.js\");\n\nvar isomorphy = _interopRequireWildcard(_isomorphy);\n\nvar _redux = __webpack_require__(/*! ./redux */ \"./src/shared/utils/redux.js\");\n\nvar redux = _interopRequireWildcard(_redux);\n\nvar _webpack = __webpack_require__(/*! ./webpack */ \"./src/shared/utils/webpack/index.js\");\n\nvar webpack = _interopRequireWildcard(_webpack);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar juUrl = isomorphy.isProdBuild() ? 'prod' : 'dev';\njuUrl = 'topcoder-react-utils/dist/' + juUrl + '/shared/utils/jest';\n\nvar JU = isomorphy.isServerSide() ? webpack.requireWeak(juUrl) : null;\n\nexports.config = _config2.default;\nexports.isomorphy = isomorphy;\nexports.JU = JU;\nexports.redux = redux;\nexports.webpack = webpack;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(juUrl, 'juUrl', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/index.js');\n  reactHotLoader.register(JU, 'JU', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/utils/index.js?");

/***/ }),

/***/ "./src/shared/utils/isomorphy.js":
/*!***************************************!*\
  !*** ./src/shared/utils/isomorphy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isClientSide = isClientSide;\nexports.isServerSide = isServerSide;\nexports.isDevBuild = isDevBuild;\nexports.isProdBuild = isProdBuild;\nexports.buildTimestamp = buildTimestamp;\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n/**\n * Collection of helpers to deal with isomorphic aspects of the code.\n */\n\n/* global window */\n\n/**\n * Returns `true` when executed at the front end side; `false` otherwise.\n * @return {Boolean}\n */\nfunction isClientSide() {\n  return typeof window !== 'undefined' && Boolean(window.TRU_FRONT_END);\n}\n\n/**\n * Returns `true` if executed at the server side; `false` otherwise.\n * @return {Boolean}\n */\nfunction isServerSide() {\n  return typeof window === 'undefined' || !window.TRU_FRONT_END;\n}\n\n/**\n * @return {String} Code mode: \"development\" or \"production\".\n */\nfunction getMode() {\n  return \"development\";\n}\n\n/**\n * Returns `true` if development version of the code is running;\n * `false` otherwise.\n * @return {Boolean}\n */\nfunction isDevBuild() {\n  return getMode() === 'development';\n}\n\n/**\n * Returns `true` if production build of the code is running;\n * `false` otherwise.\n * @return {Boolean}\n */\nfunction isProdBuild() {\n  return getMode() === 'production';\n}\n\n/**\n * Returns build timestamp of the front-end JS bundle.\n * @return {String} ISO date/time string.\n */\nfunction buildTimestamp() {\n  return (isClientSide() ? window : global).TRU_BUILD_INFO.timestamp;\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isClientSide, 'isClientSide', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/isomorphy.js');\n  reactHotLoader.register(isServerSide, 'isServerSide', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/isomorphy.js');\n  reactHotLoader.register(getMode, 'getMode', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/isomorphy.js');\n  reactHotLoader.register(isDevBuild, 'isDevBuild', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/isomorphy.js');\n  reactHotLoader.register(isProdBuild, 'isProdBuild', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/isomorphy.js');\n  reactHotLoader.register(buildTimestamp, 'buildTimestamp', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/isomorphy.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/utils/isomorphy.js?");

/***/ }),

/***/ "./src/shared/utils/redux.js":
/*!***********************************!*\
  !*** ./src/shared/utils/redux.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.storeFactory = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"babel-runtime/helpers/asyncToGenerator\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"babel-runtime/core-js/promise\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"babel-runtime/helpers/defineProperty\");\n\nvar _defineProperty3 = _interopRequireDefault(_defineProperty2);\n\nvar _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ \"babel-runtime/core-js/object/keys\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"babel-runtime/core-js/object/assign\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\n/**\n * Creates a new Redux store.\n * @param {Function} getReducerFactory Function that returns reducer factory.\n *  For HMR to work, it should require the JS module of the factory each time it\n *  is called.\n * @param {Object} httpRequest Optional. ExpressJS HTTP request. It should be\n *  passed in at the server side to support server-side rendering.\n * @param {Object} intialState Optional. Initial state of Redux store. It should\n *  be passed in at the client side to support server-side rendering.\n * @param {Object} moduleHot Optional. `module.hot` object from the module that\n *  imports storeFactory(..).\n * @param {Object} reducerFactoryModulePath Optional. Path of the root module of\n *  the reducer factory. It is necessary for proper HMR support.\n * @return {Promise} Resolves to the new Redux store.\n */\nvar storeFactory = exports.storeFactory = function () {\n  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref2) {\n    var _this = this;\n\n    var getReducerFactory = _ref2.getReducerFactory,\n        httpRequest = _ref2.httpRequest,\n        initialState = _ref2.initialState,\n        moduleHot = _ref2.moduleHot,\n        reducerFactoryModulePath = _ref2.reducerFactoryModulePath;\n    var reducer, enhancer, store;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getReducerFactory()(httpRequest);\n\n          case 2:\n            reducer = _context2.sent;\n            enhancer = (0, _redux.applyMiddleware)(_reduxPromise2.default);\n\n            if ((0, _isomorphy.isDevBuild)()) enhancer = (0, _redux.compose)(enhancer, _DevTools2.default.instrument());\n            store = (0, _redux.createStore)(reducer, initialState || {}, enhancer);\n\n            if (moduleHot && reducerFactoryModulePath) {\n              moduleHot.accept(reducerFactoryModulePath, (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n                var newReducer;\n                return _regenerator2.default.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return getReducerFactory()();\n\n                      case 2:\n                        newReducer = _context.sent;\n\n                        store.replaceReducer(newReducer);\n\n                      case 4:\n                      case 'end':\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, _this);\n              })));\n            }\n            return _context2.abrupt('return', store);\n\n          case 8:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function storeFactory(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nexports.combineReducers = combineReducers;\nexports.proxyAction = proxyAction;\nexports.proxyReducer = proxyReducer;\nexports.resolveAction = resolveAction;\nexports.resolveReducers = resolveReducers;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _DevTools = __webpack_require__(/*! ../components/DevTools */ \"./src/shared/components/DevTools.jsx\");\n\nvar _DevTools2 = _interopRequireDefault(_DevTools);\n\nvar _reduxPromise = __webpack_require__(/*! redux-promise */ \"redux-promise\");\n\nvar _reduxPromise2 = _interopRequireDefault(_reduxPromise);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxActions = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _isomorphy = __webpack_require__(/*! ./isomorphy */ \"./src/shared/utils/isomorphy.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})(); /**\n       * Redux-related helpers.\n       */\n\n/* Auxiliary aliases. */\nmodule.exports.connect = _reactRedux.connect;\nmodule.exports.createActions = _reduxActions.createActions;\nmodule.exports.handleActions = _reduxActions.handleActions;\n\n/**\n * Reduce multiple reducers into a single reducer from left to right.\n * Function-type reducers will be called directly with current state, and action\n * Object type reducers (eg: `{submissions: (state, action) => {}}`)\n *   will be called with the state's slice corresponding to object's key\n *   eg: `{submissions}` will be called with `submissions(state.submissions, action)`\n *\n * @params {function|Object} the reducers to be combined\n * @return function the unified reducer\n */\n/* TODO: Can we simplify this function? */\nfunction combineReducers() {\n  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {\n    reducers[_key] = arguments[_key];\n  }\n\n  return function (state, action) {\n    var nextState = {};\n    var mergeState = _assign2.default.bind(Object, nextState);\n\n    reducers.forEach(function (reducer) {\n      if (typeof reducer === 'function') {\n        return mergeState(reducer(state, action));\n      }\n\n      (0, _keys2.default)(reducer).forEach(function (slice) {\n        mergeState((0, _defineProperty3.default)({}, slice, reducer[slice]((state || {})[slice], action)));\n      });\n      return undefined;\n    });\n\n    return nextState;\n  };\n}\n\n/**\n * Helps to proxy actions. This function has two modes:\n *\n * 1. **When no `action` is given:** it re-generates payload creator used by\n *    `actionCreator`; i.e. it returns a function that passes its arguments\n *    to the given `actionCreator`, and then returns `payload` of the\n *    created action.\n *\n * 2. **When `action` is given:** it returns a copy of `action` with its type\n *    replaced by the type of `actionCreator`.\n *\n * @param {Function} actionCreator Creator of the proxied action. It is assumed\n *  that it creates a Flux Standard Action.\n * @param {Action} action Optional. Action to map.\n * @return {Function|Action} Payload creator, or the mapped action.\n */\nfunction proxyAction(actionCreator, action) {\n  if (action) return (0, _extends3.default)({}, action, { type: actionCreator.toString() });\n  return function () {\n    return actionCreator.apply(undefined, arguments).payload;\n  };\n}\n\n/**\n * Wraps given reducer with a piece of code that changes the type of incoming\n * action to the type of action created by the given `actionCreator`.\n * @param {Function} reducer\n * @param {Function} actionCreator\n * @return {Reducer}\n */\nfunction proxyReducer(reducer, actionCreator) {\n  return function (state, action) {\n    return reducer(state, proxyAction(actionCreator, action));\n  };\n}\n\n/**\n * Given any Flux Standard Action (FSA) with promise as the payload, it returns\n * a promise which resolves into the FSA result object.\n * @param {Object} action\n * @return Promise which resolves to the operation result.\n */\nfunction resolveAction(action) {\n  return action.payload.then(function (data) {\n    return (0, _extends3.default)({}, action, {\n      payload: data\n    });\n  }, function (error) {\n    return (0, _extends3.default)({}, action, {\n      payload: error,\n      error: true\n    });\n  });\n}\n\n/**\n * Given a mapping between reducer names and their promises, this function\n * waits till resolution of all promises and returns the mapping between\n * reducer names and the resolved reducers.\n * @param {Object} promises Object with promises of reducers.\n * @return Object with reducers.\n */\nfunction resolveReducers(promises) {\n  return _promise2.default.all(_lodash2.default.values(promises)).then(function (reducers) {\n    var map = {};\n    _lodash2.default.keys(promises).forEach(function (key, index) {\n      map[key] = reducers[index];\n    });\n    return map;\n  });\n};\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(combineReducers, 'combineReducers', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/redux.js');\n  reactHotLoader.register(proxyAction, 'proxyAction', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/redux.js');\n  reactHotLoader.register(proxyReducer, 'proxyReducer', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/redux.js');\n  reactHotLoader.register(resolveAction, 'resolveAction', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/redux.js');\n  reactHotLoader.register(resolveReducers, 'resolveReducers', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/redux.js');\n  reactHotLoader.register(storeFactory, 'storeFactory', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/redux.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/utils/redux.js?");

/***/ }),

/***/ "./src/shared/utils/webpack/index.js":
/*!*******************************************!*\
  !*** ./src/shared/utils/webpack/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.requireWeak = requireWeak;\nexports.resolveWeak = resolveWeak;\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n/**\n * Requires the specified module without including it into the bundle during\n * Webpack build. This function should be executed only server-side.\n *\n * WARNING: Beware to pass in relative paths: they will be resolved relative\n *  to the library distribution function, this is not what you want in most of\n *  cases. To convert a relative path to the absolute one, do in the caller code\n *  ```\n *  import path from 'path';\n *  const p = path.resolve(__dirname, './relative/path');\n *  const module = requireWeak(p);\n *  ```\n *  In case you use an absolute path that relies on Babel module resolver,\n *  pass it through resolveWeak function below.\n *\n * @param {String} modulePath\n * @return Required module.\n */\nfunction requireWeak(modulePath) {\n  /* eslint-disable global-require, import/no-dynamic-require */\n  var mod = __webpack_require__(/*! ./require */ \"./src/shared/utils/webpack/require.js\")(modulePath);\n  /* eslint-enable global-require, import/no-dynamic-require */\n  return mod.default || mod;\n}\n\n/**\n * Resolves specified module path with help of Babel's module resolver.\n * Yes, the function itself just returns its argument to the caller, but Babel\n * is configured to resolve the first argument of resolveWeak(..) function, thus\n * the result will be the resolved path.\n * @param {String} modulePath\n * @return {String} Absolute or relative path to the module.\n */\nfunction resolveWeak(modulePath) {\n  return modulePath;\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(requireWeak, 'requireWeak', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/webpack/index.js');\n  reactHotLoader.register(resolveWeak, 'resolveWeak', '/home/jmgasper/Documents/Git/topcoder-react-utils/src/shared/utils/webpack/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/utils/webpack/index.js?");

/***/ }),

/***/ "./src/shared/utils/webpack/require.js":
/*!*********************************************!*\
  !*** ./src/shared/utils/webpack/require.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\"use strict\";\n\n/**\n * This helper module is a part of requireWeak(..) implementation. Webpack is\n * configured to ignore this file, thus the code:\n *\n * const m = require('utils/router/require')('my-module-path');\n *\n * will load the module at the specified path, when exectuted at the server\n * side, and will crush, if executed at the client side. Though, the crush at\n * the client side can be easily prevented by adding condition:\n *\n * import { isServerSide } from 'utils/isomorphy';\n *\n * if (isServerSide()) {\n *   const m = require('utils/router/require')('my-module-path');\n *   // Some client-side only code.\n * }\n *\n * The key point here is that the module at 'my-module-path' will not be bundled\n * by Webpack if required this way. Thus, this way we can use static resolution\n * of the module at the server-side, while using alternative code at the client\n * side (dynamic module loading from the server).\n */\n\n/* eslint-disable global-require */\n/* eslint-disable import/no-dynamic-require */\n\nmodule.exports = require;\n\n//# sourceURL=webpack://topcoder-react-utils/./src/shared/utils/webpack/require.js?");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://topcoder-react-utils/./src/styles/global.scss?");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_object_assign__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/core-js/object/assign%22?");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_object_get_prototype_of__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/core-js/object/get-prototype-of%22?");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/*!****************************************************!*\
  !*** external "babel-runtime/core-js/object/keys" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_object_keys__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/core-js/object/keys%22?");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_core_js_promise__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/core-js/promise%22?");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_asyncToGenerator__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_classCallCheck__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_createClass__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/helpers/createClass%22?");

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/defineProperty" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_defineProperty__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_extends__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/helpers/extends%22?");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_inherits__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/helpers/inherits%22?");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_helpers_possibleConstructorReturn__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_regenerator__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22lodash%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22moment%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react%22?");

/***/ }),

/***/ "react-css-super-themr":
/*!****************************************!*\
  !*** external "react-css-super-themr" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_css_super_themr__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react-css-super-themr%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react-helmet%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_hot_loader__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22redux%22?");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux_actions__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22redux-actions%22?");

/***/ }),

/***/ "redux-devtools":
/*!*********************************!*\
  !*** external "redux-devtools" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux_devtools__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22redux-devtools%22?");

/***/ }),

/***/ "redux-devtools-dock-monitor":
/*!**********************************************!*\
  !*** external "redux-devtools-dock-monitor" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux_devtools_dock_monitor__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22redux-devtools-dock-monitor%22?");

/***/ }),

/***/ "redux-devtools-log-monitor":
/*!*********************************************!*\
  !*** external "redux-devtools-log-monitor" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux_devtools_log_monitor__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22redux-devtools-log-monitor%22?");

/***/ }),

/***/ "redux-promise":
/*!********************************!*\
  !*** external "redux-promise" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux_promise__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22redux-promise%22?");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_shortid__;\n\n//# sourceURL=webpack://topcoder-react-utils/external_%22shortid%22?");

/***/ })

/******/ });
});