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

/***/ "./pages/api/getCleanTrackDetails.js":
/*!*******************************************!*\
  !*** ./pages/api/getCleanTrackDetails.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCleanTrackDetails; });\nfunction getCleanTrackDetails(spotifyData) {\n  const regex = /\\s*\\([^)]*\\)/g;\n  const cleanTrackName = spotifyData.name.includes(\"-\") ? spotifyData.name.replace(regex, \"\").replaceAll(\"&\", \"\").substring(0, spotifyData.name.indexOf(\"-\")) : spotifyData.name.replace(regex, \"\").replaceAll(\"&\", \"\");\n  const cleanArtistName = spotifyData.artists[0].name.replaceAll(\"&\", \"and\");\n  return {\n    artist: cleanArtistName,\n    song: cleanTrackName\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0Q2xlYW5UcmFja0RldGFpbHMuanM/NDIyZCJdLCJuYW1lcyI6WyJnZXRDbGVhblRyYWNrRGV0YWlscyIsInNwb3RpZnlEYXRhIiwicmVnZXgiLCJjbGVhblRyYWNrTmFtZSIsIm5hbWUiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNsZWFuQXJ0aXN0TmFtZSIsImFydGlzdHMiLCJhcnRpc3QiLCJzb25nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWUsU0FBU0Esb0JBQVQsQ0FBOEJDLFdBQTlCLEVBQTJDO0FBQ3hELFFBQU1DLEtBQUssR0FBRyxlQUFkO0FBQ0EsUUFBTUMsY0FBYyxHQUFHRixXQUFXLENBQUNHLElBQVosQ0FBaUJDLFFBQWpCLENBQTBCLEdBQTFCLElBQ25CSixXQUFXLENBQUNHLElBQVosQ0FDR0UsT0FESCxDQUNXSixLQURYLEVBQ2tCLEVBRGxCLEVBRUdLLFVBRkgsQ0FFYyxHQUZkLEVBRW1CLEVBRm5CLEVBR0dDLFNBSEgsQ0FHYSxDQUhiLEVBR2dCUCxXQUFXLENBQUNHLElBQVosQ0FBaUJLLE9BQWpCLENBQXlCLEdBQXpCLENBSGhCLENBRG1CLEdBS25CUixXQUFXLENBQUNHLElBQVosQ0FBaUJFLE9BQWpCLENBQXlCSixLQUF6QixFQUFnQyxFQUFoQyxFQUFvQ0ssVUFBcEMsQ0FBK0MsR0FBL0MsRUFBb0QsRUFBcEQsQ0FMSjtBQU9BLFFBQU1HLGVBQWUsR0FBR1QsV0FBVyxDQUFDVSxPQUFaLENBQW9CLENBQXBCLEVBQXVCUCxJQUF2QixDQUE0QkcsVUFBNUIsQ0FBdUMsR0FBdkMsRUFBNEMsS0FBNUMsQ0FBeEI7QUFDQSxTQUFPO0FBQUVLLFVBQU0sRUFBRUYsZUFBVjtBQUEyQkcsUUFBSSxFQUFFVjtBQUFqQyxHQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0Q2xlYW5UcmFja0RldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGVhblRyYWNrRGV0YWlscyhzcG90aWZ5RGF0YSkge1xuICBjb25zdCByZWdleCA9IC9cXHMqXFwoW14pXSpcXCkvZztcbiAgY29uc3QgY2xlYW5UcmFja05hbWUgPSBzcG90aWZ5RGF0YS5uYW1lLmluY2x1ZGVzKFwiLVwiKVxuICAgID8gc3BvdGlmeURhdGEubmFtZVxuICAgICAgICAucmVwbGFjZShyZWdleCwgXCJcIilcbiAgICAgICAgLnJlcGxhY2VBbGwoXCImXCIsIFwiXCIpXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgc3BvdGlmeURhdGEubmFtZS5pbmRleE9mKFwiLVwiKSlcbiAgICA6IHNwb3RpZnlEYXRhLm5hbWUucmVwbGFjZShyZWdleCwgXCJcIikucmVwbGFjZUFsbChcIiZcIiwgXCJcIik7XG5cbiAgY29uc3QgY2xlYW5BcnRpc3ROYW1lID0gc3BvdGlmeURhdGEuYXJ0aXN0c1swXS5uYW1lLnJlcGxhY2VBbGwoXCImXCIsIFwiYW5kXCIpO1xuICByZXR1cm4geyBhcnRpc3Q6IGNsZWFuQXJ0aXN0TmFtZSwgc29uZzogY2xlYW5UcmFja05hbWUgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getCleanTrackDetails.js\n");

/***/ }),

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

