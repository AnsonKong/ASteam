!function(n){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)a=s[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],r=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),n=a(a.s=e[0]))}return n}var r={},o={3:0},i=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.e=function(n){var t=[],e=o[n];if(0!==e)if(e)t.push(e[2]);else{var r=new Promise(function(t,r){e=o[n]=[t,r]});t.push(e[2]=r);var i,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(n){return a.p+""+({}[n]||n)+"."+{0:"e25c9bfe7b6a8d9dd338"}[n]+".js"}(n),i=function(t){c.onerror=c.onload=null,clearTimeout(u);var e=o[n];if(0!==e){if(e){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+n+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,e[1](a)}o[n]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,s.appendChild(c)}return Promise.all(t)},a.m=n,a.c=r,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)a.d(e,r,function(t){return n[t]}.bind(null,r));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/public/",a.oe=function(n){throw console.error(n),n};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([9,2,1]),e()}([,function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){var r=e(11);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(8).default)("52c571c6",r,!0,{})},,function(n,t,e){"use strict";function r(n,t,e,r,o,i,a,s){var c,u="function"==typeof n?n.options:n;if(t&&(u.render=t,u.staticRenderFns=e,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(n,t){return c.call(t),l(n,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:n,options:u}}e.d(t,"a",function(){return r})},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){(function(t){var e="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,f=l||d||Function("return this")(),p=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return f.Date.now()};function v(n,t,r){var o,i,a,s,c,u,l=0,d=!1,f=!1,p=!0;if("function"!=typeof n)throw new TypeError(e);function v(t){var e=o,r=i;return o=i=void 0,l=t,s=n.apply(r,e)}function _(n){var e=n-u;return void 0===u||e>=t||e<0||f&&n-l>=a}function w(){var n=g();if(_(n))return x(n);c=setTimeout(w,function(n){var e=t-(n-u);return f?m(e,a-(n-l)):e}(n))}function x(n){return c=void 0,p&&o?v(n):(o=i=void 0,s)}function E(){var n=g(),e=_(n);if(o=arguments,i=this,u=n,e){if(void 0===c)return function(n){return l=n,c=setTimeout(w,t),d?v(n):s}(u);if(f)return c=setTimeout(w,t),v(u)}return void 0===c&&(c=setTimeout(w,t)),s}return t=y(t)||0,b(r)&&(d=!!r.leading,a=(f="maxWait"in r)?h(y(r.maxWait)||0,t):a,p="trailing"in r?!!r.trailing:p),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=i=c=void 0},E.flush=function(){return void 0===c?s:x(g())},E}function b(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function y(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&p.call(n)==o}(n))return r;if(b(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=b(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var e=s.test(n);return e||c.test(n)?u(n.slice(2),e?2:8):a.test(n)?r:+n}n.exports=function(n,t,r){var o=!0,i=!0;if("function"!=typeof n)throw new TypeError(e);return b(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),v(n,t,{leading:o,maxWait:t,trailing:i})}}).call(this,e(1))},function(n,t){function e(n,t){var r={name:n.name,path:n.path,hash:n.hash,query:n.query,params:n.params,fullPath:n.fullPath,meta:n.meta};return t&&(r.from=e(t)),Object.freeze(r)}t.sync=function(n,t,r){var o=(r||{}).moduleName||"route";n.registerModule(o,{namespaced:!0,state:e(t.currentRoute),mutations:{ROUTE_CHANGED:function(t,r){n.state[o]=e(r.to,r.from)}}});var i,a=!1,s=n.watch(function(n){return n[o]},function(n){var e=n.fullPath;e!==i&&(null!=i&&(a=!0,t.push(n)),i=e)},{sync:!0}),c=t.afterEach(function(t,e){a?a=!1:(i=t.fullPath,n.commit(o+"/ROUTE_CHANGED",{to:t,from:e}))});return function(){null!=c&&c(),null!=s&&s(),n.unregisterModule(o)}}},function(n,t,e){"use strict";function r(n,t){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:n+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}e.r(t),e.d(t,"default",function(){return h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(n,t,e,o){u=e,d=o||{};var a=r(n,t);return m(a),function(t){for(var e=[],o=0;o<a.length;o++){var s=a[o];(c=i[s.id]).refs--,e.push(c)}t?m(a=r(n,t)):a=[];for(o=0;o<e.length;o++){var c;if(0===(c=e[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function m(n){for(var t=0;t<n.length;t++){var e=n[t],r=i[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(v(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var a=[];for(o=0;o<e.parts.length;o++)a.push(v(e.parts[o]));i[e.id]={id:e.id,refs:1,parts:a}}}}function g(){var n=document.createElement("style");return n.type="text/css",a.appendChild(n),n}function v(n){var t,e,r=document.querySelector("style["+f+'~="'+n.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(p){var o=c++;r=s||(s=g()),t=_.bind(null,r,o,!1),e=_.bind(null,r,o,!0)}else r=g(),t=function(n,t){var e=t.css,r=t.media,o=t.sourceMap;r&&n.setAttribute("media",r);d.ssrId&&n.setAttribute(f,t.id);o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,r),e=function(){r.parentNode.removeChild(r)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else e()}}var b,y=(b=[],function(n,t){return b[n]=t,b.filter(Boolean).join("\n")});function _(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t,e){"use strict";e.r(t);var r=e(0),o=(e(12),e(4)),i=Object(o.a)({},function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("router-view")],1)},[],!1,null,null,null).exports,a=e(3);r.a.use(a.a);
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var s=function(n){if(Number(n.version.split(".")[0])>=2)n.mixin({beforeCreate:e});else{var t=n.prototype._init;n.prototype._init=function(n){void 0===n&&(n={}),n.init=n.init?[e].concat(n.init):e,t.call(this,n)}}function e(){var n=this.$options;n.store?this.$store="function"==typeof n.store?n.store():n.store:n.parent&&n.parent.$store&&(this.$store=n.parent.$store)}},c="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function u(n,t){Object.keys(n).forEach(function(e){return t(n[e],e)})}var l=function(n,t){this.runtime=t,this._children=Object.create(null),this._rawModule=n;var e=n.state;this.state=("function"==typeof e?e():e)||{}},d={namespaced:{configurable:!0}};d.namespaced.get=function(){return!!this._rawModule.namespaced},l.prototype.addChild=function(n,t){this._children[n]=t},l.prototype.removeChild=function(n){delete this._children[n]},l.prototype.getChild=function(n){return this._children[n]},l.prototype.update=function(n){this._rawModule.namespaced=n.namespaced,n.actions&&(this._rawModule.actions=n.actions),n.mutations&&(this._rawModule.mutations=n.mutations),n.getters&&(this._rawModule.getters=n.getters)},l.prototype.forEachChild=function(n){u(this._children,n)},l.prototype.forEachGetter=function(n){this._rawModule.getters&&u(this._rawModule.getters,n)},l.prototype.forEachAction=function(n){this._rawModule.actions&&u(this._rawModule.actions,n)},l.prototype.forEachMutation=function(n){this._rawModule.mutations&&u(this._rawModule.mutations,n)},Object.defineProperties(l.prototype,d);var f=function(n){this.register([],n,!1)};f.prototype.get=function(n){return n.reduce(function(n,t){return n.getChild(t)},this.root)},f.prototype.getNamespace=function(n){var t=this.root;return n.reduce(function(n,e){return n+((t=t.getChild(e)).namespaced?e+"/":"")},"")},f.prototype.update=function(n){!function n(t,e,r){0;e.update(r);if(r.modules)for(var o in r.modules){if(!e.getChild(o))return void 0;n(t.concat(o),e.getChild(o),r.modules[o])}}([],this.root,n)},f.prototype.register=function(n,t,e){var r=this;void 0===e&&(e=!0);var o=new l(t,e);0===n.length?this.root=o:this.get(n.slice(0,-1)).addChild(n[n.length-1],o);t.modules&&u(t.modules,function(t,o){r.register(n.concat(o),t,e)})},f.prototype.unregister=function(n){var t=this.get(n.slice(0,-1)),e=n[n.length-1];t.getChild(e).runtime&&t.removeChild(e)};var p;var h=function(n){var t=this;void 0===n&&(n={}),!p&&"undefined"!=typeof window&&window.Vue&&x(window.Vue);var e=n.plugins;void 0===e&&(e=[]);var r=n.strict;void 0===r&&(r=!1);var o=n.state;void 0===o&&(o={}),"function"==typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(n),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var i=this,a=this.dispatch,s=this.commit;this.dispatch=function(n,t){return a.call(i,n,t)},this.commit=function(n,t,e){return s.call(i,n,t,e)},this.strict=r,y(this,o,[],this._modules.root),b(this,o),e.forEach(function(n){return n(t)}),p.config.devtools&&function(n){c&&(n._devtoolHook=c,c.emit("vuex:init",n),c.on("vuex:travel-to-state",function(t){n.replaceState(t)}),n.subscribe(function(n,t){c.emit("vuex:mutation",n,t)}))}(this)},m={state:{configurable:!0}};function g(n,t){return t.indexOf(n)<0&&t.push(n),function(){var e=t.indexOf(n);e>-1&&t.splice(e,1)}}function v(n,t){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var e=n.state;y(n,e,[],n._modules.root,!0),b(n,e,t)}function b(n,t,e){var r=n._vm;n.getters={};var o={};u(n._wrappedGetters,function(t,e){o[e]=function(){return t(n)},Object.defineProperty(n.getters,e,{get:function(){return n._vm[e]},enumerable:!0})});var i=p.config.silent;p.config.silent=!0,n._vm=new p({data:{$$state:t},computed:o}),p.config.silent=i,n.strict&&function(n){n._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(n),r&&(e&&n._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function y(n,t,e,r,o){var i=!e.length,a=n._modules.getNamespace(e);if(r.namespaced&&(n._modulesNamespaceMap[a]=r),!i&&!o){var s=_(t,e.slice(0,-1)),c=e[e.length-1];n._withCommit(function(){p.set(s,c,r.state)})}var u=r.context=function(n,t,e){var r=""===t,o={dispatch:r?n.dispatch:function(e,r,o){var i=w(e,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=t+c),n.dispatch(c,a)},commit:r?n.commit:function(e,r,o){var i=w(e,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=t+c),n.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return n.getters}:function(){return function(n,t){var e={},r=t.length;return Object.keys(n.getters).forEach(function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(e,i,{get:function(){return n.getters[o]},enumerable:!0})}}),e}(n,t)}},state:{get:function(){return _(n.state,e)}}}),o}(n,a,e);r.forEachMutation(function(t,e){!function(n,t,e,r){(n._mutations[t]||(n._mutations[t]=[])).push(function(t){e.call(n,r.state,t)})}(n,a+e,t,u)}),r.forEachAction(function(t,e){var r=t.root?e:a+e,o=t.handler||t;!function(n,t,e,r){(n._actions[t]||(n._actions[t]=[])).push(function(t,o){var i,a=e.call(n,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:n.getters,rootState:n.state},t,o);return(i=a)&&"function"==typeof i.then||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(t){throw n._devtoolHook.emit("vuex:error",t),t}):a})}(n,r,o,u)}),r.forEachGetter(function(t,e){!function(n,t,e,r){if(n._wrappedGetters[t])return void 0;n._wrappedGetters[t]=function(n){return e(r.state,r.getters,n.state,n.getters)}}(n,a+e,t,u)}),r.forEachChild(function(r,i){y(n,t,e.concat(i),r,o)})}function _(n,t){return t.length?t.reduce(function(n,t){return n[t]},n):n}function w(n,t,e){var r;return null!==(r=n)&&"object"==typeof r&&n.type&&(e=t,t=n,n=n.type),{type:n,payload:t,options:e}}function x(n){p&&n===p||s(p=n)}m.state.get=function(){return this._vm._data.$$state},m.state.set=function(n){0},h.prototype.commit=function(n,t,e){var r=this,o=w(n,t,e),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(n){n(a)})}),this._subscribers.forEach(function(n){return n(s,r.state)}))},h.prototype.dispatch=function(n,t){var e=this,r=w(n,t),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(n){return n(a,e.state)}),s.length>1?Promise.all(s.map(function(n){return n(i)})):s[0](i)},h.prototype.subscribe=function(n){return g(n,this._subscribers)},h.prototype.subscribeAction=function(n){return g(n,this._actionSubscribers)},h.prototype.watch=function(n,t,e){var r=this;return this._watcherVM.$watch(function(){return n(r.state,r.getters)},t,e)},h.prototype.replaceState=function(n){var t=this;this._withCommit(function(){t._vm._data.$$state=n})},h.prototype.registerModule=function(n,t,e){void 0===e&&(e={}),"string"==typeof n&&(n=[n]),this._modules.register(n,t),y(this,this.state,n,this._modules.get(n),e.preserveState),b(this,this.state)},h.prototype.unregisterModule=function(n){var t=this;"string"==typeof n&&(n=[n]),this._modules.unregister(n),this._withCommit(function(){var e=_(t.state,n.slice(0,-1));p.delete(e,n[n.length-1])}),v(this)},h.prototype.hotUpdate=function(n){this._modules.update(n),v(this,!0)},h.prototype._withCommit=function(n){var t=this._committing;this._committing=!0,n(),this._committing=t},Object.defineProperties(h.prototype,m);var E=S(function(n,t){var e={};return O(t).forEach(function(t){var r=t.key,o=t.val;e[r]=function(){var t=this.$store.state,e=this.$store.getters;if(n){var r=j(this.$store,"mapState",n);if(!r)return;t=r.context.state,e=r.context.getters}return"function"==typeof o?o.call(this,t,e):t[o]},e[r].vuex=!0}),e}),C=S(function(n,t){var e={};return O(t).forEach(function(t){var r=t.key,o=t.val;e[r]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var r=this.$store.commit;if(n){var i=j(this.$store,"mapMutations",n);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}}),e}),k=S(function(n,t){var e={};return O(t).forEach(function(t){var r=t.key,o=t.val;o=n+o,e[r]=function(){if(!n||j(this.$store,"mapGetters",n))return this.$store.getters[o]},e[r].vuex=!0}),e}),T=S(function(n,t){var e={};return O(t).forEach(function(t){var r=t.key,o=t.val;e[r]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var r=this.$store.dispatch;if(n){var i=j(this.$store,"mapActions",n);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}}),e});function O(n){return Array.isArray(n)?n.map(function(n){return{key:n,val:n}}):Object.keys(n).map(function(t){return{key:t,val:n[t]}})}function S(n){return function(t,e){return"string"!=typeof t?(e=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),n(t,e)}}function j(n,t,e){return n._modulesNamespaceMap[e]}var M={Store:h,install:x,version:"3.0.1",mapState:E,mapMutations:C,mapGetters:k,mapActions:T,createNamespacedHelpers:function(n){return{mapState:E.bind(null,n),mapGetters:k.bind(null,n),mapMutations:C.bind(null,n),mapActions:T.bind(null,n)}}};r.a.use(M);var I={beforeRouteUpdate(n,t,e){const{asyncData:r}=this.$options;r?r({store:this.$store,route:n}).then(e).catch(e):e()},methods:{loadSlide(n){n.querySelectorAll("div[data-slide]").forEach(n=>{n.style["background-image"]=`url(${n.dataset.slide})`})}}},$=e(7),z=e(6),A=e.n(z);const{app:R,router:N,store:P}=function(){const n=new a.a({mode:"history",routes:[{path:"/",component:()=>e.e(0).then(e.bind(null,40))}]}),t=new M.Store({state:{user:null},actions:{updateUser(n,t){n.commit("setUser",t)}},mutations:{setUser(n,t){n.user=t}}});return r.a.mixin(I),r.a.directive("scroll",{inserted:function(n,t){let e=A()(function(r){t.value(r,n)&&window.removeEventListener("scroll",e)},500);window.addEventListener("scroll",e)}}),Object($.sync)(t,n),{app:new r.a({router:n,store:t,render:n=>n(i)}),router:n,store:t}}();window.__INITIAL_STATE__&&P.replaceState(window.__INITIAL_STATE__),N.onReady(()=>{N.beforeResolve((n,t,e)=>{const r=N.getMatchedComponents(n),o=N.getMatchedComponents(t);let i=!1;const a=r.filter((n,t)=>i||(i=o[t]!==n));Promise.all(a.map(t=>{if(t.asyncData)return t.asyncData({store:P,route:n})})).then(()=>{e()}).catch(e)}),R.$mount("#app")})},function(n,t,e){(n.exports=e(5)(!1)).push([n.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,t,e){(t=n.exports=e(5)(!1)).i(e(10),""),t.push([n.i,'/*\n * Vendors\n */\n/*\n * Objects\n */\n.o-layout-h {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.o-container {\n  position: relative;\n  width: 940px;\n  margin: 0 auto;\n}\n/*\n * Elements\n */\nhtml {\n  font-size: 11px;\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  background: url("/public/colored_body_top2.png") center top no-repeat #1b2838;\n}\na {\n  text-decoration: none;\n  cursor: pointer;\n}\nli {\n  list-style: none;\n}\n/*\n * Components\n */\n.c-btn {\n  cursor: pointer;\n  display: inline-block;\n}\n.c-btn--grey {\n  color: #b8b6b4;\n}\n.c-btn--grey:hover {\n  color: #fff;\n}\n.c-btn--green {\n  color: #e5e4dc;\n  background: #5c7e10;\n}\n.c-btn--green:hover {\n  color: #fff;\n}\n.c-btn--narrow {\n  padding: 7px;\n}\n.c-btn--wide {\n  padding: 9px;\n}\n.c-btn--inverse {\n  padding: 1px 16px;\n  font-size: 12px;\n  line-height: 20px;\n  border: 1px solid rgba(255,255,255,0.4);\n  border-radius: 2px;\n  color: #fff;\n}\n.c-btn--inverse:hover {\n  border: 1px solid #fff;\n}\n.c-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.c-nav--dark {\n  box-shadow: 0 0 3px rgba(0,0,0,0.4);\n  background: rgba(48,95,128,0.9);\n}\n.c-nav__item {\n  position: relative;\n}\n.c-nav__item__btn {\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.c-nav__item__btn--grey {\n  color: #b8b6b4;\n  padding: 10px;\n}\n.c-nav__item__btn--grey:hover {\n  color: #fff;\n}\n.c-nav__item__btn--dark {\n  padding: 0 10px;\n  color: #d9dadd;\n  border-right: 1px solid rgba(16,21,25,0.3);\n  background: rgba(255,255,255,0);\n  font-size: 13px;\n  line-height: 35px;\n}\n.c-nav__item__btn--dark:hover {\n  color: #000;\n  background: rgba(255,255,255,0.8);\n}\n.c-nav__item__btn--big {\n  font-size: 14px;\n}\n.c-dropdown {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  z-index: 1500;\n  transition: all 0.5s;\n}\n.c-dropdown--active {\n  opacity: 1;\n  visibility: visible;\n}\n.c-dropdown--deactive {\n  opacity: 0;\n  visibility: hidden;\n}\n.c-dropdown--dark {\n  background: #171a21;\n  padding: 5px 15px 10px 15px;\n  box-shadow: 3px 3px 5px -3px #000;\n}\n.c-dropdown--light {\n  background: linear-gradient(to bottom, #e3eaef 5%, #c7d5e0 95%);\n  padding: 8px 5px;\n  box-shadow: 0 0 12px #000;\n}\n.c-dropdown__item {\n  cursor: pointer;\n  white-space: nowrap;\n}\n.c-dropdown__item--small {\n  font-size: 11px;\n}\n.c-dropdown__item--big {\n  font-size: 13px;\n  padding: 5px 12px;\n}\n.c-dropdown__item--dark {\n  color: #000;\n}\n.c-dropdown__item--dark:hover {\n  color: #fff;\n  background: #222e3c;\n}\n.c-dropdown__item--blue {\n  color: #4f94bc;\n}\n.c-dropdown__hr {\n  height: 1px;\n  margin: 5px 10px;\n  background: #fff;\n}\n.c-slider__container {\n  position: relative;\n  cursor: pointer;\n}\n.c-slider__main {\n  display: flex;\n  transition: all 0.5s;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.c-slider__main-active {\n  opacity: 1;\n  visibility: visible;\n}\n.c-slider__main-deactive {\n  opacity: 0;\n  visibility: hidden;\n}\n.c-slider__item {\n  background: linear-gradient(135deg, #25313f 5%, #36617d 95%);\n}\n.c-slider__arrow-container {\n  position: absolute;\n  top: calc(50% - 54px);\n  width: 45px;\n  height: 108px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.c-slider__arrow-container--left {\n  left: -45px;\n  background: linear-gradient(to right, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0) 95%);\n}\n.c-slider__arrow-container--left:hover {\n  background: linear-gradient(to right, rgba(171,218,244,0.3) 5%, rgba(171,218,244,0) 95%);\n}\n.c-slider__arrow-container--right {\n  right: -45px;\n  background: linear-gradient(to right, rgba(0,0,0,0) 5%, rgba(0,0,0,0.3) 95%);\n}\n.c-slider__arrow-container--right:hover {\n  background: linear-gradient(to right, rgba(171,218,244,0) 5%, rgba(171,218,244,0.3) 95%);\n}\n.c-slider__arrow {\n  width: 23px;\n  height: 36px;\n  background-image: url("/public/arrows.png");\n}\n.c-slider__arrow--left {\n  left: 0;\n  background-position-x: 23px;\n}\n.c-slider__arrow--right {\n  right: 0;\n}\n.c-slider__thumbs-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n}\n.c-slider__thumb {\n  cursor: pointer;\n  width: 15px;\n  height: 9px;\n  background-color: rgba(255,255,255,0.2);\n  border-radius: 2px;\n  transition: all 0.5s;\n  margin: 0 2px;\n}\n.c-slider__thumb:hover {\n  background-color: rgba(255,255,255,0.4);\n}\n.c-slider__thumb--active {\n  background-color: rgba(255,255,255,0.4);\n}\n',""])},function(n,t,e){"use strict";var r=e(2);e.n(r).a},function(n,t){var e,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(n){if(e===setTimeout)return setTimeout(n,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(n){e=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(n){r=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var n=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function h(n,t){this.fun=n,this.array=t}function m(){}o.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];u.push(new h(n,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(n,t,e){(function(n,t){!function(n,e){"use strict";if(!n.setImmediate){var r,o,i,a,s,c=1,u={},l=!1,d=n.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(n);f=f&&f.setTimeout?f:n,"[object process]"==={}.toString.call(n.process)?r=function(n){t.nextTick(function(){h(n)})}:!function(){if(n.postMessage&&!n.importScripts){var t=!0,e=n.onmessage;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}}()?n.MessageChannel?((i=new MessageChannel).port1.onmessage=function(n){h(n.data)},r=function(n){i.port2.postMessage(n)}):d&&"onreadystatechange"in d.createElement("script")?(o=d.documentElement,r=function(n){var t=d.createElement("script");t.onreadystatechange=function(){h(n),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(n){setTimeout(h,0,n)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===n&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},n.addEventListener?n.addEventListener("message",s,!1):n.attachEvent("onmessage",s),r=function(t){n.postMessage(a+t,"*")}),f.setImmediate=function(n){"function"!=typeof n&&(n=new Function(""+n));for(var t=new Array(arguments.length-1),e=0;e<t.length;e++)t[e]=arguments[e+1];var o={callback:n,args:t};return u[c]=o,r(c),c++},f.clearImmediate=p}function p(n){delete u[n]}function h(n){if(l)setTimeout(h,0,n);else{var t=u[n];if(t){l=!0;try{!function(n){var t=n.callback,r=n.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(e,r)}}(t)}finally{p(n),l=!1}}}}}("undefined"==typeof self?void 0===n?this:n:self)}).call(this,e(1),e(13))},function(n,t,e){(function(n){var r=void 0!==n&&n||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(n,t){this._id=n,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(n){n&&n.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(n,t){clearTimeout(n._idleTimeoutId),n._idleTimeout=t},t.unenroll=function(n){clearTimeout(n._idleTimeoutId),n._idleTimeout=-1},t._unrefActive=t.active=function(n){clearTimeout(n._idleTimeoutId);var t=n._idleTimeout;t>=0&&(n._idleTimeoutId=setTimeout(function(){n._onTimeout&&n._onTimeout()},t))},e(14),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==n&&n.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==n&&n.clearImmediate||this&&this.clearImmediate}).call(this,e(1))}]);
//# sourceMappingURL=main.8d59c43f481c2eba502c.js.map