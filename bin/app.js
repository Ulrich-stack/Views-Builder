/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/mithril/api/mount-redraw.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/api/mount-redraw.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\");\nmodule.exports = function (render, schedule, console) {\n  var subscriptions = [];\n  var pending = false;\n  var offset = -1;\n  function sync() {\n    for (offset = 0; offset < subscriptions.length; offset += 2) {\n      try {\n        render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw);\n      } catch (e) {\n        console.error(e);\n      }\n    }\n    offset = -1;\n  }\n  function redraw() {\n    if (!pending) {\n      pending = true;\n      schedule(function () {\n        pending = false;\n        sync();\n      });\n    }\n  }\n  redraw.sync = sync;\n  function mount(root, component) {\n    if (component != null && component.view == null && typeof component !== \"function\") {\n      throw new TypeError(\"m.mount expects a component, not a vnode.\");\n    }\n    var index = subscriptions.indexOf(root);\n    if (index >= 0) {\n      subscriptions.splice(index, 2);\n      if (index <= offset) offset -= 2;\n      render(root, []);\n    }\n    if (component != null) {\n      subscriptions.push(root, component);\n      render(root, Vnode(component), redraw);\n    }\n  }\n  return {\n    mount: mount,\n    redraw: redraw\n  };\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/api/mount-redraw.js?");

/***/ }),

/***/ "./node_modules/mithril/api/router.js":
/*!********************************************!*\
  !*** ./node_modules/mithril/api/router.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\");\nvar m = __webpack_require__(/*! ../render/hyperscript */ \"./node_modules/mithril/render/hyperscript.js\");\nvar Promise = __webpack_require__(/*! ../promise/promise */ \"./node_modules/mithril/promise/promise.js\");\nvar buildPathname = __webpack_require__(/*! ../pathname/build */ \"./node_modules/mithril/pathname/build.js\");\nvar parsePathname = __webpack_require__(/*! ../pathname/parse */ \"./node_modules/mithril/pathname/parse.js\");\nvar compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ \"./node_modules/mithril/pathname/compileTemplate.js\");\nvar assign = __webpack_require__(/*! ../util/assign */ \"./node_modules/mithril/util/assign.js\");\nvar censor = __webpack_require__(/*! ../util/censor */ \"./node_modules/mithril/util/censor.js\");\nvar sentinel = {};\nfunction decodeURIComponentSave(component) {\n  try {\n    return decodeURIComponent(component);\n  } catch (e) {\n    return component;\n  }\n}\nmodule.exports = function ($window, mountRedraw) {\n  var callAsync = $window == null\n  // In case Mithril.js' loaded globally without the DOM, let's not break\n  ? null : typeof $window.setImmediate === \"function\" ? $window.setImmediate : $window.setTimeout;\n  var p = Promise.resolve();\n  var scheduled = false;\n\n  // state === 0: init\n  // state === 1: scheduled\n  // state === 2: done\n  var ready = false;\n  var state = 0;\n  var compiled, fallbackRoute;\n  var currentResolver = sentinel,\n    component,\n    attrs,\n    currentPath,\n    lastUpdate;\n  var RouterRoot = {\n    onbeforeupdate: function () {\n      state = state ? 2 : 1;\n      return !(!state || sentinel === currentResolver);\n    },\n    onremove: function () {\n      $window.removeEventListener(\"popstate\", fireAsync, false);\n      $window.removeEventListener(\"hashchange\", resolveRoute, false);\n    },\n    view: function () {\n      if (!state || sentinel === currentResolver) return;\n      // Wrap in a fragment to preserve existing key semantics\n      var vnode = [Vnode(component, attrs.key, attrs)];\n      if (currentResolver) vnode = currentResolver.render(vnode[0]);\n      return vnode;\n    }\n  };\n  var SKIP = route.SKIP = {};\n  function resolveRoute() {\n    scheduled = false;\n    // Consider the pathname holistically. The prefix might even be invalid,\n    // but that's not our problem.\n    var prefix = $window.location.hash;\n    if (route.prefix[0] !== \"#\") {\n      prefix = $window.location.search + prefix;\n      if (route.prefix[0] !== \"?\") {\n        prefix = $window.location.pathname + prefix;\n        if (prefix[0] !== \"/\") prefix = \"/\" + prefix;\n      }\n    }\n    // This seemingly useless `.concat()` speeds up the tests quite a bit,\n    // since the representation is consistently a relatively poorly\n    // optimized cons string.\n    var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave).slice(route.prefix.length);\n    var data = parsePathname(path);\n    assign(data.params, $window.history.state);\n    function reject(e) {\n      console.error(e);\n      setPath(fallbackRoute, null, {\n        replace: true\n      });\n    }\n    loop(0);\n    function loop(i) {\n      // state === 0: init\n      // state === 1: scheduled\n      // state === 2: done\n      for (; i < compiled.length; i++) {\n        if (compiled[i].check(data)) {\n          var payload = compiled[i].component;\n          var matchedRoute = compiled[i].route;\n          var localComp = payload;\n          var update = lastUpdate = function (comp) {\n            if (update !== lastUpdate) return;\n            if (comp === SKIP) return loop(i + 1);\n            component = comp != null && (typeof comp.view === \"function\" || typeof comp === \"function\") ? comp : \"div\";\n            attrs = data.params, currentPath = path, lastUpdate = null;\n            currentResolver = payload.render ? payload : null;\n            if (state === 2) mountRedraw.redraw();else {\n              state = 2;\n              mountRedraw.redraw.sync();\n            }\n          };\n          // There's no understating how much I *wish* I could\n          // use `async`/`await` here...\n          if (payload.view || typeof payload === \"function\") {\n            payload = {};\n            update(localComp);\n          } else if (payload.onmatch) {\n            p.then(function () {\n              return payload.onmatch(data.params, path, matchedRoute);\n            }).then(update, path === fallbackRoute ? null : reject);\n          } else update(\"div\");\n          return;\n        }\n      }\n      if (path === fallbackRoute) {\n        throw new Error(\"Could not resolve default route \" + fallbackRoute + \".\");\n      }\n      setPath(fallbackRoute, null, {\n        replace: true\n      });\n    }\n  }\n\n  // Set it unconditionally so `m.route.set` and `m.route.Link` both work,\n  // even if neither `pushState` nor `hashchange` are supported. It's\n  // cleared if `hashchange` is used, since that makes it automatically\n  // async.\n  function fireAsync() {\n    if (!scheduled) {\n      scheduled = true;\n      // TODO: just do `mountRedraw.redraw()` here and elide the timer\n      // dependency. Note that this will muck with tests a *lot*, so it's\n      // not as easy of a change as it sounds.\n      callAsync(resolveRoute);\n    }\n  }\n  function setPath(path, data, options) {\n    path = buildPathname(path, data);\n    if (ready) {\n      fireAsync();\n      var state = options ? options.state : null;\n      var title = options ? options.title : null;\n      if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path);else $window.history.pushState(state, title, route.prefix + path);\n    } else {\n      $window.location.href = route.prefix + path;\n    }\n  }\n  function route(root, defaultRoute, routes) {\n    if (!root) throw new TypeError(\"DOM element being rendered to does not exist.\");\n    compiled = Object.keys(routes).map(function (route) {\n      if (route[0] !== \"/\") throw new SyntaxError(\"Routes must start with a '/'.\");\n      if (/:([^\\/\\.-]+)(\\.{3})?:/.test(route)) {\n        throw new SyntaxError(\"Route parameter names must be separated with either '/', '.', or '-'.\");\n      }\n      return {\n        route: route,\n        component: routes[route],\n        check: compileTemplate(route)\n      };\n    });\n    fallbackRoute = defaultRoute;\n    if (defaultRoute != null) {\n      var defaultData = parsePathname(defaultRoute);\n      if (!compiled.some(function (i) {\n        return i.check(defaultData);\n      })) {\n        throw new ReferenceError(\"Default route doesn't match any known routes.\");\n      }\n    }\n    if (typeof $window.history.pushState === \"function\") {\n      $window.addEventListener(\"popstate\", fireAsync, false);\n    } else if (route.prefix[0] === \"#\") {\n      $window.addEventListener(\"hashchange\", resolveRoute, false);\n    }\n    ready = true;\n    mountRedraw.mount(root, RouterRoot);\n    resolveRoute();\n  }\n  route.set = function (path, data, options) {\n    if (lastUpdate != null) {\n      options = options || {};\n      options.replace = true;\n    }\n    lastUpdate = null;\n    setPath(path, data, options);\n  };\n  route.get = function () {\n    return currentPath;\n  };\n  route.prefix = \"#!\";\n  route.Link = {\n    view: function (vnode) {\n      // Omit the used parameters from the rendered element - they are\n      // internal. Also, censor the various lifecycle methods.\n      //\n      // We don't strip the other parameters because for convenience we\n      // let them be specified in the selector as well.\n      var child = m(vnode.attrs.selector || \"a\", censor(vnode.attrs, [\"options\", \"params\", \"selector\", \"onclick\"]), vnode.children);\n      var options, onclick, href;\n\n      // Let's provide a *right* way to disable a route link, rather than\n      // letting people screw up accessibility on accident.\n      //\n      // The attribute is coerced so users don't get surprised over\n      // `disabled: 0` resulting in a button that's somehow routable\n      // despite being visibly disabled.\n      if (child.attrs.disabled = Boolean(child.attrs.disabled)) {\n        child.attrs.href = null;\n        child.attrs[\"aria-disabled\"] = \"true\";\n        // If you *really* do want add `onclick` on a disabled link, use\n        // an `oncreate` hook to add it.\n      } else {\n        options = vnode.attrs.options;\n        onclick = vnode.attrs.onclick;\n        // Easier to build it now to keep it isomorphic.\n        href = buildPathname(child.attrs.href, vnode.attrs.params);\n        child.attrs.href = route.prefix + href;\n        child.attrs.onclick = function (e) {\n          var result;\n          if (typeof onclick === \"function\") {\n            result = onclick.call(e.currentTarget, e);\n          } else if (onclick == null || typeof onclick !== \"object\") {\n            // do nothing\n          } else if (typeof onclick.handleEvent === \"function\") {\n            onclick.handleEvent(e);\n          }\n\n          // Adapted from React Router's implementation:\n          // https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js\n          //\n          // Try to be flexible and intuitive in how we handle links.\n          // Fun fact: links aren't as obvious to get right as you\n          // would expect. There's a lot more valid ways to click a\n          // link than this, and one might want to not simply click a\n          // link, but right click or command-click it to copy the\n          // link target, etc. Nope, this isn't just for blind people.\n          if (\n          // Skip if `onclick` prevented default\n          result !== false && !e.defaultPrevented && (\n          // Ignore everything but left clicks\n          e.button === 0 || e.which === 0 || e.which === 1) && (\n          // Let the browser handle `target=_blank`, etc.\n          !e.currentTarget.target || e.currentTarget.target === \"_self\") &&\n          // No modifier keys\n          !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {\n            e.preventDefault();\n            e.redraw = false;\n            route.set(href, null, options);\n          }\n        };\n      }\n      return child;\n    }\n  };\n  route.param = function (key) {\n    return attrs && key != null ? attrs[key] : attrs;\n  };\n  return route;\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/api/router.js?");

/***/ }),

/***/ "./node_modules/mithril/hyperscript.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/hyperscript.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hyperscript = __webpack_require__(/*! ./render/hyperscript */ \"./node_modules/mithril/render/hyperscript.js\");\nhyperscript.trust = __webpack_require__(/*! ./render/trust */ \"./node_modules/mithril/render/trust.js\");\nhyperscript.fragment = __webpack_require__(/*! ./render/fragment */ \"./node_modules/mithril/render/fragment.js\");\nmodule.exports = hyperscript;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/hyperscript.js?");

/***/ }),

/***/ "./node_modules/mithril/index.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hyperscript = __webpack_require__(/*! ./hyperscript */ \"./node_modules/mithril/hyperscript.js\");\nvar request = __webpack_require__(/*! ./request */ \"./node_modules/mithril/request.js\");\nvar mountRedraw = __webpack_require__(/*! ./mount-redraw */ \"./node_modules/mithril/mount-redraw.js\");\nvar m = function m() {\n  return hyperscript.apply(this, arguments);\n};\nm.m = hyperscript;\nm.trust = hyperscript.trust;\nm.fragment = hyperscript.fragment;\nm.Fragment = \"[\";\nm.mount = mountRedraw.mount;\nm.route = __webpack_require__(/*! ./route */ \"./node_modules/mithril/route.js\");\nm.render = __webpack_require__(/*! ./render */ \"./node_modules/mithril/render.js\");\nm.redraw = mountRedraw.redraw;\nm.request = request.request;\nm.jsonp = request.jsonp;\nm.parseQueryString = __webpack_require__(/*! ./querystring/parse */ \"./node_modules/mithril/querystring/parse.js\");\nm.buildQueryString = __webpack_require__(/*! ./querystring/build */ \"./node_modules/mithril/querystring/build.js\");\nm.parsePathname = __webpack_require__(/*! ./pathname/parse */ \"./node_modules/mithril/pathname/parse.js\");\nm.buildPathname = __webpack_require__(/*! ./pathname/build */ \"./node_modules/mithril/pathname/build.js\");\nm.vnode = __webpack_require__(/*! ./render/vnode */ \"./node_modules/mithril/render/vnode.js\");\nm.PromisePolyfill = __webpack_require__(/*! ./promise/polyfill */ \"./node_modules/mithril/promise/polyfill.js\");\nm.censor = __webpack_require__(/*! ./util/censor */ \"./node_modules/mithril/util/censor.js\");\nmodule.exports = m;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/index.js?");

