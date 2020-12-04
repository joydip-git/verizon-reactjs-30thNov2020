/*! For license information please see header.bundle.js.LICENSE.txt */
(()=>{var e={132:(e,t,r)=>{var n,o;n=[t,r(294)],void 0===(o=function(e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),t.default=void 0,r=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){return r.default.createElement("h3",{id:"mainHeader",style:{fontFamily:"Arial",border:"1px solid azure",borderRadius:"5px"}},e.headerData)}}.apply(t,n))||(e.exports=o)},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var a,i,c=o(e),f=1;f<arguments.length;f++){for(var l in a=Object(arguments[f]))r.call(a,l)&&(c[l]=a[l]);if(t){i=t(a);for(var s=0;s<i.length;s++)n.call(a,i[s])&&(c[i[s]]=a[i[s]])}}return c}},408:(e,t,r)=>{"use strict";var n=r(418),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,c=60112;t.Suspense=60113;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),u=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),a=s("react.provider"),i=s("react.context"),c=s("react.forward_ref"),t.Suspense=s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function _(){}function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var b=m.prototype=new _;b.constructor=m,n(b,h.prototype),b.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,u={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(u[n]=t[n]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];u.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===u[n]&&(u[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:i,props:u,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,r,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case u:c=!0}}if(c)return a=a(c=e),e=""===n?"."+E(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),$(a,t,r,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=n+E(i=e[f],f);c+=$(i,t,r,l,a)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),f=0;!(i=e.next()).done;)c+=$(i=i.value,t,r,l=n+E(i,f++),a);else if("object"===i)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function x(){var e=P.current;if(null===e)throw Error(y(321));return e}var A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(y(143));return e}},t.Component=h,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var u=n({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=g.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)j.call(t,l)&&!w.hasOwnProperty(l)&&(u[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)u.children=r;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:o,type:e.type,key:a,ref:i,props:u,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return x().useCallback(e,t)},t.useContext=function(e,t){return x().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return x().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return x().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return x().useLayoutEffect(e,t)},t.useMemo=function(e,t){return x().useMemo(e,t)},t.useReducer=function(e,t,r){return x().useReducer(e,t,r)},t.useRef=function(e){return x().useRef(e)},t.useState=function(e){return x().useState(e)},t.version="17.0.1"},294:(e,t,r)=>{"use strict";e.exports=r(408)}},t={};!function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(132)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1maXJzdC1hcHAvLi9zcmMvSGVhZGVyQ29tcC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1maXJzdC1hcHAvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1maXJzdC1hcHAvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3JlYWN0LWZpcnN0LWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1maXJzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtZmlyc3QtYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjb250ZW50IiwiaWQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJoZWFkZXJEYXRhIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImkiLCJmcm9tQ2hhckNvZGUiLCJtYXAiLCJuIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsInNob3VsZFVzZU5hdGl2ZSIsInRhcmdldCIsInNvdXJjZSIsImZyb20iLCJzeW1ib2xzIiwidG8iLCJzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwia2V5IiwiY2FsbCIsImwiLCJwIiwiRnJhZ21lbnQiLCJTdHJpY3RNb2RlIiwiUHJvZmlsZXIiLCJxIiwiciIsInQiLCJTdXNwZW5zZSIsInUiLCJ2IiwiU3ltYm9sIiwiZm9yIiwidyIsIngiLCJpdGVyYXRvciIsInoiLCJhIiwiYiIsImMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJBIiwiaXNNb3VudGVkIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsImVucXVldWVTZXRTdGF0ZSIsIkIiLCJDIiwidGhpcyIsInByb3BzIiwiY29udGV4dCIsInJlZnMiLCJ1cGRhdGVyIiwiRCIsIkUiLCJpc1JlYWN0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJFcnJvciIsImZvcmNlVXBkYXRlIiwiRiIsImNvbnN0cnVjdG9yIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJHIiwiY3VycmVudCIsIkgiLCJJIiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJKIiwiZSIsImQiLCJrIiwiaCIsImciLCJjaGlsZHJlbiIsImYiLCJBcnJheSIsIm0iLCJkZWZhdWx0UHJvcHMiLCIkJHR5cGVvZiIsInR5cGUiLCJfb3duZXIiLCJMIiwiTSIsIk4iLCJyZXBsYWNlIiwiZXNjYXBlIiwidG9TdHJpbmciLCJPIiwiaXNBcnJheSIsIksiLCJwdXNoIiwieSIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJQIiwiUSIsIl9zdGF0dXMiLCJfcmVzdWx0IiwidGhlbiIsImRlZmF1bHQiLCJSIiwiUyIsIlQiLCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyIiwiUmVhY3RDdXJyZW50QmF0Y2hDb25maWciLCJ0cmFuc2l0aW9uIiwiUmVhY3RDdXJyZW50T3duZXIiLCJJc1NvbWVSZW5kZXJlckFjdGluZyIsIkNoaWxkcmVuIiwiYXBwbHkiLCJjb3VudCIsInRvQXJyYXkiLCJvbmx5IiwiQ29tcG9uZW50IiwiUHVyZUNvbXBvbmVudCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29udGV4dCIsIl9jYWxjdWxhdGVDaGFuZ2VkQml0cyIsIl9jdXJyZW50VmFsdWUiLCJfY3VycmVudFZhbHVlMiIsIl90aHJlYWRDb3VudCIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJfY29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVGYWN0b3J5IiwiYmluZCIsImNyZWF0ZVJlZiIsImZvcndhcmRSZWYiLCJyZW5kZXIiLCJpc1ZhbGlkRWxlbWVudCIsImxhenkiLCJfcGF5bG9hZCIsIl9pbml0IiwibWVtbyIsImNvbXBhcmUiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VEZWJ1Z1ZhbHVlIiwidXNlRWZmZWN0IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZUxheW91dEVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ2ZXJzaW9uIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiX193ZWJwYWNrX21vZHVsZXNfXyJdLCJtYXBwaW5ncyI6IjsrSkFBQSxHLEVBQUEsSSxxQ0FHbUIsU0FBQ0EsR0E2QmhCLE9BYkksOEJBQ0lDLEdBQUcsYUFDSEMsTUFDSSxDQUNJQyxXQUFZLFFBQ1pDLE9BQVEsa0JBQ1JDLGFBQWMsUUFHckJMLEVBQVFNLGMsaURDcEJyQixJQUFJQyxFQUF3QkMsT0FBT0Qsc0JBQy9CRSxFQUFpQkQsT0FBT0UsVUFBVUQsZUFDbENFLEVBQW1CSCxPQUFPRSxVQUFVRSxxQkFFeEMsU0FBU0MsRUFBU0MsR0FDakIsR0FBSUEsUUFDSCxNQUFNLElBQUlDLFVBQVUseURBR3JCLE9BQU9QLE9BQU9NLEdBK0NmRSxFQUFPQyxRQTVDUCxXQUNDLElBQ0MsSUFBS1QsT0FBT1UsT0FDWCxPQUFPLEVBTVIsSUFBSUMsRUFBUSxJQUFJQyxPQUFPLE9BRXZCLEdBREFELEVBQU0sR0FBSyxLQUNrQyxNQUF6Q1gsT0FBT2Esb0JBQW9CRixHQUFPLEdBQ3JDLE9BQU8sRUFLUixJQURBLElBQUlHLEVBQVEsR0FDSEMsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLElB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XHJcbi8vY29udGVudC0tPntoZWFkZXJEYXRhOmhlYWRlckNvbnRlbnR9XHJcbmNvbnN0IEhlYWRlckNvbXAgPSAoY29udGVudCkgPT4ge1xyXG4gICAgLyogPGgzIGlkPScnIHN0eWxlPScnPi4uLi48L2gzPlxyXG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgJ2gzJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnbWFpbkhlYWRlcicsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGF6dXJlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudC5oZWFkZXJEYXRhKVxyXG4gICAgICAgICovXHJcbiAgICAvL0pTWC0tPkphdmFTY3JpcHQgWE1MXHJcbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gKFxyXG4gICAgICAgIDxoM1xyXG4gICAgICAgICAgICBpZD0nbWFpbkhlYWRlcidcclxuICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGF6dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIHtjb250ZW50LmhlYWRlckRhdGF9XHJcbiAgICAgICAgPC9oMz5cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyRWxlbWVudDtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb21wOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49NjAxMDMscD02MDEwNjtleHBvcnRzLkZyYWdtZW50PTYwMTA3O2V4cG9ydHMuU3RyaWN0TW9kZT02MDEwODtleHBvcnRzLlByb2ZpbGVyPTYwMTE0O3ZhciBxPTYwMTA5LHI9NjAxMTAsdD02MDExMjtleHBvcnRzLlN1c3BlbnNlPTYwMTEzO3ZhciB1PTYwMTE1LHY9NjAxMTY7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgdz1TeW1ib2wuZm9yO249dyhcInJlYWN0LmVsZW1lbnRcIik7cD13KFwicmVhY3QucG9ydGFsXCIpO2V4cG9ydHMuRnJhZ21lbnQ9dyhcInJlYWN0LmZyYWdtZW50XCIpO2V4cG9ydHMuU3RyaWN0TW9kZT13KFwicmVhY3Quc3RyaWN0X21vZGVcIik7ZXhwb3J0cy5Qcm9maWxlcj13KFwicmVhY3QucHJvZmlsZXJcIik7cT13KFwicmVhY3QucHJvdmlkZXJcIik7cj13KFwicmVhY3QuY29udGV4dFwiKTt0PXcoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtleHBvcnRzLlN1c3BlbnNlPXcoXCJyZWFjdC5zdXNwZW5zZVwiKTt1PXcoXCJyZWFjdC5tZW1vXCIpO3Y9dyhcInJlYWN0LmxhenlcIil9dmFyIHg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24geShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eCYmYVt4XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfWZ1bmN0aW9uIHooYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9XG52YXIgQT17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQj17fTtmdW5jdGlvbiBDKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9Qy5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtDLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3Ioeig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07Qy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07XG5mdW5jdGlvbiBEKCl7fUQucHJvdG90eXBlPUMucHJvdG90eXBlO2Z1bmN0aW9uIEUoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX12YXIgRj1FLnByb3RvdHlwZT1uZXcgRDtGLmNvbnN0cnVjdG9yPUU7bChGLEMucHJvdG90eXBlKTtGLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBHPXtjdXJyZW50Om51bGx9LEg9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxJPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBKKGEsYixjKXt2YXIgZSxkPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZSBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUguY2FsbChiLGUpJiYhSS5oYXNPd25Qcm9wZXJ0eShlKSYmKGRbZV09YltlXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWQuY2hpbGRyZW49YztlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihlIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1kW2VdJiYoZFtlXT1nW2VdKTtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6ZCxfb3duZXI6Ry5jdXJyZW50fX1cbmZ1bmN0aW9uIEsoYSxiKXtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIEwoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PW59ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBNPS9cXC8rL2c7ZnVuY3Rpb24gTihhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIE8oYSxiLGMsZSxkKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbjpjYXNlIHA6aD0hMH19aWYoaClyZXR1cm4gaD1hLGQ9ZChoKSxhPVwiXCI9PT1lP1wiLlwiK04oaCwwKTplLEFycmF5LmlzQXJyYXkoZCk/KGM9XCJcIixudWxsIT1hJiYoYz1hLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIiksTyhkLGIsYyxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWQmJihMKGQpJiYoZD1LKGQsYysoIWQua2V5fHxoJiZoLmtleT09PWQua2V5P1wiXCI6KFwiXCIrZC5rZXkpLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChkKSksMTtoPTA7ZT1cIlwiPT09ZT9cIi5cIjplK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBnPVxuMDtnPGEubGVuZ3RoO2crKyl7az1hW2ddO3ZhciBmPWUrTihrLGcpO2grPU8oayxiLGMsZixkKX1lbHNlIGlmKGY9eShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZStOKGssZysrKSxoKz1PKGssYixjLGYsZCk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVwiXCIrYSxFcnJvcih6KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpKTtyZXR1cm4gaH1mdW5jdGlvbiBQKGEsYixjKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBlPVtdLGQ9MDtPKGEsZSxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChjLGEsZCsrKX0pO3JldHVybiBlfVxuZnVuY3Rpb24gUShhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2EuX3N0YXR1cz0wO2EuX3Jlc3VsdD1iO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSl9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0O3Rocm93IGEuX3Jlc3VsdDt9dmFyIFI9e2N1cnJlbnQ6bnVsbH07ZnVuY3Rpb24gUygpe3ZhciBhPVIuY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBFcnJvcih6KDMyMSkpO3JldHVybiBhfXZhciBUPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlIsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6e3RyYW5zaXRpb246MH0sUmVhY3RDdXJyZW50T3duZXI6RyxJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O1xuZXhwb3J0cy5DaGlsZHJlbj17bWFwOlAsZm9yRWFjaDpmdW5jdGlvbihhLGIsYyl7UChhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGMpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1AoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBQKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpdGhyb3cgRXJyb3IoeigxNDMpKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUM7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUU7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1UO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKHooMjY3LGEpKTt2YXIgZT1sKHt9LGEucHJvcHMpLGQ9YS5rZXksaz1hLnJlZixoPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixoPUcuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihkPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZz1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihmIGluIGIpSC5jYWxsKGIsZikmJiFJLmhhc093blByb3BlcnR5KGYpJiYoZVtmXT12b2lkIDA9PT1iW2ZdJiZ2b2lkIDAhPT1nP2dbZl06YltmXSl9dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49YztlbHNlIGlmKDE8Zil7Zz1BcnJheShmKTtmb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLFxua2V5OmQscmVmOmsscHJvcHM6ZSxfb3duZXI6aH19O2V4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOnIsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjpxLF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1KO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1KLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07ZXhwb3J0cy5mb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp0LHJlbmRlcjphfX07ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1MO1xuZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp2LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6UX19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDb250ZXh0KGEsYil9O2V4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsYyl9O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUxheW91dEVmZmVjdChhLGIpfTtleHBvcnRzLnVzZU1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZU1lbW8oYSxiKX07ZXhwb3J0cy51c2VSZWR1Y2VyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZVJlZHVjZXIoYSxiLGMpfTtleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVJlZihhKX07ZXhwb3J0cy51c2VTdGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVN0YXRlKGEpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjFcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oMTMyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=