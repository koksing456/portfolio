"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#f0e7db\", \"#202023\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    grassTeal: \"#88ccca\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsSUFBTUUsTUFBTSxHQUFHO0lBQ2JDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2hCQyxJQUFJLEVBQUU7Z0JBQ0pDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQzthQUN0QztTQUNGO0tBQUM7Q0FDSDtBQUVELElBQU1HLFVBQVUsR0FBRztJQUNqQkMsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRTtnQkFDZkMsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLFNBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNEQyxJQUFJLEVBQUU7UUFDSkMsU0FBUyxFQUFFZCxTQUFBQSxLQUFLO21CQUFLO2dCQUNuQmUsS0FBSyxFQUFFbEIsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQztnQkFDeENRLG1CQUFtQixFQUFFLENBQUM7YUFDdkI7U0FBQztLQUNIO0NBQ0Y7QUFFRCxJQUFNUSxLQUFLLEdBQUc7SUFDWkMsT0FBTyxFQUFFLHFCQUFxQjtDQUMvQjtBQUVELElBQU1DLE1BQU0sR0FBRztJQUNiQyxTQUFTLEVBQUUsU0FBUztDQUNyQjtBQUVELElBQU1DLE1BQU0sR0FBRztJQUNiQyxnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCQyxrQkFBa0IsRUFBRSxJQUFJO0NBQ3pCO0FBRUQsSUFBTUMsS0FBSyxHQUFHM0IsNkRBQVcsQ0FBQztJQUFFd0IsTUFBTSxFQUFOQSxNQUFNO0lBQUV0QixNQUFNLEVBQU5BLE1BQU07SUFBRUssVUFBVSxFQUFWQSxVQUFVO0lBQUVhLEtBQUssRUFBTEEsS0FBSztJQUFFRSxNQUFNLEVBQU5BLE1BQU07Q0FBRSxDQUFDO0FBQ3hFLCtEQUFlSyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi90aGVtZS5qcz8zMzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xyXG4gICAgYm9keToge1xyXG4gICAgICBiZzogbW9kZSgnI2YwZTdkYicsICcjMjAyMDIzJykocHJvcHMpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICBIZWFkaW5nOiB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICAnc2VjdGlvbi10aXRsZSc6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG4gICAgICAgIG1hcmdpblRvcDogMyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgTGluazoge1xyXG4gICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICBjb2xvcjogbW9kZSgnIzNkN2FlZCcsICcjZmY2M2MzJykocHJvcHMpLFxyXG4gICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufVxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gIGdyYXNzVGVhbDogJyM4OGNjY2EnXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcsIHN0eWxlcywgY29tcG9uZW50cywgZm9udHMsIGNvbG9ycyB9KVxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdyYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/main */ \"./components/layouts/main.js\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar Website = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, router = param.router;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            router: router,\n            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                key: router.route,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\koksi\\\\Dropbox\\\\My PC (LAPTOP-T6QCSJ6T)\\\\Desktop\\\\Journey to Web3\\\\portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                },\n                __self: _this\n            }))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\koksi\\\\Dropbox\\\\My PC (LAPTOP-T6QCSJ6T)\\\\Desktop\\\\Journey to Web3\\\\portfolio\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\koksi\\\\Dropbox\\\\My PC (LAPTOP-T6QCSJ6T)\\\\Desktop\\\\Journey to Web3\\\\portfolio\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDRjtBQUNoQjtBQUVoQyxJQUFNRyxPQUFPLEdBQUcsZ0JBQW9DO1FBQWxDQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUMxQyxxQkFDSSw4REFBQ04sNERBQWM7a0JBQ1gsNEVBQUNDLGdFQUFNO1lBQUNLLE1BQU0sRUFBRUEsTUFBTTtzQkFDbEIsbUVBQUNGLFNBQVMsb0JBQUtDLFNBQVM7Z0JBQUVFLEdBQUcsRUFBRUQsTUFBTSxDQUFDRSxLQUFLOzs7Ozs7O2VBQUc7Ozs7O2lCQUN6Qzs7Ozs7YUFDSSxDQUNwQjtDQUNKO0FBUktMLEtBQUFBLE9BQU87QUFVYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9tYWluJztcclxuaW1wb3J0IFRoZW1lIGZyb20gJy4uL2xpYi90aGVtZSdcclxuXHJcbmNvbnN0IFdlYnNpdGUgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXJ9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgICAgICAgPExheW91dCByb3V0ZXI9e3JvdXRlcn0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfS8+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGUiXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJMYXlvdXQiLCJUaGVtZSIsIldlYnNpdGUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJrZXkiLCJyb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});