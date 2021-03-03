webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LandingPage */ \"./pages/components/LandingPage.js\");\n/* harmony import */ var _api_useAccessToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/useAccessToken */ \"./pages/api/useAccessToken.js\");\n/* harmony import */ var _api_useSpotifyData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/useSpotifyData */ \"./pages/api/useSpotifyData.js\");\n/* harmony import */ var _api_useDiscogsData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/useDiscogsData */ \"./pages/api/useDiscogsData.js\");\n/* harmony import */ var _api_useLyricsData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/useLyricsData */ \"./pages/api/useLyricsData.js\");\n/* harmony import */ var _components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ReleaseDetails */ \"./pages/components/ReleaseDetails.js\");\n/* harmony import */ var _api_getCleanTrackDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/getCleanTrackDetails */ \"./pages/api/getCleanTrackDetails.js\");\n/* harmony import */ var _api_useLastFmData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/useLastFmData */ \"./pages/api/useLastFmData.js\");\n\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var accessToken = Object(_api_useAccessToken__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  var spotifyData = Object(_api_useSpotifyData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(accessToken);\n  var cleanTrackDetails = spotifyData && Object(_api_getCleanTrackDetails__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(spotifyData);\n  var songLyrics = Object(_api_useLyricsData__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(cleanTrackDetails);\n  var discogsData = Object(_api_useDiscogsData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(spotifyData);\n  var artistBio = Object(_api_useLastFmData__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(cleanTrackDetails);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Spotify liner Notes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: spotifyData ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        spotifyData: spotifyData,\n        discogsData: discogsData,\n        artistBio: artistBio,\n        songLyrics: songLyrics\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LandingPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"AiK9SJxfurnobNEm+XB9UtDU9lA=\", false, function () {\n  return [_api_useAccessToken__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _api_useSpotifyData__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _api_useLyricsData__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _api_useDiscogsData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _api_useLastFmData__WEBPACK_IMPORTED_MODULE_10__[\"default\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWNjZXNzVG9rZW4iLCJ1c2VBY2Nlc3NUb2tlbiIsInNwb3RpZnlEYXRhIiwidXNlU3BvdGlmeURhdGEiLCJjbGVhblRyYWNrRGV0YWlscyIsImdldENsZWFuVHJhY2tEZXRhaWxzIiwic29uZ0x5cmljcyIsInVzZUx5cmljc0RhdGEiLCJkaXNjb2dzRGF0YSIsInVzZURpc2NvZ3NEYXRhIiwiYXJ0aXN0QmlvIiwidXNlTGFzdEZtRGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxXQUFXLEdBQUdDLG1FQUFjLEVBQWxDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxtRUFBYyxDQUFDSCxXQUFELENBQWxDO0FBQ0EsTUFBTUksaUJBQWlCLEdBQUdGLFdBQVcsSUFBSUcseUVBQW9CLENBQUNILFdBQUQsQ0FBN0Q7QUFDQSxNQUFNSSxVQUFVLEdBQUdDLGtFQUFhLENBQUNILGlCQUFELENBQWhDO0FBQ0EsTUFBTUksV0FBVyxHQUFHQyxtRUFBYyxDQUFDUCxXQUFELENBQWxDO0FBQ0EsTUFBTVEsU0FBUyxHQUFHQyxtRUFBYSxDQUFDUCxpQkFBRCxDQUEvQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFUSw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLGdCQUNHWixXQUFXLGdCQUNWLHFFQUFDLGtFQUFEO0FBQ0UsbUJBQVcsRUFBRUEsV0FEZjtBQUVFLG1CQUFXLEVBQUVNLFdBRmY7QUFHRSxpQkFBUyxFQUFFRSxTQUhiO0FBSUUsa0JBQVUsRUFBRUo7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFUsZ0JBUVYscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0E3QnVCUCxJO1VBQ0ZFLDJELEVBQ0FFLDJELEVBRURJLDBELEVBQ0NFLDJELEVBQ0ZFLDJEOzs7S0FOSVosSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgTGFuZGluZ1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9MYW5kaW5nUGFnZVwiO1xuXG5pbXBvcnQgdXNlQWNjZXNzVG9rZW4gZnJvbSBcIi4vYXBpL3VzZUFjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgdXNlU3BvdGlmeURhdGEgZnJvbSBcIi4vYXBpL3VzZVNwb3RpZnlEYXRhXCI7XG5pbXBvcnQgdXNlRGlzY29nc0RhdGEgZnJvbSBcIi4vYXBpL3VzZURpc2NvZ3NEYXRhXCI7XG5pbXBvcnQgdXNlTHlyaWNzRGF0YSBmcm9tIFwiLi9hcGkvdXNlTHlyaWNzRGF0YVwiO1xuaW1wb3J0IFJlbGVhc2VEZXRhaWxzIGZyb20gXCIuL2NvbXBvbmVudHMvUmVsZWFzZURldGFpbHNcIjtcbmltcG9ydCBnZXRDbGVhblRyYWNrRGV0YWlscyBmcm9tIFwiLi9hcGkvZ2V0Q2xlYW5UcmFja0RldGFpbHNcIjtcbmltcG9ydCB1c2VMYXN0Rm1EYXRhIGZyb20gXCIuL2FwaS91c2VMYXN0Rm1EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlQWNjZXNzVG9rZW4oKTtcbiAgY29uc3Qgc3BvdGlmeURhdGEgPSB1c2VTcG90aWZ5RGF0YShhY2Nlc3NUb2tlbik7XG4gIGNvbnN0IGNsZWFuVHJhY2tEZXRhaWxzID0gc3BvdGlmeURhdGEgJiYgZ2V0Q2xlYW5UcmFja0RldGFpbHMoc3BvdGlmeURhdGEpO1xuICBjb25zdCBzb25nTHlyaWNzID0gdXNlTHlyaWNzRGF0YShjbGVhblRyYWNrRGV0YWlscyk7XG4gIGNvbnN0IGRpc2NvZ3NEYXRhID0gdXNlRGlzY29nc0RhdGEoc3BvdGlmeURhdGEpO1xuICBjb25zdCBhcnRpc3RCaW8gPSB1c2VMYXN0Rm1EYXRhKGNsZWFuVHJhY2tEZXRhaWxzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3BvdGlmeSBsaW5lciBOb3RlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHtzcG90aWZ5RGF0YSA/IChcbiAgICAgICAgICA8UmVsZWFzZURldGFpbHNcbiAgICAgICAgICAgIHNwb3RpZnlEYXRhPXtzcG90aWZ5RGF0YX1cbiAgICAgICAgICAgIGRpc2NvZ3NEYXRhPXtkaXNjb2dzRGF0YX1cbiAgICAgICAgICAgIGFydGlzdEJpbz17YXJ0aXN0QmlvfVxuICAgICAgICAgICAgc29uZ0x5cmljcz17c29uZ0x5cmljc31cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMYW5kaW5nUGFnZSAvPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})