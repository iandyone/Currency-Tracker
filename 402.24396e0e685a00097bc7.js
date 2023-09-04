"use strict";(self.webpackChunkcurrency_tracker=self.webpackChunkcurrency_tracker||[]).push([[402],{662:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(893),o=r(216);var i=function(){return(0,n.jsx)("div",{className:"banner",children:(0,n.jsx)("div",{className:"banner__container",children:(0,n.jsxs)("div",{className:"banner__body",children:[(0,n.jsxs)("div",{className:"banner__content",children:[(0,n.jsx)("h1",{className:"banner__title",children:"Modsen Currency Tracker"}),(0,n.jsx)("p",{className:"banner__text",children:"Quotes for the dollar and other international currencies"})]}),(0,n.jsx)("div",{className:"banner__icon",children:(0,n.jsx)("img",{src:o.Z,alt:"banner-logo"})})]})})})};const c=(0,r(294).memo)(i)},220:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(294),o=r(935);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){var e,r,c=t.children,a=t.id,u=void 0===a?"Portal":a,l=(0,n.useState)((function(){var t=document.createElement("div");return t.setAttribute("id",u),t})),s=(e=l,r=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,n.useEffect)((function(){var t=document.querySelector(".app");return t.appendChild(s),function(){t.removeChild(s)}}),[s]),(0,o.createPortal)(c,s)};const a=(0,n.memo)(c)},537:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(893),o=r(294);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(){var t,e,r=(0,o.useState)((function(){var t=new Date(Number(localStorage.getItem("update"))),e=t.getHours(),r=t.getMinutes();return"".concat(e<10?"0".concat(e):e,":").concat(r<10?"0".concat(r):r)})),c=(t=r,e=1,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,n.jsxs)("div",{className:"time",children:["Last updated at ",c,(new Date).getHours()>12?"pm":"am"]})};const a=(0,o.memo)(c)},402:(t,e,r)=>{r.r(e),r.d(e,{default:()=>$});var n=r(893),o=r(662),i=r(449),c=r(294),a=r(495);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}i.kL.register(i.uw,i.f$,i.ZL,i.Dx,i.u,i.De);var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(p,t);var e,r,o,i,c=(o=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(o);if(i){var r=f(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=c.call(this,t)).values=Object.values(e.props.costs),e.days=new Array(e.props.period).fill(0).map((function(t,e){return String("Day ".concat(e+1))})),e.costs=e.values.map(String),e.options={responsive:!0,scales:{x:{min:0,max:e.props.period,title:{display:!0,text:"DAY",color:"white",padding:5,align:"end"},ticks:{display:!1},border:{color:"white"}},y:{max:16,min:-16,title:{display:!0,text:"VALUE",color:"white",padding:5,align:"end"},ticks:{display:!1},border:{color:"white"}}},plugins:{legend:{display:!1}}},e.data={labels:e.days,datasets:[{data:e.costs,backgroundColor:"#16C782",categoryPercentage:1.1,borderColor:"red",borderWidth:3}]},e}return e=p,(r=[{key:"render",value:function(){return(0,n.jsx)("div",{className:"diagram","data-testid":"diagram",children:(0,n.jsx)(a.$Q,{options:this.options,data:this.data})})}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),p}(c.PureComponent),y=r(220);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(a,t);var e,r,o,i,c=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(o);if(i){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,t)).handlerOnChange=function(t){var r=t.target.value;if(!(r.length>5)){var n=Number(r),o=!n||Math.abs(n)>15?"Wrong value":null;e.setState({value:r,error:o}),e.props.setCost(e.props.id,o?0:n)}},e.state={value:"",error:null},e}return e=a,(r=[{key:"render",value:function(){var t=this.props.id,e=this.state.error;return(0,n.jsxs)("div",{className:"cost",children:[(0,n.jsx)("h4",{className:"cost__title ".concat(e&&"active"),children:e||"Day ".concat(t,": ")}),(0,n.jsx)("input",{type:"number",className:"cost__input ".concat(e&&"active"),value:this.state.value,onChange:this.handlerOnChange,placeholder:"cost","data-testid":"timeline-input"})]})}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(c.Component),j=r(760);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(a,t);var e,r,o,i,c=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(o);if(i){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,t)).handlerOnClickTitle=function(){e.setState((function(t){return Object.assign(Object.assign({},t),{showMenu:!t.showMenu})}))},e.handlerOnClickOption=function(t){return function(){e.setState((function(t){return Object.assign(Object.assign({},t),{showMenu:!1})})),e.props.handlerOnClick(t)}},e.state={currencies:[],showMenu:!1},e}return e=a,(r=[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("currenciesData")),e=Object.keys(j.Mk).map((function(e){return t.data[e].name}));this.setState((function(t){return Object.assign(Object.assign({},t),{currencies:e})}))}},{key:"render",value:function(){var t=this,e=this.state,r=e.currencies,o=e.showMenu;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"current","data-testid":"timeline-select",children:[(0,n.jsx)("div",{className:"current__title ".concat(o&&"active"),onClick:this.handlerOnClickTitle,"data-testid":"timeline-currency",children:this.props.option}),(0,n.jsx)("ul",{className:"current__options",children:o&&r.map((function(e){return(0,n.jsx)("li",{className:"current__option",onClick:t.handlerOnClickOption(e),"data-testid":"timeline-select-option",children:e},e)}))})]})})}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(c.PureComponent),P=r(537),x=r(704),C=r(276),k=r(113);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}i.kL.register(i.uw,i.f$,i.ZL,i.Dx,i.u,i.De);var D=x.h.dispatch,A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(a,t);var e,r,o,i,c=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(o);if(i){var r=N(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,t)).defaultOption="Choose the currency",e.showGraph=function(){e.setState({showGraph:!0})},e.showGraphButton=function(){e.setState((function(t){return Object.assign(Object.assign({},t),{showGraphButton:!0})}))},e.resetState=function(t){e.setState((function(e){return Object.assign(Object.assign({},e),{showGraph:!1,option:t})})),D((0,C.Nq)())},e.setCost=function(t,e){var r=Object.assign({},x.h.getState().diagram.diagramData);if(!e)return delete r[t],void D((0,C.Gq)(r));r[t]=e,D((0,C.Gq)(r))},e.state={showGraph:!1,option:e.defaultOption},e}return e=a,(r=[{key:"setOption",value:function(t){this.setState((function(e){return Object.assign(Object.assign({},e),{option:t})}))}},{key:"render",value:function(){var t=this,e=x.h.getState().diagram,r=e.diagramData,o=e.requiredValues,i=this.state,c=i.option,a=i.showGraph,u=this.props.showDiagramModal,l=new Array(o).fill(1),s=u&&!a,f=c!==this.defaultOption&&!a;return(0,n.jsx)("div",{className:"timeline","data-testid":"timeline",children:(0,n.jsxs)("div",{className:"timeline__container container",children:[(0,n.jsx)(P.Z,{}),(0,n.jsxs)("div",{className:"graph",children:[(0,n.jsx)(_,{handlerOnClick:this.resetState,option:c}),(0,n.jsx)("div",{className:"cost__body",children:f&&(0,n.jsx)("div",{className:"cost__content",children:l.map((function(e,r){return(0,n.jsx)(v,{id:r+1,setCost:t.setCost},r)}))})}),s&&(0,n.jsx)("button",{className:"cost__button",onClick:this.showGraph,"data-testid":"timeline-button",children:"Show diagram"}),a&&(0,n.jsx)(p,{costs:r,period:o,currency:c}),s&&(0,n.jsx)(y.Z,{id:"diagram-modal",children:(0,n.jsx)("div",{className:"diagram-modal ".concat(s&&"active"),children:"The currency diagram was created!"})})]})]})})}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(c.Component),B=(0,k.$j)((function(t){var e=t.diagram,r=e.diagramData,n=e.requiredValues;return{showDiagramModal:Object.keys(r).length===n}}))(A),M=r(14);function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===G(o)?o:String(o)),n)}var o}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,r,i,c,a=(i=u,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(i);if(c){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),a.call(this,t)}return e=u,(r=[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"timeline__content",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(B,{})]})}}])&&Z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(c.Component);const $=(0,M.A)(L,"timeline-page","timeline-page")},14:(t,e,r)=>{r.d(e,{A:()=>l});var n=r(893),o=r(294);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function l(t,e,r){return function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(b,o);var l,s,f,p,y=(f=b,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(f);if(p){var r=u(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function b(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),y.apply(this,arguments)}return l=b,(s=[{key:"render",value:function(){return(0,n.jsx)("section",{className:e,"data-testid":r,children:(0,n.jsx)(t,Object.assign({},this.props))})}}])&&c(l.prototype,s),Object.defineProperty(l,"prototype",{writable:!1}),b}(o.Component)}},216:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/9d41d2064864aad1352ca7f15b47319b.webp"}}]);