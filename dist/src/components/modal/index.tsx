import{jsx as a,jsxs as b}from"/-/esm.sh/react@18.1.0/jsx-runtime?v=181ca2059a1";import"./style.css?module&v=181ca2059a1";export const Modal=({show:d,setShow:g,title:e,content:f})=>{let c=()=>{g(!1);};return d?/*#__PURE__*/ a("div",{className:"overlay",onClick:c,children:/*#__PURE__*/ b("div",{className:"body",onClick:a=>a.stopPropagation(),children:[/*#__PURE__*/ b("div",{className:"header",children:[/*#__PURE__*/ a("div",{className:"title",children:e}),/*#__PURE__*/ a("div",{className:"close",onClick:c,children:/*#__PURE__*/ a("img",{src:"../../public/close.svg",width:"20",height:"20",title:"closeIcon"})})]}),/*#__PURE__*/ a("div",{className:"content",children:f})]})}):null;};