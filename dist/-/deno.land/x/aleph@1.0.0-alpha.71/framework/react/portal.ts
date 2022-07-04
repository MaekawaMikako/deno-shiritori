import{useContext as a,useEffect as b,useState as c}from"/-/esm.sh/react@18.1.0?v=181ca4ae204";import{RouterContext as d}from"/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/context.ts?v=181ca4ae204";/**
 *  The `usePortal` hook to create a portal helper.
 *  Please ensure to pass the `React.createPortal` in `Router` props.
 *
 *  ```jsx
 *  function Modal() {
 *    const portal = usePortal({ preventScroll: true });
 *    return portal(<p>Hello portal!</p>);
 *  }
 *  ```
 */ export function usePortal(e){let{key:f,className:g,preventScroll:h}=e||{},{createPortal:i}=a(d),[j,k]=c(null);if(b(()=>{let a=document.body.style,c=a.overflow,d=a.overflowX,e=a.overflowY;h&&(a.overflow="hidden",a.overflowX="hidden",a.overflowY="hidden");let b=document.createElement("div");return f&&(b.id=f),b.className=g??"portal-root",document.body.appendChild(b),k(b),()=>{k(null),document.body.removeChild(b),h&&(a.overflow=c,a.overflowX=d,a.overflowY=e);};},[f,g,h]),!j)return()=>null;if(!i)throw Error("Please ensure to pass the `React.createPortal` in `Router` props");return a=>i(a,j,f);}