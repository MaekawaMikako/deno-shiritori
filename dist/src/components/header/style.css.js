import { applyCSS } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/style.ts";export const css = "*{--color-brack:#333;--color-dark-gray:#454545;--color-gray:#6e6e6e;--color-light-gray:#c3c3c3;--color-white:#fff}header{width:100%;height:120px;font-family:AiShiroYukiguni_Free-Regular;position:fixed;top:0;left:0}header div{width:90%;height:100%;justify-content:flex-start;align-items:center;margin:0 auto;display:flex}header a{color:var(--color-dark-gray);cursor:pointer;font-size:16px;text-decoration:none;display:inline-flex}header a:hover{color:var(--color-brack)}";export default {};applyCSS("./src/components/header/style.css", css);