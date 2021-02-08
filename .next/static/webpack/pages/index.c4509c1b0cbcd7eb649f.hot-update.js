webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/builtin-status-codes/browser.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/https-browserify/index.js":
false,

/***/ "./node_modules/last-fm/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/once/once.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/run-parallel/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/simple-concat/index.js":
false,

/***/ "./node_modules/simple-get/index.js":
false,

/***/ "./node_modules/stream-http/index.js":
false,

/***/ "./node_modules/stream-http/lib/capability.js":
false,

/***/ "./node_modules/stream-http/lib/request.js":
false,

/***/ "./node_modules/stream-http/lib/response.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/to-arraybuffer/index.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./node_modules/wrappy/wrappy.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false,

/***/ "./pages/api/useLastFmData.js":
/*!************************************!*\
  !*** ./pages/api/useLastFmData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useLastFmData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useLastFmData(cleanTrackDetails) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      artistBio = _useState[0],\n      setArtistBio = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (cleanTrackDetails) {\n      fetch(\"http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=\".concat(cleanTrackDetails.artist, \"&api_key=8e17009fc64041e78ce4a9ec5c053180&format=json\")) // Handle success\n      .then(function (response) {\n        return response.json();\n      }) // convert to json\n      .then(function (json) {\n        return console.log(\"test api\", json.artist.bio.content);\n      }) //print data to console\n      [\"catch\"](function (err) {\n        return console.log(\"Request Failed\", err);\n      });\n    }\n  }, [cleanTrackDetails]);\n  return artistBio;\n}\n\n_s(useLastFmData, \"HD/44y+2yzAmIf8O6j6qzi59pRc=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3VzZUxhc3RGbURhdGEuanM/NDAzOSJdLCJuYW1lcyI6WyJ1c2VMYXN0Rm1EYXRhIiwiY2xlYW5UcmFja0RldGFpbHMiLCJ1c2VTdGF0ZSIsImFydGlzdEJpbyIsInNldEFydGlzdEJpbyIsInVzZUVmZmVjdCIsImZldGNoIiwiYXJ0aXN0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJiaW8iLCJjb250ZW50IiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLGlCQUF2QixFQUEwQztBQUFBOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxJQUFELENBRGE7QUFBQSxNQUNoREMsU0FEZ0Q7QUFBQSxNQUNyQ0MsWUFEcUM7O0FBRXZEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixpQkFBSixFQUF1QjtBQUNyQkssV0FBSywwRUFDK0RMLGlCQUFpQixDQUFDTSxNQURqRiwyREFBTCxDQUdFO0FBSEYsT0FJR0MsSUFKSCxDQUlRLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLE9BSlIsRUFJdUM7QUFKdkMsT0FLR0YsSUFMSCxDQUtRLFVBQUNFLElBQUQ7QUFBQSxlQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixJQUFJLENBQUNILE1BQUwsQ0FBWU0sR0FBWixDQUFnQkMsT0FBeEMsQ0FBVjtBQUFBLE9BTFIsRUFLb0U7QUFMcEUsZ0JBTVMsVUFBQ0MsR0FBRDtBQUFBLGVBQVNKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRyxHQUE5QixDQUFUO0FBQUEsT0FOVDtBQU9EO0FBQ0YsR0FWUSxFQVVOLENBQUNkLGlCQUFELENBVk0sQ0FBVDtBQVlBLFNBQU9FLFNBQVA7QUFDRDs7R0FmdUJILGEiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlTGFzdEZtRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTGFzdEZtRGF0YShjbGVhblRyYWNrRGV0YWlscykge1xuICBjb25zdCBbYXJ0aXN0QmlvLCBzZXRBcnRpc3RCaW9dID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNsZWFuVHJhY2tEZXRhaWxzKSB7XG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wLz9tZXRob2Q9YXJ0aXN0LmdldGluZm8mYXJ0aXN0PSR7Y2xlYW5UcmFja0RldGFpbHMuYXJ0aXN0fSZhcGlfa2V5PThlMTcwMDlmYzY0MDQxZTc4Y2U0YTllYzVjMDUzMTgwJmZvcm1hdD1qc29uYFxuICAgICAgKVxuICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzc1xuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gY29udmVydCB0byBqc29uXG4gICAgICAgIC50aGVuKChqc29uKSA9PiBjb25zb2xlLmxvZyhcInRlc3QgYXBpXCIsIGpzb24uYXJ0aXN0LmJpby5jb250ZW50KSkgLy9wcmludCBkYXRhIHRvIGNvbnNvbGVcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiUmVxdWVzdCBGYWlsZWRcIiwgZXJyKSk7XG4gICAgfVxuICB9LCBbY2xlYW5UcmFja0RldGFpbHNdKTtcblxuICByZXR1cm4gYXJ0aXN0QmlvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/useLastFmData.js\n");

/***/ }),

/***/ 1:
false,

/***/ 2:
false,

/***/ 3:
false

})