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

/***/ "./src/componentsFactory/hx.js":
/*!*************************************!*\
  !*** ./src/componentsFactory/hx.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar hx = {\n  view: function view(vnode) {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(vnode.attrs.component.attributs.balise, {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true,\n      ondragstart: function ondragstart(e) {\n        e.stopPropagation();\n        var _dragItemStart = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemStart)(vnode.attrs.container, vnode.attrs.component.attributs.id),\n          _dragItemStart2 = _slicedToArray(_dragItemStart, 2),\n          src = _dragItemStart2[0],\n          drag = _dragItemStart2[1];\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.containers.source = src;\n        console.log(\"Item \", drag, \" source \", src);\n      },\n      ondragover: function ondragover(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        vnode.attrs.containers.sink = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemOver)(vnode.attrs.container, vnode.attrs.component.attributs.id);\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        console.log(\"drop \", vnode.attrs.dnd.drag);\n        var _dropItem = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem)(vnode.attrs.containers, vnode.attrs.component.attributs.id, vnode.attrs.dnd.drag),\n          source = _dropItem.source,\n          sink = _dropItem.sink,\n          drag = _dropItem.drag;\n        vnode.attrs.containers.source = source;\n        vnode.attrs.containers.sink = sink;\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.dnd.drop = null;\n      },\n      onclick: function onclick(e) {\n        e.preventDefault();\n        vnode.attrs.eltClicked = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.handleComponentClicked)(vnode.attrs.container, vnode.attrs.component.attributs.id);\n        console.log(vnode.attrs.eltClicked);\n      }\n    }, vnode.attrs.component.attributs.value);\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/componentsFactory/hx.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d2876a01a01ba07f797c")
/******/ })();
/******/ 
/******/ }
);