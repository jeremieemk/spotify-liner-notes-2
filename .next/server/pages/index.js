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

/***/ "./pages/api/handleSignInClick.js":
/*!****************************************!*\
  !*** ./pages/api/handleSignInClick.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handleSignInClick; });\nfunction handleSignInClick() {\n  const client_id = \"d9bf26c841ce4b99b3a3671fd01b90cf\";\n  const redirect_uri = false ? undefined : \"http://localhost:3000\";\n  const scope = \"streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state\";\n  window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaGFuZGxlU2lnbkluQ2xpY2suanM/NjdhMyJdLCJuYW1lcyI6WyJoYW5kbGVTaWduSW5DbGljayIsImNsaWVudF9pZCIsInByb2Nlc3MiLCJyZWRpcmVjdF91cmkiLCJzY29wZSIsIndpbmRvdyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWUsU0FBU0EsaUJBQVQsR0FBNkI7QUFDMUMsUUFBTUMsU0FBUyxHQUFHQyxrQ0FBbEI7QUFDQSxRQUFNQyxZQUFZLEdBQ2hCLFFBQ0ksU0FESixHQUVJLHVCQUhOO0FBSUEsUUFBTUMsS0FBSyxHQUNULG1IQURGO0FBRUFDLFFBQU0sQ0FBQ0MsUUFBUCxHQUFtQixvREFBbURMLFNBQVUscUNBQW9DRSxZQUFhLFVBQVNDLEtBQU0sbUJBQWhKO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGFuZGxlU2lnbkluQ2xpY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVTaWduSW5DbGljaygpIHtcbiAgY29uc3QgY2xpZW50X2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1BPVElGWV9LRVk7XG4gIGNvbnN0IHJlZGlyZWN0X3VyaSA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICA/IFwiaHR0cHM6Ly9zcG90aWZ5LWxpbmVyLW5vdGVzLm5ldGxpZnkuYXBwXCJcbiAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcbiAgY29uc3Qgc2NvcGUgPVxuICAgIFwic3RyZWFtaW5nIHVzZXItcmVhZC1lbWFpbCB1c2VyLXJlYWQtcHJpdmF0ZSB1c2VyLWxpYnJhcnktcmVhZCB1c2VyLXJlYWQtcGxheWJhY2stc3RhdGUgdXNlci1tb2RpZnktcGxheWJhY2stc3RhdGVcIjtcbiAgd2luZG93LmxvY2F0aW9uID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplP2NsaWVudF9pZD0ke2NsaWVudF9pZH0mcmVzcG9uc2VfdHlwZT10b2tlbiZyZWRpcmVjdF91cmk9JHtyZWRpcmVjdF91cml9JnNjb3BlPSR7c2NvcGV9JnNob3dfZGlhbG9nPXRydWVgO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/handleSignInClick.js\n");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReleaseDetails; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/components/ReleaseDetails.js\";\n\nfunction ReleaseDetails(props) {\n  const {\n    discogsData,\n    spotifyData\n  } = props;\n\n  function renderArtists() {\n    return spotifyData.artists.map(artist => artist.name).join(\", \");\n  }\n\n  const orderedReleaselist = discogsData && discogsData.sort((a, b) => {\n    return b.community.want - a.community.want;\n  }).slice(0, 10);\n  console.log(\"ordered list\", orderedReleaselist);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [renderArtists(), \" - \", spotifyData.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), discogsData && orderedReleaselist.map(release => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: [release.title, \" - \", release.year, \" - \", release.label[0]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: release.cover_image,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"hello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1JlbGVhc2VEZXRhaWxzLmpzPzQxMGUiXSwibmFtZXMiOlsiUmVsZWFzZURldGFpbHMiLCJwcm9wcyIsImRpc2NvZ3NEYXRhIiwic3BvdGlmeURhdGEiLCJyZW5kZXJBcnRpc3RzIiwiYXJ0aXN0cyIsIm1hcCIsImFydGlzdCIsIm5hbWUiLCJqb2luIiwib3JkZXJlZFJlbGVhc2VsaXN0Iiwic29ydCIsImEiLCJiIiwiY29tbXVuaXR5Iiwid2FudCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInJlbGVhc2UiLCJ0aXRsZSIsInllYXIiLCJsYWJlbCIsImNvdmVyX2ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzVDLFFBQU07QUFBRUMsZUFBRjtBQUFlQztBQUFmLE1BQStCRixLQUFyQzs7QUFFQSxXQUFTRyxhQUFULEdBQXlCO0FBQ3ZCLFdBQU9ELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQkMsR0FBcEIsQ0FBeUJDLE1BQUQsSUFBWUEsTUFBTSxDQUFDQyxJQUEzQyxFQUFpREMsSUFBakQsQ0FBc0QsSUFBdEQsQ0FBUDtBQUNEOztBQUVELFFBQU1DLGtCQUFrQixHQUN0QlIsV0FBVyxJQUNYQSxXQUFXLENBQ1JTLElBREgsQ0FDUSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUNkLFdBQU9BLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxJQUFaLEdBQW1CSCxDQUFDLENBQUNFLFNBQUYsQ0FBWUMsSUFBdEM7QUFDRCxHQUhILEVBSUdDLEtBSkgsQ0FJUyxDQUpULEVBSVksRUFKWixDQUZGO0FBUUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJSLGtCQUE1QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxpQkFDR04sYUFBYSxFQURoQixTQUN1QkQsV0FBVyxDQUFDSyxJQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlHTixXQUFXLElBQ1ZRLGtCQUFrQixDQUFDSixHQUFuQixDQUF3QmEsT0FBRCxJQUFhO0FBQ2xDLDBCQUNFO0FBQUEsZ0NBQ0U7QUFBQSxxQkFDR0EsT0FBTyxDQUFDQyxLQURYLFNBQ3FCRCxPQUFPLENBQUNFLElBRDdCLFNBQ3NDRixPQUFPLENBQUNHLEtBQVIsQ0FBYyxDQUFkLENBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUssYUFBRyxFQUFFSCxPQUFPLENBQUNJLFdBQWxCO0FBQStCLGFBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUEsc0JBREY7QUFRRCxLQVRELENBTEosZUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9SZWxlYXNlRGV0YWlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVsZWFzZURldGFpbHMocHJvcHMpIHtcbiAgY29uc3QgeyBkaXNjb2dzRGF0YSwgc3BvdGlmeURhdGEgfSA9IHByb3BzO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckFydGlzdHMoKSB7XG4gICAgcmV0dXJuIHNwb3RpZnlEYXRhLmFydGlzdHMubWFwKChhcnRpc3QpID0+IGFydGlzdC5uYW1lKS5qb2luKFwiLCBcIik7XG4gIH1cblxuICBjb25zdCBvcmRlcmVkUmVsZWFzZWxpc3QgPVxuICAgIGRpc2NvZ3NEYXRhICYmXG4gICAgZGlzY29nc0RhdGFcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBiLmNvbW11bml0eS53YW50IC0gYS5jb21tdW5pdHkud2FudDtcbiAgICAgIH0pXG4gICAgICAuc2xpY2UoMCwgMTApO1xuXG4gIGNvbnNvbGUubG9nKFwib3JkZXJlZCBsaXN0XCIsIG9yZGVyZWRSZWxlYXNlbGlzdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5cbiAgICAgICAge3JlbmRlckFydGlzdHMoKX0gLSB7c3BvdGlmeURhdGEubmFtZX1cbiAgICAgIDwvaDE+XG4gICAgICB7ZGlzY29nc0RhdGEgJiZcbiAgICAgICAgb3JkZXJlZFJlbGVhc2VsaXN0Lm1hcCgocmVsZWFzZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAge3JlbGVhc2UudGl0bGV9IC0ge3JlbGVhc2UueWVhcn0gLSB7cmVsZWFzZS5sYWJlbFswXX1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3JlbGVhc2UuY292ZXJfaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDxoMT5oZWxsbzwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ReleaseDetails.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_handleSignInClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/handleSignInClick */ \"./pages/api/handleSignInClick.js\");\n/* harmony import */ var _api_useAccessToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/useAccessToken */ \"./pages/api/useAccessToken.js\");\n/* harmony import */ var _api_useSpotifyData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/useSpotifyData */ \"./pages/api/useSpotifyData.js\");\n/* harmony import */ var _api_useDiscogsData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/useDiscogsData */ \"./pages/api/useDiscogsData.js\");\n/* harmony import */ var _components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ReleaseDetails */ \"./pages/components/ReleaseDetails.js\");\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  const accessToken = Object(_api_useAccessToken__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const spotifyData = Object(_api_useSpotifyData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(accessToken);\n  const discogsData = Object(_api_useDiscogsData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(spotifyData);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Spotify liner Notes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: spotifyData ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        spotifyData: spotifyData,\n        discogsData: discogsData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        onClick: _api_handleSignInClick__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: \"Log In to Spotify\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJhY2Nlc3NUb2tlbiIsInVzZUFjY2Vzc1Rva2VuIiwic3BvdGlmeURhdGEiLCJ1c2VTcG90aWZ5RGF0YSIsImRpc2NvZ3NEYXRhIiwidXNlRGlzY29nc0RhdGEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJoYW5kbGVTaWduSW5DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFFBQU1DLFdBQVcsR0FBR0MsbUVBQWMsRUFBbEM7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLG1FQUFjLENBQUNILFdBQUQsQ0FBbEM7QUFDQSxRQUFNSSxXQUFXLEdBQUdDLG1FQUFjLENBQUNILFdBQUQsQ0FBbEM7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUksOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSxnQkFDR04sV0FBVyxnQkFDVixxRUFBQyxrRUFBRDtBQUFnQixtQkFBVyxFQUFFQSxXQUE3QjtBQUEwQyxtQkFBVyxFQUFFRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFUsZ0JBR1Y7QUFBSSxpQkFBUyxFQUFFRSw4REFBTSxDQUFDRyxLQUF0QjtBQUE2QixlQUFPLEVBQUVDLDhEQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgaGFuZGxlU2lnbkluQ2xpY2sgZnJvbSBcIi4vYXBpL2hhbmRsZVNpZ25JbkNsaWNrXCI7XG5cbmltcG9ydCB1c2VBY2Nlc3NUb2tlbiBmcm9tIFwiLi9hcGkvdXNlQWNjZXNzVG9rZW5cIjtcbmltcG9ydCB1c2VTcG90aWZ5RGF0YSBmcm9tIFwiLi9hcGkvdXNlU3BvdGlmeURhdGFcIjtcbmltcG9ydCB1c2VEaXNjb2dzRGF0YSBmcm9tIFwiLi9hcGkvdXNlRGlzY29nc0RhdGFcIjtcbmltcG9ydCBSZWxlYXNlRGV0YWlscyBmcm9tIFwiLi9jb21wb25lbnRzL1JlbGVhc2VEZXRhaWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlQWNjZXNzVG9rZW4oKTtcbiAgY29uc3Qgc3BvdGlmeURhdGEgPSB1c2VTcG90aWZ5RGF0YShhY2Nlc3NUb2tlbik7XG4gIGNvbnN0IGRpc2NvZ3NEYXRhID0gdXNlRGlzY29nc0RhdGEoc3BvdGlmeURhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TcG90aWZ5IGxpbmVyIE5vdGVzPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge3Nwb3RpZnlEYXRhID8gKFxuICAgICAgICAgIDxSZWxlYXNlRGV0YWlscyBzcG90aWZ5RGF0YT17c3BvdGlmeURhdGF9IGRpc2NvZ3NEYXRhPXtkaXNjb2dzRGF0YX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IG9uQ2xpY2s9e2hhbmRsZVNpZ25JbkNsaWNrfT5cbiAgICAgICAgICAgIExvZyBJbiB0byBTcG90aWZ5XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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