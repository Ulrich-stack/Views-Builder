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

/***/ "./src/components/viewer.js":
/*!**********************************!*\
  !*** ./src/components/viewer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Viewer: () => (/* binding */ Viewer)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\n\n\nvar Viewer = {\n  view: function view(vnode) {\n    var _this = this;\n    if (vnode.attrs.component.type == \"span\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.attributs.value || \"Default\");else if (vnode.attrs.component.type == \"hx\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(vnode.attrs.component.attributs.balise, {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true,\n      ondragstart: function ondragstart(e) {\n        e.preventDefault();\n        var _dragItemStart = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemStart)(vnode.attrs.container, vnode.attrs.component.attributs.id),\n          src = _dragItemStart.src,\n          drag = _dragItemStart.drag;\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.containers.source = src;\n      }\n    }, vnode.attrs.component.attributs.value);else if (vnode.attrs.component.type == \"hr\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"hr\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"icon\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"i\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"group\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      id: vnode.attrs.component.attributs.id,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.children.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(viewer, {\n        component: item\n      });\n    }));else if (vnode.attrs.component.type == \"button\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"button\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"label\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"input\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        \"for\": this.id\n      }, vnode.attrs.component.attributs.label, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        type: vnode.attrs.component.attributs.subtype,\n        placeholder: vnode.attrs.component.attributs.placeholder,\n        draggable: true\n      }));\n    } else if (vnode.attrs.component.type == \"textarea\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"textarea\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      placeholder: vnode.attrs.component.attributs.placeholder,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"form\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"form\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.children.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(viewer, {\n        component: item\n      });\n    }));else if (vnode.attrs.component.type == \"paragraph\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"p\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.attributs.value);else if (vnode.attrs.component.type == \"radio\") {\n      return vnode.attrs.component.attributs.items.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", {\n          id: vnode.attrs.component.attributs.item,\n          \"class\": vnode.attrs.component.attributs[\"class\"],\n          name: vnode.attrs.component.attributs.name,\n          title: vnode.attrs.component.attributs.title,\n          style: vnode.attrs.component.attributs.style,\n          type: \"radio\"\n        }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n          \"for\": _this.id,\n          draggable: true\n        }, item)]);\n      });\n    } else if (vnode.attrs.component.type == \"select\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        \"for\": this.id\n      }, vnode.attrs.component.attributs.label, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"select\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, [vnode.attrs.component.attributs.tab.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"option\", {\n          value: item\n        }, item);\n      })]));\n    } else if (vnode.attrs.component.type == \"table\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"table\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, [vnode.attrs.component.attributs.head.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"tr\", {\n          style: \"border: 1px solid black;\"\n        }, [mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"td\", {\n          style: \"border: 1px solid black\"\n        }, item), vnode.attrs.component.attributs.dataItems.map(function (x) {\n          return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"td\", {\n            style: \"border: 1px solid black;\"\n          }, x);\n        })]);\n      })]);\n    } else if (vnode.attrs.component.type == \"link\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"a\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        href: vnode.attrs.component.attributs.href,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true,\n        ondragstart: startItem,\n        ondragover: dragoverItem,\n        ondrop: dropItem,\n        ondragend: end,\n        onclick: clickItem\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"list\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"ul\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true,\n        ondragstart: startItem,\n        ondragover: dragoverItem,\n        ondrop: dropItem,\n        ondragend: end,\n        onclick: clickItem\n      }, [vnode.attrs.component.attributs.dataItems.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"li\", item);\n      })]);\n    }\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/components/viewer.js?");

/***/ }),

/***/ "./src/parts/page.js":
/*!***************************!*\
  !*** ./src/parts/page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Page: () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\n/* harmony import */ var _components_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/viewer */ \"./src/components/viewer.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar Page = {\n  view: function view(vnode) {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-8/12 overflow-y-scroll overflow-x-hidden\",\n      ondragenter: function ondragenter(e) {\n        vnode.attrs.dnd.drop = vnode.attrs.container;\n        vnode.attrs.containers.sink = vnode.attrs.container;\n        console.log(vnode.attrs.dnd);\n      },\n      ondragover: function ondragover(e) {\n        return e.preventDefault();\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropTag)(vnode.attrs.dnd.drag, vnode.attrs.container);\n        vnode.attrs.dnd = {\n          drag: null,\n          drop: null\n        };\n      }\n    }, vnode.attrs.container.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_viewer__WEBPACK_IMPORTED_MODULE_2__.Viewer, _defineProperty(_defineProperty({\n        component: item,\n        containers: vnode.attrs.c\n      }, \"containers\", vnode.attrs.containers), \"dnd\", vnode.attrs.dnd));\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/parts/page.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("120d1407c057eda62ea4")
/******/ })();
/******/ 
/******/ }
);