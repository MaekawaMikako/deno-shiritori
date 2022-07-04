import c from "/-/deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts?v=181c93324c9";
import a from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/events.ts?v=181c93324c9";
let d = !1,
  e = null,
  b = (c) => {
    a.off("routerready", b),
      e && (a.emit("popstate", { type: "popstate", url: e }), (e = null)),
      (d = !0);
  };
a.on("routerready", b);
export function redirect(b, i) {
  let { history: h, location: f } = globalThis;
  if (!c.isFilledString(b) || !h || !f) return;
  if (
    b.startsWith("file://") ||
    b.startsWith("mailto:") ||
    b.startsWith("data:")
  ) {
    f.href = b;
    return;
  }
  let g = new URL(b, f.href);
  if (g.href !== f.href) {
    if (g.host !== f.host) {
      f.href = b;
      return;
    }
    i ? h.replaceState(null, "", g) : h.pushState(null, "", g),
      d ? a.emit("popstate", { type: "popstate", url: g }) : (e = g);
  }
}
