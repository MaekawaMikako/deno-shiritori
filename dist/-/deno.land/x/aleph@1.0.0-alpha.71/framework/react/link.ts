import {
  createElement as a,
  useCallback as b,
  useEffect as c,
  useMemo as d,
  useRef as e,
} from "/-/esm.sh/react@18.1.0?v=181c93324c9";
import f from "/-/deno.land/x/aleph@1.0.0-alpha.71/lib/util.ts?v=181c93324c9";
import g from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/events.ts?v=181c93324c9";
import { redirect as h } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/redirect.ts?v=181c93324c9";
import { useRouter as i } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/router.ts?v=181c93324c9";
let j = new Set();
/**
 * The `<Link>` component to link between pages.
 */ export function Link(m) {
  let {
      to: n,
      prefetch: o,
      replace: y,
      className: p,
      style: q,
      onClick: z,
      onMouseEnter: A,
      onMouseLeave: B,
      "aria-current": r,
      children: s,
      innerRef: t,
      ...u
    } = m,
    {
      url: { pathname: v },
    } = i(),
    l = d(() => {
      if (!f.isFilledString(n)) throw Error("<Link>: prop `to` is required.");
      if (f.isLikelyHttpURL(n)) return n;
      let [a, b] = f.splitBy(n, "?");
      return [
        (a = a.startsWith("/") ? f.cleanPath(a) : f.cleanPath(v + "/" + a)),
        b,
      ]
        .filter(Boolean)
        .join("?");
    }, [v, n]),
    w = d(
      () => (f.isFilledString(r) ? r : l.startsWith("/") ? "page" : void 0),
      [l, r]
    ),
    x = b(() => {
      f.isLikelyHttpURL(l) ||
        j.has(l) ||
        (g.emit("moduleprefetch", { href: l }), j.add(l));
    }, [l]),
    C = e(null);
  return (
    c(
      () => (
        o && x(),
        () => {
          C.current && (clearTimeout(C.current), (C.current = null));
        }
      ),
      [o, x]
    ),
    a(
      "a",
      {
        ...u,
        className: p,
        style: q,
        href: l,
        onClick: (a) => {
          "function" == typeof z && z(a),
            !(a.defaultPrevented || k(a)) && (a.preventDefault(), h(l, y));
        },
        onMouseEnter: (a) => {
          "function" == typeof A && A(a),
            !a.defaultPrevented &&
              (C.current ||
                j.has(l) ||
                (C.current = setTimeout(() => {
                  (C.current = null), x();
                }, 150)));
        },
        onMouseLeave: (a) => {
          "function" == typeof B && B(a),
            !a.defaultPrevented &&
              C.current &&
              (clearTimeout(C.current), (C.current = null));
        },
        "aria-current": w,
        ref: t,
      },
      s
    )
  );
}
/**
 * A special version of the `<Link>` that will add styling attributes to the rendered element when it matches the current URL.
 */ export function NavLink(h) {
  let {
      to: c,
      exact: j,
      className: k,
      style: l,
      activeStyle: m,
      activeClassName: n,
      ...o
    } = h,
    { url: e } = i(),
    b = d(() => {
      if (!f.isFilledString(c)) return !1;
      let [d, g] = f.splitBy(c, "?"),
        a = f.trimSuffix(e.pathname, "/"),
        b;
      return ((b = d.startsWith("/")
        ? f.cleanPath(d)
        : f.cleanPath(a + "/" + d)),
      j)
        ? b === a && g === e.searchParams.toString()
        : b === a || a.startsWith(b + "/");
    }, [e.pathname, e.searchParams, c, j]),
    p = d(
      () => (b && n ? [k, n].filter(f.isFilledString).join(" ") : k),
      [k, n, b]
    ),
    q = d(() => (b && m ? Object.assign({}, l, m) : l), [l, m, b]),
    g = { ...o, to: c, className: p, style: q };
  return b && Object.assign(g, { "data-active": "true" }), a(Link, g);
}
function k(a) {
  let { target: b } = a.currentTarget,
    c = a.nativeEvent;
  return (
    (b && "_self" !== b) ||
    a.metaKey ||
    a.ctrlKey ||
    a.shiftKey ||
    a.altKey ||
    (c && 2 === c.which)
  );
}
