webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/api/useLastFmData.js":
/*!************************************!*\
  !*** ./pages/api/useLastFmData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useLastFmData; });\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! last-fm */ \"./node_modules/last-fm/index.js\");\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(last_fm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\nfunction useLastFmData(cleanTrackDetails) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      artistBio = _useState[0],\n      setArtistBio = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (cleanTrackDetails) {\n      console.log(\"clean\", cleanTrackDetails.artist);\n      var lastfm = new last_fm__WEBPACK_IMPORTED_MODULE_0___default.a(\"8e17009fc64041e78ce4a9ec5c053180\", {\n        userAgent: \"http://localhost:3000\"\n      });\n      lastfm.trackSearch({\n        q: cleanTrackDetails.song\n      }, function (err, data) {\n        if (err) console.error(err);else console.log(\"lastfm\", data);\n      });\n    }\n  }, [cleanTrackDetails]);\n  return artistBio;\n}\n\n_s(useLastFmData, \"HD/44y+2yzAmIf8O6j6qzi59pRc=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3VzZUxhc3RGbURhdGEuanM/NDAzOSJdLCJuYW1lcyI6WyJ1c2VMYXN0Rm1EYXRhIiwiY2xlYW5UcmFja0RldGFpbHMiLCJ1c2VTdGF0ZSIsImFydGlzdEJpbyIsInNldEFydGlzdEJpbyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJhcnRpc3QiLCJsYXN0Zm0iLCJMYXN0Rk0iLCJ1c2VyQWdlbnQiLCJ0cmFja1NlYXJjaCIsInEiLCJzb25nIiwiZXJyIiwiZGF0YSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxpQkFBdkIsRUFBMEM7QUFBQTs7QUFBQSxrQkFDckJDLHNEQUFRLENBQUMsSUFBRCxDQURhO0FBQUEsTUFDaERDLFNBRGdEO0FBQUEsTUFDckNDLFlBRHFDOztBQUV2REMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosaUJBQUosRUFBdUI7QUFDckJLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJOLGlCQUFpQixDQUFDTyxNQUF2QztBQUVBLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyw4Q0FBSixDQUFXLGtDQUFYLEVBQStDO0FBQzVEQyxpQkFBUyxFQUFFO0FBRGlELE9BQS9DLENBQWY7QUFJQUYsWUFBTSxDQUFDRyxXQUFQLENBQW1CO0FBQUVDLFNBQUMsRUFBRVosaUJBQWlCLENBQUNhO0FBQXZCLE9BQW5CLEVBQWtELFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQy9ELFlBQUlELEdBQUosRUFBU1QsT0FBTyxDQUFDVyxLQUFSLENBQWNGLEdBQWQsRUFBVCxLQUNLVCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCUyxJQUF0QjtBQUNOLE9BSEQ7QUFJRDtBQUNGLEdBYlEsRUFhTixDQUFDZixpQkFBRCxDQWJNLENBQVQ7QUFlQSxTQUFPRSxTQUFQO0FBQ0Q7O0dBbEJ1QkgsYSIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VMYXN0Rm1EYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhc3RGTSBmcm9tIFwibGFzdC1mbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMYXN0Rm1EYXRhKGNsZWFuVHJhY2tEZXRhaWxzKSB7XG4gIGNvbnN0IFthcnRpc3RCaW8sIHNldEFydGlzdEJpb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2xlYW5UcmFja0RldGFpbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xlYW5cIiwgY2xlYW5UcmFja0RldGFpbHMuYXJ0aXN0KTtcblxuICAgICAgY29uc3QgbGFzdGZtID0gbmV3IExhc3RGTShcIjhlMTcwMDlmYzY0MDQxZTc4Y2U0YTllYzVjMDUzMTgwXCIsIHtcbiAgICAgICAgdXNlckFnZW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGxhc3RmbS50cmFja1NlYXJjaCh7IHE6IGNsZWFuVHJhY2tEZXRhaWxzLnNvbmcgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJsYXN0Zm1cIiwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjbGVhblRyYWNrRGV0YWlsc10pO1xuXG4gIHJldHVybiBhcnRpc3RCaW87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/useLastFmData.js\n");

/***/ })

})