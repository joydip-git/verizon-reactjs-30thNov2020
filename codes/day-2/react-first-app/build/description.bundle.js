/*! For license information please see description.bundle.js.LICENSE.txt */
(()=>{var e={562:(e,t,r)=>{var n,o;n=[t,r(294)],void 0===(o=function(e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),t.default=void 0,r=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){return r.default.createElement("p",{id:"contentPara",style:{fontFamily:"Segoe UI",fontSize:"medium",border:"1px solid black",borderRadius:"5px"}},e.descData)}}.apply(t,n))||(e.exports=o)},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var i,a,c=o(e),f=1;f<arguments.length;f++){for(var s in i=Object(arguments[f]))r.call(i,s)&&(c[s]=i[s]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(c[a[l]]=i[a[l]])}}return c}},408:(e,t,r)=>{"use strict";var n=r(418),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,c=60112;t.Suspense=60113;var f=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),a=l("react.context"),c=l("react.forward_ref"),t.Suspense=l("react.suspense"),f=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function _(){}function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var b=m.prototype=new _;b.constructor=m,n(b,h.prototype),b.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,u={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(u[n]=t[n]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var f=Array(c),s=0;s<c;s++)f[s]=arguments[s+2];u.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===u[n]&&(u[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,r,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case u:c=!0}}if(c)return i=i(c=e),e=""===n?"."+E(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),$(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var s=n+E(a=e[f],f);c+=$(a,t,r,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),f=0;!(a=e.next()).done;)c+=$(a=a.value,t,r,s=n+E(a,f++),i);else if("object"===a)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function x(){var e=P.current;if(null===e)throw Error(y(321));return e}var A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(y(143));return e}},t.Component=h,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var u=n({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=g.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)j.call(t,s)&&!w.hasOwnProperty(s)&&(u[s]=void 0===t[s]&&void 0!==f?f[s]:t[s])}var s=arguments.length-2;if(1===s)u.children=r;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];u.children=f}return{$$typeof:o,type:e.type,key:i,ref:a,props:u,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return x().useCallback(e,t)},t.useContext=function(e,t){return x().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return x().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return x().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return x().useLayoutEffect(e,t)},t.useMemo=function(e,t){return x().useMemo(e,t)},t.useReducer=function(e,t,r){return x().useReducer(e,t,r)},t.useRef=function(e){return x().useRef(e)},t.useState=function(e){return x().useState(e)},t.version="17.0.1"},294:(e,t,r)=>{"use strict";e.exports=r(408)}},t={};!function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(562)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1maXJzdC1hcHAvLi9zcmMvRGVzY3JpcHRpb25Db21wLmpzIiwid2VicGFjazovL3JlYWN0LWZpcnN0LWFwcC8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LWZpcnN0LWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vcmVhY3QtZmlyc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LWZpcnN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1maXJzdC1hcHAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJpZCIsInN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGVzY0RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImFzc2lnbiIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiaSIsImZyb21DaGFyQ29kZSIsIm1hcCIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwic2hvdWxkVXNlTmF0aXZlIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbSIsInN5bWJvbHMiLCJ0byIsInMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJrZXkiLCJjYWxsIiwibCIsInAiLCJGcmFnbWVudCIsIlN0cmljdE1vZGUiLCJQcm9maWxlciIsInEiLCJyIiwidCIsIlN1c3BlbnNlIiwidSIsInYiLCJTeW1ib2wiLCJmb3IiLCJ3IiwieCIsIml0ZXJhdG9yIiwieiIsImEiLCJiIiwiYyIsImVuY29kZVVSSUNvbXBvbmVudCIsIkEiLCJpc01vdW50ZWQiLCJlbnF1ZXVlRm9yY2VVcGRhdGUiLCJlbnF1ZXVlUmVwbGFjZVN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwiQiIsIkMiLCJ0aGlzIiwicHJvcHMiLCJjb250ZXh0IiwicmVmcyIsInVwZGF0ZXIiLCJEIiwiRSIsImlzUmVhY3RDb21wb25lbnQiLCJzZXRTdGF0ZSIsIkVycm9yIiwiZm9yY2VVcGRhdGUiLCJGIiwiY29uc3RydWN0b3IiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIkciLCJjdXJyZW50IiwiSCIsIkkiLCJyZWYiLCJfX3NlbGYiLCJfX3NvdXJjZSIsIkoiLCJlIiwiZCIsImsiLCJoIiwiZyIsImNoaWxkcmVuIiwiZiIsIkFycmF5IiwibSIsImRlZmF1bHRQcm9wcyIsIiQkdHlwZW9mIiwidHlwZSIsIl9vd25lciIsIkwiLCJNIiwiTiIsInJlcGxhY2UiLCJlc2NhcGUiLCJ0b1N0cmluZyIsIk8iLCJpc0FycmF5IiwiSyIsInB1c2giLCJ5IiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsIlAiLCJRIiwiX3N0YXR1cyIsIl9yZXN1bHQiLCJ0aGVuIiwiZGVmYXVsdCIsIlIiLCJTIiwiVCIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyIsInRyYW5zaXRpb24iLCJSZWFjdEN1cnJlbnRPd25lciIsIklzU29tZVJlbmRlcmVyQWN0aW5nIiwiQ2hpbGRyZW4iLCJhcHBseSIsImNvdW50IiwidG9BcnJheSIsIm9ubHkiLCJDb21wb25lbnQiLCJQdXJlQ29tcG9uZW50IiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVDb250ZXh0IiwiX2NhbGN1bGF0ZUNoYW5nZWRCaXRzIiwiX2N1cnJlbnRWYWx1ZSIsIl9jdXJyZW50VmFsdWUyIiwiX3RocmVhZENvdW50IiwiUHJvdmlkZXIiLCJDb25zdW1lciIsIl9jb250ZXh0IiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUZhY3RvcnkiLCJiaW5kIiwiY3JlYXRlUmVmIiwiZm9yd2FyZFJlZiIsInJlbmRlciIsImlzVmFsaWRFbGVtZW50IiwibGF6eSIsIl9wYXlsb2FkIiwiX2luaXQiLCJtZW1vIiwiY29tcGFyZSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZURlYnVnVmFsdWUiLCJ1c2VFZmZlY3QiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZlcnNpb24iLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIl0sIm1hcHBpbmdzIjoiOytKQUFBLEcsRUFBQSxJLHFDQUV3QixTQUFDQSxHQTRCckIsT0FMSSw2QkFBR0MsR0FBRyxjQUFjQyxNQVROLENBQ2RDLFdBQVksV0FDWkMsU0FBVSxTQUNWQyxPQUFRLGtCQUNSQyxhQUFjLFFBTVROLEVBQVFPLFksaURDbEJyQixJQUFJQyxFQUF3QkMsT0FBT0Qsc0JBQy9CRSxFQUFpQkQsT0FBT0UsVUFBVUQsZUFDbENFLEVBQW1CSCxPQUFPRSxVQUFVRSxxQkFFeEMsU0FBU0MsRUFBU0MsR0FDakIsR0FBSUEsUUFDSCxNQUFNLElBQUlDLFVBQVUseURBR3JCLE9BQU9QLE9BQU9NLEdBK0NmRSxFQUFPQyxRQTVDUCxXQUNDLElBQ0MsSUFBS1QsT0FBT1UsT0FDWCxPQUFPLEVBTVIsSUFBSUMsRUFBUSxJQUFJQyxPQUFPLE9BRXZCLEdBREFELEVBQU0sR0FBSyxLQUNrQyxNQUF6Q1gsT0FBT2Esb0JBQW9CRixHQUFPLEdBQ3JDLE9BQU8sRUFLUixJQURBLElBQUlHLEVBQVEsR0FDSEMs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aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vL2NvbnRlbnQtLT57IGRlc2NEYXRhOiBkZXNjQ29udGVudCB9XHJcbmNvbnN0IERlc2NyaXB0aW9uQ29tcCA9IChjb250ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxyXG4gICAgLy8gICAgICdwJyxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGlkOiAnY29udGVudFBhcmEnLFxyXG4gICAgLy8gICAgICAgICBzdHlsZToge1xyXG4gICAgLy8gICAgICAgICAgICAgZm9udEZhbWlseTogJ1NlZ29lIFVJJyxcclxuICAgIC8vICAgICAgICAgICAgIGZvbnRTaXplOiAnbWVkaXVtJyxcclxuICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXHJcbiAgICAvLyAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGNvbnRlbnQuZGVzY0RhdGFcclxuICAgIC8vIClcclxuICAgIGNvbnN0IHBhcmFTdHlsZSA9IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnU2Vnb2UgVUknLFxyXG4gICAgICAgIGZvbnRTaXplOiAnbWVkaXVtJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCdcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9wZXN1ZG8tSFRNTFxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gKFxyXG4gICAgICAgIDxwIGlkPSdjb250ZW50UGFyYScgc3R5bGU9e3BhcmFTdHlsZX0+XHJcbiAgICAgICAgICAgIHtjb250ZW50LmRlc2NEYXRhfVxyXG4gICAgICAgIDwvcD5cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb25FbGVtZW50O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uQ29tcDsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjFcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPTYwMTAzLHA9NjAxMDY7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztleHBvcnRzLlN0cmljdE1vZGU9NjAxMDg7ZXhwb3J0cy5Qcm9maWxlcj02MDExNDt2YXIgcT02MDEwOSxyPTYwMTEwLHQ9NjAxMTI7ZXhwb3J0cy5TdXNwZW5zZT02MDExMzt2YXIgdT02MDExNSx2PTYwMTE2O1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIHc9U3ltYm9sLmZvcjtuPXcoXCJyZWFjdC5lbGVtZW50XCIpO3A9dyhcInJlYWN0LnBvcnRhbFwiKTtleHBvcnRzLkZyYWdtZW50PXcoXCJyZWFjdC5mcmFnbWVudFwiKTtleHBvcnRzLlN0cmljdE1vZGU9dyhcInJlYWN0LnN0cmljdF9tb2RlXCIpO2V4cG9ydHMuUHJvZmlsZXI9dyhcInJlYWN0LnByb2ZpbGVyXCIpO3E9dyhcInJlYWN0LnByb3ZpZGVyXCIpO3I9dyhcInJlYWN0LmNvbnRleHRcIik7dD13KFwicmVhY3QuZm9yd2FyZF9yZWZcIik7ZXhwb3J0cy5TdXNwZW5zZT13KFwicmVhY3Quc3VzcGVuc2VcIik7dT13KFwicmVhY3QubWVtb1wiKTt2PXcoXCJyZWFjdC5sYXp5XCIpfXZhciB4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtcbmZ1bmN0aW9uIHkoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1mdW5jdGlvbiB6KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifVxudmFyIEE9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEI9e307ZnVuY3Rpb24gQyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfUMucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307Qy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKHooODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0MucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gRCgpe31ELnByb3RvdHlwZT1DLnByb3RvdHlwZTtmdW5jdGlvbiBFKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9dmFyIEY9RS5wcm90b3R5cGU9bmV3IEQ7Ri5jb25zdHJ1Y3Rvcj1FO2woRixDLnByb3RvdHlwZSk7Ri5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsYyl7dmFyIGUsZD17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilILmNhbGwoYixlKSYmIUkuaGFzT3duUHJvcGVydHkoZSkmJihkW2VdPWJbZV0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZylkLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09ZFtlXSYmKGRbZV09Z1tlXSk7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19XG5mdW5jdGlvbiBLKGEsYil7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBMKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ufWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTT0vXFwvKy9nO2Z1bmN0aW9uIE4oYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBPKGEsYixjLGUsZCl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIG46Y2FzZSBwOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxkPWQoaCksYT1cIlwiPT09ZT9cIi5cIitOKGgsMCk6ZSxBcnJheS5pc0FycmF5KGQpPyhjPVwiXCIsbnVsbCE9YSYmKGM9YS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpLE8oZCxiLGMsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1kJiYoTChkKSYmKGQ9SyhkLGMrKCFkLmtleXx8aCYmaC5rZXk9PT1kLmtleT9cIlwiOihcIlwiK2Qua2V5KS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goZCkpLDE7aD0wO2U9XCJcIj09PWU/XCIuXCI6ZStcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgZz1cbjA7ZzxhLmxlbmd0aDtnKyspe2s9YVtnXTt2YXIgZj1lK04oayxnKTtoKz1PKGssYixjLGYsZCl9ZWxzZSBpZihmPXkoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWUrTihrLGcrKyksaCs9TyhrLGIsYyxmLGQpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1cIlwiK2EsRXJyb3IoeigzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7cmV0dXJuIGh9ZnVuY3Rpb24gUChhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXSxkPTA7TyhhLGUsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoYyxhLGQrKyl9KTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFEoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTthLl9zdGF0dXM9MDthLl9yZXN1bHQ9YjtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdDt0aHJvdyBhLl9yZXN1bHQ7fXZhciBSPXtjdXJyZW50Om51bGx9O2Z1bmN0aW9uIFMoKXt2YXIgYT1SLmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeigzMjEpKTtyZXR1cm4gYX12YXIgVD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpSLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOnt0cmFuc2l0aW9uOjB9LFJlYWN0Q3VycmVudE93bmVyOkcsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpsfTtcbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpQLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe1AoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtQKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUChhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXRocm93IEVycm9yKHooMTQzKSk7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1DO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1FO2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcih6KDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1HLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUguY2FsbChiLGYpJiYhSS5oYXNPd25Qcm9wZXJ0eShmKSYmKGVbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7Zm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxcbmtleTpkLHJlZjprLHByb3BzOmUsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjpyLF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6cSxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9SjtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Si5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TDtcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlF9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ29udGV4dChhLGIpfTtleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGMpfTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VSZWR1Y2VyKGEsYixjKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VTdGF0ZShhKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4xXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDU2Mik7XG4iXSwic291cmNlUm9vdCI6IiJ9