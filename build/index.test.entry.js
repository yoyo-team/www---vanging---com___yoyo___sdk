!function(e){function t(u){if(n[u])return n[u].exports;var r=n[u]={i:u,l:!1,exports:{}};return e[u].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,u){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:u})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t,n){"use strict";function u(e){return new Promise(function(t,n){var u=new XMLHttpRequest;u.open("get",e),u.onerror=function(){n(u.response)},u.onload=function(){200===u.status?t(u.response):n(u.response)},u.send()})}Object.defineProperty(t,"__esModule",{value:!0}),t.be=void 0,t.get=u;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),s={};s.get=function(e){return u(o.default.baseUrl+e)},t.be=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u={};u.baseUrl="https://be.www.vanging.com/yoyo",t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){e=new FormData(e);var u=new XMLHttpRequest,o=r.default.baseUrl+"/releaseClass";u.open("post",o),u.onerror=function(){n(u.response)},u.onload=function(e){200===u.status?t(u.response):n(u.response)},u.send(e)})};var u=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(u)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r="/addOrUpdateNote?user_id="+e+"&class_id="+t+"&note_content="+n;return u.be.get(r)};var u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n="/deleteNote?user_id="+e+"&class_id="+t;return u.be.get(n)};var u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="/getClass?class_id="+e;return u.be.get(t)};var u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){var o=r+"/"+e+"/index.json";(0,u.get)(o).then(function(e){try{e=JSON.parse(e),t(e)}catch(e){n(e)}},function(e){n(e)})})};var u=n(0),r="//www.vanging.com/yoyo/classes"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="/getLocation?user_id="+e;return u.be.get(t)};var u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="/getNotes?user_id="+e;return u.be.get(t)};var u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="/getStatistics?class_id="+e;return u.be.get(t)};var u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="/queryClass?key_word="+e;return u.be.get(t)};var u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n="/setLocation?user_id="+e+"&user_location="+t;return u.be.get(n)};var u=n(0)},function(e,t,n){"use strict";var u=n(3),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ addNote ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},function(e,t,n){"use strict";var u=n(4),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ deleteNote ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},function(e,t,n){"use strict";var u=n(5),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ getClass ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},function(e,t,n){"use strict";var u=n(6),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ getClassContent ] > default()",function(){it("should make the request",function(){return(0,r.default)("06f0b746-befe-4cda-8306-a13a9dfa8866")})})},function(e,t,n){"use strict";var u=n(7),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ getLocation ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},function(e,t,n){"use strict";var u=n(8),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ getNotes ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},function(e,t,n){"use strict";var u=n(9),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ getStatistics ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},function(e,t,n){"use strict";var u=n(10),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ queryClass ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},function(e,t,n){"use strict";var u=n(11),r=function(e){return e&&e.__esModule?e:{default:e}}(u);describe(" [ setLocation ] > default()",function(){it("should make the request",function(){return(0,r.default)()})})},,function(e,t,n){"use strict";function u(){(0,o.default)(document.getElementById("form")).then(function(e){alert("success")},function(e){alert("fail")})}n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20);var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r);window.release=u}]);