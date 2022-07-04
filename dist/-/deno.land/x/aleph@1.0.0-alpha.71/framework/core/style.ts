// deno-lint-ignore-file ban-ts-comment
export function applyCSS(e, f) {
  let { document: a } = globalThis;
  if (a) {
    let c = Array.from(a.head.children).find(
      (a) => a.getAttribute("data-module-id") === e && a.hasAttribute("ssr")
    );
    if (c)
      // apply the css at next time
      c.removeAttribute("ssr");
    else {
      let d = Array.from(a.head.children).filter(
          (a) => a.getAttribute("data-module-id") === e
        ),
        b = a.createElement("style");
      b.setAttribute("data-module-id", e),
        b.appendChild(a.createTextNode(f)),
        a.head.appendChild(b),
        d.length > 0 && d.forEach((b) => a.head.removeChild(b));
    }
  }
}
export function applyUnoCSS(w, n) {
  let d = null;
  if (globalThis.document?.styleSheets) {
    for (let h of document.styleSheets)
      if (h.ownerNode && h.ownerNode.hasAttribute("data-unocss")) {
        d = h;
        break;
      }
  }
  if (d) {
    let o = f(n);
    if (o) {
      let p = new Set(),
        i = new Map();
      for (let j of d.cssRules) {
        // @ts-ignore
        let { cssText: x, media: y, cssRules: q } = j;
        if ((y || x.startsWith("@media")) && q) {
          let z = c(j);
          i.set(z, q);
        }
        p.add(b(j));
      }
      for (let k of o.cssRules) {
        // @ts-ignore
        let { cssText: l, media: A, cssRules: r } = k;
        if ((A || l.startsWith("@media")) && r) {
          let g = c(k);
          if (i.has(g)) {
            let s = new Set(),
              m = [];
            for (let t of i.get(g)) s.add(b(t)), m.push(e(t.cssText));
            let u = !1;
            for (let v of r) s.has(b(v)) || (m.push(e(v.cssText)), (u = !0));
            u && a(d, g, `@media ${g} {${m.join("\n")}}`);
          } else a(d, g, l);
        } else p.has(b(k)) || d.insertRule(e(l), d.cssRules.length);
      }
      return;
    }
  } // fallback to create a new style element
  applyCSS(w, n);
}
function a(a, e, f) {
  // delete the old media rule
  for (let b = 0; b < a.cssRules.length; b++) {
    let d = a.cssRules[b]; // @ts-ignore
    if (d.media || d.cssText.startsWith("@media")) {
      let g = c(d);
      if (g === e) {
        a.deleteRule(b);
        break;
      }
    }
  } // insert the new media rule at the end
  a.insertRule(f, a.cssRules.length);
}
function b(a) {
  // @ts-ignore
  return a.selectorText || a.cssText.split("{")[0].trim();
}
function c(a) {
  // @ts-ignore
  return a.conditionText || a.cssText.substring(6, cssText.indexOf("{")).trim();
}
let d =
  globalThis.document &&
  /Chrome/.test(navigator.userAgent) &&
  /Google Inc/.test(navigator.vendor);
function e(a) {
  return (
    // fix chrome dropping `mask` webkit prefix
    d && a.startsWith(".i-") ? a.replace(/(mask:[^;]+;)/, "$1-webkit-$1") : a
  );
}
function f(c) {
  try {
    let d = new CSSStyleSheet();
    return (
      // @ts-ignore
      d.replaceSync(c), d
    );
  } catch (e) {
    let a = document.createElement("style");
    for (let b of (a.appendChild(document.createTextNode(c)),
    (a.media = "(max-width: 1px)"),
    document.head.appendChild(a),
    setTimeout(() => {
      document.head.removeChild(a);
    }, 0),
    document.styleSheets))
      if (b.ownerNode === a) return (b.disabled = !1), b;
  }
  return console.warn("The browser does not support CSSStyleSheet!"), null;
}