/***/ }),

/***/ "./node_modules/mithril/mount-redraw.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/mount-redraw.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar render = __webpack_require__(/*! ./render */ \"./node_modules/mithril/render.js\");\nmodule.exports = __webpack_require__(/*! ./api/mount-redraw */ \"./node_modules/mithril/api/mount-redraw.js\")(render, typeof requestAnimationFrame !== \"undefined\" ? requestAnimationFrame : null, typeof console !== \"undefined\" ? console : null);\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/mount-redraw.js?");

/***/ }),

/***/ "./node_modules/mithril/pathname/build.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/build.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar buildQueryString = __webpack_require__(/*! ../querystring/build */ \"./node_modules/mithril/querystring/build.js\");\nvar assign = __webpack_require__(/*! ../util/assign */ \"./node_modules/mithril/util/assign.js\");\n\n// Returns `path` from `template` + `params`\nmodule.exports = function (template, params) {\n  if (/:([^\\/\\.-]+)(\\.{3})?:/.test(template)) {\n    throw new SyntaxError(\"Template parameter names must be separated by either a '/', '-', or '.'.\");\n  }\n  if (params == null) return template;\n  var queryIndex = template.indexOf(\"?\");\n  var hashIndex = template.indexOf(\"#\");\n  var queryEnd = hashIndex < 0 ? template.length : hashIndex;\n  var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;\n  var path = template.slice(0, pathEnd);\n  var query = {};\n  assign(query, params);\n  var resolved = path.replace(/:([^\\/\\.-]+)(\\.{3})?/g, function (m, key, variadic) {\n    delete query[key];\n    // If no such parameter exists, don't interpolate it.\n    if (params[key] == null) return m;\n    // Escape normal parameters, but not variadic ones.\n    return variadic ? params[key] : encodeURIComponent(String(params[key]));\n  });\n\n  // In case the template substitution adds new query/hash parameters.\n  var newQueryIndex = resolved.indexOf(\"?\");\n  var newHashIndex = resolved.indexOf(\"#\");\n  var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;\n  var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;\n  var result = resolved.slice(0, newPathEnd);\n  if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd);\n  if (newQueryIndex >= 0) result += (queryIndex < 0 ? \"?\" : \"&\") + resolved.slice(newQueryIndex, newQueryEnd);\n  var querystring = buildQueryString(query);\n  if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? \"?\" : \"&\") + querystring;\n  if (hashIndex >= 0) result += template.slice(hashIndex);\n  if (newHashIndex >= 0) result += (hashIndex < 0 ? \"\" : \"&\") + resolved.slice(newHashIndex);\n  return result;\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/pathname/build.js?");

/***/ }),

/***/ "./node_modules/mithril/pathname/compileTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/mithril/pathname/compileTemplate.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar parsePathname = __webpack_require__(/*! ./parse */ \"./node_modules/mithril/pathname/parse.js\");\n\n// Compiles a template into a function that takes a resolved path (without query\n// strings) and returns an object containing the template parameters with their\n// parsed values. This expects the input of the compiled template to be the\n// output of `parsePathname`. Note that it does *not* remove query parameters\n// specified in the template.\nmodule.exports = function (template) {\n  var templateData = parsePathname(template);\n  var templateKeys = Object.keys(templateData.params);\n  var keys = [];\n  var regexp = new RegExp(\"^\" + templateData.path.replace(\n  // I escape literal text so people can use things like `:file.:ext` or\n  // `:lang-:locale` in routes. This is all merged into one pass so I\n  // don't also accidentally escape `-` and make it harder to detect it to\n  // ban it from template parameters.\n  /:([^\\/.-]+)(\\.{3}|\\.(?!\\.)|-)?|[\\\\^$*+.()|\\[\\]{}]/g, function (m, key, extra) {\n    if (key == null) return \"\\\\\" + m;\n    keys.push({\n      k: key,\n      r: extra === \"...\"\n    });\n    if (extra === \"...\") return \"(.*)\";\n    if (extra === \".\") return \"([^/]+)\\\\.\";\n    return \"([^/]+)\" + (extra || \"\");\n  }) + \"$\");\n  return function (data) {\n    // First, check the params. Usually, there isn't any, and it's just\n    // checking a static set.\n    for (var i = 0; i < templateKeys.length; i++) {\n      if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false;\n    }\n    // If no interpolations exist, let's skip all the ceremony\n    if (!keys.length) return regexp.test(data.path);\n    var values = regexp.exec(data.path);\n    if (values == null) return false;\n    for (var i = 0; i < keys.length; i++) {\n      data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);\n    }\n    return true;\n  };\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/pathname/compileTemplate.js?");

/***/ }),

/***/ "./node_modules/mithril/pathname/parse.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/parse.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar parseQueryString = __webpack_require__(/*! ../querystring/parse */ \"./node_modules/mithril/querystring/parse.js\");\n\n// Returns `{path, params}` from `url`\nmodule.exports = function (url) {\n  var queryIndex = url.indexOf(\"?\");\n  var hashIndex = url.indexOf(\"#\");\n  var queryEnd = hashIndex < 0 ? url.length : hashIndex;\n  var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;\n  var path = url.slice(0, pathEnd).replace(/\\/{2,}/g, \"/\");\n  if (!path) path = \"/\";else {\n    if (path[0] !== \"/\") path = \"/\" + path;\n    if (path.length > 1 && path[path.length - 1] === \"/\") path = path.slice(0, -1);\n  }\n  return {\n    path: path,\n    params: queryIndex < 0 ? {} : parseQueryString(url.slice(queryIndex + 1, queryEnd))\n  };\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/pathname/parse.js?");

/***/ }),

/***/ "./node_modules/mithril/promise/polyfill.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/promise/polyfill.js ***!
  \**************************************************/
/***/ ((module) => {

eval("\n\n/** @constructor */\nvar PromisePolyfill = function (executor) {\n  if (!(this instanceof PromisePolyfill)) throw new Error(\"Promise must be called with 'new'.\");\n  if (typeof executor !== \"function\") throw new TypeError(\"executor must be a function.\");\n  var self = this,\n    resolvers = [],\n    rejectors = [],\n    resolveCurrent = handler(resolvers, true),\n    rejectCurrent = handler(rejectors, false);\n  var instance = self._instance = {\n    resolvers: resolvers,\n    rejectors: rejectors\n  };\n  var callAsync = typeof setImmediate === \"function\" ? setImmediate : setTimeout;\n  function handler(list, shouldAbsorb) {\n    return function execute(value) {\n      var then;\n      try {\n        if (shouldAbsorb && value != null && (typeof value === \"object\" || typeof value === \"function\") && typeof (then = value.then) === \"function\") {\n          if (value === self) throw new TypeError(\"Promise can't be resolved with itself.\");\n          executeOnce(then.bind(value));\n        } else {\n          callAsync(function () {\n            if (!shouldAbsorb && list.length === 0) console.error(\"Possible unhandled promise rejection:\", value);\n            for (var i = 0; i < list.length; i++) list[i](value);\n            resolvers.length = 0, rejectors.length = 0;\n            instance.state = shouldAbsorb;\n            instance.retry = function () {\n              execute(value);\n            };\n          });\n        }\n      } catch (e) {\n        rejectCurrent(e);\n      }\n    };\n  }\n  function executeOnce(then) {\n    var runs = 0;\n    function run(fn) {\n      return function (value) {\n        if (runs++ > 0) return;\n        fn(value);\n      };\n    }\n    var onerror = run(rejectCurrent);\n    try {\n      then(run(resolveCurrent), onerror);\n    } catch (e) {\n      onerror(e);\n    }\n  }\n  executeOnce(executor);\n};\nPromisePolyfill.prototype.then = function (onFulfilled, onRejection) {\n  var self = this,\n    instance = self._instance;\n  function handle(callback, list, next, state) {\n    list.push(function (value) {\n      if (typeof callback !== \"function\") next(value);else try {\n        resolveNext(callback(value));\n      } catch (e) {\n        if (rejectNext) rejectNext(e);\n      }\n    });\n    if (typeof instance.retry === \"function\" && state === instance.state) instance.retry();\n  }\n  var resolveNext, rejectNext;\n  var promise = new PromisePolyfill(function (resolve, reject) {\n    resolveNext = resolve, rejectNext = reject;\n  });\n  handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);\n  return promise;\n};\nPromisePolyfill.prototype.catch = function (onRejection) {\n  return this.then(null, onRejection);\n};\nPromisePolyfill.prototype.finally = function (callback) {\n  return this.then(function (value) {\n    return PromisePolyfill.resolve(callback()).then(function () {\n      return value;\n    });\n  }, function (reason) {\n    return PromisePolyfill.resolve(callback()).then(function () {\n      return PromisePolyfill.reject(reason);\n    });\n  });\n};\nPromisePolyfill.resolve = function (value) {\n  if (value instanceof PromisePolyfill) return value;\n  return new PromisePolyfill(function (resolve) {\n    resolve(value);\n  });\n};\nPromisePolyfill.reject = function (value) {\n  return new PromisePolyfill(function (resolve, reject) {\n    reject(value);\n  });\n};\nPromisePolyfill.all = function (list) {\n  return new PromisePolyfill(function (resolve, reject) {\n    var total = list.length,\n      count = 0,\n      values = [];\n    if (list.length === 0) resolve([]);else for (var i = 0; i < list.length; i++) {\n      (function (i) {\n        function consume(value) {\n          count++;\n          values[i] = value;\n          if (count === total) resolve(values);\n        }\n        if (list[i] != null && (typeof list[i] === \"object\" || typeof list[i] === \"function\") && typeof list[i].then === \"function\") {\n          list[i].then(consume, reject);\n        } else consume(list[i]);\n      })(i);\n    }\n  });\n};\nPromisePolyfill.race = function (list) {\n  return new PromisePolyfill(function (resolve, reject) {\n    for (var i = 0; i < list.length; i++) {\n      list[i].then(resolve, reject);\n    }\n  });\n};\nmodule.exports = PromisePolyfill;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/promise/polyfill.js?");

/***/ }),

/***/ "./node_modules/mithril/promise/promise.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/promise/promise.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global window */\n\n\nvar PromisePolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/mithril/promise/polyfill.js\");\nif (typeof window !== \"undefined\") {\n  if (typeof window.Promise === \"undefined\") {\n    window.Promise = PromisePolyfill;\n  } else if (!window.Promise.prototype.finally) {\n    window.Promise.prototype.finally = PromisePolyfill.prototype.finally;\n  }\n  module.exports = window.Promise;\n} else if (typeof __webpack_require__.g !== \"undefined\") {\n  if (typeof __webpack_require__.g.Promise === \"undefined\") {\n    __webpack_require__.g.Promise = PromisePolyfill;\n  } else if (!__webpack_require__.g.Promise.prototype.finally) {\n    __webpack_require__.g.Promise.prototype.finally = PromisePolyfill.prototype.finally;\n  }\n  module.exports = __webpack_require__.g.Promise;\n} else {\n  module.exports = PromisePolyfill;\n}\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/promise/promise.js?");

/***/ }),

/***/ "./node_modules/mithril/querystring/build.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/build.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (object) {\n  if (Object.prototype.toString.call(object) !== \"[object Object]\") return \"\";\n  var args = [];\n  for (var key in object) {\n    destructure(key, object[key]);\n  }\n  return args.join(\"&\");\n  function destructure(key, value) {\n    if (Array.isArray(value)) {\n      for (var i = 0; i < value.length; i++) {\n        destructure(key + \"[\" + i + \"]\", value[i]);\n      }\n    } else if (Object.prototype.toString.call(value) === \"[object Object]\") {\n      for (var i in value) {\n        destructure(key + \"[\" + i + \"]\", value[i]);\n      }\n    } else args.push(encodeURIComponent(key) + (value != null && value !== \"\" ? \"=\" + encodeURIComponent(value) : \"\"));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/querystring/build.js?");

/***/ }),

/***/ "./node_modules/mithril/querystring/parse.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/parse.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nfunction decodeURIComponentSave(str) {\n  try {\n    return decodeURIComponent(str);\n  } catch (err) {\n    return str;\n  }\n}\nmodule.exports = function (string) {\n  if (string === \"\" || string == null) return {};\n  if (string.charAt(0) === \"?\") string = string.slice(1);\n  var entries = string.split(\"&\"),\n    counters = {},\n    data = {};\n  for (var i = 0; i < entries.length; i++) {\n    var entry = entries[i].split(\"=\");\n    var key = decodeURIComponentSave(entry[0]);\n    var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : \"\";\n    if (value === \"true\") value = true;else if (value === \"false\") value = false;\n    var levels = key.split(/\\]\\[?|\\[/);\n    var cursor = data;\n    if (key.indexOf(\"[\") > -1) levels.pop();\n    for (var j = 0; j < levels.length; j++) {\n      var level = levels[j],\n        nextLevel = levels[j + 1];\n      var isNumber = nextLevel == \"\" || !isNaN(parseInt(nextLevel, 10));\n      if (level === \"\") {\n        var key = levels.slice(0, j).join();\n        if (counters[key] == null) {\n          counters[key] = Array.isArray(cursor) ? cursor.length : 0;\n        }\n        level = counters[key]++;\n      }\n      // Disallow direct prototype pollution\n      else if (level === \"__proto__\") break;\n      if (j === levels.length - 1) cursor[level] = value;else {\n        // Read own properties exclusively to disallow indirect\n        // prototype pollution\n        var desc = Object.getOwnPropertyDescriptor(cursor, level);\n        if (desc != null) desc = desc.value;\n        if (desc == null) cursor[level] = desc = isNumber ? [] : {};\n        cursor = desc;\n      }\n    }\n  }\n  return data;\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/querystring/parse.js?");

