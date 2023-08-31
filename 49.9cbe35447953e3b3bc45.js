"use strict";(self.webpackChunkcurrency_tracker=self.webpackChunkcurrency_tracker||[]).push([[49],{119:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(893),o=r(216),i=function(){return(0,n.jsx)("div",{className:"banner",children:(0,n.jsx)("div",{className:"banner__container",children:(0,n.jsxs)("div",{className:"banner__body",children:[(0,n.jsxs)("div",{className:"banner__content",children:[(0,n.jsx)("h1",{className:"banner__title",children:"Modsen Currency Tracker"}),(0,n.jsx)("p",{className:"banner__text",children:"Quotes for the dollar and other international currencies"})]}),(0,n.jsx)("div",{className:"banner__icon",children:(0,n.jsx)("img",{src:o.Z,alt:"banner-logo"})})]})})})};const c=(0,r(294).memo)(i)},560:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(893),o=r(294);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(){var t,e,r=(t=(0,o.useState)((function(){var t=new Date(Date.now()),e=t.getHours(),r=t.getMinutes();return"".concat(e<10?"0".concat(e):e,":").concat(r<10?"0".concat(r):r)})),e=1,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,u=[],a=!0,f=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);a=!0);}catch(t){f=!0,o=t}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(f)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,n.jsxs)("div",{className:"time",children:["Last updated at ",r,(new Date).getHours()>12?"pm":"am"]})};const u=(0,o.memo)(c)},49:(t,e,r)=>{r.r(e),r.d(e,{default:()=>E});var n=r(893),o=r(222),i=r(158),c=r.n(i),u=r(294);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}c().accessToken="pk.eyJ1IjoiaWFuZHlvbmUiLCJhIjoiY2xsdXU2cXJwMW5ndDNrdGhyeWF5a3M3bSJ9.oZ9P-mgq16XfJIq5E2x2zA";var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(b,t);var e,r,i,p,y=(i=b,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=s(i);if(p){var r=s(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function b(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),(e=y.call(this,t)).checkBanksWithCurrencies=function(){switch(e.props.currency){case o.M.BYN:case o.M.USD:case o.M.EUR:case o.M.PLN:e.map.setStyle(o.S.ALL);break;case o.M.AUD:case o.M.GBP:case o.M.CHF:e.map.setStyle(o.S.ALPHA);break;case o.M.CNY:case o.M.JPY:case o.M.UAH:e.map.setStyle(o.S.PRIOR);break;default:e.map.setStyle(o.S.NONE)}},e.mapContainer=(0,u.createRef)(),e}return e=b,(r=[{key:"componentDidMount",value:function(){this.map=new(c().Map)({container:this.mapContainer.current,center:[27.5676,53.9058],style:o.S.ALL,zoom:10.65})}},{key:"componentDidUpdate",value:function(){this.checkBanksWithCurrencies()}},{key:"render",value:function(){return(0,n.jsx)("div",{className:"map",children:(0,n.jsx)("div",{ref:this.mapContainer,className:"map__container"})})}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),b}(u.PureComponent),y=r(560);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,r,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(o);if(i){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this,t)).handlerOnClick=function(t){var r=e.props,n=r.currency,o=r.handler;t.stopPropagation(),o(n)},e}return e=u,(r=[{key:"render",value:function(){var t=this.props.currency;return(0,n.jsx)("li",{className:"search__option option",onClick:this.handlerOnClick,children:t})}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(u.PureComponent);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(a,t);var e,r,i,c,u=(i=a,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(i);if(c){var r=_(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=u.call(this,t)).currencies=Object.keys(o.M),e.handlerOnChange=function(t){var r=t.target.value.toLowerCase(),n=Boolean(r.length),o=e.currencies.filter((function(t){return t.toLowerCase().includes(r)}));e.setState({value:t.target.value,searchResult:o,showOptions:n})},e.handlerOnClickOption=function(t){e.setState((function(e){return Object.assign(Object.assign({},e),{showOptions:!1,value:t})})),e.props.handlerOnClick(t)},e.handlerOnClickOptions=function(){e.setState((function(t){return Object.assign(Object.assign({},t),{showOptions:!0})}))},e.state={value:"",searchResult:[],showOptions:!1},e}return e=a,(r=[{key:"render",value:function(){var t=this,e=this.state,r=e.searchResult,o=e.value,i=e.showOptions;return(0,n.jsxs)("div",{className:this.props.className+" search",children:[(0,n.jsx)("input",{className:"search__input",value:o,onChange:this.handlerOnChange,type:"text",placeholder:"Сurrency search..."}),i&&(0,n.jsx)("ul",{className:"search__options",children:r.map((function(e){return(0,n.jsx)(m,{currency:e,handler:t.handlerOnClickOption},e)}))})]})}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(u.PureComponent);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,r,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(o);if(i){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this,t)).handlerOnClickOption=function(t){e.setState({currency:t})},e.state={currency:""},e}return e=u,(r=[{key:"render",value:function(){var t=this.state.currency;return(0,n.jsxs)("div",{className:"banks",children:[(0,n.jsx)(y.Z,{}),(0,n.jsx)("h1",{className:"banks__title",children:"Search currency in the bank"}),(0,n.jsx)(S,{className:"banks__input",handlerOnClick:this.handlerOnClickOption}),(0,n.jsx)(p,{currency:t})]})}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(u.Component),R=r(119);const E=(0,r(14).A)((function(){return(0,n.jsx)("div",{className:"card__container",children:(0,n.jsxs)("div",{className:"card__body",children:[(0,n.jsx)(R.Z,{}),(0,n.jsx)(C,{})]})})}),"card","card-page")},14:(t,e,r)=>{r.d(e,{A:()=>f});var n=r(893),o=r(294);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function f(t,e,r){return function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(b,o);var f,l,s,p,y=(s=b,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=a(s);if(p){var r=a(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function b(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),y.apply(this,arguments)}return f=b,(l=[{key:"render",value:function(){return(0,n.jsx)("section",{className:e,"data-testid":r,children:(0,n.jsx)(t,Object.assign({},this.props))})}}])&&c(f.prototype,l),Object.defineProperty(f,"prototype",{writable:!1}),b}(o.Component)}},216:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/9d41d2064864aad1352ca7f15b47319b.webp"}}]);