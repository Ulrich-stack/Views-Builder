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

/***/ "./src/utils/constructeur.js":
/*!***********************************!*\
  !*** ./src/utils/constructeur.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modelCreate: () => (/* binding */ modelCreate)\n/* harmony export */ });\nfunction _defineAccessor(e, r, n, t) { var c = { configurable: !0, enumerable: !0 }; return c[e] = t, Object.defineProperty(r, n, c); }\nvar count = 0;\nfunction styleFormat(st) {\n  var key = Object.keys(st);\n  var result = \"\";\n  key.map(function (item) {\n    if (item != \"\") result += item + \" : \" + st[item] + \";\";\n  });\n  return result;\n}\nfunction modelCreate(tag) {\n  if (tag == \"span\") {\n    count++;\n    return {\n      type: \"span\",\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"span\" + count,\n        title: \"\",\n        myStyle: {\n          \"font-family\": \" Times New Roman\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        onclick: \" CODE\",\n        value: \"Span \" + count\n      }\n    };\n  } else if (tag == \"hx\") {\n    count++;\n    return {\n      type: \"hx\",\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"hx\" + count,\n        title: \"\",\n        xparam: \"\",\n        get balise() {\n          return \"h\" + this.xparam;\n        },\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Titre \" + count\n      }\n    };\n  } else if (tag == \"hr\") {\n    count++;\n    return {\n      type: \"hr\",\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"hr\" + count,\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (tag == \"icon\") {\n    count++;\n    return {\n      type: \"icon\",\n      attributs: {\n        id: count,\n        \"class\": \"fa-brands fa-html5\",\n        name: \"icon\" + count,\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (tag == \"select\") {\n    count++;\n    return {\n      type: \"select\",\n      labelValue: \"\",\n      attributs: {\n        id: count,\n        name: \"select\" + count,\n        \"class\": \"\",\n        items: \"item 1 ,item 2\",\n        get tab() {\n          return this.items.split(\",\");\n        },\n        get value() {\n          return this.items;\n        },\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (tag == \"group\") {\n    count++;\n    return {\n      type: \"group\",\n      attributs: {\n        id: count,\n        name: \"group\" + count,\n        myStyle: {\n          \"width\": \"100%\",\n          \"border\": \"dotted 1px black\",\n          \"min-height\": \"100px\",\n          \"color\": \"\",\n          \"padding\": \"10px\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      },\n      children: []\n    };\n  } else if (tag == \"button\") {\n    count++;\n    return {\n      type: \"button\",\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"button\" + count,\n        title: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Button \" + count\n      }\n    };\n  } else if (tag == \"label\") {\n    count++;\n    return {\n      type: \"label\",\n      attributs: {\n        id: count,\n        name: \"label\" + count,\n        title: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Label\" + count\n      }\n    };\n  } else if (tag == \"input\") {\n    count++;\n    return {\n      type: \"input\",\n      attributs: _defineAccessor(\"get\", {\n        id: count,\n        \"class\": \"\",\n        placeholder: \"\",\n        style: \"\",\n        name: \"input\" + count,\n        title: \"\",\n        label: \"\",\n        subtype: \"\",\n        myStyle: {}\n      }, \"style\", function () {\n        return styleFormat(this.myStyle);\n      })\n    };\n  } else if (tag == \"textarea\") {\n    count++;\n    return {\n      type: \"textarea\",\n      labelValue: \"\",\n      attributs: {\n        id: count,\n        name: \"textarea\" + count,\n        \"class\": \"\",\n        placeholder: \"\",\n        value: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (tag == \"form\") {\n    count++;\n    return {\n      type: \"form\",\n      attributs: {\n        id: count,\n        name: \"form\" + count,\n        \"class\": \"\",\n        myStyle: {\n          \"height\": \"100px\",\n          \"border\": \"1px black solid\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      },\n      children: []\n    };\n  } else if (tag == \"paragraph\") {\n    count++;\n    return {\n      type: \"paragraph\",\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"paragraph\" + count,\n        title: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Paragraph \" + count\n      }\n    };\n  } else if (tag == \"radio\") {\n    count++;\n    return {\n      type: \"radio\",\n      attributs: _defineAccessor(\"get\", {\n        id: count,\n        \"class\": \"\",\n        style: \"\",\n        name: \"radio\" + count,\n        title: \"\",\n        label: \"\",\n        items: [\"item 1\", \"item 2\"],\n        myStyle: {}\n      }, \"style\", function () {\n        return styleFormat(this.myStyle);\n      })\n    };\n  } else if (tag == \"table\") {\n    count++;\n    return {\n      type: \"table\",\n      attributs: _defineAccessor(\"get\", {\n        id: count,\n        \"class\": \"\",\n        style: \"\",\n        name: \"table\" + count,\n        title: \"\",\n        label: \"\",\n        headers: \"item 1, item 2\",\n        get head() {\n          return this.headers.split(\",\");\n        },\n        data: \"nom, prénom\",\n        get dataItems() {\n          return this.data.split(\",\");\n        },\n        myStyle: {\n          \"border-collapse\": \"collapse\"\n        }\n      }, \"style\", function () {\n        return styleFormat(this.myStyle);\n      })\n    };\n  } else if (tag == \"link\") {\n    count++;\n    return {\n      type: \"link\",\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"link\" + count,\n        href: \"\",\n        myStyle: {\n          \"font-family\": \" Times New Roman\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Link \" + count\n      }\n    };\n  } else if (tag == \"list\") {\n    count++;\n    return {\n      type: \"list\",\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"list\" + count,\n        data: \"item 1, item 2\",\n        get dataItems() {\n          return this.data.split(\",\");\n        }\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/constructeur.js?");