/***/ }),

/***/ "./node_modules/mithril/render.js":
/*!****************************************!*\
  !*** ./node_modules/mithril/render.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nmodule.exports = __webpack_require__(/*! ./render/render */ \"./node_modules/mithril/render/render.js\")(typeof window !== \"undefined\" ? window : null);\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/render.js?");

/***/ }),

/***/ "./node_modules/mithril/render/fragment.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/render/fragment.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\");\nvar hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ \"./node_modules/mithril/render/hyperscriptVnode.js\");\nmodule.exports = function () {\n  var vnode = hyperscriptVnode.apply(0, arguments);\n  vnode.tag = \"[\";\n  vnode.children = Vnode.normalizeChildren(vnode.children);\n  return vnode;\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/render/fragment.js?");

/***/ }),

/***/ "./node_modules/mithril/render/hyperscript.js":
/*!****************************************************!*\
  !*** ./node_modules/mithril/render/hyperscript.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\");\nvar hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ \"./node_modules/mithril/render/hyperscriptVnode.js\");\nvar hasOwn = __webpack_require__(/*! ../util/hasOwn */ \"./node_modules/mithril/util/hasOwn.js\");\nvar selectorParser = /(?:(^|#|\\.)([^#\\.\\[\\]]+))|(\\[(.+?)(?:\\s*=\\s*(\"|'|)((?:\\\\[\"'\\]]|.)*?)\\5)?\\])/g;\nvar selectorCache = {};\nfunction isEmpty(object) {\n  for (var key in object) if (hasOwn.call(object, key)) return false;\n  return true;\n}\nfunction compileSelector(selector) {\n  var match,\n    tag = \"div\",\n    classes = [],\n    attrs = {};\n  while (match = selectorParser.exec(selector)) {\n    var type = match[1],\n      value = match[2];\n    if (type === \"\" && value !== \"\") tag = value;else if (type === \"#\") attrs.id = value;else if (type === \".\") classes.push(value);else if (match[3][0] === \"[\") {\n      var attrValue = match[6];\n      if (attrValue) attrValue = attrValue.replace(/\\\\([\"'])/g, \"$1\").replace(/\\\\\\\\/g, \"\\\\\");\n      if (match[4] === \"class\") classes.push(attrValue);else attrs[match[4]] = attrValue === \"\" ? attrValue : attrValue || true;\n    }\n  }\n  if (classes.length > 0) attrs.className = classes.join(\" \");\n  return selectorCache[selector] = {\n    tag: tag,\n    attrs: attrs\n  };\n}\nfunction execSelector(state, vnode) {\n  var attrs = vnode.attrs;\n  var hasClass = hasOwn.call(attrs, \"class\");\n  var className = hasClass ? attrs.class : attrs.className;\n  vnode.tag = state.tag;\n  vnode.attrs = {};\n  if (!isEmpty(state.attrs) && !isEmpty(attrs)) {\n    var newAttrs = {};\n    for (var key in attrs) {\n      if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key];\n    }\n    attrs = newAttrs;\n  }\n  for (var key in state.attrs) {\n    if (hasOwn.call(state.attrs, key) && key !== \"className\" && !hasOwn.call(attrs, key)) {\n      attrs[key] = state.attrs[key];\n    }\n  }\n  if (className != null || state.attrs.className != null) attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + \" \" + String(className) : className : state.attrs.className != null ? state.attrs.className : null;\n  if (hasClass) attrs.class = null;\n  for (var key in attrs) {\n    if (hasOwn.call(attrs, key) && key !== \"key\") {\n      vnode.attrs = attrs;\n      break;\n    }\n  }\n  return vnode;\n}\nfunction hyperscript(selector) {\n  if (selector == null || typeof selector !== \"string\" && typeof selector !== \"function\" && typeof selector.view !== \"function\") {\n    throw Error(\"The selector must be either a string or a component.\");\n  }\n  var vnode = hyperscriptVnode.apply(1, arguments);\n  if (typeof selector === \"string\") {\n    vnode.children = Vnode.normalizeChildren(vnode.children);\n    if (selector !== \"[\") return execSelector(selectorCache[selector] || compileSelector(selector), vnode);\n  }\n  vnode.tag = selector;\n  return vnode;\n}\nmodule.exports = hyperscript;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/render/hyperscript.js?");

/***/ }),

/***/ "./node_modules/mithril/render/hyperscriptVnode.js":
/*!*********************************************************!*\
  !*** ./node_modules/mithril/render/hyperscriptVnode.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\");\n\n// Call via `hyperscriptVnode.apply(startOffset, arguments)`\n//\n// The reason I do it this way, forwarding the arguments and passing the start\n// offset in `this`, is so I don't have to create a temporary array in a\n// performance-critical path.\n//\n// In native ES6, I'd instead add a final `...args` parameter to the\n// `hyperscript` and `fragment` factories and define this as\n// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But\n// ES5 (what Mithril.js requires thanks to IE support) doesn't give me that luxury,\n// and engines aren't nearly intelligent enough to do either of these:\n//\n// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to\n//    another function only to be indexed.\n// 2. Elide an `arguments` allocation when it's passed to any function other\n//    than `Function.prototype.apply` or `Reflect.apply`.\n//\n// In ES6, it'd probably look closer to this (I'd need to profile it, though):\n// module.exports = function(attrs, ...children) {\n//     if (attrs == null || typeof attrs === \"object\" && attrs.tag == null && !Array.isArray(attrs)) {\n//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]\n//     } else {\n//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]\n//         attrs = undefined\n//     }\n//\n//     if (attrs == null) attrs = {}\n//     return Vnode(\"\", attrs.key, attrs, children)\n// }\nmodule.exports = function () {\n  var attrs = arguments[this],\n    start = this + 1,\n    children;\n  if (attrs == null) {\n    attrs = {};\n  } else if (typeof attrs !== \"object\" || attrs.tag != null || Array.isArray(attrs)) {\n    attrs = {};\n    start = this;\n  }\n  if (arguments.length === start + 1) {\n    children = arguments[start];\n    if (!Array.isArray(children)) children = [children];\n  } else {\n    children = [];\n    while (start < arguments.length) children.push(arguments[start++]);\n  }\n  return Vnode(\"\", attrs.key, attrs, children);\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/render/hyperscriptVnode.js?");

/***/ }),