/***/ "./pages/api/useGeniusData.js":
/*!************************************!*\
  !*** ./pages/api/useGeniusData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useGeniusData; });\n/* harmony import */ var genius_lyrics_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! genius-lyrics-api */ \"genius-lyrics-api\");\n/* harmony import */ var genius_lyrics_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(genius_lyrics_api__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useGeniusData(cleanTrackDetails) {\n  const {\n    0: songLyrics,\n    1: setSongLyrics\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (cleanTrackDetails) {\n      const options = {\n        apiKey: \"BNDuRSUzLuv1aBvqSgoHZSqVIPWdh-UrXi8Vqt0NlVY9Xu6scHOhxDmd_9oASvSg\",\n        title: cleanTrackDetails.song,\n        artist: cleanTrackDetails.artist,\n        optimizeQuery: true\n      };\n      Object(genius_lyrics_api__WEBPACK_IMPORTED_MODULE_0__[\"getLyrics\"])(options).then(lyrics => setSongLyrics(lyrics));\n    }\n  }, [cleanTrackDetails]);\n  return songLyrics;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlR2VuaXVzRGF0YS5qcz9lOTVlIl0sIm5hbWVzIjpbInVzZUdlbml1c0RhdGEiLCJjbGVhblRyYWNrRGV0YWlscyIsInNvbmdMeXJpY3MiLCJzZXRTb25nTHlyaWNzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvcHRpb25zIiwiYXBpS2V5IiwidGl0bGUiLCJzb25nIiwiYXJ0aXN0Iiwib3B0aW1pemVRdWVyeSIsImdldEx5cmljcyIsInRoZW4iLCJseXJpY3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxpQkFBdkIsRUFBMEM7QUFDdkQsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxDQUFDLElBQUQsQ0FBNUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUosaUJBQUosRUFBdUI7QUFDckIsWUFBTUssT0FBTyxHQUFHO0FBQ2RDLGNBQU0sRUFDSixrRUFGWTtBQUdkQyxhQUFLLEVBQUVQLGlCQUFpQixDQUFDUSxJQUhYO0FBSWRDLGNBQU0sRUFBRVQsaUJBQWlCLENBQUNTLE1BSlo7QUFLZEMscUJBQWEsRUFBRTtBQUxELE9BQWhCO0FBT0FDLHlFQUFTLENBQUNOLE9BQUQsQ0FBVCxDQUFtQk8sSUFBbkIsQ0FBeUJDLE1BQUQsSUFBWVgsYUFBYSxDQUFDVyxNQUFELENBQWpEO0FBQ0Q7QUFDRixHQVhRLEVBV04sQ0FBQ2IsaUJBQUQsQ0FYTSxDQUFUO0FBYUEsU0FBT0MsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZUdlbml1c0RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRMeXJpY3MgfSBmcm9tIFwiZ2VuaXVzLWx5cmljcy1hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2VuaXVzRGF0YShjbGVhblRyYWNrRGV0YWlscykge1xuICBjb25zdCBbc29uZ0x5cmljcywgc2V0U29uZ0x5cmljc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2xlYW5UcmFja0RldGFpbHMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGFwaUtleTpcbiAgICAgICAgICBcIkJORHVSU1V6THV2MWFCdnFTZ29IWlNxVklQV2RoLVVyWGk4VnF0ME5sVlk5WHU2c2NIT2h4RG1kXzlvQVN2U2dcIixcbiAgICAgICAgdGl0bGU6IGNsZWFuVHJhY2tEZXRhaWxzLnNvbmcsXG4gICAgICAgIGFydGlzdDogY2xlYW5UcmFja0RldGFpbHMuYXJ0aXN0LFxuICAgICAgICBvcHRpbWl6ZVF1ZXJ5OiB0cnVlLFxuICAgICAgfTtcbiAgICAgIGdldEx5cmljcyhvcHRpb25zKS50aGVuKChseXJpY3MpID0+IHNldFNvbmdMeXJpY3MobHlyaWNzKSk7XG4gICAgfVxuICB9LCBbY2xlYW5UcmFja0RldGFpbHNdKTtcblxuICByZXR1cm4gc29uZ0x5cmljcztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/useGeniusData.js\n");

