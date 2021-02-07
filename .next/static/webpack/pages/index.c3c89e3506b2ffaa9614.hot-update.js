webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/api/useLastFmData.js":
/*!************************************!*\
  !*** ./pages/api/useLastFmData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useLastFmData; });\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! last-fm */ \"./node_modules/last-fm/index.js\");\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(last_fm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\nfunction useLastFmData(cleanTrackDetails) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      artistBio = _useState[0],\n      setArtistBio = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"clean\", cleanTrackDetails);\n\n    if (cleanTrackDetails) {\n      var lastfm = new last_fm__WEBPACK_IMPORTED_MODULE_0___default.a(\"8e17009fc64041e78ce4a9ec5c053180\", {\n        userAgent: \"http://localhost:3000\"\n      });\n      lastfm.artistInfo({\n        q: cleanTrackDetails.artist\n      }, function (err, data) {\n        if (err) console.error(err);else console.log(\"lastfm\", data);\n      });\n    }\n  }, [cleanTrackDetails]);\n  return artistBio;\n}\n\n_s(useLastFmData, \"HD/44y+2yzAmIf8O6j6qzi59pRc=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3VzZUxhc3RGbURhdGEuanM/NDAzOSJdLCJuYW1lcyI6WyJ1c2VMYXN0Rm1EYXRhIiwiY2xlYW5UcmFja0RldGFpbHMiLCJ1c2VTdGF0ZSIsImFydGlzdEJpbyIsInNldEFydGlzdEJpbyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsYXN0Zm0iLCJMYXN0Rk0iLCJ1c2VyQWdlbnQiLCJhcnRpc3RJbmZvIiwicSIsImFydGlzdCIsImVyciIsImRhdGEiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsaUJBQXZCLEVBQTBDO0FBQUE7O0FBQUEsa0JBQ3JCQyxzREFBUSxDQUFDLElBQUQsQ0FEYTtBQUFBLE1BQ2hEQyxTQURnRDtBQUFBLE1BQ3JDQyxZQURxQzs7QUFFdkRDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCTixpQkFBckI7O0FBQ0EsUUFBSUEsaUJBQUosRUFBdUI7QUFDckIsVUFBTU8sTUFBTSxHQUFHLElBQUlDLDhDQUFKLENBQVcsa0NBQVgsRUFBK0M7QUFDNURDLGlCQUFTLEVBQUU7QUFEaUQsT0FBL0MsQ0FBZjtBQUlBRixZQUFNLENBQUNHLFVBQVAsQ0FBa0I7QUFBRUMsU0FBQyxFQUFFWCxpQkFBaUIsQ0FBQ1k7QUFBdkIsT0FBbEIsRUFBbUQsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDaEUsWUFBSUQsR0FBSixFQUFTUixPQUFPLENBQUNVLEtBQVIsQ0FBY0YsR0FBZCxFQUFULEtBQ0tSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JRLElBQXRCO0FBQ04sT0FIRDtBQUlEO0FBQ0YsR0FaUSxFQVlOLENBQUNkLGlCQUFELENBWk0sQ0FBVDtBQWNBLFNBQU9FLFNBQVA7QUFDRDs7R0FqQnVCSCxhIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZUxhc3RGbURhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGFzdEZNIGZyb20gXCJsYXN0LWZtXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUxhc3RGbURhdGEoY2xlYW5UcmFja0RldGFpbHMpIHtcbiAgY29uc3QgW2FydGlzdEJpbywgc2V0QXJ0aXN0QmlvXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xlYW5cIiwgY2xlYW5UcmFja0RldGFpbHMpO1xuICAgIGlmIChjbGVhblRyYWNrRGV0YWlscykge1xuICAgICAgY29uc3QgbGFzdGZtID0gbmV3IExhc3RGTShcIjhlMTcwMDlmYzY0MDQxZTc4Y2U0YTllYzVjMDUzMTgwXCIsIHtcbiAgICAgICAgdXNlckFnZW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGxhc3RmbS5hcnRpc3RJbmZvKHsgcTogY2xlYW5UcmFja0RldGFpbHMuYXJ0aXN0IH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwibGFzdGZtXCIsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY2xlYW5UcmFja0RldGFpbHNdKTtcblxuICByZXR1cm4gYXJ0aXN0QmlvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/useLastFmData.js\n");

/***/ })

})