/***/ "./node_modules/mithril/render/render.js":
/*!***********************************************!*\
  !*** ./node_modules/mithril/render/render.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\");\nmodule.exports = function ($window) {\n  var $doc = $window && $window.document;\n  var currentRedraw;\n  var nameSpace = {\n    svg: \"http://www.w3.org/2000/svg\",\n    math: \"http://www.w3.org/1998/Math/MathML\"\n  };\n  function getNameSpace(vnode) {\n    return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];\n  }\n\n  //sanity check to discourage people from doing `vnode.state = ...`\n  function checkState(vnode, original) {\n    if (vnode.state !== original) throw new Error(\"'vnode.state' must not be modified.\");\n  }\n\n  //Note: the hook is passed as the `this` argument to allow proxying the\n  //arguments without requiring a full array allocation to do so. It also\n  //takes advantage of the fact the current `vnode` is the first argument in\n  //all lifecycle methods.\n  function callHook(vnode) {\n    var original = vnode.state;\n    try {\n      return this.apply(original, arguments);\n    } finally {\n      checkState(vnode, original);\n    }\n  }\n\n  // IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when\n  // inside an iframe. Catch and swallow this error, and heavy-handidly return null.\n  function activeElement() {\n    try {\n      return $doc.activeElement;\n    } catch (e) {\n      return null;\n    }\n  }\n  //create\n  function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {\n    for (var i = start; i < end; i++) {\n      var vnode = vnodes[i];\n      if (vnode != null) {\n        createNode(parent, vnode, hooks, ns, nextSibling);\n      }\n    }\n  }\n  function createNode(parent, vnode, hooks, ns, nextSibling) {\n    var tag = vnode.tag;\n    if (typeof tag === \"string\") {\n      vnode.state = {};\n      if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);\n      switch (tag) {\n        case \"#\":\n          createText(parent, vnode, nextSibling);\n          break;\n        case \"<\":\n          createHTML(parent, vnode, ns, nextSibling);\n          break;\n        case \"[\":\n          createFragment(parent, vnode, hooks, ns, nextSibling);\n          break;\n        default:\n          createElement(parent, vnode, hooks, ns, nextSibling);\n      }\n    } else createComponent(parent, vnode, hooks, ns, nextSibling);\n  }\n  function createText(parent, vnode, nextSibling) {\n    vnode.dom = $doc.createTextNode(vnode.children);\n    insertNode(parent, vnode.dom, nextSibling);\n  }\n  var possibleParents = {\n    caption: \"table\",\n    thead: \"table\",\n    tbody: \"table\",\n    tfoot: \"table\",\n    tr: \"tbody\",\n    th: \"tr\",\n    td: \"tr\",\n    colgroup: \"table\",\n    col: \"colgroup\"\n  };\n  function createHTML(parent, vnode, ns, nextSibling) {\n    var match = vnode.children.match(/^\\s*?<(\\w+)/im) || [];\n    // not using the proper parent makes the child element(s) vanish.\n    //     var div = document.createElement(\"div\")\n    //     div.innerHTML = \"<td>i</td><td>j</td>\"\n    //     console.log(div.innerHTML)\n    // --> \"ij\", no <td> in sight.\n    var temp = $doc.createElement(possibleParents[match[1]] || \"div\");\n    if (ns === \"http://www.w3.org/2000/svg\") {\n      temp.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\">\" + vnode.children + \"</svg>\";\n      temp = temp.firstChild;\n    } else {\n      temp.innerHTML = vnode.children;\n    }\n    vnode.dom = temp.firstChild;\n    vnode.domSize = temp.childNodes.length;\n    // Capture nodes to remove, so we don't confuse them.\n    vnode.instance = [];\n    var fragment = $doc.createDocumentFragment();\n    var child;\n    while (child = temp.firstChild) {\n      vnode.instance.push(child);\n      fragment.appendChild(child);\n    }\n    insertNode(parent, fragment, nextSibling);\n  }\n  function createFragment(parent, vnode, hooks, ns, nextSibling) {\n    var fragment = $doc.createDocumentFragment();\n    if (vnode.children != null) {\n      var children = vnode.children;\n      createNodes(fragment, children, 0, children.length, hooks, null, ns);\n    }\n    vnode.dom = fragment.firstChild;\n    vnode.domSize = fragment.childNodes.length;\n    insertNode(parent, fragment, nextSibling);\n  }\n  function createElement(parent, vnode, hooks, ns, nextSibling) {\n    var tag = vnode.tag;\n    var attrs = vnode.attrs;\n    var is = attrs && attrs.is;\n    ns = getNameSpace(vnode) || ns;\n    var element = ns ? is ? $doc.createElementNS(ns, tag, {\n      is: is\n    }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, {\n      is: is\n    }) : $doc.createElement(tag);\n    vnode.dom = element;\n    if (attrs != null) {\n      setAttrs(vnode, attrs, ns);\n    }\n    insertNode(parent, element, nextSibling);\n    if (!maybeSetContentEditable(vnode)) {\n      if (vnode.children != null) {\n        var children = vnode.children;\n        createNodes(element, children, 0, children.length, hooks, null, ns);\n        if (vnode.tag === \"select\" && attrs != null) setLateSelectAttrs(vnode, attrs);\n      }\n    }\n  }\n  function initComponent(vnode, hooks) {\n    var sentinel;\n    if (typeof vnode.tag.view === \"function\") {\n      vnode.state = Object.create(vnode.tag);\n      sentinel = vnode.state.view;\n      if (sentinel.$$reentrantLock$$ != null) return;\n      sentinel.$$reentrantLock$$ = true;\n    } else {\n      vnode.state = void 0;\n      sentinel = vnode.tag;\n      if (sentinel.$$reentrantLock$$ != null) return;\n      sentinel.$$reentrantLock$$ = true;\n      vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === \"function\" ? new vnode.tag(vnode) : vnode.tag(vnode);\n    }\n    initLifecycle(vnode.state, vnode, hooks);\n    if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);\n    vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));\n    if (vnode.instance === vnode) throw Error(\"A view cannot return the vnode it received as argument\");\n    sentinel.$$reentrantLock$$ = null;\n  }\n  function createComponent(parent, vnode, hooks, ns, nextSibling) {\n    initComponent(vnode, hooks);\n    if (vnode.instance != null) {\n      createNode(parent, vnode.instance, hooks, ns, nextSibling);\n      vnode.dom = vnode.instance.dom;\n      vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;\n    } else {\n      vnode.domSize = 0;\n    }\n  }\n\n  //update\n  /**\n   * @param {Element|Fragment} parent - the parent element\n   * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for\n   *                               this part of the tree\n   * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.\n   * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)\n   * @param {Element | null} nextSibling - the next DOM node if we're dealing with a\n   *                                       fragment that is not the last item in its\n   *                                       parent\n   * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any\n   * @returns void\n   */\n  // This function diffs and patches lists of vnodes, both keyed and unkeyed.\n  //\n  // We will:\n  //\n  // 1. describe its general structure\n  // 2. focus on the diff algorithm optimizations\n  // 3. discuss DOM node operations.\n\n  // ## Overview:\n  //\n  // The updateNodes() function:\n  // - deals with trivial cases\n  // - determines whether the lists are keyed or unkeyed based on the first non-null node\n  //   of each list.\n  // - diffs them and patches the DOM if needed (that's the brunt of the code)\n  // - manages the leftovers: after diffing, are there:\n  //   - old nodes left to remove?\n  // \t - new nodes to insert?\n  // \t deal with them!\n  //\n  // The lists are only iterated over once, with an exception for the nodes in `old` that\n  // are visited in the fourth part of the diff and in the `removeNodes` loop.\n\n  // ## Diffing\n  //\n  // Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837\n  // may be good for context on longest increasing subsequence-based logic for moving nodes.\n  //\n  // In order to diff keyed lists, one has to\n  //\n  // 1) match nodes in both lists, per key, and update them accordingly\n  // 2) create the nodes present in the new list, but absent in the old one\n  // 3) remove the nodes present in the old list, but absent in the new one\n  // 4) figure out what nodes in 1) to move in order to minimize the DOM operations.\n  //\n  // To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate\n  // over the new list and for each new vnode, find the corresponding vnode in the old list using\n  // the map.\n  // 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new\n  // and must be created.\n  // For the removals, we actually remove the nodes that have been updated from the old list.\n  // The nodes that remain in that list after 1) and 2) have been performed can be safely removed.\n  // The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)\n  // algorithm.\n  //\n  // the longest increasing subsequence is the list of nodes that can remain in place. Imagine going\n  // from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices\n  // corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would\n  //  match the above lists, for example).\n  //\n  // In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We\n  // can update those nodes without moving them, and only call `insertNode` on `4` and `5`.\n  //\n  // @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually\n  // the longest increasing subsequence *of old nodes still present in the new list*).\n  //\n  // It is a general algorithm that is fireproof in all circumstances, but it requires the allocation\n  // and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,\n  // the `LIS` and a temporary one to create the LIS).\n  //\n  // So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of\n  // the LIS and can be updated without moving them.\n  //\n  // If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with\n  // the exception of the last node if the list is fully reversed).\n  //\n  // ## Finding the next sibling.\n  //\n  // `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.\n  // When the list is being traversed top-down, at any index, the DOM nodes up to the previous\n  // vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old\n  // list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.\n  //\n  // In the other scenarios (swaps, upwards traversal, map-based diff),\n  // the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the\n  // bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node\n  // as the next sibling (cached in the `nextSibling` variable).\n\n  // ## DOM node moves\n  //\n  // In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,\n  // this is not the case if the node moved (second and fourth part of the diff algo). We move\n  // the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`\n  // variable rather than fetching it using `getNextSibling()`.\n  //\n  // The fourth part of the diff currently inserts nodes unconditionally, leading to issues\n  // like #1791 and #1999. We need to be smarter about those situations where adjascent old\n  // nodes remain together in the new list in a way that isn't covered by parts one and\n  // three of the diff algo.\n\n  function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {\n    if (old === vnodes || old == null && vnodes == null) return;else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length);else {\n      var isOldKeyed = old[0] != null && old[0].key != null;\n      var isKeyed = vnodes[0] != null && vnodes[0].key != null;\n      var start = 0,\n        oldStart = 0;\n      if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++;\n      if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++;\n      if (isOldKeyed !== isKeyed) {\n        removeNodes(parent, old, oldStart, old.length);\n        createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);\n      } else if (!isKeyed) {\n        // Don't index past the end of either list (causes deopts).\n        var commonLength = old.length < vnodes.length ? old.length : vnodes.length;\n        // Rewind if necessary to the first non-null index on either side.\n        // We could alternatively either explicitly create or remove nodes when `start !== oldStart`\n        // but that would be optimizing for sparse lists which are more rare than dense ones.\n        start = start < oldStart ? start : oldStart;\n        for (; start < commonLength; start++) {\n          o = old[start];\n          v = vnodes[start];\n          if (o === v || o == null && v == null) continue;else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling));else if (v == null) removeNode(parent, o);else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns);\n        }\n        if (old.length > commonLength) removeNodes(parent, old, start, old.length);\n        if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);\n      } else {\n        // keyed diff\n        var oldEnd = old.length - 1,\n          end = vnodes.length - 1,\n          map,\n          o,\n          v,\n          oe,\n          ve,\n          topSibling;\n\n        // bottom-up\n        while (oldEnd >= oldStart && end >= start) {\n          oe = old[oldEnd];\n          ve = vnodes[end];\n          if (oe.key !== ve.key) break;\n          if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);\n          if (ve.dom != null) nextSibling = ve.dom;\n          oldEnd--, end--;\n        }\n        // top-down\n        while (oldEnd >= oldStart && end >= start) {\n          o = old[oldStart];\n          v = vnodes[start];\n          if (o.key !== v.key) break;\n          oldStart++, start++;\n          if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns);\n        }\n        // swaps and list reversals\n        while (oldEnd >= oldStart && end >= start) {\n          if (start === end) break;\n          if (o.key !== ve.key || oe.key !== v.key) break;\n          topSibling = getNextSibling(old, oldStart, nextSibling);\n          moveNodes(parent, oe, topSibling);\n          if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns);\n          if (++start <= --end) moveNodes(parent, o, nextSibling);\n          if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns);\n          if (ve.dom != null) nextSibling = ve.dom;\n          oldStart++;\n          oldEnd--;\n          oe = old[oldEnd];\n          ve = vnodes[end];\n          o = old[oldStart];\n          v = vnodes[start];\n        }\n        // bottom up once again\n        while (oldEnd >= oldStart && end >= start) {\n          if (oe.key !== ve.key) break;\n          if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);\n          if (ve.dom != null) nextSibling = ve.dom;\n          oldEnd--, end--;\n          oe = old[oldEnd];\n          ve = vnodes[end];\n        }\n        if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1);else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);else {\n          // inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul\n          var originalNextSibling = nextSibling,\n            vnodesLength = end - start + 1,\n            oldIndices = new Array(vnodesLength),\n            li = 0,\n            i = 0,\n            pos = 2147483647,\n            matched = 0,\n            map,\n            lisIndices;\n          for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1;\n          for (i = end; i >= start; i--) {\n            if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1);\n            ve = vnodes[i];\n            var oldIndex = map[ve.key];\n            if (oldIndex != null) {\n              pos = oldIndex < pos ? oldIndex : -1; // becomes -1 if nodes were re-ordered\n              oldIndices[i - start] = oldIndex;\n              oe = old[oldIndex];\n              old[oldIndex] = null;\n              if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);\n              if (ve.dom != null) nextSibling = ve.dom;\n              matched++;\n            }\n          }\n          nextSibling = originalNextSibling;\n          if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1);\n          if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);else {\n            if (pos === -1) {\n              // the indices of the indices of the items that are part of the\n              // longest increasing subsequence in the oldIndices list\n              lisIndices = makeLisIndices(oldIndices);\n              li = lisIndices.length - 1;\n              for (i = end; i >= start; i--) {\n                v = vnodes[i];\n                if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);else {\n                  if (lisIndices[li] === i - start) li--;else moveNodes(parent, v, nextSibling);\n                }\n                if (v.dom != null) nextSibling = vnodes[i].dom;\n              }\n            } else {\n              for (i = end; i >= start; i--) {\n                v = vnodes[i];\n                if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);\n                if (v.dom != null) nextSibling = vnodes[i].dom;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  function updateNode(parent, old, vnode, hooks, nextSibling, ns) {\n    var oldTag = old.tag,\n      tag = vnode.tag;\n    if (oldTag === tag) {\n      vnode.state = old.state;\n      vnode.events = old.events;\n      if (shouldNotUpdate(vnode, old)) return;\n      if (typeof oldTag === \"string\") {\n        if (vnode.attrs != null) {\n          updateLifecycle(vnode.attrs, vnode, hooks);\n        }\n        switch (oldTag) {\n          case \"#\":\n            updateText(old, vnode);\n            break;\n          case \"<\":\n            updateHTML(parent, old, vnode, ns, nextSibling);\n            break;\n          case \"[\":\n            updateFragment(parent, old, vnode, hooks, nextSibling, ns);\n            break;\n          default:\n            updateElement(old, vnode, hooks, ns);\n        }\n      } else updateComponent(parent, old, vnode, hooks, nextSibling, ns);\n    } else {\n      removeNode(parent, old);\n      createNode(parent, vnode, hooks, ns, nextSibling);\n    }\n  }\n  function updateText(old, vnode) {\n    if (old.children.toString() !== vnode.children.toString()) {\n      old.dom.nodeValue = vnode.children;\n    }\n    vnode.dom = old.dom;\n  }\n  function updateHTML(parent, old, vnode, ns, nextSibling) {\n    if (old.children !== vnode.children) {\n      removeHTML(parent, old);\n      createHTML(parent, vnode, ns, nextSibling);\n    } else {\n      vnode.dom = old.dom;\n      vnode.domSize = old.domSize;\n      vnode.instance = old.instance;\n    }\n  }\n  function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {\n    updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);\n    var domSize = 0,\n      children = vnode.children;\n    vnode.dom = null;\n    if (children != null) {\n      for (var i = 0; i < children.length; i++) {\n        var child = children[i];\n        if (child != null && child.dom != null) {\n          if (vnode.dom == null) vnode.dom = child.dom;\n          domSize += child.domSize || 1;\n        }\n      }\n      if (domSize !== 1) vnode.domSize = domSize;\n    }\n  }\n  function updateElement(old, vnode, hooks, ns) {\n    var element = vnode.dom = old.dom;\n    ns = getNameSpace(vnode) || ns;\n    if (vnode.tag === \"textarea\") {\n      if (vnode.attrs == null) vnode.attrs = {};\n    }\n    updateAttrs(vnode, old.attrs, vnode.attrs, ns);\n    if (!maybeSetContentEditable(vnode)) {\n      updateNodes(element, old.children, vnode.children, hooks, null, ns);\n    }\n  }\n  function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {\n    vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));\n    if (vnode.instance === vnode) throw Error(\"A view cannot return the vnode it received as argument\");\n    updateLifecycle(vnode.state, vnode, hooks);\n    if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);\n    if (vnode.instance != null) {\n      if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns);\n      vnode.dom = vnode.instance.dom;\n      vnode.domSize = vnode.instance.domSize;\n    } else if (old.instance != null) {\n      removeNode(parent, old.instance);\n      vnode.dom = undefined;\n      vnode.domSize = 0;\n    } else {\n      vnode.dom = old.dom;\n      vnode.domSize = old.domSize;\n    }\n  }\n  function getKeyMap(vnodes, start, end) {\n    var map = Object.create(null);\n    for (; start < end; start++) {\n      var vnode = vnodes[start];\n      if (vnode != null) {\n        var key = vnode.key;\n        if (key != null) map[key] = start;\n      }\n    }\n    return map;\n  }\n  // Lifted from ivi https://github.com/ivijs/ivi/\n  // takes a list of unique numbers (-1 is special and can\n  // occur multiple times) and returns an array with the indices\n  // of the items that are part of the longest increasing\n  // subsequence\n  var lisTemp = [];\n  function makeLisIndices(a) {\n    var result = [0];\n    var u = 0,\n      v = 0,\n      i = 0;\n    var il = lisTemp.length = a.length;\n    for (var i = 0; i < il; i++) lisTemp[i] = a[i];\n    for (var i = 0; i < il; ++i) {\n      if (a[i] === -1) continue;\n      var j = result[result.length - 1];\n      if (a[j] < a[i]) {\n        lisTemp[i] = j;\n        result.push(i);\n        continue;\n      }\n      u = 0;\n      v = result.length - 1;\n      while (u < v) {\n        // Fast integer average without overflow.\n        // eslint-disable-next-line no-bitwise\n        var c = (u >>> 1) + (v >>> 1) + (u & v & 1);\n        if (a[result[c]] < a[i]) {\n          u = c + 1;\n        } else {\n          v = c;\n        }\n      }\n      if (a[i] < a[result[u]]) {\n        if (u > 0) lisTemp[i] = result[u - 1];\n        result[u] = i;\n      }\n    }\n    u = result.length;\n    v = result[u - 1];\n    while (u-- > 0) {\n      result[u] = v;\n      v = lisTemp[v];\n    }\n    lisTemp.length = 0;\n    return result;\n  }\n  function getNextSibling(vnodes, i, nextSibling) {\n    for (; i < vnodes.length; i++) {\n      if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;\n    }\n    return nextSibling;\n  }\n\n  // This covers a really specific edge case:\n  // - Parent node is keyed and contains child\n  // - Child is removed, returns unresolved promise in `onbeforeremove`\n  // - Parent node is moved in keyed diff\n  // - Remaining children still need moved appropriately\n  //\n  // Ideally, I'd track removed nodes as well, but that introduces a lot more\n  // complexity and I'm not exactly interested in doing that.\n  function moveNodes(parent, vnode, nextSibling) {\n    var frag = $doc.createDocumentFragment();\n    moveChildToFrag(parent, frag, vnode);\n    insertNode(parent, frag, nextSibling);\n  }\n  function moveChildToFrag(parent, frag, vnode) {\n    // Dodge the recursion overhead in a few of the most common cases.\n    while (vnode.dom != null && vnode.dom.parentNode === parent) {\n      if (typeof vnode.tag !== \"string\") {\n        vnode = vnode.instance;\n        if (vnode != null) continue;\n      } else if (vnode.tag === \"<\") {\n        for (var i = 0; i < vnode.instance.length; i++) {\n          frag.appendChild(vnode.instance[i]);\n        }\n      } else if (vnode.tag !== \"[\") {\n        // Don't recurse for text nodes *or* elements, just fragments\n        frag.appendChild(vnode.dom);\n      } else if (vnode.children.length === 1) {\n        vnode = vnode.children[0];\n        if (vnode != null) continue;\n      } else {\n        for (var i = 0; i < vnode.children.length; i++) {\n          var child = vnode.children[i];\n          if (child != null) moveChildToFrag(parent, frag, child);\n        }\n      }\n      break;\n    }\n  }\n  function insertNode(parent, dom, nextSibling) {\n    if (nextSibling != null) parent.insertBefore(dom, nextSibling);else parent.appendChild(dom);\n  }\n  function maybeSetContentEditable(vnode) {\n    if (vnode.attrs == null || vnode.attrs.contenteditable == null &&\n    // attribute\n    vnode.attrs.contentEditable == null // property\n    ) return false;\n    var children = vnode.children;\n    if (children != null && children.length === 1 && children[0].tag === \"<\") {\n      var content = children[0].children;\n      if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;\n    } else if (children != null && children.length !== 0) throw new Error(\"Child node of a contenteditable must be trusted.\");\n    return true;\n  }\n\n  //remove\n  function removeNodes(parent, vnodes, start, end) {\n    for (var i = start; i < end; i++) {\n      var vnode = vnodes[i];\n      if (vnode != null) removeNode(parent, vnode);\n    }\n  }\n  function removeNode(parent, vnode) {\n    var mask = 0;\n    var original = vnode.state;\n    var stateResult, attrsResult;\n    if (typeof vnode.tag !== \"string\" && typeof vnode.state.onbeforeremove === \"function\") {\n      var result = callHook.call(vnode.state.onbeforeremove, vnode);\n      if (result != null && typeof result.then === \"function\") {\n        mask = 1;\n        stateResult = result;\n      }\n    }\n    if (vnode.attrs && typeof vnode.attrs.onbeforeremove === \"function\") {\n      var result = callHook.call(vnode.attrs.onbeforeremove, vnode);\n      if (result != null && typeof result.then === \"function\") {\n        // eslint-disable-next-line no-bitwise\n        mask |= 2;\n        attrsResult = result;\n      }\n    }\n    checkState(vnode, original);\n\n    // If we can, try to fast-path it and avoid all the overhead of awaiting\n    if (!mask) {\n      onremove(vnode);\n      removeChild(parent, vnode);\n    } else {\n      if (stateResult != null) {\n        var next = function () {\n          // eslint-disable-next-line no-bitwise\n          if (mask & 1) {\n            mask &= 2;\n            if (!mask) reallyRemove();\n          }\n        };\n        stateResult.then(next, next);\n      }\n      if (attrsResult != null) {\n        var next = function () {\n          // eslint-disable-next-line no-bitwise\n          if (mask & 2) {\n            mask &= 1;\n            if (!mask) reallyRemove();\n          }\n        };\n        attrsResult.then(next, next);\n      }\n    }\n    function reallyRemove() {\n      checkState(vnode, original);\n      onremove(vnode);\n      removeChild(parent, vnode);\n    }\n  }\n  function removeHTML(parent, vnode) {\n    for (var i = 0; i < vnode.instance.length; i++) {\n      parent.removeChild(vnode.instance[i]);\n    }\n  }\n  function removeChild(parent, vnode) {\n    // Dodge the recursion overhead in a few of the most common cases.\n    while (vnode.dom != null && vnode.dom.parentNode === parent) {\n      if (typeof vnode.tag !== \"string\") {\n        vnode = vnode.instance;\n        if (vnode != null) continue;\n      } else if (vnode.tag === \"<\") {\n        removeHTML(parent, vnode);\n      } else {\n        if (vnode.tag !== \"[\") {\n          parent.removeChild(vnode.dom);\n          if (!Array.isArray(vnode.children)) break;\n        }\n        if (vnode.children.length === 1) {\n          vnode = vnode.children[0];\n          if (vnode != null) continue;\n        } else {\n          for (var i = 0; i < vnode.children.length; i++) {\n            var child = vnode.children[i];\n            if (child != null) removeChild(parent, child);\n          }\n        }\n      }\n      break;\n    }\n  }\n  function onremove(vnode) {\n    if (typeof vnode.tag !== \"string\" && typeof vnode.state.onremove === \"function\") callHook.call(vnode.state.onremove, vnode);\n    if (vnode.attrs && typeof vnode.attrs.onremove === \"function\") callHook.call(vnode.attrs.onremove, vnode);\n    if (typeof vnode.tag !== \"string\") {\n      if (vnode.instance != null) onremove(vnode.instance);\n    } else {\n      var children = vnode.children;\n      if (Array.isArray(children)) {\n        for (var i = 0; i < children.length; i++) {\n          var child = children[i];\n          if (child != null) onremove(child);\n        }\n      }\n    }\n  }\n\n  //attrs\n  function setAttrs(vnode, attrs, ns) {\n    // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.\n    //\n    // Also, the DOM does things to inputs based on the value, so it needs set first.\n    // See: https://github.com/MithrilJS/mithril.js/issues/2622\n    if (vnode.tag === \"input\" && attrs.type != null) vnode.dom.setAttribute(\"type\", attrs.type);\n    var isFileInput = attrs != null && vnode.tag === \"input\" && attrs.type === \"file\";\n    for (var key in attrs) {\n      setAttr(vnode, key, null, attrs[key], ns, isFileInput);\n    }\n  }\n  function setAttr(vnode, key, old, value, ns, isFileInput) {\n    if (key === \"key\" || key === \"is\" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== \"object\" || key === \"type\" && vnode.tag === \"input\") return;\n    if (key[0] === \"o\" && key[1] === \"n\") return updateEvent(vnode, key, value);\n    if (key.slice(0, 6) === \"xlink:\") vnode.dom.setAttributeNS(\"http://www.w3.org/1999/xlink\", key.slice(6), value);else if (key === \"style\") updateStyle(vnode.dom, old, value);else if (hasPropertyKey(vnode, key, ns)) {\n      if (key === \"value\") {\n        // Only do the coercion if we're actually going to check the value.\n        /* eslint-disable no-implicit-coercion */\n        //setting input[value] to same value by typing on focused element moves cursor to end in Chrome\n        //setting input[type=file][value] to same value causes an error to be generated if it's non-empty\n        if ((vnode.tag === \"input\" || vnode.tag === \"textarea\") && vnode.dom.value === \"\" + value && (isFileInput || vnode.dom === activeElement())) return;\n        //setting select[value] to same value while having select open blinks select dropdown in Chrome\n        if (vnode.tag === \"select\" && old !== null && vnode.dom.value === \"\" + value) return;\n        //setting option[value] to same value while having select open blinks select dropdown in Chrome\n        if (vnode.tag === \"option\" && old !== null && vnode.dom.value === \"\" + value) return;\n        //setting input[type=file][value] to different value is an error if it's non-empty\n        // Not ideal, but it at least works around the most common source of uncaught exceptions for now.\n        if (isFileInput && \"\" + value !== \"\") {\n          console.error(\"`value` is read-only on file inputs!\");\n          return;\n        }\n        /* eslint-enable no-implicit-coercion */\n      }\n      vnode.dom[key] = value;\n    } else {\n      if (typeof value === \"boolean\") {\n        if (value) vnode.dom.setAttribute(key, \"\");else vnode.dom.removeAttribute(key);\n      } else vnode.dom.setAttribute(key === \"className\" ? \"class\" : key, value);\n    }\n  }\n  function removeAttr(vnode, key, old, ns) {\n    if (key === \"key\" || key === \"is\" || old == null || isLifecycleMethod(key)) return;\n    if (key[0] === \"o\" && key[1] === \"n\") updateEvent(vnode, key, undefined);else if (key === \"style\") updateStyle(vnode.dom, old, null);else if (hasPropertyKey(vnode, key, ns) && key !== \"className\" && key !== \"title\" // creates \"null\" as title\n    && !(key === \"value\" && (vnode.tag === \"option\" || vnode.tag === \"select\" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement())) && !(vnode.tag === \"input\" && key === \"type\")) {\n      vnode.dom[key] = null;\n    } else {\n      var nsLastIndex = key.indexOf(\":\");\n      if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1);\n      if (old !== false) vnode.dom.removeAttribute(key === \"className\" ? \"class\" : key);\n    }\n  }\n  function setLateSelectAttrs(vnode, attrs) {\n    if (\"value\" in attrs) {\n      if (attrs.value === null) {\n        if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null;\n      } else {\n        var normalized = \"\" + attrs.value; // eslint-disable-line no-implicit-coercion\n        if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {\n          vnode.dom.value = normalized;\n        }\n      }\n    }\n    if (\"selectedIndex\" in attrs) setAttr(vnode, \"selectedIndex\", null, attrs.selectedIndex, undefined);\n  }\n  function updateAttrs(vnode, old, attrs, ns) {\n    if (old && old === attrs) {\n      console.warn(\"Don't reuse attrs object, use new object for every redraw, this will throw in next major\");\n    }\n    if (attrs != null) {\n      // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.\n      //\n      // Also, the DOM does things to inputs based on the value, so it needs set first.\n      // See: https://github.com/MithrilJS/mithril.js/issues/2622\n      if (vnode.tag === \"input\" && attrs.type != null) vnode.dom.setAttribute(\"type\", attrs.type);\n      var isFileInput = vnode.tag === \"input\" && attrs.type === \"file\";\n      for (var key in attrs) {\n        setAttr(vnode, key, old && old[key], attrs[key], ns, isFileInput);\n      }\n    }\n    var val;\n    if (old != null) {\n      for (var key in old) {\n        if ((val = old[key]) != null && (attrs == null || attrs[key] == null)) {\n          removeAttr(vnode, key, val, ns);\n        }\n      }\n    }\n  }\n  function isFormAttribute(vnode, attr) {\n    return attr === \"value\" || attr === \"checked\" || attr === \"selectedIndex\" || attr === \"selected\" && vnode.dom === activeElement() || vnode.tag === \"option\" && vnode.dom.parentNode === $doc.activeElement;\n  }\n  function isLifecycleMethod(attr) {\n    return attr === \"oninit\" || attr === \"oncreate\" || attr === \"onupdate\" || attr === \"onremove\" || attr === \"onbeforeremove\" || attr === \"onbeforeupdate\";\n  }\n  function hasPropertyKey(vnode, key, ns) {\n    // Filter out namespaced keys\n    return ns === undefined && (\n    // If it's a custom element, just keep it.\n    vnode.tag.indexOf(\"-\") > -1 || vnode.attrs != null && vnode.attrs.is ||\n    // If it's a normal element, let's try to avoid a few browser bugs.\n    key !== \"href\" && key !== \"list\" && key !== \"form\" && key !== \"width\" && key !== \"height\" // && key !== \"type\"\n    // Defer the property check until *after* we check everything.\n    ) && key in vnode.dom;\n  }\n\n  //style\n  var uppercaseRegex = /[A-Z]/g;\n  function toLowerCase(capital) {\n    return \"-\" + capital.toLowerCase();\n  }\n  function normalizeKey(key) {\n    return key[0] === \"-\" && key[1] === \"-\" ? key : key === \"cssFloat\" ? \"float\" : key.replace(uppercaseRegex, toLowerCase);\n  }\n  function updateStyle(element, old, style) {\n    if (old === style) {\n      // Styles are equivalent, do nothing.\n    } else if (style == null) {\n      // New style is missing, just clear it.\n      element.style.cssText = \"\";\n    } else if (typeof style !== \"object\") {\n      // New style is a string, let engine deal with patching.\n      element.style.cssText = style;\n    } else if (old == null || typeof old !== \"object\") {\n      // `old` is missing or a string, `style` is an object.\n      element.style.cssText = \"\";\n      // Add new style properties\n      for (var key in style) {\n        var value = style[key];\n        if (value != null) element.style.setProperty(normalizeKey(key), String(value));\n      }\n    } else {\n      // Both old & new are (different) objects.\n      // Update style properties that have changed\n      for (var key in style) {\n        var value = style[key];\n        if (value != null && (value = String(value)) !== String(old[key])) {\n          element.style.setProperty(normalizeKey(key), value);\n        }\n      }\n      // Remove style properties that no longer exist\n      for (var key in old) {\n        if (old[key] != null && style[key] == null) {\n          element.style.removeProperty(normalizeKey(key));\n        }\n      }\n    }\n  }\n\n  // Here's an explanation of how this works:\n  // 1. The event names are always (by design) prefixed by `on`.\n  // 2. The EventListener interface accepts either a function or an object\n  //    with a `handleEvent` method.\n  // 3. The object does not inherit from `Object.prototype`, to avoid\n  //    any potential interference with that (e.g. setters).\n  // 4. The event name is remapped to the handler before calling it.\n  // 5. In function-based event handlers, `ev.target === this`. We replicate\n  //    that below.\n  // 6. In function-based event handlers, `return false` prevents the default\n  //    action and stops event propagation. We replicate that below.\n  function EventDict() {\n    // Save this, so the current redraw is correctly tracked.\n    this._ = currentRedraw;\n  }\n  EventDict.prototype = Object.create(null);\n  EventDict.prototype.handleEvent = function (ev) {\n    var handler = this[\"on\" + ev.type];\n    var result;\n    if (typeof handler === \"function\") result = handler.call(ev.currentTarget, ev);else if (typeof handler.handleEvent === \"function\") handler.handleEvent(ev);\n    if (this._ && ev.redraw !== false) (0, this._)();\n    if (result === false) {\n      ev.preventDefault();\n      ev.stopPropagation();\n    }\n  };\n\n  //event\n  function updateEvent(vnode, key, value) {\n    if (vnode.events != null) {\n      vnode.events._ = currentRedraw;\n      if (vnode.events[key] === value) return;\n      if (value != null && (typeof value === \"function\" || typeof value === \"object\")) {\n        if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false);\n        vnode.events[key] = value;\n      } else {\n        if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false);\n        vnode.events[key] = undefined;\n      }\n    } else if (value != null && (typeof value === \"function\" || typeof value === \"object\")) {\n      vnode.events = new EventDict();\n      vnode.dom.addEventListener(key.slice(2), vnode.events, false);\n      vnode.events[key] = value;\n    }\n  }\n\n  //lifecycle\n  function initLifecycle(source, vnode, hooks) {\n    if (typeof source.oninit === \"function\") callHook.call(source.oninit, vnode);\n    if (typeof source.oncreate === \"function\") hooks.push(callHook.bind(source.oncreate, vnode));\n  }\n  function updateLifecycle(source, vnode, hooks) {\n    if (typeof source.onupdate === \"function\") hooks.push(callHook.bind(source.onupdate, vnode));\n  }\n  function shouldNotUpdate(vnode, old) {\n    do {\n      if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === \"function\") {\n        var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);\n        if (force !== undefined && !force) break;\n      }\n      if (typeof vnode.tag !== \"string\" && typeof vnode.state.onbeforeupdate === \"function\") {\n        var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);\n        if (force !== undefined && !force) break;\n      }\n      return false;\n    } while (false); // eslint-disable-line no-constant-condition\n    vnode.dom = old.dom;\n    vnode.domSize = old.domSize;\n    vnode.instance = old.instance;\n    // One would think having the actual latest attributes would be ideal,\n    // but it doesn't let us properly diff based on our current internal\n    // representation. We have to save not only the old DOM info, but also\n    // the attributes used to create it, as we diff *that*, not against the\n    // DOM directly (with a few exceptions in `setAttr`). And, of course, we\n    // need to save the children and text as they are conceptually not\n    // unlike special \"attributes\" internally.\n    vnode.attrs = old.attrs;\n    vnode.children = old.children;\n    vnode.text = old.text;\n    return true;\n  }\n  var currentDOM;\n  return function (dom, vnodes, redraw) {\n    if (!dom) throw new TypeError(\"DOM element being rendered to does not exist.\");\n    if (currentDOM != null && dom.contains(currentDOM)) {\n      throw new TypeError(\"Node is currently being rendered to and thus is locked.\");\n    }\n    var prevRedraw = currentRedraw;\n    var prevDOM = currentDOM;\n    var hooks = [];\n    var active = activeElement();\n    var namespace = dom.namespaceURI;\n    currentDOM = dom;\n    currentRedraw = typeof redraw === \"function\" ? redraw : undefined;\n    try {\n      // First time rendering into a node clears it out\n      if (dom.vnodes == null) dom.textContent = \"\";\n      vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes]);\n      updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === \"http://www.w3.org/1999/xhtml\" ? undefined : namespace);\n      dom.vnodes = vnodes;\n      // `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement\n      if (active != null && activeElement() !== active && typeof active.focus === \"function\") active.focus();\n      for (var i = 0; i < hooks.length; i++) hooks[i]();\n    } finally {\n      currentRedraw = prevRedraw;\n      currentDOM = prevDOM;\n    }\n  };\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/render/render.js?");

