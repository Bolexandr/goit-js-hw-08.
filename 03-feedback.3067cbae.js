!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,f,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function S(e){return l=e,u=setTimeout(h,t),s?p(e):f}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=b();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?m(n,a-(e-l)):n}(e))}function w(e){return u=void 0,v&&o?p(e):(o=i=void 0,f)}function T(){var e=b(),n=j(e);if(o=arguments,i=this,c=e,n){if(void 0===u)return S(c);if(d)return u=setTimeout(h,t),p(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=O(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||u.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),j=Object(),h=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===h)console.log("В сховищі відсутні дані  для автозаповнення форми");else{for(var w in h)h.hasOwnProperty([w])&&(j[w]=h[w]);!function(e,t){for(var n in t)try{e[n].value=t[n]}catch(e){console.log(" в сховищі не знайдено інформації для автозаповнення поля ".concat(n))}}(S,h)}S.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,console.log(j),localStorage.setItem("feedback-form-state",JSON.stringify(j)),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log("Вміст об'єкта з введиними даними на момент сабміту:",JSON.parse(localStorage.getItem("feedback-form-state"))),S.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.3067cbae.js.map
