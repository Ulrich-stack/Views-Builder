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

/***/ "./src/components/tags.js":
/*!********************************!*\
  !*** ./src/components/tags.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tags: () => (/* binding */ Tags)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\n\n\nvar Tags = {\n  oninit: function oninit(vnode) {\n    vnode.state.showTypes = [false, false, false];\n  },\n  view: function view(vnode) {\n    var types = [\"simple\", \"container\", \"widgets\"];\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-2/12 border bg-[#262626] text-white overflow-auto\"\n    }, types.map(function (type, indexType) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n        className: \"flex justify-between items-center w-full p-2 border hover:cursor-pointer hover:bg-[#363636] border-gray-300\",\n        onclick: function onclick(e) {\n          console.log(vnode.state.showTypes[indexType]);\n          vnode.state.showTypes[indexType] = !vnode.state.showTypes[indexType];\n        }\n      }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span\", null, type), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"i\", {\n        className: \"fa-solid fa-chevron-left text-xs $\"\n      })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__.map(function (item) {\n        return vnode.state.showTypes[indexType] && item.type === type && mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n          className: \"p-2\",\n          draggable: true\n        }, item.value);\n      })));\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/components/tags.js?");

/***/ }),

/***/ "./assets/tags.json":
/*!**************************!*\
  !*** ./assets/tags.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":\"hx\",\"value\":\"hx\",\"type\":\"simple\"},{\"id\":\"hr\",\"value\":\"hr\",\"type\":\"simple\"},{\"id\":\"img\",\"value\":\"img\",\"type\":\"simple\"},{\"id\":\"span\",\"value\":\"span\",\"type\":\"simple\"},{\"id\":\"radio\",\"value\":\"radio\",\"type\":\"simple\"},{\"id\":\"label\",\"value\":\"label\",\"type\":\"simple\"},{\"id\":\"icon\",\"value\":\"icon\",\"type\":\"simple\"},{\"id\":\"input\",\"value\":\"input\",\"type\":\"simple\"},{\"id\":\"button\",\"value\":\"button\",\"type\":\"simple\"},{\"id\":\"select\",\"value\":\"select\",\"type\":\"simple\"},{\"id\":\"textarea\",\"value\":\"textarea\",\"type\":\"simple\"},{\"id\":\"nav\",\"value\":\"nav\",\"type\":\"container\"},{\"id\":\"tag\",\"value\":\"tag\",\"type\":\"container\"},{\"id\":\"link\",\"value\":\"link\",\"type\":\"container\"},{\"id\":\"list\",\"value\":\"list\",\"type\":\"container\"},{\"id\":\"form\",\"value\":\"form\",\"type\":\"container\"},{\"id\":\"group\",\"value\":\"group\",\"type\":\"container\"},{\"id\":\"table\",\"value\":\"table\",\"type\":\"container\"},{\"id\":\"accordion\",\"value\":\"accordion\",\"type\":\"container\"},{\"id\":\"dropdown\",\"value\":\"dropdown\",\"type\":\"container\"},{\"id\":\"paragraph\",\"value\":\"paragraph\",\"type\":\"container\"},{\"id\":\"outlet\",\"value\":\"outlet\",\"type\":\"widgets\"},{\"id\":\"wizard\",\"value\":\"wizard\",\"type\":\"widgets\"},{\"id\":\"treeview\",\"value\":\"treeview\",\"type\":\"widgets\"},{\"id\":\"carousel\",\"value\":\"carousel\",\"type\":\"widgets\"},{\"id\":\"display\",\"value\":\"display\",\"type\":\"widgets\"}]');\n\n//# sourceURL=webpack://dnd2.0/./assets/tags.json?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0ea9c42f3c915ecd895")
/******/ })();
/******/ 
/******/ }
);