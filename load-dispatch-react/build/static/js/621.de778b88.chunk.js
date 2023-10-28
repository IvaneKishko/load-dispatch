/*! For license information please see 621.de778b88.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcentral_dispatch=self.webpackChunkcentral_dispatch||[]).push([[621],{7621:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(4165),o=r(5861),a=r(9439),c=r(2791),i=r(7689),s=r(3999),u=r(2921),l=r(184),h=function(e){var t=(0,c.useRef)(),r=e.center,n=e.zoom;return(0,c.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:r,zoom:n});new window.google.maps.Marker({position:r,map:e})}),[r,n]),(0,l.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style})},f=function(e){return(0,l.jsxs)("section",{className:"load-card",children:[(0,l.jsxs)("div",{className:"load-card__auto",children:[(0,l.jsx)("h4",{children:e.model}),(0,l.jsx)("img",{src:e.image,alt:"car"})]}),(0,l.jsxs)("div",{className:"load-card__content",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("span",{children:[e.payment," / Certified"]}),(0,l.jsxs)("h4",{children:["$",e.price]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"load-item__label",children:"Company"}),(0,l.jsx)("h4",{children:e.companyName})]}),(0,l.jsx)("div",{children:(0,l.jsx)("a",{href:"tel:".concat(e.phoneNumber),children:(0,l.jsxs)("span",{children:["Tel: ",e.phoneNumber]})})})]}),(0,l.jsxs)("div",{className:"load-item__pick-drop",children:[(0,l.jsxs)("a",{children:[(0,l.jsx)("span",{className:"load-item__label",children:"Pickup Location"}),(0,l.jsx)("h4",{children:e.pickupLocation})]}),(0,l.jsxs)("a",{children:[(0,l.jsx)("span",{className:"load-item__label",children:"Destination"}),(0,l.jsx)("h4",{children:e.dropOffLocation})]}),(0,l.jsxs)("a",{children:[(0,l.jsx)("span",{className:"load-item__label",children:"Pickup Date"}),(0,l.jsx)("span",{children:e.pickupDate})]})]})]})},d=r(9508),p=r(161),m=r(5434),v=r(9895),y=function(){var e,t=(0,c.useState)(),r=(0,a.Z)(t,2),y=r[0],g=r[1],x=(0,c.useContext)(p.V),j=(0,d.x)(),b=j.isLoading,w=j.error,E=j.sendRequest,k=j.clearError,_=(0,i.UO)().loadId,L=(0,i.s0)();(0,c.useEffect)((function(){var e;!function(){(e=e||(0,o.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("https://load-dispatch-rest-api.vercel.app/api"+"/loads/".concat(_),"GET",null,{"Content-Type":"application/json",Authorization:"Bearer "+x.token});case 3:t=e.sent,g(t.load),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}()}),[E,_]);var O=(0,c.useState)(!1),N=(0,a.Z)(O,2),Z=N[0],C=N[1],P=(0,c.useState)(!1),S=(0,a.Z)(P,2),D=S[0],T=S[1],A=function(){return C(!1)},G=function(){T(!1)};return console.log(x.companyName),(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(m.Z,{error:w,onClear:k}),b&&(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(v.Z,{})}),!b&&y&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{show:Z,onCancel:A,header:y.pickupLocation,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,l.jsx)(s.Z,{onClick:A,children:"CLOSE"}),children:(0,l.jsx)("div",{className:"map-container",children:(0,l.jsx)(h,{center:y.location,zoom:16})})}),(0,l.jsx)(u.Z,{show:D,onCancel:G,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(s.Z,{inverse:!0,onClick:G,children:"CANCEL"}),(0,l.jsx)(s.Z,{danger:!0,onClick:function(){return(e=e||(0,o.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!1),e.prev=1,e.next=4,E("https://load-dispatch-rest-api.vercel.app/api"+"/loads/".concat(_),"DELETE",null,{Authorization:"Bearer "+x.token});case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:L("/loads");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)},children:"DELETE"})]}),children:(0,l.jsx)("p",{children:"Do you want to delete? It cant be undone"})}),(0,l.jsx)(f,{model:y.model,image:"".concat("https://load-dispatch-rest-api.vercel.app","/").concat(y.image),payment:y.payment,price:y.price,companyName:y.companyName,phoneNumber:y.phoneNumber,pickupLocation:y.pickupLocation,dropOffLocation:y.dropOffLocation,pickupDate:y.pickupDate}),(0,l.jsxs)("div",{className:"load-card__settings",children:[(0,l.jsx)(s.Z,{inverse:!0,onClick:function(){return C(!0)},children:"VIEW ON MAP"}),x.userId===y.creator&&(0,l.jsx)(s.Z,{to:"/loads/".concat(_,"/edit/"),children:"EDIT"}),x.userId===y.creator&&(0,l.jsx)(s.Z,{danger:!0,onClick:function(){T(!0)},children:"DELETE"})]})]})]})}},3999:function(e,t,r){r.d(t,{Z:function(){return a}});r(2791);var n=r(1087),o=r(184),a=function(e){return e.href?(0,o.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,o.jsx)(n.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,o.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},5434:function(e,t,r){r(2791);var n=r(2921),o=r(3999),a=r(184);t.Z=function(e){return(0,a.jsx)(n.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(o.Z,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})}},2921:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(1413),o=r(2791),a=r(4164),c=r(2972),i=r(9422),s=r(184),u=function(e){var t=(0,s.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,s.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,s.jsx)("h2",{children:e.header})}),(0,s.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,s.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,s.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(t,document.getElementById("modal-hook"))},l=function(e){return(0,s.jsxs)(o.Fragment,{children:[e.show&&(0,s.jsx)(i.Z,{onClick:e.onCancel}),(0,s.jsx)(c.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,s.jsx)(u,(0,n.Z)({},e))})]})}},9508:function(e,t,r){r.d(t,{x:function(){return i}});var n=r(4165),o=r(5861),a=r(9439),c=r(2791),i=function(){var e,t=(0,c.useState)(!1),r=(0,a.Z)(t,2),i=r[0],s=r[1],u=(0,c.useState)(),l=(0,a.Z)(u,2),h=l[0],f=l[1],d=(0,c.useRef)([]),p=(0,c.useCallback)((function(t){return(e=e||(0,o.Z)((0,n.Z)().mark((function e(t){var r,o,a,c,i,u,l=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",o=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3&&void 0!==l[3]?l[3]:{},console.log("Sending request to",t),s(!0),c=new AbortController,d.current.push(c),e.prev=7,e.next=10,fetch(t,{method:r,body:o,headers:a,signal:c.signal});case 10:return i=e.sent,e.next=13,i.json();case 13:if(u=e.sent,d.current=d.current.filter((function(e){return e!==c})),i.ok){e.next=17;break}throw new Error(u.message);case 17:return s(!1),e.abrupt("return",u);case 21:throw e.prev=21,e.t0=e.catch(7),"AbortError"===e.t0.name?console.log("Request was aborted."):(f(e.t0.message),s(!1)),e.t0;case 25:case"end":return e.stop()}}),e,null,[[7,21]])})))).apply(this,arguments)}),[]);return(0,c.useEffect)((function(){return function(){console.log("Cleanup: Aborting active requests"),d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:i,error:h,sendRequest:p,clearError:function(){f(null)}}}},5861:function(e,t,r){function n(e,t,r,n,o,a,c){try{var i=e[a](c),s=i.value}catch(u){return void r(u)}i.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var c=e.apply(t,r);function i(e){n(c,o,a,i,s,"next",e)}function s(e){n(c,o,a,i,s,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return o}})},4942:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(9142);function o(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1413:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},4165:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,c=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof x?t:x,a=Object.create(o.prototype),i=new S(n||[]);return c(a,"_invoke",{value:N(e,r,i)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function x(){}function j(){}function b(){}var w={};h(w,s,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(D([])));k&&k!==r&&a.call(k,s)&&(w=k);var _=b.prototype=x.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,c,i,s){var u=d(e[o],e,c);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&a.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(h).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function N(t,r,n){var o=p;return function(a,c){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw c;return{value:e,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var s=Z(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=d(t,r,n);if("normal"===u.type){if(o=n.done?y:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function Z(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,Z(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var c=a.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}throw new TypeError((0,n.Z)(t)+" is not iterable")}return j.prototype=b,c(_,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:j,configurable:!0}),j.displayName=h(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,h(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},L(O.prototype),h(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new O(f(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},L(_),h(_,l,"Generator"),h(_,s,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=D,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var s=a.call(c,"catchLoc"),u=a.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}}}]);
//# sourceMappingURL=621.de778b88.chunk.js.map