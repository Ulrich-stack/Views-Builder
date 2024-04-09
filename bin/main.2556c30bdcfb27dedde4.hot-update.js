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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Page: () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\n/* harmony import */ var _components_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/viewer */ \"./src/components/viewer.js\");\n\n\n\nvar Page = {\n  view: function view(vnode) {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-8/12 overflow-y-scroll overflow-x-hidden\",\n      ondragenter: function ondragenter(e) {\n        vnode.attrs.dnd.drop = vnode.attrs.container;\n        vnode.attrs.conta = vnode.attrs.container;\n        console.log(vnode.attrs.dnd);\n      },\n      ondragover: function ondragover(e) {\n        return e.preventDefault();\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropTag)(vnode.attrs.dnd.drag, vnode.attrs.container);\n        vnode.attrs.dnd = {\n          drag: null,\n          drop: null\n        };\n      }\n    }, vnode.attrs.container.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_viewer__WEBPACK_IMPORTED_MODULE_2__.Viewer, {\n        component: item\n      });\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/parts/page.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dd3a70fcc9063c48c219")
/******/ })();
/******/ 
/******/ }
);