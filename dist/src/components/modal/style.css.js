import { applyCSS } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/style.ts";
export const css =
  "*{--color-brack:#333;--color-dark-gray:#454545;--color-gray:#6e6e6e;--color-light-gray:#c3c3c3;--color-white:#fff}.overlay{width:100%;height:100%;background-color:rgba(0,0,0,.5);justify-content:center;align-items:center;display:flex;position:fixed;top:0;left:0}.body{z-index:2;width:30%;background-color:var(--color-white);border-radius:40px;padding:64px}.header{flex-direction:row;justify-content:space-between;align-items:center;display:flex}.title{font-family:AiShiroYukiguni_Free-Regular;font-size:40px}.close{cursor:pointer;justify-content:center;align-items:center;padding:12px;display:flex}.content{color:var(--color-dark-gray);padding-top:64px;font-size:18px;line-height:1.6}";
export default {};
applyCSS("./src/components/modal/style.css", css);
