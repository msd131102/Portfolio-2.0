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

/***/ "(app-pages-browser)/./src/components/client-view/home/index.js":
/*!**************************************************!*\
  !*** ./src/components/client-view/home/index.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClientHomeView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation-wrapper */ \"(app-pages-browser)/./src/components/client-view/animation-wrapper/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaInstagram_FaLinkedinIn_FaTwitter_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaInstagram,FaLinkedinIn,FaTwitter!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_ai_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/ai-image.png */ \"(app-pages-browser)/./src/assets/ai-image.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction variants() {\n    return {\n        offscreen: {\n            y: 150,\n            opacity: 0\n        },\n        onscreen: function() {\n            let { duration = 2 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n            return {\n                y: 0,\n                opacity: 1,\n                transition: {\n                    type: \"spring\",\n                    duration\n                }\n            };\n        }\n    };\n}\nconst socialIcons = [\n    //{///\n    //id: \"facebook\",\n    //// link: \"https://www.facebook.com\",\n    //icon: (\n    // <FaFacebookF color=\"rgba(13, 183, 96, 1)\" className=\"w-[40px] h-[40px] \" />\n    // ),\n    //},///\n    {\n        id: \"twitter\",\n        link: \"https://x.com/shiv56499\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaLinkedinIn_FaTwitter_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTwitter, {\n            color: \"rgba(13, 183, 96, 1)\",\n            className: \"w-[40px] h-[40px] \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    },\n    {\n        id: \"linkedin\",\n        link: \"https://www.linkedin.com/in/sivadora-madepalli-16a8a3228/\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaLinkedinIn_FaTwitter_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaLinkedinIn, {\n            color: \"rgba(13, 183, 96, 1)\",\n            className: \"w-[40px] h-[40px] \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    },\n    {\n        id: \"instagram\",\n        link: \"https://www.instagram.com/the.shiv.artistic._.soul\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaLinkedinIn_FaTwitter_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaInstagram, {\n            color: \"rgba(13, 183, 96, 1)\",\n            className: \"w-[40px] h-[40px] \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }\n];\nfunction ClientHomeView(param) {\n    let { data } = param;\n    var _data_, _data_1;\n    _s();\n    console.log(data, \"ClientHomeView\");\n    const setVariants = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>variants(), []);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto\",\n        id: \"home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: \"grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16\",\n                variants: setVariants,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-start row-start-2 sm:row-start-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal\",\n                                children: data && data.length ? (_data_ = data[0]) === null || _data_ === void 0 ? void 0 : _data_.heading.split(\" \").map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\".concat(index === 2 || index === 3 ? \"text-blue-main\" : \"text-[#000]\"),\n                                        children: [\n                                            item,\n                                            \" \"\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 23\n                                    }, this)) : null\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#000] mt-4 mb-8 font-bold\",\n                                children: data && data.length ? (_data_1 = data[0]) === null || _data_1 === void 0 ? void 0 : _data_1.summary : null\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"flex gap-3 cursor-pointer\",\n                                children: socialIcons.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                        href: item.link,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        initial: {\n                                            scale: 0\n                                        },\n                                        animate: {\n                                            rotate: 360,\n                                            scale: 1\n                                        },\n                                        transition: {\n                                            type: \"spring\",\n                                            damping: 20,\n                                            stiffness: 80,\n                                            duration: 4\n                                        },\n                                        whileHover: {\n                                            scale: 1.2,\n                                            rotate: 360\n                                        },\n                                        whileTap: {\n                                            scale: 0.8,\n                                            rotate: -360,\n                                            borderRadius: \"100%\"\n                                        },\n                                        children: item.icon\n                                    }, item.id, false, {\n                                        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        ref: containerRef,\n                        className: \"flex w-full justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            drag: true,\n                            dragConstraints: containerRef,\n                            className: \"w-[400px] h-[400px] relative bg-green-main\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#040611] absolute\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: _assets_ai_image_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"Profile Picture\",\n                                    layout: \"responsive\",\n                                    quality: 100,\n                                    height: 300,\n                                    width: 300,\n                                    className: \"absolute top-[-15px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91799\\\\Desktop\\\\Portfolio 2.0\\\\src\\\\components\\\\client-view\\\\home\\\\index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(ClientHomeView, \"k9wBY8mCVux5zH/6Ihh3faunSb8=\");\n_c = ClientHomeView;\nvar _c;\n$RefreshReg$(_c, \"ClientHomeView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NsaWVudC12aWV3L2hvbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ1k7QUFDYjtBQU1mO0FBQ087QUFDb0I7QUFFbkQsU0FBU1M7SUFDUCxPQUFPO1FBQ0xDLFdBQVc7WUFDVEMsR0FBRztZQUNIQyxTQUFTO1FBQ1g7UUFDQUMsVUFBVTtnQkFBQyxFQUFFQyxXQUFXLENBQUMsRUFBRSxvRUFBRyxDQUFDO21CQUFPO2dCQUNwQ0gsR0FBRztnQkFDSEMsU0FBUztnQkFDVEcsWUFBWTtvQkFDVkMsTUFBTTtvQkFDTkY7Z0JBQ0Y7WUFDRjtRQUFBO0lBQ0Y7QUFDRjtBQUVBLE1BQU1HLGNBQWM7SUFDbkIsTUFBTTtJQUNILGlCQUFpQjtJQUNsQixzQ0FBc0M7SUFDckMsU0FBUztJQUNSLDhFQUE4RTtJQUNoRixLQUFLO0lBQ04sT0FBTztJQUNQO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxvQkFDRSw4REFBQ2QsK0dBQVNBO1lBQUNlLE9BQU07WUFBdUJDLFdBQVU7Ozs7OztJQUV0RDtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxvQkFDRSw4REFBQ2hCLGtIQUFZQTtZQUFDaUIsT0FBTTtZQUF1QkMsV0FBVTs7Ozs7O0lBRXpEO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLG9CQUNFLDhEQUFDZixpSEFBV0E7WUFBQ2dCLE9BQU07WUFBdUJDLFdBQVU7Ozs7OztJQUV4RDtDQUNEO0FBRWMsU0FBU0MsZUFBZSxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7UUFrQnJCQSxRQWlCbUJBOztJQWxDbkNDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTTtJQUVsQixNQUFNRyxjQUFjM0IsOENBQU9BLENBQUMsSUFBTVMsWUFBWSxFQUFFO0lBQ2hELE1BQU1tQixlQUFlM0IsNkNBQU1BLENBQUM7SUFFNUIscUJBQ0UsOERBQUM0QjtRQUFJUCxXQUFVO1FBQThDSixJQUFHO2tCQUM5RCw0RUFBQ2hCLDBEQUFnQkE7c0JBQ2YsNEVBQUNDLGlEQUFNQSxDQUFDMEIsR0FBRztnQkFDVFAsV0FDRTtnQkFFRmIsVUFBVWtCOztrQ0FFViw4REFBQ0U7d0JBQUlQLFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FDWEUsUUFBUUEsS0FBS08sTUFBTSxJQUNoQlAsU0FBQUEsSUFBSSxDQUFDLEVBQUUsY0FBUEEsNkJBQUFBLE9BQVNRLE9BQU8sQ0FDYkMsS0FBSyxDQUFDLEtBQ05DLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDViw4REFBQ0M7d0NBRUNmLFdBQVcsR0FJVixPQUhDYyxVQUFVLEtBQUtBLFVBQVUsSUFDckIsbUJBQ0E7OzRDQUdMRDs0Q0FBTTs7dUNBUEZDOzs7O2dEQVVYOzs7Ozs7MENBRU4sOERBQUNFO2dDQUFFaEIsV0FBVTswQ0FDVkUsUUFBUUEsS0FBS08sTUFBTSxJQUFHUCxVQUFBQSxJQUFJLENBQUMsRUFBRSxjQUFQQSw4QkFBQUEsUUFBU2UsT0FBTyxHQUFHOzs7Ozs7MENBRTVDLDhEQUFDcEMsaURBQU1BLENBQUMwQixHQUFHO2dDQUFDUCxXQUFVOzBDQUNuQkwsWUFBWWlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNoQyxpREFBTUEsQ0FBQ3FDLENBQUM7d0NBRVBDLE1BQU1OLEtBQUtoQixJQUFJO3dDQUNmdUIsUUFBTzt3Q0FDUEMsS0FBSTt3Q0FDSkMsU0FBUzs0Q0FBRUMsT0FBTzt3Q0FBRTt3Q0FDcEJDLFNBQVM7NENBQUVDLFFBQVE7NENBQUtGLE9BQU87d0NBQUU7d0NBQ2pDOUIsWUFBWTs0Q0FDVkMsTUFBTTs0Q0FDTmdDLFNBQVM7NENBQ1RDLFdBQVc7NENBQ1huQyxVQUFVO3dDQUNaO3dDQUNBb0MsWUFBWTs0Q0FBRUwsT0FBTzs0Q0FBS0UsUUFBUTt3Q0FBSTt3Q0FDdENJLFVBQVU7NENBQUVOLE9BQU87NENBQUtFLFFBQVEsQ0FBQzs0Q0FBS0ssY0FBYzt3Q0FBTztrREFFMURqQixLQUFLZixJQUFJO3VDQWZMZSxLQUFLakIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FvQnBCLDhEQUFDZixpREFBTUEsQ0FBQzBCLEdBQUc7d0JBQUN3QixLQUFLekI7d0JBQWNOLFdBQVU7a0NBQ3ZDLDRFQUFDbkIsaURBQU1BLENBQUMwQixHQUFHOzRCQUNUeUIsSUFBSTs0QkFDSkMsaUJBQWlCM0I7NEJBQ2pCTixXQUFVOzs4Q0FFViw4REFBQ087b0NBQUlQLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ2YsbURBQUtBO29DQUNKaUQsS0FBS2hELDREQUFPQTtvQ0FDWmlELEtBQUk7b0NBQ0pDLFFBQU87b0NBQ1BDLFNBQVM7b0NBQ1RDLFFBQVE7b0NBQ1JDLE9BQU87b0NBQ1B2QyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUI7R0FsRndCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jbGllbnQtdmlldy9ob21lL2luZGV4LmpzPzQ4NTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFuaW1hdGlvbldyYXBwZXIgZnJvbSBcIi4uL2FuaW1hdGlvbi13cmFwcGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHtcbiAgLy9GYUZhY2Vib29rRixcbiAgRmFMaW5rZWRpbkluLFxuICBGYUluc3RhZ3JhbSxcbiAgRmFUd2l0dGVyLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGFpSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9haS1pbWFnZS5wbmdcIjtcblxuZnVuY3Rpb24gdmFyaWFudHMoKSB7XG4gIHJldHVybiB7XG4gICAgb2Zmc2NyZWVuOiB7XG4gICAgICB5OiAxNTAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgb25zY3JlZW46ICh7IGR1cmF0aW9uID0gMiB9ID0ge30pID0+ICh7XG4gICAgICB5OiAwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICB9LFxuICAgIH0pLFxuICB9O1xufVxuXG5jb25zdCBzb2NpYWxJY29ucyA9IFtcbiAvL3svLy9cbiAgICAvL2lkOiBcImZhY2Vib29rXCIsXG4gICAvLy8vIGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIsXG4gICAgLy9pY29uOiAoXG4gICAgIC8vIDxGYUZhY2Vib29rRiBjb2xvcj1cInJnYmEoMTMsIDE4MywgOTYsIDEpXCIgY2xhc3NOYW1lPVwidy1bNDBweF0gaC1bNDBweF0gXCIgLz5cbiAgIC8vICksXG4gIC8vfSwvLy9cbiAge1xuICAgIGlkOiBcInR3aXR0ZXJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8veC5jb20vc2hpdjU2NDk5XCIsXG4gICAgaWNvbjogKFxuICAgICAgPEZhVHdpdHRlciBjb2xvcj1cInJnYmEoMTMsIDE4MywgOTYsIDEpXCIgY2xhc3NOYW1lPVwidy1bNDBweF0gaC1bNDBweF0gXCIgLz5cbiAgICApLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibGlua2VkaW5cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaXZhZG9yYS1tYWRlcGFsbGktMTZhOGEzMjI4L1wiLFxuICAgIGljb246IChcbiAgICAgIDxGYUxpbmtlZGluSW4gY29sb3I9XCJyZ2JhKDEzLCAxODMsIDk2LCAxKVwiIGNsYXNzTmFtZT1cInctWzQwcHhdIGgtWzQwcHhdIFwiIC8+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImluc3RhZ3JhbVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGUuc2hpdi5hcnRpc3RpYy5fLnNvdWxcIixcbiAgICBpY29uOiAoXG4gICAgICA8RmFJbnN0YWdyYW0gY29sb3I9XCJyZ2JhKDEzLCAxODMsIDk2LCAxKVwiIGNsYXNzTmFtZT1cInctWzQwcHhdIGgtWzQwcHhdIFwiIC8+XG4gICAgKSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudEhvbWVWaWV3KHsgZGF0YSB9KSB7XG4gIGNvbnNvbGUubG9nKGRhdGEsIFwiQ2xpZW50SG9tZVZpZXdcIik7XG5cbiAgY29uc3Qgc2V0VmFyaWFudHMgPSB1c2VNZW1vKCgpID0+IHZhcmlhbnRzKCksIFtdKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgbXQtMjQgcHgtOCB4bDpweC0xNiBteC1hdXRvXCIgaWQ9XCJob21lXCI+XG4gICAgICA8QW5pbWF0aW9uV3JhcHBlcj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgXCJncmlkIGdyaWQtZmxvdy1yb3cgc206Z3JpZC1mbG93LWNvbCBncmlkLXJvd3MtMiBtZDpncmlkLXJvd3MtMSBzbTpncmlkLWNvbHMtMiBnYXAtOCBweS02IHNtOnB5LTE2XCJcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyaWFudHM9e3NldFZhcmlhbnRzfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHJvdy1zdGFydC0yIHNtOnJvdy1zdGFydC0xXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTN4bCBsZzp0ZXh0LTR4bCB4bDp0ZXh0LTZ4bCBmb250LW1lZGl1bSBsZWFkaW5nLW5vcm1hbFwiPlxuICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gZGF0YVswXT8uaGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gMiB8fCBpbmRleCA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsdWUtbWFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtWyMwMDBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyMwMDBdIG10LTQgbWItOCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyBkYXRhWzBdPy5zdW1tYXJ5IDogbnVsbH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAge3NvY2lhbEljb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyByb3RhdGU6IDM2MCwgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgZGFtcGluZzogMjAsXG4gICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogODAsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiwgcm90YXRlOiAzNjAgfX1cbiAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjgsIHJvdGF0ZTogLTM2MCwgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBkcmFnXG4gICAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17Y29udGFpbmVyUmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0MDBweF0gaC1bNDAwcHhdIHJlbGF0aXZlIGJnLWdyZWVuLW1haW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzQwMHB4XSBoLVs0MDBweF0gdG9wLVs0MHB4XSBsZWZ0LVstMzBweF0gcm91bmRlZC1sZyBib3JkZXItWzZweF0gYm9yZGVyLVsjMDQwNjExXSBhYnNvbHV0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e2FpSW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWy0xNXB4XVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L0FuaW1hdGlvbldyYXBwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsInVzZVJlZiIsIkFuaW1hdGlvbldyYXBwZXIiLCJtb3Rpb24iLCJGYUxpbmtlZGluSW4iLCJGYUluc3RhZ3JhbSIsIkZhVHdpdHRlciIsIkltYWdlIiwiYWlJbWFnZSIsInZhcmlhbnRzIiwib2Zmc2NyZWVuIiwieSIsIm9wYWNpdHkiLCJvbnNjcmVlbiIsImR1cmF0aW9uIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzb2NpYWxJY29ucyIsImlkIiwibGluayIsImljb24iLCJjb2xvciIsImNsYXNzTmFtZSIsIkNsaWVudEhvbWVWaWV3IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRWYXJpYW50cyIsImNvbnRhaW5lclJlZiIsImRpdiIsImgxIiwibGVuZ3RoIiwiaGVhZGluZyIsInNwbGl0IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3BhbiIsInAiLCJzdW1tYXJ5IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJpbml0aWFsIiwic2NhbGUiLCJhbmltYXRlIiwicm90YXRlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsIndoaWxlSG92ZXIiLCJ3aGlsZVRhcCIsImJvcmRlclJhZGl1cyIsInJlZiIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJxdWFsaXR5IiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/client-view/home/index.js\n"));

/***/ })

});