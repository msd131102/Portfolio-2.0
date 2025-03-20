"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/client-view/about/index.js":
/*!***************************************************!*\
  !*** ./src/components/client-view/about/index.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClientAboutView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation-wrapper */ \"(app-pages-browser)/./src/components/client-view/animation-wrapper/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_about_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/about-image.png */ \"(app-pages-browser)/./src/assets/about-image.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction variants() {\n    return {\n        offscreen: {\n            y: 150,\n            opacity: 0\n        },\n        onscreen: function() {\n            let { duration = 2 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n            return {\n                y: 0,\n                opacity: 1,\n                transition: {\n                    type: \"spring\",\n                    duration\n                }\n            };\n        }\n    };\n}\nconst skillItemVariant = {\n    hidden: {\n        y: 20,\n        opacity: 0\n    },\n    visible: {\n        y: 0,\n        opacity: 1\n    }\n};\nfunction ClientAboutView(param) {\n    let { data } = param;\n    _s();\n    console.log(data, \"aboutdata\");\n    const setVariants = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>variants(), []);\n    const aboutDataInfo = [\n        {\n            label: \"Client\",\n            value: (data === null || data === void 0 ? void 0 : data.noofclients) || \"0\"\n        },\n        {\n            label: \"Projects\",\n            value: (data === null || data === void 0 ? void 0 : data.noofprojects) || \"0\"\n        },\n        {\n            label: \"Experience\",\n            value: (data === null || data === void 0 ? void 0 : data.yearofexperience) || \"0\"\n        }\n    ];\n    const headingText = \"Why Hire Me For Your Next Project ?\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto\",\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-main bg-ehite-500 z-10\",\n                    children: aboutDataInfo.map((infoItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            className: \"flex items-center justify-start\\n                \".concat(index === 0 ? \"sm:justify-start\" : index === 1 ? \"sm:justify-center\" : \"sm:justify-end\", \" py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0\\n                \"),\n                            custom: {\n                                duration: 2 + index\n                            },\n                            variants: setVariants,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex m-0 w-40 sm:w-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-[50px] text-green-main font-bold\",\n                                            children: [\n                                                infoItem.value,\n                                                \"+\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-[25px] font-bold text-[#000000]\",\n                                            children: infoItem.label\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"pt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center row-start-2 sm:row-start-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium\",\n                            children: headingText.split(\" \").map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat(index === 6 ? \"text-green-main\" : \"text-[#000]\"),\n                                    children: [\n                                        item,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#000] mt-4 mb-8 font-bold\",\n                            children: data === null || data === void 0 ? void 0 : data.aboutme\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"flex w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            variants: setVariants,\n                            className: \"h-full w-full p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: _assets_about_image_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"About Me\",\n                                layout: \"responsive\",\n                                height: 414,\n                                width: 508,\n                                quality: 100\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"flex items-center w-full p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            variants: setVariants,\n                            className: \"grid gap-4 grid-cols-3 h-full max-h-[200px] w-full\",\n                            children: data === null || data === void 0 ? void 0 : data.skills.split(\",\").map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"w-full flex justify-center items-center\",\n                                    variants: skillItemVariant,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[160px] px-0 border border-gray-300 rounded-lg shadow-sm border-green-main bg-[#fff] text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-main transition-all outline-none\",\n                                        children: skill\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\about\\\\index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(ClientAboutView, \"o0/rSScTxgsoQkmosJ2kzXOzHzU=\");\n_c = ClientAboutView;\nvar _c;\n$RefreshReg$(_c, \"ClientAboutView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NsaWVudC12aWV3L2Fib3V0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ29CO0FBQ2I7QUFDUjtBQUM0QjtBQUUzRCxTQUFTSztJQUNQLE9BQU87UUFDTEMsV0FBVztZQUNUQyxHQUFHO1lBQ0hDLFNBQVM7UUFDWDtRQUNBQyxVQUFVO2dCQUFDLEVBQUVDLFdBQVcsQ0FBQyxFQUFFLG9FQUFHLENBQUM7bUJBQU87Z0JBQ3BDSCxHQUFHO2dCQUNIQyxTQUFTO2dCQUNURyxZQUFZO29CQUNWQyxNQUFNO29CQUNORjtnQkFDRjtZQUNGO1FBQUE7SUFDRjtBQUNGO0FBRUEsTUFBTUcsbUJBQW1CO0lBQ3ZCQyxRQUFRO1FBQUVQLEdBQUc7UUFBSUMsU0FBUztJQUFFO0lBQzVCTyxTQUFTO1FBQ1BSLEdBQUc7UUFDSEMsU0FBUztJQUNYO0FBQ0Y7QUFFZSxTQUFTUSxnQkFBZ0IsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUN0Q0MsUUFBUUMsR0FBRyxDQUFDRixNQUFNO0lBRWxCLE1BQU1HLGNBQWNwQiw4Q0FBT0EsQ0FBQyxJQUFNSyxZQUFZLEVBQUU7SUFFaEQsTUFBTWdCLGdCQUFnQjtRQUNwQjtZQUNFQyxPQUFPO1lBQ1BDLE9BQU9OLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTU8sV0FBVyxLQUFJO1FBQzlCO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxPQUFPTixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1RLFlBQVksS0FBSTtRQUMvQjtRQUNBO1lBQ0VILE9BQU87WUFDUEMsT0FBT04sQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNUyxnQkFBZ0IsS0FBSTtRQUNuQztLQUNEO0lBRUQsTUFBTUMsY0FBYztJQUVwQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtRQUE2RUMsSUFBRzs7MEJBQzdGLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzVCLDBEQUFnQkE7b0JBQUM0QixXQUFVOzhCQUN6QlIsY0FBY1UsR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUM1Qiw4REFBQy9CLGlEQUFNQSxDQUFDMEIsR0FBRzs0QkFDVEMsV0FBVyxvREFNUixPQUxDSSxVQUFVLElBQ1IscUJBQ0FBLFVBQVUsSUFDUixzQkFDQSxrQkFDTDs0QkFHSEMsUUFBUTtnQ0FBRXhCLFVBQVUsSUFBSXVCOzRCQUFNOzRCQUM5QjVCLFVBQVVlO3NDQUVWLDRFQUFDUTtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTTs0Q0FBRU4sV0FBVTs7Z0RBQ1ZHLFNBQVNULEtBQUs7Z0RBQUM7Ozs7Ozs7c0RBRWxCLDhEQUFDWTs0Q0FBRU4sV0FBVTtzREFDVkcsU0FBU1YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBVmhCVzs7Ozs7Ozs7Ozs7Ozs7OzBCQWtCYiw4REFBQ2hDLDBEQUFnQkE7Z0JBQUM0QixXQUFXOzBCQUMzQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFBR1AsV0FBVTtzQ0FDWEYsWUFBWVUsS0FBSyxDQUFDLEtBQUtOLEdBQUcsQ0FBQyxDQUFDTyxNQUFNTCxzQkFDakMsOERBQUNNO29DQUNDVixXQUFXLEdBQW1ELE9BQWhESSxVQUFVLElBQUksb0JBQW9COzt3Q0FFL0NLO3dDQUFNOzs7Ozs7Ozs7Ozs7c0NBSWIsOERBQUNIOzRCQUFFTixXQUFVO3NDQUFtQ1osaUJBQUFBLDJCQUFBQSxLQUFNdUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2pFLDhEQUFDWjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUM1QiwwREFBZ0JBO3dCQUFDNEIsV0FBVTtrQ0FDMUIsNEVBQUMzQixpREFBTUEsQ0FBQzBCLEdBQUc7NEJBQUN2QixVQUFVZTs0QkFBYVMsV0FBVTtzQ0FDM0MsNEVBQUMxQixtREFBS0E7Z0NBQ0pzQyxLQUFLckMsK0RBQVlBO2dDQUNqQnNDLEtBQUk7Z0NBQ0pDLFFBQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLE9BQU87Z0NBQ1BDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWYsOERBQUM3QywwREFBZ0JBO3dCQUFDNEIsV0FBVztrQ0FDM0IsNEVBQUMzQixpREFBTUEsQ0FBQzBCLEdBQUc7NEJBQ1R2QixVQUFVZTs0QkFDVlMsV0FBVTtzQ0FFVFosaUJBQUFBLDJCQUFBQSxLQUFNOEIsTUFBTSxDQUFDVixLQUFLLENBQUMsS0FBS04sR0FBRyxDQUFDLENBQUNpQixzQkFDNUIsOERBQUM5QyxpREFBTUEsQ0FBQzBCLEdBQUc7b0NBQ1RDLFdBQVU7b0NBQ1Z4QixVQUFVUTs4Q0FFViw0RUFBQ29DO3dDQUFPcEIsV0FBVTtrREFFZm1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkI7R0F0R3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2xpZW50LXZpZXcvYWJvdXQvaW5kZXguanM/MWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFuaW1hdGlvbldyYXBwZXIgZnJvbSBcIi4uL2FuaW1hdGlvbi13cmFwcGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYWJvdXRNZUltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvYWJvdXQtaW1hZ2UucG5nXCI7XG5cbmZ1bmN0aW9uIHZhcmlhbnRzKCkge1xuICByZXR1cm4ge1xuICAgIG9mZnNjcmVlbjoge1xuICAgICAgeTogMTUwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIG9uc2NyZWVuOiAoeyBkdXJhdGlvbiA9IDIgfSA9IHt9KSA9PiAoe1xuICAgICAgeTogMCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcbn1cblxuY29uc3Qgc2tpbGxJdGVtVmFyaWFudCA9IHtcbiAgaGlkZGVuOiB7IHk6IDIwLCBvcGFjaXR5OiAwIH0sXG4gIHZpc2libGU6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnRBYm91dFZpZXcoeyBkYXRhIH0pIHtcbiAgY29uc29sZS5sb2coZGF0YSwgXCJhYm91dGRhdGFcIik7XG5cbiAgY29uc3Qgc2V0VmFyaWFudHMgPSB1c2VNZW1vKCgpID0+IHZhcmlhbnRzKCksIFtdKTtcblxuICBjb25zdCBhYm91dERhdGFJbmZvID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkNsaWVudFwiLFxuICAgICAgdmFsdWU6IGRhdGE/Lm5vb2ZjbGllbnRzIHx8IFwiMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiUHJvamVjdHNcIixcbiAgICAgIHZhbHVlOiBkYXRhPy5ub29mcHJvamVjdHMgfHwgXCIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJFeHBlcmllbmNlXCIsXG4gICAgICB2YWx1ZTogZGF0YT8ueWVhcm9mZXhwZXJpZW5jZSB8fCBcIjBcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhlYWRpbmdUZXh0ID0gXCJXaHkgSGlyZSBNZSBGb3IgWW91ciBOZXh0IFByb2plY3QgP1wiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgbXQtMjQgbWItNiBzbTptdC0xNCBzbTptYi0xNCBweC02IHNtOnB4LTggbGc6cHgtMTYgbXgtYXV0b1wiIGlkPVwiYWJvdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXhcIj5cbiAgICAgICAgPEFuaW1hdGlvbldyYXBwZXIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyB3LWZ1bGwgZ3JpZC1mbG93LXJvdyBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0zIHB5LTkgZGl2aWRlLXktMiBzbTpkaXZpZGUteS0wIHNtOmRpdmlkZS14LTIgZGl2aWRlLWdyZWVuLW1haW4gYmctZWhpdGUtNTAwIHotMTBcIj5cbiAgICAgICAgICB7YWJvdXREYXRhSW5mby5tYXAoKGluZm9JdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFxuICAgICAgICAgICAgICAgICR7aW5kZXggPT09IDBcbiAgICAgICAgICAgICAgICAgID8gXCJzbTpqdXN0aWZ5LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIDogaW5kZXggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgPyBcInNtOmp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInNtOmp1c3RpZnktZW5kXCJcbiAgICAgICAgICAgICAgICB9IHB5LTQgc206cHktNiB3LTgvMTIgcHgtNCBzbTp3LWF1dG8gbXgtYXV0byBzbTpteC0wXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY3VzdG9tPXt7IGR1cmF0aW9uOiAyICsgaW5kZXggfX1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e3NldFZhcmlhbnRzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbS0wIHctNDAgc206dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs1MHB4XSB0ZXh0LWdyZWVuLW1haW4gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpbmZvSXRlbS52YWx1ZX0rXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyNXB4XSBmb250LWJvbGQgdGV4dC1bIzAwMDAwMF1cIj5cbiAgICAgICAgICAgICAgICAgICAge2luZm9JdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRpb25XcmFwcGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8QW5pbWF0aW9uV3JhcHBlciBjbGFzc05hbWU9e1wicHQtNlwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3ctc3RhcnQtMiBzbTpyb3ctc3RhcnQtMVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZWFkaW5nLVs3MHB4XSBtYi00IHRleHQtM3hsIGxnOnRleHQtNHhsIHhsOnRleHQtNXhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7aGVhZGluZ1RleHQuc3BsaXQoXCIgXCIpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luZGV4ID09PSA2ID8gXCJ0ZXh0LWdyZWVuLW1haW5cIiA6IFwidGV4dC1bIzAwMF1cIn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW19e1wiIFwifVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyMwMDBdIG10LTQgbWItOCBmb250LWJvbGRcIj57ZGF0YT8uYWJvdXRtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRpb25XcmFwcGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3cgc206Z3JpZC1mbG93LWNvbCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICA8QW5pbWF0aW9uV3JhcHBlciBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzZXRWYXJpYW50c30gY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBwLTRcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2Fib3V0TWVJbWFnZX1cbiAgICAgICAgICAgICAgYWx0PVwiQWJvdXQgTWVcIlxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MTR9XG4gICAgICAgICAgICAgIHdpZHRoPXs1MDh9XG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L0FuaW1hdGlvbldyYXBwZXI+XG4gICAgICAgIDxBbmltYXRpb25XcmFwcGVyIGNsYXNzTmFtZT17XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgcC00XCJ9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17c2V0VmFyaWFudHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdhcC00IGdyaWQtY29scy0zIGgtZnVsbCBtYXgtaC1bMjAwcHhdIHctZnVsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RhdGE/LnNraWxscy5zcGxpdChcIixcIikubWFwKChza2lsbCkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3NraWxsSXRlbVZhcmlhbnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHRleHQtZWxsaXBzaXMgb3ZlcmZsb3ctaGlkZGVuIHB5LTMgdy1bMTYwcHhdIHB4LTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1zbVxuIGJvcmRlci1ncmVlbi1tYWluIGJnLVsjZmZmXSB0ZXh0LVsjMDAwXSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgdGV4dC14bCB0cmFja2luZy13aWRlc3QgaG92ZXI6c2hhZG93LWdyZWVuLW1haW4gdHJhbnNpdGlvbi1hbGwgb3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICB7c2tpbGx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRpb25XcmFwcGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIkFuaW1hdGlvbldyYXBwZXIiLCJtb3Rpb24iLCJJbWFnZSIsImFib3V0TWVJbWFnZSIsInZhcmlhbnRzIiwib2Zmc2NyZWVuIiwieSIsIm9wYWNpdHkiLCJvbnNjcmVlbiIsImR1cmF0aW9uIiwidHJhbnNpdGlvbiIsInR5cGUiLCJza2lsbEl0ZW1WYXJpYW50IiwiaGlkZGVuIiwidmlzaWJsZSIsIkNsaWVudEFib3V0VmlldyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0VmFyaWFudHMiLCJhYm91dERhdGFJbmZvIiwibGFiZWwiLCJ2YWx1ZSIsIm5vb2ZjbGllbnRzIiwibm9vZnByb2plY3RzIiwieWVhcm9mZXhwZXJpZW5jZSIsImhlYWRpbmdUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJtYXAiLCJpbmZvSXRlbSIsImluZGV4IiwiY3VzdG9tIiwicCIsImgxIiwic3BsaXQiLCJpdGVtIiwic3BhbiIsImFib3V0bWUiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJoZWlnaHQiLCJ3aWR0aCIsInF1YWxpdHkiLCJza2lsbHMiLCJza2lsbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/client-view/about/index.js\n"));

/***/ })

});