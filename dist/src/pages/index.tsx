import{jsx as u,jsxs as e}from"/-/esm.sh/react@18.1.0/jsx-runtime?v=181ca354fe3";import{Head as i,Link as r}from"/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/mod.ts?v=181ca354fe3";import{useEffect as n}from"/-/esm.sh/react@18.1.0?v=181ca354fe3";import{Button as o}from"/src/components/button/index.tsx?v=181ca354fe3";import"/src/styles/index.css?module&v=181ca354fe3";var s=()=>(n(()=>{(async()=>{let t=await fetch("/api/user"),a=await t.json();console.log(a)})()},[]),e("div",{className:"screen index",children:[e(i,{children:[u("title",{children:"deno-shiritori"}),u("meta",{name:"description",content:"T\u3057\u308A\u3068\u308A\u3059\u308B"})]}),e("div",{className:"top-contents-container",children:[e("div",{className:"top-message",children:[u("h1",{children:"\u3053\u3068\u3070\u3067\u3042\u305D\u307C\u3046"}),e("p",{children:["\u3067\u3043\u30FC\u306E\u3057\u308A\u3068\u308A\u3078\u3088\u3046\u3053\u305D",u("br",{})," \u3053\u3053\u3067\u306F\u3072\u3089\u304C\u306A\u3057\u304B\u3064\u304B\u3048\u307E\u305B\u3093",u("br",{})," \u3044\u3063\u3057\u3087\u306B\u3057\u308A\u3068\u308A\u3067\u3042\u305D\u3073\u307E\u3057\u3087\u3046"]})]}),u(o,{children:u(r,{role:"button",to:"/game",children:"\u3052\u30FC\u3080\u3059\u305F\u30FC\u3068"})})]})]})),f=s;export{s as Index,f as default};
