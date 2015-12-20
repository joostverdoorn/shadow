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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _keyboard = __webpack_require__(1);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	var _mouse = __webpack_require__(91);
	
	var _mouse2 = _interopRequireDefault(_mouse);
	
	var _sonic = __webpack_require__(92);
	
	var _sonic2 = _interopRequireDefault(_sonic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Shadow(obj) {
	    return null;
	}
	var Shadow;
	(function (Shadow) {
	    Shadow.test = "test";
	    Shadow.Sonic = _sonic2.default;
	    Shadow.Keyboard = _keyboard2.default;
	    Shadow.Mouse = _mouse2.default;
	})(Shadow || (Shadow = {}));
	;
	exports.default = Shadow;
	
	module.exports = Shadow;
	//# sourceMappingURL=shadow.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3Qvc2hhZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ2pCLFdBQU8sSUFBSSxDQUFDO0NBQ2Y7QUFDRCxJQUFJLE1BQU0sQ0FBQztBQUNYLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDZixVQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNyQixVQUFNLENBQUMsS0FBSyxrQkFBUyxDQUFDO0FBQ3RCLFVBQU0sQ0FBQyxRQUFRLHFCQUFZLENBQUM7QUFDNUIsVUFBTSxDQUFDLEtBQUssa0JBQVMsQ0FBQztDQUN6QixDQUFBLENBQUUsTUFBTSxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUEsQUFBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztrQkFDYyxNQUFNOztBQUNyQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU07O0FBQUMiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9LZXlib2FyZCBmcm9tICcuL2tleWJvYXJkJztcbmltcG9ydCBfTW91c2UgZnJvbSAnLi9tb3VzZSc7XG5pbXBvcnQgX1NvbmljIGZyb20gJ3NvbmljanMvZGlzdC9zb25pYyc7XG5mdW5jdGlvbiBTaGFkb3cob2JqKSB7XG4gICAgcmV0dXJuIG51bGw7XG59XG52YXIgU2hhZG93O1xuKGZ1bmN0aW9uIChTaGFkb3cpIHtcbiAgICBTaGFkb3cudGVzdCA9IFwidGVzdFwiO1xuICAgIFNoYWRvdy5Tb25pYyA9IF9Tb25pYztcbiAgICBTaGFkb3cuS2V5Ym9hcmQgPSBfS2V5Ym9hcmQ7XG4gICAgU2hhZG93Lk1vdXNlID0gX01vdXNlO1xufSkoU2hhZG93IHx8IChTaGFkb3cgPSB7fSkpO1xuO1xuZXhwb3J0IGRlZmF1bHQgU2hhZG93O1xubW9kdWxlLmV4cG9ydHMgPSBTaGFkb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFkb3cuanMubWFwIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Keyboard = undefined;
	
	var _observable = __webpack_require__(2);
	
	var Keyboard = exports.Keyboard = undefined;
	(function (Keyboard) {
	    Keyboard.keydown = _observable.Observable.create(function (subject) {
	        document.body.addEventListener("keydown", subject.onNext);
	    });
	})(Keyboard || (exports.Keyboard = Keyboard = {}));
	exports.default = Keyboard;
	//# sourceMappingURL=keyboard.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3Qva2V5Ym9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ08sSUFBSSxRQUFRLFdBQVIsUUFBUSxZQUFBLENBQUM7QUFDcEIsQ0FBQyxVQUFVLFFBQVEsRUFBRTtBQUNqQixZQUFRLENBQUMsT0FBTyxHQUFHLFlBSGQsVUFBVSxDQUdlLE1BQU0sQ0FBQyxVQUFDLE9BQU8sRUFBSztBQUM5QyxnQkFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdELENBQUMsQ0FBQztDQUNOLENBQUEsQ0FBRSxRQUFRLGFBTEEsUUFBUSxHQUtILFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2tCQUNqQixRQUFRIiwiZmlsZSI6ImtleWJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3NvbmljanMvZGlzdC9vYnNlcnZhYmxlJztcbmV4cG9ydCB2YXIgS2V5Ym9hcmQ7XG4oZnVuY3Rpb24gKEtleWJvYXJkKSB7XG4gICAgS2V5Ym9hcmQua2V5ZG93biA9IE9ic2VydmFibGUuY3JlYXRlKChzdWJqZWN0KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgc3ViamVjdC5vbk5leHQpO1xuICAgIH0pO1xufSkoS2V5Ym9hcmQgfHwgKEtleWJvYXJkID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9a2V5Ym9hcmQuanMubWFwIl19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Subject = exports.Observable = exports.Disposable = undefined;
	
	var _keys = __webpack_require__(3);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _create = __webpack_require__(15);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _regenerator = __webpack_require__(18);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(48);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _key = __webpack_require__(78);
	
	var _key2 = _interopRequireDefault(_key);
	
	var _async_iterator = __webpack_require__(79);
	
	var _async_iterator2 = _interopRequireDefault(_async_iterator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var Disposable = exports.Disposable = undefined;
	(function (Disposable) {
	    function create(disposer) {
	        var done = false;
	        return {
	            dispose: function dispose() {
	                if (done) return;
	                done = true;
	                if (disposer) disposer();
	            }
	        };
	    }
	    Disposable.create = create;
	})(Disposable || (exports.Disposable = Disposable = {}));
	var Observable = exports.Observable = undefined;
	(function (Observable) {
	    function create(fn) {
	        var subject;
	        function subscribe(observer) {
	            if (!subject) {
	                subject = Subject.create();
	                if (fn) fn(subject);
	            }
	            return subject.subscribe(observer);
	        }
	        return { subscribe: subscribe };
	    }
	    Observable.create = create;
	    function pipe(observable, observer) {
	        observable.subscribe(observer);
	        return observer;
	    }
	    Observable.pipe = pipe;
	    function map(observable, mapFn) {
	        return create(function (subject) {
	            observable.subscribe({
	                onNext: function onNext(value) {
	                    return _promise2.default.resolve(mapFn(value)).then(subject.onNext);
	                }
	            });
	        });
	    }
	    Observable.map = map;
	    function filter(observable, filterFn) {
	        return create(function (subject) {
	            observable.subscribe({
	                onNext: function onNext(value) {
	                    return _promise2.default.resolve(filterFn(value)).then(function (result) {
	                        return result ? subject.onNext(value) : undefined;
	                    });
	                }
	            });
	        });
	    }
	    Observable.filter = filter;
	    function scan(observable, scanFn, memo) {
	        return create(function (subject) {
	            observable.subscribe({
	                onNext: function onNext(value) {
	                    return _promise2.default.resolve(scanFn(memo, value)).then(function (value) {
	                        memo = value;return subject.onNext(value);
	                    });
	                }
	            });
	        });
	    }
	    Observable.scan = scan;
	    function forEach(observable, fn) {
	        return observable.subscribe({
	            onNext: fn
	        });
	    }
	    Observable.forEach = forEach;
	    function fromPromise(promise) {
	        return create(function (subject) {
	            promise.then(subject.onNext).then(subject.onComplete);
	        });
	    }
	    Observable.fromPromise = fromPromise;
	    function toPromise(observable) {
	        return new _promise2.default(function (resolve, reject) {
	            observable.subscribe({
	                onNext: resolve,
	                onComplete: resolve,
	                onError: reject
	            });
	        });
	    }
	    Observable.toPromise = toPromise;
	    function fromIterator(iterator) {
	        var subject = Subject.create();
	        _async_iterator2.default.forEach(iterator, subject.onNext);
	        return { subscribe: subject.subscribe };
	    }
	    Observable.fromIterator = fromIterator;
	    function toIterator(observable) {
	        function defer() {
	            var resolve,
	                reject,
	                promise = new _promise2.default(function (res, rej) {
	                resolve = res;
	                reject = rej;
	            });
	            return { resolve: resolve, reject: reject, promise: promise };
	        }
	        var values = [];
	        var deferreds = [];
	        var done = false;
	        var errored = false;
	        var error;
	        observable.subscribe({
	            onNext: function onNext(value) {
	                if (deferreds.length) deferreds.pop().resolve({ done: false, value: value });else values.push(value);
	            },
	            onComplete: function onComplete() {
	                if (deferreds.length) deferreds.pop().resolve({ done: true });
	                done = true;
	            },
	            onError: function onError(reason) {
	                if (deferreds.length) deferreds.pop().reject(reason);
	                errored = true;
	                error = reason;
	            }
	        });
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee() {
	                var deferred;
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!(done && !values.length)) {
	                                    _context.next = 2;
	                                    break;
	                                }
	
	                                return _context.abrupt("return", { done: true });
	
	                            case 2:
	                                if (!(errored && !values.length)) {
	                                    _context.next = 4;
	                                    break;
	                                }
	
	                                throw error;
	
	                            case 4:
	                                if (!values.length) {
	                                    _context.next = 6;
	                                    break;
	                                }
	
	                                return _context.abrupt("return", { done: false, value: values.shift() });
	
	                            case 6:
	                                deferred = defer();
	
	                                deferreds.push(deferred);
	                                return _context.abrupt("return", deferred.promise);
	
	                            case 9:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	        return _async_iterator2.default.create(next);
	    }
	    Observable.toIterator = toIterator;
	})(Observable || (exports.Observable = Observable = {}));
	var Subject = exports.Subject = undefined;
	(function (Subject) {
	    function isSubject(obj) {
	        return typeof obj["onNext"] === "function";
	    }
	    Subject.isSubject = isSubject;
	    function create() {
	        var observers = (0, _create2.default)(null),
	            current = _promise2.default.resolve(),
	            completed = false,
	            result,
	            errored = false,
	            error;
	        function subscribe(observer) {
	            if (completed) {
	                _promise2.default.resolve(function () {
	                    return observer.onComplete(result);
	                });
	                return Disposable.create();
	            }
	            if (errored) {
	                _promise2.default.resolve(function () {
	                    return observer.onError(error);
	                });
	                return Disposable.create();
	            }
	            var observerKey = _key2.default.unique();
	            observers[observerKey] = observer;
	            return Disposable.create(function () {
	                return delete observers[observerKey];
	            });
	        }
	        function onNext(value) {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee2() {
	                return _regenerator2.default.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                return _context2.abrupt("return", current = current.then(function () {
	                                    return _promise2.default.all((0, _keys2.default)(observers).map(function (key) {
	                                        return observers[key].onNext(value);
	                                    })).then(function () {});
	                                }));
	
	                            case 1:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	        function onComplete(res) {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee3() {
	                return _regenerator2.default.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                completed = true;
	                                result = res;
	                                return _context3.abrupt("return", current = current.then(function () {
	                                    return _promise2.default.all((0, _keys2.default)(observers).map(function (key) {
	                                        return observers[key].onComplete ? observers[key].onComplete(res) : undefined;
	                                    })).then(function () {
	                                        observers = null;
	                                    });
	                                }));
	
	                            case 3:
	                            case "end":
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	        function onError(reason) {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee4() {
	                return _regenerator2.default.wrap(function _callee4$(_context4) {
	                    while (1) {
	                        switch (_context4.prev = _context4.next) {
	                            case 0:
	                                errored = true;
	                                error = reason;
	                                return _context4.abrupt("return", current = current.then(function () {
	                                    return _promise2.default.all((0, _keys2.default)(observers).map(function (key) {
	                                        return observers[key].onError ? observers[key].onError(reason) : undefined;
	                                    })).then(function () {
	                                        observers = null;
	                                    });
	                                }));
	
	                            case 3:
	                            case "end":
	                                return _context4.stop();
	                        }
	                    }
	                }, _callee4, this);
	            }));
	        }
	        return { subscribe: subscribe, onNext: onNext, onComplete: onComplete, onError: onError };
	    }
	    Subject.create = create;
	})(Subject || (exports.Subject = Subject = {}));
	//# sourceMappingURL=observable.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3Qvb2JzZXJ2YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFNBQVMsR0FBRyxBQUFDLGFBQVEsVUFBSyxTQUFTLElBQUssVUFBVSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDM0YsV0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDMUMsaUJBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBUyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQUUsbUJBQU8sS0FBSyxZQUFZLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFBRSx1QkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDO1NBQUU7QUFDeEosaUJBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUFFLGdCQUFJO0FBQUUsb0JBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQUUsc0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7QUFDbkYsaUJBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUFFLGdCQUFJO0FBQUUsb0JBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQUUsc0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7QUFDbkYsaUJBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDdkIsZ0JBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxL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QUFRLEdBQUcsQ0FBQyxvQkFBWSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHOytDQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxTQUFTO3FDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQUUsaURBQVMsR0FBRyxJQUFJLENBQUM7cUNBQUUsQ0FBQztpQ0FBQSxDQUFDOzs7Ozs7OzthQUM3TCxFQUFDLENBQUM7U0FDTjtBQUNELGVBQU8sRUFBRSxTQUFTLEVBQVQsU0FBUyxFQUFFLE1BQU0sRUFBTixNQUFNLEVBQUUsVUFBVSxFQUFWLFVBQVUsRUFBRSxPQUFPLEVBQVAsT0FBTyxFQUFFLENBQUM7S0FDckQ7QUFDRCxXQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUMzQixDQUFBLENBQUUsT0FBTyxhQTNDQyxPQUFPLEdBMkNILE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQzs7QUFBQyIsImZpbGUiOiJvYnNlcnZhYmxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUHJvbWlzZSwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwodGhpc0FyZywgX2FyZ3VtZW50cyk7XG4gICAgICAgIGZ1bmN0aW9uIGNhc3QodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSA/IHZhbHVlIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgICAgIGZ1bmN0aW9uIG9uZnVsZmlsbCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gb25yZWplY3QodmFsdWUpIHsgdHJ5IHsgc3RlcChcInRocm93XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHZlcmIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW3ZlcmJdKHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogY2FzdChyZXN1bHQudmFsdWUpLnRoZW4ob25mdWxmaWxsLCBvbnJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcChcIm5leHRcIiwgdm9pZCAwKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgS2V5IGZyb20gJy4va2V5JztcbmltcG9ydCBBc3luY0l0ZXJhdG9yIGZyb20gJy4vYXN5bmNfaXRlcmF0b3InO1xuZXhwb3J0IHZhciBEaXNwb3NhYmxlO1xuKGZ1bmN0aW9uIChEaXNwb3NhYmxlKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKGRpc3Bvc2VyKSB7XG4gICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXNwb3NlKCkge1xuICAgICAgICAgICAgICAgIGlmIChkb25lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3Bvc2VyKVxuICAgICAgICAgICAgICAgICAgICBkaXNwb3NlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBEaXNwb3NhYmxlLmNyZWF0ZSA9IGNyZWF0ZTtcbn0pKERpc3Bvc2FibGUgfHwgKERpc3Bvc2FibGUgPSB7fSkpO1xuZXhwb3J0IHZhciBPYnNlcnZhYmxlO1xuKGZ1bmN0aW9uIChPYnNlcnZhYmxlKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKGZuKSB7XG4gICAgICAgIHZhciBzdWJqZWN0O1xuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghc3ViamVjdCkge1xuICAgICAgICAgICAgICAgIHN1YmplY3QgPSBTdWJqZWN0LmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChmbilcbiAgICAgICAgICAgICAgICAgICAgZm4oc3ViamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3ViamVjdC5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1YnNjcmliZSB9O1xuICAgIH1cbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgICBmdW5jdGlvbiBwaXBlKG9ic2VydmFibGUsIG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlLnBpcGUgPSBwaXBlO1xuICAgIGZ1bmN0aW9uIG1hcChvYnNlcnZhYmxlLCBtYXBGbikge1xuICAgICAgICByZXR1cm4gY3JlYXRlKHN1YmplY3QgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIG9uTmV4dDogdmFsdWUgPT4gUHJvbWlzZS5yZXNvbHZlKG1hcEZuKHZhbHVlKSkudGhlbihzdWJqZWN0Lm9uTmV4dClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5tYXAgPSBtYXA7XG4gICAgZnVuY3Rpb24gZmlsdGVyKG9ic2VydmFibGUsIGZpbHRlckZuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUoc3ViamVjdCA9PiB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgb25OZXh0OiB2YWx1ZSA9PiBQcm9taXNlLnJlc29sdmUoZmlsdGVyRm4odmFsdWUpKS50aGVuKHJlc3VsdCA9PiByZXN1bHQgPyBzdWJqZWN0Lm9uTmV4dCh2YWx1ZSkgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9ic2VydmFibGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIGZ1bmN0aW9uIHNjYW4ob2JzZXJ2YWJsZSwgc2NhbkZuLCBtZW1vKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUoc3ViamVjdCA9PiB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgb25OZXh0OiB2YWx1ZSA9PiBQcm9taXNlLnJlc29sdmUoc2NhbkZuKG1lbW8sIHZhbHVlKSkudGhlbih2YWx1ZSA9PiB7IG1lbW8gPSB2YWx1ZTsgcmV0dXJuIHN1YmplY3Qub25OZXh0KHZhbHVlKTsgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5zY2FuID0gc2NhbjtcbiAgICBmdW5jdGlvbiBmb3JFYWNoKG9ic2VydmFibGUsIGZuKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBvbk5leHQ6IGZuXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlLmZvckVhY2ggPSBmb3JFYWNoO1xuICAgIGZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShzdWJqZWN0ID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihzdWJqZWN0Lm9uTmV4dCkudGhlbihzdWJqZWN0Lm9uQ29tcGxldGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5mcm9tUHJvbWlzZSA9IGZyb21Qcm9taXNlO1xuICAgIGZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgb25OZXh0OiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgb25FcnJvcjogcmVqZWN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9ic2VydmFibGUudG9Qcm9taXNlID0gdG9Qcm9taXNlO1xuICAgIGZ1bmN0aW9uIGZyb21JdGVyYXRvcihpdGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IFN1YmplY3QuY3JlYXRlKCk7XG4gICAgICAgIEFzeW5jSXRlcmF0b3IuZm9yRWFjaChpdGVyYXRvciwgc3ViamVjdC5vbk5leHQpO1xuICAgICAgICByZXR1cm4geyBzdWJzY3JpYmU6IHN1YmplY3Quc3Vic2NyaWJlIH07XG4gICAgfVxuICAgIE9ic2VydmFibGUuZnJvbUl0ZXJhdG9yID0gZnJvbUl0ZXJhdG9yO1xuICAgIGZ1bmN0aW9uIHRvSXRlcmF0b3Iob2JzZXJ2YWJsZSkge1xuICAgICAgICBmdW5jdGlvbiBkZWZlcigpIHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlLCByZWplY3QsIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgZGVmZXJyZWRzID0gW107XG4gICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgb25OZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZmVycmVkcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkcy5wb3AoKS5yZXNvbHZlKHsgZG9uZTogZmFsc2UsIHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZmVycmVkcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkcy5wb3AoKS5yZXNvbHZlKHsgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yKHJlYXNvbikge1xuICAgICAgICAgICAgICAgIGlmIChkZWZlcnJlZHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZHMucG9wKCkucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSByZWFzb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUgJiYgIXZhbHVlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JlZCAmJiAhdmFsdWVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdmFsdWVzLnNoaWZ0KCkgfTtcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBc3luY0l0ZXJhdG9yLmNyZWF0ZShuZXh0KTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS50b0l0ZXJhdG9yID0gdG9JdGVyYXRvcjtcbn0pKE9ic2VydmFibGUgfHwgKE9ic2VydmFibGUgPSB7fSkpO1xuZXhwb3J0IHZhciBTdWJqZWN0O1xuKGZ1bmN0aW9uIChTdWJqZWN0KSB7XG4gICAgZnVuY3Rpb24gaXNTdWJqZWN0KG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9ialtcIm9uTmV4dFwiXSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBTdWJqZWN0LmlzU3ViamVjdCA9IGlzU3ViamVjdDtcbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpLCBjdXJyZW50ID0gUHJvbWlzZS5yZXNvbHZlKCksIGNvbXBsZXRlZCA9IGZhbHNlLCByZXN1bHQsIGVycm9yZWQgPSBmYWxzZSwgZXJyb3I7XG4gICAgICAgIGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgoKSA9PiBvYnNlcnZlci5vbkNvbXBsZXRlKHJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEaXNwb3NhYmxlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycm9yZWQpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKCkgPT4gb2JzZXJ2ZXIub25FcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEaXNwb3NhYmxlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9ic2VydmVyS2V5ID0gS2V5LnVuaXF1ZSgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzW29ic2VydmVyS2V5XSA9IG9ic2VydmVyO1xuICAgICAgICAgICAgcmV0dXJuIERpc3Bvc2FibGUuY3JlYXRlKCgpID0+IGRlbGV0ZSBvYnNlcnZlcnNbb2JzZXJ2ZXJLZXldKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbk5leHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50ID0gY3VycmVudC50aGVuKCgpID0+IFByb21pc2UuYWxsKE9iamVjdC5rZXlzKG9ic2VydmVycykubWFwKGtleSA9PiBvYnNlcnZlcnNba2V5XS5vbk5leHQodmFsdWUpKSkudGhlbigoKSA9PiB7IH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uQ29tcGxldGUocmVzKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudCA9IGN1cnJlbnQudGhlbigoKSA9PiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhvYnNlcnZlcnMpLm1hcChrZXkgPT4gb2JzZXJ2ZXJzW2tleV0ub25Db21wbGV0ZSA/IG9ic2VydmVyc1trZXldLm9uQ29tcGxldGUocmVzKSA6IHVuZGVmaW5lZCkpLnRoZW4oKCkgPT4geyBvYnNlcnZlcnMgPSBudWxsOyB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbkVycm9yKHJlYXNvbikge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSByZWFzb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQgPSBjdXJyZW50LnRoZW4oKCkgPT4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMob2JzZXJ2ZXJzKS5tYXAoa2V5ID0+IG9ic2VydmVyc1trZXldLm9uRXJyb3IgPyBvYnNlcnZlcnNba2V5XS5vbkVycm9yKHJlYXNvbikgOiB1bmRlZmluZWQpKS50aGVuKCgpID0+IHsgb2JzZXJ2ZXJzID0gbnVsbDsgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3Vic2NyaWJlLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IgfTtcbiAgICB9XG4gICAgU3ViamVjdC5jcmVhdGUgPSBjcmVhdGU7XG59KShTdWJqZWN0IHx8IChTdWJqZWN0ID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIl19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(11).Object.keys;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6);
	
	__webpack_require__(8)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(11)
	  , fails   = __webpack_require__(14);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(11)
	  , ctx       = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(13);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(17);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(19);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	module.exports = { "default": module.exports, __esModule: true };
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	"use strict";
	
	var _Symbol = __webpack_require__(21)["default"];
	
	var _Object$create = __webpack_require__(15)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(44)["default"];
	
	var _Promise = __webpack_require__(48)["default"];
	
	!(function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (_Object$setPrototypeOf) {
	      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return _Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return _Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new _Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(20)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(23);
	__webpack_require__(43);
	module.exports = __webpack_require__(11).Symbol;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(17)
	  , global         = __webpack_require__(10)
	  , has            = __webpack_require__(24)
	  , DESCRIPTORS    = __webpack_require__(25)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(26)
	  , $fails         = __webpack_require__(14)
	  , shared         = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(30)
	  , uid            = __webpack_require__(32)
	  , wks            = __webpack_require__(31)
	  , keyOf          = __webpack_require__(33)
	  , $names         = __webpack_require__(37)
	  , enumKeys       = __webpack_require__(38)
	  , isArray        = __webpack_require__(39)
	  , anObject       = __webpack_require__(40)
	  , toIObject      = __webpack_require__(34)
	  , createDesc     = __webpack_require__(28)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(42)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 24 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(17)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(25) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(17).setDesc
	  , has = __webpack_require__(24)
	  , TAG = __webpack_require__(31)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(29)('wks')
	  , uid    = __webpack_require__(32)
	  , Symbol = __webpack_require__(10).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(17)
	  , toIObject = __webpack_require__(34);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(35)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(36);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(34)
	  , getNames  = __webpack_require__(17).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(17);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(36);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 43 */
/***/ function(module, exports) {



/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	module.exports = __webpack_require__(11).Object.setPrototypeOf;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(17).getDesc
	  , isObject = __webpack_require__(41)
	  , anObject = __webpack_require__(40);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(12)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	__webpack_require__(50);
	__webpack_require__(56);
	__webpack_require__(60);
	module.exports = __webpack_require__(11).Promise;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(51)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(53)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(52)
	  , defined   = __webpack_require__(7);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(42)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(26)
	  , hide           = __webpack_require__(27)
	  , has            = __webpack_require__(24)
	  , Iterators      = __webpack_require__(54)
	  , $iterCreate    = __webpack_require__(55)
	  , setToStringTag = __webpack_require__(30)
	  , getProto       = __webpack_require__(17).getProto
	  , ITERATOR       = __webpack_require__(31)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(17)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(30)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(27)(IteratorPrototype, __webpack_require__(31)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(57);
	var Iterators = __webpack_require__(54);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(58)
	  , step             = __webpack_require__(59)
	  , Iterators        = __webpack_require__(54)
	  , toIObject        = __webpack_require__(34);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(53)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(17)
	  , LIBRARY    = __webpack_require__(42)
	  , global     = __webpack_require__(10)
	  , ctx        = __webpack_require__(12)
	  , classof    = __webpack_require__(61)
	  , $export    = __webpack_require__(9)
	  , isObject   = __webpack_require__(41)
	  , anObject   = __webpack_require__(40)
	  , aFunction  = __webpack_require__(13)
	  , strictNew  = __webpack_require__(62)
	  , forOf      = __webpack_require__(63)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(68)
	  , SPECIES    = __webpack_require__(31)('species')
	  , speciesConstructor = __webpack_require__(69)
	  , asap       = __webpack_require__(70)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(25)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(75)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(30)(P, PROMISE);
	__webpack_require__(76)(PROMISE);
	Wrapper = __webpack_require__(11)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(77)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(36)
	  , TAG = __webpack_require__(31)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(12)
	  , call        = __webpack_require__(64)
	  , isArrayIter = __webpack_require__(65)
	  , anObject    = __webpack_require__(40)
	  , toLength    = __webpack_require__(66)
	  , getIterFn   = __webpack_require__(67);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(40);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(54)
	  , ITERATOR   = __webpack_require__(31)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(52)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(61)
	  , ITERATOR  = __webpack_require__(31)('iterator')
	  , Iterators = __webpack_require__(54);
	module.exports = __webpack_require__(11).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(40)
	  , aFunction = __webpack_require__(13)
	  , SPECIES   = __webpack_require__(31)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , macrotask = __webpack_require__(71).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(36)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(12)
	  , invoke             = __webpack_require__(72)
	  , html               = __webpack_require__(73)
	  , cel                = __webpack_require__(74)
	  , global             = __webpack_require__(10)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(36)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(26);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(11)
	  , $           = __webpack_require__(17)
	  , DESCRIPTORS = __webpack_require__(25)
	  , SPECIES     = __webpack_require__(31)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(31)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Key;
	(function (Key) {
	    var uniqueKey = 0;
	    Key.SENTINEL = null;
	    function unique() {
	        return "s_" + uniqueKey++;
	    }
	    Key.unique = unique;
	})(Key || (Key = {}));
	exports.default = Key;
	//# sourceMappingURL=key.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3Qva2V5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSSxHQUFHLENBQUM7QUFDUixDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ1osUUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE9BQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGFBQVMsTUFBTSxHQUFHO0FBQ2QsZUFBTyxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUM7S0FDN0I7QUFDRCxPQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUN2QixDQUFBLENBQUUsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUEsQUFBQyxDQUFDLENBQUM7a0JBQ1AsR0FBRyIsImZpbGUiOiJrZXkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3RlZmZhbi9Qcm9qZWN0cy9zaGFkb3ciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgS2V5O1xuKGZ1bmN0aW9uIChLZXkpIHtcbiAgICB2YXIgdW5pcXVlS2V5ID0gMDtcbiAgICBLZXkuU0VOVElORUwgPSBudWxsO1xuICAgIGZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgICAgICAgcmV0dXJuIFwic19cIiArIHVuaXF1ZUtleSsrO1xuICAgIH1cbiAgICBLZXkudW5pcXVlID0gdW5pcXVlO1xufSkoS2V5IHx8IChLZXkgPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQgS2V5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9a2V5LmpzLm1hcCJdfQ==

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsyncIterator = undefined;
	
	var _slicedToArray2 = __webpack_require__(80);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _keys = __webpack_require__(3);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _stringify = __webpack_require__(87);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _create = __webpack_require__(15);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _regenerator = __webpack_require__(18);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(48);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _exceptions = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var AsyncIterator = exports.AsyncIterator = undefined;
	(function (AsyncIterator) {
	    AsyncIterator.done = { done: true };
	    AsyncIterator.Empty = {
	        next: function next() {
	            return _promise2.default.resolve(AsyncIterator.done);
	        }
	    };
	    function every(iterator, predicate) {
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee() {
	            var result;
	            return _regenerator2.default.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return iterator.next();
	
	                        case 2:
	                            _context.t0 = result = _context.sent;
	
	                            if (!_context.t0) {
	                                _context.next = 5;
	                                break;
	                            }
	
	                            _context.t0 = !result.done;
	
	                        case 5:
	                            if (!_context.t0) {
	                                _context.next = 12;
	                                break;
	                            }
	
	                            _context.next = 8;
	                            return predicate(result.value);
	
	                        case 8:
	                            if (_context.sent) {
	                                _context.next = 10;
	                                break;
	                            }
	
	                            return _context.abrupt("return", false);
	
	                        case 10:
	                            _context.next = 0;
	                            break;
	
	                        case 12:
	                            return _context.abrupt("return", true);
	
	                        case 13:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    }
	    AsyncIterator.every = every;
	    function some(iterator, predicate) {
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee3() {
	            var _this = this;
	
	            return _regenerator2.default.wrap(function _callee3$(_context3) {
	                while (1) {
	                    switch (_context3.prev = _context3.next) {
	                        case 0:
	                            _context3.next = 2;
	                            return every(iterator, function (value) {
	                                return __awaiter(_this, void 0, _promise2.default, _regenerator2.default.mark(function _callee2() {
	                                    return _regenerator2.default.wrap(function _callee2$(_context2) {
	                                        while (1) {
	                                            switch (_context2.prev = _context2.next) {
	                                                case 0:
	                                                    _context2.next = 2;
	                                                    return predicate(value);
	
	                                                case 2:
	                                                    return _context2.abrupt("return", !_context2.sent);
	
	                                                case 3:
	                                                case "end":
	                                                    return _context2.stop();
	                                            }
	                                        }
	                                    }, _callee2, this);
	                                }));
	                            });
	
	                        case 2:
	                            return _context3.abrupt("return", !_context3.sent);
	
	                        case 3:
	                        case "end":
	                            return _context3.stop();
	                    }
	                }
	            }, _callee3, this);
	        }));
	    }
	    AsyncIterator.some = some;
	    function forEach(iterator, fn) {
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee5() {
	            var _this2 = this;
	
	            return _regenerator2.default.wrap(function _callee5$(_context5) {
	                while (1) {
	                    switch (_context5.prev = _context5.next) {
	                        case 0:
	                            _context5.next = 2;
	                            return every(iterator, function (value) {
	                                return __awaiter(_this2, void 0, _promise2.default, _regenerator2.default.mark(function _callee4() {
	                                    return _regenerator2.default.wrap(function _callee4$(_context4) {
	                                        while (1) {
	                                            switch (_context4.prev = _context4.next) {
	                                                case 0:
	                                                    _context4.next = 2;
	                                                    return fn(value);
	
	                                                case 2:
	                                                    return _context4.abrupt("return", true);
	
	                                                case 3:
	                                                case "end":
	                                                    return _context4.stop();
	                                            }
	                                        }
	                                    }, _callee4, this);
	                                }));
	                            });
	
	                        case 2:
	                        case "end":
	                            return _context5.stop();
	                    }
	                }
	            }, _callee5, this);
	        }));
	    }
	    AsyncIterator.forEach = forEach;
	    function reduce(iterator, fn, memo) {
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee7() {
	            var _this3 = this;
	
	            return _regenerator2.default.wrap(function _callee7$(_context7) {
	                while (1) {
	                    switch (_context7.prev = _context7.next) {
	                        case 0:
	                            _context7.next = 2;
	                            return forEach(iterator, function (value) {
	                                return __awaiter(_this3, void 0, _promise2.default, _regenerator2.default.mark(function _callee6() {
	                                    return _regenerator2.default.wrap(function _callee6$(_context6) {
	                                        while (1) {
	                                            switch (_context6.prev = _context6.next) {
	                                                case 0:
	                                                    _context6.next = 2;
	                                                    return fn(memo, value);
	
	                                                case 2:
	                                                    memo = _context6.sent;
	
	                                                case 3:
	                                                case "end":
	                                                    return _context6.stop();
	                                            }
	                                        }
	                                    }, _callee6, this);
	                                }));
	                            });
	
	                        case 2:
	                            return _context7.abrupt("return", memo);
	
	                        case 3:
	                        case "end":
	                            return _context7.stop();
	                    }
	                }
	            }, _callee7, this);
	        }));
	    }
	    AsyncIterator.reduce = reduce;
	    function find(iterator, predicate) {
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee9() {
	            var _this4 = this;
	
	            var result;
	            return _regenerator2.default.wrap(function _callee9$(_context9) {
	                while (1) {
	                    switch (_context9.prev = _context9.next) {
	                        case 0:
	                            _context9.next = 2;
	                            return some(iterator, function (value) {
	                                return __awaiter(_this4, void 0, _promise2.default, _regenerator2.default.mark(function _callee8() {
	                                    return _regenerator2.default.wrap(function _callee8$(_context8) {
	                                        while (1) {
	                                            switch (_context8.prev = _context8.next) {
	                                                case 0:
	                                                    _context8.next = 2;
	                                                    return predicate(value);
	
	                                                case 2:
	                                                    if (_context8.sent) {
	                                                        _context8.next = 6;
	                                                        break;
	                                                    }
	
	                                                    _context8.t0 = false;
	                                                    _context8.next = 7;
	                                                    break;
	
	                                                case 6:
	                                                    _context8.t0 = (result = value, true);
	
	                                                case 7:
	                                                    return _context8.abrupt("return", _context8.t0);
	
	                                                case 8:
	                                                case "end":
	                                                    return _context8.stop();
	                                            }
	                                        }
	                                    }, _callee8, this);
	                                }));
	                            });
	
	                        case 2:
	                            if (!_context9.sent) {
	                                _context9.next = 6;
	                                break;
	                            }
	
	                            return _context9.abrupt("return", result);
	
	                        case 6:
	                            throw new _exceptions.NotFound();
	
	                        case 7:
	                        case "end":
	                            return _context9.stop();
	                    }
	                }
	            }, _callee9, this);
	        }));
	    }
	    AsyncIterator.find = find;
	    function indexOf(iterator, value) {
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee10() {
	            var index;
	            return _regenerator2.default.wrap(function _callee10$(_context10) {
	                while (1) {
	                    switch (_context10.prev = _context10.next) {
	                        case 0:
	                            index = -1;
	                            _context10.next = 3;
	                            return some(iterator, function (v) {
	                                return index++, value == v;
	                            });
	
	                        case 3:
	                            if (!_context10.sent) {
	                                _context10.next = 7;
	                                break;
	                            }
	
	                            return _context10.abrupt("return", index);
	
	                        case 7:
	                            throw new _exceptions.NotFound();
	
	                        case 8:
	                        case "end":
	                            return _context10.stop();
	                    }
	                }
	            }, _callee10, this);
	        }));
	    }
	    AsyncIterator.indexOf = indexOf;
	    function at(iterator, index) {
	        return find(iterator, function () {
	            return 0 === index--;
	        });
	    }
	    AsyncIterator.at = at;
	    function size(iterator) {
	        var count = -1;
	        return forEach(iterator, function () {
	            count++;
	        }).then(function () {
	            return count;
	        });
	    }
	    AsyncIterator.size = size;
	    function contains(iterator, value) {
	        return some(iterator, function (v) {
	            return v === value;
	        });
	    }
	    AsyncIterator.contains = contains;
	    function is(iterator, other) {
	        var equals = arguments.length <= 2 || arguments[2] === undefined ? function (a, b) {
	            return a === b;
	        } : arguments[2];
	
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee12() {
	            var _this5 = this;
	
	            return _regenerator2.default.wrap(function _callee12$(_context12) {
	                while (1) {
	                    switch (_context12.prev = _context12.next) {
	                        case 0:
	                            _context12.next = 2;
	                            return every(iterator, function (value) {
	                                return __awaiter(_this5, void 0, _promise2.default, _regenerator2.default.mark(function _callee11() {
	                                    var result;
	                                    return _regenerator2.default.wrap(function _callee11$(_context11) {
	                                        while (1) {
	                                            switch (_context11.prev = _context11.next) {
	                                                case 0:
	                                                    _context11.next = 2;
	                                                    return other.next();
	
	                                                case 2:
	                                                    result = _context11.sent;
	                                                    return _context11.abrupt("return", !result.done && equals(value, result.value));
	
	                                                case 4:
	                                                case "end":
	                                                    return _context11.stop();
	                                            }
	                                        }
	                                    }, _callee11, this);
	                                }));
	                            });
	
	                        case 2:
	                            _context12.t0 = _context12.sent;
	
	                            if (!_context12.t0) {
	                                _context12.next = 7;
	                                break;
	                            }
	
	                            _context12.next = 6;
	                            return other.next();
	
	                        case 6:
	                            _context12.t0 = _context12.sent.done;
	
	                        case 7:
	                            return _context12.abrupt("return", _context12.t0);
	
	                        case 8:
	                        case "end":
	                            return _context12.stop();
	                    }
	                }
	            }, _callee12, this);
	        }));
	    }
	    AsyncIterator.is = is;
	    function map(iterator, mapFn) {
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee13() {
	                var result;
	                return _regenerator2.default.wrap(function _callee13$(_context13) {
	                    while (1) {
	                        switch (_context13.prev = _context13.next) {
	                            case 0:
	                                _context13.next = 2;
	                                return iterator.next();
	
	                            case 2:
	                                result = _context13.sent;
	
	                                if (!result.done) {
	                                    _context13.next = 7;
	                                    break;
	                                }
	
	                                _context13.t0 = AsyncIterator.done;
	                                _context13.next = 11;
	                                break;
	
	                            case 7:
	                                _context13.next = 9;
	                                return mapFn(result.value);
	
	                            case 9:
	                                _context13.t1 = _context13.sent;
	                                _context13.t0 = {
	                                    done: false,
	                                    value: _context13.t1
	                                };
	
	                            case 11:
	                                return _context13.abrupt("return", _context13.t0);
	
	                            case 12:
	                            case "end":
	                                return _context13.stop();
	                        }
	                    }
	                }, _callee13, this);
	            }));
	        }
	        return create(next);
	    }
	    AsyncIterator.map = map;
	    function filter(iterator, filterFn) {
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee14() {
	                var result;
	                return _regenerator2.default.wrap(function _callee14$(_context14) {
	                    while (1) {
	                        switch (_context14.prev = _context14.next) {
	                            case 0:
	                                _context14.next = 2;
	                                return iterator.next();
	
	                            case 2:
	                                result = _context14.sent;
	
	                                if (!result.done) {
	                                    _context14.next = 5;
	                                    break;
	                                }
	
	                                return _context14.abrupt("return", AsyncIterator.done);
	
	                            case 5:
	                                _context14.next = 7;
	                                return filterFn(result.value);
	
	                            case 7:
	                                if (!_context14.sent) {
	                                    _context14.next = 9;
	                                    break;
	                                }
	
	                                return _context14.abrupt("return", result);
	
	                            case 9:
	                                return _context14.abrupt("return", next());
	
	                            case 10:
	                            case "end":
	                                return _context14.stop();
	                        }
	                    }
	                }, _callee14, this);
	            }));
	        }
	        return create(next);
	    }
	    AsyncIterator.filter = filter;
	    function scan(iterator, scanFn, memo) {
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee15() {
	                var result;
	                return _regenerator2.default.wrap(function _callee15$(_context15) {
	                    while (1) {
	                        switch (_context15.prev = _context15.next) {
	                            case 0:
	                                _context15.next = 2;
	                                return iterator.next();
	
	                            case 2:
	                                result = _context15.sent;
	
	                                if (!result.done) {
	                                    _context15.next = 5;
	                                    break;
	                                }
	
	                                return _context15.abrupt("return", AsyncIterator.done);
	
	                            case 5:
	                                _context15.next = 7;
	                                return scanFn(memo, result.value);
	
	                            case 7:
	                                memo = _context15.sent;
	                                return _context15.abrupt("return", { done: false, value: memo });
	
	                            case 9:
	                            case "end":
	                                return _context15.stop();
	                        }
	                    }
	                }, _callee15, this);
	            }));
	        }
	        return create(next);
	    }
	    AsyncIterator.scan = scan;
	    function zip(iterator, other) {
	        var zipFn = arguments.length <= 2 || arguments[2] === undefined ? function (t, u) {
	            return [t, u];
	        } : arguments[2];
	
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee16() {
	                var result, otherResult;
	                return _regenerator2.default.wrap(function _callee16$(_context16) {
	                    while (1) {
	                        switch (_context16.prev = _context16.next) {
	                            case 0:
	                                _context16.next = 2;
	                                return iterator.next();
	
	                            case 2:
	                                result = _context16.sent;
	
	                                if (!result.done) {
	                                    _context16.next = 5;
	                                    break;
	                                }
	
	                                return _context16.abrupt("return", AsyncIterator.done);
	
	                            case 5:
	                                _context16.next = 7;
	                                return other.next();
	
	                            case 7:
	                                otherResult = _context16.sent;
	
	                                if (!otherResult.done) {
	                                    _context16.next = 10;
	                                    break;
	                                }
	
	                                return _context16.abrupt("return", AsyncIterator.done);
	
	                            case 10:
	                                _context16.next = 12;
	                                return zipFn(result.value, otherResult.value);
	
	                            case 12:
	                                _context16.t0 = _context16.sent;
	                                return _context16.abrupt("return", {
	                                    done: false,
	                                    value: _context16.t0
	                                });
	
	                            case 14:
	                            case "end":
	                                return _context16.stop();
	                        }
	                    }
	                }, _callee16, this);
	            }));
	        }
	        return create(next);
	    }
	    AsyncIterator.zip = zip;
	    function take(iterator, count) {
	        var i = 0;
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee17() {
	                return _regenerator2.default.wrap(function _callee17$(_context17) {
	                    while (1) {
	                        switch (_context17.prev = _context17.next) {
	                            case 0:
	                                return _context17.abrupt("return", ++i > count ? AsyncIterator.done : iterator.next());
	
	                            case 1:
	                            case "end":
	                                return _context17.stop();
	                        }
	                    }
	                }, _callee17, this);
	            }));
	        }
	        return create(next);
	    }
	    AsyncIterator.take = take;
	    function skip(iterator, count) {
	        var i = 0;
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee18() {
	                return _regenerator2.default.wrap(function _callee18$(_context18) {
	                    while (1) {
	                        switch (_context18.prev = _context18.next) {
	                            case 0:
	                                if (!(i < count)) {
	                                    _context18.next = 3;
	                                    break;
	                                }
	
	                                _context18.next = 3;
	                                return some(iterator, function () {
	                                    return ++i >= count;
	                                });
	
	                            case 3:
	                                return _context18.abrupt("return", iterator.next());
	
	                            case 4:
	                            case "end":
	                                return _context18.stop();
	                        }
	                    }
	                }, _callee18, this);
	            }));
	        }
	        return create(next);
	    }
	    AsyncIterator.skip = skip;
	    function unique(iterator, uniqueFn) {
	        var _this6 = this;
	
	        var cache = (0, _create2.default)(null);
	        return AsyncIterator.filter(iterator, function (value) {
	            return __awaiter(_this6, void 0, _promise2.default, _regenerator2.default.mark(function _callee19() {
	                var u;
	                return _regenerator2.default.wrap(function _callee19$(_context19) {
	                    while (1) {
	                        switch (_context19.prev = _context19.next) {
	                            case 0:
	                                _context19.next = 2;
	                                return uniqueFn(value);
	
	                            case 2:
	                                _context19.t0 = _context19.sent;
	                                u = (0, _stringify2.default)(_context19.t0);
	                                return _context19.abrupt("return", !cache[u] || (cache[u] = true));
	
	                            case 5:
	                            case "end":
	                                return _context19.stop();
	                        }
	                    }
	                }, _callee19, this);
	            }));
	        });
	    }
	    AsyncIterator.unique = unique;
	    function concat() {
	        for (var _len = arguments.length, iterators = Array(_len), _key = 0; _key < _len; _key++) {
	            iterators[_key] = arguments[_key];
	        }
	
	        return iterators.reduce(function (memo, iterator) {
	            var iterated = false,
	                queue = _promise2.default.resolve(null);
	            function next() {
	                return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee20() {
	                    var result;
	                    return _regenerator2.default.wrap(function _callee20$(_context20) {
	                        while (1) {
	                            switch (_context20.prev = _context20.next) {
	                                case 0:
	                                    if (!iterated) {
	                                        _context20.next = 2;
	                                        break;
	                                    }
	
	                                    return _context20.abrupt("return", iterator.next());
	
	                                case 2:
	                                    _context20.next = 4;
	                                    return memo.next();
	
	                                case 4:
	                                    result = _context20.sent;
	
	                                    if (result.done) {
	                                        _context20.next = 7;
	                                        break;
	                                    }
	
	                                    return _context20.abrupt("return", result);
	
	                                case 7:
	                                    iterated = true;
	                                    return _context20.abrupt("return", iterator.next());
	
	                                case 9:
	                                case "end":
	                                    return _context20.stop();
	                            }
	                        }
	                    }, _callee20, this);
	                }));
	            }
	            return create(next);
	        }, AsyncIterator.Empty);
	    }
	    AsyncIterator.concat = concat;
	    function fromArray(array) {
	        var current = -1,
	            queue = _promise2.default.resolve(null);
	        function next() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee21() {
	                return _regenerator2.default.wrap(function _callee21$(_context21) {
	                    while (1) {
	                        switch (_context21.prev = _context21.next) {
	                            case 0:
	                                return _context21.abrupt("return", ++current >= array.length ? AsyncIterator.done : { done: false, value: array[current] });
	
	                            case 1:
	                            case "end":
	                                return _context21.stop();
	                        }
	                    }
	                }, _callee21, this);
	            }));
	        }
	        return create(next);
	    }
	    AsyncIterator.fromArray = fromArray;
	    function fromObject(object) {
	        return fromArray((0, _keys2.default)(object).map(function (key) {
	            return [key, object[key]];
	        }));
	    }
	    AsyncIterator.fromObject = fromObject;
	    function toArray(iterator) {
	        return reduce(iterator, function (memo, value) {
	            return memo.push(value), memo;
	        }, []);
	    }
	    AsyncIterator.toArray = toArray;
	    function toObject(iterator) {
	        return reduce(iterator, function (memo, _ref) {
	            var _ref2 = (0, _slicedToArray3.default)(_ref, 2);
	
	            var key = _ref2[0];
	            var value = _ref2[1];
	            return memo[key] = value, memo;
	        }, (0, _create2.default)(null));
	    }
	    AsyncIterator.toObject = toObject;
	    function create(_next) {
	        var queue = _promise2.default.resolve(null);
	        return {
	            next: function next() {
	                return queue = queue.then(_next);
	            }
	        };
	    }
	    AsyncIterator.create = create;
	})(AsyncIterator || (exports.AsyncIterator = AsyncIterator = {}));
	exports.default = AsyncIterator;
	//# sourceMappingURL=async_iterator.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvYXN5bmNfaXRlcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFNBQVMsR0FBRyxBQUFDLGFBQVEsVUFBSyxTQUFTLElBQUssVUFBVSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDM0YsV0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDMUMsaUJBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBUyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQUUsbUJBQU8sS0FBSyxZQUFZLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFBRSx1QkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDO1NBQUU7QUFDeEosaUJBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUFFLGdCQUFJO0FBQUUsb0JBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQUUsc0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7QUFDbkYsaUJBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUFFLGdCQUFJO0FBQUUsb0JBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQUUsc0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7QUFDbkYsaUJBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDdkIsZ0JBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMs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TyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzthQUNuQztTQUNKLENBQUM7S0FDTDtBQUNELGlCQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUNqQyxDQUFBLENBQUUsYUFBYSxhQXJOTCxhQUFhLEdBcU5ILGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2tCQUMzQixhQUFhIiwiZmlsZSI6ImFzeW5jX2l0ZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUHJvbWlzZSwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwodGhpc0FyZywgX2FyZ3VtZW50cyk7XG4gICAgICAgIGZ1bmN0aW9uIGNhc3QodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSA/IHZhbHVlIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgICAgIGZ1bmN0aW9uIG9uZnVsZmlsbCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gb25yZWplY3QodmFsdWUpIHsgdHJ5IHsgc3RlcChcInRocm93XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHZlcmIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW3ZlcmJdKHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogY2FzdChyZXN1bHQudmFsdWUpLnRoZW4ob25mdWxmaWxsLCBvbnJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcChcIm5leHRcIiwgdm9pZCAwKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBOb3RGb3VuZCB9IGZyb20gJy4vZXhjZXB0aW9ucyc7XG5leHBvcnQgdmFyIEFzeW5jSXRlcmF0b3I7XG4oZnVuY3Rpb24gKEFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0l0ZXJhdG9yLmRvbmUgPSB7IGRvbmU6IHRydWUgfTtcbiAgICBBc3luY0l0ZXJhdG9yLkVtcHR5ID0ge1xuICAgICAgICBuZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoQXN5bmNJdGVyYXRvci5kb25lKVxuICAgIH07XG4gICAgZnVuY3Rpb24gZXZlcnkoaXRlcmF0b3IsIHByZWRpY2F0ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICB3aGlsZSAoKHJlc3VsdCA9IHlpZWxkIGl0ZXJhdG9yLm5leHQoKSkgJiYgIXJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoeWllbGQgcHJlZGljYXRlKHJlc3VsdC52YWx1ZSkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IuZXZlcnkgPSBldmVyeTtcbiAgICBmdW5jdGlvbiBzb21lKGl0ZXJhdG9yLCBwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISh5aWVsZCBldmVyeShpdGVyYXRvciwgKHZhbHVlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkgeyByZXR1cm4gISh5aWVsZCBwcmVkaWNhdGUodmFsdWUpKTsgfSkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3Iuc29tZSA9IHNvbWU7XG4gICAgZnVuY3Rpb24gZm9yRWFjaChpdGVyYXRvciwgZm4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCBldmVyeShpdGVyYXRvciwgKHZhbHVlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkgeyB5aWVsZCBmbih2YWx1ZSk7IHJldHVybiB0cnVlOyB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBBc3luY0l0ZXJhdG9yLmZvckVhY2ggPSBmb3JFYWNoO1xuICAgIGZ1bmN0aW9uIHJlZHVjZShpdGVyYXRvciwgZm4sIG1lbW8pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCBmb3JFYWNoKGl0ZXJhdG9yLCAodmFsdWUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7IG1lbW8gPSB5aWVsZCBmbihtZW1vLCB2YWx1ZSk7IH0pKTtcbiAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgQXN5bmNJdGVyYXRvci5yZWR1Y2UgPSByZWR1Y2U7XG4gICAgZnVuY3Rpb24gZmluZChpdGVyYXRvciwgcHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIGlmICh5aWVsZCBzb21lKGl0ZXJhdG9yLCAodmFsdWUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiAhKHlpZWxkIHByZWRpY2F0ZSh2YWx1ZSkpID8gZmFsc2UgOiAocmVzdWx0ID0gdmFsdWUsIHRydWUpOyB9KSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgQXN5bmNJdGVyYXRvci5maW5kID0gZmluZDtcbiAgICBmdW5jdGlvbiBpbmRleE9mKGl0ZXJhdG9yLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgaWYgKHlpZWxkIHNvbWUoaXRlcmF0b3IsIHYgPT4gKGluZGV4KyssIHZhbHVlID09IHYpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RGb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IuaW5kZXhPZiA9IGluZGV4T2Y7XG4gICAgZnVuY3Rpb24gYXQoaXRlcmF0b3IsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBmaW5kKGl0ZXJhdG9yLCAoKSA9PiAwID09PSBpbmRleC0tKTtcbiAgICB9XG4gICAgQXN5bmNJdGVyYXRvci5hdCA9IGF0O1xuICAgIGZ1bmN0aW9uIHNpemUoaXRlcmF0b3IpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gLTE7XG4gICAgICAgIHJldHVybiBmb3JFYWNoKGl0ZXJhdG9yLCAoKSA9PiB7IGNvdW50Kys7IH0pLnRoZW4oKCkgPT4gY291bnQpO1xuICAgIH1cbiAgICBBc3luY0l0ZXJhdG9yLnNpemUgPSBzaXplO1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKGl0ZXJhdG9yLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc29tZShpdGVyYXRvciwgdiA9PiB2ID09PSB2YWx1ZSk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiBpcyhpdGVyYXRvciwgb3RoZXIsIGVxdWFscyA9IChhLCBiKSA9PiBhID09PSBiKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuICh5aWVsZCBldmVyeShpdGVyYXRvciwgKHZhbHVlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB5aWVsZCBvdGhlci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFyZXN1bHQuZG9uZSAmJiBlcXVhbHModmFsdWUsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICB9KSkpICYmICh5aWVsZCBvdGhlci5uZXh0KCkpLmRvbmU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBBc3luY0l0ZXJhdG9yLmlzID0gaXM7XG4gICAgZnVuY3Rpb24gbWFwKGl0ZXJhdG9yLCBtYXBGbikge1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyBBc3luY0l0ZXJhdG9yLmRvbmUgOiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogeWllbGQgbWFwRm4ocmVzdWx0LnZhbHVlKSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZShuZXh0KTtcbiAgICB9XG4gICAgQXN5bmNJdGVyYXRvci5tYXAgPSBtYXA7XG4gICAgZnVuY3Rpb24gZmlsdGVyKGl0ZXJhdG9yLCBmaWx0ZXJGbikge1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBBc3luY0l0ZXJhdG9yLmRvbmU7XG4gICAgICAgICAgICAgICAgaWYgKHlpZWxkIGZpbHRlckZuKHJlc3VsdC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmVhdGUobmV4dCk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IuZmlsdGVyID0gZmlsdGVyO1xuICAgIGZ1bmN0aW9uIHNjYW4oaXRlcmF0b3IsIHNjYW5GbiwgbWVtbykge1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBBc3luY0l0ZXJhdG9yLmRvbmU7XG4gICAgICAgICAgICAgICAgbWVtbyA9IHlpZWxkIHNjYW5GbihtZW1vLCByZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogbWVtbyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZShuZXh0KTtcbiAgICB9XG4gICAgQXN5bmNJdGVyYXRvci5zY2FuID0gc2NhbjtcbiAgICBmdW5jdGlvbiB6aXAoaXRlcmF0b3IsIG90aGVyLCB6aXBGbiA9ICh0LCB1KSA9PiBbdCwgdV0pIHtcbiAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB5aWVsZCBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci5kb25lO1xuICAgICAgICAgICAgICAgIHZhciBvdGhlclJlc3VsdCA9IHlpZWxkIG90aGVyLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJSZXN1bHQuZG9uZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFzeW5jSXRlcmF0b3IuZG9uZTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IHlpZWxkIHppcEZuKHJlc3VsdC52YWx1ZSwgb3RoZXJSZXN1bHQudmFsdWUpIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlKG5leHQpO1xuICAgIH1cbiAgICBBc3luY0l0ZXJhdG9yLnppcCA9IHppcDtcbiAgICBmdW5jdGlvbiB0YWtlKGl0ZXJhdG9yLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytpID4gY291bnQgPyBBc3luY0l0ZXJhdG9yLmRvbmUgOiBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlKG5leHQpO1xuICAgIH1cbiAgICBBc3luY0l0ZXJhdG9yLnRha2UgPSB0YWtlO1xuICAgIGZ1bmN0aW9uIHNraXAoaXRlcmF0b3IsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgY291bnQpXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNvbWUoaXRlcmF0b3IsICgpID0+ICsraSA+PSBjb3VudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmVhdGUobmV4dCk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3Iuc2tpcCA9IHNraXA7XG4gICAgZnVuY3Rpb24gdW5pcXVlKGl0ZXJhdG9yLCB1bmlxdWVGbikge1xuICAgICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci5maWx0ZXIoaXRlcmF0b3IsICh2YWx1ZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciB1ID0gSlNPTi5zdHJpbmdpZnkoeWllbGQgdW5pcXVlRm4odmFsdWUpKTtcbiAgICAgICAgICAgIHJldHVybiAoIWNhY2hlW3VdKSB8fCAoY2FjaGVbdV0gPSB0cnVlKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBBc3luY0l0ZXJhdG9yLnVuaXF1ZSA9IHVuaXF1ZTtcbiAgICBmdW5jdGlvbiBjb25jYXQoLi4uaXRlcmF0b3JzKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvcnMucmVkdWNlKChtZW1vLCBpdGVyYXRvcikgPT4ge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdGVkID0gZmFsc2UsIHF1ZXVlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIG1lbW8ubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5kb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZShuZXh0KTtcbiAgICAgICAgfSwgQXN5bmNJdGVyYXRvci5FbXB0eSk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IuY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGZyb21BcnJheShhcnJheSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IC0xLCBxdWV1ZSA9IFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiArK2N1cnJlbnQgPj0gYXJyYXkubGVuZ3RoID8gQXN5bmNJdGVyYXRvci5kb25lIDogeyBkb25lOiBmYWxzZSwgdmFsdWU6IGFycmF5W2N1cnJlbnRdIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlKG5leHQpO1xuICAgIH1cbiAgICBBc3luY0l0ZXJhdG9yLmZyb21BcnJheSA9IGZyb21BcnJheTtcbiAgICBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgICAgICByZXR1cm4gZnJvbUFycmF5KE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGtleSA9PiBba2V5LCBvYmplY3Rba2V5XV0pKTtcbiAgICB9XG4gICAgQXN5bmNJdGVyYXRvci5mcm9tT2JqZWN0ID0gZnJvbU9iamVjdDtcbiAgICBmdW5jdGlvbiB0b0FycmF5KGl0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiByZWR1Y2UoaXRlcmF0b3IsIChtZW1vLCB2YWx1ZSkgPT4gKG1lbW8ucHVzaCh2YWx1ZSksIG1lbW8pLCBbXSk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IudG9BcnJheSA9IHRvQXJyYXk7XG4gICAgZnVuY3Rpb24gdG9PYmplY3QoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHJlZHVjZShpdGVyYXRvciwgKG1lbW8sIFtrZXksIHZhbHVlXSkgPT4gKG1lbW9ba2V5XSA9IHZhbHVlLCBtZW1vKSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IudG9PYmplY3QgPSB0b09iamVjdDtcbiAgICBmdW5jdGlvbiBjcmVhdGUobmV4dCkge1xuICAgICAgICB2YXIgcXVldWUgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWV1ZSA9IHF1ZXVlLnRoZW4obmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEFzeW5jSXRlcmF0b3IuY3JlYXRlID0gY3JlYXRlO1xufSkoQXN5bmNJdGVyYXRvciB8fCAoQXN5bmNJdGVyYXRvciA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBBc3luY0l0ZXJhdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmNfaXRlcmF0b3IuanMubWFwIl19

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _isIterable2 = __webpack_require__(81);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(84);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	__webpack_require__(50);
	module.exports = __webpack_require__(83);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(61)
	  , ITERATOR  = __webpack_require__(31)('iterator')
	  , Iterators = __webpack_require__(54);
	module.exports = __webpack_require__(11).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	__webpack_require__(50);
	module.exports = __webpack_require__(86);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(40)
	  , get      = __webpack_require__(67);
	module.exports = __webpack_require__(11).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(11);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotFound = undefined;
	
	var _classCallCheck2 = __webpack_require__(90);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NotFound = exports.NotFound = function NotFound() {
	  (0, _classCallCheck3.default)(this, NotFound);
	};
	
	;
	//# sourceMappingURL=exceptions.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvZXhjZXB0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQWEsUUFBUSxXQUFSLFFBQVEsWUFBUixRQUFRO3NDQUFSLFFBQVE7OztBQUVyQjs7QUFBQyIsImZpbGUiOiJleGNlcHRpb25zLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vdEZvdW5kIHtcbn1cbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4Y2VwdGlvbnMuanMubWFwIl19

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Mouse = undefined;
	
	var _observable = __webpack_require__(2);
	
	var Mouse = exports.Mouse = undefined;
	(function (Mouse) {
	    Mouse.move = _observable.Observable.create(function (subject) {
	        document.body.addEventListener("mousemove", subject.onNext);
	    });
	})(Mouse || (exports.Mouse = Mouse = {}));
	exports.default = Mouse;
	//# sourceMappingURL=mouse.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbW91c2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ08sSUFBSSxLQUFLLFdBQUwsS0FBSyxZQUFBLENBQUM7QUFDakIsQ0FBQyxVQUFVLEtBQUssRUFBRTtBQUNkLFNBQUssQ0FBQyxJQUFJLEdBQUcsWUFIUixVQUFVLENBR1MsTUFBTSxDQUFDLFVBQUMsT0FBTyxFQUFLO0FBQ3hDLGdCQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0QsQ0FBQyxDQUFDO0NBQ04sQ0FBQSxDQUFFLEtBQUssYUFMRyxLQUFLLEdBS0gsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7a0JBQ1gsS0FBSyIsImZpbGUiOiJtb3VzZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGVmZmFuL1Byb2plY3RzL3NoYWRvdyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdzb25pY2pzL2Rpc3Qvb2JzZXJ2YWJsZSc7XG5leHBvcnQgdmFyIE1vdXNlO1xuKGZ1bmN0aW9uIChNb3VzZSkge1xuICAgIE1vdXNlLm1vdmUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3ViamVjdCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgc3ViamVjdC5vbk5leHQpO1xuICAgIH0pO1xufSkoTW91c2UgfHwgKE1vdXNlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IE1vdXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW91c2UuanMubWFwIl19

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _state = __webpack_require__(93);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _async_iterator = __webpack_require__(79);
	
	var _async_iterator2 = _interopRequireDefault(_async_iterator);
	
	var _store = __webpack_require__(98);
	
	var _tree = __webpack_require__(97);
	
	var _cache = __webpack_require__(96);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _observable = __webpack_require__(2);
	
	var _promise_utils = __webpack_require__(100);
	
	var _promise_utils2 = _interopRequireDefault(_promise_utils);
	
	var _lens = __webpack_require__(101);
	
	var _lens2 = _interopRequireDefault(_lens);
	
	var _patch = __webpack_require__(99);
	
	var _patch2 = _interopRequireDefault(_patch);
	
	var _exceptions = __webpack_require__(89);
	
	var _range = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	
	function Sonic(obj) {
	    if (obj instanceof Array) return _store.Store.create(_state2.default.fromArray(obj), _observable.Subject.create());
	    if (obj instanceof Object) return _store.Store.create(_state2.default.fromObject(obj), _observable.Subject.create());
	}
	var Sonic;
	(function (Sonic) {
	    Sonic.State = _state2.default;
	    Sonic.AsyncIterator = _async_iterator2.default;
	    Sonic.Store = _store.Store;
	    Sonic.Tree = _tree.Tree;
	    Sonic.Path = _tree.Path;
	    Sonic.Subject = _observable.Subject;
	    Sonic.Observable = _observable.Observable;
	    Sonic.Cache = _cache2.default;
	    Sonic.PromiseUtils = _promise_utils2.default;
	    Sonic.Lens = _lens2.default;
	    Sonic.Patch = _patch2.default;
	    Sonic.Range = _range.Range;
	    Sonic.Position = _range.Position;
	    Sonic.NotFound = _exceptions.NotFound;
	})(Sonic || (Sonic = {}));
	;
	exports.default = Sonic;
	
	module.exports = Sonic;
	//# sourceMappingURL=sonic.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3Qvc29uaWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxTQUFTLEdBQUcsQUFBQyxhQUFRLFVBQUssU0FBUyxJQUFLLFVBQVUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQzNGLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzFDLGlCQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUFFLG1CQUFPLEtBQUssWUFBWSxPQUFPLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQUUsdUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUFFO0FBQ3hKLGlCQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3ZCLGdCQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsa0JBQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdEY7QUFDRCxZQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDeEIsQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7QUFZRixTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUU7QUFDaEIsUUFBSSxHQUFHLFlBQVksS0FBSyxFQUNwQixPQUFPLE9BWE4sS0FBSyxDQVdRLE1BQU0sQ0FBQyxnQkFBTyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsWUFSM0MsT0FBTyxDQVE2QyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLFFBQUksR0FBRyxZQUFZLE1BQU0sRUFDckIsT0FBTyxPQWJOLEtBQUssQ0FhUSxNQUFNLENBQUMsZ0JBQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBVjVDLE9BQU8sQ0FVOEMsTUFBTSxFQUFFLENBQUMsQ0FBQztDQUN2RTtBQUNELElBQUksS0FBSyxDQUFDO0FBQ1YsQ0FBQyxVQUFVLEtBQUssRUFBRTtBQUNkLFNBQUssQ0FBQyxLQUFLLGtCQUFTLENBQUM7QUFDckIsU0FBSyxDQUFDLGFBQWEsMkJBQWlCLENBQUM7QUFDckMsU0FBSyxDQUFDLEtBQUssVUFuQk4sS0FBSyxBQW1CVSxDQUFDO0FBQ3JCLFNBQUssQ0FBQyxJQUFJLFNBbkJMLElBQUksQUFtQlMsQ0FBQztBQUNuQixTQUFLLENBQUMsSUFBSSxTQXBCVSxJQUFJLEFBb0JOLENBQUM7QUFDbkIsU0FBSyxDQUFDLE9BQU8sZUFuQlIsT0FBTyxBQW1CWSxDQUFDO0FBQ3pCLFNBQUssQ0FBQyxVQUFVLGVBcEJVLFVBQVUsQUFvQk4sQ0FBQztBQUMvQixTQUFLLENBQUMsS0FBSyxrQkFBUyxDQUFDO0FBQ3JCLFNBQUssQ0FBQyxZQUFZLDBCQUFnQixDQUFDO0FBQ25DLFNBQUssQ0FBQyxJQUFJLGlCQUFRLENBQUM7QUFDbkIsU0FBSyxDQUFDLEtBQUssa0JBQVMsQ0FBQztBQUNyQixTQUFLLENBQUMsS0FBSyxVQXBCTixLQUFLLEFBb0JVLENBQUM7QUFDckIsU0FBSyxDQUFDLFFBQVEsVUFyQlEsUUFBUSxBQXFCSixDQUFDO0FBQzNCLFNBQUssQ0FBQyxRQUFRLGVBdkJULFFBQVEsQUF1QmEsQ0FBQztDQUM5QixDQUFBLENBQUUsS0FBSyxLQUFLLEtBQUssR0FBRyxFQUFFLENBQUEsQUFBQyxDQUFDLENBQUM7QUFDMUIsQ0FBQztrQkFDYyxLQUFLOztBQUNwQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUs7O0FBQUMiLCJmaWxlIjoic29uaWMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3RlZmZhbi9Qcm9qZWN0cy9zaGFkb3ciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQcm9taXNlLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBnZW5lcmF0b3IgPSBnZW5lcmF0b3IuY2FsbCh0aGlzQXJnLCBfYXJndW1lbnRzKTtcbiAgICAgICAgZnVuY3Rpb24gY2FzdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlID8gdmFsdWUgOiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICAgICAgZnVuY3Rpb24gb25mdWxmaWxsKHZhbHVlKSB7IHRyeSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBvbnJlamVjdCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwidGhyb3dcIiwgdmFsdWUpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAodmVyYiwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBnZW5lcmF0b3JbdmVyYl0odmFsdWUpO1xuICAgICAgICAgICAgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBjYXN0KHJlc3VsdC52YWx1ZSkudGhlbihvbmZ1bGZpbGwsIG9ucmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBzdGVwKFwibmV4dFwiLCB2b2lkIDApO1xuICAgIH0pO1xufTtcbmltcG9ydCBfU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgX0FzeW5jSXRlcmF0b3IgZnJvbSAnLi9hc3luY19pdGVyYXRvcic7XG5pbXBvcnQgeyBTdG9yZSBhcyBfU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IFRyZWUgYXMgX1RyZWUsIFBhdGggYXMgX1BhdGggfSBmcm9tICcuL3RyZWUnO1xuaW1wb3J0IF9DYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IFN1YmplY3QgYXMgX1N1YmplY3QsIE9ic2VydmFibGUgYXMgX09ic2VydmFibGUgfSBmcm9tICcuL29ic2VydmFibGUnO1xuaW1wb3J0IF9Qcm9taXNlVXRpbHMgZnJvbSAnLi9wcm9taXNlX3V0aWxzJztcbmltcG9ydCBfTGVucyBmcm9tICcuL2xlbnMnO1xuaW1wb3J0IF9QYXRjaCBmcm9tICcuL3BhdGNoJztcbmltcG9ydCB7IE5vdEZvdW5kIGFzIF9Ob3RGb3VuZCB9IGZyb20gJy4vZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBSYW5nZSBhcyBfUmFuZ2UsIFBvc2l0aW9uIGFzIF9Qb3NpdGlvbiB9IGZyb20gJy4vcmFuZ2UnO1xuZnVuY3Rpb24gU29uaWMob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICByZXR1cm4gX1N0b3JlLmNyZWF0ZShfU3RhdGUuZnJvbUFycmF5KG9iaiksIF9TdWJqZWN0LmNyZWF0ZSgpKTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgT2JqZWN0KVxuICAgICAgICByZXR1cm4gX1N0b3JlLmNyZWF0ZShfU3RhdGUuZnJvbU9iamVjdChvYmopLCBfU3ViamVjdC5jcmVhdGUoKSk7XG59XG52YXIgU29uaWM7XG4oZnVuY3Rpb24gKFNvbmljKSB7XG4gICAgU29uaWMuU3RhdGUgPSBfU3RhdGU7XG4gICAgU29uaWMuQXN5bmNJdGVyYXRvciA9IF9Bc3luY0l0ZXJhdG9yO1xuICAgIFNvbmljLlN0b3JlID0gX1N0b3JlO1xuICAgIFNvbmljLlRyZWUgPSBfVHJlZTtcbiAgICBTb25pYy5QYXRoID0gX1BhdGg7XG4gICAgU29uaWMuU3ViamVjdCA9IF9TdWJqZWN0O1xuICAgIFNvbmljLk9ic2VydmFibGUgPSBfT2JzZXJ2YWJsZTtcbiAgICBTb25pYy5DYWNoZSA9IF9DYWNoZTtcbiAgICBTb25pYy5Qcm9taXNlVXRpbHMgPSBfUHJvbWlzZVV0aWxzO1xuICAgIFNvbmljLkxlbnMgPSBfTGVucztcbiAgICBTb25pYy5QYXRjaCA9IF9QYXRjaDtcbiAgICBTb25pYy5SYW5nZSA9IF9SYW5nZTtcbiAgICBTb25pYy5Qb3NpdGlvbiA9IF9Qb3NpdGlvbjtcbiAgICBTb25pYy5Ob3RGb3VuZCA9IF9Ob3RGb3VuZDtcbn0pKFNvbmljIHx8IChTb25pYyA9IHt9KSk7XG47XG5leHBvcnQgZGVmYXVsdCBTb25pYztcbm1vZHVsZS5leHBvcnRzID0gU29uaWM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb25pYy5qcy5tYXAiXX0=

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.State = undefined;
	
	var _stringify = __webpack_require__(87);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _regenerator = __webpack_require__(18);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray2 = __webpack_require__(80);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _create = __webpack_require__(15);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _promise = __webpack_require__(48);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _key = __webpack_require__(78);
	
	var _key2 = _interopRequireDefault(_key);
	
	var _entry = __webpack_require__(94);
	
	var _entry2 = _interopRequireDefault(_entry);
	
	var _range2 = __webpack_require__(95);
	
	var _cache = __webpack_require__(96);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _async_iterator = __webpack_require__(79);
	
	var _async_iterator2 = _interopRequireDefault(_async_iterator);
	
	var _tree = __webpack_require__(97);
	
	var _exceptions = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var State = exports.State = undefined;
	(function (State) {
	    State.Empty = {
	        get: function get(key) {
	            return _promise2.default.reject(new _exceptions.NotFound());
	        },
	        prev: function prev() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	            return key === _key2.default.SENTINEL ? _promise2.default.resolve(_key2.default.SENTINEL) : _promise2.default.reject(new _exceptions.NotFound());
	        },
	        next: function next() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	            return key === _key2.default.SENTINEL ? _promise2.default.resolve(_key2.default.SENTINEL) : _promise2.default.reject(new _exceptions.NotFound());
	        }
	    };
	    function extend(parent, _ref) {
	        var get = _ref.get;
	        var prev = _ref.prev;
	        var next = _ref.next;
	
	        var state = (0, _create2.default)(parent);
	        if (get) state.get = get;
	        if (prev) state.prev = prev;
	        if (next) state.next = next;
	        return state;
	    }
	    State.extend = extend;
	    function first(state) {
	        var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	
	        var _ref3 = (0, _slicedToArray3.default)(_ref2, 2);
	
	        var from = _ref3[0];
	        var to = _ref3[1];
	
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee() {
	            return _regenerator2.default.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            return _context.abrupt("return", _range2.Position.isPrevPosition(from) ? from.prev : state.next(from.next));
	
	                        case 1:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    }
	    State.first = first;
	    function last(state) {
	        var _ref4 = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	
	        var _ref5 = (0, _slicedToArray3.default)(_ref4, 2);
	
	        var from = _ref5[0];
	        var to = _ref5[1];
	
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee2() {
	            return _regenerator2.default.wrap(function _callee2$(_context2) {
	                while (1) {
	                    switch (_context2.prev = _context2.next) {
	                        case 0:
	                            return _context2.abrupt("return", _range2.Position.isNextPosition(to) ? to.next : state.prev(to.prev));
	
	                        case 1:
	                        case "end":
	                            return _context2.stop();
	                    }
	                }
	            }, _callee2, this);
	        }));
	    }
	    State.last = last;
	    function has(state, key) {
	        return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee3() {
	            return _regenerator2.default.wrap(function _callee3$(_context3) {
	                while (1) {
	                    switch (_context3.prev = _context3.next) {
	                        case 0:
	                            _context3.prev = 0;
	                            _context3.next = 3;
	                            return state.get(key);
	
	                        case 3:
	                            return _context3.abrupt("return", true);
	
	                        case 6:
	                            _context3.prev = 6;
	                            _context3.t0 = _context3["catch"](0);
	
	                            if (!(_context3.t0 instanceof _exceptions.NotFound)) {
	                                _context3.next = 10;
	                                break;
	                            }
	
	                            return _context3.abrupt("return", false);
	
	                        case 10:
	                            throw _context3.t0;
	
	                        case 11:
	                        case "end":
	                            return _context3.stop();
	                    }
	                }
	            }, _callee3, this, [[0, 6]]);
	        }));
	    }
	    State.has = has;
	    function is(state, other) {
	        var iterator = entries(state),
	            otherIterator = entries(other);
	        return _async_iterator2.default.is(iterator, otherIterator, _entry2.default.is);
	    }
	    State.is = is;
	    function contains(state, value) {
	        return _async_iterator2.default.some(entries(state), function (entry) {
	            return entry[1] === value;
	        });
	    }
	    State.contains = contains;
	    function empty(state) {
	        return state.next().then(function (next) {
	            return next === _key2.default.SENTINEL;
	        });
	    }
	    State.empty = empty;
	    function any(state) {
	        return state.next().then(function (next) {
	            return next !== _key2.default.SENTINEL;
	        });
	    }
	    State.any = any;
	    function size(state) {
	        return _async_iterator2.default.size(keys(state));
	    }
	    State.size = size;
	    function slice(parent) {
	        var range = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	
	        return fromEntries(entries(parent, range));
	    }
	    State.slice = slice;
	    function splice(parent, range, child) {
	        var deleted = slice(parent, range),
	            filtered = filter(parent, function (value, key) {
	            return deleted.get(key).then(function () {
	                return false;
	            }, function () {
	                return true;
	            });
	        });
	        if (child == null) return filtered;
	        var bridgedChild,
	            bridgedParent,
	            from = range[0],
	            to = range[1];
	        bridgedChild = extend(child, {
	            prev: function prev(key) {
	                return child.prev(key).then(function (prev) {
	                    if (prev !== _key2.default.SENTINEL) return prev;
	                    return _range2.Position.isNextPosition(from) ? from.next : parent.prev(from.prev);
	                });
	            },
	            next: function next(key) {
	                return child.next(key).then(function (next) {
	                    if (next !== _key2.default.SENTINEL) return next;
	                    return _range2.Position.isPrevPosition(to) ? to.prev : parent.next(to.next);
	                });
	            }
	        });
	        bridgedParent = extend(filtered, {
	            prev: function prev(key) {
	                return parent.prev(key).then(function (prev) {
	                    if (_range2.Position.isNextPosition(to) && prev === to.next) return bridgedChild.prev(_key2.default.SENTINEL);
	                    return has(deleted, prev).then(function (res) {
	                        if (res) throw new _exceptions.NotFound();
	                        return prev;
	                    });
	                });
	            },
	            next: function next(key) {
	                return parent.next(key).then(function (next) {
	                    if (_range2.Position.isPrevPosition(from) && next === from.prev) return bridgedChild.next(_key2.default.SENTINEL);
	                    return has(deleted, next).then(function (res) {
	                        if (res) throw new _exceptions.NotFound();
	                        return next;
	                    });
	                });
	            }
	        });
	        function get(key) {
	            return bridgedChild.get(key).catch(function (reason) {
	                if (!(reason instanceof _exceptions.NotFound)) throw reason;
	                return bridgedParent.get(key);
	            });
	        }
	        function prev() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	
	            if (_range2.Position.isPrevPosition(to) && key === to.prev) return bridgedChild.prev(_key2.default.SENTINEL);
	            return has(bridgedChild, key).then(function (res) {
	                return res ? bridgedChild.prev(key) : bridgedParent.prev(key);
	            });
	        }
	        function next() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	
	            if (_range2.Position.isNextPosition(from) && key === from.next) return bridgedChild.next(_key2.default.SENTINEL);
	            return has(bridgedChild, key).then(function (res) {
	                return res ? bridgedChild.next(key) : bridgedParent.next(key);
	            });
	        }
	        return { get: get, prev: prev, next: next };
	    }
	    State.splice = splice;
	    function reverse(parent) {
	        return extend(parent, {
	            prev: parent.next,
	            next: parent.prev
	        });
	    }
	    State.reverse = reverse;
	    function map(parent, mapFn) {
	        function get(key) {
	            return parent.get(key).then(function (value) {
	                return mapFn(value, key);
	            });
	        }
	        return extend(parent, { get: get });
	    }
	    State.map = map;
	    function filter(parent, filterFn) {
	        var cache = (0, _create2.default)(null);
	        function have(key) {
	            var label = (0, _stringify2.default)(key);
	            return label in cache ? cache[label] : cache[label] = parent.get(key).then(function (value) {
	                return filterFn(value, key);
	            });
	        }
	        function find(state, from) {
	            return _async_iterator2.default.filter(keys(state, [{ next: from }, { prev: null }]), have).next().then(function (result) {
	                return result.done ? _key2.default.SENTINEL : result.value;
	            });
	        }
	        function get(key) {
	            return have(key).then(function (res) {
	                if (!res) throw new _exceptions.NotFound();
	                return parent.get(key);
	            });
	        }
	        function prev() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	
	            if (key === _key2.default.SENTINEL) return find(reverse(parent), key);
	            return have(key).then(function (res) {
	                if (!res) throw new _exceptions.NotFound();
	            }).then(function () {
	                return find(reverse(parent), key);
	            });
	        }
	        function next() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	
	            if (key === _key2.default.SENTINEL) return find(parent, key);
	            return have(key).then(function (res) {
	                if (!res) throw new _exceptions.NotFound();
	            }).then(function () {
	                return find(parent, key);
	            });
	        }
	        return extend(parent, { get: get, prev: prev, next: next });
	    }
	    State.filter = filter;
	    function scan(parent, scanFn, memo) {
	        return fromEntries(_async_iterator2.default.scan(entries(parent), function (memoEntry, entry) {
	            return _promise2.default.resolve(scanFn(memoEntry[1], entry[1], entry[0])).then(function (result) {
	                return [entry[0], result];
	            });
	        }, [_key2.default.SENTINEL, memo]));
	    }
	    State.scan = scan;
	    function pick(parent, picked) {
	        return filter(parent, function (value, key) {
	            return has(picked, key);
	        });
	    }
	    State.pick = pick;
	    function omit(parent, omitted) {
	        var _this = this;
	
	        return filter(parent, function (value, key) {
	            return __awaiter(_this, void 0, _promise2.default, _regenerator2.default.mark(function _callee4() {
	                return _regenerator2.default.wrap(function _callee4$(_context4) {
	                    while (1) {
	                        switch (_context4.prev = _context4.next) {
	                            case 0:
	                                _context4.next = 2;
	                                return has(omitted, key);
	
	                            case 2:
	                                return _context4.abrupt("return", !_context4.sent);
	
	                            case 3:
	                            case "end":
	                                return _context4.stop();
	                        }
	                    }
	                }, _callee4, this);
	            }));
	        });
	    }
	    State.omit = omit;
	    function zip(parent, other) {
	        return fromEntries(_async_iterator2.default.zip(_async_iterator2.default.zip(keys(parent), keys(other)), _async_iterator2.default.zip(values(parent), values(other))));
	    }
	    State.zip = zip;
	    function zoom(parent, key) {
	        var have;
	        function get(k) {
	            if (k === key) return parent.get(key);
	            return _promise2.default.reject(new _exceptions.NotFound());
	        }
	        function next() {
	            var k = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	
	            if (k !== key && k !== _key2.default.SENTINEL) return _promise2.default.reject(new _exceptions.NotFound());
	            if (k === key) return _promise2.default.resolve(_key2.default.SENTINEL);
	            if (have !== undefined) return _promise2.default.resolve(have ? key : _key2.default.SENTINEL);
	            return has(parent, key).then(function (res) {
	                return (have = res) ? key : _key2.default.SENTINEL;
	            });
	        }
	        return { get: get, prev: next, next: next };
	    }
	    State.zoom = zoom;
	    function flatten(parent) {
	        return extend(parent, {
	            get: function get(key) {
	                return _tree.Tree.get(parent, key);
	            },
	            prev: function prev(key) {
	                return _tree.Tree.prev(parent, key);
	            },
	            next: function next(key) {
	                return _tree.Tree.next(parent, key);
	            }
	        });
	    }
	    State.flatten = flatten;
	    function flatMap(parent, mapFn) {
	        return State.flatten(State.map(parent, mapFn));
	    }
	    State.flatMap = flatMap;
	    function groupBy(parent, groupFn) {
	        var states = {};
	        var it = entries(parent);
	        var groupKeyed = _async_iterator2.default.map(it, function (_ref6) {
	            var _ref7 = (0, _slicedToArray3.default)(_ref6, 2);
	
	            var key = _ref7[0];
	            var value = _ref7[1];
	            return _promise2.default.resolve(groupFn(value, key)).then(function (groupKey) {
	                return [groupKey, value];
	            });
	        });
	        var filtered = _async_iterator2.default.filter(groupKeyed, function (_ref8) {
	            var _ref9 = (0, _slicedToArray3.default)(_ref8, 2);
	
	            var groupKey = _ref9[0];
	            var value = _ref9[1];
	            return !((0, _stringify2.default)(groupKey) in states);
	        });
	        var mapped = _async_iterator2.default.map(filtered, function (_ref10) {
	            var _ref11 = (0, _slicedToArray3.default)(_ref10, 2);
	
	            var groupKey = _ref11[0];
	            var value = _ref11[1];
	
	            var state = filter(parent, function (value, key) {
	                return _promise2.default.resolve(groupFn(value, key)).then(function (gk) {
	                    return gk === groupKey;
	                });
	            });
	            return [groupKey, states[(0, _stringify2.default)(groupKey)] = state];
	        });
	        return fromEntries(mapped);
	    }
	    State.groupBy = groupBy;
	    function unique(parent, uniqueFn) {
	        var _this2 = this;
	
	        return fromEntries(_async_iterator2.default.unique(entries(parent), function (_ref12) {
	            var _ref13 = (0, _slicedToArray3.default)(_ref12, 2);
	
	            var key = _ref13[0];
	            var value = _ref13[1];
	            return __awaiter(_this2, void 0, _promise2.default, _regenerator2.default.mark(function _callee5() {
	                return _regenerator2.default.wrap(function _callee5$(_context5) {
	                    while (1) {
	                        switch (_context5.prev = _context5.next) {
	                            case 0:
	                                return _context5.abrupt("return", uniqueFn(value, key));
	
	                            case 1:
	                            case "end":
	                                return _context5.stop();
	                        }
	                    }
	                }, _callee5, this);
	            }));
	        }));
	    }
	    State.unique = unique;
	    function union(state, other, uniqueFn) {
	        var _this3 = this;
	
	        return fromEntries(_async_iterator2.default.unique(_async_iterator2.default.concat(entries(state), entries(other)), function (_ref14) {
	            var _ref15 = (0, _slicedToArray3.default)(_ref14, 2);
	
	            var key = _ref15[0];
	            var value = _ref15[1];
	            return __awaiter(_this3, void 0, _promise2.default, _regenerator2.default.mark(function _callee6() {
	                return _regenerator2.default.wrap(function _callee6$(_context6) {
	                    while (1) {
	                        switch (_context6.prev = _context6.next) {
	                            case 0:
	                                return _context6.abrupt("return", uniqueFn(value, key));
	
	                            case 1:
	                            case "end":
	                                return _context6.stop();
	                        }
	                    }
	                }, _callee6, this);
	            }));
	        }));
	    }
	    State.union = union;
	    function keyBy(parent, keyFn, reverseKeyFn) {
	        if (!reverseKeyFn) return fromEntries(_async_iterator2.default.map(entries(parent), function (entry) {
	            return _promise2.default.resolve(keyFn(entry[1], entry[0])).then(function (key) {
	                return [key, entry[1]];
	            });
	        }));
	        return {
	            get: function get(key) {
	                return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee7() {
	                    return _regenerator2.default.wrap(function _callee7$(_context7) {
	                        while (1) {
	                            switch (_context7.prev = _context7.next) {
	                                case 0:
	                                    _context7.t0 = parent;
	                                    _context7.next = 3;
	                                    return reverseKeyFn(key);
	
	                                case 3:
	                                    _context7.t1 = _context7.sent;
	                                    return _context7.abrupt("return", _context7.t0.get.call(_context7.t0, _context7.t1));
	
	                                case 5:
	                                case "end":
	                                    return _context7.stop();
	                            }
	                        }
	                    }, _callee7, this);
	                }));
	            },
	            prev: function prev(key) {
	                return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee8() {
	                    var prev;
	                    return _regenerator2.default.wrap(function _callee8$(_context8) {
	                        while (1) {
	                            switch (_context8.prev = _context8.next) {
	                                case 0:
	                                    _context8.t0 = parent;
	                                    _context8.next = 3;
	                                    return reverseKeyFn(key);
	
	                                case 3:
	                                    _context8.t1 = _context8.sent;
	                                    _context8.next = 6;
	                                    return _context8.t0.prev.call(_context8.t0, _context8.t1);
	
	                                case 6:
	                                    prev = _context8.sent;
	                                    _context8.next = 9;
	                                    return parent.get(prev);
	
	                                case 9:
	                                    _context8.t2 = _context8.sent;
	                                    _context8.t3 = prev;
	                                    return _context8.abrupt("return", keyFn(_context8.t2, _context8.t3));
	
	                                case 12:
	                                case "end":
	                                    return _context8.stop();
	                            }
	                        }
	                    }, _callee8, this);
	                }));
	            },
	            next: function next(key) {
	                return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee9() {
	                    var next;
	                    return _regenerator2.default.wrap(function _callee9$(_context9) {
	                        while (1) {
	                            switch (_context9.prev = _context9.next) {
	                                case 0:
	                                    _context9.t0 = parent;
	                                    _context9.next = 3;
	                                    return reverseKeyFn(key);
	
	                                case 3:
	                                    _context9.t1 = _context9.sent;
	                                    _context9.next = 6;
	                                    return _context9.t0.next.call(_context9.t0, _context9.t1);
	
	                                case 6:
	                                    next = _context9.sent;
	                                    _context9.next = 9;
	                                    return parent.get(next);
	
	                                case 9:
	                                    _context9.t2 = _context9.sent;
	                                    _context9.t3 = next;
	                                    return _context9.abrupt("return", keyFn(_context9.t2, _context9.t3));
	
	                                case 12:
	                                case "end":
	                                    return _context9.stop();
	                            }
	                        }
	                    }, _callee9, this);
	                }));
	            }
	        };
	    }
	    State.keyBy = keyBy;
	    function take(parent, count) {
	        return fromEntries(_async_iterator2.default.take(entries(parent), count));
	    }
	    State.take = take;
	    function skip(parent, count) {
	        return fromEntries(_async_iterator2.default.skip(entries(parent), count));
	    }
	    State.skip = skip;
	    function cache(parent) {
	        return _cache2.default.apply(parent, _cache2.default.create());
	    }
	    State.cache = cache;
	    function unit(value) {
	        var key = arguments.length <= 1 || arguments[1] === undefined ? _key2.default.unique() : arguments[1];
	
	        return {
	            get: function get(k) {
	                return k === key ? _promise2.default.resolve(value) : _promise2.default.reject(new _exceptions.NotFound());
	            },
	            prev: function prev() {
	                var k = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	                return _promise2.default.resolve(k === _key2.default.SENTINEL ? key : _key2.default.SENTINEL);
	            },
	            next: function next() {
	                var k = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	                return _promise2.default.resolve(k === _key2.default.SENTINEL ? key : _key2.default.SENTINEL);
	            }
	        };
	    }
	    State.unit = unit;
	    function entries(state) {
	        var range = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	        var current = _key2.default.SENTINEL;var done = false;
	        var _range = (0, _slicedToArray3.default)(range, 2);
	
	        var from = _range[0];
	        var to = _range[1];
	
	        function get(key) {
	            if (key === _key2.default.SENTINEL) return done = true, _promise2.default.resolve(_async_iterator2.default.done);
	            return state.get(key).then(function (value) {
	                return current = key, { done: false, value: [key, value] };
	            });
	        }
	        function iterate(key) {
	            return state.next(key).then(function (next) {
	                if (_range2.Position.isPrevPosition(to) && to.prev === next) return get(_key2.default.SENTINEL);
	                return get(next);
	            });
	        }
	        function next() {
	            if (_range2.Position.isPrevPosition(from) && _range2.Position.isPrevPosition(to) && from.prev === to.prev) return get(_key2.default.SENTINEL);
	            if (_range2.Position.isNextPosition(from) && _range2.Position.isNextPosition(to) && from.next === to.next) return get(_key2.default.SENTINEL);
	            if (current === _key2.default.SENTINEL) return _range2.Position.isPrevPosition(from) ? get(from.prev) : iterate(from.next);
	            if (_range2.Position.isNextPosition(to) && to.next === current) return get(_key2.default.SENTINEL);
	            return iterate(current);
	        }
	        return _async_iterator2.default.create(next);
	    }
	    State.entries = entries;
	    function keys(state) {
	        var range = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	
	        return _async_iterator2.default.map(entries(state, range), _entry2.default.key);
	    }
	    State.keys = keys;
	    function values(state) {
	        var range = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	
	        return _async_iterator2.default.map(entries(state, range), _entry2.default.value);
	    }
	    State.values = values;
	    function fromEntries(iterator) {
	        var _this4 = this;
	
	        var cache = _cache2.default.create(),
	            exhausted = false,
	            currentKey = _key2.default.SENTINEL,
	            queue = _promise2.default.resolve(null);
	        var cachingIterator = _async_iterator2.default.create(function () {
	            return __awaiter(_this4, void 0, _promise2.default, _regenerator2.default.mark(function _callee10() {
	                var result, _result$value, key, value;
	
	                return _regenerator2.default.wrap(function _callee10$(_context10) {
	                    while (1) {
	                        switch (_context10.prev = _context10.next) {
	                            case 0:
	                                _context10.next = 2;
	                                return iterator.next();
	
	                            case 2:
	                                result = _context10.sent;
	
	                                if (!result.done) {
	                                    _context10.next = 8;
	                                    break;
	                                }
	
	                                exhausted = true;
	                                cache.prev(_key2.default.SENTINEL, currentKey);
	                                cache.next(currentKey, _key2.default.SENTINEL);
	                                return _context10.abrupt("return", _async_iterator2.default.done);
	
	                            case 8:
	                                _result$value = (0, _slicedToArray3.default)(result.value, 2);
	                                key = _result$value[0];
	                                value = _result$value[1];
	
	                                cache.prev(key, currentKey);
	                                cache.next(currentKey, key);
	                                cache.get(key, value);
	                                currentKey = key;
	                                return _context10.abrupt("return", { done: false, value: [key, value] });
	
	                            case 16:
	                            case "end":
	                                return _context10.stop();
	                        }
	                    }
	                }, _callee10, this);
	            }));
	        });
	        function get(key) {
	            if (exhausted) return _promise2.default.reject(new _exceptions.NotFound());
	            return _async_iterator2.default.find(cachingIterator, function (entry) {
	                return entry[0] === key;
	            }).then(_entry2.default.value);
	        }
	        function prev() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee11() {
	                return _regenerator2.default.wrap(function _callee11$(_context11) {
	                    while (1) {
	                        switch (_context11.prev = _context11.next) {
	                            case 0:
	                                if (!exhausted) {
	                                    _context11.next = 2;
	                                    break;
	                                }
	
	                                return _context11.abrupt("return", _promise2.default.reject(new _exceptions.NotFound()));
	
	                            case 2:
	                                _context11.next = 4;
	                                return _async_iterator2.default.some(cachingIterator, function (entry) {
	                                    return entry[0] === key;
	                                });
	
	                            case 4:
	                                return _context11.abrupt("return", cache.prev(key));
	
	                            case 5:
	                            case "end":
	                                return _context11.stop();
	                        }
	                    }
	                }, _callee11, this);
	            }));
	        }
	        function next() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? _key2.default.SENTINEL : arguments[0];
	
	            if (exhausted) return _promise2.default.reject(new _exceptions.NotFound());
	            if (key === currentKey) return cachingIterator.next().then(function (result) {
	                return result.done ? _key2.default.SENTINEL : result.value[0];
	            });
	            return _async_iterator2.default.find(cachingIterator, function (entry) {
	                return entry[0] === key;
	            }).then(function () {
	                return cachingIterator.next();
	            }).then(function (result) {
	                return result.done ? _key2.default.SENTINEL : result.value[0];
	            });
	        }
	        return _cache2.default.apply({ get: get, prev: prev, next: next }, cache);
	    }
	    State.fromEntries = fromEntries;
	    function fromKeys(iterator) {
	        return fromEntries(_async_iterator2.default.map(iterator, function (key) {
	            return [key, null];
	        }));
	    }
	    State.fromKeys = fromKeys;
	    function fromValues(iterator) {
	        return fromEntries(_async_iterator2.default.scan(iterator, function (prev, value) {
	            return [prev[0] + 1, value];
	        }, [-1, null]));
	    }
	    State.fromValues = fromValues;
	    function fromArray(values) {
	        return fromValues(_async_iterator2.default.fromArray(values));
	    }
	    State.fromArray = fromArray;
	    function fromObject(values) {
	        return fromEntries(_async_iterator2.default.fromObject(values));
	    }
	    State.fromObject = fromObject;
	    function lazy(fn) {
	        var state,
	            queue = _promise2.default.resolve();
	        function createState() {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee12() {
	                return _regenerator2.default.wrap(function _callee12$(_context12) {
	                    while (1) {
	                        switch (_context12.prev = _context12.next) {
	                            case 0:
	                                if (!state) {
	                                    _context12.next = 4;
	                                    break;
	                                }
	
	                                _context12.t0 = state;
	                                _context12.next = 7;
	                                break;
	
	                            case 4:
	                                _context12.next = 6;
	                                return fn();
	
	                            case 6:
	                                _context12.t0 = state = _context12.sent;
	
	                            case 7:
	                                return _context12.abrupt("return", _context12.t0);
	
	                            case 8:
	                            case "end":
	                                return _context12.stop();
	                        }
	                    }
	                }, _callee12, this);
	            }));
	        }
	        function get(key) {
	            return state ? state.get(key) : queue.then(createState).then(function (s) {
	                return s.get(key);
	            });
	        }
	        function prev(key) {
	            return state ? state.prev(key) : queue.then(createState).then(function (s) {
	                return s.prev(key);
	            });
	        }
	        function next(key) {
	            return state ? state.next(key) : queue.then(createState).then(function (s) {
	                return s.next(key);
	            });
	        }
	        return { get: get, prev: prev, next: next };
	    }
	    State.lazy = lazy;
	    function toObject(state) {
	        var range = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	
	        return _async_iterator2.default.toObject(entries(state, range));
	    }
	    State.toObject = toObject;
	    function toArray(state) {
	        var range = arguments.length <= 1 || arguments[1] === undefined ? _range2.Range.all : arguments[1];
	
	        return _async_iterator2.default.toArray(values(state, range));
	    }
	    State.toArray = toArray;
	})(State || (exports.State = State = {}));
	exports.default = State;
	//# sourceMappingURL=state.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3Qvc3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxTQUFTLEdBQUcsQUFBQyxhQUFRLFVBQUssU0FBUyxJQUFLLFVBQVUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQzNGLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzFDLGlCQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUFFLG1CQUFPLEtBQUssWUFBWSxPQUFPLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQUUsdUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUFFO0FBQ3hKLGlCQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3ZCLGdCQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFB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RSxJQUFJLEVBQUosSUFBSSxFQUFFLENBQUM7S0FDOUI7QUFDRCxTQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixhQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQXFCO1lBQW5CLEtBQUsseURBQUcsUUF2WmxCLEtBQUssQ0F1Wm1CLEdBQUc7O0FBQ3RDLGVBQU8seUJBQWMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN4RDtBQUNELFNBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQzFCLGFBQVMsT0FBTyxDQUFDLEtBQUssRUFBcUI7WUFBbkIsS0FBSyx5REFBRyxRQTNaakIsS0FBSyxDQTJaa0IsR0FBRzs7QUFDckMsZUFBTyx5QkFBYyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3REO0FBQ0QsU0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDM0IsQ0FBQSxDQUFFLEtBQUssYUExWkcsS0FBSyxHQTBaSCxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztrQkFDWCxLQUFLIiwiZmlsZSI6InN0YXRlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUHJvbWlzZSwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwodGhpc0FyZywgX2FyZ3VtZW50cyk7XG4gICAgICAgIGZ1bmN0aW9uIGNhc3QodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSA/IHZhbHVlIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgICAgIGZ1bmN0aW9uIG9uZnVsZmlsbCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gb25yZWplY3QodmFsdWUpIHsgdHJ5IHsgc3RlcChcInRocm93XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHZlcmIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW3ZlcmJdKHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogY2FzdChyZXN1bHQudmFsdWUpLnRoZW4ob25mdWxmaWxsLCBvbnJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcChcIm5leHRcIiwgdm9pZCAwKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgS2V5IGZyb20gJy4va2V5JztcbmltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCB7IFBvc2l0aW9uLCBSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IENhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IEFzeW5jSXRlcmF0b3IgZnJvbSAnLi9hc3luY19pdGVyYXRvcic7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSAnLi90cmVlJztcbmltcG9ydCB7IE5vdEZvdW5kIH0gZnJvbSAnLi9leGNlcHRpb25zJztcbmV4cG9ydCB2YXIgU3RhdGU7XG4oZnVuY3Rpb24gKFN0YXRlKSB7XG4gICAgU3RhdGUuRW1wdHkgPSB7XG4gICAgICAgIGdldDogKGtleSkgPT4gUHJvbWlzZS5yZWplY3QobmV3IE5vdEZvdW5kKSxcbiAgICAgICAgcHJldjogKGtleSA9IEtleS5TRU5USU5FTCkgPT4ga2V5ID09PSBLZXkuU0VOVElORUwgPyBQcm9taXNlLnJlc29sdmUoS2V5LlNFTlRJTkVMKSA6IFByb21pc2UucmVqZWN0KG5ldyBOb3RGb3VuZCksXG4gICAgICAgIG5leHQ6IChrZXkgPSBLZXkuU0VOVElORUwpID0+IGtleSA9PT0gS2V5LlNFTlRJTkVMID8gUHJvbWlzZS5yZXNvbHZlKEtleS5TRU5USU5FTCkgOiBQcm9taXNlLnJlamVjdChuZXcgTm90Rm91bmQpXG4gICAgfTtcbiAgICBmdW5jdGlvbiBleHRlbmQocGFyZW50LCB7IGdldCwgcHJldiwgbmV4dCB9KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IE9iamVjdC5jcmVhdGUocGFyZW50KTtcbiAgICAgICAgaWYgKGdldClcbiAgICAgICAgICAgIHN0YXRlLmdldCA9IGdldDtcbiAgICAgICAgaWYgKHByZXYpXG4gICAgICAgICAgICBzdGF0ZS5wcmV2ID0gcHJldjtcbiAgICAgICAgaWYgKG5leHQpXG4gICAgICAgICAgICBzdGF0ZS5uZXh0ID0gbmV4dDtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBTdGF0ZS5leHRlbmQgPSBleHRlbmQ7XG4gICAgZnVuY3Rpb24gZmlyc3Qoc3RhdGUsIFtmcm9tLCB0b10gPSBSYW5nZS5hbGwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb24uaXNQcmV2UG9zaXRpb24oZnJvbSkgPyBmcm9tLnByZXYgOiBzdGF0ZS5uZXh0KGZyb20ubmV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBTdGF0ZS5maXJzdCA9IGZpcnN0O1xuICAgIGZ1bmN0aW9uIGxhc3Qoc3RhdGUsIFtmcm9tLCB0b10gPSBSYW5nZS5hbGwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb24uaXNOZXh0UG9zaXRpb24odG8pID8gdG8ubmV4dCA6IHN0YXRlLnByZXYodG8ucHJldik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBTdGF0ZS5sYXN0ID0gbGFzdDtcbiAgICBmdW5jdGlvbiBoYXMoc3RhdGUsIGtleSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgeWllbGQgc3RhdGUuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb3RGb3VuZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgU3RhdGUuaGFzID0gaGFzO1xuICAgIGZ1bmN0aW9uIGlzKHN0YXRlLCBvdGhlcikge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBlbnRyaWVzKHN0YXRlKSwgb3RoZXJJdGVyYXRvciA9IGVudHJpZXMob3RoZXIpO1xuICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci5pcyhpdGVyYXRvciwgb3RoZXJJdGVyYXRvciwgRW50cnkuaXMpO1xuICAgIH1cbiAgICBTdGF0ZS5pcyA9IGlzO1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHN0YXRlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci5zb21lKGVudHJpZXMoc3RhdGUpLCBlbnRyeSA9PiBlbnRyeVsxXSA9PT0gdmFsdWUpO1xuICAgIH1cbiAgICBTdGF0ZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIGVtcHR5KHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5uZXh0KCkudGhlbihuZXh0ID0+IG5leHQgPT09IEtleS5TRU5USU5FTCk7XG4gICAgfVxuICAgIFN0YXRlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gYW55KHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5uZXh0KCkudGhlbihuZXh0ID0+IG5leHQgIT09IEtleS5TRU5USU5FTCk7XG4gICAgfVxuICAgIFN0YXRlLmFueSA9IGFueTtcbiAgICBmdW5jdGlvbiBzaXplKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBBc3luY0l0ZXJhdG9yLnNpemUoa2V5cyhzdGF0ZSkpO1xuICAgIH1cbiAgICBTdGF0ZS5zaXplID0gc2l6ZTtcbiAgICBmdW5jdGlvbiBzbGljZShwYXJlbnQsIHJhbmdlID0gUmFuZ2UuYWxsKSB7XG4gICAgICAgIHJldHVybiBmcm9tRW50cmllcyhlbnRyaWVzKHBhcmVudCwgcmFuZ2UpKTtcbiAgICB9XG4gICAgU3RhdGUuc2xpY2UgPSBzbGljZTtcbiAgICBmdW5jdGlvbiBzcGxpY2UocGFyZW50LCByYW5nZSwgY2hpbGQpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlZCA9IHNsaWNlKHBhcmVudCwgcmFuZ2UpLCBmaWx0ZXJlZCA9IGZpbHRlcihwYXJlbnQsICh2YWx1ZSwga2V5KSA9PiBkZWxldGVkLmdldChrZXkpLnRoZW4oKCkgPT4gZmFsc2UsICgpID0+IHRydWUpKTtcbiAgICAgICAgaWYgKGNoaWxkID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgICAgIHZhciBicmlkZ2VkQ2hpbGQsIGJyaWRnZWRQYXJlbnQsIGZyb20gPSByYW5nZVswXSwgdG8gPSByYW5nZVsxXTtcbiAgICAgICAgYnJpZGdlZENoaWxkID0gZXh0ZW5kKGNoaWxkLCB7XG4gICAgICAgICAgICBwcmV2OiBrZXkgPT4gY2hpbGQucHJldihrZXkpLnRoZW4ocHJldiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXYgIT09IEtleS5TRU5USU5FTClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBvc2l0aW9uLmlzTmV4dFBvc2l0aW9uKGZyb20pID8gZnJvbS5uZXh0IDogcGFyZW50LnByZXYoZnJvbS5wcmV2KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV4dDoga2V5ID0+IGNoaWxkLm5leHQoa2V5KS50aGVuKG5leHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSBLZXkuU0VOVElORUwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgICAgIHJldHVybiBQb3NpdGlvbi5pc1ByZXZQb3NpdGlvbih0bykgPyB0by5wcmV2IDogcGFyZW50Lm5leHQodG8ubmV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgYnJpZGdlZFBhcmVudCA9IGV4dGVuZChmaWx0ZXJlZCwge1xuICAgICAgICAgICAgcHJldjoga2V5ID0+IHBhcmVudC5wcmV2KGtleSkudGhlbihwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoUG9zaXRpb24uaXNOZXh0UG9zaXRpb24odG8pICYmIHByZXYgPT09IHRvLm5leHQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBicmlkZ2VkQ2hpbGQucHJldihLZXkuU0VOVElORUwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXMoZGVsZXRlZCwgcHJldikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV4dDoga2V5ID0+IHBhcmVudC5uZXh0KGtleSkudGhlbihuZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoUG9zaXRpb24uaXNQcmV2UG9zaXRpb24oZnJvbSkgJiYgbmV4dCA9PT0gZnJvbS5wcmV2KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJpZGdlZENoaWxkLm5leHQoS2V5LlNFTlRJTkVMKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzKGRlbGV0ZWQsIG5leHQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RGb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGJyaWRnZWRDaGlsZC5nZXQoa2V5KS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYXNvbiBpbnN0YW5jZW9mIE5vdEZvdW5kKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICAgICAgICAgIHJldHVybiBicmlkZ2VkUGFyZW50LmdldChrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJldihrZXkgPSBLZXkuU0VOVElORUwpIHtcbiAgICAgICAgICAgIGlmIChQb3NpdGlvbi5pc1ByZXZQb3NpdGlvbih0bykgJiYga2V5ID09PSB0by5wcmV2KVxuICAgICAgICAgICAgICAgIHJldHVybiBicmlkZ2VkQ2hpbGQucHJldihLZXkuU0VOVElORUwpO1xuICAgICAgICAgICAgcmV0dXJuIGhhcyhicmlkZ2VkQ2hpbGQsIGtleSkudGhlbihyZXMgPT4gcmVzID8gYnJpZGdlZENoaWxkLnByZXYoa2V5KSA6IGJyaWRnZWRQYXJlbnQucHJldihrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBuZXh0KGtleSA9IEtleS5TRU5USU5FTCkge1xuICAgICAgICAgICAgaWYgKFBvc2l0aW9uLmlzTmV4dFBvc2l0aW9uKGZyb20pICYmIGtleSA9PT0gZnJvbS5uZXh0KVxuICAgICAgICAgICAgICAgIHJldHVybiBicmlkZ2VkQ2hpbGQubmV4dChLZXkuU0VOVElORUwpO1xuICAgICAgICAgICAgcmV0dXJuIGhhcyhicmlkZ2VkQ2hpbGQsIGtleSkudGhlbihyZXMgPT4gcmVzID8gYnJpZGdlZENoaWxkLm5leHQoa2V5KSA6IGJyaWRnZWRQYXJlbnQubmV4dChrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBnZXQsIHByZXYsIG5leHQgfTtcbiAgICB9XG4gICAgU3RhdGUuc3BsaWNlID0gc3BsaWNlO1xuICAgIGZ1bmN0aW9uIHJldmVyc2UocGFyZW50KSB7XG4gICAgICAgIHJldHVybiBleHRlbmQocGFyZW50LCB7XG4gICAgICAgICAgICBwcmV2OiBwYXJlbnQubmV4dCxcbiAgICAgICAgICAgIG5leHQ6IHBhcmVudC5wcmV2XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBTdGF0ZS5yZXZlcnNlID0gcmV2ZXJzZTtcbiAgICBmdW5jdGlvbiBtYXAocGFyZW50LCBtYXBGbikge1xuICAgICAgICBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmdldChrZXkpLnRoZW4odmFsdWUgPT4gbWFwRm4odmFsdWUsIGtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHRlbmQocGFyZW50LCB7IGdldCB9KTtcbiAgICB9XG4gICAgU3RhdGUubWFwID0gbWFwO1xuICAgIGZ1bmN0aW9uIGZpbHRlcihwYXJlbnQsIGZpbHRlckZuKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGZ1bmN0aW9uIGhhdmUoa2V5KSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBKU09OLnN0cmluZ2lmeShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGxhYmVsIGluIGNhY2hlID8gY2FjaGVbbGFiZWxdIDogY2FjaGVbbGFiZWxdID0gcGFyZW50LmdldChrZXkpLnRoZW4odmFsdWUgPT4gZmlsdGVyRm4odmFsdWUsIGtleSkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZpbmQoc3RhdGUsIGZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiBBc3luY0l0ZXJhdG9yLmZpbHRlcihrZXlzKHN0YXRlLCBbeyBuZXh0OiBmcm9tIH0sIHsgcHJldjogbnVsbCB9XSksIGhhdmUpXG4gICAgICAgICAgICAgICAgLm5leHQoKS50aGVuKHJlc3VsdCA9PiByZXN1bHQuZG9uZSA/IEtleS5TRU5USU5FTCA6IHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGhhdmUoa2V5KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RGb3VuZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmdldChrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJldihrZXkgPSBLZXkuU0VOVElORUwpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IEtleS5TRU5USU5FTClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZChyZXZlcnNlKHBhcmVudCksIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gaGF2ZShrZXkpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kO1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiBmaW5kKHJldmVyc2UocGFyZW50KSwga2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbmV4dChrZXkgPSBLZXkuU0VOVElORUwpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IEtleS5TRU5USU5FTClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZChwYXJlbnQsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gaGF2ZShrZXkpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kO1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiBmaW5kKHBhcmVudCwga2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dGVuZChwYXJlbnQsIHsgZ2V0LCBwcmV2LCBuZXh0IH0pO1xuICAgIH1cbiAgICBTdGF0ZS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgZnVuY3Rpb24gc2NhbihwYXJlbnQsIHNjYW5GbiwgbWVtbykge1xuICAgICAgICByZXR1cm4gZnJvbUVudHJpZXMoQXN5bmNJdGVyYXRvci5zY2FuKGVudHJpZXMocGFyZW50KSwgKG1lbW9FbnRyeSwgZW50cnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2NhbkZuKG1lbW9FbnRyeVsxXSwgZW50cnlbMV0sIGVudHJ5WzBdKSkudGhlbihyZXN1bHQgPT4gW2VudHJ5WzBdLCByZXN1bHRdKTtcbiAgICAgICAgfSwgW0tleS5TRU5USU5FTCwgbWVtb10pKTtcbiAgICB9XG4gICAgU3RhdGUuc2NhbiA9IHNjYW47XG4gICAgZnVuY3Rpb24gcGljayhwYXJlbnQsIHBpY2tlZCkge1xuICAgICAgICByZXR1cm4gZmlsdGVyKHBhcmVudCwgKHZhbHVlLCBrZXkpID0+IGhhcyhwaWNrZWQsIGtleSkpO1xuICAgIH1cbiAgICBTdGF0ZS5waWNrID0gcGljaztcbiAgICBmdW5jdGlvbiBvbWl0KHBhcmVudCwgb21pdHRlZCkge1xuICAgICAgICByZXR1cm4gZmlsdGVyKHBhcmVudCwgKHZhbHVlLCBrZXkpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiAhKHlpZWxkIGhhcyhvbWl0dGVkLCBrZXkpKTsgfSkpO1xuICAgIH1cbiAgICBTdGF0ZS5vbWl0ID0gb21pdDtcbiAgICBmdW5jdGlvbiB6aXAocGFyZW50LCBvdGhlcikge1xuICAgICAgICByZXR1cm4gZnJvbUVudHJpZXMoQXN5bmNJdGVyYXRvci56aXAoQXN5bmNJdGVyYXRvci56aXAoa2V5cyhwYXJlbnQpLCBrZXlzKG90aGVyKSksIEFzeW5jSXRlcmF0b3IuemlwKHZhbHVlcyhwYXJlbnQpLCB2YWx1ZXMob3RoZXIpKSkpO1xuICAgIH1cbiAgICBTdGF0ZS56aXAgPSB6aXA7XG4gICAgZnVuY3Rpb24gem9vbShwYXJlbnQsIGtleSkge1xuICAgICAgICB2YXIgaGF2ZTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0KGspIHtcbiAgICAgICAgICAgIGlmIChrID09PSBrZXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5nZXQoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgTm90Rm91bmQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG5leHQoayA9IEtleS5TRU5USU5FTCkge1xuICAgICAgICAgICAgaWYgKGsgIT09IGtleSAmJiBrICE9PSBLZXkuU0VOVElORUwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBOb3RGb3VuZCk7XG4gICAgICAgICAgICBpZiAoayA9PT0ga2V5KVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoS2V5LlNFTlRJTkVMKTtcbiAgICAgICAgICAgIGlmIChoYXZlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXZlID8ga2V5IDogS2V5LlNFTlRJTkVMKTtcbiAgICAgICAgICAgIHJldHVybiBoYXMocGFyZW50LCBrZXkpLnRoZW4ocmVzID0+IChoYXZlID0gcmVzKSA/IGtleSA6IEtleS5TRU5USU5FTCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZ2V0LCBwcmV2OiBuZXh0LCBuZXh0IH07XG4gICAgfVxuICAgIFN0YXRlLnpvb20gPSB6b29tO1xuICAgIGZ1bmN0aW9uIGZsYXR0ZW4ocGFyZW50KSB7XG4gICAgICAgIHJldHVybiBleHRlbmQocGFyZW50LCB7XG4gICAgICAgICAgICBnZXQ6IGtleSA9PiBUcmVlLmdldChwYXJlbnQsIGtleSksXG4gICAgICAgICAgICBwcmV2OiBrZXkgPT4gVHJlZS5wcmV2KHBhcmVudCwga2V5KSxcbiAgICAgICAgICAgIG5leHQ6IGtleSA9PiBUcmVlLm5leHQocGFyZW50LCBrZXkpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBTdGF0ZS5mbGF0dGVuID0gZmxhdHRlbjtcbiAgICBmdW5jdGlvbiBmbGF0TWFwKHBhcmVudCwgbWFwRm4pIHtcbiAgICAgICAgcmV0dXJuIFN0YXRlLmZsYXR0ZW4oU3RhdGUubWFwKHBhcmVudCwgbWFwRm4pKTtcbiAgICB9XG4gICAgU3RhdGUuZmxhdE1hcCA9IGZsYXRNYXA7XG4gICAgZnVuY3Rpb24gZ3JvdXBCeShwYXJlbnQsIGdyb3VwRm4pIHtcbiAgICAgICAgdmFyIHN0YXRlcyA9IHt9O1xuICAgICAgICB2YXIgaXQgPSBlbnRyaWVzKHBhcmVudCk7XG4gICAgICAgIHZhciBncm91cEtleWVkID0gQXN5bmNJdGVyYXRvci5tYXAoaXQsIChba2V5LCB2YWx1ZV0pID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShncm91cEZuKHZhbHVlLCBrZXkpKS50aGVuKGdyb3VwS2V5ID0+IFtncm91cEtleSwgdmFsdWVdKTsgfSk7XG4gICAgICAgIHZhciBmaWx0ZXJlZCA9IEFzeW5jSXRlcmF0b3IuZmlsdGVyKGdyb3VwS2V5ZWQsIChbZ3JvdXBLZXksIHZhbHVlXSkgPT4gIShKU09OLnN0cmluZ2lmeShncm91cEtleSkgaW4gc3RhdGVzKSk7XG4gICAgICAgIHZhciBtYXBwZWQgPSBBc3luY0l0ZXJhdG9yLm1hcChmaWx0ZXJlZCwgKFtncm91cEtleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmaWx0ZXIocGFyZW50LCAodmFsdWUsIGtleSkgPT4gUHJvbWlzZS5yZXNvbHZlKGdyb3VwRm4odmFsdWUsIGtleSkpLnRoZW4oZ2sgPT4gZ2sgPT09IGdyb3VwS2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gW2dyb3VwS2V5LCBzdGF0ZXNbSlNPTi5zdHJpbmdpZnkoZ3JvdXBLZXkpXSA9IHN0YXRlXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmcm9tRW50cmllcyhtYXBwZWQpO1xuICAgIH1cbiAgICBTdGF0ZS5ncm91cEJ5ID0gZ3JvdXBCeTtcbiAgICBmdW5jdGlvbiB1bmlxdWUocGFyZW50LCB1bmlxdWVGbikge1xuICAgICAgICByZXR1cm4gZnJvbUVudHJpZXMoQXN5bmNJdGVyYXRvci51bmlxdWUoZW50cmllcyhwYXJlbnQpLCAoW2tleSwgdmFsdWVdKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkgeyByZXR1cm4gdW5pcXVlRm4odmFsdWUsIGtleSk7IH0pKSk7XG4gICAgfVxuICAgIFN0YXRlLnVuaXF1ZSA9IHVuaXF1ZTtcbiAgICBmdW5jdGlvbiB1bmlvbihzdGF0ZSwgb3RoZXIsIHVuaXF1ZUZuKSB7XG4gICAgICAgIHJldHVybiBmcm9tRW50cmllcyhBc3luY0l0ZXJhdG9yLnVuaXF1ZShBc3luY0l0ZXJhdG9yLmNvbmNhdChlbnRyaWVzKHN0YXRlKSwgZW50cmllcyhvdGhlcikpLCAoW2tleSwgdmFsdWVdKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkgeyByZXR1cm4gdW5pcXVlRm4odmFsdWUsIGtleSk7IH0pKSk7XG4gICAgfVxuICAgIFN0YXRlLnVuaW9uID0gdW5pb247XG4gICAgZnVuY3Rpb24ga2V5QnkocGFyZW50LCBrZXlGbiwgcmV2ZXJzZUtleUZuKSB7XG4gICAgICAgIGlmICghcmV2ZXJzZUtleUZuKVxuICAgICAgICAgICAgcmV0dXJuIGZyb21FbnRyaWVzKEFzeW5jSXRlcmF0b3IubWFwKGVudHJpZXMocGFyZW50KSwgZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5Rm4oZW50cnlbMV0sIGVudHJ5WzBdKSkudGhlbihrZXkgPT4gW2tleSwgZW50cnlbMV1dKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5nZXQoeWllbGQgcmV2ZXJzZUtleUZuKGtleSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXYoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2ID0geWllbGQgcGFyZW50LnByZXYoeWllbGQgcmV2ZXJzZUtleUZuKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5Rm4oeWllbGQgcGFyZW50LmdldChwcmV2KSwgcHJldik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSB5aWVsZCBwYXJlbnQubmV4dCh5aWVsZCByZXZlcnNlS2V5Rm4oa2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlGbih5aWVsZCBwYXJlbnQuZ2V0KG5leHQpLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgU3RhdGUua2V5QnkgPSBrZXlCeTtcbiAgICBmdW5jdGlvbiB0YWtlKHBhcmVudCwgY291bnQpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FbnRyaWVzKEFzeW5jSXRlcmF0b3IudGFrZShlbnRyaWVzKHBhcmVudCksIGNvdW50KSk7XG4gICAgfVxuICAgIFN0YXRlLnRha2UgPSB0YWtlO1xuICAgIGZ1bmN0aW9uIHNraXAocGFyZW50LCBjb3VudCkge1xuICAgICAgICByZXR1cm4gZnJvbUVudHJpZXMoQXN5bmNJdGVyYXRvci5za2lwKGVudHJpZXMocGFyZW50KSwgY291bnQpKTtcbiAgICB9XG4gICAgU3RhdGUuc2tpcCA9IHNraXA7XG4gICAgZnVuY3Rpb24gY2FjaGUocGFyZW50KSB7XG4gICAgICAgIHJldHVybiBDYWNoZS5hcHBseShwYXJlbnQsIENhY2hlLmNyZWF0ZSgpKTtcbiAgICB9XG4gICAgU3RhdGUuY2FjaGUgPSBjYWNoZTtcbiAgICBmdW5jdGlvbiB1bml0KHZhbHVlLCBrZXkgPSBLZXkudW5pcXVlKCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldDogayA9PiBrID09PSBrZXkgPyBQcm9taXNlLnJlc29sdmUodmFsdWUpIDogUHJvbWlzZS5yZWplY3QobmV3IE5vdEZvdW5kKSxcbiAgICAgICAgICAgIHByZXY6IChrID0gS2V5LlNFTlRJTkVMKSA9PiBQcm9taXNlLnJlc29sdmUoayA9PT0gS2V5LlNFTlRJTkVMID8ga2V5IDogS2V5LlNFTlRJTkVMKSxcbiAgICAgICAgICAgIG5leHQ6IChrID0gS2V5LlNFTlRJTkVMKSA9PiBQcm9taXNlLnJlc29sdmUoayA9PT0gS2V5LlNFTlRJTkVMID8ga2V5IDogS2V5LlNFTlRJTkVMKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBTdGF0ZS51bml0ID0gdW5pdDtcbiAgICBmdW5jdGlvbiBlbnRyaWVzKHN0YXRlLCByYW5nZSA9IFJhbmdlLmFsbCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IEtleS5TRU5USU5FTCwgZG9uZSA9IGZhbHNlLCBbZnJvbSwgdG9dID0gcmFuZ2U7XG4gICAgICAgIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IEtleS5TRU5USU5FTClcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRvbmUgPSB0cnVlLCBQcm9taXNlLnJlc29sdmUoQXN5bmNJdGVyYXRvci5kb25lKSk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZ2V0KGtleSkudGhlbih2YWx1ZSA9PiAoY3VycmVudCA9IGtleSwgeyBkb25lOiBmYWxzZSwgdmFsdWU6IFtrZXksIHZhbHVlXSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZShrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5uZXh0KGtleSkudGhlbihuZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoUG9zaXRpb24uaXNQcmV2UG9zaXRpb24odG8pICYmIHRvLnByZXYgPT09IG5leHQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXQoS2V5LlNFTlRJTkVMKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0KG5leHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChQb3NpdGlvbi5pc1ByZXZQb3NpdGlvbihmcm9tKSAmJiBQb3NpdGlvbi5pc1ByZXZQb3NpdGlvbih0bykgJiYgZnJvbS5wcmV2ID09PSB0by5wcmV2KVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXQoS2V5LlNFTlRJTkVMKTtcbiAgICAgICAgICAgIGlmIChQb3NpdGlvbi5pc05leHRQb3NpdGlvbihmcm9tKSAmJiBQb3NpdGlvbi5pc05leHRQb3NpdGlvbih0bykgJiYgZnJvbS5uZXh0ID09PSB0by5uZXh0KVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXQoS2V5LlNFTlRJTkVMKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBLZXkuU0VOVElORUwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBvc2l0aW9uLmlzUHJldlBvc2l0aW9uKGZyb20pID8gZ2V0KGZyb20ucHJldikgOiBpdGVyYXRlKGZyb20ubmV4dCk7XG4gICAgICAgICAgICBpZiAoUG9zaXRpb24uaXNOZXh0UG9zaXRpb24odG8pICYmIHRvLm5leHQgPT09IGN1cnJlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldChLZXkuU0VOVElORUwpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdGUoY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFzeW5jSXRlcmF0b3IuY3JlYXRlKG5leHQpO1xuICAgIH1cbiAgICBTdGF0ZS5lbnRyaWVzID0gZW50cmllcztcbiAgICBmdW5jdGlvbiBrZXlzKHN0YXRlLCByYW5nZSA9IFJhbmdlLmFsbCkge1xuICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci5tYXAoZW50cmllcyhzdGF0ZSwgcmFuZ2UpLCBFbnRyeS5rZXkpO1xuICAgIH1cbiAgICBTdGF0ZS5rZXlzID0ga2V5cztcbiAgICBmdW5jdGlvbiB2YWx1ZXMoc3RhdGUsIHJhbmdlID0gUmFuZ2UuYWxsKSB7XG4gICAgICAgIHJldHVybiBBc3luY0l0ZXJhdG9yLm1hcChlbnRyaWVzKHN0YXRlLCByYW5nZSksIEVudHJ5LnZhbHVlKTtcbiAgICB9XG4gICAgU3RhdGUudmFsdWVzID0gdmFsdWVzO1xuICAgIGZ1bmN0aW9uIGZyb21FbnRyaWVzKGl0ZXJhdG9yKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IENhY2hlLmNyZWF0ZSgpLCBleGhhdXN0ZWQgPSBmYWxzZSwgY3VycmVudEtleSA9IEtleS5TRU5USU5FTCwgcXVldWUgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIHZhciBjYWNoaW5nSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLmNyZWF0ZSgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIGV4aGF1c3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FjaGUucHJldihLZXkuU0VOVElORUwsIGN1cnJlbnRLZXkpO1xuICAgICAgICAgICAgICAgIGNhY2hlLm5leHQoY3VycmVudEtleSwgS2V5LlNFTlRJTkVMKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci5kb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFtrZXksIHZhbHVlXSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIGNhY2hlLnByZXYoa2V5LCBjdXJyZW50S2V5KTtcbiAgICAgICAgICAgIGNhY2hlLm5leHQoY3VycmVudEtleSwga2V5KTtcbiAgICAgICAgICAgIGNhY2hlLmdldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGN1cnJlbnRLZXkgPSBrZXk7XG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IFtrZXksIHZhbHVlXSB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgICAgIGlmIChleGhhdXN0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBOb3RGb3VuZCk7XG4gICAgICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci5maW5kKGNhY2hpbmdJdGVyYXRvciwgZW50cnkgPT4gZW50cnlbMF0gPT09IGtleSkudGhlbihFbnRyeS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJldihrZXkgPSBLZXkuU0VOVElORUwpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmIChleGhhdXN0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgTm90Rm91bmQpO1xuICAgICAgICAgICAgICAgIHlpZWxkIEFzeW5jSXRlcmF0b3Iuc29tZShjYWNoaW5nSXRlcmF0b3IsIGVudHJ5ID0+IGVudHJ5WzBdID09PSBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5wcmV2KGtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBuZXh0KGtleSA9IEtleS5TRU5USU5FTCkge1xuICAgICAgICAgICAgaWYgKGV4aGF1c3RlZClcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IE5vdEZvdW5kKTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IGN1cnJlbnRLZXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hpbmdJdGVyYXRvci5uZXh0KCkudGhlbihyZXN1bHQgPT4gcmVzdWx0LmRvbmUgPyBLZXkuU0VOVElORUwgOiByZXN1bHQudmFsdWVbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIEFzeW5jSXRlcmF0b3IuZmluZChjYWNoaW5nSXRlcmF0b3IsIGVudHJ5ID0+IGVudHJ5WzBdID09PSBrZXkpLnRoZW4oKCkgPT4gY2FjaGluZ0l0ZXJhdG9yLm5leHQoKSkudGhlbihyZXN1bHQgPT4gcmVzdWx0LmRvbmUgPyBLZXkuU0VOVElORUwgOiByZXN1bHQudmFsdWVbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDYWNoZS5hcHBseSh7IGdldCwgcHJldiwgbmV4dCB9LCBjYWNoZSk7XG4gICAgfVxuICAgIFN0YXRlLmZyb21FbnRyaWVzID0gZnJvbUVudHJpZXM7XG4gICAgZnVuY3Rpb24gZnJvbUtleXMoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FbnRyaWVzKEFzeW5jSXRlcmF0b3IubWFwKGl0ZXJhdG9yLCBrZXkgPT4gW2tleSwgbnVsbF0pKTtcbiAgICB9XG4gICAgU3RhdGUuZnJvbUtleXMgPSBmcm9tS2V5cztcbiAgICBmdW5jdGlvbiBmcm9tVmFsdWVzKGl0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBmcm9tRW50cmllcyhBc3luY0l0ZXJhdG9yLnNjYW4oaXRlcmF0b3IsIChwcmV2LCB2YWx1ZSkgPT4gW3ByZXZbMF0gKyAxLCB2YWx1ZV0sIFstMSwgbnVsbF0pKTtcbiAgICB9XG4gICAgU3RhdGUuZnJvbVZhbHVlcyA9IGZyb21WYWx1ZXM7XG4gICAgZnVuY3Rpb24gZnJvbUFycmF5KHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnJvbVZhbHVlcyhBc3luY0l0ZXJhdG9yLmZyb21BcnJheSh2YWx1ZXMpKTtcbiAgICB9XG4gICAgU3RhdGUuZnJvbUFycmF5ID0gZnJvbUFycmF5O1xuICAgIGZ1bmN0aW9uIGZyb21PYmplY3QodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmcm9tRW50cmllcyhBc3luY0l0ZXJhdG9yLmZyb21PYmplY3QodmFsdWVzKSk7XG4gICAgfVxuICAgIFN0YXRlLmZyb21PYmplY3QgPSBmcm9tT2JqZWN0O1xuICAgIGZ1bmN0aW9uIGxhenkoZm4pIHtcbiAgICAgICAgdmFyIHN0YXRlLCBxdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZSA/IHN0YXRlIDogc3RhdGUgPSB5aWVsZCBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID8gc3RhdGUuZ2V0KGtleSkgOiBxdWV1ZS50aGVuKGNyZWF0ZVN0YXRlKS50aGVuKHMgPT4gcy5nZXQoa2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJldihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA/IHN0YXRlLnByZXYoa2V5KSA6IHF1ZXVlLnRoZW4oY3JlYXRlU3RhdGUpLnRoZW4ocyA9PiBzLnByZXYoa2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbmV4dChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA/IHN0YXRlLm5leHQoa2V5KSA6IHF1ZXVlLnRoZW4oY3JlYXRlU3RhdGUpLnRoZW4ocyA9PiBzLm5leHQoa2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZ2V0LCBwcmV2LCBuZXh0IH07XG4gICAgfVxuICAgIFN0YXRlLmxhenkgPSBsYXp5O1xuICAgIGZ1bmN0aW9uIHRvT2JqZWN0KHN0YXRlLCByYW5nZSA9IFJhbmdlLmFsbCkge1xuICAgICAgICByZXR1cm4gQXN5bmNJdGVyYXRvci50b09iamVjdChlbnRyaWVzKHN0YXRlLCByYW5nZSkpO1xuICAgIH1cbiAgICBTdGF0ZS50b09iamVjdCA9IHRvT2JqZWN0O1xuICAgIGZ1bmN0aW9uIHRvQXJyYXkoc3RhdGUsIHJhbmdlID0gUmFuZ2UuYWxsKSB7XG4gICAgICAgIHJldHVybiBBc3luY0l0ZXJhdG9yLnRvQXJyYXkodmFsdWVzKHN0YXRlLCByYW5nZSkpO1xuICAgIH1cbiAgICBTdGF0ZS50b0FycmF5ID0gdG9BcnJheTtcbn0pKFN0YXRlIHx8IChTdGF0ZSA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlLmpzLm1hcCJdfQ==

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Entry = exports.Entry = undefined;
	(function (Entry) {
	    function key(entry) {
	        return entry && entry[0];
	    }
	    Entry.key = key;
	    function value(entry) {
	        return entry[1];
	    }
	    Entry.value = value;
	    function is(entry, other) {
	        return entry[0] === other[0] && entry[1] === other[1];
	    }
	    Entry.is = is;
	})(Entry || (exports.Entry = Entry = {}));
	exports.default = Entry;
	//# sourceMappingURL=entry.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFJLEtBQUssV0FBTCxLQUFLLFlBQUEsQ0FBQztBQUNqQixDQUFDLFVBQVUsS0FBSyxFQUFFO0FBQ2QsYUFBUyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ2hCLGVBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QjtBQUNELFNBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLGFBQVMsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUNsQixlQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQjtBQUNELFNBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLGFBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDdEIsZUFBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekQ7QUFDRCxTQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUNqQixDQUFBLENBQUUsS0FBSyxhQWRHLEtBQUssR0FjSCxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztrQkFDWCxLQUFLIiwiZmlsZSI6ImVudHJ5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBFbnRyeTtcbihmdW5jdGlvbiAoRW50cnkpIHtcbiAgICBmdW5jdGlvbiBrZXkoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzBdO1xuICAgIH1cbiAgICBFbnRyeS5rZXkgPSBrZXk7XG4gICAgZnVuY3Rpb24gdmFsdWUoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5WzFdO1xuICAgIH1cbiAgICBFbnRyeS52YWx1ZSA9IHZhbHVlO1xuICAgIGZ1bmN0aW9uIGlzKGVudHJ5LCBvdGhlcikge1xuICAgICAgICByZXR1cm4gZW50cnlbMF0gPT09IG90aGVyWzBdICYmIGVudHJ5WzFdID09PSBvdGhlclsxXTtcbiAgICB9XG4gICAgRW50cnkuaXMgPSBpcztcbn0pKEVudHJ5IHx8IChFbnRyeSA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBFbnRyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudHJ5LmpzLm1hcCJdfQ==

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Position = exports.Range = undefined;
	
	var _slicedToArray2 = __webpack_require__(80);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _key = __webpack_require__(78);
	
	var _key2 = _interopRequireDefault(_key);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var Range = exports.Range = undefined;
	(function (Range) {
	    Range.all = [{ next: _key2.default.SENTINEL }, { prev: _key2.default.SENTINEL }];
	    function reverse(_ref) {
	        var _ref2 = (0, _slicedToArray3.default)(_ref, 2);
	
	        var from = _ref2[0];
	        var to = _ref2[1];
	
	        return [Position.reverse(to), Position.reverse(from)];
	    }
	    Range.reverse = reverse;
	})(Range || (exports.Range = Range = {}));
	var Position = exports.Position = undefined;
	(function (Position) {
	    function isPrevPosition(position) {
	        return 'prev' in position;
	    }
	    Position.isPrevPosition = isPrevPosition;
	    function isNextPosition(position) {
	        return 'next' in position;
	    }
	    Position.isNextPosition = isNextPosition;
	    function reverse(position) {
	        return Position.isPrevPosition(position) ? { next: position.prev } : { prev: position.next };
	    }
	    Position.reverse = reverse;
	})(Position || (exports.Position = Position = {}));
	exports.default = Range;
	//# sourceMappingURL=range.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvcmFuZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFNBQVMsR0FBRyxBQUFDLGFBQVEsVUFBSyxTQUFTLElBQUssVUFBVSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDM0YsV0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDMUMsaUJBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBUyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQUUsbUJBQU8sS0FBSyxZQUFZLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFBRSx1QkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDO1NBQUU7QUFDeEosaUJBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUFFLGdCQUFJO0FBQUUsb0JBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQUUsc0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7QUFDbkYsaUJBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUFFLGdCQUFJO0FBQUUsb0JBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQUUsc0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7QUFDbkYsaUJBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDdkIsZ0JBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RjtBQUNELFlBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN4QixDQUFDLENBQUM7Q0FDTixDQUFDO0FBRUssSUFBSSxLQUFLLFdBQUwsS0FBSyxZQUFBLENBQUM7QUFDakIsQ0FBQyxVQUFVLEtBQUssRUFBRTtBQUNkLFNBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFJLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM3RCxhQUFTLE9BQU8sT0FBYTs7O1lBQVgsSUFBSTtZQUFFLEVBQUU7O0FBQ3RCLGVBQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN6RDtBQUNELFNBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQzNCLENBQUEsQ0FBRSxLQUFLLGFBUEcsS0FBSyxHQU9ILEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUksUUFBUSxXQUFSLFFBQVEsWUFBQSxDQUFDO0FBQ3BCLENBQUMsVUFBVSxRQUFRLEVBQUU7QUFDakIsYUFBUyxjQUFjLENBQUMsUUFBUSxFQUFFO0FBQzlCLGVBQU8sTUFBTSxJQUFJLFFBQVEsQ0FBQztLQUM3QjtBQUNELFlBQVEsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0FBQ3pDLGFBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRTtBQUM5QixlQUFPLE1BQU0sSUFBSSxRQUFRLENBQUM7S0FDN0I7QUFDRCxZQUFRLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUN6QyxhQUFTLE9BQU8sQ0FBQyxRQUFRLEVBQUU7QUFDdkIsZUFBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDaEc7QUFDRCxZQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM5QixDQUFBLENBQUUsUUFBUSxhQWRBLFFBQVEsR0FjSCxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztrQkFDakIsS0FBSyIsImZpbGUiOiJyYW5nZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGVmZmFuL1Byb2plY3RzL3NoYWRvdyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFByb21pc2UsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGdlbmVyYXRvciA9IGdlbmVyYXRvci5jYWxsKHRoaXNBcmcsIF9hcmd1bWVudHMpO1xuICAgICAgICBmdW5jdGlvbiBjYXN0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UgPyB2YWx1ZSA6IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgICAgICBmdW5jdGlvbiBvbmZ1bGZpbGwodmFsdWUpIHsgdHJ5IHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIG9ucmVqZWN0KHZhbHVlKSB7IHRyeSB7IHN0ZXAoXCJ0aHJvd1wiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcCh2ZXJiLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGdlbmVyYXRvclt2ZXJiXSh2YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGNhc3QocmVzdWx0LnZhbHVlKS50aGVuKG9uZnVsZmlsbCwgb25yZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZvaWQgMCk7XG4gICAgfSk7XG59O1xuaW1wb3J0IEtleSBmcm9tICcuL2tleSc7XG5leHBvcnQgdmFyIFJhbmdlO1xuKGZ1bmN0aW9uIChSYW5nZSkge1xuICAgIFJhbmdlLmFsbCA9IFt7IG5leHQ6IEtleS5TRU5USU5FTCB9LCB7IHByZXY6IEtleS5TRU5USU5FTCB9XTtcbiAgICBmdW5jdGlvbiByZXZlcnNlKFtmcm9tLCB0b10pIHtcbiAgICAgICAgcmV0dXJuIFtQb3NpdGlvbi5yZXZlcnNlKHRvKSwgUG9zaXRpb24ucmV2ZXJzZShmcm9tKV07XG4gICAgfVxuICAgIFJhbmdlLnJldmVyc2UgPSByZXZlcnNlO1xufSkoUmFuZ2UgfHwgKFJhbmdlID0ge30pKTtcbmV4cG9ydCB2YXIgUG9zaXRpb247XG4oZnVuY3Rpb24gKFBvc2l0aW9uKSB7XG4gICAgZnVuY3Rpb24gaXNQcmV2UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuICdwcmV2JyBpbiBwb3NpdGlvbjtcbiAgICB9XG4gICAgUG9zaXRpb24uaXNQcmV2UG9zaXRpb24gPSBpc1ByZXZQb3NpdGlvbjtcbiAgICBmdW5jdGlvbiBpc05leHRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gJ25leHQnIGluIHBvc2l0aW9uO1xuICAgIH1cbiAgICBQb3NpdGlvbi5pc05leHRQb3NpdGlvbiA9IGlzTmV4dFBvc2l0aW9uO1xuICAgIGZ1bmN0aW9uIHJldmVyc2UocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIFBvc2l0aW9uLmlzUHJldlBvc2l0aW9uKHBvc2l0aW9uKSA/IHsgbmV4dDogcG9zaXRpb24ucHJldiB9IDogeyBwcmV2OiBwb3NpdGlvbi5uZXh0IH07XG4gICAgfVxuICAgIFBvc2l0aW9uLnJldmVyc2UgPSByZXZlcnNlO1xufSkoUG9zaXRpb24gfHwgKFBvc2l0aW9uID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZ2UuanMubWFwIl19

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Cache = undefined;
	
	var _regenerator = __webpack_require__(18);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(48);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _stringify = __webpack_require__(87);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _create = __webpack_require__(15);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _exceptions = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var Cache = exports.Cache = undefined;
	(function (Cache) {
	    var NONE = {};
	    function create() {
	        var cache = {
	            get: (0, _create2.default)(null),
	            prev: (0, _create2.default)(null),
	            next: (0, _create2.default)(null)
	        };
	        function createCache(c) {
	            return function (t, u) {
	                var label = (0, _stringify2.default)(t);
	                if (arguments.length > 1) return c[label] = u;
	                if (label in c) return c[label];
	                throw new _exceptions.NotFound();
	            };
	        }
	        return {
	            get: createCache(cache.get),
	            prev: createCache(cache.prev),
	            next: createCache(cache.next)
	        };
	    }
	    Cache.create = create;
	    function extend(cache) {
	        return {
	            get: (0, _create2.default)(cache.get),
	            prev: (0, _create2.default)(cache.prev),
	            next: (0, _create2.default)(cache.next)
	        };
	    }
	    Cache.extend = extend;
	    function apply(state, cache) {
	        function cacheFn(fn, cacher) {
	            var _this = this;
	
	            return function (t) {
	                return __awaiter(_this, void 0, _promise2.default, _regenerator2.default.mark(function _callee() {
	                    return _regenerator2.default.wrap(function _callee$(_context) {
	                        while (1) {
	                            switch (_context.prev = _context.next) {
	                                case 0:
	                                    _context.prev = 0;
	                                    return _context.abrupt("return", cacher(t));
	
	                                case 4:
	                                    _context.prev = 4;
	                                    _context.t0 = _context["catch"](0);
	
	                                    if (!(_context.t0 instanceof _exceptions.NotFound)) {
	                                        _context.next = 12;
	                                        break;
	                                    }
	
	                                    _context.t1 = t;
	                                    _context.next = 10;
	                                    return fn(t);
	
	                                case 10:
	                                    _context.t2 = _context.sent;
	                                    return _context.abrupt("return", cacher(_context.t1, _context.t2));
	
	                                case 12:
	                                    throw _context.t0;
	
	                                case 13:
	                                case "end":
	                                    return _context.stop();
	                            }
	                        }
	                    }, _callee, this, [[0, 4]]);
	                }));
	            };
	        }
	        return {
	            get: cacheFn(state.get, cache.get),
	            prev: cacheFn(state.prev, cache.prev),
	            next: cacheFn(state.next, cache.next)
	        };
	    }
	    Cache.apply = apply;
	})(Cache || (exports.Cache = Cache = {}));
	exports.default = Cache;
	//# sourceMappingURL=cache.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvY2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxTQUFTLEdBQUcsQUFBQyxhQUFRLFVBQUssU0FBUyxJQUFLLFVBQVUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQzNGLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzFDLGlCQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUFFLG1CQUFPLEtBQUssWUFBWSxPQUFPLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQUUsdUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUFFO0FBQ3hKLGlCQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3ZCLGdCQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENB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QUM7a0JBQ1gsS0FBSyIsImZpbGUiOiJjYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGVmZmFuL1Byb2plY3RzL3NoYWRvdyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFByb21pc2UsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGdlbmVyYXRvciA9IGdlbmVyYXRvci5jYWxsKHRoaXNBcmcsIF9hcmd1bWVudHMpO1xuICAgICAgICBmdW5jdGlvbiBjYXN0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UgPyB2YWx1ZSA6IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgICAgICBmdW5jdGlvbiBvbmZ1bGZpbGwodmFsdWUpIHsgdHJ5IHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIG9ucmVqZWN0KHZhbHVlKSB7IHRyeSB7IHN0ZXAoXCJ0aHJvd1wiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcCh2ZXJiLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGdlbmVyYXRvclt2ZXJiXSh2YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGNhc3QocmVzdWx0LnZhbHVlKS50aGVuKG9uZnVsZmlsbCwgb25yZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZvaWQgMCk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tICcuL2V4Y2VwdGlvbnMnO1xuZXhwb3J0IHZhciBDYWNoZTtcbihmdW5jdGlvbiAoQ2FjaGUpIHtcbiAgICBjb25zdCBOT05FID0ge307XG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBjYWNoZSA9IHtcbiAgICAgICAgICAgIGdldDogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIHByZXY6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBuZXh0OiBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCwgdSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gSlNPTi5zdHJpbmdpZnkodCk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY1tsYWJlbF0gPSB1O1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbCBpbiBjKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY1tsYWJlbF07XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQ6IGNyZWF0ZUNhY2hlKGNhY2hlLmdldCksXG4gICAgICAgICAgICBwcmV2OiBjcmVhdGVDYWNoZShjYWNoZS5wcmV2KSxcbiAgICAgICAgICAgIG5leHQ6IGNyZWF0ZUNhY2hlKGNhY2hlLm5leHQpXG4gICAgICAgIH07XG4gICAgfVxuICAgIENhY2hlLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgICBmdW5jdGlvbiBleHRlbmQoY2FjaGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldDogT2JqZWN0LmNyZWF0ZShjYWNoZS5nZXQpLFxuICAgICAgICAgICAgcHJldjogT2JqZWN0LmNyZWF0ZShjYWNoZS5wcmV2KSxcbiAgICAgICAgICAgIG5leHQ6IE9iamVjdC5jcmVhdGUoY2FjaGUubmV4dClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ2FjaGUuZXh0ZW5kID0gZXh0ZW5kO1xuICAgIGZ1bmN0aW9uIGFwcGx5KHN0YXRlLCBjYWNoZSkge1xuICAgICAgICBmdW5jdGlvbiBjYWNoZUZuKGZuLCBjYWNoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAodCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVyKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFzb24gaW5zdGFuY2VvZiBOb3RGb3VuZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZXIodCwgeWllbGQgZm4odCkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldDogY2FjaGVGbihzdGF0ZS5nZXQsIGNhY2hlLmdldCksXG4gICAgICAgICAgICBwcmV2OiBjYWNoZUZuKHN0YXRlLnByZXYsIGNhY2hlLnByZXYpLFxuICAgICAgICAgICAgbmV4dDogY2FjaGVGbihzdGF0ZS5uZXh0LCBjYWNoZS5uZXh0KVxuICAgICAgICB9O1xuICAgIH1cbiAgICBDYWNoZS5hcHBseSA9IGFwcGx5O1xufSkoQ2FjaGUgfHwgKENhY2hlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FjaGUuanMubWFwIl19

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Tree = exports.Path = undefined;
	
	var _key = __webpack_require__(78);
	
	var _key2 = _interopRequireDefault(_key);
	
	var _state = __webpack_require__(93);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var Path = exports.Path = undefined;
	(function (Path) {
	    function head(path) {
	        return path ? path[0] : _key2.default.SENTINEL;
	    }
	    Path.head = head;
	    function tail(path) {
	        return path ? path[1] : _key2.default.SENTINEL;
	    }
	    Path.tail = tail;
	})(Path || (exports.Path = Path = {}));
	var Tree = exports.Tree = undefined;
	(function (Tree) {
	    function get(tree, path) {
	        var head = Path.head(path),
	            tail = Path.tail(path);
	        return tree.get(head).then(function (state) {
	            return state.get(tail);
	        });
	    }
	    Tree.get = get;
	    function prev(tree, path) {
	        var head = Path.head(path),
	            tail = Path.tail(path),
	            prevs = _state2.default.filter(_state2.default.map(tree, function (state) {
	            return state.prev();
	        }), function (first) {
	            return first !== _key2.default.SENTINEL;
	        }),
	            paths = _state2.default.map(prevs, function (first, key) {
	            return [key, first];
	        });
	        if (head === _key2.default.SENTINEL) return paths.prev().then(function (prev) {
	            return prev !== _key2.default.SENTINEL ? paths.get(prev) : _key2.default.SENTINEL;
	        });
	        return tree.get(head).then(function (state) {
	            return state.prev(tail);
	        }).then(function (prev) {
	            return prev !== _key2.default.SENTINEL ? [head, prev] : paths.prev(head).then(function (prev) {
	                return prev !== _key2.default.SENTINEL ? paths.get(prev) : _key2.default.SENTINEL;
	            });
	        });
	    }
	    Tree.prev = prev;
	    function next(tree, path) {
	        var head = Path.head(path),
	            tail = Path.tail(path),
	            nexts = _state2.default.filter(_state2.default.map(tree, function (state) {
	            return state.next();
	        }), function (first) {
	            return first !== _key2.default.SENTINEL;
	        }),
	            paths = _state2.default.map(nexts, function (first, key) {
	            return [key, first];
	        });
	        if (head === _key2.default.SENTINEL) return paths.next().then(function (next) {
	            return next !== _key2.default.SENTINEL ? paths.get(next) : _key2.default.SENTINEL;
	        });
	        return tree.get(head).then(function (state) {
	            return state.next(tail);
	        }).then(function (next) {
	            return next !== _key2.default.SENTINEL ? [head, next] : paths.next(head).then(function (next) {
	                return next !== _key2.default.SENTINEL ? paths.get(next) : _key2.default.SENTINEL;
	            });
	        });
	    }
	    Tree.next = next;
	})(Tree || (exports.Tree = Tree = {}));
	exports.default = Tree;
	//# sourceMappingURL=tree.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvdHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksU0FBUyxHQUFHLEFBQUMsYUFBUSxVQUFLLFNBQVMsSUFBSyxVQUFVLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUMzRixXQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMxQyxpQkFBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFBRSxtQkFBTyxLQUFLLFlBQVksT0FBTyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUFFLHVCQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLENBQUM7U0FBRTtBQUN4SixpQkFBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQUUsZ0JBQUk7QUFBRSxvQkFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFBRSxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FBRTtBQUNuRixpQkFBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQUUsZ0JBQUk7QUFBRSxvQkFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFBRSxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FBRTtBQUNuRixpQkFBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUN2QixnQkFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtC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RyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7dUJBQUksSUFBSSxLQUFLLGNBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBSSxRQUFRO2FBQUEsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNuSjtBQUNELFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ3BCLENBQUEsQ0FBRSxJQUFJLGFBekJJLElBQUksR0F5QkgsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7a0JBQ1QsSUFBSSIsImZpbGUiOiJ0cmVlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUHJvbWlzZSwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwodGhpc0FyZywgX2FyZ3VtZW50cyk7XG4gICAgICAgIGZ1bmN0aW9uIGNhc3QodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSA/IHZhbHVlIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgICAgIGZ1bmN0aW9uIG9uZnVsZmlsbCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gb25yZWplY3QodmFsdWUpIHsgdHJ5IHsgc3RlcChcInRocm93XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHZlcmIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW3ZlcmJdKHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogY2FzdChyZXN1bHQudmFsdWUpLnRoZW4ob25mdWxmaWxsLCBvbnJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcChcIm5leHRcIiwgdm9pZCAwKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgS2V5IGZyb20gJy4va2V5JztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmV4cG9ydCB2YXIgUGF0aDtcbihmdW5jdGlvbiAoUGF0aCkge1xuICAgIGZ1bmN0aW9uIGhlYWQocGF0aCkge1xuICAgICAgICByZXR1cm4gcGF0aCA/IHBhdGhbMF0gOiBLZXkuU0VOVElORUw7XG4gICAgfVxuICAgIFBhdGguaGVhZCA9IGhlYWQ7XG4gICAgZnVuY3Rpb24gdGFpbChwYXRoKSB7XG4gICAgICAgIHJldHVybiBwYXRoID8gcGF0aFsxXSA6IEtleS5TRU5USU5FTDtcbiAgICB9XG4gICAgUGF0aC50YWlsID0gdGFpbDtcbn0pKFBhdGggfHwgKFBhdGggPSB7fSkpO1xuZXhwb3J0IHZhciBUcmVlO1xuKGZ1bmN0aW9uIChUcmVlKSB7XG4gICAgZnVuY3Rpb24gZ2V0KHRyZWUsIHBhdGgpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBQYXRoLmhlYWQocGF0aCksIHRhaWwgPSBQYXRoLnRhaWwocGF0aCk7XG4gICAgICAgIHJldHVybiB0cmVlLmdldChoZWFkKS50aGVuKHN0YXRlID0+IHN0YXRlLmdldCh0YWlsKSk7XG4gICAgfVxuICAgIFRyZWUuZ2V0ID0gZ2V0O1xuICAgIGZ1bmN0aW9uIHByZXYodHJlZSwgcGF0aCkge1xuICAgICAgICB2YXIgaGVhZCA9IFBhdGguaGVhZChwYXRoKSwgdGFpbCA9IFBhdGgudGFpbChwYXRoKSwgcHJldnMgPSBTdGF0ZS5maWx0ZXIoU3RhdGUubWFwKHRyZWUsIHN0YXRlID0+IHN0YXRlLnByZXYoKSksIGZpcnN0ID0+IGZpcnN0ICE9PSBLZXkuU0VOVElORUwpLCBwYXRocyA9IFN0YXRlLm1hcChwcmV2cywgKGZpcnN0LCBrZXkpID0+IFtrZXksIGZpcnN0XSk7XG4gICAgICAgIGlmIChoZWFkID09PSBLZXkuU0VOVElORUwpXG4gICAgICAgICAgICByZXR1cm4gcGF0aHMucHJldigpLnRoZW4ocHJldiA9PiBwcmV2ICE9PSBLZXkuU0VOVElORUwgPyBwYXRocy5nZXQocHJldikgOiBLZXkuU0VOVElORUwpO1xuICAgICAgICByZXR1cm4gdHJlZS5nZXQoaGVhZClcbiAgICAgICAgICAgIC50aGVuKHN0YXRlID0+IHN0YXRlLnByZXYodGFpbCkpXG4gICAgICAgICAgICAudGhlbihwcmV2ID0+IHByZXYgIT09IEtleS5TRU5USU5FTCA/IFtoZWFkLCBwcmV2XSA6IHBhdGhzLnByZXYoaGVhZCkudGhlbihwcmV2ID0+IHByZXYgIT09IEtleS5TRU5USU5FTCA/IHBhdGhzLmdldChwcmV2KSA6IEtleS5TRU5USU5FTCkpO1xuICAgIH1cbiAgICBUcmVlLnByZXYgPSBwcmV2O1xuICAgIGZ1bmN0aW9uIG5leHQodHJlZSwgcGF0aCkge1xuICAgICAgICB2YXIgaGVhZCA9IFBhdGguaGVhZChwYXRoKSwgdGFpbCA9IFBhdGgudGFpbChwYXRoKSwgbmV4dHMgPSBTdGF0ZS5maWx0ZXIoU3RhdGUubWFwKHRyZWUsIHN0YXRlID0+IHN0YXRlLm5leHQoKSksIGZpcnN0ID0+IGZpcnN0ICE9PSBLZXkuU0VOVElORUwpLCBwYXRocyA9IFN0YXRlLm1hcChuZXh0cywgKGZpcnN0LCBrZXkpID0+IFtrZXksIGZpcnN0XSk7XG4gICAgICAgIGlmIChoZWFkID09PSBLZXkuU0VOVElORUwpXG4gICAgICAgICAgICByZXR1cm4gcGF0aHMubmV4dCgpLnRoZW4obmV4dCA9PiBuZXh0ICE9PSBLZXkuU0VOVElORUwgPyBwYXRocy5nZXQobmV4dCkgOiBLZXkuU0VOVElORUwpO1xuICAgICAgICByZXR1cm4gdHJlZS5nZXQoaGVhZClcbiAgICAgICAgICAgIC50aGVuKHN0YXRlID0+IHN0YXRlLm5leHQodGFpbCkpXG4gICAgICAgICAgICAudGhlbihuZXh0ID0+IG5leHQgIT09IEtleS5TRU5USU5FTCA/IFtoZWFkLCBuZXh0XSA6IHBhdGhzLm5leHQoaGVhZCkudGhlbihuZXh0ID0+IG5leHQgIT09IEtleS5TRU5USU5FTCA/IHBhdGhzLmdldChuZXh0KSA6IEtleS5TRU5USU5FTCkpO1xuICAgIH1cbiAgICBUcmVlLm5leHQgPSBuZXh0O1xufSkoVHJlZSB8fCAoVHJlZSA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJlZS5qcy5tYXAiXX0=

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Store = undefined;
	
	var _regenerator = __webpack_require__(18);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray2 = __webpack_require__(80);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _promise = __webpack_require__(48);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _key = __webpack_require__(78);
	
	var _key2 = _interopRequireDefault(_key);
	
	var _patch = __webpack_require__(99);
	
	var _patch2 = _interopRequireDefault(_patch);
	
	var _state = __webpack_require__(93);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _range = __webpack_require__(95);
	
	var _tree = __webpack_require__(97);
	
	var _observable = __webpack_require__(2);
	
	var _async_iterator = __webpack_require__(79);
	
	var _async_iterator2 = _interopRequireDefault(_async_iterator);
	
	var _exceptions = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var Store = exports.Store = undefined;
	(function (Store) {
	    function reverse(parent) {
	        function getState() {
	            return _state2.default.reverse(parent.state);
	        }
	        var dispatcher = _observable.Observable.map(parent.dispatcher, function (patch) {
	            return {
	                range: _range.Range.reverse(patch.range),
	                added: patch.added ? _state2.default.reverse(patch.added) : undefined
	            };
	        });
	        return create(getState(), dispatcher, getState);
	    }
	    Store.reverse = reverse;
	    function map(parent, mapFn) {
	        function getState() {
	            return _state2.default.map(parent.state, mapFn);
	        }
	        var dispatcher = _observable.Observable.map(parent.dispatcher, function (patch) {
	            return {
	                range: patch.range,
	                added: patch.added ? _state2.default.map(patch.added, mapFn) : undefined
	            };
	        });
	        return create(getState(), dispatcher, getState);
	    }
	    Store.map = map;
	    function filter(parent, filterFn) {
	        var _this = this;
	
	        var parentState = parent.state;
	        function getState() {
	            return _state2.default.filter(parent.state, filterFn);
	        }
	        function find(state, range) {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee() {
	                var _ref, _ref2, key;
	
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.prev = 0;
	                                _context.next = 3;
	                                return _async_iterator2.default.find(_state2.default.entries(state, range), function (_ref3) {
	                                    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
	
	                                    var key = _ref4[0];
	                                    var value = _ref4[1];
	                                    return filterFn(value, key);
	                                });
	
	                            case 3:
	                                _ref = _context.sent;
	                                _ref2 = (0, _slicedToArray3.default)(_ref, 1);
	                                key = _ref2[0];
	                                return _context.abrupt("return", key);
	
	                            case 9:
	                                _context.prev = 9;
	                                _context.t0 = _context["catch"](0);
	
	                                if (!(_context.t0 instanceof _exceptions.NotFound)) {
	                                    _context.next = 13;
	                                    break;
	                                }
	
	                                return _context.abrupt("return", _key2.default.SENTINEL);
	
	                            case 13:
	                                throw _context.t0;
	
	                            case 14:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this, [[0, 9]]);
	            }));
	        }
	        function move(state, range) {
	            return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee2() {
	                var deleted, position;
	                return _regenerator2.default.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                deleted = _state2.default.slice(_state2.default.reverse(state), _range.Range.reverse(range)), position = range[1];
	
	                                if (!_range.Position.isNextPosition(position)) {
	                                    _context2.next = 11;
	                                    break;
	                                }
	
	                                _context2.next = 4;
	                                return _state2.default.empty(deleted);
	
	                            case 4:
	                                if (_context2.sent) {
	                                    _context2.next = 9;
	                                    break;
	                                }
	
	                                _context2.next = 7;
	                                return find(deleted, _range.Range.all);
	
	                            case 7:
	                                _context2.t0 = _context2.sent;
	                                return _context2.abrupt("return", {
	                                    next: _context2.t0
	                                });
	
	                            case 9:
	                                if (!(position.next === _key2.default.SENTINEL)) {
	                                    _context2.next = 11;
	                                    break;
	                                }
	
	                                return _context2.abrupt("return", { next: _key2.default.SENTINEL });
	
	                            case 11:
	                                _context2.next = 13;
	                                return find(state, [position, { next: _key2.default.SENTINEL }]);
	
	                            case 13:
	                                _context2.t1 = _context2.sent;
	                                return _context2.abrupt("return", {
	                                    prev: _context2.t1
	                                });
	
	                            case 15:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	        var dispatcher = _observable.Observable.map(parent.dispatcher, function (patch) {
	            return __awaiter(_this, void 0, _promise2.default, _regenerator2.default.mark(function _callee3() {
	                var range;
	                return _regenerator2.default.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                _context3.next = 2;
	                                return _promise2.default.all([move(_state2.default.reverse(parentState), _range.Range.reverse(patch.range)).then(_range.Position.reverse), move(parentState, patch.range)]);
	
	                            case 2:
	                                range = _context3.sent;
	
	                                parentState = parent.state;
	                                return _context3.abrupt("return", {
	                                    range: range,
	                                    added: patch.added ? _state2.default.filter(patch.added, filterFn) : undefined
	                                });
	
	                            case 5:
	                            case "end":
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        });
	        return create(getState(), dispatcher, getState);
	    }
	    Store.filter = filter;
	    function zoom(parent, key) {
	        var parentState = parent.state;
	        function getState() {
	            return _state2.default.zoom(parent.state, key);
	        }
	        var dispatcher = _observable.Observable.map(_observable.Observable.filter(parent.dispatcher, function (patch) {
	            return _state2.default.has(_state2.default.slice(parentState, patch.range), key);
	        }), function (patch) {
	            parentState = parent.state;
	            return {
	                range: _range.Range.all,
	                added: patch.added ? _state2.default.zoom(patch.added, key) : undefined
	            };
	        });
	        return create(getState(), dispatcher, getState);
	    }
	    Store.zoom = zoom;
	    function flatten(parent) {
	        var dispatcher_ = _observable.Subject.create();
	        var parent_ = cache(map(parent, function (store, key) {
	            _observable.Observable.map(store.dispatcher, function (patch) {
	                var from = patch.range[0],
	                    to = patch.range[1];
	                function mapPrevPosition(position) {
	                    if (position.prev === _key2.default.SENTINEL) return store.state.prev(_key2.default.SENTINEL).then(function (next) {
	                        return { next: [key, next] };
	                    });
	                    return _promise2.default.resolve({ prev: [key, position.prev] });
	                }
	                function mapNextPosition(position) {
	                    if (position.next === _key2.default.SENTINEL) return store.state.next(_key2.default.SENTINEL).then(function (prev) {
	                        return { prev: [key, prev] };
	                    });
	                    return _promise2.default.resolve({ next: [key, position.next] });
	                }
	                return _promise2.default.all([_range.Position.isNextPosition(from) ? mapNextPosition(from) : mapPrevPosition(from), _range.Position.isNextPosition(to) ? mapNextPosition(to) : mapPrevPosition(to)]).then(function (range) {
	                    return { range: range, added: patch.added ? patch.added : undefined };
	                });
	            }).subscribe(dispatcher_);
	            return store.state;
	        }));
	        _observable.Observable.map(parent.dispatcher, function (patch) {
	            var from = patch.range[0],
	                to = patch.range[1];
	            function mapPrevPosition(position) {
	                return position.prev === _key2.default.SENTINEL ? _promise2.default.resolve({ prev: _key2.default.SENTINEL }) : _tree.Tree.next(parent_.state, [position.prev, null]).then(function (prev) {
	                    return { prev: prev };
	                });
	            }
	            function mapNextPosition(position) {
	                return position.next === _key2.default.SENTINEL ? _promise2.default.resolve({ next: _key2.default.SENTINEL }) : _tree.Tree.prev(parent_.state, [position.next, null]).then(function (next) {
	                    return { next: next };
	                });
	            }
	            return _promise2.default.all([_range.Position.isNextPosition(from) ? mapNextPosition(from) : mapPrevPosition(from), _range.Position.isNextPosition(to) ? mapNextPosition(to) : mapPrevPosition(to)]).then(function (range) {
	                return { range: range, added: patch.added ? _state2.default.flatten(_state2.default.map(patch.added, function (store) {
	                        return store.state;
	                    })) : undefined };
	            });
	        }).subscribe(dispatcher_);
	        var state = _state2.default.flatten(parent_.state);
	        function getState() {
	            return _state2.default.flatten(parent_.state);
	        }
	        return create(getState(), dispatcher_, getState);
	    }
	    Store.flatten = flatten;
	    function flatMap(parent, mapFn) {
	        return Store.flatten(Store.map(parent, mapFn));
	    }
	    Store.flatMap = flatMap;
	    function keyBy(parent, keyFn, reverseKeyFn) {
	        var _this2 = this;
	
	        var state = _state2.default.keyBy(parent.state, keyFn, reverseKeyFn),
	            parentState = parent.state,
	            dispatcher = _observable.Observable.map(parent.dispatcher, function (patch) {
	            return __awaiter(_this2, void 0, _promise2.default, _regenerator2.default.mark(function _callee5() {
	                var _patch$range, from, to, mapPosition, range;
	
	                return _regenerator2.default.wrap(function _callee5$(_context5) {
	                    while (1) {
	                        switch (_context5.prev = _context5.next) {
	                            case 0:
	                                mapPosition = function mapPosition(position) {
	                                    return __awaiter(this, void 0, _promise2.default, _regenerator2.default.mark(function _callee4() {
	                                        return _regenerator2.default.wrap(function _callee4$(_context4) {
	                                            while (1) {
	                                                switch (_context4.prev = _context4.next) {
	                                                    case 0:
	                                                        if (!_range.Position.isPrevPosition(position)) {
	                                                            _context4.next = 13;
	                                                            break;
	                                                        }
	
	                                                        if (!(position.prev === _key2.default.SENTINEL)) {
	                                                            _context4.next = 3;
	                                                            break;
	                                                        }
	
	                                                        return _context4.abrupt("return", { prev: _key2.default.SENTINEL });
	
	                                                    case 3:
	                                                        _context4.next = 5;
	                                                        return parentState.get(position.prev);
	
	                                                    case 5:
	                                                        _context4.t0 = _context4.sent;
	                                                        _context4.t1 = position.prev;
	                                                        _context4.next = 9;
	                                                        return keyFn(_context4.t0, _context4.t1);
	
	                                                    case 9:
	                                                        _context4.t2 = _context4.sent;
	                                                        return _context4.abrupt("return", {
	                                                            prev: _context4.t2
	                                                        });
	
	                                                    case 13:
	                                                        if (!(position.next === _key2.default.SENTINEL)) {
	                                                            _context4.next = 15;
	                                                            break;
	                                                        }
	
	                                                        return _context4.abrupt("return", { next: _key2.default.SENTINEL });
	
	                                                    case 15:
	                                                        _context4.next = 17;
	                                                        return parentState.get(position.next);
	
	                                                    case 17:
	                                                        _context4.t3 = _context4.sent;
	                                                        _context4.t4 = position.next;
	                                                        _context4.next = 21;
	                                                        return keyFn(_context4.t3, _context4.t4);
	
	                                                    case 21:
	                                                        _context4.t5 = _context4.sent;
	                                                        return _context4.abrupt("return", {
	                                                            next: _context4.t5
	                                                        });
	
	                                                    case 23:
	                                                    case "end":
	                                                        return _context4.stop();
	                                                }
	                                            }
	                                        }, _callee4, this);
	                                    }));
	                                };
	
	                                _patch$range = (0, _slicedToArray3.default)(patch.range, 2);
	                                from = _patch$range[0];
	                                to = _patch$range[1];
	                                _context5.next = 6;
	                                return _promise2.default.all([mapPosition(from), mapPosition(to)]);
	
	                            case 6:
	                                range = _context5.sent;
	
	                                parentState = parent.state;
	                                return _context5.abrupt("return", { range: range, added: patch.added ? _state2.default.keyBy(patch.added, keyFn) : undefined });
	
	                            case 9:
	                            case "end":
	                                return _context5.stop();
	                        }
	                    }
	                }, _callee5, this);
	            }));
	        });
	        return create(state, dispatcher);
	    }
	    Store.keyBy = keyBy;
	    function scan(parent, scanFn, memo) {
	        var _this3 = this;
	
	        function getState() {
	            return _state2.default.scan(parent.state, scanFn, memo);
	        }
	        var store,
	            dispatcher = _observable.Observable.map(parent.dispatcher, function (patch) {
	            return __awaiter(_this3, void 0, _promise2.default, _regenerator2.default.mark(function _callee7() {
	                var _this4 = this;
	
	                var parentState, storeState, _patch$range2, from, to, added;
	
	                return _regenerator2.default.wrap(function _callee7$(_context7) {
	                    while (1) {
	                        switch (_context7.prev = _context7.next) {
	                            case 0:
	                                parentState = parent.state;
	                                storeState = store.state;
	                                _patch$range2 = (0, _slicedToArray3.default)(patch.range, 2);
	                                from = _patch$range2[0];
	                                to = _patch$range2[1];
	                                added = _state2.default.lazy(function () {
	                                    return __awaiter(_this4, void 0, _promise2.default, _regenerator2.default.mark(function _callee6() {
	                                        var last;
	                                        return _regenerator2.default.wrap(function _callee6$(_context6) {
	                                            while (1) {
	                                                switch (_context6.prev = _context6.next) {
	                                                    case 0:
	                                                        _context6.next = 2;
	                                                        return _state2.default.last(storeState, [{ next: null }, from]);
	
	                                                    case 2:
	                                                        last = _context6.sent;
	                                                        _context6.t0 = _state2.default;
	                                                        _context6.t1 = _state2.default.slice(parentState, [{ next: last }, { prev: null }]);
	                                                        _context6.t2 = scanFn;
	
	                                                        if (!(last !== _key2.default.SENTINEL)) {
	                                                            _context6.next = 12;
	                                                            break;
	                                                        }
	
	                                                        _context6.next = 9;
	                                                        return storeState.get(last);
	
	                                                    case 9:
	                                                        _context6.t3 = _context6.sent;
	                                                        _context6.next = 13;
	                                                        break;
	
	                                                    case 12:
	                                                        _context6.t3 = memo;
	
	                                                    case 13:
	                                                        _context6.t4 = _context6.t3;
	                                                        return _context6.abrupt("return", _context6.t0.scan.call(_context6.t0, _context6.t1, _context6.t2, _context6.t4));
	
	                                                    case 15:
	                                                    case "end":
	                                                        return _context6.stop();
	                                                }
	                                            }
	                                        }, _callee6, this);
	                                    }));
	                                });
	                                return _context7.abrupt("return", { range: [from, { prev: null }], added: added });
	
	                            case 7:
	                            case "end":
	                                return _context7.stop();
	                        }
	                    }
	                }, _callee7, this);
	            }));
	        });
	        return store = create(getState(), dispatcher);
	    }
	    Store.scan = scan;
	    function take(parent, count) {
	        var _this5 = this;
	
	        var store,
	            state = _state2.default.take(parent.state, count);
	        var indexed = Store.scan(parent, function (_ref5, value) {
	            var _ref6 = (0, _slicedToArray3.default)(_ref5, 1);
	
	            var index = _ref6[0];
	            return [index + 1, value];
	        }, [-1, null]);
	        var dispatcher = _observable.Observable.map(indexed.dispatcher, function (patch) {
	            return __awaiter(_this5, void 0, _promise2.default, _regenerator2.default.mark(function _callee8() {
	                var _patch$range3, from, parentState, indexedState, key, index;
	
	                return _regenerator2.default.wrap(function _callee8$(_context8) {
	                    while (1) {
	                        switch (_context8.prev = _context8.next) {
	                            case 0:
	                                _patch$range3 = (0, _slicedToArray3.default)(patch.range, 1);
	                                from = _patch$range3[0];
	                                parentState = parent.state;
	                                indexedState = indexed.state;
	                                _context8.next = 6;
	                                return _state2.default.last(indexedState, [{ next: null }, from]);
	
	                            case 6:
	                                key = _context8.sent;
	
	                                if (!(key === _key2.default.SENTINEL)) {
	                                    _context8.next = 11;
	                                    break;
	                                }
	
	                                _context8.t0 = -1;
	                                _context8.next = 14;
	                                break;
	
	                            case 11:
	                                _context8.next = 13;
	                                return indexedState.get(key);
	
	                            case 13:
	                                _context8.t0 = _context8.sent[0];
	
	                            case 14:
	                                index = _context8.t0;
	                                return _context8.abrupt("return", {
	                                    range: patch.range,
	                                    added: _state2.default.take(_state2.default.map(patch.added, function (_ref7) {
	                                        var _ref8 = (0, _slicedToArray3.default)(_ref7, 2);
	
	                                        var index = _ref8[0];
	                                        var value = _ref8[1];
	                                        return value;
	                                    }), count - (index + 1))
	                                });
	
	                            case 16:
	                            case "end":
	                                return _context8.stop();
	                        }
	                    }
	                }, _callee8, this);
	            }));
	        });
	        return create(state, dispatcher);
	    }
	    Store.take = take;
	    function cache(parent) {
	        return Store.create(_state2.default.cache(parent.state), parent.dispatcher, function (state, patch) {
	            return _state2.default.cache(_patch2.default.apply(state, patch));
	        });
	    }
	    Store.cache = cache;
	    function states(store) {
	        return _observable.Observable.map(store.dispatcher, function () {
	            return store.state;
	        });
	    }
	    Store.states = states;
	    function create(state, dispatcher) {
	        var _this6 = this;
	
	        var reducer = arguments.length <= 2 || arguments[2] === undefined ? _patch2.default.apply : arguments[2];
	
	        var subject = _observable.Subject.create();
	        dispatcher.subscribe({
	            onNext: function onNext(patch) {
	                return __awaiter(_this6, void 0, _promise2.default, _regenerator2.default.mark(function _callee9() {
	                    return _regenerator2.default.wrap(function _callee9$(_context9) {
	                        while (1) {
	                            switch (_context9.prev = _context9.next) {
	                                case 0:
	                                    _context9.next = 2;
	                                    return reducer(store.state, patch);
	
	                                case 2:
	                                    store.state = _context9.sent;
	                                    return _context9.abrupt("return", subject.onNext(patch));
	
	                                case 4:
	                                case "end":
	                                    return _context9.stop();
	                            }
	                        }
	                    }, _callee9, this);
	                }));
	            }
	        });
	        var store = {
	            state: state,
	            dispatcher: {
	                subscribe: subject.subscribe,
	                onNext: _observable.Subject.isSubject(dispatcher) ? dispatcher.onNext : undefined
	            }
	        };
	        return store;
	    }
	    Store.create = create;
	})(Store || (exports.Store = Store = {}));
	exports.default = Store;
	//# sourceMappingURL=store.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3Qvc3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxTQUFTLEdBQUcsQUFBQyxhQUFRLFVBQUssU0FBUyxJQUFLLFVBQVUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQzNGLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzFDLGlCQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUFFLG1CQUFPLEtBQUssWUFBWSxPQUFPLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQUUsdUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUFFO0FBQ3hKLGlCQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3ZCLGdCQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFD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QUcsZ0JBQU0sS0FBSzs7QUFDcEQsWUFBSSxPQUFPLEdBQUcsWUF4TUQsT0FBTyxDQXdNRSxNQUFNLEVBQUUsQ0FBQztBQUMvQixrQkFBVSxDQUFDLFNBQVMsQ0FBQztBQUNqQixrQkFBTSxFQUFFLGdCQUFDLEtBQUs7dUJBQUssU0FBUyxTQUFPLEtBQUssQ0FBQyxnREFBVzs7Ozs7OzJDQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7OztBQUEvQyx5Q0FBSyxDQUFDLEtBQUs7c0VBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7O2lCQUMvQixFQUFDO2FBQUE7U0FDTCxDQUFDLENBQUM7QUFDSCxZQUFNLEtBQUssR0FBRztBQUNWLGlCQUFLLEVBQUwsS0FBSztBQUNMLHNCQUFVLEVBQUU7QUFDUix5QkFBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO0FBQzVCLHNCQUFNLEVBQUUsWUFuTkgsT0FBTyxDQW1OSSxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTO2FBQ3hFO1NBQ0osQ0FBQztBQUNGLGVBQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0QsU0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDekIsQ0FBQSxDQUFFLEtBQUssYUF0TkcsS0FBSyxHQXNOSCxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztrQkFDWCxLQUFLIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUHJvbWlzZSwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwodGhpc0FyZywgX2FyZ3VtZW50cyk7XG4gICAgICAgIGZ1bmN0aW9uIGNhc3QodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSA/IHZhbHVlIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgICAgIGZ1bmN0aW9uIG9uZnVsZmlsbCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gb25yZWplY3QodmFsdWUpIHsgdHJ5IHsgc3RlcChcInRocm93XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHZlcmIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW3ZlcmJdKHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogY2FzdChyZXN1bHQudmFsdWUpLnRoZW4ob25mdWxmaWxsLCBvbnJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcChcIm5leHRcIiwgdm9pZCAwKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgS2V5IGZyb20gJy4va2V5JztcbmltcG9ydCBQYXRjaCBmcm9tICcuL3BhdGNoJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IFJhbmdlLCBQb3NpdGlvbiB9IGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gJy4vdHJlZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAnLi9vYnNlcnZhYmxlJztcbmltcG9ydCBBc3luY0l0ZXJhdG9yIGZyb20gJy4vYXN5bmNfaXRlcmF0b3InO1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tICcuL2V4Y2VwdGlvbnMnO1xuZXhwb3J0IHZhciBTdG9yZTtcbihmdW5jdGlvbiAoU3RvcmUpIHtcbiAgICBmdW5jdGlvbiByZXZlcnNlKHBhcmVudCkge1xuICAgICAgICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZS5yZXZlcnNlKHBhcmVudC5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlciA9IE9ic2VydmFibGUubWFwKHBhcmVudC5kaXNwYXRjaGVyLCBwYXRjaCA9PiAoe1xuICAgICAgICAgICAgcmFuZ2U6IFJhbmdlLnJldmVyc2UocGF0Y2gucmFuZ2UpLFxuICAgICAgICAgICAgYWRkZWQ6IHBhdGNoLmFkZGVkID8gU3RhdGUucmV2ZXJzZShwYXRjaC5hZGRlZCkgOiB1bmRlZmluZWRcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gY3JlYXRlKGdldFN0YXRlKCksIGRpc3BhdGNoZXIsIGdldFN0YXRlKTtcbiAgICB9XG4gICAgU3RvcmUucmV2ZXJzZSA9IHJldmVyc2U7XG4gICAgZnVuY3Rpb24gbWFwKHBhcmVudCwgbWFwRm4pIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RhdGUubWFwKHBhcmVudC5zdGF0ZSwgbWFwRm4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoZXIgPSBPYnNlcnZhYmxlLm1hcChwYXJlbnQuZGlzcGF0Y2hlciwgcGF0Y2ggPT4gKHtcbiAgICAgICAgICAgIHJhbmdlOiBwYXRjaC5yYW5nZSxcbiAgICAgICAgICAgIGFkZGVkOiBwYXRjaC5hZGRlZCA/IFN0YXRlLm1hcChwYXRjaC5hZGRlZCwgbWFwRm4pIDogdW5kZWZpbmVkXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShnZXRTdGF0ZSgpLCBkaXNwYXRjaGVyLCBnZXRTdGF0ZSk7XG4gICAgfVxuICAgIFN0b3JlLm1hcCA9IG1hcDtcbiAgICBmdW5jdGlvbiBmaWx0ZXIocGFyZW50LCBmaWx0ZXJGbikge1xuICAgICAgICB2YXIgcGFyZW50U3RhdGUgPSBwYXJlbnQuc3RhdGU7XG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0YXRlLmZpbHRlcihwYXJlbnQuc3RhdGUsIGZpbHRlckZuKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmaW5kKHN0YXRlLCByYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFtrZXldID0geWllbGQgQXN5bmNJdGVyYXRvci5maW5kKFN0YXRlLmVudHJpZXMoc3RhdGUsIHJhbmdlKSwgKFtrZXksIHZhbHVlXSkgPT4gZmlsdGVyRm4odmFsdWUsIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm90Rm91bmQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gS2V5LlNFTlRJTkVMO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtb3ZlKHN0YXRlLCByYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlbGV0ZWQgPSBTdGF0ZS5zbGljZShTdGF0ZS5yZXZlcnNlKHN0YXRlKSwgUmFuZ2UucmV2ZXJzZShyYW5nZSkpLCBwb3NpdGlvbiA9IHJhbmdlWzFdO1xuICAgICAgICAgICAgICAgIGlmIChQb3NpdGlvbi5pc05leHRQb3NpdGlvbihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoeWllbGQgU3RhdGUuZW1wdHkoZGVsZXRlZCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmV4dDogeWllbGQgZmluZChkZWxldGVkLCBSYW5nZS5hbGwpIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi5uZXh0ID09PSBLZXkuU0VOVElORUwpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuZXh0OiBLZXkuU0VOVElORUwgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJldjogeWllbGQgZmluZChzdGF0ZSwgW3Bvc2l0aW9uLCB7IG5leHQ6IEtleS5TRU5USU5FTCB9XSkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXNwYXRjaGVyID0gT2JzZXJ2YWJsZS5tYXAocGFyZW50LmRpc3BhdGNoZXIsIChwYXRjaCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciByYW5nZSA9ICh5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgbW92ZShTdGF0ZS5yZXZlcnNlKHBhcmVudFN0YXRlKSwgUmFuZ2UucmV2ZXJzZShwYXRjaC5yYW5nZSkpLnRoZW4oUG9zaXRpb24ucmV2ZXJzZSksXG4gICAgICAgICAgICAgICAgbW92ZShwYXJlbnRTdGF0ZSwgcGF0Y2gucmFuZ2UpXG4gICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICBwYXJlbnRTdGF0ZSA9IHBhcmVudC5zdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgICAgICAgICAgIGFkZGVkOiBwYXRjaC5hZGRlZCA/IFN0YXRlLmZpbHRlcihwYXRjaC5hZGRlZCwgZmlsdGVyRm4pIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBjcmVhdGUoZ2V0U3RhdGUoKSwgZGlzcGF0Y2hlciwgZ2V0U3RhdGUpO1xuICAgIH1cbiAgICBTdG9yZS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgZnVuY3Rpb24gem9vbShwYXJlbnQsIGtleSkge1xuICAgICAgICB2YXIgcGFyZW50U3RhdGUgPSBwYXJlbnQuc3RhdGU7XG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0YXRlLnpvb20ocGFyZW50LnN0YXRlLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoZXIgPSBPYnNlcnZhYmxlLm1hcChPYnNlcnZhYmxlLmZpbHRlcihwYXJlbnQuZGlzcGF0Y2hlciwgcGF0Y2ggPT4gU3RhdGUuaGFzKFN0YXRlLnNsaWNlKHBhcmVudFN0YXRlLCBwYXRjaC5yYW5nZSksIGtleSkpLCBwYXRjaCA9PiB7XG4gICAgICAgICAgICBwYXJlbnRTdGF0ZSA9IHBhcmVudC5zdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IFJhbmdlLmFsbCxcbiAgICAgICAgICAgICAgICBhZGRlZDogcGF0Y2guYWRkZWQgPyBTdGF0ZS56b29tKHBhdGNoLmFkZGVkLCBrZXkpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShnZXRTdGF0ZSgpLCBkaXNwYXRjaGVyLCBnZXRTdGF0ZSk7XG4gICAgfVxuICAgIFN0b3JlLnpvb20gPSB6b29tO1xuICAgIGZ1bmN0aW9uIGZsYXR0ZW4ocGFyZW50KSB7XG4gICAgICAgIHZhciBkaXNwYXRjaGVyXyA9IFN1YmplY3QuY3JlYXRlKCk7XG4gICAgICAgIHZhciBwYXJlbnRfID0gY2FjaGUobWFwKHBhcmVudCwgKHN0b3JlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIE9ic2VydmFibGUubWFwKHN0b3JlLmRpc3BhdGNoZXIsIHBhdGNoID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbSA9IHBhdGNoLnJhbmdlWzBdLCB0byA9IHBhdGNoLnJhbmdlWzFdO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1hcFByZXZQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ucHJldiA9PT0gS2V5LlNFTlRJTkVMKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLnN0YXRlLnByZXYoS2V5LlNFTlRJTkVMKS50aGVuKG5leHQgPT4gKHsgbmV4dDogW2tleSwgbmV4dF0gfSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgcHJldjogW2tleSwgcG9zaXRpb24ucHJldl0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1hcE5leHRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ubmV4dCA9PT0gS2V5LlNFTlRJTkVMKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLnN0YXRlLm5leHQoS2V5LlNFTlRJTkVMKS50aGVuKHByZXYgPT4gKHsgcHJldjogW2tleSwgcHJldl0gfSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgbmV4dDogW2tleSwgcG9zaXRpb24ubmV4dF0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIFBvc2l0aW9uLmlzTmV4dFBvc2l0aW9uKGZyb20pID8gbWFwTmV4dFBvc2l0aW9uKGZyb20pIDogbWFwUHJldlBvc2l0aW9uKGZyb20pLFxuICAgICAgICAgICAgICAgICAgICBQb3NpdGlvbi5pc05leHRQb3NpdGlvbih0bykgPyBtYXBOZXh0UG9zaXRpb24odG8pIDogbWFwUHJldlBvc2l0aW9uKHRvKVxuICAgICAgICAgICAgICAgIF0pLnRoZW4oKHJhbmdlKSA9PiAoeyByYW5nZTogcmFuZ2UsIGFkZGVkOiBwYXRjaC5hZGRlZCA/IHBhdGNoLmFkZGVkIDogdW5kZWZpbmVkIH0pKTtcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZShkaXNwYXRjaGVyXyk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuc3RhdGU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgT2JzZXJ2YWJsZS5tYXAocGFyZW50LmRpc3BhdGNoZXIsIHBhdGNoID0+IHtcbiAgICAgICAgICAgIHZhciBmcm9tID0gcGF0Y2gucmFuZ2VbMF0sIHRvID0gcGF0Y2gucmFuZ2VbMV07XG4gICAgICAgICAgICBmdW5jdGlvbiBtYXBQcmV2UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb24ucHJldiA9PT0gS2V5LlNFTlRJTkVMID8gUHJvbWlzZS5yZXNvbHZlKHsgcHJldjogS2V5LlNFTlRJTkVMIH0pIDogVHJlZS5uZXh0KHBhcmVudF8uc3RhdGUsIFtwb3NpdGlvbi5wcmV2LCBudWxsXSkudGhlbihwcmV2ID0+ICh7IHByZXYgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gbWFwTmV4dFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uLm5leHQgPT09IEtleS5TRU5USU5FTCA/IFByb21pc2UucmVzb2x2ZSh7IG5leHQ6IEtleS5TRU5USU5FTCB9KSA6IFRyZWUucHJldihwYXJlbnRfLnN0YXRlLCBbcG9zaXRpb24ubmV4dCwgbnVsbF0pLnRoZW4obmV4dCA9PiAoeyBuZXh0IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgUG9zaXRpb24uaXNOZXh0UG9zaXRpb24oZnJvbSkgPyBtYXBOZXh0UG9zaXRpb24oZnJvbSkgOiBtYXBQcmV2UG9zaXRpb24oZnJvbSksXG4gICAgICAgICAgICAgICAgUG9zaXRpb24uaXNOZXh0UG9zaXRpb24odG8pID8gbWFwTmV4dFBvc2l0aW9uKHRvKSA6IG1hcFByZXZQb3NpdGlvbih0bylcbiAgICAgICAgICAgIF0pLnRoZW4oKHJhbmdlKSA9PiAoeyByYW5nZTogcmFuZ2UsIGFkZGVkOiBwYXRjaC5hZGRlZCA/IFN0YXRlLmZsYXR0ZW4oU3RhdGUubWFwKHBhdGNoLmFkZGVkLCBzdG9yZSA9PiBzdG9yZS5zdGF0ZSkpIDogdW5kZWZpbmVkIH0pKTtcbiAgICAgICAgfSkuc3Vic2NyaWJlKGRpc3BhdGNoZXJfKTtcbiAgICAgICAgdmFyIHN0YXRlID0gU3RhdGUuZmxhdHRlbihwYXJlbnRfLnN0YXRlKTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RhdGUuZmxhdHRlbihwYXJlbnRfLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlKGdldFN0YXRlKCksIGRpc3BhdGNoZXJfLCBnZXRTdGF0ZSk7XG4gICAgfVxuICAgIFN0b3JlLmZsYXR0ZW4gPSBmbGF0dGVuO1xuICAgIGZ1bmN0aW9uIGZsYXRNYXAocGFyZW50LCBtYXBGbikge1xuICAgICAgICByZXR1cm4gU3RvcmUuZmxhdHRlbihTdG9yZS5tYXAocGFyZW50LCBtYXBGbikpO1xuICAgIH1cbiAgICBTdG9yZS5mbGF0TWFwID0gZmxhdE1hcDtcbiAgICBmdW5jdGlvbiBrZXlCeShwYXJlbnQsIGtleUZuLCByZXZlcnNlS2V5Rm4pIHtcbiAgICAgICAgdmFyIHN0YXRlID0gU3RhdGUua2V5QnkocGFyZW50LnN0YXRlLCBrZXlGbiwgcmV2ZXJzZUtleUZuKSwgcGFyZW50U3RhdGUgPSBwYXJlbnQuc3RhdGUsIGRpc3BhdGNoZXIgPSBPYnNlcnZhYmxlLm1hcChwYXJlbnQuZGlzcGF0Y2hlciwgKHBhdGNoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIFtmcm9tLCB0b10gPSBwYXRjaC5yYW5nZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hcFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChQb3NpdGlvbi5pc1ByZXZQb3NpdGlvbihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi5wcmV2ID09PSBLZXkuU0VOVElORUwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJldjogS2V5LlNFTlRJTkVMIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwcmV2OiB5aWVsZCBrZXlGbih5aWVsZCBwYXJlbnRTdGF0ZS5nZXQocG9zaXRpb24ucHJldiksIHBvc2l0aW9uLnByZXYpIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ubmV4dCA9PT0gS2V5LlNFTlRJTkVMKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5leHQ6IEtleS5TRU5USU5FTCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmV4dDogeWllbGQga2V5Rm4oeWllbGQgcGFyZW50U3RhdGUuZ2V0KHBvc2l0aW9uLm5leHQpLCBwb3NpdGlvbi5uZXh0KSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSAoeWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIG1hcFBvc2l0aW9uKGZyb20pLFxuICAgICAgICAgICAgICAgIG1hcFBvc2l0aW9uKHRvKVxuICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgcGFyZW50U3RhdGUgPSBwYXJlbnQuc3RhdGU7XG4gICAgICAgICAgICByZXR1cm4geyByYW5nZSwgYWRkZWQ6IHBhdGNoLmFkZGVkID8gU3RhdGUua2V5QnkocGF0Y2guYWRkZWQsIGtleUZuKSA6IHVuZGVmaW5lZCB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBjcmVhdGUoc3RhdGUsIGRpc3BhdGNoZXIpO1xuICAgIH1cbiAgICBTdG9yZS5rZXlCeSA9IGtleUJ5O1xuICAgIGZ1bmN0aW9uIHNjYW4ocGFyZW50LCBzY2FuRm4sIG1lbW8pIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RhdGUuc2NhbihwYXJlbnQuc3RhdGUsIHNjYW5GbiwgbWVtbyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlLCBkaXNwYXRjaGVyID0gT2JzZXJ2YWJsZS5tYXAocGFyZW50LmRpc3BhdGNoZXIsIChwYXRjaCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRTdGF0ZSA9IHBhcmVudC5zdGF0ZSwgc3RvcmVTdGF0ZSA9IHN0b3JlLnN0YXRlLCBbZnJvbSwgdG9dID0gcGF0Y2gucmFuZ2U7XG4gICAgICAgICAgICB2YXIgYWRkZWQgPSBTdGF0ZS5sYXp5KCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3QgPSB5aWVsZCBTdGF0ZS5sYXN0KHN0b3JlU3RhdGUsIFt7IG5leHQ6IG51bGwgfSwgZnJvbV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZS5zY2FuKFN0YXRlLnNsaWNlKHBhcmVudFN0YXRlLCBbeyBuZXh0OiBsYXN0IH0sIHsgcHJldjogbnVsbCB9XSksIHNjYW5GbiwgbGFzdCAhPT0gS2V5LlNFTlRJTkVMID8geWllbGQgc3RvcmVTdGF0ZS5nZXQobGFzdCkgOiBtZW1vKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB7IHJhbmdlOiBbZnJvbSwgeyBwcmV2OiBudWxsIH1dLCBhZGRlZCB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdG9yZSA9IGNyZWF0ZShnZXRTdGF0ZSgpLCBkaXNwYXRjaGVyKTtcbiAgICB9XG4gICAgU3RvcmUuc2NhbiA9IHNjYW47XG4gICAgZnVuY3Rpb24gdGFrZShwYXJlbnQsIGNvdW50KSB7XG4gICAgICAgIHZhciBzdG9yZSwgc3RhdGUgPSBTdGF0ZS50YWtlKHBhcmVudC5zdGF0ZSwgY291bnQpO1xuICAgICAgICB2YXIgaW5kZXhlZCA9IFN0b3JlLnNjYW4ocGFyZW50LCAoW2luZGV4XSwgdmFsdWUpID0+IFtpbmRleCArIDEsIHZhbHVlXSwgWy0xLCBudWxsXSk7XG4gICAgICAgIHZhciBkaXNwYXRjaGVyID0gT2JzZXJ2YWJsZS5tYXAoaW5kZXhlZC5kaXNwYXRjaGVyLCAocGF0Y2gpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgW2Zyb21dID0gcGF0Y2gucmFuZ2UsIHBhcmVudFN0YXRlID0gcGFyZW50LnN0YXRlLCBpbmRleGVkU3RhdGUgPSBpbmRleGVkLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGtleSA9IHlpZWxkIFN0YXRlLmxhc3QoaW5kZXhlZFN0YXRlLCBbeyBuZXh0OiBudWxsIH0sIGZyb21dKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGtleSA9PT0gS2V5LlNFTlRJTkVMID8gLTEgOiAoeWllbGQgaW5kZXhlZFN0YXRlLmdldChrZXkpKVswXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IHBhdGNoLnJhbmdlLFxuICAgICAgICAgICAgICAgIGFkZGVkOiBTdGF0ZS50YWtlKFN0YXRlLm1hcChwYXRjaC5hZGRlZCwgKFtpbmRleCwgdmFsdWVdKSA9PiB2YWx1ZSksIGNvdW50IC0gKGluZGV4ICsgMSkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBjcmVhdGUoc3RhdGUsIGRpc3BhdGNoZXIpO1xuICAgIH1cbiAgICBTdG9yZS50YWtlID0gdGFrZTtcbiAgICBmdW5jdGlvbiBjYWNoZShwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIFN0b3JlLmNyZWF0ZShTdGF0ZS5jYWNoZShwYXJlbnQuc3RhdGUpLCBwYXJlbnQuZGlzcGF0Y2hlciwgKHN0YXRlLCBwYXRjaCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFN0YXRlLmNhY2hlKFBhdGNoLmFwcGx5KHN0YXRlLCBwYXRjaCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgU3RvcmUuY2FjaGUgPSBjYWNoZTtcbiAgICBmdW5jdGlvbiBzdGF0ZXMoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUubWFwKHN0b3JlLmRpc3BhdGNoZXIsICgpID0+IHN0b3JlLnN0YXRlKTtcbiAgICB9XG4gICAgU3RvcmUuc3RhdGVzID0gc3RhdGVzO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZShzdGF0ZSwgZGlzcGF0Y2hlciwgcmVkdWNlciA9IFBhdGNoLmFwcGx5KSB7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gU3ViamVjdC5jcmVhdGUoKTtcbiAgICAgICAgZGlzcGF0Y2hlci5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgb25OZXh0OiAocGF0Y2gpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSB5aWVsZCByZWR1Y2VyKHN0b3JlLnN0YXRlLCBwYXRjaCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YmplY3Qub25OZXh0KHBhdGNoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdG9yZSA9IHtcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgZGlzcGF0Y2hlcjoge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZTogc3ViamVjdC5zdWJzY3JpYmUsXG4gICAgICAgICAgICAgICAgb25OZXh0OiBTdWJqZWN0LmlzU3ViamVjdChkaXNwYXRjaGVyKSA/IGRpc3BhdGNoZXIub25OZXh0IDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG4gICAgU3RvcmUuY3JlYXRlID0gY3JlYXRlO1xufSkoU3RvcmUgfHwgKFN0b3JlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmUuanMubWFwIl19

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Patch = undefined;
	
	var _state = __webpack_require__(93);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	
	;
	var Patch = exports.Patch = undefined;
	(function (Patch) {
	    function apply(state, patch) {
	        return _state2.default.splice(state, patch.range, patch.added);
	    }
	    Patch.apply = apply;
	    function add(value, key) {
	        var position = arguments.length <= 2 || arguments[2] === undefined ? { prev: null } : arguments[2];
	
	        return { added: _state2.default.unit(value, key), range: [position, position] };
	    }
	    Patch.add = add;
	    function set(value, key) {
	        return { added: _state2.default.unit(value, key), range: [{ prev: key }, { next: key }] };
	    }
	    Patch.set = set;
	    function push(value, key) {
	        return add(value, key, { prev: null });
	    }
	    Patch.push = push;
	    function unshift(value, key) {
	        return add(value, key, { next: null });
	    }
	    Patch.unshift = unshift;
	    function remove(key) {
	        return { range: [{ prev: key }, { next: key }] };
	    }
	    Patch.remove = remove;
	})(Patch || (exports.Patch = Patch = {}));
	exports.default = Patch;
	//# sourceMappingURL=patch.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvcGF0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksU0FBUyxHQUFHLEFBQUMsYUFBUSxVQUFLLFNBQVMsSUFBSyxVQUFVLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUMzRixXQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMxQyxpQkFBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFBRSxtQkFBTyxLQUFLLFlBQVksT0FBTyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUFFLHVCQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLENBQUM7U0FBRTtBQUN4SixpQkFBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQUUsZ0JBQUk7QUFBRSxvQkFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFBRSxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FBRTtBQUNuRixpQkFBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQUUsZ0JBQUk7QUFBRSxvQkFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFBRSxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FBRTtBQUNuRixpQkFBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUN2QixnQkFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtCQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3RGO0FBQ0QsWUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3hCLENBQUMsQ0FBQztDQUNOLENBQUM7O0FBRUYsQ0FBQztBQUNNLElBQUksS0FBSyxXQUFMLEtBQUssWUFBQSxDQUFDO0FBQ2pCLENBQUMsVUFBVSxLQUFLLEVBQUU7QUFDZCxhQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3pCLGVBQU8sZ0JBQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RDtBQUNELFNBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLGFBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQTZCO1lBQTNCLFFBQVEseURBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFOztBQUM5QyxlQUFPLEVBQUUsS0FBSyxFQUFFLGdCQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDekU7QUFDRCxTQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNoQixhQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ3JCLGVBQU8sRUFBRSxLQUFLLEVBQUUsZ0JBQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDbkY7QUFDRCxTQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNoQixhQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ3RCLGVBQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUMxQztBQUNELFNBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGFBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDekIsZUFBTyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQzFDO0FBQ0QsU0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDeEIsYUFBUyxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ2pCLGVBQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDcEQ7QUFDRCxTQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUN6QixDQUFBLENBQUUsS0FBSyxhQTFCRyxLQUFLLEdBMEJILEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2tCQUNYLEtBQUsiLCJmaWxlIjoicGF0Y2guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3RlZmZhbi9Qcm9qZWN0cy9zaGFkb3ciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQcm9taXNlLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBnZW5lcmF0b3IgPSBnZW5lcmF0b3IuY2FsbCh0aGlzQXJnLCBfYXJndW1lbnRzKTtcbiAgICAgICAgZnVuY3Rpb24gY2FzdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlID8gdmFsdWUgOiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICAgICAgZnVuY3Rpb24gb25mdWxmaWxsKHZhbHVlKSB7IHRyeSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBvbnJlamVjdCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwidGhyb3dcIiwgdmFsdWUpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAodmVyYiwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBnZW5lcmF0b3JbdmVyYl0odmFsdWUpO1xuICAgICAgICAgICAgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBjYXN0KHJlc3VsdC52YWx1ZSkudGhlbihvbmZ1bGZpbGwsIG9ucmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBzdGVwKFwibmV4dFwiLCB2b2lkIDApO1xuICAgIH0pO1xufTtcbmltcG9ydCBTdGF0ZSBmcm9tICcuL3N0YXRlJztcbjtcbmV4cG9ydCB2YXIgUGF0Y2g7XG4oZnVuY3Rpb24gKFBhdGNoKSB7XG4gICAgZnVuY3Rpb24gYXBwbHkoc3RhdGUsIHBhdGNoKSB7XG4gICAgICAgIHJldHVybiBTdGF0ZS5zcGxpY2Uoc3RhdGUsIHBhdGNoLnJhbmdlLCBwYXRjaC5hZGRlZCk7XG4gICAgfVxuICAgIFBhdGNoLmFwcGx5ID0gYXBwbHk7XG4gICAgZnVuY3Rpb24gYWRkKHZhbHVlLCBrZXksIHBvc2l0aW9uID0geyBwcmV2OiBudWxsIH0pIHtcbiAgICAgICAgcmV0dXJuIHsgYWRkZWQ6IFN0YXRlLnVuaXQodmFsdWUsIGtleSksIHJhbmdlOiBbcG9zaXRpb24sIHBvc2l0aW9uXSB9O1xuICAgIH1cbiAgICBQYXRjaC5hZGQgPSBhZGQ7XG4gICAgZnVuY3Rpb24gc2V0KHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHsgYWRkZWQ6IFN0YXRlLnVuaXQodmFsdWUsIGtleSksIHJhbmdlOiBbeyBwcmV2OiBrZXkgfSwgeyBuZXh0OiBrZXkgfV0gfTtcbiAgICB9XG4gICAgUGF0Y2guc2V0ID0gc2V0O1xuICAgIGZ1bmN0aW9uIHB1c2godmFsdWUsIGtleSkge1xuICAgICAgICByZXR1cm4gYWRkKHZhbHVlLCBrZXksIHsgcHJldjogbnVsbCB9KTtcbiAgICB9XG4gICAgUGF0Y2gucHVzaCA9IHB1c2g7XG4gICAgZnVuY3Rpb24gdW5zaGlmdCh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiBhZGQodmFsdWUsIGtleSwgeyBuZXh0OiBudWxsIH0pO1xuICAgIH1cbiAgICBQYXRjaC51bnNoaWZ0ID0gdW5zaGlmdDtcbiAgICBmdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gICAgICAgIHJldHVybiB7IHJhbmdlOiBbeyBwcmV2OiBrZXkgfSwgeyBuZXh0OiBrZXkgfV0gfTtcbiAgICB9XG4gICAgUGF0Y2gucmVtb3ZlID0gcmVtb3ZlO1xufSkoUGF0Y2ggfHwgKFBhdGNoID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IFBhdGNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0Y2guanMubWFwIl19

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PromiseUtils = undefined;
	
	var _promise = __webpack_require__(48);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var PromiseUtils = exports.PromiseUtils = undefined;
	(function (PromiseUtils) {
	    function lazy(executor) {
	        var promise;
	        function then(onfulfilled, onrejected) {
	            if (promise) return promise.then(onfulfilled, onrejected);
	            return (promise = new _promise2.default(executor)).then(onfulfilled, onrejected);
	        }
	        return _promise2.default.resolve({ then: then });
	    }
	    PromiseUtils.lazy = lazy;
	})(PromiseUtils || (exports.PromiseUtils = PromiseUtils = {}));
	exports.default = PromiseUtils;
	//# sourceMappingURL=promise_utils.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvcHJvbWlzZV91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxTQUFTLEdBQUcsQUFBQyxhQUFRLFVBQUssU0FBUyxJQUFLLFVBQVUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQzNGLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzFDLGlCQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUFFLG1CQUFPLEtBQUssWUFBWSxPQUFPLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQUUsdUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUFFO0FBQ3hKLGlCQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFBRSxnQkFBSTtBQUFFLG9CQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUFFLHNCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUFFO0FBQ25GLGlCQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3ZCLGdCQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsa0JBQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdEY7QUFDRCxZQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDeEIsQ0FBQyxDQUFDO0NBQ04sQ0FBQztBQUNLLElBQUksWUFBWSxXQUFaLFlBQVksWUFBQSxDQUFDO0FBQ3hCLENBQUMsVUFBVSxZQUFZLEVBQUU7QUFDckIsYUFBUyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3BCLFlBQUksT0FBTyxDQUFDO0FBQ1osaUJBQVMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUU7QUFDbkMsZ0JBQUksT0FBTyxFQUNQLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakQsbUJBQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQVksUUFBUSxDQUFDLENBQUEsQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzFFO0FBQ0QsZUFBTyxrQkFBUSxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNwQztBQUNELGdCQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUM1QixDQUFBLENBQUUsWUFBWSxhQVpKLFlBQVksR0FZSCxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztrQkFDekIsWUFBWSIsImZpbGUiOiJwcm9taXNlX3V0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0ZWZmYW4vUHJvamVjdHMvc2hhZG93Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUHJvbWlzZSwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwodGhpc0FyZywgX2FyZ3VtZW50cyk7XG4gICAgICAgIGZ1bmN0aW9uIGNhc3QodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSA/IHZhbHVlIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgICAgIGZ1bmN0aW9uIG9uZnVsZmlsbCh2YWx1ZSkgeyB0cnkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gb25yZWplY3QodmFsdWUpIHsgdHJ5IHsgc3RlcChcInRocm93XCIsIHZhbHVlKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHZlcmIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW3ZlcmJdKHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogY2FzdChyZXN1bHQudmFsdWUpLnRoZW4ob25mdWxmaWxsLCBvbnJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcChcIm5leHRcIiwgdm9pZCAwKTtcbiAgICB9KTtcbn07XG5leHBvcnQgdmFyIFByb21pc2VVdGlscztcbihmdW5jdGlvbiAoUHJvbWlzZVV0aWxzKSB7XG4gICAgZnVuY3Rpb24gbGF6eShleGVjdXRvcikge1xuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgZnVuY3Rpb24gdGhlbihvbmZ1bGZpbGxlZCwgb25yZWplY3RlZCkge1xuICAgICAgICAgICAgaWYgKHByb21pc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihvbmZ1bGZpbGxlZCwgb25yZWplY3RlZCk7XG4gICAgICAgICAgICByZXR1cm4gKHByb21pc2UgPSBuZXcgUHJvbWlzZShleGVjdXRvcikpLnRoZW4ob25mdWxmaWxsZWQsIG9ucmVqZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyB0aGVuIH0pO1xuICAgIH1cbiAgICBQcm9taXNlVXRpbHMubGF6eSA9IGxhenk7XG59KShQcm9taXNlVXRpbHMgfHwgKFByb21pc2VVdGlscyA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBQcm9taXNlVXRpbHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9taXNlX3V0aWxzLmpzLm1hcCJdfQ==

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Lens = undefined;
	
	var _state = __webpack_require__(93);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _store = __webpack_require__(98);
	
	var _observable = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
	    return new Promise(function (resolve, reject) {
	        generator = generator.call(thisArg, _arguments);
	        function cast(value) {
	            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
	                resolve(value);
	            });
	        }
	        function onfulfill(value) {
	            try {
	                step("next", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function onreject(value) {
	            try {
	                step("throw", value);
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(verb, value) {
	            var result = generator[verb](value);
	            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	        }
	        step("next", void 0);
	    });
	};
	var Lens = exports.Lens = undefined;
	(function (Lens) {
	    function compose(parent, lens) {
	        var getSubject = _observable.Subject.create(),
	            setSubject = _observable.Subject.create();
	        _observable.Observable.map(parent.dispatcher, function (patch) {
	            if (patch.added) return { range: patch.range, added: _state2.default.map(patch.added, lens.get) };
	            return { range: patch.range };
	        }).subscribe(getSubject);
	        _observable.Observable.map(setSubject, function (patch) {
	            if (patch.added) return { range: patch.range, added: _state2.default.map(patch.added, lens.set) };
	            return { range: patch.range };
	        }).subscribe(parent.dispatcher);
	        return _store.Store.create(_state2.default.map(parent.state, lens.get), { subscribe: getSubject.subscribe, onNext: setSubject.onNext });
	    }
	    Lens.compose = compose;
	})(Lens || (exports.Lens = Lens = {}));
	exports.default = Lens;
	//# sourceMappingURL=lens.js.map
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zb25pY2pzL2Rpc3QvbGVucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksU0FBUyxHQUFHLEFBQUMsYUFBUSxVQUFLLFNBQVMsSUFBSyxVQUFVLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUMzRixXQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMxQyxpQkFBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFBRSxtQkFBTyxLQUFLLFlBQVksT0FBTyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUFFLHVCQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBRSxDQUFDLENBQUM7U0FBRTtBQUN4SixpQkFBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQUUsZ0JBQUk7QUFBRSxvQkFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFBRSxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FBRTtBQUNuRixpQkFBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQUUsZ0JBQUk7QUFBRSxvQkFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFBRSxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FBRTtBQUNuRixpQkFBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUN2QixnQkFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtCQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3RGO0FBQ0QsWUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3hCLENBQUMsQ0FBQztDQUNOLENBQUM7QUFJSyxJQUFJLElBQUksV0FBSixJQUFJLFlBQUEsQ0FBQztBQUNoQixDQUFDLFVBQVUsSUFBSSxFQUFFO0FBQ2IsYUFBUyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUMzQixZQUFJLFVBQVUsR0FBRyxZQUpKLE9BQU8sQ0FJSyxNQUFNLEVBQUU7WUFBRSxVQUFVLEdBQUcsWUFKbkMsT0FBTyxDQUlvQyxNQUFNLEVBQUUsQ0FBQztBQUNqRSxvQkFMQyxVQUFVLENBS0EsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDdkMsZ0JBQUksS0FBSyxDQUFDLEtBQUssRUFDWCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGdCQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzNFLG1CQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3pCLG9CQVZDLFVBQVUsQ0FVQSxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQ2hDLGdCQUFJLEtBQUssQ0FBQyxLQUFLLEVBQ1gsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxnQkFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUMzRSxtQkFBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEMsZUFBTyxPQWhCTixLQUFLLENBZ0JPLE1BQU0sQ0FBQyxnQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDMUg7QUFDRCxRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUMxQixDQUFBLENBQUUsSUFBSSxhQWpCSSxJQUFJLEdBaUJILElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2tCQUNULElBQUkiLCJmaWxlIjoibGVucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGVmZmFuL1Byb2plY3RzL3NoYWRvdyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFByb21pc2UsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGdlbmVyYXRvciA9IGdlbmVyYXRvci5jYWxsKHRoaXNBcmcsIF9hcmd1bWVudHMpO1xuICAgICAgICBmdW5jdGlvbiBjYXN0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UgPyB2YWx1ZSA6IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgICAgICBmdW5jdGlvbiBvbmZ1bGZpbGwodmFsdWUpIHsgdHJ5IHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIG9ucmVqZWN0KHZhbHVlKSB7IHRyeSB7IHN0ZXAoXCJ0aHJvd1wiLCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcCh2ZXJiLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGdlbmVyYXRvclt2ZXJiXSh2YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGNhc3QocmVzdWx0LnZhbHVlKS50aGVuKG9uZnVsZmlsbCwgb25yZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZvaWQgMCk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICcuL29ic2VydmFibGUnO1xuZXhwb3J0IHZhciBMZW5zO1xuKGZ1bmN0aW9uIChMZW5zKSB7XG4gICAgZnVuY3Rpb24gY29tcG9zZShwYXJlbnQsIGxlbnMpIHtcbiAgICAgICAgdmFyIGdldFN1YmplY3QgPSBTdWJqZWN0LmNyZWF0ZSgpLCBzZXRTdWJqZWN0ID0gU3ViamVjdC5jcmVhdGUoKTtcbiAgICAgICAgT2JzZXJ2YWJsZS5tYXAocGFyZW50LmRpc3BhdGNoZXIsIHBhdGNoID0+IHtcbiAgICAgICAgICAgIGlmIChwYXRjaC5hZGRlZClcbiAgICAgICAgICAgICAgICByZXR1cm4geyByYW5nZTogcGF0Y2gucmFuZ2UsIGFkZGVkOiBTdGF0ZS5tYXAocGF0Y2guYWRkZWQsIGxlbnMuZ2V0KSB9O1xuICAgICAgICAgICAgcmV0dXJuIHsgcmFuZ2U6IHBhdGNoLnJhbmdlIH07XG4gICAgICAgIH0pLnN1YnNjcmliZShnZXRTdWJqZWN0KTtcbiAgICAgICAgT2JzZXJ2YWJsZS5tYXAoc2V0U3ViamVjdCwgcGF0Y2ggPT4ge1xuICAgICAgICAgICAgaWYgKHBhdGNoLmFkZGVkKVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJhbmdlOiBwYXRjaC5yYW5nZSwgYWRkZWQ6IFN0YXRlLm1hcChwYXRjaC5hZGRlZCwgbGVucy5zZXQpIH07XG4gICAgICAgICAgICByZXR1cm4geyByYW5nZTogcGF0Y2gucmFuZ2UgfTtcbiAgICAgICAgfSkuc3Vic2NyaWJlKHBhcmVudC5kaXNwYXRjaGVyKTtcbiAgICAgICAgcmV0dXJuIFN0b3JlLmNyZWF0ZShTdGF0ZS5tYXAocGFyZW50LnN0YXRlLCBsZW5zLmdldCksIHsgc3Vic2NyaWJlOiBnZXRTdWJqZWN0LnN1YnNjcmliZSwgb25OZXh0OiBzZXRTdWJqZWN0Lm9uTmV4dCB9KTtcbiAgICB9XG4gICAgTGVucy5jb21wb3NlID0gY29tcG9zZTtcbn0pKExlbnMgfHwgKExlbnMgPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQgTGVucztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxlbnMuanMubWFwIl19

/***/ }
/******/ ])
});
;
//# sourceMappingURL=shadow.browser.js.map