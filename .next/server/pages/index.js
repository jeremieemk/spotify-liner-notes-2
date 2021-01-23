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

/***/ "./pages/api/useSpotifyData.js":
/*!*************************************!*\
  !*** ./pages/api/useSpotifyData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useSpotifyData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useSpotifyData(accessToken) {\n  const {\n    0: spotifyData,\n    1: setSpotifyData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchCurrentTrack(accessToken, setSpotifyData);\n  }, []);\n\n  function fetchCurrentTrack(accessToken, setSpotifyData) {\n    const nowPlayingApiUrl = \"https://api.spotify.com/v1/me/player\";\n    fetch(nowPlayingApiUrl, {\n      headers: {\n        Authorization: \"Bearer \" + accessToken\n      }\n    }).then(response => {\n      if (response.status === 204 || response.status === 401) {\n        console.log(\"manage error\");\n      } else {\n        return response.json();\n      }\n    }).then(data => {\n      setSpotifyData(data.item);\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n\n  return spotifyData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlU3BvdGlmeURhdGEuanM/YzliOSJdLCJuYW1lcyI6WyJ1c2VTcG90aWZ5RGF0YSIsImFjY2Vzc1Rva2VuIiwic3BvdGlmeURhdGEiLCJzZXRTcG90aWZ5RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hDdXJyZW50VHJhY2siLCJub3dQbGF5aW5nQXBpVXJsIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsIml0ZW0iLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsV0FBeEIsRUFBcUM7QUFDbEQsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBOUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLHFCQUFpQixDQUFDTCxXQUFELEVBQWNFLGNBQWQsQ0FBakI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFdBQVNHLGlCQUFULENBQTJCTCxXQUEzQixFQUF3Q0UsY0FBeEMsRUFBd0Q7QUFDdEQsVUFBTUksZ0JBQWdCLEdBQUcsc0NBQXpCO0FBQ0FDLFNBQUssQ0FBQ0QsZ0JBQUQsRUFBbUI7QUFDcEJFLGFBQU8sRUFBRTtBQUFFQyxxQkFBYSxFQUFFLFlBQVlUO0FBQTdCO0FBRFcsS0FBbkIsQ0FBTCxDQUdLVSxJQUhMLENBR1dDLFFBQUQsSUFBYztBQUNwQixVQUFJQSxRQUFRLENBQUNDLE1BQVQsS0FBb0IsR0FBcEIsSUFBMkJELFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixHQUFuRCxFQUF3RDtBQUNwREMsZUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNILE9BRkQsTUFFTztBQUNILGVBQU9ILFFBQVEsQ0FBQ0ksSUFBVCxFQUFQO0FBQ0g7QUFDQSxLQVRMLEVBVUtMLElBVkwsQ0FVV00sSUFBRCxJQUFVO0FBQ2hCZCxvQkFBYyxDQUFDYyxJQUFJLENBQUNDLElBQU4sQ0FBZDtBQUNDLEtBWkwsRUFhS0MsS0FiTCxDQWFXLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxLQUFaO0FBQ0MsS0FmTDtBQWdCQzs7QUFFRCxTQUFPbEIsV0FBUDtBQUNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZVNwb3RpZnlEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTcG90aWZ5RGF0YShhY2Nlc3NUb2tlbikge1xuICBjb25zdCBbc3BvdGlmeURhdGEsIHNldFNwb3RpZnlEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2hDdXJyZW50VHJhY2soYWNjZXNzVG9rZW4sIHNldFNwb3RpZnlEYXRhKVxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gZmV0Y2hDdXJyZW50VHJhY2soYWNjZXNzVG9rZW4sIHNldFNwb3RpZnlEYXRhKSB7XG4gICAgY29uc3Qgbm93UGxheWluZ0FwaVVybCA9IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyXCI7XG4gICAgZmV0Y2gobm93UGxheWluZ0FwaVVybCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgYWNjZXNzVG9rZW4gfSxcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hbmFnZSBlcnJvclwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRTcG90aWZ5RGF0YShkYXRhLml0ZW0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc3BvdGlmeURhdGFcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/useSpotifyData.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_useAccessToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/useAccessToken */ \"./pages/api/useAccessToken.js\");\n/* harmony import */ var _api_useSpotifyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/useSpotifyData */ \"./pages/api/useSpotifyData.js\");\n\nvar _jsxFileName = \"/Users/jeremie/web/44_spotify-liner-notes2.0/pages/index.js\";\n\n\n\n\nfunction Home() {\n  console.log(\"d9bf26c841ce4b99b3a3671fd01b90cf\");\n  const accessToken = Object(_api_useAccessToken__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  function handleSignInClick() {\n    const client_id = \"d9bf26c841ce4b99b3a3671fd01b90cf\";\n    const redirect_uri = false ? undefined : \"http://localhost:3000\";\n    const scope = \"streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state\";\n    window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`;\n  }\n\n  const spotifyData = Object(_api_useSpotifyData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(accessToken);\n  console.log(\"current track\", spotifyData);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: accessToken ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"C'est bon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 24\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        onClick: handleSignInClick,\n        children: \"Log In to Spotify\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 45\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwidXNlQWNjZXNzVG9rZW4iLCJoYW5kbGVTaWduSW5DbGljayIsImNsaWVudF9pZCIsInJlZGlyZWN0X3VyaSIsInNjb3BlIiwid2luZG93IiwibG9jYXRpb24iLCJzcG90aWZ5RGF0YSIsInVzZVNwb3RpZnlEYXRhIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsbUVBQWMsRUFBbEM7O0FBQ0EsV0FBU0MsaUJBQVQsR0FBNkI7QUFDM0IsVUFBTUMsU0FBUyxHQUFHSixrQ0FBbEI7QUFDQSxVQUFNSyxZQUFZLEdBQUcsUUFDZixTQURlLEdBRWYsdUJBRk47QUFHQSxVQUFNQyxLQUFLLEdBQUcsbUhBQWQ7QUFDQUMsVUFBTSxDQUFDQyxRQUFQLEdBQW1CLG9EQUFtREosU0FBVSxxQ0FBb0NDLFlBQWEsVUFBU0MsS0FBTSxtQkFBaEo7QUFDRDs7QUFFRCxRQUFNRyxXQUFXLEdBQUdDLG1FQUFjLENBQUNULFdBQUQsQ0FBbEM7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlUsV0FBN0I7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSxnQkFDR1osV0FBVyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILGdCQUF3QjtBQUFJLGlCQUFTLEVBQUVVLDhEQUFNLENBQUNHLEtBQXRCO0FBQTZCLGVBQU8sRUFBRVgsaUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgdXNlQWNjZXNzVG9rZW4gZnJvbSBcIi4vYXBpL3VzZUFjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgdXNlU3BvdGlmeURhdGEgZnJvbSBcIi4vYXBpL3VzZVNwb3RpZnlEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NQT1RJRllfS0VZKVxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZUFjY2Vzc1Rva2VuKCk7XG4gIGZ1bmN0aW9uIGhhbmRsZVNpZ25JbkNsaWNrKCkge1xuICAgIGNvbnN0IGNsaWVudF9pZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NQT1RJRllfS0VZXG4gICAgY29uc3QgcmVkaXJlY3RfdXJpID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgID8gXCJodHRwczovL3Nwb3RpZnktbGluZXItbm90ZXMubmV0bGlmeS5hcHBcIlxuICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIgO1xuICAgIGNvbnN0IHNjb3BlID0gXCJzdHJlYW1pbmcgdXNlci1yZWFkLWVtYWlsIHVzZXItcmVhZC1wcml2YXRlIHVzZXItbGlicmFyeS1yZWFkIHVzZXItcmVhZC1wbGF5YmFjay1zdGF0ZSB1c2VyLW1vZGlmeS1wbGF5YmFjay1zdGF0ZVwiXG4gICAgd2luZG93LmxvY2F0aW9uID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplP2NsaWVudF9pZD0ke2NsaWVudF9pZH0mcmVzcG9uc2VfdHlwZT10b2tlbiZyZWRpcmVjdF91cmk9JHtyZWRpcmVjdF91cml9JnNjb3BlPSR7c2NvcGV9JnNob3dfZGlhbG9nPXRydWVgXG4gIH1cblxuICBjb25zdCBzcG90aWZ5RGF0YSA9IHVzZVNwb3RpZnlEYXRhKGFjY2Vzc1Rva2VuKVxuICBjb25zb2xlLmxvZyhcImN1cnJlbnQgdHJhY2tcIiwgc3BvdGlmeURhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHthY2Nlc3NUb2tlbiA/IDxoMT5DJ2VzdCBib248L2gxPiA6IDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gb25DbGljaz17aGFuZGxlU2lnbkluQ2xpY2t9PlxuICAgICAgICAgIExvZyBJbiB0byBTcG90aWZ5XG4gICAgICAgIDwvaDE+fSAgICAgICAgICBcbiAgICAgIDwvbWFpbj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

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