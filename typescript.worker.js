!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="//damife.ks3-cn-beijing.ksyun.com/kpc/",t(t.s="./node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js")}({"./node_modules/monaco-editor/esm/vs/base/common/platform.js":function(e,n,t){"use strict";(function(e,r){t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return g})),t.d(n,"a",(function(){return _}));var a=!1,i=!1,o=!1,s=!1,l=!1,c=void 0!==e&&void 0!==e.versions&&void 0!==e.versions.electron&&"renderer"===e.type;if("object"!=typeof navigator||c){if("object"==typeof e){a="win32"===e.platform,i="darwin"===e.platform,o="linux"===e.platform,"en","en";var u=e.env.VSCODE_NLS_CONFIG;if(u)try{var d=JSON.parse(u),m=d.availableLanguages["*"];d.locale,m||"en",d._translationsConfigFile}catch(e){}s=!0}}else{var p=navigator.userAgent;a=p.indexOf("Windows")>=0,i=p.indexOf("Macintosh")>=0,o=p.indexOf("Linux")>=0,l=!0,navigator.language}var f=a,g=l,_="object"==typeof self?self:"object"==typeof r?r:{}}).call(this,t("./node_modules/process/browser.js"),t("./node_modules/webpack/buildin/global.js"))},"./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js":function(e,n,t){(function(e,n){(function(){"use strict";function t(e){var n=this.constructor;return this.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){return n.reject(t)}))}))}var r=setTimeout;function a(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function o(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn((function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var r;try{r=t(e._value)}catch(e){return void l(n.promise,e)}s(n.promise,r)}else(1===e._state?s:l)(n.promise,e._value)}))):e._deferreds.push(n)}function s(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof i)return e._state=3,e._value=n,void c(e);if("function"==typeof t)return void d((r=t,a=n,function(){r.apply(a,arguments)}),e)}e._state=1,e._value=n,c(e)}catch(n){l(e,n)}var r,a}function l(e,n){e._state=2,e._value=n,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}));for(var n=0,t=e._deferreds.length;n<t;n++)o(e,e._deferreds[n]);e._deferreds=null}function u(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function d(e,n){var t=!1;try{e((function(e){t||(t=!0,s(n,e))}),(function(e){t||(t=!0,l(n,e))}))}catch(e){if(t)return;t=!0,l(n,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,n){var t=new this.constructor(a);return o(this,new u(e,n,t)),t},i.prototype.finally=t,i.all=function(e){return new i((function(n,t){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);var a=r.length;function i(e,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,(function(n){i(e,n)}),t)}r[e]=o,0==--a&&n(r)}catch(e){t(e)}}for(var o=0;o<r.length;o++)i(o,r[o])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(n){n(e)}))},i.reject=function(e){return new i((function(n,t){t(e)}))},i.race=function(e){return new i((function(n,t){for(var r=0,a=e.length;r<a;r++)e[r].then(n,t)}))},i._immediateFn="function"==typeof e&&function(n){e(n)}||function(e){r(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var m=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();"Promise"in m?m.Promise.prototype.finally||(m.Promise.prototype.finally=t):m.Promise=i})()}).call(this,t("./node_modules/timers-browserify/main.js").setImmediate,t("./node_modules/webpack/buildin/global.js"))},"./node_modules/monaco-editor/esm/vs/language/typescript/lib/typescriptServices.js":function(e,n,t){"use strict";(function(e,r,a,i){t.d(n,"c",(function(){return f})),t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return _}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */