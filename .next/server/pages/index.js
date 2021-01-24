module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/useAccessToken.js":
/*!*************************************!*\
  !*** ./pages/api/useAccessToken.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useAccessToken; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useAccessToken() {\n  const {\n    0: accessToken,\n    1: setAccessToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const token = window.location.hash.substr(1).split('&')[0].split(\"=\")[1];\n\n    if (token) {\n      setAccessToken(token);\n    }\n  }, []);\n  return accessToken;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlQWNjZXNzVG9rZW4uanM/YjNkZiJdLCJuYW1lcyI6WyJ1c2VBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULEdBQTBCO0FBQ3ZDLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsTUFBckIsQ0FBNEIsQ0FBNUIsRUFBK0JDLEtBQS9CLENBQXFDLEdBQXJDLEVBQTBDLENBQTFDLEVBQTZDQSxLQUE3QyxDQUFtRCxHQUFuRCxFQUF3RCxDQUF4RCxDQUFkOztBQUNBLFFBQUlMLEtBQUosRUFBVztBQUNUSCxvQkFBYyxDQUFDRyxLQUFELENBQWQ7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxTQUFPSixXQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlQWNjZXNzVG9rZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBY2Nlc3NUb2tlbigpIHtcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkuc3BsaXQoJyYnKVswXS5zcGxpdChcIj1cIilbMV1cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldEFjY2Vzc1Rva2VuKHRva2VuKVxuICAgIH1cbiAgfSwgW10pOyBcblxuICByZXR1cm4gYWNjZXNzVG9rZW47XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/useAccessToken.js\n");

/***/ }),