/***/ }),

/***/ "./node_modules/mithril/render/trust.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/trust.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\");\nmodule.exports = function (html) {\n  if (html == null) html = \"\";\n  return Vnode(\"<\", undefined, undefined, html, undefined, undefined);\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/render/trust.js?");

/***/ }),

/***/ "./node_modules/mithril/render/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/vnode.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nfunction Vnode(tag, key, attrs, children, text, dom) {\n  return {\n    tag: tag,\n    key: key,\n    attrs: attrs,\n    children: children,\n    text: text,\n    dom: dom,\n    domSize: undefined,\n    state: undefined,\n    events: undefined,\n    instance: undefined\n  };\n}\nVnode.normalize = function (node) {\n  if (Array.isArray(node)) return Vnode(\"[\", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);\n  if (node == null || typeof node === \"boolean\") return null;\n  if (typeof node === \"object\") return node;\n  return Vnode(\"#\", undefined, undefined, String(node), undefined, undefined);\n};\nVnode.normalizeChildren = function (input) {\n  var children = [];\n  if (input.length) {\n    var isKeyed = input[0] != null && input[0].key != null;\n    // Note: this is a *very* perf-sensitive check.\n    // Fun fact: merging the loop like this is somehow faster than splitting\n    // it, noticeably so.\n    for (var i = 1; i < input.length; i++) {\n      if ((input[i] != null && input[i].key != null) !== isKeyed) {\n        throw new TypeError(isKeyed && (input[i] != null || typeof input[i] === \"boolean\") ? \"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.\" : \"In fragments, vnodes must either all have keys or none have keys.\");\n      }\n    }\n    for (var i = 0; i < input.length; i++) {\n      children[i] = Vnode.normalize(input[i]);\n    }\n  }\n  return children;\n};\nmodule.exports = Vnode;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/render/vnode.js?");

