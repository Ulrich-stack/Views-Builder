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

/***/ "./src/utils/dnd.js":
/*!**************************!*\
  !*** ./src/utils/dnd.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStart: () => (/* binding */ createStart),\n/* harmony export */   dragItemOver: () => (/* binding */ dragItemOver),\n/* harmony export */   dragItemStart: () => (/* binding */ dragItemStart),\n/* harmony export */   dropItem: () => (/* binding */ dropItem),\n/* harmony export */   dropTag: () => (/* binding */ dropTag)\n/* harmony export */ });\n/* harmony import */ var _constructeur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructeur */ \"./src/utils/constructeur.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\n\n\n\nfunction createStart(value) {\n  // un élément tiré de l'ensemble des balises\n\n  console.log(\"Start \", value);\n  return {\n    tag: value,\n    source: \"tags\"\n  };\n}\nfunction dropTag(item, container) {\n  if (item.source === \"tags\") {\n    container.push((0,_constructeur__WEBPACK_IMPORTED_MODULE_0__.modelCreate)(item.tag));\n  }\n}\nfunction dragItemStart(container, id) {\n  var src = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  var drag = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(src, id);\n  return [src, drag];\n}\nfunction dragItemOver(container, id, source, drag) {\n  var sink = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  return sink;\n}\nfunction dropItem(container, source, sink, id) {\n  var items = {\n    dragItem: drag,\n    dropItem: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(sink, id)\n  };\n  if (source === sink) {\n    var indexs = {\n      dragIndex: source.findIndex(items.drag),\n      dropIndex: sink.findIndex(items.drop)\n    };\n    insertionIdx = indexs.dragIndex < indexs.dropIndex ? indexs.dropIndex + 1 : indexs.dropIndex;\n    deletionIdx = indexs.dragIndex > indexs.dropIndex ? indexs.dr + 1 : draggedIdx;\n  }\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/dnd.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("19998e2568ca355daf83")
/******/ })();
/******/ 
/******/ }
);