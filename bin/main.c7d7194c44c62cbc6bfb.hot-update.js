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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStart: () => (/* binding */ createStart),\n/* harmony export */   dragItemOver: () => (/* binding */ dragItemOver),\n/* harmony export */   dragItemStart: () => (/* binding */ dragItemStart),\n/* harmony export */   dropItem: () => (/* binding */ dropItem),\n/* harmony export */   dropTag: () => (/* binding */ dropTag),\n/* harmony export */   enterContainer: () => (/* binding */ enterContainer),\n/* harmony export */   leaveContainer: () => (/* binding */ leaveContainer)\n/* harmony export */ });\n/* harmony import */ var _constructeur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructeur */ \"./src/utils/constructeur.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar dragEnterCounter = false;\nfunction createStart(value) {\n  // un élément tiré de l'ensemble des balises\n\n  console.log(\"Start \", value);\n  return {\n    tag: value,\n    source: \"tags\"\n  };\n}\nfunction dropTag(item, container) {\n  if (item.source === \"tags\") {\n    container.push((0,_constructeur__WEBPACK_IMPORTED_MODULE_0__.modelCreate)(item.tag));\n  }\n}\nfunction dragItemStart(container, id) {\n  var src = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  var drag = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(src, id);\n  return [src, drag];\n}\nfunction dragItemOver(container, id) {\n  var sink = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  console.log(\"Over leave: \", sink, \" id: \", id);\n  return sink;\n}\nfunction dropItem(containers, id, drag) {\n  dragEnterCounter = 0;\n  var source = containers.source,\n    sink = containers.sink;\n  var dragItem = drag;\n  var dropItem = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(sink, id);\n  console.log(\"Sinkkkk \", sink, \" id: \", id, \" drop \", dropItem);\n  if (dropItem.children !== undefined && id != \"temp\") sink = dropItem.children;\n  if (dragItem === dropItem) return false;\n  console.log(\"Drop: \", dropItem);\n  if (source === sink) {\n    console.log(\"Meme source\");\n    var dragIndex = source.indexOf(dragItem);\n    var dropIndex = source.indexOf(dropItem);\n    if (dragIndex !== dropIndex) {\n      var _source$splice = source.splice(dragIndex, 1),\n        _source$splice2 = _slicedToArray(_source$splice, 1),\n        removedItem = _source$splice2[0]; // Supprimer l'élément de sa position actuelle\n      source.splice(dropIndex, 0, removedItem); // Insérer l'élément à la nouvelle position\n    }\n  } else {\n    console.log(\"Source différente\");\n    sink.pop(); // pour supprimer la div temporaire\n    if (dragItem.source) sink.push((0,_constructeur__WEBPACK_IMPORTED_MODULE_0__.modelCreate)(dragItem.tag));else {\n      var _dragIndex = source.indexOf(dragItem);\n      var _source$splice3 = source.splice(_dragIndex, 1),\n        _source$splice4 = _slicedToArray(_source$splice3, 1),\n        _removedItem = _source$splice4[0];\n      sink.push(_removedItem);\n    }\n  }\n  source = null;\n  sink = null;\n  dnd.drag = null;\n  return {};\n}\nfunction enterContainer(container, id, dnd) {\n  var sink = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  if (id !== \"temp\") {\n    dragEnterCounter = true;\n    console.log(\"Enter \", dragEnterCounter);\n    console.log(\"Dans un container tempco\", container);\n    dnd.drop = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(sink, id);\n\n    // if (dnd.drop.children) sink = dnd.drop.children; // si l'on est dans un sous-conteneur on ajoute au contenu de ce dernier\n\n    if (dnd.drop && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.shouldCreateTempDiv)(dnd.drag, dnd.drop, dnd.drop.children)) {\n      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createTempDiv)(dnd.drop.children);\n    }\n    console.log(\"Voici sink \", sink);\n  }\n  return sink;\n}\nfunction leaveContainer(container, containers, id) {\n  if (id !== \"temp\") dragEnterCounter = false;\n  var containerLeft = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  var eltLeft = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(containerLeft, id);\n  console.log(\"I leave \", id, \" tempco \", dragEnterCounter, \" sink \", containers.sink, \" left \", containerLeft);\n  if (!dragEnterCounter && containers.sink === containerLeft && id !== \"temp\") {\n    console.log(\"Leave \", eltLeft.children);\n    if (eltLeft.children[eltLeft.children.length - 1].attributs.id == \"temp\") {\n      eltLeft.children.pop();\n    }\n  }\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/dnd.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c7ee4c81ac0550bbcae2")
/******/ })();
/******/ 
/******/ }
);