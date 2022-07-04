import { jsx as c } from "/-/esm.sh/react@18.1.0/jsx-runtime?v=181c93324c9";
function i(t, o) {
  let { document: e } = globalThis;
  if (e) {
    let n = Array.from(e.head.children).find(
      (r) => r.getAttribute("data-module-id") === t && r.hasAttribute("ssr")
    );
    if (n) n.removeAttribute("ssr");
    else {
      let r = Array.from(e.head.children).filter(
          (l) => l.getAttribute("data-module-id") === t
        ),
        s = e.createElement("style");
      s.setAttribute("data-module-id", t),
        s.appendChild(e.createTextNode(o)),
        e.head.appendChild(s),
        r.length > 0 && r.forEach((l) => e.head.removeChild(l));
    }
  }
}
var d =
  globalThis.document &&
  /Chrome/.test(navigator.userAgent) &&
  /Google Inc/.test(navigator.vendor);
var a =
  "*{--color-brack:#333;--color-dark-gray:#454545;--color-gray:#6e6e6e;--color-light-gray:#c3c3c3;--color-white:#fff}button{justify-content:center;align-items:center;padding-top:32px;display:flex}button a{width:293px;height:50px;border:1px solid var(--color-light-gray);color:var(--color-gray);cursor:pointer;border-radius:100px;justify-content:center;align-items:center;text-decoration:none;transition:border-color .15s ease-in;display:inline-flex}button a:hover{border:1px solid var(--color-gray);color:var(--color-dark-gray)}";
i("./src/components/button/style.css", a);
var g = ({ children: t, onClick: o, className: e }) =>
  c("button", { onClick: o, className: e, children: t });
export { g as Button };
