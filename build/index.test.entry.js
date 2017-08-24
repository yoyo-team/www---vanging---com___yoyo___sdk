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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.be = undefined;
exports.get = get;

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onerror = function () {
            reject(xhr.response);
        };
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.response);
            }
        };
        xhr.send();
    });
}

var be = {};

be.get = function (url) {
    return get(_config2.default.baseUrl + url);
};

exports.be = be;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {};

if (true) {
    config.baseUrl = 'http://localhost:8080/yoyo';
} else {
    config.baseUrl = 'https://be.www.vanging.com/yoyo';
}

exports.default = config;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (user_id, class_id, note_content) {
    var url = '/addOrUpdateNote?user_id=' + user_id + '&class_id=' + class_id + '&note_content=' + note_content;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (form) {
    return new Promise(function (resolve, reject) {
        form = new FormData(form);
        console.log(form);
        var xhr = new XMLHttpRequest();
        var url = _config2.default.baseUrl + '/releaseClass';
        xhr.open('post', url);
        xhr.onerror = function () {
            reject(xhr.response);
        };
        xhr.onload = function (e) {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.response);
            }
        };
        xhr.send(form);
    });
};

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addNote = __webpack_require__(2);

var _addNote2 = _interopRequireDefault(_addNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ addNote ] > default()', function () {
    it('should make the request', function () {
        return (0, _addNote2.default)();
    });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _deleteNote = __webpack_require__(13);

var _deleteNote2 = _interopRequireDefault(_deleteNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ deleteNote ] > default()', function () {
    it('should make the request', function () {
        return (0, _deleteNote2.default)();
    });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getClass = __webpack_require__(14);

var _getClass2 = _interopRequireDefault(_getClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ getClass ] > default()', function () {
    it('should make the request', function () {
        return (0, _getClass2.default)();
    });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getLocation = __webpack_require__(15);

var _getLocation2 = _interopRequireDefault(_getLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ getLocation ] > default()', function () {
    it('should make the request', function () {
        return (0, _getLocation2.default)();
    });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getNotes = __webpack_require__(16);

var _getNotes2 = _interopRequireDefault(_getNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ getNotes ] > default()', function () {
    it('should make the request', function () {
        return (0, _getNotes2.default)();
    });
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getStatistics = __webpack_require__(17);

var _getStatistics2 = _interopRequireDefault(_getStatistics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ getStatistics ] > default()', function () {
    it('should make the request', function () {
        return (0, _getStatistics2.default)();
    });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _queryClass = __webpack_require__(18);

var _queryClass2 = _interopRequireDefault(_queryClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ queryClass ] > default()', function () {
    it('should make the request', function () {
        return (0, _queryClass2.default)();
    });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _setLocation = __webpack_require__(19);

var _setLocation2 = _interopRequireDefault(_setLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' [ setLocation ] > default()', function () {
    it('should make the request', function () {
        return (0, _setLocation2.default)();
    });
});

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (user_id, class_id) {
    var url = '/deleteNote?user_id=' + user_id + '&class_id=' + class_id;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (class_id) {
    var url = '/getClass?class_id=' + class_id;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (user_id) {
    var url = '/getLocation?user_id=' + user_id;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (user_id) {
    var url = '/getNotes?user_id=' + user_id;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (class_id) {
    var url = '/getStatistics?class_id=' + class_id;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (key_word) {
    var url = '/queryClass?key_word=' + key_word;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (user_id, user_location) {
    var url = '/setLocation?user_id=' + user_id + '&user_location=' + user_location;
    return _util.be.get(url);
};

var _util = __webpack_require__(0);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

var _releaseClass = __webpack_require__(3);

var _releaseClass2 = _interopRequireDefault(_releaseClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function release(e) {
    e.preventDefault();
    (0, _releaseClass2.default)(document.getElementById('form')).then(function (result) {
        console.log(result);
        alert('success');
    }, function (err) {
        console.log(err);
        alert('fail');
    });
} // import './util.test';


window.release = release;

/***/ })
/******/ ]);