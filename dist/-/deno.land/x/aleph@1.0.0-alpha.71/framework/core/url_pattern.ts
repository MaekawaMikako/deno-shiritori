import a from"/-/deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts?v=181ca2059a1";/**
 * A class uses the `URLPattern` class to parse and match URLs if the browser supports it,
 * or fallback to use the `execPathname` function.
 */ export class URLPatternCompat{static execPathname(i,h){let d=a.splitPath(i),e=a.splitPath(h),j=Math.max(d.length,e.length),f={};for(let c=0;c<j;c++){let b=d[c],g=e[c];if(void 0===g|| void 0===b)return null;if(b.startsWith(":")&&b.length>1){if(b.endsWith("+")&&b.length>2&&c===d.length-1){f[b.slice(1,-1)]=e.slice(c).map(decodeURIComponent).join("/");break;}f[b.slice(1)]=decodeURIComponent(g);}else if(b!==g)return null;}return{pathname:{input:h,groups:f}};}test(c){let{pattern:b}=this;return"function"==typeof b.test?b.test(c):(!a.isFilledString(b.host)||b.host===c.host)&&!!a.isFilledString(b.pathname)&&null!==URLPatternCompat.execPathname(b.pathname,c.pathname);}exec(c){let{pattern:b}=this;if("function"==typeof b.exec)return b.exec(c);if(a.isFilledString(b.host)&&b.host!==c.host)return null;if(a.isFilledString(b.pathname)){let d=URLPatternCompat.execPathname(b.pathname,c.pathname);if(d)return{...d,host:{input:c.host,groups:{}}};}return null;}constructor(a){this.pattern=void 0,"URLPattern"in globalThis?this.pattern=new URLPattern(a):this.pattern=a;}}export function createStaticURLPatternResult(a,b){return{host:{input:a,groups:{}},pathname:{input:b,groups:{}}};}