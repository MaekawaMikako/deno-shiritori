import { applyCSS } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/style.ts";
export const css =
  ".index h1{text-align:center;color:var(--color-brack);font-family:AiShiroYukiguni_Free-Regular;font-size:80px;font-weight:400}.index p{text-align:center;color:var(--color-dark-gray);padding:48px 0;font-size:16px;line-height:2}.index .top-contents-container{flex-direction:column;justify-content:space-between;align-items:center;display:flex}";
export default {};
applyCSS("./src/styles/index.css", css);