/***/ "./pages/api/useDiscogsData.js":
/*!*************************************!*\
  !*** ./pages/api/useDiscogsData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDiscogsData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var discojs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discojs */ \"discojs\");\n/* harmony import */ var discojs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discojs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useDiscogsData(spotifyData) {\n  const {\n    0: discogsData,\n    1: setDiscogsData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  console.log(\"discogs API key\", \"\\\"qICsaNYfZQFfkMlwfWDNOlCpmBXgdcWBgvsKjJhV\\\",\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    spotifyData && fetchDiscogsData(spotifyData, setDiscogsData);\n  }, [spotifyData]);\n\n  function fetchDiscogsData(spotifyData, setDiscogsData) {\n    const dicogsApi = new discojs__WEBPACK_IMPORTED_MODULE_1__[\"Discojs\"]({\n      userToken: \"\\\"qICsaNYfZQFfkMlwfWDNOlCpmBXgdcWBgvsKjJhV\\\",\"\n    });\n    const regex = /\\s*\\([^)]*\\)/g;\n    const currentTrack = spotifyData;\n    const cleanTrackName = currentTrack.name.includes(\"-\") ? currentTrack.name.replace(regex, \"\").replaceAll(\"&\", \"\").substring(0, currentTrack.name.indexOf(\"-\")) : currentTrack.name.replace(regex, \"\").replaceAll(\"&\", \"\");\n    const cleanArtistName = currentTrack.artists[0].name.replaceAll(\"&\", \"and\");\n    dicogsApi.searchDatabase({\n      // search uses only the first word of the artist name\n      // artist: spotifyTrackData.artists[0].name.replace(/ .*/, \"\"),\n      artist: cleanArtistName,\n      track: cleanTrackName,\n      type: \"release\"\n    }).then(data => {\n      console.log(\"discogs api data\", data); // checks if discogs search brings any result\n\n      if (data.results.length > 0) {\n        setDiscogsData(data.results);\n      } else {\n        console.log(\"no data\");\n      }\n    });\n  }\n\n  return discogsData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlRGlzY29nc0RhdGEuanM/OTY5OSJdLCJuYW1lcyI6WyJ1c2VEaXNjb2dzRGF0YSIsInNwb3RpZnlEYXRhIiwiZGlzY29nc0RhdGEiLCJzZXREaXNjb2dzRGF0YSIsInVzZVN0YXRlIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJ1c2VFZmZlY3QiLCJmZXRjaERpc2NvZ3NEYXRhIiwiZGljb2dzQXBpIiwiRGlzY29qcyIsInVzZXJUb2tlbiIsIk5FWFRfUFVCTElDX0RJU0NPR1NfS0VZIiwicmVnZXgiLCJjdXJyZW50VHJhY2siLCJjbGVhblRyYWNrTmFtZSIsIm5hbWUiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNsZWFuQXJ0aXN0TmFtZSIsImFydGlzdHMiLCJzZWFyY2hEYXRhYmFzZSIsImFydGlzdCIsInRyYWNrIiwidHlwZSIsInRoZW4iLCJkYXRhIiwicmVzdWx0cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLFNBQVNBLGNBQVQsQ0FBd0JDLFdBQXhCLEVBQXFDO0FBQ2xELFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCQywrQ0FBL0I7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RQLGVBQVcsSUFBSVEsZ0JBQWdCLENBQUNSLFdBQUQsRUFBY0UsY0FBZCxDQUEvQjtBQUNELEdBRlEsRUFFTixDQUFDRixXQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTUSxnQkFBVCxDQUEwQlIsV0FBMUIsRUFBdUNFLGNBQXZDLEVBQXVEO0FBQ3JELFVBQU1PLFNBQVMsR0FBRyxJQUFJQywrQ0FBSixDQUFZO0FBQzVCQyxlQUFTLEVBQUVMLCtDQUFtQ007QUFEbEIsS0FBWixDQUFsQjtBQUdBLFVBQU1DLEtBQUssR0FBRyxlQUFkO0FBQ0EsVUFBTUMsWUFBWSxHQUFHZCxXQUFyQjtBQUVBLFVBQU1lLGNBQWMsR0FBR0QsWUFBWSxDQUFDRSxJQUFiLENBQWtCQyxRQUFsQixDQUEyQixHQUEzQixJQUNyQkgsWUFBWSxDQUFDRSxJQUFiLENBQ0dFLE9BREgsQ0FDV0wsS0FEWCxFQUNrQixFQURsQixFQUVHTSxVQUZILENBRWMsR0FGZCxFQUVtQixFQUZuQixFQUdHQyxTQUhILENBR2EsQ0FIYixFQUdnQk4sWUFBWSxDQUFDRSxJQUFiLENBQWtCSyxPQUFsQixDQUEwQixHQUExQixDQUhoQixDQURxQixHQUtyQlAsWUFBWSxDQUFDRSxJQUFiLENBQ0dFLE9BREgsQ0FDV0wsS0FEWCxFQUNrQixFQURsQixFQUVHTSxVQUZILENBRWMsR0FGZCxFQUVtQixFQUZuQixDQUxGO0FBU0EsVUFBTUcsZUFBZSxHQUFHUixZQUFZLENBQUNTLE9BQWIsQ0FBcUIsQ0FBckIsRUFBd0JQLElBQXhCLENBQTZCRyxVQUE3QixDQUF3QyxHQUF4QyxFQUE2QyxLQUE3QyxDQUF4QjtBQUVBVixhQUFTLENBQ05lLGNBREgsQ0FDa0I7QUFDZDtBQUNBO0FBQ0FDLFlBQU0sRUFBRUgsZUFITTtBQUlkSSxXQUFLLEVBQUVYLGNBSk87QUFLZFksVUFBSSxFQUFFO0FBTFEsS0FEbEIsRUFRR0MsSUFSSCxDQVFTQyxJQUFELElBQVU7QUFDZHpCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDd0IsSUFBaEMsRUFEYyxDQUVkOztBQUNBLFVBQUlBLElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxNQUFiLEdBQXNCLENBQTFCLEVBQTZCO0FBQzNCN0Isc0JBQWMsQ0FBQzJCLElBQUksQ0FBQ0MsT0FBTixDQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0wxQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0Q7QUFDRixLQWhCSDtBQWlCRDs7QUFFRCxTQUFPSixXQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlRGlzY29nc0RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0Rpc2NvanN9IGZyb20gJ2Rpc2NvanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEaXNjb2dzRGF0YShzcG90aWZ5RGF0YSkge1xuICBjb25zdCBbZGlzY29nc0RhdGEsIHNldERpc2NvZ3NEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zb2xlLmxvZyhcImRpc2NvZ3MgQVBJIGtleVwiLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ESVNDT0dTX0tFWSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNwb3RpZnlEYXRhICYmIGZldGNoRGlzY29nc0RhdGEoc3BvdGlmeURhdGEsIHNldERpc2NvZ3NEYXRhKVxuICB9LCBbc3BvdGlmeURhdGFdKTtcblxuICBmdW5jdGlvbiBmZXRjaERpc2NvZ3NEYXRhKHNwb3RpZnlEYXRhLCBzZXREaXNjb2dzRGF0YSkge1xuICAgIGNvbnN0IGRpY29nc0FwaSA9IG5ldyBEaXNjb2pzKHtcbiAgICAgIHVzZXJUb2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRElTQ09HU19LRVksXG4gICAgfSk7XG4gICAgY29uc3QgcmVnZXggPSAvXFxzKlxcKFteKV0qXFwpL2c7XG4gICAgY29uc3QgY3VycmVudFRyYWNrID0gc3BvdGlmeURhdGFcblxuICAgIGNvbnN0IGNsZWFuVHJhY2tOYW1lID0gY3VycmVudFRyYWNrLm5hbWUuaW5jbHVkZXMoXCItXCIpID9cbiAgICAgIGN1cnJlbnRUcmFjay5uYW1lXG4gICAgICAgIC5yZXBsYWNlKHJlZ2V4LCBcIlwiKVxuICAgICAgICAucmVwbGFjZUFsbChcIiZcIiwgXCJcIilcbiAgICAgICAgLnN1YnN0cmluZygwLCBjdXJyZW50VHJhY2submFtZS5pbmRleE9mKFwiLVwiKSkgOlxuICAgICAgY3VycmVudFRyYWNrLm5hbWVcbiAgICAgICAgLnJlcGxhY2UocmVnZXgsIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlQWxsKFwiJlwiLCBcIlwiKVxuXG4gICAgY29uc3QgY2xlYW5BcnRpc3ROYW1lID0gY3VycmVudFRyYWNrLmFydGlzdHNbMF0ubmFtZS5yZXBsYWNlQWxsKFwiJlwiLCBcImFuZFwiKVxuXG4gICAgZGljb2dzQXBpXG4gICAgICAuc2VhcmNoRGF0YWJhc2Uoe1xuICAgICAgICAvLyBzZWFyY2ggdXNlcyBvbmx5IHRoZSBmaXJzdCB3b3JkIG9mIHRoZSBhcnRpc3QgbmFtZVxuICAgICAgICAvLyBhcnRpc3Q6IHNwb3RpZnlUcmFja0RhdGEuYXJ0aXN0c1swXS5uYW1lLnJlcGxhY2UoLyAuKi8sIFwiXCIpLFxuICAgICAgICBhcnRpc3Q6IGNsZWFuQXJ0aXN0TmFtZSxcbiAgICAgICAgdHJhY2s6IGNsZWFuVHJhY2tOYW1lLFxuICAgICAgICB0eXBlOiBcInJlbGVhc2VcIixcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRpc2NvZ3MgYXBpIGRhdGFcIiwgZGF0YSlcbiAgICAgICAgLy8gY2hlY2tzIGlmIGRpc2NvZ3Mgc2VhcmNoIGJyaW5ncyBhbnkgcmVzdWx0XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldERpc2NvZ3NEYXRhKGRhdGEucmVzdWx0cylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGFcIilcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gZGlzY29nc0RhdGFcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/useDiscogsData.js\n");

