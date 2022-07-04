/* esm.sh - esbuild bundle(react@18.1.0/jsx-runtime) esnext production */
import __react$ from "/-/esm.sh/v86/react@18.1.0/esnext/react.js";var x=Object.create;var p=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var $=(r=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(r,{get:(e,o)=>(typeof require!="undefined"?require:e)[o]}):r)(function(r){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var k=(r,e,o,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of j(e))!E.call(r,s)&&s!==o&&p(r,s,{get:()=>e[s],enumerable:!(t=O(e,s))||t.enumerable});return r};var _=(r,e,o)=>(o=r!=null?x(v(r)):{},k(e||!r||!r.__esModule?p(o,"default",{value:r,enumerable:!0}):o,r));var m=i(n=>{"use strict";var N=__react$,R=Symbol.for("react.element"),S=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,q=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function d(r,e,o){var t,s={},f=null,l=null;o!==void 0&&(f=""+o),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)b.call(e,t)&&!w.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:R,type:r,key:f,ref:l,props:s,_owner:q.current}}n.Fragment=S;n.jsx=d;n.jsxs=d});var u=i((I,c)=>{"use strict";c.exports=m()});var y=_(u()),a=_(u()),{Fragment:L,jsx:T,jsxs:g}=a,{default:P,...h}=a,C=y.default??P??h;export{L as Fragment,C as default,T as jsx,g as jsxs};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
