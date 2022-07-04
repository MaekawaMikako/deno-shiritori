import { applyCSS } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/style.ts";
export const css =
  "*{--color-brack:#333;--color-dark-gray:#454545;--color-gray:#6e6e6e;--color-light-gray:#c3c3c3;--color-white:#fff}button{justify-content:center;align-items:center;padding-top:32px;display:flex}button a{width:293px;height:50px;border:1px solid var(--color-light-gray);color:var(--color-gray);cursor:pointer;border-radius:100px;justify-content:center;align-items:center;text-decoration:none;transition:border-color .15s ease-in;display:inline-flex}button a:hover{border:1px solid var(--color-gray);color:var(--color-dark-gray)}";
export default {};
applyCSS("./src/components/button/style.css", css);