/***/ }),

/***/ "./pages/api/useSpotifyData.js":
/*!*************************************!*\
  !*** ./pages/api/useSpotifyData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useSpotifyData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useSpotifyData(accessToken) {\n  const {\n    0: spotifyData,\n    1: setSpotifyData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    accessToken && fetchCurrentTrack(accessToken, setSpotifyData);\n  }, [accessToken]);\n\n  function fetchCurrentTrack(accessToken, setSpotifyData) {\n    const nowPlayingApiUrl = \"https://api.spotify.com/v1/me/player\";\n    fetch(nowPlayingApiUrl, {\n      headers: {\n        Authorization: \"Bearer \" + accessToken\n      }\n    }).then(response => {\n      if (response.status === 204 || response.status === 401) {\n        console.log(response);\n        console.log(\"manage error\");\n      } else {\n        return response.json();\n      }\n    }).then(data => {\n      setSpotifyData(data.item);\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n\n  return spotifyData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlU3BvdGlmeURhdGEuanM/YzliOSJdLCJuYW1lcyI6WyJ1c2VTcG90aWZ5RGF0YSIsImFjY2Vzc1Rva2VuIiwic3BvdGlmeURhdGEiLCJzZXRTcG90aWZ5RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hDdXJyZW50VHJhY2siLCJub3dQbGF5aW5nQXBpVXJsIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsIml0ZW0iLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsV0FBeEIsRUFBcUM7QUFDbEQsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBOUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1pKLGVBQVcsSUFBSUssaUJBQWlCLENBQUNMLFdBQUQsRUFBY0UsY0FBZCxDQUFoQztBQUNILEdBRlEsRUFFTixDQUFDRixXQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTSyxpQkFBVCxDQUEyQkwsV0FBM0IsRUFBd0NFLGNBQXhDLEVBQXdEO0FBQ3RELFVBQU1JLGdCQUFnQixHQUFHLHNDQUF6QjtBQUNBQyxTQUFLLENBQUNELGdCQUFELEVBQW1CO0FBQ3BCRSxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRSxZQUFZVDtBQUE3QjtBQURXLEtBQW5CLENBQUwsQ0FHS1UsSUFITCxDQUdXQyxRQUFELElBQWM7QUFDcEIsVUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXBCLElBQTJCRCxRQUFRLENBQUNDLE1BQVQsS0FBb0IsR0FBbkQsRUFBd0Q7QUFDcERDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBQ0FFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDSCxPQUhELE1BR087QUFDSCxlQUFPSCxRQUFRLENBQUNJLElBQVQsRUFBUDtBQUNIO0FBQ0EsS0FWTCxFQVdLTCxJQVhMLENBV1dNLElBQUQsSUFBVTtBQUNoQmQsb0JBQWMsQ0FBQ2MsSUFBSSxDQUFDQyxJQUFOLENBQWQ7QUFDQyxLQWJMLEVBY0tDLEtBZEwsQ0FjVyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hCTixhQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWjtBQUNDLEtBaEJMO0FBaUJDOztBQUVELFNBQU9sQixXQUFQO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlU3BvdGlmeURhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNwb3RpZnlEYXRhKGFjY2Vzc1Rva2VuKSB7XG4gIGNvbnN0IFtzcG90aWZ5RGF0YSwgc2V0U3BvdGlmeURhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhY2Nlc3NUb2tlbiAmJiBmZXRjaEN1cnJlbnRUcmFjayhhY2Nlc3NUb2tlbiwgc2V0U3BvdGlmeURhdGEpXG4gIH0sIFthY2Nlc3NUb2tlbl0pO1xuXG4gIGZ1bmN0aW9uIGZldGNoQ3VycmVudFRyYWNrKGFjY2Vzc1Rva2VuLCBzZXRTcG90aWZ5RGF0YSkge1xuICAgIGNvbnN0IG5vd1BsYXlpbmdBcGlVcmwgPSBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllclwiO1xuICAgIGZldGNoKG5vd1BsYXlpbmdBcGlVcmwsIHtcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGFjY2Vzc1Rva2VuIH0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hbmFnZSBlcnJvclwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRTcG90aWZ5RGF0YShkYXRhLml0ZW0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc3BvdGlmeURhdGFcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/useSpotifyData.js\n");

/***/ }),

