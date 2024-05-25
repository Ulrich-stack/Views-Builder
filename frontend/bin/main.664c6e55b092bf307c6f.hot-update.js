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

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTempDiv: () => (/* binding */ createTempDiv),\n/* harmony export */   getEltById: () => (/* binding */ getEltById),\n/* harmony export */   getParentById: () => (/* binding */ getParentById),\n/* harmony export */   shouldCreateTempDiv: () => (/* binding */ shouldCreateTempDiv)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction getParentById(ct, id) {\n  var c, re;\n  console.log(\"getParent \");\n  console.log(ct);\n  var _iterator = _createForOfIteratorHelper(ct),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      c = _step.value;\n      console.log(\"e= \" + c.attributs.id + \"id=\" + id);\n      console.log(c);\n      if (c.attributs.id == id) return ct;else if (c.children) if ((re = getParentById(c.children, id)) != null) return re;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return null;\n}\nfunction getEltById(ct, id) {\n  var i;\n  var _iterator2 = _createForOfIteratorHelper(ct),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      i = _step2.value;\n      if (i.attributs.id == id) return i;\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}\nfunction shouldCreateTempDiv(dragItem, dropTarget, dropTargetContainer) {\n  //   if (dragItem === dropTarget) return false;\n  console.log(\"droptargetcontainer\", dropTarget, \" dragItem \", dragItem, \"index dragItem \", dropTarget.children.indexOf(dragItem));\n  if (getEltById(dropTargetContainer, \"temp\")) return false;\n  if (dragItem.children && getParentById(dragItem.children, dropTarget.id)) return false;\n  if (dropTarget.children.indexOf(dragItem) !== -1) return false;\n  if (dragItem === dropTarget) return false;\n  return true;\n}\nfunction createTempDiv(container) {\n  var tempDivAttributes = {\n    id: \"temp\",\n    style: \"width: 100%; height: 50px; border: 1px dotted black; border-radius: 20px; margin-bottom: 10px;\"\n  };\n  container.push({\n    type: \"group\",\n    attributs: tempDivAttributes,\n    children: []\n  });\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/utils.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c3f9128d022353f33061")
/******/ })();
/******/ 
/******/ }
);