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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tags: () => (/* binding */ Tags)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\nfunction _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\nvar Tags = {\n  view: function view() {\n    var types = [\"simple\", \"container\", \"widgets\"];\n    var showTypes = types.map(function () {\n      return false;\n    });\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-2/12 border bg-[#262626] text-white\"\n    }, types.map(function (type, indexType) {\n      var showType = showTypes[indexType];\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()('[', null, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n        className: \"w-full p-2 border-b hover:cursor-pointer hover:bg-[#363636] border-gray-300\",\n        onClick: function onClick() {\n          !showType, _readOnlyError(\"showType\");\n        }\n      }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span\", null, type)), showType && mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__.map(function (item) {\n        return item.type === type && mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, item.value);\n      })));\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/components/tags.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf68731b2dc47bb670e9")
/******/ })();
/******/ 
/******/ }
);