/***/ }),

/***/ "./node_modules/mithril/request.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/request.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar PromisePolyfill = __webpack_require__(/*! ./promise/promise */ \"./node_modules/mithril/promise/promise.js\");\nvar mountRedraw = __webpack_require__(/*! ./mount-redraw */ \"./node_modules/mithril/mount-redraw.js\");\nmodule.exports = __webpack_require__(/*! ./request/request */ \"./node_modules/mithril/request/request.js\")(typeof window !== \"undefined\" ? window : null, PromisePolyfill, mountRedraw.redraw);\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/request.js?");

/***/ }),

/***/ "./node_modules/mithril/request/request.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/request/request.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar buildPathname = __webpack_require__(/*! ../pathname/build */ \"./node_modules/mithril/pathname/build.js\");\nvar hasOwn = __webpack_require__(/*! ../util/hasOwn */ \"./node_modules/mithril/util/hasOwn.js\");\nmodule.exports = function ($window, Promise, oncompletion) {\n  var callbackCount = 0;\n  function PromiseProxy(executor) {\n    return new Promise(executor);\n  }\n\n  // In case the global Promise is some userland library's where they rely on\n  // `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or\n  // similar. Let's *not* break them.\n  PromiseProxy.prototype = Promise.prototype;\n  PromiseProxy.__proto__ = Promise; // eslint-disable-line no-proto\n\n  function makeRequest(factory) {\n    return function (url, args) {\n      if (typeof url !== \"string\") {\n        args = url;\n        url = url.url;\n      } else if (args == null) args = {};\n      var promise = new Promise(function (resolve, reject) {\n        factory(buildPathname(url, args.params), args, function (data) {\n          if (typeof args.type === \"function\") {\n            if (Array.isArray(data)) {\n              for (var i = 0; i < data.length; i++) {\n                data[i] = new args.type(data[i]);\n              }\n            } else data = new args.type(data);\n          }\n          resolve(data);\n        }, reject);\n      });\n      if (args.background === true) return promise;\n      var count = 0;\n      function complete() {\n        if (--count === 0 && typeof oncompletion === \"function\") oncompletion();\n      }\n      return wrap(promise);\n      function wrap(promise) {\n        var then = promise.then;\n        // Set the constructor, so engines know to not await or resolve\n        // this as a native promise. At the time of writing, this is\n        // only necessary for V8, but their behavior is the correct\n        // behavior per spec. See this spec issue for more details:\n        // https://github.com/tc39/ecma262/issues/1577. Also, see the\n        // corresponding comment in `request/tests/test-request.js` for\n        // a bit more background on the issue at hand.\n        promise.constructor = PromiseProxy;\n        promise.then = function () {\n          count++;\n          var next = then.apply(promise, arguments);\n          next.then(complete, function (e) {\n            complete();\n            if (count === 0) throw e;\n          });\n          return wrap(next);\n        };\n        return promise;\n      }\n    };\n  }\n  function hasHeader(args, name) {\n    for (var key in args.headers) {\n      if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true;\n    }\n    return false;\n  }\n  return {\n    request: makeRequest(function (url, args, resolve, reject) {\n      var method = args.method != null ? args.method.toUpperCase() : \"GET\";\n      var body = args.body;\n      var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams);\n      var responseType = args.responseType || (typeof args.extract === \"function\" ? \"\" : \"json\");\n      var xhr = new $window.XMLHttpRequest(),\n        aborted = false,\n        isTimeout = false;\n      var original = xhr,\n        replacedAbort;\n      var abort = xhr.abort;\n      xhr.abort = function () {\n        aborted = true;\n        abort.call(this);\n      };\n      xhr.open(method, url, args.async !== false, typeof args.user === \"string\" ? args.user : undefined, typeof args.password === \"string\" ? args.password : undefined);\n      if (assumeJSON && body != null && !hasHeader(args, \"content-type\")) {\n        xhr.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");\n      }\n      if (typeof args.deserialize !== \"function\" && !hasHeader(args, \"accept\")) {\n        xhr.setRequestHeader(\"Accept\", \"application/json, text/*\");\n      }\n      if (args.withCredentials) xhr.withCredentials = args.withCredentials;\n      if (args.timeout) xhr.timeout = args.timeout;\n      xhr.responseType = responseType;\n      for (var key in args.headers) {\n        if (hasOwn.call(args.headers, key)) {\n          xhr.setRequestHeader(key, args.headers[key]);\n        }\n      }\n      xhr.onreadystatechange = function (ev) {\n        // Don't throw errors on xhr.abort().\n        if (aborted) return;\n        if (ev.target.readyState === 4) {\n          try {\n            var success = ev.target.status >= 200 && ev.target.status < 300 || ev.target.status === 304 || /^file:\\/\\//i.test(url);\n            // When the response type isn't \"\" or \"text\",\n            // `xhr.responseText` is the wrong thing to use.\n            // Browsers do the right thing and throw here, and we\n            // should honor that and do the right thing by\n            // preferring `xhr.response` where possible/practical.\n            var response = ev.target.response,\n              message;\n            if (responseType === \"json\") {\n              // For IE and Edge, which don't implement\n              // `responseType: \"json\"`.\n              if (!ev.target.responseType && typeof args.extract !== \"function\") {\n                // Handle no-content which will not parse.\n                try {\n                  response = JSON.parse(ev.target.responseText);\n                } catch (e) {\n                  response = null;\n                }\n              }\n            } else if (!responseType || responseType === \"text\") {\n              // Only use this default if it's text. If a parsed\n              // document is needed on old IE and friends (all\n              // unsupported), the user should use a custom\n              // `config` instead. They're already using this at\n              // their own risk.\n              if (response == null) response = ev.target.responseText;\n            }\n            if (typeof args.extract === \"function\") {\n              response = args.extract(ev.target, args);\n              success = true;\n            } else if (typeof args.deserialize === \"function\") {\n              response = args.deserialize(response);\n            }\n            if (success) resolve(response);else {\n              var completeErrorResponse = function () {\n                try {\n                  message = ev.target.responseText;\n                } catch (e) {\n                  message = response;\n                }\n                var error = new Error(message);\n                error.code = ev.target.status;\n                error.response = response;\n                reject(error);\n              };\n              if (xhr.status === 0) {\n                // Use setTimeout to push this code block onto the event queue\n                // This allows `xhr.ontimeout` to run in the case that there is a timeout\n                // Without this setTimeout, `xhr.ontimeout` doesn't have a chance to reject\n                // as `xhr.onreadystatechange` will run before it\n                setTimeout(function () {\n                  if (isTimeout) return;\n                  completeErrorResponse();\n                });\n              } else completeErrorResponse();\n            }\n          } catch (e) {\n            reject(e);\n          }\n        }\n      };\n      xhr.ontimeout = function (ev) {\n        isTimeout = true;\n        var error = new Error(\"Request timed out\");\n        error.code = ev.target.status;\n        reject(error);\n      };\n      if (typeof args.config === \"function\") {\n        xhr = args.config(xhr, args, url) || xhr;\n\n        // Propagate the `abort` to any replacement XHR as well.\n        if (xhr !== original) {\n          replacedAbort = xhr.abort;\n          xhr.abort = function () {\n            aborted = true;\n            replacedAbort.call(this);\n          };\n        }\n      }\n      if (body == null) xhr.send();else if (typeof args.serialize === \"function\") xhr.send(args.serialize(body));else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body);else xhr.send(JSON.stringify(body));\n    }),\n    jsonp: makeRequest(function (url, args, resolve, reject) {\n      var callbackName = args.callbackName || \"_mithril_\" + Math.round(Math.random() * 1e16) + \"_\" + callbackCount++;\n      var script = $window.document.createElement(\"script\");\n      $window[callbackName] = function (data) {\n        delete $window[callbackName];\n        script.parentNode.removeChild(script);\n        resolve(data);\n      };\n      script.onerror = function () {\n        delete $window[callbackName];\n        script.parentNode.removeChild(script);\n        reject(new Error(\"JSONP request failed\"));\n      };\n      script.src = url + (url.indexOf(\"?\") < 0 ? \"?\" : \"&\") + encodeURIComponent(args.callbackKey || \"callback\") + \"=\" + encodeURIComponent(callbackName);\n      $window.document.documentElement.appendChild(script);\n    })\n  };\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/request/request.js?");

