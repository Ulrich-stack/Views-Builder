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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modelCreate: () => (/* binding */ modelCreate)\n/* harmony export */ });\nfunction _defineAccessor(e, r, n, t) { var c = { configurable: !0, enumerable: !0 }; return c[e] = t, Object.defineProperty(r, n, c); }\nvar count = 0;\nfunction styleFormat(st) {\n  var key = Object.keys(st);\n  var result = \"\";\n  key.map(function (item) {\n    if (item != \"\") result += item + \" : \" + st[item] + \";\";\n  });\n  return result;\n}\nfunction modelCreate(id) {\n  if (id == \"span\") {\n    count++;\n    return {\n      type: \"span\",\n      properties: spanAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"span\" + count,\n        title: \"\",\n        myStyle: {\n          \"font-family\": \" Times New Roman\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        onclick: \" CODE\",\n        value: \"Span \" + count\n      }\n    };\n  } else if (id == \"hx\") {\n    count++;\n    return {\n      type: \"hx\",\n      properties: hxAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"hx\" + count,\n        title: \"\",\n        xparam: \"\",\n        get balise() {\n          return \"h\" + this.xparam;\n        },\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Titre \" + count\n      }\n    };\n  } else if (id == \"hr\") {\n    count++;\n    return {\n      type: \"hr\",\n      properties: hrAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"hr\" + count,\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (id == \"icon\") {\n    count++;\n    return {\n      type: \"icon\",\n      properties: iconAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"fa-brands fa-html5\",\n        name: \"icon\" + count,\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (id == \"select\") {\n    count++;\n    return {\n      type: \"select\",\n      properties: selectAttrs,\n      labelValue: \"\",\n      attributs: {\n        id: count,\n        name: \"select\" + count,\n        \"class\": \"\",\n        items: \"item 1 ,item 2\",\n        get tab() {\n          return this.items.split(\",\");\n        },\n        get value() {\n          return this.items;\n        },\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (id == \"group\") {\n    count++;\n    return {\n      type: \"group\",\n      properties: groupAttrs,\n      attributs: {\n        id: count,\n        name: \"group\" + count,\n        myStyle: {\n          \"border\": \"dotted 1px black\",\n          \"min-height\": \"100px\",\n          \"color\": \"\",\n          \"padding\": \"10px\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      },\n      children: []\n    };\n  } else if (id == \"button\") {\n    count++;\n    return {\n      type: \"button\",\n      properties: buttonAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"button\" + count,\n        title: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Button \" + count\n      }\n    };\n  } else if (id == \"label\") {\n    count++;\n    return {\n      type: \"label\",\n      properties: labelAttrs,\n      attributs: {\n        id: count,\n        name: \"label\" + count,\n        title: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Label\" + count\n      }\n    };\n  } else if (id == \"input\") {\n    count++;\n    return {\n      type: \"input\",\n      properties: inputAttrs,\n      attributs: _defineAccessor(\"get\", {\n        id: count,\n        \"class\": \"\",\n        placeholder: \"\",\n        style: \"\",\n        name: \"input\" + count,\n        title: \"\",\n        label: \"\",\n        subtype: \"\",\n        myStyle: {}\n      }, \"style\", function () {\n        return styleFormat(this.myStyle);\n      })\n    };\n  } else if (id == \"textarea\") {\n    count++;\n    return {\n      type: \"textarea\",\n      labelValue: \"\",\n      properties: textAttrs,\n      attributs: {\n        id: count,\n        name: \"textarea\" + count,\n        \"class\": \"\",\n        placeholder: \"\",\n        value: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      }\n    };\n  } else if (id == \"form\") {\n    count++;\n    return {\n      type: \"form\",\n      properties: formAttrs,\n      attributs: {\n        id: count,\n        name: \"form\" + count,\n        \"class\": \"\",\n        myStyle: {\n          \"height\": \"100px\",\n          \"border\": \"1px black solid\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        }\n      },\n      children: []\n    };\n  } else if (id == \"paragraph\") {\n    count++;\n    return {\n      type: \"paragraph\",\n      properties: paragraphAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"paragraph\" + count,\n        title: \"\",\n        myStyle: {},\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Paragraph \" + count\n      }\n    };\n  } else if (id == \"radio\") {\n    count++;\n    return {\n      type: \"radio\",\n      properties: radioAttrs,\n      attributs: _defineAccessor(\"get\", {\n        id: count,\n        \"class\": \"\",\n        style: \"\",\n        name: \"radio\" + count,\n        title: \"\",\n        label: \"\",\n        items: [\"item 1\", \"item 2\"],\n        myStyle: {}\n      }, \"style\", function () {\n        return styleFormat(this.myStyle);\n      })\n    };\n  } else if (id == \"table\") {\n    count++;\n    return {\n      type: \"table\",\n      properties: tableAttrs,\n      attributs: _defineAccessor(\"get\", {\n        id: count,\n        \"class\": \"\",\n        style: \"\",\n        name: \"table\" + count,\n        title: \"\",\n        label: \"\",\n        headers: \"item 1, item 2\",\n        get head() {\n          return this.headers.split(\",\");\n        },\n        data: \"nom, prénom\",\n        get dataItems() {\n          return this.data.split(\",\");\n        },\n        myStyle: {\n          \"border-collapse\": \"collapse\"\n        }\n      }, \"style\", function () {\n        return styleFormat(this.myStyle);\n      })\n    };\n  } else if (id == \"link\") {\n    count++;\n    return {\n      type: \"link\",\n      properties: linkAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"link\" + count,\n        href: \"\",\n        myStyle: {\n          \"font-family\": \" Times New Roman\"\n        },\n        get style() {\n          return styleFormat(this.myStyle);\n        },\n        value: \"Link \" + count\n      }\n    };\n  } else if (id == \"list\") {\n    count++;\n    return {\n      type: \"list\",\n      properties: listAttrs,\n      attributs: {\n        id: count,\n        \"class\": \"\",\n        name: \"list\" + count,\n        data: \"item 1, item 2\",\n        get dataItems() {\n          return this.data.split(\",\");\n        }\n      }\n    };\n  }\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/utils.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d89f6f49b2f836f1dc5")
/******/ })();
/******/ 
/******/ }
);