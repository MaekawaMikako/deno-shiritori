import{VERSION as b}from"/-/deno.land/x/aleph@1.0.0-alpha.71/version.ts?v=181c93324c9";export class FetchError extends Error{static async fromResponse(d){let e=d.status,a=await d.text(),c={};if(a.startsWith("{")&&a.endsWith("}"))try{let h=JSON.parse(a),{status:f,message:g,details:b,...i}=h;"number"==typeof f&&(e=f),"string"==typeof g&&(a=g),null===b||"object"!=typeof b||Array.isArray(b)||Object.assign(c,b),Object.assign(c,i);}catch(j){// ignore
}return new FetchError(e,a,c);}constructor(a,b,c,d){super(b,d),this.status=void 0,this.details=void 0,this.status=a,this.details=c??{};}}export class TransformError{constructor(a,b,c,d){this.specifier=void 0,this.sourceCode=void 0,this.message=void 0,this.stack=void 0,this.specifier=a,this.sourceCode=b,this.message=c,this.stack=d;}}let c=`
.aleph--error-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
}
.aleph--error-modal .box {
  box-sizing: border-box;
  position: relative;
  max-width: 80%;
  max-height: 90%;
  overflow: auto;
  padding: 24px 30px;
  border-radius: 12px;
  border: 2px solid rgba(255, 0, 0, 0.8);
}
.aleph--error-modal pre {
  margin: 0;
  position: relative;
  line-height: 1.4;
}
.aleph--error-modal pre.source {
  margin: 8px 0;
  padding: 12px 0;
  line-height: 1.2;
  background: #f6f6f6;
}
.aleph--error-modal code {
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: 14px;
  color: rgba(255, 0, 0, 1);
}
.aleph--error-modal .actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
}
.aleph--error-modal .actions button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: #333;
  cursor: pointer;
}
.aleph--error-modal .actions button:hover {
  border-color: #aaa;
  background-color: rgba(255,255,255,0.9);
}
.aleph--error-modal .actions span {
  font-size: 14px;
  line-height: 1;
  color: #454545;
}
.aleph--error-modal .help-links {
  margin: 0;
  margin-top: 21px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 1;
  color: #bbb;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}
.aleph--error-modal .help-links strong {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  color: #333;
}
.aleph--error-modal .help-links a {
  color: teal;
  text-decoration: none;
}
.aleph--error-modal .help-links a:hover {
  text-decoration: underline;
}
`,d=`
<div class="help-links">
  <strong>Aleph.js ${b}</strong>
  /
  <a href="https://alephjs.org/docs/error-handling" target="_blank">Documentation</a>
  &middot;
  <a href="https://github.com/alephjs/aleph.js/issues/new" target="_blank">Open Issue</a>
  &middot;
  <a href="https://discord.com/channels/775256646821085215/775259756041601044" target="_blank">Discord Help Channel</a>
</div>
`,e=/(http:\/\/localhost:60\d{2}\/.+)(:\d+:\d+)/;function f(a,b){return a.split("\n").map((a,d)=>{let c=a.match(e);if(c){let f=new URL(c[1]);a=a.replace(c[0],`.${f.pathname}${c[2]}`);}return 0===d?b?`<strong>${b} ${a}</strong>`:`<strong>${a}</strong>`:a;}).join("\n");}function g(c,b,d){let a=c.replaceAll("<","&lt;").replaceAll(">","&gt;").split(/\r?\n/).map((a,b)=>String(1+b).padStart(4," ")+" | "+a),e=" ".repeat(4)+" | "+" ".repeat(d)+"^";return(a=a.slice(b-3,b+2)).splice(3,0,e),a.join("\n");}export function generateErrorHtml(b,a){return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${a??""} Error - Aleph.js</title>
    <style>
      body {
        overflow: hidden;
      }
      ${c}
    </style>
  </head>
  <body>
    <div class="aleph--error-modal">
      <div class="box">
        <pre><code>${f(b,a)}</code></pre>
        <div class="actions">
          <button onclick="location.reload()">Reload</button>
          <button onclick="navigator.clipboard.writeText(document.querySelector('code').innerText).then(()=>{const ss=document.querySelector('.actions > span').style;ss.display='inline';setTimeout(()=>ss.display='none',2000)})">Copy</button>
          <span style="display:none;">Copied!</span>
        </div>
        ${d}
      </div>
    </div>
  </body>
</html>
`;}export function showTransformError(a){let e=f(a.message),h=a.stack.split("\n").slice(1).filter(a=>!a.includes("wasm://wasm")).join("\n"),c=a.message.split(`${a.specifier.replace("\\","\\\\")}:`)[1]?.split("\n")[0]?.split(":").map(a=>parseInt(a)),i=g(a.sourceCode,c[0],c[1]),b=document.createElement("div");b.setAttribute("data-specifier",a.specifier),b.className="aleph--error-modal transform-error",b.innerHTML=`
    <div class="box">
      <pre><code>${e}</code></pre>
      <pre class="source"><code>${i}</code></pre>
      <pre><code>${h}</code></pre>
      ${d}
    </div>
  `,document.body.appendChild(b);}if(globalThis.document){let a=document.createElement("style");a.appendChild(document.createTextNode(c)),document.head.appendChild(a);}