/***/ }),

/***/ "./node_modules/mithril/route.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/route.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar mountRedraw = __webpack_require__(/*! ./mount-redraw */ \"./node_modules/mithril/mount-redraw.js\");\nmodule.exports = __webpack_require__(/*! ./api/router */ \"./node_modules/mithril/api/router.js\")(typeof window !== \"undefined\" ? window : null, mountRedraw);\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/route.js?");

/***/ }),

/***/ "./node_modules/mithril/util/assign.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/util/assign.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// This exists so I'm only saving it once.\n\n\nvar hasOwn = __webpack_require__(/*! ./hasOwn */ \"./node_modules/mithril/util/hasOwn.js\");\nmodule.exports = Object.assign || function (target, source) {\n  for (var key in source) {\n    if (hasOwn.call(source, key)) target[key] = source[key];\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/util/assign.js?");

/***/ }),

/***/ "./node_modules/mithril/util/censor.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/util/censor.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// Note: this is mildly perf-sensitive.\n//\n// It does *not* use `delete` - dynamic `delete`s usually cause objects to bail\n// out into dictionary mode and just generally cause a bunch of optimization\n// issues within engines.\n//\n// Ideally, I would've preferred to do this, if it weren't for the optimization\n// issues:\n//\n// ```js\n// const hasOwn = require(\"./hasOwn\")\n// const magic = [\n//     \"key\", \"oninit\", \"oncreate\", \"onbeforeupdate\", \"onupdate\",\n//     \"onbeforeremove\", \"onremove\",\n// ]\n// module.exports = (attrs, extras) => {\n//     const result = Object.assign(Object.create(null), attrs)\n//     for (const key of magic) delete result[key]\n//     if (extras != null) for (const key of extras) delete result[key]\n//     return result\n// }\n// ```\nvar hasOwn = __webpack_require__(/*! ./hasOwn */ \"./node_modules/mithril/util/hasOwn.js\");\n// Words in RegExp literals are sometimes mangled incorrectly by the internal bundler, so use RegExp().\nvar magic = new RegExp(\"^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$\");\nmodule.exports = function (attrs, extras) {\n  var result = {};\n  if (extras != null) {\n    for (var key in attrs) {\n      if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) {\n        result[key] = attrs[key];\n      }\n    }\n  } else {\n    for (var key in attrs) {\n      if (hasOwn.call(attrs, key) && !magic.test(key)) {\n        result[key] = attrs[key];\n      }\n    }\n  }\n  return result;\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/util/censor.js?");

/***/ }),

/***/ "./node_modules/mithril/util/hasOwn.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/util/hasOwn.js ***!
  \*********************************************/
/***/ ((module) => {

eval("// This exists so I'm only saving it once.\n\n\nmodule.exports = {}.hasOwnProperty;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/mithril/util/hasOwn.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parts_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/tags */ \"./src/parts/tags.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _parts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/page */ \"./src/parts/page.js\");\n\n\n\n\nvar app = {\n  oninit: function oninit(vnode) {\n    vnode.state.container = []; // le tableau qui contiendra tous nos éléments\n    vnode.state.dnd = {\n      drag: null,\n      drop: null\n    }; // un objet qui va contenir l'élément pris et l'élément où il sera déposé\n    vnode.state.containers = {\n      source: null,\n      sink: null\n    }; // un objet qui va contenir les conteneurs de départ et d'arrivée de nos éléments\n  },\n  view: function view(vnode) {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"main\", {\n      className: \"\"\n    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"h-full w-full flex overflow-hidden\"\n    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_parts_tags__WEBPACK_IMPORTED_MODULE_1__.Tags, {\n      dnd: vnode.state.dnd\n    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_parts_page__WEBPACK_IMPORTED_MODULE_3__.Page, {\n      dnd: vnode.state.dnd,\n      container: vnode.state.container,\n      containers: vnode.state.containers\n    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-2/12 bg-black\"\n    })));\n  }\n};\nmithril__WEBPACK_IMPORTED_MODULE_0___default().mount(document.body, app);\n\n//# sourceURL=webpack://dnd2.0/./src/app.js?");

/***/ }),

/***/ "./src/components/viewer.js":
/*!**********************************!*\
  !*** ./src/components/viewer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Viewer: () => (/* binding */ Viewer)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar Viewer = {\n  view: function view(vnode) {\n    var _this = this;\n    if (vnode.attrs.component.type == \"span\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.attributs.value || \"Default\");else if (vnode.attrs.component.type == \"hx\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(vnode.attrs.component.attributs.balise, {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true,\n      ondragstart: function ondragstart(e) {\n        e.stopPropagation();\n        var _dragItemStart = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemStart)(vnode.attrs.container, vnode.attrs.component.attributs.id),\n          _dragItemStart2 = _slicedToArray(_dragItemStart, 2),\n          src = _dragItemStart2[0],\n          drag = _dragItemStart2[1];\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.containers.source = src;\n        console.log(\"Item \", drag, \" source \", src);\n      },\n      ondragover: function ondragover(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        vnode.attrs.containers.sink = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemOver)(vnode.attrs.container, vnode.attrs.component.attributs.id);\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        console.log(\"drop \", vnode.attrs.dnd.drag);\n        var _dropItem = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem)(vnode.attrs.containers, vnode.attrs.component.attributs.id, vnode.attrs.dnd.drag),\n          source = _dropItem.source,\n          sink = _dropItem.sink,\n          drag = _dropItem.drag;\n        vnode.attrs.containers.source = source;\n        vnode.attrs.containers.sink = sink;\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.dnd.drop = null;\n      }\n    }, vnode.attrs.component.attributs.value);else if (vnode.attrs.component.type == \"hr\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"hr\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"icon\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"i\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"group\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      id: vnode.attrs.component.attributs.id,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true,\n      ondragstart: function ondragstart(e) {\n        //e.preventDefault();\n        e.stopPropagation();\n        var _dragItemStart3 = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dragItemStart)(vnode.attrs.container, vnode.attrs.component.attributs.id),\n          _dragItemStart4 = _slicedToArray(_dragItemStart3, 2),\n          src = _dragItemStart4[0],\n          drag = _dragItemStart4[1];\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.containers.source = src;\n        console.log(\"Item \", drag, \" source \", src);\n      },\n      ondragover: function ondragover(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        // vnode.attrs.containers.sink = dragItemOver(\n        //   vnode.attrs.container,\n        //   vnode.attrs.component.attributs.id\n        // );\n      },\n      ondragenter: function ondragenter(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        vnode.attrs.containers.sink = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.enterContainer)(vnode.attrs.container, vnode.attrs.component.attributs.id, vnode.attrs.dnd);\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        console.log(\"drop \", vnode.attrs.dnd.drop);\n        console.log(\"Sink \", vnode.attrs.containers.sink);\n        var _dropItem2 = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem)(vnode.attrs.containers, vnode.attrs.component.attributs.id, vnode.attrs.dnd.drag),\n          source = _dropItem2.source,\n          sink = _dropItem2.sink,\n          drag = _dropItem2.drag;\n        vnode.attrs.containers.source = source;\n        vnode.attrs.containers.sink = sink;\n        vnode.attrs.dnd.drag = drag;\n        vnode.attrs.dnd.drop = null;\n      },\n      ondragleave: function ondragleave(e) {\n        // e.preventDefault();\n        e.stopPropagation();\n        (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.leaveContainer)(vnode.attrs.container, vnode.attrs.containers, vnode.attrs.component.attributs.id);\n      }\n    }, vnode.attrs.component.children.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(Viewer, {\n        component: item,\n        dnd: vnode.attrs.dnd,\n        container: vnode.attrs.container,\n        containers: vnode.attrs.containers\n      });\n    }));else if (vnode.attrs.component.type == \"button\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"button\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"label\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"input\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        \"for\": this.id\n      }, vnode.attrs.component.attributs.label, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        type: vnode.attrs.component.attributs.subtype,\n        placeholder: vnode.attrs.component.attributs.placeholder,\n        draggable: true\n      }));\n    } else if (vnode.attrs.component.type == \"textarea\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"textarea\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      placeholder: vnode.attrs.component.attributs.placeholder,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    });else if (vnode.attrs.component.type == \"form\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"form\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.children.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(viewer, {\n        component: item\n      });\n    }));else if (vnode.attrs.component.type == \"paragraph\") return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"p\", {\n      id: vnode.attrs.component.attributs.id,\n      \"class\": vnode.attrs.component.attributs[\"class\"],\n      name: vnode.attrs.component.attributs.name,\n      title: vnode.attrs.component.attributs.title,\n      style: vnode.attrs.component.attributs.style,\n      draggable: true\n    }, vnode.attrs.component.attributs.value);else if (vnode.attrs.component.type == \"radio\") {\n      return vnode.attrs.component.attributs.items.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", {\n          id: vnode.attrs.component.attributs.item,\n          \"class\": vnode.attrs.component.attributs[\"class\"],\n          name: vnode.attrs.component.attributs.name,\n          title: vnode.attrs.component.attributs.title,\n          style: vnode.attrs.component.attributs.style,\n          type: \"radio\"\n        }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n          \"for\": _this.id,\n          draggable: true\n        }, item)]);\n      });\n    } else if (vnode.attrs.component.type == \"select\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"label\", {\n        \"for\": this.id\n      }, vnode.attrs.component.attributs.label, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"select\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, [vnode.attrs.component.attributs.tab.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"option\", {\n          value: item\n        }, item);\n      })]));\n    } else if (vnode.attrs.component.type == \"table\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"table\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        title: vnode.attrs.component.attributs.title,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true\n      }, [vnode.attrs.component.attributs.head.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"tr\", {\n          style: \"border: 1px solid black;\"\n        }, [mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"td\", {\n          style: \"border: 1px solid black\"\n        }, item), vnode.attrs.component.attributs.dataItems.map(function (x) {\n          return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"td\", {\n            style: \"border: 1px solid black;\"\n          }, x);\n        })]);\n      })]);\n    } else if (vnode.attrs.component.type == \"link\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"a\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        href: vnode.attrs.component.attributs.href,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true,\n        ondragstart: startItem,\n        ondragover: dragoverItem,\n        ondrop: _utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem,\n        ondragend: end,\n        onclick: clickItem\n      }, vnode.attrs.component.attributs.value);\n    } else if (vnode.attrs.component.type == \"list\") {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"ul\", {\n        id: vnode.attrs.component.attributs.id,\n        \"class\": vnode.attrs.component.attributs[\"class\"],\n        name: vnode.attrs.component.attributs.name,\n        style: vnode.attrs.component.attributs.style,\n        draggable: true,\n        ondragstart: startItem,\n        ondragover: dragoverItem,\n        ondrop: _utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropItem,\n        ondragend: end,\n        onclick: clickItem\n      }, [vnode.attrs.component.attributs.dataItems.map(function (item) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"li\", item);\n      })]);\n    }\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/components/viewer.js?");

/***/ }),

/***/ "./src/parts/page.js":
/*!***************************!*\
  !*** ./src/parts/page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Page: () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\n/* harmony import */ var _components_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/viewer */ \"./src/components/viewer.js\");\n\n\n\nvar Page = {\n  view: function view(vnode) {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-8/12 overflow-y-scroll overflow-x-hidden\"\n      // style = \"all: unset\"\n      ,\n      ondragenter: function ondragenter(e) {\n        vnode.attrs.dnd.drop = vnode.attrs.container;\n        vnode.attrs.containers.sink = vnode.attrs.container;\n        console.log(vnode.attrs.dnd);\n      },\n      ondragover: function ondragover(e) {\n        return e.preventDefault();\n      },\n      ondrop: function ondrop(e) {\n        e.preventDefault();\n        (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_1__.dropTag)(vnode.attrs.dnd.drag, vnode.attrs.container);\n        vnode.attrs.dnd = {\n          drag: null,\n          drop: null\n        };\n      }\n    }, vnode.attrs.container.map(function (item) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_viewer__WEBPACK_IMPORTED_MODULE_2__.Viewer, {\n        component: item,\n        container: vnode.attrs.container,\n        containers: vnode.attrs.containers,\n        dnd: vnode.attrs.dnd\n      });\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/parts/page.js?");

/***/ }),

