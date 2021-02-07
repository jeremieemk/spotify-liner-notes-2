webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/api/useLastFmData.js":
/*!************************************!*\
  !*** ./pages/api/useLastFmData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useLastFmData; });\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! last-fm */ \"./node_modules/last-fm/index.js\");\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(last_fm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\nfunction useLastFmData(cleanTrackDetails) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      artistBio = _useState[0],\n      setArtistBio = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"clean\", cleanTrackDetails);\n\n    if (cleanTrackDetails) {\n      var lastfm = new last_fm__WEBPACK_IMPORTED_MODULE_0___default.a(\"8e17009fc64041e78ce4a9ec5c053180\", {\n        userAgent: \"http://localhost:3000\"\n      });\n      lastfm.artistSearch({\n        q: cleanTrackDetails.artist\n      }, function (err, data) {\n        if (err) console.error(err);else console.log(\"lastfm\", data);\n      });\n    }\n  }, [cleanTrackDetails]);\n  return artistBio;\n}\n\n_s(useLastFmData, \"HD/44y+2yzAmIf8O6j6qzi59pRc=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3VzZUxhc3RGbURhdGEuanM/NDAzOSJdLCJuYW1lcyI6WyJ1c2VMYXN0Rm1EYXRhIiwiY2xlYW5UcmFja0RldGFpbHMiLCJ1c2VTdGF0ZSIsImFydGlzdEJpbyIsInNldEFydGlzdEJpbyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsYXN0Zm0iLCJMYXN0Rk0iLCJ1c2VyQWdlbnQiLCJhcnRpc3RTZWFyY2giLCJxIiwiYXJ0aXN0IiwiZXJyIiwiZGF0YSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxpQkFBdkIsRUFBMEM7QUFBQTs7QUFBQSxrQkFDckJDLHNEQUFRLENBQUMsSUFBRCxDQURhO0FBQUEsTUFDaERDLFNBRGdEO0FBQUEsTUFDckNDLFlBRHFDOztBQUV2REMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJOLGlCQUFyQjs7QUFDQSxRQUFJQSxpQkFBSixFQUF1QjtBQUNyQixVQUFNTyxNQUFNLEdBQUcsSUFBSUMsOENBQUosQ0FBVyxrQ0FBWCxFQUErQztBQUM1REMsaUJBQVMsRUFBRTtBQURpRCxPQUEvQyxDQUFmO0FBSUFGLFlBQU0sQ0FBQ0csWUFBUCxDQUFvQjtBQUFFQyxTQUFDLEVBQUVYLGlCQUFpQixDQUFDWTtBQUF2QixPQUFwQixFQUFxRCxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNsRSxZQUFJRCxHQUFKLEVBQVNSLE9BQU8sQ0FBQ1UsS0FBUixDQUFjRixHQUFkLEVBQVQsS0FDS1IsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlEsSUFBdEI7QUFDTixPQUhEO0FBSUQ7QUFDRixHQVpRLEVBWU4sQ0FBQ2QsaUJBQUQsQ0FaTSxDQUFUO0FBY0EsU0FBT0UsU0FBUDtBQUNEOztHQWpCdUJILGEiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlTGFzdEZtRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXN0Rk0gZnJvbSBcImxhc3QtZm1cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTGFzdEZtRGF0YShjbGVhblRyYWNrRGV0YWlscykge1xuICBjb25zdCBbYXJ0aXN0QmlvLCBzZXRBcnRpc3RCaW9dID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGVhblwiLCBjbGVhblRyYWNrRGV0YWlscyk7XG4gICAgaWYgKGNsZWFuVHJhY2tEZXRhaWxzKSB7XG4gICAgICBjb25zdCBsYXN0Zm0gPSBuZXcgTGFzdEZNKFwiOGUxNzAwOWZjNjQwNDFlNzhjZTRhOWVjNWMwNTMxODBcIiwge1xuICAgICAgICB1c2VyQWdlbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG4gICAgICB9KTtcblxuICAgICAgbGFzdGZtLmFydGlzdFNlYXJjaCh7IHE6IGNsZWFuVHJhY2tEZXRhaWxzLmFydGlzdCB9LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcImxhc3RmbVwiLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NsZWFuVHJhY2tEZXRhaWxzXSk7XG5cbiAgcmV0dXJuIGFydGlzdEJpbztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/useLastFmData.js\n");

/***/ })

})