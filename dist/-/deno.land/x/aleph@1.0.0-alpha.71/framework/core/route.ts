import a from "/-/deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts?v=181c93324c9";
import { createStaticURLPatternResult as b } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/url_pattern.ts?v=181c93324c9";
/** match routes against the given url */ export function matchRoutes(d, t) {
  let { routes: f, _app: h, _404: i } = t,
    { pathname: e } = d;
  "/" !== e && (e = a.trimSuffix(e, "/"));
  let c = [];
  if (f.length > 0) {
    // find the direct match
    for (let [u, j] of f) {
      let { pathname: k } = j.pattern;
      if ("/_app" !== k && "/_404" !== k) {
        let l = u.exec({ host: d.host, pathname: e });
        if (l) {
          c.push([l, j]);
          break;
        }
      }
    }
    if (0 === c.length) {
      // find index route
      for (let [v, m] of f)
        if (m.pattern.pathname.endsWith("/index")) {
          let n = v.exec({ host: d.host, pathname: e + "/index" });
          if (n) {
            c.push([n, m]);
            break;
          }
        }
    }
    if (c.length > 0) {
      let o = c[c.length - 1][1],
        p = a.splitPath(e),
        w = f.filter(
          ([b, a]) =>
            a.nesting &&
            "/_app" !== a.pattern.pathname &&
            o.pattern.pathname.startsWith(a.pattern.pathname + "/")
        ); // lookup nesting parent
      for (let g = p.length - 1; g > 0; g--) {
        let x = "/" + p.slice(0, g).join("/");
        for (let [y, z] of w) {
          let q = y.exec({ host: d.host, pathname: x });
          if (q) {
            c.unshift([q, z]);
            break;
          }
        }
      }
      if (o.nesting) {
        // find index route
        for (let [A, r] of f)
          if (r.pattern.pathname === o.pattern.pathname + "/index") {
            let s = A.exec({ host: d.host, pathname: e + "/index" });
            if (s) {
              c.push([s, r]);
              break;
            }
          }
      }
    }
    i &&
      (0 === c.length || 0 === c.filter(([b, a]) => !a.nesting).length) &&
      c.push([b(d.host, "/_404"), i[1]]),
      h && c.length > 0 && c.unshift([b(d.host, "/_app"), h[1]]);
  }
  return c;
}