/***/ "./src/parts/tags.js":
/*!***************************!*\
  !*** ./src/parts/tags.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tags: () => (/* binding */ Tags)\n/* harmony export */ });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\n/* harmony import */ var _utils_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dnd */ \"./src/utils/dnd.js\");\n\n\n\nvar Tags = {\n  oninit: function oninit(vnode) {\n    vnode.state.showTypes = [false, false, false];\n  },\n  view: function view(vnode) {\n    var types = [\"simple\", \"container\", \"widgets\"];\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n      className: \"w-2/12 border bg-black text-xs text-white overflow-auto\"\n    }, types.map(function (type, indexType) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n        className: \"flex justify-between items-center w-full p-2 border hover:bg-[#363636] border-gray-300\",\n        onclick: function onclick(e) {\n          console.log(vnode.state.showTypes[indexType]);\n          vnode.state.showTypes[indexType] = !vnode.state.showTypes[indexType];\n        }\n      }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span\", null, type), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"i\", {\n        className: \"fa-solid fa-chevron-left transform transition-all duration-200 ease-in-out text-xs \".concat(vnode.state.showTypes[indexType] && \"rotate-90 text-red-400\")\n      })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", null, _assets_tags_json__WEBPACK_IMPORTED_MODULE_1__.map(function (item) {\n        return vnode.state.showTypes[indexType] && item.type === type && mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"div\", {\n          className: \"p-2 hover:bg-[#363636] hover:cursor-pointer\",\n          draggable: true,\n          ondragstart: function ondragstart() {\n            vnode.attrs.dnd.drag = (0,_utils_dnd__WEBPACK_IMPORTED_MODULE_2__.createStart)(item.id);\n            console.log(\"start \", vnode.attrs.dnd);\n          }\n        }, item.value);\n      })));\n    }));\n  }\n};\n\n//# sourceURL=webpack://dnd2.0/./src/parts/tags.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStart: () => (/* binding */ createStart),\n/* harmony export */   dragItemOver: () => (/* binding */ dragItemOver),\n/* harmony export */   dragItemStart: () => (/* binding */ dragItemStart),\n/* harmony export */   dropItem: () => (/* binding */ dropItem),\n/* harmony export */   dropTag: () => (/* binding */ dropTag),\n/* harmony export */   enterContainer: () => (/* binding */ enterContainer),\n/* harmony export */   leaveContainer: () => (/* binding */ leaveContainer)\n/* harmony export */ });\n/* harmony import */ var _constructeur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructeur */ \"./src/utils/constructeur.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _assets_tags_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/tags.json */ \"./assets/tags.json\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar dragEnterCounter = false;\nfunction createStart(value) {\n  // un élément tiré de l'ensemble des balises\n\n  console.log(\"Start \", value);\n  return {\n    tag: value,\n    source: \"tags\"\n  };\n}\nfunction dropTag(item, container) {\n  if (item.source === \"tags\") {\n    container.push((0,_constructeur__WEBPACK_IMPORTED_MODULE_0__.modelCreate)(item.tag));\n  }\n}\nfunction dragItemStart(container, id) {\n  var src = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  var drag = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(src, id);\n  return [src, drag];\n}\nfunction dragItemOver(container, id) {\n  var sink = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  console.log(\"Over leave: \", sink, \" id: \", id);\n  return sink;\n}\nfunction dropItem(containers, id, drag) {\n  dragEnterCounter = 0;\n  var source = containers.source,\n    sink = containers.sink;\n  var dragItem = drag;\n  var dropItem = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(sink, id);\n  console.log(\"Sinkkkk \", sink, \" id: \", id, \" drop \", dropItem);\n  if (dropItem.children !== undefined && id != \"temp\") sink = dropItem.children;\n  if (dragItem === dropItem) return false;\n  console.log(\"Drop: \", dropItem);\n  if (source === sink) {\n    console.log(\"Meme source\");\n    var dragIndex = source.indexOf(dragItem);\n    var dropIndex = source.indexOf(dropItem);\n    if (dragIndex !== dropIndex) {\n      var _source$splice = source.splice(dragIndex, 1),\n        _source$splice2 = _slicedToArray(_source$splice, 1),\n        removedItem = _source$splice2[0]; // Supprimer l'élément de sa position actuelle\n      source.splice(dropIndex, 0, removedItem); // Insérer l'élément à la nouvelle position\n    }\n  } else {\n    console.log(\"Source différente\");\n    sink.pop(); // pour supprimer la div temporaire\n    if (dragItem.source) sink.push((0,_constructeur__WEBPACK_IMPORTED_MODULE_0__.modelCreate)(dragItem.tag));else {\n      var _dragIndex = source.indexOf(dragItem);\n      var _source$splice3 = source.splice(_dragIndex, 1),\n        _source$splice4 = _slicedToArray(_source$splice3, 1),\n        _removedItem = _source$splice4[0];\n      sink.push(_removedItem);\n    }\n  }\n  source = null;\n  sink = null;\n  drag = null;\n  return {\n    source: source,\n    sink: sink,\n    drag: drag\n  };\n}\nfunction enterContainer(container, id, dnd) {\n  var sink = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  if (id !== \"temp\") {\n    dragEnterCounter = true;\n    console.log(\"Enter \", dragEnterCounter);\n    console.log(\"Dans un container tempco\", container);\n    dnd.drop = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(sink, id);\n\n    // if (dnd.drop.children) sink = dnd.drop.children; // si l'on est dans un sous-conteneur on ajoute au contenu de ce dernier\n\n    if (dnd.drop && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.shouldCreateTempDiv)(dnd.drag, dnd.drop, dnd.drop.children)) {\n      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createTempDiv)(dnd.drop.children);\n    }\n    console.log(\"Voici sink \", sink);\n  }\n  return sink;\n}\nfunction leaveContainer(container, containers, id) {\n  if (id !== \"temp\") dragEnterCounter = false;\n  var containerLeft = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParentById)(container, id);\n  var eltLeft = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getEltById)(containerLeft, id);\n  console.log(\"I leave \", id, \" tempco \", dragEnterCounter, \" sink \", containers.sink, \" left \", containerLeft);\n  if (!dragEnterCounter && containers.sink === containerLeft && id !== \"temp\") {\n    console.log(\"Leave \", eltLeft.children);\n    if (eltLeft.children[eltLeft.children.length - 1].attributs.id == \"temp\") {\n      eltLeft.children.pop();\n    }\n  }\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/dnd.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTempDiv: () => (/* binding */ createTempDiv),\n/* harmony export */   getEltById: () => (/* binding */ getEltById),\n/* harmony export */   getParentById: () => (/* binding */ getParentById),\n/* harmony export */   shouldCreateTempDiv: () => (/* binding */ shouldCreateTempDiv)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction getParentById(ct, id) {\n  var c, re;\n  console.log(\"getParent \");\n  console.log(ct);\n  var _iterator = _createForOfIteratorHelper(ct),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      c = _step.value;\n      console.log(\"e= \" + c.attributs.id + \"id=\" + id);\n      console.log(c);\n      if (c.attributs.id == id) return ct;else if (c.children) if ((re = getParentById(c.children, id)) != null) return re;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return null;\n}\nfunction getEltById(ct, id) {\n  var i;\n  var _iterator2 = _createForOfIteratorHelper(ct),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      i = _step2.value;\n      if (i.attributs.id == id) return i;\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}\nfunction shouldCreateTempDiv(dragItem, dropTarget, dropTargetContainer) {\n  //   if (dragItem === dropTarget) return false;\n  console.log(\"droptargetcontainer\", dropTarget, \" dragItem \", dragItem, \"index dragItem \", dropTarget.children.indexOf(dragItem));\n  if (getEltById(dropTargetContainer, \"temp\")) return false;\n  if (dragItem.children && getParentById(dragItem.children, dropTarget.id)) return false;\n  if (dropTarget.children.indexOf(dragItem) !== -1) return false;\n  if (dragItem === dropTarget) return false;\n  return true;\n}\nfunction createTempDiv(container) {\n  var tempDivAttributes = {\n    id: \"temp\",\n    style: \"width: 100%; height: 50px; border: 1px dotted black; border-radius: 20px; margin-bottom: 10px; margin-top: 10px\"\n  };\n  container.push({\n    type: \"group\",\n    attributs: tempDivAttributes,\n    children: []\n  });\n}\n\n//# sourceURL=webpack://dnd2.0/./src/utils/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \\`sans\\` font-family by default.\n5. Use the user's configured \\`sans\\` font-feature-settings by default.\n6. Use the user's configured \\`sans\\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \\`html\\` so users can set them as a class directly on the \\`html\\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \\`mono\\` font-family by default.\n2. Use the user's configured \\`mono\\` font-feature-settings by default.\n3. Use the user's configured \\`mono\\` font-variation-settings by default.\n4. Correct the odd \\`em\\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \\`sub\\` and \\`sup\\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \\`:invalid\\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \\`inherit\\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \\`display: block\\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \\`vertical-align: middle\\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.collapse {\n  visibility: collapse;\n}\r\n.flex {\n  display: flex;\n}\r\n.table {\n  display: table;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.w-2\\\\/12 {\n  width: 16.666667%;\n}\r\n.w-8\\\\/12 {\n  width: 66.666667%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.border-collapse {\n  border-collapse: collapse;\n}\r\n.rotate-90 {\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.overflow-auto {\n  overflow: auto;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.overflow-scroll {\n  overflow: scroll;\n}\r\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\r\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\r\n.bg-\\\\[\\\\#262626\\\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(38 38 38 / var(--tw-bg-opacity));\n}\r\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\r\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-200 {\n  transition-duration: 200ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n\r\n}\r\n/* Firefox (uncomment to work in Firefox, although other properties will not work!)  */\r\n/** {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #FFFFFF #F2FDFF;\r\n}*/\r\n\r\n/* Chrome, Edge and Safari */\r\n*::-webkit-scrollbar {\r\n    height: 2px;\r\n    width: 2px;\r\n  }\r\n  *::-webkit-scrollbar-track {\r\n    border-radius: 0px;\r\n    background-color: #F2FDFF;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-track:hover {\r\n    background-color: #000000;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-track:active {\r\n    background-color: #B8C0C2;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-thumb {\r\n    border-radius: 5px;\r\n    background-color: #FFFFFF;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-thumb:hover {\r\n    background-color: #CACACA;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-thumb:active {\r\n    background-color: #A3A3A3;\r\n  }\r\n  \r\n\r\n\r\nbody, html, main{\r\n    width: 100%;\r\n    height: 100%;\r\n    /* font-family: 'Inter', sans-serif;\r\n    font-weight: 100; */\r\n}\r\n\r\n.rotate-90 {\r\n    transform: rotate(90deg) !important;\r\n  }\r\n\r\n.hover\\\\:cursor-pointer:hover {\n  cursor: pointer;\n}\r\n\r\n.hover\\\\:bg-\\\\[\\\\#363636\\\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(54 54 54 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\\\:bg-\\\\[\\\\#0c0808\\\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 8 8 / var(--tw-bg-opacity));\n}\r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dnd2.0/./style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dnd2.0/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dnd2.0/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dnd2.0/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/tags.json":
/*!**************************!*\
  !*** ./assets/tags.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":\"hx\",\"value\":\"hx\",\"type\":\"simple\"},{\"id\":\"hr\",\"value\":\"hr\",\"type\":\"simple\"},{\"id\":\"img\",\"value\":\"img\",\"type\":\"simple\"},{\"id\":\"span\",\"value\":\"span\",\"type\":\"simple\"},{\"id\":\"radio\",\"value\":\"radio\",\"type\":\"simple\"},{\"id\":\"label\",\"value\":\"label\",\"type\":\"simple\"},{\"id\":\"icon\",\"value\":\"icon\",\"type\":\"simple\"},{\"id\":\"input\",\"value\":\"input\",\"type\":\"simple\"},{\"id\":\"button\",\"value\":\"button\",\"type\":\"simple\"},{\"id\":\"select\",\"value\":\"select\",\"type\":\"simple\"},{\"id\":\"textarea\",\"value\":\"textarea\",\"type\":\"simple\"},{\"id\":\"nav\",\"value\":\"nav\",\"type\":\"container\"},{\"id\":\"tag\",\"value\":\"tag\",\"type\":\"container\"},{\"id\":\"link\",\"value\":\"link\",\"type\":\"container\"},{\"id\":\"list\",\"value\":\"list\",\"type\":\"container\"},{\"id\":\"form\",\"value\":\"form\",\"type\":\"container\"},{\"id\":\"group\",\"value\":\"group\",\"type\":\"container\"},{\"id\":\"table\",\"value\":\"table\",\"type\":\"container\"},{\"id\":\"accordion\",\"value\":\"accordion\",\"type\":\"container\"},{\"id\":\"dropdown\",\"value\":\"dropdown\",\"type\":\"container\"},{\"id\":\"paragraph\",\"value\":\"paragraph\",\"type\":\"container\"},{\"id\":\"outlet\",\"value\":\"outlet\",\"type\":\"widgets\"},{\"id\":\"wizard\",\"value\":\"wizard\",\"type\":\"widgets\"},{\"id\":\"treeview\",\"value\":\"treeview\",\"type\":\"widgets\"},{\"id\":\"carousel\",\"value\":\"carousel\",\"type\":\"widgets\"},{\"id\":\"display\",\"value\":\"display\",\"type\":\"widgets\"}]');\n\n//# sourceURL=webpack://dnd2.0/./assets/tags.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("c82484e0318b887c3739")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dnd2.0:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatednd2_0"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;