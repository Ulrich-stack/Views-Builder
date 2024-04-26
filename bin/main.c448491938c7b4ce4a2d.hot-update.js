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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parts_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/tags */ \"./src/parts/tags.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _parts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/page */ \"./src/parts/page.js\");\n\n\n\n\nvar app = {\n  oninit: function oninit(vnode) {\n    vnode.state.container = []; // le tableau qui contiendra tous nos éléments\n    vnode.state.dnd = {\n      drag: null,\n      drop: null\n    }; // un objet qui va contenir l'élément pris et l'élément où il sera déposé\n    vnode.state.containers = {\n      source: null,\n      sink: null\n    }; // un objet qui va contenir les conteneurs de départ et d'arrivée de nos éléments\n    vnode.state.eltClicked = {};\n  },\n  view: function view(vnode) {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"main\", {\n      className: \"\"\n    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"h-full w-full flex overflow-hidden\"\n    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_parts_tags__WEBPACK_IMPORTED_MODULE_1__.Tags, {\n      dnd: vnode.state.dnd\n    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_parts_page__WEBPACK_IMPORTED_MODULE_3__.Page, {\n      dnd: vnode.state.dnd,\n      container: vnode.state.container,\n      containers: vnode.state.containers,\n      eltClicked: true\n    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-2/12 bg-black\"\n    })));\n  }\n};\nmithril__WEBPACK_IMPORTED_MODULE_0___default().mount(document.body, app);\n\n//# sourceURL=webpack://dnd2.0/./src/app.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("922ccbc7ae9619f1700a")
/******/ })();
/******/ 
/******/ }
);