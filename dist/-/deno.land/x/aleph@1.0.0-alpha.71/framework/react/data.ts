import{createElement as a,useCallback as b,useContext as c,useEffect as d,useMemo as e,useRef as f,useState as g}from"/-/esm.sh/react@18.1.0?v=181ca2059a1";import{FetchError as h}from"/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/error.ts?v=181ca2059a1";import{DataContext as i}from"/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/context.ts?v=181ca2059a1";export const DataProvider=({dataUrl:c,dataCache:r,children:l})=>{let m=f(),[n,s]=g(()=>{let a=r.get(c);if(a){if("function"==typeof a.data){let b=a.data();if(b instanceof Promise)return b.then(a=>{r.set(c,{data:a}),m.current=a;}).catch(a=>{r.set(c,{data:a}),m.current=a;});throw Error(`Data for ${c} has invalid type [function].`);}return a.data;}throw Error(`Data for ${c} is not found`);}),[o,t]=g(!1),u=b(async(m,n,a)=>{let g=a&&"object"==typeof a&&null!==a,f=g&&"function"==typeof a.optimisticUpdate,o="replace"===a||g&&!!a.replace,d;if(f){let p=a.optimisticUpdate;s(a=>void 0!==a?(d=a,p(k(a))):a);}t(m);let b=await n;if(b.status>=400){let e=await h.fromResponse(b),i=e.details;if(501===e.status&&"string"==typeof i.redirect?.location)return location.href=i.redirect?.location,b;if(f)return void 0!==d&&s(d),a.onFailure&&a.onFailure(e),t(!1),b;throw e;}if(o&&b.ok)try{let j=await b.json(),l=r.get(c)?.dataCacheTtl;r.set(c,{data:j,dataCacheTtl:l,dataExpires:Date.now()+1e3*(l||1)}),s(j);}catch(q){f&&(void 0!==d&&s(d),a.onFailure&&a.onFailure(new h(500,"Data must be valid JSON")));}return t(!1),b;},[c]),p=b(async g=>{try{let a=await fetch(c+(c.includes("?")?"&":"?")+"_data_",{headers:[["Accept","application/json"]],signal:g});if(!a.ok){let b=await h.fromResponse(a),e=b.details;throw 501===b.status&&"string"==typeof e.redirect?.location&&(location.href=e.redirect?.location,await new Promise(()=>{})),b;}try{let f=await a.json(),d=a.headers.get("Cache-Control"),i=d&&d.includes("max-age=")?parseInt(d.split("max-age=")[1]):void 0,j=Date.now()+1e3*(i||1);r.set(c,{data:f,dataExpires:j}),s(f);}catch(l){throw new h(500,"Data must be valid JSON");}}catch(k){throw Error(`Failed to reload data for ${c}: ${k.message}`);}},[c]),q=e(()=>({post:(a,b)=>u("post",j("post",c,a),b??"none"),put:(a,b)=>u("put",j("put",c,a),b??"none"),patch:(a,b)=>u("patch",j("patch",c,a),b??"none"),delete:(a,b)=>u("delete",j("delete",c,a),b??"none")}),[c]);return d(()=>{let d=Date.now(),a=r.get(c),b=null;return void 0===a|| void 0!==a.data&&(void 0===a.dataExpires||a.dataExpires<d)?(b=new AbortController,p(b.signal).finally(()=>{b=null;})):void 0!==a.data&&s(a.data),()=>b?.abort();},[c]),a(i.Provider,{value:{deferedData:m,data:n,isMutating:o,mutation:q,reload:p}},l);};export const useData=()=>{let{deferedData:b,data:a,...d}=c(i);if(a instanceof Error)throw a;if(a instanceof Promise){if(b?.current instanceof Error)throw b.current;if(b?.current!==void 0)return{...d,data:b.current};throw a;}return{data:a,...d};};function j(d,e,a){let b,c=new Headers([["Accept","application/json"]]);return"string"==typeof a?b=a:"number"==typeof a?b=a.toString():"object"==typeof a&&(a instanceof ArrayBuffer||a instanceof Uint8Array?b=a:a instanceof FormData?b=a:a instanceof URLSearchParams?b=a:a instanceof Blob?(b=a,c.append("Content-Type",a.type)):(b=JSON.stringify(a),c.append("Content-Type","application/json; charset=utf-8"))),fetch(e,{method:d,body:b,headers:c});}function k(a){return null===a||"object"!=typeof a?a:Array.isArray(a)?[...a]:{...a};}