/***/ }),

/***/ "./pages/api/useLastFmData.js":
/*!************************************!*\
  !*** ./pages/api/useLastFmData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useLastFmData; });\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! last-fm */ \"last-fm\");\n/* harmony import */ var last_fm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(last_fm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useLastFmData(cleanTrackDetails) {\n  const {\n    0: artistBio,\n    1: setArtistBio\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(\"clean\", cleanTrackDetails);\n\n    if (cleanTrackDetails) {\n      const lastfm = new last_fm__WEBPACK_IMPORTED_MODULE_0___default.a(\"8e17009fc64041e78ce4a9ec5c053180\", {\n        userAgent: \"http://localhost:3000\"\n      });\n      lastfm.artistInfo({\n        q: cleanTrackDetails.artist\n      }, (err, data) => {\n        if (err) console.error(err);else console.log(\"lastfm\", data);\n      });\n    }\n  }, [cleanTrackDetails]);\n  return artistBio;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlTGFzdEZtRGF0YS5qcz80MDM5Il0sIm5hbWVzIjpbInVzZUxhc3RGbURhdGEiLCJjbGVhblRyYWNrRGV0YWlscyIsImFydGlzdEJpbyIsInNldEFydGlzdEJpbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxhc3RmbSIsIkxhc3RGTSIsInVzZXJBZ2VudCIsImFydGlzdEluZm8iLCJxIiwiYXJ0aXN0IiwiZXJyIiwiZGF0YSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsaUJBQXZCLEVBQTBDO0FBQ3ZELFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCTixpQkFBckI7O0FBQ0EsUUFBSUEsaUJBQUosRUFBdUI7QUFDckIsWUFBTU8sTUFBTSxHQUFHLElBQUlDLDhDQUFKLENBQVcsa0NBQVgsRUFBK0M7QUFDNURDLGlCQUFTLEVBQUU7QUFEaUQsT0FBL0MsQ0FBZjtBQUlBRixZQUFNLENBQUNHLFVBQVAsQ0FBa0I7QUFBRUMsU0FBQyxFQUFFWCxpQkFBaUIsQ0FBQ1k7QUFBdkIsT0FBbEIsRUFBbUQsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDaEUsWUFBSUQsR0FBSixFQUFTUixPQUFPLENBQUNVLEtBQVIsQ0FBY0YsR0FBZCxFQUFULEtBQ0tSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JRLElBQXRCO0FBQ04sT0FIRDtBQUlEO0FBQ0YsR0FaUSxFQVlOLENBQUNkLGlCQUFELENBWk0sQ0FBVDtBQWNBLFNBQU9DLFNBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VMYXN0Rm1EYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhc3RGTSBmcm9tIFwibGFzdC1mbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMYXN0Rm1EYXRhKGNsZWFuVHJhY2tEZXRhaWxzKSB7XG4gIGNvbnN0IFthcnRpc3RCaW8sIHNldEFydGlzdEJpb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsZWFuXCIsIGNsZWFuVHJhY2tEZXRhaWxzKTtcbiAgICBpZiAoY2xlYW5UcmFja0RldGFpbHMpIHtcbiAgICAgIGNvbnN0IGxhc3RmbSA9IG5ldyBMYXN0Rk0oXCI4ZTE3MDA5ZmM2NDA0MWU3OGNlNGE5ZWM1YzA1MzE4MFwiLCB7XG4gICAgICAgIHVzZXJBZ2VudDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgICAgIH0pO1xuXG4gICAgICBsYXN0Zm0uYXJ0aXN0SW5mbyh7IHE6IGNsZWFuVHJhY2tEZXRhaWxzLmFydGlzdCB9LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcImxhc3RmbVwiLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NsZWFuVHJhY2tEZXRhaWxzXSk7XG5cbiAgcmV0dXJuIGFydGlzdEJpbztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/useLastFmData.js\n");

