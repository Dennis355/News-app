!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function u(t){n(i,a,o,u,c,"next",t)}function c(t){n(i,a,o,u,c,"throw",t)}u(void 0)}))}};var r={},a=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new D(r||[]);return o._invoke=function(t,e,n){var r=d;return function(a,o){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=C(i,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?m:h,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",h="suspendedYield",f="executing",m="completed",g={};function v(){}function w(){}function p(){}var y={};c(y,o,(function(){return this}));var b=Object.getPrototypeOf,T=b&&b(b(E([])));T&&T!==n&&r.call(T,o)&&(y=T);var k=p.prototype=v.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(a,o,i,u){var c=l(t[a],t,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return w.prototype=p,c(k,"constructor",p),c(p,"constructor",w),w.displayName=c(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(M.prototype),c(M.prototype,i,(function(){return this})),t.AsyncIterator=M,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new M(s(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),c(k,u,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return u.type="throw",u.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(r);try{regeneratorRuntime=a}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}function o(){this.checked?m.classList.add("dark"):m.classList.remove("dark")}var i=document.querySelector(".open-search-button"),u=document.querySelector(".search-bar"),c=document.querySelector(".submit-button"),s=document.querySelector(".open-menu-button"),l=document.querySelector(".close-menu-button"),d=document.querySelector(".mobile-menu"),h=document.querySelector(".checkbox"),f=document.querySelector(".mobile-checkbox"),m=document.querySelector("body");i.addEventListener("click",(function(){u.classList.add("visible"),i.classList.add("hidden")})),s.addEventListener("click",(function(){d.classList.remove("hidden")})),l.addEventListener("click",(function(){d.classList.add("hidden")})),h.addEventListener("change",o),f.addEventListener("change",o),c.addEventListener("click",(function(t){t.preventDefault(),console.log("функція searchTematicNews має бути імпортована з іншого модулю")}));var g="A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw";function v(){return w.apply(this,arguments)}function w(){return(w=t(e)(t(r).mark((function e(){var n,a,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=".concat(g));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,o=a.results,t.abrupt("return",o);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0,window.innerWidth<768&&v().then((function(t){y(t,n)})),window.innerWidth>=768&&window.innerWidth<1280&&(n=4,v().then((function(t){y(t,n)}))),window.innerWidth>=1280&&(n=6,v().then((function(t){y(t,n)})));case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var y=function(t,e){var n=t.slice(0,e),r=t.slice(e,-1),a=[];(a=n.map((function(t){return"<button data-section=".concat(t.section,' class="btn">').concat(t.display_name,"</button>")}))).push('\n    <div class="btn show-more">\n  <span class="show-more_btn">'.concat(window.innerWidth<768?"Categories":"Others",'</span>\n\n  <div class="show-more__categories">\n  ').concat(r.map((function(t){return'<button class="show-more__category" data-section='.concat(t.section,">").concat(t.display_name,"</button>")})).join(""),"\n  </div>\n</div>\n  ")),document.getElementById("buttons-container").insertAdjacentHTML("beforeend",a.join(""));var o,i,u=document.querySelector(".show-more"),c=document.querySelector(".show-more__categories");u.addEventListener("click",(function(t){t.stopPropagation(),c.classList.toggle("show-more__categories--open")})),document.addEventListener("click",(function(){c.classList.contains("show-more__categories--open")&&c.classList.remove("show-more__categories--open")})),o=document.querySelectorAll(".btn"),i=null,o.forEach((function(t){t.addEventListener("click",(function(e){null!==i&&i.classList.remove("active"),t.classList.add("active"),i=t}))}))};!function(){p.apply(this,arguments)}();function b(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t){return b(1,arguments),t instanceof Date||"object"===T(t)&&"[object Date]"===Object.prototype.toString.call(t)}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t){b(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===x(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function C(t){if(b(1,arguments),!k(t)&&"number"!=typeof t)return!1;var e=M(t);return!isNaN(Number(e))}function S(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function L(t,e){b(2,arguments);var n=M(t).getTime(),r=S(e);return new Date(n+r)}function D(t,e){b(2,arguments);var n=S(e);return L(t,-n)}window.addEventListener("resize",(function(){var t=document.querySelector(".show-more_btn"),e=window.innerWidth;t.textContent=e<768?"Categories":"Others"}));var E=864e5;function P(t){b(1,arguments);var e=M(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/E)+1}function U(t){b(1,arguments);var e=1,n=M(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function W(t){b(1,arguments);var e=M(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=U(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=U(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function _(t){b(1,arguments);var e=W(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=U(n);return r}var O=6048e5;function N(t){b(1,arguments);var e=M(t),n=U(e).getTime()-_(e).getTime();return Math.round(n/O)+1}var j={};function q(){return j}function Y(t,e){var n,r,a,o,i,u,c,s;b(1,arguments);var l=q(),d=S(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=M(t),f=h.getUTCDay(),m=(f<d?7:0)+f-d;return h.setUTCDate(h.getUTCDate()-m),h.setUTCHours(0,0,0,0),h}function F(t,e){var n,r,a,o,i,u,c,s;b(1,arguments);var l=M(t),d=l.getUTCFullYear(),h=q(),f=S(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==r?r:null===(c=h.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(d+1,0,f),m.setUTCHours(0,0,0,0);var g=Y(m,e),v=new Date(0);v.setUTCFullYear(d,0,f),v.setUTCHours(0,0,0,0);var w=Y(v,e);return l.getTime()>=g.getTime()?d+1:l.getTime()>=w.getTime()?d:d-1}function H(t,e){var n,r,a,o,i,u,c,s;b(1,arguments);var l=q(),d=S(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),h=F(t,e),f=new Date(0);f.setUTCFullYear(h,0,d),f.setUTCHours(0,0,0,0);var m=Y(f,e);return m}var A=6048e5;function G(t,e){b(1,arguments);var n=M(t),r=Y(n,e).getTime()-H(n,e).getTime();return Math.round(r/A)+1}function z(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Q={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return z("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):z(n+1,2)},d:function(t,e){return z(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return z(t.getUTCHours()%12||12,e.length)},H:function(t,e){return z(t.getUTCHours(),e.length)},m:function(t,e){return z(t.getUTCMinutes(),e.length)},s:function(t,e){return z(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return z(Math.floor(r*Math.pow(10,n-3)),e.length)}},B="midnight",X="noon",R="morning",I="afternoon",J="evening",V="night";function K(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+z(o,2)}function $(t,e){return t%60==0?(t>0?"-":"+")+z(Math.abs(t)/60,2):Z(t,e)}function Z(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+z(Math.floor(a/60),2)+n+z(a%60,2)}var tt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return Q.y(t,e)},Y:function(t,e,n,r){var a=F(t,r),o=a>0?a:1-a;return"YY"===e?z(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):z(o,e.length)},R:function(t,e){return z(W(t),e.length)},u:function(t,e){return z(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return z(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return z(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Q.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return z(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=G(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):z(a,e.length)},I:function(t,e,n){var r=N(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):z(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Q.d(t,e)},D:function(t,e,n){var r=P(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):z(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return z(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return z(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return z(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?X:0===a?B:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?J:a>=12?I:a>=4?R:V,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Q.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):z(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):z(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Q.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Q.s(t,e)},S:function(t,e){return Q.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return $(a);case"XXXX":case"XX":return Z(a);default:return Z(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return $(a);case"xxxx":case"xx":return Z(a);default:return Z(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+K(a,":");default:return"GMT"+Z(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+K(a,":");default:return"GMT"+Z(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return z(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return z((r._originalDate||t).getTime(),e.length)}},et=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},nt=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},rt={p:nt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return et(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",et(a,e)).replace("{{time}}",nt(o,e))}};function at(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var ot=["D","DD"],it=["YY","YYYY"];function ut(t){return-1!==ot.indexOf(t)}function ct(t){return-1!==it.indexOf(t)}function st(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var lt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},dt=function(t,e,n){var r,a=lt[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ht(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var ft={date:ht({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ht({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ht({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},mt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},gt=function(t,e,n,r){return mt[t]};function vt(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var wt={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:vt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:vt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:vt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:vt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:vt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function pt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?bt(c,(function(t){return t.test(u)})):yt(c,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var l=e.slice(u.length);return{value:i,rest:l}}}function yt(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function bt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var Tt,kt={ordinalNumber:(Tt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Tt.matchPattern);if(!n)return null;var r=n[0],a=t.match(Tt.parsePattern);if(!a)return null;var o=Tt.valueCallback?Tt.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:pt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:pt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:pt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:pt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:pt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},xt={code:"en-US",formatDistance:dt,formatLong:ft,formatRelative:gt,localize:wt,match:kt,options:{weekStartsOn:0,firstWeekContainsDate:1}},Mt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,St=/^'([^]*?)'?$/,Lt=/''/g,Dt=/[a-zA-Z]/;function Et(t,e,n){var r,a,o,i,u,c,s,l,d,h,f,m,g,v,w,p,y,T;b(2,arguments);var k=String(e),x=q(),L=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:x.locale)&&void 0!==r?r:xt,E=S(null!==(o=null!==(i=null!==(u=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:x.firstWeekContainsDate)&&void 0!==i?i:null===(d=x.locale)||void 0===d||null===(h=d.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==o?o:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=S(null!==(f=null!==(m=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(w=n.locale)||void 0===w||null===(p=w.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==g?g:x.weekStartsOn)&&void 0!==m?m:null===(y=x.locale)||void 0===y||null===(T=y.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==f?f:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var U=M(t);if(!C(U))throw new RangeError("Invalid time value");var W=at(U),_=D(U,W),O={firstWeekContainsDate:E,weekStartsOn:P,locale:L,_originalDate:U},N=k.match(Ct).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,rt[e])(t,L.formatLong):t})).join("").match(Mt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return Pt(r);var o=tt[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!ct(r)||st(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!ut(r)||st(r,e,String(t)),o(_,r,L.localize,O);if(a.match(Dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return N}function Pt(t){var e=t.match(St);return e?e[1].replace(Lt,"'"):t}var Ut={};Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var Wt={};function _t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.default=function(t,e,n){e&&_t(t.prototype,e);n&&_t(t,n);return t};var Ot="94b2a12c85f4ec978a20428df76a9098",Nt=document.querySelector(".weather"),jt=function(){"use strict";function n(){t(Ut)(this,n),this.latitude="",this.longitude=""}return t(Wt)(n,[{key:"standartFetch",value:function(){return t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=praha&units=metric&appid=".concat(Ot));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),e)})))()}},{key:"fetchWidthLocation",value:function(){return t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude,"&lon=").concat(longitude,"&units=metric&appid=").concat(Ot));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),e)})))()}},{key:"createMarkup",value:function(n){return t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Nt.innerHTML='\n   <div class="weather-info">\n       <span class="weather-info__degrees">'.concat(Math.floor(n.main.temp),'°</span>\n        <div class="weather-info__group">\n            <span class="weather-info__description">').concat(n.weather[0].main,'</span>\n            <span class="weather-info__location"><svg>\n    <use href="../images/sprite.svg#location"></use>\n</svg>').concat(n.name,'</span>\n        </div>\n        \n      </div>\n      <img src="https://openweathermap.org/img/wn/').concat(n.weather[0].icon,'@4x.png" alt="').concat(n.weather[0].description,'" class="weather-img" />\n      <span class="weather-date">').concat(Et(new Date,"eee"),'</span>\n      <span class="weather-date">').concat(Et(new Date,"dd LLL y"),'</span>\n      <a href="https://www.accuweather.com/en" class="weather-link" target="_blank" rel="noreferrer noopener">weather for week</a>');case 1:case"end":return t.stop()}}),e)})))()}}]),n}(),qt=function(){"use strict";function n(){t(Ut)(this,n)}return t(Wt)(n,[{key:"fetchNewsByQuerry",value:function(n){return t(e)(t(r).mark((function e(){var a,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(n,"&api-key=").concat("A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw","\n"));case 2:return a=t.sent,o=a.json(),t.abrupt("return",o);case 5:case"end":return t.stop()}}),e)})))()}},{key:"createMarkup",value:function(n){return t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(n);case 1:case"end":return t.stop()}}),e)})))()}}]),n}(),Yt=new jt,Ft=new qt,Ht=document.querySelector("input");function At(){return(At=t(e)(t(r).mark((function e(n){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Yt.latitude=n.coords.latitude,Yt.longitude=n.coords.longitude,t.abrupt("return",Yt.fetchWidthLocation().then((function(t){Yt.createMarkup(t)})));case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}Ft.fetchNewsByQuerry(Ht).then((function(t){Ft.createMarkup(t)})),navigator.geolocation.getCurrentPosition((function(t){return At.apply(this,arguments)}),(function(){Yt.standartFetch().then((function(t){return Yt.createMarkup(t)}))}))}();
//# sourceMappingURL=index.f29775f0.js.map