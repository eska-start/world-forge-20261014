var Av=Object.defineProperty;var Cv=(s,e,t)=>e in s?Av(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ku=(s,e,t)=>Cv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function o0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zu={exports:{}},Wo={},Ju={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Rv(){if(Am)return gt;Am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,w={};function S(k,se,ke){this.props=k,this.context=se,this.refs=w,this.updater=ke||M}S.prototype.isReactComponent={},S.prototype.setState=function(k,se){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,se,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=S.prototype;function T(k,se,ke){this.props=k,this.context=se,this.refs=w,this.updater=ke||M}var A=T.prototype=new x;A.constructor=T,d(A,S.prototype),A.isPureReactComponent=!0;var E=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function O(k,se,ke){var Q,pe={},Ae=null,Ee=null;if(se!=null)for(Q in se.ref!==void 0&&(Ee=se.ref),se.key!==void 0&&(Ae=""+se.key),se)F.call(se,Q)&&!D.hasOwnProperty(Q)&&(pe[Q]=se[Q]);var De=arguments.length-2;if(De===1)pe.children=ke;else if(1<De){for(var Be=Array(De),nt=0;nt<De;nt++)Be[nt]=arguments[nt+2];pe.children=Be}if(k&&k.defaultProps)for(Q in De=k.defaultProps,De)pe[Q]===void 0&&(pe[Q]=De[Q]);return{$$typeof:s,type:k,key:Ae,ref:Ee,props:pe,_owner:N.current}}function P(k,se){return{$$typeof:s,type:k.type,key:se,ref:k.ref,props:k.props,_owner:k._owner}}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function I(k){var se={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ke){return se[ke]})}var j=/\/+/g;function W(k,se){return typeof k=="object"&&k!==null&&k.key!=null?I(""+k.key):se.toString(36)}function te(k,se,ke,Q,pe){var Ae=typeof k;(Ae==="undefined"||Ae==="boolean")&&(k=null);var Ee=!1;if(k===null)Ee=!0;else switch(Ae){case"string":case"number":Ee=!0;break;case"object":switch(k.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=k,pe=pe(Ee),k=Q===""?"."+W(Ee,0):Q,E(pe)?(ke="",k!=null&&(ke=k.replace(j,"$&/")+"/"),te(pe,se,ke,"",function(nt){return nt})):pe!=null&&(R(pe)&&(pe=P(pe,ke+(!pe.key||Ee&&Ee.key===pe.key?"":(""+pe.key).replace(j,"$&/")+"/")+k)),se.push(pe)),1;if(Ee=0,Q=Q===""?".":Q+":",E(k))for(var De=0;De<k.length;De++){Ae=k[De];var Be=Q+W(Ae,De);Ee+=te(Ae,se,ke,Be,pe)}else if(Be=y(k),typeof Be=="function")for(k=Be.call(k),De=0;!(Ae=k.next()).done;)Ae=Ae.value,Be=Q+W(Ae,De++),Ee+=te(Ae,se,ke,Be,pe);else if(Ae==="object")throw se=String(k),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return Ee}function ue(k,se,ke){if(k==null)return k;var Q=[],pe=0;return te(k,Q,"","",function(Ae){return se.call(ke,Ae,pe++)}),Q}function oe(k){if(k._status===-1){var se=k._result;se=se(),se.then(function(ke){(k._status===0||k._status===-1)&&(k._status=1,k._result=ke)},function(ke){(k._status===0||k._status===-1)&&(k._status=2,k._result=ke)}),k._status===-1&&(k._status=0,k._result=se)}if(k._status===1)return k._result.default;throw k._result}var fe={current:null},H={transition:null},he={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:H,ReactCurrentOwner:N};function ce(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ue,forEach:function(k,se,ke){ue(k,function(){se.apply(this,arguments)},ke)},count:function(k){var se=0;return ue(k,function(){se++}),se},toArray:function(k){return ue(k,function(se){return se})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=T,gt.StrictMode=r,gt.Suspense=f,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,gt.act=ce,gt.cloneElement=function(k,se,ke){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Q=d({},k.props),pe=k.key,Ae=k.ref,Ee=k._owner;if(se!=null){if(se.ref!==void 0&&(Ae=se.ref,Ee=N.current),se.key!==void 0&&(pe=""+se.key),k.type&&k.type.defaultProps)var De=k.type.defaultProps;for(Be in se)F.call(se,Be)&&!D.hasOwnProperty(Be)&&(Q[Be]=se[Be]===void 0&&De!==void 0?De[Be]:se[Be])}var Be=arguments.length-2;if(Be===1)Q.children=ke;else if(1<Be){De=Array(Be);for(var nt=0;nt<Be;nt++)De[nt]=arguments[nt+2];Q.children=De}return{$$typeof:s,type:k.type,key:pe,ref:Ae,props:Q,_owner:Ee}},gt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},gt.createElement=O,gt.createFactory=function(k){var se=O.bind(null,k);return se.type=k,se},gt.createRef=function(){return{current:null}},gt.forwardRef=function(k){return{$$typeof:h,render:k}},gt.isValidElement=R,gt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:oe}},gt.memo=function(k,se){return{$$typeof:m,type:k,compare:se===void 0?null:se}},gt.startTransition=function(k){var se=H.transition;H.transition={};try{k()}finally{H.transition=se}},gt.unstable_act=ce,gt.useCallback=function(k,se){return fe.current.useCallback(k,se)},gt.useContext=function(k){return fe.current.useContext(k)},gt.useDebugValue=function(){},gt.useDeferredValue=function(k){return fe.current.useDeferredValue(k)},gt.useEffect=function(k,se){return fe.current.useEffect(k,se)},gt.useId=function(){return fe.current.useId()},gt.useImperativeHandle=function(k,se,ke){return fe.current.useImperativeHandle(k,se,ke)},gt.useInsertionEffect=function(k,se){return fe.current.useInsertionEffect(k,se)},gt.useLayoutEffect=function(k,se){return fe.current.useLayoutEffect(k,se)},gt.useMemo=function(k,se){return fe.current.useMemo(k,se)},gt.useReducer=function(k,se,ke){return fe.current.useReducer(k,se,ke)},gt.useRef=function(k){return fe.current.useRef(k)},gt.useState=function(k){return fe.current.useState(k)},gt.useSyncExternalStore=function(k,se,ke){return fe.current.useSyncExternalStore(k,se,ke)},gt.useTransition=function(){return fe.current.useTransition()},gt.version="18.3.1",gt}var Cm;function kf(){return Cm||(Cm=1,Ju.exports=Rv()),Ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function bv(){if(Rm)return Wo;Rm=1;var s=kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,m){var _,g={},y=null,M=null;m!==void 0&&(y=""+m),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(M=f.ref);for(_ in f)r.call(f,_)&&!l.hasOwnProperty(_)&&(g[_]=f[_]);if(h&&h.defaultProps)for(_ in f=h.defaultProps,f)g[_]===void 0&&(g[_]=f[_]);return{$$typeof:e,type:h,key:y,ref:M,props:g,_owner:o.current}}return Wo.Fragment=t,Wo.jsx=u,Wo.jsxs=u,Wo}var bm;function Pv(){return bm||(bm=1,Zu.exports=bv()),Zu.exports}var le=Pv(),ns=kf();const Qo=o0(ns);var _l={},Qu={exports:{}},Nn={},eh={exports:{}},th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function Lv(){return Pm||(Pm=1,(function(s){function e(H,he){var ce=H.length;H.push(he);e:for(;0<ce;){var k=ce-1>>>1,se=H[k];if(0<o(se,he))H[k]=he,H[ce]=se,ce=k;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var he=H[0],ce=H.pop();if(ce!==he){H[0]=ce;e:for(var k=0,se=H.length,ke=se>>>1;k<ke;){var Q=2*(k+1)-1,pe=H[Q],Ae=Q+1,Ee=H[Ae];if(0>o(pe,ce))Ae<se&&0>o(Ee,pe)?(H[k]=Ee,H[Ae]=ce,k=Ae):(H[k]=pe,H[Q]=ce,k=Q);else if(Ae<se&&0>o(Ee,ce))H[k]=Ee,H[Ae]=ce,k=Ae;else break e}}return he}function o(H,he){var ce=H.sortIndex-he.sortIndex;return ce!==0?ce:H.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var f=[],m=[],_=1,g=null,y=3,M=!1,d=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(H){for(var he=t(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=H)r(m),he.sortIndex=he.expirationTime,e(f,he);else break;he=t(m)}}function E(H){if(w=!1,A(H),!d)if(t(f)!==null)d=!0,oe(F);else{var he=t(m);he!==null&&fe(E,he.startTime-H)}}function F(H,he){d=!1,w&&(w=!1,x(O),O=-1),M=!0;var ce=y;try{for(A(he),g=t(f);g!==null&&(!(g.expirationTime>he)||H&&!I());){var k=g.callback;if(typeof k=="function"){g.callback=null,y=g.priorityLevel;var se=k(g.expirationTime<=he);he=s.unstable_now(),typeof se=="function"?g.callback=se:g===t(f)&&r(f),A(he)}else r(f);g=t(f)}if(g!==null)var ke=!0;else{var Q=t(m);Q!==null&&fe(E,Q.startTime-he),ke=!1}return ke}finally{g=null,y=ce,M=!1}}var N=!1,D=null,O=-1,P=5,R=-1;function I(){return!(s.unstable_now()-R<P)}function j(){if(D!==null){var H=s.unstable_now();R=H;var he=!0;try{he=D(!0,H)}finally{he?W():(N=!1,D=null)}}else N=!1}var W;if(typeof T=="function")W=function(){T(j)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ue=te.port2;te.port1.onmessage=j,W=function(){ue.postMessage(null)}}else W=function(){S(j,0)};function oe(H){D=H,N||(N=!0,W())}function fe(H,he){O=S(function(){H(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){d||M||(d=!0,oe(F))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(H){switch(y){case 1:case 2:case 3:var he=3;break;default:he=y}var ce=y;y=he;try{return H()}finally{y=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,he){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ce=y;y=H;try{return he()}finally{y=ce}},s.unstable_scheduleCallback=function(H,he,ce){var k=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?k+ce:k):ce=k,H){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ce+se,H={id:_++,callback:he,priorityLevel:H,startTime:ce,expirationTime:se,sortIndex:-1},ce>k?(H.sortIndex=ce,e(m,H),t(f)===null&&H===t(m)&&(w?(x(O),O=-1):w=!0,fe(E,ce-k))):(H.sortIndex=se,e(f,H),d||M||(d=!0,oe(F))),H},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(H){var he=y;return function(){var ce=y;y=he;try{return H.apply(this,arguments)}finally{y=ce}}}})(th)),th}var Lm;function Dv(){return Lm||(Lm=1,eh.exports=Lv()),eh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function Iv(){if(Dm)return Nn;Dm=1;var s=kf(),e=Dv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function y(n){return f.call(g,n)?!0:f.call(_,n)?!1:m.test(n)?g[n]=!0:(_[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function d(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,p,v,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=C}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,T);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,T);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,T);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function A(n,i,a,c){var p=S.hasOwnProperty(i)?S[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(d(i,a,p,c)&&(a=null),c||p===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var E=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),I=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),H=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,k;function se(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var ke=!1;function Q(n,i){if(!n||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var p=ne.stack.split(`
`),v=c.stack.split(`
`),C=p.length-1,z=v.length-1;1<=C&&0<=z&&p[C]!==v[z];)z--;for(;1<=C&&0<=z;C--,z--)if(p[C]!==v[z]){if(C!==1||z!==1)do if(C--,z--,0>z||p[C]!==v[z]){var B=`
`+p[C].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=C&&0<=z);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function pe(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case N:return"Portal";case P:return"Profiler";case O:return"StrictMode";case W:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:Ae(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Ae(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(C){c=""+C,v.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=nt(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Y(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=De(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ye(n,i){i=i.checked,i!=null&&A(n,"checked",i,!1)}function Me(n,i){Ye(n,i);var a=De(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,De(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function _e(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||Ct(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ve=Array.isArray;function U(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+De(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function b(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ve(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:De(a)}}function me(n,i){var a=De(i.value),c=De(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Le,Ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function at(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(n){Fe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ye[i]=ye[n]})});function et(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ye.hasOwnProperty(n)&&ye[n]?(""+i).trim():i+"px"}function ee(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=et(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var ve=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if(ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ae=null,ge=null;function ze(n){if(n=bo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Da(i),Pe(n.stateNode,n.type,i))}}function Ne(n){ae?ge?ge.push(n):ge=[n]:ae=n}function lt(){if(ae){var n=ae,i=ge;if(ge=ae=null,ze(n),i)for(n=0;n<i.length;n++)ze(i[n])}}function Ut(n,i){return n(i)}function $t(){}var Mt=!1;function Cn(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Ut(n,i,a)}finally{Mt=!1,(ae!==null||ge!==null)&&($t(),lt())}}function Mn(n,i){var a=n.stateNode;if(a===null)return null;var c=Da(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var hs=!1;if(h)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{hs=!1}function Li(n,i,a,c,p,v,C,z,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(we){this.onError(we)}}var Di=!1,Pr=null,Lr=!1,Ji=null,fa={onError:function(n){Di=!0,Pr=n}};function fs(n,i,a,c,p,v,C,z,B){Di=!1,Pr=null,Li.apply(fa,arguments)}function da(n,i,a,c,p,v,C,z,B){if(fs.apply(this,arguments),Di){if(Di){var ne=Pr;Di=!1,Pr=null}else throw Error(t(198));Lr||(Lr=!0,Ji=ne)}}function vi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function pa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ma(n){if(vi(n)!==n)throw Error(t(188))}function vc(n){var i=n.alternate;if(!i){if(i=vi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return ma(p),n;if(v===c)return ma(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=v;else{for(var C=!1,z=p.child;z;){if(z===a){C=!0,a=p,c=v;break}if(z===c){C=!0,c=p,a=v;break}z=z.sibling}if(!C){for(z=v.child;z;){if(z===a){C=!0,a=v,c=p;break}if(z===c){C=!0,c=v,a=p;break}z=z.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function L(n){return n=vc(n),n!==null?q(n):null}function q(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=q(n);if(i!==null)return i;n=n.sibling}return null}var ie=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,$=e.unstable_shouldYield,be=e.unstable_requestPaint,Ce=e.unstable_now,Ke=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,ct=e.unstable_UserBlockingPriority,ht=e.unstable_NormalPriority,Ze=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Rt=null,xt=null;function fn(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:wt,Qe=Math.log,ri=Math.LN2;function wt(n){return n>>>=0,n===0?32:31-(Qe(n)/ri|0)|0}var dn=64,si=4194304;function Kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,v=n.pingedLanes,C=a&268435455;if(C!==0){var z=C&~p;z!==0?c=Kt(z):(v&=C,v!==0&&(c=Kt(v)))}else C=a&~p,C!==0?c=Kt(C):v!==0&&(c=Kt(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ft(i),p=1<<a,c|=n[a],i&=~p;return c}function It(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var C=31-ft(v),z=1<<C,B=p[C];B===-1?((z&a)===0||(z&c)!==0)&&(p[C]=It(z,i)):B<=i&&(n.expiredLanes|=z),v&=~z}}function Ii(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=dn;return dn<<=1,(dn&4194240)===0&&(dn=64),n}function qn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Rn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ft(i),n[i]=a}function ga(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-ft(a),v=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~v}}function xc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ft(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var bt=0;function rd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var sd,yc,od,ad,ld,Mc=!1,_a=[],Qi=null,er=null,tr=null,fo=new Map,po=new Map,nr=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(i.pointerId)}}function mo(n,i,a,c,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[p]},i!==null&&(i=bo(i),i!==null&&yc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function $0(n,i,a,c,p){switch(i){case"focusin":return Qi=mo(Qi,n,i,a,c,p),!0;case"dragenter":return er=mo(er,n,i,a,c,p),!0;case"mouseover":return tr=mo(tr,n,i,a,c,p),!0;case"pointerover":var v=p.pointerId;return fo.set(v,mo(fo.get(v)||null,n,i,a,c,p)),!0;case"gotpointercapture":return v=p.pointerId,po.set(v,mo(po.get(v)||null,n,i,a,c,p)),!0}return!1}function ud(n){var i=Dr(n.target);if(i!==null){var a=vi(i);if(a!==null){if(i=a.tag,i===13){if(i=pa(a),i!==null){n.blockedOn=i,ld(n.priority,function(){od(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function va(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ec(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vt=c,a.target.dispatchEvent(c),vt=null}else return i=bo(a),i!==null&&yc(i),n.blockedOn=a,!1;i.shift()}return!0}function hd(n,i,a){va(n)&&a.delete(i)}function K0(){Mc=!1,Qi!==null&&va(Qi)&&(Qi=null),er!==null&&va(er)&&(er=null),tr!==null&&va(tr)&&(tr=null),fo.forEach(hd),po.forEach(hd)}function go(n,i){n.blockedOn===i&&(n.blockedOn=null,Mc||(Mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,K0)))}function _o(n){function i(p){return go(p,n)}if(0<_a.length){go(_a[0],n);for(var a=1;a<_a.length;a++){var c=_a[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&go(Qi,n),er!==null&&go(er,n),tr!==null&&go(tr,n),fo.forEach(i),po.forEach(i),a=0;a<nr.length;a++)c=nr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)ud(a),a.blockedOn===null&&nr.shift()}var ds=E.ReactCurrentBatchConfig,xa=!0;function Z0(n,i,a,c){var p=bt,v=ds.transition;ds.transition=null;try{bt=1,Sc(n,i,a,c)}finally{bt=p,ds.transition=v}}function J0(n,i,a,c){var p=bt,v=ds.transition;ds.transition=null;try{bt=4,Sc(n,i,a,c)}finally{bt=p,ds.transition=v}}function Sc(n,i,a,c){if(xa){var p=Ec(n,i,a,c);if(p===null)Bc(n,i,c,ya,a),cd(n,c);else if($0(p,n,i,a,c))c.stopPropagation();else if(cd(n,c),i&4&&-1<q0.indexOf(n)){for(;p!==null;){var v=bo(p);if(v!==null&&sd(v),v=Ec(n,i,a,c),v===null&&Bc(n,i,c,ya,a),v===p)break;p=v}p!==null&&c.stopPropagation()}else Bc(n,i,c,null,a)}}var ya=null;function Ec(n,i,a,c){if(ya=null,n=X(c),n=Dr(n),n!==null)if(i=vi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=pa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ya=n,null}function fd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case qe:return 1;case ct:return 4;case ht:case Ze:return 16;case yt:return 536870912;default:return 16}default:return 16}}var ir=null,wc=null,Ma=null;function dd(){if(Ma)return Ma;var n,i=wc,a=i.length,c,p="value"in ir?ir.value:ir.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===p[v-c];c++);return Ma=p.slice(n,1<c?1-c:void 0)}function Sa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function pd(){return!1}function zn(n){function i(a,c,p,v,C){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=v,this.target=C,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(v):v[z]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ea:pd,this.isPropagationStopped=pd,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=zn(ps),vo=ce({},ps,{view:0,detail:0}),Q0=zn(vo),Ac,Cc,xo,wa=ce({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xo&&(xo&&n.type==="mousemove"?(Ac=n.screenX-xo.screenX,Cc=n.screenY-xo.screenY):Cc=Ac=0,xo=n),Ac)},movementY:function(n){return"movementY"in n?n.movementY:Cc}}),md=zn(wa),e_=ce({},wa,{dataTransfer:0}),t_=zn(e_),n_=ce({},vo,{relatedTarget:0}),Rc=zn(n_),i_=ce({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),r_=zn(i_),s_=ce({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),o_=zn(s_),a_=ce({},ps,{data:0}),gd=zn(a_),l_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=u_[n])?!!i[n]:!1}function bc(){return h_}var f_=ce({},vo,{key:function(n){if(n.key){var i=l_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Sa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?c_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(n){return n.type==="keypress"?Sa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),d_=zn(f_),p_=ce({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=zn(p_),m_=ce({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),g_=zn(m_),__=ce({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),v_=zn(__),x_=ce({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),y_=zn(x_),M_=[9,13,27,32],Pc=h&&"CompositionEvent"in window,yo=null;h&&"documentMode"in document&&(yo=document.documentMode);var S_=h&&"TextEvent"in window&&!yo,vd=h&&(!Pc||yo&&8<yo&&11>=yo),xd=" ",yd=!1;function Md(n,i){switch(n){case"keyup":return M_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function E_(n,i){switch(n){case"compositionend":return Sd(i);case"keypress":return i.which!==32?null:(yd=!0,xd);case"textInput":return n=i.data,n===xd&&yd?null:n;default:return null}}function w_(n,i){if(ms)return n==="compositionend"||!Pc&&Md(n,i)?(n=dd(),Ma=wc=ir=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vd&&i.locale!=="ko"?null:i.data;default:return null}}var T_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!T_[n.type]:i==="textarea"}function wd(n,i,a,c){Ne(c),i=ba(i,"onChange"),0<i.length&&(a=new Tc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Mo=null,So=null;function A_(n){Vd(n,0)}function Ta(n){var i=ys(n);if(mt(i))return n}function C_(n,i){if(n==="change")return i}var Td=!1;if(h){var Lc;if(h){var Dc="oninput"in document;if(!Dc){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Dc=typeof Ad.oninput=="function"}Lc=Dc}else Lc=!1;Td=Lc&&(!document.documentMode||9<document.documentMode)}function Cd(){Mo&&(Mo.detachEvent("onpropertychange",Rd),So=Mo=null)}function Rd(n){if(n.propertyName==="value"&&Ta(So)){var i=[];wd(i,So,n,X(n)),Cn(A_,i)}}function R_(n,i,a){n==="focusin"?(Cd(),Mo=i,So=a,Mo.attachEvent("onpropertychange",Rd)):n==="focusout"&&Cd()}function b_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ta(So)}function P_(n,i){if(n==="click")return Ta(i)}function L_(n,i){if(n==="input"||n==="change")return Ta(i)}function D_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:D_;function Eo(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!f.call(i,p)||!oi(n[p],i[p]))return!1}return!0}function bd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pd(n,i){var a=bd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bd(a)}}function Ld(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ld(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Dd(){for(var n=window,i=Ct();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ct(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function I_(n){var i=Dd(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ld(a.ownerDocument.documentElement,a)){if(c!==null&&Ic(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(c.start,p);c=c.end===void 0?v:Math.min(c.end,p),!n.extend&&v>c&&(p=c,c=v,v=p),p=Pd(a,v);var C=Pd(a,c);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var N_=h&&"documentMode"in document&&11>=document.documentMode,gs=null,Nc=null,wo=null,Uc=!1;function Id(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||gs==null||gs!==Ct(c)||(c=gs,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wo&&Eo(wo,c)||(wo=c,c=ba(Nc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=gs)))}function Aa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Oc={},Nd={};h&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Ca(n){if(Oc[n])return Oc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Nd)return Oc[n]=i[a];return n}var Ud=Ca("animationend"),Od=Ca("animationiteration"),Fd=Ca("animationstart"),zd=Ca("transitionend"),kd=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,i){kd.set(n,i),l(i,[n])}for(var Fc=0;Fc<Bd.length;Fc++){var zc=Bd[Fc],U_=zc.toLowerCase(),O_=zc[0].toUpperCase()+zc.slice(1);rr(U_,"on"+O_)}rr(Ud,"onAnimationEnd"),rr(Od,"onAnimationIteration"),rr(Fd,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(zd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Hd(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,da(c,i,void 0,n),n.currentTarget=null}function Vd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var C=c.length-1;0<=C;C--){var z=c[C],B=z.instance,ne=z.currentTarget;if(z=z.listener,B!==v&&p.isPropagationStopped())break e;Hd(p,z,ne),v=B}else for(C=0;C<c.length;C++){if(z=c[C],B=z.instance,ne=z.currentTarget,z=z.listener,B!==v&&p.isPropagationStopped())break e;Hd(p,z,ne),v=B}}}if(Lr)throw n=Ji,Lr=!1,Ji=null,n}function Ot(n,i){var a=i[jc];a===void 0&&(a=i[jc]=new Set);var c=n+"__bubble";a.has(c)||(Gd(i,n,2,!1),a.add(c))}function kc(n,i,a){var c=0;i&&(c|=4),Gd(a,n,c,i)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Ao(n){if(!n[Ra]){n[Ra]=!0,r.forEach(function(a){a!=="selectionchange"&&(F_.has(a)||kc(a,!1,n),kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ra]||(i[Ra]=!0,kc("selectionchange",!1,i))}}function Gd(n,i,a,c){switch(fd(i)){case 1:var p=Z0;break;case 4:p=J0;break;default:p=Sc}a=p.bind(null,i,a,n),p=void 0,!hs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Bc(n,i,a,c,p){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var z=c.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(C===4)for(C=c.return;C!==null;){var B=C.tag;if((B===3||B===4)&&(B=C.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;C=C.return}for(;z!==null;){if(C=Dr(z),C===null)return;if(B=C.tag,B===5||B===6){c=v=C;continue e}z=z.parentNode}}c=c.return}Cn(function(){var ne=v,we=X(a),Te=[];e:{var Se=kd.get(n);if(Se!==void 0){var He=Tc,je=n;switch(n){case"keypress":if(Sa(a)===0)break e;case"keydown":case"keyup":He=d_;break;case"focusin":je="focus",He=Rc;break;case"focusout":je="blur",He=Rc;break;case"beforeblur":case"afterblur":He=Rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=g_;break;case Ud:case Od:case Fd:He=r_;break;case zd:He=v_;break;case"scroll":He=Q0;break;case"wheel":He=y_;break;case"copy":case"cut":case"paste":He=o_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=_d}var $e=(i&4)!==0,Wt=!$e&&n==="scroll",Z=$e?Se!==null?Se+"Capture":null:Se;$e=[];for(var G=ne,J;G!==null;){J=G;var Re=J.stateNode;if(J.tag===5&&Re!==null&&(J=Re,Z!==null&&(Re=Mn(G,Z),Re!=null&&$e.push(Co(G,Re,J)))),Wt)break;G=G.return}0<$e.length&&(Se=new He(Se,je,null,a,we),Te.push({event:Se,listeners:$e}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Se&&a!==vt&&(je=a.relatedTarget||a.fromElement)&&(Dr(je)||je[Ni]))break e;if((He||Se)&&(Se=we.window===we?we:(Se=we.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(je=a.relatedTarget||a.toElement,He=ne,je=je?Dr(je):null,je!==null&&(Wt=vi(je),je!==Wt||je.tag!==5&&je.tag!==6)&&(je=null)):(He=null,je=ne),He!==je)){if($e=md,Re="onMouseLeave",Z="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&($e=_d,Re="onPointerLeave",Z="onPointerEnter",G="pointer"),Wt=He==null?Se:ys(He),J=je==null?Se:ys(je),Se=new $e(Re,G+"leave",He,a,we),Se.target=Wt,Se.relatedTarget=J,Re=null,Dr(we)===ne&&($e=new $e(Z,G+"enter",je,a,we),$e.target=J,$e.relatedTarget=Wt,Re=$e),Wt=Re,He&&je)t:{for($e=He,Z=je,G=0,J=$e;J;J=vs(J))G++;for(J=0,Re=Z;Re;Re=vs(Re))J++;for(;0<G-J;)$e=vs($e),G--;for(;0<J-G;)Z=vs(Z),J--;for(;G--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=vs($e),Z=vs(Z)}$e=null}else $e=null;He!==null&&Wd(Te,Se,He,$e,!1),je!==null&&Wt!==null&&Wd(Te,Wt,je,$e,!0)}}e:{if(Se=ne?ys(ne):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var Je=C_;else if(Ed(Se))if(Td)Je=L_;else{Je=b_;var rt=R_}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=P_);if(Je&&(Je=Je(n,ne))){wd(Te,Je,a,we);break e}rt&&rt(n,Se,ne),n==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&ot(Se,"number",Se.value)}switch(rt=ne?ys(ne):window,n){case"focusin":(Ed(rt)||rt.contentEditable==="true")&&(gs=rt,Nc=ne,wo=null);break;case"focusout":wo=Nc=gs=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Id(Te,a,we);break;case"selectionchange":if(N_)break;case"keydown":case"keyup":Id(Te,a,we)}var st;if(Pc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else ms?Md(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(vd&&a.locale!=="ko"&&(ms||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&ms&&(st=dd()):(ir=we,wc="value"in ir?ir.value:ir.textContent,ms=!0)),rt=ba(ne,ut),0<rt.length&&(ut=new gd(ut,n,null,a,we),Te.push({event:ut,listeners:rt}),st?ut.data=st:(st=Sd(a),st!==null&&(ut.data=st)))),(st=S_?E_(n,a):w_(n,a))&&(ne=ba(ne,"onBeforeInput"),0<ne.length&&(we=new gd("onBeforeInput","beforeinput",null,a,we),Te.push({event:we,listeners:ne}),we.data=st))}Vd(Te,i)})}function Co(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ba(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Mn(n,a),v!=null&&c.unshift(Co(n,v,p)),v=Mn(n,i),v!=null&&c.push(Co(n,v,p))),n=n.return}return c}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wd(n,i,a,c,p){for(var v=i._reactName,C=[];a!==null&&a!==c;){var z=a,B=z.alternate,ne=z.stateNode;if(B!==null&&B===c)break;z.tag===5&&ne!==null&&(z=ne,p?(B=Mn(a,v),B!=null&&C.unshift(Co(a,B,z))):p||(B=Mn(a,v),B!=null&&C.push(Co(a,B,z)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var z_=/\r\n?/g,k_=/\u0000|\uFFFD/g;function Xd(n){return(typeof n=="string"?n:""+n).replace(z_,`
`).replace(k_,"")}function Pa(n,i,a){if(i=Xd(i),Xd(n)!==i&&a)throw Error(t(425))}function La(){}var Hc=null,Vc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,B_=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,H_=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(n){return jd.resolve(null).then(n).catch(V_)}:Wc;function V_(n){setTimeout(function(){throw n})}function Xc(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),_o(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);_o(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),yi="__reactFiber$"+xs,Ro="__reactProps$"+xs,Ni="__reactContainer$"+xs,jc="__reactEvents$"+xs,G_="__reactListeners$"+xs,W_="__reactHandles$"+xs;function Dr(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ni]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yd(n);n!==null;){if(a=n[yi])return a;n=Yd(n)}return i}n=a,a=n.parentNode}return null}function bo(n){return n=n[yi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Da(n){return n[Ro]||null}var Yc=[],Ms=-1;function or(n){return{current:n}}function Ft(n){0>Ms||(n.current=Yc[Ms],Yc[Ms]=null,Ms--)}function Nt(n,i){Ms++,Yc[Ms]=n.current,n.current=i}var ar={},pn=or(ar),bn=or(!1),Ir=ar;function Ss(n,i){var a=n.type.contextTypes;if(!a)return ar;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function Pn(n){return n=n.childContextTypes,n!=null}function Ia(){Ft(bn),Ft(pn)}function qd(n,i,a){if(pn.current!==ar)throw Error(t(168));Nt(pn,i),Nt(bn,a)}function $d(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(t(108,Ee(n)||"Unknown",p));return ce({},a,c)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Ir=pn.current,Nt(pn,n),Nt(bn,bn.current),!0}function Kd(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=$d(n,i,Ir),c.__reactInternalMemoizedMergedChildContext=n,Ft(bn),Ft(pn),Nt(pn,n)):Ft(bn),Nt(bn,a)}var Ui=null,Ua=!1,qc=!1;function Zd(n){Ui===null?Ui=[n]:Ui.push(n)}function X_(n){Ua=!0,Zd(n)}function lr(){if(!qc&&Ui!==null){qc=!0;var n=0,i=bt;try{var a=Ui;for(bt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ui=null,Ua=!1}catch(p){throw Ui!==null&&(Ui=Ui.slice(n+1)),ie(qe,lr),p}finally{bt=i,qc=!1}}return null}var Es=[],ws=0,Oa=null,Fa=0,$n=[],Kn=0,Nr=null,Oi=1,Fi="";function Ur(n,i){Es[ws++]=Fa,Es[ws++]=Oa,Oa=n,Fa=i}function Jd(n,i,a){$n[Kn++]=Oi,$n[Kn++]=Fi,$n[Kn++]=Nr,Nr=n;var c=Oi;n=Fi;var p=32-ft(c)-1;c&=~(1<<p),a+=1;var v=32-ft(i)+p;if(30<v){var C=p-p%5;v=(c&(1<<C)-1).toString(32),c>>=C,p-=C,Oi=1<<32-ft(i)+p|a<<p|c,Fi=v+n}else Oi=1<<v|a<<p|c,Fi=n}function $c(n){n.return!==null&&(Ur(n,1),Jd(n,1,0))}function Kc(n){for(;n===Oa;)Oa=Es[--ws],Es[ws]=null,Fa=Es[--ws],Es[ws]=null;for(;n===Nr;)Nr=$n[--Kn],$n[Kn]=null,Fi=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null}var kn=null,Bn=null,zt=!1,ai=null;function Qd(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ep(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,Bn=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Nr!==null?{id:Oi,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,kn=n,Bn=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(zt){var i=Bn;if(i){var a=i;if(!ep(n,i)){if(Zc(n))throw Error(t(418));i=sr(a.nextSibling);var c=kn;i&&ep(n,i)?Qd(c,a):(n.flags=n.flags&-4097|2,zt=!1,kn=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,kn=n}}}function tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function za(n){if(n!==kn)return!1;if(!zt)return tp(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=Bn)){if(Zc(n))throw np(),Error(t(418));for(;i;)Qd(n,i),i=sr(i.nextSibling)}if(tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Bn=sr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=kn?sr(n.stateNode.nextSibling):null;return!0}function np(){for(var n=Bn;n;)n=sr(n.nextSibling)}function Ts(){Bn=kn=null,zt=!1}function Qc(n){ai===null?ai=[n]:ai.push(n)}var j_=E.ReactCurrentBatchConfig;function Po(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(C){var z=p.refs;C===null?delete z[v]:z[v]=C},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ka(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ip(n){var i=n._init;return i(n._payload)}function rp(n){function i(Z,G){if(n){var J=Z.deletions;J===null?(Z.deletions=[G],Z.flags|=16):J.push(G)}}function a(Z,G){if(!n)return null;for(;G!==null;)i(Z,G),G=G.sibling;return null}function c(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function p(Z,G){return Z=gr(Z,G),Z.index=0,Z.sibling=null,Z}function v(Z,G,J){return Z.index=J,n?(J=Z.alternate,J!==null?(J=J.index,J<G?(Z.flags|=2,G):J):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function C(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function z(Z,G,J,Re){return G===null||G.tag!==6?(G=Wu(J,Z.mode,Re),G.return=Z,G):(G=p(G,J),G.return=Z,G)}function B(Z,G,J,Re){var Je=J.type;return Je===D?we(Z,G,J.props.children,Re,J.key):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&ip(Je)===G.type)?(Re=p(G,J.props),Re.ref=Po(Z,G,J),Re.return=Z,Re):(Re=cl(J.type,J.key,J.props,null,Z.mode,Re),Re.ref=Po(Z,G,J),Re.return=Z,Re)}function ne(Z,G,J,Re){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Xu(J,Z.mode,Re),G.return=Z,G):(G=p(G,J.children||[]),G.return=Z,G)}function we(Z,G,J,Re,Je){return G===null||G.tag!==7?(G=Gr(J,Z.mode,Re,Je),G.return=Z,G):(G=p(G,J),G.return=Z,G)}function Te(Z,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Wu(""+G,Z.mode,J),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case F:return J=cl(G.type,G.key,G.props,null,Z.mode,J),J.ref=Po(Z,null,G),J.return=Z,J;case N:return G=Xu(G,Z.mode,J),G.return=Z,G;case oe:var Re=G._init;return Te(Z,Re(G._payload),J)}if(Ve(G)||he(G))return G=Gr(G,Z.mode,J,null),G.return=Z,G;ka(Z,G)}return null}function Se(Z,G,J,Re){var Je=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Je!==null?null:z(Z,G,""+J,Re);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case F:return J.key===Je?B(Z,G,J,Re):null;case N:return J.key===Je?ne(Z,G,J,Re):null;case oe:return Je=J._init,Se(Z,G,Je(J._payload),Re)}if(Ve(J)||he(J))return Je!==null?null:we(Z,G,J,Re,null);ka(Z,J)}return null}function He(Z,G,J,Re,Je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return Z=Z.get(J)||null,z(G,Z,""+Re,Je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case F:return Z=Z.get(Re.key===null?J:Re.key)||null,B(G,Z,Re,Je);case N:return Z=Z.get(Re.key===null?J:Re.key)||null,ne(G,Z,Re,Je);case oe:var rt=Re._init;return He(Z,G,J,rt(Re._payload),Je)}if(Ve(Re)||he(Re))return Z=Z.get(J)||null,we(G,Z,Re,Je,null);ka(G,Re)}return null}function je(Z,G,J,Re){for(var Je=null,rt=null,st=G,ut=G=0,on=null;st!==null&&ut<J.length;ut++){st.index>ut?(on=st,st=null):on=st.sibling;var Tt=Se(Z,st,J[ut],Re);if(Tt===null){st===null&&(st=on);break}n&&st&&Tt.alternate===null&&i(Z,st),G=v(Tt,G,ut),rt===null?Je=Tt:rt.sibling=Tt,rt=Tt,st=on}if(ut===J.length)return a(Z,st),zt&&Ur(Z,ut),Je;if(st===null){for(;ut<J.length;ut++)st=Te(Z,J[ut],Re),st!==null&&(G=v(st,G,ut),rt===null?Je=st:rt.sibling=st,rt=st);return zt&&Ur(Z,ut),Je}for(st=c(Z,st);ut<J.length;ut++)on=He(st,Z,ut,J[ut],Re),on!==null&&(n&&on.alternate!==null&&st.delete(on.key===null?ut:on.key),G=v(on,G,ut),rt===null?Je=on:rt.sibling=on,rt=on);return n&&st.forEach(function(_r){return i(Z,_r)}),zt&&Ur(Z,ut),Je}function $e(Z,G,J,Re){var Je=he(J);if(typeof Je!="function")throw Error(t(150));if(J=Je.call(J),J==null)throw Error(t(151));for(var rt=Je=null,st=G,ut=G=0,on=null,Tt=J.next();st!==null&&!Tt.done;ut++,Tt=J.next()){st.index>ut?(on=st,st=null):on=st.sibling;var _r=Se(Z,st,Tt.value,Re);if(_r===null){st===null&&(st=on);break}n&&st&&_r.alternate===null&&i(Z,st),G=v(_r,G,ut),rt===null?Je=_r:rt.sibling=_r,rt=_r,st=on}if(Tt.done)return a(Z,st),zt&&Ur(Z,ut),Je;if(st===null){for(;!Tt.done;ut++,Tt=J.next())Tt=Te(Z,Tt.value,Re),Tt!==null&&(G=v(Tt,G,ut),rt===null?Je=Tt:rt.sibling=Tt,rt=Tt);return zt&&Ur(Z,ut),Je}for(st=c(Z,st);!Tt.done;ut++,Tt=J.next())Tt=He(st,Z,ut,Tt.value,Re),Tt!==null&&(n&&Tt.alternate!==null&&st.delete(Tt.key===null?ut:Tt.key),G=v(Tt,G,ut),rt===null?Je=Tt:rt.sibling=Tt,rt=Tt);return n&&st.forEach(function(Tv){return i(Z,Tv)}),zt&&Ur(Z,ut),Je}function Wt(Z,G,J,Re){if(typeof J=="object"&&J!==null&&J.type===D&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case F:e:{for(var Je=J.key,rt=G;rt!==null;){if(rt.key===Je){if(Je=J.type,Je===D){if(rt.tag===7){a(Z,rt.sibling),G=p(rt,J.props.children),G.return=Z,Z=G;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&ip(Je)===rt.type){a(Z,rt.sibling),G=p(rt,J.props),G.ref=Po(Z,rt,J),G.return=Z,Z=G;break e}a(Z,rt);break}else i(Z,rt);rt=rt.sibling}J.type===D?(G=Gr(J.props.children,Z.mode,Re,J.key),G.return=Z,Z=G):(Re=cl(J.type,J.key,J.props,null,Z.mode,Re),Re.ref=Po(Z,G,J),Re.return=Z,Z=Re)}return C(Z);case N:e:{for(rt=J.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(Z,G.sibling),G=p(G,J.children||[]),G.return=Z,Z=G;break e}else{a(Z,G);break}else i(Z,G);G=G.sibling}G=Xu(J,Z.mode,Re),G.return=Z,Z=G}return C(Z);case oe:return rt=J._init,Wt(Z,G,rt(J._payload),Re)}if(Ve(J))return je(Z,G,J,Re);if(he(J))return $e(Z,G,J,Re);ka(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(a(Z,G.sibling),G=p(G,J),G.return=Z,Z=G):(a(Z,G),G=Wu(J,Z.mode,Re),G.return=Z,Z=G),C(Z)):a(Z,G)}return Wt}var As=rp(!0),sp=rp(!1),Ba=or(null),Ha=null,Cs=null,eu=null;function tu(){eu=Cs=Ha=null}function nu(n){var i=Ba.current;Ft(Ba),n._currentValue=i}function iu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){Ha=n,eu=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(eu!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Ha===null)throw Error(t(308));Cs=n,Ha.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Or=null;function ru(n){Or===null?Or=[n]:Or.push(n)}function op(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,ru(i)):(a.next=p.next,p.next=a),i.interleaved=a,zi(n,c)}function zi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var cr=!1;function su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,zi(n,a)}return p=c.interleaved,p===null?(i.next=i,ru(c)):(i.next=p.next,p.next=i),c.interleaved=i,zi(n,a)}function Va(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,xc(n,a)}}function lp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=C:v=v.next=C,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ga(n,i,a,c){var p=n.updateQueue;cr=!1;var v=p.firstBaseUpdate,C=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var B=z,ne=B.next;B.next=null,C===null?v=ne:C.next=ne,C=B;var we=n.alternate;we!==null&&(we=we.updateQueue,z=we.lastBaseUpdate,z!==C&&(z===null?we.firstBaseUpdate=ne:z.next=ne,we.lastBaseUpdate=B))}if(v!==null){var Te=p.baseState;C=0,we=ne=B=null,z=v;do{var Se=z.lane,He=z.eventTime;if((c&Se)===Se){we!==null&&(we=we.next={eventTime:He,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var je=n,$e=z;switch(Se=i,He=a,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){Te=je.call(He,Te,Se);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,Se=typeof je=="function"?je.call(He,Te,Se):je,Se==null)break e;Te=ce({},Te,Se);break e;case 2:cr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Se=p.effects,Se===null?p.effects=[z]:Se.push(z))}else He={eventTime:He,lane:Se,tag:z.tag,payload:z.payload,callback:z.callback,next:null},we===null?(ne=we=He,B=Te):we=we.next=He,C|=Se;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;Se=z,z=Se.next,Se.next=null,p.lastBaseUpdate=Se,p.shared.pending=null}}while(!0);if(we===null&&(B=Te),p.baseState=B,p.firstBaseUpdate=ne,p.lastBaseUpdate=we,i=p.shared.interleaved,i!==null){p=i;do C|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);kr|=C,n.lanes=C,n.memoizedState=Te}}function cp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Lo={},Mi=or(Lo),Do=or(Lo),Io=or(Lo);function Fr(n){if(n===Lo)throw Error(t(174));return n}function ou(n,i){switch(Nt(Io,i),Nt(Do,n),Nt(Mi,Lo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ft(Mi),Nt(Mi,i)}function bs(){Ft(Mi),Ft(Do),Ft(Io)}function up(n){Fr(Io.current);var i=Fr(Mi.current),a=Ge(i,n.type);i!==a&&(Nt(Do,n),Nt(Mi,a))}function au(n){Do.current===n&&(Ft(Mi),Ft(Do))}var kt=or(0);function Wa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function cu(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var Xa=E.ReactCurrentDispatcher,uu=E.ReactCurrentBatchConfig,zr=0,Bt=null,Zt=null,rn=null,ja=!1,No=!1,Uo=0,Y_=0;function mn(){throw Error(t(321))}function hu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function fu(n,i,a,c,p,v){if(zr=v,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xa.current=n===null||n.memoizedState===null?Z_:J_,n=a(c,p),No){v=0;do{if(No=!1,Uo=0,25<=v)throw Error(t(301));v+=1,rn=Zt=null,i.updateQueue=null,Xa.current=Q_,n=a(c,p)}while(No)}if(Xa.current=$a,i=Zt!==null&&Zt.next!==null,zr=0,rn=Zt=Bt=null,ja=!1,i)throw Error(t(300));return n}function du(){var n=Uo!==0;return Uo=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Bt.memoizedState=rn=n:rn=rn.next=n,rn}function Jn(){if(Zt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=rn===null?Bt.memoizedState:rn.next;if(i!==null)rn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?Bt.memoizedState=rn=n:rn=rn.next=n}return rn}function Oo(n,i){return typeof i=="function"?i(n):i}function pu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Zt,p=c.baseQueue,v=a.pending;if(v!==null){if(p!==null){var C=p.next;p.next=v.next,v.next=C}c.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,c=c.baseState;var z=C=null,B=null,ne=v;do{var we=ne.lane;if((zr&we)===we)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var Te={lane:we,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(z=B=Te,C=c):B=B.next=Te,Bt.lanes|=we,kr|=we}ne=ne.next}while(ne!==null&&ne!==v);B===null?C=c:B.next=z,oi(c,i.memoizedState)||(Ln=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do v=p.lane,Bt.lanes|=v,kr|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function mu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var C=p=p.next;do v=n(v,C.action),C=C.next;while(C!==p);oi(v,i.memoizedState)||(Ln=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,c]}function hp(){}function fp(n,i){var a=Bt,c=Jn(),p=i(),v=!oi(c.memoizedState,p);if(v&&(c.memoizedState=p,Ln=!0),c=c.queue,gu(mp.bind(null,a,c,n),[n]),c.getSnapshot!==i||v||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Fo(9,pp.bind(null,a,c,p,i),void 0,null),sn===null)throw Error(t(349));(zr&30)!==0||dp(a,i,p)}return p}function dp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function pp(n,i,a,c){i.value=a,i.getSnapshot=c,gp(i)&&_p(n)}function mp(n,i,a){return a(function(){gp(i)&&_p(n)})}function gp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function _p(n){var i=zi(n,1);i!==null&&hi(i,n,1,-1)}function vp(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},i.queue=n,n=n.dispatch=K_.bind(null,Bt,n),[i.memoizedState,n]}function Fo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function xp(){return Jn().memoizedState}function Ya(n,i,a,c){var p=Si();Bt.flags|=n,p.memoizedState=Fo(1|i,a,void 0,c===void 0?null:c)}function qa(n,i,a,c){var p=Jn();c=c===void 0?null:c;var v=void 0;if(Zt!==null){var C=Zt.memoizedState;if(v=C.destroy,c!==null&&hu(c,C.deps)){p.memoizedState=Fo(i,a,v,c);return}}Bt.flags|=n,p.memoizedState=Fo(1|i,a,v,c)}function yp(n,i){return Ya(8390656,8,n,i)}function gu(n,i){return qa(2048,8,n,i)}function Mp(n,i){return qa(4,2,n,i)}function Sp(n,i){return qa(4,4,n,i)}function Ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wp(n,i,a){return a=a!=null?a.concat([n]):null,qa(4,4,Ep.bind(null,i,n),a)}function _u(){}function Tp(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Ap(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Cp(n,i,a){return(zr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=a):(oi(a,i)||(a=Sn(),Bt.lanes|=a,kr|=a,n.baseState=!0),i)}function q_(n,i){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var c=uu.transition;uu.transition={};try{n(!1),i()}finally{bt=a,uu.transition=c}}function Rp(){return Jn().memoizedState}function $_(n,i,a){var c=pr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bp(n))Pp(i,a);else if(a=op(n,i,a,c),a!==null){var p=wn();hi(a,n,c,p),Lp(a,i,c)}}function K_(n,i,a){var c=pr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bp(n))Pp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var C=i.lastRenderedState,z=v(C,a);if(p.hasEagerState=!0,p.eagerState=z,oi(z,C)){var B=i.interleaved;B===null?(p.next=p,ru(i)):(p.next=B.next,B.next=p),i.interleaved=p;return}}catch{}finally{}a=op(n,i,p,c),a!==null&&(p=wn(),hi(a,n,c,p),Lp(a,i,c))}}function bp(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function Pp(n,i){No=ja=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Lp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,xc(n,a)}}var $a={readContext:Zn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},Z_={readContext:Zn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:yp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ya(4194308,4,Ep.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ya(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ya(4,2,n,i)},useMemo:function(n,i){var a=Si();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Si();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=$_.bind(null,Bt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:vp,useDebugValue:_u,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=vp(!1),i=n[0];return n=q_.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Bt,p=Si();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(zr&30)!==0||dp(c,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,yp(mp.bind(null,c,v,n),[n]),c.flags|=2048,Fo(9,pp.bind(null,c,v,a,i),void 0,null),a},useId:function(){var n=Si(),i=sn.identifierPrefix;if(zt){var a=Fi,c=Oi;a=(c&~(1<<32-ft(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Uo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Y_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},J_={readContext:Zn,useCallback:Tp,useContext:Zn,useEffect:gu,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Sp,useMemo:Ap,useReducer:pu,useRef:xp,useState:function(){return pu(Oo)},useDebugValue:_u,useDeferredValue:function(n){var i=Jn();return Cp(i,Zt.memoizedState,n)},useTransition:function(){var n=pu(Oo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:fp,useId:Rp,unstable_isNewReconciler:!1},Q_={readContext:Zn,useCallback:Tp,useContext:Zn,useEffect:gu,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Sp,useMemo:Ap,useReducer:mu,useRef:xp,useState:function(){return mu(Oo)},useDebugValue:_u,useDeferredValue:function(n){var i=Jn();return Zt===null?i.memoizedState=n:Cp(i,Zt.memoizedState,n)},useTransition:function(){var n=mu(Oo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:fp,useId:Rp,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function vu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ka={isMounted:function(n){return(n=n._reactInternals)?vi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=wn(),p=pr(n),v=ki(c,p);v.payload=i,a!=null&&(v.callback=a),i=ur(n,v,p),i!==null&&(hi(i,n,p,c),Va(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=wn(),p=pr(n),v=ki(c,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=ur(n,v,p),i!==null&&(hi(i,n,p,c),Va(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),c=pr(n),p=ki(a,c);p.tag=2,i!=null&&(p.callback=i),i=ur(n,p,c),i!==null&&(hi(i,n,c,a),Va(i,n,c))}};function Dp(n,i,a,c,p,v,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,C):i.prototype&&i.prototype.isPureReactComponent?!Eo(a,c)||!Eo(p,v):!0}function Ip(n,i,a){var c=!1,p=ar,v=i.contextType;return typeof v=="object"&&v!==null?v=Zn(v):(p=Pn(i)?Ir:pn.current,c=i.contextTypes,v=(c=c!=null)?Ss(n,p):ar),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ka,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function Np(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ka.enqueueReplaceState(i,i.state,null)}function xu(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},su(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=Zn(v):(v=Pn(i)?Ir:pn.current,p.context=Ss(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(vu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&Ka.enqueueReplaceState(p,p.state,null),Ga(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",c=i;do a+=pe(c),c=c.return;while(c);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function yu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function Up(n,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,Ou=c),Mu(n,i)},a}function Op(n,i,a){a=ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){Mu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Mu(n,i),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function Fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new ev;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=pv.bind(null,n,i,a),i.then(n,n))}function zp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function kp(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,ur(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var tv=E.ReactCurrentOwner,Ln=!1;function En(n,i,a,c){i.child=n===null?sp(i,null,a,c):As(i,n.child,a,c)}function Bp(n,i,a,c,p){a=a.render;var v=i.ref;return Rs(i,p),c=fu(n,i,a,c,v,p),a=du(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Bi(n,i,p)):(zt&&a&&$c(i),i.flags|=1,En(n,i,c,p),i.child)}function Hp(n,i,a,c,p){if(n===null){var v=a.type;return typeof v=="function"&&!Gu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Vp(n,i,v,c,p)):(n=cl(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var C=v.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(C,c)&&n.ref===i.ref)return Bi(n,i,p)}return i.flags|=1,n=gr(v,c),n.ref=i.ref,n.return=i,i.child=n}function Vp(n,i,a,c,p){if(n!==null){var v=n.memoizedProps;if(Eo(v,c)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=c=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Bi(n,i,p)}return Su(n,i,a,c,p)}function Gp(n,i,a){var c=i.pendingProps,p=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ds,Hn),Hn|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ds,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,Nt(Ds,Hn),Hn|=c}else v!==null?(c=v.baseLanes|a,i.memoizedState=null):c=a,Nt(Ds,Hn),Hn|=c;return En(n,i,p,a),i.child}function Wp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Su(n,i,a,c,p){var v=Pn(a)?Ir:pn.current;return v=Ss(i,v),Rs(i,p),a=fu(n,i,a,c,v,p),c=du(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Bi(n,i,p)):(zt&&c&&$c(i),i.flags|=1,En(n,i,a,p),i.child)}function Xp(n,i,a,c,p){if(Pn(a)){var v=!0;Na(i)}else v=!1;if(Rs(i,p),i.stateNode===null)Ja(n,i),Ip(i,a,c),xu(i,a,c,p),c=!0;else if(n===null){var C=i.stateNode,z=i.memoizedProps;C.props=z;var B=C.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Zn(ne):(ne=Pn(a)?Ir:pn.current,ne=Ss(i,ne));var we=a.getDerivedStateFromProps,Te=typeof we=="function"||typeof C.getSnapshotBeforeUpdate=="function";Te||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==c||B!==ne)&&Np(i,C,c,ne),cr=!1;var Se=i.memoizedState;C.state=Se,Ga(i,c,C,p),B=i.memoizedState,z!==c||Se!==B||bn.current||cr?(typeof we=="function"&&(vu(i,a,we,c),B=i.memoizedState),(z=cr||Dp(i,a,z,c,Se,B,ne))?(Te||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),C.props=c,C.state=B,C.context=ne,c=z):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,ap(n,i),z=i.memoizedProps,ne=i.type===i.elementType?z:li(i.type,z),C.props=ne,Te=i.pendingProps,Se=C.context,B=a.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Pn(a)?Ir:pn.current,B=Ss(i,B));var He=a.getDerivedStateFromProps;(we=typeof He=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==Te||Se!==B)&&Np(i,C,c,B),cr=!1,Se=i.memoizedState,C.state=Se,Ga(i,c,C,p);var je=i.memoizedState;z!==Te||Se!==je||bn.current||cr?(typeof He=="function"&&(vu(i,a,He,c),je=i.memoizedState),(ne=cr||Dp(i,a,ne,c,Se,je,B)||!1)?(we||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,je,B),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,je,B)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),C.props=c,C.state=je,C.context=B,c=ne):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),c=!1)}return Eu(n,i,a,c,v,p)}function Eu(n,i,a,c,p,v){Wp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return p&&Kd(i,a,!1),Bi(n,i,v);c=i.stateNode,tv.current=i;var z=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=As(i,n.child,null,v),i.child=As(i,null,z,v)):En(n,i,z,v),i.memoizedState=c.state,p&&Kd(i,a,!0),i.child}function jp(n){var i=n.stateNode;i.pendingContext?qd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&qd(n,i.context,!1),ou(n,i.containerInfo)}function Yp(n,i,a,c,p){return Ts(),Qc(p),i.flags|=256,En(n,i,a,c),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,i,a){var c=i.pendingProps,p=kt.current,v=!1,C=(i.flags&128)!==0,z;if((z=C)||(z=n!==null&&n.memoizedState===null?!1:(p&2)!==0),z?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Nt(kt,p&1),n===null)return Jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,v?(c=i.mode,v=i.child,C={mode:"hidden",children:C},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=C):v=ul(C,c,0,null),n=Gr(n,c,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Tu(a),i.memoizedState=wu,n):Au(i,C));if(p=n.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return nv(n,i,C,c,z,p,a);if(v){v=c.fallback,C=i.mode,p=n.child,z=p.sibling;var B={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=gr(p,B),c.subtreeFlags=p.subtreeFlags&14680064),z!==null?v=gr(z,v):(v=Gr(v,C,a,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,C=n.child.memoizedState,C=C===null?Tu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},v.memoizedState=C,v.childLanes=n.childLanes&~a,i.memoizedState=wu,c}return v=n.child,n=v.sibling,c=gr(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Au(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Za(n,i,a,c){return c!==null&&Qc(c),As(i,n.child,null,a),n=Au(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function nv(n,i,a,c,p,v,C){if(a)return i.flags&256?(i.flags&=-257,c=yu(Error(t(422))),Za(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,p=i.mode,c=ul({mode:"visible",children:c.children},p,0,null),v=Gr(v,p,C,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,C),i.child.memoizedState=Tu(C),i.memoizedState=wu,v);if((i.mode&1)===0)return Za(n,i,C,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var z=c.dgst;return c=z,v=Error(t(419)),c=yu(v,c,void 0),Za(n,i,C,c)}if(z=(C&n.childLanes)!==0,Ln||z){if(c=sn,c!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|C))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,zi(n,p),hi(c,n,p,-1))}return Vu(),c=yu(Error(t(421))),Za(n,i,C,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=mv.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,Bn=sr(p.nextSibling),kn=i,zt=!0,ai=null,n!==null&&($n[Kn++]=Oi,$n[Kn++]=Fi,$n[Kn++]=Nr,Oi=n.id,Fi=n.overflow,Nr=i),i=Au(i,c.children),i.flags|=4096,i)}function $p(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),iu(n.return,i,a)}function Cu(n,i,a,c,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=p)}function Kp(n,i,a){var c=i.pendingProps,p=c.revealOrder,v=c.tail;if(En(n,i,c.children,a),c=kt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,a,i);else if(n.tag===19)$p(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Nt(kt,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Wa(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Cu(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Wa(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Cu(i,!0,a,null,v);break;case"together":Cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Bi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function iv(n,i,a){switch(i.tag){case 3:jp(i),Ts();break;case 5:up(i);break;case 1:Pn(i.type)&&Na(i);break;case 4:ou(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;Nt(Ba,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Nt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?qp(n,i,a):(Nt(kt,kt.current&1),n=Bi(n,i,a),n!==null?n.sibling:null);Nt(kt,kt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Kp(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Nt(kt,kt.current),c)break;return null;case 22:case 23:return i.lanes=0,Gp(n,i,a)}return Bi(n,i,a)}var Zp,Ru,Jp,Qp;Zp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ru=function(){},Jp=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,Fr(Mi.current);var v=null;switch(a){case"input":p=Y(n,p),c=Y(n,c),v=[];break;case"select":p=ce({},p,{value:void 0}),c=ce({},c,{value:void 0}),v=[];break;case"textarea":p=b(n,p),c=b(n,c),v=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=La)}We(a,c);var C;a=null;for(ne in p)if(!c.hasOwnProperty(ne)&&p.hasOwnProperty(ne)&&p[ne]!=null)if(ne==="style"){var z=p[ne];for(C in z)z.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?v||(v=[]):(v=v||[]).push(ne,null));for(ne in c){var B=c[ne];if(z=p!=null?p[ne]:void 0,c.hasOwnProperty(ne)&&B!==z&&(B!=null||z!=null))if(ne==="style")if(z){for(C in z)!z.hasOwnProperty(C)||B&&B.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in B)B.hasOwnProperty(C)&&z[C]!==B[C]&&(a||(a={}),a[C]=B[C])}else a||(v||(v=[]),v.push(ne,a)),a=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,z=z?z.__html:void 0,B!=null&&z!==B&&(v=v||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&Ot("scroll",n),v||z===B||(v=[])):(v=v||[]).push(ne,B))}a&&(v=v||[]).push("style",a);var ne=v;(i.updateQueue=ne)&&(i.flags|=4)}},Qp=function(n,i,a,c){a!==c&&(i.flags|=4)};function zo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function rv(n,i,a){var c=i.pendingProps;switch(Kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Pn(i.type)&&Ia(),gn(i),null;case 3:return c=i.stateNode,bs(),Ft(bn),Ft(pn),cu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(za(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(ku(ai),ai=null))),Ru(n,i),gn(i),null;case 5:au(i);var p=Fr(Io.current);if(a=i.type,n!==null&&i.stateNode!=null)Jp(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Fr(Mi.current),za(i)){c=i.stateNode,a=i.type;var v=i.memoizedProps;switch(c[yi]=i,c[Ro]=v,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(p=0;p<To.length;p++)Ot(To[p],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":nn(c,v),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Ot("invalid",c);break;case"textarea":K(c,v),Ot("invalid",c)}We(a,v),p=null;for(var C in v)if(v.hasOwnProperty(C)){var z=v[C];C==="children"?typeof z=="string"?c.textContent!==z&&(v.suppressHydrationWarning!==!0&&Pa(c.textContent,z,n),p=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(v.suppressHydrationWarning!==!0&&Pa(c.textContent,z,n),p=["children",""+z]):o.hasOwnProperty(C)&&z!=null&&C==="onScroll"&&Ot("scroll",c)}switch(a){case"input":At(c),_e(c,v,!0);break;case"textarea":At(c),xe(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=La)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[yi]=i,n[Ro]=c,Zp(n,i,!1,!1),i.stateNode=n;e:{switch(C=it(a,c),a){case"dialog":Ot("cancel",n),Ot("close",n),p=c;break;case"iframe":case"object":case"embed":Ot("load",n),p=c;break;case"video":case"audio":for(p=0;p<To.length;p++)Ot(To[p],n);p=c;break;case"source":Ot("error",n),p=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),p=c;break;case"details":Ot("toggle",n),p=c;break;case"input":nn(n,c),p=Y(n,c),Ot("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=ce({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":K(n,c),p=b(n,c),Ot("invalid",n);break;default:p=c}We(a,p),z=p;for(v in z)if(z.hasOwnProperty(v)){var B=z[v];v==="style"?ee(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ie(n,B)):v==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&at(n,B):typeof B=="number"&&at(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Ot("scroll",n):B!=null&&A(n,v,B,C))}switch(a){case"input":At(n),_e(n,c,!1);break;case"textarea":At(n),xe(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?U(n,!!c.multiple,v,!1):c.defaultValue!=null&&U(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=La)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Qp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(Io.current),Fr(Mi.current),za(i)){if(c=i.stateNode,a=i.memoizedProps,c[yi]=i,(v=c.nodeValue!==a)&&(n=kn,n!==null))switch(n.tag){case 3:Pa(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pa(c.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return gn(i),null;case 13:if(Ft(kt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)np(),Ts(),i.flags|=98560,v=!1;else if(v=za(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[yi]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),v=!1}else ai!==null&&(ku(ai),ai=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(kt.current&1)!==0?Jt===0&&(Jt=3):Vu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return bs(),Ru(n,i),n===null&&Ao(i.stateNode.containerInfo),gn(i),null;case 10:return nu(i.type._context),gn(i),null;case 17:return Pn(i.type)&&Ia(),gn(i),null;case 19:if(Ft(kt),v=i.memoizedState,v===null)return gn(i),null;if(c=(i.flags&128)!==0,C=v.rendering,C===null)if(c)zo(v,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Wa(n),C!==null){for(i.flags|=128,zo(v,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)v=a,n=c,v.flags&=14680066,C=v.alternate,C===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=C.childLanes,v.lanes=C.lanes,v.child=C.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=C.memoizedProps,v.memoizedState=C.memoizedState,v.updateQueue=C.updateQueue,v.type=C.type,n=C.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Nt(kt,kt.current&1|2),i.child}n=n.sibling}v.tail!==null&&Ce()>Is&&(i.flags|=128,c=!0,zo(v,!1),i.lanes=4194304)}else{if(!c)if(n=Wa(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),zo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!C.alternate&&!zt)return gn(i),null}else 2*Ce()-v.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,zo(v,!1),i.lanes=4194304);v.isBackwards?(C.sibling=i.child,i.child=C):(a=v.last,a!==null?a.sibling=C:i.child=C,v.last=C)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Ce(),i.sibling=null,a=kt.current,Nt(kt,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return Hu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function sv(n,i){switch(Kc(i),i.tag){case 1:return Pn(i.type)&&Ia(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return bs(),Ft(bn),Ft(pn),cu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(Ft(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ts()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return bs(),null;case 10:return nu(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var Qa=!1,_n=!1,ov=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Vt(n,i,c)}else a.current=null}function bu(n,i,a){try{a()}catch(c){Vt(n,i,c)}}var em=!1;function av(n,i){if(Hc=xa,n=Dd(),Ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var C=0,z=-1,B=-1,ne=0,we=0,Te=n,Se=null;t:for(;;){for(var He;Te!==a||p!==0&&Te.nodeType!==3||(z=C+p),Te!==v||c!==0&&Te.nodeType!==3||(B=C+c),Te.nodeType===3&&(C+=Te.nodeValue.length),(He=Te.firstChild)!==null;)Se=Te,Te=He;for(;;){if(Te===n)break t;if(Se===a&&++ne===p&&(z=C),Se===v&&++we===c&&(B=C),(He=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=He}a=z===-1||B===-1?null:{start:z,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},xa=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,Wt=je.memoizedState,Z=i.stateNode,G=Z.getSnapshotBeforeUpdate(i.elementType===i.type?$e:li(i.type,$e),Wt);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Vt(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return je=em,em=!1,je}function ko(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&bu(i,a,v)}p=p.next}while(p!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function tm(n){var i=n.alternate;i!==null&&(n.alternate=null,tm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[Ro],delete i[jc],delete i[G_],delete i[W_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nm(n){return n.tag===5||n.tag===3||n.tag===4}function im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=La));else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}function Du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,a),n=n.sibling;n!==null;)Du(n,i,a),n=n.sibling}var cn=null,ci=!1;function hr(n,i,a){for(a=a.child;a!==null;)rm(n,i,a),a=a.sibling}function rm(n,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 5:_n||Ls(a,i);case 6:var c=cn,p=ci;cn=null,hr(n,i,a),cn=c,ci=p,cn!==null&&(ci?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ci?(n=cn,a=a.stateNode,n.nodeType===8?Xc(n.parentNode,a):n.nodeType===1&&Xc(n,a),_o(n)):Xc(cn,a.stateNode));break;case 4:c=cn,p=ci,cn=a.stateNode.containerInfo,ci=!0,hr(n,i,a),cn=c,ci=p;break;case 0:case 11:case 14:case 15:if(!_n&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var v=p,C=v.destroy;v=v.tag,C!==void 0&&((v&2)!==0||(v&4)!==0)&&bu(a,i,C),p=p.next}while(p!==c)}hr(n,i,a);break;case 1:if(!_n&&(Ls(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){Vt(a,i,z)}hr(n,i,a);break;case 21:hr(n,i,a);break;case 22:a.mode&1?(_n=(c=_n)||a.memoizedState!==null,hr(n,i,a),_n=c):hr(n,i,a);break;default:hr(n,i,a)}}function sm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ov),i.forEach(function(c){var p=gv.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function ui(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var v=n,C=i,z=C;e:for(;z!==null;){switch(z.tag){case 5:cn=z.stateNode,ci=!1;break e;case 3:cn=z.stateNode.containerInfo,ci=!0;break e;case 4:cn=z.stateNode.containerInfo,ci=!0;break e}z=z.return}if(cn===null)throw Error(t(160));rm(v,C,p),cn=null,ci=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(ne){Vt(p,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)om(i,n),i=i.sibling}function om(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(i,n),Ei(n),c&4){try{ko(3,n,n.return),el(3,n)}catch($e){Vt(n,n.return,$e)}try{ko(5,n,n.return)}catch($e){Vt(n,n.return,$e)}}break;case 1:ui(i,n),Ei(n),c&512&&a!==null&&Ls(a,a.return);break;case 5:if(ui(i,n),Ei(n),c&512&&a!==null&&Ls(a,a.return),n.flags&32){var p=n.stateNode;try{at(p,"")}catch($e){Vt(n,n.return,$e)}}if(c&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,C=a!==null?a.memoizedProps:v,z=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{z==="input"&&v.type==="radio"&&v.name!=null&&Ye(p,v),it(z,C);var ne=it(z,v);for(C=0;C<B.length;C+=2){var we=B[C],Te=B[C+1];we==="style"?ee(p,Te):we==="dangerouslySetInnerHTML"?Ie(p,Te):we==="children"?at(p,Te):A(p,we,Te,ne)}switch(z){case"input":Me(p,v);break;case"textarea":me(p,v);break;case"select":var Se=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var He=v.value;He!=null?U(p,!!v.multiple,He,!1):Se!==!!v.multiple&&(v.defaultValue!=null?U(p,!!v.multiple,v.defaultValue,!0):U(p,!!v.multiple,v.multiple?[]:"",!1))}p[Ro]=v}catch($e){Vt(n,n.return,$e)}}break;case 6:if(ui(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch($e){Vt(n,n.return,$e)}}break;case 3:if(ui(i,n),Ei(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(i.containerInfo)}catch($e){Vt(n,n.return,$e)}break;case 4:ui(i,n),Ei(n);break;case 13:ui(i,n),Ei(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Uu=Ce())),c&4&&sm(n);break;case 22:if(we=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(ne=_n)||we,ui(i,n),_n=ne):ui(i,n),Ei(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!we&&(n.mode&1)!==0)for(Xe=n,we=n.child;we!==null;){for(Te=Xe=we;Xe!==null;){switch(Se=Xe,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:ko(4,Se,Se.return);break;case 1:Ls(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){c=Se,a=Se.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch($e){Vt(c,a,$e)}}break;case 5:Ls(Se,Se.return);break;case 22:if(Se.memoizedState!==null){cm(Te);continue}}He!==null?(He.return=Se,Xe=He):cm(Te)}we=we.sibling}e:for(we=null,Te=n;;){if(Te.tag===5){if(we===null){we=Te;try{p=Te.stateNode,ne?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(z=Te.stateNode,B=Te.memoizedProps.style,C=B!=null&&B.hasOwnProperty("display")?B.display:null,z.style.display=et("display",C))}catch($e){Vt(n,n.return,$e)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=ne?"":Te.memoizedProps}catch($e){Vt(n,n.return,$e)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:ui(i,n),Ei(n),c&4&&sm(n);break;case 21:break;default:ui(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(nm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(at(p,""),c.flags&=-33);var v=im(n);Du(n,v,p);break;case 3:case 4:var C=c.stateNode.containerInfo,z=im(n);Lu(n,z,C);break;default:throw Error(t(161))}}catch(B){Vt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function lv(n,i,a){Xe=n,am(n)}function am(n,i,a){for(var c=(n.mode&1)!==0;Xe!==null;){var p=Xe,v=p.child;if(p.tag===22&&c){var C=p.memoizedState!==null||Qa;if(!C){var z=p.alternate,B=z!==null&&z.memoizedState!==null||_n;z=Qa;var ne=_n;if(Qa=C,(_n=B)&&!ne)for(Xe=p;Xe!==null;)C=Xe,B=C.child,C.tag===22&&C.memoizedState!==null?um(p):B!==null?(B.return=C,Xe=B):um(p);for(;v!==null;)Xe=v,am(v),v=v.sibling;Xe=p,Qa=z,_n=ne}lm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Xe=v):lm(n)}}function lm(n){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:li(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&cp(i,v,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}cp(i,C,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var we=ne.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&_o(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&Pu(i)}catch(Se){Vt(i,i.return,Se)}}if(i===n){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function cm(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function um(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(B){Vt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(B){Vt(i,p,B)}}var v=i.return;try{Pu(i)}catch(B){Vt(i,v,B)}break;case 5:var C=i.return;try{Pu(i)}catch(B){Vt(i,C,B)}}}catch(B){Vt(i,i.return,B)}if(i===n){Xe=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Xe=z;break}Xe=i.return}}var cv=Math.ceil,tl=E.ReactCurrentDispatcher,Iu=E.ReactCurrentOwner,Qn=E.ReactCurrentBatchConfig,St=0,sn=null,Xt=null,un=0,Hn=0,Ds=or(0),Jt=0,Bo=null,kr=0,nl=0,Nu=0,Ho=null,Dn=null,Uu=0,Is=1/0,Hi=null,il=!1,Ou=null,fr=null,rl=!1,dr=null,sl=0,Vo=0,Fu=null,ol=-1,al=0;function wn(){return(St&6)!==0?Ce():ol!==-1?ol:ol=Ce()}function pr(n){return(n.mode&1)===0?1:(St&2)!==0&&un!==0?un&-un:j_.transition!==null?(al===0&&(al=Sn()),al):(n=bt,n!==0||(n=window.event,n=n===void 0?16:fd(n.type)),n)}function hi(n,i,a,c){if(50<Vo)throw Vo=0,Fu=null,Error(t(185));Rn(n,a,c),((St&2)===0||n!==sn)&&(n===sn&&((St&2)===0&&(nl|=a),Jt===4&&mr(n,un)),In(n,c),a===1&&St===0&&(i.mode&1)===0&&(Is=Ce()+500,Ua&&lr()))}function In(n,i){var a=n.callbackNode;Yn(n,i);var c=xi(n,n===sn?un:0);if(c===0)a!==null&&re(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&re(a),i===1)n.tag===0?X_(fm.bind(null,n)):Zd(fm.bind(null,n)),H_(function(){(St&6)===0&&lr()}),a=null;else{switch(rd(c)){case 1:a=qe;break;case 4:a=ct;break;case 16:a=ht;break;case 536870912:a=yt;break;default:a=ht}a=ym(a,hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function hm(n,i){if(ol=-1,al=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var c=xi(n,n===sn?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var p=St;St|=2;var v=pm();(sn!==n||un!==i)&&(Hi=null,Is=Ce()+500,Hr(n,i));do try{fv();break}catch(z){dm(n,z)}while(!0);tu(),tl.current=v,St=p,Xt!==null?i=0:(sn=null,un=0,i=Jt)}if(i!==0){if(i===2&&(p=Ii(n),p!==0&&(c=p,i=zu(n,p))),i===1)throw a=Bo,Hr(n,0),mr(n,c),In(n,Ce()),a;if(i===6)mr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!uv(p)&&(i=ll(n,c),i===2&&(v=Ii(n),v!==0&&(c=v,i=zu(n,v))),i===1))throw a=Bo,Hr(n,0),mr(n,c),In(n,Ce()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Dn,Hi);break;case 3:if(mr(n,c),(c&130023424)===c&&(i=Uu+500-Ce(),10<i)){if(xi(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){wn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Wc(Vr.bind(null,n,Dn,Hi),i);break}Vr(n,Dn,Hi);break;case 4:if(mr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var C=31-ft(c);v=1<<C,C=i[C],C>p&&(p=C),c&=~v}if(c=p,c=Ce()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cv(c/1960))-c,10<c){n.timeoutHandle=Wc(Vr.bind(null,n,Dn,Hi),c);break}Vr(n,Dn,Hi);break;case 5:Vr(n,Dn,Hi);break;default:throw Error(t(329))}}}return In(n,Ce()),n.callbackNode===a?hm.bind(null,n):null}function zu(n,i){var a=Ho;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=ll(n,i),n!==2&&(i=Dn,Dn=a,i!==null&&ku(i)),n}function ku(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function uv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],v=p.getSnapshot;p=p.value;try{if(!oi(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~Nu,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ft(i),c=1<<a;n[a]=-1,i&=~c}}function fm(n){if((St&6)!==0)throw Error(t(327));Ns();var i=xi(n,0);if((i&1)===0)return In(n,Ce()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=Ii(n);c!==0&&(i=c,a=zu(n,c))}if(a===1)throw a=Bo,Hr(n,0),mr(n,i),In(n,Ce()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Dn,Hi),In(n,Ce()),null}function Bu(n,i){var a=St;St|=1;try{return n(i)}finally{St=a,St===0&&(Is=Ce()+500,Ua&&lr())}}function Br(n){dr!==null&&dr.tag===0&&(St&6)===0&&Ns();var i=St;St|=1;var a=Qn.transition,c=bt;try{if(Qn.transition=null,bt=1,n)return n()}finally{bt=c,Qn.transition=a,St=i,(St&6)===0&&lr()}}function Hu(){Hn=Ds.current,Ft(Ds)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,B_(a)),Xt!==null)for(a=Xt.return;a!==null;){var c=a;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ia();break;case 3:bs(),Ft(bn),Ft(pn),cu();break;case 5:au(c);break;case 4:bs();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:nu(c.type._context);break;case 22:case 23:Hu()}a=a.return}if(sn=n,Xt=n=gr(n.current,null),un=Hn=i,Jt=0,Bo=null,Nu=nl=kr=0,Dn=Ho=null,Or!==null){for(i=0;i<Or.length;i++)if(a=Or[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,v=a.pending;if(v!==null){var C=v.next;v.next=p,c.next=C}a.pending=c}Or=null}return n}function dm(n,i){do{var a=Xt;try{if(tu(),Xa.current=$a,ja){for(var c=Bt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}ja=!1}if(zr=0,rn=Zt=Bt=null,No=!1,Uo=0,Iu.current=null,a===null||a.return===null){Jt=1,Bo=i,Xt=null;break}e:{var v=n,C=a.return,z=a,B=i;if(i=un,z.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,we=z,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=we.alternate;Se?(we.updateQueue=Se.updateQueue,we.memoizedState=Se.memoizedState,we.lanes=Se.lanes):(we.updateQueue=null,we.memoizedState=null)}var He=zp(C);if(He!==null){He.flags&=-257,kp(He,C,z,v,i),He.mode&1&&Fp(v,ne,i),i=He,B=ne;var je=i.updateQueue;if(je===null){var $e=new Set;$e.add(B),i.updateQueue=$e}else je.add(B);break e}else{if((i&1)===0){Fp(v,ne,i),Vu();break e}B=Error(t(426))}}else if(zt&&z.mode&1){var Wt=zp(C);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),kp(Wt,C,z,v,i),Qc(Ps(B,z));break e}}v=B=Ps(B,z),Jt!==4&&(Jt=2),Ho===null?Ho=[v]:Ho.push(v),v=C;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var Z=Up(v,B,i);lp(v,Z);break e;case 1:z=B;var G=v.type,J=v.stateNode;if((v.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(fr===null||!fr.has(J)))){v.flags|=65536,i&=-i,v.lanes|=i;var Re=Op(v,z,i);lp(v,Re);break e}}v=v.return}while(v!==null)}gm(a)}catch(Je){i=Je,Xt===a&&a!==null&&(Xt=a=a.return);continue}break}while(!0)}function pm(){var n=tl.current;return tl.current=$a,n===null?$a:n}function Vu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),sn===null||(kr&268435455)===0&&(nl&268435455)===0||mr(sn,un)}function ll(n,i){var a=St;St|=2;var c=pm();(sn!==n||un!==i)&&(Hi=null,Hr(n,i));do try{hv();break}catch(p){dm(n,p)}while(!0);if(tu(),St=a,tl.current=c,Xt!==null)throw Error(t(261));return sn=null,un=0,Jt}function hv(){for(;Xt!==null;)mm(Xt)}function fv(){for(;Xt!==null&&!$();)mm(Xt)}function mm(n){var i=xm(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?gm(n):Xt=i,Iu.current=null}function gm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=rv(a,i,Hn),a!==null){Xt=a;return}}else{if(a=sv(a,i),a!==null){a.flags&=32767,Xt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=n}while(i!==null);Jt===0&&(Jt=5)}function Vr(n,i,a){var c=bt,p=Qn.transition;try{Qn.transition=null,bt=1,dv(n,i,a,c)}finally{Qn.transition=p,bt=c}return null}function dv(n,i,a,c){do Ns();while(dr!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(ga(n,v),n===sn&&(Xt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,ym(ht,function(){return Ns(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Qn.transition,Qn.transition=null;var C=bt;bt=1;var z=St;St|=4,Iu.current=null,av(n,a),om(a,n),I_(Vc),xa=!!Hc,Vc=Hc=null,n.current=a,lv(a),be(),St=z,bt=C,Qn.transition=v}else n.current=a;if(rl&&(rl=!1,dr=n,sl=p),v=n.pendingLanes,v===0&&(fr=null),fn(a.stateNode),In(n,Ce()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(il)throw il=!1,n=Ou,Ou=null,n;return(sl&1)!==0&&n.tag!==0&&Ns(),v=n.pendingLanes,(v&1)!==0?n===Fu?Vo++:(Vo=0,Fu=n):Vo=0,lr(),null}function Ns(){if(dr!==null){var n=rd(sl),i=Qn.transition,a=bt;try{if(Qn.transition=null,bt=16>n?16:n,dr===null)var c=!1;else{if(n=dr,dr=null,sl=0,(St&6)!==0)throw Error(t(331));var p=St;for(St|=4,Xe=n.current;Xe!==null;){var v=Xe,C=v.child;if((Xe.flags&16)!==0){var z=v.deletions;if(z!==null){for(var B=0;B<z.length;B++){var ne=z[B];for(Xe=ne;Xe!==null;){var we=Xe;switch(we.tag){case 0:case 11:case 15:ko(8,we,v)}var Te=we.child;if(Te!==null)Te.return=we,Xe=Te;else for(;Xe!==null;){we=Xe;var Se=we.sibling,He=we.return;if(tm(we),we===ne){Xe=null;break}if(Se!==null){Se.return=He,Xe=Se;break}Xe=He}}}var je=v.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var Wt=$e.sibling;$e.sibling=null,$e=Wt}while($e!==null)}}Xe=v}}if((v.subtreeFlags&2064)!==0&&C!==null)C.return=v,Xe=C;else e:for(;Xe!==null;){if(v=Xe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ko(9,v,v.return)}var Z=v.sibling;if(Z!==null){Z.return=v.return,Xe=Z;break e}Xe=v.return}}var G=n.current;for(Xe=G;Xe!==null;){C=Xe;var J=C.child;if((C.subtreeFlags&2064)!==0&&J!==null)J.return=C,Xe=J;else e:for(C=G;Xe!==null;){if(z=Xe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:el(9,z)}}catch(Je){Vt(z,z.return,Je)}if(z===C){Xe=null;break e}var Re=z.sibling;if(Re!==null){Re.return=z.return,Xe=Re;break e}Xe=z.return}}if(St=p,lr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Rt,n)}catch{}c=!0}return c}finally{bt=a,Qn.transition=i}}return!1}function _m(n,i,a){i=Ps(a,i),i=Up(n,i,1),n=ur(n,i,1),i=wn(),n!==null&&(Rn(n,1,i),In(n,i))}function Vt(n,i,a){if(n.tag===3)_m(n,n,a);else for(;i!==null;){if(i.tag===3){_m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){n=Ps(a,n),n=Op(i,n,1),i=ur(i,n,1),n=wn(),i!==null&&(Rn(i,1,n),In(i,n));break}}i=i.return}}function pv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(un&a)===a&&(Jt===4||Jt===3&&(un&130023424)===un&&500>Ce()-Uu?Hr(n,0):Nu|=a),In(n,i)}function vm(n,i){i===0&&((n.mode&1)===0?i=1:(i=si,si<<=1,(si&130023424)===0&&(si=4194304)));var a=wn();n=zi(n,i),n!==null&&(Rn(n,i,a),In(n,a))}function mv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),vm(n,a)}function gv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),vm(n,a)}var xm;xm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Ln=!1,iv(n,i,a);Ln=(n.flags&131072)!==0}else Ln=!1,zt&&(i.flags&1048576)!==0&&Jd(i,Fa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ja(n,i),n=i.pendingProps;var p=Ss(i,pn.current);Rs(i,a),p=fu(null,i,c,n,p,a);var v=du();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(v=!0,Na(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,su(i),p.updater=Ka,i.stateNode=p,p._reactInternals=i,xu(i,c,n,a),i=Eu(null,i,c,!0,v,a)):(i.tag=0,zt&&v&&$c(i),En(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ja(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=vv(c),n=li(c,n),p){case 0:i=Su(null,i,c,n,a);break e;case 1:i=Xp(null,i,c,n,a);break e;case 11:i=Bp(null,i,c,n,a);break e;case 14:i=Hp(null,i,c,li(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:li(c,p),Su(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:li(c,p),Xp(n,i,c,p,a);case 3:e:{if(jp(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,p=v.element,ap(n,i),Ga(i,c,null,a);var C=i.memoizedState;if(c=C.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=Ps(Error(t(423)),i),i=Yp(n,i,c,a,p);break e}else if(c!==p){p=Ps(Error(t(424)),i),i=Yp(n,i,c,a,p);break e}else for(Bn=sr(i.stateNode.containerInfo.firstChild),kn=i,zt=!0,ai=null,a=sp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ts(),c===p){i=Bi(n,i,a);break e}En(n,i,c,a)}i=i.child}return i;case 5:return up(i),n===null&&Jc(i),c=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,C=p.children,Gc(c,p)?C=null:v!==null&&Gc(c,v)&&(i.flags|=32),Wp(n,i),En(n,i,C,a),i.child;case 6:return n===null&&Jc(i),null;case 13:return qp(n,i,a);case 4:return ou(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,a):En(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:li(c,p),Bp(n,i,c,p,a);case 7:return En(n,i,i.pendingProps,a),i.child;case 8:return En(n,i,i.pendingProps.children,a),i.child;case 12:return En(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,v=i.memoizedProps,C=p.value,Nt(Ba,c._currentValue),c._currentValue=C,v!==null)if(oi(v.value,C)){if(v.children===p.children&&!bn.current){i=Bi(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var z=v.dependencies;if(z!==null){C=v.child;for(var B=z.firstContext;B!==null;){if(B.context===c){if(v.tag===1){B=ki(-1,a&-a),B.tag=2;var ne=v.updateQueue;if(ne!==null){ne=ne.shared;var we=ne.pending;we===null?B.next=B:(B.next=we.next,we.next=B),ne.pending=B}}v.lanes|=a,B=v.alternate,B!==null&&(B.lanes|=a),iu(v.return,a,i),z.lanes|=a;break}B=B.next}}else if(v.tag===10)C=v.type===i.type?null:v.child;else if(v.tag===18){if(C=v.return,C===null)throw Error(t(341));C.lanes|=a,z=C.alternate,z!==null&&(z.lanes|=a),iu(C,a,i),C=v.sibling}else C=v.child;if(C!==null)C.return=v;else for(C=v;C!==null;){if(C===i){C=null;break}if(v=C.sibling,v!==null){v.return=C.return,C=v;break}C=C.return}v=C}En(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,Rs(i,a),p=Zn(p),c=c(p),i.flags|=1,En(n,i,c,a),i.child;case 14:return c=i.type,p=li(c,i.pendingProps),p=li(c.type,p),Hp(n,i,c,p,a);case 15:return Vp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:li(c,p),Ja(n,i),i.tag=1,Pn(c)?(n=!0,Na(i)):n=!1,Rs(i,a),Ip(i,c,p),xu(i,c,p,a),Eu(null,i,c,!0,n,a);case 19:return Kp(n,i,a);case 22:return Gp(n,i,a)}throw Error(t(156,i.tag))};function ym(n,i){return ie(n,i)}function _v(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,c){return new _v(n,i,a,c)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vv(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===ue)return 14}return 2}function gr(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,p,v){var C=2;if(c=n,typeof n=="function")Gu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case D:return Gr(a.children,p,v,i);case O:C=8,p|=8;break;case P:return n=ei(12,a,i,p|2),n.elementType=P,n.lanes=v,n;case W:return n=ei(13,a,i,p),n.elementType=W,n.lanes=v,n;case te:return n=ei(19,a,i,p),n.elementType=te,n.lanes=v,n;case fe:return ul(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:C=10;break e;case I:C=9;break e;case j:C=11;break e;case ue:C=14;break e;case oe:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(C,a,i,p),i.elementType=n,i.type=c,i.lanes=v,i}function Gr(n,i,a,c){return n=ei(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=ei(22,n,c,i),n.elementType=fe,n.lanes=a,n.stateNode={isHidden:!1},n}function Wu(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function Xu(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function xv(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ju(n,i,a,c,p,v,C,z,B){return n=new xv(n,i,a,z,B),i===1?(i=1,v===!0&&(i|=8)):i=0,v=ei(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(v),n}function yv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mm(n){if(!n)return ar;n=n._reactInternals;e:{if(vi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return $d(n,a,i)}return i}function Sm(n,i,a,c,p,v,C,z,B){return n=ju(a,c,!0,n,p,v,C,z,B),n.context=Mm(null),a=n.current,c=wn(),p=pr(a),v=ki(c,p),v.callback=i??null,ur(a,v,p),n.current.lanes=p,Rn(n,p,c),In(n,c),n}function hl(n,i,a,c){var p=i.current,v=wn(),C=pr(p);return a=Mm(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(v,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ur(p,i,C),n!==null&&(hi(n,p,C,v),Va(n,p,C)),C}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yu(n,i){Em(n,i),(n=n.alternate)&&Em(n,i)}function Mv(){return null}var wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qu(n){this._internalRoot=n}dl.prototype.render=qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},dl.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){hl(null,n,null,null)}),i[Ni]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ad();n={blockedOn:null,target:n,priority:i};for(var a=0;a<nr.length&&i!==0&&i<nr[a].priority;a++);nr.splice(a,0,n),a===0&&ud(n)}};function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function Sv(n,i,a,c,p){if(p){if(typeof c=="function"){var v=c;c=function(){var ne=fl(C);v.call(ne)}}var C=Sm(i,c,n,0,null,!1,!1,"",Tm);return n._reactRootContainer=C,n[Ni]=C.current,Ao(n.nodeType===8?n.parentNode:n),Br(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var z=c;c=function(){var ne=fl(B);z.call(ne)}}var B=ju(n,0,!1,null,null,!1,!1,"",Tm);return n._reactRootContainer=B,n[Ni]=B.current,Ao(n.nodeType===8?n.parentNode:n),Br(function(){hl(i,B,a,c)}),B}function ml(n,i,a,c,p){var v=a._reactRootContainer;if(v){var C=v;if(typeof p=="function"){var z=p;p=function(){var B=fl(C);z.call(B)}}hl(i,C,n,p)}else C=Sv(a,i,n,p,c);return fl(C)}sd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Kt(i.pendingLanes);a!==0&&(xc(i,a|1),In(i,Ce()),(St&6)===0&&(Is=Ce()+500,lr()))}break;case 13:Br(function(){var c=zi(n,1);if(c!==null){var p=wn();hi(c,n,1,p)}}),Yu(n,1)}},yc=function(n){if(n.tag===13){var i=zi(n,134217728);if(i!==null){var a=wn();hi(i,n,134217728,a)}Yu(n,134217728)}},od=function(n){if(n.tag===13){var i=pr(n),a=zi(n,i);if(a!==null){var c=wn();hi(a,n,i,c)}Yu(n,i)}},ad=function(){return bt},ld=function(n,i){var a=bt;try{return bt=n,i()}finally{bt=a}},Pe=function(n,i,a){switch(i){case"input":if(Me(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=Da(c);if(!p)throw Error(t(90));mt(c),Me(c,p)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&U(n,!!a.multiple,i,!1)}},Ut=Bu,$t=Br;var Ev={usingClientEntryPoint:!1,Events:[bo,ys,Da,Ne,lt,Bu]},Go={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=L(n),n===null?null:n.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Rt=gl.inject(wv),xt=gl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(i))throw Error(t(200));return yv(n,i,null,a)},Nn.createRoot=function(n,i){if(!$u(n))throw Error(t(299));var a=!1,c="",p=wm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=ju(n,1,!1,null,null,a,!1,c,p),n[Ni]=i.current,Ao(n.nodeType===8?n.parentNode:n),new qu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=L(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Br(n)},Nn.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!$u(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,v="",C=wm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Sm(i,null,n,1,a??null,p,!1,v,C),n[Ni]=i.current,Ao(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new dl(i)},Nn.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},Nn.unstable_batchedUpdates=Bu,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Im;function Nv(){if(Im)return Qu.exports;Im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Qu.exports=Iv(),Qu.exports}var Nm;function Uv(){if(Nm)return _l;Nm=1;var s=Nv();return _l.createRoot=s.createRoot,_l.hydrateRoot=s.hydrateRoot,_l}var Ov=Uv();const Fv=o0(Ov);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bf="170",Qs={ROTATE:0,DOLLY:1,PAN:2},Ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zv=0,Um=1,kv=2,a0=1,l0=2,Yi=3,Rr=0,Fn=1,mi=2,Ar=0,eo=1,Om=2,Fm=3,zm=4,Bv=5,Jr=100,Hv=101,Vv=102,Gv=103,Wv=104,Xv=200,jv=201,Yv=202,qv=203,Xh=204,jh=205,$v=206,Kv=207,Zv=208,Jv=209,Qv=210,ex=211,tx=212,nx=213,ix=214,Yh=0,qh=1,$h=2,io=3,Kh=4,Zh=5,Jh=6,Qh=7,c0=0,rx=1,sx=2,Cr=0,ox=1,ax=2,lx=3,cx=4,ux=5,hx=6,fx=7,u0=300,ro=301,so=302,ef=303,tf=304,pc=306,nf=1e3,es=1001,rf=1002,Xn=1003,dx=1004,vl=1005,Ci=1006,nh=1007,ts=1008,Ki=1009,h0=1010,f0=1011,aa=1012,Hf=1013,rs=1014,Ri=1015,ca=1016,Vf=1017,Gf=1018,oo=1020,d0=35902,p0=1021,m0=1022,_i=1023,g0=1024,_0=1025,to=1026,ao=1027,Wf=1028,Xf=1029,v0=1030,jf=1031,Yf=1033,Zl=33776,Jl=33777,Ql=33778,ec=33779,sf=35840,of=35841,af=35842,lf=35843,cf=36196,uf=37492,hf=37496,ff=37808,df=37809,pf=37810,mf=37811,gf=37812,_f=37813,vf=37814,xf=37815,yf=37816,Mf=37817,Sf=37818,Ef=37819,wf=37820,Tf=37821,tc=36492,Af=36494,Cf=36495,x0=36283,Rf=36284,bf=36285,Pf=36286,px=3200,mx=3201,y0=0,gx=1,Tr="",ni="srgb",co="srgb-linear",mc="linear",Lt="srgb",Us=7680,km=519,_x=512,vx=513,xx=514,M0=515,yx=516,Mx=517,Sx=518,Ex=519,Bm=35044,Hm="300 es",qi=2e3,sc=2001;class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nc=Math.PI/180,Lf=180/Math.PI;function ua(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function ln(s,e,t){return Math.max(e,Math.min(t,s))}function wx(s,e){return(s%e+e)%e}function ih(s,e,t){return(1-t)*s+t*e}function Xo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tx={DEG2RAD:nc};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,o,l,u,h,f,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,f,m)}set(e,t,r,o,l,u,h,f,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=t,_[4]=l,_[5]=f,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],f=r[6],m=r[1],_=r[4],g=r[7],y=r[2],M=r[5],d=r[8],w=o[0],S=o[3],x=o[6],T=o[1],A=o[4],E=o[7],F=o[2],N=o[5],D=o[8];return l[0]=u*w+h*T+f*F,l[3]=u*S+h*A+f*N,l[6]=u*x+h*E+f*D,l[1]=m*w+_*T+g*F,l[4]=m*S+_*A+g*N,l[7]=m*x+_*E+g*D,l[2]=y*w+M*T+d*F,l[5]=y*S+M*A+d*N,l[8]=y*x+M*E+d*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],m=e[7],_=e[8];return t*u*_-t*h*m-r*l*_+r*h*f+o*l*m-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],m=e[7],_=e[8],g=_*u-h*m,y=h*f-_*l,M=m*l-u*f,d=t*g+r*y+o*M;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/d;return e[0]=g*w,e[1]=(o*m-_*r)*w,e[2]=(h*r-o*u)*w,e[3]=y*w,e[4]=(_*t-o*f)*w,e[5]=(o*l-h*t)*w,e[6]=M*w,e[7]=(r*f-m*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const f=Math.cos(l),m=Math.sin(l);return this.set(r*f,r*m,-r*(f*u+m*h)+u+e,-o*m,o*f,-o*(-m*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(rh.makeScale(e,t)),this}rotate(e){return this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new dt;function S0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ax(){const s=oc("canvas");return s.style.display="block",s}const Vm={};function ea(s){s in Vm||(Vm[s]=!0,console.warn(s))}function Cx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Rx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(s.r=no(s.r),s.g=no(s.g),s.b=no(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tr?mc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function no(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Gm=[.64,.33,.3,.6,.15,.06],Wm=[.2126,.7152,.0722],Xm=[.3127,.329],jm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[co]:{primaries:Gm,whitePoint:Xm,transfer:mc,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:Wm,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:Gm,whitePoint:Xm,transfer:Lt,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:Wm,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let Os;class Px{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=oc("canvas")),Os.width=e.width,Os.height=e.height;const r=Os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=$i(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor($i(t[r]/255)*255):t[r]=$i(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lx=0;class E0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(sh(o[u].image)):l.push(sh(o[u]))}else l=sh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Px.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class An extends as{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=es,o=es,l=Ci,u=ts,h=_i,f=Ki,m=An.DEFAULT_ANISOTROPY,_=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=ua(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=u0;An.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,r=0,o=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,m=f[0],_=f[4],g=f[8],y=f[1],M=f[5],d=f[9],w=f[2],S=f[6],x=f[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(d-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(d+S)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(m+1)/2,E=(M+1)/2,F=(x+1)/2,N=(_+y)/4,D=(g+w)/4,O=(d+S)/4;return A>E&&A>F?A<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(A),o=N/r,l=D/r):E>F?E<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(E),r=N/o,l=O/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=D/l,o=O/l),this.set(r,o,l,t),this}let T=Math.sqrt((S-d)*(S-d)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(T)<.001&&(T=1),this.x=(S-d)/T,this.y=(g-w)/T,this.z=(y-_)/T,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ix extends as{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new An(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Ix{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class w0 extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nx extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];const y=l[u+0],M=l[u+1],d=l[u+2],w=l[u+3];if(h===0){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h===1){e[t+0]=y,e[t+1]=M,e[t+2]=d,e[t+3]=w;return}if(g!==w||f!==y||m!==M||_!==d){let S=1-h;const x=f*y+m*M+_*d+g*w,T=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const F=Math.sqrt(A),N=Math.atan2(F,x*T);S=Math.sin(S*N)/F,h=Math.sin(h*N)/F}const E=h*T;if(f=f*S+y*E,m=m*S+M*E,_=_*S+d*E,g=g*S+w*E,S===1-h){const F=1/Math.sqrt(f*f+m*m+_*_+g*g);f*=F,m*=F,_*=F,g*=F}}e[t]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],f=r[o+1],m=r[o+2],_=r[o+3],g=l[u],y=l[u+1],M=l[u+2],d=l[u+3];return e[t]=h*d+_*g+f*M-m*y,e[t+1]=f*d+_*y+m*g-h*M,e[t+2]=m*d+_*M+h*y-f*g,e[t+3]=_*d-h*g-f*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,f=Math.sin,m=h(r/2),_=h(o/2),g=h(l/2),y=f(r/2),M=f(o/2),d=f(l/2);switch(u){case"XYZ":this._x=y*_*g+m*M*d,this._y=m*M*g-y*_*d,this._z=m*_*d+y*M*g,this._w=m*_*g-y*M*d;break;case"YXZ":this._x=y*_*g+m*M*d,this._y=m*M*g-y*_*d,this._z=m*_*d-y*M*g,this._w=m*_*g+y*M*d;break;case"ZXY":this._x=y*_*g-m*M*d,this._y=m*M*g+y*_*d,this._z=m*_*d+y*M*g,this._w=m*_*g-y*M*d;break;case"ZYX":this._x=y*_*g-m*M*d,this._y=m*M*g+y*_*d,this._z=m*_*d-y*M*g,this._w=m*_*g+y*M*d;break;case"YZX":this._x=y*_*g+m*M*d,this._y=m*M*g+y*_*d,this._z=m*_*d-y*M*g,this._w=m*_*g-y*M*d;break;case"XZY":this._x=y*_*g-m*M*d,this._y=m*M*g-y*_*d,this._z=m*_*d+y*M*g,this._w=m*_*g+y*M*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],f=t[9],m=t[2],_=t[6],g=t[10],y=r+h+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-f)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-f)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(f+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(f+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,f=t._y,m=t._z,_=t._w;return this._x=r*_+u*h+o*m-l*f,this._y=o*_+u*f+l*h-r*m,this._z=l*_+u*m+r*f-o*h,this._w=u*_-r*h-o*f-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let h=u*e._w+r*e._x+o*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-h*h;if(f<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(f),_=Math.atan2(m,h),g=Math.sin((1-t)*_)/m,y=Math.sin(t*_)/m;return this._w=u*g+this._w*y,this._x=r*g+this._x*y,this._y=o*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,f=e.w,m=2*(u*o-h*r),_=2*(h*t-l*o),g=2*(l*r-u*t);return this.x=t+f*m+u*g-h*_,this.y=r+f*_+h*m-l*g,this.z=o+f*g+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,f=t.z;return this.x=o*f-l*h,this.y=l*u-r*f,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new V,qm=new os;class ls{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(l,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xl.copy(r.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),yl.subVectors(this.max,jo),Fs.subVectors(e.a,jo),zs.subVectors(e.b,jo),ks.subVectors(e.c,jo),vr.subVectors(zs,Fs),xr.subVectors(ks,zs),Wr.subVectors(Fs,ks);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Wr.z,Wr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Wr.z,0,-Wr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Wr.y,Wr.x,0];return!ah(t,Fs,zs,ks,yl)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,Fs,zs,ks,yl))?!1:(Ml.crossVectors(vr,xr),t=[Ml.x,Ml.y,Ml.z],ah(t,Fs,zs,ks,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new V,new V,new V,new V,new V,new V,new V,new V],fi=new V,xl=new ls,Fs=new V,zs=new V,ks=new V,vr=new V,xr=new V,Wr=new V,jo=new V,yl=new V,Ml=new V,Xr=new V;function ah(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Xr.fromArray(s,l);const h=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),f=e.dot(Xr),m=t.dot(Xr),_=r.dot(Xr);if(Math.max(-Math.max(f,m,_),Math.min(f,m,_))>h)return!1}return!0}const Ux=new ls,Yo=new V,lh=new V;class cs{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ux.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Yo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(lh)),this.expandByPoint(Yo.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new V,ch=new V,Sl=new V,yr=new V,uh=new V,El=new V,hh=new V;class ha{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ch.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(ch);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Sl),h=yr.dot(this.direction),f=-yr.dot(Sl),m=yr.lengthSq(),_=Math.abs(1-u*u);let g,y,M,d;if(_>0)if(g=u*f-h,y=u*h-f,d=l*_,g>=0)if(y>=-d)if(y<=d){const w=1/_;g*=w,y*=w,M=g*(g+u*y+2*h)+y*(u*g+y+2*f)+m}else y=l,g=Math.max(0,-(u*y+h)),M=-g*g+y*(y+2*f)+m;else y=-l,g=Math.max(0,-(u*y+h)),M=-g*g+y*(y+2*f)+m;else y<=-d?(g=Math.max(0,-(-u*l+h)),y=g>0?-l:Math.min(Math.max(-l,-f),l),M=-g*g+y*(y+2*f)+m):y<=d?(g=0,y=Math.min(Math.max(-l,-f),l),M=y*(y+2*f)+m):(g=Math.max(0,-(u*l+h)),y=g>0?l:Math.min(Math.max(-l,-f),l),M=-g*g+y*(y+2*f)+m);else y=u>0?-l:l,g=Math.max(0,-(u*y+h)),M=-g*g+y*(y+2*f)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(ch).addScaledVector(Sl,y),M}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const r=Gi.dot(this.direction),o=Gi.dot(Gi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,f=r+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,f;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),_>=0?(l=(e.min.y-y.y)*_,u=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,u=(e.min.y-y.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(h=(e.min.z-y.z)*g,f=(e.max.z-y.z)*g):(h=(e.max.z-y.z)*g,f=(e.min.z-y.z)*g),r>f||h>o)||((h>r||r!==r)&&(r=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,r,o,l){uh.subVectors(t,e),El.subVectors(r,e),hh.crossVectors(uh,El);let u=this.direction.dot(hh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;yr.subVectors(this.origin,e);const f=h*this.direction.dot(El.crossVectors(yr,El));if(f<0)return null;const m=h*this.direction.dot(uh.cross(yr));if(m<0||f+m>u)return null;const _=-h*yr.dot(hh);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,r,o,l,u,h,f,m,_,g,y,M,d,w,S){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,f,m,_,g,y,M,d,w,S)}set(e,t,r,o,l,u,h,f,m,_,g,y,M,d,w,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=h,x[13]=f,x[2]=m,x[6]=_,x[10]=g,x[14]=y,x[3]=M,x[7]=d,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Bs.setFromMatrixColumn(e,0).length(),l=1/Bs.setFromMatrixColumn(e,1).length(),u=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),f=Math.cos(o),m=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=u*_,M=u*g,d=h*_,w=h*g;t[0]=f*_,t[4]=-f*g,t[8]=m,t[1]=M+d*m,t[5]=y-w*m,t[9]=-h*f,t[2]=w-y*m,t[6]=d+M*m,t[10]=u*f}else if(e.order==="YXZ"){const y=f*_,M=f*g,d=m*_,w=m*g;t[0]=y+w*h,t[4]=d*h-M,t[8]=u*m,t[1]=u*g,t[5]=u*_,t[9]=-h,t[2]=M*h-d,t[6]=w+y*h,t[10]=u*f}else if(e.order==="ZXY"){const y=f*_,M=f*g,d=m*_,w=m*g;t[0]=y-w*h,t[4]=-u*g,t[8]=d+M*h,t[1]=M+d*h,t[5]=u*_,t[9]=w-y*h,t[2]=-u*m,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const y=u*_,M=u*g,d=h*_,w=h*g;t[0]=f*_,t[4]=d*m-M,t[8]=y*m+w,t[1]=f*g,t[5]=w*m+y,t[9]=M*m-d,t[2]=-m,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const y=u*f,M=u*m,d=h*f,w=h*m;t[0]=f*_,t[4]=w-y*g,t[8]=d*g+M,t[1]=g,t[5]=u*_,t[9]=-h*_,t[2]=-m*_,t[6]=M*g+d,t[10]=y-w*g}else if(e.order==="XZY"){const y=u*f,M=u*m,d=h*f,w=h*m;t[0]=f*_,t[4]=-g,t[8]=m*_,t[1]=y*g+w,t[5]=u*_,t[9]=M*g-d,t[2]=d*g-M,t[6]=h*_,t[10]=w*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,Fx)}lookAt(e,t,r){const o=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Mr.crossVectors(r,Vn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Mr.crossVectors(r,Vn)),Mr.normalize(),wl.crossVectors(Vn,Mr),o[0]=Mr.x,o[4]=wl.x,o[8]=Vn.x,o[1]=Mr.y,o[5]=wl.y,o[9]=Vn.y,o[2]=Mr.z,o[6]=wl.z,o[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],f=r[8],m=r[12],_=r[1],g=r[5],y=r[9],M=r[13],d=r[2],w=r[6],S=r[10],x=r[14],T=r[3],A=r[7],E=r[11],F=r[15],N=o[0],D=o[4],O=o[8],P=o[12],R=o[1],I=o[5],j=o[9],W=o[13],te=o[2],ue=o[6],oe=o[10],fe=o[14],H=o[3],he=o[7],ce=o[11],k=o[15];return l[0]=u*N+h*R+f*te+m*H,l[4]=u*D+h*I+f*ue+m*he,l[8]=u*O+h*j+f*oe+m*ce,l[12]=u*P+h*W+f*fe+m*k,l[1]=_*N+g*R+y*te+M*H,l[5]=_*D+g*I+y*ue+M*he,l[9]=_*O+g*j+y*oe+M*ce,l[13]=_*P+g*W+y*fe+M*k,l[2]=d*N+w*R+S*te+x*H,l[6]=d*D+w*I+S*ue+x*he,l[10]=d*O+w*j+S*oe+x*ce,l[14]=d*P+w*W+S*fe+x*k,l[3]=T*N+A*R+E*te+F*H,l[7]=T*D+A*I+E*ue+F*he,l[11]=T*O+A*j+E*oe+F*ce,l[15]=T*P+A*W+E*fe+F*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],f=e[9],m=e[13],_=e[2],g=e[6],y=e[10],M=e[14],d=e[3],w=e[7],S=e[11],x=e[15];return d*(+l*f*g-o*m*g-l*h*y+r*m*y+o*h*M-r*f*M)+w*(+t*f*M-t*m*y+l*u*y-o*u*M+o*m*_-l*f*_)+S*(+t*m*g-t*h*M-l*u*g+r*u*M+l*h*_-r*m*_)+x*(-o*h*_-t*f*g+t*h*y+o*u*g-r*u*y+r*f*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],m=e[7],_=e[8],g=e[9],y=e[10],M=e[11],d=e[12],w=e[13],S=e[14],x=e[15],T=g*S*m-w*y*m+w*f*M-h*S*M-g*f*x+h*y*x,A=d*y*m-_*S*m-d*f*M+u*S*M+_*f*x-u*y*x,E=_*w*m-d*g*m+d*h*M-u*w*M-_*h*x+u*g*x,F=d*g*f-_*w*f-d*h*y+u*w*y+_*h*S-u*g*S,N=t*T+r*A+o*E+l*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=T*D,e[1]=(w*y*l-g*S*l-w*o*M+r*S*M+g*o*x-r*y*x)*D,e[2]=(h*S*l-w*f*l+w*o*m-r*S*m-h*o*x+r*f*x)*D,e[3]=(g*f*l-h*y*l-g*o*m+r*y*m+h*o*M-r*f*M)*D,e[4]=A*D,e[5]=(_*S*l-d*y*l+d*o*M-t*S*M-_*o*x+t*y*x)*D,e[6]=(d*f*l-u*S*l-d*o*m+t*S*m+u*o*x-t*f*x)*D,e[7]=(u*y*l-_*f*l+_*o*m-t*y*m-u*o*M+t*f*M)*D,e[8]=E*D,e[9]=(d*g*l-_*w*l-d*r*M+t*w*M+_*r*x-t*g*x)*D,e[10]=(u*w*l-d*h*l+d*r*m-t*w*m-u*r*x+t*h*x)*D,e[11]=(_*h*l-u*g*l-_*r*m+t*g*m+u*r*M-t*h*M)*D,e[12]=F*D,e[13]=(_*w*o-d*g*o+d*r*y-t*w*y-_*r*S+t*g*S)*D,e[14]=(d*h*o-u*w*o-d*r*f+t*w*f+u*r*S-t*h*S)*D,e[15]=(u*g*o-_*h*o+_*r*f-t*g*f-u*r*y+t*h*y)*D,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,f=e.z,m=l*u,_=l*h;return this.set(m*u+r,m*h-o*f,m*f+o*h,0,m*h+o*f,_*h+r,_*f-o*u,0,m*f-o*h,_*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,f=t._w,m=l+l,_=u+u,g=h+h,y=l*m,M=l*_,d=l*g,w=u*_,S=u*g,x=h*g,T=f*m,A=f*_,E=f*g,F=r.x,N=r.y,D=r.z;return o[0]=(1-(w+x))*F,o[1]=(M+E)*F,o[2]=(d-A)*F,o[3]=0,o[4]=(M-E)*N,o[5]=(1-(y+x))*N,o[6]=(S+T)*N,o[7]=0,o[8]=(d+A)*D,o[9]=(S-T)*D,o[10]=(1-(y+w))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Bs.set(o[0],o[1],o[2]).length();const u=Bs.set(o[4],o[5],o[6]).length(),h=Bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],di.copy(this);const m=1/l,_=1/u,g=1/h;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=_,di.elements[5]*=_,di.elements[6]*=_,di.elements[8]*=g,di.elements[9]*=g,di.elements[10]*=g,t.setFromRotationMatrix(di),r.x=l,r.y=u,r.z=h,this}makePerspective(e,t,r,o,l,u,h=qi){const f=this.elements,m=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let M,d;if(h===qi)M=-(u+l)/(u-l),d=-2*u*l/(u-l);else if(h===sc)M=-u/(u-l),d=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=m,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=_,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=d,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=qi){const f=this.elements,m=1/(t-e),_=1/(r-o),g=1/(u-l),y=(t+e)*m,M=(r+o)*_;let d,w;if(h===qi)d=(u+l)*g,w=-2*g;else if(h===sc)d=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*m,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*_,f[9]=0,f[13]=-M,f[2]=0,f[6]=0,f[10]=w,f[14]=-d,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Bs=new V,di=new Pt,Ox=new V(0,0,0),Fx=new V(1,1,1),Mr=new V,wl=new V,Vn=new V,$m=new Pt,Km=new os;class bi{constructor(e=0,t=0,r=0,o=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],f=o[1],m=o[5],_=o[9],g=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ln(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-ln(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zx=0;const Zm=new V,Hs=new os,Wi=new Pt,Tl=new V,qo=new V,kx=new V,Bx=new os,Jm=new V(1,0,0),Qm=new V(0,1,0),eg=new V(0,0,1),tg={type:"added"},Hx={type:"removed"},Vs={type:"childadded",child:null},fh={type:"childremoved",child:null};class qt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new V,t=new bi,r=new os,o=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Pt},normalMatrix:{value:new dt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(qo,Tl,this.up):Wi.lookAt(Tl,qo,this.up),this.quaternion.setFromRotationMatrix(Wi),o&&(Wi.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hx),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let m=0,_=f.length;m<_;m++){const g=f[m];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,m=this.material.length;f<m;f++)h.push(l(e.materials,this.material[f]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(l(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),m=u(e.textures),_=u(e.images),g=u(e.shapes),y=u(e.skeletons),M=u(e.animations),d=u(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),d.length>0&&(r.nodes=d)}return r.object=o,r;function u(h){const f=[];for(const m in h){const _=h[m];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qt.DEFAULT_UP=new V(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new V,Xi=new V,dh=new V,ji=new V,Gs=new V,Ws=new V,ng=new V,ph=new V,mh=new V,gh=new V,_h=new Gt,vh=new Gt,xh=new Gt;class gi{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){pi.subVectors(o,t),Xi.subVectors(r,t),dh.subVectors(e,t);const u=pi.dot(pi),h=pi.dot(Xi),f=pi.dot(dh),m=Xi.dot(Xi),_=Xi.dot(dh),g=u*m-h*h;if(g===0)return l.set(0,0,0),null;const y=1/g,M=(m*f-h*_)*y,d=(u*_-h*f)*y;return l.set(1-M-d,d,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,r,o,l,u,h,f){return this.getBarycoord(e,t,r,o,ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,ji.x),f.addScaledVector(u,ji.y),f.addScaledVector(h,ji.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(_h,l.x),u.addScaledVector(vh,l.y),u.addScaledVector(xh,l.z),u}static isFrontFacing(e,t,r,o){return pi.subVectors(r,t),Xi.subVectors(e,t),pi.cross(Xi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),pi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;Gs.subVectors(o,r),Ws.subVectors(l,r),ph.subVectors(e,r);const f=Gs.dot(ph),m=Ws.dot(ph);if(f<=0&&m<=0)return t.copy(r);mh.subVectors(e,o);const _=Gs.dot(mh),g=Ws.dot(mh);if(_>=0&&g<=_)return t.copy(o);const y=f*g-_*m;if(y<=0&&f>=0&&_<=0)return u=f/(f-_),t.copy(r).addScaledVector(Gs,u);gh.subVectors(e,l);const M=Gs.dot(gh),d=Ws.dot(gh);if(d>=0&&M<=d)return t.copy(l);const w=M*m-f*d;if(w<=0&&m>=0&&d<=0)return h=m/(m-d),t.copy(r).addScaledVector(Ws,h);const S=_*d-M*g;if(S<=0&&g-_>=0&&M-d>=0)return ng.subVectors(l,o),h=(g-_)/(g-_+(M-d)),t.copy(o).addScaledVector(ng,h);const x=1/(S+w+y);return u=w*x,h=y*x,t.copy(r).addScaledVector(Gs,u).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function yh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _t{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=wx(e,1),t=ln(t,0,1),r=ln(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=yh(u,l,e+1/3),this.g=yh(u,l,e),this.b=yh(u,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=ni){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const r=T0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Et.fromWorkingColorSpace(xn.copy(this),e),Math.round(ln(xn.r*255,0,255))*65536+Math.round(ln(xn.g*255,0,255))*256+Math.round(ln(xn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let f,m;const _=(h+u)/2;if(h===u)f=0,m=0;else{const g=u-h;switch(m=_<=.5?g/(u+h):g/(2-u-h),u){case r:f=(o-l)/g+(o<l?6:0);break;case o:f=(l-r)/g+2;break;case l:f=(r-o)/g+4;break}f/=6}return e.h=f,e.s=m,e.l=_,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ni){Et.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Al);const r=ih(Sr.h,Al.h,t),o=ih(Sr.s,Al.s,t),l=ih(Sr.l,Al.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new _t;_t.NAMES=T0;let Vx=0;class us extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=ua(),this.name="",this.blending=eo,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=jh,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==Jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==km&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ia extends us{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new V,Cl=new Oe;class jn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Bm,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Xo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bm&&(e.usage=this.usage),e}}class A0 extends jn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class C0 extends jn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ht extends jn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Gx=0;const ti=new Pt,Mh=new qt,Xs=new V,Gn=new ls,$o=new ls,an=new V;class yn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?C0:A0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ht(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];$o.setFromBufferAttribute(h),this.morphTargetsRelative?(an.addVectors(Gn.min,$o.min),Gn.expandByPoint(an),an.addVectors(Gn.max,$o.max),Gn.expandByPoint(an)):(Gn.expandByPoint($o.min),Gn.expandByPoint($o.max))}Gn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],f=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)an.fromBufferAttribute(h,m),f&&(Xs.fromBufferAttribute(e,m),an.add(Xs)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],f=[];for(let O=0;O<r.count;O++)h[O]=new V,f[O]=new V;const m=new V,_=new V,g=new V,y=new Oe,M=new Oe,d=new Oe,w=new V,S=new V;function x(O,P,R){m.fromBufferAttribute(r,O),_.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),y.fromBufferAttribute(l,O),M.fromBufferAttribute(l,P),d.fromBufferAttribute(l,R),_.sub(m),g.sub(m),M.sub(y),d.sub(y);const I=1/(M.x*d.y-d.x*M.y);isFinite(I)&&(w.copy(_).multiplyScalar(d.y).addScaledVector(g,-M.y).multiplyScalar(I),S.copy(g).multiplyScalar(M.x).addScaledVector(_,-d.x).multiplyScalar(I),h[O].add(w),h[P].add(w),h[R].add(w),f[O].add(S),f[P].add(S),f[R].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,P=T.length;O<P;++O){const R=T[O],I=R.start,j=R.count;for(let W=I,te=I+j;W<te;W+=3)x(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const A=new V,E=new V,F=new V,N=new V;function D(O){F.fromBufferAttribute(o,O),N.copy(F);const P=h[O];A.copy(P),A.sub(F.multiplyScalar(F.dot(P))).normalize(),E.crossVectors(N,P);const I=E.dot(f[O])<0?-1:1;u.setXYZW(O,A.x,A.y,A.z,I)}for(let O=0,P=T.length;O<P;++O){const R=T[O],I=R.start,j=R.count;for(let W=I,te=I+j;W<te;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new V,l=new V,u=new V,h=new V,f=new V,m=new V,_=new V,g=new V;if(e)for(let y=0,M=e.count;y<M;y+=3){const d=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,d),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),h.fromBufferAttribute(r,d),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.add(_),f.add(_),m.add(_),r.setXYZ(d,h.x,h.y,h.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(h,f){const m=h.array,_=h.itemSize,g=h.normalized,y=new m.constructor(f.length*_);let M=0,d=0;for(let w=0,S=f.length;w<S;w++){h.isInterleavedBufferAttribute?M=f[w]*h.data.stride+h.offset:M=f[w]*_;for(let x=0;x<_;x++)y[d++]=m[M++]}return new jn(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,r=this.index.array,o=this.attributes;for(const h in o){const f=o[h],m=e(f,r);t.setAttribute(h,m)}const l=this.morphAttributes;for(const h in l){const f=[],m=l[h];for(let _=0,g=m.length;_<g;_++){const y=m[_],M=e(y,r);f.push(M)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const m=u[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const m=r[f];e.data.attributes[f]=m.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],_=[];for(let g=0,y=m.length;g<y;g++){const M=m[g];_.push(M.toJSON(e.data))}_.length>0&&(o[f]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],g=l[m];for(let y=0,M=g.length;y<M;y++)_.push(g[y].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new Pt,jr=new ha,Rl=new cs,rg=new V,bl=new V,Pl=new V,Ll=new V,Sh=new V,Dl=new V,sg=new V,Il=new V;class hn extends qt{constructor(e=new yn,t=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Dl.set(0,0,0);for(let f=0,m=l.length;f<m;f++){const _=h[f],g=l[f];_!==0&&(Sh.fromBufferAttribute(g,e),u?Dl.addScaledVector(Sh,_):Dl.addScaledVector(Sh.sub(t),_))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(Rl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Rl,rg)===null||jr.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(l).invert(),jr.copy(e.ray).applyMatrix4(ig),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,f=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,y=l.groups,M=l.drawRange;if(h!==null)if(Array.isArray(u))for(let d=0,w=y.length;d<w;d++){const S=y[d],x=u[S.materialIndex],T=Math.max(S.start,M.start),A=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let E=T,F=A;E<F;E+=3){const N=h.getX(E),D=h.getX(E+1),O=h.getX(E+2);o=Nl(this,x,e,r,m,_,g,N,D,O),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const d=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let S=d,x=w;S<x;S+=3){const T=h.getX(S),A=h.getX(S+1),E=h.getX(S+2);o=Nl(this,u,e,r,m,_,g,T,A,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let d=0,w=y.length;d<w;d++){const S=y[d],x=u[S.materialIndex],T=Math.max(S.start,M.start),A=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let E=T,F=A;E<F;E+=3){const N=E,D=E+1,O=E+2;o=Nl(this,x,e,r,m,_,g,N,D,O),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const d=Math.max(0,M.start),w=Math.min(f.count,M.start+M.count);for(let S=d,x=w;S<x;S+=3){const T=S,A=S+1,E=S+2;o=Nl(this,u,e,r,m,_,g,T,A,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Wx(s,e,t,r,o,l,u,h){let f;if(e.side===Fn?f=r.intersectTriangle(u,l,o,!0,h):f=r.intersectTriangle(o,l,u,e.side===Rr,h),f===null)return null;Il.copy(h),Il.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Il);return m<t.near||m>t.far?null:{distance:m,point:Il.clone(),object:s}}function Nl(s,e,t,r,o,l,u,h,f,m){s.getVertexPosition(h,bl),s.getVertexPosition(f,Pl),s.getVertexPosition(m,Ll);const _=Wx(s,e,t,r,bl,Pl,Ll,sg);if(_){const g=new V;gi.getBarycoord(sg,bl,Pl,Ll,g),o&&(_.uv=gi.getInterpolatedAttribute(o,h,f,m,g,new Oe)),l&&(_.uv1=gi.getInterpolatedAttribute(l,h,f,m,g,new Oe)),u&&(_.normal=gi.getInterpolatedAttribute(u,h,f,m,g,new V),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:f,c:m,normal:new V,materialIndex:0};gi.getNormal(bl,Pl,Ll,y.normal),_.face=y,_.barycoord=g}return _}class uo extends yn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],m=[],_=[],g=[];let y=0,M=0;d("z","y","x",-1,-1,r,t,e,u,l,0),d("z","y","x",1,-1,r,t,-e,u,l,1),d("x","z","y",1,1,e,r,t,o,u,2),d("x","z","y",1,-1,e,r,-t,o,u,3),d("x","y","z",1,-1,e,t,r,o,l,4),d("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(g,2));function d(w,S,x,T,A,E,F,N,D,O,P){const R=E/D,I=F/O,j=E/2,W=F/2,te=N/2,ue=D+1,oe=O+1;let fe=0,H=0;const he=new V;for(let ce=0;ce<oe;ce++){const k=ce*I-W;for(let se=0;se<ue;se++){const ke=se*R-j;he[w]=ke*T,he[S]=k*A,he[x]=te,m.push(he.x,he.y,he.z),he[w]=0,he[S]=0,he[x]=N>0?1:-1,_.push(he.x,he.y,he.z),g.push(se/D),g.push(1-ce/O),fe+=1}}for(let ce=0;ce<O;ce++)for(let k=0;k<D;k++){const se=y+k+ue*ce,ke=y+k+ue*(ce+1),Q=y+(k+1)+ue*(ce+1),pe=y+(k+1)+ue*ce;f.push(se,ke,pe),f.push(ke,Q,pe),H+=6}h.addGroup(M,H,P),M+=H,y+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=lo(s[t]);for(const o in r)e[o]=r[o]}return e}function Xx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function R0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const jx={clone:lo,merge:Tn};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends us{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=Xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class b0 extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new V,og=new Oe,ag=new Oe;class ii extends b0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,og,ag),t.subVectors(ag,og)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/m,o*=u.width/f,r*=u.height/m}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Ys=1;class $x extends qt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(js,Ys,e,t);o.layers=this.layers,this.add(o);const l=new ii(js,Ys,e,t);l.layers=this.layers,this.add(l);const u=new ii(js,Ys,e,t);u.layers=this.layers,this.add(u);const h=new ii(js,Ys,e,t);h.layers=this.layers,this.add(h);const f=new ii(js,Ys,e,t);f.layers=this.layers,this.add(f);const m=new ii(js,Ys,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,f]=t;for(const m of t)this.remove(m);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,f,m,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,h),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,_),e.setRenderTarget(g,y,M),e.xr.enabled=d,r.texture.needsPMREMUpdate=!0}}class P0 extends An{constructor(e,t,r,o,l,u,h,f,m,_){e=e!==void 0?e:[],t=t!==void 0?t:ro,super(e,t,r,o,l,u,h,f,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new P0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new uo(5,5,5),l=new br({name:"CubemapFromEquirect",uniforms:lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ar});l.uniforms.tEquirect.value=t;const u=new hn(o,l),h=t.minFilter;return t.minFilter===ts&&(t.minFilter=Ci),new $x(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Eh=new V,Zx=new V,Jx=new dt;class wr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Eh.subVectors(r,t).cross(Zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Eh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Jx.getNormalMatrix(e),o=this.coplanarPoint(Eh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new cs,Ul=new V;class $f{constructor(e=new wr,t=new wr,r=new wr,o=new wr,l=new wr,u=new wr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi){const r=this.planes,o=e.elements,l=o[0],u=o[1],h=o[2],f=o[3],m=o[4],_=o[5],g=o[6],y=o[7],M=o[8],d=o[9],w=o[10],S=o[11],x=o[12],T=o[13],A=o[14],E=o[15];if(r[0].setComponents(f-l,y-m,S-M,E-x).normalize(),r[1].setComponents(f+l,y+m,S+M,E+x).normalize(),r[2].setComponents(f+u,y+_,S+d,E+T).normalize(),r[3].setComponents(f-u,y-_,S-d,E-T).normalize(),r[4].setComponents(f-h,y-g,S-w,E-A).normalize(),t===qi)r[5].setComponents(f+h,y+g,S+w,E+A).normalize();else if(t===sc)r[5].setComponents(h,g,w,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function L0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Qx(s){const e=new WeakMap;function t(h,f){const m=h.array,_=h.usage,g=m.byteLength,y=s.createBuffer();s.bindBuffer(f,y),s.bufferData(f,m,_),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,f,m){const _=f.array,g=f.updateRanges;if(s.bindBuffer(m,h),g.length===0)s.bufferSubData(m,0,_);else{g.sort((M,d)=>M.start-d.start);let y=0;for(let M=1;M<g.length;M++){const d=g[y],w=g[M];w.start<=d.start+d.count+1?d.count=Math.max(d.count,w.start+w.count-d.start):(++y,g[y]=w)}g.length=y+1;for(let M=0,d=g.length;M<d;M++){const w=g[M];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function u(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,f));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,f),m.version=h.version}}return{get:o,remove:l,update:u}}class is extends yn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),f=Math.floor(o),m=h+1,_=f+1,g=e/h,y=t/f,M=[],d=[],w=[],S=[];for(let x=0;x<_;x++){const T=x*y-u;for(let A=0;A<m;A++){const E=A*g-l;d.push(E,-T,0),w.push(0,0,1),S.push(A/h),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let T=0;T<h;T++){const A=T+m*x,E=T+m*(x+1),F=T+1+m*(x+1),N=T+1+m*x;M.push(A,E,N),M.push(E,F,N)}this.setIndex(M),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ey=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ty=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:ry,alphatest_pars_fragment:sy,aomap_fragment:oy,aomap_pars_fragment:ay,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:uy,beginnormal_vertex:hy,bsdfs:fy,iridescence_fragment:dy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:_y,clipping_planes_vertex:vy,color_fragment:xy,color_pars_fragment:yy,color_pars_vertex:My,color_vertex:Sy,common:Ey,cube_uv_reflection_fragment:wy,defaultnormal_vertex:Ty,displacementmap_pars_vertex:Ay,displacementmap_vertex:Cy,emissivemap_fragment:Ry,emissivemap_pars_fragment:by,colorspace_fragment:Py,colorspace_pars_fragment:Ly,envmap_fragment:Dy,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Ny,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:jy,envmap_vertex:Oy,fog_vertex:Fy,fog_pars_vertex:zy,fog_fragment:ky,fog_pars_fragment:By,gradientmap_pars_fragment:Hy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Xy,lights_toon_fragment:Yy,lights_toon_pars_fragment:qy,lights_phong_fragment:$y,lights_phong_pars_fragment:Ky,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:Qy,lights_fragment_maps:eM,lights_fragment_end:tM,logdepthbuf_fragment:nM,logdepthbuf_pars_fragment:iM,logdepthbuf_pars_vertex:rM,logdepthbuf_vertex:sM,map_fragment:oM,map_pars_fragment:aM,map_particle_fragment:lM,map_particle_pars_fragment:cM,metalnessmap_fragment:uM,metalnessmap_pars_fragment:hM,morphinstance_vertex:fM,morphcolor_vertex:dM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:_M,normal_fragment_maps:vM,normal_pars_fragment:xM,normal_pars_vertex:yM,normal_vertex:MM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:wM,clearcoat_pars_fragment:TM,iridescence_pars_fragment:AM,opaque_fragment:CM,packing:RM,premultiplied_alpha_fragment:bM,project_vertex:PM,dithering_fragment:LM,dithering_pars_fragment:DM,roughnessmap_fragment:IM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:OM,shadowmap_vertex:FM,shadowmask_pars_fragment:zM,skinbase_vertex:kM,skinning_pars_vertex:BM,skinning_vertex:HM,skinnormal_vertex:VM,specularmap_fragment:GM,specularmap_pars_fragment:WM,tonemapping_fragment:XM,tonemapping_pars_fragment:jM,transmission_fragment:YM,transmission_pars_fragment:qM,uv_pars_fragment:$M,uv_pars_vertex:KM,uv_vertex:ZM,worldpos_vertex:JM,background_vert:QM,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:oS,distanceRGBA_vert:aS,distanceRGBA_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:hS,linedashed_frag:fS,meshbasic_vert:dS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:MS,meshphong_frag:SS,meshphysical_vert:ES,meshphysical_frag:wS,meshtoon_vert:TS,meshtoon_frag:AS,points_vert:CS,points_frag:RS,shadow_vert:bS,shadow_frag:PS,sprite_vert:LS,sprite_frag:DS},Ue={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Tn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Tn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Tn([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Tn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Tn([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Tn([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Tn([Ue.common,Ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Tn([Ue.lights,Ue.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ol={r:0,b:0,g:0},qr=new bi,IS=new Pt;function NS(s,e,t,r,o,l,u){const h=new _t(0);let f=l===!0?0:1,m,_,g=null,y=0,M=null;function d(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?t:e).get(A)),A}function w(T){let A=!1;const E=d(T);E===null?x(h,f):E&&E.isColor&&(x(E,1),A=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(T,A){const E=d(A);E&&(E.isCubeTexture||E.mapping===pc)?(_===void 0&&(_=new hn(new uo(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:lo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),qr.copy(A.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=E,_.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(qr)),_.material.toneMapped=Et.getTransfer(E.colorSpace)!==Lt,(g!==E||y!==E.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=E,y=E.version,M=s.toneMapping),_.layers.enableAll(),T.unshift(_,_.geometry,_.material,0,0,null)):E&&E.isTexture&&(m===void 0&&(m=new hn(new is(2,2),new br({name:"BackgroundMaterial",uniforms:lo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=E,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.toneMapped=Et.getTransfer(E.colorSpace)!==Lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),m.material.uniforms.uvTransform.value.copy(E.matrix),(g!==E||y!==E.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,g=E,y=E.version,M=s.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null))}function x(T,A){T.getRGB(Ol,R0(s)),r.buffers.color.setClear(Ol.r,Ol.g,Ol.b,A,u)}return{getClearColor:function(){return h},setClearColor:function(T,A=1){h.set(T),f=A,x(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,x(h,f)},render:w,addToRenderList:S}}function US(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function h(R,I,j,W,te){let ue=!1;const oe=g(W,j,I);l!==oe&&(l=oe,m(l.object)),ue=M(R,W,j,te),ue&&d(R,W,j,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,E(R,I,j,W),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function f(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function g(R,I,j){const W=j.wireframe===!0;let te=r[R.id];te===void 0&&(te={},r[R.id]=te);let ue=te[I.id];ue===void 0&&(ue={},te[I.id]=ue);let oe=ue[W];return oe===void 0&&(oe=y(f()),ue[W]=oe),oe}function y(R){const I=[],j=[],W=[];for(let te=0;te<t;te++)I[te]=0,j[te]=0,W[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:W,object:R,attributes:{},index:null}}function M(R,I,j,W){const te=l.attributes,ue=I.attributes;let oe=0;const fe=j.getAttributes();for(const H in fe)if(fe[H].location>=0){const ce=te[H];let k=ue[H];if(k===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),ce===void 0||ce.attribute!==k||k&&ce.data!==k.data)return!0;oe++}return l.attributesNum!==oe||l.index!==W}function d(R,I,j,W){const te={},ue=I.attributes;let oe=0;const fe=j.getAttributes();for(const H in fe)if(fe[H].location>=0){let ce=ue[H];ce===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor));const k={};k.attribute=ce,ce&&ce.data&&(k.data=ce.data),te[H]=k,oe++}l.attributes=te,l.attributesNum=oe,l.index=W}function w(){const R=l.newAttributes;for(let I=0,j=R.length;I<j;I++)R[I]=0}function S(R){x(R,0)}function x(R,I){const j=l.newAttributes,W=l.enabledAttributes,te=l.attributeDivisors;j[R]=1,W[R]===0&&(s.enableVertexAttribArray(R),W[R]=1),te[R]!==I&&(s.vertexAttribDivisor(R,I),te[R]=I)}function T(){const R=l.newAttributes,I=l.enabledAttributes;for(let j=0,W=I.length;j<W;j++)I[j]!==R[j]&&(s.disableVertexAttribArray(j),I[j]=0)}function A(R,I,j,W,te,ue,oe){oe===!0?s.vertexAttribIPointer(R,I,j,te,ue):s.vertexAttribPointer(R,I,j,W,te,ue)}function E(R,I,j,W){w();const te=W.attributes,ue=j.getAttributes(),oe=I.defaultAttributeValues;for(const fe in ue){const H=ue[fe];if(H.location>=0){let he=te[fe];if(he===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const ce=he.normalized,k=he.itemSize,se=e.get(he);if(se===void 0)continue;const ke=se.buffer,Q=se.type,pe=se.bytesPerElement,Ae=Q===s.INT||Q===s.UNSIGNED_INT||he.gpuType===Hf;if(he.isInterleavedBufferAttribute){const Ee=he.data,De=Ee.stride,Be=he.offset;if(Ee.isInstancedInterleavedBuffer){for(let nt=0;nt<H.locationSize;nt++)x(H.location+nt,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let nt=0;nt<H.locationSize;nt++)S(H.location+nt);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let nt=0;nt<H.locationSize;nt++)A(H.location+nt,k/H.locationSize,Q,ce,De*pe,(Be+k/H.locationSize*nt)*pe,Ae)}else{if(he.isInstancedBufferAttribute){for(let Ee=0;Ee<H.locationSize;Ee++)x(H.location+Ee,he.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)S(H.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let Ee=0;Ee<H.locationSize;Ee++)A(H.location+Ee,k/H.locationSize,Q,ce,k*pe,k/H.locationSize*Ee*pe,Ae)}}else if(oe!==void 0){const ce=oe[fe];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(H.location,ce);break;case 3:s.vertexAttrib3fv(H.location,ce);break;case 4:s.vertexAttrib4fv(H.location,ce);break;default:s.vertexAttrib1fv(H.location,ce)}}}}T()}function F(){O();for(const R in r){const I=r[R];for(const j in I){const W=I[j];for(const te in W)_(W[te].object),delete W[te];delete I[j]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const I=r[R.id];for(const j in I){const W=I[j];for(const te in W)_(W[te].object),delete W[te];delete I[j]}delete r[R.id]}function D(R){for(const I in r){const j=r[I];if(j[R.id]===void 0)continue;const W=j[R.id];for(const te in W)_(W[te].object),delete W[te];delete j[R.id]}}function O(){P(),u=!0,l!==o&&(l=o,m(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:O,resetDefaultState:P,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:S,disableUnusedAttributes:T}}function OS(s,e,t){let r;function o(m){r=m}function l(m,_){s.drawArrays(r,m,_),t.update(_,r,1)}function u(m,_,g){g!==0&&(s.drawArraysInstanced(r,m,_,g),t.update(_,r,g))}function h(m,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,g);let M=0;for(let d=0;d<g;d++)M+=_[d];t.update(M,r,1)}function f(m,_,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let d=0;d<m.length;d++)u(m[d],_[d],y[d]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,g);let d=0;for(let w=0;w<g;w++)d+=_[w]*y[w];t.update(d,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function FS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==_i&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const O=D===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ki&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ri&&!O)}function f(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=f(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=d>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:d,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:F,maxSamples:N}}function zS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new wr,h=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||r!==0||o;return o=y,r=g.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=_(g,y,0)},this.setState=function(g,y,M){const d=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,x=s.get(g);if(!o||d===null||d.length===0||l&&!S)l?_(null):m();else{const T=l?0:r,A=T*4;let E=x.clippingState||null;f.value=E,E=_(d,y,A,M);for(let F=0;F!==A;++F)E[F]=t[F];x.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=T}};function m(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,M,d){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=f.value,d!==!0||S===null){const x=M+w*4,T=y.matrixWorldInverse;h.getNormalMatrix(T),(S===null||S.length<x)&&(S=new Float32Array(x));for(let A=0,E=M;A!==w;++A,E+=4)u.copy(g[A]).applyMatrix4(T,h),u.normal.toArray(S,E),S[E+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function kS(s){let e=new WeakMap;function t(u,h){return h===ef?u.mapping=ro:h===tf&&(u.mapping=so),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===ef||h===tf)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const m=new Kx(f.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),t(m.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class D0 extends b0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,h-=_*this.view.offsetY,f=h-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,lg=[.125,.215,.35,.446,.526,.582],Qr=20,wh=new D0,cg=new _t;let Th=null,Ah=0,Ch=0,Rh=!1;const Kr=(1+Math.sqrt(5))/2,qs=1/Kr,ug=[new V(-Kr,qs,0),new V(Kr,qs,0),new V(-qs,0,Kr),new V(qs,0,Kr),new V(0,Kr,-qs),new V(0,Kr,qs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Ch),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ca,format:_i,colorSpace:co,depthBuffer:!1},o=fg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BS(l)),this._blurMaterial=HS(l,e,t)}return o}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,wh)}_sceneToCubeUV(e,t,r,o){const h=new ii(90,1,t,r),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(cg),_.toneMapping=Cr,_.autoClear=!1;const M=new ia({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),d=new hn(new uo,M);let w=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,w=!0):(M.color.copy(cg),w=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(h.up.set(0,f[x],0),h.lookAt(m[x],0,0)):T===1?(h.up.set(0,0,f[x]),h.lookAt(0,m[x],0)):(h.up.set(0,f[x],0),h.lookAt(0,0,m[x]));const A=this._cubeSize;Fl(o,T*A,x>2?A:0,A,A),_.setRenderTarget(o),w&&_.render(d,h),_.render(e,h)}d.geometry.dispose(),d.material.dispose(),_.toneMapping=y,_.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ro||e.mapping===so;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new hn(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;Fl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,wh)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=ug[(o-l-1)%ug.length];this._blur(e,l-1,l,u,h)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,h){const f=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new hn(this._lodPlanes[o],m),y=m.uniforms,M=this._sizeLods[r]-1,d=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Qr-1),w=l/d,S=isFinite(l)?1+Math.floor(_*w):Qr;S>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qr}`);const x=[];let T=0;for(let D=0;D<Qr;++D){const O=D/w,P=Math.exp(-O*O/2);x.push(P),D===0?T+=P:D<S&&(T+=2*P)}for(let D=0;D<x.length;D++)x[D]=x[D]/T;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=u==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:A}=this;y.dTheta.value=d,y.mipInt.value=A-r;const E=this._sizeLods[o],F=3*E*(o>A-Zs?o-A+Zs:0),N=4*(this._cubeSize-E);Fl(t,F,N,3*E,2*E),f.setRenderTarget(t),f.render(g,wh)}}function BS(s){const e=[],t=[],r=[];let o=s;const l=s-Zs+1+lg.length;for(let u=0;u<l;u++){const h=Math.pow(2,o);t.push(h);let f=1/h;u>s-Zs?f=lg[u-s+Zs-1]:u===0&&(f=0),r.push(f);const m=1/(h-2),_=-m,g=1+m,y=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,d=6,w=3,S=2,x=1,T=new Float32Array(w*d*M),A=new Float32Array(S*d*M),E=new Float32Array(x*d*M);for(let N=0;N<M;N++){const D=N%3*2/3-1,O=N>2?0:-1,P=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];T.set(P,w*d*N),A.set(y,S*d*N);const R=[N,N,N,N,N,N];E.set(R,x*d*N)}const F=new yn;F.setAttribute("position",new jn(T,w)),F.setAttribute("uv",new jn(A,S)),F.setAttribute("faceIndex",new jn(E,x)),e.push(F),o>Zs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function fg(s,e,t){const r=new ss(s,e,t);return r.texture.mapping=pc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function HS(s,e,t){const r=new Float32Array(Qr),o=new V(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function dg(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function pg(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VS(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const f=h.mapping,m=f===ef||f===tf,_=f===ro||f===so;if(m||_){let g=e.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return t===null&&(t=new hg(s)),g=m?t.fromEquirectangular(h,g):t.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return m&&M&&M.height>0||_&&M&&o(M)?(t===null&&(t=new hg(s)),g=m?t.fromEquirectangular(h):t.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",l),g.texture):null}}}return h}function o(h){let f=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function l(h){const f=h.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function GS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ea("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function WS(s,e,t,r){const o={},l=new WeakMap;function u(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const d in y.attributes)e.remove(y.attributes[d]);for(const d in y.morphAttributes){const w=y.morphAttributes[d];for(let S=0,x=w.length;S<x;S++)e.remove(w[S])}y.removeEventListener("dispose",u),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function h(g,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function f(g){const y=g.attributes;for(const d in y)e.update(y[d],s.ARRAY_BUFFER);const M=g.morphAttributes;for(const d in M){const w=M[d];for(let S=0,x=w.length;S<x;S++)e.update(w[S],s.ARRAY_BUFFER)}}function m(g){const y=[],M=g.index,d=g.attributes.position;let w=0;if(M!==null){const T=M.array;w=M.version;for(let A=0,E=T.length;A<E;A+=3){const F=T[A+0],N=T[A+1],D=T[A+2];y.push(F,N,N,D,D,F)}}else if(d!==void 0){const T=d.array;w=d.version;for(let A=0,E=T.length/3-1;A<E;A+=3){const F=A+0,N=A+1,D=A+2;y.push(F,N,N,D,D,F)}}else return;const S=new(S0(y)?C0:A0)(y,1);S.version=w;const x=l.get(g);x&&e.remove(x),l.set(g,S)}function _(g){const y=l.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&m(g)}else m(g);return l.get(g)}return{get:h,update:f,getWireframeAttribute:_}}function XS(s,e,t){let r;function o(y){r=y}let l,u;function h(y){l=y.type,u=y.bytesPerElement}function f(y,M){s.drawElements(r,M,l,y*u),t.update(M,r,1)}function m(y,M,d){d!==0&&(s.drawElementsInstanced(r,M,l,y*u,d),t.update(M,r,d))}function _(y,M,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,d);let S=0;for(let x=0;x<d;x++)S+=M[x];t.update(S,r,1)}function g(y,M,d,w){if(d===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)m(y[x]/u,M[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,w,0,d);let x=0;for(let T=0;T<d;T++)x+=M[T]*w[T];t.update(x,r,1)}}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function jS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function YS(s,e,t){const r=new WeakMap,o=new Gt;function l(u,h,f){const m=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let R=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const d=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let E=0;d===!0&&(E=1),w===!0&&(E=2),S===!0&&(E=3);let F=h.attributes.position.count*E,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*N*4*g),O=new w0(D,F,N,g);O.type=Ri,O.needsUpdate=!0;const P=E*4;for(let I=0;I<g;I++){const j=x[I],W=T[I],te=A[I],ue=F*N*4*I;for(let oe=0;oe<j.count;oe++){const fe=oe*P;d===!0&&(o.fromBufferAttribute(j,oe),D[ue+fe+0]=o.x,D[ue+fe+1]=o.y,D[ue+fe+2]=o.z,D[ue+fe+3]=0),w===!0&&(o.fromBufferAttribute(W,oe),D[ue+fe+4]=o.x,D[ue+fe+5]=o.y,D[ue+fe+6]=o.z,D[ue+fe+7]=0),S===!0&&(o.fromBufferAttribute(te,oe),D[ue+fe+8]=o.x,D[ue+fe+9]=o.y,D[ue+fe+10]=o.z,D[ue+fe+11]=te.itemSize===4?o.w:1)}}y={count:g,texture:O,size:new Oe(F,N)},r.set(h,y),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let d=0;for(let S=0;S<m.length;S++)d+=m[S];const w=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",m)}f.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function qS(s,e,t,r){let o=new WeakMap;function l(f){const m=r.render.frame,_=f.geometry,g=e.get(f,_);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==m&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return g}function u(){o=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}class I0 extends An{constructor(e,t,r,o,l,u,h,f,m,_=to){if(_!==to&&_!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===to&&(r=rs),r===void 0&&_===ao&&(r=oo),super(null,o,l,u,h,f,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:Xn,this.minFilter=f!==void 0?f:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const N0=new An,mg=new I0(1,1),U0=new w0,O0=new Nx,F0=new P0,gg=[],_g=[],vg=new Float32Array(16),xg=new Float32Array(9),yg=new Float32Array(4);function ho(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=gg[o];if(l===void 0&&(l=new Float32Array(o),gg[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function gc(s,e){let t=_g[e];t===void 0&&(t=new Int32Array(e),_g[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function $S(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function QS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;yg.set(r),s.uniformMatrix2fv(this.addr,!1,yg),tn(t,r)}}function eE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;xg.set(r),s.uniformMatrix3fv(this.addr,!1,xg),tn(t,r)}}function tE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;vg.set(r),s.uniformMatrix4fv(this.addr,!1,vg),tn(t,r)}}function nE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function oE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function aE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function lE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function uE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(mg.compareFunction=M0,l=mg):l=N0,t.setTexture2D(e||l,o)}function hE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||O0,o)}function fE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||F0,o)}function dE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||U0,o)}function pE(s){switch(s){case 5126:return $S;case 35664:return KS;case 35665:return ZS;case 35666:return JS;case 35674:return QS;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return oE;case 36294:return aE;case 36295:return lE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return dE}}function mE(s,e){s.uniform1fv(this.addr,e)}function gE(s,e){const t=ho(e,this.size,2);s.uniform2fv(this.addr,t)}function _E(s,e){const t=ho(e,this.size,3);s.uniform3fv(this.addr,t)}function vE(s,e){const t=ho(e,this.size,4);s.uniform4fv(this.addr,t)}function xE(s,e){const t=ho(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yE(s,e){const t=ho(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ME(s,e){const t=ho(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function SE(s,e){s.uniform1iv(this.addr,e)}function EE(s,e){s.uniform2iv(this.addr,e)}function wE(s,e){s.uniform3iv(this.addr,e)}function TE(s,e){s.uniform4iv(this.addr,e)}function AE(s,e){s.uniform1uiv(this.addr,e)}function CE(s,e){s.uniform2uiv(this.addr,e)}function RE(s,e){s.uniform3uiv(this.addr,e)}function bE(s,e){s.uniform4uiv(this.addr,e)}function PE(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||N0,l[u])}function LE(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||O0,l[u])}function DE(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||F0,l[u])}function IE(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||U0,l[u])}function NE(s){switch(s){case 5126:return mE;case 35664:return gE;case 35665:return _E;case 35666:return vE;case 35674:return xE;case 35675:return yE;case 35676:return ME;case 5124:case 35670:return SE;case 35667:case 35671:return EE;case 35668:case 35672:return wE;case 35669:case 35673:return TE;case 5125:return AE;case 36294:return CE;case 36295:return RE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return IE}}class UE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pE(t.type)}}class OE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NE(t.type)}}class FE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function Mg(s,e){s.seq.push(e),s.map[e.id]=e}function zE(s,e,t){const r=s.name,o=r.length;for(bh.lastIndex=0;;){const l=bh.exec(r),u=bh.lastIndex;let h=l[1];const f=l[2]==="]",m=l[3];if(f&&(h=h|0),m===void 0||m==="["&&u+2===o){Mg(t,m===void 0?new UE(h,s,e):new OE(h,s,e));break}else{let g=t.map[h];g===void 0&&(g=new FE(h),Mg(t,g)),t=g}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);zE(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Sg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const kE=37297;let BE=0;function HE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const Eg=new dt;function VE(s){Et._getMatrix(Eg,Et.workingColorSpace,s);const e=`mat3( ${Eg.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case mc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+HE(s.getShaderSource(e),u)}else return o}function GE(s,e){const t=VE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WE(s,e){let t;switch(e){case ox:t="Linear";break;case ax:t="Reinhard";break;case lx:t="Cineon";break;case cx:t="ACESFilmic";break;case hx:t="AgX";break;case fx:t="Neutral";break;case ux:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zl=new V;function XE(){Et.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function YE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function ta(s){return s!==""}function Tg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ag(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $E=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(s){return s.replace($E,ZE)}const KE=new Map;function ZE(s,e){let t=pt[e];if(t===void 0){const r=KE.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Df(t)}const JE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cg(s){return s.replace(JE,QE)}function QE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Rg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function t1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function i1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case c0:e="ENVMAP_BLENDING_MULTIPLY";break;case rx:e="ENVMAP_BLENDING_MIX";break;case sx:e="ENVMAP_BLENDING_ADD";break}return e}function r1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function s1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=e1(t),m=t1(t),_=n1(t),g=i1(t),y=r1(t),M=jE(t),d=YE(l),w=o.createProgram();let S,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ta).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ta).join(`
`),x.length>0&&(x+=`
`)):(S=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),x=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Cr?WE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,GE("linearToOutputTexel",t.outputColorSpace),XE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),u=Df(u),u=Tg(u,t),u=Ag(u,t),h=Df(h),h=Tg(h,t),h=Ag(h,t),u=Cg(u),h=Cg(h),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=T+S+u,E=T+x+h,F=Sg(o,o.VERTEX_SHADER,A),N=Sg(o,o.FRAGMENT_SHADER,E);o.attachShader(w,F),o.attachShader(w,N),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function D(I){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(w).trim(),W=o.getShaderInfoLog(F).trim(),te=o.getShaderInfoLog(N).trim();let ue=!0,oe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,F,N);else{const fe=wg(o,F,"vertex"),H=wg(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+fe+`
`+H)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(W===""||te==="")&&(oe=!1);oe&&(I.diagnostics={runnable:ue,programLog:j,vertexShader:{log:W,prefix:S},fragmentShader:{log:te,prefix:x}})}o.deleteShader(F),o.deleteShader(N),O=new ic(o,w),P=qE(o,w)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(w,kE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=N,this}let o1=0;class a1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new l1(e),t.set(e,r)),r}}class l1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function c1(s,e,t,r,o,l,u){const h=new qf,f=new a1,m=new Set,_=[],g=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,R,I,j,W){const te=j.fog,ue=W.geometry,oe=P.isMeshStandardMaterial?j.environment:null,fe=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),H=fe&&fe.mapping===pc?fe.image.height:null,he=d[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ce=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,k=ce!==void 0?ce.length:0;let se=0;ue.morphAttributes.position!==void 0&&(se=1),ue.morphAttributes.normal!==void 0&&(se=2),ue.morphAttributes.color!==void 0&&(se=3);let ke,Q,pe,Ae;if(he){const Mt=Ai[he];ke=Mt.vertexShader,Q=Mt.fragmentShader}else ke=P.vertexShader,Q=P.fragmentShader,f.update(P),pe=f.getVertexShaderID(P),Ae=f.getFragmentShaderID(P);const Ee=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Be=W.isInstancedMesh===!0,nt=W.isBatchedMesh===!0,At=!!P.map,mt=!!P.matcap,Ct=!!fe,Y=!!P.aoMap,nn=!!P.lightMap,Ye=!!P.bumpMap,Me=!!P.normalMap,_e=!!P.displacementMap,ot=!!P.emissiveMap,Ve=!!P.metalnessMap,U=!!P.roughnessMap,b=P.anisotropy>0,K=P.clearcoat>0,me=P.dispersion>0,xe=P.iridescence>0,de=P.sheen>0,Ge=P.transmission>0,Le=b&&!!P.anisotropyMap,Ie=K&&!!P.clearcoatMap,at=K&&!!P.clearcoatNormalMap,ye=K&&!!P.clearcoatRoughnessMap,Fe=xe&&!!P.iridescenceMap,et=xe&&!!P.iridescenceThicknessMap,ee=de&&!!P.sheenColorMap,ve=de&&!!P.sheenRoughnessMap,We=!!P.specularMap,it=!!P.specularColorMap,vt=!!P.specularIntensityMap,X=Ge&&!!P.transmissionMap,Pe=Ge&&!!P.thicknessMap,ae=!!P.gradientMap,ge=!!P.alphaMap,ze=P.alphaTest>0,Ne=!!P.alphaHash,lt=!!P.extensions;let Ut=Cr;P.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const $t={shaderID:he,shaderType:P.type,shaderName:P.name,vertexShader:ke,fragmentShader:Q,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:Ae,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:nt,batchingColor:nt&&W._colorsTexture!==null,instancing:Be,instancingColor:Be&&W.instanceColor!==null,instancingMorph:Be&&W.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:co,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:mt,envMap:Ct,envMapMode:Ct&&fe.mapping,envMapCubeUVHeight:H,aoMap:Y,lightMap:nn,bumpMap:Ye,normalMap:Me,displacementMap:y&&_e,emissiveMap:ot,normalMapObjectSpace:Me&&P.normalMapType===gx,normalMapTangentSpace:Me&&P.normalMapType===y0,metalnessMap:Ve,roughnessMap:U,anisotropy:b,anisotropyMap:Le,clearcoat:K,clearcoatMap:Ie,clearcoatNormalMap:at,clearcoatRoughnessMap:ye,dispersion:me,iridescence:xe,iridescenceMap:Fe,iridescenceThicknessMap:et,sheen:de,sheenColorMap:ee,sheenRoughnessMap:ve,specularMap:We,specularColorMap:it,specularIntensityMap:vt,transmission:Ge,transmissionMap:X,thicknessMap:Pe,gradientMap:ae,opaque:P.transparent===!1&&P.blending===eo&&P.alphaToCoverage===!1,alphaMap:ge,alphaTest:ze,alphaHash:Ne,combine:P.combine,mapUv:At&&w(P.map.channel),aoMapUv:Y&&w(P.aoMap.channel),lightMapUv:nn&&w(P.lightMap.channel),bumpMapUv:Ye&&w(P.bumpMap.channel),normalMapUv:Me&&w(P.normalMap.channel),displacementMapUv:_e&&w(P.displacementMap.channel),emissiveMapUv:ot&&w(P.emissiveMap.channel),metalnessMapUv:Ve&&w(P.metalnessMap.channel),roughnessMapUv:U&&w(P.roughnessMap.channel),anisotropyMapUv:Le&&w(P.anisotropyMap.channel),clearcoatMapUv:Ie&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:et&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:ve&&w(P.sheenRoughnessMap.channel),specularMapUv:We&&w(P.specularMap.channel),specularColorMapUv:it&&w(P.specularColorMap.channel),specularIntensityMapUv:vt&&w(P.specularIntensityMap.channel),transmissionMapUv:X&&w(P.transmissionMap.channel),thicknessMapUv:Pe&&w(P.thicknessMap.channel),alphaMapUv:ge&&w(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Me||b),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ue.attributes.uv&&(At||ge),fog:!!te,useFog:P.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:De,skinning:W.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===Lt,decodeVideoTextureEmissive:ot&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===Lt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===mi,flipSided:P.side===Fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:lt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&P.extensions.multiDraw===!0||nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function x(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const I in P.defines)R.push(I),R.push(P.defines[I]);return P.isRawShaderMaterial===!1&&(T(R,P),A(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function T(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function A(P,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),P.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),P.push(h.mask)}function E(P){const R=d[P.type];let I;if(R){const j=Ai[R];I=jx.clone(j.uniforms)}else I=P.uniforms;return I}function F(P,R){let I;for(let j=0,W=_.length;j<W;j++){const te=_[j];if(te.cacheKey===R){I=te,++I.usedTimes;break}}return I===void 0&&(I=new s1(s,R,P,l),_.push(I)),I}function N(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function D(P){f.remove(P)}function O(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:E,acquireProgram:F,releaseProgram:N,releaseShaderCache:D,programs:_,dispose:O}}function u1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,f){s.get(u)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function h1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,y,M,d,w,S){let x=s[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:M,groupOrder:d,renderOrder:g.renderOrder,z:w,group:S},s[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=M,x.groupOrder=d,x.renderOrder=g.renderOrder,x.z=w,x.group=S),e++,x}function h(g,y,M,d,w,S){const x=u(g,y,M,d,w,S);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):t.push(x)}function f(g,y,M,d,w,S){const x=u(g,y,M,d,w,S);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):t.unshift(x)}function m(g,y){t.length>1&&t.sort(g||h1),r.length>1&&r.sort(y||bg),o.length>1&&o.sort(y||bg)}function _(){for(let g=e,y=s.length;g<y;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:f,finish:_,sort:m}}function f1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Pg,s.set(r,[u])):o>=l.length?(u=new Pg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function d1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new _t};break;case"SpotLight":t={position:new V,direction:new V,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function p1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let m1=0;function g1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _1(s){const e=new d1,t=p1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new V);const o=new V,l=new Pt,u=new Pt;function h(m){let _=0,g=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,d=0,w=0,S=0,x=0,T=0,A=0,E=0,F=0,N=0,D=0;m.sort(g1);for(let P=0,R=m.length;P<R;P++){const I=m[P],j=I.color,W=I.intensity,te=I.distance,ue=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=j.r*W,g+=j.g*W,y+=j.b*W;else if(I.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(I.sh.coefficients[oe],W);D++}else if(I.isDirectionalLight){const oe=e.get(I);if(oe.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const fe=I.shadow,H=t.get(I);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=ue,r.directionalShadowMatrix[M]=I.shadow.matrix,T++}r.directional[M]=oe,M++}else if(I.isSpotLight){const oe=e.get(I);oe.position.setFromMatrixPosition(I.matrixWorld),oe.color.copy(j).multiplyScalar(W),oe.distance=te,oe.coneCos=Math.cos(I.angle),oe.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),oe.decay=I.decay,r.spot[w]=oe;const fe=I.shadow;if(I.map&&(r.spotLightMap[F]=I.map,F++,fe.updateMatrices(I),I.castShadow&&N++),r.spotLightMatrix[w]=fe.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,r.spotShadow[w]=H,r.spotShadowMap[w]=ue,E++}w++}else if(I.isRectAreaLight){const oe=e.get(I);oe.color.copy(j).multiplyScalar(W),oe.halfWidth.set(I.width*.5,0,0),oe.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=oe,S++}else if(I.isPointLight){const oe=e.get(I);if(oe.color.copy(I.color).multiplyScalar(I.intensity),oe.distance=I.distance,oe.decay=I.decay,I.castShadow){const fe=I.shadow,H=t.get(I);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,H.shadowCameraNear=fe.camera.near,H.shadowCameraFar=fe.camera.far,r.pointShadow[d]=H,r.pointShadowMap[d]=ue,r.pointShadowMatrix[d]=I.shadow.matrix,A++}r.point[d]=oe,d++}else if(I.isHemisphereLight){const oe=e.get(I);oe.skyColor.copy(I.color).multiplyScalar(W),oe.groundColor.copy(I.groundColor).multiplyScalar(W),r.hemi[x]=oe,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const O=r.hash;(O.directionalLength!==M||O.pointLength!==d||O.spotLength!==w||O.rectAreaLength!==S||O.hemiLength!==x||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==E||O.numSpotMaps!==F||O.numLightProbes!==D)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=S,r.point.length=d,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=E+F-N,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=D,O.directionalLength=M,O.pointLength=d,O.spotLength=w,O.rectAreaLength=S,O.hemiLength=x,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=E,O.numSpotMaps=F,O.numLightProbes=D,r.version=m1++)}function f(m,_){let g=0,y=0,M=0,d=0,w=0;const S=_.matrixWorldInverse;for(let x=0,T=m.length;x<T;x++){const A=m[x];if(A.isDirectionalLight){const E=r.directional[g];E.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),g++}else if(A.isSpotLight){const E=r.spot[M];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(S),E.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),M++}else if(A.isRectAreaLight){const E=r.rectArea[d];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(S),u.identity(),l.copy(A.matrixWorld),l.premultiply(S),u.extractRotation(l),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(u),E.halfHeight.applyMatrix4(u),d++}else if(A.isPointLight){const E=r.point[y];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(S),y++}else if(A.isHemisphereLight){const E=r.hemi[w];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(S),w++}}}return{setup:h,setupView:f,state:r}}function Lg(s){const e=new _1(s),t=[],r=[];function o(_){m.camera=_,t.length=0,r.length=0}function l(_){t.push(_)}function u(_){r.push(_)}function h(){e.setup(t)}function f(_){e.setupView(t,_)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:f,pushLight:l,pushShadow:u}}function v1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new Lg(s),e.set(o,[h])):l>=u.length?(h=new Lg(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}class x1 extends us{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y1 extends us{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E1(s,e,t){let r=new $f;const o=new Oe,l=new Oe,u=new Gt,h=new x1({depthPacking:mx}),f=new y1,m={},_=t.maxTextureSize,g={[Rr]:Fn,[Fn]:Rr,[mi]:mi},y=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:M1,fragmentShader:S1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const d=new yn;d.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new hn(d,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let x=this.type;this.render=function(N,D,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Ar),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const W=x!==Yi&&this.type===Yi,te=x===Yi&&this.type!==Yi;for(let ue=0,oe=N.length;ue<oe;ue++){const fe=N[ue],H=fe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const he=H.getFrameExtents();if(o.multiply(he),l.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/he.x),o.x=l.x*he.x,H.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/he.y),o.y=l.y*he.y,H.mapSize.y=l.y)),H.map===null||W===!0||te===!0){const k=this.type!==Yi?{minFilter:Xn,magFilter:Xn}:{};H.map!==null&&H.map.dispose(),H.map=new ss(o.x,o.y,k),H.map.texture.name=fe.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ce=H.getViewportCount();for(let k=0;k<ce;k++){const se=H.getViewport(k);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),j.viewport(u),H.updateMatrices(fe,k),r=H.getFrustum(),E(D,O,H.camera,fe,this.type)}H.isPointLightShadow!==!0&&this.type===Yi&&T(H,O),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(P,R,I)};function T(N,D){const O=e.update(w);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ss(o.x,o.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(D,null,O,y,w,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(D,null,O,M,w,null)}function A(N,D,O,P){let R=null;const I=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)R=I;else if(R=O.isPointLight===!0?f:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const j=R.uuid,W=D.uuid;let te=m[j];te===void 0&&(te={},m[j]=te);let ue=te[W];ue===void 0&&(ue=R.clone(),te[W]=ue,D.addEventListener("dispose",F)),R=ue}if(R.visible=D.visible,R.wireframe=D.wireframe,P===Yi?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:g[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const j=s.properties.get(R);j.light=O}return R}function E(N,D,O,P,R){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Yi)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const W=e.update(N),te=N.material;if(Array.isArray(te)){const ue=W.groups;for(let oe=0,fe=ue.length;oe<fe;oe++){const H=ue[oe],he=te[H.materialIndex];if(he&&he.visible){const ce=A(N,he,P,R);N.onBeforeShadow(s,N,D,O,W,ce,H),s.renderBufferDirect(O,null,W,ce,N,H),N.onAfterShadow(s,N,D,O,W,ce,H)}}}else if(te.visible){const ue=A(N,te,P,R);N.onBeforeShadow(s,N,D,O,W,ue,null),s.renderBufferDirect(O,null,W,ue,N,null),N.onAfterShadow(s,N,D,O,W,ue,null)}}const j=N.children;for(let W=0,te=j.length;W<te;W++)E(j[W],D,O,P,R)}function F(N){N.target.removeEventListener("dispose",F);for(const O in m){const P=m[O],R=N.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const w1={[Yh]:qh,[$h]:Jh,[Kh]:Qh,[io]:Zh,[qh]:Yh,[Jh]:$h,[Qh]:Kh,[Zh]:io};function T1(s,e){function t(){let X=!1;const Pe=new Gt;let ae=null;const ge=new Gt(0,0,0,0);return{setMask:function(ze){ae!==ze&&!X&&(s.colorMask(ze,ze,ze,ze),ae=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Ne,lt,Ut,$t){$t===!0&&(ze*=Ut,Ne*=Ut,lt*=Ut),Pe.set(ze,Ne,lt,Ut),ge.equals(Pe)===!1&&(s.clearColor(ze,Ne,lt,Ut),ge.copy(Pe))},reset:function(){X=!1,ae=null,ge.set(-1,0,0,0)}}}function r(){let X=!1,Pe=!1,ae=null,ge=null,ze=null;return{setReversed:function(Ne){if(Pe!==Ne){const lt=e.get("EXT_clip_control");Pe?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=ze;ze=null,this.setClear(Ut)}Pe=Ne},getReversed:function(){return Pe},setTest:function(Ne){Ne?Ee(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!X&&(s.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(Pe&&(Ne=w1[Ne]),ge!==Ne){switch(Ne){case Yh:s.depthFunc(s.NEVER);break;case qh:s.depthFunc(s.ALWAYS);break;case $h:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case Kh:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case Jh:s.depthFunc(s.GREATER);break;case Qh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Ne}},setLocked:function(Ne){X=Ne},setClear:function(Ne){ze!==Ne&&(Pe&&(Ne=1-Ne),s.clearDepth(Ne),ze=Ne)},reset:function(){X=!1,ae=null,ge=null,ze=null,Pe=!1}}}function o(){let X=!1,Pe=null,ae=null,ge=null,ze=null,Ne=null,lt=null,Ut=null,$t=null;return{setTest:function(Mt){X||(Mt?Ee(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Mt){Pe!==Mt&&!X&&(s.stencilMask(Mt),Pe=Mt)},setFunc:function(Mt,Cn,Mn){(ae!==Mt||ge!==Cn||ze!==Mn)&&(s.stencilFunc(Mt,Cn,Mn),ae=Mt,ge=Cn,ze=Mn)},setOp:function(Mt,Cn,Mn){(Ne!==Mt||lt!==Cn||Ut!==Mn)&&(s.stencilOp(Mt,Cn,Mn),Ne=Mt,lt=Cn,Ut=Mn)},setLocked:function(Mt){X=Mt},setClear:function(Mt){$t!==Mt&&(s.clearStencil(Mt),$t=Mt)},reset:function(){X=!1,Pe=null,ae=null,ge=null,ze=null,Ne=null,lt=null,Ut=null,$t=null}}}const l=new t,u=new r,h=new o,f=new WeakMap,m=new WeakMap;let _={},g={},y=new WeakMap,M=[],d=null,w=!1,S=null,x=null,T=null,A=null,E=null,F=null,N=null,D=new _t(0,0,0),O=0,P=!1,R=null,I=null,j=null,W=null,te=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,fe=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(H)[1]),oe=fe>=1):H.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),oe=fe>=2);let he=null,ce={};const k=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),ke=new Gt().fromArray(k),Q=new Gt().fromArray(se);function pe(X,Pe,ae,ge){const ze=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(X,Ne),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<ae;lt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Pe+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Ne}const Ae={};Ae[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(s.DEPTH_TEST),u.setFunc(io),Ye(!1),Me(Um),Ee(s.CULL_FACE),Y(Ar);function Ee(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function De(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Be(X,Pe){return g[X]!==Pe?(s.bindFramebuffer(X,Pe),g[X]=Pe,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function nt(X,Pe){let ae=M,ge=!1;if(X){ae=y.get(Pe),ae===void 0&&(ae=[],y.set(Pe,ae));const ze=X.textures;if(ae.length!==ze.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,lt=ze.length;Ne<lt;Ne++)ae[Ne]=s.COLOR_ATTACHMENT0+Ne;ae.length=ze.length,ge=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ae)}function At(X){return d!==X?(s.useProgram(X),d=X,!0):!1}const mt={[Jr]:s.FUNC_ADD,[Hv]:s.FUNC_SUBTRACT,[Vv]:s.FUNC_REVERSE_SUBTRACT};mt[Gv]=s.MIN,mt[Wv]=s.MAX;const Ct={[Xv]:s.ZERO,[jv]:s.ONE,[Yv]:s.SRC_COLOR,[Xh]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[$v]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[jh]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[Kv]:s.ONE_MINUS_DST_ALPHA,[ex]:s.CONSTANT_COLOR,[tx]:s.ONE_MINUS_CONSTANT_COLOR,[nx]:s.CONSTANT_ALPHA,[ix]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(X,Pe,ae,ge,ze,Ne,lt,Ut,$t,Mt){if(X===Ar){w===!0&&(De(s.BLEND),w=!1);return}if(w===!1&&(Ee(s.BLEND),w=!0),X!==Bv){if(X!==S||Mt!==P){if((x!==Jr||E!==Jr)&&(s.blendEquation(s.FUNC_ADD),x=Jr,E=Jr),Mt)switch(X){case eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Om:s.blendFunc(s.ONE,s.ONE);break;case Fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Om:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}T=null,A=null,F=null,N=null,D.set(0,0,0),O=0,S=X,P=Mt}return}ze=ze||Pe,Ne=Ne||ae,lt=lt||ge,(Pe!==x||ze!==E)&&(s.blendEquationSeparate(mt[Pe],mt[ze]),x=Pe,E=ze),(ae!==T||ge!==A||Ne!==F||lt!==N)&&(s.blendFuncSeparate(Ct[ae],Ct[ge],Ct[Ne],Ct[lt]),T=ae,A=ge,F=Ne,N=lt),(Ut.equals(D)===!1||$t!==O)&&(s.blendColor(Ut.r,Ut.g,Ut.b,$t),D.copy(Ut),O=$t),S=X,P=!1}function nn(X,Pe){X.side===mi?De(s.CULL_FACE):Ee(s.CULL_FACE);let ae=X.side===Fn;Pe&&(ae=!ae),Ye(ae),X.blending===eo&&X.transparent===!1?Y(Ar):Y(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const ge=X.stencilWrite;h.setTest(ge),ge&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ot(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function Me(X){X!==zv?(Ee(s.CULL_FACE),X!==I&&(X===Um?s.cullFace(s.BACK):X===kv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),I=X}function _e(X){X!==j&&(oe&&s.lineWidth(X),j=X)}function ot(X,Pe,ae){X?(Ee(s.POLYGON_OFFSET_FILL),(W!==Pe||te!==ae)&&(s.polygonOffset(Pe,ae),W=Pe,te=ae)):De(s.POLYGON_OFFSET_FILL)}function Ve(X){X?Ee(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function U(X){X===void 0&&(X=s.TEXTURE0+ue-1),he!==X&&(s.activeTexture(X),he=X)}function b(X,Pe,ae){ae===void 0&&(he===null?ae=s.TEXTURE0+ue-1:ae=he);let ge=ce[ae];ge===void 0&&(ge={type:void 0,texture:void 0},ce[ae]=ge),(ge.type!==X||ge.texture!==Pe)&&(he!==ae&&(s.activeTexture(ae),he=ae),s.bindTexture(X,Pe||Ae[X]),ge.type=X,ge.texture=Pe)}function K(){const X=ce[he];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(X){ke.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ke.copy(X))}function ve(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function We(X,Pe){let ae=m.get(Pe);ae===void 0&&(ae=new WeakMap,m.set(Pe,ae));let ge=ae.get(X);ge===void 0&&(ge=s.getUniformBlockIndex(Pe,X.name),ae.set(X,ge))}function it(X,Pe){const ge=m.get(Pe).get(X);f.get(Pe)!==ge&&(s.uniformBlockBinding(Pe,ge,X.__bindingPointIndex),f.set(Pe,ge))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},he=null,ce={},g={},y=new WeakMap,M=[],d=null,w=!1,S=null,x=null,T=null,A=null,E=null,F=null,N=null,D=new _t(0,0,0),O=0,P=!1,R=null,I=null,j=null,W=null,te=null,ke.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:Ee,disable:De,bindFramebuffer:Be,drawBuffers:nt,useProgram:At,setBlending:Y,setMaterial:nn,setFlipSided:Ye,setCullFace:Me,setLineWidth:_e,setPolygonOffset:ot,setScissorTest:Ve,activeTexture:U,bindTexture:b,unbindTexture:K,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Fe,texImage3D:et,updateUBOMapping:We,uniformBlockBinding:it,texStorage2D:at,texStorage3D:ye,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ie,scissor:ee,viewport:ve,reset:vt}}function Dg(s,e,t,r){const o=A1(r);switch(t){case p0:return s*e;case g0:return s*e;case _0:return s*e*2;case Wf:return s*e/o.components*o.byteLength;case Xf:return s*e/o.components*o.byteLength;case v0:return s*e*2/o.components*o.byteLength;case jf:return s*e*2/o.components*o.byteLength;case m0:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case Yf:return s*e*4/o.components*o.byteLength;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ql:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case of:case lf:return Math.max(s,16)*Math.max(e,8)/4;case sf:case af:return Math.max(s,8)*Math.max(e,8)/2;case cf:case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case tc:case Af:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case x0:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A1(s){switch(s){case Ki:case h0:return{byteLength:1,components:1};case aa:case f0:case ca:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case rs:case Hf:case Ri:return{byteLength:4,components:1};case d0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function C1(s,e,t,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Oe,_=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(U,b){return M?new OffscreenCanvas(U,b):oc("canvas")}function w(U,b,K){let me=1;const xe=Ve(U);if((xe.width>K||xe.height>K)&&(me=K/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(me*xe.width),Ge=Math.floor(me*xe.height);g===void 0&&(g=d(de,Ge));const Le=b?d(de,Ge):g;return Le.width=de,Le.height=Ge,Le.getContext("2d").drawImage(U,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ge+")."),Le}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){s.generateMipmap(U)}function T(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(U,b,K,me,xe=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=b;if(b===s.RED&&(K===s.FLOAT&&(de=s.R32F),K===s.HALF_FLOAT&&(de=s.R16F),K===s.UNSIGNED_BYTE&&(de=s.R8)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.R8UI),K===s.UNSIGNED_SHORT&&(de=s.R16UI),K===s.UNSIGNED_INT&&(de=s.R32UI),K===s.BYTE&&(de=s.R8I),K===s.SHORT&&(de=s.R16I),K===s.INT&&(de=s.R32I)),b===s.RG&&(K===s.FLOAT&&(de=s.RG32F),K===s.HALF_FLOAT&&(de=s.RG16F),K===s.UNSIGNED_BYTE&&(de=s.RG8)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.RG8UI),K===s.UNSIGNED_SHORT&&(de=s.RG16UI),K===s.UNSIGNED_INT&&(de=s.RG32UI),K===s.BYTE&&(de=s.RG8I),K===s.SHORT&&(de=s.RG16I),K===s.INT&&(de=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.RGB8UI),K===s.UNSIGNED_SHORT&&(de=s.RGB16UI),K===s.UNSIGNED_INT&&(de=s.RGB32UI),K===s.BYTE&&(de=s.RGB8I),K===s.SHORT&&(de=s.RGB16I),K===s.INT&&(de=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),K===s.UNSIGNED_INT&&(de=s.RGBA32UI),K===s.BYTE&&(de=s.RGBA8I),K===s.SHORT&&(de=s.RGBA16I),K===s.INT&&(de=s.RGBA32I)),b===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),b===s.RGBA){const Ge=xe?mc:Et.getTransfer(me);K===s.FLOAT&&(de=s.RGBA32F),K===s.HALF_FLOAT&&(de=s.RGBA16F),K===s.UNSIGNED_BYTE&&(de=Ge===Lt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function E(U,b){let K;return U?b===null||b===rs||b===oo?K=s.DEPTH24_STENCIL8:b===Ri?K=s.DEPTH32F_STENCIL8:b===aa&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===rs||b===oo?K=s.DEPTH_COMPONENT24:b===Ri?K=s.DEPTH_COMPONENT32F:b===aa&&(K=s.DEPTH_COMPONENT16),K}function F(U,b){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Xn&&U.minFilter!==Ci?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function N(U){const b=U.target;b.removeEventListener("dispose",N),O(b),b.isVideoTexture&&_.delete(b)}function D(U){const b=U.target;b.removeEventListener("dispose",D),R(b)}function O(U){const b=r.get(U);if(b.__webglInit===void 0)return;const K=U.source,me=y.get(K);if(me){const xe=me[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(U),Object.keys(me).length===0&&y.delete(K)}r.remove(U)}function P(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const K=U.source,me=y.get(K);delete me[b.__cacheKey],u.memory.textures--}function R(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let xe=0;xe<b.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(b.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)s.deleteFramebuffer(b.__webglFramebuffer[me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=U.textures;for(let me=0,xe=K.length;me<xe;me++){const de=r.get(K[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(K[me])}r.remove(U)}let I=0;function j(){I=0}function W(){const U=I;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),I+=1,U}function te(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ue(U,b){const K=r.get(U);if(U.isVideoTexture&&_e(U),U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){const me=U.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(K,U,b);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function oe(U,b){const K=r.get(U);if(U.version>0&&K.__version!==U.version){Q(K,U,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function fe(U,b){const K=r.get(U);if(U.version>0&&K.__version!==U.version){Q(K,U,b);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function H(U,b){const K=r.get(U);if(U.version>0&&K.__version!==U.version){pe(K,U,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const he={[nf]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[rf]:s.MIRRORED_REPEAT},ce={[Xn]:s.NEAREST,[dx]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[nh]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},k={[_x]:s.NEVER,[Ex]:s.ALWAYS,[vx]:s.LESS,[M0]:s.LEQUAL,[xx]:s.EQUAL,[Sx]:s.GEQUAL,[yx]:s.GREATER,[Mx]:s.NOTEQUAL};function se(U,b){if(b.type===Ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ci||b.magFilter===nh||b.magFilter===vl||b.magFilter===ts||b.minFilter===Ci||b.minFilter===nh||b.minFilter===vl||b.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,he[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,he[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,he[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ce[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==vl&&b.minFilter!==ts||b.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ke(U,b){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",N));const me=b.source;let xe=y.get(me);xe===void 0&&(xe={},y.set(me,xe));const de=te(b);if(de!==U.__cacheKey){xe[de]===void 0&&(xe[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),xe[de].usedTimes++;const Ge=xe[U.__cacheKey];Ge!==void 0&&(xe[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(b)),U.__cacheKey=de,U.__webglTexture=xe[de].texture}return K}function Q(U,b,K){let me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=s.TEXTURE_3D);const xe=ke(U,b),de=b.source;t.bindTexture(me,U.__webglTexture,s.TEXTURE0+K);const Ge=r.get(de);if(de.version!==Ge.__version||xe===!0){t.activeTexture(s.TEXTURE0+K);const Le=Et.getPrimaries(Et.workingColorSpace),Ie=b.colorSpace===Tr?null:Et.getPrimaries(b.colorSpace),at=b.colorSpace===Tr||Le===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ye=w(b.image,!1,o.maxTextureSize);ye=ot(b,ye);const Fe=l.convert(b.format,b.colorSpace),et=l.convert(b.type);let ee=A(b.internalFormat,Fe,et,b.colorSpace,b.isVideoTexture);se(me,b);let ve;const We=b.mipmaps,it=b.isVideoTexture!==!0,vt=Ge.__version===void 0||xe===!0,X=de.dataReady,Pe=F(b,ye);if(b.isDepthTexture)ee=E(b.format===ao,b.type),vt&&(it?t.texStorage2D(s.TEXTURE_2D,1,ee,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,ee,ye.width,ye.height,0,Fe,et,null));else if(b.isDataTexture)if(We.length>0){it&&vt&&t.texStorage2D(s.TEXTURE_2D,Pe,ee,We[0].width,We[0].height);for(let ae=0,ge=We.length;ae<ge;ae++)ve=We[ae],it?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ve.width,ve.height,Fe,et,ve.data):t.texImage2D(s.TEXTURE_2D,ae,ee,ve.width,ve.height,0,Fe,et,ve.data);b.generateMipmaps=!1}else it?(vt&&t.texStorage2D(s.TEXTURE_2D,Pe,ee,ye.width,ye.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,et,ye.data)):t.texImage2D(s.TEXTURE_2D,0,ee,ye.width,ye.height,0,Fe,et,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ee,We[0].width,We[0].height,ye.depth);for(let ae=0,ge=We.length;ae<ge;ae++)if(ve=We[ae],b.format!==_i)if(Fe!==null)if(it){if(X)if(b.layerUpdates.size>0){const ze=Dg(ve.width,ve.height,b.format,b.type);for(const Ne of b.layerUpdates){const lt=ve.data.subarray(Ne*ze/ve.data.BYTES_PER_ELEMENT,(Ne+1)*ze/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ne,ve.width,ve.height,1,Fe,lt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,ye.depth,Fe,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,ee,ve.width,ve.height,ye.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,ye.depth,Fe,et,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,ee,ve.width,ve.height,ye.depth,0,Fe,et,ve.data)}else{it&&vt&&t.texStorage2D(s.TEXTURE_2D,Pe,ee,We[0].width,We[0].height);for(let ae=0,ge=We.length;ae<ge;ae++)ve=We[ae],b.format!==_i?Fe!==null?it?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ve.width,ve.height,Fe,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ve.width,ve.height,Fe,et,ve.data):t.texImage2D(s.TEXTURE_2D,ae,ee,ve.width,ve.height,0,Fe,et,ve.data)}else if(b.isDataArrayTexture)if(it){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ee,ye.width,ye.height,ye.depth),X)if(b.layerUpdates.size>0){const ae=Dg(ye.width,ye.height,b.format,b.type);for(const ge of b.layerUpdates){const ze=ye.data.subarray(ge*ae/ye.data.BYTES_PER_ELEMENT,(ge+1)*ae/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Fe,et,ze)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ee,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(b.isData3DTexture)it?(vt&&t.texStorage3D(s.TEXTURE_3D,Pe,ee,ye.width,ye.height,ye.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)):t.texImage3D(s.TEXTURE_3D,0,ee,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(b.isFramebufferTexture){if(vt)if(it)t.texStorage2D(s.TEXTURE_2D,Pe,ee,ye.width,ye.height);else{let ae=ye.width,ge=ye.height;for(let ze=0;ze<Pe;ze++)t.texImage2D(s.TEXTURE_2D,ze,ee,ae,ge,0,Fe,et,null),ae>>=1,ge>>=1}}else if(We.length>0){if(it&&vt){const ae=Ve(We[0]);t.texStorage2D(s.TEXTURE_2D,Pe,ee,ae.width,ae.height)}for(let ae=0,ge=We.length;ae<ge;ae++)ve=We[ae],it?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Fe,et,ve):t.texImage2D(s.TEXTURE_2D,ae,ee,Fe,et,ve);b.generateMipmaps=!1}else if(it){if(vt){const ae=Ve(ye);t.texStorage2D(s.TEXTURE_2D,Pe,ee,ae.width,ae.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,et,ye)}else t.texImage2D(s.TEXTURE_2D,0,ee,Fe,et,ye);S(b)&&x(me),Ge.__version=de.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function pe(U,b,K){if(b.image.length!==6)return;const me=ke(U,b),xe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+K);const de=r.get(xe);if(xe.version!==de.__version||me===!0){t.activeTexture(s.TEXTURE0+K);const Ge=Et.getPrimaries(Et.workingColorSpace),Le=b.colorSpace===Tr?null:Et.getPrimaries(b.colorSpace),Ie=b.colorSpace===Tr||Ge===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let ge=0;ge<6;ge++)!at&&!ye?Fe[ge]=w(b.image[ge],!0,o.maxCubemapSize):Fe[ge]=ye?b.image[ge].image:b.image[ge],Fe[ge]=ot(b,Fe[ge]);const et=Fe[0],ee=l.convert(b.format,b.colorSpace),ve=l.convert(b.type),We=A(b.internalFormat,ee,ve,b.colorSpace),it=b.isVideoTexture!==!0,vt=de.__version===void 0||me===!0,X=xe.dataReady;let Pe=F(b,et);se(s.TEXTURE_CUBE_MAP,b);let ae;if(at){it&&vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,We,et.width,et.height);for(let ge=0;ge<6;ge++){ae=Fe[ge].mipmaps;for(let ze=0;ze<ae.length;ze++){const Ne=ae[ze];b.format!==_i?ee!==null?it?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Ne.width,Ne.height,ee,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,We,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Ne.width,Ne.height,ee,ve,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,We,Ne.width,Ne.height,0,ee,ve,Ne.data)}}}else{if(ae=b.mipmaps,it&&vt){ae.length>0&&Pe++;const ge=Ve(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,We,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){it?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Fe[ge].width,Fe[ge].height,ee,ve,Fe[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,Fe[ge].width,Fe[ge].height,0,ee,ve,Fe[ge].data);for(let ze=0;ze<ae.length;ze++){const lt=ae[ze].image[ge].image;it?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,lt.width,lt.height,ee,ve,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,We,lt.width,lt.height,0,ee,ve,lt.data)}}else{it?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ee,ve,Fe[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,ee,ve,Fe[ge]);for(let ze=0;ze<ae.length;ze++){const Ne=ae[ze];it?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,ee,ve,Ne.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,We,ee,ve,Ne.image[ge])}}}S(b)&&x(s.TEXTURE_CUBE_MAP),de.__version=xe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ae(U,b,K,me,xe,de){const Ge=l.convert(K.format,K.colorSpace),Le=l.convert(K.type),Ie=A(K.internalFormat,Ge,Le,K.colorSpace),at=r.get(b),ye=r.get(K);if(ye.__renderTarget=b,!at.__hasExternalTextures){const Fe=Math.max(1,b.width>>de),et=Math.max(1,b.height>>de);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,Ie,Fe,et,b.depth,0,Ge,Le,null):t.texImage2D(xe,de,Ie,Fe,et,0,Ge,Le,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Me(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,ye.__webglTexture,0,Ye(b)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,ye.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(U,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const me=b.depthTexture,xe=me&&me.isDepthTexture?me.type:null,de=E(b.stencilBuffer,xe),Ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Ye(b);Me(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,de,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,de,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,de,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,U)}else{const me=b.textures;for(let xe=0;xe<me.length;xe++){const de=me[xe],Ge=l.convert(de.format,de.colorSpace),Le=l.convert(de.type),Ie=A(de.internalFormat,Ge,Le,de.colorSpace),at=Ye(b);K&&Me(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ie,b.width,b.height):Me(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Ie,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(b.depthTexture);me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ue(b.depthTexture,0);const xe=me.__webglTexture,de=Ye(b);if(b.depthTexture.format===to)Me(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(b.depthTexture.format===ao)Me(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Be(U){const b=r.get(U),K=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const me=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=me}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,U)}else if(K){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=s.createRenderbuffer(),Ee(b.__webglDepthbuffer[me],U,!1);else{const xe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ee(b.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(U,b,K){const me=r.get(U);b!==void 0&&Ae(me.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Be(U)}function At(U){const b=U.texture,K=r.get(U),me=r.get(b);U.addEventListener("dispose",D);const xe=U.textures,de=U.isWebGLCubeRenderTarget===!0,Ge=xe.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=b.version,u.memory.textures++),de){K.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Le]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)K.__webglFramebuffer[Le][Ie]=s.createFramebuffer()}else K.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)K.__webglFramebuffer[Le]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Le=0,Ie=xe.length;Le<Ie;Le++){const at=r.get(xe[Le]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Me(U)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Le=0;Le<xe.length;Le++){const Ie=xe[Le];K.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Le]);const at=l.convert(Ie.format,Ie.colorSpace),ye=l.convert(Ie.type),Fe=A(Ie.internalFormat,at,ye,Ie.colorSpace,U.isXRRenderTarget===!0),et=Ye(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Fe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,K.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(K.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)Ae(K.__webglFramebuffer[Le][Ie],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ie);else Ae(K.__webglFramebuffer[Le],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(b)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Le=0,Ie=xe.length;Le<Ie;Le++){const at=xe[Le],ye=r.get(at);t.bindTexture(s.TEXTURE_2D,ye.__webglTexture),se(s.TEXTURE_2D,at),Ae(K.__webglFramebuffer,U,at,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),S(at)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Le=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Le,me.__webglTexture),se(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)Ae(K.__webglFramebuffer[Ie],U,b,s.COLOR_ATTACHMENT0,Le,Ie);else Ae(K.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,Le,0);S(b)&&x(Le),t.unbindTexture()}U.depthBuffer&&Be(U)}function mt(U){const b=U.textures;for(let K=0,me=b.length;K<me;K++){const xe=b[K];if(S(xe)){const de=T(U),Ge=r.get(xe).__webglTexture;t.bindTexture(de,Ge),x(de),t.unbindTexture()}}}const Ct=[],Y=[];function nn(U){if(U.samples>0){if(Me(U)===!1){const b=U.textures,K=U.width,me=U.height;let xe=s.COLOR_BUFFER_BIT;const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(U),Le=b.length>1;if(Le)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const at=r.get(b[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,K,me,0,0,K,me,xe,s.NEAREST),f===!0&&(Ct.length=0,Y.length=0,Ct.push(s.COLOR_ATTACHMENT0+Ie),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ct.push(de),Y.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Y)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const at=r.get(b[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,at,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ye(U){return Math.min(o.maxSamples,U.samples)}function Me(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(U){const b=u.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function ot(U,b){const K=U.colorSpace,me=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==co&&K!==Tr&&(Et.getTransfer(K)===Lt?(me!==_i||xe!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=ue,this.setTexture2DArray=oe,this.setTexture3D=fe,this.setTextureCube=H,this.rebindTextures=nt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Me}function R1(s,e){function t(r,o=Tr){let l;const u=Et.getTransfer(o);if(r===Ki)return s.UNSIGNED_BYTE;if(r===Vf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===d0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===h0)return s.BYTE;if(r===f0)return s.SHORT;if(r===aa)return s.UNSIGNED_SHORT;if(r===Hf)return s.INT;if(r===rs)return s.UNSIGNED_INT;if(r===Ri)return s.FLOAT;if(r===ca)return s.HALF_FLOAT;if(r===p0)return s.ALPHA;if(r===m0)return s.RGB;if(r===_i)return s.RGBA;if(r===g0)return s.LUMINANCE;if(r===_0)return s.LUMINANCE_ALPHA;if(r===to)return s.DEPTH_COMPONENT;if(r===ao)return s.DEPTH_STENCIL;if(r===Wf)return s.RED;if(r===Xf)return s.RED_INTEGER;if(r===v0)return s.RG;if(r===jf)return s.RG_INTEGER;if(r===Yf)return s.RGBA_INTEGER;if(r===Zl||r===Jl||r===Ql||r===ec)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sf||r===of||r===af||r===lf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===sf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===of)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cf||r===uf||r===hf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===cf||r===uf)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ff||r===df||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Mf||r===Sf||r===Ef||r===wf||r===Tf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ff)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===df)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_f)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ef)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tc||r===Af||r===Cf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===tc)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===x0||r===Rf||r===bf||r===Pf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===tc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Rf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class b1 extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class na extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P1={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,f=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,r),x=this._getHandJoint(m,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=_.position.distanceTo(g.position),M=.02,d=.005;m.inputState.pinching&&y>M+d?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-d&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(P1)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new na;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const L1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new An,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new br({vertexShader:L1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new is(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N1 extends as{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",f=1,m=null,_=null,g=null,y=null,M=null,d=null;const w=new I1,S=t.getContextAttributes();let x=null,T=null;const A=[],E=[],F=new Oe;let N=null;const D=new ii;D.viewport=new Gt;const O=new ii;O.viewport=new Gt;const P=[D,O],R=new b1;let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=A[Q];return pe===void 0&&(pe=new Ph,A[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=A[Q];return pe===void 0&&(pe=new Ph,A[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=A[Q];return pe===void 0&&(pe=new Ph,A[Q]=pe),pe.getHandSpace()};function W(Q){const pe=E.indexOf(Q.inputSource);if(pe===-1)return;const Ae=A[pe];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,m||u),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",ue);for(let Q=0;Q<A.length;Q++){const pe=E[Q];pe!==null&&(E[Q]=null,A[Q].disconnect(pe))}I=null,j=null,w.reset(),e.setRenderTarget(x),M=null,y=null,g=null,o=null,T=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g},this.getFrame=function(){return d},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",te),o.addEventListener("inputsourceschange",ue),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),o.renderState.layers===void 0){const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new ss(M.framebufferWidth,M.framebufferHeight,{format:_i,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let pe=null,Ae=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?ao:to,Ae=S.stencil?oo:rs);const De={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:l};g=new XRWebGLBinding(o,t),y=g.createProjectionLayer(De),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),T=new ss(y.textureWidth,y.textureHeight,{format:_i,type:Ki,depthTexture:new I0(y.textureWidth,y.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),m=null,u=await o.requestReferenceSpace(h),ke.setContext(o),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ue(Q){for(let pe=0;pe<Q.removed.length;pe++){const Ae=Q.removed[pe],Ee=E.indexOf(Ae);Ee>=0&&(E[Ee]=null,A[Ee].disconnect(Ae))}for(let pe=0;pe<Q.added.length;pe++){const Ae=Q.added[pe];let Ee=E.indexOf(Ae);if(Ee===-1){for(let Be=0;Be<A.length;Be++)if(Be>=E.length){E.push(Ae),Ee=Be;break}else if(E[Be]===null){E[Be]=Ae,Ee=Be;break}if(Ee===-1)break}const De=A[Ee];De&&De.connect(Ae)}}const oe=new V,fe=new V;function H(Q,pe,Ae){oe.setFromMatrixPosition(pe.matrixWorld),fe.setFromMatrixPosition(Ae.matrixWorld);const Ee=oe.distanceTo(fe),De=pe.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,nt=De[14]/(De[10]-1),At=De[14]/(De[10]+1),mt=(De[9]+1)/De[5],Ct=(De[9]-1)/De[5],Y=(De[8]-1)/De[0],nn=(Be[8]+1)/Be[0],Ye=nt*Y,Me=nt*nn,_e=Ee/(-Y+nn),ot=_e*-Y;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(_e),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),De[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ve=nt+_e,U=At+_e,b=Ye-ot,K=Me+(Ee-ot),me=mt*At/U*Ve,xe=Ct*At/U*Ve;Q.projectionMatrix.makePerspective(b,K,me,xe,Ve,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let pe=Q.near,Ae=Q.far;w.texture!==null&&(w.depthNear>0&&(pe=w.depthNear),w.depthFar>0&&(Ae=w.depthFar)),R.near=O.near=D.near=pe,R.far=O.far=D.far=Ae,(I!==R.near||j!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,j=R.far),D.layers.mask=Q.layers.mask|2,O.layers.mask=Q.layers.mask|4,R.layers.mask=D.layers.mask|O.layers.mask;const Ee=Q.parent,De=R.cameras;he(R,Ee);for(let Be=0;Be<De.length;Be++)he(De[Be],Ee);De.length===2?H(R,D,O):R.projectionMatrix.copy(D.projectionMatrix),ce(Q,R,Ee)};function ce(Q,pe,Ae){Ae===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Lf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return f},this.setFoveation=function(Q){f=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let k=null;function se(Q,pe){if(_=pe.getViewerPose(m||u),d=pe,_!==null){const Ae=_.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let Ee=!1;Ae.length!==R.cameras.length&&(R.cameras.length=0,Ee=!0);for(let Be=0;Be<Ae.length;Be++){const nt=Ae[Be];let At=null;if(M!==null)At=M.getViewport(nt);else{const Ct=g.getViewSubImage(y,nt);At=Ct.viewport,Be===0&&(e.setRenderTargetTextures(T,Ct.colorTexture,y.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(T))}let mt=P[Be];mt===void 0&&(mt=new ii,mt.layers.enable(Be),mt.viewport=new Gt,P[Be]=mt),mt.matrix.fromArray(nt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(nt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(At.x,At.y,At.width,At.height),Be===0&&(R.matrix.copy(mt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ee===!0&&R.cameras.push(mt)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")){const Be=g.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&w.init(e,Be,o.renderState)}}for(let Ae=0;Ae<A.length;Ae++){const Ee=E[Ae],De=A[Ae];Ee!==null&&De!==void 0&&De.update(Ee,pe,m||u)}k&&k(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),d=null}const ke=new L0;ke.setAnimationLoop(se),this.setAnimationLoop=function(Q){k=Q},this.dispose=function(){}}}const $r=new bi,U1=new Pt;function O1(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,R0(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,T,A,E){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x)):x.isMeshStandardMaterial?(l(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,E)):x.isMeshMatcapMaterial?(l(S,x),d(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),w(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?f(S,x,T,A):x.isSpriteMaterial?m(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Fn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Fn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const T=e.get(x),A=T.envMap,E=T.envMapRotation;A&&(S.envMap.value=A,$r.copy(E),$r.x*=-1,$r.y*=-1,$r.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),S.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler($r)),S.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,T,A){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*T,S.scale.value=A*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,T){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Fn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function d(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const T=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function F1(s,e,t,r){let o={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,A){const E=A.program;r.uniformBlockBinding(T,E)}function m(T,A){let E=o[T.id];E===void 0&&(d(T),E=_(T),o[T.id]=E,T.addEventListener("dispose",S));const F=A.program;r.updateUBOMapping(T,F);const N=e.render.frame;l[T.id]!==N&&(y(T),l[T.id]=N)}function _(T){const A=g();T.__bindingPointIndex=A;const E=s.createBuffer(),F=T.__size,N=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,F,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,E),E}function g(){for(let T=0;T<h;T++)if(u.indexOf(T)===-1)return u.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const A=o[T.id],E=T.uniforms,F=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let N=0,D=E.length;N<D;N++){const O=Array.isArray(E[N])?E[N]:[E[N]];for(let P=0,R=O.length;P<R;P++){const I=O[P];if(M(I,N,P,F)===!0){const j=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let te=0;for(let ue=0;ue<W.length;ue++){const oe=W[ue],fe=w(oe);typeof oe=="number"||typeof oe=="boolean"?(I.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,j+te,I.__data)):oe.isMatrix3?(I.__data[0]=oe.elements[0],I.__data[1]=oe.elements[1],I.__data[2]=oe.elements[2],I.__data[3]=0,I.__data[4]=oe.elements[3],I.__data[5]=oe.elements[4],I.__data[6]=oe.elements[5],I.__data[7]=0,I.__data[8]=oe.elements[6],I.__data[9]=oe.elements[7],I.__data[10]=oe.elements[8],I.__data[11]=0):(oe.toArray(I.__data,te),te+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(T,A,E,F){const N=T.value,D=A+"_"+E;if(F[D]===void 0)return typeof N=="number"||typeof N=="boolean"?F[D]=N:F[D]=N.clone(),!0;{const O=F[D];if(typeof N=="number"||typeof N=="boolean"){if(O!==N)return F[D]=N,!0}else if(O.equals(N)===!1)return O.copy(N),!0}return!1}function d(T){const A=T.uniforms;let E=0;const F=16;for(let D=0,O=A.length;D<O;D++){const P=Array.isArray(A[D])?A[D]:[A[D]];for(let R=0,I=P.length;R<I;R++){const j=P[R],W=Array.isArray(j.value)?j.value:[j.value];for(let te=0,ue=W.length;te<ue;te++){const oe=W[te],fe=w(oe),H=E%F,he=H%fe.boundary,ce=H+he;E+=he,ce!==0&&F-ce<fe.storage&&(E+=F-ce),j.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=E,E+=fe.storage}}}const N=E%F;return N>0&&(E+=F-N),T.__size=E,T.__cache={},this}function w(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function S(T){const A=T.target;A.removeEventListener("dispose",S);const E=u.indexOf(A.__bindingPointIndex);u.splice(E,1),s.deleteBuffer(o[A.id]),delete o[A.id],delete l[A.id]}function x(){for(const T in o)s.deleteBuffer(o[T]);u=[],o={},l={}}return{bind:f,update:m,dispose:x}}class z1{constructor(e={}){const{canvas:t=Ax(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const d=new Uint32Array(4),w=new Int32Array(4);let S=null,x=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Cr,this.toneMappingExposure=1;const E=this;let F=!1,N=0,D=0,O=null,P=-1,R=null;const I=new Gt,j=new Gt;let W=null;const te=new _t(0);let ue=0,oe=t.width,fe=t.height,H=1,he=null,ce=null;const k=new Gt(0,0,oe,fe),se=new Gt(0,0,oe,fe);let ke=!1;const Q=new $f;let pe=!1,Ae=!1;const Ee=new Pt,De=new Pt,Be=new V,nt=new Gt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Ct(){return O===null?H:1}let Y=r;function nn(L,q){return t.getContext(L,q)}try{const L={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),Y===null){const q="webgl2";if(Y=nn(q,L),Y===null)throw nn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ye,Me,_e,ot,Ve,U,b,K,me,xe,de,Ge,Le,Ie,at,ye,Fe,et,ee,ve,We,it,vt,X;function Pe(){Ye=new GS(Y),Ye.init(),it=new R1(Y,Ye),Me=new FS(Y,Ye,e,it),_e=new T1(Y,Ye),Me.reverseDepthBuffer&&y&&_e.buffers.depth.setReversed(!0),ot=new jS(Y),Ve=new u1,U=new C1(Y,Ye,_e,Ve,Me,it,ot),b=new kS(E),K=new VS(E),me=new Qx(Y),vt=new US(Y,me),xe=new WS(Y,me,ot,vt),de=new qS(Y,xe,me,ot),ee=new YS(Y,Me,U),ye=new zS(Ve),Ge=new c1(E,b,K,Ye,Me,vt,ye),Le=new O1(E,Ve),Ie=new f1,at=new v1(Ye),et=new NS(E,b,K,_e,de,M,f),Fe=new E1(E,de,Me),X=new F1(Y,ot,Me,_e),ve=new OS(Y,Ye,ot),We=new XS(Y,Ye,ot),ot.programs=Ge.programs,E.capabilities=Me,E.extensions=Ye,E.properties=Ve,E.renderLists=Ie,E.shadowMap=Fe,E.state=_e,E.info=ot}Pe();const ae=new N1(E,Y);this.xr=ae,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const L=Ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(oe,fe,!1))},this.getSize=function(L){return L.set(oe,fe)},this.setSize=function(L,q,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=L,fe=q,t.width=Math.floor(L*H),t.height=Math.floor(q*H),ie===!0&&(t.style.width=L+"px",t.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(oe*H,fe*H).floor()},this.setDrawingBufferSize=function(L,q,ie){oe=L,fe=q,H=ie,t.width=Math.floor(L*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(I)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,q,ie,re){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,q,ie,re),_e.viewport(I.copy(k).multiplyScalar(H).round())},this.getScissor=function(L){return L.copy(se)},this.setScissor=function(L,q,ie,re){L.isVector4?se.set(L.x,L.y,L.z,L.w):se.set(L,q,ie,re),_e.scissor(j.copy(se).multiplyScalar(H).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(L){_e.setScissorTest(ke=L)},this.setOpaqueSort=function(L){he=L},this.setTransparentSort=function(L){ce=L},this.getClearColor=function(L){return L.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(L=!0,q=!0,ie=!0){let re=0;if(L){let $=!1;if(O!==null){const be=O.texture.format;$=be===Yf||be===jf||be===Xf}if($){const be=O.texture.type,Ce=be===Ki||be===rs||be===aa||be===oo||be===Vf||be===Gf,Ke=et.getClearColor(),qe=et.getClearAlpha(),ct=Ke.r,ht=Ke.g,Ze=Ke.b;Ce?(d[0]=ct,d[1]=ht,d[2]=Ze,d[3]=qe,Y.clearBufferuiv(Y.COLOR,0,d)):(w[0]=ct,w[1]=ht,w[2]=Ze,w[3]=qe,Y.clearBufferiv(Y.COLOR,0,w))}else re|=Y.COLOR_BUFFER_BIT}q&&(re|=Y.DEPTH_BUFFER_BIT),ie&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ie.dispose(),at.dispose(),Ve.dispose(),b.dispose(),K.dispose(),de.dispose(),vt.dispose(),X.dispose(),Ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",hs),ae.removeEventListener("sessionend",Zi),Li.stop()};function ge(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const L=ot.autoReset,q=Fe.enabled,ie=Fe.autoUpdate,re=Fe.needsUpdate,$=Fe.type;Pe(),ot.autoReset=L,Fe.enabled=q,Fe.autoUpdate=ie,Fe.needsUpdate=re,Fe.type=$}function Ne(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function lt(L){const q=L.target;q.removeEventListener("dispose",lt),Ut(q)}function Ut(L){$t(L),Ve.remove(L)}function $t(L){const q=Ve.get(L).programs;q!==void 0&&(q.forEach(function(ie){Ge.releaseProgram(ie)}),L.isShaderMaterial&&Ge.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,ie,re,$,be){q===null&&(q=At);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Ke=pa(L,q,ie,re,$);_e.setMaterial(re,Ce);let qe=ie.index,ct=1;if(re.wireframe===!0){if(qe=xe.getWireframeAttribute(ie),qe===void 0)return;ct=2}const ht=ie.drawRange,Ze=ie.attributes.position;let yt=ht.start*ct,Rt=(ht.start+ht.count)*ct;be!==null&&(yt=Math.max(yt,be.start*ct),Rt=Math.min(Rt,(be.start+be.count)*ct)),qe!==null?(yt=Math.max(yt,0),Rt=Math.min(Rt,qe.count)):Ze!=null&&(yt=Math.max(yt,0),Rt=Math.min(Rt,Ze.count));const xt=Rt-yt;if(xt<0||xt===1/0)return;vt.setup($,re,Ke,ie,qe);let fn,ft=ve;if(qe!==null&&(fn=me.get(qe),ft=We,ft.setIndex(fn)),$.isMesh)re.wireframe===!0?(_e.setLineWidth(re.wireframeLinewidth*Ct()),ft.setMode(Y.LINES)):ft.setMode(Y.TRIANGLES);else if($.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),_e.setLineWidth(Qe*Ct()),$.isLineSegments?ft.setMode(Y.LINES):$.isLineLoop?ft.setMode(Y.LINE_LOOP):ft.setMode(Y.LINE_STRIP)}else $.isPoints?ft.setMode(Y.POINTS):$.isSprite&&ft.setMode(Y.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ft.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,ri=$._multiDrawCounts,wt=$._multiDrawCount,dn=qe?me.get(qe).bytesPerElement:1,si=Ve.get(re).currentProgram.getUniforms();for(let Kt=0;Kt<wt;Kt++)si.setValue(Y,"_gl_DrawID",Kt),ft.render(Qe[Kt]/dn,ri[Kt])}else if($.isInstancedMesh)ft.renderInstances(yt,xt,$.count);else if(ie.isInstancedBufferGeometry){const Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ri=Math.min(ie.instanceCount,Qe);ft.renderInstances(yt,xt,ri)}else ft.render(yt,xt)};function Mt(L,q,ie){L.transparent===!0&&L.side===mi&&L.forceSinglePass===!1?(L.side=Fn,L.needsUpdate=!0,fs(L,q,ie),L.side=Rr,L.needsUpdate=!0,fs(L,q,ie),L.side=mi):fs(L,q,ie)}this.compile=function(L,q,ie=null){ie===null&&(ie=L),x=at.get(ie),x.init(q),A.push(x),ie.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),L!==ie&&L.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const re=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const Ke=be[Ce];Mt(Ke,ie,$),re.add(Ke)}else Mt(be,ie,$),re.add(be)}),A.pop(),x=null,re},this.compileAsync=function(L,q,ie=null){const re=this.compile(L,q,ie);return new Promise($=>{function be(){if(re.forEach(function(Ce){Ve.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){$(L);return}setTimeout(be,10)}Ye.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Cn=null;function Mn(L){Cn&&Cn(L)}function hs(){Li.stop()}function Zi(){Li.start()}const Li=new L0;Li.setAnimationLoop(Mn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(L){Cn=L,ae.setAnimationLoop(L),L===null?Li.stop():Li.start()},ae.addEventListener("sessionstart",hs),ae.addEventListener("sessionend",Zi),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,q,O),x=at.get(L,A.length),x.init(q),A.push(x),De.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(De),Ae=this.localClippingEnabled,pe=ye.init(this.clippingPlanes,Ae),S=Ie.get(L,T.length),S.init(),T.push(S),ae.enabled===!0&&ae.isPresenting===!0){const be=E.xr.getDepthSensingMesh();be!==null&&Di(be,q,-1/0,E.sortObjects)}Di(L,q,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(he,ce),mt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,mt&&et.addToRenderList(S,L),this.info.render.frame++,pe===!0&&ye.beginShadows();const ie=x.state.shadowsArray;Fe.render(ie,L,q),pe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,$=S.transmissive;if(x.setupLights(),q.isArrayCamera){const be=q.cameras;if($.length>0)for(let Ce=0,Ke=be.length;Ce<Ke;Ce++){const qe=be[Ce];Lr(re,$,L,qe)}mt&&et.render(L);for(let Ce=0,Ke=be.length;Ce<Ke;Ce++){const qe=be[Ce];Pr(S,L,qe,qe.viewport)}}else $.length>0&&Lr(re,$,L,q),mt&&et.render(L),Pr(S,L,q);O!==null&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(E,L,q),vt.resetDefaultState(),P=-1,R=null,A.pop(),A.length>0?(x=A[A.length-1],pe===!0&&ye.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Di(L,q,ie,re){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Q.intersectsSprite(L)){re&&nt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(De);const Ce=de.update(L),Ke=L.material;Ke.visible&&S.push(L,Ce,Ke,ie,nt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Q.intersectsObject(L))){const Ce=de.update(L),Ke=L.material;if(re&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),nt.copy(L.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),nt.copy(Ce.boundingSphere.center)),nt.applyMatrix4(L.matrixWorld).applyMatrix4(De)),Array.isArray(Ke)){const qe=Ce.groups;for(let ct=0,ht=qe.length;ct<ht;ct++){const Ze=qe[ct],yt=Ke[Ze.materialIndex];yt&&yt.visible&&S.push(L,Ce,yt,ie,nt.z,Ze)}}else Ke.visible&&S.push(L,Ce,Ke,ie,nt.z,null)}}const be=L.children;for(let Ce=0,Ke=be.length;Ce<Ke;Ce++)Di(be[Ce],q,ie,re)}function Pr(L,q,ie,re){const $=L.opaque,be=L.transmissive,Ce=L.transparent;x.setupLightsView(ie),pe===!0&&ye.setGlobalState(E.clippingPlanes,ie),re&&_e.viewport(I.copy(re)),$.length>0&&Ji($,q,ie),be.length>0&&Ji(be,q,ie),Ce.length>0&&Ji(Ce,q,ie),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Lr(L,q,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new ss(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?ca:Ki,minFilter:ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const be=x.state.transmissionRenderTarget[re.id],Ce=re.viewport||I;be.setSize(Ce.z,Ce.w);const Ke=E.getRenderTarget();E.setRenderTarget(be),E.getClearColor(te),ue=E.getClearAlpha(),ue<1&&E.setClearColor(16777215,.5),E.clear(),mt&&et.render(ie);const qe=E.toneMapping;E.toneMapping=Cr;const ct=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),pe===!0&&ye.setGlobalState(E.clippingPlanes,re),Ji(L,ie,re),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Ze=0,yt=q.length;Ze<yt;Ze++){const Rt=q[Ze],xt=Rt.object,fn=Rt.geometry,ft=Rt.material,Qe=Rt.group;if(ft.side===mi&&xt.layers.test(re.layers)){const ri=ft.side;ft.side=Fn,ft.needsUpdate=!0,fa(xt,ie,re,fn,ft,Qe),ft.side=ri,ft.needsUpdate=!0,ht=!0}}ht===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be))}E.setRenderTarget(Ke),E.setClearColor(te,ue),ct!==void 0&&(re.viewport=ct),E.toneMapping=qe}function Ji(L,q,ie){const re=q.isScene===!0?q.overrideMaterial:null;for(let $=0,be=L.length;$<be;$++){const Ce=L[$],Ke=Ce.object,qe=Ce.geometry,ct=re===null?Ce.material:re,ht=Ce.group;Ke.layers.test(ie.layers)&&fa(Ke,q,ie,qe,ct,ht)}}function fa(L,q,ie,re,$,be){L.onBeforeRender(E,q,ie,re,$,be),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(E,q,ie,re,L,be),$.transparent===!0&&$.side===mi&&$.forceSinglePass===!1?($.side=Fn,$.needsUpdate=!0,E.renderBufferDirect(ie,q,re,$,L,be),$.side=Rr,$.needsUpdate=!0,E.renderBufferDirect(ie,q,re,$,L,be),$.side=mi):E.renderBufferDirect(ie,q,re,$,L,be),L.onAfterRender(E,q,ie,re,$,be)}function fs(L,q,ie){q.isScene!==!0&&(q=At);const re=Ve.get(L),$=x.state.lights,be=x.state.shadowsArray,Ce=$.state.version,Ke=Ge.getParameters(L,$.state,be,q,ie),qe=Ge.getProgramCacheKey(Ke);let ct=re.programs;re.environment=L.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(L.isMeshStandardMaterial?K:b).get(L.envMap||re.environment),re.envMapRotation=re.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,ct===void 0&&(L.addEventListener("dispose",lt),ct=new Map,re.programs=ct);let ht=ct.get(qe);if(ht!==void 0){if(re.currentProgram===ht&&re.lightsStateVersion===Ce)return vi(L,Ke),ht}else Ke.uniforms=Ge.getUniforms(L),L.onBeforeCompile(Ke,E),ht=Ge.acquireProgram(Ke,qe),ct.set(qe,ht),re.uniforms=Ke.uniforms;const Ze=re.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ze.clippingPlanes=ye.uniform),vi(L,Ke),re.needsLights=vc(L),re.lightsStateVersion=Ce,re.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=ht,re.uniformsList=null,ht}function da(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=ic.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function vi(L,q){const ie=Ve.get(L);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function pa(L,q,ie,re,$){q.isScene!==!0&&(q=At),U.resetTextureUnits();const be=q.fog,Ce=re.isMeshStandardMaterial?q.environment:null,Ke=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:co,qe=(re.isMeshStandardMaterial?K:b).get(re.envMap||Ce),ct=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ht=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ze=!!ie.morphAttributes.position,yt=!!ie.morphAttributes.normal,Rt=!!ie.morphAttributes.color;let xt=Cr;re.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(xt=E.toneMapping);const fn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ft=fn!==void 0?fn.length:0,Qe=Ve.get(re),ri=x.state.lights;if(pe===!0&&(Ae===!0||L!==R)){const Sn=L===R&&re.id===P;ye.setState(re,L,Sn)}let wt=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ri.state.version||Qe.outputColorSpace!==Ke||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==qe||re.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ye.numPlanes||Qe.numIntersection!==ye.numIntersection)||Qe.vertexAlphas!==ct||Qe.vertexTangents!==ht||Qe.morphTargets!==Ze||Qe.morphNormals!==yt||Qe.morphColors!==Rt||Qe.toneMapping!==xt||Qe.morphTargetsCount!==ft)&&(wt=!0):(wt=!0,Qe.__version=re.version);let dn=Qe.currentProgram;wt===!0&&(dn=fs(re,q,$));let si=!1,Kt=!1,xi=!1;const It=dn.getUniforms(),Yn=Qe.uniforms;if(_e.useProgram(dn.program)&&(si=!0,Kt=!0,xi=!0),re.id!==P&&(P=re.id,Kt=!0),si||R!==L){_e.buffers.depth.getReversed()?(Ee.copy(L.projectionMatrix),Rx(Ee),bx(Ee),It.setValue(Y,"projectionMatrix",Ee)):It.setValue(Y,"projectionMatrix",L.projectionMatrix),It.setValue(Y,"viewMatrix",L.matrixWorldInverse);const qn=It.map.cameraPosition;qn!==void 0&&qn.setValue(Y,Be.setFromMatrixPosition(L.matrixWorld)),Me.logarithmicDepthBuffer&&It.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,Kt=!0,xi=!0)}if($.isSkinnedMesh){It.setOptional(Y,$,"bindMatrix"),It.setOptional(Y,$,"bindMatrixInverse");const Sn=$.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),It.setValue(Y,"boneTexture",Sn.boneTexture,U))}$.isBatchedMesh&&(It.setOptional(Y,$,"batchingTexture"),It.setValue(Y,"batchingTexture",$._matricesTexture,U),It.setOptional(Y,$,"batchingIdTexture"),It.setValue(Y,"batchingIdTexture",$._indirectTexture,U),It.setOptional(Y,$,"batchingColorTexture"),$._colorsTexture!==null&&It.setValue(Y,"batchingColorTexture",$._colorsTexture,U));const Ii=ie.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ee.update($,ie,dn),(Kt||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,It.setValue(Y,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Yn.envMap.value=qe,Yn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Yn.envMapIntensity.value=q.environmentIntensity),Kt&&(It.setValue(Y,"toneMappingExposure",E.toneMappingExposure),Qe.needsLights&&ma(Yn,xi),be&&re.fog===!0&&Le.refreshFogUniforms(Yn,be),Le.refreshMaterialUniforms(Yn,re,H,fe,x.state.transmissionRenderTarget[L.id]),ic.upload(Y,da(Qe),Yn,U)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ic.upload(Y,da(Qe),Yn,U),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(Y,"center",$.center),It.setValue(Y,"modelViewMatrix",$.modelViewMatrix),It.setValue(Y,"normalMatrix",$.normalMatrix),It.setValue(Y,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Sn=re.uniformsGroups;for(let qn=0,Rn=Sn.length;qn<Rn;qn++){const ga=Sn[qn];X.update(ga,dn),X.bind(ga,dn)}}return dn}function ma(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function vc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,q,ie){Ve.get(L.texture).__webglTexture=q,Ve.get(L.depthTexture).__webglTexture=ie;const re=Ve.get(L);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){const ie=Ve.get(L);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,ie=0){O=L,N=q,D=ie;let re=!0,$=null,be=!1,Ce=!1;if(L){const qe=Ve.get(L);if(qe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(Y.FRAMEBUFFER,null),re=!1;else if(qe.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(qe.__hasExternalTextures)U.rebindTextures(L,Ve.get(L.texture).__webglTexture,Ve.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ze=L.depthTexture;if(qe.__boundDepthTexture!==Ze){if(Ze!==null&&Ve.has(Ze)&&(L.width!==Ze.image.width||L.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const ct=L.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ce=!0);const ht=Ve.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ht[q])?$=ht[q][ie]:$=ht[q],be=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?$=Ve.get(L).__webglMultisampledFramebuffer:Array.isArray(ht)?$=ht[ie]:$=ht,I.copy(L.viewport),j.copy(L.scissor),W=L.scissorTest}else I.copy(k).multiplyScalar(H).floor(),j.copy(se).multiplyScalar(H).floor(),W=ke;if(_e.bindFramebuffer(Y.FRAMEBUFFER,$)&&re&&_e.drawBuffers(L,$),_e.viewport(I),_e.scissor(j),_e.setScissorTest(W),be){const qe=Ve.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,qe.__webglTexture,ie)}else if(Ce){const qe=Ve.get(L.texture),ct=q||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,qe.__webglTexture,ie||0,ct)}P=-1},this.readRenderTargetPixels=function(L,q,ie,re,$,be,Ce){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ke=Ke[Ce]),Ke){_e.bindFramebuffer(Y.FRAMEBUFFER,Ke);try{const qe=L.texture,ct=qe.format,ht=qe.type;if(!Me.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-re&&ie>=0&&ie<=L.height-$&&Y.readPixels(q,ie,re,$,it.convert(ct),it.convert(ht),be)}finally{const qe=O!==null?Ve.get(O).__webglFramebuffer:null;_e.bindFramebuffer(Y.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(L,q,ie,re,$,be,Ce){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=Ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ke=Ke[Ce]),Ke){const qe=L.texture,ct=qe.format,ht=qe.type;if(!Me.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=L.width-re&&ie>=0&&ie<=L.height-$){_e.bindFramebuffer(Y.FRAMEBUFFER,Ke);const Ze=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.bufferData(Y.PIXEL_PACK_BUFFER,be.byteLength,Y.STREAM_READ),Y.readPixels(q,ie,re,$,it.convert(ct),it.convert(ht),0);const yt=O!==null?Ve.get(O).__webglFramebuffer:null;_e.bindFramebuffer(Y.FRAMEBUFFER,yt);const Rt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Cx(Y,Rt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,be),Y.deleteBuffer(Ze),Y.deleteSync(Rt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,q=null,ie=0){L.isTexture!==!0&&(ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,L=arguments[1]);const re=Math.pow(2,-ie),$=Math.floor(L.image.width*re),be=Math.floor(L.image.height*re),Ce=q!==null?q.x:0,Ke=q!==null?q.y:0;U.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ie,0,0,Ce,Ke,$,be),_e.unbindTexture()},this.copyTextureToTexture=function(L,q,ie=null,re=null,$=0){L.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,L=arguments[1],q=arguments[2],$=arguments[3]||0,ie=null);let be,Ce,Ke,qe,ct,ht,Ze,yt,Rt;const xt=L.isCompressedTexture?L.mipmaps[$]:L.image;ie!==null?(be=ie.max.x-ie.min.x,Ce=ie.max.y-ie.min.y,Ke=ie.isBox3?ie.max.z-ie.min.z:1,qe=ie.min.x,ct=ie.min.y,ht=ie.isBox3?ie.min.z:0):(be=xt.width,Ce=xt.height,Ke=xt.depth||1,qe=0,ct=0,ht=0),re!==null?(Ze=re.x,yt=re.y,Rt=re.z):(Ze=0,yt=0,Rt=0);const fn=it.convert(q.format),ft=it.convert(q.type);let Qe;q.isData3DTexture?(U.setTexture3D(q,0),Qe=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),Qe=Y.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),Qe=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const ri=Y.getParameter(Y.UNPACK_ROW_LENGTH),wt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),dn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),si=Y.getParameter(Y.UNPACK_SKIP_ROWS),Kt=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,qe),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,ct),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ht);const xi=L.isDataArrayTexture||L.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const Yn=Ve.get(L),Ii=Ve.get(q),Sn=Ve.get(Yn.__renderTarget),qn=Ve.get(Ii.__renderTarget);_e.bindFramebuffer(Y.READ_FRAMEBUFFER,Sn.__webglFramebuffer),_e.bindFramebuffer(Y.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Rn=0;Rn<Ke;Rn++)xi&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.get(L).__webglTexture,$,ht+Rn),L.isDepthTexture?(It&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,$,Rt+Rn),Y.blitFramebuffer(qe,ct,be,Ce,Ze,yt,be,Ce,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):It?Y.copyTexSubImage3D(Qe,$,Ze,yt,Rt+Rn,qe,ct,be,Ce):Y.copyTexSubImage2D(Qe,$,Ze,yt,Rt+Rn,qe,ct,be,Ce);_e.bindFramebuffer(Y.READ_FRAMEBUFFER,null),_e.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else It?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(Qe,$,Ze,yt,Rt,be,Ce,Ke,fn,ft,xt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Qe,$,Ze,yt,Rt,be,Ce,Ke,fn,xt.data):Y.texSubImage3D(Qe,$,Ze,yt,Rt,be,Ce,Ke,fn,ft,xt):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,$,Ze,yt,be,Ce,fn,ft,xt.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,$,Ze,yt,xt.width,xt.height,fn,xt.data):Y.texSubImage2D(Y.TEXTURE_2D,$,Ze,yt,be,Ce,fn,ft,xt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ri),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,wt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,dn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,si),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Kt),$===0&&q.generateMipmaps&&Y.generateMipmap(Qe),_e.unbindTexture()},this.copyTextureToTexture3D=function(L,q,ie=null,re=null,$=0){return L.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,L=arguments[2],q=arguments[3],$=arguments[4]||0),ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,q,ie,re,$)},this.initRenderTarget=function(L){Ve.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),_e.unbindTexture()},this.resetState=function(){N=0,D=0,O=null,_e.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class ac{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new _t(e),this.near=t,this.far=r}clone(){return new ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class k1 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class B1 extends An{constructor(e=null,t=1,r=1,o,l,u,h,f,m=Xn,_=Xn,g,y){super(null,u,h,f,m,_,o,l,g,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ig extends jn{constructor(e,t,r,o=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new Pt,Ng=new Pt,kl=[],Ug=new ls,H1=new Pt,Ko=new hn,Zo=new cs;class Og extends hn{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ig(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<r;o++)this.setMatrixAt(o,H1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ls),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,$s),Ug.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Ug)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,$s),Zo.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=r.length+1,u=e*l+1;for(let h=0;h<r.length;h++)r[h]=o[u+h]}raycast(e,t){const r=this.matrixWorld,o=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(r),e.ray.intersectsSphere(Zo)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,$s),Ng.multiplyMatrices(r,$s),Ko.matrixWorld=Ng,Ko.raycast(e,kl);for(let u=0,h=kl.length;u<h;u++){const f=kl[u];f.instanceId=l,f.object=this,t.push(f)}kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ig(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,o=r.length+1;this.morphTexture===null&&(this.morphTexture=new B1(new Float32Array(o*this.count),o,this.count,Wf,Ri));const l=this.morphTexture.source.data.data;let u=0;for(let m=0;m<r.length;m++)u+=r[m];const h=this.geometry.morphTargetsRelative?1:1-u,f=o*e;l[f]=h,l.set(r,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class z0 extends us{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lc=new V,cc=new V,Fg=new Pt,Jo=new ha,Bl=new cs,Lh=new V,zg=new V;class V1 extends qt{constructor(e=new yn,t=new z0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)lc.fromBufferAttribute(t,o-1),cc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=lc.distanceTo(cc);e.setAttribute("lineDistance",new Ht(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(o),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;Fg.copy(o).invert(),Jo.copy(e.ray).applyMatrix4(Fg);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,m=this.isLineSegments?2:1,_=r.index,y=r.attributes.position;if(_!==null){const M=Math.max(0,u.start),d=Math.min(_.count,u.start+u.count);for(let w=M,S=d-1;w<S;w+=m){const x=_.getX(w),T=_.getX(w+1),A=Hl(this,e,Jo,f,x,T);A&&t.push(A)}if(this.isLineLoop){const w=_.getX(d-1),S=_.getX(M),x=Hl(this,e,Jo,f,w,S);x&&t.push(x)}}else{const M=Math.max(0,u.start),d=Math.min(y.count,u.start+u.count);for(let w=M,S=d-1;w<S;w+=m){const x=Hl(this,e,Jo,f,w,w+1);x&&t.push(x)}if(this.isLineLoop){const w=Hl(this,e,Jo,f,d-1,M);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Hl(s,e,t,r,o,l){const u=s.geometry.attributes.position;if(lc.fromBufferAttribute(u,o),cc.fromBufferAttribute(u,l),t.distanceSqToSegment(lc,cc,Lh,zg)>r)return;Lh.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Lh);if(!(f<e.near||f>e.far))return{distance:f,point:zg.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class k0 extends us{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kg=new Pt,If=new ha,Vl=new cs,Gl=new V;class Bg extends qt{constructor(e=new yn,t=new k0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(o),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;kg.copy(o).invert(),If.copy(e.ray).applyMatrix4(kg);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,m=r.index,g=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let d=y,w=M;d<w;d++){const S=m.getX(d);Gl.fromBufferAttribute(g,S),Hg(Gl,S,f,o,e,t,this)}}else{const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let d=y,w=M;d<w;d++)Gl.fromBufferAttribute(g,d),Hg(Gl,d,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Hg(s,e,t,r,o,l,u){const h=If.distanceSqToPoint(s);if(h<t){const f=new V;If.closestPointToPoint(s,f),f.applyMatrix4(r);const m=o.ray.origin.distanceTo(f);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let h=0,f=l-1,m;for(;h<=f;)if(o=Math.floor(h+(f-h)/2),m=r[o]-u,m<0)h=o+1;else if(m>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const _=r[o],y=r[o+1]-_,M=(u-_)/y;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),h=this.getPoint(l),f=t||(u.isVector2?new Oe:new V);return f.copy(h).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new V,o=[],l=[],u=[],h=new V,f=new Pt;for(let M=0;M<=e;M++){const d=M/e;o[M]=this.getTangentAt(d,new V)}l[0]=new V,u[0]=new V;let m=Number.MAX_VALUE;const _=Math.abs(o[0].x),g=Math.abs(o[0].y),y=Math.abs(o[0].z);_<=m&&(m=_,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),y<=m&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],h),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),h.crossVectors(o[M-1],o[M]),h.length()>Number.EPSILON){h.normalize();const d=Math.acos(ln(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(f.makeRotationAxis(h,d))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(ln(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(h.crossVectors(l[0],l[e]))>0&&(M=-M);for(let d=1;d<=e;d++)l[d].applyMatrix4(f.makeRotationAxis(o[d],M*d)),u[d].crossVectors(o[d],l[d])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zf extends Pi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,h=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=h,this.aRotation=f}getPoint(e,t=new Oe){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const h=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=f-this.aX,M=m-this.aY;f=y*_-M*g+this.aX,m=y*g+M*_+this.aY}return r.set(f,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class G1 extends Zf{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Jf(){let s=0,e=0,t=0,r=0;function o(l,u,h,f){s=l,e=h,t=-3*l+3*u-2*h-f,r=2*l-2*u+h+f}return{initCatmullRom:function(l,u,h,f,m){o(u,h,m*(h-l),m*(f-u))},initNonuniformCatmullRom:function(l,u,h,f,m,_,g){let y=(u-l)/m-(h-l)/(m+_)+(h-u)/_,M=(h-u)/_-(f-u)/(_+g)+(f-h)/g;y*=_,M*=_,o(u,h,y,M)},calc:function(l){const u=l*l,h=u*l;return s+e*l+t*u+r*h}}}const Wl=new V,Dh=new Jf,Ih=new Jf,Nh=new Jf;class W1 extends Pi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new V){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let h=Math.floor(u),f=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:f===0&&h===l-1&&(h=l-2,f=1);let m,_;this.closed||h>0?m=o[(h-1)%l]:(Wl.subVectors(o[0],o[1]).add(o[0]),m=Wl);const g=o[h%l],y=o[(h+1)%l];if(this.closed||h+2<l?_=o[(h+2)%l]:(Wl.subVectors(o[l-1],o[l-2]).add(o[l-1]),_=Wl),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let d=Math.pow(m.distanceToSquared(g),M),w=Math.pow(g.distanceToSquared(y),M),S=Math.pow(y.distanceToSquared(_),M);w<1e-4&&(w=1),d<1e-4&&(d=w),S<1e-4&&(S=w),Dh.initNonuniformCatmullRom(m.x,g.x,y.x,_.x,d,w,S),Ih.initNonuniformCatmullRom(m.y,g.y,y.y,_.y,d,w,S),Nh.initNonuniformCatmullRom(m.z,g.z,y.z,_.z,d,w,S)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(m.x,g.x,y.x,_.x,this.tension),Ih.initCatmullRom(m.y,g.y,y.y,_.y,this.tension),Nh.initCatmullRom(m.z,g.z,y.z,_.z,this.tension));return r.set(Dh.calc(f),Ih.calc(f),Nh.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vg(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,h=s*s,f=s*h;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*h+l*s+t}function X1(s,e){const t=1-s;return t*t*e}function j1(s,e){return 2*(1-s)*s*e}function Y1(s,e){return s*s*e}function ra(s,e,t,r){return X1(s,e)+j1(s,t)+Y1(s,r)}function q1(s,e){const t=1-s;return t*t*t*e}function $1(s,e){const t=1-s;return 3*t*t*s*e}function K1(s,e){return 3*(1-s)*s*s*e}function Z1(s,e){return s*s*s*e}function sa(s,e,t,r,o){return q1(s,e)+$1(s,t)+K1(s,r)+Z1(s,o)}class B0 extends Pi{constructor(e=new Oe,t=new Oe,r=new Oe,o=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Oe){const r=t,o=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(sa(e,o.x,l.x,u.x,h.x),sa(e,o.y,l.y,u.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J1 extends Pi{constructor(e=new V,t=new V,r=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(sa(e,o.x,l.x,u.x,h.x),sa(e,o.y,l.y,u.y,h.y),sa(e,o.z,l.z,u.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H0 extends Pi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q1 extends Pi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V0 extends Pi{constructor(e=new Oe,t=new Oe,r=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Oe){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ra(e,o.x,l.x,u.x),ra(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ew extends Pi{constructor(e=new V,t=new V,r=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ra(e,o.x,l.x,u.x),ra(e,o.y,l.y,u.y),ra(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G0 extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),h=l-u,f=o[u===0?u:u-1],m=o[u],_=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return r.set(Vg(h,f.x,m.x,_.x,g.x),Vg(h,f.y,m.y,_.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Oe().fromArray(o))}return this}}var Gg=Object.freeze({__proto__:null,ArcCurve:G1,CatmullRomCurve3:W1,CubicBezierCurve:B0,CubicBezierCurve3:J1,EllipseCurve:Zf,LineCurve:H0,LineCurve3:Q1,QuadraticBezierCurve:V0,QuadraticBezierCurve3:ew,SplineCurve:G0});class tw extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gg[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,h=this.curves[l],f=h.getLength(),m=f===0?0:1-u/f;return h.getPointAt(m,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],h=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,f=u.getPoints(h);for(let m=0;m<f.length;m++){const _=f[m];r&&r.equals(_)||(t.push(_),r=_)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Gg[o.type]().fromJSON(o))}return this}}class nw extends tw{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new H0(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new V0(this.currentPoint.clone(),new Oe(e,t),new Oe(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const h=new B0(this.currentPoint.clone(),new Oe(e,t),new Oe(r,o),new Oe(l,u));return this.curves.push(h),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new G0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+h,t+f,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,h,f){const m=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(e+m,t+_,r,o,l,u,h,f),this}absellipse(e,t,r,o,l,u,h,f){const m=new Zf(e,t,r,o,l,u,h,f);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const _=m.getPoint(1);return this.currentPoint.copy(_),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qf extends yn{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,r=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:o},t=Math.floor(t),o=ln(o,0,Math.PI*2);const l=[],u=[],h=[],f=[],m=[],_=1/t,g=new V,y=new Oe,M=new V,d=new V,w=new V;let S=0,x=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:S=e[T+1].x-e[T].x,x=e[T+1].y-e[T].y,M.x=x*1,M.y=-S,M.z=x*0,w.copy(M),M.normalize(),f.push(M.x,M.y,M.z);break;case e.length-1:f.push(w.x,w.y,w.z);break;default:S=e[T+1].x-e[T].x,x=e[T+1].y-e[T].y,M.x=x*1,M.y=-S,M.z=x*0,d.copy(M),M.x+=w.x,M.y+=w.y,M.z+=w.z,M.normalize(),f.push(M.x,M.y,M.z),w.copy(d)}for(let T=0;T<=t;T++){const A=r+T*_*o,E=Math.sin(A),F=Math.cos(A);for(let N=0;N<=e.length-1;N++){g.x=e[N].x*E,g.y=e[N].y,g.z=e[N].x*F,u.push(g.x,g.y,g.z),y.x=T/t,y.y=N/(e.length-1),h.push(y.x,y.y);const D=f[3*N+0]*E,O=f[3*N+1],P=f[3*N+0]*F;m.push(D,O,P)}}for(let T=0;T<t;T++)for(let A=0;A<e.length-1;A++){const E=A+T*e.length,F=E,N=E+e.length,D=E+e.length+1,O=E+1;l.push(F,N,O),l.push(D,O,N)}this.setIndex(l),this.setAttribute("position",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2)),this.setAttribute("normal",new Ht(m,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qf(e.points,e.segments,e.phiStart,e.phiLength)}}class uc extends Qf{constructor(e=1,t=1,r=4,o=8){const l=new nw;l.absarc(0,-t/2,e,Math.PI*1.5,0),l.absarc(0,t/2,e,0,Math.PI*.5),super(l.getPoints(r),o),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:r,radialSegments:o}}static fromJSON(e){return new uc(e.radius,e.length,e.capSegments,e.radialSegments)}}class _c extends yn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:f};const m=this;o=Math.floor(o),l=Math.floor(l);const _=[],g=[],y=[],M=[];let d=0;const w=[],S=r/2;let x=0;T(),u===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(_),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(M,2));function T(){const E=new V,F=new V;let N=0;const D=(t-e)/r;for(let O=0;O<=l;O++){const P=[],R=O/l,I=R*(t-e)+e;for(let j=0;j<=o;j++){const W=j/o,te=W*f+h,ue=Math.sin(te),oe=Math.cos(te);F.x=I*ue,F.y=-R*r+S,F.z=I*oe,g.push(F.x,F.y,F.z),E.set(ue,D,oe).normalize(),y.push(E.x,E.y,E.z),M.push(W,1-R),P.push(d++)}w.push(P)}for(let O=0;O<o;O++)for(let P=0;P<l;P++){const R=w[P][O],I=w[P+1][O],j=w[P+1][O+1],W=w[P][O+1];(e>0||P!==0)&&(_.push(R,I,W),N+=3),(t>0||P!==l-1)&&(_.push(I,j,W),N+=3)}m.addGroup(x,N,0),x+=N}function A(E){const F=d,N=new Oe,D=new V;let O=0;const P=E===!0?e:t,R=E===!0?1:-1;for(let j=1;j<=o;j++)g.push(0,S*R,0),y.push(0,R,0),M.push(.5,.5),d++;const I=d;for(let j=0;j<=o;j++){const te=j/o*f+h,ue=Math.cos(te),oe=Math.sin(te);D.x=P*oe,D.y=S*R,D.z=P*ue,g.push(D.x,D.y,D.z),y.push(0,R,0),N.x=ue*.5+.5,N.y=oe*.5*R+.5,M.push(N.x,N.y),d++}for(let j=0;j<o;j++){const W=F+j,te=I+j;E===!0?_.push(te,te+1,W):_.push(te+1,te,W),O+=3}m.addGroup(x,O,E===!0?1:2),x+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends _c{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(0,e,t,r,o,l,u,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h}}static fromJSON(e){return new Js(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ed extends yn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];h(o),m(r),_(),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(l.slice(),3)),this.setAttribute("uv",new Ht(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(T){const A=new V,E=new V,F=new V;for(let N=0;N<t.length;N+=3)M(t[N+0],A),M(t[N+1],E),M(t[N+2],F),f(A,E,F,T)}function f(T,A,E,F){const N=F+1,D=[];for(let O=0;O<=N;O++){D[O]=[];const P=T.clone().lerp(E,O/N),R=A.clone().lerp(E,O/N),I=N-O;for(let j=0;j<=I;j++)j===0&&O===N?D[O][j]=P:D[O][j]=P.clone().lerp(R,j/I)}for(let O=0;O<N;O++)for(let P=0;P<2*(N-O)-1;P++){const R=Math.floor(P/2);P%2===0?(y(D[O][R+1]),y(D[O+1][R]),y(D[O][R])):(y(D[O][R+1]),y(D[O+1][R+1]),y(D[O+1][R]))}}function m(T){const A=new V;for(let E=0;E<l.length;E+=3)A.x=l[E+0],A.y=l[E+1],A.z=l[E+2],A.normalize().multiplyScalar(T),l[E+0]=A.x,l[E+1]=A.y,l[E+2]=A.z}function _(){const T=new V;for(let A=0;A<l.length;A+=3){T.x=l[A+0],T.y=l[A+1],T.z=l[A+2];const E=S(T)/2/Math.PI+.5,F=x(T)/Math.PI+.5;u.push(E,1-F)}d(),g()}function g(){for(let T=0;T<u.length;T+=6){const A=u[T+0],E=u[T+2],F=u[T+4],N=Math.max(A,E,F),D=Math.min(A,E,F);N>.9&&D<.1&&(A<.2&&(u[T+0]+=1),E<.2&&(u[T+2]+=1),F<.2&&(u[T+4]+=1))}}function y(T){l.push(T.x,T.y,T.z)}function M(T,A){const E=T*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function d(){const T=new V,A=new V,E=new V,F=new V,N=new Oe,D=new Oe,O=new Oe;for(let P=0,R=0;P<l.length;P+=9,R+=6){T.set(l[P+0],l[P+1],l[P+2]),A.set(l[P+3],l[P+4],l[P+5]),E.set(l[P+6],l[P+7],l[P+8]),N.set(u[R+0],u[R+1]),D.set(u[R+2],u[R+3]),O.set(u[R+4],u[R+5]),F.copy(T).add(A).add(E).divideScalar(3);const I=S(F);w(N,R+0,T,I),w(D,R+2,A,I),w(O,R+4,E,I)}}function w(T,A,E,F){F<0&&T.x===1&&(u[A]=T.x-1),E.x===0&&E.z===0&&(u[A]=F/2/Math.PI+.5)}function S(T){return Math.atan2(T.z,-T.x)}function x(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.vertices,e.indices,e.radius,e.details)}}class td extends ed{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new td(e.radius,e.detail)}}class hc extends yn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const h=[],f=[],m=[],_=[];let g=e;const y=(t-e)/o,M=new V,d=new Oe;for(let w=0;w<=o;w++){for(let S=0;S<=r;S++){const x=l+S/r*u;M.x=g*Math.cos(x),M.y=g*Math.sin(x),f.push(M.x,M.y,M.z),m.push(0,0,1),d.x=(M.x/t+1)/2,d.y=(M.y/t+1)/2,_.push(d.x,d.y)}g+=y}for(let w=0;w<o;w++){const S=w*(r+1);for(let x=0;x<r;x++){const T=x+S,A=T,E=T+r+1,F=T+r+2,N=T+1;h.push(A,E,N),h.push(E,F,N)}}this.setIndex(h),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fc extends yn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+h,Math.PI);let m=0;const _=[],g=new V,y=new V,M=[],d=[],w=[],S=[];for(let x=0;x<=r;x++){const T=[],A=x/r;let E=0;x===0&&u===0?E=.5/t:x===r&&f===Math.PI&&(E=-.5/t);for(let F=0;F<=t;F++){const N=F/t;g.x=-e*Math.cos(o+N*l)*Math.sin(u+A*h),g.y=e*Math.cos(u+A*h),g.z=e*Math.sin(o+N*l)*Math.sin(u+A*h),d.push(g.x,g.y,g.z),y.copy(g).normalize(),w.push(y.x,y.y,y.z),S.push(N+E,1-A),T.push(m++)}_.push(T)}for(let x=0;x<r;x++)for(let T=0;T<t;T++){const A=_[x][T+1],E=_[x][T],F=_[x+1][T],N=_[x+1][T+1];(x!==0||u>0)&&M.push(A,E,N),(x!==r-1||f<Math.PI)&&M.push(E,F,N)}this.setIndex(M),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wn extends us{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nd extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class iw extends nd{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uh=new Pt,Wg=new V,Xg=new V;class rw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $f,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wg),Xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xg),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sw extends rw{constructor(){super(new D0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ow extends nd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new sw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aw extends nd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jg(){return performance.now()}const Yg=new Pt;class cw{constructor(e,t,r=0,o=1/0){this.ray=new ha(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new qf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yg),this}intersectObject(e,t=!0,r=[]){return Nf(e,this,r,t),r.sort(qg),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Nf(e[o],this,r,t);return r.sort(qg),r}}function qg(s,e){return s.distance-e.distance}function Nf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,h=l.length;u<h;u++)Nf(l[u],e,t,!0)}}class $g{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uw extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);const Kg={type:"change"},id={type:"start"},W0={type:"end"},Xl=new ha,Zg=new wr,hw=Math.cos(70*Tx.DEG2RAD),Qt=new V,On=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oh=1e-6;class fw extends uw{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:Ks.ROTATE,TWO:Ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new os,this._lastTargetPosition=new V,this._quat=new os().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $g,this._sphericalDelta=new $g,this._scale=1,this._panOffset=new V,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new V,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pw.bind(this),this._onPointerDown=dw.bind(this),this._onPointerUp=mw.bind(this),this._onContextMenu=Sw.bind(this),this._onMouseWheel=vw.bind(this),this._onKeyDown=xw.bind(this),this._onTouchStart=yw.bind(this),this._onTouchMove=Mw.bind(this),this._onMouseDown=gw.bind(this),this._onMouseMove=_w.bind(this),this._interceptControlDown=Ew.bind(this),this._interceptControlUp=ww.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kg),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=On:r>Math.PI&&(r-=On),o<-Math.PI?o+=On:o>Math.PI&&(o-=On),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Qt.length();u=this._clampDistance(h*this._scale);const f=h-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const m=new V(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),u=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Xl.origin.copy(this.object.position),Xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xl.direction))<hw?this.object.lookAt(this.target):(Zg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xl.intersectPlane(Zg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oh||this._lastTargetPosition.distanceToSquared(this.target)>Oh?(this.dispatchEvent(Kg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Qt.copy(o).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function dw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function pw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function mw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W0),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case Qs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case Qs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(id)}function _w(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function vw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(id),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(W0))}function xw(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function yw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case Ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case Ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(id)}function Mw(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function Sw(s){this.enabled!==!1&&s.preventDefault()}function Ew(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ww(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jg=s=>{let e;const t=new Set,r=(m,_)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const y=e;e=_??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(M=>M(e,y))}},o=()=>e,h={setState:r,getState:o,getInitialState:()=>f,subscribe:m=>(t.add(m),()=>t.delete(m))},f=e=s(r,o,h);return h},Tw=(s=>s?Jg(s):Jg),Aw=s=>s;function Cw(s,e=Aw){const t=Qo.useSyncExternalStore(s.subscribe,Qo.useCallback(()=>e(s.getState()),[s,e]),Qo.useCallback(()=>e(s.getInitialState()),[s,e]));return Qo.useDebugValue(t),t}const Qg=s=>{const e=Tw(s),t=r=>Cw(e,r);return Object.assign(t,e),t},Rw=(s=>s?Qg(s):Qg);function X0(s){if(typeof s=="number")return s>>>0;let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function bw(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class rc{constructor(e){Ku(this,"fn");this.fn=bw(X0(e))}next(){return this.fn()}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}}const e0=["김","이","박","최","정","강","조","윤","장","임","한","서","신","권","황"],t0=["민준","서연","도윤","하은","지훈","수아","현우","지민","준서","예린","태양","보라","산들","이슬","바람"];function Fh(s){const e=typeof s=="function"?s:()=>s.next(),t=e0[Math.floor(e()*e0.length)],r=t0[Math.floor(e()*t0.length)];return t+r}function jl(s,e,t){let r=t>>>0;return r=Math.imul(r^(s|0),374761393),r=Math.imul(r^(e|0),668265263),r^=r>>>13,r=Math.imul(r,1274126177),r^=r>>>16,(r>>>0)/4294967296}function n0(s){return s*s*(3-2*s)}class zh{constructor(e){Ku(this,"seed");this.seed=X0(e)}noise(e,t){const r=Math.floor(e),o=Math.floor(t),l=e-r,u=t-o,h=jl(r,o,this.seed),f=jl(r+1,o,this.seed),m=jl(r,o+1,this.seed),_=jl(r+1,o+1,this.seed),g=n0(l),y=n0(u);return h+(f-h)*g+(m-h)*y+(h-f-m+_)*g*y}fbm(e,t,r=4,o=2,l=.5){let u=.5,h=1,f=0,m=0;for(let _=0;_<r;_++)f+=u*this.noise(e*h,t*h),m+=u,u*=l,h*=o;return f/m}}const Pw={size:96,waterLevel:.38,hilliness:.6,forestDensity:.6},Uf=["ocean","beach","plain","forest","hill","mountain","lake","river"];function Lw(s){return Uf.indexOf(s)}function Dw(s,e){const{size:t}=e,r=new Float32Array(t*t),o=new Uint8Array(t*t),l=new zh(s+":height"),u=new zh(s+":moist"),h=new zh(s+":river"),f=.045,m=.4+e.hilliness*.9;for(let A=0;A<t;A++)for(let E=0;E<t;E++){const F=E*f,N=A*f,D=(E/t-.5)*2,O=(A/t-.5)*2,P=Math.sqrt(D*D+O*O),R=Math.max(0,1-Math.pow(P,2.2)*.72);let I=l.fbm(F,N,5)*m+l.fbm(F*3.1+7.3,N*3.1+2.9,2)*.12;I*=.35+.65*R;const j=Math.abs(h.fbm(F*.9+3.7,N*.9+9.1,3)-.5)*2,W=j<.06?1-j/.06:0;W>0&&I>e.waterLevel&&I<e.waterLevel+.22&&(I-=W*.09),I=Math.min(1,Math.max(0,I)),r[A*t+E]=I}for(let A=0;A<t;A++)for(let E=0;E<t;E++){const F=r[A*t+E],N=u.fbm(E*.06+11,A*.06+5,3),D=e.waterLevel;let O;F<D-.06?O="ocean":F<D-.015?O="lake":F<D+.015?O="beach":F>.78?O="mountain":F>.62?O="hill":N>.55&&F>D+.05?O="forest":O="plain",Math.abs(h.fbm(E*f*.9+3.7,A*f*.9+9.1,3)-.5)*2<.035&&F<=D+.2&&F>=D-.02&&(O="river"),o[A*t+E]=Lw(O)}const _=new rc(s+":veg"),g=[],y=[],M=[],d=Math.floor(t*t*.028*(.4+e.forestDensity)),w=Math.floor(t*t*.006),S=Math.floor(t*t*.008);let x=0,T=0;for(;T<d&&x++<d*40;){const A=_.range(0,t-1),E=_.range(0,t-1),F=Math.floor(A),N=Math.floor(E),D=Uf[o[N*t+F]],O=r[N*t+F];if(O<e.waterLevel+.02||D==="mountain")continue;const P=D==="forest"?.9:.28;if(_.next()>P)continue;const R=O>.55||_.next()<.35?"pine":"tree";g.push({x:A,z:E,kind:R}),T++}for(x=0,T=0;T<w&&x++<w*60;){const A=_.range(0,t-1),E=_.range(0,t-1),F=Math.floor(A),N=Math.floor(E);r[N*t+F]<e.waterLevel+.02||(y.push({x:A,z:E,kind:"rock"}),T++)}for(x=0,T=0;T<S&&x++<S*60;){const A=_.range(0,t-1),E=_.range(0,t-1),F=Math.floor(A),N=Math.floor(E),D=Uf[o[N*t+F]];r[N*t+F]<e.waterLevel+.02||D==="mountain"||D==="beach"||(M.push({x:A,z:E,kind:"bush"}),T++)}return{seed:s,settings:{...e},heights:r,biomes:o,trees:g,rocks:y,bushes:M}}function Iw(s,e,t){const{size:r}=s.settings,o=Math.max(0,Math.min(r-1.001,e)),l=Math.max(0,Math.min(r-1.001,t)),u=Math.floor(o),h=Math.floor(l),f=o-u,m=l-h,_=s.heights[h*r+u],g=s.heights[h*r+Math.min(r-1,u+1)],y=s.heights[Math.min(r-1,h+1)*r+u],M=s.heights[Math.min(r-1,h+1)*r+Math.min(r-1,u+1)];return _*(1-f)*(1-m)+g*f*(1-m)+y*(1-f)*m+M*f*m}const Yl=10,Nw=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],oa=new Map;let j0=0;function ql(){j0++,oa.size>500&&oa.clear()}function Uw(s,e,t,r){return`${j0}:${s},${e}>${t},${r}`}function Zr(s,e,t){const{size:r,heights:o,waterLevel:l,blocked:u,maxSlope:h=.09}=s;if(e<0||t<0||e>=r||t>=r)return!1;const f=t*r+e;return!(u[f]||o[f]<l+.005)}function Ow(s,e,t,r,o,l=6e3){if(e=Math.max(0,Math.min(s.size-1,Math.round(e))),t=Math.max(0,Math.min(s.size-1,Math.round(t))),r=Math.max(0,Math.min(s.size-1,Math.round(r))),o=Math.max(0,Math.min(s.size-1,Math.round(o))),e===r&&t===o)return{path:[{x:r,z:o}],cost:0,visited:0};const u=Uw(e,t,r,o),h=oa.get(u);if(h){let A=!0;for(const E of h)if(!Zr(s,E.x,E.z)){A=!1;break}if(A)return{path:h.map(E=>({...E})),cost:h.length,visited:0};oa.delete(u)}let f={x:r,z:o};if(!Zr(s,r,o)){let A=null;for(let E=1;E<=4&&!A;E++)for(let F=-E;F<=E&&!A;F++)for(let N=-E;N<=E&&!A;N++)Zr(s,r+N,o+F)&&(A={x:r+N,z:o+F});if(!A)return null;f=A}if(!Zr(s,e,t)){let A=!1;for(let E=1;E<=3&&!A;E++)for(let F=-E;F<=E&&!A;F++)for(let N=-E;N<=E&&!A;N++)Zr(s,e+N,t+F)&&(e+=N,t+=F,A=!0);if(!A)return null}const{size:m,heights:_}=s,g=s.maxSlope??.09,y=[t*m+e],M=new Map,d=new Map,w=new Set;M.set(t*m+e,0);const S=A=>{const E=A%m,F=Math.floor(A/m);return Math.hypot(f.x-E,f.z-F)},x=new Map;x.set(t*m+e,S(t*m+e));let T=0;for(;y.length>0&&T<l;){let A=0,E=1/0;for(let O=0;O<y.length;O++){const P=x.get(y[O])??1/0;P<E&&(E=P,A=O)}const F=y.splice(A,1)[0];if(w.has(F))continue;w.add(F),T++;const N=F%m,D=Math.floor(F/m);if(N===f.x&&D===f.z){const O=[];let P=F;for(;P!==void 0;)O.push({x:P%m,z:Math.floor(P/m)}),P=d.get(P);O.reverse();const R=Fw(s,O);return oa.set(u,R.map(I=>({...I}))),{path:R,cost:M.get(F)??O.length,visited:T}}for(const[O,P,R]of Nw){const I=N+O,j=D+P;if(!Zr(s,I,j))continue;const W=j*m+I;if(w.has(W))continue;const te=Math.abs(_[W]-_[F]);if(te>g)continue;const ue=1+te*30,oe=(M.get(F)??1/0)+R*ue;oe<(M.get(W)??1/0)&&(d.set(W,F),M.set(W,oe),x.set(W,oe+S(W)),y.includes(W)||y.push(W))}}return null}function Fw(s,e){if(e.length<3)return e;const t=[e[0]];let r=0;for(let o=2;o<e.length;o++)zw(s,e[r],e[o])||(t.push(e[o-1]),r=o-1);return t.push(e[e.length-1]),t}function zw(s,e,t){const r=Math.max(Math.abs(t.x-e.x),Math.abs(t.z-e.z))*2,o=Math.max(1,Math.ceil(r));for(let l=1;l<o;l++){const u=l/o,h=Math.round(e.x+(t.x-e.x)*u),f=Math.round(e.z+(t.z-e.z)*u);if(!Zr(s,h,f)||Math.abs(s.heights[f*s.size+h]-s.heights[e.z*s.size+e.x])>(s.maxSlope??.09)*3)return!1}return!0}const kw="world-forge-db",la="saves";function Y0(){return new Promise((s,e)=>{const t=indexedDB.open(kw,1);t.onupgradeneeded=()=>{t.result.createObjectStore(la)},t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}async function Bw(s,e){const t=await Y0();return new Promise((r,o)=>{const l=t.transaction(la,"readwrite");l.objectStore(la).put({version:1,savedAt:Date.now(),data:e},s),l.oncomplete=()=>{t.close(),r()},l.onerror=()=>o(l.error)})}async function Hw(s){const e=await Y0();return new Promise((t,r)=>{const l=e.transaction(la,"readonly").objectStore(la).get(s);l.onsuccess=()=>{e.close();const u=l.result;t(u?u.data:null)},l.onerror=()=>r(l.error)})}function Vw(s,e){const t=new Blob([JSON.stringify(e)],{type:"application/json"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=s,o.click(),setTimeout(()=>URL.revokeObjectURL(r),2e3)}const dc={house:{name:"집",wood:20,stone:5,time:40,desc:"주민 4명 수용",color:"#c98f5e"},storage:{name:"창고",wood:15,stone:10,time:30,desc:"자원 상한 +200",color:"#8a6f4d"},farm:{name:"농장",wood:10,stone:0,time:25,desc:"식량 생산",color:"#7fae4c"},lumber:{name:"벌목장",wood:10,stone:5,time:25,desc:"목재 채집 속도+",color:"#6b4a2f"},quarry:{name:"채석장",wood:10,stone:5,time:25,desc:"석재 채집 속도+",color:"#8d8d99"}};function Yt(s,e,t,r){return Math.hypot(s-t,e-r)}function Of(s,e){let t=null,r=7;for(const o of e){const l=Yt(s.x,s.z,o.x,o.z);l<r&&(r=l,t=o)}return t}function Gw(s,e){let t=null,r=1/0;for(const o of e){if(!o.alive||o.growth<.6)continue;const l=Yt(s.x,s.z,o.x,o.z);l<r&&(r=l,t=o)}return t}function Ww(s,e){let t=null,r=1/0;for(const o of e){if(!o.alive||o.amount<=0)continue;const l=Yt(s.x,s.z,o.x,o.z);l<r&&(r=l,t=o)}return t}function Xw(s,e,t){let r=null,o=1/0;for(const l of e){if(!l.alive||l.food<=0)continue;const u=Yt(s.x,s.z,l.x,l.z);u<o&&(o=u,r={x:l.x,z:l.z,bushId:l.id})}for(const l of t){if(!l.complete)continue;const u=Yt(s.x,s.z,l.x,l.z);u<o*.8&&(o=u,r={x:l.x+1.5,z:l.z+1.5,farmId:l.id})}return r}function kh(s){let e=null;for(const t of s)t.complete||(!e||t.progress>e.progress)&&(e=t);return e}function $l(s,e){let t=null,r=1/0;for(const o of s){if(!o.complete||o.kind!=="storage"&&o.kind!=="house")continue;const l=Yt(e.x,e.z,o.x,o.z);l<r&&(r=l,t=o)}return t??s.find(o=>o.complete)??null}function wi(s,e,t,r){if(e.targetX!==null&&Math.abs(e.targetX-t)<.5&&e.targetZ!==null&&Math.abs(e.targetZ-r)<.5&&e.pathIdx<e.path.length)return!0;const o=Ow({size:s.size,heights:s.heights,waterLevel:s.waterLevel,blocked:s.blocked},e.x,e.z,t,r);return o?(e.path=o.path,e.pathIdx=0,e.targetX=t,e.targetZ=r,!0):Yt(e.x,e.z,t,r)<3?(e.path=[{x:t,z:r}],e.pathIdx=0,e.targetX=t,e.targetZ=r,!0):!1}function Ti(s,e){if(s.pathIdx>=s.path.length)return!0;let t=s.speed*e,r=0;for(;t>0&&s.pathIdx<s.path.length&&r++<4;){const o=s.path[s.pathIdx],l=Yt(s.x,s.z,o.x,o.z);if(l<.15){s.pathIdx++;continue}const u=Math.min(t,l);if(s.x+=(o.x-s.x)/l*u,s.z+=(o.z-s.z)/l*u,t-=u,u>=l-1e-6)s.pathIdx++;else break}return s.pathIdx>=s.path.length}function Bh(s,e){const t=[],r=Of(s,e.fires),o=e.buildings.filter(m=>!m.complete).length,l=s.carry.wood+s.carry.stone+s.carry.food;t.push({action:"회피",score:r?100:0,reason:r?`화재 발생 (${Math.round(Yt(s.x,s.z,r.x,r.z))}칸) — 안전지대로 대피`:""}),t.push({action:"식사",score:s.hunger<25?95:s.hunger<45?60:s.hunger<60&&e.resources.food>5?25:0,reason:`배고픔 ${Math.round(s.hunger)} — 식량 섭취 필요`}),t.push({action:"휴식",score:s.fatigue>85?80:s.fatigue>65?45:s.fatigue>50?15:0,reason:`피로도 ${Math.round(s.fatigue)} — 휴식 필요`}),t.push({action:"운반",score:l>=s.carryCap*.7?85:l>0&&o===0?70:l>0?55:0,reason:`적재 ${l}/${s.carryCap} — 창고로 운반`}),t.push({action:"건설",score:o>0?(s.job==="건설자"?75:60)+(l>0?-20:0):0,reason:`미완성 건물 ${o}채 — 건설 지원`});const u=e.resources.wood<30,h=e.resources.stone<20,f=e.resources.food<e.villagers.length*4;return t.push({action:"벌목",score:s.carry.wood+s.carry.stone+s.carry.food>0?0:u?s.job==="목수"?65:50:30,reason:`비축 목재 ${Math.floor(e.resources.wood)} — 벌목 필요`}),t.push({action:"채석",score:s.carry.wood+s.carry.stone+s.carry.food>0?0:h?s.job==="석공"?65:50:25,reason:`비축 석재 ${Math.floor(e.resources.stone)} — 채석 필요`}),t.push({action:"식량탐색",score:s.carry.wood+s.carry.stone+s.carry.food>0?0:f||s.hunger<70?s.job==="농부"?70:55:20,reason:`비축 식량 ${Math.floor(e.resources.food)} — 식량 확보`}),t.push({action:"농사",score:e.buildings.some(m=>m.kind==="farm"&&m.complete)&&l===0?35:0,reason:"농장에서 작물 수확"}),t.push({action:"귀가",score:e.env.timeOfDay<5||e.env.timeOfDay>21?40:0,reason:"심야 — 마을로 복귀"}),t.push({action:"대기",score:5,reason:"할 일이 없어 대기"}),t.sort((m,_)=>_.score-m.score)}function jw(s,e,t){const r=s.villagers.map(d=>({...d,path:[...d.path],carry:{...d.carry}}));let o=s.trees.map(d=>({...d})),l=s.rocks.map(d=>({...d})),u=s.bushes.map(d=>({...d})),h=s.buildings.map(d=>({...d,required:{...d.required},delivered:{...d.delivered}}));const f={...s.resources},m=new Set,_=new Set,g=new Set,y=h.some(d=>d.kind==="lumber"&&d.complete)?1.5:1,M=h.some(d=>d.kind==="quarry"&&d.complete)?1.5:1;for(const d of r){d.hunger=Math.max(0,d.hunger-e*.55),d.action==="휴식"?d.fatigue=Math.max(0,d.fatigue-e*9):d.fatigue=Math.min(100,d.fatigue+e*.5),d.hunger<=0?d.health=Math.max(0,d.health-e*2.5):d.hunger>50&&d.fatigue<70&&(d.health=Math.min(100,d.health+e*1.2));const w=Of(d,s.fires);if(w&&Yt(d.x,d.z,w.x,w.z)<2.5&&(d.health=Math.max(0,d.health-e*12)),d.health<=0){m.add(d.id);continue}if(((t+d.id)%5===0||d.action==="대기"||d.pathIdx>=d.path.length)&&d.action!=="운반"){const A=Bh(d,{...s,resources:f,villagers:r,buildings:h})[0];A.action!==d.action&&A.score>10?(d.action=A.action==="이동"?"대기":A.action,d.reason=A.reason||`${A.action} 선택 (점수 ${Math.round(A.score)})`,d.targetX=null,d.targetZ=null,d.path=[],d.pathIdx=0):d.action==="대기"&&(d.reason=A.reason)}if(d.action==="운반"&&d.carry.wood+d.carry.stone+d.carry.food<=0){const T=Bh(d,{...s,resources:f,villagers:r,buildings:h});d.action=T[0].action,d.reason=T[0].reason,d.path=[],d.pathIdx=0,d.targetX=null,d.targetZ=null}switch(d.action){case"회피":{const T=Of(d,s.fires);if(!T){d.action="대기",d.reason="위험 해소 — 복귀";break}const A=d.x-T.x,E=d.z-T.z,F=Math.max(.001,Math.hypot(A,E)),N=Math.max(1,Math.min(s.size-2,d.x+A/F*8)),D=Math.max(1,Math.min(s.size-2,d.z+E/F*8));d.reason=`화재 회피 중 — (${Math.round(N)}, ${Math.round(D)})로 대피`,wi(s,d,N,D)?Ti(d,e):(d.x=N,d.z=D,d.path=[]);break}case"식사":{if(d.carry.food>0){const T=Math.min(d.carry.food,5);d.carry.food-=T,d.hunger=Math.min(100,d.hunger+T*7),d.health=Math.min(100,d.health+T*1.5),d.reason=`휴대 식량 섭취 (+${T*7} 포만)`,d.carry.food<=0&&d.hunger>60&&(d.action="대기",d.path=[])}else if(f.food>=5){const T=$l(h,d);T&&Yt(d.x,d.z,T.x,T.z)>2?(d.reason=`창고에서 식량 수령 이동 중 (비축 ${Math.floor(f.food)})`,wi(s,d,T.x+1,T.z+1)&&Ti(d,e)&&(f.food-=5,d.hunger=Math.min(100,d.hunger+35),d.reason="창고 식량 섭취 (포만 +35)",d.hunger>60&&(d.action="대기"))):(f.food-=5,d.hunger=Math.min(100,d.hunger+35),d.reason="창고 식량 섭취 (포만 +35)",d.hunger>60&&(d.action="대기"))}else d.action="식량탐색",d.reason=`비축 식량 고갈(${Math.floor(f.food)}) — 직접 채집 전환`,d.path=[],d.targetX=null;break}case"휴식":{const T=h.find(A=>A.id===d.homeId&&A.complete)??$l(h,d);T&&Yt(d.x,d.z,T.x,T.z)>3?(d.reason=`휴식 위해 귀가 중 (피로 ${Math.round(d.fatigue)})`,wi(s,d,T.x+1,T.z)&&Ti(d,e)):(d.reason=`휴식 중 (피로 ${Math.round(d.fatigue)} → 회복)`,d.fatigue<=5&&(d.action="대기",d.reason="휴식 완료 — 복귀"));break}case"벌목":{const T=Gw(d,o);if(!T){kh(h)?(d.action="건설",d.reason="벌목할 나무 없음 — 건설 지원"):(d.action="대기",d.reason="성숙한 나무 없음 — 대기",d.idleTicks++),d.path=[];break}if(Yt(d.x,d.z,T.x,T.z)>1.6){if(d.reason=`벌목 이동 중 → 나무 #${T.id} (${Math.round(Yt(d.x,d.z,T.x,T.z))}칸)`,!wi(s,d,T.x,T.z)){d.reason="도달 불가 나무 — 다른 나무 탐색",d.targetX=null,d.path=[];break}Ti(d,e)}else if(d.fatigue=Math.min(100,d.fatigue+e*2),d.reason=`벌목 중 — 나무 #${T.id}`,d.idleTicks+=e*y,d.idleTicks>3){d.idleTicks=0,_.add(T.id);const A=Math.min(d.carryCap-d.carry.wood,5);d.carry.wood+=A,d.reason=`벌목 완료 — 목재 +${A} 획득`,d.action="운반",d.path=[],d.targetX=null}break}case"채석":{const T=Ww(d,l);if(!T){kh(h)?(d.action="건설",d.reason="채석할 바위 없음 — 건설 지원"):(d.action="대기",d.reason="채석할 바위 없음 — 대기"),d.path=[];break}if(Yt(d.x,d.z,T.x,T.z)>1.6){if(d.reason=`채석 이동 중 → 바위 #${T.id}`,!wi(s,d,T.x,T.z)){d.targetX=null,d.path=[];break}Ti(d,e)}else if(d.fatigue=Math.min(100,d.fatigue+e*2),d.reason=`채석 중 — 바위 #${T.id} (잔량 ${T.amount})`,d.idleTicks+=e*M,d.idleTicks>3){d.idleTicks=0;const A=Math.min(T.amount,4,d.carryCap-d.carry.stone);T.amount-=A,d.carry.stone+=A,T.amount<=0&&(T.alive=!1,g.add(T.id)),d.reason=`채석 완료 — 석재 +${A} 획득`,d.action="운반",d.path=[],d.targetX=null}break}case"식량탐색":case"농사":{const T=h.filter(E=>E.kind==="farm"&&E.complete),A=Xw(d,u,T);if(!A){d.action="대기",d.reason="채집할 식량 없음 — 대기 (기근 주의)",d.path=[];break}if(Yt(d.x,d.z,A.x,A.z)>1.6){if(d.reason=`식량 확보 이동 중 (${Math.round(Yt(d.x,d.z,A.x,A.z))}칸)`,!wi(s,d,A.x,A.z)){d.targetX=null,d.path=[];break}Ti(d,e)}else if(A.bushId!=null){const E=u.find(F=>F.id===A.bushId);if(E&&E.food>0){if(d.idleTicks+=e,d.reason=`열매 채집 중 — 덤불 #${E.id}`,d.idleTicks>2){d.idleTicks=0;const F=Math.min(E.food,4,d.carryCap-d.carry.food);E.food-=F,d.carry.food+=F,d.reason=`채집 완료 — 식량 +${F}`,d.action=F>0?"운반":"대기",d.path=[],d.targetX=null}}else d.path=[],d.targetX=null}else if(d.idleTicks+=e,d.reason="농장 수확 중",d.idleTicks>2.5){d.idleTicks=0;const E=Math.min(6,d.carryCap-d.carry.food);d.carry.food+=E,d.reason=`농장 수확 — 식량 +${E}`,d.action="운반",d.path=[],d.targetX=null}break}case"운반":{const T=$l(h,d);if(!T){d.action="대기",d.reason="창고 없음 — 대기";break}if(Yt(d.x,d.z,T.x,T.z)>2.2){if(d.reason=`운반 중 → 창고 (목${d.carry.wood} 석${d.carry.stone} 식${d.carry.food})`,!wi(s,d,T.x+1,T.z+1)){f.wood=Math.min(f.capacity,f.wood+d.carry.wood),f.stone=Math.min(f.capacity,f.stone+d.carry.stone),f.food=Math.min(f.capacity,f.food+d.carry.food),d.reason="경로 차단 — 현장 하역(창고 외 비축 반영)",d.carry={wood:0,stone:0,food:0},d.action="대기";break}Ti(d,e)}else f.wood=Math.min(f.capacity,f.wood+d.carry.wood),f.stone=Math.min(f.capacity,f.stone+d.carry.stone),f.food=Math.min(f.capacity,f.food+d.carry.food),d.reason=`하역 완료 (목+${d.carry.wood} 석+${d.carry.stone} 식+${d.carry.food}) → 창고 반영`,d.carry={wood:0,stone:0,food:0},d.action="대기",d.path=[],d.targetX=null;break}case"건설":{const T=kh(h);if(!T){d.action="대기",d.reason="건설할 건물 없음";break}if(Yt(d.x,d.z,T.x,T.z)>2.6){if(d.reason=`${T.kind} 건설 현장으로 이동 중 (진척 ${Math.round(T.progress*100)}%)`,!wi(s,d,T.x+2,T.z)){d.targetX=null,d.path=[];break}Ti(d,e)}else{d.fatigue=Math.min(100,d.fatigue+e*1.5);const A=(d.job==="건설자"?1.6:1)/30;T.progress=Math.min(1,T.progress+A*e*10*.3),d.reason=`건설 중 — ${T.kind} ${Math.round(T.progress*100)}% (작업자 ${d.name})`,T.progress>=1&&(T.complete=!0,d.reason=`${T.kind} 완성!`,d.action="대기",d.path=[])}break}case"귀가":{const T=h.find(A=>A.id===d.homeId&&A.complete)??$l(h,d);T&&Yt(d.x,d.z,T.x,T.z)>3?(d.reason="심야 — 마을로 복귀 중",wi(s,d,T.x+1,T.z)&&Ti(d,e)):(d.reason="마을에서 대기 중 (심야)",d.fatigue=Math.max(0,d.fatigue-e*3));break}default:{if(d.idleTicks+=e,d.idleTicks>2){d.idleTicks=0;const T=Bh(d,{...s,resources:f,villagers:r,buildings:h});if(T[0].score>10)d.action=T[0].action,d.reason=T[0].reason,d.path=[],d.targetX=null;else{const A=Math.max(1,Math.min(s.size-2,d.x+(Math.random()-.5)*6)),E=Math.max(1,Math.min(s.size-2,d.z+(Math.random()-.5)*6));wi(s,d,A,E)&&(d.reason="주변 순찰 중",Ti(d,e*.4))}}break}}d.x=Math.max(.5,Math.min(s.size-1.5,d.x)),d.z=Math.max(.5,Math.min(s.size-1.5,d.z));const x=Math.round(d.z)*s.size+Math.round(d.x);s.heights[x]<s.waterLevel&&(d.pathIdx>0&&d.path[d.pathIdx-1]&&(d.x=d.path[d.pathIdx-1].x,d.z=d.path[d.pathIdx-1].z),d.path=[],d.targetX=null,d.targetZ=null,(d.action==="이동"||d.action==="대기")&&(d.reason="물 진입 회피 — 경로 재탐색"))}return _.size>0&&(o=o.filter(d=>!_.has(d.id))),g.size>0&&(l=l.filter(d=>!g.has(d.id))),{villagers:r.filter(d=>!m.has(d.id)),trees:o,rocks:l,bushes:u,buildings:h,resources:f}}function Yw(s,e,t){const r={};let o=s.timeOfDay+e*24/480,l=s.day;o>=24&&(o-=24,l+=1),r.timeOfDay=o,r.day=l;let{weather:u,weatherT:h,raining:f}=s;if(h-=e,h<=0){const _=Math.random();t>0&&_<.55?(u="비",h=30+Math.random()*40):_<.62?(u="맑음",h=60+Math.random()*90):_<.88?(u="비",h=25+Math.random()*40):(u="폭풍",h=15+Math.random()*20)}return f+=((u==="맑음"?0:u==="비"?.6:1)-f)*Math.min(1,e*.5),r.weather=u,r.weatherT=h,r.raining=f,r}function qw(s){const e=(s-6)/12*Math.PI;return s<5.5||s>18.5?.06:.25+.95*Math.max(0,Math.sin(e))}function $w(s){return s<5.5||s>18.5}const Kl="world-forge-save-v1";let i0=1,Ff="",zf=0;function Hh(s,e,t){const r=s(),o=Date.now();if(t===Ff&&o-zf<1e3&&r.undoStack.length>0)return;Ff=t,zf=o;const l={label:t,heights:new Float32Array(r.heights),trees:structuredClone(r.trees),rocks:structuredClone(r.rocks),bushes:structuredClone(r.bushes),buildings:structuredClone(r.buildings),villagers:structuredClone(r.villagers),animals:structuredClone(r.animals),resources:{...r.resources}},u=[...r.undoStack,l].slice(-30);e({undoStack:u,redoStack:[]})}function r0(s,e){return{heights:new Float32Array(e.heights),trees:structuredClone(e.trees),rocks:structuredClone(e.rocks),bushes:structuredClone(e.bushes),buildings:structuredClone(e.buildings),villagers:structuredClone(e.villagers),animals:structuredClone(e.animals),resources:{...e.resources}}}function Vh(s){let e=0,t=100;for(const r of s)r.complete&&(r.kind==="house"&&(e+=4),r.kind==="storage"&&(t+=200));return{housing:e,capacity:t}}const tt=Rw((s,e)=>({ready:!1,seed:"forge-1",terrain:{...Pw},heights:new Float32Array(0),biomes:new Uint8Array(0),blocked:new Uint8Array(0),trees:[],rocks:[],bushes:[],buildings:[],villagers:[],animals:[],fires:[],resources:{wood:40,stone:20,food:60,capacity:100,population:0,housing:0},env:{timeOfDay:9,day:1,weather:"맑음",weatherT:60,raining:0},simTime:0,speed:1,tool:"select",brushRadius:3,brushStrength:.5,selection:null,showPaths:!0,nextId:1,undoStack:[],redoStack:[],fps:0,aiMs:0,tickCount:0,notice:"",dirty:!1,initWorld:(t,r)=>{const o=r??e().terrain,l=Dw(t,o),u=o.size,h=new Uint8Array(u*u),f=new rc(t+":pop"),m=l.trees.map((D,O)=>({id:O+1,x:D.x,z:D.z,kind:D.kind,growth:1,alive:!0})),_=l.rocks.map((D,O)=>({id:1e5+O+1,x:D.x,z:D.z,alive:!0,amount:3})),g=l.bushes.map((D,O)=>({id:2e5+O+1,x:D.x,z:D.z,alive:!0,food:2,regrow:0}));let y=3e5;const M=u/2,d=u/2;let w=Math.round(M),S=Math.round(d);if(l.heights[S*u+w]<o.waterLevel+.03){let D={x:w,z:S,d:1/0};for(let O=0;O<u;O+=2)for(let P=0;P<u;P+=2)if(l.heights[O*u+P]>o.waterLevel+.05){const R=Math.hypot(P-M,O-d);R<D.d&&(D={x:P,z:O,d:R})}w=D.x,S=D.z}const x=[{id:y++,kind:"house",x:w,z:S,progress:1,required:{wood:0,stone:0},delivered:{wood:0,stone:0},complete:!0},{id:y++,kind:"storage",x:w+4,z:S+2,progress:1,required:{wood:0,stone:0},delivered:{wood:0,stone:0},complete:!0}],T=["목수","석공","농부","운반꾼","건설자","무직","목수","농부","운반꾼","무직"],A=[];for(let D=0;D<10;D++)A.push({id:y++,name:Fh(f),job:T[D%T.length],x:w+f.range(-4,4),z:S+f.range(-4,4),hunger:f.range(55,90),fatigue:f.range(5,35),health:f.range(80,100),action:"대기",reason:"마을에 정착했습니다.",targetX:null,targetZ:null,path:[],pathIdx:0,carry:{wood:0,stone:0,food:0},carryCap:10,speed:4.2,homeId:x[0].id,workId:null,idleTicks:0});const E=[];for(let D=0;D<8;D++)E.push({id:y++,kind:D%2===0?"deer":"rabbit",x:w+f.range(-18,18),z:S+f.range(-18,18),path:[],pathIdx:0,retarget:f.range(0,5)});const{housing:F,capacity:N}=Vh(x);for(const D of x){const O=Math.round(D.x),P=Math.round(D.z);for(let R=-1;R<=1;R++)for(let I=-1;I<=1;I++){const j=O+I,W=P+R;j>=0&&W>=0&&j<u&&W<u&&(h[W*u+j]=1)}}ql(),i0=1,Ff="",zf=0,s({ready:!0,seed:t,terrain:{...o},heights:l.heights,biomes:l.biomes,blocked:h,trees:m,rocks:_,bushes:g,buildings:x,villagers:A,animals:E,fires:[],resources:{wood:40,stone:20,food:60,capacity:N,population:A.length,housing:F},env:{timeOfDay:9,day:1,weather:"맑음",weatherT:90,raining:0},simTime:0,nextId:y,undoStack:[],redoStack:[],selection:null,notice:`시드 "${t}" 월드 생성 완료 — 주민 10명 정착`,tickCount:0,dirty:!1})},regenerate:()=>{e().initWorld(e().seed,e().terrain)},setTool:t=>s({tool:t}),setBrush:(t,r)=>s({brushRadius:Math.max(1,Math.min(10,t)),brushStrength:Math.max(.05,Math.min(1,r))}),setSpeed:t=>s({speed:t}),setSelection:t=>s({selection:t}),togglePaths:()=>s(t=>({showPaths:!t.showPaths})),setNotice:t=>s({notice:t}),rebuildBlocked:()=>{const t=e(),r=t.terrain.size,o=new Uint8Array(r*r);for(const l of t.buildings){const u=Math.round(l.x),h=Math.round(l.z);for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++){const _=u+m,g=h+f;_>=0&&g>=0&&_<r&&g<r&&(o[g*r+_]=1)}}s({blocked:o}),ql()},applyBrushAt:(t,r)=>{const o=e();if(!o.ready)return;const l=o.tool;if(l!=="raise"&&l!=="lower"&&l!=="flatten"&&l!=="water")return;Hh(e,M=>s(M),l);const u=o.terrain.size,h=new Float32Array(o.heights),f=o.brushRadius,m=o.brushStrength*.02,_=Math.round(t),g=Math.round(r);let y=0;l==="flatten"&&(y=h[Math.max(0,Math.min(u-1,g))*u+Math.max(0,Math.min(u-1,_))]);for(let M=-Math.ceil(f);M<=Math.ceil(f);M++)for(let d=-Math.ceil(f);d<=Math.ceil(f);d++){const w=_+d,S=g+M;if(w<0||S<0||w>=u||S>=u)continue;const x=Math.sqrt(d*d+M*M);if(x>f)continue;const T=1-x/(f+.001),A=S*u+w;l==="raise"?h[A]=Math.min(1,h[A]+m*T):l==="lower"?h[A]=Math.max(0,h[A]-m*T):l==="flatten"?h[A]+=(y-h[A])*Math.min(1,m*4*T):l==="water"&&(h[A]=Math.max(0,h[A]-m*1.6*T))}s({heights:h,dirty:!0}),ql()},clickAt:(t,r)=>{const o=e();if(!o.ready)return;const l=o.tool,u=o.terrain.size,h=Math.max(0,Math.min(u-1,t)),f=Math.max(0,Math.min(u-1,r)),_=o.heights[Math.round(f)*u+Math.round(h)]<o.terrain.waterLevel,g=d=>Hh(e,w=>s(w),d);if(l==="select"){let d=null,w=2.5;for(const S of o.villagers){const x=Math.hypot(S.x-h,S.z-f);x<w&&(w=x,d={kind:"villager",id:S.id})}for(const S of o.buildings){const x=Math.hypot(S.x-h,S.z-f);x<w+1&&(w=x,d={kind:"building",id:S.id})}for(const S of o.animals){const x=Math.hypot(S.x-h,S.z-f);x<w&&(w=x,d={kind:"animal",id:S.id})}s({selection:d});return}if(l==="plantTree"){if(_){s({notice:"물에는 나무를 심을 수 없습니다."});return}g("나무 심기");const d=o.nextId++;s(w=>({trees:[...w.trees,{id:d,x:h,z:f,kind:"tree",growth:.4,alive:!0}],nextId:d+1,dirty:!0,notice:"나무를 심었습니다."}));return}if(l==="removeVeg"||l==="bulldoze"){g("제거");let d=o.trees,w=o.rocks,S=o.bushes,x=o.buildings,T=o.villagers,A=o.animals;const E=l==="bulldoze"?2.5:1.8;d=d.filter(D=>Math.hypot(D.x-h,D.z-f)>E),w=w.filter(D=>Math.hypot(D.x-h,D.z-f)>E),S=S.filter(D=>Math.hypot(D.x-h,D.z-f)>E),l==="bulldoze"&&(x=x.filter(D=>Math.hypot(D.x-h,D.z-f)>E),o.villagers.length-T.length,T=T.filter(D=>Math.hypot(D.x-h,D.z-f)>E),A=A.filter(D=>Math.hypot(D.x-h,D.z-f)>E)),s({trees:d,rocks:w,bushes:S,buildings:x,villagers:T,animals:A,dirty:!0,notice:"오브젝트를 제거했습니다."}),e().rebuildBlocked();const{housing:F,capacity:N}=Vh(e().buildings);s(D=>({resources:{...D.resources,housing:F,capacity:Math.max(N,D.resources.wood+D.resources.stone+D.resources.food)}}));return}if(l==="spawnVillager"){if(_){s({notice:"물에는 주민을 생성할 수 없습니다."});return}g("주민 생성"),e().spawnVillagerAt(h,f);return}if(l==="spawnAnimal"){if(_){s({notice:"물에는 동물을 생성할 수 없습니다."});return}g("동물 생성");const d=e().nextId++;s(w=>({animals:[...w.animals,{id:d,kind:"rabbit",x:h,z:f,path:[],pathIdx:0,retarget:0}],nextId:d+1,dirty:!0}));return}if(l==="fire"){g("화재");const d=e().nextId++;s(w=>({fires:[...w.fires,{id:d,x:Math.round(h),z:Math.round(f),intensity:1}],nextId:d+1,dirty:!0,notice:"화재가 발생했습니다! 비가 오면 완화됩니다."}));return}const M={buildHouse:"house",buildStorage:"storage",buildFarm:"farm",buildLumber:"lumber",buildQuarry:"quarry"}[l];if(M){if(_){s({notice:"물에는 건물을 지을 수 없습니다."});return}const d=dc[M],w=e();if(w.resources.wood<d.wood||w.resources.stone<d.stone){s({notice:`자원이 부족합니다. 필요: 목재 ${d.wood}, 석재 ${d.stone} (보유: 목재 ${Math.floor(w.resources.wood)}, 석재 ${Math.floor(w.resources.stone)})`});return}g(`건설:${d.name}`);const S=w.nextId++;s(x=>({buildings:[...x.buildings,{id:S,kind:M,x:h,z:f,progress:0,required:{wood:d.wood,stone:d.stone},delivered:{wood:0,stone:0},complete:!1}],resources:{...x.resources,wood:x.resources.wood-d.wood,stone:x.resources.stone-d.stone},nextId:S+1,dirty:!0,notice:`${d.name} 착공 — 주민이 건설하러 갑니다.`})),e().rebuildBlocked();return}},spawnVillagerAt:(t,r)=>{var m;const o=e(),l=new rc(o.seed+":spawn:"+o.nextId+":"+i0++),u=["무직","목수","석공","농부","운반꾼","건설자"],h=o.nextId++,f=((m=o.buildings.find(_=>_.kind==="house"&&_.complete))==null?void 0:m.id)??null;s(_=>({villagers:[..._.villagers,{id:h,name:Fh(l),job:u[Math.floor(l.next()*u.length)],x:t,z:r,hunger:70,fatigue:10,health:100,action:"대기",reason:"새로 태어났습니다.",targetX:null,targetZ:null,path:[],pathIdx:0,carry:{wood:0,stone:0,food:0},carryCap:10,speed:4.2,homeId:f,workId:null,idleTicks:0}],resources:{..._.resources,population:_.villagers.length+1},nextId:h+1,dirty:!0,notice:"새 주민이 태어났습니다."}))},addLoadTestPopulation:(t,r)=>{const o=e();Hh(e,_=>s(_),"부하테스트");const l=new rc(o.seed+":load"),u=o.terrain.size;let h=o.nextId;const f=[];for(let _=0;_<t;_++){const g=l.range(5,u-6),y=l.range(5,u-6);f.push({id:h++,name:Fh(l),job:"무직",x:g,z:y,hunger:70,fatigue:10,health:100,action:"대기",reason:"부하 테스트 주민",targetX:null,targetZ:null,path:[],pathIdx:0,carry:{wood:0,stone:0,food:0},carryCap:10,speed:4.2,homeId:null,workId:null,idleTicks:0})}const m=[];for(let _=0;_<r;_++){const g=l.range(2,u-3),y=l.range(2,u-3);o.heights[Math.round(y)*u+Math.round(g)]<o.terrain.waterLevel||m.push({id:h++,x:g,z:y,kind:l.next()<.5?"tree":"pine",growth:1,alive:!0})}s(_=>({villagers:[..._.villagers,...f],trees:[..._.trees,...m],nextId:h,resources:{..._.resources,population:_.villagers.length+f.length},dirty:!0,notice:`부하 테스트: 주민 +${f.length}, 나무 +${m.length}`}))},tick:t=>{const r=e();if(!r.ready||r.speed===0)return;const o=performance.now(),l=Yw(r.env,t,r.fires.length),u={size:r.terrain.size,heights:r.heights,waterLevel:r.terrain.waterLevel,blocked:r.blocked,trees:r.trees,rocks:r.rocks,bushes:r.bushes,buildings:r.buildings,villagers:r.villagers,animals:r.animals,fires:r.fires,resources:r.resources,env:{...r.env,...l},simTime:r.simTime},h=jw(u,t,r.tickCount),f=performance.now()-o,m=r.terrain.size,_=Math.random,g=r.animals.map(I=>({...I}));let y=r.fires.map(I=>({...I}));const M=l.raining??r.env.raining,d=[],w=new Set;if(y.length>0){let I=r.nextId;for(const j of y){j.intensity+=t*(M>.3?-.5:.12);for(const W of r.trees)W.alive&&Math.hypot(W.x-j.x,W.z-j.z)<2.2&&Math.random()<t*.25*j.intensity&&(w.add(W.id),Math.random()<.4&&d.length+y.length<40&&d.push({id:I++,x:Math.round(W.x),z:Math.round(W.z),intensity:.7}))}y=[...y,...d].filter(j=>j.intensity>.05),y.length===0&&s({notice:"화재가 진압되었습니다."}),s({nextId:I})}const S=h.trees;for(const I of S)I.alive&&I.growth<1&&(I.growth=Math.min(1,I.growth+t*.01));let x=[];if(r.tickCount%600===0&&S.filter(I=>I.alive).length<m*m*.05){let I=e().nextId;for(let j=0;j<6;j++){const W=2+Math.random()*(m-4),te=2+Math.random()*(m-4);r.heights[Math.round(te)*m+Math.round(W)]<r.terrain.waterLevel+.02||x.push({id:I++,x:W,z:te,kind:Math.random()<.5?"tree":"pine",growth:.2,alive:!0})}x.length&&s({nextId:I})}const T=h.bushes.map(I=>({...I}));for(const I of T)I.food<2&&(I.regrow+=t,I.regrow>40&&(I.food=2,I.regrow=0));let A=0;const E=r.buildings.filter(I=>I.kind==="farm"&&I.complete);if(E.length>0&&Math.floor(r.simTime)!==Math.floor(r.simTime+t))for(const I of E)_()<.09*E.length&&(A+=1);const F=h.buildings,{housing:N,capacity:D}=Vh(F),O={wood:Math.min(D,h.resources.wood+0),stone:Math.min(D,h.resources.stone),food:Math.min(D,h.resources.food+A),capacity:D,population:h.villagers.length,housing:N},P=t*(24/480);let R=(l.timeOfDay??r.env.timeOfDay)+P*0;R=l.timeOfDay??r.env.timeOfDay,s({trees:w.size?S.filter(I=>!w.has(I.id)):[...S,...x],rocks:h.rocks,bushes:T,buildings:F,villagers:h.villagers,animals:g.map(I=>{if(I.retarget-=t,I.pathIdx>=I.path.length||I.retarget<=0){const j=Math.max(1,Math.min(m-2,I.x+(Math.random()-.5)*24)),W=Math.max(1,Math.min(m-2,I.z+(Math.random()-.5)*24)),te=j-I.x,ue=W-I.z,oe=Math.max(2,Math.floor(Math.hypot(te,ue)));I.path=Array.from({length:oe},(fe,H)=>({x:I.x+te*(H+1)/oe,z:I.z+ue*(H+1)/oe})),I.pathIdx=0,I.retarget=6+Math.random()*8}else{const j=I.path[I.pathIdx],W=Math.hypot(j.x-I.x,j.z-I.z),te=t*1.6;W<te?I.pathIdx++:(I.x+=(j.x-I.x)/W*te,I.z+=(j.z-I.z)/W*te),r.heights[Math.max(0,Math.min(m-1,Math.round(I.z)))*m+Math.max(0,Math.min(m-1,Math.round(I.x)))]<r.terrain.waterLevel&&(I.x-=(j.x-I.x)/Math.max(.001,W)*te*2,I.z-=(j.z-I.z)/Math.max(.001,W)*te*2,I.retarget=0)}return I}),fires:y,resources:O,env:{...r.env,...l,timeOfDay:R},simTime:r.simTime+t,aiMs:f,tickCount:r.tickCount+1,dirty:!0})},undo:()=>{const t=e(),r=t.undoStack[t.undoStack.length-1];if(!r){s({notice:"되돌릴 작업이 없습니다."});return}const o={label:"redo",heights:new Float32Array(t.heights),trees:structuredClone(t.trees),rocks:structuredClone(t.rocks),bushes:structuredClone(t.bushes),buildings:structuredClone(t.buildings),villagers:structuredClone(t.villagers),animals:structuredClone(t.animals),resources:{...t.resources}};s({...r0(t,r),undoStack:t.undoStack.slice(0,-1),redoStack:[...t.redoStack,o],notice:`되돌림: ${r.label}`}),e().rebuildBlocked()},redo:()=>{const t=e(),r=t.redoStack[t.redoStack.length-1];if(!r){s({notice:"다시 실행할 작업이 없습니다."});return}const o={label:"undo",heights:new Float32Array(t.heights),trees:structuredClone(t.trees),rocks:structuredClone(t.rocks),bushes:structuredClone(t.bushes),buildings:structuredClone(t.buildings),villagers:structuredClone(t.villagers),animals:structuredClone(t.animals),resources:{...t.resources}};s({...r0(t,r),redoStack:t.redoStack.slice(0,-1),undoStack:[...t.undoStack,o],notice:"다시 실행했습니다."}),e().rebuildBlocked()},save:async()=>{e();const t=e().exportJson();await Bw(Kl,t);try{localStorage.setItem(Kl,JSON.stringify(t))}catch{}s({dirty:!1,notice:"저장 완료 (IndexedDB + 로컬 백업)"})},load:async()=>{let t=null;try{t=await Hw(Kl)}catch{t=null}if(!t)try{const o=localStorage.getItem(Kl);o&&(t=JSON.parse(o))}catch{t=null}if(!t)return s({notice:"저장된 데이터가 없습니다."}),!1;const r=e().importJson(t);return s({notice:r?"불러오기 완료":"불러오기 실패 (데이터 손상)"}),r},exportJson:()=>{const t=e();return{version:1,seed:t.seed,terrain:t.terrain,heights:Array.from(t.heights),biomes:Array.from(t.biomes),trees:t.trees,rocks:t.rocks,bushes:t.bushes,buildings:t.buildings,villagers:t.villagers,animals:t.animals,fires:t.fires,resources:t.resources,env:t.env,simTime:t.simTime,nextId:t.nextId}},importJson:t=>{try{const r=t;if(!r.seed||!r.terrain||!r.heights)return!1;const o=r.terrain.size;return r.heights.length!==o*o?!1:(s({ready:!0,seed:r.seed,terrain:r.terrain,heights:new Float32Array(r.heights),biomes:new Uint8Array(r.biomes),trees:r.trees??[],rocks:r.rocks??[],bushes:r.bushes??[],buildings:r.buildings??[],villagers:r.villagers??[],animals:r.animals??[],fires:r.fires??[],resources:r.resources,env:r.env,simTime:r.simTime??0,nextId:r.nextId??1e6,undoStack:[],redoStack:[],selection:null}),e().rebuildBlocked(),ql(),!0)}catch{return!1}},reset:()=>{e().initWorld(e().seed,e().terrain)}}));function Kw(s,e,t){return s<e-.06?[.16,.32,.55]:s<e-.015?[.3,.5,.62]:s<e+.015?[.87,.78,.55]:s>.78?[.62,.62,.68]:s>.62?[.45,.42,.33]:t>.55?[.16,.42,.2]:[.42,.62,.3]}function Zw(){const s=ns.useRef(null);return ns.useEffect(()=>{const e=s.current;if(!e)return;const t=new z1({antialias:!0});t.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.setSize(e.clientWidth,e.clientHeight),t.shadowMap.enabled=!0,t.shadowMap.type=l0,e.appendChild(t.domElement);const r=new k1;r.background=new _t(8893910),r.fog=new ac(8893910,90,260);const o=new ii(50,e.clientWidth/e.clientHeight,.1,1e3);o.position.set(40,42,40);const l=new fw(o,t.domElement);l.enableDamping=!0,l.maxPolarAngle=Math.PI*.49,l.minDistance=8,l.maxDistance=220,l.target.set(0,2,0);const u=new ow(16773853,2.2);u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.left=-70,u.shadow.camera.right=70,u.shadow.camera.top=70,u.shadow.camera.bottom=-70,r.add(u),r.add(u.target);const h=new iw(12441855,6979414,.7);r.add(h);const f=new aw(16777215,.15);r.add(f);const m=2;let _=[],g=null,y=null,M=null,d=null,w="",S=0;const x=()=>{const Ye=tt.getState(),Me=Ye.terrain.size,_e=Ye.terrain.waterLevel;for(const b of _)r.remove(b),b.geometry.dispose();_=[];const ot=Math.floor(Me/m);for(let b=0;b<m;b++)for(let K=0;K<m;K++){const me=K*ot,xe=b*ot,de=K===m-1?Me:me+ot+1,Ge=b===m-1?Me:xe+ot+1,Le=de-me,Ie=Ge-xe,at=new is(Le-1,Ie-1,Le-1,Ie-1);at.rotateX(-Math.PI/2);const ye=at.attributes.position,Fe=new Float32Array(ye.count*3);for(let ve=0;ve<ye.count;ve++){const We=Math.round(ye.getX(ve)+(Le-1)/2),it=Math.round(ye.getZ(ve)+(Ie-1)/2),vt=Math.min(Me-1,me+We),X=Math.min(Me-1,xe+it),Pe=Ye.heights[X*Me+vt],ae=(vt*73+X*149)%100/100;ye.setX(ve,vt-Me/2+0),ye.setZ(ve,X-Me/2+0),ye.setY(ve,Pe*Yl);const[ge,ze,Ne]=Kw(Pe,_e,ae),lt=Pe<_e?.85:1;Fe[ve*3]=ge*lt,Fe[ve*3+1]=ze*lt,Fe[ve*3+2]=Ne*lt}at.setAttribute("color",new jn(Fe,3)),at.computeVertexNormals();const et=new Wn({vertexColors:!0,roughness:.95,metalness:0}),ee=new hn(at,et);ee.receiveShadow=!0,r.add(ee),_.push(ee)}g&&(r.remove(g),g.geometry.dispose());const Ve=new is(Me,Me);Ve.rotateX(-Math.PI/2);const U=new Wn({color:4029892,transparent:!0,opacity:.72,roughness:.25,metalness:.1});g=new hn(Ve,U),g.position.y=_e*Yl+.12,g.receiveShadow=!0,r.add(g),y||(y=new hn(new hc(.9,1.1,40),new ia({color:16777215,transparent:!0,opacity:.9,side:mi})),y.rotation.x=-Math.PI/2,r.add(y)),M||(M=new hn(new hc(.7,.95,32),new ia({color:16766011,transparent:!0,opacity:.95,side:mi})),M.rotation.x=-Math.PI/2,r.add(M)),d=Ye.heights,w=`${Ye.seed}:${Me}:${_e}`,S=performance.now()},T=4e3,A=400,E=new qt,F=(Ye,Me,_e)=>{const ot=new Og(Ye,Me,_e);return ot.castShadow=!0,ot.receiveShadow=!0,ot.frustumCulled=!1,ot.count=0,r.add(ot),ot},N=F(new _c(.14,.2,1.1,6),new Wn({color:7031343,roughness:.9}),T),D=F(new Js(.85,1.9,7),new Wn({color:3111477,roughness:.85}),T),O=F(new Js(.8,2.4,7),new Wn({color:2055214,roughness:.85}),T),P=F(new td(.55,0),new Wn({color:9276825,roughness:.95}),800),R=F(new fc(.55,8,6),new Wn({color:5020223,roughness:.9}),1200),I=F(new uc(.28,.7,4,8),new Wn({roughness:.7}),A),j=F(new fc(.24,10,8),new Wn({color:15911067,roughness:.7}),A),W=F(new uc(.22,.55,4,8),new Wn({color:11569492,roughness:.8}),200),te=F(new uo(1.8,1.3,1.8),new Wn({color:14267266,roughness:.85}),220),ue=F(new Js(1.5,1.1,4),new Wn({color:10701358,roughness:.85}),220),oe=F(new Js(.6,1.6,7),new Wn({color:16738816,emissive:16729088,emissiveIntensity:2}),60),fe=900,H=new yn;H.setAttribute("position",new jn(new Float32Array(fe*3),3));const he=new Bg(H,new k0({color:10470655,size:.35,transparent:!0,opacity:.7}));he.visible=!1,he.frustumCulled=!1,r.add(he);const ce=new na;r.add(ce);const k=new is(400,400);k.rotateX(-Math.PI/2);const se=new hn(k,new ia({visible:!1}));se.position.y=0,r.add(se);const ke=new cw,Q=new Oe,pe=Ye=>{const Me=t.domElement.getBoundingClientRect();Q.x=(Ye.clientX-Me.left)/Me.width*2-1,Q.y=-((Ye.clientY-Me.top)/Me.height)*2+1,ke.setFromCamera(Q,o);const _e=ke.intersectObjects(_,!1);if(_e.length>0){const ot=_e[0].point,Ve=tt.getState().terrain.size;return{x:ot.x+Ve/2,z:ot.z+Ve/2,y:ot.y}}return null};let Ae=!1;const Ee=Ye=>{if(Ye.button===2)return;const Me=tt.getState();if(Me.tool!=="select"){l.enableRotate=!1,Ae=!0;const _e=pe(Ye);_e&&(Me.tool==="raise"||Me.tool==="lower"||Me.tool==="flatten"||Me.tool==="water"?Me.applyBrushAt(_e.x,_e.z):Me.clickAt(_e.x,_e.z))}else{const _e=pe(Ye);_e&&tt.getState().clickAt(_e.x,_e.z)}},De=Ye=>{const Me=tt.getState(),_e=pe(Ye);if(y)if(_e&&(Me.tool==="raise"||Me.tool==="lower"||Me.tool==="flatten"||Me.tool==="water"||Me.tool==="plantTree")){y.visible=!0;const ot=Me.terrain.size;y.position.set(_e.x-ot/2,_e.y+.25,_e.z-ot/2);const Ve=Me.tool==="plantTree"?1.8:Me.brushRadius;y.scale.set(Ve,Ve,1)}else y.visible=!1;Ae&&_e&&(Me.tool==="raise"||Me.tool==="lower"||Me.tool==="flatten"||Me.tool==="water")&&Me.applyBrushAt(_e.x,_e.z)},Be=()=>{Ae=!1,l.enableRotate=!0};t.domElement.addEventListener("pointerdown",Ee),window.addEventListener("pointermove",De),window.addEventListener("pointerup",Be),t.domElement.addEventListener("contextmenu",Ye=>Ye.preventDefault());const nt=()=>{o.aspect=e.clientWidth/e.clientHeight,o.updateProjectionMatrix(),t.setSize(e.clientWidth,e.clientHeight)};window.addEventListener("resize",nt),x();let At=0;const mt=new lw,Ct=new _t;let Y=0;const nn=()=>{At=requestAnimationFrame(nn);const Ye=Math.min(.1,mt.getDelta());Y++;const Me=tt.getState(),_e=Me.terrain.size,ot=`${Me.seed}:${_e}:${Me.terrain.waterLevel}`;(Me.heights!==d||ot!==w)&&performance.now()-S>200&&x();const Ve=qw(Me.env.timeOfDay),U=$w(Me.env.timeOfDay);u.intensity=U?.12:.4+Ve*1.8,h.intensity=U?.18:.5+Ve*.4;const b=(Me.env.timeOfDay-6)/12*Math.PI;u.position.set(Math.cos(b)*80,Math.max(8,Math.sin(b)*80),30),r.background=new _t(U?725030:Me.env.weather==="맑음"?8893910:7307929),r.fog=new ac(r.background,90,260);const K=(ee,ve)=>Iw({heights:Me.heights,settings:Me.terrain},ee,ve)*Yl;let me=0,xe=0,de=0,Ge=0;for(const ee of Me.trees){if(!ee.alive)continue;const ve=K(ee.x,ee.z);if(ee.kind==="pine"){if(xe>=T)break;E.position.set(ee.x-_e/2,ve+1.3*ee.growth,ee.z-_e/2),E.scale.setScalar(Math.max(.15,ee.growth)),E.rotation.set(0,ee.id*37%6,0),E.updateMatrix(),O.setMatrixAt(xe++,E.matrix)}else{if(me>=T)break;E.position.set(ee.x-_e/2,ve+.55*ee.growth,ee.z-_e/2),E.scale.setScalar(Math.max(.15,ee.growth)),E.rotation.set(0,ee.id*53%6,0),E.updateMatrix(),N.setMatrixAt(me,E.matrix),E.position.set(ee.x-_e/2,ve+(1.1+.7)*ee.growth,ee.z-_e/2),E.updateMatrix(),D.setMatrixAt(me,E.matrix),me++}}N.count=me,D.count=me,O.count=xe,N.instanceMatrix.needsUpdate=!0,D.instanceMatrix.needsUpdate=!0,O.instanceMatrix.needsUpdate=!0;for(const ee of Me.rocks)!ee.alive||de>=800||(E.position.set(ee.x-_e/2,K(ee.x,ee.z)+.25,ee.z-_e/2),E.scale.setScalar(.8+ee.id*13%10/22),E.rotation.set(0,ee.id*29%6,0),E.updateMatrix(),P.setMatrixAt(de++,E.matrix));P.count=de,P.instanceMatrix.needsUpdate=!0;for(const ee of Me.bushes)!ee.alive||Ge>=1200||(E.position.set(ee.x-_e/2,K(ee.x,ee.z)+.35,ee.z-_e/2),E.scale.set(1,.8,1),E.rotation.set(0,0,0),E.updateMatrix(),R.setMatrixAt(Ge,E.matrix),R.setColorAt(Ge,Ct.set(ee.food>0?5020223:7307082)),Ge++);R.count=Ge,R.instanceMatrix.needsUpdate=!0,R.instanceColor&&(R.instanceColor.needsUpdate=!0);const Le={목수:9067051,석공:8224141,농부:5020223,운반꾼:4157375,건설자:12548671,무직:10129279};let Ie=0;for(const ee of Me.villagers){if(Ie>=A)break;const ve=K(ee.x,ee.z);E.position.set(ee.x-_e/2,ve+.65,ee.z-_e/2),E.scale.setScalar(1),E.rotation.set(0,(ee.id*71+Y*0)%6,0),E.updateMatrix(),I.setMatrixAt(Ie,E.matrix),I.setColorAt(Ie,Ct.set(Le[ee.job]??10129279)),E.position.set(ee.x-_e/2,ve+1.45,ee.z-_e/2),E.updateMatrix(),j.setMatrixAt(Ie,E.matrix),Ie++}I.count=Ie,j.count=Ie,I.instanceMatrix.needsUpdate=!0,j.instanceMatrix.needsUpdate=!0,I.instanceColor&&(I.instanceColor.needsUpdate=!0);let at=0;for(const ee of Me.animals){if(at>=200)break;E.position.set(ee.x-_e/2,K(ee.x,ee.z)+.4,ee.z-_e/2),E.scale.set(ee.kind==="rabbit"?.6:1,ee.kind==="rabbit"?.6:1,ee.kind==="rabbit"?.6:1),E.rotation.set(0,ee.id*37%6,0),E.updateMatrix(),W.setMatrixAt(at++,E.matrix)}W.count=at,W.instanceMatrix.needsUpdate=!0;let ye=0;for(const ee of Me.buildings){if(ye>=220)break;const ve=K(ee.x,ee.z),We=ee.complete?1:.4+ee.progress*.6;E.position.set(ee.x-_e/2,ve+.65*We,ee.z-_e/2),E.scale.set(We,We,We),E.rotation.set(0,ee.id*17%4,0),E.updateMatrix(),te.setMatrixAt(ye,E.matrix);const it={house:14267266,storage:9072461,farm:8367692,lumber:7031343,quarry:9276825};te.setColorAt(ye,Ct.set(it[ee.kind]??14267266)),E.position.set(ee.x-_e/2,ve+(1.3+.55)*We,ee.z-_e/2),E.updateMatrix(),ue.setMatrixAt(ye,E.matrix),ue.setColorAt(ye,Ct.set(ee.kind==="farm"?6064692:10701358)),ye++}te.count=ye,ue.count=ye,te.instanceMatrix.needsUpdate=!0,ue.instanceMatrix.needsUpdate=!0,te.instanceColor&&(te.instanceColor.needsUpdate=!0),ue.instanceColor&&(ue.instanceColor.needsUpdate=!0);let Fe=0;for(const ee of Me.fires){if(Fe>=60)break;E.position.set(ee.x-_e/2,K(ee.x,ee.z)+.8,ee.z-_e/2);const ve=.9+Math.sin(performance.now()/90+ee.id)*.25;E.scale.set(ve*ee.intensity,ve*ee.intensity*1.2,ve*ee.intensity),E.rotation.set(0,0,0),E.updateMatrix(),oe.setMatrixAt(Fe++,E.matrix)}oe.count=Fe,oe.instanceMatrix.needsUpdate=!0;const et=Me.env.raining;if(he.visible=et>.05,he.visible){const ee=H.attributes.position;for(let ve=0;ve<fe;ve++){let We=ee.getY(ve)-Ye*28;We<0?(ee.setXYZ(ve,(Math.random()-.5)*_e,18+Math.random()*8,(Math.random()-.5)*_e),We=ee.getY(ve)):ee.setY(ve,We)}ee.needsUpdate=!0,he.material.opacity=Math.min(.85,et)}if(M){const ee=Me.selection;if(ee&&ee.kind==="villager"){const ve=Me.villagers.find(We=>We.id===ee.id);ve?(M.visible=!0,M.position.set(ve.x-_e/2,K(ve.x,ve.z)+.3,ve.z-_e/2)):M.visible=!1}else if(ee&&ee.kind==="building"){const ve=Me.buildings.find(We=>We.id===ee.id);ve?(M.visible=!0,M.position.set(ve.x-_e/2,K(ve.x,ve.z)+.3,ve.z-_e/2),M.scale.set(2,2,1)):M.visible=!1}else M.visible=!1,M.scale.x!==1&&M.scale.set(1,1,1)}if(Y%12===0){for(;ce.children.length;){const ee=ce.children.pop();ce.remove(ee)}if(Me.showPaths){const ee=Me.selection,ve=ee&&ee.kind==="villager"?Me.villagers.filter(We=>We.id===ee.id):Me.villagers.slice(0,12);for(const We of ve){if(We.path.length<2||We.pathIdx>=We.path.length)continue;const it=[];it.push(new V(We.x-_e/2,K(We.x,We.z)+.5,We.z-_e/2));for(let Pe=We.pathIdx;Pe<We.path.length;Pe++){const ae=We.path[Pe];it.push(new V(ae.x-_e/2,K(ae.x,ae.z)+.5,ae.z-_e/2))}const vt=new yn().setFromPoints(it),X=new V1(vt,new z0({color:ee&&ee.kind==="villager"&&ee.id===We.id?16766011:16777215,transparent:!0,opacity:.8}));ce.add(X)}}}g&&(g.position.y=Me.terrain.waterLevel*Yl+.12+Math.sin(performance.now()/900)*.05),l.update(),t.render(r,o)};return nn(),()=>{cancelAnimationFrame(At),window.removeEventListener("resize",nt),window.removeEventListener("pointermove",De),window.removeEventListener("pointerup",Be),t.domElement.removeEventListener("pointerdown",Ee),r.traverse(Ye=>{(Ye instanceof hn||Ye instanceof Og||Ye instanceof Bg)&&Ye.geometry.dispose()}),t.dispose(),e.removeChild(t.domElement)}},[]),le.jsx("div",{ref:s,style:{width:"100%",height:"100%",cursor:"crosshair"}})}const Gh=1/20,s0=8;function Jw(s){let e=0,t=performance.now(),r=0,o=0,l=0,u=!0;const h=f=>{if(!u)return;const m=Math.min(.25,(f-t)/1e3);if(t=f,r++,o+=m,o>=.5){const g=r/o;r=0,o=0;try{tt.setState({fps:Math.round(g)})}catch{}}const _=tt.getState().speed;if(_!==0){e+=m*_;let g=0;for(;e>=Gh&&g<s0;){try{tt.getState().tick(Gh)}catch(y){console.error(y)}e-=Gh,g++}g>=s0&&(e=0)}else e=0;l=requestAnimationFrame(h)};return l=requestAnimationFrame(h),()=>{u=!1,cancelAnimationFrame(l)}}const Qw=[{id:"select",label:"👆 선택"},{id:"raise",label:"⛰ 올리기"},{id:"lower",label:"🕳 내리기"},{id:"flatten",label:"🟫 평탄화"},{id:"water",label:"🌊 물파기"},{id:"plantTree",label:"🌲 심기"},{id:"removeVeg",label:"🪓 제거"},{id:"buildHouse",label:"🏠 집"},{id:"buildStorage",label:"📦 창고"},{id:"buildFarm",label:"🌾 농장"},{id:"buildLumber",label:"🪵 벌목장"},{id:"buildQuarry",label:"⛏ 채석장"},{id:"spawnVillager",label:"🧍 주민+"},{id:"spawnAnimal",label:"🐇 동물+"},{id:"fire",label:"🔥 화재"},{id:"bulldoze",label:"💥 철거"}];function eT(s){const e=Math.floor(s),t=Math.floor((s-e)*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function tT(){const s=tt(l=>l.ready),[e,t]=ns.useState("forge-1"),[r,o]=ns.useState(!1);return ns.useEffect(()=>(tt.getState().initWorld("forge-1"),tt.getState().load().then(u=>{u?t(tt.getState().seed):tt.getState().initWorld("forge-1")}),Jw()),[]),s?le.jsxs("div",{className:"app",children:[le.jsx(nT,{}),le.jsxs("div",{className:"main",children:[le.jsx(iT,{seedInput:e,setSeedInput:t}),le.jsx("div",{className:"center",children:le.jsx(Zw,{})}),le.jsx(rT,{})]}),le.jsx(sT,{showHelp:r,setShowHelp:o}),r&&le.jsx(oT,{onClose:()=>o(!1)})]}):le.jsx("div",{className:"app",children:le.jsx("div",{className:"loading",children:"월드 생성 중…"})})}function nT(){const s=tt(u=>u.resources),e=tt(u=>u.env),t=tt(u=>u.fps),r=tt(u=>u.aiMs),o=tt(u=>u.villagers),l=tt(u=>u.simTime);return le.jsxs("div",{className:"topbar",children:[le.jsx("span",{style:{fontWeight:800},children:"🌍 월드 포지"}),le.jsxs("span",{children:["👥 인구 ",le.jsx("b",{children:o.length})," / 주택 ",s.housing]}),le.jsxs("span",{children:["🪵 목재 ",le.jsx("b",{children:Math.floor(s.wood)})]}),le.jsxs("span",{children:["⛏ 석재 ",le.jsx("b",{children:Math.floor(s.stone)})]}),le.jsxs("span",{children:["🌾 식량 ",le.jsx("b",{children:Math.floor(s.food)}),"/",s.capacity]}),le.jsxs("span",{children:["📅 ",e.day,"일차 ",eT(e.timeOfDay)]}),le.jsxs("span",{children:["🌤 ",e.weather]}),le.jsxs("span",{children:["⏱ ",Math.floor(l),"초"]}),le.jsxs("span",{style:{marginLeft:"auto"},children:["🎞 ",t," FPS · AI ",r.toFixed(1),"ms"]})]})}function iT({seedInput:s,setSeedInput:e}){const t=tt(g=>g.tool),r=tt(g=>g.setTool),o=tt(g=>g.brushRadius),l=tt(g=>g.brushStrength),u=tt(g=>g.setBrush),h=tt(g=>g.terrain),f=tt(g=>g.notice),m=tt(g=>g.undo),_=tt(g=>g.redo);return le.jsxs("div",{className:"left",children:[le.jsx("div",{className:"section-title",children:"씨드 기반 지형"}),le.jsx("div",{className:"row",children:le.jsx("input",{type:"text",value:s,onChange:g=>e(g.target.value)})}),le.jsxs("div",{className:"row",children:[le.jsx("button",{className:"btn primary",style:{flex:1},onClick:()=>tt.getState().initWorld(s||"forge-1"),children:"🌱 생성"}),le.jsx("button",{className:"btn",onClick:()=>{e(`forge-${Math.floor(Math.random()*99999)}`)},children:"🎲"})]}),le.jsx("div",{className:"row",children:le.jsxs("label",{style:{width:70},children:["크기 ",h.size]})}),le.jsx("div",{className:"row",children:[64,96,128].map(g=>le.jsx("button",{className:"btn",style:h.size===g?{borderColor:"#3b82f6"}:{},onClick:()=>tt.getState().initWorld(tt.getState().seed,{...h,size:g}),children:g},g))}),le.jsx("div",{className:"section-title",children:"편집 도구"}),le.jsx("div",{className:"tool-grid",children:Qw.map(g=>le.jsx("button",{className:"tool-btn"+(t===g.id?" active":""),onClick:()=>r(g.id),children:g.label},g.id))}),le.jsxs("div",{className:"section-title",children:["브러시 반경 ",o," · 강도 ",Math.round(l*100),"%"]}),le.jsx("input",{type:"range",min:1,max:10,value:o,onChange:g=>u(Number(g.target.value),l)}),le.jsx("input",{type:"range",min:5,max:100,value:Math.round(l*100),onChange:g=>u(o,Number(g.target.value)/100)}),le.jsxs("div",{className:"row",children:[le.jsx("button",{className:"btn",style:{flex:1},onClick:m,children:"↩ Undo"}),le.jsx("button",{className:"btn",style:{flex:1},onClick:_,children:"↪ Redo"})]}),le.jsxs("div",{className:"card",children:[le.jsx("h4",{children:"🏗 건설비"}),Object.entries(dc).map(([g,y])=>le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:y.name}),le.jsxs("span",{children:["🪵",y.wood," ⛏",y.stone]})]},g))]}),f&&le.jsx("div",{className:"notice",children:f}),le.jsx("div",{className:"card",style:{fontSize:12,color:"#8fa3c0"},children:"편집 도구를 고른 뒤 3D 월드를 드래그/클릭하세요. 선택 모드에서는 좌클릭=선택, 우드래그=회전, 휠=줌입니다."})]})}function rT(){const s=tt(w=>w.selection),e=tt(w=>w.villagers),t=tt(w=>w.buildings),r=tt(w=>w.animals),o=tt(w=>w.trees),l=tt(w=>w.fires),u=tt(w=>w.setSelection),h=tt(w=>w.showPaths),f=tt(w=>w.togglePaths),[m,_]=ns.useState(""),g=(s==null?void 0:s.kind)==="villager"?e.find(w=>w.id===s.id):null,y=(s==null?void 0:s.kind)==="building"?t.find(w=>w.id===s.id):null,M=(s==null?void 0:s.kind)==="animal"?r.find(w=>w.id===s.id):null,d=e.filter(w=>!m||w.name.includes(m)||w.job.includes(m)||w.action.includes(m)).slice(0,60);return le.jsxs("div",{className:"right",children:[le.jsx("div",{className:"section-title",children:"선택 개체 상태"}),!s&&le.jsx("div",{className:"card",children:"3D 월드의 주민·건물을 클릭하세요. (도구: 선택)"}),g&&le.jsxs("div",{className:"card",children:[le.jsxs("h4",{children:["🧍 ",g.name," (#",g.id,")"]}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"직업"}),le.jsx("span",{children:g.job})]}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"행동"}),le.jsx("span",{children:g.action})]}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"위치"}),le.jsxs("span",{children:["(",g.x.toFixed(1),", ",g.z.toFixed(1),")"]})]}),le.jsxs("div",{style:{margin:"6px 0",background:"#0f1520",padding:6,borderRadius:6},children:["💭 ",g.reason]}),le.jsx(Wh,{label:"배고픔(포만)",v:g.hunger,color:"#4c9a3f"}),le.jsx(Wh,{label:"피로",v:g.fatigue,color:"#bf7a3f"}),le.jsx(Wh,{label:"체력",v:g.health,color:"#d64545"}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"운반"}),le.jsxs("span",{children:["🪵",g.carry.wood," ⛏",g.carry.stone," 🌾",g.carry.food]})]}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"경로"}),le.jsxs("span",{children:[g.path.length-g.pathIdx," 구간 남음"]})]})]}),y&&le.jsxs("div",{className:"card",children:[le.jsxs("h4",{children:["🏠 ",dc[y.kind].name," (#",y.id,")"]}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"상태"}),le.jsx("span",{children:y.complete?"완성 ✅":`건설 중 ${Math.round(y.progress*100)}%`})]}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"위치"}),le.jsxs("span",{children:["(",y.x.toFixed(1),", ",y.z.toFixed(1),")"]})]}),le.jsx("div",{style:{color:"#8fa3c0"},children:dc[y.kind].desc})]}),M&&le.jsxs("div",{className:"card",children:[le.jsxs("h4",{children:["🐇 동물 #",M.id," (",M.kind,")"]}),le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:"위치"}),le.jsxs("span",{children:["(",M.x.toFixed(1),", ",M.z.toFixed(1),")"]})]})]}),le.jsx("div",{className:"row",children:le.jsx("button",{className:"btn",style:{flex:1},onClick:f,children:h?"🛤 경로 숨기기":"🛤 경로 표시"})}),le.jsxs("div",{className:"section-title",children:["주민 목록 (",e.length,") · 나무 ",o.filter(w=>w.alive).length," · 화재 ",l.length]}),le.jsx("input",{type:"text",placeholder:"이름/직업/행동 검색",value:m,onChange:w=>_(w.target.value)}),le.jsx("div",{style:{marginTop:6},children:d.map(w=>le.jsxs("div",{className:"villager-row"+((s==null?void 0:s.kind)==="villager"&&s.id===w.id?" selected":""),onClick:()=>u({kind:"villager",id:w.id}),children:[le.jsxs("div",{children:["🧍 ",w.name," · ",w.job," · ",le.jsx("b",{children:w.action})]}),le.jsx("div",{style:{fontSize:11,color:"#8fa3c0"},children:w.reason})]},w.id))})]})}function Wh({label:s,v:e,color:t}){return le.jsxs("div",{style:{margin:"3px 0"},children:[le.jsxs("div",{className:"kv",children:[le.jsx("span",{children:s}),le.jsx("span",{children:Math.round(e)})]}),le.jsx("div",{className:"bar",children:le.jsx("div",{style:{width:`${Math.max(0,Math.min(100,e))}%`,background:t}})})]})}function sT({showHelp:s,setShowHelp:e}){const t=tt(M=>M.speed),r=tt(M=>M.setSpeed),o=tt(M=>M.save),l=tt(M=>M.load),u=tt(M=>M.reset),h=tt(M=>M.exportJson),f=tt(M=>M.importJson),m=tt(M=>M.addLoadTestPopulation),_=tt(M=>M.trees),g=tt(M=>M.villagers),y=tt(M=>M.buildings);return le.jsxs("div",{className:"bottombar",children:[le.jsx("button",{className:"btn"+(t===0?" primary":""),onClick:()=>r(0),children:"⏸ 일시정지"}),[1,2,4].map(M=>le.jsxs("button",{className:"btn"+(t===M?" primary":""),onClick:()=>r(M),children:[M,"x"]},M)),le.jsx("button",{className:"btn",onClick:()=>u(),children:"🔄 초기화"}),le.jsx("button",{className:"btn",onClick:()=>o(),children:"💾 저장"}),le.jsx("button",{className:"btn",onClick:()=>l(),children:"📂 불러오기"}),le.jsx("button",{className:"btn",onClick:()=>Vw(`world-forge-${Date.now()}.json`,h()),children:"📤 JSON 내보내기"}),le.jsxs("label",{className:"btn",style:{cursor:"pointer"},children:["📥 JSON 가져오기",le.jsx("input",{type:"file",accept:".json",style:{display:"none"},onChange:M=>{var w;const d=(w=M.target.files)==null?void 0:w[0];d&&d.text().then(S=>{try{const x=f(JSON.parse(S));tt.getState().setNotice(x?"JSON 가져오기 완료":"JSON 형식 오류")}catch{tt.getState().setNotice("JSON 파싱 실패")}})}})]}),le.jsx("button",{className:"btn",onClick:()=>m(90,1500),children:"⚡ 부하테스트 +90명/+1500그루"}),le.jsxs("span",{style:{color:"#8fa3c0"},children:["주민 ",g.length," · 나무 ",_.filter(M=>M.alive).length," · 건물 ",y.length]}),le.jsx("button",{className:"btn",style:{marginLeft:"auto"},onClick:()=>e(!s),children:"❓ 도움말"})]})}function oT({onClose:s}){return le.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:s,children:le.jsxs("div",{className:"card",style:{maxWidth:560,padding:18},onClick:e=>e.stopPropagation(),children:[le.jsx("h4",{children:"❓ 월드 포지 조작법"}),le.jsxs("div",{style:{fontSize:13,lineHeight:1.7},children:["• ",le.jsx("b",{children:"선택 모드"}),": 좌클릭으로 주민/건물 선택, 우드래그 회전, 휠 줌, 우클릭+드래그 팬.",le.jsx("br",{}),"• ",le.jsx("b",{children:"편집 모드"}),"(올리기/내리기/평탄화/물파기): 드래그로 지형 변형, Undo/Redo 지원. 지형 변경 시 길찾기가 자동 갱신됩니다.",le.jsx("br",{}),"• ",le.jsx("b",{children:"건설"}),": 집/창고/농장/벌목장/채석장을 클릭 배치. 착공 시 자원이 소모되고 주민이 와서 짓습니다.",le.jsx("br",{}),"• ",le.jsx("b",{children:"주민 AI"}),": Utility AI가 배고픔·피로·비축량을 보고 벌목/채석/채집/운반/건설/휴식/회피를 고릅니다. 선택 시 근거가 한글로 표시됩니다.",le.jsx("br",{}),"• ",le.jsx("b",{children:"재난"}),": 🔥 도구로 화재를 내면 주변 나무로 번지고, 비가 오면 꺼집니다. 주민은 자동 회피합니다.",le.jsx("br",{}),"• ",le.jsx("b",{children:"시간/저장"}),": 일시정지·1x·2x·4x, IndexedDB 자동 저장/복원, JSON 내보내기/가져오기.",le.jsx("br",{}),"• 로컬 실행: ",le.jsx("code",{children:"npm install; npm run dev"})," → http://localhost:5173"]}),le.jsx("div",{className:"row",children:le.jsx("button",{className:"btn primary",onClick:s,children:"닫기"})})]})})}window.__world=tt;Fv.createRoot(document.getElementById("root")).render(le.jsx(Qo.StrictMode,{children:le.jsx(tT,{})}));
