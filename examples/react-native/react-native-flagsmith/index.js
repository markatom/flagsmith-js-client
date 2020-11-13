!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.flagsmith=e():t.flagsmith=e()}(global,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=r({})},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s,l,u="https://api.bullet-train.io/api/v1/",f=n(2),c=function(t){return"Attempted to "+t+" a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true."},g=function(){function t(e){var n=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),o(this,"getJSON",(function(t,e,r){var i={method:e||"GET",body:r,headers:{"x-environment-key":n.environmentID}};return"GET"!==e&&(i.headers["Content-Type"]="application/json; charset=utf-8"),s(t,i).then((function(t){return 200<=t.status&&300>t.status?t:t.text().then((function(t){var e=t;try{e=JSON.parse(t)}catch(t){}return Promise.reject(e)}))})).then((function(t){return t.json()}))})),o(this,"getFlags",(function(t,e){var r=n.onChange,a=n.onError,s=n.identity,l=n.api,u=(n.disableCache,!1),c=function(t,e){var a=t.flags,s=t.traits,l={},u={};if(s=s||[],(a=a||[]).forEach((function(t){l[t.feature.name.toLowerCase().replace(/ /g,"_")]={enabled:t.enabled,value:t.feature_state_value}})),s.forEach((function(t){u[t.trait_key.toLowerCase().replace(/ /g,"_")]=t.trait_value})),n.oldFlags=function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?i(e,!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({},n.flags),e){var c={};e.map((function(t){c[t.name]=t})),n.segments=c}var g=f(n.flags,l),h=f(n.traits,u);n.flags=l,n.traits=u,n.updateStorage(),r&&r(n.oldFlags,{isFromServer:!0,flagsChanged:!g,traitsChanged:!h})};return s?Promise.all([n.getJSON(l+"identities/?identifier="+encodeURIComponent(s))]).then((function(t){c(t[0],t[1])})).catch((function(t){var e=t.message;a&&a({message:e})})):Promise.all([n.getJSON(l+"flags/")]).then((function(e){c({flags:e[0]},null),t&&!u&&(u=!0,t())})).catch((function(t){e&&!u&&(u=!0,e(t)),a&&a(t)}))})),o(this,"getValue",(function(t){var e=n.flags&&n.flags[t],r=null;return e&&(r=e.value),r})),o(this,"getTrait",(function(t){return n.traits&&n.traits[t]})),o(this,"setTrait",(function(t,e){var r=n.getJSON,i=n.identity,a=n.api;if(a)return r("".concat(a,"traits/"),"POST",JSON.stringify({identity:{identifier:i},trait_key:t,trait_value:e})).then((function(){n.initialised&&n.getFlags()}));console.error(c("setTrait"))})),o(this,"setTraits",(function(t){var e=n.getJSON,i=n.identity,a=n.api;if(a){t&&"object"===r(t)||console.error("Expected object for flagsmith.setTraits");var o=Object.keys(t).map((function(e){return{identity:{identifier:i},trait_key:e,trait_value:t[e]}}));return e("".concat(a,"traits/bulk/"),"PUT",JSON.stringify(o)).then((function(){n.initialised&&n.getFlags()}))}console.error(c("setTraits"))})),o(this,"incrementTrait",(function(t,e){var r=n.getJSON,i=n.identity,a=n.api;return r("".concat(a,"traits/increment-value/"),"POST",JSON.stringify({trait_key:t,increment_by:e,identifier:i})).then(n.getFlags)})),o(this,"hasFeature",(function(t){var e=n.flags&&n.flags[t],r=!1;return e&&e.enabled&&(r=!0),r})),s=e.fetch?e.fetch:global.fetch,l=e.AsyncStorage}return function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(t,[{key:"init",value:function(t){var e=this,n=t.environmentID,r=t.api,i=void 0===r?u:r,a=t.onChange,o=t.cacheFlags,s=t.onError,f=t.defaultFlags,c=t.preventFetch,g=t.enableLogs,h=t.AsyncStorage,y=t.state;return new Promise((function(t,r){if(e.environmentID=n,e.api=i,e.interval=null,e.onChange=a,e.onError=s,e.enableLogs=g,e.flags=Object.assign({},f)||{},e.initialised=!0,e.timer=e.enableLogs?(new Date).valueOf():null,h&&(l=h),e.cacheFlags=void 0!==l&&o,e.setState(y),!n)throw r("Please specify a environment id"),"Please specify a environment id";o?l.getItem("BULLET_TRAIN_DB",(function(n,i){if(i)try{var a=JSON.parse(i);a&&a.api===e.api&&a.environmentID===e.environmentID&&(e.setState(a),e.log("Retrieved flags from cache",a)),e.flags?(e.onChange&&e.onChange(null,{isFromServer:!1}),e.oldFlags=e.flags,t(),!c&&e.getFlags(Promise.resolve,Promise.reject)):!c&&e.getFlags(t,r)}catch(t){e.log("Exception fetching cached logs",t)}else c||e.getFlags(t,r)})):!c&&e.getFlags(t,r)}))}},{key:"getAllFlags",value:function(){return this.flags}},{key:"identify",value:function(t){return this.identity=t,this.initialised&&!this.interval?this.getFlags():Promise.resolve()}},{key:"getState",value:function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,segments:this.segments,traits:this.traits}}},{key:"setState",value:function(t){t&&(this.initialised=!0,this.api=t.api||this.api||u,this.environmentID=t.environmentID||this.environmentID,this.flags=t.flags||this.flags,this.identity=t.identity||this.identity,this.segments=t.segments||this.segments,this.traits=t.traits||this.traits)}},{key:"log",value:function(){if(this.enableLogs){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];console.log.apply(this,["FLAGSMITH:",(new Date).valueOf()-this.timer,"ms"].concat(e))}}},{key:"updateStorage",value:function(){if(this.cacheFlags){var t=JSON.stringify(this.getState());this.log("Setting storage",t),l.setItem("BULLET_TRAIN_DB",t)}}},{key:"logout",value:function(){this.identity=null,this.segments=null,this.traits=null,this.initialised&&!this.interval&&this.getFlags()}},{key:"startListening",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1e3;this.interval||(this.interval=setInterval(this.getFlags,t))}},{key:"getSegments",value:function(){}},{key:"stopListening",value:function(){clearInterval(this.interval)}}]),t}();t.exports=function(t){var e=t.fetch,n=t.AsyncStorage;return new g({fetch:e,AsyncStorage:n})}},function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(i=r;0!=i--;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(a=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!=i--;){var o=a[i];if(!t(e[o],n[o]))return!1}return!0}return e!=e&&n!=n}}])}));