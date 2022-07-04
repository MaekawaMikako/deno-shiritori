import e from"https://esm.sh/react@18.1.0";import{DependencyGraph as zt}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/graph.ts";import Kt from"./server_dependency_graph.js";import{revive as Q}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/routing.ts";import{createElement as Qe,useCallback as xe,useContext as Ze,useEffect as qe,useMemo as et,useRef as tt,useState as be}from"https://esm.sh/react@18.1.0";import{FetchError as q}from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/error.ts";import{createContext as ae}from"https://esm.sh/react@18.1.0";var U=ae({url:new URL("http://localhost/"),params:{}});U.displayName="RouterContext";var Z=ae({data:void 0,isMutating:!1,mutation:{post:()=>Promise.resolve(new Response(null)),put:()=>Promise.resolve(new Response(null)),patch:()=>Promise.resolve(new Response(null)),delete:()=>Promise.resolve(new Response(null))},reload:()=>Promise.resolve(void 0)});Z.displayName="DataContext";var ve=ae({props:{}});ve.displayName="ForwardPropsContext";var Ce=({dataUrl:t,dataCache:r,children:n})=>{let s=tt(),[d,p]=be(()=>{let w=r.get(t);if(w){if(typeof w.data=="function"){let u=w.data();if(u instanceof Promise)return u.then(l=>{r.set(t,{data:l}),s.current=l}).catch(l=>{r.set(t,{data:l}),s.current=l});throw new Error(`Data for ${t} has invalid type [function].`)}return w.data}throw new Error(`Data for ${t} is not found`)}),[c,a]=be(!1),y=xe(async(w,u,l)=>{let m=l&&typeof l=="object"&&l!==null,C=m&&typeof l.optimisticUpdate=="function",L=l==="replace"||m&&!!l.replace,f;if(C){let T=l.optimisticUpdate;p(v=>v!==void 0?(f=v,T(rt(v))):v)}a(w);let M=await u;if(M.status>=400){let T=await q.fromResponse(M),v=T.details;if(T.status===501&&typeof v.redirect?.location=="string")return location.href=v.redirect?.location,M;if(C)return f!==void 0&&p(f),l.onFailure&&l.onFailure(T),a(!1),M;throw T}if(L&&M.ok)try{let T=await M.json(),v=r.get(t)?.dataCacheTtl;r.set(t,{data:T,dataCacheTtl:v,dataExpires:Date.now()+(v||1)*1e3}),p(T)}catch{C&&(f!==void 0&&p(f),l.onFailure&&l.onFailure(new q(500,"Data must be valid JSON")))}return a(!1),M},[t]),g=xe(async w=>{try{let u=await fetch(t+(t.includes("?")?"&":"?")+"_data_",{headers:[["Accept","application/json"]],signal:w});if(!u.ok){let l=await q.fromResponse(u),m=l.details;throw l.status===501&&typeof m.redirect?.location=="string"&&(location.href=m.redirect?.location,await new Promise(()=>{})),l}try{let l=await u.json(),m=u.headers.get("Cache-Control"),C=m&&m.includes("max-age=")?parseInt(m.split("max-age=")[1]):void 0,L=Date.now()+(C||1)*1e3;r.set(t,{data:l,dataExpires:L}),p(l)}catch{throw new q(500,"Data must be valid JSON")}}catch(u){throw new Error(`Failed to reload data for ${t}: ${u.message}`)}},[t]),S=et(()=>({post:(w,u)=>y("post",ee("post",t,w),u??"none"),put:(w,u)=>y("put",ee("put",t,w),u??"none"),patch:(w,u)=>y("patch",ee("patch",t,w),u??"none"),delete:(w,u)=>y("delete",ee("delete",t,w),u??"none")}),[t]);return qe(()=>{let w=Date.now(),u=r.get(t),l=null;return u===void 0||u.data!==void 0&&(u.dataExpires===void 0||u.dataExpires<w)?(l=new AbortController,g(l.signal).finally(()=>{l=null})):u.data!==void 0&&p(u.data),()=>l?.abort()},[t]),Qe(Z.Provider,{value:{deferedData:s,data:d,isMutating:c,mutation:S,reload:g}},n)},ie=()=>{let{deferedData:t,data:r,...n}=Ze(Z);if(r instanceof Error)throw r;if(r instanceof Promise){if(t?.current instanceof Error)throw t.current;if(t?.current!==void 0)return{...n,data:t.current};throw r}return{data:r,...n}};function ee(t,r,n){let s,d=new Headers([["Accept","application/json"]]);return typeof n=="string"?s=n:typeof n=="number"?s=n.toString():typeof n=="object"&&(n instanceof ArrayBuffer||n instanceof Uint8Array||n instanceof FormData||n instanceof URLSearchParams?s=n:n instanceof Blob?(s=n,d.append("Content-Type",n.type)):(s=JSON.stringify(n),d.append("Content-Type","application/json; charset=utf-8"))),fetch(r,{method:t,body:s,headers:d})}function rt(t){return t===null||typeof t!="object"?t:Array.isArray(t)?[...t]:{...t}}import{Children as ot,createElement as nt,Fragment as Ee,isValidElement as st,useContext as at,useEffect as it,useMemo as lt}from"https://esm.sh/react@18.1.0";import V from"https://deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts";var Y=t=>{let{ssrHeadCollection:r}=at(U),[n,s]=lt(()=>ct(t.children),[t.children]);return r&&n.forEach(({type:d,props:p})=>{let{children:c,...a}=p;if(d==="title")V.isFilledString(c)?r.push(`<title ssr>${c}</title>`):V.isFilledArray(c)&&r.push(`<title ssr>${c.join("")}</title>`);else{let y=Object.entries(a).map(([g,S])=>` ${g}=${JSON.stringify(S)}`).join("");V.isFilledString(c)?r.push(`<${d}${y} ssr>${c}</${d}>`):V.isFilledArray(c)?r.push(`<${d}${y} ssr>${c.join("")}</${d}>`):r.push(`<${d}${y} ssr>`)}}),it(()=>{let{document:d}=window,p=[];return n.length>0&&n.forEach(({type:c,props:a})=>{let y=d.createElement(c);Object.keys(a).forEach(g=>{let S=a[g];g==="children"?V.isFilledString(S)?y.innerText=S:V.isFilledArray(S)&&(y.innerText=S.join("")):y.setAttribute(g,String(S||""))}),d.head.appendChild(y),p.push(y)}),()=>{p.forEach(c=>d.head.removeChild(c))}},[n]),nt(Ee,null,...s)};function ct(t){let r=[],n=[],s=d=>{ot.forEach(d,p=>{if(!st(p))return;let{type:c,props:a}=p;switch(c){case Ee:s(a.children);break;case"base":case"title":case"meta":case"link":case"style":if(["base","meta","link"].includes(c)&&"children"in a){let{children:y,...g}=a;r.push({type:c,props:g})}else r.push({type:c,props:a});break}})};return s(t),[r,n]}import{createElement as vt,useCallback as xt,useEffect as bt,useMemo as _e,useRef as Ct}from"https://esm.sh/react@18.1.0";import W from"https://deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts";import Et from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/events.ts";import{redirect as Pt}from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/redirect.ts";import{createElement as F,StrictMode as pt,Suspense as dt,useContext as ft,useEffect as mt,useMemo as Pe,useState as Se}from"https://esm.sh/react@18.1.0";import $ from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/events.ts";import{FetchError as Le}from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/error.ts";import{redirect as ht}from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/redirect.ts";import{matchRoutes as Te}from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/route.ts";import{URLPatternCompat as ke}from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/url_pattern.ts";import{Component as ut,createElement as te}from"https://esm.sh/react@18.1.0";var re=class extends ut{constructor(r){super(r),this.state={error:null}}static getDerivedStateFromError(r){return{error:r}}render(){return this.state.error instanceof Error?te(this.props.Handler,{error:this.state.error}):this.props.children}};function oe({error:{status:t,message:r},fullscreen:n}){return te("div",{style:n?{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",fontSize:18}:{boxSizing:"border-box",width:"96%",height:"96%",margin:"auto",border:"1px solid rgba(255,0,0,0.5)",backgroundColor:"rgba(255,0,0,0.05)",borderRadius:"8px",padding:"1.5rem 2rem",color:"red",textAlign:"center"}},t&&te("strong",{style:{fontWeight:"600"}},t),t&&te("small",{style:{opacity:.5,padding:"0 6px"}},"-"),r)}var B=window,Me=t=>{let{ssrContext:r,dataDefer:n,strictMode:s,createPortal:d}=t,[p,c]=Se(()=>r?.url||new URL(window.location?.href)),[a,y]=Se(()=>r?.routeModules||wt()),g=Pe(()=>{let u=new Map;return a.forEach(({url:l,data:m,dataCacheTtl:C})=>{let L=l.pathname+l.search;m instanceof Promise?u.set(l.href,{data:Re(u,L,!0)}):u.set(L,{data:m,dataCacheTtl:C,dataExpires:Date.now()+(C||1)*1e3})}),u},[]),S=Pe(()=>{let u={};return a.forEach(l=>{Object.assign(u,l.params)}),u},[a]);if(mt(()=>{let{head:u,body:l}=window.document,m=Ne(),C=gt(),L=l.hasAttribute("data-defer")??n,f=l.getAttribute("data-deployment-id"),M=async({filename:x})=>{let h=x.slice(1);f&&(h+=`?v=${f}`);let{default:D,data:b,GET:N}=await import(h),_=Boolean(b??N);return m[x]={defaultExport:D,withData:_},{defaultExport:D,withData:_}},T=x=>{let h=new URL(x.href,location.href);Te(h,C).map(([b,N])=>{let{filename:_}=N;if(!(_ in m)){let o=document.createElement("link"),i=N.filename.slice(1);f&&(i+=`?v=${f}`),o.setAttribute("rel","modulepreload"),o.setAttribute("href",i),document.head.appendChild(o)}})},v=async x=>{let h=x.url||new URL(window.location.href),D=Te(h,C),b=yt(),N=setTimeout(()=>{N=null,b.style.opacity="1",b.style.width="50%"},300),_=await Promise.all(D.map(async([o,i])=>{let{filename:P}=i,k={url:new URL(o.pathname.input+h.search,h.href),params:o.pathname.groups,filename:P},R=k.url.pathname+k.url.search;if(P in m)Object.assign(k,m[P]);else{let{defaultExport:X,withData:K}=await M(i);Object.assign(k,{defaultExport:X,withData:K})}return!g.has(R)&&m[P]?.withData===!0&&(k.withData=!0,await Re(g,R,L)),k}));y(_),c(h),setTimeout(()=>{if(N)clearTimeout(N),b.remove();else{let P=setTimeout(()=>{b.style.opacity="0"},700),k=setTimeout(()=>{B.__LOADING_BAR_CLEANUP=null,b.remove()},(.7+.3)*1e3);B.__LOADING_BAR_CLEANUP=()=>{clearTimeout(P),clearTimeout(k)},b.style.transition=`opacity ${.3}s ease-out, width ${.7}s ease-in-out`,setTimeout(()=>{b.style.width="100%"},0)}},0),x.url&&window.scrollTo(0,0)},E=x=>{let h=x.routePattern;if(h){let D=[new ke(h),{filename:x.specifier,pattern:h}],b=h.pathname.slice(1);(b==="_app"||b==="_404")&&(C[b]=D),C.routes.push(D)}},A=x=>{let D=C.routes.find(b=>b[1].filename===x.specifier)?.[1].pattern.pathname?.slice(1);(D==="_app"||D==="_404")&&(C[D]=void 0),C.routes=C.routes.filter(b=>b[1].filename!=x.specifier),v({type:"popstate"})};return addEventListener("popstate",v),$.on("popstate",v),$.on("moduleprefetch",T),$.on("hmr:create",E),$.on("hmr:remove",A),$.emit("routerready",{type:"routerready"}),Array.from(u.children).forEach(x=>{x.hasAttribute("ssr")&&u.removeChild(x)}),()=>{removeEventListener("popstate",v),$.off("popstate",v),$.off("moduleprefetch",T),$.off("hmr:create",E),$.off("hmr:remove",A)}},[]),a.length===0)return F(oe,{error:{status:404,message:"page not found"},fullscreen:!0});let w=F(U.Provider,{value:{url:p,params:S,e404:a[a.length-1].url.pathname==="/_404"?!0:void 0,ssrHeadCollection:r?.headCollection,createPortal:d}},F(De,{modules:a,dataCache:g,ssrContext:r}));return s?F(pt,{},w):w},De=({modules:t,dataCache:r,ssrContext:n})=>{let{url:s,defaultExport:d,withData:p}=t[0],c=s.pathname+s.search,a;return typeof d=="function"?(a=F(d,null,t.length>1&&F(De,{modules:t.slice(1),dataCache:r,ssrContext:n})),p&&(a=F(dt,{fallback:null},F(Ce,{dataCache:r,dataUrl:c,key:c},a)))):a=F(oe,{error:{status:500,message:"missing default export as a valid React component"}}),F(re,{Handler:oe},a)},le=t=>F(Me,{...t,strictMode:!0}),ce=()=>{let{url:t,params:r,e404:n}=ft(U);return{url:t,params:r,e404:n,redirect:ht}};function gt(){let t=window.document?.getElementById("routes-manifest");if(t)try{let r=JSON.parse(t.innerText);if(Array.isArray(r.routes)){let n,s;return{routes:r.routes.map(p=>{let{pattern:c}=p,a=[new ke(c),p];return c.pathname==="/_app"?n=a:c.pathname==="/_404"&&(s=a),a}),_app:n,_404:s}}}catch(r){throw new Error(`loadRouteTableFromTag: ${r.message}`)}return{routes:[]}}async function Re(t,r,n){let s={},d=async()=>{let p=await fetch(r+(r.includes("?")?"&":"?")+"_data_",{headers:{Accept:"application/json"}});if(!p.ok){let c=await Le.fromResponse(p),a=c.details;if(c.status===501&&typeof a.redirect?.location=="string"){location.href=a.redirect?.location;return}return c}try{let c=await p.json(),a=p.headers.get("Cache-Control");return s.dataCacheTtl=a?.includes("max-age=")?parseInt(a.split("max-age=")[1]):void 0,s.dataExpires=Date.now()+(s.dataCacheTtl||1)*1e3,c}catch{return new Error("Data must be valid JSON")}};n?s.data=d:s.data=await d(),t.set(r,s)}function wt(){let t=window.document?.getElementById("ssr-modules");if(t)try{let r=JSON.parse(t.innerText);if(Array.isArray(r)){let n,s=Ne();return r.map(({url:d,filename:p,dataDefered:c,...a})=>{if(c){if(n===void 0){let y=window.document?.getElementById("defered-data");y?n=JSON.parse(y.innerText):n=null}n?a.data=n[d]:a.data=Promise.resolve(null)}return a.error&&(a.data=new Le(500,a.error.message,{stack:a.error.stack}),a.error=void 0),{url:new URL(d,location.href),filename:p,defaultExport:s[p].defaultExport,...a}})}}catch(r){throw new Error(`loadSSRModulesFromTag: ${r.message}`)}return[]}function Ne(){return B.__ROUTE_MODULES||(B.__ROUTE_MODULES={})}function yt(){typeof B.__LOADING_BAR_CLEANUP=="function"&&(B.__LOADING_BAR_CLEANUP(),B.__LOADING_BAR_CLEANUP=null);let t=document.getElementById("loading-bar");return t||(t=document.createElement("div"),t.id="loading-bar",document.body.appendChild(t)),Object.assign(t.style,{position:"fixed",top:"0",left:"0",zIndex:"9999",width:"0",height:"1px",opacity:"0",background:"rgba(128, 128, 128, 0.9)",transition:"opacity 0.6s ease-in, width 3s ease-in"}),t}var ue=new Set;function O(t){let{to:r,prefetch:n,replace:s,className:d,style:p,onClick:c,onMouseEnter:a,onMouseLeave:y,["aria-current"]:g,children:S,innerRef:w,...u}=t,{url:{pathname:l}}=ce(),m=_e(()=>{if(!W.isFilledString(r))throw new Error("<Link>: prop `to` is required.");if(W.isLikelyHttpURL(r))return r;let[E,A]=W.splitBy(r,"?");return E.startsWith("/")?E=W.cleanPath(E):E=W.cleanPath(l+"/"+E),[E,A].filter(Boolean).join("?")},[l,r]),C=_e(()=>{if(W.isFilledString(g))return g;if(m.startsWith("/"))return"page"},[m,g]),L=xt(()=>{!W.isLikelyHttpURL(m)&&!ue.has(m)&&(Et.emit("moduleprefetch",{href:m}),ue.add(m))},[m]),f=Ct(null),M=E=>{typeof a=="function"&&a(E),!E.defaultPrevented&&!f.current&&!ue.has(m)&&(f.current=setTimeout(()=>{f.current=null,L()},150))},T=E=>{typeof y=="function"&&y(E),!E.defaultPrevented&&f.current&&(clearTimeout(f.current),f.current=null)},v=E=>{typeof c=="function"&&c(E),!(E.defaultPrevented||St(E))&&(E.preventDefault(),Pt(m,s))};return bt(()=>(n&&L(),()=>{f.current&&(clearTimeout(f.current),f.current=null)}),[n,L]),vt("a",{...u,className:d,style:p,href:m,onClick:v,onMouseEnter:M,onMouseLeave:T,"aria-current":C,ref:w},S)}function St(t){let{target:r}=t.currentTarget,n=t.nativeEvent;return r&&r!=="_self"||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||n&&n.which===2}import{useContext as Lr,useEffect as kr,useState as Mr}from"https://esm.sh/react@18.1.0";var pe=()=>e.createElement("div",{className:"screen e404"},e.createElement("h2",null,"Ooooooops, nothing here!"),e.createElement("p",null,e.createElement(O,{to:"/"},"Go back to the homepage"))),Ae=pe;function de(){return e.createElement("header",null,e.createElement("div",null,e.createElement("h1",null,e.createElement("a",null,e.createElement(O,{to:"/"},"\u3067\u3043\u30FC\u306E\u3057\u308A\u3068\u308A")))))}var fe=({children:t})=>e.createElement(e.Fragment,null,e.createElement(de,null),t),Fe=fe;import{useCallback as He,useEffect as Oe,useRef as Tt,useState as z}from"https://esm.sh/react@18.1.0";var G=({children:t,onClick:r,className:n})=>e.createElement("button",{onClick:r,className:n},t);var me=({show:t,setShow:r,title:n,content:s})=>{let d=()=>{r(!1)};return t?e.createElement("div",{className:"overlay",onClick:d},e.createElement("div",{className:"body",onClick:p=>p.stopPropagation()},e.createElement("div",{className:"header"},e.createElement("div",{className:"title"},n),e.createElement("div",{className:"close",onClick:d},e.createElement("img",{src:"../../public/close.svg",width:"20",height:"20",title:"closeIcon"}))),e.createElement("div",{className:"content"},s))):null};var Rt=t=>{let r="";return t.slice(-1)==="\u30FC"?r=t.slice(-2).slice(0,1):r=t.slice(-1),r==="\u3041"?"\u3042":r==="\u3043"?"\u3044":r==="\u3045"?"\u3046":r==="\u3047"?"\u3048":r==="\u3049"?"\u304A":r==="\u3063"?"\u3064":r==="\u3083"?"\u3084":r==="\u3085"?"\u3086":r==="\u3087"?"\u3088":r==="\u308E"?"\u308F":r},$e=t=>Math.floor(Math.random()*t),ne=["\u3057\u308A\u3068\u308A","\u3067\u3043\u30FC\u306E","\u3058\u3050","\u3081\u304C\u306D","\u3055\u3070\u3048"],he={words:[{id:0,message:ne[$e(ne.length)]}]},H={words:JSON.parse(window.localStorage?.getItem("words")||JSON.stringify(he.words))},Ie={cacheTtl:0,get:()=>H.words.length==0?he:H,put:async t=>{let{message:r}=await t.json();return typeof r=="string"&&(H.words.push({id:Date.now(),message:r}),window.localStorage?.setItem("words",JSON.stringify(H.words))),H},patch:async t=>{let{id:r,message:n}=await t.json(),s=H.words.find(d=>d.id===r);return s&&(typeof n=="string"&&(s.message=n),window.localStorage?.setItem("words",JSON.stringify(H.words))),H},delete:()=>(H.words=[{id:0,message:ne[$e(ne.length)]}],window.localStorage?.setItem("words",JSON.stringify(H.words)),H)},ge=()=>{let n=Tt(null),{data:{words:s},isMutating:d,mutation:p}=ie(),[c,a]=z([]),[y,g]=z(!0),[S,w]=z(!1),[u,l]=z(!1),[m,C]=z(5),[L,f]=z(0);Oe(()=>{s.length>0&&a(s.map(x=>x.message).slice(-3))},[]),Oe(()=>{m===0&&E()},[m]);let M=He(()=>{n.current===null&&(n.current=setInterval(()=>{C(x=>x-1)},1e3))},[]),T=He(()=>{n.current!==null&&(clearInterval(n.current),n.current=null)},[]),v=()=>{C(5),M()},E=()=>{w(!0),l(!0),T(),L<s.length&&f(s.length)},A=()=>{p.delete(void 0,"replace"),a(he.words.map(x=>x.message)),l(!1),T()};return e.createElement("div",{className:"screen game"},e.createElement(Y,null,e.createElement("title",null,"Game"),e.createElement("meta",{name:"description",content:"\u3057\u308A\u3068\u308A\u3059\u308B"})),e.createElement("div",{className:"game-contents-container"},e.createElement("div",{className:"words-contents-container"},s.length>0&&e.createElement("div",{className:"recent-words-container"},s.length>1&&e.createElement("div",{className:"container"},e.createElement("div",{className:"recent-words"},c.map((x,h)=>e.createElement("p",{className:"recent-word"},s.length-c.length+h," ",x))),e.createElement("div",{className:"timer"},e.createElement("p",{className:"time"},"\u3042\u3068",e.createElement("br",null),e.createElement("span",null,m),"\u3073\u3087\u3046"))),e.createElement("p",{className:"most-recent-word"},s.length," ",e.createElement("span",null,s.slice(-1)[0].message)))),e.createElement("div",{className:"operation-conatainer"},u===!1&&e.createElement("form",{onSubmit:async x=>{x.preventDefault();let h=x.currentTarget,b=new FormData(h).get("message")?.toString().trim(),N=(b??"").charAt(0),_=Rt(s.slice(-1)[0].message);if(s.map(o=>o.message).includes(b??"")||/[ん]$/.test(b??""))return E();if(/[^ぁ-んー]/.test(b??""))return alert(`\u3072\u3089\u304C\u306A\u3092\u3064\u304B\u3063\u3066\u306D
`);if(N!==_)return alert("\u307E\u3048\u306E\u3053\u3068\u3070\u306B\u3064\u306A\u304C\u3063\u3066\u306A\u3044\u3088");(b??"").length<2&&alert("\u305D\u308C\u306F\u305A\u308B\u3044\u304B\u3089\u3084\u3081\u3066\u307B\u3057\u3044\u306A\u3041\u2026"),b&&(await p.put({message:b},{optimisticUpdate:o=>({words:[...o.words,{id:Date.now(),message:b}]}),replace:!0}),a(s.map(o=>o.message).slice(-3)),v(),h.reset(),setTimeout(()=>{h.querySelector("input")?.focus()},0))}},e.createElement("input",{type:"text",name:"message",placeholder:"\u3064\u304E\u306E\u3053\u3068\u3070\u3092\u306B\u3085\u3046\u308A\u3087\u304F\u3057\u3066\u306D",autoFocus:!0,autoComplete:"off",disabled:!!d})),e.createElement("div",{className:"buttons"},e.createElement(G,{onClick:A},e.createElement(O,{role:"button",to:"/game"},"\u306F\u3058\u3081\u304B\u3089")),e.createElement(G,{onClick:()=>g(!0)},e.createElement("a",null,"\u308B\u30FC\u308B"))))),e.createElement(me,{title:"\u308B\u30FC\u308B",content:e.createElement("div",null,e.createElement("p",null,"\u3072\u3089\u304C\u306A\u3057\u304B\u3064\u304B\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\uFF0E",e.createElement("br",null),e.createElement("br",null),"\u304D\u3054\u3046\u3084\u3053\u3082\u3058\u3067\u304A\u3063\u308F\u305F\u3089",e.createElement("br",null),"\u201C\u3066\u304F\u306E\u308D\u3058\u30FC\u201D",e.createElement("br",null),"\u201D\u3058\u3057\u3087\u201D",e.createElement("br",null),"\u201D\u3088\u3046\u304B\u3093\u201D",e.createElement("br",null),"\u306E\u3088\u3046\u306B\u3061\u3087\u304F\u305C\u3093\u306E\u3082\u3058\u3084",e.createElement("br",null),"\u3053\u3082\u3058\u3092\u304A\u304A\u304D\u304F\u3057\u305F\u3082\u3058\u304B\u3089\u3064\u3065\u3051\u307E\u3057\u3087\u3046\uFF0E",e.createElement("br",null),e.createElement("br",null),"\u306A\u3093\u3068\u306A\u304F1\u3082\u3058\u306E\u3053\u3068\u3070\u306F",e.createElement("br",null),"\u305A\u308B\u3044\u304D\u304C\u3059\u308B\u306E\u3067\u3055\u3051\u3066\u304F\u3060\u3055\u3044\uFF0E",e.createElement("br",null),e.createElement("br",null),"\u3064\u304E\u306E\u3053\u3068\u3070\u3092\u3053\u305F\u3048\u308B\u307E\u3067\u306E",e.createElement("br",null),"\u305B\u3044\u3052\u3093\u3058\u304B\u3093\u306F",5,"\u3073\u3087\u3046\u3067\u3059\uFF0E",e.createElement("br",null),e.createElement("br",null),"\u304A\u306A\u3058\u3053\u3068\u3070\u306F1\u304B\u3044\u3060\u3051\uFF0E",e.createElement("br",null),e.createElement("br",null),"\u304C\u3093\u3070\u3063\u3066\u306D\uFF0E")),show:y,setShow:g}),e.createElement(me,{title:"\u3052\u30FC\u3080\u304A\u30FC\u3070\u30FC",content:e.createElement("div",null,e.createElement("p",null,s.length,"\u304B\u3044\u3082\u3064\u3065\u3044\u305F\u3088!",e.createElement("br",null),e.createElement("br",null),"\u3044\u307E\u307E\u3067\u306E\u3055\u3044\u3053\u3046\u304D\u308D\u304F\u306F",L,"\u304B\u3044!",e.createElement("br",null),e.createElement("br",null),L===s.length&&e.createElement("p",null,"\u304A\u3081\u3067\u3068\u3046!",e.createElement("br",null),e.createElement("br",null)),"\u307E\u305F\u3042\u305D\u3093\u3067\u306D\uFF0E"),e.createElement("div",{className:"game-over-buttons"},e.createElement(G,{onClick:()=>{w(!1),A()}},e.createElement("a",null,"\u306F\u3058\u3081\u304B\u3089")),e.createElement(G,{onClick:A},e.createElement(O,{role:"button",to:"/"},"\u3052\u30FC\u3080\u3068\u3063\u3077\u3078")))),show:S,setShow:w}))},je=ge;import{useEffect as Lt}from"https://esm.sh/react@18.1.0";var we=()=>(Lt(()=>{(async()=>{let n=await(await fetch("/api/user")).json();console.log(n)})()},[]),e.createElement("div",{className:"screen index"},e.createElement(Y,null,e.createElement("title",null,"deno-shiritori"),e.createElement("meta",{name:"description",content:"T\u3057\u308A\u3068\u308A\u3059\u308B"})),e.createElement("div",{className:"top-contents-container"},e.createElement("div",{className:"top-message"},e.createElement("h1",null,"\u3053\u3068\u3070\u3067\u3042\u305D\u307C\u3046"),e.createElement("p",null,"\u3067\u3043\u30FC\u306E\u3057\u308A\u3068\u308A\u3078\u3088\u3046\u3053\u305D",e.createElement("br",null)," \u3053\u3053\u3067\u306F\u3072\u3089\u304C\u306A\u3057\u304B\u3064\u304B\u3048\u307E\u305B\u3093",e.createElement("br",null)," \u3044\u3063\u3057\u3087\u306B\u3057\u308A\u3068\u308A\u3067\u3042\u305D\u3073\u307E\u3057\u3087\u3046")),e.createElement(G,null,e.createElement(O,{role:"button",to:"/game"},"\u3052\u30FC\u3080\u3059\u305F\u30FC\u3068"))))),Ue=we;var Be=({response:t})=>{response.json({name:"Aleph"})};import{serve as At,serveTls as Ft}from"https://deno.land/std@0.144.0/http/server.ts";import{readableStreamFromReader as Ht}from"https://deno.land/std@0.144.0/streams/conversion.ts";import{generateErrorHtml as J,TransformError as We}from"https://deno.land/x/aleph@1.0.0-alpha.71/framework/core/error.ts";import I from"https://deno.land/x/aleph@1.0.0-alpha.71/lib/log.ts";import{getContentType as Ot}from"https://deno.land/x/aleph@1.0.0-alpha.71/lib/mime.ts";import Ge from"https://deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts";import{createContext as $t}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/context.ts";import{DependencyGraph as It}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/graph.ts";import{fixResponse as Je,getAlephPkgUri as Xe,getDeploymentId as jt,globalIt as j,initModuleLoaders as Ut,loadImportMap as ye,loadJSXConfig as Ve,regFullVersion as Bt,setCookieHeader as Ao,toLocalPath as ze}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/helpers.ts";import{loadAndFixIndexHtml as Wt}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/html.ts";import Gt from"https://deno.land/x/aleph@1.0.0-alpha.71/server/renderer.ts";import{fetchRouteData as Jt,initRoutes as Xt,revive as $o}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/routing.ts";import{readableStreamFromReader as kt}from"https://deno.land/std@0.144.0/streams/conversion.ts";import Mt from"https://deno.land/x/aleph@1.0.0-alpha.71/lib/log.ts";import{builtinModuleExts as Dt,getDeploymentId as Nt,regFullVersion as _t}from"https://deno.land/x/aleph@1.0.0-alpha.71/server/helpers.ts";var se={test:t=>t.startsWith("/-/")||Dt.find(r=>t.endsWith(`.${r}`))&&!t.endsWith(".d.ts")||t.endsWith(".css"),fetch:async t=>{let n=Reflect.get(globalThis,"__ALEPH_CONFIG")?.build?.outputDir??"dist",{pathname:s,searchParams:d}=new URL(t.url);switch(s){case"/server.js":case"/server.js.map":case"/server_dependency_graph.js":return new Response("Not Found",{status:404})}try{let p=`./${n}${s}`,c="application/javascript; charset=utf-8";(d.has("module")||s.startsWith("/-/esm.sh/")&&!s.endsWith(".js")&&!s.endsWith(".css"))&&(p+=".js"),s.endsWith(".css")&&!d.has("module")&&(c="text/css; charset=utf-8");let a=new Headers({"Content-Type":c}),y=Nt(),g=null;if(y)g=`W/${btoa(s).replace(/[^a-z0-9]/g,"")}-${y}`;else{let w=await Deno.lstat(p);if(!w.isFile)return new Response("Not Found",{status:404});let{mtime:u,size:l}=w;u&&(g=`W/${u.getTime().toString(16)}-${l.toString(16)}`,a.append("Last-Modified",new Date(u).toUTCString()))}if(g&&t.headers.get("If-None-Match")===g)return new Response(null,{status:304});let S=await Deno.open(p,{read:!0});return g&&a.append("Etag",g),(d.get("v")||s.startsWith("/-/")&&_t.test(s))&&a.append("Cache-Control","public, max-age=31536000, immutable"),new Response(kt(S),{headers:a})}catch(p){return p instanceof Deno.errors.NotFound?new Response("Not Found",{status:404}):(Mt.error(p),new Response("Internal Server Error",{status:500}))}}};var Ke=(t={})=>{let{routes:r,unocss:n,build:s,devServer:d,middlewares:p,fetch:c,ssr:a,logLevel:y,onError:g}=t,S=Deno.env.get("ALEPH_ENV")==="development",w=async(f,M)=>{let T=new URL(f.url),{pathname:v,searchParams:E}=T;if(v==="/-/hmr"){let{socket:o,response:i}=Deno.upgradeWebSocket(f,{});return o.addEventListener("open",()=>{o.send(JSON.stringify({type:"reload"})),setTimeout(()=>{o.close()},50)}),i}let A=[],x=[],h=$t(f,{connInfo:M,customHTMLRewriter:x});if(Array.isArray(p))for(let o=0,i=p.length;o<i;o++){let P=p[o],k=P.fetch;if(typeof k=="function")if(P.eager)try{let R=k(f,h);if(R instanceof Promise&&(R=await R),R instanceof Response)return R;typeof R=="function"&&setTimeout(R,0)}catch(R){let X=g?.(R,{by:"middleware",url:f.url,context:h});return X instanceof Response?X:(I.error(`[middleare${P.name?`(${P.name})`:""}]`,R),new Response(J(R.stack??R.message),{status:500,headers:[["Content-Type","text/html"]]}))}else A.push(P)}if(se.test(v))try{let o=await j("__ALEPH_IMPORT_MAP",ye),i=await j("__ALEPH_JSX_CONFIG",()=>Ve(o));return await se.fetch(f,{importMap:o,jsxConfig:i,buildTarget:s?.target,isDev:S})}catch(o){if(o instanceof We){let i=ze(Xe());return new Response(`import { showTransformError } from "${i}/framework/core/error.ts";showTransformError(${JSON.stringify(o)});`,{headers:[["Content-Type","application/javascript"]]})}if(!(o instanceof Deno.errors.NotFound))return I.error(o),g?.(o,{by:"transplie",url:f.url})??new Response(J(o.stack??o.message),{status:500,headers:[["Content-Type","text/html"]]})}let b=(await j("__ALEPH_MODULE_LOADERS",Ut)).find(o=>o.test(v));if(b)try{let o=await j("__ALEPH_IMPORT_MAP",ye),i=await j("__ALEPH_JSX_CONFIG",()=>Ve(o));return await se.fetch(f,{loader:b,importMap:o,jsxConfig:i,buildTarget:s?.target,isDev:S})}catch(o){if(o instanceof We){let i=ze(Xe());return new Response(`import { showTransformError } from "${i}/framework/core/error.ts";showTransformError(${JSON.stringify(o)});`,{headers:[["Content-Type","application/javascript"]]})}if(!(o instanceof Deno.errors.NotFound))return I.error(o),g?.(o,{by:"transplie",url:f.url})??new Response(J(o.stack??o.message),{status:500,headers:[["Content-Type","text/html"]]})}let N=Ot(v);if(!v.startsWith("/.")&&N!=="application/octet-stream")try{let o=`.${v}`,i=await Deno.lstat(o);if(i.isDirectory&&v!=="/"&&(o=`${Ge.trimSuffix(o,"/")}/index.html`,i=await Deno.lstat(o)),i.isFile){let P=new Headers({"Content-Type":N}),k=jt(),R=null;if(k)R=`W/${btoa(v).replace(/[^a-z0-9]/g,"")}-${k}`;else{let{mtime:K,size:Ye}=i;K&&(R=`W/${K.getTime().toString(16)}-${Ye.toString(16)}`,P.append("Last-Modified",new Date(K).toUTCString()))}if(R){if(f.headers.get("If-None-Match")===R)return new Response(null,{status:304});P.append("ETag",R)}(E.get("v")||Bt.test(v))&&P.append("Cache-Control","public, max-age=31536000, immutable");let X=await Deno.open(o,{read:!0});return new Response(Ht(X),{headers:P})}}catch(o){if(!(o instanceof Deno.errors.NotFound))return I.error(o),g?.(o,{by:"fs",url:f.url})??new Response(J(o.stack??o.message),{status:500,headers:[["Content-Type","text/html"]]})}for(let o of A)try{let i=o.fetch(f,h);if(i instanceof Promise&&(i=await i),i instanceof Response)return i;typeof i=="function"&&setTimeout(i,0)}catch(i){let P=g?.(i,{by:"middleware",url:f.url,context:h});return P instanceof Response?P:(I.error(`[middleare${o.name?`(${o.name})`:""}]`,i),new Response(J(i.stack??i.message),{status:500,headers:[["Content-Type","text/html"]]}))}if(typeof c=="function")return c(f,h);let _=await j("__ALEPH_ROUTES",()=>r?Xt(r):Promise.resolve({routes:[]}));if(_.routes.length>0){let o=f.method==="GET"&&(T.searchParams.has("_data_")||f.headers.get("Accept")==="application/json");try{let i=await Jt(_.routes,T,f,h,o);if(i)return i}catch(i){if(i instanceof TypeError&&!o)return new Response(J(i.stack??i.message),{status:500,headers:[["Content-Type","text/html"]]});let P=g?.(i,{by:"route-data-fetch",url:f.url,context:h});if(P instanceof Response)return Je(P,h.headers,o);if(i instanceof Response)return Je(i,h.headers,o);(i instanceof Error||typeof i=="string")&&I.error(i);let k=Ge.isUint(i.status??i.code)?i.status??i.code:500;return Response.json({...i,status:k,message:i.message??String(i),stack:i.stack},{status:k,headers:h.headers})}}switch(v){case"/favicon.ico":case"/robots.txt":return new Response("Not found",{status:404})}try{let o=await j("__ALEPH_IMPORT_MAP",ye),i=await j("__ALEPH_INDEX_HTML",()=>Wt({isDev:S,importMap:o,ssr:typeof a=="function"?{}:a,hmrWebSocketUrl:t.devServer?.hmrWebSocketUrl}));return Gt.fetch(f,h,{indexHtml:i,routeTable:_,customHTMLRewriter:x,isDev:S,ssr:a})}catch(o){if(o instanceof Response)return o;let i;o instanceof Error?(i=o.stack,I.error("SSR",o)):i=o?.toString?.()||String(o);let P=a&&typeof a!="function"?a.cacheControl:"public";return h.headers.append("Cache-Control",`${P}, max-age=0, must-revalidate`),h.headers.append("Content-Type","text/html; charset=utf-8"),new Response(J(i,"SSR"),{headers:h.headers})}};y&&I.setLevel(y),Reflect.set(globalThis,"__ALEPH_CONFIG",{routes:r,unocss:n,build:s,devServer:d}),Reflect.set(globalThis,"__ALEPH_CLIENT_DEP_GRAPH",new It);let{hostname:u,port:l=8080,certFile:m,keyFile:C,signal:L}=t;Deno.env.get("ALEPH_CLI")?Reflect.set(globalThis,"__ALEPH_SERVER",{hostname:u,port:l,certFile:m,keyFile:C,handler:w,signal:L}):(m&&C?Ft(w,{hostname:u,port:l,certFile:m,keyFile:C,signal:L}):At(w,{hostname:u,port:l,signal:L}),I.info(`Server ready on http://localhost:${l}`))};import{renderToReadableStream as Vt}from"https://esm.sh/react-dom@18.1.0/server";Ke({routes:"./src/pages/**/*.{tsx,ts}",ssr:{dataDefer:!1,render:t=>Vt(e.createElement(le,{ssrContext:t}),t)}});globalThis.__ALEPH_SERVER_DEP_GRAPH=new zt(Kt.modules);Q("./src/pages/_404.tsx",{E404:pe,default:Ae});Q("./src/pages/_app.tsx",{App:fe,default:Fe});Q("./src/pages/game.tsx",{data:Ie,Game:ge,default:je});Q("./src/pages/index.tsx",{Index:we,default:Ue});Q("./src/pages/api/user.ts",{handler:Be});
//# sourceMappingURL=server.js.map