/***/ }),

/***/ "./src/utils/dnd.js":
/*!**************************!*\
  !*** ./src/utils/dnd.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStart: () => (/* binding */ createStart),\n/* harmony export */   dragItemOver: () => (/* binding */ dragItemOver),\n/* harmony export */   dragItemStart: () => (/* binding */ dragItemStart),\n/* harmony export */   dropItem: () => (/* binding */ dropItem),\n/* harmony export */   dropTag: () => (/* binding */ dropTag),\n/* harmony export */   enterContainer: () => (/* binding */ enterContainer)\n/* harmony export */ });\n/* harmony import */ var _constructeur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructeur */ \"./src/utils/constructeur.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction createStart(value) {\n  // un élément tiré de l'ensemble des balises\n\n  console.log(\"Start \", value);\n  return {\n    tag: value,\n    source: \"tags\"\n  };\n}\nfunction dropTag(item, container) {\n  if (item.source === \"tags\") {\n    container.push((0,_constructeur__WEBPACK_IMPORTED_MODULE_0__.modelCreate)(item.tag));\n  }\n}\nfunction dragItemStart(container, id) {\n  var src = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  var drag = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(src, id);\n  return [src, drag];\n}\nfunction dragItemOver(container, id) {\n  var sink = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  return sink;\n}\nfunction dropItem(containers, id, drag) {\n  var dragItem = drag;\n  var dropItem = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(containers.sink, id);\n  if (containers.source === containers.sink) {\n    var source = containers.source; // Ou containers.sink, puisque source === sink\n    var dragIndex = source.indexOf(dragItem);\n    var dropIndex = source.indexOf(dropItem);\n    if (dragIndex !== dropIndex) {\n      var _source$splice = source.splice(dragIndex, 1),\n        _source$splice2 = _slicedToArray(_source$splice, 1),\n        removedItem = _source$splice2[0]; // Supprimer l'élément de sa position actuelle\n      source.splice(dropIndex, 0, removedItem); // Insérer l'élément à la nouvelle position\n    }\n  }\n}\nfunction enterContainer(container, id, dnd) {\n  var sink = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  dnd.drop = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(sink, id);\n  if (dnd.drop.children) sink;\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/dnd.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEltById: () => (/* binding */ getEltById),\n/* harmony export */   getParentById: () => (/* binding */ getParentById)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction getParentById(ct, id) {\n  var c, re;\n  console.log(\"getParent \");\n  console.log(ct);\n  var _iterator = _createForOfIteratorHelper(ct),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      c = _step.value;\n      console.log(\"e= \" + c.attributs.id + \"id=\" + id);\n      console.log(c);\n      if (c.attributs.id == id) return ct;else if (c.children) if ((re = getParentById(c.children, id)) != null) return re;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return null;\n}\nfunction getEltById(ct, id) {\n  var i;\n  var _iterator2 = _createForOfIteratorHelper(ct),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      i = _step2.value;\n      if (i.attributs.id == id) return i;\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/utils.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9a0184eb0f527885ca37")
/******/ })();
/******/ 
/******/ }
);