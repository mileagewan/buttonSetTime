/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./buttonSetTime.js":
/*!**************************!*\
  !*** ./buttonSetTime.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 倒计时功能\r\n */\r\n\r\nfunction ButtonSetTime(ele) {\r\n    this.element = document.getElementById(ele);\r\n}\r\n\r\n/**\r\n * \r\n * @param {初始化obj} obj \r\n */\r\nButtonSetTime.prototype.init = function (obj) {\r\n    this.index = obj.index;\r\n    this.start = obj.start || \"获取验证码\";\r\n    this.during = obj.during || '秒后重新获取..';\r\n    this.end = obj.end || this.start;\r\n    this.element.innerHTML = this.start;\r\n    this.edge = obj.index;\r\n    var that = this;\r\n    this.element.onclick = function () {\r\n        that.element.setAttribute('disabled', true);\r\n        that.element.innerHTML = that.index + that.during;\r\n        var timeId = setInterval(function () {\r\n            that.index--;\r\n            if (that.index == 0) {\r\n                clearInterval(timeId);\r\n                that.element.innerHTML = that.end;\r\n                that.element.removeAttribute('disabled');\r\n                that.index = obj.index;\r\n            } else {\r\n                that.element.innerHTML = that.index + that.during;\r\n            }\r\n        }, 1000);\r\n        if (obj.fn) {\r\n            that.fn(obj.fn);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * \r\n * @param {回调函数} fn \r\n */\r\nButtonSetTime.prototype.fn = function (fn) {\r\n    fn();\r\n}\r\nvar buttonSetTime = function (ele) {\r\n    return new ButtonSetTime(ele);\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (buttonSetTime);\r\n\n\n//# sourceURL=webpack:///./buttonSetTime.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttonSetTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonSetTime */ \"./buttonSetTime.js\");\n\r\n\r\nObject(_buttonSetTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('btn').init({\r\n  index: 5,\r\n  start: '获取验证码',\r\n  during: '秒后重新获取..',\r\n  end: '重新获取'\r\n  })\n\n//# sourceURL=webpack:///./test.js?");

/***/ })

/******/ });