/***/ "./pages/components/ReleaseDetails.js":
/*!********************************************!*\
  !*** ./pages/components/ReleaseDetails.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hello; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/components/ReleaseDetails.js\";\n\nfunction Hello(props) {\n  console.log(props);\n  const {\n    discogsData,\n    spotifyData\n  } = props;\n\n  function addComa(i) {\n    return spotifyData.artists.length > 1 && i < spotifyData.artists.length - 1;\n  }\n\n  discogsData && console.log(discogsData[0].cover_image);\n\n  function renderArtists() {\n    return spotifyData.artists.map((artist, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [artist.name, addComa(i) && `, `]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this));\n  }\n\n  return spotifyData && discogsData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [renderArtists(), \" - \", spotifyData.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 8\n    }, this), discogsData.map(release => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: [release.title, \" - \", release.year, \" - \", release.label[0]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 12\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: release.cover_image,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 12\n        }, this)]\n      }, void 0, true);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"hello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 8\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 8\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1JlbGVhc2VEZXRhaWxzLmpzPzQxMGUiXSwibmFtZXMiOlsiSGVsbG8iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkaXNjb2dzRGF0YSIsInNwb3RpZnlEYXRhIiwiYWRkQ29tYSIsImkiLCJhcnRpc3RzIiwibGVuZ3RoIiwiY292ZXJfaW1hZ2UiLCJyZW5kZXJBcnRpc3RzIiwibWFwIiwiYXJ0aXN0IiwibmFtZSIsInJlbGVhc2UiLCJ0aXRsZSIsInllYXIiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsUUFBTTtBQUFDRyxlQUFEO0FBQWNDO0FBQWQsTUFBNkJKLEtBQW5DOztBQUVBLFdBQVNLLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ3BCLFdBQ0VGLFdBQVcsQ0FBQ0csT0FBWixDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBN0IsSUFBa0NGLENBQUMsR0FBR0YsV0FBVyxDQUFDRyxPQUFaLENBQW9CQyxNQUFwQixHQUE2QixDQURyRTtBQUdEOztBQUNDTCxhQUFXLElBQUlGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVNLFdBQTNCLENBQWY7O0FBQ0EsV0FBU0MsYUFBVCxHQUF5QjtBQUN6QixXQUFPTixXQUFXLENBQUNHLE9BQVosQ0FBb0JJLEdBQXBCLENBQXdCLENBQUNDLE1BQUQsRUFBU04sQ0FBVCxrQkFDN0I7QUFBQSxpQkFDR00sTUFBTSxDQUFDQyxJQURWLEVBRUdSLE9BQU8sQ0FBQ0MsQ0FBRCxDQUFQLElBQWUsSUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssQ0FBUDtBQU1EOztBQUVDLFNBQ0dGLFdBQVcsSUFBSUQsV0FBZixpQkFDQTtBQUFBLDRCQUNBO0FBQUEsaUJBQUtPLGFBQWEsRUFBbEIsU0FBeUJOLFdBQVcsQ0FBQ1MsSUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFFQ1YsV0FBVyxDQUFDUSxHQUFaLENBQWlCRyxPQUFELElBQWE7QUFDMUIsMEJBQ0E7QUFBQSxnQ0FDQTtBQUFBLHFCQUFLQSxPQUFPLENBQUNDLEtBQWIsU0FBdUJELE9BQU8sQ0FBQ0UsSUFBL0IsU0FBd0NGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLENBQWQsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUE7QUFBSyxhQUFHLEVBQUVILE9BQU8sQ0FBQ0wsV0FBbEI7QUFBK0IsYUFBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQSxzQkFEQTtBQUtILEtBTkEsQ0FGRCxlQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSDtBQXVCSCIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvUmVsZWFzZURldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbGxvKHByb3BzKSB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgY29uc3Qge2Rpc2NvZ3NEYXRhLCBzcG90aWZ5RGF0YX0gPSBwcm9wc1xuXG4gICAgZnVuY3Rpb24gYWRkQ29tYShpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNwb3RpZnlEYXRhLmFydGlzdHMubGVuZ3RoID4gMSAmJiBpIDwgc3BvdGlmeURhdGEuYXJ0aXN0cy5sZW5ndGggLSAxXG4gICAgKTtcbiAgfVxuICAgIGRpc2NvZ3NEYXRhICYmIGNvbnNvbGUubG9nKGRpc2NvZ3NEYXRhWzBdLmNvdmVyX2ltYWdlKVxuICAgIGZ1bmN0aW9uIHJlbmRlckFydGlzdHMoKSB7XG4gICAgcmV0dXJuIHNwb3RpZnlEYXRhLmFydGlzdHMubWFwKChhcnRpc3QsIGkpID0+IChcbiAgICAgIDxzcGFuPlxuICAgICAgICB7YXJ0aXN0Lm5hbWV9XG4gICAgICAgIHthZGRDb21hKGkpICYmIGAsIGB9XG4gICAgICA8L3NwYW4+XG4gICAgKSk7XG4gIH1cblxuICAgIHJldHVybihcbiAgICAgICBzcG90aWZ5RGF0YSAmJiBkaXNjb2dzRGF0YSAmJlxuICAgICAgIDxkaXY+XG4gICAgICAgPGgxPntyZW5kZXJBcnRpc3RzKCl9IC0ge3Nwb3RpZnlEYXRhLm5hbWV9PC9oMT5cbiAgICAgICB7ZGlzY29nc0RhdGEubWFwKChyZWxlYXNlKSA9PiB7XG4gICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgPD5cbiAgICAgICAgICAgPGgxPntyZWxlYXNlLnRpdGxlfSAtIHtyZWxlYXNlLnllYXJ9IC0ge3JlbGVhc2UubGFiZWxbMF19PC9oMT5cbiAgICAgICAgICAgPGltZyBzcmM9e3JlbGVhc2UuY292ZXJfaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgIDwvPilcbiAgICAgICB9XG5cblxuICAgICAgIClcblxuXG5cbiAgICAgICB9XG4gICAgICAgPGgxPmhlbGxvPC9oMT5cbiAgICAgICBcbiAgICAgICA8L2Rpdj5cblxuICAgICkgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ReleaseDetails.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_useAccessToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/useAccessToken */ \"./pages/api/useAccessToken.js\");\n/* harmony import */ var _api_useSpotifyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/useSpotifyData */ \"./pages/api/useSpotifyData.js\");\n/* harmony import */ var _api_useDiscogsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/useDiscogsData */ \"./pages/api/useDiscogsData.js\");\n/* harmony import */ var _components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ReleaseDetails */ \"./pages/components/ReleaseDetails.js\");\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/index.js\";\n\n\n\n\n\n\nfunction Home() {\n  console.log(\"d9bf26c841ce4b99b3a3671fd01b90cf\");\n  const accessToken = Object(_api_useAccessToken__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  function handleSignInClick() {\n    const client_id = \"d9bf26c841ce4b99b3a3671fd01b90cf\";\n    const redirect_uri = false ? undefined : \"http://localhost:3000\";\n    const scope = \"streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state\";\n    window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`;\n  }\n\n  console.log(\"token\", accessToken);\n  const spotifyData = Object(_api_useSpotifyData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(accessToken);\n  const discogsData = Object(_api_useDiscogsData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(spotifyData);\n  console.log(\"current track\", spotifyData);\n  console.log(\"discogs\", discogsData);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Spotify liner Notes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: accessToken ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        spotifyData: spotifyData,\n        discogsData: discogsData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 24\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        onClick: handleSignInClick,\n        children: \"Log In to Spotify\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwidXNlQWNjZXNzVG9rZW4iLCJoYW5kbGVTaWduSW5DbGljayIsImNsaWVudF9pZCIsInJlZGlyZWN0X3VyaSIsInNjb3BlIiwid2luZG93IiwibG9jYXRpb24iLCJzcG90aWZ5RGF0YSIsInVzZVNwb3RpZnlEYXRhIiwiZGlzY29nc0RhdGEiLCJ1c2VEaXNjb2dzRGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0NBQVo7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLG1FQUFjLEVBQWxDOztBQUNBLFdBQVNDLGlCQUFULEdBQTZCO0FBQzNCLFVBQU1DLFNBQVMsR0FBR0osa0NBQWxCO0FBQ0EsVUFBTUssWUFBWSxHQUFHLFFBQ2YsU0FEZSxHQUVmLHVCQUZOO0FBR0EsVUFBTUMsS0FBSyxHQUFHLG1IQUFkO0FBQ0FDLFVBQU0sQ0FBQ0MsUUFBUCxHQUFtQixvREFBbURKLFNBQVUscUNBQW9DQyxZQUFhLFVBQVNDLEtBQU0sbUJBQWhKO0FBQ0Q7O0FBQ0RSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJFLFdBQXJCO0FBQ0EsUUFBTVEsV0FBVyxHQUFHQyxtRUFBYyxDQUFDVCxXQUFELENBQWxDO0FBQ0EsUUFBTVUsV0FBVyxHQUFHQyxtRUFBYyxDQUFDSCxXQUFELENBQWxDO0FBQ0FYLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJVLFdBQTdCO0FBQ0FYLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJZLFdBQXZCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQUEsZ0JBQ0dkLFdBQVcsZ0JBQUcscUVBQUMsa0VBQUQ7QUFBZ0IsbUJBQVcsRUFBRVEsV0FBN0I7QUFBMEMsbUJBQVcsRUFBRUU7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILGdCQUNaO0FBQUksaUJBQVMsRUFBRUUsOERBQU0sQ0FBQ0csS0FBdEI7QUFBNkIsZUFBTyxFQUFFYixpQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB1c2VBY2Nlc3NUb2tlbiBmcm9tIFwiLi9hcGkvdXNlQWNjZXNzVG9rZW5cIjtcbmltcG9ydCB1c2VTcG90aWZ5RGF0YSBmcm9tIFwiLi9hcGkvdXNlU3BvdGlmeURhdGFcIjtcbmltcG9ydCB1c2VEaXNjb2dzRGF0YSBmcm9tIFwiLi9hcGkvdXNlRGlzY29nc0RhdGFcIjtcbmltcG9ydCBSZWxlYXNlRGV0YWlscyBmcm9tIFwiLi9jb21wb25lbnRzL1JlbGVhc2VEZXRhaWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1BPVElGWV9LRVkpXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlQWNjZXNzVG9rZW4oKTtcbiAgZnVuY3Rpb24gaGFuZGxlU2lnbkluQ2xpY2soKSB7XG4gICAgY29uc3QgY2xpZW50X2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1BPVElGWV9LRVlcbiAgICBjb25zdCByZWRpcmVjdF91cmkgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyBcImh0dHBzOi8vc3BvdGlmeS1saW5lci1ub3Rlcy5uZXRsaWZ5LmFwcFwiXG4gICAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiA7XG4gICAgY29uc3Qgc2NvcGUgPSBcInN0cmVhbWluZyB1c2VyLXJlYWQtZW1haWwgdXNlci1yZWFkLXByaXZhdGUgdXNlci1saWJyYXJ5LXJlYWQgdXNlci1yZWFkLXBsYXliYWNrLXN0YXRlIHVzZXItbW9kaWZ5LXBsYXliYWNrLXN0YXRlXCJcbiAgICB3aW5kb3cubG9jYXRpb24gPSBgaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU/Y2xpZW50X2lkPSR7Y2xpZW50X2lkfSZyZXNwb25zZV90eXBlPXRva2VuJnJlZGlyZWN0X3VyaT0ke3JlZGlyZWN0X3VyaX0mc2NvcGU9JHtzY29wZX0mc2hvd19kaWFsb2c9dHJ1ZWBcbiAgfVxuICBjb25zb2xlLmxvZyhcInRva2VuXCIsIGFjY2Vzc1Rva2VuKVxuICBjb25zdCBzcG90aWZ5RGF0YSA9IHVzZVNwb3RpZnlEYXRhKGFjY2Vzc1Rva2VuKVxuICBjb25zdCBkaXNjb2dzRGF0YSA9IHVzZURpc2NvZ3NEYXRhKHNwb3RpZnlEYXRhKVxuICBjb25zb2xlLmxvZyhcImN1cnJlbnQgdHJhY2tcIiwgc3BvdGlmeURhdGEpXG4gIGNvbnNvbGUubG9nKFwiZGlzY29nc1wiLCBkaXNjb2dzRGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3BvdGlmeSBsaW5lciBOb3RlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHthY2Nlc3NUb2tlbiA/IDxSZWxlYXNlRGV0YWlscyBzcG90aWZ5RGF0YT17c3BvdGlmeURhdGF9IGRpc2NvZ3NEYXRhPXtkaXNjb2dzRGF0YX0vPiA6IFxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IG9uQ2xpY2s9e2hhbmRsZVNpZ25JbkNsaWNrfT5cbiAgICAgICAgICBMb2cgSW4gdG8gU3BvdGlmeVxuICAgICAgICA8L2gxPn0gICAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "discojs":
/*!**************************!*\
  !*** external "discojs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"discojs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkaXNjb2pzXCI/NDk5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJkaXNjb2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGlzY29qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///discojs\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIj8yZjBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InF1ZXJ5LXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///query-string\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });