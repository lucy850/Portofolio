"use strict";(()=>{var AE=Object.create;var Gv=Object.defineProperty;var wE=Object.getOwnPropertyDescriptor;var RE=Object.getOwnPropertyNames;var CE=Object.getPrototypeOf,DE=Object.prototype.hasOwnProperty;var Gi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var UE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of RE(t))!DE.call(e,s)&&s!==n&&Gv(e,s,{get:()=>t[s],enumerable:!(i=wE(t,s))||i.enumerable});return e};var Pa=(e,t,n)=>(n=e!=null?AE(CE(e)):{},UE(t||!e||!e.__esModule?Gv(n,"default",{value:e,enumerable:!0}):n,e));var e_=Gi(Xt=>{"use strict";var cp=Symbol.for("react.transitional.element"),NE=Symbol.for("react.portal"),LE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),IE=Symbol.for("react.profiler"),PE=Symbol.for("react.consumer"),zE=Symbol.for("react.context"),BE=Symbol.for("react.forward_ref"),FE=Symbol.for("react.suspense"),HE=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),VE=Symbol.for("react.activity"),GE=Symbol.for("react.view_transition"),kv=Symbol.iterator;function kE(e){return e===null||typeof e!="object"?null:(e=kv&&e[kv]||e["@@iterator"],typeof e=="function"?e:null)}var Zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jv=Object.assign,Kv={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Kv,this.updater=n||Zv}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qv(){}Qv.prototype=Ir.prototype;function up(e,t,n){this.props=e,this.context=t,this.refs=Kv,this.updater=n||Zv}var hp=up.prototype=new Qv;hp.constructor=up;Jv(hp,Ir.prototype);hp.isPureReactComponent=!0;var Xv=Array.isArray;function lp(){}var we={H:null,A:null,T:null,S:null},jv=Object.prototype.hasOwnProperty;function fp(e,t,n){var i=n.ref;return{$$typeof:cp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function XE(e,t){return fp(e.type,t,e.props)}function dp(e){return typeof e=="object"&&e!==null&&e.$$typeof===cp}function qE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qv=/\/+/g;function op(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qE(""+e.key):t.toString(36)}function WE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(lp,lp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Or(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case cp:case NE:r=!0;break;case Yv:return r=e._init,Or(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+op(e,0):i,Xv(s)?(n="",r!=null&&(n=r.replace(qv,"$&/")+"/"),Or(s,t,n,"",function(c){return c})):s!=null&&(dp(s)&&(s=XE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(qv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Xv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+op(i,l),r+=Or(i,t,n,a,s);else if(l=kE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+op(i,l++),r+=Or(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Or(WE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function yu(e,t,n){if(e==null)return e;var i=[],s=0;return Or(e,i,"","",function(a){return t.call(n,a,s++)}),i}function YE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Wv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $v(e){var t=we.T,n={};n.types=t!==null?t.types:null,we.T=n;try{var i=e(),s=we.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(lp,Wv)}catch(a){Wv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),we.T=t}}function t_(e){var t=we.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else $v(t_.bind(null,e))}var ZE={map:yu,forEach:function(e,t,n){yu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yu(e,function(){t++}),t},toArray:function(e){return yu(e,function(t){return t})||[]},only:function(e){if(!dp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Xt.Activity=VE;Xt.Children=ZE;Xt.Component=Ir;Xt.Fragment=LE;Xt.Profiler=IE;Xt.PureComponent=up;Xt.StrictMode=OE;Xt.Suspense=FE;Xt.ViewTransition=GE;Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Xt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return we.H.useMemoCache(e)}};Xt.addTransitionType=t_;Xt.cache=function(e){return function(){return e.apply(null,arguments)}};Xt.cacheSignal=function(){return null};Xt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Jv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!jv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return fp(e.type,s,i)};Xt.createContext=function(e){return e={$$typeof:zE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:PE,_context:e},e};Xt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)jv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return fp(e,a,s)};Xt.createRef=function(){return{current:null}};Xt.forwardRef=function(e){return{$$typeof:BE,render:e}};Xt.isValidElement=dp;Xt.lazy=function(e){return{$$typeof:Yv,_payload:{_status:-1,_result:e},_init:YE}};Xt.memo=function(e,t){return{$$typeof:HE,type:e,compare:t===void 0?null:t}};Xt.startTransition=$v;Xt.unstable_useCacheRefresh=function(){return we.H.useCacheRefresh()};Xt.use=function(e){return we.H.use(e)};Xt.useActionState=function(e,t,n){return we.H.useActionState(e,t,n)};Xt.useCallback=function(e,t){return we.H.useCallback(e,t)};Xt.useContext=function(e){return we.H.useContext(e)};Xt.useDebugValue=function(){};Xt.useDeferredValue=function(e,t){return we.H.useDeferredValue(e,t)};Xt.useEffect=function(e,t){return we.H.useEffect(e,t)};Xt.useEffectEvent=function(e){return we.H.useEffectEvent(e)};Xt.useId=function(){return we.H.useId()};Xt.useImperativeHandle=function(e,t,n){return we.H.useImperativeHandle(e,t,n)};Xt.useInsertionEffect=function(e,t){return we.H.useInsertionEffect(e,t)};Xt.useLayoutEffect=function(e,t){return we.H.useLayoutEffect(e,t)};Xt.useMemo=function(e,t){return we.H.useMemo(e,t)};Xt.useOptimistic=function(e,t){return we.H.useOptimistic(e,t)};Xt.useReducer=function(e,t,n){return we.H.useReducer(e,t,n)};Xt.useRef=function(e){return we.H.useRef(e)};Xt.useState=function(e){return we.H.useState(e)};Xt.useSyncExternalStore=function(e,t,n){return we.H.useSyncExternalStore(e,t,n)};Xt.useTransition=function(){return we.H.useTransition()};Xt.version="19.3.0"});var Tl=Gi((fN,n_)=>{"use strict";n_.exports=e_()});var f_=Gi(Oe=>{"use strict";function vp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<xu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function ki(e){return e.length===0?null:e[0]}function Mu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>xu(o,n))l<s&&0>xu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>xu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function xu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Oe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(i_=performance,Oe.unstable_now=function(){return i_.now()}):(pp=Date,s_=pp.now(),Oe.unstable_now=function(){return pp.now()-s_});var i_,pp,s_,ps=[],Gs=[],JE=1,di=null,_n=3,_p=!1,Al=!1,wl=!1,yp=!1,o_=typeof setTimeout=="function"?setTimeout:null,l_=typeof clearTimeout=="function"?clearTimeout:null,a_=typeof setImmediate!="undefined"?setImmediate:null;function Su(e){for(var t=ki(Gs);t!==null;){if(t.callback===null)Mu(Gs);else if(t.startTime<=e)Mu(Gs),t.sortIndex=t.expirationTime,vp(ps,t);else break;t=ki(Gs)}}function xp(e){if(wl=!1,Su(e),!Al)if(ki(ps)!==null)Al=!0,zr||(zr=!0,Pr());else{var t=ki(Gs);t!==null&&Sp(xp,t.startTime-e)}}var zr=!1,Rl=-1,c_=5,u_=-1;function h_(){return yp?!0:!(Oe.unstable_now()-u_<c_)}function mp(){if(yp=!1,zr){var e=Oe.unstable_now();u_=e;var t=!0;try{t:{Al=!1,wl&&(wl=!1,l_(Rl),Rl=-1),_p=!0;var n=_n;try{e:{for(Su(e),di=ki(ps);di!==null&&!(di.expirationTime>e&&h_());){var i=di.callback;if(typeof i=="function"){di.callback=null,_n=di.priorityLevel;var s=i(di.expirationTime<=e);if(e=Oe.unstable_now(),typeof s=="function"){di.callback=s,Su(e),t=!0;break e}di===ki(ps)&&Mu(ps),Su(e)}else Mu(ps);di=ki(ps)}if(di!==null)t=!0;else{var a=ki(Gs);a!==null&&Sp(xp,a.startTime-e),t=!1}}break t}finally{di=null,_n=n,_p=!1}t=void 0}}finally{t?Pr():zr=!1}}}var Pr;typeof a_=="function"?Pr=function(){a_(mp)}:typeof MessageChannel!="undefined"?(gp=new MessageChannel,r_=gp.port2,gp.port1.onmessage=mp,Pr=function(){r_.postMessage(null)}):Pr=function(){o_(mp,0)};var gp,r_;function Sp(e,t){Rl=o_(function(){e(Oe.unstable_now())},t)}Oe.unstable_IdlePriority=5;Oe.unstable_ImmediatePriority=1;Oe.unstable_LowPriority=4;Oe.unstable_NormalPriority=3;Oe.unstable_Profiling=null;Oe.unstable_UserBlockingPriority=2;Oe.unstable_cancelCallback=function(e){e.callback=null};Oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c_=0<e?Math.floor(1e3/e):5};Oe.unstable_getCurrentPriorityLevel=function(){return _n};Oe.unstable_next=function(e){switch(_n){case 1:case 2:case 3:var t=3;break;default:t=_n}var n=_n;_n=t;try{return e()}finally{_n=n}};Oe.unstable_requestPaint=function(){yp=!0};Oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_n;_n=e;try{return t()}finally{_n=n}};Oe.unstable_scheduleCallback=function(e,t,n){var i=Oe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:JE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,vp(Gs,e),ki(ps)===null&&e===ki(Gs)&&(wl?(l_(Rl),Rl=-1):wl=!0,Sp(xp,n-i))):(e.sortIndex=s,vp(ps,e),Al||_p||(Al=!0,zr||(zr=!0,Pr()))),e};Oe.unstable_shouldYield=h_;Oe.unstable_wrapCallback=function(e){var t=_n;return function(){var n=_n;_n=t;try{return e.apply(this,arguments)}finally{_n=n}}}});var p_=Gi((pN,d_)=>{"use strict";d_.exports=f_()});var v_=Gi(yn=>{"use strict";var KE=Tl();function g_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ks(){}var An={d:{f:ks,r:function(){throw Error(g_(522))},D:ks,C:ks,L:ks,m:ks,X:ks,S:ks,M:ks},p:0,findDOMNode:null},QE=Symbol.for("react.portal"),jE=Symbol.for("react.recoverable"),m_=Symbol.for("react.optimistic_key");function $E(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:QE,key:i==null?null:i===m_?m_:""+i,children:e,containerInfo:t,implementation:n}}var Cl=KE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function bu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=An;yn.browser=function(e){return{$$typeof:jE,_reason:e}};yn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(g_(299));return $E(e,t,null,n)};yn.flushSync=function(e){var t=Cl.T,n=An.p;try{if(Cl.T=null,An.p=2,e)return e()}finally{Cl.T=t,An.p=n,An.d.f()}};yn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,An.d.C(e,t))};yn.prefetchDNS=function(e){typeof e=="string"&&An.d.D(e)};yn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=bu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?An.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&An.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};yn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=bu(t.as,t.crossOrigin);An.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&An.d.M(e)};yn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=bu(n,t.crossOrigin);An.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};yn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=bu(t.as,t.crossOrigin);An.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else An.d.m(e)};yn.requestFormReset=function(e){An.d.r(e)};yn.unstable_batchedUpdates=function(e,t){return e(t)};yn.useFormState=function(e,t,n){return Cl.H.useFormState(e,t,n)};yn.useFormStatus=function(){return Cl.H.useHostTransitionStatus()};yn.version="19.3.0"});var x_=Gi((gN,y_)=>{"use strict";function __(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(__)}catch(e){console.error(e)}}__(),y_.exports=v_()});var r1=Gi(af=>{"use strict";var je=p_(),ax=Tl(),tT=x_();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function ox(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S_(e){if(gc(e)!==e)throw Error(J(188))}function eT(e){var t=e.alternate;if(!t){if(t=gc(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return S_(s),e;if(a===i)return S_(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function cx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=cx(e),t!==null)return t;e=e.sibling}return null}function Hn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Hn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function ir(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ux(e){var t=[null,null],n=ir(e);return n===null||hx(t,e,n.child,{foundSelf:!1}),t}function hx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&hx(e,t,n.child,i))return!0;n=n.sibling}return!1}function Qe(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(J(559))}}var Xr=null,$p=null;function nT(e,t,n){return e===n?!0:e===t?(Xr=e,!0):!1}function iT(e,t,n){return e===n?($p=e,!1):e===t?($p!==null&&(Xr=e),!0):!1}function b_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function tm(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Te=Object.assign,sT=Symbol.for("react.element"),Eu=Symbol.for("react.transitional.element"),Pl=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),dx=Symbol.for("react.consumer"),Ji=Symbol.for("react.context"),ug=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),im=Symbol.for("react.suspense_list"),hg=Symbol.for("react.memo"),Ys=Symbol.for("react.lazy"),sm=Symbol.for("react.activity"),aT=Symbol.for("react.legacy_hidden"),rT=Symbol.for("react.memo_cache_sentinel"),am=Symbol.for("react.view_transition"),oT=Symbol.for("react.recoverable"),E_=Symbol.iterator;function Dl(e){return e===null||typeof e!="object"?null:(e=E_&&e[E_]||e["@@iterator"],typeof e=="function"?e:null)}var lT=Symbol.for("react.client.reference");function rm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case em:return"Profiler";case fx:return"StrictMode";case nm:return"Suspense";case im:return"SuspenseList";case sm:return"Activity";case am:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Pl:return"Portal";case Ji:return e.displayName||"Context";case dx:return(e._context.displayName||"Context")+".Consumer";case ug:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hg:return t=e.displayName||null,t!==null?t:rm(e.type)||"Memo";case Ys:t=e._payload,e=e._init;try{return rm(e(t))}catch(n){}}return null}var zl=Array.isArray,Vt=ax.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=tT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xa={pending:!1,data:null,method:null,action:null},om=[],Wr=-1;function ns(e){return{current:e}}function fn(e){0>Wr||(e.current=om[Wr],om[Wr]=null,Wr--)}function De(e,t){Wr++,om[Wr]=e.current,e.current=t}var $i=ns(null),tc=ns(null),na=ns(null),uh=ns(null);function hh(e,t){switch(De(na,t),De(tc,e),De($i,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?By(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=By(t),e=IM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}fn($i),De($i,e)}function fo(){fn($i),fn(tc),fn(na)}function lm(e){var t=e.memoizedState;t!==null&&(bo._currentValue=t.memoizedState,De(uh,e)),t=$i.current;var n=IM(t,e.type);t!==n&&(De(tc,e),De($i,n))}function fh(e){tc.current===e&&(fn($i),fn(tc)),uh.current===e&&(fn(uh),bo._currentValue=Xa)}var Mp,T_;function qs(e){if(Mp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mp=t&&t[1]||"",T_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mp+e+T_}var bp=!1;function Ep(e,t){if(!e||bp)return"";bp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var h=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){h=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){h=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{bp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qs(n):""}function cT(e,t){switch(e.tag){case 26:case 27:case 5:return qs(e.type);case 16:return qs("Lazy");case 13:return e.child!==t&&t!==null?qs("Suspense Fallback"):qs("Suspense");case 19:return qs("SuspenseList");case 0:case 15:return Ep(e.type,!1);case 11:return Ep(e.type.render,!1);case 1:return Ep(e.type,!0);case 31:return qs("Activity");case 30:return qs("ViewTransition");default:return""}}function A_(e){try{var t="",n=null;do t+=cT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var cm=Object.prototype.hasOwnProperty,fg=je.unstable_scheduleCallback,Tp=je.unstable_cancelCallback,uT=je.unstable_shouldYield,hT=je.unstable_requestPaint,jn=je.unstable_now,fT=je.unstable_getCurrentPriorityLevel,px=je.unstable_ImmediatePriority,mx=je.unstable_UserBlockingPriority,dh=je.unstable_NormalPriority,dT=je.unstable_LowPriority,gx=je.unstable_IdlePriority,pT=je.log,mT=je.unstable_setDisableYieldValue,vc=null,$n=null;function Ks(e){if(typeof pT=="function"&&mT(e),$n&&typeof $n.setStrictMode=="function")try{$n.setStrictMode(vc,e)}catch(t){}}var ti=Math.clz32?Math.clz32:_T,gT=Math.log,vT=Math.LN2;function _T(e){return e>>>=0,e===0?32:31-(gT(e)/vT|0)|0}var Tu=256,Au=262144,wu=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Fa(i):(r&=o,r!==0?s=Fa(r):n||(n=o&~e,n!==0&&(s=Fa(n))))):(o=i&~a,o!==0?s=Fa(o):r!==0?s=Fa(r):n||(n=i&~e,n!==0&&(s=Fa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function _c(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ti(n),s=1<<i;t|=e[i],n&=~s}return t}function yT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _x(){var e=wu;return wu<<=1,(wu&62914560)===0&&(wu=4194304),e}function Ap(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-ti(n),d=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&yx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function yx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ti(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function xx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ti(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Sx(e,t){var n=t&-t;return n=(n&42)!==0?1:dg(n),(n&(e.suspendedLanes|t))!==0?0:n}function dg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mx(){var e=pe.p;return e!==0?e:(e=window.event,e===void 0?32:i1(e.type))}function w_(e,t){var n=pe.p;try{return pe.p=e,t()}finally{pe.p=n}}var ws=Math.random().toString(36).slice(2),un="__reactFiber$"+ws,Vn="__reactProps$"+ws,Ao="__reactContainer$"+ws,R_="__reactEvents$"+ws,ST="__reactListeners$"+ws,MT="__reactHandles$"+ws,C_="__reactResources$"+ws,xc="__reactMarker$"+ws,ph="__reactLoad$"+ws;function Hh(e){delete e[un],delete e[Vn],delete e[ST],delete e[MT]}function Ga(e){var t;if(t=e[un])return t;for(var n=e.parentNode;n;){if(t=n[Ao]||n[un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wy(e);e!==null;){if(n=e[un])return n;e=Wy(e)}return t}e=n,n=e.parentNode}return null}function wo(e){if(e=e[un]||e[Ao]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function no(e){var t=e[C_];return t||(t=e[C_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function an(e){e[xc]=!0}function bx(e){e[ph]=void 0}var Ex=new Set,Tx={};function sr(e,t){po(e,t),po(e+"Capture",t)}function po(e,t){for(Tx[e]=t,e=0;e<t.length;e++)Ex.add(t[e])}var bT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),D_={},U_={};function ET(e){return cm.call(U_,e)?!0:cm.call(D_,e)?!1:bT.test(e)?U_[e]=!0:(D_[e]=!0,!1)}var fe=!1;function N_(){var e=fe;return fe=!1,e}function qu(e,t,n){if(ET(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Ru(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ms(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Zn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ax(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function TT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function um(e){if(!e._valueTracker){var t=Ax(e)?"checked":"value";e._valueTracker=TT(e,t,""+e[t])}}function wx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ax(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var AT=/[\n"\\]/g;function _i(e){return e.replace(AT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Zn(t)):e.value!==""+Zn(t)&&(e.value=""+Zn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?wp(e,Zn(e.value)):wp(e,Zn(t)):n!=null?wp(e,Zn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Zn(o):e.removeAttribute("name")}function Rx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){um(e);return}n=n!=null?""+Zn(n):"",t=t!=null?""+Zn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i!=null?i:s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),um(e)}function wp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function io(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Cx(e,t,n){if(t!=null&&(t=""+Zn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Zn(n):""}function Dx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(zl(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Zn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),um(e)}function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function L_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||wT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ux(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",fe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(L_(e,s,i),fe=!0)}else for(var a in t)t.hasOwnProperty(a)&&L_(e,a,t[a])}function mg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),CT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wu(e){return CT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var fm=null;function gg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,so=null;function O_(e){var t=wo(e);if(t&&(e=t.stateNode)){var n=e[Vn]||null;t:switch(e=t.stateNode,t.type){case"input":if(hm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_i(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Vn]||null;if(!s)throw Error(J(90));hm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&wx(i)}break t;case"textarea":Cx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&io(e,!!n.multiple,t,!1)}}}var Rp=!1;function Nx(e,t,n){if(Rp)return e(t,n);Rp=!0;try{var i=e(t);return i}finally{if(Rp=!1,(Yr!==null||so!==null)&&(tf(),Yr&&(t=Yr,e=so,so=Yr=null,O_(t),e)))for(t=0;t<e.length;t++)O_(e[t])}}function ec(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Vn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var Ss=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),dm=!1;if(Ss)try{Br={},Object.defineProperty(Br,"passive",{get:function(){dm=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch(e){dm=!1}var Br,Qs=null,vg=null,Yu=null;function Lx(){if(Yu)return Yu;var e,t=vg,n=t.length,i,s="value"in Qs?Qs.value:Qs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Yu=s.slice(e,1<i?1-i:void 0)}function Zu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cu(){return!0}function I_(){return!1}function Dn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Cu:I_,this.isPropagationStopped=I_,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=Dn(va),Sc=Te({},va,{view:0,detail:0}),DT=Dn(Sc),Cp,Dp,Ul,Gh=Te({},Sc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_g,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(Cp=e.screenX-Ul.screenX,Dp=e.screenY-Ul.screenY):Dp=Cp=0,Ul=e),Cp)},movementY:function(e){return"movementY"in e?e.movementY:Dp}}),P_=Dn(Gh),UT=Te({},Gh,{dataTransfer:0}),NT=Dn(UT),LT=Te({},Sc,{relatedTarget:0}),Up=Dn(LT),OT=Te({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),IT=Dn(OT),PT=Te({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zT=Dn(PT),BT=Te({},va,{data:0}),z_=Dn(BT),FT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=VT[e])?!!t[e]:!1}function _g(){return GT}var kT=Te({},Sc,{key:function(e){if(e.key){var t=FT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?HT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_g,charCode:function(e){return e.type==="keypress"?Zu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),XT=Dn(kT),qT=Te({},Gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),B_=Dn(qT),WT=Te({},va,{submitter:0}),YT=Dn(WT),ZT=Te({},Sc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_g}),JT=Dn(ZT),KT=Te({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),QT=Dn(KT),jT=Te({},Gh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$T=Dn(jT),tA=Te({},va,{newState:0,oldState:0,source:0}),eA=Dn(tA),nA=[9,13,27,32],yg=Ss&&"CompositionEvent"in window,Vl=null;Ss&&"documentMode"in document&&(Vl=document.documentMode);var iA=Ss&&"TextEvent"in window&&!Vl,Ox=Ss&&(!yg||Vl&&8<Vl&&11>=Vl),F_=" ",H_=!1;function Ix(e,t){switch(e){case"keyup":return nA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Px(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function sA(e,t){switch(e){case"compositionend":return Px(t);case"keypress":return t.which!==32?null:(H_=!0,F_);case"textInput":return e=t.data,e===F_&&H_?null:e;default:return null}}function aA(e,t){if(Zr)return e==="compositionend"||!yg&&Ix(e,t)?(e=Lx(),Yu=vg=Qs=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ox&&t.locale!=="ko"?null:t.data;default:return null}}var rA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function V_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rA[e.type]:t==="textarea"}function zx(e,t,n,i){Yr?so?so.push(i):so=[i]:Yr=i,t=Ph(t,"onChange"),0<t.length&&(n=new Vh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Gl=null,nc=null;function oA(e){NM(e,0)}function kh(e){var t=Bl(e);if(wx(t))return e}function G_(e,t){if(e==="change")return t}var Bx=!1;Ss&&(Ss?(Uu="oninput"in document,Uu||(Np=document.createElement("div"),Np.setAttribute("oninput","return;"),Uu=typeof Np.oninput=="function"),Du=Uu):Du=!1,Bx=Du&&(!document.documentMode||9<document.documentMode));var Du,Uu,Np;function k_(){Gl&&(Gl.detachEvent("onpropertychange",Fx),nc=Gl=null)}function Fx(e){if(e.propertyName==="value"&&kh(nc)){var t=[];zx(t,nc,e,gg(e)),Nx(oA,t)}}function lA(e,t,n){e==="focusin"?(k_(),Gl=t,nc=n,Gl.attachEvent("onpropertychange",Fx)):e==="focusout"&&k_()}function cA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kh(nc)}function uA(e,t){if(e==="click")return kh(t)}function hA(e,t){if(e==="input"||e==="change")return kh(t)}function fA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ni=typeof Object.is=="function"?Object.is:fA;function ic(e,t){if(ni(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!cm.call(t,s)||!ni(e[s],t[s]))return!1}return!0}function pm(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function q_(e,t){var n=X_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=X_(n)}}function Hx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(i){n=!1}if(n)e=t.contentWindow;else break;t=pm(e.document)}return t}function xg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dA=Ss&&"documentMode"in document&&11>=document.documentMode,Jr=null,mm=null,kl=null,gm=!1;function W_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gm||Jr==null||Jr!==pm(i)||(i=Jr,"selectionStart"in i&&xg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kl&&ic(kl,i)||(kl=i,i=Ph(mm,"onSelect"),0<i.length&&(t=new Vh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Jr)))}function za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Lp={},Gx={};Ss&&(Gx=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function ar(e){if(Lp[e])return Lp[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gx)return Lp[e]=t[n];return e}var kx=ar("animationend"),Xx=ar("animationiteration"),qx=ar("animationstart"),pA=ar("transitionrun"),mA=ar("transitionstart"),gA=ar("transitioncancel"),Wx=ar("transitionend"),Yx=new Map,vm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vm.push("scrollEnd");function Ni(e,t){Yx.set(e,t),sr(t,[e])}var vA=0;function Ms(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ui.identifierPrefix;var n=vA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Y_(e){if(e==null||typeof e=="string")return e;var t=null,n=ho;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t==null?e.default:t}function Rs(e,t){return e=Y_(e),t=Y_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var mh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mi=[],Qr=0,Sg=0;function Xh(){for(var e=Qr,t=Sg=Qr=0;t<e;){var n=mi[t];mi[t++]=null;var i=mi[t];mi[t++]=null;var s=mi[t];mi[t++]=null;var a=mi[t];if(mi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Zx(n,s,a)}}function qh(e,t,n,i){mi[Qr++]=e,mi[Qr++]=t,mi[Qr++]=n,mi[Qr++]=i,Sg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Mg(e,t,n,i){return qh(e,t,n,i),gh(e)}function rr(e,t){return qh(e,null,null,t),gh(e)}function Zx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ti(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function gh(e){if(50<$l)throw $l=0,sh=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jr={};function _A(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,t,n,i){return new _A(e,t,n,i)}function bg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ys(e,t){var n=e.alternate;return n===null?(n=Bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Jx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ju(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")bg(i)&&(r=1);else if(typeof i=="string")r=Xw(e,n,$i.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case sm:return e=Bn(31,n,t,s),e.elementType=sm,e.lanes=a,e;case qr:return qa(n.children,s,a,t);case fx:r=8,s|=24;break;case em:return e=Bn(12,n,t,s|2),e.elementType=em,e.lanes=a,e;case nm:return e=Bn(13,n,t,s),e.elementType=nm,e.lanes=a,e;case im:return e=Bn(19,n,t,s),e.elementType=im,e.lanes=a,e;case aT:case am:return e=s|32,e=Bn(30,n,t,e),e.elementType=am,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ji:r=10;break t;case dx:r=9;break t;case ug:r=11;break t;case hg:r=14;break t;case Ys:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=Bn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function qa(e,t,n,i){return e=Bn(7,e,i,t),e.lanes=n,e}function Op(e,t,n){return e=Bn(6,e,null,t),e.lanes=n,e}function Kx(e){var t=Bn(18,null,null,0);return t.stateNode=e,t}function Ip(e,t,n){return t=Bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Z_=new WeakMap;function yi(e,t){if(typeof e=="object"&&e!==null){var n=Z_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:A_(t)},Z_.set(e,t),t)}return{value:e,source:t,stack:A_(t)}}var $r=[],to=0,vh=null,sc=0,gi=[],vi=0,fa=null,Qi=1,ji="";function vs(e,t){$r[to++]=sc,$r[to++]=vh,vh=e,sc=t}function Qx(e,t,n){gi[vi++]=Qi,gi[vi++]=ji,gi[vi++]=fa,fa=e;var i=Qi;e=ji;var s=32-ti(i)-1;i&=~(1<<s),n+=1;var a=32-ti(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Qi=1<<32-ti(t)+s|n<<s|i,ji=a+e}else Qi=1<<a|n<<s|i,ji=e}function Wh(e){e.return!==null&&(vs(e,1),Qx(e,1,0))}function Eg(e){for(;e===vh;)vh=$r[--to],$r[to]=null,sc=$r[--to],$r[to]=null;for(;e===fa;)fa=gi[--vi],gi[vi]=null,ji=gi[--vi],gi[vi]=null,Qi=gi[--vi],gi[vi]=null}function jx(e,t){gi[vi++]=Qi,gi[vi++]=ji,gi[vi++]=fa,Qi=t.id,ji=t.overflow,fa=e}var rn=null,Ce=null,te=!1,ia=null,xi=!1,_m=Error(J(519));function da(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ac(yi(t,e)),_m}function J_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[un]=e,t[Vn]=i,n){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(n=0;n<cc.length;n++)ae(cc[n],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),Rx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),Dx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||OM(t.textContent,n)?(i.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),i.onScroll!=null&&ae("scroll",t),i.onScrollEnd!=null&&ae("scrollend",t),i.onClick!=null&&(t.onclick=Ki),t=!0):t=!1,t||da(e,!0)}function _h(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:rn=rn.return}}function Fr(e){if(e!==rn)return!1;if(!te)return _h(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ng(e.type,e.memoizedProps)),n=!n),n&&Ce&&da(e),_h(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ce=qy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ce=qy(e)}else t===27?(t=Ce,_a(e.type)?(e=rg,rg=null,Ce=e):Ce=t):Ce=rn?Si(e.stateNode.nextSibling):null;return!0}function Ja(){Ce=rn=null,te=!1}function Pp(){var e=ia;return e!==null&&(Pn===null?Pn=e:Pn.push.apply(Pn,e),ia=null),e}function ac(e){ia===null?ia=[e]:ia.push(e)}var ym=ns(null),or=null,_s=null;function js(e,t,n){De(ym,t._currentValue),t._currentValue=n}function xs(e){e._currentValue=ym.current,fn(ym)}function Ku(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function xm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ku(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Ku(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Ku(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ka(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;ni(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===uh.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}s=s.return}return e!==null&&xm(t,e,n,i),t.flags|=262144,e!==null}function yh(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){or=e,_s=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return $x(or,e)}function Nu(e,t){return or===null&&Qa(e),$x(e,t)}function $x(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_s===null){if(e===null)throw Error(J(308));_s=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _s=_s.next=t;return n}var yA=typeof AbortController!="undefined"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},xA=je.unstable_scheduleCallback,SA=je.unstable_NormalPriority,We={$$typeof:Ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tg(){return{controller:new yA,data:new Map,refCount:0}}function Mc(e){e.refCount--,e.refCount===0&&xA(SA,function(){e.controller.abort()})}function K_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Fl=null;function MA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Xl=null,Sm=0,ja=0,ao=null;function bA(e,t){if(Xl===null){var n=Xl=[];Sm=0,ja=$g(),ao={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sm++,t.then(Q_,Q_),t}function Q_(){if(--Sm===0&&(Fl=null,Xl!==null)){ao!==null&&(ao.status="fulfilled");var e=Xl;Xl=null,ja=0,ao=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function EA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var j_=Vt.S;Vt.S=function(e,t){if(vM=jn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&bA(e,t),Fl!==null)for(var n=xo;n!==null;)K_(n,Fl),n=n.next;if(n=e.types,n!==null){for(var i=xo;i!==null;)K_(i,n),i=i.next;if(ja!==0){i=Fl,i===null&&(i=Fl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}j_!==null&&j_(e,t)};var Wa=ns(null);function Ag(){var e=Wa.current;return e!==null?e:Ee.pooledCache}function Qu(e,t){t===null?De(Wa,Wa.current):De(Wa,t.pool)}function tS(){var e=Ag();return e===null?null:{parent:We._currentValue,pool:e}}var Ro=Error(J(460)),wg=Error(J(474)),Yh=Error(J(542)),xh={then:function(){}};function $_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function eS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ki,Ki),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ey(e),e===void 0&&!("reason"in t)?Error(J(600)):e;default:if(typeof t.status=="string")t.then(Ki,Ki);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ey(e),e}throw Ya=t,Ro}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ya=n,Ro):n}}var Ya=null;function ty(){if(Ya===null)throw Error(J(459));var e=Ya;return Ya=null,e}function ey(e){if(e===Ro||e===Yh)throw Error(J(483))}var ro=null,rc=0;function Lu(e){var t=rc;return rc+=1,ro===null&&(ro=[]),eS(ro,e,t)}function Xs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ou(e,t){throw t.$$typeof===sT?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nS(e){function t(f,v){if(e){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function s(f,v){return f=ys(f,v),f.index=0,f.sibling=null,f}function a(f,v,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,_,y){return v===null||v.tag!==6?(v=Op(_,f.mode,y),v.return=f,v):(v=s(v,_),v.return=f,v)}function l(f,v,_,y){var A=_.type;return A===qr?(f=u(f,v,_.props.children,y,_.key),Xs(f,_),f):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ys&&Ha(A)===v.type)?(v=s(v,_.props),Xs(v,_),v.return=f,v):(v=Ju(_.type,_.key,_.props,null,f.mode,y),Xs(v,_),v.return=f,v)}function c(f,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Ip(_,f.mode,y),v.return=f,v):(v=s(v,_.children||[]),v.return=f,v)}function u(f,v,_,y,A){return v===null||v.tag!==7?(v=qa(_,f.mode,y,A),v.return=f,v):(v=s(v,_),v.return=f,v)}function d(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Op(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eu:return _=Ju(v.type,v.key,v.props,null,f.mode,_),Xs(_,v),_.return=f,_;case Pl:return v=Ip(v,f.mode,_),v.return=f,v;case Ys:return v=Ha(v),d(f,v,_)}if(zl(v)||Dl(v))return v=qa(v,f.mode,_,null),v.return=f,v;if(typeof v.then=="function")return d(f,Lu(v),_);if(v.$$typeof===Ji)return d(f,Nu(f,v),_);Ou(f,v)}return null}function h(f,v,_,y){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(f,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Eu:return _.key===A?l(f,v,_,y):null;case Pl:return _.key===A?c(f,v,_,y):null;case Ys:return _=Ha(_),h(f,v,_,y)}if(zl(_)||Dl(_))return A!==null?null:u(f,v,_,y,null);if(typeof _.then=="function")return h(f,v,Lu(_),y);if(_.$$typeof===Ji)return h(f,v,Nu(f,_),y);Ou(f,_)}return null}function p(f,v,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(_)||null,o(v,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Eu:return f=f.get(y.key===null?_:y.key)||null,l(v,f,y,A);case Pl:return f=f.get(y.key===null?_:y.key)||null,c(v,f,y,A);case Ys:return y=Ha(y),p(f,v,_,y,A)}if(zl(y)||Dl(y))return f=f.get(_)||null,u(v,f,y,A,null);if(typeof y.then=="function")return p(f,v,_,Lu(y),A);if(y.$$typeof===Ji)return p(f,v,_,Nu(v,y),A);Ou(v,y)}return null}function g(f,v,_,y){for(var A=null,R=null,w=v,U=v=0,E=null;w!==null&&U<_.length;U++){w.index>U?(E=w,w=null):E=w.sibling;var S=h(f,w,_[U],y);if(S===null){w===null&&(w=E);break}e&&w&&S.alternate===null&&t(f,w),v=a(S,v,U),R===null?A=S:R.sibling=S,R=S,w=E}if(U===_.length)return n(f,w),te&&vs(f,U),A;if(w===null){for(;U<_.length;U++)w=d(f,_[U],y),w!==null&&(v=a(w,v,U),R===null?A=w:R.sibling=w,R=w);return te&&vs(f,U),A}for(w=i(w);U<_.length;U++)E=p(w,f,U,_[U],y),E!==null&&(e&&(S=E.alternate,S!==null&&w.delete(S.key===null?U:S.key)),v=a(E,v,U),R===null?A=E:R.sibling=E,R=E);return e&&w.forEach(function(D){return t(f,D)}),te&&vs(f,U),A}function x(f,v,_,y){if(_==null)throw Error(J(151));for(var A=null,R=null,w=v,U=v=0,E=null,S=_.next();w!==null&&!S.done;U++,S=_.next()){w.index>U?(E=w,w=null):E=w.sibling;var D=h(f,w,S.value,y);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(f,w),v=a(D,v,U),R===null?A=D:R.sibling=D,R=D,w=E}if(S.done)return n(f,w),te&&vs(f,U),A;if(w===null){for(;!S.done;U++,S=_.next())S=d(f,S.value,y),S!==null&&(v=a(S,v,U),R===null?A=S:R.sibling=S,R=S);return te&&vs(f,U),A}for(w=i(w);!S.done;U++,S=_.next())S=p(w,f,U,S.value,y),S!==null&&(e&&(E=S.alternate,E!==null&&w.delete(E.key===null?U:E.key)),v=a(S,v,U),R===null?A=S:R.sibling=S,R=S);return e&&w.forEach(function(F){return t(f,F)}),te&&vs(f,U),A}function m(f,v,_,y){if(typeof _=="object"&&_!==null&&_.type===qr&&_.key===null&&_.props.ref===void 0&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Eu:t:{for(var A=_.key;v!==null;){if(v.key===A){if(A=_.type,A===qr){if(v.tag===7){n(f,v.sibling),y=s(v,_.props.children),Xs(y,_),y.return=f,f=y;break t}}else if(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ys&&Ha(A)===v.type){n(f,v.sibling),y=s(v,_.props),Xs(y,_),y.return=f,f=y;break t}n(f,v);break}else t(f,v);v=v.sibling}_.type===qr?(y=qa(_.props.children,f.mode,y,_.key),Xs(y,_),y.return=f,f=y):(y=Ju(_.type,_.key,_.props,null,f.mode,y),Xs(y,_),y.return=f,f=y)}return r(f);case Pl:t:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),y=s(v,_.children||[]),y.return=f,f=y;break t}else{n(f,v);break}else t(f,v);v=v.sibling}y=Ip(_,f.mode,y),y.return=f,f=y}return r(f);case Ys:return _=Ha(_),m(f,v,_,y)}if(zl(_))return g(f,v,_,y);if(Dl(_)){if(A=Dl(_),typeof A!="function")throw Error(J(150));return _=A.call(_),x(f,v,_,y)}if(typeof _.then=="function")return m(f,v,Lu(_),y);if(_.$$typeof===Ji)return m(f,v,Nu(f,_),y);Ou(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),y=s(v,_),y.return=f,f=y):(n(f,v),y=Op(_,f.mode,y),y.return=f,f=y),r(f)):n(f,v)}return function(f,v,_,y){try{rc=0;var A=m(f,v,_,y);return ro=null,A}catch(w){if(w===Ro||w===Yh)throw w;var R=Bn(29,w,null,f.mode);return R.lanes=y,R.return=f,R}}}var $a=nS(!0),iS=nS(!1),Zs=!1;function Rg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=gh(e),Zx(e,null,n),t}return qh(e,i,t,n),gh(e)}function ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xx(e,n)}}function zp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bm=!1;function Wl(){if(bm){var e=ao;if(e!==null)throw e}}function Yl(e,t,n,i){bm=!1;var s=e.updateQueue;Zs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(le&h)===h:(i&h)===h){h!==0&&h===ja&&(bm=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;h=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,h);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break t;d=Te({},d,h);break t;case 2:Zs=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),ga|=r,e.lanes=r,e.memoizedState=d}}function sS(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function aS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)sS(n[e],t)}var pa=ns(null),Sh=ns(0);function ny(e,t){e=As,De(Sh,e),De(pa,t),As=e|t.baseLanes}function Em(){De(Sh,As),De(pa,pa.current)}function Cg(){As=Sh.current,fn(pa),fn(Sh)}var mn=ns(null),xn=null;function ra(e){var t=e.alternate;De(dn,dn.current&1),De(mn,e),xn===null&&(t===null||pa.current!==null||t.memoizedState!==null)&&(xn=e)}function Tm(e){De(dn,dn.current),De(mn,e),xn===null&&(xn=e)}function rS(e){e.tag===22?(De(dn,dn.current),De(mn,e),xn===null&&(xn=e)):oa()}function oa(){De(dn,dn.current),De(mn,mn.current)}function Jn(e){fn(mn),xn===e&&(xn=null),fn(dn)}var dn=ns(0);function oc(e,t){De(mn,mn.current),De(dn,t)}function Dg(e){fn(dn),fn(mn),xn===e&&(xn=null)}function Mh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ag(n)||i0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bs=0,Wt=null,be=null,qe=null,bh=!1,oo=!1,tr=!1,Eh=0,lc=0,lo=null,TA=0;function He(){throw Error(J(321))}function Ug(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ni(e[n],t[n]))return!1;return!0}function Ng(e,t,n,i,s,a){return bs=a,Wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vt.H=e===null||e.memoizedState===null?zS:BS,tr=!1,a=n(i,s),tr=!1,oo&&(a=lS(t,n,i,s)),oS(e),a}function oS(e){Vt.H=Th;var t=be!==null&&be.next!==null;if(bs=0,qe=be=Wt=null,bh=!1,lc=0,lo=null,t)throw Error(J(300));e===null||Ye||(e=e.dependencies,e!==null&&yh(e)&&(Ye=!0))}function lS(e,t,n,i){Wt=e;var s=0;do{if(oo&&(lo=null),lc=0,oo=!1,25<=s)throw Error(J(301));if(s+=1,qe=be=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Vt.H=LA,a=t(n,i)}while(oo);return a}function AA(){var e=Vt.H,t=e.useState()[0];return t=typeof t.then=="function"?bc(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(Wt.flags|=1024),t}function Lg(){var e=Eh!==0;return Eh=0,e}function Og(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ig(e){if(bh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bh=!1}bs=0,qe=be=Wt=null,oo=!1,lc=Eh=0,lo=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Wt.memoizedState=qe=e:qe=qe.next=e,qe}function ke(){if(be===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=qe===null?Wt.memoizedState:qe.next;if(t!==null)qe=t,be=e;else{if(e===null)throw Wt.alternate===null?Error(J(467)):Error(J(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},qe===null?Wt.memoizedState=qe=e:qe=qe.next=e}return qe}function Zh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bc(e){var t=lc;return lc+=1,lo===null&&(lo=[]),e=eS(lo,e,t),t=Wt,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,Vt.H=t===null||t.memoizedState===null?zS:BS),e}function Jh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bc(e);if(e.$$typeof===oT)return;if(e.$$typeof===Ji)return hn(e)}throw Error(J(438,String(e)))}function Pg(e){var t=null,n=Wt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Wt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zh(),Wt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=rT;return t.index++,n}function Es(e,t){return typeof t=="function"?t(e):t}function ju(e){var t=ke();return zg(t,be,e)}function zg(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(le&d)===d:(bs&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===ja&&(u=!0);else if((bs&h)===h){c=c.next,h===ja&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Wt.lanes|=h,ga|=h;d=c.action,tr&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Wt.lanes|=d,ga|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ni(a,e.memoizedState)&&(Ye=!0,u&&(n=ao,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Bp(e){var t=ke(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ni(a,t.memoizedState)||(Ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function cS(e,t,n){var i=Wt,s=ke(),a=te;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!ni((be||s).memoizedState,n);if(r&&(s.memoizedState=n,Ye=!0),s=s.queue,Bg(fS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||qe!==null&&(qe.memoizedState.tag&1)!==0,go(e?9:8,{destroy:void 0},hS.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ee===null)throw Error(J(349));a||(bs&127)!==0||uS(i,t,n)}return n}function uS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Wt.updateQueue,t===null?(t=Zh(),Wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hS(e,t,n,i){t.value=n,t.getSnapshot=i,dS(t)&&pS(e)}function fS(e,t,n){return n(function(){dS(t)&&pS(e)})}function dS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ni(e,n)}catch(i){return!0}}function pS(e){var t=rr(e,2);t!==null&&Fn(t,e,2)}function Am(e){var t=Cn();if(typeof e=="function"){var n=e;if(e=n(),tr){Ks(!0);try{n()}finally{Ks(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:e},t}function mS(e,t,n,i){return e.baseState=n,zg(e,be,typeof i=="function"?i:Es)}function wA(e,t,n,i,s){if(Qh(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Vt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,gS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function gS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Vt.T,r={};r.types=a!==null?a.types:null,Vt.T=r;try{var o=n(s,i),l=Vt.S;l!==null&&l(r,o),iy(e,t,o)}catch(c){wm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Vt.T=a}}else try{a=n(s,i),iy(e,t,a)}catch(c){wm(e,t,c)}}function iy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){sy(e,t,i)},function(i){return wm(e,t,i)}):sy(e,t,n)}function sy(e,t,n){t.status="fulfilled",t.value=n,vS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gS(e,n)))}function wm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,vS(t),t=t.next;while(t!==i)}e.action=null}function vS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _S(e,t){return t}function ay(e,t){if(te){var n=Ee.formState;if(n!==null){t:{var i=Wt;if(te){if(Ce){e:{for(var s=Ce,a=xi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Si(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ce=Si(s.nextSibling),i=s.data==="F!";break t}}da(i)}i=!1}i&&(t=n[0])}}return n=Cn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_S,lastRenderedState:t},n.queue=i,n=OS.bind(null,Wt,i),i.dispatch=n,i=Am(!1),a=Gg.bind(null,Wt,!1,i.queue),i=Cn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=wA.bind(null,Wt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function ry(e){var t=ke();return yS(t,be,e)}function yS(e,t,n){if(t=zg(e,t,_S)[0],e=ju(Es)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=bc(t)}catch(r){throw r===Ro?Yh:r}else i=t;t=ke();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Wt.flags|=2048,go(9,{destroy:void 0},RA.bind(null,s,n),null)),[i,a,e]}function RA(e,t){e.action=t}function oy(e){var t=ke(),n=be;if(n!==null)return yS(t,n,e);ke(),t=t.memoizedState,n=ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function go(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Wt.updateQueue,t===null&&(t=Zh(),Wt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function xS(){return ke().memoizedState}function $u(e,t,n,i){var s=Cn();Wt.flags|=e,s.memoizedState=go(1|t,{destroy:void 0},n,i===void 0?null:i)}function Kh(e,t,n,i){var s=ke();i=i===void 0?null:i;var a=s.memoizedState.inst;be!==null&&i!==null&&Ug(i,be.memoizedState.deps)?s.memoizedState=go(t,a,n,i):(Wt.flags|=e,s.memoizedState=go(1|t,a,n,i))}function ly(e,t){$u(8390656,8,e,t)}function Bg(e,t){Kh(2048,8,e,t)}function CA(e){Wt.flags|=4;var t=Wt.updateQueue;if(t===null)t=Zh(),Wt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function SS(e){var t=ke().memoizedState;return CA({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function MS(e,t){return Kh(4,2,e,t)}function bS(e,t){return Kh(4,4,e,t)}function ES(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function TS(e,t,n){n=n!=null?n.concat([e]):null,Kh(4,4,ES.bind(null,t,e),n)}function Fg(){}function AS(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Ug(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function wS(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Ug(t,i[1]))return i[0];if(i=e(),tr){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i}function Hg(e,t,n){return n===void 0||(bs&1073741824)!==0&&(le&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=yM(),Wt.lanes|=e,ga|=e,n)}function RS(e,t,n,i){return ni(n,t)?n:pa.current!==null?(e=Hg(e,n,i),ni(e,t)||(Ye=!0),e):(bs&106)===0||(bs&1073741824)!==0&&(le&261930)===0?(Ye=!0,e.memoizedState=n):(e=yM(),Wt.lanes|=e,ga|=e,t)}function CS(e,t,n,i,s){var a=pe.p;pe.p=a!==0&&8>a?a:8;var r=Vt.T,o={};o.types=r!==null?r.types:null,Vt.T=o,Gg(e,!1,t,n);try{var l=s(),c=Vt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=EA(l,i);Zl(e,t,u,ei(e))}else Zl(e,t,i,ei(e))}catch(d){Zl(e,t,{then:function(){},status:"rejected",reason:d},ei())}finally{pe.p=a,r!==null&&o.types!==null&&(r.types=o.types),Vt.T=r}}function DA(){}function Rm(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=DS(e).queue;CS(e,s,t,Xa,n===null?DA:function(){return US(e),n(i)})}function DS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Xa,baseState:Xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:Xa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function US(e){var t=DS(e);t.next===null&&(t=e.alternate.memoizedState),Zl(e,t.next.queue,{},ei())}function Vg(){return hn(bo)}function NS(){return ke().memoizedState}function LS(){return ke().memoizedState}function UA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ei();e=sa(n);var i=aa(t,e,n);i!==null&&(Fn(i,t,n),ql(i,t,n)),t={cache:Tg()},e.payload=t;return}t=t.return}}function NA(e,t,n){var i=ei();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qh(e)?IS(t,n):(n=Mg(e,t,n,i),n!==null&&(Fn(n,e,i),PS(n,t,i)))}function OS(e,t,n){var i=ei();Zl(e,t,n,i)}function Zl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qh(e))IS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ni(o,r))return qh(e,t,s,0),Ee===null&&Xh(),!1}catch(l){}if(n=Mg(e,t,s,i),n!==null)return Fn(n,e,i),PS(n,t,i),!0}return!1}function Gg(e,t,n,i){if(i={lane:2,revertLane:$g(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Qh(e)){if(t)throw Error(J(479))}else t=Mg(e,n,i,2),t!==null&&Fn(t,e,2)}function Qh(e){var t=e.alternate;return e===Wt||t!==null&&t===Wt}function IS(e,t){oo=bh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function PS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xx(e,n)}}var Th={readContext:hn,use:Jh,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He,useEffectEvent:He},zS={readContext:hn,use:Jh,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:ly,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$u(4194308,4,ES.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $u(4194308,4,e,t)},useInsertionEffect:function(e,t){$u(4,2,e,t)},useMemo:function(e,t){var n=Cn();t=t===void 0?null:t;var i=e();if(tr){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Cn();if(n!==void 0){var s=n(t);if(tr){Ks(!0);try{n(t)}finally{Ks(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=NA.bind(null,Wt,e),[i.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:function(e){e=Am(e);var t=e.queue,n=OS.bind(null,Wt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fg,useDeferredValue:function(e,t){var n=Cn();return Hg(n,e,t)},useTransition:function(){var e=Am(!1);return e=CS.bind(null,Wt,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Wt,s=Cn();if(te){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),Ee===null)throw Error(J(349));(le&127)!==0||uS(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,ly(fS.bind(null,i,a,e),[e]),i.flags|=2048,go(9,{destroy:void 0},hS.bind(null,i,a,n,t),null),n},useId:function(){var e=Cn(),t=Ee.identifierPrefix;if(te){var n=ji,i=Qi;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Eh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=TA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vg,useFormState:ay,useActionState:ay,useOptimistic:function(e){var t=Cn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Gg.bind(null,Wt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Pg,useCacheRefresh:function(){return Cn().memoizedState=UA.bind(null,Wt)},useEffectEvent:function(e){var t=Cn(),n={impl:e};return t.memoizedState=n,function(){if((de&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},BS={readContext:hn,use:Jh,useCallback:AS,useContext:hn,useEffect:Bg,useImperativeHandle:TS,useInsertionEffect:MS,useLayoutEffect:bS,useMemo:wS,useReducer:ju,useRef:xS,useState:function(){return ju(Es)},useDebugValue:Fg,useDeferredValue:function(e,t){var n=ke();return RS(n,be.memoizedState,e,t)},useTransition:function(){var e=ju(Es)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:bc(e),t]},useSyncExternalStore:cS,useId:NS,useHostTransitionStatus:Vg,useFormState:ry,useActionState:ry,useOptimistic:function(e,t){var n=ke();return mS(n,be,e,t)},useMemoCache:Pg,useCacheRefresh:LS,useEffectEvent:SS},LA={readContext:hn,use:Jh,useCallback:AS,useContext:hn,useEffect:Bg,useImperativeHandle:TS,useInsertionEffect:MS,useLayoutEffect:bS,useMemo:wS,useReducer:Bp,useRef:xS,useState:function(){return Bp(Es)},useDebugValue:Fg,useDeferredValue:function(e,t){var n=ke();return be===null?Hg(n,e,t):RS(n,be.memoizedState,e,t)},useTransition:function(){var e=Bp(Es)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:bc(e),t]},useSyncExternalStore:cS,useId:NS,useHostTransitionStatus:Vg,useFormState:oy,useActionState:oy,useOptimistic:function(e,t){var n=ke();return be!==null?mS(n,be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Pg,useCacheRefresh:LS,useEffectEvent:SS};function Fp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ei(),s=sa(i);s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Fn(t,e,i),ql(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ei(),s=sa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Fn(t,e,i),ql(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ei(),i=sa(n);i.tag=2,t!=null&&(i.callback=t),t=aa(e,i,n),t!==null&&(Fn(t,e,n),ql(t,e,n))}};function cy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!ic(n,i)||!ic(s,a):!0}function uy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cm.enqueueReplaceState(t,t.state,null)}function er(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function FS(e){mh(e)}function HS(e){console.error(e)}function VS(e){mh(e)}function Ah(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function hy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Dm(e,t,n){return n=sa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ah(e,t)},n}function GS(e){return e=sa(e),e.tag=3,e}function kS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){hy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){hy(t,n,i),typeof s!="function"&&(la===null?la=new Set([this]):la.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function OA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ka(t,n,s,!0),n=mn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return xn===null?Oh():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===xh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Wp(e,i,s)),!1;case 22:return n.flags|=65536,i===xh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Wp(e,i,s)),!1}throw Error(J(435,n.tag))}return Wp(e,i,s),Oh(),!1}if(te)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==_m&&(e=Error(J(422),{cause:i}),ac(yi(e,n)))):(i!==_m&&(t=Error(J(423),{cause:i}),ac(yi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=yi(i,n),s=Dm(e.stateNode,i,s),zp(e,s),Ve!==4&&(Ve=2)),!1;var a=Error(J(520),{cause:i});if(a=yi(a,n),jl===null?jl=[a]:jl.push(a),Ve!==4&&(Ve=2),t===null)return!0;i=yi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Dm(n.stateNode,i,e),zp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(la===null||!la.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=GS(s),kS(s,e,n,i),zp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var kg=Error(J(461)),Ye=!1;function Ke(e,t,n,i){t.child=e===null?iS(t,null,n,i):$a(t,e.child,n,i)}function fy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Qa(t),i=Ng(e,t,n,r,a,s),o=Lg(),e!==null&&!Ye?(Og(e,t,s),Ts(e,t,s)):(te&&o&&Wh(t),t.flags|=1,Ke(e,t,i,s),t.child)}function dy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!bg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,XS(e,t,a,i,s)):(e=Ju(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!qg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:ic,n(r,i)&&e.ref===t.ref)return Ts(e,t,s)}return t.flags|=1,e=ys(a,i),e.ref=t.ref,e.return=t,t.child=e}function XS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(ic(a,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=a,qg(e,s))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Ts(e,t,s)}return Um(e,t,n,i,s)}function qS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return py(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qu(t,a!==null?a.cachePool:null),a!==null?ny(t,a):Em(),rS(t);else return i=t.lanes=536870912,py(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Qu(t,a.cachePool),ny(t,a),oa(),t.memoizedState=null):(e!==null&&Qu(t,null),Em(),oa());return Ke(e,t,s,n),t.child}function Jl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function py(e,t,n,i,s){var a=Ag();return a=a===null?null:{parent:We._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Qu(t,null),Em(),rS(t),e!==null&&Ka(e,t,i,!0),t.childLanes=s,null}function th(e,t){return t=jh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function my(e,t,n){return $a(t,e.child,null,n),e=th(t,t.pendingProps),e.flags|=2,Jn(t),t.memoizedState=null,e}function IA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(i.mode==="hidden")return e=th(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Jl(null,e);if(Tm(t),(e=Ce)?(e=qM(e,xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=Kx(e),n.return=t,t.child=n,rn=t,Ce=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return th(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Tm(t),s)if(t.flags&256)t.flags&=-257,t=my(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(Ye||Ka(e,t,n,!1),s=(n&e.childLanes)!==0,Ye||s){if(pa.current===null){if(i=Ee,i!==null&&(r=Sx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,rr(e,r),Fn(i,e,r),kg;Oh()}t=my(e,t,n)}else e=a.treeContext,Ce=Si(r.nextSibling),rn=t,te=!0,ia=null,xi=!1,e!==null&&jx(t,e),t=th(t,i),t.flags|=134221824;return t}return e=ys(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Um(e,t,n,i,s){return Qa(t),n=Ng(e,t,n,i,void 0,s),i=Lg(),e!==null&&!Ye?(Og(e,t,s),Ts(e,t,s)):(te&&i&&Wh(t),t.flags|=1,Ke(e,t,n,s),t.child)}function gy(e,t,n,i,s,a){return Qa(t),t.updateQueue=null,n=lS(t,i,n,s),oS(e),i=Lg(),e!==null&&!Ye?(Og(e,t,a),Ts(e,t,a)):(te&&i&&Wh(t),t.flags|=1,Ke(e,t,n,a),t.child)}function vy(e,t,n,i,s){if(Qa(t),t.stateNode===null){var a=jr,r=n.contextType;typeof r=="object"&&r!==null&&(a=hn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Cm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Rg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?hn(r):jr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Fp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Cm.enqueueReplaceState(a,a.state,null),Yl(t,i,a,s),Wl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=er(n,o);a.props=l;var c=a.context,u=n.contextType;r=jr,typeof u=="object"&&u!==null&&(r=hn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&uy(t,a,i,r),Zs=!1;var h=t.memoizedState;a.state=h,Yl(t,i,a,s),Wl(),c=t.memoizedState,o||h!==c||Zs?(typeof d=="function"&&(Fp(t,n,d,i),c=t.memoizedState),(l=Zs||cy(t,n,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Mm(e,t),r=t.memoizedProps,u=er(n,r),a.props=u,d=t.pendingProps,h=a.context,c=n.contextType,l=jr,typeof c=="object"&&c!==null&&(l=hn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&uy(t,a,i,l),Zs=!1,h=t.memoizedState,a.state=h,Yl(t,i,a,s),Wl();var p=t.memoizedState;r!==d||h!==p||Zs||e!==null&&e.dependencies!==null&&yh(e.dependencies)?(typeof o=="function"&&(Fp(t,n,o,i),p=t.memoizedState),(u=Zs||cy(t,n,u,i,h,p,l)||e!==null&&e.dependencies!==null&&yh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Vr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=$a(t,e.child,null,s),t.child=$a(t,null,n,s)):Ke(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ts(e,t,s),e}function _y(e,t,n,i){return Ja(),t.flags|=256,Ke(e,t,n,i),t.child}var Nm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lm(e){return{baseLanes:e,cachePool:tS()}}function Om(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qn),e}function WS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(s?ra(t):oa(),(e=Ce)?(e=qM(e,xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=Kx(e),n.return=t,t.child=n,rn=t,Ce=null)):e=null,e===null)throw da(t);return i0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(oa(),s=t.mode,a=jh({mode:"hidden",children:a},s),i=qa(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Lm(n),i.childLanes=Om(e,r,n),t.memoizedState=Nm,Jl(null,i)):(ra(t),Xg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return PA(e,t,a,r,i,l,o,n)}return s?(oa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=ys(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ys(l,s):(s=qa(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Jl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Lm(n):(a=s.cachePool,a!==null?(o=We._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=tS(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Om(e,r,n),t.memoizedState=Nm,Jl(e.child,i)):(ra(t),n=e.child,e=n.sibling,n=ys(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xg(e,t){return t=jh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jh(e,t){return e=Bn(22,e,null,t),e.lanes=0,e}function Iu(e,t,n){return $a(t,e.child,null,n),e=Xg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function PA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ra(t),t.flags&=-257,Iu(e,t,o)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,null):(oa(),a=s.fallback,r=t.mode,s=jh({mode:"visible",children:s.children},r),a=qa(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,$a(t,e.child,null,o),s=t.child,s.memoizedState=Lm(o),s.childLanes=Om(e,i,o),t.memoizedState=Nm,Jl(null,s));if(ra(t),i0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(J(419)),s.stack="",s.digest=i,ac({value:s,source:null,stack:null})),Iu(e,t,o)}if(Ye||Ka(e,t,o,!1),i=(o&e.childLanes)!==0,Ye||i){if(pa.current!==null)return Iu(e,t,o);if(i=Ee,i!==null&&(s=Sx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,rr(e,s),Fn(i,e,s),kg;return ag(a)||Oh(),Iu(e,t,o)}return ag(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ce=Si(a.nextSibling),rn=t,te=!0,ia=null,xi=!1,e!==null&&jx(t,e),t=Xg(t,s.children),t.flags|=134221824,t)}function yy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ku(e.return,t,n)}function xy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Mh(n)===null&&(t=e),e=e.sibling}return t}function Pu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Hp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Im(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=dn.current;if(t.flags&128)return oc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,oc(t,r),s==="backwards"&&e!==null?(Hp(e),Ke(e,t,i,n),Hp(e)):Ke(e,t,i,n),i=te?sc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yy(e,n,t);else if(e.tag===19)yy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=xy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Hp(t)),Pu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Mh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Pu(t,!0,n,null,a,i);break;case"together":Pu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=xy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Pu(t,!1,s,n,a,i)}return t.child}function Sy(e,t,n){var i=t.pendingProps;return js(t,t.type,i.value),Ke(e,t,i.children,n),t.child}function Ts(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ka(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=ys(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ys(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yh(e)))}function zA(e,t,n){switch(t.tag){case 3:hh(t,t.stateNode.containerInfo),js(t,We,e.memoizedState.cache),Ja();break;case 27:case 5:lm(t);break;case 4:hh(t,t.stateNode.containerInfo);break;case 10:js(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ra(t),t.flags|=128,null;i=Ka(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?WS(e,t,n):(ra(t),e=Ts(e,t,n),e!==null?e.sibling:null)}ra(t);break;case 19:if(t.flags&128)return Im(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ka(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Im(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),oc(t,dn.current),i)break;return null;case 22:return t.lanes=0,qS(e,t,n,t.pendingProps);case 24:js(t,We,e.memoizedState.cache)}return Ts(e,t,n)}function YS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!qg(e,n)&&(t.flags&128)===0)return Ye=!1,zA(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,te&&(t.flags&1048576)!==0&&Qx(t,sc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")bg(e)?(i=er(e,i),t.tag=1,t=vy(null,t,e,i,n)):(t.tag=0,t=Um(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===ug){t.tag=11,t=fy(null,t,e,i,n);break t}else if(s===hg){t.tag=14,t=dy(null,t,e,i,n);break t}else if(s===Ji){t.tag=10,t.type=e,t=Sy(null,t,n);break t}}throw t=rm(e)||e,Error(J(306,t,""))}}return t;case 0:return Um(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=er(i,t.pendingProps),vy(e,t,i,s,n);case 3:t:{if(hh(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Mm(e,t),Yl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,js(t,We,i),i!==a.cache&&xm(t,[We],n,!0),Wl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=_y(e,t,i,n);break t}else if(i!==s){s=yi(Error(J(424)),t),ac(s),t=_y(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Si(e.firstChild),rn=t,te=!0,ia=null,xi=!0,n=iS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Ja(),i===s){t=Ts(e,t,n);break t}Ke(e,t,i,n)}t=t.child}return t;case 26:return Vr(e,t),e===null?(n=Zy(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(t.stateNode=PM(t.type,t.pendingProps,na.current,t)):t.memoizedState=Zy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lm(t),e===null&&te&&(i=t.stateNode=WM(t.type,t.pendingProps,na.current),rn=t,xi=!0,s=Ce,_a(t.type)?(rg=s,Ce=Si(i.firstChild)):Ce=s),Ke(e,t,t.pendingProps.children,n),Vr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((s=i=Ce)&&(i=Cw(i,t.type,t.pendingProps,xi),i!==null?(t.stateNode=i,rn=t,Ce=Si(i.firstChild),xi=!1,s=!0):s=!1),s||da(t)),lm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,ng(s,a)?i=null:r!==null&&ng(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Ng(e,t,AA,null,null,n),bo._currentValue=s),Vr(e,t),Ke(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Ce)&&(n=Dw(n,t.pendingProps,xi),n!==null?(t.stateNode=n,rn=t,Ce=null,e=!0):e=!1),e||da(t)),null;case 13:return WS(e,t,n);case 4:return hh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=$a(t,null,i,n):Ke(e,t,i,n),t.child;case 11:return fy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Vr(e,t),Ke(e,t,i,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return Sy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Qa(t),s=hn(s),i=i(s),t.flags|=1,Ke(e,t,i,n),t.child;case 14:return dy(e,t,t.type,t.pendingProps,n);case 15:return XS(e,t,t.type,t.pendingProps,n);case 19:return Im(e,t,n);case 31:return IA(e,t,n);case 22:return qS(e,t,n,t.pendingProps);case 24:return Qa(t),i=hn(We),e===null?(s=Ag(),s===null&&(s=Ee,a=Tg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Rg(t),js(t,We,s)):((e.lanes&n)!==0&&(Mm(e,t),Yl(t,null,null,n),Wl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),js(t,We,i)):(i=a.cache,js(t,We,i),i!==s.cache&&xm(t,[We],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:te&&Wh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Vr(e,t),Ke(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function gs(e){e.flags|=4}function Vp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Qy(t,i):Qy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(MM())e.flags|=8192;else throw Ya=xh,wg}else e.flags&=-16777217}function My(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!KM(t))if(MM())e.flags|=8192;else throw Ya=xh,wg}function zu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_x():536870912,e.lanes|=t,vo|=t)}function Nl(e,t){if(!te)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function BA(e,t,n){var i=t.pendingProps;switch(Eg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xs(We),fo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fr(t)?gs(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pp())),Re(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(gs(t),a!==null?(Re(t),My(t,a)):(Re(t),Vp(t,s,null,i,n))):a?a!==e.memoizedState?(gs(t),Re(t),My(t,a)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&gs(t),Re(t),Vp(t,s,e,i,n)),null;case 27:if(fh(t),n=na.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gs(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Re(t),t.subtreeFlags&=-33554433,null}e=$i.current,Fr(t)?J_(t,e):(e=WM(s,i,n),t.stateNode=e,gs(t))}return Re(t),t.subtreeFlags&=-33554433,null;case 5:if(fh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gs(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Re(t),t.subtreeFlags&=-33554433,null}if(a=$i.current,Fr(t))J_(t,a);else{var r=hc(na.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[un]=t,a[Vn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(pn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&gs(t)}}return Re(t),t.subtreeFlags&=-33554433,Vp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&gs(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=na.current,Fr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=rn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[un]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||OM(e.nodeValue,n)),e||da(t,!0)}else e=hc(e).createTextNode(i),e[un]=t,t.stateNode=e}return Re(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Fr(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[un]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else n=Pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Jn(t),t):(Jn(t),null);if((t.flags&128)!==0)throw Error(J(558))}return Re(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Fr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[un]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else s=Pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Jn(t),t):(Jn(t),null)}return Jn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zu(t,t.updateQueue),Re(t),null);case 4:return fo(),e===null&&t0(t.stateNode.containerInfo),t.flags|=67108864,Re(t),null;case 10:return xs(t.type),Re(t),null;case 19:if(Dg(t),i=t.memoizedState,i===null)return Re(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Nl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Mh(e),a!==null){for(t.flags|=128,Nl(i,!1),e=a.updateQueue,t.updateQueue=e,zu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Jx(n,e),n=n.sibling;return oc(t,dn.current&1|2),te&&vs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&jn()>Nh&&(t.flags|=128,s=!0,Nl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Mh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,zu(t,e),Nl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!te)return Re(t),null}else 2*jn()-i.renderingStartTime>Nh&&n!==536870912&&(t.flags|=128,s=!0,Nl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=jn(),e.sibling=null,a=dn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||te?oc(t,a):(n=a,De(mn,t),De(dn,n),xn===null&&(xn=t)),te&&vs(t,i.treeForkCount),e}return Re(t),null;case 22:case 23:return Jn(t),Cg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&zu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&fn(Wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xs(We),Re(t),null;case 25:return null;case 30:return t.flags|=33554432,Re(t),null}throw Error(J(156,t.tag))}function FA(e,t){switch(Eg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xs(We),fo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fh(t),null;case 31:if(t.memoizedState!==null){if(Jn(t),t.alternate===null)throw Error(J(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Dg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return fo(),null;case 10:return xs(t.type),null;case 22:case 23:return Jn(t),Cg(),e!==null&&fn(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xs(We),null;case 25:return null;default:return null}}function ZS(e,t){switch(Eg(t),t.tag){case 3:xs(We),fo();break;case 26:case 27:case 5:fh(t);break;case 4:fo();break;case 31:t.memoizedState!==null&&Jn(t);break;case 13:Jn(t);break;case 19:Dg(t);break;case 10:xs(t.type);break;case 22:case 23:Jn(t),Cg(),e!==null&&fn(Wa);break;case 24:xs(We)}}function Ec(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){xe(t,t.return,o)}}function ma(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){xe(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){xe(t,t.return,u)}}function JS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{aS(t,n)}catch(i){xe(e,e.return,i)}}}function KS(e,t,n){n.props=er(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){xe(e,t,i)}}function Yi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Ms(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=HM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ii(e);Hn(e.child,!1,ww,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){xe(e,t,o)}}function cn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){xe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){xe(e,t,s)}else n.current=null}function wh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)XM(e.stateNode,t[n])}function by(e){for(var t=e.return;t!==null&&(Yg(t)&&XM(e.stateNode,t.stateNode),!Wg(t));)t=t.return}function Kl(e){for(var t=e.return;t!==null&&(Yg(t)&&Rw(e.stateNode,t.stateNode),!Wg(t));)t=t.return}function Wg(e){return e.tag===5||e.tag===3||e.tag===27}function Yg(e){return e&&e.tag===7&&e.stateNode!==null}function Pm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){xe(e,e.return,s)}}function Gp(e,t,n){try{var i=e.stateNode;cw(i,e.type,n,t),i[Vn]=t}catch(s){xe(e,e.return,s)}}function QS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function kp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||QS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki)),wh(e,i),fe=!0;else if(s!==4&&(s===27&&(wh(e,i),i=null,_a(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zm(e,t,n,i),e=e.sibling;e!==null;)zm(e,t,n,i),e=e.sibling}function Rh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),wh(e,i),fe=!0;else if(s!==4&&(s===27&&(wh(e,i),i=null,_a(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Rh(e,t,n,i),e=e.sibling;e!==null;)Rh(e,t,n,i),e=e.sibling}function jS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);pn(t,i,n),t[un]=e,t[Vn]=n}catch(a){xe(e,e.return,a)}}var Ch=!1,Kn=null;function Ey(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ch=!0)}var Zi=null;function Ty(){var e=Zi;return Zi=null,e}var zn=0;function Co(e,t,n,i,s){return zn=0,$S(e.child,t,n,i,s)}function $S(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=ig(r);i.push(o),o.view&&(a=!0)}else a||ig(r).view&&(a=!0);Ch=!0,zM(r,zn===0?t:t+"_"+zn,n),zn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||$S(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function es(e,t){for(;e!==null;)e.tag===5?BM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||es(e.child,t)),e=e.sibling}function eh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(eh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(J(544));var n=t.name;t=Rs(t.default,t.share),t!=="none"&&(Co(e,n,t,null,!1)||es(e.child,!1))}e=e.sibling}}function Bm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Ms(i,n),a=Rs(i.default,n.paired?i.share:i.enter);a!=="none"?Co(e,s,a,null,!1)?(eh(e),n.paired||t||_o(e,i.onEnter)):es(e.child,!1):eh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bm(e,t),e=e.sibling;else eh(e)}function Fm(e){if(Kn!==null&&Kn.size!==0){var t=Kn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Rs(n.default,n.share);if(a!=="none"&&(Co(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,_o(e,n.onShare)):es(e.child,!1)),t.delete(i),t.size===0)break}}}Fm(e)}e=e.sibling}}}function Hm(e){if(e.tag===30){var t=e.memoizedProps,n=Ms(t,e.stateNode),i=Kn!==null?Kn.get(n):void 0,s=Rs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Co(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Kn.delete(n),_o(e,t.onShare)):_o(e,t.onExit):es(e.child,!1)),Kn!==null&&Fm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hm(e),e=e.sibling;else Kn!==null&&Fm(e)}function tM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ms(t,e.stateNode);t=Rs(t.default,t.update),e.flags&=-5,t!=="none"&&Co(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&tM(e);e=e.sibling}}function Vm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,es(e.child,!1))}Vm(e)}e=e.sibling}}function nh(e){if(e.tag===30)e.stateNode.paired=null,es(e.child,!1),Vm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)nh(e),e=e.sibling;else Vm(e)}function eM(e){for(e=e.child;e!==null;)e.tag===30?es(e.child,!1):(e.subtreeFlags&33554432)!==0&&eM(e),e=e.sibling}function Zg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&zn<a.length){var c=a[zn],u=ig(l);(c.view||u.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(u.clip)d=!0;else{d=c.rect;var h=u.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&zM(l,zn===0?n:n+"_"+zn,s),o&&(e.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(l,zn===0?i:i+"_"+zn,t.memoizedProps)),zn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Zg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function nM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Ms(n,i),a=Rs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(mw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;zn=0,s=Zg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||_o(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&nM(e,t);e=e.sibling}}var nn=!1,me=!1,Xi=!1,Xp=!1,Ay=typeof WeakSet=="function"?WeakSet:Set,sn=null,qi=!1,Hl=!1,Dh=!1,Gm=!1;function HA(e,t,n){if(e=e.containerInfo,tg=Eo,e=Vx(e),xg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch(x){i=null;break t}var o=0,l=-1,c=-1,u=0,d=0,h=e,p=null;e:for(;;){for(var g;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break e;if(p===i&&++u===a&&(l=o),p===r&&++d===s&&(c=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(eg={focusedElem:e,selectionRange:i},Eo=!1,n=(n&335544064)===n,sn=t,t=n?9270:1024;sn!==null;){if(e=sn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Hm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Ey(e),Bu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Hm(i),Bu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Ey(e),Bu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,sn=i):(n&&tM(e),Bu(n))}}Kn=null}function Bu(e){for(;sn!==null;){var t=sn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=er(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){xe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)sg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":sg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Ms(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Rs(s.default,s.update),s!=="none"&&Co(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(J(163))}if(i=t.sibling,i!==null){i.return=t.return,sn=i;break}sn=t.return}}function iM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&Ec(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(n,n.return,r)}else{var s=er(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(n,n.return,r)}}i&64&&JS(n),i&512&&Yi(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{aS(e,t)}catch(r){xe(n,n.return,r)}}break;case 27:t===null&&i&4&&jS(n);case 26:case 5:Wi(e,n),t===null&&i&4&&Pm(n),i&512&&Yi(n,n.return);break;case 12:Wi(e,n);break;case 31:Wi(e,n),i&4&&oM(e,n);break;case 13:Wi(e,n),i&4&&lM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=jA.bind(null,n),Uw(e,n))));break;case 22:if(i=n.memoizedState!==null||nn,!i){var a=t!==null&&t.memoizedState!==null||me;t=nn,s=me,nn=i,(me=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ri(e,n,i)):Wi(e,n),nn=t,me=s}break;case 30:Wi(e,n),i&512&&Yi(n,n.return);break;case 7:i&512&&Yi(n,n.return);default:Wi(e,n)}}function km(e,t){for(e=e.child;e!==null;)sM(e,t),e=e.sibling}function sM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){xe(e,e.return,l)}Xm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,fe=!0}catch(l){xe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Gy(o,!0):Gy(e.stateNode,!1)}catch(l){xe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&km(e,t);break;default:km(e,t)}}function Xm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:sM(n,i);break t;case 22:n.memoizedState===null&&Xm(n,i);break t;default:Xm(n,i)}}e=e.sibling}}function aM(e){var t=e.alternate;t!==null&&(e.alternate=null,aM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,In=!1;function wi(e,t,n){for(n=n.child;n!==null;)rM(e,t,n),n=n.sibling}function rM(e,t,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(vc,n)}catch(a){}switch(n.tag){case 26:me||cn(n,t),wi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!me&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:me||cn(n,t),Kl(n);var i=Ie,s=In;_a(n.type)&&(Ie=n.stateNode,In=!1),wi(e,t,n),YM(n.stateNode,n.type,n.memoizedProps),Ie=i,In=s;break;case 5:me||cn(n,t),Kl(n);case 6:if(n.tag===6&&Kl(n),i=Ie,s=In,Ie=null,wi(e,t,n),Ie=i,In=s,Ie!==null)if(In)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(n.stateNode),fe=!0}catch(a){xe(n,t,a)}else try{Ie.removeChild(n.stateNode),fe=!0}catch(a){xe(n,t,a)}break;case 18:Ie!==null&&(In?(e=Ie,Vy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),To(e)):Vy(Ie,n.stateNode));break;case 4:i=Ie,s=In,Ie=n.stateNode.containerInfo,In=!0,wi(e,t,n),Ie=i,In=s;break;case 0:case 11:case 14:case 15:ma(2,n,t),me||ma(4,n,t),wi(e,t,n);break;case 1:me||(cn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&KS(n,t,i)),wi(e,t,n);break;case 21:wi(e,t,n);break;case 22:me=(i=me)||n.memoizedState!==null,wi(e,t,n),me=i;break;case 30:cn(n,t),wi(e,t,n);break;case 7:me||cn(n,t),wi(e,t,n);break;default:wi(e,t,n)}}function oM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{To(e)}catch(n){xe(t,t.return,n)}}}function lM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(n){xe(t,t.return,n)}}function VA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ay),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ay),t;default:throw Error(J(435,e.tag))}}function Fu(e,t){var n=VA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=$A.bind(null,e,i);i.then(s,s)}})}function wn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(_a(l.type)){Ie=l.stateNode,In=!1;break t}break;case 5:Ie=l.stateNode,In=!1;break t;case 3:case 4:Ie=l.stateNode.containerInfo,In=!0;break t}l=l.return}if(Ie===null)throw Error(J(160));rM(r,o,a),Ie=null,In=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cM(t,e,n),t=t.sibling}var Ci=null;function cM(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}wn(t,e,n),Rn(e),s&4&&(ma(3,e,e.return),Ec(3,e),ma(5,e,e.return));break;case 1:wn(t,e,n),Rn(e),s&512&&(me||i===null||cn(i,i.return)),s&64&&nn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ci,wn(t,e,n),Rn(e),s&512&&(me||i===null||cn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(nn)e.stateNode=PM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[xc]||i[un]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),pn(i,t,n),i[un]=e,an(i),t=i;break t;case"link":if(a=Ky("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),pn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Ky("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),pn(i,t,n),s.head.appendChild(i);break;default:throw Error(J(468,t))}i[un]=e,an(i),t=i}e.stateNode=t}else nn||og(a,e.type,e.stateNode);else e.stateNode=Jy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||me||t.parentNode.removeChild(t)):s.count--,n===null?nn||og(a,e.type,e.stateNode):Jy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Gp(e,e.memoizedProps,i.memoizedProps);break;case 27:wn(t,e,n),Rn(e),s&512&&(me||i===null||cn(i,i.return)),i!==null&&s&4&&Gp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Xi,Xi=!1,wn(t,e,n),Xi=a,Rn(e),s&512&&(me||i===null||cn(i,i.return)),e.flags&32){t=e.stateNode;try{mo(t,""),fe=!0}catch(u){xe(e,e.return,u)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Gp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Xp=!0);break;case 6:if(wn(t,e,n),Rn(e),s&4){if(e.stateNode===null)throw Error(J(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,fe=!0}catch(u){xe(e,e.return,u)}}break;case 3:if(fe=!1,rh=null,a=Ci,Ci=fc(t.containerInfo),wn(t,e,n),Ci=a,Rn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{To(t.containerInfo)}catch(u){xe(e,e.return,u)}Xp&&(Xp=!1,uM(e)),fe=!1;break;case 4:s=Xi,Xi=nn,i=N_(),a=Ci,Ci=fc(e.stateNode.containerInfo),wn(t,e,n),Rn(e),Ci=a,fe&&Hl&&(Dh=!0),fe=i,Xi=s;break;case 12:wn(t,e,n),Rn(e);break;case 31:wn(t,e,n),Rn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Fu(e,t)));break;case 13:wn(t,e,n),Rn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&($h=jn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Fu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=nn,l=me,c=Xi;nn=o||a,Xi=c||a,me=l||r,wn(t,e,n),me=l,Xi=c,nn=o,Rn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||nn||me||(t=r||me,n=nn,i=me,nn=a||nn,me=t,Ws(e,2),nn=n,me=i),!a&&Xi||km(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Fu(e,n))));break;case 19:wn(t,e,n),Rn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Fu(e,t)));break;case 30:s&512&&(me||i===null||cn(i,i.return)),s=N_(),a=Hl,r=(n&335544064)===n,o=e.memoizedProps,Hl=r&&Rs(o.default,o.update)!=="none",wn(t,e,n),Rn(e),r&&i!==null&&fe&&(e.flags|=4),Hl=a,fe=s;break;case 21:break;case 7:s&512&&(me||i===null||cn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:wn(t,e,n),Rn(e)}}function Rn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(QS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Yg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Wg(s))break;s=s.return}var r=i;if(n==null)throw Error(J(160));switch(n.tag){case 27:var o=n.stateNode,l=kp(e);Rh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(mo(c,""),n.flags&=-33);var u=kp(e);Rh(e,u,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=kp(e);zm(e,h,d,r);break;default:throw Error(J(161))}}catch(p){xe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;uM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Eo=!0,t.reset(),Eo=!1),e=e.sibling}}function Hr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)hM(t,e),t=t.sibling;else nM(t,!1)}function hM(e,t){var n=e.alternate;if(n===null)Bm(e,!1);else switch(e.tag){case 3:if(Gm=qi=!1,Ty(),Hr(t,e),!qi&&!Dh){if(e=Zi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];BM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gm=!0}Zi=null;break;case 5:Hr(t,e);break;case 4:i=qi,qi=!1,Hr(t,e),qi&&(Dh=!0),qi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Bm(e,!1):Hr(t,e));break;case 30:i=qi,s=Ty(),qi=!1,Hr(t,e),qi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Ms(a,r),r=Ms(n.memoizedProps,r);var o=Rs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,zn=0,t=Zg(e,n,t,r,o,a,!0),zn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(_o(e,e.memoizedProps.onUpdate),Zi=s):s!==null&&(s.push.apply(s,Zi),Zi=s),qi=(e.flags&32)!==0?!0:i;break;default:Hr(t,e)}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)iM(e,t.alternate,t),t=t.sibling}function Ws(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),Ws(n,i);break;case 1:cn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&KS(n,n.return,s),Ws(n,i);break;case 27:(i&2)!==0&&YM(n.stateNode,n.type,n.memoizedProps);case 5:cn(n,n.return),n.tag!==5&&n.tag!==27||Kl(n),Ws(n,i);break;case 6:Kl(n);break;case 26:cn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||me||s.parentNode.removeChild(s),Ws(n,i);break;case 22:n.memoizedState===null&&Ws(n,i);break;case 30:cn(n,n.return),Ws(n,i);break;case 7:cn(n,n.return);default:Ws(n,i)}e=e.sibling}}function Ri(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ri(s,a,n),Ec(4,a);break;case 1:if(Ri(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(u){xe(i,i.return,u)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)sS(c[s],l)}catch(u){xe(i,i.return,u)}}o&&r&64&&JS(a),Yi(a,a.return);break;case 27:(n&2)!==0&&jS(a);case 5:a.tag!==5&&a.tag!==27||by(a),Ri(s,a,n),o&&i===null&&r&4&&Pm(a),Yi(a,a.return);break;case 6:by(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||nn||og(fc(l.ownerDocument),a.type,l),Ri(s,a,n),o&&i===null&&r&4&&Pm(a),Yi(a,a.return);break;case 12:Ri(s,a,n);break;case 31:Ri(s,a,n),o&&r&4&&oM(s,a);break;case 13:Ri(s,a,n),o&&r&4&&lM(s,a);break;case 22:a.memoizedState===null&&Ri(s,a,n),Yi(a,a.return);break;case 30:Ri(s,a,n),Yi(a,a.return);break;case 7:Yi(a,a.return);default:Ri(s,a,n)}t=t.sibling}}function Jg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Mc(n))}function Kg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Mc(e))}function pi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)fM(e,t,n,i),t=t.sibling;else s&&eM(t)}function fM(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&nh(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,n,i),a&2048&&Ec(9,t);break;case 1:pi(e,t,n,i);break;case 3:pi(e,t,n,i),s&&Gm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Mc(a)));break;case 12:if(a&2048){pi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){xe(t,t.return,c)}}else pi(e,t,n,i);break;case 31:pi(e,t,n,i);break;case 13:pi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&nh(o),r._visibility&2?pi(e,t,n,i):Ql(e,t)):(s&&o!==null&&o.memoizedState!==null&&nh(t),r._visibility&2?pi(e,t,n,i):(r._visibility|=2,Gr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Jg(o,t);break;case 24:pi(e,t,n,i),a&2048&&Kg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(es(a.child,!0),es(t.child,!0))),pi(e,t,n,i);break;default:pi(e,t,n,i)}}function Gr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Gr(a,r,o,l,s),Ec(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?Gr(a,r,o,l,s):Ql(a,r):(u._visibility|=2,Gr(a,r,o,l,s)),s&&c&2048&&Jg(r.alternate,r);break;case 24:Gr(a,r,o,l,s),s&&c&2048&&Kg(r.alternate,r);break;default:Gr(a,r,o,l,s)}t=t.sibling}}function Ql(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ql(n,i),s&2048&&Jg(i.alternate,i);break;case 24:Ql(n,i),s&2048&&Kg(i.alternate,i);break;default:Ql(n,i)}t=t.sibling}}var Va=8192;function Ba(e,t,n){if(e.subtreeFlags&Va)for(e=e.child;e!==null;)dM(e,t,n),e=e.sibling}function dM(e,t,n){switch(e.tag){case 26:Ba(e,t,n),e.flags&Va&&(e.memoizedState!==null?qw(n,Ci,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&jy(n,e)));break;case 5:Ba(e,t,n),e.flags&Va&&(e=e.stateNode,(t&335544128)===t&&jy(n,e));break;case 3:case 4:var i=Ci;Ci=fc(e.stateNode.containerInfo),Ba(e,t,n),Ci=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Va,Va=16777216,Ba(e,t,n),Va=i):Ba(e,t,n));break;case 30:if((e.flags&Va)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Kn===null&&(Kn=new Map),Kn.set(i,s)}Ba(e,t,n);break;default:Ba(e,t,n)}}function pM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,gM(i,e)}pM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mM(e),e=e.sibling}function mM(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&ma(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ih(e)):Ll(e);break;default:Ll(e)}}function ih(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,gM(i,e)}pM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),ih(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ih(t));break;default:ih(t)}e=e.sibling}}function gM(e,t){for(;sn!==null;){var n=sn;switch(n.tag){case 0:case 11:case 15:ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Mc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,sn=i;else t:for(n=e;sn!==null;){i=sn;var s=i.sibling,a=i.return;if(aM(i),i===n){sn=null;break t}if(s!==null){s.return=a,sn=s;break t}sn=a}}}var GA={getCacheForType:function(e){var t=hn(We),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return hn(We).controller.signal}},kA=typeof WeakMap=="function"?WeakMap:Map,de=0,Ee=null,re=null,le=0,_e=0,Yn=null,$s=!1,Do=!1,Qg=!1,As=0,Ve=0,ga=0,Za=0,Uh=0,Qn=0,vo=0,jl=null,Pn=null,qm=!1,$h=0,vM=0,Nh=1/0,Lh=null,la=null,Pe=0,Ui=null,nr=null,ts=0,Wm=0,Ym=null,_M=null,co=null,uo=null,ho=null,$l=0,sh=null;function ei(){return(de&2)!==0&&le!==0?le&-le:Vt.T!==null?$g():Mx()}function yM(){if(Qn===0)if((le&536870912)===0||te){var e=Au;Au<<=1,(Au&3932160)===0&&(Au=262144),Qn=e}else Qn=536870912;return e=mn.current,e!==null&&(e.flags|=32),Qn}function _o(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=HM(Ms(e.memoizedProps,n))),uo===null&&(uo=[]),uo.push(t.bind(null,i))}}function Fn(e,t,n){(e===Ee&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(yo(e,0),ta(e,le,Qn,!1)),yc(e,n),((de&2)===0||e!==Ee)&&(e===Ee&&((de&2)===0&&(Za|=n),Ve===4&&ta(e,le,Qn,!1)),is(e))}function xM(e,t,n){if((de&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||_c(e,t),s=i?WA(e,t):qp(e,t,!0),a=i;do{if(s===0){Do&&!i&&ta(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!XA(n)){s=qp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=jl;var l=o.current.memoizedState.isDehydrated;if(l&&(yo(o,r).flags|=256),r=qp(o,r,!1),r!==2&&r!==6){if(Qg&&!l){o.errorRecoveryDisabledLanes|=a,Za|=a,s=4;break t}a=Pn,Pn=s,a!==null&&(Pn===null?Pn=a:Pn.push.apply(Pn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){yo(e,0),ta(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ta(i,t,Qn,!$s);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=$h+300-jn(),10<s)){if(ta(i,t,Qn,!$s),Fh(i,0,!0)!==0)break t;ts=t,i.timeoutHandle=e0(wy.bind(null,i,n,Pn,Lh,qm,t,Qn,Za,vo,$s,a,"Throttled",-0,0),s);break t}wy(i,n,Pn,Lh,qm,t,Qn,Za,vo,$s,a,null,-0,0)}}break}while(!0);is(e)}function wy(e,t,n,i,s,a,r,o,l,c,u,d,h,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},Kn=null,dM(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=dc.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?$h-jn():(a&4194048)===a?vM-jn():0,g=Ww(d,g),g!==null)){ts=a,e.cancelPendingCommit=g(Cy.bind(null,e,t,a,n,i,s,r,o,l,c,u,d,null,h,p)),ta(e,a,r,!c);return}Cy(e,t,a,n,i,s,r,o,l,c,u,d)}function XA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ni(a(),s))return!1}catch(r){return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,n,i){t=vx(e,t),t&=~Uh,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ti(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&yx(e,n,t)}function tf(){return(de&6)===0?(Tc(0,!1),!1):!0}function jg(){if(re!==null){if(_e===0)var e=re.return;else e=re,_s=or=null,Ig(e),ro=null,rc=0,e=re;for(;e!==null;)ZS(e.alternate,e),e=e.return;re=null}}function yo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,fw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ts=0,jg(),Ee=e,re=n=ys(e.current,null),le=t,_e=0,Yn=null,$s=!1,Do=_c(e,t),Qg=!1,vo=Qn=Uh=Za=ga=Ve=0,Pn=jl=null,qm=!1,As=vx(e,t),Xh(),n}function SM(e,t){Wt=null,Vt.H=Th,t===Ro||t===Yh?(t=ty(),_e=3):t===wg?(t=ty(),_e=4):_e=t===kg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yn=t,re===null&&(Ve=1,Ah(e,yi(t,e.current)))}function MM(){var e=mn.current;return e===null?!0:(le&4194048)===le?xn===null:(le&62914560)===le||(le&536870912)!==0?e===xn:!1}function bM(){var e=Vt.H;return Vt.H=Th,e===null?Th:e}function EM(){var e=Vt.A;return Vt.A=GA,e}function Oh(){Ve=4,$s||(le&4194048)!==le&&mn.current!==null||(Do=!0),(ga&134217727)===0&&(Za&134217727)===0||Ee===null||ta(Ee,le,Qn,!1)}function qp(e,t,n){var i=de;de|=2;var s=bM(),a=EM();(Ee!==e||le!==t)&&(Lh=null,yo(e,t)),t=!1;var r=Ve;t:do try{if(_e!==0&&re!==null){var o=re,l=Yn;switch(_e){case 8:jg(),r=6;break t;case 3:case 2:case 9:case 6:mn.current===null&&(t=!0);var c=_e;if(_e=0,Yn=null,eo(e,o,l,c),n&&Do){r=0;break t}break;default:c=_e,_e=0,Yn=null,eo(e,o,l,c)}}qA(),r=Ve;break}catch(u){SM(e,u)}while(!0);return t&&e.shellSuspendCounter++,_s=or=null,de=i,Vt.H=s,Vt.A=a,re===null&&(Ee=null,le=0,Xh()),r}function qA(){for(;re!==null;)TM(re)}function WA(e,t){var n=de;de|=2;var i=bM(),s=EM();Ee!==e||le!==t?(Lh=null,Nh=jn()+500,yo(e,t)):Do=_c(e,t);t:do try{if(_e!==0&&re!==null){t=re;var a=Yn;e:switch(_e){case 1:_e=0,Yn=null,eo(e,t,a,1);break;case 2:case 9:if($_(a)){_e=0,Yn=null,Ry(t);break}t=function(){_e!==2&&_e!==9||Ee!==e||(_e=7),is(e)},a.then(t,t);break t;case 3:_e=7;break t;case 4:_e=5;break t;case 7:$_(a)?(_e=0,Yn=null,Ry(t)):(_e=0,Yn=null,eo(e,t,a,7));break;case 5:var r=null;switch(re.tag){case 26:r=re.memoizedState;case 5:case 27:var o=re;if(r?KM(r):o.stateNode.complete){_e=0,Yn=null;var l=o.sibling;if(l!==null)re=l;else{var c=o.return;c!==null?(re=c,ef(c)):re=null}break e}}_e=0,Yn=null,eo(e,t,a,5);break;case 6:_e=0,Yn=null,eo(e,t,a,6);break;case 8:jg(),Ve=6;break t;default:throw Error(J(462))}}YA();break}catch(u){SM(e,u)}while(!0);return _s=or=null,Vt.H=i,Vt.A=s,de=n,re!==null?0:(Ee=null,le=0,Xh(),Ve)}function YA(){for(;re!==null&&!uT();)TM(re)}function TM(e){var t=YS(e.alternate,e,As);e.memoizedProps=e.pendingProps,t===null?ef(e):re=t}function Ry(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gy(n,t,t.pendingProps,t.type,void 0,le);break;case 11:t=gy(n,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:Ig(t);var i=t;i===rn&&(te?(_h(i),i.tag===5&&i.stateNode!=null&&(Ce=i.stateNode)):(_h(i),te=!0));default:ZS(n,t),t=re=Jx(t,As),t=YS(n,t,As)}e.memoizedProps=e.pendingProps,t===null?ef(e):re=t}function eo(e,t,n,i){_s=or=null,Ig(t),ro=null,rc=0;var s=t.return;try{if(OA(e,s,t,n,le)){Ve=1,Ah(e,yi(n,e.current)),re=null;return}}catch(a){if(s!==null)throw re=s,a;Ve=1,Ah(e,yi(n,e.current)),re=null;return}t.flags&32768?(te||i===1?e=!0:Do||(le&536870912)!==0?e=!1:($s=e=!0,(i===2||i===9||i===3||i===6)&&(i=mn.current,i!==null&&i.tag===13&&(i.flags|=16384))),AM(t,e)):ef(t)}function ef(e){var t=e;do{if((t.flags&32768)!==0){AM(t,$s);return}e=t.return;var n=BA(t.alternate,t,As);if(n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ve===0&&(Ve=5)}function AM(e,t){do{var n=FA(e.alternate,e);if(n!==null){n.flags&=32767,re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=n}while(e!==null);Ve=6,re=null}function Cy(e,t,n,i,s,a,r,o,l,c,u,d){e.cancelPendingCommit=null;do nf();while(Pe!==0);if((de&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));e===Ee&&(re=Ee=null,le=0),nr=t,Ui=e,ts=n,Ym=s,_M=i,ZA(e,t,n,r,o,l,d)}}function ZA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Wm=o,o|=Sg,xT(e,n,o,i,s,a),uo=null,(n&335544064)===n?(ho=MA(e),i=10262):(ho=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,tw(dh,function(){return Qm(),null})):(e.callbackNode=null,e.callbackPriority=0),Ch=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Vt.T,Vt.T=null,s=pe.p,pe.p=2,a=de,de|=4;try{HA(e,t,n)}finally{de=a,pe.p=s,Vt.T=i}}Pe=1,Ch?co=_w(r,e.containerInfo,ho,Zm,Jm,KA,Km,Qm,JA,null,null):(Zm(),Jm(),Km())}function JA(e){if(Pe!==0){var t=Ui.onRecoverableError;t(e,{componentStack:null})}}function KA(){Pe===3&&(Pe=0,hM(nr,Ui),Pe=4)}function Zm(){if(Pe===1){Pe=0;var e=Ui,t=nr,n=ts,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Vt.T,Vt.T=null;var s=pe.p;pe.p=2;var a=de;de|=4;try{Hl=Dh=!1,cM(t,e,n),n=eg;var r=Vx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Hx(o.ownerDocument.documentElement,o)){if(l!==null&&xg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var f=q_(o,x),v=q_(o,m);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var _=d.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),x>m?(p.addRange(_),p.extend(v.node,v.offset)):(_.setEnd(v.node,v.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Eo=!!tg,eg=tg=null}finally{de=a,pe.p=s,Vt.T=i}}e.current=t,Pe=2}}function Jm(){if(Pe===2){Pe=0;var e=Ui,t=nr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Vt.T,Vt.T=null;var i=pe.p;pe.p=2;var s=de;de|=4;try{iM(e,t.alternate,t)}finally{de=s,pe.p=i,Vt.T=n}}Pe=3}}function Km(){if(Pe===4||Pe===3){Pe=0;var e=co;co=null,hT();var t=Ui,n=nr,i=ts,s=_M,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Pe=5:(Pe=0,nr=Ui=null,wM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(la=null),pg(i),n=n.stateNode,$n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(vc,n,void 0,(n.current.flags&128)===128)}catch(c){}if(s!==null){n=Vt.T,a=pe.p,pe.p=2,Vt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Vt.T=n,pe.p=a}}if(s=uo,r=ho,ho=null,s!==null&&(uo=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ts&3)!==0&&nf(),is(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===sh?$l++:($l=0,sh=t):($l=0,sh=null),Tc(0,!1)}}function wM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Mc(t)))}function nf(){return co!==null&&(co.skipTransition(),co=null),Zm(),Jm(),Km(),Qm()}function Qm(){if(Pe!==5)return!1;var e=Ui,t=Wm;Wm=0;var n=pg(ts),i=Vt.T,s=pe.p;try{pe.p=32>n?32:n,Vt.T=null,n=Ym,Ym=null;var a=Ui,r=ts;if(Pe=0,nr=Ui=null,ts=0,(de&6)!==0)throw Error(J(331));var o=de;if(de|=4,mM(a.current),fM(a,a.current,r,n),de=o,Tc(0,!1),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(vc,a)}catch(l){}return!0}finally{pe.p=s,Vt.T=i,wM(e,t)}}function Dy(e,t,n){t=yi(n,t),t=Dm(e.stateNode,t,2),e=aa(e,t,2),e!==null&&(yc(e,2),is(e))}function xe(e,t,n){if(e.tag===3)Dy(e,e,n);else for(;t!==null;){if(t.tag===3){Dy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(la===null||!la.has(i))){e=yi(n,e),n=GS(2),i=aa(t,n,2),i!==null&&(kS(n,i,t,e),yc(i,2),is(i));break}}t=t.return}}function Wp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new kA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Qg=!0,s.add(n),e=QA.bind(null,e,t,n),t.then(e,e))}function QA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(le&n)===n&&((Ve===4||Ve===3&&(le&62914560)===le&&300>jn()-$h)&&(de&2)===0?yo(e,0):Uh|=n,vo===le&&(vo=0)),is(e)}function RM(e,t){t===0&&(t=_x()),e=rr(e,t),e!==null&&(yc(e,t),is(e))}function jA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),RM(e,n)}function $A(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),RM(e,n)}function tw(e,t){return fg(e,t)}var xo=null,kr=null,jm=!1,Ih=!1,Yp=!1,ea=0;function is(e){e!==kr&&e.next===null&&(kr===null?xo=kr=e:kr=kr.next=e),Ih=!0,jm||(jm=!0,nw())}function Tc(e,t){if(!Yp&&Ih){Yp=!0;do for(var n=!1,i=xo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ti(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Uy(i,a))}else a=le,a=Fh(i,i===Ee?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||_c(i,a)||(n=!0,Uy(i,a));i=i.next}while(n);Yp=!1}}function ew(){CM()}function CM(){Ih=jm=!1;var e=0;ea!==0&&hw()&&(e=ea);for(var t=jn(),n=null,i=xo;i!==null;){var s=i.next,a=DM(i,t);a===0?(i.next=null,n===null?xo=s:n.next=s,s===null&&(kr=n)):(n=i,(e!==0||(a&3)!==0)&&(Ih=!0)),i=s}Pe!==0&&Pe!==5||Tc(e,!1),ea!==0&&(ea=0)}function DM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ti(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=yT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ee,n=le,n=Fh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Tp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_c(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Tp(i),pg(n)){case 2:case 8:n=mx;break;case 32:n=dh;break;case 268435456:n=gx;break;default:n=dh}return i=UM.bind(null,e),n=fg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Tp(i),e.callbackPriority=2,e.callbackNode=null,2}function UM(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(nf()&&e.callbackNode!==n)return null;var i=le;return i=Fh(e,e===Ee?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(xM(e,i,t),DM(e,jn()),e.callbackNode!=null&&e.callbackNode===n?UM.bind(null,e):null)}function Uy(e,t){if(nf())return null;xM(e,t,!0)}function nw(){dw(function(){(de&6)!==0?fg(px,ew):CM()})}function $g(){if(ea===0){var e=ja;e===0&&(e=Tu,Tu<<=1,(Tu&261888)===0&&(Tu=256)),ea=e}return ea}function Ny(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wu(e)}function iw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Ny((s[Vn]||null).action),r=i.submitter;r&&(t=(t=r[Vn]||null)?Ny(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Vh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ea!==0){var l=new FormData(s,r);Rm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Rm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Hu=0;Hu<vm.length;Hu++)Vu=vm[Hu],Ly=Vu.toLowerCase(),Oy=Vu[0].toUpperCase()+Vu.slice(1),Ni(Ly,"on"+Oy);var Vu,Ly,Oy,Hu;Ni(kx,"onAnimationEnd");Ni(Xx,"onAnimationIteration");Ni(qx,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(pA,"onTransitionRun");Ni(mA,"onTransitionStart");Ni(gA,"onTransitionCancel");Ni(Wx,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cc));function NM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){mh(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){mh(u)}s.currentTarget=null,a=l}}}}function ae(e,t){var n=t[R_];n===void 0&&(n=t[R_]=new Set);var i=e+"__bubble";n.has(i)||(LM(t,e,2,!1),n.add(i))}function Zp(e,t,n){var i=0;t&&(i|=4),LM(n,e,i,t)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function t0(e){if(!e[Gu]){e[Gu]=!0,Ex.forEach(function(n){n!=="selectionchange"&&(sw.has(n)||Zp(n,!1,e),Zp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gu]||(t[Gu]=!0,Zp("selectionchange",!1,t))}}function LM(e,t,n,i){switch(i1(t)){case 2:var s=Kw;break;case 8:s=Qw;break;default:s=o0}n=s.bind(null,t,n,e),s=void 0,!dm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Jp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ga(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Nx(function(){var c=a,u=gg(n),d=[];t:{var h=Yx.get(e);if(h!==void 0){var p=Vh,g=e;switch(e){case"keypress":if(Zu(n)===0)break t;case"keydown":case"keyup":p=XT;break;case"focusin":g="focus",p=Up;break;case"focusout":g="blur",p=Up;break;case"beforeblur":case"afterblur":p=Up;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=P_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=NT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=JT;break;case kx:case Xx:case qx:p=IT;break;case Wx:p=QT;break;case"scroll":case"scrollend":p=DT;break;case"wheel":p=$T;break;case"copy":case"cut":case"paste":p=zT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=B_;break;case"submit":p=YT;break;case"toggle":case"beforetoggle":p=eA}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),f=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,_;v!==null;){var y=v;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||f===null||(y=ec(v,f),y!=null&&x.push(uc(v,y,_))),m)break;v=v.return}0<x.length&&(h=new p(h,g,null,n,u),d.push({event:h,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==fm&&(g=n.relatedTarget||n.fromElement)&&(Ga(g)||g[Ao]))break t;(h||p)&&(g=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Ga(p):null,p!==null&&(m=gc(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(h=null,p=c),h!==p&&(x=P_,y="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=B_,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=h==null?g:Bl(h),_=p==null?g:Bl(p),g=new x(y,v+"leave",h,n,u),g.target=m,g.relatedTarget=_,y=null,Ga(u)===c&&(x=new x(f,v+"enter",p,n,u),x.target=_,x.relatedTarget=m,y=x),m=y,x=h&&p?tm(h,p,aw):null,h!==null&&Iy(d,g,h,x,!1),p!==null&&m!==null&&Iy(d,m,p,x,!0)))}t:{if(h=c?Bl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=G_;else if(V_(h))if(Bx)A=hA;else{A=cA;var R=lA}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&mg(c.elementType)&&(A=G_):A=uA;if(A&&(A=A(e,c))){zx(d,A,n,u);break t}R&&R(e,h,c)}switch(R=c?Bl(c):window,e){case"focusin":(V_(R)||R.contentEditable==="true")&&(Jr=R,mm=c,kl=null);break;case"focusout":kl=mm=Jr=null;break;case"mousedown":gm=!0;break;case"contextmenu":case"mouseup":case"dragend":gm=!1,W_(d,n,u);break;case"selectionchange":if(dA)break;case"keydown":case"keyup":W_(d,n,u)}var w;if(yg)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else Zr?Ix(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Ox&&n.locale!=="ko"&&(Zr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Zr&&(w=Lx()):(Qs=u,vg="value"in Qs?Qs.value:Qs.textContent,Zr=!0)),R=Ph(c,U),0<R.length&&(U=new z_(U,e,null,n,u),d.push({event:U,listeners:R}),w?U.data=w:(w=Px(n),w!==null&&(U.data=w)))),(w=iA?sA(e,n):aA(e,n))&&(U=Ph(c,"onBeforeInput"),0<U.length&&(R=new z_("onBeforeInput","beforeinput",null,n,u),d.push({event:R,listeners:U}),R.data=w)),iw(d,e,c,n,u)}NM(d,t)})}function uc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ph(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=ec(e,n),s!=null&&i.unshift(uc(e,s,a)),s=ec(e,t),s!=null&&i.push(uc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function aw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Iy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=ec(n,a),c!=null&&r.unshift(uc(n,c,l))):s||(c=ec(n,a),c!=null&&r.push(uc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var rw=/\r\n?/g,ow=/\u0000|\uFFFD/g;function Py(e){return(typeof e=="string"?e:""+e).replace(rw,`
`).replace(ow,"")}function OM(e,t){return t=Py(t),Py(e)===t}function ye(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||mo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&mo(e,""+i);else return;break;case"className":Ru(e,"class",i);break;case"tabIndex":Ru(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ru(e,n,i);break;case"style":Ux(e,i,a);return;case"data":if(t!=="object"){Ru(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Wu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ye(e,t,"name",s.name,s,null),ye(e,t,"formEncType",s.formEncType,s,null),ye(e,t,"formMethod",s.formMethod,s,null),ye(e,t,"formTarget",s.formTarget,s,null)):(ye(e,t,"encType",s.encType,s,null),ye(e,t,"method",s.method,s,null),ye(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Wu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ki);return;case"onScroll":i!=null&&ae("scroll",e);return;case"onScrollEnd":i!=null&&ae("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));(a!=null?a.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Wu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ae("beforetoggle",e),ae("toggle",e),qu(e,"popover",i);break;case"xlinkActuate":ms(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ms(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ms(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ms(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ms(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ms(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ms(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ms(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ms(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":qu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=RT.get(n)||n,qu(e,n,i);else return}fe=!0}function $m(e,t,n,i,s,a){switch(n){case"style":Ux(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));(a!=null?a.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")mo(e,i);else if(typeof i=="number"||typeof i=="bigint")mo(e,""+i);else return;break;case"onScroll":i!=null&&ae("scroll",e);return;case"onScrollEnd":i!=null&&ae("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Tx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Vn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}fe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):qu(e,n,i)}return}fe=!0}function pn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:ye(e,t,a,r,n,null)}}s&&ye(e,t,"srcSet",n.srcSet,n,null),i&&ye(e,t,"src",n.src,n,null);return;case"input":ae("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:ye(e,t,i,u,n,null)}}Rx(e,a,o,l,c,r,s,!1);return;case"select":ae("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ye(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?io(e,!!i,t,!1):n!=null&&io(e,!!i,n,!0);return;case"textarea":ae("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:ye(e,t,r,o,n,null)}Dx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ye(e,t,l,i,n,null));return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(i=0;i<cc.length;i++)ae(cc[i],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:ye(e,t,c,i,n,null)}return;default:if(mg(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&$m(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ye(e,t,o,i,n,null))}var lw={};function cw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ye(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(fe=!0),a=p;break;case"name":p!==d&&(fe=!0),s=p;break;case"checked":p!==d&&(fe=!0),c=p;break;case"defaultChecked":p!==d&&(fe=!0),u=p;break;case"value":p!==d&&(fe=!0),r=p;break;case"defaultValue":p!==d&&(fe=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&ye(e,t,h,p,i,d)}}hm(e,r,o,l,c,u,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||ye(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(fe=!0),h=a;break;case"defaultValue":a!==l&&(fe=!0),o=a;break;case"multiple":a!==l&&(fe=!0),r=a;default:a!==l&&ye(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?io(e,!!n,h,!1):!!i!=!!n&&(t!=null?io(e,!!n,t,!0):io(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ye(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(fe=!0),h=s;break;case"defaultValue":s!==a&&(fe=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&ye(e,t,r,s,i,a)}Cx(e,h,p);return;case"option":for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:ye(e,t,g,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?(h!==p&&(fe=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol"):ye(e,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&ye(e,t,x,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:ye(e,t,c,h,i,p)}return;default:if(mg(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&$m(e,t,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||$m(e,t,u,h,i,p);return}}for(var f in n)h=n[f],n.hasOwnProperty(f)&&h!=null&&!i.hasOwnProperty(f)&&ye(e,t,f,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||ye(e,t,d,h,i,p)}function zy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&zy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&zy(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tg=null,eg=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function By(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function IM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function PM(e,t,n,i){return n=hc(n).createElement(e),n[un]=i,n[Vn]=t,pn(n,e,t),an(n),n}function ng(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kp=null;function hw(){var e=window.event;return e&&e.type==="popstate"?e===Kp?!1:(Kp=e,!0):(Kp=null,!1)}var e0=typeof setTimeout=="function"?setTimeout:void 0,fw=typeof clearTimeout=="function"?clearTimeout:void 0,Fy=typeof Promise=="function"?Promise:void 0,Hy=typeof requestAnimationFrame=="function"?requestAnimationFrame:e0,dw=typeof queueMicrotask=="function"?queueMicrotask:typeof Fy!="undefined"?function(e){return Fy.resolve(null).then(e).catch(pw)}:e0;function pw(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function Vy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),To(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")jp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,jp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[xc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&jp(e.ownerDocument.body);n=s}while(n);To(t)}function Gy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function zM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function BM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function FM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ig(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return FM(t,n,e)}function mw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return FM(t,n,e)}function gw(e){return e.documentElement.clientHeight}function vw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function _w(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(gw(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,f=0,v=0;v<m.length;v++){var _=m[v];if(!_.complete){var y=_.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<h.innerHeight&&y.left<h.innerWidth){if(f+=QM(_),f>oh){x.length=g;break}_=new Promise(vw.bind(_)),x.push(_)}}}if(0<x.length)return h=Promise.race([Promise.all(x),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var g=h[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var f=m=void 0,v=!0,_=0;_<g.length;_++){var y=g[_],A=y.width;if(m===void 0)m=A;else if(m!==A){v=!1;break}if(A=y.height,f===void 0)f=A;else if(f!==A){v=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}v&&m!==void 0&&f!==void 0&&(x.setKeyframes(g),v=getComputedStyle(x.target,x.pseudoElement),v.width!==m||v.height!==f)&&(v=g[0],v.width=m,v.height=f,v=g[g.length-1],v.width=m,v.height=f,x.setKeyframes(g))}}r()},function(h){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{typeof h=="object"&&h!==null&&h.name==="InvalidStateError"&&(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null),h!==null&&l(h)}finally{i(),s(),r()}}),u.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),o()}),u}catch(h){return i(),s(),r(),null}}function ka(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ka.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Te({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};ka.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};ka.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function HM(e){return{name:e,group:new ka("group",e),imagePair:new ka("image-pair",e),old:new ka("old",e),new:new ka("new",e)}}function ii(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ii.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(VM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=So(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Hn(this._fragmentFiber.child,!1,yw,e,o,i)}this._eventListeners=a}};function yw(e,t,n,i){return Qe(e).addEventListener(t,n,i),!1}ii.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=VM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=So(s.optionsOrUseCapture),Hn(this._fragmentFiber.child,!1,xw,e,n,s),i.splice(t,1),a!==null&&a()}};function xw(e,t,n,i){return Qe(e).removeEventListener(t,n,i),!1}function So(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function ky(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function VM(e,t,n,i){if(e.length===0)return-1;i=ky(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&ky(a.optionsOrUseCapture)===i)return s}return-1}ii.prototype.dispatchEvent=function(e){var t=ir(this._fragmentFiber);if(t===null)return!0;t=Qe(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,So(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,So(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ii.prototype.focus=function(e){Hn(this._fragmentFiber.child,!0,GM,e,void 0,void 0)};function GM(e,t){return e.tag===6?!1:(e=Qe(e),Nw(e,t))}ii.prototype.focusLast=function(e){var t=[];Hn(this._fragmentFiber.child,!0,n0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!GM(t[n],e);n--);};function n0(e,t){return t.push(e),!1}ii.prototype.blur=function(){var e=ir(this._fragmentFiber);e!==null&&(e=Qe(e),e=hc(e).activeElement,e!==null&&Hn(this._fragmentFiber.child,!1,Sw,e,void 0,void 0))};function Sw(e,t){return e.tag===6?!1:(e=Qe(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ii.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Hn(this._fragmentFiber.child,!1,Mw,e,void 0,void 0)};function Mw(e,t){return e.tag===6||(e=Qe(e),t.observe(e)),!1}ii.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Hn(this._fragmentFiber.child,!1,bw,e,void 0,void 0);for(var n=t=0;n<Di.length;n++){var i=Di[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Di[t++]=i}Di.length=t}};function bw(e,t){return e.tag===6||(e=Qe(e),t.unobserve(e)),!1}var Di=[],Qp=!1;function Ew(e,t,n){Di.push({fragmentInstance:e,observer:t,instance:n}),Qp||(Qp=!0,Lw(function(){Qp=!1;var i=Di;Di=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ii.prototype.getClientRects=function(){var e=[];return Hn(this._fragmentFiber.child,!1,Tw,e,void 0,void 0),e};function Tw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Qe(e),t.push.apply(t,e.getClientRects());return!1}ii.prototype.getRootNode=function(e){var t=ir(this._fragmentFiber);return t===null?this:Qe(t).getRootNode(e)};ii.prototype.compareDocumentPosition=function(e){var t=ir(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Hn(this._fragmentFiber.child,!1,n0,n,void 0,void 0);var i=Qe(t);if(n.length===0){if(n=i,M_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ux(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Qe(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Qe(n[0]),s=Qe(n[n.length-1]);var a=M_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Aw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Aw(e,t,n,i,s){var a=Ga(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=ir(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=tm(n,a,b_),t===null?t=!1:(Hn(t,!0,nT,a,n),a=Xr,Xr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=tm(i,a,b_),t===null?t=!1:(Hn(t,!0,iT,a,i),a=Xr,$p=Xr=null,t=a!==null)),t):!1}function Xy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ii.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(J(566));var t=[];Hn(this._fragmentFiber.child,!1,n0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=ux(this._fragmentFiber);if(i=n?i[1]||i[0]||ir(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Qe(i),Xy(e,n);return}if(i=Qe(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Qe(s),Xy(s,n)):Qe(s).scrollIntoView(e),i+=n?-1:1}};function ww(e,t){return e=Qe(e),kM(e,t),!1}function kM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function XM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,So(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Di.length;o++){var l=Di[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Di[r++]=l)}Di.length=r,a.observe(e)}),kM(e,t))}function Rw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,So(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Ew(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function sg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sg(n),Hh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Cw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[xc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function Dw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function qM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Si(e.nextSibling),e===null))return null;return e}function ag(e){return e.data==="$?"||e.data==="$~"}function i0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Si(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rg=null;function qy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Si(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Nw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Lw(e){Hy(function(){Hy(function(t){return e(t)})})}function WM(e,t,n){switch(t=hc(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function YM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ye(e,t,i,null,lw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ki&&(e.onclick=null),Hh(e)}function jp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hh(e)}var Mi=new Map,Yy=new Set;function fc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Cs=pe.d;pe.d={f:Ow,r:Iw,D:Pw,C:zw,L:Bw,m:Fw,X:Vw,S:Hw,M:Gw};function Ow(){var e=Cs.f(),t=tf();return e||t}function Iw(e){var t=wo(e);t!==null&&t.tag===5&&t.type==="form"?US(t):Cs.r(e)}var Uo=typeof document=="undefined"?null:document;function ZM(e,t,n){var i=Uo;if(i&&typeof t=="string"&&t){var s=_i(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Yy.has(s)||(Yy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),pn(t,"link",e),an(t),i.head.appendChild(t)))}}function Pw(e){Cs.D(e),ZM("dns-prefetch",e,null)}function zw(e,t){Cs.C(e,t),ZM("preconnect",e,t)}function Bw(e,t,n){Cs.L(e,t,n);var i=Uo;if(i&&e&&t){var s='link[rel="preload"][as="'+_i(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+_i(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+_i(n.imageSizes)+'"]')):s+='[href="'+_i(e)+'"]';var a=s;switch(t){case"style":a=Mo(e);break;case"script":a=No(e)}if(!(Mi.has(a)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Ac(a))||t==="script"&&i.querySelector(wc(a))))){var r=i.createElement("link");pn(r,"link",e),t==="style"&&(r[ph]=!0,r.onload=r.onerror=function(){bx(r)}),an(r),i.head.appendChild(r)}}}function Fw(e,t){Cs.m(e,t);var n=Uo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+_i(i)+'"][href="'+_i(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=No(e)}if(!Mi.has(a)&&(e=Te({rel:"modulepreload",href:e},t),Mi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wc(a)))return}i=n.createElement("link"),pn(i,"link",e),an(i),n.head.appendChild(i)}}}function Hw(e,t,n){Cs.S(e,t,n);var i=Uo;if(i&&e){var s=no(i).hoistableStyles,a=Mo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ac(a)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mi.get(a))&&s0(e,n);var l=r=i.createElement("link");an(l),pn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ah(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Vw(e,t){Cs.X(e,t);var n=Uo;if(n&&e){var i=no(n).hoistableScripts,s=No(e),a=i.get(s);a||(a=n.querySelector(wc(s)),a||(e=Te({src:e,async:!0},t),(t=Mi.get(s))&&a0(e,t),a=n.createElement("script"),an(a),pn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Gw(e,t){Cs.M(e,t);var n=Uo;if(n&&e){var i=no(n).hoistableScripts,s=No(e),a=i.get(s);a||(a=n.querySelector(wc(s)),a||(e=Te({src:e,async:!0,type:"module"},t),(t=Mi.get(s))&&a0(e,t),a=n.createElement("script"),an(a),pn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Zy(e,t,n,i){var s=(s=na.current)?fc(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Mo(n.href),t=no(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Mo(n.href);var a=no(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Ac(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Mi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mi.set(e,a)),kw(s,e,a,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=No(n),t=no(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function Mo(e){return'href="'+_i(e)+'"'}function Ac(e){return'link[rel="stylesheet"]['+e+"]"}function JM(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function kw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[ph]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[ph]=!0,t.onload=t.onerror=bx.bind(null,t),pn(t,"link",n),an(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function No(e){return'[src="'+_i(e)+'"]'}function wc(e){return"script[async]"+e}function Jy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+_i(n.href)+'"]');if(i)return t.instance=i,an(i),i;var s=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),an(i),pn(i,"style",s),ah(i,n.precedence,e),t.instance=i;case"stylesheet":s=Mo(n.href);var a=e.querySelector(Ac(s));if(a)return t.state.loading|=4,t.instance=a,an(a),a;i=JM(n),(s=Mi.get(s))&&s0(i,s),a=(e.ownerDocument||e).createElement("link"),an(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),pn(a,"link",i),t.state.loading|=4,ah(a,n.precedence,e),t.instance=a;case"script":return a=No(n.src),(s=e.querySelector(wc(a)))?(t.instance=s,an(s),s):(i=n,(s=Mi.get(a))&&(i=Te({},n),a0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),an(s),pn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ah(i,n.precedence,e));return t.instance}function ah(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function s0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function a0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rh=null;function Ky(e,t,n){if(rh===null){var i=new Map,s=rh=new Map;s.set(n,i)}else s=rh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[xc]||a[un]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function og(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function KM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function QM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function jy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=QM(t),e.suspenseyImages.push(t)),e=Yw.bind(e),t.decode().then(e,e))}function qw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Mo(i.href),a=t.querySelector(Ac(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=dc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,an(a);return}a=t.ownerDocument||t,i=JM(i),(s=Mi.get(s))&&s0(i,s),a=a.createElement("link"),an(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),pn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=dc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var oh=0;function Ww(e,t){return e.stylesheets&&e.count===0&&lh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&oh===0&&(oh=62500*uw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>oh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function jM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)lh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function dc(){this.count--,jM(this)}function Yw(){this.imgCount--,jM(this)}var zh=null;function lh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zh=new Map,t.forEach(Zw,e),zh=null,dc.call(e))}function Zw(e,t){if(!(t.state.loading&4)){var n=zh.get(e);if(n)var i=n.get(null);else{n=new Map,zh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=dc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var bo={$$typeof:Ji,Provider:null,Consumer:null,_currentValue:Xa,_currentValue2:Xa,_threadCount:0};function Jw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ap(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ap(0),this.hiddenUpdates=Ap(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function $M(e,t,n,i,s,a,r,o,l,c,u,d){return e=new Jw(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=Bn(3,null,null,t),e.current=a,a.stateNode=e,t=Tg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Rg(a),e}function t1(e){return e?(e=jr,e):jr}function e1(e,t,n,i,s,a){s=t1(s),i.context===null?i.context=s:i.pendingContext=s,i=sa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=aa(e,i,t),n!==null&&(Fn(n,e,t),ql(n,e,t))}function $y(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function r0(e,t){$y(e,t),(e=e.alternate)&&$y(e,t)}function n1(e){if(e.tag===13||e.tag===31){var t=rr(e,67108864);t!==null&&Fn(t,e,67108864),r0(e,67108864)}}function tx(e){if(e.tag===13||e.tag===31){var t=ei();t=dg(t);var n=rr(e,t);n!==null&&Fn(n,e,t),r0(e,t)}}var Eo=!0;function Kw(e,t,n,i){var s=Vt.T;Vt.T=null;var a=pe.p;try{pe.p=2,o0(e,t,n,i)}finally{pe.p=a,Vt.T=s}}function Qw(e,t,n,i){var s=Vt.T;Vt.T=null;var a=pe.p;try{pe.p=8,o0(e,t,n,i)}finally{pe.p=a,Vt.T=s}}function o0(e,t,n,i){if(Eo){var s=lg(i);if(s===null)Jp(e,t,i,Bh,n),ex(e,i);else if($w(s,e,t,n,i))i.stopPropagation();else if(ex(e,i),t&4&&-1<jw.indexOf(e)){for(;s!==null;){var a=wo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Fa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ti(r);o.entanglements[1]|=l,r&=~l}is(a),(de&6)===0&&(Nh=jn()+500,Tc(0,!1))}}break;case 31:case 13:o=rr(a,2),o!==null&&Fn(o,a,2),tf(),r0(a,2)}if(a=lg(i),a===null&&Jp(e,t,i,Bh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Jp(e,t,i,null,n)}}function lg(e){return e=gg(e),l0(e)}var Bh=null;function l0(e){if(Bh=null,e=Ga(e),e!==null){var t=gc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ox(t),e!==null)return e;e=null}else if(n===31){if(e=lx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bh=e,null}function i1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fT()){case px:return 2;case mx:return 8;case dh:case dT:return 32;case gx:return 268435456;default:return 32}default:return 32}}var cg=!1,ca=null,ua=null,ha=null,pc=new Map,mc=new Map,Js=[],jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ex(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":pc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mc.delete(t.pointerId)}}function Ol(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=wo(t),t!==null&&n1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function $w(e,t,n,i,s){switch(t){case"focusin":return ca=Ol(ca,e,t,n,i,s),!0;case"dragenter":return ua=Ol(ua,e,t,n,i,s),!0;case"mouseover":return ha=Ol(ha,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return pc.set(a,Ol(pc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,mc.set(a,Ol(mc.get(a)||null,e,t,n,i,s)),!0}return!1}function s1(e){var t=Ga(e.target);if(t!==null){var n=gc(t);if(n!==null){if(t=n.tag,t===13){if(t=ox(n),t!==null){e.blockedOn=t,w_(e.priority,function(){tx(n)});return}}else if(t===31){if(t=lx(n),t!==null){e.blockedOn=t,w_(e.priority,function(){tx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ch(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);fm=i,n.target.dispatchEvent(i),fm=null}else return t=wo(n),t!==null&&n1(t),e.blockedOn=n,!1;t.shift()}return!0}function nx(e,t,n){ch(e)&&n.delete(t)}function tR(){cg=!1,ca!==null&&ch(ca)&&(ca=null),ua!==null&&ch(ua)&&(ua=null),ha!==null&&ch(ha)&&(ha=null),pc.forEach(nx),mc.forEach(nx)}function ku(e,t){e.blockedOn===t&&(e.blockedOn=null,cg||(cg=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,tR)))}var Xu=null;function ix(e){Xu!==e&&(Xu=e,je.unstable_scheduleCallback(je.unstable_NormalPriority,function(){Xu===e&&(Xu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(l0(i||n)===null)continue;break}var a=wo(n);a!==null&&(e.splice(t,3),t-=3,Rm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function To(e){function t(l){return ku(l,e)}ca!==null&&ku(ca,e),ua!==null&&ku(ua,e),ha!==null&&ku(ha,e),pc.forEach(t),mc.forEach(t);for(var n=0;n<Js.length;n++){var i=Js[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Js.length&&(n=Js[0],n.blockedOn===null);)s1(n),n.blockedOn===null&&Js.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Vn]||null;if(typeof a=="function")r||ix(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Vn]||null)o=r.formAction;else if(l0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ix(n)}}}function a1(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function c0(e){this._internalRoot=e}sf.prototype.render=c0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=ei();e1(n,i,e,t,null,null)};sf.prototype.unmount=c0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e1(e.current,2,null,e,null,null),tf(),t[Ao]=null}};function sf(e){this._internalRoot=e}sf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Js.length&&t!==0&&t<Js[n].priority;n++);Js.splice(n,0,e),n===0&&s1(e)}};var sx=ax.version;if(sx!=="19.3.0")throw Error(J(527,sx,"19.3.0"));pe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=eT(t),e=e!==null?cx(e):null,e=e===null?null:e.stateNode,e};var eR={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Vt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Il=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Il.isDisabled&&Il.supportsFiber))try{vc=Il.inject(eR),$n=Il}catch(e){}var Il;af.createRoot=function(e,t){if(!rx(e))throw Error(J(299));var n=!1,i="",s=FS,a=HS,r=VS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=$M(e,1,!1,null,null,n,i,null,s,a,r,a1),e[Ao]=t.current,t0(e),new c0(t)};af.hydrateRoot=function(e,t,n){if(!rx(e))throw Error(J(299));var i=!1,s="",a=FS,r=HS,o=VS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=$M(e,1,!0,t,n!=null?n:null,i,s,l,a,r,o,a1),t.context=t1(null),n=t.current,i=ei(),i=dg(i),s=sa(i),s.callback=null,aa(n,s,i),n=i,t.current.lanes=n,yc(t,n),is(t),e[Ao]=t.current,t0(e),new sf(t)};af.version="19.3.0"});var c1=Gi((_N,l1)=>{"use strict";function o1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o1)}catch(e){console.error(e)}}o1(),l1.exports=r1()});var aE=Gi(jd=>{"use strict";var zU=Symbol.for("react.transitional.element"),BU=Symbol.for("react.fragment");function sE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:zU,type:e,key:i,ref:t!==void 0?t:null,props:n}}jd.Fragment=BU;jd.jsx=sE;jd.jsxs=sE});var du=Gi((UI,rE)=>{"use strict";rE.exports=aE()});var LI=Pa(Tl(),1),bE=Pa(c1(),1);var Cr=Pa(Tl(),1);var I1=0,K0=1,P1=2;var Q0=1,z1=2,us=3,Ps=0,Ln=1,ui=2,Bs=0,dr=1,j0=2,$0=3,tv=4,B1=5,Aa=100,F1=101,H1=102,V1=103,G1=104,k1=200,X1=201,q1=202,W1=203,Rf=204,Cf=205,Y1=206,Z1=207,J1=208,K1=209,Q1=210,j1=211,$1=212,tb=213,eb=214,nd=0,id=1,sd=2,pr=3,ad=4,rd=5,od=6,ld=7,ev=0,nb=1,ib=2,Fs=0,sb=1,ab=2,rb=3,ob=4,lb=5,cb=6,cd=7;var nv=300,Mr=301,br=302,ud=303,hd=304,ru=306,ls=1e3,as=1001,Df=1002,kn=1003,ub=1004;var ou=1005;var ri=1006,fd=1007;var hs=1008;var Fi=1009,iv=1010,sv=1011,ll=1012,dd=1013,La=1014,fs=1015,cl=1016,pd=1017,md=1018,ul=1020,av=35902,rv=35899,ov=1021,lv=1022,Ei=1023,Wo=1026,hl=1027,cv=1028,gd=1029,uv=1030,vd=1031;var _d=1033,lu=33776,cu=33777,uu=33778,hu=33779,yd=35840,xd=35841,Sd=35842,Md=35843,bd=36196,Ed=37492,Td=37496,Ad=37808,wd=37809,Rd=37810,Cd=37811,Dd=37812,Ud=37813,Nd=37814,Ld=37815,Od=37816,Id=37817,Pd=37818,zd=37819,Bd=37820,Fd=37821,Hd=36492,Vd=36494,Gd=36495,kd=36283,Xd=36284,qd=36285,Wd=36286;var Pc=2300,Uf=2301,wf=2302,z0=2400,B0=2401,F0=2402;var hb=3200,fb=3201;var hv=0,db=1,Hs="",gn="srgb",mr="srgb-linear",zc="linear",Se="srgb";var fr=7680;var H0=519,pb=512,mb=513,gb=514,fv=515,vb=516,_b=517,yb=518,xb=519,V0=35044;var dv="300 es",Pi=2e3,Bc=2001;var zs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var u0=Math.PI/180,Nf=180/Math.PI;function fl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[e&255]+Sn[e>>8&255]+Sn[e>>16&255]+Sn[e>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ne(e,t,n){return Math.max(t,Math.min(n,e))}function nR(e,t){return(e%t+t)%t}function h0(e,t,n){return(1-n)*e+n*t}function Rc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var gt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=1-o,f=l*h+c*p+u*g+d*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let A=Math.sqrt(_),R=Math.atan2(A,f*v);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let y=o*v;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,d=d*m+x*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],h=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+u*d+l*p-c*h,t[n+1]=l*g+u*h+c*d-o*p,t[n+2]=c*g+u*p+o*h-l*d,t[n+3]=u*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(u1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(u1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return f0.copy(this).projectOnVector(t),this.sub(f0)}reflect(t){return this.sub(f0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},f0=new N,u1=new Xn,Yt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],v=s[1],_=s[4],y=s[7],A=s[2],R=s[5],w=s[8];return a[0]=r*x+o*v+l*A,a[3]=r*m+o*_+l*R,a[6]=r*f+o*y+l*w,a[1]=c*x+u*v+d*A,a[4]=c*m+u*_+d*R,a[7]=c*f+u*y+d*w,a[2]=h*x+p*v+g*A,a[5]=h*m+p*_+g*R,a[8]=h*f+p*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,h=o*l-u*a,p=c*a-r*l,g=n*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*r)*x,t[3]=h*x,t[4]=(u*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(d0.makeScale(t,n)),this}rotate(t){return this.premultiply(d0.makeRotation(-t)),this}translate(t,n){return this.premultiply(d0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},d0=new Yt;function pv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Fc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Sb(){let e=Fc("canvas");return e.style.display="block",e}var h1={};function Yo(e){e in h1||(h1[e]=!0,console.warn(e))}function Mb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var f1=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d1=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iR(){let e={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Se&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(s.r=qo(s.r),s.g=qo(s.g),s.b=qo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hs?zc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[mr]:{primaries:t,whitePoint:i,transfer:zc,toXYZ:f1,fromXYZ:d1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:f1,fromXYZ:d1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),e}var he=iR();function Is(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Lo,Lf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Lo===void 0&&(Lo=Fc("canvas")),Lo.width=t.width,Lo.height=t.height;let s=Lo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Lo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let n=Fc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Is(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sR=0,Zo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(p0(s[r].image)):a.push(p0(s[r]))}else a=p0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function p0(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?Lf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var aR=0,m0=new N,Un=class e extends zs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=as,s=as,a=ri,r=hs,o=Ei,l=Fi,c=e.DEFAULT_ANISOTROPY,u=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=fl(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(m0).x}get height(){return this.source.getSize(m0).y}get depth(){return this.source.getSize(m0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case Df:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case Df:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=nv;Un.DEFAULT_ANISOTROPY=1;var Be=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,y=(p+1)/2,A=(f+1)/2,R=(u+h)/4,w=(d+x)/4,U=(g+m)/4;return _>y&&_>A?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=R/i,a=w/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=R/s,a=U/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=U/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this.w=ne(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this.w=ne(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Of=class extends zs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Be(0,0,t,n),this.scissorTest=!1,this.viewport=new Be(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Un(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Zo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cs=class extends Of{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Hc=class extends Un{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var If=class extends Un{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wa=class{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Li.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Li.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Li.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Li):Li.fromBufferAttribute(a,r),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rf.copy(i.boundingBox)),rf.applyMatrix4(t.matrixWorld),this.union(rf)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cc),of.subVectors(this.max,Cc),Oo.subVectors(t.a,Cc),Io.subVectors(t.b,Cc),Po.subVectors(t.c,Cc),ya.subVectors(Io,Oo),xa.subVectors(Po,Io),lr.subVectors(Oo,Po);let n=[0,-ya.z,ya.y,0,-xa.z,xa.y,0,-lr.z,lr.y,ya.z,0,-ya.x,xa.z,0,-xa.x,lr.z,0,-lr.x,-ya.y,ya.x,0,-xa.y,xa.x,0,-lr.y,lr.x,0];return!g0(n,Oo,Io,Po,of)||(n=[1,0,0,0,1,0,0,0,1],!g0(n,Oo,Io,Po,of))?!1:(lf.crossVectors(ya,xa),n=[lf.x,lf.y,lf.z],g0(n,Oo,Io,Po,of))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ds=[new N,new N,new N,new N,new N,new N,new N,new N],Li=new N,rf=new wa,Oo=new N,Io=new N,Po=new N,ya=new N,xa=new N,lr=new N,Cc=new N,of=new N,lf=new N,cr=new N;function g0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){cr.fromArray(e,a);let o=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=t.dot(cr),c=n.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var rR=new wa,Dc=new N,v0=new N,Jo=class{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):rR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dc.subVectors(t,this.center);let n=Dc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Dc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(v0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dc.copy(t.center).add(v0)),this.expandByPoint(Dc.copy(t.center).sub(v0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Us=new N,_0=new N,cf=new N,Sa=new N,y0=new N,uf=new N,x0=new N,Vc=class{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Us)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Us.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Us.copy(this.origin).addScaledVector(this.direction,n),Us.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){_0.copy(t).add(n).multiplyScalar(.5),cf.copy(n).sub(t).normalize(),Sa.copy(this.origin).sub(_0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(cf),o=Sa.dot(this.direction),l=-Sa.dot(cf),c=Sa.lengthSq(),u=Math.abs(1-r*r),d,h,p,g;if(u>0)if(d=r*l-o,h=r*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_0).addScaledVector(cf,h),p}intersectSphere(t,n){Us.subVectors(t.center,this.origin);let i=Us.dot(this.direction),s=Us.dot(Us)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Us)!==null}intersectTriangle(t,n,i,s,a){y0.subVectors(n,t),uf.subVectors(i,t),x0.crossVectors(y0,uf);let r=this.direction.dot(x0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Sa.subVectors(this.origin,t);let l=o*this.direction.dot(uf.crossVectors(Sa,uf));if(l<0)return null;let c=o*this.direction.dot(y0.cross(Sa));if(c<0||l+c>r)return null;let u=-o*Sa.dot(x0);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class e{constructor(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/zo.setFromMatrixColumn(t,0).length(),a=1/zo.setFromMatrixColumn(t,1).length(),r=1/zo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*u,p=r*d,g=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-g,n[6]=x+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*u,n[9]=x-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*u,p=r*d,g=o*u,x=o*d;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*u,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+g,n[10]=h-x*d}else if(t.order==="XZY"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=r*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oR,t,lR)}lookAt(t,n,i){let s=this.elements;return si.subVectors(t,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Ma.crossVectors(i,si),Ma.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ma.crossVectors(i,si)),Ma.normalize(),hf.crossVectors(si,Ma),s[0]=Ma.x,s[4]=hf.x,s[8]=si.x,s[1]=Ma.y,s[5]=hf.y,s[9]=si.y,s[2]=Ma.z,s[6]=hf.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],A=i[15],R=s[0],w=s[4],U=s[8],E=s[12],S=s[1],D=s[5],F=s[9],q=s[13],V=s[2],Y=s[6],W=s[10],rt=s[14],G=s[3],mt=s[7],xt=s[11],At=s[15];return a[0]=r*R+o*S+l*V+c*G,a[4]=r*w+o*D+l*Y+c*mt,a[8]=r*U+o*F+l*W+c*xt,a[12]=r*E+o*q+l*rt+c*At,a[1]=u*R+d*S+h*V+p*G,a[5]=u*w+d*D+h*Y+p*mt,a[9]=u*U+d*F+h*W+p*xt,a[13]=u*E+d*q+h*rt+p*At,a[2]=g*R+x*S+m*V+f*G,a[6]=g*w+x*D+m*Y+f*mt,a[10]=g*U+x*F+m*W+f*xt,a[14]=g*E+x*q+m*rt+f*At,a[3]=v*R+_*S+y*V+A*G,a[7]=v*w+_*D+y*Y+A*mt,a[11]=v*U+_*F+y*W+A*xt,a[15]=v*E+_*q+y*rt+A*At,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+x*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*u-a*l*u)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*u-i*c*u)+f*(-s*o*u-n*l*d+n*o*h+s*r*d-i*r*h+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=d*m*c-x*h*c+x*l*p-o*m*p-d*l*f+o*h*f,_=g*h*c-u*m*c-g*l*p+r*m*p+u*l*f-r*h*f,y=u*x*c-g*d*c+g*o*p-r*x*p-u*o*f+r*d*f,A=g*d*l-u*x*l-g*o*h+r*x*h+u*o*m-r*d*m,R=n*v+i*_+s*y+a*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=v*w,t[1]=(x*h*a-d*m*a-x*s*p+i*m*p+d*s*f-i*h*f)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*f+i*l*f)*w,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*w,t[4]=_*w,t[5]=(u*m*a-g*h*a+g*s*p-n*m*p-u*s*f+n*h*f)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*f-n*l*f)*w,t[7]=(r*h*a-u*l*a+u*s*c-n*h*c-r*s*p+n*l*p)*w,t[8]=y*w,t[9]=(g*d*a-u*x*a-g*i*p+n*x*p+u*i*f-n*d*f)*w,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*f+n*o*f)*w,t[11]=(u*o*a-r*d*a-u*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=A*w,t[13]=(u*x*s-g*d*s+g*i*h-n*x*h-u*i*m+n*d*m)*w,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-u*o*s+u*i*l-n*d*l-r*i*h+n*o*h)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,h=a*c,p=a*u,g=a*d,x=r*u,m=r*d,f=o*d,v=l*c,_=l*u,y=l*d,A=i.x,R=i.y,w=i.z;return s[0]=(1-(x+f))*A,s[1]=(p+y)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(h+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+_)*w,s[9]=(m-v)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=zo.set(s[0],s[1],s[2]).length(),r=zo.set(s[4],s[5],s[6]).length(),o=zo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Oi.copy(this);let c=1/a,u=1/r,d=1/o;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=d,Oi.elements[9]*=d,Oi.elements[10]*=d,n.setFromRotationMatrix(Oi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Pi,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Pi)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Bc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Pi,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Pi)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Bc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},zo=new N,Oi=new Le,oR=new N(0,0,0),lR=new N(1,1,1),Ma=new N,hf=new N,si=new N,p1=new Le,m1=new Xn,zi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return p1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return m1.setFromEuler(this),this.setFromQuaternion(m1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cR=0,g1=new N,Bo=new Xn,Ns=new Le,ff=new N,Uc=new N,uR=new N,hR=new Xn,v1=new N(1,0,0),_1=new N(0,1,0),y1=new N(0,0,1),x1={type:"added"},fR={type:"removed"},Fo={type:"childadded",child:null},S0={type:"childremoved",child:null},Nn=class e extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new N,n=new zi,i=new Xn,s=new N(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Yt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bo.setFromAxisAngle(t,n),this.quaternion.multiply(Bo),this}rotateOnWorldAxis(t,n){return Bo.setFromAxisAngle(t,n),this.quaternion.premultiply(Bo),this}rotateX(t){return this.rotateOnAxis(v1,t)}rotateY(t){return this.rotateOnAxis(_1,t)}rotateZ(t){return this.rotateOnAxis(y1,t)}translateOnAxis(t,n){return g1.copy(t).applyQuaternion(this.quaternion),this.position.add(g1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(v1,t)}translateY(t){return this.translateOnAxis(_1,t)}translateZ(t){return this.translateOnAxis(y1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ns.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ff.copy(t):ff.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Uc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ns.lookAt(Uc,ff,this.up):Ns.lookAt(ff,Uc,this.up),this.quaternion.setFromRotationMatrix(Ns),s&&(Ns.extractRotation(s.matrixWorld),Bo.setFromRotationMatrix(Ns),this.quaternion.premultiply(Bo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(x1),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(fR),S0.child=t,this.dispatchEvent(S0),S0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ns.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ns.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ns),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(x1),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uc,t,uR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uc,hR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Nn.DEFAULT_UP=new N(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=new N,Ls=new N,M0=new N,Os=new N,Ho=new N,Vo=new N,S1=new N,b0=new N,E0=new N,T0=new N,A0=new Be,w0=new Be,R0=new Be,Ta=class e{constructor(t=new N,n=new N,i=new N){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ii.subVectors(t,n),s.cross(Ii);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ii.subVectors(s,n),Ls.subVectors(i,n),M0.subVectors(t,n);let r=Ii.dot(Ii),o=Ii.dot(Ls),l=Ii.dot(M0),c=Ls.dot(Ls),u=Ls.dot(M0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Os)===null?!1:Os.x>=0&&Os.y>=0&&Os.x+Os.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Os.x),l.addScaledVector(r,Os.y),l.addScaledVector(o,Os.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return A0.setScalar(0),w0.setScalar(0),R0.setScalar(0),A0.fromBufferAttribute(t,n),w0.fromBufferAttribute(t,i),R0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(A0,a.x),r.addScaledVector(w0,a.y),r.addScaledVector(R0,a.z),r}static isFrontFacing(t,n,i,s){return Ii.subVectors(i,n),Ls.subVectors(t,n),Ii.cross(Ls).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ls.subVectors(this.a,this.b),Ii.cross(Ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Ho.subVectors(s,i),Vo.subVectors(a,i),b0.subVectors(t,i);let l=Ho.dot(b0),c=Vo.dot(b0);if(l<=0&&c<=0)return n.copy(i);E0.subVectors(t,s);let u=Ho.dot(E0),d=Vo.dot(E0);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Ho,r);T0.subVectors(t,a);let p=Ho.dot(T0),g=Vo.dot(T0);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Vo,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return S1.subVectors(a,s),o=(d-u)/(d-u+(p-g)),n.copy(s).addScaledVector(S1,o);let f=1/(m+x+h);return r=x*f,o=h*f,n.copy(i).addScaledVector(Ho,r).addScaledVector(Vo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ba={h:0,s:0,l:0},df={h:0,s:0,l:0};function C0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Jt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=he.workingColorSpace){return this.r=t,this.g=n,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=he.workingColorSpace){if(t=nR(t,1),n=ne(n,0,1),i=ne(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=C0(r,a,t+1/3),this.g=C0(r,a,t),this.b=C0(r,a,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,n=gn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gn){let i=bb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return he.workingToColorSpace(Mn.copy(this),t),Math.round(ne(Mn.r*255,0,255))*65536+Math.round(ne(Mn.g*255,0,255))*256+Math.round(ne(Mn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=he.workingColorSpace){he.workingToColorSpace(Mn.copy(this),n);let i=Mn.r,s=Mn.g,a=Mn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=he.workingColorSpace){return he.workingToColorSpace(Mn.copy(this),n),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=gn){he.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,i=Mn.g,s=Mn.b;return t!==gn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ba),this.setHSL(ba.h+t,ba.s+n,ba.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ba),t.getHSL(df);let i=h0(ba.h,df.h,n),s=h0(ba.s,df.s,n),a=h0(ba.l,df.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Jt;Jt.NAMES=bb;var dR=0,Ra=class extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dR++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=dr,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=Aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==Ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rf&&(i.blendSrc=this.blendSrc),this.blendDst!==Cf&&(i.blendDst=this.blendDst),this.blendEquation!==Aa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gr=class extends Ra{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new N,pf=new gt,pR=0,vn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=V0,this.updateRanges=[],this.gpuType=fs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pf.fromBufferAttribute(this,n),pf.applyMatrix3(t),this.setXY(n,pf.x,pf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix3(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix4(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyNormalMatrix(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.transformDirection(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Rc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Rc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Rc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Rc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Rc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array),a=Gn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==V0&&(t.usage=this.usage),t}};var Gc=class extends vn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var kc=class extends vn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ln=class extends vn{constructor(t,n,i){super(new Float32Array(t),n,i)}},mR=0,bi=new Le,D0=new Nn,Go=new N,ai=new wa,Nc=new wa,on=new N,oi=class e extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pv(t)?kc:Gc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Yt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,n,i){return bi.makeTranslation(t,n,i),this.applyMatrix4(bi),this}scale(t,n,i){return bi.makeScale(t,n,i),this.applyMatrix4(bi),this}lookAt(t){return D0.lookAt(t),D0.updateMatrix(),this.applyMatrix4(D0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Go).negate(),this.translate(Go.x,Go.y,Go.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ln(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Nc.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(ai.min,Nc.min),ai.expandByPoint(on),on.addVectors(ai.max,Nc.max),ai.expandByPoint(on)):(ai.expandByPoint(Nc.min),ai.expandByPoint(Nc.max))}ai.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)on.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(on));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Go.fromBufferAttribute(t,c),on.add(Go)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new N,l[U]=new N;let c=new N,u=new N,d=new N,h=new gt,p=new gt,g=new gt,x=new N,m=new N;function f(U,E,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(a,U),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,S),u.sub(c),d.sub(c),p.sub(h),g.sub(h);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[U].add(x),o[E].add(x),o[S].add(x),l[U].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let U=0,E=v.length;U<E;++U){let S=v[U],D=S.start,F=S.count;for(let q=D,V=D+F;q<V;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let _=new N,y=new N,A=new N,R=new N;function w(U){A.fromBufferAttribute(s,U),R.copy(A);let E=o[U];_.copy(E),_.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(R,E);let D=y.dot(l[U])<0?-1:1;r.setXYZW(U,_.x,_.y,_.z,D)}for(let U=0,E=v.length;U<E;++U){let S=v[U],D=S.start,F=S.count;for(let q=D,V=D+F;q<V;q+=3)w(t.getX(q+0)),w(t.getX(q+1)),w(t.getX(q+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new N,a=new N,r=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)on.fromBufferAttribute(t,n),on.normalize(),t.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new vn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},M1=new Le,ur=new Vc,mf=new Jo,b1=new N,gf=new N,vf=new N,_f=new N,U0=new N,yf=new N,E1=new N,xf=new N,Xe=class extends Nn{constructor(t=new oi,n=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){yf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(U0.fromBufferAttribute(d,t),r?yf.addScaledVector(U0,u):yf.addScaledVector(U0.sub(n),u))}n.add(yf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mf.copy(i.boundingSphere),mf.applyMatrix4(a),ur.copy(t.ray).recast(t.near),!(mf.containsPoint(ur.origin)===!1&&(ur.intersectSphere(mf,b1)===null||ur.origin.distanceToSquared(b1)>(t.far-t.near)**2))&&(M1.copy(a).invert(),ur.copy(t.ray).applyMatrix4(M1),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ur)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let R=o.getX(y),w=o.getX(y+1),U=o.getX(y+2);s=Sf(this,f,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=Sf(this,r,t,i,c,u,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let R=y,w=y+1,U=y+2;s=Sf(this,f,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,_=m+1,y=m+2;s=Sf(this,r,t,i,c,u,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function gR(e,t,n,i,s,a,r,o){let l;if(t.side===Ln?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ps,o),l===null)return null;xf.copy(o),xf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(xf);return c<n.near||c>n.far?null:{distance:c,point:xf.clone(),object:e}}function Sf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,gf),e.getVertexPosition(l,vf),e.getVertexPosition(c,_f);let u=gR(e,t,n,i,gf,vf,_f,E1);if(u){let d=new N;Ta.getBarycoord(E1,gf,vf,_f,d),s&&(u.uv=Ta.getInterpolatedAttribute(s,o,l,c,d,new gt)),a&&(u.uv1=Ta.getInterpolatedAttribute(a,o,l,c,d,new gt)),r&&(u.normal=Ta.getInterpolatedAttribute(r,o,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new N,materialIndex:0};Ta.getNormal(gf,vf,_f,h.normal),u.face=h,u.barycoord=d}return u}var Qo=class e extends oi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function g(x,m,f,v,_,y,A,R,w,U,E){let S=y/w,D=A/U,F=y/2,q=A/2,V=R/2,Y=w+1,W=U+1,rt=0,G=0,mt=new N;for(let xt=0;xt<W;xt++){let At=xt*D-q;for(let Ft=0;Ft<Y;Ft++){let Zt=Ft*S-F;mt[x]=Zt*v,mt[m]=At*_,mt[f]=V,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[m]=0,mt[f]=R>0?1:-1,u.push(mt.x,mt.y,mt.z),d.push(Ft/w),d.push(1-xt/U),rt+=1}}for(let xt=0;xt<U;xt++)for(let At=0;At<w;At++){let Ft=h+At+Y*xt,Zt=h+At+Y*(xt+1),ce=h+(At+1)+Y*(xt+1),oe=h+(At+1)+Y*xt;l.push(Ft,Zt,oe),l.push(Zt,ce,oe),G+=6}o.addGroup(p,G,E),p+=G,h+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Er(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function En(e){let t={};for(let n=0;n<e.length;n++){let i=Er(e[n]);for(let s in i)t[s]=i[s]}return t}function vR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function mv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Eb={clone:Er,merge:En},_R=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends Ra{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_R,this.fragmentShader=yR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=vR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Xc=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ea=new N,T1=new gt,A1=new gt,bn=class extends Xc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Nf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(u0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nf*2*Math.atan(Math.tan(u0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z)}getViewSize(t,n){return this.getViewBounds(t,T1,A1),n.subVectors(A1,T1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(u0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ko=-90,Xo=1,Pf=class extends Nn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(ko,Xo,t,n);s.layers=this.layers,this.add(s);let a=new bn(ko,Xo,t,n);a.layers=this.layers,this.add(a);let r=new bn(ko,Xo,t,n);r.layers=this.layers,this.add(r);let o=new bn(ko,Xo,t,n);o.layers=this.layers,this.add(o);let l=new bn(ko,Xo,t,n);l.layers=this.layers,this.add(l);let c=new bn(ko,Xo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},qc=class extends Un{constructor(t=[],n=Mr,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zf=class extends cs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qo(5,5,5),a=new Bi({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Bs});a.uniforms.tEquirect.value=n;let r=new Xe(s,a),o=n.minFilter;return n.minFilter===hs&&(n.minFilter=ri),new Pf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},rs=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xR={type:"move"},jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new rs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var $o=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Wc=class extends Un{constructor(t=null,n=1,i=1,s,a,r,o,l,c=kn,u=kn,d,h){super(null,r,o,l,c,u,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var N0=new N,SR=new N,MR=new Yt,ss=class{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=N0.subVectors(i,n).cross(SR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(N0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||MR.getNormalMatrix(t),s=this.coplanarPoint(N0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hr=new Jo,bR=new gt(.5,.5),Mf=new N,tl=class{constructor(t=new ss,n=new ss,i=new ss,s=new ss,a=new ss,r=new ss){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Pi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],h=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],v=a[12],_=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-u,f-g,A-v).normalize(),s[1].setComponents(c+r,p+u,f+g,A+v).normalize(),s[2].setComponents(c+o,p+d,f+x,A+_).normalize(),s[3].setComponents(c-o,p-d,f-x,A-_).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,f-m,A-y).normalize();else if(s[4].setComponents(c-l,p-h,f-m,A-y).normalize(),n===Pi)s[5].setComponents(c+l,p+h,f+m,A+y).normalize();else if(n===Bc)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);let n=bR.distanceTo(t.center);return hr.radius=.7071067811865476+n,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Mf.x=s.normal.x>0?t.max.x:t.min.x,Mf.y=s.normal.y>0?t.max.y:t.min.y,Mf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vr=class extends Un{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yc=class extends Un{constructor(t,n,i=La,s,a,r,o=kn,l=kn,c,u=Wo,d=1){if(u!==Wo&&u!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Zc=class extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,p=(r-u)/h;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new gt:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new N,s=[],a=[],r=[],o=new N,l=new Le;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new N)}a[0]=new N,r[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ne(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos(ne(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},el=class extends li{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new gt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bf=class extends el{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function gv(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,d){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+d)+(l-o)/d;h*=u,p*=u,s(r,o,h,p)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var bf=new N,L0=new gv,O0=new gv,I0=new gv,nl=class extends li{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new N){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(bf.subVectors(s[0],s[1]).add(s[0]),c=bf);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(bf.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=bf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),L0.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,m),O0.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,m),I0.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(L0.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),O0.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),I0.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(L0.calc(l),O0.calc(l),I0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function w1(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function ER(e,t){let n=1-e;return n*n*t}function TR(e,t){return 2*(1-e)*e*t}function AR(e,t){return e*e*t}function Oc(e,t,n,i){return ER(e,t)+TR(e,n)+AR(e,i)}function wR(e,t){let n=1-e;return n*n*n*t}function RR(e,t){let n=1-e;return 3*n*n*e*t}function CR(e,t){return 3*(1-e)*e*e*t}function DR(e,t){return e*e*e*t}function Ic(e,t,n,i,s){return wR(e,t)+RR(e,n)+CR(e,i)+DR(e,s)}var Jc=class extends li{constructor(t=new gt,n=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Ic(t,s.x,a.x,r.x,o.x),Ic(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ff=class extends li{constructor(t=new N,n=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Ic(t,s.x,a.x,r.x,o.x),Ic(t,s.y,a.y,r.y,o.y),Ic(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kc=class extends li{constructor(t=new gt,n=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new gt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new gt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hf=class extends li{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qc=class extends li{constructor(t=new gt,n=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Oc(t,s.x,a.x,r.x),Oc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vf=class extends li{constructor(t=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Oc(t,s.x,a.x,r.x),Oc(t,s.y,a.y,r.y),Oc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new gt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(w1(o,l.x,c.x,u.x,d.x),w1(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new gt().fromArray(s))}return this}},G0=Object.freeze({__proto__:null,ArcCurve:Bf,CatmullRomCurve3:nl,CubicBezierCurve:Jc,CubicBezierCurve3:Ff,EllipseCurve:el,LineCurve:Kc,LineCurve3:Hf,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:Vf,SplineCurve:jc}),Gf=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new G0[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new G0[s.type]().fromJSON(s))}return this}},_r=class extends Gf{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new Kc(this.currentPoint.clone(),new gt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new Qc(this.currentPoint.clone(),new gt(t,n),new gt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new Jc(this.currentPoint.clone(),new gt(t,n),new gt(i,s),new gt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new jc(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new el(t,n,i,s,a,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ca=class extends _r{constructor(t){super(t),this.uuid=fl(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new _r().fromJSON(s))}return this}};function UR(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=Tb(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=PR(e,t,a,n)),e.length>80*n){o=1/0,l=1/0;let u=-1/0,d=-1/0;for(let h=n;h<s;h+=n){let p=e[h],g=e[h+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return $c(a,r,n,o,l,c,0),r}function Tb(e,t,n,i,s){let a;if(s===YR(e,t,n,i)>0)for(let r=t;r<n;r+=i)a=R1(r/i|0,e[r],e[r+1],a);else for(let r=n-i;r>=t;r-=i)a=R1(r/i|0,e[r],e[r+1],a);return a&&il(a,a.next)&&(eu(a),a=a.next),a}function yr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(il(n,n.next)||ze(n.prev,n,n.next)===0)){if(eu(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function $c(e,t,n,i,s,a,r){if(!e)return;!r&&a&&VR(e,i,s,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(a?LR(e,i,s,a):NR(e)){t.push(l.i,e.i,c.i),eu(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=OR(yr(e),t),$c(e,t,n,i,s,a,2)):r===2&&IR(e,t,n,i,s,a):$c(yr(e),t,n,i,s,a,1);break}}}function NR(e){let t=e.prev,n=e,i=e.next;if(ze(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(s,a,r),d=Math.min(o,l,c),h=Math.max(s,a,r),p=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Lc(s,o,a,l,r,c,g.x,g.y)&&ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function LR(e,t,n,i){let s=e.prev,a=e,r=e.next;if(ze(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,d=a.y,h=r.y,p=Math.min(o,l,c),g=Math.min(u,d,h),x=Math.max(o,l,c),m=Math.max(u,d,h),f=k0(p,g,t,n,i),v=k0(x,m,t,n,i),_=e.prevZ,y=e.nextZ;for(;_&&_.z>=f&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Lc(o,u,l,d,c,h,_.x,_.y)&&ze(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Lc(o,u,l,d,c,h,y.x,y.y)&&ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Lc(o,u,l,d,c,h,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Lc(o,u,l,d,c,h,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function OR(e,t){let n=e;do{let i=n.prev,s=n.next.next;!il(i,s)&&wb(i,n,n.next,s)&&tu(i,s)&&tu(s,i)&&(t.push(i.i,n.i,s.i),eu(n),eu(n.next),n=e=s),n=n.next}while(n!==e);return yr(n)}function IR(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&XR(r,o)){let l=Rb(r,o);r=yr(r,r.next),l=yr(l,l.next),$c(r,t,n,i,s,a,0),$c(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function PR(e,t,n,i){let s=[];for(let a=0,r=t.length;a<r;a++){let o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=Tb(e,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(kR(c))}s.sort(zR);for(let a=0;a<s.length;a++)n=BR(s[a],n);return n}function zR(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}return n}function BR(e,t){let n=FR(e,t);if(!n)return t;let i=Rb(n,e);return yr(i,i.next),yr(n,n.next)}function FR(e,t){let n=t,i=e.x,s=e.y,a=-1/0,r;if(il(e,n))return n;do{if(il(e,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>a&&(a=d,r=n.x<n.next.x?n:n.next,d===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Ab(s<c?i:a,s,l,c,s<c?a:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);tu(n,e)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&HR(r,n)))&&(r=n,u=d)}n=n.next}while(n!==o);return r}function HR(e,t){return ze(e.prev,e,t.prev)<0&&ze(t.next,e,e.next)<0}function VR(e,t,n,i){let s=e;do s.z===0&&(s.z=k0(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,GR(s)}function GR(e){let t,n=1;do{let i=e,s;e=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;i=r}a.nextZ=null,n*=2}while(t>1);return e}function k0(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function kR(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ab(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function Lc(e,t,n,i,s,a,r,o){return!(e===r&&t===o)&&Ab(e,t,n,i,s,a,r,o)}function XR(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!qR(e,t)&&(tu(e,t)&&tu(t,e)&&WR(e,t)&&(ze(e.prev,e,t.prev)||ze(e,t.prev,t))||il(e,t)&&ze(e.prev,e,e.next)>0&&ze(t.prev,t,t.next)>0)}function ze(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function il(e,t){return e.x===t.x&&e.y===t.y}function wb(e,t,n,i){let s=Tf(ze(e,t,n)),a=Tf(ze(e,t,i)),r=Tf(ze(n,i,e)),o=Tf(ze(n,i,t));return!!(s!==a&&r!==o||s===0&&Ef(e,n,t)||a===0&&Ef(e,i,t)||r===0&&Ef(n,e,i)||o===0&&Ef(n,t,i))}function Ef(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Tf(e){return e>0?1:e<0?-1:0}function qR(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&wb(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function tu(e,t){return ze(e.prev,e,e.next)<0?ze(e,t,e.next)>=0&&ze(e,e.prev,t)>=0:ze(e,t,e.prev)<0||ze(e,e.next,t)<0}function WR(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function Rb(e,t){let n=X0(e.i,e.x,e.y),i=X0(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function R1(e,t,n,i){let s=X0(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function eu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function X0(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function YR(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var q0=class{static triangulate(t,n,i=2){return UR(t,n,i)}},os=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];C1(t),D1(i,t);let r=t.length;n.forEach(C1);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,D1(i,n[l]);let o=q0.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function C1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function D1(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var sl=class e extends oi{constructor(t=new Ca([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new ln(s,3)),this.setAttribute("uv",new ln(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,f=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:ZR,_,y=!1,A,R,w,U;f&&(_=f.getSpacedPoints(u),y=!0,h=!1,A=f.computeFrenetFrames(u,!1),R=new N,w=new N,U=new N),h||(m=0,p=0,g=0,x=0);let E=o.extractPoints(c),S=E.shape,D=E.holes;if(!os.isClockWise(S)){S=S.reverse();for(let tt=0,Q=D.length;tt<Q;tt++){let Z=D[tt];os.isClockWise(Z)&&(D[tt]=Z.reverse())}}function q(tt){let Z=10000000000000001e-36,j=tt[0];for(let dt=1;dt<=tt.length;dt++){let st=dt%tt.length,ht=tt[st],Bt=ht.x-j.x,Ht=ht.y-j.y,T=Bt*Bt+Ht*Ht,M=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(j.x),Math.abs(j.y)),P=Z*M*M;if(T<=P){tt.splice(st,1),dt--;continue}j=ht}}q(S),D.forEach(q);let V=D.length,Y=S;for(let tt=0;tt<V;tt++){let Q=D[tt];S=S.concat(Q)}function W(tt,Q,Z){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Q,Z)}let rt=S.length;function G(tt,Q,Z){let j,dt,st,ht=tt.x-Q.x,Bt=tt.y-Q.y,Ht=Z.x-tt.x,T=Z.y-tt.y,M=ht*ht+Bt*Bt,P=ht*T-Bt*Ht;if(Math.abs(P)>Number.EPSILON){let X=Math.sqrt(M),nt=Math.sqrt(Ht*Ht+T*T),z=Q.x-Bt/X,Rt=Q.y+ht/X,ut=Z.x-T/nt,Ct=Z.y+Ht/nt,Dt=((ut-z)*T-(Ct-Rt)*Ht)/(ht*T-Bt*Ht);j=z+ht*Dt-tt.x,dt=Rt+Bt*Dt-tt.y;let it=j*j+dt*dt;if(it<=2)return new gt(j,dt);st=Math.sqrt(it/2)}else{let X=!1;ht>Number.EPSILON?Ht>Number.EPSILON&&(X=!0):ht<-Number.EPSILON?Ht<-Number.EPSILON&&(X=!0):Math.sign(Bt)===Math.sign(T)&&(X=!0),X?(j=-Bt,dt=ht,st=Math.sqrt(M)):(j=ht,dt=Bt,st=Math.sqrt(M/2))}return new gt(j/st,dt/st)}let mt=[];for(let tt=0,Q=Y.length,Z=Q-1,j=tt+1;tt<Q;tt++,Z++,j++)Z===Q&&(Z=0),j===Q&&(j=0),mt[tt]=G(Y[tt],Y[Z],Y[j]);let xt=[],At,Ft=mt.concat();for(let tt=0,Q=V;tt<Q;tt++){let Z=D[tt];At=[];for(let j=0,dt=Z.length,st=dt-1,ht=j+1;j<dt;j++,st++,ht++)st===dt&&(st=0),ht===dt&&(ht=0),At[j]=G(Z[j],Z[st],Z[ht]);xt.push(At),Ft=Ft.concat(At)}let Zt;if(m===0)Zt=os.triangulateShape(Y,D);else{let tt=[],Q=[];for(let Z=0;Z<m;Z++){let j=Z/m,dt=p*Math.cos(j*Math.PI/2),st=g*Math.sin(j*Math.PI/2)+x;for(let ht=0,Bt=Y.length;ht<Bt;ht++){let Ht=W(Y[ht],mt[ht],st);Ot(Ht.x,Ht.y,-dt),j===0&&tt.push(Ht)}for(let ht=0,Bt=V;ht<Bt;ht++){let Ht=D[ht];At=xt[ht];let T=[];for(let M=0,P=Ht.length;M<P;M++){let X=W(Ht[M],At[M],st);Ot(X.x,X.y,-dt),j===0&&T.push(X)}j===0&&Q.push(T)}}Zt=os.triangulateShape(tt,Q)}let ce=Zt.length,oe=g+x;for(let tt=0;tt<rt;tt++){let Q=h?W(S[tt],Ft[tt],oe):S[tt];y?(w.copy(A.normals[0]).multiplyScalar(Q.x),R.copy(A.binormals[0]).multiplyScalar(Q.y),U.copy(_[0]).add(w).add(R),Ot(U.x,U.y,U.z)):Ot(Q.x,Q.y,0)}for(let tt=1;tt<=u;tt++)for(let Q=0;Q<rt;Q++){let Z=h?W(S[Q],Ft[Q],oe):S[Q];y?(w.copy(A.normals[tt]).multiplyScalar(Z.x),R.copy(A.binormals[tt]).multiplyScalar(Z.y),U.copy(_[tt]).add(w).add(R),Ot(U.x,U.y,U.z)):Ot(Z.x,Z.y,d/u*tt)}for(let tt=m-1;tt>=0;tt--){let Q=tt/m,Z=p*Math.cos(Q*Math.PI/2),j=g*Math.sin(Q*Math.PI/2)+x;for(let dt=0,st=Y.length;dt<st;dt++){let ht=W(Y[dt],mt[dt],j);Ot(ht.x,ht.y,d+Z)}for(let dt=0,st=D.length;dt<st;dt++){let ht=D[dt];At=xt[dt];for(let Bt=0,Ht=ht.length;Bt<Ht;Bt++){let T=W(ht[Bt],At[Bt],j);y?Ot(T.x,T.y+_[u-1].y,_[u-1].x+Z):Ot(T.x,T.y,d+Z)}}}K(),et();function K(){let tt=s.length/3;if(h){let Q=0,Z=rt*Q;for(let j=0;j<ce;j++){let dt=Zt[j];wt(dt[2]+Z,dt[1]+Z,dt[0]+Z)}Q=u+m*2,Z=rt*Q;for(let j=0;j<ce;j++){let dt=Zt[j];wt(dt[0]+Z,dt[1]+Z,dt[2]+Z)}}else{for(let Q=0;Q<ce;Q++){let Z=Zt[Q];wt(Z[2],Z[1],Z[0])}for(let Q=0;Q<ce;Q++){let Z=Zt[Q];wt(Z[0]+rt*u,Z[1]+rt*u,Z[2]+rt*u)}}i.addGroup(tt,s.length/3-tt,0)}function et(){let tt=s.length/3,Q=0;St(Y,Q),Q+=Y.length;for(let Z=0,j=D.length;Z<j;Z++){let dt=D[Z];St(dt,Q),Q+=dt.length}i.addGroup(tt,s.length/3-tt,1)}function St(tt,Q){let Z=tt.length;for(;--Z>=0;){let j=Z,dt=Z-1;dt<0&&(dt=tt.length-1);for(let st=0,ht=u+m*2;st<ht;st++){let Bt=rt*st,Ht=rt*(st+1),T=Q+j+Bt,M=Q+dt+Bt,P=Q+dt+Ht,X=Q+j+Ht;qt(T,M,P,X)}}}function Ot(tt,Q,Z){l.push(tt),l.push(Q),l.push(Z)}function wt(tt,Q,Z){ge(tt),ge(Q),ge(Z);let j=s.length/3,dt=v.generateTopUV(i,s,j-3,j-2,j-1);C(dt[0]),C(dt[1]),C(dt[2])}function qt(tt,Q,Z,j){ge(tt),ge(Q),ge(j),ge(Q),ge(Z),ge(j);let dt=s.length/3,st=v.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);C(st[0]),C(st[1]),C(st[3]),C(st[1]),C(st[2]),C(st[3])}function ge(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function C(tt){a.push(tt.x),a.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return JR(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new G0[s.type]().fromJSON(s)),new e(i,t.options)}},ZR={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new gt(a,r),new gt(o,l),new gt(c,u)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new gt(r,1-l),new gt(c,1-d),new gt(h,1-g),new gt(x,1-f)]:[new gt(o,1-l),new gt(u,1-d),new gt(p,1-g),new gt(m,1-f)]}};function JR(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var xr=class e extends oi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let v=f*h-r;for(let _=0;_<c;_++){let y=_*d-a;g.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let _=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),R=v+1+c*f;p.push(_,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var nu=class e extends oi{constructor(t=new Ca([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(a,3)),this.setAttribute("uv",new ln(r,2));function c(u){let d=s.length/3,h=u.extractPoints(n),p=h.shape,g=h.holes;os.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let v=g[m];os.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=os.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){let v=p[m];s.push(v.x,v.y,0),a.push(0,0,1),r.push(v.x,v.y)}for(let m=0,f=x.length;m<f;m++){let v=x[m],_=v[0]+d,y=v[1]+d,A=v[2]+d;i.push(_,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return KR(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function KR(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var al=class e extends oi{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],u=new N,d=new N,h=new N;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*a,m=p/i*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(x),d.y=(t+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;r.push(x,m,v),r.push(m,f,v)}this.setIndex(r),this.setAttribute("position",new ln(o,3)),this.setAttribute("normal",new ln(l,3)),this.setAttribute("uv",new ln(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var rl=class extends Ra{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Da=class extends rl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var kf=class extends Ra{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xf=class extends Ra{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Af(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function QR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Sr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qf=class extends Sr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:z0,endingEnd:z0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case B0:a=t,o=2*n-i;break;case F0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case B0:r=t,l=2*i-n;break;case F0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,f=-h*m+2*h*x-h*g,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==o;++A)a[A]=f*r[u+A]+v*r[c+A]+_*r[l+A]+y*r[d+A];return a}},Wf=class extends Sr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*u;return a}},Yf=class extends Sr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Af(n,this.TimeBufferType),this.values=Af(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Af(t.times,Array),values:Af(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Pc:n=this.InterpolantFactoryMethodDiscrete;break;case Uf:n=this.InterpolantFactoryMethodLinear;break;case wf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pc;case this.InterpolantFactoryMethodLinear:return Uf;case this.InterpolantFactoryMethodSmooth:return wf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&QR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[h+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Uf;var Ua=class extends ci{constructor(t,n,i){super(t,n,i)}};Ua.prototype.ValueTypeName="bool";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=Pc;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Zf=class extends ci{constructor(t,n,i,s){super(t,n,i,s)}};Zf.prototype.ValueTypeName="color";var Jf=class extends ci{constructor(t,n,i,s){super(t,n,i,s)}};Jf.prototype.ValueTypeName="number";var Kf=class extends Sr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Xn.slerpFlat(a,0,r,c-o,r,c,l);return a}},iu=class extends ci{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Kf(this.times,this.values,this.getValueSize(),t)}};iu.prototype.ValueTypeName="quaternion";iu.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends ci{constructor(t,n,i){super(t,n,i)}};Na.prototype.ValueTypeName="string";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Pc;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Qf=class extends ci{constructor(t,n,i,s){super(t,n,i,s)}};Qf.prototype.ValueTypeName="vector";var jf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Cb=new jf,$f=class{constructor(t){this.manager=t!==void 0?t:Cb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$f.DEFAULT_MATERIAL_NAME="__DEFAULT";var td=class extends Nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var P0=new Le,U1=new N,N1=new N,W0=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;U1.setFromMatrixPosition(t.matrixWorld),n.position.copy(U1),N1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(N1),n.updateMatrixWorld(),P0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(P0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var su=class extends Xc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Y0=class extends W0{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ol=class extends td{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ed=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var vv="\\[\\]\\.:\\/",jR=new RegExp("["+vv+"]","g"),_v="[^"+vv+"]",$R="[^"+vv.replace("\\.","")+"]",tC=/((?:WC+[\/:])*)/.source.replace("WC",_v),eC=/(WCOD+)?/.source.replace("WCOD",$R),nC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_v),iC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_v),sC=new RegExp("^"+tC+eC+nC+iC+"$"),aC=["material","materials","bones","map"],Z0=class{constructor(t,n,i){let s=i||Ne.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ne=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jR,"")}static parseTrackName(t){let n=sC.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);aC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Z0;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yN=new Float32Array(1);var L1=new Le,au=class{constructor(t,n,i=0,s=1/0){this.ray=new Vc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return L1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(L1),this}intersectObject(t,n=!0,i=[]){return J0(t,this,i,n),i.sort(O1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)J0(t[s],this,i,n);return i.sort(O1),i}};function O1(e,t){return e.distance-t.distance}function J0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)J0(a[r],t,n,!0)}}function yv(e,t,n,i){let s=rC(i);switch(n){case ov:return e*t;case cv:return e*t/s.components*s.byteLength;case gd:return e*t/s.components*s.byteLength;case uv:return e*t*2/s.components*s.byteLength;case vd:return e*t*2/s.components*s.byteLength;case lv:return e*t*3/s.components*s.byteLength;case Ei:return e*t*4/s.components*s.byteLength;case _d:return e*t*4/s.components*s.byteLength;case lu:case cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case uu:case hu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xd:case Md:return Math.max(e,16)*Math.max(t,8)/4;case yd:case Sd:return Math.max(e,8)*Math.max(t,8)/2;case bd:case Ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Od:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Hd:case Vd:case Gd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case kd:case Xd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qd:case Wd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rC(e){switch(e){case Fi:case iv:return{byteLength:1,components:1};case ll:case sv:case cl:return{byteLength:2,components:1};case pd:case md:return{byteLength:2,components:4};case La:case dd:case fs:return{byteLength:4,components:1};case av:case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function $b(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function lC(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var cC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uC=`#ifdef USE_ALPHAHASH
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
#endif`,hC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mC=`#ifdef USE_AOMAP
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
#endif`,gC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vC=`#ifdef USE_BATCHING
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
#endif`,_C=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MC=`#ifdef USE_IRIDESCENCE
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
#endif`,bC=`#ifdef USE_BUMPMAP
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
#endif`,EC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,NC=`#define PI 3.141592653589793
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
} // validated`,LC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OC=`vec3 transformedNormal = objectNormal;
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
#endif`,IC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FC="gl_FragColor = linearToOutputTexel( gl_FragColor );",HC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VC=`#ifdef USE_ENVMAP
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
#endif`,GC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kC=`#ifdef USE_ENVMAP
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
#endif`,XC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qC=`#ifdef USE_ENVMAP
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
#endif`,WC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KC=`#ifdef USE_GRADIENTMAP
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
}`,QC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$C=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t2=`uniform bool receiveShadow;
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
#endif`,e2=`#ifdef USE_ENVMAP
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
#endif`,n2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
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
#endif`,o2=`struct PhysicalMaterial {
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
}`,l2=`
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
#endif`,c2=`#if defined( RE_IndirectDiffuse )
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
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_2=`#if defined( USE_POINTS_UV )
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
#endif`,y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
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
#endif`,T2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U2=`#ifdef USE_NORMALMAP
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
#endif`,N2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y2=`float getShadowMask() {
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
}`,Z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J2=`#ifdef USE_SKINNING
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
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q2=`#ifdef USE_SKINNING
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
#endif`,j2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n3=`#ifdef USE_TRANSMISSION
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
#endif`,i3=`#ifdef USE_TRANSMISSION
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
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c3=`uniform sampler2D t2D;
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
}`,u3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p3=`#include <common>
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
}`,m3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g3=`#define DISTANCE
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
}`,v3=`#define DISTANCE
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
}`,_3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x3=`uniform float scale;
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
}`,S3=`uniform vec3 diffuse;
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
}`,M3=`#include <common>
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
}`,b3=`uniform vec3 diffuse;
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
}`,E3=`#define LAMBERT
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
}`,T3=`#define LAMBERT
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
}`,A3=`#define MATCAP
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
}`,w3=`#define MATCAP
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
}`,R3=`#define NORMAL
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
}`,C3=`#define NORMAL
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
}`,D3=`#define PHONG
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
}`,U3=`#define PHONG
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
}`,N3=`#define STANDARD
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
}`,L3=`#define STANDARD
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
}`,O3=`#define TOON
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
}`,I3=`#define TOON
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
}`,P3=`uniform float size;
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
}`,z3=`uniform vec3 diffuse;
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
}`,B3=`#include <common>
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
}`,F3=`uniform vec3 color;
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
}`,H3=`uniform float rotation;
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
}`,V3=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:cC,alphahash_pars_fragment:uC,alphamap_fragment:hC,alphamap_pars_fragment:fC,alphatest_fragment:dC,alphatest_pars_fragment:pC,aomap_fragment:mC,aomap_pars_fragment:gC,batching_pars_vertex:vC,batching_vertex:_C,begin_vertex:yC,beginnormal_vertex:xC,bsdfs:SC,iridescence_fragment:MC,bumpmap_pars_fragment:bC,clipping_planes_fragment:EC,clipping_planes_pars_fragment:TC,clipping_planes_pars_vertex:AC,clipping_planes_vertex:wC,color_fragment:RC,color_pars_fragment:CC,color_pars_vertex:DC,color_vertex:UC,common:NC,cube_uv_reflection_fragment:LC,defaultnormal_vertex:OC,displacementmap_pars_vertex:IC,displacementmap_vertex:PC,emissivemap_fragment:zC,emissivemap_pars_fragment:BC,colorspace_fragment:FC,colorspace_pars_fragment:HC,envmap_fragment:VC,envmap_common_pars_fragment:GC,envmap_pars_fragment:kC,envmap_pars_vertex:XC,envmap_physical_pars_fragment:e2,envmap_vertex:qC,fog_vertex:WC,fog_pars_vertex:YC,fog_fragment:ZC,fog_pars_fragment:JC,gradientmap_pars_fragment:KC,lightmap_pars_fragment:QC,lights_lambert_fragment:jC,lights_lambert_pars_fragment:$C,lights_pars_begin:t2,lights_toon_fragment:n2,lights_toon_pars_fragment:i2,lights_phong_fragment:s2,lights_phong_pars_fragment:a2,lights_physical_fragment:r2,lights_physical_pars_fragment:o2,lights_fragment_begin:l2,lights_fragment_maps:c2,lights_fragment_end:u2,logdepthbuf_fragment:h2,logdepthbuf_pars_fragment:f2,logdepthbuf_pars_vertex:d2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:v2,map_particle_pars_fragment:_2,metalnessmap_fragment:y2,metalnessmap_pars_fragment:x2,morphinstance_vertex:S2,morphcolor_vertex:M2,morphnormal_vertex:b2,morphtarget_pars_vertex:E2,morphtarget_vertex:T2,normal_fragment_begin:A2,normal_fragment_maps:w2,normal_pars_fragment:R2,normal_pars_vertex:C2,normal_vertex:D2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:N2,clearcoat_normal_fragment_maps:L2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:I2,opaque_fragment:P2,packing:z2,premultiplied_alpha_fragment:B2,project_vertex:F2,dithering_fragment:H2,dithering_pars_fragment:V2,roughnessmap_fragment:G2,roughnessmap_pars_fragment:k2,shadowmap_pars_fragment:X2,shadowmap_pars_vertex:q2,shadowmap_vertex:W2,shadowmask_pars_fragment:Y2,skinbase_vertex:Z2,skinning_pars_vertex:J2,skinning_vertex:K2,skinnormal_vertex:Q2,specularmap_fragment:j2,specularmap_pars_fragment:$2,tonemapping_fragment:t3,tonemapping_pars_fragment:e3,transmission_fragment:n3,transmission_pars_fragment:i3,uv_pars_fragment:s3,uv_pars_vertex:a3,uv_vertex:r3,worldpos_vertex:o3,background_vert:l3,background_frag:c3,backgroundCube_vert:u3,backgroundCube_frag:h3,cube_vert:f3,cube_frag:d3,depth_vert:p3,depth_frag:m3,distanceRGBA_vert:g3,distanceRGBA_frag:v3,equirect_vert:_3,equirect_frag:y3,linedashed_vert:x3,linedashed_frag:S3,meshbasic_vert:M3,meshbasic_frag:b3,meshlambert_vert:E3,meshlambert_frag:T3,meshmatcap_vert:A3,meshmatcap_frag:w3,meshnormal_vert:R3,meshnormal_frag:C3,meshphong_vert:D3,meshphong_frag:U3,meshphysical_vert:N3,meshphysical_frag:L3,meshtoon_vert:O3,meshtoon_frag:I3,points_vert:P3,points_frag:z3,shadow_vert:B3,shadow_frag:F3,sprite_vert:H3,sprite_frag:V3},yt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},ds={basic:{uniforms:En([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:En([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:En([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:En([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:En([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:En([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:En([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:En([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:En([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:En([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:En([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:En([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:En([yt.lights,yt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ds.physical={uniforms:En([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Yd={r:0,b:0,g:0},Tr=new zi,G3=new Le;function k3(e,t,n,i,s,a,r){let o=new Jt(0),l=a===!0?0:1,c,u,d=null,h=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:t).get(y)),y}function x(_){let y=!1,A=g(_);A===null?f(o,l):A&&A.isColor&&(f(A,1),y=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===ru)?(u===void 0&&(u=new Xe(new Qo(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Er(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Tr.copy(y.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G3.makeRotationFromEuler(Tr)),u.material.toneMapped=he.getTransfer(A.colorSpace)!==Se,(d!==A||h!==A.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Xe(new xr(2,2),new Bi({name:"BackgroundMaterial",uniforms:Er(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(Yd,mv(e)),i.buffers.color.setClear(Yd.r,Yd.g,Yd.b,y,r)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:x,addToRenderList:m,dispose:v}}function X3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(S,D,F,q,V){let Y=!1,W=d(q,F,D);a!==W&&(a=W,c(a.object)),Y=p(S,q,F,V),Y&&g(S,q,F,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(S,D,F,q),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function u(S){return e.deleteVertexArray(S)}function d(S,D,F){let q=F.wireframe===!0,V=i[S.id];V===void 0&&(V={},i[S.id]=V);let Y=V[D.id];Y===void 0&&(Y={},V[D.id]=Y);let W=Y[q];return W===void 0&&(W=h(l()),Y[q]=W),W}function h(S){let D=[],F=[],q=[];for(let V=0;V<n;V++)D[V]=0,F[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:q,object:S,attributes:{},index:null}}function p(S,D,F,q){let V=a.attributes,Y=D.attributes,W=0,rt=F.getAttributes();for(let G in rt)if(rt[G].location>=0){let xt=V[G],At=Y[G];if(At===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),xt===void 0||xt.attribute!==At||At&&xt.data!==At.data)return!0;W++}return a.attributesNum!==W||a.index!==q}function g(S,D,F,q){let V={},Y=D.attributes,W=0,rt=F.getAttributes();for(let G in rt)if(rt[G].location>=0){let xt=Y[G];xt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor));let At={};At.attribute=xt,xt&&xt.data&&(At.data=xt.data),V[G]=At,W++}a.attributes=V,a.attributesNum=W,a.index=q}function x(){let S=a.newAttributes;for(let D=0,F=S.length;D<F;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){let F=a.newAttributes,q=a.enabledAttributes,V=a.attributeDivisors;F[S]=1,q[S]===0&&(e.enableVertexAttribArray(S),q[S]=1),V[S]!==D&&(e.vertexAttribDivisor(S,D),V[S]=D)}function v(){let S=a.newAttributes,D=a.enabledAttributes;for(let F=0,q=D.length;F<q;F++)D[F]!==S[F]&&(e.disableVertexAttribArray(F),D[F]=0)}function _(S,D,F,q,V,Y,W){W===!0?e.vertexAttribIPointer(S,D,F,V,Y):e.vertexAttribPointer(S,D,F,q,V,Y)}function y(S,D,F,q){x();let V=q.attributes,Y=F.getAttributes(),W=D.defaultAttributeValues;for(let rt in Y){let G=Y[rt];if(G.location>=0){let mt=V[rt];if(mt===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),mt!==void 0){let xt=mt.normalized,At=mt.itemSize,Ft=t.get(mt);if(Ft===void 0)continue;let Zt=Ft.buffer,ce=Ft.type,oe=Ft.bytesPerElement,K=ce===e.INT||ce===e.UNSIGNED_INT||mt.gpuType===dd;if(mt.isInterleavedBufferAttribute){let et=mt.data,St=et.stride,Ot=mt.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<G.locationSize;wt++)f(G.location+wt,et.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<G.locationSize;wt++)m(G.location+wt);e.bindBuffer(e.ARRAY_BUFFER,Zt);for(let wt=0;wt<G.locationSize;wt++)_(G.location+wt,At/G.locationSize,ce,xt,St*oe,(Ot+At/G.locationSize*wt)*oe,K)}else{if(mt.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)f(G.location+et,mt.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);e.bindBuffer(e.ARRAY_BUFFER,Zt);for(let et=0;et<G.locationSize;et++)_(G.location+et,At/G.locationSize,ce,xt,At*oe,At/G.locationSize*et*oe,K)}}else if(W!==void 0){let xt=W[rt];if(xt!==void 0)switch(xt.length){case 2:e.vertexAttrib2fv(G.location,xt);break;case 3:e.vertexAttrib3fv(G.location,xt);break;case 4:e.vertexAttrib4fv(G.location,xt);break;default:e.vertexAttrib1fv(G.location,xt)}}}}v()}function A(){U();for(let S in i){let D=i[S];for(let F in D){let q=D[F];for(let V in q)u(q[V].object),delete q[V];delete D[F]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let D=i[S.id];for(let F in D){let q=D[F];for(let V in q)u(q[V].object),delete q[V];delete D[F]}delete i[S.id]}function w(S){for(let D in i){let F=i[D];if(F[S.id]===void 0)continue;let q=F[S.id];for(let V in q)u(q[V].object),delete q[V];delete F[S.id]}}function U(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function q3(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,d){d!==0&&(e.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function W3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Ei&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let U=w===cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Fi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fs&&!U)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function Y3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ss,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{let v=a?0:i,_=v*4,y=f.clippingState||null;l.value=y,y=u(g,h,_,p);for(let A=0;A!==_;++A)y[A]=n[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)r.copy(d[_]).applyMatrix4(v,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Z3(e){let t=new WeakMap;function n(r,o){return o===ud?r.mapping=Mr:o===hd&&(r.mapping=br),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===ud||o===hd)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new zf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var pl=4,Db=[.125,.215,.35,.446,.526,.582],Rr=20,xv=new su,Ub=new Jt,Sv=null,Mv=0,bv=0,Ev=!1,wr=(1+Math.sqrt(5))/2,dl=1/wr,Nb=[new N(-wr,dl,0),new N(wr,dl,0),new N(-dl,0,wr),new N(dl,0,wr),new N(0,wr,-dl),new N(0,wr,dl),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],J3=new N,gl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=J3}=a;Sv=this._renderer.getRenderTarget(),Mv=this._renderer.getActiveCubeFace(),bv=this._renderer.getActiveMipmapLevel(),Ev=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ib(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ob(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sv,Mv,bv),this._renderer.xr.enabled=Ev,t.scissorTest=!1,Zd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Mr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sv=this._renderer.getRenderTarget(),Mv=this._renderer.getActiveCubeFace(),bv=this._renderer.getActiveMipmapLevel(),Ev=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:cl,format:Ei,colorSpace:mr,depthBuffer:!1},s=Lb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K3(a)),this._blurMaterial=Q3(a,t,n)}return s}_compileMaterial(t){let n=new Xe(this._lodPlanes[0],t);this._renderer.compile(n,xv)}_sceneToCubeUV(t,n,i,s,a){let l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Ub),d.toneMapping=Fs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new gr({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),m=new Xe(new Qo,x),f=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,f=!0):(x.color.copy(Ub),f=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[_],a.y,a.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[_]));let A=this._cubeSize;Zd(s,y*A,_>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Mr||t.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ib()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ob());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Xe(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Zd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,xv)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Nb[(s-a-1)%Nb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Xe(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),x=a/g,m=isFinite(a)?1+Math.floor(u*x):Rr;m>Rr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);let f=[],v=0;for(let w=0;w<Rr;++w){let U=w/x,E=Math.exp(-U*U/2);f.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;let y=this._sizeLods[s],A=3*y*(s>_-pl?s-_+pl:0),R=4*(this._cubeSize-y);Zd(n,A,R,3*y,2*y),l.setRenderTarget(n),l.render(d,xv)}};function K3(e){let t=[],n=[],i=[],s=e,a=e-pl+1+Db.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-pl?l=Db[r-e+pl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,U=R>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(E,x*g*R),_.set(h,m*g*R);let S=[R,R,R,R,R,R];y.set(S,f*g*R)}let A=new oi;A.setAttribute("position",new vn(v,x)),A.setAttribute("uv",new vn(_,m)),A.setAttribute("faceIndex",new vn(y,f)),t.push(A),s>pl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Lb(e,t,n){let i=new cs(e,t,n);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Q3(e,t,n){let i=new Float32Array(Rr),s=new N(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ov(),fragmentShader:`

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
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function Ob(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ov(),fragmentShader:`

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
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function Ib(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ov(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function Ov(){return`

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
	`}function j3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ud||l===hd,u=l===Mr||l===br;if(c||u){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new gl(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new gl(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function $3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Yo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tD(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){let A=v[_+0],R=v[_+1],w=v[_+2];h.push(A,R,R,w,w,A)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let A=_+0,R=_+1,w=_+2;h.push(A,R,R,w,w,A)}}else return;let m=new(pv(h)?kc:Gc)(h,1);m.version=x;let f=a.get(d);f&&t.remove(f),a.set(d,m)}function u(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function eD(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,h*r,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,x,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*x[v];n.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function nD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function iD(e,t,n){let i=new WeakMap,s=new Be;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*A*4*d),w=new Hc(R,y,A,d);w.type=fs,w.needsUpdate=!0;let U=_*4;for(let S=0;S<d;S++){let D=m[S],F=f[S],q=v[S],V=y*A*4*S;for(let Y=0;Y<D.count;Y++){let W=Y*U;p===!0&&(s.fromBufferAttribute(D,Y),R[V+W+0]=s.x,R[V+W+1]=s.y,R[V+W+2]=s.z,R[V+W+3]=0),g===!0&&(s.fromBufferAttribute(F,Y),R[V+W+4]=s.x,R[V+W+5]=s.y,R[V+W+6]=s.z,R[V+W+7]=0),x===!0&&(s.fromBufferAttribute(q,Y),R[V+W+8]=s.x,R[V+W+9]=s.y,R[V+W+10]=s.z,R[V+W+11]=q.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new gt(y,A)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function sD(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var tE=new Un,Pb=new Yc(1,1),eE=new Hc,nE=new If,iE=new qc,zb=[],Bb=[],Fb=new Float32Array(16),Hb=new Float32Array(9),Vb=new Float32Array(4);function vl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=zb[s];if(a===void 0&&(a=new Float32Array(s),zb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function $e(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function tn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Qd(e,t){let n=Bb[t];n===void 0&&(n=new Int32Array(t),Bb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function aD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function rD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2fv(this.addr,t),tn(n,t)}}function oD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($e(n,t))return;e.uniform3fv(this.addr,t),tn(n,t)}}function lD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4fv(this.addr,t),tn(n,t)}}function cD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;Vb.set(i),e.uniformMatrix2fv(this.addr,!1,Vb),tn(n,i)}}function uD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;Hb.set(i),e.uniformMatrix3fv(this.addr,!1,Hb),tn(n,i)}}function hD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;Fb.set(i),e.uniformMatrix4fv(this.addr,!1,Fb),tn(n,i)}}function fD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function dD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2iv(this.addr,t),tn(n,t)}}function pD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3iv(this.addr,t),tn(n,t)}}function mD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4iv(this.addr,t),tn(n,t)}}function gD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function vD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2uiv(this.addr,t),tn(n,t)}}function _D(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3uiv(this.addr,t),tn(n,t)}}function yD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4uiv(this.addr,t),tn(n,t)}}function xD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Pb.compareFunction=fv,a=Pb):a=tE,n.setTexture2D(t||a,s)}function SD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||nE,s)}function MD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||iE,s)}function bD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||eE,s)}function ED(e){switch(e){case 5126:return aD;case 35664:return rD;case 35665:return oD;case 35666:return lD;case 35674:return cD;case 35675:return uD;case 35676:return hD;case 5124:case 35670:return fD;case 35667:case 35671:return dD;case 35668:case 35672:return pD;case 35669:case 35673:return mD;case 5125:return gD;case 36294:return vD;case 36295:return _D;case 36296:return yD;case 35678:case 36198:case 36298:case 36306:case 35682:return xD;case 35679:case 36299:case 36307:return SD;case 35680:case 36300:case 36308:case 36293:return MD;case 36289:case 36303:case 36311:case 36292:return bD}}function TD(e,t){e.uniform1fv(this.addr,t)}function AD(e,t){let n=vl(t,this.size,2);e.uniform2fv(this.addr,n)}function wD(e,t){let n=vl(t,this.size,3);e.uniform3fv(this.addr,n)}function RD(e,t){let n=vl(t,this.size,4);e.uniform4fv(this.addr,n)}function CD(e,t){let n=vl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function DD(e,t){let n=vl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function UD(e,t){let n=vl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ND(e,t){e.uniform1iv(this.addr,t)}function LD(e,t){e.uniform2iv(this.addr,t)}function OD(e,t){e.uniform3iv(this.addr,t)}function ID(e,t){e.uniform4iv(this.addr,t)}function PD(e,t){e.uniform1uiv(this.addr,t)}function zD(e,t){e.uniform2uiv(this.addr,t)}function BD(e,t){e.uniform3uiv(this.addr,t)}function FD(e,t){e.uniform4uiv(this.addr,t)}function HD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);$e(i,a)||(e.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||tE,a[r])}function VD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);$e(i,a)||(e.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||nE,a[r])}function GD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);$e(i,a)||(e.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||iE,a[r])}function kD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);$e(i,a)||(e.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||eE,a[r])}function XD(e){switch(e){case 5126:return TD;case 35664:return AD;case 35665:return wD;case 35666:return RD;case 35674:return CD;case 35675:return DD;case 35676:return UD;case 5124:case 35670:return ND;case 35667:case 35671:return LD;case 35668:case 35672:return OD;case 35669:case 35673:return ID;case 5125:return PD;case 36294:return zD;case 36295:return BD;case 36296:return FD;case 35678:case 36198:case 36298:case 36306:case 35682:return HD;case 35679:case 36299:case 36307:return VD;case 35680:case 36300:case 36308:case 36293:return GD;case 36289:case 36303:case 36311:case 36292:return kD}}var Av=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ED(n.type)}},wv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XD(n.type)}},Rv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Tv=/(\w+)(\])?(\[|\.)?/g;function Gb(e,t){e.seq.push(t),e.map[t.id]=t}function qD(e,t,n){let i=e.name,s=i.length;for(Tv.lastIndex=0;;){let a=Tv.exec(i),r=Tv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Gb(n,c===void 0?new Av(o,e,t):new wv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Rv(o),Gb(n,d)),n=d}}}var ml=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);qD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function kb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var WD=37297,YD=0;function ZD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Xb=new Yt;function JD(e){he._getMatrix(Xb,he.workingColorSpace,e);let t=`mat3( ${Xb.elements.map(n=>n.toFixed(4))} )`;switch(he.getTransfer(e)){case zc:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function qb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+ZD(e.getShaderSource(t),o)}else return a}function KD(e,t){let n=JD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function QD(e,t){let n;switch(t){case sb:n="Linear";break;case ab:n="Reinhard";break;case rb:n="Cineon";break;case ob:n="ACESFilmic";break;case cb:n="AgX";break;case cd:n="Neutral";break;case lb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Jd=new N;function jD(){he.getLuminanceCoefficients(Jd);let e=Jd.x.toFixed(4),t=Jd.y.toFixed(4),n=Jd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $D(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fu).join(`
`)}function tU(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function eU(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function fu(e){return e!==""}function Wb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cv(e){return e.replace(nU,sU)}var iU=new Map;function sU(e,t){let n=jt[t];if(n===void 0){let i=iU.get(t);if(i!==void 0)n=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cv(n)}var aU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zb(e){return e.replace(aU,rU)}function rU(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Jb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function oU(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Q0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===z1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===us&&(t="SHADOWMAP_TYPE_VSM"),t}function lU(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Mr:case br:t="ENVMAP_TYPE_CUBE";break;case ru:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cU(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===br&&(t="ENVMAP_MODE_REFRACTION"),t}function uU(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ev:t="ENVMAP_BLENDING_MULTIPLY";break;case nb:t="ENVMAP_BLENDING_MIX";break;case ib:t="ENVMAP_BLENDING_ADD";break}return t}function hU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function fU(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=oU(n),c=lU(n),u=cU(n),d=uU(n),h=hU(n),p=$D(n),g=tU(a),x=s.createProgram(),m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fu).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fu).join(`
`),f.length>0&&(f+=`
`)):(m=[Jb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fu).join(`
`),f=[Jb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fs?"#define TONE_MAPPING":"",n.toneMapping!==Fs?jt.tonemapping_pars_fragment:"",n.toneMapping!==Fs?QD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,KD("linearToOutputTexel",n.outputColorSpace),jD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fu).join(`
`)),r=Cv(r),r=Wb(r,n),r=Yb(r,n),o=Cv(o),o=Wb(o,n),o=Yb(o,n),r=Zb(r),o=Zb(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+r,y=v+f+o,A=kb(s,s.VERTEX_SHADER,_),R=kb(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(D){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(R)||"",Y=F.trim(),W=q.trim(),rt=V.trim(),G=!0,mt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,R);else{let xt=qb(s,A,"vertex"),At=qb(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+xt+`
`+At)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(W===""||rt==="")&&(mt=!1);mt&&(D.diagnostics={runnable:G,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:rt,prefix:f}})}s.deleteShader(A),s.deleteShader(R),U=new ml(s,x),E=eU(s,x)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,WD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var dU=0,Dv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Uv(t),n.set(t,i)),i}},Uv=class{constructor(t){this.id=dU++,this.code=t,this.usedTimes=0}};function pU(e,t,n,i,s,a,r){let o=new Ko,l=new Dv,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,F,q){let V=F.fog,Y=q.geometry,W=E.isMeshStandardMaterial?F.environment:null,rt=(E.isMeshStandardMaterial?n:t).get(E.envMap||W),G=rt&&rt.mapping===ru?rt.image.height:null,mt=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,At=xt!==void 0?xt.length:0,Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let Zt,ce,oe,K;if(mt){let ue=ds[mt];Zt=ue.vertexShader,ce=ue.fragmentShader}else Zt=E.vertexShader,ce=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);let et=e.getRenderTarget(),St=e.state.buffers.depth.getReversed(),Ot=q.isInstancedMesh===!0,wt=q.isBatchedMesh===!0,qt=!!E.map,ge=!!E.matcap,C=!!rt,tt=!!E.aoMap,Q=!!E.lightMap,Z=!!E.bumpMap,j=!!E.normalMap,dt=!!E.displacementMap,st=!!E.emissiveMap,ht=!!E.metalnessMap,Bt=!!E.roughnessMap,Ht=E.anisotropy>0,T=E.clearcoat>0,M=E.dispersion>0,P=E.iridescence>0,X=E.sheen>0,nt=E.transmission>0,z=Ht&&!!E.anisotropyMap,Rt=T&&!!E.clearcoatMap,ut=T&&!!E.clearcoatNormalMap,Ct=T&&!!E.clearcoatRoughnessMap,Dt=P&&!!E.iridescenceMap,it=P&&!!E.iridescenceThicknessMap,ft=X&&!!E.sheenColorMap,It=X&&!!E.sheenRoughnessMap,Ut=!!E.specularMap,vt=!!E.specularColorMap,Gt=!!E.specularIntensityMap,L=nt&&!!E.transmissionMap,ct=nt&&!!E.thicknessMap,pt=!!E.gradientMap,Et=!!E.alphaMap,ot=E.alphaTest>0,$=!!E.alphaHash,bt=!!E.extensions,kt=Fs;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(kt=e.toneMapping);let ve={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:ce,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:wt,batchingColor:wt&&q._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&q.instanceColor!==null,instancingMorph:Ot&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:mr,alphaToCoverage:!!E.alphaToCoverage,map:qt,matcap:ge,envMap:C,envMapMode:C&&rt.mapping,envMapCubeUVHeight:G,aoMap:tt,lightMap:Q,bumpMap:Z,normalMap:j,displacementMap:h&&dt,emissiveMap:st,normalMapObjectSpace:j&&E.normalMapType===db,normalMapTangentSpace:j&&E.normalMapType===hv,metalnessMap:ht,roughnessMap:Bt,anisotropy:Ht,anisotropyMap:z,clearcoat:T,clearcoatMap:Rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ct,dispersion:M,iridescence:P,iridescenceMap:Dt,iridescenceThicknessMap:it,sheen:X,sheenColorMap:ft,sheenRoughnessMap:It,specularMap:Ut,specularColorMap:vt,specularIntensityMap:Gt,transmission:nt,transmissionMap:L,thicknessMap:ct,gradientMap:pt,opaque:E.transparent===!1&&E.blending===dr&&E.alphaToCoverage===!1,alphaMap:Et,alphaTest:ot,alphaHash:$,combine:E.combine,mapUv:qt&&x(E.map.channel),aoMapUv:tt&&x(E.aoMap.channel),lightMapUv:Q&&x(E.lightMap.channel),bumpMapUv:Z&&x(E.bumpMap.channel),normalMapUv:j&&x(E.normalMap.channel),displacementMapUv:dt&&x(E.displacementMap.channel),emissiveMapUv:st&&x(E.emissiveMap.channel),metalnessMapUv:ht&&x(E.metalnessMap.channel),roughnessMapUv:Bt&&x(E.roughnessMap.channel),anisotropyMapUv:z&&x(E.anisotropyMap.channel),clearcoatMapUv:Rt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(E.sheenRoughnessMap.channel),specularMapUv:Ut&&x(E.specularMap.channel),specularColorMapUv:vt&&x(E.specularColorMap.channel),specularIntensityMapUv:Gt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:ct&&x(E.thicknessMap.channel),alphaMapUv:Et&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(j||Ht),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(qt||Et),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:kt,decodeVideoTexture:qt&&E.map.isVideoTexture===!0&&he.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&he.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===Ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:bt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&E.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function f(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(S,E),_(S,E),S.push(e.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let S=g[E.type],D;if(S){let F=ds[S];D=Eb.clone(F.uniforms)}else D=E.uniforms;return D}function A(E,S){let D;for(let F=0,q=u.length;F<q;F++){let V=u[F];if(V.cacheKey===S){D=V,++D.usedTimes;break}}return D===void 0&&(D=new fU(e,S,E,a),u.push(D)),D}function R(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:U}}function mU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function gU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Kb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Qb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,g,x,m){let f=e[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function o(d,h,p,g,x,m){let f=r(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function l(d,h,p,g,x,m){let f=r(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||gU),i.length>1&&i.sort(h||Kb),s.length>1&&s.sort(h||Kb)}function u(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function vU(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Qb,e.set(i,[r])):s>=a.length?(r=new Qb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function _U(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Jt};break;case"SpotLight":n={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function yU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var xU=0;function SU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function MU(e){let t=new _U,n=yU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,a=new Le,r=new Le;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,_=0,y=0,A=0,R=0,w=0;c.sort(SU);for(let E=0,S=c.length;E<S;E++){let D=c[E],F=D.color,q=D.intensity,V=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*q,d+=F.g*q,h+=F.b*q;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],q);w++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let rt=D.shadow,G=n.get(D);G.shadowIntensity=rt.intensity,G.shadowBias=rt.bias,G.shadowNormalBias=rt.normalBias,G.shadowRadius=rt.radius,G.shadowMapSize=rt.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=W,p++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(q),W.distance=V,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[x]=W;let rt=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,rt.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[x]=rt.matrix,D.castShadow){let G=n.get(D);G.shadowIntensity=rt.intensity,G.shadowBias=rt.bias,G.shadowNormalBias=rt.normalBias,G.shadowRadius=rt.radius,G.shadowMapSize=rt.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=Y,y++}x++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(F).multiplyScalar(q),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let rt=D.shadow,G=n.get(D);G.shadowIntensity=rt.intensity,G.shadowBias=rt.bias,G.shadowNormalBias=rt.normalBias,G.shadowRadius=rt.radius,G.shadowMapSize=rt.mapSize,G.shadowCameraNear=rt.camera.near,G.shadowCameraFar=rt.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=W,g++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(q),W.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[f]=W,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==v||U.numPointShadows!==_||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=v,U.numPointShadows=_,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=w,i.version=xU++)}function l(c,u){let d=0,h=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let _=c[f];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(_.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function jb(e){let t=new MU(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function bU(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new jb(e),t.set(s,[o])):a>=r.length?(o=new jb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var EU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TU=`uniform sampler2D shadow_pass;
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
}`;function AU(e,t,n){let i=new tl,s=new gt,a=new gt,r=new Be,o=new kf({depthPacking:fb}),l=new Xf,c={},u=n.maxTextureSize,d={[Ps]:Ln,[Ln]:Ps,[ui]:ui},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:EU,fragmentShader:TU}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new oi;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let f=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=e.getRenderTarget(),S=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Bs),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=f!==us&&this.type===us,V=f===us&&this.type!==us;for(let Y=0,W=R.length;Y<W;Y++){let rt=R[Y],G=rt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let mt=G.getFrameExtents();if(s.multiply(mt),a.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/mt.x),s.x=a.x*mt.x,G.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/mt.y),s.y=a.y*mt.y,G.mapSize.y=a.y)),G.map===null||q===!0||V===!0){let At=this.type!==us?{minFilter:kn,magFilter:kn}:{};G.map!==null&&G.map.dispose(),G.map=new cs(s.x,s.y,At),G.map.texture.name=rt.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let xt=G.getViewportCount();for(let At=0;At<xt;At++){let Ft=G.getViewport(At);r.set(a.x*Ft.x,a.y*Ft.y,a.x*Ft.z,a.y*Ft.w),F.viewport(r),G.updateMatrices(rt,At),i=G.getFrustum(),y(w,U,G.camera,rt,this.type)}G.isPointLightShadow!==!0&&this.type===us&&v(G,U),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(E,S,D)};function v(R,w){let U=t.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new cs(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,U,h,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,U,p,x,null)}function _(R,w,U,E){let S=null,D=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=S.uuid,q=w.uuid,V=c[F];V===void 0&&(V={},c[F]=V);let Y=V[q];Y===void 0&&(Y=S.clone(),V[q]=Y,w.addEventListener("dispose",A)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,E===us?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=e.properties.get(S);F.light=U}return S}function y(R,w,U,E,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===us)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let q=t.update(R),V=R.material;if(Array.isArray(V)){let Y=q.groups;for(let W=0,rt=Y.length;W<rt;W++){let G=Y[W],mt=V[G.materialIndex];if(mt&&mt.visible){let xt=_(R,mt,E,S);R.onBeforeShadow(e,R,w,U,q,xt,G),e.renderBufferDirect(U,null,q,xt,R,G),R.onAfterShadow(e,R,w,U,q,xt,G)}}}else if(V.visible){let Y=_(R,V,E,S);R.onBeforeShadow(e,R,w,U,q,Y,null),e.renderBufferDirect(U,null,q,Y,R,null),R.onAfterShadow(e,R,w,U,q,Y,null)}}let F=R.children;for(let q=0,V=F.length;q<V;q++)y(F[q],w,U,E,S)}function A(R){R.target.removeEventListener("dispose",A);for(let U in c){let E=c[U],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var wU={[nd]:id,[sd]:od,[ad]:ld,[pr]:rd,[id]:nd,[od]:sd,[ld]:ad,[rd]:pr};function RU(e,t){function n(){let L=!1,ct=new Be,pt=null,Et=new Be(0,0,0,0);return{setMask:function(ot){pt!==ot&&!L&&(e.colorMask(ot,ot,ot,ot),pt=ot)},setLocked:function(ot){L=ot},setClear:function(ot,$,bt,kt,ve){ve===!0&&(ot*=kt,$*=kt,bt*=kt),ct.set(ot,$,bt,kt),Et.equals(ct)===!1&&(e.clearColor(ot,$,bt,kt),Et.copy(ct))},reset:function(){L=!1,pt=null,Et.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,pt=null,Et=null,ot=null;return{setReversed:function($){if(ct!==$){let bt=t.get("EXT_clip_control");$?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ct=$;let kt=ot;ot=null,this.setClear(kt)}},getReversed:function(){return ct},setTest:function($){$?et(e.DEPTH_TEST):St(e.DEPTH_TEST)},setMask:function($){pt!==$&&!L&&(e.depthMask($),pt=$)},setFunc:function($){if(ct&&($=wU[$]),Et!==$){switch($){case nd:e.depthFunc(e.NEVER);break;case id:e.depthFunc(e.ALWAYS);break;case sd:e.depthFunc(e.LESS);break;case pr:e.depthFunc(e.LEQUAL);break;case ad:e.depthFunc(e.EQUAL);break;case rd:e.depthFunc(e.GEQUAL);break;case od:e.depthFunc(e.GREATER);break;case ld:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Et=$}},setLocked:function($){L=$},setClear:function($){ot!==$&&(ct&&($=1-$),e.clearDepth($),ot=$)},reset:function(){L=!1,pt=null,Et=null,ot=null,ct=!1}}}function s(){let L=!1,ct=null,pt=null,Et=null,ot=null,$=null,bt=null,kt=null,ve=null;return{setTest:function(ue){L||(ue?et(e.STENCIL_TEST):St(e.STENCIL_TEST))},setMask:function(ue){ct!==ue&&!L&&(e.stencilMask(ue),ct=ue)},setFunc:function(ue,hi,fi){(pt!==ue||Et!==hi||ot!==fi)&&(e.stencilFunc(ue,hi,fi),pt=ue,Et=hi,ot=fi)},setOp:function(ue,hi,fi){($!==ue||bt!==hi||kt!==fi)&&(e.stencilOp(ue,hi,fi),$=ue,bt=hi,kt=fi)},setLocked:function(ue){L=ue},setClear:function(ue){ve!==ue&&(e.clearStencil(ue),ve=ue)},reset:function(){L=!1,ct=null,pt=null,Et=null,ot=null,$=null,bt=null,kt=null,ve=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,R=null,w=new Jt(0,0,0),U=0,E=!1,S=null,D=null,F=null,q=null,V=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,rt=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=rt>=1):G.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=rt>=2);let mt=null,xt={},At=e.getParameter(e.SCISSOR_BOX),Ft=e.getParameter(e.VIEWPORT),Zt=new Be().fromArray(At),ce=new Be().fromArray(Ft);function oe(L,ct,pt,Et){let ot=new Uint8Array(4),$=e.createTexture();e.bindTexture(L,$),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<pt;bt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,Et,0,e.RGBA,e.UNSIGNED_BYTE,ot):e.texImage2D(ct+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ot);return $}let K={};K[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),K[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(pr),Z(!1),j(K0),et(e.CULL_FACE),tt(Bs);function et(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function St(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function Ot(L,ct){return d[L]!==ct?(e.bindFramebuffer(L,ct),d[L]=ct,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ct),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function wt(L,ct){let pt=p,Et=!1;if(L){pt=h.get(ct),pt===void 0&&(pt=[],h.set(ct,pt));let ot=L.textures;if(pt.length!==ot.length||pt[0]!==e.COLOR_ATTACHMENT0){for(let $=0,bt=ot.length;$<bt;$++)pt[$]=e.COLOR_ATTACHMENT0+$;pt.length=ot.length,Et=!0}}else pt[0]!==e.BACK&&(pt[0]=e.BACK,Et=!0);Et&&e.drawBuffers(pt)}function qt(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let ge={[Aa]:e.FUNC_ADD,[F1]:e.FUNC_SUBTRACT,[H1]:e.FUNC_REVERSE_SUBTRACT};ge[V1]=e.MIN,ge[G1]=e.MAX;let C={[k1]:e.ZERO,[X1]:e.ONE,[q1]:e.SRC_COLOR,[Rf]:e.SRC_ALPHA,[Q1]:e.SRC_ALPHA_SATURATE,[J1]:e.DST_COLOR,[Y1]:e.DST_ALPHA,[W1]:e.ONE_MINUS_SRC_COLOR,[Cf]:e.ONE_MINUS_SRC_ALPHA,[K1]:e.ONE_MINUS_DST_COLOR,[Z1]:e.ONE_MINUS_DST_ALPHA,[j1]:e.CONSTANT_COLOR,[$1]:e.ONE_MINUS_CONSTANT_COLOR,[tb]:e.CONSTANT_ALPHA,[eb]:e.ONE_MINUS_CONSTANT_ALPHA};function tt(L,ct,pt,Et,ot,$,bt,kt,ve,ue){if(L===Bs){x===!0&&(St(e.BLEND),x=!1);return}if(x===!1&&(et(e.BLEND),x=!0),L!==B1){if(L!==m||ue!==E){if((f!==Aa||y!==Aa)&&(e.blendEquation(e.FUNC_ADD),f=Aa,y=Aa),ue)switch(L){case dr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case j0:e.blendFunc(e.ONE,e.ONE);break;case $0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case dr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case j0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case $0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,A=null,R=null,w.set(0,0,0),U=0,m=L,E=ue}return}ot=ot||ct,$=$||pt,bt=bt||Et,(ct!==f||ot!==y)&&(e.blendEquationSeparate(ge[ct],ge[ot]),f=ct,y=ot),(pt!==v||Et!==_||$!==A||bt!==R)&&(e.blendFuncSeparate(C[pt],C[Et],C[$],C[bt]),v=pt,_=Et,A=$,R=bt),(kt.equals(w)===!1||ve!==U)&&(e.blendColor(kt.r,kt.g,kt.b,ve),w.copy(kt),U=ve),m=L,E=!1}function Q(L,ct){L.side===ui?St(e.CULL_FACE):et(e.CULL_FACE);let pt=L.side===Ln;ct&&(pt=!pt),Z(pt),L.blending===dr&&L.transparent===!1?tt(Bs):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let Et=L.stencilWrite;o.setTest(Et),Et&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):St(e.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){S!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),S=L)}function j(L){L!==I1?(et(e.CULL_FACE),L!==D&&(L===K0?e.cullFace(e.BACK):L===P1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):St(e.CULL_FACE),D=L}function dt(L){L!==F&&(W&&e.lineWidth(L),F=L)}function st(L,ct,pt){L?(et(e.POLYGON_OFFSET_FILL),(q!==ct||V!==pt)&&(e.polygonOffset(ct,pt),q=ct,V=pt)):St(e.POLYGON_OFFSET_FILL)}function ht(L){L?et(e.SCISSOR_TEST):St(e.SCISSOR_TEST)}function Bt(L){L===void 0&&(L=e.TEXTURE0+Y-1),mt!==L&&(e.activeTexture(L),mt=L)}function Ht(L,ct,pt){pt===void 0&&(mt===null?pt=e.TEXTURE0+Y-1:pt=mt);let Et=xt[pt];Et===void 0&&(Et={type:void 0,texture:void 0},xt[pt]=Et),(Et.type!==L||Et.texture!==ct)&&(mt!==pt&&(e.activeTexture(pt),mt=pt),e.bindTexture(L,ct||K[L]),Et.type=L,Et.texture=ct)}function T(){let L=xt[mt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){Zt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function It(L){ce.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function Ut(L,ct){let pt=c.get(ct);pt===void 0&&(pt=new WeakMap,c.set(ct,pt));let Et=pt.get(L);Et===void 0&&(Et=e.getUniformBlockIndex(ct,L.name),pt.set(L,Et))}function vt(L,ct){let Et=c.get(ct).get(L);l.get(ct)!==Et&&(e.uniformBlockBinding(ct,Et,L.__bindingPointIndex),l.set(ct,Et))}function Gt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},mt=null,xt={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,R=null,w=new Jt(0,0,0),U=0,E=!1,S=null,D=null,F=null,q=null,V=null,Zt.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:St,bindFramebuffer:Ot,drawBuffers:wt,useProgram:qt,setBlending:tt,setMaterial:Q,setFlipSided:Z,setCullFace:j,setLineWidth:dt,setPolygonOffset:st,setScissorTest:ht,activeTexture:Bt,bindTexture:Ht,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:P,texImage2D:Dt,texImage3D:it,updateUBOMapping:Ut,uniformBlockBinding:vt,texStorage2D:ut,texStorage3D:Ct,texSubImage2D:X,texSubImage3D:nt,compressedTexSubImage2D:z,compressedTexSubImage3D:Rt,scissor:ft,viewport:It,reset:Gt}}function CU(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function g(T,M){return p?new OffscreenCanvas(T,M):Fc("canvas")}function x(T,M,P){let X=1,nt=Ht(T);if((nt.width>P||nt.height>P)&&(X=P/Math.max(nt.width,nt.height)),X<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let z=Math.floor(X*nt.width),Rt=Math.floor(X*nt.height);d===void 0&&(d=g(z,Rt));let ut=M?g(z,Rt):d;return ut.width=z,ut.height=Rt,ut.getContext("2d").drawImage(T,0,0,z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+z+"x"+Rt+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){e.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(T,M,P,X,nt=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let z=M;if(M===e.RED&&(P===e.FLOAT&&(z=e.R32F),P===e.HALF_FLOAT&&(z=e.R16F),P===e.UNSIGNED_BYTE&&(z=e.R8)),M===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.R8UI),P===e.UNSIGNED_SHORT&&(z=e.R16UI),P===e.UNSIGNED_INT&&(z=e.R32UI),P===e.BYTE&&(z=e.R8I),P===e.SHORT&&(z=e.R16I),P===e.INT&&(z=e.R32I)),M===e.RG&&(P===e.FLOAT&&(z=e.RG32F),P===e.HALF_FLOAT&&(z=e.RG16F),P===e.UNSIGNED_BYTE&&(z=e.RG8)),M===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.RG8UI),P===e.UNSIGNED_SHORT&&(z=e.RG16UI),P===e.UNSIGNED_INT&&(z=e.RG32UI),P===e.BYTE&&(z=e.RG8I),P===e.SHORT&&(z=e.RG16I),P===e.INT&&(z=e.RG32I)),M===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.RGB8UI),P===e.UNSIGNED_SHORT&&(z=e.RGB16UI),P===e.UNSIGNED_INT&&(z=e.RGB32UI),P===e.BYTE&&(z=e.RGB8I),P===e.SHORT&&(z=e.RGB16I),P===e.INT&&(z=e.RGB32I)),M===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(z=e.RGBA16UI),P===e.UNSIGNED_INT&&(z=e.RGBA32UI),P===e.BYTE&&(z=e.RGBA8I),P===e.SHORT&&(z=e.RGBA16I),P===e.INT&&(z=e.RGBA32I)),M===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(z=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(z=e.R11F_G11F_B10F)),M===e.RGBA){let Rt=nt?zc:he.getTransfer(X);P===e.FLOAT&&(z=e.RGBA32F),P===e.HALF_FLOAT&&(z=e.RGBA16F),P===e.UNSIGNED_BYTE&&(z=Rt===Se?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(z=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(z=e.RGB5_A1)}return(z===e.R16F||z===e.R32F||z===e.RG16F||z===e.RG32F||z===e.RGBA16F||z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function y(T,M){let P;return T?M===null||M===La||M===ul?P=e.DEPTH24_STENCIL8:M===fs?P=e.DEPTH32F_STENCIL8:M===ll&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===La||M===ul?P=e.DEPTH_COMPONENT24:M===fs?P=e.DEPTH_COMPONENT32F:M===ll&&(P=e.DEPTH_COMPONENT16),P}function A(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==kn&&T.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){let M=T.target;M.removeEventListener("dispose",R),U(M),M.isVideoTexture&&u.delete(M)}function w(T){let M=T.target;M.removeEventListener("dispose",w),S(M)}function U(T){let M=i.get(T);if(M.__webglInit===void 0)return;let P=T.source,X=h.get(P);if(X){let nt=X[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(X).length===0&&h.delete(P)}i.remove(T)}function E(T){let M=i.get(T);e.deleteTexture(M.__webglTexture);let P=T.source,X=h.get(P);delete X[M.__cacheKey],r.memory.textures--}function S(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let nt=0;nt<M.__webglFramebuffer[X].length;nt++)e.deleteFramebuffer(M.__webglFramebuffer[X][nt]);else e.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)e.deleteFramebuffer(M.__webglFramebuffer[X]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let P=T.textures;for(let X=0,nt=P.length;X<nt;X++){let z=i.get(P[X]);z.__webglTexture&&(e.deleteTexture(z.__webglTexture),r.memory.textures--),i.remove(P[X])}i.remove(T)}let D=0;function F(){D=0}function q(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function V(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Y(T,M){let P=i.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(P,T,M);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+M)}function W(T,M){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){K(P,T,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+M)}function rt(T,M){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){K(P,T,M);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+M)}function G(T,M){let P=i.get(T);if(T.version>0&&P.__version!==T.version){et(P,T,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+M)}let mt={[ls]:e.REPEAT,[as]:e.CLAMP_TO_EDGE,[Df]:e.MIRRORED_REPEAT},xt={[kn]:e.NEAREST,[ub]:e.NEAREST_MIPMAP_NEAREST,[ou]:e.NEAREST_MIPMAP_LINEAR,[ri]:e.LINEAR,[fd]:e.LINEAR_MIPMAP_NEAREST,[hs]:e.LINEAR_MIPMAP_LINEAR},At={[pb]:e.NEVER,[xb]:e.ALWAYS,[mb]:e.LESS,[fv]:e.LEQUAL,[gb]:e.EQUAL,[yb]:e.GEQUAL,[vb]:e.GREATER,[_b]:e.NOTEQUAL};function Ft(T,M){if(M.type===fs&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===fd||M.magFilter===ou||M.magFilter===hs||M.minFilter===ri||M.minFilter===fd||M.minFilter===ou||M.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,mt[M.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,mt[M.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,mt[M.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,xt[M.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,At[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kn||M.minFilter!==ou&&M.minFilter!==hs||M.type===fs&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Zt(T,M){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));let X=M.source,nt=h.get(X);nt===void 0&&(nt={},h.set(X,nt));let z=V(M);if(z!==T.__cacheKey){nt[z]===void 0&&(nt[z]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),nt[z].usedTimes++;let Rt=nt[T.__cacheKey];Rt!==void 0&&(nt[T.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(M)),T.__cacheKey=z,T.__webglTexture=nt[z].texture}return P}function ce(T,M,P){return Math.floor(Math.floor(T/P)/M)}function oe(T,M,P,X){let z=T.updateRanges;if(z.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,P,X,M.data);else{z.sort((it,ft)=>it.start-ft.start);let Rt=0;for(let it=1;it<z.length;it++){let ft=z[Rt],It=z[it],Ut=ft.start+ft.count,vt=ce(It.start,M.width,4),Gt=ce(ft.start,M.width,4);It.start<=Ut+1&&vt===Gt&&ce(It.start+It.count-1,M.width,4)===vt?ft.count=Math.max(ft.count,It.start+It.count-ft.start):(++Rt,z[Rt]=It)}z.length=Rt+1;let ut=e.getParameter(e.UNPACK_ROW_LENGTH),Ct=e.getParameter(e.UNPACK_SKIP_PIXELS),Dt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let it=0,ft=z.length;it<ft;it++){let It=z[it],Ut=Math.floor(It.start/4),vt=Math.ceil(It.count/4),Gt=Ut%M.width,L=Math.floor(Ut/M.width),ct=vt,pt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Gt,L,ct,pt,P,X,M.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ut),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(e.UNPACK_SKIP_ROWS,Dt)}}function K(T,M,P){let X=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=e.TEXTURE_3D);let nt=Zt(T,M),z=M.source;n.bindTexture(X,T.__webglTexture,e.TEXTURE0+P);let Rt=i.get(z);if(z.version!==Rt.__version||nt===!0){n.activeTexture(e.TEXTURE0+P);let ut=he.getPrimaries(he.workingColorSpace),Ct=M.colorSpace===Hs?null:he.getPrimaries(M.colorSpace),Dt=M.colorSpace===Hs||ut===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let it=x(M.image,!1,s.maxTextureSize);it=Bt(M,it);let ft=a.convert(M.format,M.colorSpace),It=a.convert(M.type),Ut=_(M.internalFormat,ft,It,M.colorSpace,M.isVideoTexture);Ft(X,M);let vt,Gt=M.mipmaps,L=M.isVideoTexture!==!0,ct=Rt.__version===void 0||nt===!0,pt=z.dataReady,Et=A(M,it);if(M.isDepthTexture)Ut=y(M.format===hl,M.type),ct&&(L?n.texStorage2D(e.TEXTURE_2D,1,Ut,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,Ut,it.width,it.height,0,ft,It,null));else if(M.isDataTexture)if(Gt.length>0){L&&ct&&n.texStorage2D(e.TEXTURE_2D,Et,Ut,Gt[0].width,Gt[0].height);for(let ot=0,$=Gt.length;ot<$;ot++)vt=Gt[ot],L?pt&&n.texSubImage2D(e.TEXTURE_2D,ot,0,0,vt.width,vt.height,ft,It,vt.data):n.texImage2D(e.TEXTURE_2D,ot,Ut,vt.width,vt.height,0,ft,It,vt.data);M.generateMipmaps=!1}else L?(ct&&n.texStorage2D(e.TEXTURE_2D,Et,Ut,it.width,it.height),pt&&oe(M,it,ft,It)):n.texImage2D(e.TEXTURE_2D,0,Ut,it.width,it.height,0,ft,It,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&ct&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Et,Ut,Gt[0].width,Gt[0].height,it.depth);for(let ot=0,$=Gt.length;ot<$;ot++)if(vt=Gt[ot],M.format!==Ei)if(ft!==null)if(L){if(pt)if(M.layerUpdates.size>0){let bt=yv(vt.width,vt.height,M.format,M.type);for(let kt of M.layerUpdates){let ve=vt.data.subarray(kt*bt/vt.data.BYTES_PER_ELEMENT,(kt+1)*bt/vt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,kt,vt.width,vt.height,1,ft,ve)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,it.depth,ft,vt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ot,Ut,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?pt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,it.depth,ft,It,vt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ot,Ut,vt.width,vt.height,it.depth,0,ft,It,vt.data)}else{L&&ct&&n.texStorage2D(e.TEXTURE_2D,Et,Ut,Gt[0].width,Gt[0].height);for(let ot=0,$=Gt.length;ot<$;ot++)vt=Gt[ot],M.format!==Ei?ft!==null?L?pt&&n.compressedTexSubImage2D(e.TEXTURE_2D,ot,0,0,vt.width,vt.height,ft,vt.data):n.compressedTexImage2D(e.TEXTURE_2D,ot,Ut,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?pt&&n.texSubImage2D(e.TEXTURE_2D,ot,0,0,vt.width,vt.height,ft,It,vt.data):n.texImage2D(e.TEXTURE_2D,ot,Ut,vt.width,vt.height,0,ft,It,vt.data)}else if(M.isDataArrayTexture)if(L){if(ct&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Et,Ut,it.width,it.height,it.depth),pt)if(M.layerUpdates.size>0){let ot=yv(it.width,it.height,M.format,M.type);for(let $ of M.layerUpdates){let bt=it.data.subarray($*ot/it.data.BYTES_PER_ELEMENT,($+1)*ot/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,ft,It,bt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,It,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ut,it.width,it.height,it.depth,0,ft,It,it.data);else if(M.isData3DTexture)L?(ct&&n.texStorage3D(e.TEXTURE_3D,Et,Ut,it.width,it.height,it.depth),pt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,It,it.data)):n.texImage3D(e.TEXTURE_3D,0,Ut,it.width,it.height,it.depth,0,ft,It,it.data);else if(M.isFramebufferTexture){if(ct)if(L)n.texStorage2D(e.TEXTURE_2D,Et,Ut,it.width,it.height);else{let ot=it.width,$=it.height;for(let bt=0;bt<Et;bt++)n.texImage2D(e.TEXTURE_2D,bt,Ut,ot,$,0,ft,It,null),ot>>=1,$>>=1}}else if(Gt.length>0){if(L&&ct){let ot=Ht(Gt[0]);n.texStorage2D(e.TEXTURE_2D,Et,Ut,ot.width,ot.height)}for(let ot=0,$=Gt.length;ot<$;ot++)vt=Gt[ot],L?pt&&n.texSubImage2D(e.TEXTURE_2D,ot,0,0,ft,It,vt):n.texImage2D(e.TEXTURE_2D,ot,Ut,ft,It,vt);M.generateMipmaps=!1}else if(L){if(ct){let ot=Ht(it);n.texStorage2D(e.TEXTURE_2D,Et,Ut,ot.width,ot.height)}pt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,It,it)}else n.texImage2D(e.TEXTURE_2D,0,Ut,ft,It,it);m(M)&&f(X),Rt.__version=z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function et(T,M,P){if(M.image.length!==6)return;let X=Zt(T,M),nt=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+P);let z=i.get(nt);if(nt.version!==z.__version||X===!0){n.activeTexture(e.TEXTURE0+P);let Rt=he.getPrimaries(he.workingColorSpace),ut=M.colorSpace===Hs?null:he.getPrimaries(M.colorSpace),Ct=M.colorSpace===Hs||Rt===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Dt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Dt&&!it?ft[$]=x(M.image[$],!0,s.maxCubemapSize):ft[$]=it?M.image[$].image:M.image[$],ft[$]=Bt(M,ft[$]);let It=ft[0],Ut=a.convert(M.format,M.colorSpace),vt=a.convert(M.type),Gt=_(M.internalFormat,Ut,vt,M.colorSpace),L=M.isVideoTexture!==!0,ct=z.__version===void 0||X===!0,pt=nt.dataReady,Et=A(M,It);Ft(e.TEXTURE_CUBE_MAP,M);let ot;if(Dt){L&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,Gt,It.width,It.height);for(let $=0;$<6;$++){ot=ft[$].mipmaps;for(let bt=0;bt<ot.length;bt++){let kt=ot[bt];M.format!==Ei?Ut!==null?L?pt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,0,0,kt.width,kt.height,Ut,kt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,Gt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?pt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,0,0,kt.width,kt.height,Ut,vt,kt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,Gt,kt.width,kt.height,0,Ut,vt,kt.data)}}}else{if(ot=M.mipmaps,L&&ct){ot.length>0&&Et++;let $=Ht(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,Gt,$.width,$.height)}for(let $=0;$<6;$++)if(it){L?pt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Ut,vt,ft[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,ft[$].width,ft[$].height,0,Ut,vt,ft[$].data);for(let bt=0;bt<ot.length;bt++){let ve=ot[bt].image[$].image;L?pt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,0,0,ve.width,ve.height,Ut,vt,ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,Gt,ve.width,ve.height,0,Ut,vt,ve.data)}}else{L?pt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,vt,ft[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,Ut,vt,ft[$]);for(let bt=0;bt<ot.length;bt++){let kt=ot[bt];L?pt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,0,0,Ut,vt,kt.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,Gt,Ut,vt,kt.image[$])}}}m(M)&&f(e.TEXTURE_CUBE_MAP),z.__version=nt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function St(T,M,P,X,nt,z){let Rt=a.convert(P.format,P.colorSpace),ut=a.convert(P.type),Ct=_(P.internalFormat,Rt,ut,P.colorSpace),Dt=i.get(M),it=i.get(P);if(it.__renderTarget=M,!Dt.__hasExternalTextures){let ft=Math.max(1,M.width>>z),It=Math.max(1,M.height>>z);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,z,Ct,ft,It,M.depth,0,Rt,ut,null):n.texImage2D(nt,z,Ct,ft,It,0,Rt,ut,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,nt,it.__webglTexture,0,dt(M)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,nt,it.__webglTexture,z),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ot(T,M,P){if(e.bindRenderbuffer(e.RENDERBUFFER,T),M.depthBuffer){let X=M.depthTexture,nt=X&&X.isDepthTexture?X.type:null,z=y(M.stencilBuffer,nt),Rt=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=dt(M);st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut,z,M.width,M.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut,z,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,z,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Rt,e.RENDERBUFFER,T)}else{let X=M.textures;for(let nt=0;nt<X.length;nt++){let z=X[nt],Rt=a.convert(z.format,z.colorSpace),ut=a.convert(z.type),Ct=_(z.internalFormat,Rt,ut,z.colorSpace),Dt=dt(M);P&&st(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,Ct,M.width,M.height):st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Dt,Ct,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Ct,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function wt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let nt=X.__webglTexture,z=dt(M);if(M.depthTexture.format===Wo)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0,z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0);else if(M.depthTexture.format===hl)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0,z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function qt(T){let M=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let X=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",nt)};X.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=X}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let X=T.texture.mipmaps;X&&X.length>0?wt(M.__webglFramebuffer[0],T):wt(M.__webglFramebuffer,T)}else if(P){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=e.createRenderbuffer(),Ot(M.__webglDepthbuffer[X],T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,z),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,z)}}else{let X=T.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),Ot(M.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,z),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,z)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(T,M,P){let X=i.get(T);M!==void 0&&St(X.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&qt(T)}function C(T){let M=T.texture,P=i.get(T),X=i.get(M);T.addEventListener("dispose",w);let nt=T.textures,z=T.isWebGLCubeRenderTarget===!0,Rt=nt.length>1;if(Rt||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=M.version,r.memory.textures++),z){P.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer[ut]=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)P.__webglFramebuffer[ut][Ct]=e.createFramebuffer()}else P.__webglFramebuffer[ut]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)P.__webglFramebuffer[ut]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Rt)for(let ut=0,Ct=nt.length;ut<Ct;ut++){let Dt=i.get(nt[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&st(T)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){let Ct=nt[ut];P.__webglColorRenderbuffer[ut]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ut]);let Dt=a.convert(Ct.format,Ct.colorSpace),it=a.convert(Ct.type),ft=_(Ct.internalFormat,Dt,it,Ct.colorSpace,T.isXRRenderTarget===!0),It=dt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,It,ft,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,P.__webglColorRenderbuffer[ut])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Ot(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(z){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)St(P.__webglFramebuffer[ut][Ct],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct);else St(P.__webglFramebuffer[ut],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Rt){for(let ut=0,Ct=nt.length;ut<Ct;ut++){let Dt=nt[ut],it=i.get(Dt),ft=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,it.__webglTexture),Ft(ft,Dt),St(P.__webglFramebuffer,T,Dt,e.COLOR_ATTACHMENT0+ut,ft,0),m(Dt)&&f(ft)}n.unbindTexture()}else{let ut=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,X.__webglTexture),Ft(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)St(P.__webglFramebuffer[Ct],T,M,e.COLOR_ATTACHMENT0,ut,Ct);else St(P.__webglFramebuffer,T,M,e.COLOR_ATTACHMENT0,ut,0);m(M)&&f(ut),n.unbindTexture()}T.depthBuffer&&qt(T)}function tt(T){let M=T.textures;for(let P=0,X=M.length;P<X;P++){let nt=M[P];if(m(nt)){let z=v(T),Rt=i.get(nt).__webglTexture;n.bindTexture(z,Rt),f(z),n.unbindTexture()}}}let Q=[],Z=[];function j(T){if(T.samples>0){if(st(T)===!1){let M=T.textures,P=T.width,X=T.height,nt=e.COLOR_BUFFER_BIT,z=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Rt=i.get(T),ut=M.length>1;if(ut)for(let Dt=0;Dt<M.length;Dt++)n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let Ct=T.texture.mipmaps;Ct&&Ct.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Dt=0;Dt<M.length;Dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),ut){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[Dt]);let it=i.get(M[Dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,P,X,0,0,P,X,nt,e.NEAREST),l===!0&&(Q.length=0,Z.length=0,Q.push(e.COLOR_ATTACHMENT0+Dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(z),Z.push(z),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Z)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Q))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ut)for(let Dt=0;Dt<M.length;Dt++){n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[Dt]);let it=i.get(M[Dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function st(T){let M=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(T){let M=r.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Bt(T,M){let P=T.colorSpace,X=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==mr&&P!==Hs&&(he.getTransfer(P)===Se?(X!==Ei||nt!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),M}function Ht(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=rt,this.setTextureCube=G,this.rebindTextures=ge,this.setupRenderTarget=C,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=st}function DU(e,t){function n(i,s=Hs){let a,r=he.getTransfer(s);if(i===Fi)return e.UNSIGNED_BYTE;if(i===pd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===md)return e.UNSIGNED_SHORT_5_5_5_1;if(i===av)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===rv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===iv)return e.BYTE;if(i===sv)return e.SHORT;if(i===ll)return e.UNSIGNED_SHORT;if(i===dd)return e.INT;if(i===La)return e.UNSIGNED_INT;if(i===fs)return e.FLOAT;if(i===cl)return e.HALF_FLOAT;if(i===ov)return e.ALPHA;if(i===lv)return e.RGB;if(i===Ei)return e.RGBA;if(i===Wo)return e.DEPTH_COMPONENT;if(i===hl)return e.DEPTH_STENCIL;if(i===cv)return e.RED;if(i===gd)return e.RED_INTEGER;if(i===uv)return e.RG;if(i===vd)return e.RG_INTEGER;if(i===_d)return e.RGBA_INTEGER;if(i===lu||i===cu||i===uu||i===hu)if(r===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===lu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===lu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===xd||i===Sd||i===Md)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bd||i===Ed||i===Td)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===bd||i===Ed)return r===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Td)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===wd||i===Rd||i===Cd||i===Dd||i===Ud||i===Nd||i===Ld||i===Od||i===Id||i===Pd||i===zd||i===Bd||i===Fd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ad)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hd||i===Vd||i===Gd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Hd)return r===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kd||i===Xd||i===qd||i===Wd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===kd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ul?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var UU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NU=`
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

}`,Nv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Zc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Bi({vertexShader:UU,fragmentShader:NU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xe(new xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lv=class extends zs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new Nv,f={},v=n.getContextAttributes(),_=null,y=null,A=[],R=[],w=new gt,U=null,E=new bn;E.viewport=new Be;let S=new bn;S.viewport=new Be;let D=[E,S],F=new ed,q=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=A[K];return et===void 0&&(et=new jo,A[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=A[K];return et===void 0&&(et=new jo,A[K]=et),et.getGripSpace()},this.getHand=function(K){let et=A[K];return et===void 0&&(et=new jo,A[K]=et),et.getHandSpace()};function Y(K){let et=R.indexOf(K.inputSource);if(et===-1)return;let St=A[et];St!==void 0&&(St.update(K.inputSource,K.frame,c||r),St.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",rt);for(let K=0;K<A.length;K++){let et=R[K];et!==null&&(R[K]=null,A[K].disconnect(et))}q=null,V=null,m.reset();for(let K in f)delete f[K];t.setRenderTarget(_),p=null,h=null,d=null,s=null,y=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",rt),v.xrCompatible!==!0&&await n.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ot=null,wt=null;v.depth&&(wt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=v.stencil?hl:Wo,Ot=v.stencil?ul:La);let qt={colorFormat:n.RGBA8,depthFormat:wt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(qt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new cs(h.textureWidth,h.textureHeight,{format:Ei,type:Fi,depthTexture:new Yc(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new cs(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(K){for(let et=0;et<K.removed.length;et++){let St=K.removed[et],Ot=R.indexOf(St);Ot>=0&&(R[Ot]=null,A[Ot].disconnect(St))}for(let et=0;et<K.added.length;et++){let St=K.added[et],Ot=R.indexOf(St);if(Ot===-1){for(let qt=0;qt<A.length;qt++)if(qt>=R.length){R.push(St),Ot=qt;break}else if(R[qt]===null){R[qt]=St,Ot=qt;break}if(Ot===-1)break}let wt=A[Ot];wt&&wt.connect(St)}}let G=new N,mt=new N;function xt(K,et,St){G.setFromMatrixPosition(et.matrixWorld),mt.setFromMatrixPosition(St.matrixWorld);let Ot=G.distanceTo(mt),wt=et.projectionMatrix.elements,qt=St.projectionMatrix.elements,ge=wt[14]/(wt[10]-1),C=wt[14]/(wt[10]+1),tt=(wt[9]+1)/wt[5],Q=(wt[9]-1)/wt[5],Z=(wt[8]-1)/wt[0],j=(qt[8]+1)/qt[0],dt=ge*Z,st=ge*j,ht=Ot/(-Z+j),Bt=ht*-Z;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Bt),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),wt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Ht=ge+ht,T=C+ht,M=dt-Bt,P=st+(Ot-Bt),X=tt*C/T*Ht,nt=Q*C/T*Ht;K.projectionMatrix.makePerspective(M,P,X,nt,Ht,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function At(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,St=K.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(St=m.depthFar)),F.near=S.near=E.near=et,F.far=S.far=E.far=St,(q!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,V=F.far),F.layers.mask=K.layers.mask|6,E.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;let Ot=K.parent,wt=F.cameras;At(F,Ot);for(let qt=0;qt<wt.length;qt++)At(wt[qt],Ot);wt.length===2?xt(F,E,S):F.projectionMatrix.copy(E.projectionMatrix),Ft(K,F,Ot)};function Ft(K,et,St){St===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Nf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let Zt=null;function ce(K,et){if(u=et.getViewerPose(c||r),g=et,u!==null){let St=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ot=!1;St.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let C=0;C<St.length;C++){let tt=St[C],Q=null;if(p!==null)Q=p.getViewport(tt);else{let j=d.getViewSubImage(h,tt);Q=j.viewport,C===0&&(t.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(y))}let Z=D[C];Z===void 0&&(Z=new bn,Z.layers.enable(C),Z.viewport=new Be,D[C]=Z),Z.matrix.fromArray(tt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(tt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),C===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push(Z)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let C=d.getDepthInformation(St[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let C=0;C<St.length;C++){let tt=St[C].camera;if(tt){let Q=f[tt];Q||(Q=new Zc,f[tt]=Q);let Z=d.getCameraImage(tt);Q.sourceTexture=Z}}}}for(let St=0;St<A.length;St++){let Ot=R[St],wt=A[St];Ot!==null&&wt!==void 0&&wt.update(Ot,et,c||r)}Zt&&Zt(K,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let oe=new $b;oe.setAnimationLoop(ce),this.setAnimationLoop=function(K){Zt=K},this.dispose=function(){}}},Ar=new zi,LU=new Le;function OU(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,mv(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Ar.copy(y),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(LU.makeRotationFromEuler(Ar)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function IU(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));let A=_.program;i.updateUBOMapping(v,A);let R=t.render.frame;a[v.id]!==R&&(h(v),a[v.id]=R)}function u(v){let _=d();v.__bindingPointIndex=_;let y=e.createBuffer(),A=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let _=s[v.id],y=v.uniforms,A=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let R=0,w=y.length;R<w;R++){let U=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=U.length;E<S;E++){let D=U[E];if(p(D,R,E,A)===!0){let F=D.__offset,q=Array.isArray(D.value)?D.value:[D.value],V=0;for(let Y=0;Y<q.length;Y++){let W=q[Y],rt=x(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,F+V,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,V),V+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,_,y,A){let R=v.value,w=_+"_"+y;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let U=A[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(v){let _=v.uniforms,y=0,A=16;for(let w=0,U=_.length;w<U;w++){let E=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,D=E.length;S<D;S++){let F=E[S],q=Array.isArray(F.value)?F.value:[F.value];for(let V=0,Y=q.length;V<Y;V++){let W=q[V],rt=x(W),G=y%A,mt=G%rt.boundary,xt=G+mt;y+=mt,xt!==0&&A-xt<rt.storage&&(y+=A-xt),F.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=rt.storage}}}let R=y%A;return R>0&&(y+=A-R),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function f(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}var Kd=class{constructor(t={}){let{canvas:n=Sb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=gn;let R=0,w=0,U=null,E=-1,S=null,D=new Be,F=new Be,q=null,V=new Jt(0),Y=0,W=n.width,rt=n.height,G=1,mt=null,xt=null,At=new Be(0,0,W,rt),Ft=new Be(0,0,W,rt),Zt=!1,ce=new tl,oe=!1,K=!1,et=new Le,St=new N,Ot=new Be,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ge(){return U===null?G:1}let C=i;function tt(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",Et,!1),n.addEventListener("webglcontextcreationerror",ot,!1),C===null){let O="webgl2";if(C=tt(O,b),C===null)throw tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,Z,j,dt,st,ht,Bt,Ht,T,M,P,X,nt,z,Rt,ut,Ct,Dt,it,ft,It,Ut,vt,Gt;function L(){Q=new $3(C),Q.init(),Ut=new DU(C,Q),Z=new W3(C,Q,t,Ut),j=new RU(C,Q),Z.reversedDepthBuffer&&h&&j.buffers.depth.setReversed(!0),dt=new nD(C),st=new mU,ht=new CU(C,Q,j,st,Z,Ut,dt),Bt=new Z3(y),Ht=new j3(y),T=new lC(C),vt=new X3(C,T),M=new tD(C,T,dt,vt),P=new sD(C,M,T,dt),it=new iD(C,Z,ht),ut=new Y3(st),X=new pU(y,Bt,Ht,Q,Z,vt,ut),nt=new OU(y,st),z=new vU,Rt=new bU(Q),Dt=new k3(y,Bt,Ht,j,P,p,l),Ct=new AU(y,P,Z),Gt=new IU(C,dt,Z,j),ft=new q3(C,Q,dt),It=new eD(C,Q,dt),dt.programs=X.programs,y.capabilities=Z,y.extensions=Q,y.properties=st,y.renderLists=z,y.shadowMap=Ct,y.state=j,y.info=dt}L();let ct=new Lv(y,C);this.xr=ct,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(W,rt,!1))},this.getSize=function(b){return b.set(W,rt)},this.setSize=function(b,O,H=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,rt=O,n.width=Math.floor(b*G),n.height=Math.floor(O*G),H===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(W*G,rt*G).floor()},this.setDrawingBufferSize=function(b,O,H){W=b,rt=O,G=H,n.width=Math.floor(b*H),n.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,O,H,k){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,O,H,k),j.viewport(D.copy(At).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,O,H,k){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,O,H,k),j.scissor(F.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(b){j.setScissorTest(Zt=b)},this.setOpaqueSort=function(b){mt=b},this.setTransparentSort=function(b){xt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,H=!0){let k=0;if(b){let I=!1;if(U!==null){let lt=U.texture.format;I=lt===_d||lt===vd||lt===gd}if(I){let lt=U.texture.type,_t=lt===Fi||lt===La||lt===ll||lt===ul||lt===pd||lt===md,Nt=Dt.getClearColor(),Tt=Dt.getClearAlpha(),zt=Nt.r,B=Nt.g,at=Nt.b;_t?(g[0]=zt,g[1]=B,g[2]=at,g[3]=Tt,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=zt,x[1]=B,x[2]=at,x[3]=Tt,C.clearBufferiv(C.COLOR,0,x))}else k|=C.COLOR_BUFFER_BIT}O&&(k|=C.DEPTH_BUFFER_BIT),H&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),Dt.dispose(),z.dispose(),Rt.dispose(),st.dispose(),Bt.dispose(),Ht.dispose(),P.dispose(),vt.dispose(),Gt.dispose(),X.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",fi),ct.removeEventListener("sessionend",_l),qn.stop()};function pt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=dt.autoReset,O=Ct.enabled,H=Ct.autoUpdate,k=Ct.needsUpdate,I=Ct.type;L(),dt.autoReset=b,Ct.enabled=O,Ct.autoUpdate=H,Ct.needsUpdate=k,Ct.type=I}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $(b){let O=b.target;O.removeEventListener("dispose",$),bt(O)}function bt(b){kt(b),st.remove(b)}function kt(b){let O=st.get(b).programs;O!==void 0&&(O.forEach(function(H){X.releaseProgram(H)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,k,I,lt){O===null&&(O=wt);let _t=I.isMesh&&I.matrixWorld.determinant()<0,Nt=Sl(b,O,H,k,I);j.setMaterial(k,_t);let Tt=H.index,zt=1;if(k.wireframe===!0){if(Tt=M.getWireframeAttribute(H),Tt===void 0)return;zt=2}let B=H.drawRange,at=H.attributes.position,Mt=B.start*zt,Lt=(B.start+B.count)*zt;lt!==null&&(Mt=Math.max(Mt,lt.start*zt),Lt=Math.min(Lt,(lt.start+lt.count)*zt)),Tt!==null?(Mt=Math.max(Mt,0),Lt=Math.min(Lt,Tt.count)):at!=null&&(Mt=Math.max(Mt,0),Lt=Math.min(Lt,at.count));let ie=Lt-Mt;if(ie<0||ie===1/0)return;vt.setup(I,k,Nt,H,Tt);let ee,se=ft;if(Tt!==null&&(ee=T.get(Tt),se=It,se.setIndex(ee)),I.isMesh)k.wireframe===!0?(j.setLineWidth(k.wireframeLinewidth*ge()),se.setMode(C.LINES)):se.setMode(C.TRIANGLES);else if(I.isLine){let Pt=k.linewidth;Pt===void 0&&(Pt=1),j.setLineWidth(Pt*ge()),I.isLineSegments?se.setMode(C.LINES):I.isLineLoop?se.setMode(C.LINE_LOOP):se.setMode(C.LINE_STRIP)}else I.isPoints?se.setMode(C.POINTS):I.isSprite&&se.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))se.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Pt=I._multiDrawStarts,Kt=I._multiDrawCounts,Qt=I._multiDrawCount,en=Tt?T.get(Tt).bytesPerElement:1,Vi=st.get(k).currentProgram.getUniforms();for(let Tn=0;Tn<Qt;Tn++)Vi.setValue(C,"_gl_DrawID",Tn),se.render(Pt[Tn]/en,Kt[Tn])}else if(I.isInstancedMesh)se.renderInstances(Mt,ie,I.count);else if(H.isInstancedBufferGeometry){let Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Kt=Math.min(H.instanceCount,Pt);se.renderInstances(Mt,ie,Kt)}else se.render(Mt,ie)};function ve(b,O,H){b.transparent===!0&&b.side===ui&&b.forceSinglePass===!1?(b.side=Ln,b.needsUpdate=!0,Ur(b,O,H),b.side=Ps,b.needsUpdate=!0,Ur(b,O,H),b.side=ui):Ur(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),f=Rt.get(H),f.init(O),_.push(f),H.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),b!==H&&b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();let k=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let lt=I.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){let Nt=lt[_t];ve(Nt,H,I),k.add(Nt)}else ve(lt,H,I),k.add(lt)}),f=_.pop(),k},this.compileAsync=function(b,O,H=null){let k=this.compile(b,O,H);return new Promise(I=>{function lt(){if(k.forEach(function(_t){st.get(_t).currentProgram.isReady()&&k.delete(_t)}),k.size===0){I(b);return}setTimeout(lt,10)}Q.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ue=null;function hi(b){ue&&ue(b)}function fi(){qn.stop()}function _l(){qn.start()}let qn=new $b;qn.setAnimationLoop(hi),typeof self!="undefined"&&qn.setContext(self),this.setAnimationLoop=function(b){ue=b,ct.setAnimationLoop(b),b===null?qn.stop():qn.start()},ct.addEventListener("sessionstart",fi),ct.addEventListener("sessionend",_l),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,O,U),f=Rt.get(b,_.length),f.init(O),_.push(f),et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(et,Pi,O.reversedDepth),K=this.localClippingEnabled,oe=ut.init(this.clippingPlanes,K),m=z.get(b,v.length),m.init(),v.push(m),ct.enabled===!0&&ct.isPresenting===!0){let lt=y.xr.getDepthSensingMesh();lt!==null&&Ia(lt,O,-1/0,y.sortObjects)}Ia(b,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(mt,xt),qt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,qt&&Dt.addToRenderList(m,b),this.info.render.frame++,oe===!0&&ut.beginShadows();let H=f.state.shadowsArray;Ct.render(H,b,O),oe===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,I=m.transmissive;if(f.setupLights(),O.isArrayCamera){let lt=O.cameras;if(I.length>0)for(let _t=0,Nt=lt.length;_t<Nt;_t++){let Tt=lt[_t];Hi(k,I,b,Tt)}qt&&Dt.render(b);for(let _t=0,Nt=lt.length;_t<Nt;_t++){let Tt=lt[_t];vu(m,b,Tt,Tt.viewport)}}else I.length>0&&Hi(k,I,b,O),qt&&Dt.render(b),vu(m,b,O);U!==null&&w===0&&(ht.updateMultisampleRenderTarget(U),ht.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(y,b,O),vt.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],oe===!0&&ut.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ia(b,O,H,k){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ce.intersectsSprite(b)){k&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(et);let _t=P.update(b),Nt=b.material;Nt.visible&&m.push(b,_t,Nt,H,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ce.intersectsObject(b))){let _t=P.update(b),Nt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(et)),Array.isArray(Nt)){let Tt=_t.groups;for(let zt=0,B=Tt.length;zt<B;zt++){let at=Tt[zt],Mt=Nt[at.materialIndex];Mt&&Mt.visible&&m.push(b,_t,Mt,H,Ot.z,at)}}else Nt.visible&&m.push(b,_t,Nt,H,Ot.z,null)}}let lt=b.children;for(let _t=0,Nt=lt.length;_t<Nt;_t++)Ia(lt[_t],O,H,k)}function vu(b,O,H,k){let I=b.opaque,lt=b.transmissive,_t=b.transparent;f.setupLightsView(H),oe===!0&&ut.setGlobalState(y.clippingPlanes,H),k&&j.viewport(D.copy(k)),I.length>0&&Dr(I,O,H),lt.length>0&&Dr(lt,O,H),_t.length>0&&Dr(_t,O,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Hi(b,O,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new cs(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?cl:Fi,minFilter:hs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let lt=f.state.transmissionRenderTarget[k.id],_t=k.viewport||D;lt.setSize(_t.z*y.transmissionResolutionScale,_t.w*y.transmissionResolutionScale);let Nt=y.getRenderTarget(),Tt=y.getActiveCubeFace(),zt=y.getActiveMipmapLevel();y.setRenderTarget(lt),y.getClearColor(V),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),qt&&Dt.render(H);let B=y.toneMapping;y.toneMapping=Fs;let at=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),oe===!0&&ut.setGlobalState(y.clippingPlanes,k),Dr(b,H,k),ht.updateMultisampleRenderTarget(lt),ht.updateRenderTargetMipmap(lt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Lt=0,ie=O.length;Lt<ie;Lt++){let ee=O[Lt],se=ee.object,Pt=ee.geometry,Kt=ee.material,Qt=ee.group;if(Kt.side===ui&&se.layers.test(k.layers)){let en=Kt.side;Kt.side=Ln,Kt.needsUpdate=!0,yl(se,H,k,Pt,Kt,Qt),Kt.side=en,Kt.needsUpdate=!0,Mt=!0}}Mt===!0&&(ht.updateMultisampleRenderTarget(lt),ht.updateRenderTargetMipmap(lt))}y.setRenderTarget(Nt,Tt,zt),y.setClearColor(V,Y),at!==void 0&&(k.viewport=at),y.toneMapping=B}function Dr(b,O,H){let k=O.isScene===!0?O.overrideMaterial:null;for(let I=0,lt=b.length;I<lt;I++){let _t=b[I],Nt=_t.object,Tt=_t.geometry,zt=_t.group,B=_t.material;B.allowOverride===!0&&k!==null&&(B=k),Nt.layers.test(H.layers)&&yl(Nt,O,H,Tt,B,zt)}}function yl(b,O,H,k,I,lt){b.onBeforeRender(y,O,H,k,I,lt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(y,O,H,k,b,lt),I.transparent===!0&&I.side===ui&&I.forceSinglePass===!1?(I.side=Ln,I.needsUpdate=!0,y.renderBufferDirect(H,O,k,I,b,lt),I.side=Ps,I.needsUpdate=!0,y.renderBufferDirect(H,O,k,I,b,lt),I.side=ui):y.renderBufferDirect(H,O,k,I,b,lt),b.onAfterRender(y,O,H,k,I,lt)}function Ur(b,O,H){O.isScene!==!0&&(O=wt);let k=st.get(b),I=f.state.lights,lt=f.state.shadowsArray,_t=I.state.version,Nt=X.getParameters(b,I.state,lt,O,H),Tt=X.getProgramCacheKey(Nt),zt=k.programs;k.environment=b.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(b.isMeshStandardMaterial?Ht:Bt).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",$),zt=new Map,k.programs=zt);let B=zt.get(Tt);if(B!==void 0){if(k.currentProgram===B&&k.lightsStateVersion===_t)return Ti(b,Nt),B}else Nt.uniforms=X.getUniforms(b),b.onBeforeCompile(Nt,y),B=X.acquireProgram(Nt,Tt),zt.set(Tt,B),k.uniforms=Nt.uniforms;let at=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(at.clippingPlanes=ut.uniform),Ti(b,Nt),k.needsLights=Ml(b),k.lightsStateVersion=_t,k.needsLights&&(at.ambientLightColor.value=I.state.ambient,at.lightProbe.value=I.state.probe,at.directionalLights.value=I.state.directional,at.directionalLightShadows.value=I.state.directionalShadow,at.spotLights.value=I.state.spot,at.spotLightShadows.value=I.state.spotShadow,at.rectAreaLights.value=I.state.rectArea,at.ltc_1.value=I.state.rectAreaLTC1,at.ltc_2.value=I.state.rectAreaLTC2,at.pointLights.value=I.state.point,at.pointLightShadows.value=I.state.pointShadow,at.hemisphereLights.value=I.state.hemi,at.directionalShadowMap.value=I.state.directionalShadowMap,at.directionalShadowMatrix.value=I.state.directionalShadowMatrix,at.spotShadowMap.value=I.state.spotShadowMap,at.spotLightMatrix.value=I.state.spotLightMatrix,at.spotLightMap.value=I.state.spotLightMap,at.pointShadowMap.value=I.state.pointShadowMap,at.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=B,k.uniformsList=null,B}function xl(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=ml.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ti(b,O){let H=st.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Sl(b,O,H,k,I){O.isScene!==!0&&(O=wt),ht.resetTextureUnits();let lt=O.fog,_t=k.isMeshStandardMaterial?O.environment:null,Nt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:mr,Tt=(k.isMeshStandardMaterial?Ht:Bt).get(k.envMap||_t),zt=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,B=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),at=!!H.morphAttributes.position,Mt=!!H.morphAttributes.normal,Lt=!!H.morphAttributes.color,ie=Fs;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ie=y.toneMapping);let ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=ee!==void 0?ee.length:0,Pt=st.get(k),Kt=f.state.lights;if(oe===!0&&(K===!0||b!==S)){let $t=b===S&&k.id===E;ut.setState(k,b,$t)}let Qt=!1;k.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Kt.state.version||Pt.outputColorSpace!==Nt||I.isBatchedMesh&&Pt.batching===!1||!I.isBatchedMesh&&Pt.batching===!0||I.isBatchedMesh&&Pt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Pt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Pt.instancing===!1||!I.isInstancedMesh&&Pt.instancing===!0||I.isSkinnedMesh&&Pt.skinning===!1||!I.isSkinnedMesh&&Pt.skinning===!0||I.isInstancedMesh&&Pt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Pt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Pt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Pt.instancingMorph===!1&&I.morphTexture!==null||Pt.envMap!==Tt||k.fog===!0&&Pt.fog!==lt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ut.numPlanes||Pt.numIntersection!==ut.numIntersection)||Pt.vertexAlphas!==zt||Pt.vertexTangents!==B||Pt.morphTargets!==at||Pt.morphNormals!==Mt||Pt.morphColors!==Lt||Pt.toneMapping!==ie||Pt.morphTargetsCount!==se)&&(Qt=!0):(Qt=!0,Pt.__version=k.version);let en=Pt.currentProgram;Qt===!0&&(en=Ur(k,O,I));let Vi=!1,Tn=!1,Wn=!1,Ae=en.getUniforms(),Ue=Pt.uniforms;if(j.useProgram(en.program)&&(Vi=!0,Tn=!0,Wn=!0),k.id!==E&&(E=k.id,Tn=!0),Vi||S!==b){j.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ae.setValue(C,"projectionMatrix",b.projectionMatrix),Ae.setValue(C,"viewMatrix",b.matrixWorldInverse);let Fe=Ae.map.cameraPosition;Fe!==void 0&&Fe.setValue(C,St.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&Ae.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ae.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Tn=!0,Wn=!0)}if(I.isSkinnedMesh){Ae.setOptional(C,I,"bindMatrix"),Ae.setOptional(C,I,"bindMatrixInverse");let $t=I.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ae.setValue(C,"boneTexture",$t.boneTexture,ht))}I.isBatchedMesh&&(Ae.setOptional(C,I,"batchingTexture"),Ae.setValue(C,"batchingTexture",I._matricesTexture,ht),Ae.setOptional(C,I,"batchingIdTexture"),Ae.setValue(C,"batchingIdTexture",I._indirectTexture,ht),Ae.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&Ae.setValue(C,"batchingColorTexture",I._colorsTexture,ht));let Ge=H.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&it.update(I,H,en),(Tn||Pt.receiveShadow!==I.receiveShadow)&&(Pt.receiveShadow=I.receiveShadow,Ae.setValue(C,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ue.envMap.value=Tt,Ue.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&O.environment!==null&&(Ue.envMapIntensity.value=O.environmentIntensity),Tn&&(Ae.setValue(C,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&_u(Ue,Wn),lt&&k.fog===!0&&nt.refreshFogUniforms(Ue,lt),nt.refreshMaterialUniforms(Ue,k,G,rt,f.state.transmissionRenderTarget[b.id]),ml.upload(C,xl(Pt),Ue,ht)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ml.upload(C,xl(Pt),Ue,ht),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ae.setValue(C,"center",I.center),Ae.setValue(C,"modelViewMatrix",I.modelViewMatrix),Ae.setValue(C,"normalMatrix",I.normalMatrix),Ae.setValue(C,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let $t=k.uniformsGroups;for(let Fe=0,Nr=$t.length;Fe<Nr;Fe++){let Ai=$t[Fe];Gt.update(Ai,en),Gt.bind(Ai,en)}}return en}function _u(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ml(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,O,H){let k=st.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),st.get(b.texture).__webglTexture=O,st.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let H=st.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};let bl=C.createFramebuffer();this.setRenderTarget=function(b,O=0,H=0){U=b,R=O,w=H;let k=!0,I=null,lt=!1,_t=!1;if(b){let Tt=st.get(b);if(Tt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(Tt.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(Tt.__hasExternalTextures)ht.rebindTextures(b,st.get(b.texture).__webglTexture,st.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let at=b.depthTexture;if(Tt.__boundDepthTexture!==at){if(at!==null&&st.has(at)&&(b.width!==at.image.width||b.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}let zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(_t=!0);let B=st.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(B[O])?I=B[O][H]:I=B[O],lt=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?I=st.get(b).__webglMultisampledFramebuffer:Array.isArray(B)?I=B[H]:I=B,D.copy(b.viewport),F.copy(b.scissor),q=b.scissorTest}else D.copy(At).multiplyScalar(G).floor(),F.copy(Ft).multiplyScalar(G).floor(),q=Zt;if(H!==0&&(I=bl),j.bindFramebuffer(C.FRAMEBUFFER,I)&&k&&j.drawBuffers(b,I),j.viewport(D),j.scissor(F),j.setScissorTest(q),lt){let Tt=st.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,H)}else if(_t){let Tt=O;for(let zt=0;zt<b.textures.length;zt++){let B=st.get(b.textures[zt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+zt,B.__webglTexture,H,Tt)}}else if(b!==null&&H!==0){let Tt=st.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Tt.__webglTexture,H)}E=-1},this.readRenderTargetPixels=function(b,O,H,k,I,lt,_t,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){j.bindFramebuffer(C.FRAMEBUFFER,Tt);try{let zt=b.textures[Nt],B=zt.format,at=zt.type;if(!Z.textureFormatReadable(B)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-k&&H>=0&&H<=b.height-I&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Nt),C.readPixels(O,H,k,I,Ut.convert(B),Ut.convert(at),lt))}finally{let zt=U!==null?st.get(U).__webglFramebuffer:null;j.bindFramebuffer(C.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,k,I,lt,_t,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt)if(O>=0&&O<=b.width-k&&H>=0&&H<=b.height-I){j.bindFramebuffer(C.FRAMEBUFFER,Tt);let zt=b.textures[Nt],B=zt.format,at=zt.type;if(!Z.textureFormatReadable(B))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.bufferData(C.PIXEL_PACK_BUFFER,lt.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Nt),C.readPixels(O,H,k,I,Ut.convert(B),Ut.convert(at),0);let Lt=U!==null?st.get(U).__webglFramebuffer:null;j.bindFramebuffer(C.FRAMEBUFFER,Lt);let ie=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Mb(C,ie,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,lt),C.deleteBuffer(Mt),C.deleteSync(ie),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,H=0){let k=Math.pow(2,-H),I=Math.floor(b.image.width*k),lt=Math.floor(b.image.height*k),_t=O!==null?O.x:0,Nt=O!==null?O.y:0;ht.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,_t,Nt,I,lt),j.unbindTexture()};let El=C.createFramebuffer(),np=C.createFramebuffer();this.copyTextureToTexture=function(b,O,H=null,k=null,I=0,lt=null){lt===null&&(I!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=I,I=0):lt=0);let _t,Nt,Tt,zt,B,at,Mt,Lt,ie,ee=b.isCompressedTexture?b.mipmaps[lt]:b.image;if(H!==null)_t=H.max.x-H.min.x,Nt=H.max.y-H.min.y,Tt=H.isBox3?H.max.z-H.min.z:1,zt=H.min.x,B=H.min.y,at=H.isBox3?H.min.z:0;else{let Ge=Math.pow(2,-I);_t=Math.floor(ee.width*Ge),Nt=Math.floor(ee.height*Ge),b.isDataArrayTexture?Tt=ee.depth:b.isData3DTexture?Tt=Math.floor(ee.depth*Ge):Tt=1,zt=0,B=0,at=0}k!==null?(Mt=k.x,Lt=k.y,ie=k.z):(Mt=0,Lt=0,ie=0);let se=Ut.convert(O.format),Pt=Ut.convert(O.type),Kt;O.isData3DTexture?(ht.setTexture3D(O,0),Kt=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ht.setTexture2DArray(O,0),Kt=C.TEXTURE_2D_ARRAY):(ht.setTexture2D(O,0),Kt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let Qt=C.getParameter(C.UNPACK_ROW_LENGTH),en=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Vi=C.getParameter(C.UNPACK_SKIP_PIXELS),Tn=C.getParameter(C.UNPACK_SKIP_ROWS),Wn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ee.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ee.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,B),C.pixelStorei(C.UNPACK_SKIP_IMAGES,at);let Ae=b.isDataArrayTexture||b.isData3DTexture,Ue=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let Ge=st.get(b),$t=st.get(O),Fe=st.get(Ge.__renderTarget),Nr=st.get($t.__renderTarget);j.bindFramebuffer(C.READ_FRAMEBUFFER,Fe.__webglFramebuffer),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Ai=0;Ai<Tt;Ai++)Ae&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,st.get(b).__webglTexture,I,at+Ai),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,st.get(O).__webglTexture,lt,ie+Ai)),C.blitFramebuffer(zt,B,_t,Nt,Mt,Lt,_t,Nt,C.DEPTH_BUFFER_BIT,C.NEAREST);j.bindFramebuffer(C.READ_FRAMEBUFFER,null),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||st.has(b)){let Ge=st.get(b),$t=st.get(O);j.bindFramebuffer(C.READ_FRAMEBUFFER,El),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,np);for(let Fe=0;Fe<Tt;Fe++)Ae?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ge.__webglTexture,I,at+Fe):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ge.__webglTexture,I),Ue?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$t.__webglTexture,lt,ie+Fe):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$t.__webglTexture,lt),I!==0?C.blitFramebuffer(zt,B,_t,Nt,Mt,Lt,_t,Nt,C.COLOR_BUFFER_BIT,C.NEAREST):Ue?C.copyTexSubImage3D(Kt,lt,Mt,Lt,ie+Fe,zt,B,_t,Nt):C.copyTexSubImage2D(Kt,lt,Mt,Lt,zt,B,_t,Nt);j.bindFramebuffer(C.READ_FRAMEBUFFER,null),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ue?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Kt,lt,Mt,Lt,ie,_t,Nt,Tt,se,Pt,ee.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Kt,lt,Mt,Lt,ie,_t,Nt,Tt,se,ee.data):C.texSubImage3D(Kt,lt,Mt,Lt,ie,_t,Nt,Tt,se,Pt,ee):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,lt,Mt,Lt,_t,Nt,se,Pt,ee.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,lt,Mt,Lt,ee.width,ee.height,se,ee.data):C.texSubImage2D(C.TEXTURE_2D,lt,Mt,Lt,_t,Nt,se,Pt,ee);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,en),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Vi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Tn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wn),lt===0&&O.generateMipmaps&&C.generateMipmap(Kt),j.unbindTexture()},this.initRenderTarget=function(b){st.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){R=0,w=0,U=null,j.reset(),vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),n.unpackColorSpace=he._getUnpackColorSpace()}};var ME=Pa(du(),1),oE={portrait:[1.6,2.25],landscape:[2.25,1.6]},FU={left:.27,center:.5,right:.73},gu=.018,On=.007,Je=4,lE=1/.05,HU=1/960,VU=2,Vs=72,cE=24,Iv=.36,gE=.095,GU=.0135,$d=.036,mu=.15,uE=1024,hE={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},tp=[0,.07,.93,1],kU=[-.95,-.28,.28,.95],XU=9,qU=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,WU=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,YU=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,ZU=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,fE={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Oa=(e,t,n)=>Math.min(n,Math.max(t,e)),pu=(e,t,n)=>e+(t-e)*n,Pv=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let a=parseInt(i.slice(1),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}let s=i.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch(n){return t}},JU=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],ep=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,vE=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},Hv=(e,t,n,i,s,a)=>{let r=Math.max(0,Math.min(a,i/2,s/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+s-r),e.bezierCurveTo(t+i,n+s-o,t+i-o,n+s,t+i-r,n+s),e.lineTo(t+r,n+s),e.bezierCurveTo(t+o,n+s,t,n+s-o,t,n+s-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},zv=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(s=>{let a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>s(a),a.onerror=()=>s(null),a.src=t});return e.set(t,i),i},dE=(e,t)=>{let[n,i]=oE[e]||oE.portrait,s=pu(.03,Math.min(n,i)*.2,Oa(t,0,1)),a={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:s,slot:a,ringY:r,hangY:r+gE}},KU=e=>{let{width:t,height:n,radius:i,slot:s}=e,a=new Ca;Hv(a,-t/2+On,-n/2+On,t-On*2,n-On*2,Math.max(i-On,.005));let r=new _r;Hv(r,-s.width/2-On,s.y-s.height/2-On,s.width+On*2,s.height+On*2,s.height/2+On),a.holes.push(r);let o=new sl(a,{depth:gu,bevelEnabled:!0,bevelThickness:On,bevelSize:On,bevelSegments:5,curveSegments:24});o.translate(0,0,-gu/2);let l=new nu(a,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let d=0;d<c.count;d++)u.setXY(d,(c.getX(d)+t/2)/t,(c.getY(d)+n/2)/n);return u.needsUpdate=!0,{body:o,face:l}},pE=e=>{let t=new Ca,n=e*1.16;Hv(t,-n/2+.014,-mu/2+.014,n-.028,mu-.028,.024);let i=new sl(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},QU=e=>{let t=tp.length,n=new oi;n.setAttribute("position",new vn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new vn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new vn(new Float32Array(e*t*2),2));let i=[];for(let s=0;s<e-1;s++)for(let a=0;a<t-1;a++){let r=s*t+a;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},jU=e=>{let t=new $o;t.background=new Jt(.035,.035,.04);let n=new xr(1,1),i=[],s=(o,l,c,u=0)=>{let d=new gr({color:new Jt(o,o,o),side:ui});i.push(d);let h=new Xe(n,d);h.position.set(...l),h.scale.set(c[0],c[1],1),h.lookAt(0,0,0),h.rotateZ(u),t.add(h)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let a=new gl(e),r=a.fromScene(t,.035);return a.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},Bv=(e,t)=>{let n=new vr(e);return n.colorSpace=gn,n.anisotropy=t,n},$U=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new vr(t);let i=vE(7),s=Float32Array.from({length:16384},()=>i()),a=(l,c)=>{let u=0;for(let d=-1;d<=1;d++)for(let h=-1;h<=1;h++)u+=s[(c+d+128)%128*128+(l+h+128)%128];return u/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=a((c-1+128)%128,l)-a((c+1)%128,l),d=a(c,(l-1+128)%128)-a(c,(l+1)%128),h=Math.hypot(u,d,1),p=(l*128+c)*4;r.data[p]=(u/h*.5+.5)*255,r.data[p+1]=(d/h*.5+.5)*255,r.data[p+2]=(1/h*.5+.5)*255,r.data[p+3]=255}n.putImageData(r,0,0);let o=new vr(t);return o.wrapS=ls,o.wrapT=ls,o.repeat.set(5,7),o},tN=()=>{let n=vE(19),i=Float32Array.from({length:16384},()=>n()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),a=(l,c)=>{let u=(l%128+128)%128,d=(c%128+128)%128,h=u/128*8,p=d/128*8,g=Math.floor(h),x=Math.floor(p),m=h-g-.5,f=p-x-.5,v=(g+x)%2===0,_=s(m)*(.55+.45*Math.cos(f*Math.PI*(v?1:.6))),y=s(f)*(.55+.45*Math.cos(m*Math.PI*(v?.6:1)));return(v?Math.max(_,y*.7):Math.max(y,_*.7))+i[d*128+u]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(a(c-1,l)-a(c+1,l))*1.6,d=(a(c,l-1)-a(c,l+1))*1.6,h=Math.hypot(u,d,1),p=(l*128+c)*4;r[p]=(u/h*.5+.5)*255,r[p+1]=(d/h*.5+.5)*255,r[p+2]=(1/h*.5+.5)*255,r[p+3]=255}let o=new Wc(r,128,128);return o.wrapS=ls,o.wrapT=ls,o.magFilter=ri,o.minFilter=hs,o.generateMipmaps=!0,o.needsUpdate=!0,o},eN=(e,t,n,i,s,a=1,r=0,o=0)=>{let l=(s==="contain"?Math.min:Math.max)(n/t.width,i/t.height)*a,c=t.width*l,u=t.height*l;e.drawImage(t,(n-c)/2+n*r,(i-u)/2+i*o,c,u)},mE=(e,t,n,i,s,a,r)=>{let o=e.getContext("2d");o&&(o.fillStyle=ep(n),o.fillRect(0,0,e.width,e.height),t&&eN(o,t,e.width,e.height,i,s,a,r))},nN=(e,t,n)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=s;let a=e.getContext("2d");if(!a)return s/192;if(a.fillStyle=ep(n),a.fillRect(0,0,192,s),t)return a.save(),a.translate(192,0),a.rotate(Math.PI/2),a.drawImage(t,0,0,s,192),a.restore(),s/192;let r=JU(n)>.5?[0,0,0]:[1,1,1];a.fillStyle=ep(r,.05);for(let o=0;o<s;o+=4)a.fillRect(0,o,192,1);a.fillStyle=ep(r,.2);for(let o=0;o<s;o+=14)a.fillRect(192*.075,o,2,8),a.fillRect(192*.925-2,o,2,8);return s/192},iN=()=>{let e=()=>Array.from({length:Je+1},()=>new N);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(Je),impulses:new Float64Array(Je),rest:1,anchor:new N,body:{position:new N,previous:new N,velocity:new N,quaternion:new Xn,previousQuaternion:new Xn,angular:new N,mass:1,inverseInertia:new N(1,1,1),hang:new N},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Me={a:new N,b:new N,c:new N,d:new N,e:new N,f:new N,g:new N,pin:new N,q:new Xn,r:new Xn},Vv=(e,t,n)=>(Me.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(Me.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),_E=(e,t)=>{let{x:n,y:i,z:s,w:a}=e;e.x+=.5*(t.x*a+t.y*s-t.z*i),e.y+=.5*(t.y*a+t.z*n-t.x*s),e.z+=.5*(t.z*a+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*s),e.normalize()},yE=(e,t,n)=>{let i=Me.c.crossVectors(t,n);return 1/e.mass+i.dot(Vv(e,i,Me.d))},xE=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),_E(e.quaternion,Vv(e,Me.e.crossVectors(t,n),Me.f))},sN=(e,t,n,i)=>{let{nodes:s,body:a}=e,r=s[t],o=t===0?0:lE,l=t===Je-1,c=Me.g,u=s[t+1];l&&(c.copy(a.hang).applyQuaternion(a.quaternion),u=Me.b.copy(a.position).add(c));let d=Me.a.subVectors(u,r),h=d.length(),p=h-e.rest;if(p<=0||h<1e-9)return;let g=d.divideScalar(h),x=l?yE(a,c,g):lE,m=(h-e.lengths[t])/n,v=(i.hold*Math.tanh(i.stiffness*p/i.hold)+i.spring*p+i.bandDamping*Math.max(0,m))*n*n-e.impulses[t];if(v<=0)return;let _=Math.min(p/(o+x),v);e.impulses[t]+=_,o&&r.addScaledVector(g,_*o),l?xE(a,c,g.multiplyScalar(-_)):u.addScaledVector(g,-_*x)},aN=(e,t,n)=>{let i=Me.g.copy(t.local).applyQuaternion(e.quaternion),s=Me.a.copy(n).sub(e.position).sub(i),a=s.length();if(a<1e-9)return;let r=s.divideScalar(a),o=a/yE(e,i,r);xE(e,i,r.multiplyScalar(o))},Fv=(e,t,n)=>{let{nodes:i,previous:s,velocities:a,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=Je;c++)i[c].copy(i[c-1]),n?i[c].x+=e.rest:i[c].y-=e.rest;r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new N(0,0,1),Math.PI/2),r.hang.set(0,t.hangY,0);let l=Me.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[Je]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=Je;c++)s[c].copy(i[c]),a[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},rN=(e,t,n)=>{e.rest=n/Je;let{width:i,height:s}=t,a=e.body,r=gu+On*2;a.mass=1,a.inverseInertia.set(12/(s*s+r*r),12/(i*i+r*r),12/(i*i+s*s)),a.hang.set(0,t.hangY,0)},oN=(e,t,n,i)=>{let s=Math.max(1,Math.ceil(t/HU-1e-6)),a=t/s,{nodes:r,previous:o,velocities:l,body:c}=e,u=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,d=n.breeze*Math.sin(i*.37+.6)*2,h=e.grab,p=Me.pin,g=Math.exp(-n.nodeDrag*a),x=Math.exp(-n.linearDrag*a),m=Math.exp(-n.angularDrag*a);for(let v=0;v<s;v++){for(let S=1;S<Je;S++){let D=l[S];D.y-=n.gravity*a,D.x+=u*a,D.z+=d*a,o[S].copy(r[S]),r[S].addScaledVector(D,a)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let _=c.quaternion;if(h){let S=Me.q.copy(h.rotation).multiply(Me.r.copy(_).invert());S.w<0&&S.set(-S.x,-S.y,-S.z,-S.w);let D=Me.a.set(S.x,S.y,S.z).multiplyScalar(2*n.grip);D.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(Vv(c,D,Me.b),a)}let y=Me.a.set(0,1,0).applyQuaternion(_),A=Me.b.set(-y.x*y.z,-y.y*y.z,1-y.z*y.z);if(A.lengthSq()>.001){let S=Me.d.set(0,0,1).applyQuaternion(_),D=Math.atan2(Me.e.crossVectors(A,S).dot(y),A.dot(S)),F=D-e.twistRaw;F>Math.PI?F-=Math.PI*2:F<-Math.PI&&(F+=Math.PI*2),e.twist+=F,e.twistRaw=D}if(!h){let S=c.angular.dot(y);c.angular.addScaledVector(y,(n.twist*(e.turn-e.twist)-n.twistDamping*S)*a)}c.velocity.y-=n.gravity*a,c.velocity.x+=u*.35*a,c.velocity.z+=d*.35*a,c.position.addScaledVector(c.velocity,a),_E(c.quaternion,Me.f.copy(c.angular).multiplyScalar(a)),e.impulses.fill(0),h&&p.lerpVectors(h.from,h.target,(v+1)/s);for(let S=0;S<VU;S++){for(let D=0;D<Je;D++)sN(e,D,a,n);h&&aN(c,h,p)}for(let S=1;S<Je;S++){let D=l[S].subVectors(r[S],o[S]).divideScalar(a).multiplyScalar(g);D.multiplyScalar(1/(1+n.nodeAir*D.length()*a))}c.velocity.subVectors(c.position,c.previous).divideScalar(a);let R=Me.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(R.x,R.y,R.z).multiplyScalar(2/a*(R.w<0?-1:1));let w=Me.a.set(0,0,1).applyQuaternion(c.quaternion),U=c.velocity.dot(w),E=Me.b.copy(c.velocity).addScaledVector(w,-U);E.multiplyScalar(1/(1+n.air*E.length()*a)),c.velocity.copy(E).addScaledVector(w,U/(1+n.broadside*Math.abs(U)*a)).multiplyScalar(x),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*a)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[Je].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let S=0;S<Je;S++)e.lengths[S]=r[S].distanceTo(r[S+1])}h&&h.from.copy(h.target);let f=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let v=1;v<Je;v++)f+=l[v].lengthSq()*.05;e.calm=f<2e-4?e.calm+t:0},lN=({frontImage:e,backImage:t,imageFit:n="cover",imageZoom:i=1,imageOffsetX:s=0,imageOffsetY:a=0,cardColor:r="#ffffff",orientation:o="portrait",finish:l="glossy",cornerRadius:c=.3,size:u=.6,anchor:d="center",strapLength:h=.5,strapImage:p,strapColor:g="#111111",strapWidth:x=.65,metal:m="silver",gravity:f=1,damping:v=.5,elasticity:_=.5,breeze:y=.5,interactive:A=!0,intro:R=!0,className:w="",style:U})=>{let E=(0,Cr.useRef)(null),S=(0,Cr.useRef)(null),D=(0,Cr.useRef)(null);return S.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",imageZoom:Math.max(1,Number(i)||1),imageOffsetX:Number(s)||0,imageOffsetY:Number(a)||0,cardColor:r,orientation:o==="landscape"?"landscape":"portrait",finish:l,cornerRadius:c,size:u,anchor:d,strapLength:h,strapImage:p,strapColor:g,strapWidth:x,metal:m,gravity:f,damping:v,elasticity:_,breeze:y,interactive:A,intro:R},(0,Cr.useEffect)(()=>{var F;(F=D.current)==null||F.call(D)}),(0,Cr.useEffect)(()=>{var Tt,zt;let F=E.current;if(!F)return;let q;try{q=new Kd({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(B){return}q.setClearColor(0,0),q.outputColorSpace=gn,q.toneMapping=cd,q.toneMappingExposure=1;let V=q.domElement;V.className="lanyard-canvas",V.setAttribute("aria-hidden","true"),F.appendChild(V);let Y=Math.min(8,q.capabilities.getMaxAnisotropy()),W=new $o,rt=jU(q);W.environment=rt.texture;let G=new bn(cE,1,.1,200),mt=new ol(16777215,1.6);mt.position.set(-2.5,4,6);let xt=new ol(16777215,.35);xt.position.set(3,-1,4),W.add(mt,xt);let At=new Map,Ft={front:null,back:null,strap:null},Zt=document.createElement("canvas"),ce=document.createElement("canvas"),oe=document.createElement("canvas"),K=Bv(Zt,Y),et=Bv(ce,Y),St=Bv(oe,Y);St.wrapS=as,St.wrapT=ls;let Ot=$U(),wt=tN(),qt={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new N},foilFill:{value:new N},foilTop:{value:new N}},ge=B=>{Object.assign(B.uniforms,qt),B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
${qU}`).replace("#include <project_vertex>",`#include <project_vertex>
${WU}`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
${YU}`).replace("#include <opaque_fragment>",`${ZU}
#include <opaque_fragment>`)},C=new Da({map:K,normalMap:Ot,normalScale:new gt(.06,.06)}),tt=new Da({map:et,normalMap:Ot,normalScale:new gt(.06,.06)});C.onBeforeCompile=ge,tt.onBeforeCompile=ge;let Q=new Da,Z=new rl({metalness:1}),j=new Da({map:St,normalMap:wt,normalScale:new gt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Jt(.32,.32,.34),side:ui}),dt=new rs,st=new Xe(void 0,Q),ht=new Xe(void 0,C),Bt=new Xe(void 0,tt),Ht=new Xe(new al(gE,GU,18,72),Z);Ht.rotation.y=Math.PI/2-.7,dt.add(st,ht,Bt,Ht),W.add(dt);let T=QU(Vs),M=new Xe(T,j);M.frustumCulled=!1,W.add(M);let P=new rs,X=new Xe(pE(Iv),Z);X.position.y=$d+mu/2-.004;let nt=new Xe(new al($d,.0105,14,40),Z);P.add(X,nt),W.add(P);let z=iN(),Rt=[],ut=new N,Ct=new N,Dt=new nl(Rt,!1,"centripetal"),it={width:1,height:1},ft=dE("portrait",.3),It={},Ut=Iv,vt=2,Gt=0,L=performance.now(),ct=0,pt=!0,Et=!0,ot=!1,$=!1,bt=null,kt=0,ve=(zt=(Tt=window.matchMedia)==null?void 0:Tt.call(window,"(prefers-reduced-motion: reduce)").matches)!=null?zt:!1,ue=()=>{let B=S.current,at=Pv(B.cardColor,[1,1,1]),Mt=uE,Lt=Math.round(uE*ft.height/ft.width);(Zt.width!==Mt||Zt.height!==Lt)&&(Zt.width=Mt,Zt.height=Lt,ce.width=Mt,ce.height=Lt,K.dispose(),et.dispose()),mE(Zt,Ft.front,at,B.imageFit,B.imageZoom,B.imageOffsetX,B.imageOffsetY),mE(ce,Ft.back||Ft.front,at,B.imageFit,B.imageZoom,B.imageOffsetX,B.imageOffsetY),K.needsUpdate=!0,et.needsUpdate=!0,Ti()},hi=()=>{let B=S.current;vt=nN(oe,Ft.strap,Pv(B.strapColor,[.07,.07,.07])),wt.repeat.set(2,2*vt),St.dispose(),St.needsUpdate=!0,Ti()},fi=()=>{var Qt;let B=S.current,at=it.width/it.height,Mt=ft.height/Oa(B.size,.15,.9),Lt=ft.width/.72;Mt*at<Lt&&(Mt=Lt/at);let ie=Mt*at;G.aspect=at,G.position.set(0,0,Mt/2/Math.tan(cE*Math.PI/360)),G.lookAt(0,0,0),G.updateProjectionMatrix(),G.updateMatrixWorld(),qt.foilKey.value.set(-2.5,4,6).normalize().transformDirection(G.matrixWorldInverse),qt.foilFill.value.set(3,-1,4).normalize().transformDirection(G.matrixWorldInverse),qt.foilTop.value.set(.5,4.5,8).normalize().transformDirection(G.matrixWorldInverse);let ee=(((Qt=FU[B.anchor])!=null?Qt:.5)-.5)*ie,se=Mt/2+.2,Kt=Mt/2-Mt*pu(.12,.42,Oa(B.strapLength,0,1))+(ft.hangY-ft.height/2);z.anchor.set(ee,se,0),rN(z,ft,se-Kt),z.nodes[0].copy(z.anchor),z.previous[0].copy(z.anchor)},_l=()=>{let B=S.current,at=`${B.orientation}|${B.cornerRadius}`;if(at!==It.layoutKey){ft=dE(B.orientation,B.cornerRadius);let Kt=KU(ft);st.geometry.dispose(),ht.geometry.dispose(),Bt.geometry.dispose(),st.geometry=Kt.body,ht.geometry=Kt.face,Bt.geometry=Kt.face.clone(),ht.position.z=gu/2+On+6e-4,Bt.rotation.y=Math.PI,Bt.position.z=-(gu/2+On+6e-4),Ht.position.set(0,ft.ringY,0),It.framingKey=""}let Mt=`${at}|${B.size}|${B.anchor}|${B.strapLength}|${it.width}|${it.height}`;Mt!==It.framingKey&&(fi(),ot?at!==It.layoutKey&&Fv(z,ft,!1):(Fv(z,ft,B.intro&&!ve),ot=!0));let Lt=`${B.frontImage}|${B.backImage}|${B.strapImage}`;if(Lt!==It.imageKey){let Kt=++kt;Promise.all([zv(At,B.frontImage),zv(At,B.backImage),zv(At,B.strapImage)]).then(([Qt,en,Vi])=>{!Et||Kt!==kt||(Ft.front=Qt,Ft.back=en,Ft.strap=Vi,ue(),hi())})}let ie=`${at}|${B.cardColor}|${B.imageFit}|${B.imageZoom}|${B.imageOffsetX}|${B.imageOffsetY}`;ie!==It.faceKey&&ue(),B.strapColor!==It.strapColor&&hi();let ee=hE[B.finish]||hE.glossy,se=Pv(B.cardColor,[1,1,1]);[C,tt].forEach(Kt=>{Kt.roughness=ee.roughness,Kt.metalness=ee.metalness,Kt.clearcoat=ee.clearcoat,Kt.clearcoatRoughness=ee.clearcoatRoughness,Kt.anisotropy=ee.anisotropy}),qt.foilStrength.value=ee.foil,qt.foilAspect.value=ft.height/ft.width,Q.color.setRGB(se[0]*.92,se[1]*.92,se[2]*.92,gn),Q.roughness=Math.min(ee.roughness,.35),Q.metalness=ee.metalness,Q.clearcoat=1,Q.clearcoatRoughness=.08;let Pt=fE[B.metal]||fE.silver;Z.color.set(Pt.color),Z.roughness=Pt.roughness,Ut=Iv*Oa(B.strapWidth,.4,2),Ut!==It.strapScale&&(X.geometry.dispose(),X.geometry=pE(Ut)),V.style.touchAction=B.interactive?"pan-y":"auto",It={layoutKey:at,framingKey:Mt,imageKey:Lt,faceKey:ie,strapColor:B.strapColor,strapScale:Ut},Ti()},qn=Array.from({length:Vs},()=>new N),Ia=Array.from({length:Vs},()=>new N),vu=kU.map(B=>[Math.cos(B),Math.sin(B)]),Hi={tangent:new N,toCamera:new N,basis:new Le,up:new N,across:new N,facing:new N,end:new N},Dr=()=>{let B=z.nodes[Je],at=$d+mu+.05,Mt=Je-1;for(;Mt>0&&z.nodes[Mt].distanceTo(B)<at*1.1;)Mt--;let Lt=Hi.up.subVectors(z.nodes[Mt],B);Lt.lengthSq()<1e-8&&Lt.set(0,1,0).applyQuaternion(z.body.quaternion),Lt.normalize(),ut.copy(B).addScaledVector(Lt,at),Ct.copy(B).addScaledVector(Lt,$d+mu*.35),Rt.length=0;for(let $t=0;$t<=Mt;$t++)Rt.push(z.nodes[$t]);Rt.push(ut,Ct),Dt.updateArcLengths();for(let $t=0;$t<Vs;$t++)Dt.getPointAt($t/(Vs-1),qn[$t]);let ie=Dt.getLength(),ee=1-ut.distanceTo(Ct)/Math.max(ie,.001),se=T.getAttribute("position"),Pt=T.getAttribute("normal"),Kt=T.getAttribute("uv"),Qt=tp.length,en=z.rest*Je,Vi=en/(Ut*vt),Tn=Ut/Math.pow(Math.max(1,ie/Math.max(en,.001)),.35),{tangent:Wn,toCamera:Ae,across:Ue,facing:Ge}=Hi;for(let $t=0;$t<Vs;$t++){Wn.subVectors(qn[Math.min(Vs-1,$t+1)],qn[Math.max(0,$t-1)]),Wn.lengthSq()<1e-12&&Wn.set(0,-1,0),Wn.normalize(),Ae.subVectors(G.position,qn[$t]).normalize();let Fe=Ia[$t].crossVectors(Ae,Wn);Fe.lengthSq()<1e-10&&Fe.copy($t>0?Ia[$t-1]:Me.a.set(1,0,0)),Fe.normalize(),$t>0&&Fe.dot(Ia[$t-1])<0&&Fe.negate();let Nr=-z.twist*Math.pow(Math.min(1,$t/(Vs-1)/ee),1.3);Ge.crossVectors(Wn,Fe),Ue.copy(Fe).multiplyScalar(Math.cos(Nr)).addScaledVector(Ge,Math.sin(Nr)),Ge.crossVectors(Wn,Ue);let Ai=qn[$t],TE=(1-$t/(Vs-1))*Vi;for(let Lr=0;Lr<Qt;Lr++){let ip=$t*Qt+Lr,sp=(tp[Lr]-.5)*Tn,[ap,rp]=vu[Lr];se.setXYZ(ip,Ai.x+Ue.x*sp,Ai.y+Ue.y*sp,Ai.z+Ue.z*sp),Pt.setXYZ(ip,Ge.x*ap+Ue.x*rp,Ge.y*ap+Ue.y*rp,Ge.z*ap+Ue.z*rp),Kt.setXY(ip,tp[Lr],TE)}}Hi.end.copy(Ue),se.needsUpdate=!0,Pt.needsUpdate=!0,Kt.needsUpdate=!0,Ue.copy(Hi.end).addScaledVector(Lt,-Hi.end.dot(Lt)).normalize(),Ge.crossVectors(Ue,Lt).normalize(),Hi.basis.makeBasis(Ue,Lt,Ge),P.quaternion.setFromRotationMatrix(Hi.basis),P.position.copy(B)},yl=()=>{dt.position.copy(z.body.position),dt.quaternion.copy(z.body.quaternion),Dr(),q.render(W,G)},Ur=()=>{let B=S.current,at=40*Oa(B.gravity,0,3),Mt=Math.max(at,20),Lt=Oa(B.elasticity,0,1),ie=Oa(B.damping,0,1);return{gravity:at,hold:Mt*pu(2.2,5.5,Lt),stiffness:Mt*10*Je,spring:Mt*pu(.1,.4,Lt)*Je,bandDamping:Mt*pu(.3,.08,Lt)*Je,linearDrag:.25*Math.pow(16,ie),angularDrag:.5*Math.pow(12,ie),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:ve?0:Oa(B.breeze,0,1)}},xl=B=>{if(Gt=0,!Et)return;let at=Math.min(1/30,Math.max(1/240,(B-L)/1e3));L=B,ct+=at;let Mt=Ur();oN(z,at,Mt,ct);let Lt=z.body;Number.isFinite(Lt.position.x+Lt.position.y+Lt.position.z+Lt.quaternion.w)||(z.grab=null,Fv(z,ft,!1)),yl();let ie=z.calm>1.2&&!z.grab&&Mt.breeze===0;pt&&!ie&&(Gt=requestAnimationFrame(xl))},Ti=()=>{Gt||!pt||!Et||(z.calm=0,L=performance.now(),Gt=requestAnimationFrame(xl))},Sl=new au,_u=new gt,Ml=B=>{let at=V.getBoundingClientRect();_u.set((B.clientX-at.left)/at.width*2-1,-((B.clientY-at.top)/at.height)*2+1),Sl.setFromCamera(_u,G)},bl=()=>(dt.updateMatrixWorld(),Sl.intersectObjects([st,ht,Bt],!1)[0]||null),El=B=>{V.style.cursor!==B&&(V.style.cursor=B)},np=B=>{let at=z.body,Mt=Me.a.set(0,1,0).applyQuaternion(at.quaternion),Lt=z.turn>0?-1:1;if(z.turn===0){let ie=Me.c.subVectors(B,G.position).normalize();Lt=Me.b.subVectors(B,at.position).cross(ie).dot(Mt)<0?-1:1}z.turn=z.turn===0?Math.PI*Lt:0,at.angular.addScaledVector(Mt,XU*Lt)},b=B=>{var Mt;if(!S.current.interactive||B.button>0)return;Ml(B);let at=bl();at&&(z.grab={local:at.point.clone().sub(z.body.position).applyQuaternion(z.body.quaternion.clone().invert()),rotation:z.body.quaternion.clone(),reach:at.distance,from:at.point.clone(),target:at.point.clone()},bt={x:B.clientX,y:B.clientY,time:performance.now(),point:at.point.clone()},(Mt=V.setPointerCapture)==null||Mt.call(V,B.pointerId),El("grabbing"),B.preventDefault(),Ti())},O=B=>{if(S.current.interactive){if(Ml(B),z.grab){bt&&Math.hypot(B.clientX-bt.x,B.clientY-bt.y)>6&&(bt=null),Sl.ray.at(z.grab.reach,z.grab.target),Ti();return}B.pointerType!=="touch"&&($=!!bl(),El($?"grab":""))}},H=B=>{var at;z.grab&&(z.grab=null,bt&&B.type==="pointerup"&&performance.now()-bt.time<450&&np(bt.point),bt=null,(at=V.releasePointerCapture)==null||at.call(V,B.pointerId),El($&&B.pointerType!=="touch"?"grab":""),Ti())},k=B=>{!S.current.interactive||B.touches.length!==1||(Ml(B.touches[0]),bl()&&B.preventDefault())};V.addEventListener("pointerdown",b),V.addEventListener("pointermove",O),V.addEventListener("pointerup",H),V.addEventListener("pointercancel",H),V.addEventListener("lostpointercapture",H),V.addEventListener("touchstart",k,{passive:!1});let I=()=>{it.width=Math.max(1,F.clientWidth),it.height=Math.max(1,F.clientHeight),q.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),q.setSize(it.width,it.height,!1),_l(),yl()},lt=new ResizeObserver(I);lt.observe(F);let _t=new IntersectionObserver(([B])=>{pt=B.isIntersecting,pt&&Ti()});_t.observe(F);let Nt=()=>{document.hidden||Ti()};return document.addEventListener("visibilitychange",Nt),D.current=_l,I(),()=>{Et=!1,cancelAnimationFrame(Gt),D.current=null,lt.disconnect(),_t.disconnect(),document.removeEventListener("visibilitychange",Nt),V.removeEventListener("pointerdown",b),V.removeEventListener("pointermove",O),V.removeEventListener("pointerup",H),V.removeEventListener("pointercancel",H),V.removeEventListener("lostpointercapture",H),V.removeEventListener("touchstart",k),[st,ht,Bt,Ht,X,nt,M].forEach(B=>{var at;return(at=B.geometry)==null?void 0:at.dispose()}),[C,tt,Q,Z,j].forEach(B=>B.dispose()),[K,et,St,Ot,wt].forEach(B=>B.dispose()),rt.dispose(),q.dispose(),V.parentNode&&V.parentNode.removeChild(V)}},[]),(0,ME.jsx)("div",{ref:E,className:`lanyard ${w}`.trim(),style:U})},SE=lN;var EE=Pa(du(),1),cN=[["aboutLanyardMountOne","lanyard.jpeg",.4,1.7,.01,-.04],["aboutLanyardMountTwo","lanyard1.jpeg",.4,2,.035,-.2]];for(let[e,t,n,i,s,a]of cN){let r=document.getElementById(e);r&&(0,bE.createRoot)(r).render((0,EE.jsx)(SE,{frontImage:t,backImage:t,imageFit:"cover",imageZoom:i,imageOffsetX:s,imageOffsetY:a,orientation:"portrait",finish:"glossy",cardColor:"#e9f1fa",strapColor:"#314861",strapWidth:.62,strapLength:.6,size:n,gravity:.9,damping:.52,elasticity:.5,breeze:.15,interactive:!0,intro:!0}))}})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
