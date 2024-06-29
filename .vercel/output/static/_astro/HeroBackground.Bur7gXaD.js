import{r as o}from"./index.DhYZZe0J.js";var x={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=o,m=Symbol.for("react.element"),_=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,y=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,l){var t,s={},n=null,a=null;l!==void 0&&(n=""+l),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(a=e.ref);for(t in e)v.call(e,t)&&!b.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:m,type:r,key:n,ref:a,props:s,_owner:y.current}}c.Fragment=_;c.jsx=p;c.jsxs=p;x.exports=c;var i=x.exports;function E(){const r=["experiencia","calidad","novedad","atencion"],[e,l]=o.useState(r[0]),[t,s]=o.useState(0),[n,a]=o.useState(!1);return o.useEffect(()=>{const u=setInterval(()=>{s(f=>(f+1)%r.length)},5e3);return()=>clearInterval(u)},[]),o.useEffect(()=>{l(r[t]);const u=setTimeout(()=>{a(!0)},500),f=setTimeout(()=>{a(!1)},4e3);return()=>{clearTimeout(u),clearTimeout(f)}},[t]),i.jsx("div",{className:"absolute z-10 h-full w-full text-center text-neutral-300 text-[4.5rem] lg:text-[13rem]",children:i.jsxs("span",{className:"relative text font-bold",children:[i.jsx("span",{className:`absolute z-[-1] ${n?"text-bottom opacity-0":"invisible"}`,children:e}),i.jsx("span",{className:` transition-all duration-1000 ${n?"opacity-100":"opacity-0 scale-0"}`,children:e})]})})}export{E as HeroBackground};
