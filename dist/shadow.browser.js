(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Shadow"] = factory();
	else
		root["Shadow"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function Shadow(obj) {}
	;
	exports.default = Shadow;
	
	module.exports = Shadow;
	//# sourceMappingURL=shadow.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3Qvc2hhZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQ3BCO0FBQ0QsQ0FBQztrQkFDYyxNQUFNOztBQUNyQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU07O0FBQUMiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2hhZG93KG9iaikge1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgU2hhZG93O1xubW9kdWxlLmV4cG9ydHMgPSBTaGFkb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFkb3cuanMubWFwIl19

/***/ }
/******/ ])
});
;
//# sourceMappingURL=shadow.browser.js.map