/***/ }),

/***/ "./pages/api/useSpotifyData.js":
/*!*************************************!*\
  !*** ./pages/api/useSpotifyData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useSpotifyData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useSpotifyData(accessToken) {\n  const {\n    0: spotifyData,\n    1: setSpotifyData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    accessToken && fetchCurrentTrack(accessToken, setSpotifyData);\n  }, [accessToken]);\n\n  function fetchCurrentTrack(accessToken, setSpotifyData) {\n    const nowPlayingApiUrl = \"https://api.spotify.com/v1/me/player\";\n    fetch(nowPlayingApiUrl, {\n      headers: {\n        Authorization: \"Bearer \" + accessToken\n      }\n    }).then(response => {\n      if (response.status === 204 || response.status === 401) {\n        console.log(response);\n        console.log(\"manage error\");\n      } else {\n        return response.json();\n      }\n    }).then(data => {\n      setSpotifyData(data.item);\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n\n  return spotifyData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlU3BvdGlmeURhdGEuanM/YzliOSJdLCJuYW1lcyI6WyJ1c2VTcG90aWZ5RGF0YSIsImFjY2Vzc1Rva2VuIiwic3BvdGlmeURhdGEiLCJzZXRTcG90aWZ5RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hDdXJyZW50VHJhY2siLCJub3dQbGF5aW5nQXBpVXJsIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsIml0ZW0iLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsV0FBeEIsRUFBcUM7QUFDbEQsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBOUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RKLGVBQVcsSUFBSUssaUJBQWlCLENBQUNMLFdBQUQsRUFBY0UsY0FBZCxDQUFoQztBQUNELEdBRlEsRUFFTixDQUFDRixXQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTSyxpQkFBVCxDQUEyQkwsV0FBM0IsRUFBd0NFLGNBQXhDLEVBQXdEO0FBQ3RELFVBQU1JLGdCQUFnQixHQUFHLHNDQUF6QjtBQUNBQyxTQUFLLENBQUNELGdCQUFELEVBQW1CO0FBQ3RCRSxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRSxZQUFZVDtBQUE3QjtBQURhLEtBQW5CLENBQUwsQ0FHR1UsSUFISCxDQUdTQyxRQUFELElBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXBCLElBQTJCRCxRQUFRLENBQUNDLE1BQVQsS0FBb0IsR0FBbkQsRUFBd0Q7QUFDdERDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBQ0FFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDRCxPQUhELE1BR087QUFDTCxlQUFPSCxRQUFRLENBQUNJLElBQVQsRUFBUDtBQUNEO0FBQ0YsS0FWSCxFQVdHTCxJQVhILENBV1NNLElBQUQsSUFBVTtBQUNkZCxvQkFBYyxDQUFDYyxJQUFJLENBQUNDLElBQU4sQ0FBZDtBQUNELEtBYkgsRUFjR0MsS0FkSCxDQWNTLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxLQUFaO0FBQ0QsS0FoQkg7QUFpQkQ7O0FBRUQsU0FBT2xCLFdBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VTcG90aWZ5RGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3BvdGlmeURhdGEoYWNjZXNzVG9rZW4pIHtcbiAgY29uc3QgW3Nwb3RpZnlEYXRhLCBzZXRTcG90aWZ5RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY2Nlc3NUb2tlbiAmJiBmZXRjaEN1cnJlbnRUcmFjayhhY2Nlc3NUb2tlbiwgc2V0U3BvdGlmeURhdGEpO1xuICB9LCBbYWNjZXNzVG9rZW5dKTtcblxuICBmdW5jdGlvbiBmZXRjaEN1cnJlbnRUcmFjayhhY2Nlc3NUb2tlbiwgc2V0U3BvdGlmeURhdGEpIHtcbiAgICBjb25zdCBub3dQbGF5aW5nQXBpVXJsID0gXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5ZXJcIjtcbiAgICBmZXRjaChub3dQbGF5aW5nQXBpVXJsLCB7XG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgYWNjZXNzVG9rZW4gfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hbmFnZSBlcnJvclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0U3BvdGlmeURhdGEoZGF0YS5pdGVtKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNwb3RpZnlEYXRhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/useSpotifyData.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_handleSignInClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/handleSignInClick */ \"./pages/api/handleSignInClick.js\");\n/* harmony import */ var _api_useAccessToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/useAccessToken */ \"./pages/api/useAccessToken.js\");\n/* harmony import */ var _api_useSpotifyData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/useSpotifyData */ \"./pages/api/useSpotifyData.js\");\n/* harmony import */ var _api_useDiscogsData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/useDiscogsData */ \"./pages/api/useDiscogsData.js\");\n/* harmony import */ var _api_useGeniusData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/useGeniusData */ \"./pages/api/useGeniusData.js\");\n/* harmony import */ var _components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ReleaseDetails */ \"./pages/components/ReleaseDetails.js\");\n/* harmony import */ var _api_getCleanTrackDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/getCleanTrackDetails */ \"./pages/api/getCleanTrackDetails.js\");\n/* harmony import */ var _api_useLastFmData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/useLastFmData */ \"./pages/api/useLastFmData.js\");\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/index.js\";\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  const accessToken = Object(_api_useAccessToken__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const spotifyData = Object(_api_useSpotifyData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(accessToken);\n  const cleanTrackDetails = spotifyData && Object(_api_getCleanTrackDetails__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(spotifyData);\n  console.log(\"lyrics\", Object(_api_useGeniusData__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(cleanTrackDetails));\n  const discogsData = Object(_api_useDiscogsData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(spotifyData);\n  const artistBio = Object(_api_useLastFmData__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(cleanTrackDetails);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Spotify liner Notes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: spotifyData ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ReleaseDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        spotifyData: spotifyData,\n        discogsData: discogsData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        onClick: _api_handleSignInClick__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: \"Log In to Spotify\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJhY2Nlc3NUb2tlbiIsInVzZUFjY2Vzc1Rva2VuIiwic3BvdGlmeURhdGEiLCJ1c2VTcG90aWZ5RGF0YSIsImNsZWFuVHJhY2tEZXRhaWxzIiwiZ2V0Q2xlYW5UcmFja0RldGFpbHMiLCJjb25zb2xlIiwibG9nIiwidXNlR2VuaXVzRGF0YSIsImRpc2NvZ3NEYXRhIiwidXNlRGlzY29nc0RhdGEiLCJhcnRpc3RCaW8iLCJ1c2VMYXN0Rm1EYXRhIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiaGFuZGxlU2lnbkluQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNQyxXQUFXLEdBQUdDLG1FQUFjLEVBQWxDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxtRUFBYyxDQUFDSCxXQUFELENBQWxDO0FBQ0EsUUFBTUksaUJBQWlCLEdBQUdGLFdBQVcsSUFBSUcseUVBQW9CLENBQUNILFdBQUQsQ0FBN0Q7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkMsa0VBQWEsQ0FBQ0osaUJBQUQsQ0FBbkM7QUFDQSxRQUFNSyxXQUFXLEdBQUdDLG1FQUFjLENBQUNSLFdBQUQsQ0FBbEM7QUFDQSxRQUFNUyxTQUFTLEdBQUdDLG1FQUFhLENBQUNSLGlCQUFELENBQS9CO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVTLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQUEsZ0JBQ0diLFdBQVcsZ0JBQ1YscUVBQUMsa0VBQUQ7QUFBZ0IsbUJBQVcsRUFBRUEsV0FBN0I7QUFBMEMsbUJBQVcsRUFBRU87QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURVLGdCQUdWO0FBQUksaUJBQVMsRUFBRUksOERBQU0sQ0FBQ0csS0FBdEI7QUFBNkIsZUFBTyxFQUFFQyw4REFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IGhhbmRsZVNpZ25JbkNsaWNrIGZyb20gXCIuL2FwaS9oYW5kbGVTaWduSW5DbGlja1wiO1xuXG5pbXBvcnQgdXNlQWNjZXNzVG9rZW4gZnJvbSBcIi4vYXBpL3VzZUFjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgdXNlU3BvdGlmeURhdGEgZnJvbSBcIi4vYXBpL3VzZVNwb3RpZnlEYXRhXCI7XG5pbXBvcnQgdXNlRGlzY29nc0RhdGEgZnJvbSBcIi4vYXBpL3VzZURpc2NvZ3NEYXRhXCI7XG5pbXBvcnQgdXNlR2VuaXVzRGF0YSBmcm9tIFwiLi9hcGkvdXNlR2VuaXVzRGF0YVwiO1xuaW1wb3J0IFJlbGVhc2VEZXRhaWxzIGZyb20gXCIuL2NvbXBvbmVudHMvUmVsZWFzZURldGFpbHNcIjtcbmltcG9ydCBnZXRDbGVhblRyYWNrRGV0YWlscyBmcm9tIFwiLi9hcGkvZ2V0Q2xlYW5UcmFja0RldGFpbHNcIjtcbmltcG9ydCB1c2VMYXN0Rm1EYXRhIGZyb20gXCIuL2FwaS91c2VMYXN0Rm1EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlQWNjZXNzVG9rZW4oKTtcbiAgY29uc3Qgc3BvdGlmeURhdGEgPSB1c2VTcG90aWZ5RGF0YShhY2Nlc3NUb2tlbik7XG4gIGNvbnN0IGNsZWFuVHJhY2tEZXRhaWxzID0gc3BvdGlmeURhdGEgJiYgZ2V0Q2xlYW5UcmFja0RldGFpbHMoc3BvdGlmeURhdGEpO1xuICBjb25zb2xlLmxvZyhcImx5cmljc1wiLCB1c2VHZW5pdXNEYXRhKGNsZWFuVHJhY2tEZXRhaWxzKSk7XG4gIGNvbnN0IGRpc2NvZ3NEYXRhID0gdXNlRGlzY29nc0RhdGEoc3BvdGlmeURhdGEpO1xuICBjb25zdCBhcnRpc3RCaW8gPSB1c2VMYXN0Rm1EYXRhKGNsZWFuVHJhY2tEZXRhaWxzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3BvdGlmeSBsaW5lciBOb3RlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHtzcG90aWZ5RGF0YSA/IChcbiAgICAgICAgICA8UmVsZWFzZURldGFpbHMgc3BvdGlmeURhdGE9e3Nwb3RpZnlEYXRhfSBkaXNjb2dzRGF0YT17ZGlzY29nc0RhdGF9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSBvbkNsaWNrPXtoYW5kbGVTaWduSW5DbGlja30+XG4gICAgICAgICAgICBMb2cgSW4gdG8gU3BvdGlmeVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "genius-lyrics-api":
/*!************************************!*\
  !*** external "genius-lyrics-api" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"genius-lyrics-api\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnZW5pdXMtbHlyaWNzLWFwaVwiP2Q1YzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ2VuaXVzLWx5cmljcy1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnZW5pdXMtbHlyaWNzLWFwaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///genius-lyrics-api\n");

/***/ }),

/***/ "last-fm":
/*!**************************!*\
  !*** external "last-fm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"last-fm\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsYXN0LWZtXCI/ODBjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJsYXN0LWZtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGFzdC1mbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///last-fm\n");

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