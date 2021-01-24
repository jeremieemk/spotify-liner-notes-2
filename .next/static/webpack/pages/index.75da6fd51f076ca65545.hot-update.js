webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/api/useDiscogsData.js":
/*!*************************************!*\
  !*** ./pages/api/useDiscogsData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDiscogsData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var discojs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discojs */ \"./node_modules/discojs/lib/index.es.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useDiscogsData(spotifyData) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      discogsData = _useState[0],\n      setDiscogsData = _useState[1];\n\n  console.log(\"discogs API key\", \"\\\"qICsaNYfZQFfkMlwfWDNOlCpmBXgdcWBgvsKjJhV\\\",\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    spotifyData && fetchDiscogsData(spotifyData, setDiscogsData);\n  }, [spotifyData]);\n\n  function fetchDiscogsData(spotifyData, setDiscogsData) {\n    var dicogsApi = new discojs__WEBPACK_IMPORTED_MODULE_1__[\"Discojs\"]({\n      userToken: \"\\\"qICsaNYfZQFfkMlwfWDNOlCpmBXgdcWBgvsKjJhV\\\",\"\n    });\n    var regex = /\\s*\\([^)]*\\)/g;\n    var currentTrack = spotifyData.name;\n    var cleanTrackName = currentTrack.includes(\"-\") ? currentTrack.name.replace(regex, \"\").replaceAll(\"&\", \"\").substring(0, currentTrack.indexOf(\"-\")) : currentTrack.name.replace(regex, \"\").replaceAll(\"&\", \"\");\n    var cleanArtistName = currentTrack.artists[0].replaceAll(\"&\", \"and\");\n    dicogsApi.searchDatabase({\n      // search uses only the first word of the artist name\n      // artist: spotifyTrackData.artists[0].name.replace(/ .*/, \"\"),\n      artist: cleanArtistName,\n      track: cleanTrackName,\n      type: \"release\"\n    }).then(function (data) {\n      console.log(\"discogs api data\", data); // checks if discogs search brings any result\n\n      if (data.results.length > 0) {\n        setDiscogsData(data.results);\n      } else {\n        console.log(\"no data\");\n      }\n    });\n  }\n\n  return discogsData;\n}\n\n_s(useDiscogsData, \"yzHMHPZkUAIxMeyy5PV0im/CSMY=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3VzZURpc2NvZ3NEYXRhLmpzPzk2OTkiXSwibmFtZXMiOlsidXNlRGlzY29nc0RhdGEiLCJzcG90aWZ5RGF0YSIsInVzZVN0YXRlIiwiZGlzY29nc0RhdGEiLCJzZXREaXNjb2dzRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwidXNlRWZmZWN0IiwiZmV0Y2hEaXNjb2dzRGF0YSIsImRpY29nc0FwaSIsIkRpc2NvanMiLCJ1c2VyVG9rZW4iLCJORVhUX1BVQkxJQ19ESVNDT0dTX0tFWSIsInJlZ2V4IiwiY3VycmVudFRyYWNrIiwibmFtZSIsImNsZWFuVHJhY2tOYW1lIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJjbGVhbkFydGlzdE5hbWUiLCJhcnRpc3RzIiwic2VhcmNoRGF0YWJhc2UiLCJhcnRpc3QiLCJ0cmFjayIsInR5cGUiLCJ0aGVuIiwiZGF0YSIsInJlc3VsdHMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsV0FBeEIsRUFBcUM7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxJQUFELENBREk7QUFBQSxNQUMzQ0MsV0FEMkM7QUFBQSxNQUM5QkMsY0FEOEI7O0FBRWxEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkMsK0NBQS9CO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxlQUFXLElBQUlRLGdCQUFnQixDQUFDUixXQUFELEVBQWNHLGNBQWQsQ0FBL0I7QUFDRCxHQUZRLEVBRU4sQ0FBQ0gsV0FBRCxDQUZNLENBQVQ7O0FBSUEsV0FBU1EsZ0JBQVQsQ0FBMEJSLFdBQTFCLEVBQXVDRyxjQUF2QyxFQUF1RDtBQUNyRCxRQUFNTSxTQUFTLEdBQUcsSUFBSUMsK0NBQUosQ0FBWTtBQUM1QkMsZUFBUyxFQUFFTCwrQ0FBbUNNO0FBRGxCLEtBQVosQ0FBbEI7QUFHQSxRQUFNQyxLQUFLLEdBQUcsZUFBZDtBQUNBLFFBQU1DLFlBQVksR0FBR2QsV0FBVyxDQUFDZSxJQUFqQztBQUVBLFFBQU1DLGNBQWMsR0FBR0YsWUFBWSxDQUFDRyxRQUFiLENBQXNCLEdBQXRCLElBQ3JCSCxZQUFZLENBQUNDLElBQWIsQ0FDR0csT0FESCxDQUNXTCxLQURYLEVBQ2tCLEVBRGxCLEVBRUdNLFVBRkgsQ0FFYyxHQUZkLEVBRW1CLEVBRm5CLEVBR0dDLFNBSEgsQ0FHYSxDQUhiLEVBR2dCTixZQUFZLENBQUNPLE9BQWIsQ0FBcUIsR0FBckIsQ0FIaEIsQ0FEcUIsR0FLckJQLFlBQVksQ0FBQ0MsSUFBYixDQUNHRyxPQURILENBQ1dMLEtBRFgsRUFDa0IsRUFEbEIsRUFFR00sVUFGSCxDQUVjLEdBRmQsRUFFbUIsRUFGbkIsQ0FMRjtBQVNBLFFBQU1HLGVBQWUsR0FBR1IsWUFBWSxDQUFDUyxPQUFiLENBQXFCLENBQXJCLEVBQXdCSixVQUF4QixDQUFtQyxHQUFuQyxFQUF3QyxLQUF4QyxDQUF4QjtBQUVBVixhQUFTLENBQ05lLGNBREgsQ0FDa0I7QUFDZDtBQUNBO0FBQ0FDLFlBQU0sRUFBRUgsZUFITTtBQUlkSSxXQUFLLEVBQUVWLGNBSk87QUFLZFcsVUFBSSxFQUFFO0FBTFEsS0FEbEIsRUFRR0MsSUFSSCxDQVFRLFVBQUNDLElBQUQsRUFBVTtBQUNkekIsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0N3QixJQUFoQyxFQURjLENBRWQ7O0FBQ0EsVUFBSUEsSUFBSSxDQUFDQyxPQUFMLENBQWFDLE1BQWIsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0I1QixzQkFBYyxDQUFDMEIsSUFBSSxDQUFDQyxPQUFOLENBQWQ7QUFDRCxPQUZELE1BRU87QUFDTDFCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRDtBQUNGLEtBaEJIO0FBaUJEOztBQUVELFNBQU9ILFdBQVA7QUFDRDs7R0E5Q3VCSCxjIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZURpc2NvZ3NEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtEaXNjb2pzfSBmcm9tICdkaXNjb2pzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGlzY29nc0RhdGEoc3BvdGlmeURhdGEpIHtcbiAgY29uc3QgW2Rpc2NvZ3NEYXRhLCBzZXREaXNjb2dzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc29sZS5sb2coXCJkaXNjb2dzIEFQSSBrZXlcIiwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRElTQ09HU19LRVkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzcG90aWZ5RGF0YSAmJiBmZXRjaERpc2NvZ3NEYXRhKHNwb3RpZnlEYXRhLCBzZXREaXNjb2dzRGF0YSlcbiAgfSwgW3Nwb3RpZnlEYXRhXSk7XG5cbiAgZnVuY3Rpb24gZmV0Y2hEaXNjb2dzRGF0YShzcG90aWZ5RGF0YSwgc2V0RGlzY29nc0RhdGEpIHtcbiAgICBjb25zdCBkaWNvZ3NBcGkgPSBuZXcgRGlzY29qcyh7XG4gICAgICB1c2VyVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RJU0NPR1NfS0VZLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xccypcXChbXildKlxcKS9nO1xuICAgIGNvbnN0IGN1cnJlbnRUcmFjayA9IHNwb3RpZnlEYXRhLm5hbWVcblxuICAgIGNvbnN0IGNsZWFuVHJhY2tOYW1lID0gY3VycmVudFRyYWNrLmluY2x1ZGVzKFwiLVwiKSA/XG4gICAgICBjdXJyZW50VHJhY2submFtZVxuICAgICAgICAucmVwbGFjZShyZWdleCwgXCJcIilcbiAgICAgICAgLnJlcGxhY2VBbGwoXCImXCIsIFwiXCIpXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgY3VycmVudFRyYWNrLmluZGV4T2YoXCItXCIpKSA6XG4gICAgICBjdXJyZW50VHJhY2submFtZVxuICAgICAgICAucmVwbGFjZShyZWdleCwgXCJcIilcbiAgICAgICAgLnJlcGxhY2VBbGwoXCImXCIsIFwiXCIpXG5cbiAgICBjb25zdCBjbGVhbkFydGlzdE5hbWUgPSBjdXJyZW50VHJhY2suYXJ0aXN0c1swXS5yZXBsYWNlQWxsKFwiJlwiLCBcImFuZFwiKVxuXG4gICAgZGljb2dzQXBpXG4gICAgICAuc2VhcmNoRGF0YWJhc2Uoe1xuICAgICAgICAvLyBzZWFyY2ggdXNlcyBvbmx5IHRoZSBmaXJzdCB3b3JkIG9mIHRoZSBhcnRpc3QgbmFtZVxuICAgICAgICAvLyBhcnRpc3Q6IHNwb3RpZnlUcmFja0RhdGEuYXJ0aXN0c1swXS5uYW1lLnJlcGxhY2UoLyAuKi8sIFwiXCIpLFxuICAgICAgICBhcnRpc3Q6IGNsZWFuQXJ0aXN0TmFtZSxcbiAgICAgICAgdHJhY2s6IGNsZWFuVHJhY2tOYW1lLFxuICAgICAgICB0eXBlOiBcInJlbGVhc2VcIixcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRpc2NvZ3MgYXBpIGRhdGFcIiwgZGF0YSlcbiAgICAgICAgLy8gY2hlY2tzIGlmIGRpc2NvZ3Mgc2VhcmNoIGJyaW5ncyBhbnkgcmVzdWx0XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldERpc2NvZ3NEYXRhKGRhdGEucmVzdWx0cylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGFcIilcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gZGlzY29nc0RhdGFcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/useDiscogsData.js\n");

/***/ })

})