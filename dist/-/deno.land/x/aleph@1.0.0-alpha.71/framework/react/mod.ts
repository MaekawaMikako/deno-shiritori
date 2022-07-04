import{createElement as ve,useCallback as oe,useContext as Ee,useEffect as Ce,useMemo as Pe,useRef as Ae,useState as ae}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";var re="1.0.0-alpha.71";var j=class extends Error{static async fromResponse(t){let r=t.status,o=await t.text(),i={};if(o.startsWith("{")&&o.endsWith("}"))try{let l=JSON.parse(o),{status:n,message:a,details:s,...u}=l;typeof n=="number"&&(r=n),typeof a=="string"&&(o=a),s===null||typeof s!="object"||Array.isArray(s)||Object.assign(i,s),Object.assign(i,u)}catch{}return new j(r,o,i)}constructor(t,r,o,i){super(r,i),this.status=void 0,this.details=void 0,this.status=t,this.details=o??{}}};var be=`
.aleph--error-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
}
.aleph--error-modal .box {
  box-sizing: border-box;
  position: relative;
  max-width: 80%;
  max-height: 90%;
  overflow: auto;
  padding: 24px 30px;
  border-radius: 12px;
  border: 2px solid rgba(255, 0, 0, 0.8);
}
.aleph--error-modal pre {
  margin: 0;
  position: relative;
  line-height: 1.4;
}
.aleph--error-modal pre.source {
  margin: 8px 0;
  padding: 12px 0;
  line-height: 1.2;
  background: #f6f6f6;
}
.aleph--error-modal code {
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: 14px;
  color: rgba(255, 0, 0, 1);
}
.aleph--error-modal .actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
}
.aleph--error-modal .actions button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: #333;
  cursor: pointer;
}
.aleph--error-modal .actions button:hover {
  border-color: #aaa;
  background-color: rgba(255,255,255,0.9);
}
.aleph--error-modal .actions span {
  font-size: 14px;
  line-height: 1;
  color: #454545;
}
.aleph--error-modal .help-links {
  margin: 0;
  margin-top: 21px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 1;
  color: #bbb;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}
.aleph--error-modal .help-links strong {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  color: #333;
}
.aleph--error-modal .help-links a {
  color: teal;
  text-decoration: none;
}
.aleph--error-modal .help-links a:hover {
  text-decoration: underline;
}
`,ot=`
<div class="help-links">
  <strong>Aleph.js ${re}</strong>
  /
  <a href="https://alephjs.org/docs/error-handling" target="_blank">Documentation</a>
  &middot;
  <a href="https://github.com/alephjs/aleph.js/issues/new" target="_blank">Open Issue</a>
  &middot;
  <a href="https://discord.com/channels/775256646821085215/775259756041601044" target="_blank">Discord Help Channel</a>
</div>
`;if(globalThis.document){let e=document.createElement("style");e.appendChild(document.createTextNode(be)),document.head.appendChild(e)}import{createContext as K}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";var L=K({url:new URL("http://localhost/"),params:{}});L.displayName="RouterContext";var M=K({data:void 0,isMutating:!1,mutation:{post:()=>Promise.resolve(new Response(null)),put:()=>Promise.resolve(new Response(null)),patch:()=>Promise.resolve(new Response(null)),delete:()=>Promise.resolve(new Response(null))},reload:()=>Promise.resolve(void 0)});M.displayName="DataContext";var I=K({props:{}});I.displayName="ForwardPropsContext";var ne=({dataUrl:e,dataCache:t,children:r})=>{let o=Ae(),[i,l]=ae(()=>{let d=t.get(e);if(d){if(typeof d.data=="function"){let c=d.data();if(c instanceof Promise)return c.then(p=>{t.set(e,{data:p}),o.current=p}).catch(p=>{t.set(e,{data:p}),o.current=p});throw Error(`Data for ${e} has invalid type [function].`)}return d.data}throw Error(`Data for ${e} is not found`)}),[n,a]=ae(!1),s=oe(async(d,c,p)=>{let f=p&&typeof p=="object"&&p!==null,y=f&&typeof p.optimisticUpdate=="function",b=p==="replace"||f&&!!p.replace,x;if(y){let A=p.optimisticUpdate;l(E=>E!==void 0?(x=E,A(je(E))):E)}a(d);let g=await c;if(g.status>=400){let A=await j.fromResponse(g),E=A.details;if(A.status===501&&typeof E.redirect?.location=="string")return location.href=E.redirect?.location,g;if(y)return x!==void 0&&l(x),p.onFailure&&p.onFailure(A),a(!1),g;throw A}if(b&&g.ok)try{let A=await g.json(),E=t.get(e)?.dataCacheTtl;t.set(e,{data:A,dataCacheTtl:E,dataExpires:Date.now()+1e3*(E||1)}),l(A)}catch{y&&(x!==void 0&&l(x),p.onFailure&&p.onFailure(new j(500,"Data must be valid JSON")))}return a(!1),g},[e]),u=oe(async d=>{try{let c=await fetch(e+(e.includes("?")?"&":"?")+"_data_",{headers:[["Accept","application/json"]],signal:d});if(!c.ok){let p=await j.fromResponse(c),f=p.details;throw p.status===501&&typeof f.redirect?.location=="string"&&(location.href=f.redirect?.location,await new Promise(()=>{})),p}try{let p=await c.json(),f=c.headers.get("Cache-Control"),y=f&&f.includes("max-age=")?parseInt(f.split("max-age=")[1]):void 0,b=Date.now()+1e3*(y||1);t.set(e,{data:p,dataExpires:b}),l(p)}catch{throw new j(500,"Data must be valid JSON")}}catch(c){throw Error(`Failed to reload data for ${e}: ${c.message}`)}},[e]),m=Pe(()=>({post:(d,c)=>s("post",H("post",e,d),c??"none"),put:(d,c)=>s("put",H("put",e,d),c??"none"),patch:(d,c)=>s("patch",H("patch",e,d),c??"none"),delete:(d,c)=>s("delete",H("delete",e,d),c??"none")}),[e]);return Ce(()=>{let d=Date.now(),c=t.get(e),p=null;return c===void 0||c.data!==void 0&&(c.dataExpires===void 0||c.dataExpires<d)?(p=new AbortController,u(p.signal).finally(()=>{p=null})):c.data!==void 0&&l(c.data),()=>p?.abort()},[e]),ve(M.Provider,{value:{deferedData:o,data:i,isMutating:n,mutation:m,reload:u}},r)},Se=()=>{let{deferedData:e,data:t,...r}=Ee(M);if(t instanceof Error)throw t;if(t instanceof Promise){if(e?.current instanceof Error)throw e.current;if(e?.current!==void 0)return{...r,data:e.current};throw t}return{data:t,...r}};function H(e,t,r){let o,i=new Headers([["Accept","application/json"]]);return typeof r=="string"?o=r:typeof r=="number"?o=r.toString():typeof r=="object"&&(r instanceof ArrayBuffer||r instanceof Uint8Array||r instanceof FormData||r instanceof URLSearchParams?o=r:r instanceof Blob?(o=r,i.append("Content-Type",r.type)):(o=JSON.stringify(r),i.append("Content-Type","application/json; charset=utf-8"))),fetch(t,{method:e,body:o,headers:i})}function je(e){return e===null||typeof e!="object"?e:Array.isArray(e)?[...e]:{...e}}import{Children as ke,createElement as Re,Fragment as ie,isValidElement as Te,useContext as _e,useEffect as De,useMemo as Le}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";var h={utf8TextEncoder:new TextEncoder,utf8TextDecoder:new TextDecoder,isInt(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isInteger(e)},isUint(e){return this.isInt(e)&&e>=0},isFilledString(e){return typeof e=="string"&&e.length>0},isFilledArray(e){return Array.isArray(e)&&e.length>0},isPlainObject(e){return e!==null&&typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype},isLikelyHttpURL(e){let t=e.slice(0,8).toLowerCase();return t==="https://"||t.slice(0,7)==="http://"},startsWithAny(e,...t){for(let r of t)if(e.startsWith(r))return!0;return!1},endsWithAny(e,...t){for(let r of t)if(e.endsWith(r))return!0;return!1},trimPrefix(e,t){return t!==""&&e.startsWith(t)?e.slice(t.length):e},trimSuffix(e,t){return t!==""&&e.endsWith(t)?e.slice(0,-t.length):e},pick(e,...t){let r={};for(let o of t)o in e&&(r[o]=e[o]);return r},splitBy(e,t,r=!1){let o=r?e.lastIndexOf(t):e.indexOf(t);return o>=0?[e.slice(0,o),e.slice(o+1)]:[e,""]},toHex(e){return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")},async hmacSign(e,t,r="SHA-256"){let o=await crypto.subtle.importKey("raw",this.utf8TextEncoder.encode(t),{name:"HMAC",hash:{name:r}},!1,["sign","verify"]),i=await crypto.subtle.sign("HMAC",o,this.utf8TextEncoder.encode(e));return this.toHex(i)},computeHash(e,t){return crypto.subtle.digest(e,typeof t=="string"?this.utf8TextEncoder.encode(t):t).then(r=>this.toHex(r))},prettyBytes(e){let t=Math.floor(Math.log(e)/Math.log(1024));return`${Math.round(100*e/Math.pow(1024,t))/100}${["","K","M","G","T","P","E"][t]}B`},splitPath(e){return e.split(/[\/\\]+/g).filter(t=>t!==""&&t!==".").reduce((t,r)=>(r===".."?t.pop():t.push(r),t),[])},cleanPath(e){return"/"+this.splitPath(e).join("/")},debounce(e,t){let r;return function(o,...i){r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,e(...i)},t)}}};var $e=e=>{let{ssrHeadCollection:t}=_e(L),[r,o]=Le(()=>Ne(e.children),[e.children]);return t&&r.forEach(({type:i,props:l})=>{let{children:n,...a}=l;if(i==="title")h.isFilledString(n)?t.push(`<title ssr>${n}</title>`):h.isFilledArray(n)&&t.push(`<title ssr>${n.join("")}</title>`);else{let s=Object.entries(a).map(([u,m])=>` ${u}=${JSON.stringify(m)}`).join("");h.isFilledString(n)?t.push(`<${i}${s} ssr>${n}</${i}>`):h.isFilledArray(n)?t.push(`<${i}${s} ssr>${n.join("")}</${i}>`):t.push(`<${i}${s} ssr>`)}}),De(()=>{let{document:i}=window,l=[];return r.length>0&&r.forEach(({type:n,props:a})=>{let s=i.createElement(n);Object.keys(a).forEach(u=>{let m=a[u];u==="children"?h.isFilledString(m)?s.innerText=m:h.isFilledArray(m)&&(s.innerText=m.join("")):s.setAttribute(u,String(m||""))}),i.head.appendChild(s),l.push(s)}),()=>{l.forEach(n=>i.head.removeChild(n))}},[r]),Re(ie,null,...o)};function Ne(e){let t=[],r=o=>{ke.forEach(o,i=>{if(!Te(i))return;let{type:l,props:n}=i;switch(l){case ie:r(n.children);break;case"base":case"title":case"meta":case"link":case"style":if(["base","meta","link"].includes(l)&&"children"in n){let{children:a,...s}=n;t.push({type:l,props:s})}else t.push({type:l,props:n})}})};return r(e),[t,[]]}import{createElement as ge,useCallback as Je,useEffect as Ge,useMemo as F,useRef as Ke}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";function Y(e){return{all:e=e||new Map,on:function(t,r){var o=e.get(t);o?o.push(r):e.set(t,[r])},off:function(t,r){var o=e.get(t);o&&(r?o.splice(o.indexOf(r)>>>0,1):e.set(t,[]))},emit:function(t,r){var o=e.get(t);o&&o.slice().map(function(i){i(r)}),(o=e.get("*"))&&o.slice().map(function(i){i(t,r)})}}}var v=Y();var se=!1,B=null,le=e=>{v.off("routerready",le),B&&(v.emit("popstate",{type:"popstate",url:B}),B=null),se=!0};v.on("routerready",le);function W(e,t){let{history:r,location:o}=globalThis;if(!h.isFilledString(e)||!r||!o)return;if(e.startsWith("file://")||e.startsWith("mailto:")||e.startsWith("data:")){o.href=e;return}let i=new URL(e,o.href);if(i.href!==o.href){if(i.host!==o.host){o.href=e;return}t?r.replaceState(null,"",i):r.pushState(null,"",i),se?v.emit("popstate",{type:"popstate",url:i}):B=i}}import{createElement as k,StrictMode as Ue,Suspense as Fe,useContext as ue,useEffect as Me,useMemo as pe,useState as ce}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";var $=class{static execPathname(t,r){let o=h.splitPath(t),i=h.splitPath(r),l=Math.max(o.length,i.length),n={};for(let a=0;a<l;a++){let s=o[a],u=i[a];if(u===void 0||s===void 0)return null;if(s.startsWith(":")&&s.length>1){if(s.endsWith("+")&&s.length>2&&a===o.length-1){n[s.slice(1,-1)]=i.slice(a).map(decodeURIComponent).join("/");break}n[s.slice(1)]=decodeURIComponent(u)}else if(s!==u)return null}return{pathname:{input:r,groups:n}}}test(t){let{pattern:r}=this;return typeof r.test=="function"?r.test(t):(!h.isFilledString(r.host)||r.host===t.host)&&!!h.isFilledString(r.pathname)&&$.execPathname(r.pathname,t.pathname)!==null}exec(t){let{pattern:r}=this;if(typeof r.exec=="function")return r.exec(t);if(h.isFilledString(r.host)&&r.host!==t.host)return null;if(h.isFilledString(r.pathname)){let o=$.execPathname(r.pathname,t.pathname);if(o)return{...o,host:{input:t.host,groups:{}}}}return null}constructor(t){this.pattern=void 0,"URLPattern"in globalThis?this.pattern=new URLPattern(t):this.pattern=t}};function V(e,t){return{host:{input:e,groups:{}},pathname:{input:t,groups:{}}}}function X(e,t){let{routes:r,_app:o,_404:i}=t,{pathname:l}=e;l!=="/"&&(l=h.trimSuffix(l,"/"));let n=[];if(r.length>0){for(let[a,s]of r){let{pathname:u}=s.pattern;if(u!=="/_app"&&u!=="/_404"){let m=a.exec({host:e.host,pathname:l});if(m){n.push([m,s]);break}}}if(n.length===0){for(let[a,s]of r)if(s.pattern.pathname.endsWith("/index")){let u=a.exec({host:e.host,pathname:l+"/index"});if(u){n.push([u,s]);break}}}if(n.length>0){let a=n[n.length-1][1],s=h.splitPath(l),u=r.filter(([m,d])=>d.nesting&&d.pattern.pathname!=="/_app"&&a.pattern.pathname.startsWith(d.pattern.pathname+"/"));for(let m=s.length-1;m>0;m--){let d="/"+s.slice(0,m).join("/");for(let[c,p]of u){let f=c.exec({host:e.host,pathname:d});if(f){n.unshift([f,p]);break}}}if(a.nesting){for(let[m,d]of r)if(d.pattern.pathname===a.pattern.pathname+"/index"){let c=m.exec({host:e.host,pathname:l+"/index"});if(c){n.push([c,d]);break}}}}i&&(n.length===0||n.filter(([a,s])=>!s.nesting).length===0)&&n.push([V(e.host,"/_404"),i[1]]),o&&n.length>0&&n.unshift([V(e.host,"/_app"),o[1]])}return n}import{Component as Oe,createElement as z}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";var q=class extends Oe{static getDerivedStateFromError(t){return{error:t}}render(){return this.state.error instanceof Error?z(this.props.Handler,{error:this.state.error}):this.props.children}constructor(t){super(t),this.state={error:null}}};function J({error:{status:e,message:t},fullscreen:r}){return z("div",{style:r?{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",fontSize:18}:{boxSizing:"border-box",width:"96%",height:"96%",margin:"auto",border:"1px solid rgba(255,0,0,0.5)",backgroundColor:"rgba(255,0,0,0.05)",borderRadius:"8px",padding:"1.5rem 2rem",color:"red",textAlign:"center"}},e&&z("strong",{style:{fontWeight:"600"}},e),e&&z("small",{style:{opacity:.5,padding:"0 6px"}},"-"),t)}var N=window,fe=e=>{let{ssrContext:t,dataDefer:r,strictMode:o,createPortal:i}=e,[l,n]=ce(()=>t?.url||new URL(window.location?.href)),[a,s]=ce(()=>t?.routeModules||ze()),u=pe(()=>{let c=new Map;return a.forEach(({url:p,data:f,dataCacheTtl:y})=>{let b=p.pathname+p.search;f instanceof Promise?c.set(p.href,{data:de(c,b,!0)}):c.set(b,{data:f,dataCacheTtl:y,dataExpires:Date.now()+1e3*(y||1)})}),c},[]),m=pe(()=>{let c={};return a.forEach(p=>{Object.assign(c,p.params)}),c},[a]);if(Me(()=>{let{head:c,body:p}=window.document,f=me(),y=We(),b=p.hasAttribute("data-defer")??r,x=p.getAttribute("data-deployment-id"),g=async({filename:C})=>{let P=C.slice(1);x&&(P+=`?v=${x}`);let{default:S,data:w,GET:T}=await import(P),O=Boolean(w??T);return f[C]={defaultExport:S,withData:O},{defaultExport:S,withData:O}},A=C=>{let P=new URL(C.href,location.href);X(P,y).map(([w,T])=>{let{filename:O}=T;if(!(O in f)){let R=document.createElement("link"),_=T.filename.slice(1);x&&(_+=`?v=${x}`),R.setAttribute("rel","modulepreload"),R.setAttribute("href",_),document.head.appendChild(R)}})},E=async C=>{let P=C.url||new URL(window.location.href),S=X(P,y),w=qe(),T=setTimeout(()=>{T=null,w.style.opacity="1",w.style.width="50%"},300),O=await Promise.all(S.map(async([R,_])=>{let{filename:U}=_,D={url:new URL(R.pathname.input+P.search,P.href),params:R.pathname.groups,filename:U},te=D.url.pathname+D.url.search;if(U in f)Object.assign(D,f[U]);else{let{defaultExport:xe,withData:we}=await g(_);Object.assign(D,{defaultExport:xe,withData:we})}return u.has(te)||f[U]?.withData!==!0||(D.withData=!0,await de(u,te,b)),D}));s(O),n(P),setTimeout(()=>{if(T)clearTimeout(T),w.remove();else{let R=.7,_=.3,U=setTimeout(()=>{w.style.opacity="0"},1e3*R),D=setTimeout(()=>{N.__LOADING_BAR_CLEANUP=null,w.remove()},(R+_)*1e3);N.__LOADING_BAR_CLEANUP=()=>{clearTimeout(U),clearTimeout(D)},w.style.transition=`opacity ${_}s ease-out, width ${R}s ease-in-out`,setTimeout(()=>{w.style.width="100%"},0)}},0),C.url&&window.scrollTo(0,0)},Z=C=>{let P=C.routePattern;if(P){let S=[new $(P),{filename:C.specifier,pattern:P}],w=P.pathname.slice(1);(w==="_app"||w==="_404")&&(y[w]=S),y.routes.push(S)}},ee=C=>{let P=y.routes.find(w=>w[1].filename===C.specifier),S=P?.[1].pattern.pathname?.slice(1);(S==="_app"||S==="_404")&&(y[S]=void 0),y.routes=y.routes.filter(w=>w[1].filename!=C.specifier),E({type:"popstate"})};return addEventListener("popstate",E),v.on("popstate",E),v.on("moduleprefetch",A),v.on("hmr:create",Z),v.on("hmr:remove",ee),v.emit("routerready",{type:"routerready"}),Array.from(c.children).forEach(C=>{C.hasAttribute("ssr")&&c.removeChild(C)}),()=>{removeEventListener("popstate",E),v.off("popstate",E),v.off("moduleprefetch",A),v.off("hmr:create",Z),v.off("hmr:remove",ee)}},[]),a.length===0)return k(J,{error:{status:404,message:"page not found"},fullscreen:!0});let d=k(L.Provider,{value:{url:l,params:m,e404:a[a.length-1].url.pathname==="/_404"||void 0,ssrHeadCollection:t?.headCollection,createPortal:i}},k(he,{modules:a,dataCache:u,ssrContext:t}));return o?k(Ue,{},d):d},he=({modules:e,dataCache:t,ssrContext:r})=>{let{url:o,defaultExport:i,withData:l}=e[0],n=o.pathname+o.search,a;return typeof i=="function"?(a=k(i,null,e.length>1&&k(he,{modules:e.slice(1),dataCache:t,ssrContext:r})),l&&(a=k(Fe,{fallback:null},k(ne,{dataCache:t,dataUrl:n,key:n},a)))):a=k(J,{error:{status:500,message:"missing default export as a valid React component"}}),k(q,{Handler:J},a)},Ie=e=>k(fe,{...e,strictMode:!0}),G=()=>{let{url:e,params:t,e404:r}=ue(L);return{url:e,params:t,e404:r,redirect:W}},He=(e,t={})=>e==null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"?e:k(I.Provider,{value:{props:t}},e),Be=()=>{let{props:e}=ue(I);return e};function We(){let e=window.document?.getElementById("routes-manifest");if(e)try{let t=JSON.parse(e.innerText);if(Array.isArray(t.routes)){let r,o;return{routes:t.routes.map(l=>{let{pattern:n}=l,a=[new $(n),l];return n.pathname==="/_app"?r=a:n.pathname==="/_404"&&(o=a),a}),_app:r,_404:o}}}catch(t){throw Error(`loadRouteTableFromTag: ${t.message}`)}return{routes:[]}}async function de(e,t,r){let o={},i=async()=>{let l=await fetch(t+(t.includes("?")?"&":"?")+"_data_",{headers:{Accept:"application/json"}});if(!l.ok){let n=await j.fromResponse(l),a=n.details;if(n.status===501&&typeof a.redirect?.location=="string"){location.href=a.redirect?.location;return}return n}try{let n=await l.json(),a=l.headers.get("Cache-Control");return o.dataCacheTtl=a?.includes("max-age=")?parseInt(a.split("max-age=")[1]):void 0,o.dataExpires=Date.now()+1e3*(o.dataCacheTtl||1),n}catch{return Error("Data must be valid JSON")}};r?o.data=i:o.data=await i(),e.set(t,o)}function ze(){let e=window.document?.getElementById("ssr-modules");if(e)try{let t=JSON.parse(e.innerText);if(Array.isArray(t)){let r,o=me();return t.map(({url:i,filename:l,dataDefered:n,...a})=>{if(n){if(r===void 0){let s=window.document?.getElementById("defered-data");r=s?JSON.parse(s.innerText):null}r?a.data=r[i]:a.data=Promise.resolve(null)}return a.error&&(a.data=new j(500,a.error.message,{stack:a.error.stack}),a.error=void 0),{url:new URL(i,location.href),filename:l,defaultExport:o[l].defaultExport,...a}})}}catch(t){throw Error(`loadSSRModulesFromTag: ${t.message}`)}return[]}function me(){return N.__ROUTE_MODULES||(N.__ROUTE_MODULES={})}function qe(){typeof N.__LOADING_BAR_CLEANUP=="function"&&(N.__LOADING_BAR_CLEANUP(),N.__LOADING_BAR_CLEANUP=null);let e=document.getElementById("loading-bar");return e||((e=document.createElement("div")).id="loading-bar",document.body.appendChild(e)),Object.assign(e.style,{position:"fixed",top:"0",left:"0",zIndex:"9999",width:"0",height:"1px",opacity:"0",background:"rgba(128, 128, 128, 0.9)",transition:"opacity 0.6s ease-in, width 3s ease-in"}),e}var Q=new Set;function ye(e){let{to:t,prefetch:r,replace:o,className:i,style:l,onClick:n,onMouseEnter:a,onMouseLeave:s,"aria-current":u,children:m,innerRef:d,...c}=e,{url:{pathname:p}}=G(),f=F(()=>{if(!h.isFilledString(t))throw Error("<Link>: prop `to` is required.");if(h.isLikelyHttpURL(t))return t;let[g,A]=h.splitBy(t,"?");return[g=g.startsWith("/")?h.cleanPath(g):h.cleanPath(p+"/"+g),A].filter(Boolean).join("?")},[p,t]),y=F(()=>h.isFilledString(u)?u:f.startsWith("/")?"page":void 0,[f,u]),b=Je(()=>{h.isLikelyHttpURL(f)||Q.has(f)||(v.emit("moduleprefetch",{href:f}),Q.add(f))},[f]),x=Ke(null);return Ge(()=>(r&&b(),()=>{x.current&&(clearTimeout(x.current),x.current=null)}),[r,b]),ge("a",{...c,className:i,style:l,href:f,onClick:g=>{typeof n=="function"&&n(g),!(g.defaultPrevented||Ve(g))&&(g.preventDefault(),W(f,o))},onMouseEnter:g=>{typeof a=="function"&&a(g),!g.defaultPrevented&&(x.current||Q.has(f)||(x.current=setTimeout(()=>{x.current=null,b()},150)))},onMouseLeave:g=>{typeof s=="function"&&s(g),!g.defaultPrevented&&x.current&&(clearTimeout(x.current),x.current=null)},"aria-current":y,ref:d},m)}function Ye(e){let{to:t,exact:r,className:o,style:i,activeStyle:l,activeClassName:n,...a}=e,{url:s}=G(),u=F(()=>{if(!h.isFilledString(t))return!1;let[p,f]=h.splitBy(t,"?"),y=h.trimSuffix(s.pathname,"/"),b;return b=p.startsWith("/")?h.cleanPath(p):h.cleanPath(y+"/"+p),r?b===y&&f===s.searchParams.toString():b===y||y.startsWith(b+"/")},[s.pathname,s.searchParams,t,r]),m=F(()=>u&&n?[o,n].filter(h.isFilledString).join(" "):o,[o,n,u]),d=F(()=>u&&l?Object.assign({},i,l):i,[i,l,u]),c={...a,to:t,className:m,style:d};return u&&Object.assign(c,{"data-active":"true"}),ge(ye,c)}function Ve(e){let{target:t}=e.currentTarget,r=e.nativeEvent;return t&&t!=="_self"||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||r&&r.which===2}import{useContext as Xe,useEffect as Qe,useState as Ze}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";function et(e){let{key:t,className:r,preventScroll:o}=e||{},{createPortal:i}=Xe(L),[l,n]=Ze(null);if(Qe(()=>{let a=document.body.style,s=a.overflow,u=a.overflowX,m=a.overflowY;o&&(a.overflow="hidden",a.overflowX="hidden",a.overflowY="hidden");let d=document.createElement("div");return t&&(d.id=t),d.className=r??"portal-root",document.body.appendChild(d),n(d),()=>{n(null),document.body.removeChild(d),o&&(a.overflow=s,a.overflowX=u,a.overflowY=m)}},[t,r,o]),!l)return()=>null;if(!i)throw Error("Please ensure to pass the `React.createPortal` in `Router` props");return a=>i(a,l,t)}export{Ie as App,$e as Head,ye as Link,Ye as NavLink,fe as Router,He as forwardProps,Se as useData,Be as useForwardProps,et as usePortal,G as useRouter};
