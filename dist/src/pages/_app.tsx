import{jsx as u,jsxs as m,Fragment as g}from"/-/esm.sh/react@18.1.0/jsx-runtime?v=181ca529b76";import{jsx as r}from"/-/esm.sh/react@18.1.0/jsx-runtime?v=181ca529b76";import{Link as f}from"/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/mod.ts?v=181ca529b76";function i(t,c){let{document:e}=globalThis;if(e){let s=Array.from(e.head.children).find(o=>o.getAttribute("data-module-id")===t&&o.hasAttribute("ssr"));if(s)s.removeAttribute("ssr");else{let o=Array.from(e.head.children).filter(a=>a.getAttribute("data-module-id")===t),n=e.createElement("style");n.setAttribute("data-module-id",t),n.appendChild(e.createTextNode(c)),e.head.appendChild(n),o.length>0&&o.forEach(a=>e.head.removeChild(a))}}}var x=globalThis.document&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);var d="*{--color-brack:#333;--color-dark-gray:#454545;--color-gray:#6e6e6e;--color-light-gray:#c3c3c3;--color-white:#fff}header{width:100%;height:120px;font-family:AiShiroYukiguni_Free-Regular;position:fixed;top:0;left:0}header div{width:90%;height:100%;justify-content:flex-start;align-items:center;margin:0 auto;display:flex}header a{color:var(--color-dark-gray);cursor:pointer;font-size:16px;text-decoration:none;display:inline-flex}header a:hover{color:var(--color-brack)}";i("./src/components/header/style.css",d);function l(){return r("header",{children:r("div",{children:r("h1",{children:r("a",{children:r(f,{to:"/",children:"\u3067\u3043\u30FC\u306E\u3057\u308A\u3068\u308A"})})})})})}var p='*{font:inherit;vertical-align:baseline;background:0 0;border:none;margin:0;padding:0;font-size:100%}body{font-family:Arial,UmiYamaLogoGothicFreeVer-R,Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,-apple-system,Segoe UI,Roboto,Helvetica,sans-serif,Apple Color Emoji,Segoe UI Emoji;font-size:16px}@font-face{font-family:AiShiroYukiguni_Free-Regular;src:url("../../public/fonts/AiShiroYukiguni_Free-Regular.otf")format("otf");font-family:UmiYamaLogoGothicFreeVer-R;src:url("../../public/fonts/UmiYamaLogoGothicFreeVer-R.otf")format("otf")}.index h1{text-align:center;color:var(--color-brack);font-family:AiShiroYukiguni_Free-Regular;font-size:80px;font-weight:400}.index p{text-align:center;color:var(--color-dark-gray);padding:48px 0;font-size:16px;line-height:2}.index .top-contents-container{flex-direction:column;justify-content:space-between;align-items:center;display:flex}.game .recent-words-container{flex-direction:column;align-items:flex-start;display:flex}.game .recent-words{margin-top:-16px}.game .recent-word{color:var(--color-dark-gray);padding-top:16px;font-size:16px}.game .most-recent-word{color:var(--color-brack);width:640px;padding:32px 0;font-size:32px}.game .most-recent-word span{font-family:AiShiroYukiguni_Free-Regular}.game .timer{width:120px;height:120px;background:var(--color-white);border:1px solid var(--color-light-gray);border-radius:60px;justify-content:center;align-items:center;display:flex}.game .time{color:var(--color-dark-gray);flex-direction:column;align-items:center;font-size:16px;display:flex}.game .time span{color:var(--color-brack);font-size:32px}.game .container{width:100%;flex-direction:row;justify-content:space-between;align-items:center;display:flex}.game form{box-sizing:border-box;flex-direction:column;align-items:center;display:flex}.game form input{width:602px;color:var(--color-gray);border:1px solid var(--color-light-gray);border-radius:100px;outline:none;padding:12px 18px;font-size:16px;font-weight:300;display:block}.game form input:focus{border:1px solid var(--color-gray);outline:none}.game form input::placeholder{color:var(--color-light-gray);font-weight:300}.game .game-over-buttons{flex-direction:column;align-items:center;padding-top:64px;display:flex}.game .buttons{flex-direction:row;justify-content:space-between;align-items:center;display:flex}.index .game-contents-container{flex-direction:column;justify-content:space-between;align-items:center;display:flex}a{text-decoration:none}.screen{width:640px;height:calc(100vh - 40px);flex-direction:column;justify-content:center;align-items:center;margin:auto;display:flex}.e404 h2{font-size:24px;font-weight:500}.e404 p{margin-top:8px}.e404 p a{color:#999;text-decoration:none}.e404 p a:hover{text-decoration:underline}';i("./src/styles/app.css",p);var h=({children:t})=>m(g,{children:[u(l,{}),t]}),F=h;export{h as App,F as default};
