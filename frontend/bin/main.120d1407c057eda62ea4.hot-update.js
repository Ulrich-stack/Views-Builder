"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatednd2_0"]("main",{

/***/ "./src/parts/page.js":
/*!***************************!*\
  !*** ./src/parts/page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Page: () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\n/* harmony import */ var _components_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/viewer */ \"./src/components/viewer.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar Page = {\n  view: function view(vnode) {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-8/12 overflow-y-scroll overflow-x-hidden\",\n      ondragenter: function ondragenter(e) {\n        vnode.attrs.dnd.drop = vnode.attrs.container;\n        vnode.attrs.containers.sink = vnode.attrs.container;\n        console.log(vnode.attrs.dnd);\n      },\n      ondragover: function ondragover(e) {\n        return e.preventDefault();\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropTag)(vnode.attrs.dnd.drag, vnode.attrs.container);\n        vnode.attrs.dnd = {\n          drag: null,\n          drop: null\n        };\n      }\n    }, vnode.attrs.container.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_viewer__WEBPACK_IMPORTED_MODULE_2__.Viewer, _defineProperty(_defineProperty({\n        component: item,\n        containers: vnode.attrs.container\n      }, \"containers\", vnode.attrs.containers), \"dnd\", vnode.attrs.dnd));\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/parts/page.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("73be128d4d9d39be0b2b")
/******/ })();
/******/ 
/******/ }
);