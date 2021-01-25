webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/ReleaseDetails.js":
/*!********************************************!*\
  !*** ./pages/components/ReleaseDetails.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReleaseDetails; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/components/ReleaseDetails.js\";\n\nfunction ReleaseDetails(props) {\n  var _this = this;\n\n  var discogsData = props.discogsData,\n      spotifyData = props.spotifyData;\n\n  function renderArtists() {\n    return spotifyData.artists.join(\", \").toString();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [renderArtists(), \" - \", spotifyData.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), discogsData && discogsData.map(function (release) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: [release.title, \" - \", release.year, \" - \", release.label[0]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: release.cover_image,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"hello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n_c = ReleaseDetails;\n\nvar _c;\n\n$RefreshReg$(_c, \"ReleaseDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9SZWxlYXNlRGV0YWlscy5qcz80MTBlIl0sIm5hbWVzIjpbIlJlbGVhc2VEZXRhaWxzIiwicHJvcHMiLCJkaXNjb2dzRGF0YSIsInNwb3RpZnlEYXRhIiwicmVuZGVyQXJ0aXN0cyIsImFydGlzdHMiLCJqb2luIiwidG9TdHJpbmciLCJuYW1lIiwibWFwIiwicmVsZWFzZSIsInRpdGxlIiwieWVhciIsImxhYmVsIiwiY292ZXJfaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQSxNQUNwQ0MsV0FEb0MsR0FDUEQsS0FETyxDQUNwQ0MsV0FEb0M7QUFBQSxNQUN2QkMsV0FEdUIsR0FDUEYsS0FETyxDQUN2QkUsV0FEdUI7O0FBRzVDLFdBQVNDLGFBQVQsR0FBeUI7QUFDdkIsV0FBT0QsV0FBVyxDQUFDRSxPQUFaLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixFQUErQkMsUUFBL0IsRUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxpQkFDR0gsYUFBYSxFQURoQixTQUN1QkQsV0FBVyxDQUFDSyxJQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlHTixXQUFXLElBQ1ZBLFdBQVcsQ0FBQ08sR0FBWixDQUFnQixVQUFDQyxPQUFELEVBQWE7QUFDM0IsMEJBQ0U7QUFBQSxnQ0FDRTtBQUFBLHFCQUNHQSxPQUFPLENBQUNDLEtBRFgsU0FDcUJELE9BQU8sQ0FBQ0UsSUFEN0IsU0FDc0NGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLENBQWQsQ0FEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxhQUFHLEVBQUVILE9BQU8sQ0FBQ0ksV0FBbEI7QUFBK0IsYUFBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQSxzQkFERjtBQVFELEtBVEQsQ0FMSixlQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7S0ExQnVCZCxjIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9SZWxlYXNlRGV0YWlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVsZWFzZURldGFpbHMocHJvcHMpIHtcbiAgY29uc3QgeyBkaXNjb2dzRGF0YSwgc3BvdGlmeURhdGEgfSA9IHByb3BzO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckFydGlzdHMoKSB7XG4gICAgcmV0dXJuIHNwb3RpZnlEYXRhLmFydGlzdHMuam9pbihcIiwgXCIpLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+XG4gICAgICAgIHtyZW5kZXJBcnRpc3RzKCl9IC0ge3Nwb3RpZnlEYXRhLm5hbWV9XG4gICAgICA8L2gxPlxuICAgICAge2Rpc2NvZ3NEYXRhICYmXG4gICAgICAgIGRpc2NvZ3NEYXRhLm1hcCgocmVsZWFzZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAge3JlbGVhc2UudGl0bGV9IC0ge3JlbGVhc2UueWVhcn0gLSB7cmVsZWFzZS5sYWJlbFswXX1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3JlbGVhc2UuY292ZXJfaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDxoMT5oZWxsbzwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ReleaseDetails.js\n");

/***/ })

})