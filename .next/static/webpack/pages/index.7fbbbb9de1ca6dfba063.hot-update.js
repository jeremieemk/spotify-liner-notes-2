webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/ReleaseDetails.js":
/*!********************************************!*\
  !*** ./pages/components/ReleaseDetails.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hello; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/components/ReleaseDetails.js\";\n\nfunction Hello(props) {\n  var _this2 = this;\n\n  console.log(props);\n  var discogsData = props.discogsData,\n      spotifyData = props.spotifyData;\n\n  function addComa(i) {\n    return spotifyData.artists.length > 1 && i < spotifyData.artists.length - 1;\n  }\n\n  discogsData && console.log(discogsData[0].cover_image);\n\n  function renderArtists() {\n    var _this = this;\n\n    return spotifyData.artists.map(function (artist, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: [artist.name, addComa(i) && \", \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }, _this);\n    });\n  }\n\n  return spotifyData && discogsData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [renderArtists(), \" - \", spotifyData.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 8\n    }, this), discogsData.map(function (release) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"test\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 12\n        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: release.cover_image,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 12\n        }, _this2)]\n      }, void 0, true);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"hello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 8\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 8\n  }, this);\n}\n_c = Hello;\n\nvar _c;\n\n$RefreshReg$(_c, \"Hello\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9SZWxlYXNlRGV0YWlscy5qcz80MTBlIl0sIm5hbWVzIjpbIkhlbGxvIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGlzY29nc0RhdGEiLCJzcG90aWZ5RGF0YSIsImFkZENvbWEiLCJpIiwiYXJ0aXN0cyIsImxlbmd0aCIsImNvdmVyX2ltYWdlIiwicmVuZGVyQXJ0aXN0cyIsIm1hcCIsImFydGlzdCIsIm5hbWUiLCJyZWxlYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFEaUMsTUFFMUJHLFdBRjBCLEdBRUVILEtBRkYsQ0FFMUJHLFdBRjBCO0FBQUEsTUFFYkMsV0FGYSxHQUVFSixLQUZGLENBRWJJLFdBRmE7O0FBSWpDLFdBQVNDLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ3BCLFdBQ0VGLFdBQVcsQ0FBQ0csT0FBWixDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBN0IsSUFBa0NGLENBQUMsR0FBR0YsV0FBVyxDQUFDRyxPQUFaLENBQW9CQyxNQUFwQixHQUE2QixDQURyRTtBQUdEOztBQUNDTCxhQUFXLElBQUlGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVNLFdBQTNCLENBQWY7O0FBQ0EsV0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUN6QixXQUFPTixXQUFXLENBQUNHLE9BQVosQ0FBb0JJLEdBQXBCLENBQXdCLFVBQUNDLE1BQUQsRUFBU04sQ0FBVDtBQUFBLDBCQUM3QjtBQUFBLG1CQUNHTSxNQUFNLENBQUNDLElBRFYsRUFFR1IsT0FBTyxDQUFDQyxDQUFELENBQVAsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFENkI7QUFBQSxLQUF4QixDQUFQO0FBTUQ7O0FBRUMsU0FDR0YsV0FBVyxJQUFJRCxXQUFmLGlCQUNBO0FBQUEsNEJBQ0E7QUFBQSxpQkFBS08sYUFBYSxFQUFsQixTQUF5Qk4sV0FBVyxDQUFDUyxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQUVDVixXQUFXLENBQUNRLEdBQVosQ0FBZ0IsVUFBQ0csT0FBRCxFQUFhO0FBQzFCLDBCQUNBO0FBQUEsZ0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFLLGFBQUcsRUFBRUEsT0FBTyxDQUFDTCxXQUFsQjtBQUErQixhQUFHLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQUFBLHNCQURBO0FBS0gsS0FOQSxDQUZELGVBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZIO0FBdUJIO0tBMUN1QlYsSyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvUmVsZWFzZURldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbGxvKHByb3BzKSB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgY29uc3Qge2Rpc2NvZ3NEYXRhLCBzcG90aWZ5RGF0YX0gPSBwcm9wc1xuXG4gICAgZnVuY3Rpb24gYWRkQ29tYShpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNwb3RpZnlEYXRhLmFydGlzdHMubGVuZ3RoID4gMSAmJiBpIDwgc3BvdGlmeURhdGEuYXJ0aXN0cy5sZW5ndGggLSAxXG4gICAgKTtcbiAgfVxuICAgIGRpc2NvZ3NEYXRhICYmIGNvbnNvbGUubG9nKGRpc2NvZ3NEYXRhWzBdLmNvdmVyX2ltYWdlKVxuICAgIGZ1bmN0aW9uIHJlbmRlckFydGlzdHMoKSB7XG4gICAgcmV0dXJuIHNwb3RpZnlEYXRhLmFydGlzdHMubWFwKChhcnRpc3QsIGkpID0+IChcbiAgICAgIDxzcGFuPlxuICAgICAgICB7YXJ0aXN0Lm5hbWV9XG4gICAgICAgIHthZGRDb21hKGkpICYmIGAsIGB9XG4gICAgICA8L3NwYW4+XG4gICAgKSk7XG4gIH1cblxuICAgIHJldHVybihcbiAgICAgICBzcG90aWZ5RGF0YSAmJiBkaXNjb2dzRGF0YSAmJlxuICAgICAgIDxkaXY+XG4gICAgICAgPGgxPntyZW5kZXJBcnRpc3RzKCl9IC0ge3Nwb3RpZnlEYXRhLm5hbWV9PC9oMT5cbiAgICAgICB7ZGlzY29nc0RhdGEubWFwKChyZWxlYXNlKSA9PiB7XG4gICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgPD5cbiAgICAgICAgICAgPGgxPnRlc3Q8L2gxPlxuICAgICAgICAgICA8aW1nIHNyYz17cmVsZWFzZS5jb3Zlcl9pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgPC8+KVxuICAgICAgIH1cblxuXG4gICAgICAgKVxuXG5cblxuICAgICAgIH1cbiAgICAgICA8aDE+aGVsbG88L2gxPlxuICAgICAgIFxuICAgICAgIDwvZGl2PlxuXG4gICAgKSAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ReleaseDetails.js\n");

/***/ })

})