webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/ReleaseDetails.js":
/*!********************************************!*\
  !*** ./pages/components/ReleaseDetails.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hello; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/components/ReleaseDetails.js\";\n\nfunction Hello(props) {\n  var _this2 = this;\n\n  console.log(props);\n  var discogsData = props.discogsData,\n      spotifyData = props.spotifyData;\n\n  function addComa(i) {\n    return spotifyData.artists.length > 1 && i < spotifyData.artists.length - 1;\n  }\n\n  function renderArtists() {\n    var _this = this;\n\n    return spotifyData.artists.map(function (artist, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: [artist.name, addComa(i) && \", \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }, _this);\n    });\n  }\n\n  return spotifyData && discogsData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [renderArtists(), \" - \", spotifyData.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 8\n    }, this), discogsData.map(function (release) {\n      /*#__PURE__*/\n      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: release.cover_image,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 12\n      }, _this2);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 8\n  }, this);\n}\n_c = Hello;\n\nvar _c;\n\n$RefreshReg$(_c, \"Hello\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9SZWxlYXNlRGV0YWlscy5qcz80MTBlIl0sIm5hbWVzIjpbIkhlbGxvIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGlzY29nc0RhdGEiLCJzcG90aWZ5RGF0YSIsImFkZENvbWEiLCJpIiwiYXJ0aXN0cyIsImxlbmd0aCIsInJlbmRlckFydGlzdHMiLCJtYXAiLCJhcnRpc3QiLCJuYW1lIiwicmVsZWFzZSIsImNvdmVyX2ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQURpQyxNQUUxQkcsV0FGMEIsR0FFRUgsS0FGRixDQUUxQkcsV0FGMEI7QUFBQSxNQUViQyxXQUZhLEdBRUVKLEtBRkYsQ0FFYkksV0FGYTs7QUFJakMsV0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDcEIsV0FDRUYsV0FBVyxDQUFDRyxPQUFaLENBQW9CQyxNQUFwQixHQUE2QixDQUE3QixJQUFrQ0YsQ0FBQyxHQUFHRixXQUFXLENBQUNHLE9BQVosQ0FBb0JDLE1BQXBCLEdBQTZCLENBRHJFO0FBR0Q7O0FBRUMsV0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUN6QixXQUFPTCxXQUFXLENBQUNHLE9BQVosQ0FBb0JHLEdBQXBCLENBQXdCLFVBQUNDLE1BQUQsRUFBU0wsQ0FBVDtBQUFBLDBCQUM3QjtBQUFBLG1CQUNHSyxNQUFNLENBQUNDLElBRFYsRUFFR1AsT0FBTyxDQUFDQyxDQUFELENBQVAsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFENkI7QUFBQSxLQUF4QixDQUFQO0FBTUQ7O0FBRUMsU0FDR0YsV0FBVyxJQUFJRCxXQUFmLGlCQUNBO0FBQUEsNEJBQ0E7QUFBQSxpQkFBS00sYUFBYSxFQUFsQixTQUF5QkwsV0FBVyxDQUFDUSxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQUVDVCxXQUFXLENBQUNPLEdBQVosQ0FBZ0IsVUFBQ0csT0FBRCxFQUFhO0FBRTFCO0FBQUE7QUFBSyxXQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsV0FBbEI7QUFBK0IsV0FBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSCxLQUhBLENBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkg7QUFtQkg7S0F0Q3VCZixLIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9SZWxlYXNlRGV0YWlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVsbG8ocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICBjb25zdCB7ZGlzY29nc0RhdGEsIHNwb3RpZnlEYXRhfSA9IHByb3BzXG5cbiAgICBmdW5jdGlvbiBhZGRDb21hKGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3BvdGlmeURhdGEuYXJ0aXN0cy5sZW5ndGggPiAxICYmIGkgPCBzcG90aWZ5RGF0YS5hcnRpc3RzLmxlbmd0aCAtIDFcbiAgICApO1xuICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJBcnRpc3RzKCkge1xuICAgIHJldHVybiBzcG90aWZ5RGF0YS5hcnRpc3RzLm1hcCgoYXJ0aXN0LCBpKSA9PiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAge2FydGlzdC5uYW1lfVxuICAgICAgICB7YWRkQ29tYShpKSAmJiBgLCBgfVxuICAgICAgPC9zcGFuPlxuICAgICkpO1xuICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgc3BvdGlmeURhdGEgJiYgZGlzY29nc0RhdGEgJiZcbiAgICAgICA8ZGl2PlxuICAgICAgIDxoMT57cmVuZGVyQXJ0aXN0cygpfSAtIHtzcG90aWZ5RGF0YS5uYW1lfTwvaDE+XG4gICAgICAge2Rpc2NvZ3NEYXRhLm1hcCgocmVsZWFzZSkgPT4ge1xuXG4gICAgICAgICAgIDxpbWcgc3JjPXtyZWxlYXNlLmNvdmVyX2ltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgIH1cblxuXG4gICAgICAgKVxuXG5cblxuICAgICAgIH1cbiAgICAgICBcbiAgICAgICA8L2Rpdj5cblxuICAgICkgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ReleaseDetails.js\n");

/***/ })

})