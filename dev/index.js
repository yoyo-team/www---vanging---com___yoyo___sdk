/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var yoyo = {};

	yoyo.config = __webpack_require__(1);

	yoyo.add_note = __webpack_require__(2);
	yoyo.delete_note = __webpack_require__(4);
	yoyo.get_class = __webpack_require__(5);
	yoyo.get_location = __webpack_require__(6);
	yoyo.get_notes = __webpack_require__(7);
	yoyo.get_statistics = __webpack_require__(8);
	yoyo.query_class = __webpack_require__(9);
	yoyo.release = __webpack_require__(10);
	yoyo.set_location = __webpack_require__(11);

	if (window.luoc) {
	    window.luoc.yoyo = yoyo;
	} else {
	    window.luoc = {};
	    window.luoc.yoyo = yoyo;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var config = {};
	config.base = '//luoc.tech/yoyo/';

	module.exports = config;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function add_note(args) {
	    if (!args.cid || !args.uid || !args.segments) {
	        console.log(args);
	        emit({ name: 'add_note:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'add_note?';
	        url += 'cid=' + args.cid + '&';
	        url += 'uid=' + args.uid + '&';
	        url += 'segments=' + args.segments;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'add_note:ok' });
	            } else {
	                emit({ name: 'add_note:error', message: xhr.response });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = add_note;
	//
	// document.body.addEventListener('yoyo:add_note:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:add_note:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:add_note:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// add_note
	// (
	//     {
	//         uid:'test',
	//         cid:'test',
	//         segments:'1,2,3,4,5,6'
	//     }
	// );

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function emit(args) {
	    var event = new Event('yoyo:' + args.name);
	    event.message = args.message;
	    document.body.dispatchEvent(event);
	}

	module.exports.emit = emit;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function delete_note(args) {
	    if (!args.cid || !args.uid) {
	        console.log(args);
	        emit({ name: 'delete_note:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'delete_note?';
	        url += 'cid=' + args.cid + '&';
	        url += 'uid=' + args.uid;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'delete_note:ok' });
	            } else {
	                emit({ name: 'delete_note:error', message: res });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = delete_note;
	//
	//
	// document.body.addEventListener('yoyo:delete_note:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:delete_note:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:delete_note:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// delete_note
	// (
	//     {
	//         cid:'test',
	//         uid:'test'
	//     }
	// );

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function get_class(args) {
	    if (!args.cid) {
	        console.log(args);
	        emit({ name: 'get_class:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'get_class?';
	        url += 'cid=' + args.cid;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'get_class:ok', message: res.message });
	            } else {
	                emit({ name: 'get_class:error', message: xhr.response });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = get_class;
	//
	//
	// document.body.addEventListener('yoyo:get_class:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_class:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_class:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// get_class
	// (
	//     {
	//         cid:'1'
	//     }
	// );

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function get_location(args) {
	    if (!args.uid) {
	        console.error('[ get_location ] : 参数检查失败');
	        console.error(args);
	        emit({ name: 'get_location:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'get_location?';
	        url += 'uid=' + args.uid;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'get_location:ok', message: res.message });
	            } else {
	                emit({ name: 'get_location:error', message: xhr.response });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = get_location;
	//
	//
	// document.body.addEventListener('yoyo:get_location:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_location:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_location:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// get_location
	// (
	//     {
	//         uid:'test'
	//     }
	// );

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function get_notes(args) {
	    if (!args.uid) {
	        console.log(args);
	        emit({ name: 'get_notes:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'get_notes?';
	        url += 'uid=' + args.uid;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'get_notes:ok', message: res.message });
	            } else {
	                emit({ name: 'get_notes:error', message: res });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = get_notes;
	//
	//
	// document.body.addEventListener('yoyo:get_notes:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_notes:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_notes:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// get_notes
	// (
	//     {
	//         uid:'test'
	//     }
	// );

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function get_statistics(args) {
	    if (!args.cid) {
	        console.log(args);
	        emit({ name: 'get_statistics:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'get_statistics?';
	        url += 'cid=' + args.cid;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'get_statistics:ok', message: res.message });
	            } else {
	                emit({ name: 'get_statistics:error', message: res });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = get_statistics;

	// document.body.addEventListener('yoyo:get_statistics:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_statistics:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:get_statistics:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// get_statistics
	// (
	//     {
	//         cid:'test1'
	//     }
	// );

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function query_class(args) {
	    if (!args.key) {
	        console.error('[ query_class ] : 参数检查失败');
	        console.error(args);
	        emit({ name: 'query_class:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'query_class?';
	        url += 'key=' + args.key;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'query_class:ok', message: res.message });
	            } else {
	                emit({ name: 'query_class:error', message: res });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = query_class;
	//
	//
	// document.body.addEventListener('yoyo:query_class:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:query_class:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:query_class:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// query_class
	// (
	//     {
	//         key:'吉大'
	//     }
	// );

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function release(form) {
	    if (form.nodeName !== 'FORM') {
	        console.log(form);
	        emit({ name: 'get_class:args_check_failed' });
	    } else {
	        form = new FormData(form);
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'release?';
	        xhr.open('post', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'release:ok', message: res.message });
	            } else {
	                emit({ name: 'release:error', message: xhr.response });
	            }
	        };
	        xhr.send(form);
	    }
	}

	module.exports = release;
	//
	//
	// document.body.addEventListener('yoyo:release:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:release:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:release:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// document.getElementById('form').addEventListener('submit',function(e)
	// {
	//     e.preventDefault();
	//     release(document.getElementById('form'));
	// });

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var emit = __webpack_require__(3).emit;
	var config = __webpack_require__(1);

	function set_location(args) {
	    if (!args.uid || !args.location) {
	        console.log(args);
	        emit({ name: 'set_location:args_check_failed' });
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.responseType = 'json';
	        var url = config.base + 'set_location?';
	        url += 'uid=' + args.uid + '&';
	        url += 'location=' + args.location;
	        xhr.open('get', url);
	        xhr.onload = function (e) {
	            var res = xhr.response;
	            if (res.status === 'ok') {
	                emit({ name: 'set_location:ok', message: res.message });
	            } else {
	                emit({ name: 'set_location:error', message: xhr.response });
	            }
	        };
	        xhr.send();
	    }
	}

	module.exports = set_location;
	//
	//
	// document.body.addEventListener('yoyo:set_location:args_check_failed',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:set_location:error',function(e)
	// {
	//     console.log(e);
	// });
	// document.body.addEventListener('yoyo:set_location:ok',function(e)
	// {
	//     console.log(e);
	// });
	//
	// set_location
	// (
	//     {
	//         uid:'test',
	//         location:'test'
	//     }
	// );

/***/ }
/******/ ]);