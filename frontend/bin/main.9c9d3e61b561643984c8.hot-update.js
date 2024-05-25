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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Viewer: () => (/* binding */ Viewer)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\n\n\nvar Viewer = {\n  view: function view(vnode) {\n    var _this = this;\n    if (vnode.attrs.component.type == \"span\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.attributs.value || \"Default\");else if (vnode.attrs.component.type == \"hx\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(vnode.attrs.component.attributs.balise, {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true,\n      ondragstart: function ondragstart(e) {\n        e.preventDefault();\n        var _dragItemStart = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemStart)(vnode.attrs.container, vnode.attrs.component.attributs.id),\n          src = _dragItemStart.src,\n          drag = _dragItemStart.drag;\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.containers.source = src;\n      },\n      ondragover: function ondragover(e) {\n        e.preventDefault();\n        vnode.attrs.dnd.drop = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemOver)(vnode.attrs.container, vnode.attrs.component.attributs.id);\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem)(vnode.attrs.c);\n      }\n    }, vnode.attrs.component.attributs.value);else if (vnode.attrs.component.type == \"hr\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"hr\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"icon\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"i\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"group\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      id: vnode.attrs.component.attributs.id,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.children.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(viewer, {\n        component: item\n      });\n    }));else if (vnode.attrs.component.type == \"button\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"button\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"label\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"input\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        \"for\": this.id\n      }, vnode.attrs.component.attributs.label, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        type: vnode.attrs.component.attributs.subtype,\n        placeholder: vnode.attrs.component.attributs.placeholder,\n        draggable: true\n      }));\n    } else if (vnode.attrs.component.type == \"textarea\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"textarea\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      placeholder: vnode.attrs.component.attributs.placeholder,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"form\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"form\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.children.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(viewer, {\n        component: item\n      });\n    }));else if (vnode.attrs.component.type == \"paragraph\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"p\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.attributs.value);else if (vnode.attrs.component.type == \"radio\") {\n      return vnode.attrs.component.attributs.items.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", {\n          id: vnode.attrs.component.attributs.item,\n          \"class\": vnode.attrs.component.attributs[\"class\"],\n          name: vnode.attrs.component.attributs.name,\n          title: vnode.attrs.component.attributs.title,\n          style: vnode.attrs.component.attributs.style,\n          type: \"radio\"\n        }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n          \"for\": _this.id,\n          draggable: true\n        }, item)]);\n      });\n    } else if (vnode.attrs.component.type == \"select\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        \"for\": this.id\n      }, vnode.attrs.component.attributs.label, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"select\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, [vnode.attrs.component.attributs.tab.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"option\", {\n          value: item\n        }, item);\n      })]));\n    } else if (vnode.attrs.component.type == \"table\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"table\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, [vnode.attrs.component.attributs.head.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"tr\", {\n          style: \"border: 1px solid black;\"\n        }, [mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"td\", {\n          style: \"border: 1px solid black\"\n        }, item), vnode.attrs.component.attributs.dataItems.map(function (x) {\n          return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"td\", {\n            style: \"border: 1px solid black;\"\n          }, x);\n        })]);\n      })]);\n    } else if (vnode.attrs.component.type == \"link\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"a\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        href: vnode.attrs.component.attributs.href,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true,\n        ondragstart: startItem,\n        ondragover: dragoverItem,\n        ondrop: _utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem,\n        ondragend: end,\n        onclick: clickItem\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"list\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"ul\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true,\n        ondragstart: startItem,\n        ondragover: dragoverItem,\n        ondrop: _utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem,\n        ondragend: end,\n        onclick: clickItem\n      }, [vnode.attrs.component.attributs.dataItems.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"li\", item);\n      })]);\n    }\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/components/viewer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aab69139d8680ec5cda2")
/******/ })();
/******/ 
/******/ }
);