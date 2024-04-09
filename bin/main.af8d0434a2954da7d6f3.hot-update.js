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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tags: () => (/* binding */ Tags)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\nfunction _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\nvar Tags = {\n  view: function view() {\n    var types = [\"simple\", \"container\", \"widgets\"];\n    var showTypes = types.map(function () {\n      return false;\n    });\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-2/12 border bg-[#262626] text-white\"\n    }, types.map(function (type, indexType) {\n      var showType = showTypes[indexType];\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()('[', null, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n        className: \"w-full p-2 border-b hover:cursor-pointer hover:bg-[#363636] border-gray-300\",\n        onClick: function onClick() {\n          return !showType, _readOnlyError(\"showType\");\n        }\n      }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span\", null, type)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__.map(function (item) {\n        return item.type === type && mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, item.value);\n      })));\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/components/tags.js?");

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
/******/ 	__webpack_require__.h = () => ("4665161b255d18915917")
/******/ })();
/******/ 
/******/ }
);