import{Children as a,createElement as b,Fragment as c,isValidElement as d,useContext as e,useEffect as f,useMemo as g}from"/-/esm.sh/react@18.1.0?v=181ca4ae204";import h from"/-/deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts?v=181ca4ae204";import{RouterContext as i}from"/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/context.ts?v=181ca4ae204";export const Head=d=>{let{ssrHeadCollection:k}=e(i),[a,l]=g(()=>j(d.children),[d.children,]);return k&&a.forEach(({type:b,props:d})=>{let{children:a,...e}=d;if("title"===b)h.isFilledString(a)?k.push(`<title ssr>${a}</title>`):h.isFilledArray(a)&&k.push(`<title ssr>${a.join("")}</title>`);else{let c=Object.entries(e).map(([a,b])=>` ${a}=${JSON.stringify(b)}`).join("");h.isFilledString(a)?k.push(`<${b}${c} ssr>${a}</${b}>`):h.isFilledArray(a)?k.push(`<${b}${c} ssr>${a.join("")}</${b}>`):k.push(`<${b}${c} ssr>`);}}),f(()=>{let{document:b}=window,c=[];return a.length>0&&a.forEach(({type:d,props:e})=>{let a=b.createElement(d);Object.keys(e).forEach(c=>{let b=e[c];"children"===c?h.isFilledString(b)?a.innerText=b:h.isFilledArray(b)&&(a.innerText=b.join("")):a.setAttribute(c,String(b||""));}),b.head.appendChild(a),c.push(a);}),()=>{c.forEach(a=>b.head.removeChild(a));};},[a]),b(c,null,...l);};function j(b){let e=[],f=b=>{a.forEach(b,g=>{if(!d(g))return;let{type:a,props:b}=g;switch(a){case c:f(b.children);break;// case InlineStyle:
//   forwardNodes.push(createElement(InlineStyle, props));
//   break;
// ingore `script` and `no-script` tag
case"base":case"title":case"meta":case"link":case"style":// remove the children prop of base/meta/link elements
if(["base","meta","link"].includes(a)&&"children"in b){let{children:i,...h}=b;e.push({type:a,props:h});}else e.push({type:a,props:b});}});};return f(b),[e,[]];}