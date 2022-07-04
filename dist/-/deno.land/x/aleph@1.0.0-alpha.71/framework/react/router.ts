import {
  createElement as a,
  StrictMode as b,
  Suspense as c,
  useContext as d,
  useEffect as e,
  useMemo as f,
  useState as g,
} from "/-/esm.sh/react@18.1.0?v=181c93324c9";
import h from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/events.ts?v=181c93324c9";
import { FetchError as i } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/error.ts?v=181c93324c9";
import { redirect as j } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/redirect.ts?v=181c93324c9";
import { matchRoutes as k } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/route.ts?v=181c93324c9";
import { URLPatternCompat as l } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/url_pattern.ts?v=181c93324c9";
import {
  ForwardPropsContext as m,
  RouterContext as n,
} from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/context.ts?v=181c93324c9";
import { DataProvider as o } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/data.ts?v=181c93324c9";
import {
  Err as p,
  ErrorBoundary as q,
} from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/error.ts?v=181c93324c9"; // deno-lint-ignore no-explicit-any
let r = window;
/** The `Router` component for react. */ export const Router = (j) => {
  let { ssrContext: d, dataDefer: A, strictMode: m, createPortal: o } = j,
    [q, B] = g(() => d?.url || new URL(window.location?.href)),
    [c, C] = g(() => d?.routeModules || v()),
    y = f(() => {
      let a = new Map();
      return (
        c.forEach(({ url: b, data: c, dataCacheTtl: d }) => {
          let e = b.pathname + b.search;
          c instanceof Promise
            ? a.set(b.href, { data: u(a, e, !0) })
            : a.set(e, {
                data: c,
                dataCacheTtl: d,
                dataExpires: Date.now() + 1e3 * (d || 1),
              });
        }),
        a
      );
    }, []),
    z = f(() => {
      let a = {};
      return (
        c.forEach((b) => {
          Object.assign(a, b.params);
        }),
        a
      );
    }, [c]);
  if (
    (e(() => {
      let { head: c, body: a } = window.document,
        g = w(),
        i = t(),
        j = a.hasAttribute("data-defer") ?? A,
        m = a.getAttribute("data-deployment-id"),
        n = async ({ filename: a }) => {
          let b = a.slice(1);
          m && (b += `?v=${m}`);
          let { default: c, data: e, GET: f } = await import(b),
            d = Boolean(e ?? f);
          return (
            (g[a] = { defaultExport: c, withData: d }),
            { defaultExport: c, withData: d }
          );
        },
        d = (a) => {
          let b = new URL(a.href, location.href),
            c = k(b, i);
          c.map(([e, b]) => {
            let { filename: d } = b;
            if (!(d in g)) {
              let a = document.createElement("link"),
                c = b.filename.slice(1);
              m && (c += `?v=${m}`),
                a.setAttribute("rel", "modulepreload"),
                a.setAttribute("href", c),
                document.head.appendChild(a);
            }
          });
        },
        b = async (a) => {
          let b = a.url || new URL(window.location.href),
            c = k(b, i),
            e = x(),
            f = setTimeout(() => {
              (f = null), (e.style.opacity = "1"), (e.style.width = "50%");
            }, 300),
            d = await Promise.all(
              c.map(async ([d, e]) => {
                let { filename: c } = e,
                  a = {
                    url: new URL(d.pathname.input + b.search, b.href),
                    params: d.pathname.groups,
                    filename: c,
                  },
                  f = a.url.pathname + a.url.search;
                if (c in g) Object.assign(a, g[c]);
                else {
                  let { defaultExport: h, withData: i } = await n(e);
                  Object.assign(a, { defaultExport: h, withData: i });
                }
                return (
                  y.has(f) ||
                    g[c]?.withData !== !0 ||
                    ((a.withData = !0), await u(y, f, j)),
                  a
                );
              })
            );
          C(d),
            B(b),
            setTimeout(() => {
              if (f) clearTimeout(f), e.remove();
              else {
                let a = 0.7,
                  b = 0.3,
                  c = setTimeout(() => {
                    e.style.opacity = "0";
                  }, 1e3 * a),
                  d = setTimeout(() => {
                    (r.__LOADING_BAR_CLEANUP = null), e.remove();
                  }, (a + b) * 1e3);
                (r.__LOADING_BAR_CLEANUP = () => {
                  clearTimeout(c), clearTimeout(d);
                }),
                  (e.style.transition = `opacity ${b}s ease-out, width ${a}s ease-in-out`),
                  setTimeout(() => {
                    e.style.width = "100%";
                  }, 0);
              }
            }, 0),
            a.url && window.scrollTo(0, 0);
        },
        e = (c) => {
          let a = c.routePattern;
          if (a) {
            let d = [new l(a), { filename: c.specifier, pattern: a }],
              b = a.pathname.slice(1);
            ("_app" === b || "_404" === b) && (i[b] = d), i.routes.push(d);
          }
        },
        f = (d) => {
          let c = i.routes.find((a) => a[1].filename === d.specifier),
            a = c?.[1].pattern.pathname?.slice(1);
          ("_app" === a || "_404" === a) && (i[a] = void 0),
            (i.routes = i.routes.filter((a) => a[1].filename != d.specifier)),
            b({ type: "popstate" });
        }; // clean up
      return (
        addEventListener("popstate", b),
        h.on("popstate", b),
        h.on("moduleprefetch", d),
        h.on("hmr:create", e),
        h.on("hmr:remove", f),
        h.emit("routerready", { type: "routerready" }), // remove ssr head elements
        Array.from(c.children).forEach((a) => {
          a.hasAttribute("ssr") && c.removeChild(a);
        }),
        () => {
          removeEventListener("popstate", b),
            h.off("popstate", b),
            h.off("moduleprefetch", d),
            h.off("hmr:create", e),
            h.off("hmr:remove", f);
        }
      );
    }, []),
    0 === c.length)
  )
    return a(p, {
      error: { status: 404, message: "page not found" },
      fullscreen: !0,
    });
  let i = a(
    n.Provider,
    {
      value: {
        url: q,
        params: z,
        e404: "/_404" === c[c.length - 1].url.pathname || void 0,
        ssrHeadCollection: d?.headCollection,
        createPortal: o,
      },
    },
    a(s, { modules: c, dataCache: y, ssrContext: d })
  );
  return m ? a(b, {}, i) : i;
};
let s = ({ modules: d, dataCache: e, ssrContext: i }) => {
  let { url: f, defaultExport: g, withData: j } = d[0],
    h = f.pathname + f.search,
    b;
  return (
    "function" == typeof g
      ? ((b = a(
          g,
          null,
          d.length > 1 &&
            a(s, { modules: d.slice(1), dataCache: e, ssrContext: i })
        )),
        j &&
          (b = a(
            c,
            { fallback: null },
            a(o, { dataCache: e, dataUrl: h, key: h }, b)
          )))
      : (b = a(p, {
          error: {
            status: 500,
            message: "missing default export as a valid React component",
          },
        })),
    a(q, { Handler: p }, b)
  );
};
/** The `App` component alias to the `Router` in `StrictMode` mode. */ export const App =
  (b) => a(Router, { ...b, strictMode: !0 });
export const useRouter = () => {
  let { url: a, params: b, e404: c } = d(n);
  return { url: a, params: b, e404: c, redirect: j };
};
export const forwardProps = (b, c = {}) =>
  null == b ||
  "string" == typeof b ||
  "number" == typeof b ||
  "boolean" == typeof b
    ? b
    : a(m.Provider, { value: { props: c } }, b);
export const useForwardProps = () => {
  let { props: a } = d(m);
  return a;
};
function t() {
  let a = window.document?.getElementById("routes-manifest");
  if (a)
    try {
      let b = JSON.parse(a.innerText);
      if (Array.isArray(b.routes)) {
        let c,
          d,
          e = b.routes.map((e) => {
            let { pattern: a } = e,
              b = [new l(a), e];
            return (
              "/_app" === a.pathname
                ? (c = b)
                : "/_404" === a.pathname && (d = b),
              b
            );
          });
        return { routes: e, _app: c, _404: d };
      }
    } catch (f) {
      throw Error(`loadRouteTableFromTag: ${f.message}`);
    }
  return { routes: [] };
} // prefetch route data
async function u(c, d, e) {
  let a = {},
    b = async () => {
      let b = await fetch(d + (d.includes("?") ? "&" : "?") + "_data_", {
        headers: { Accept: "application/json" },
      });
      if (!b.ok) {
        let c = await i.fromResponse(b),
          e = c.details;
        if (501 === c.status && "string" == typeof e.redirect?.location) {
          location.href = e.redirect?.location;
          return;
        }
        return c;
      }
      try {
        let g = await b.json(),
          f = b.headers.get("Cache-Control");
        return (
          (a.dataCacheTtl = f?.includes("max-age=")
            ? parseInt(f.split("max-age=")[1])
            : void 0),
          (a.dataExpires = Date.now() + 1e3 * (a.dataCacheTtl || 1)),
          g
        );
      } catch (h) {
        return Error("Data must be valid JSON");
      }
    };
  e ? (a.data = b) : (a.data = await b()), c.set(d, a);
}
function v() {
  let a = window.document?.getElementById("ssr-modules");
  if (a)
    try {
      let b = JSON.parse(a.innerText);
      if (Array.isArray(b)) {
        let d,
          e = w();
        return b.map(({ url: b, filename: c, dataDefered: g, ...a }) => {
          if (g) {
            if (void 0 === d) {
              let f = window.document?.getElementById("defered-data");
              d = f ? JSON.parse(f.innerText) : null;
            }
            d ? (a.data = d[b]) : (a.data = Promise.resolve(null));
          }
          return (
            a.error &&
              ((a.data = new i(500, a.error.message, { stack: a.error.stack })),
              (a.error = void 0)),
            {
              url: new URL(b, location.href),
              filename: c,
              defaultExport: e[c].defaultExport,
              ...a,
            }
          );
        });
      }
    } catch (c) {
      throw Error(`loadSSRModulesFromTag: ${c.message}`);
    }
  return [];
}
function w() {
  return r.__ROUTE_MODULES || (r.__ROUTE_MODULES = {});
}
function x() {
  "function" == typeof r.__LOADING_BAR_CLEANUP &&
    (r.__LOADING_BAR_CLEANUP(), (r.__LOADING_BAR_CLEANUP = null));
  let a = document.getElementById("loading-bar");
  return (
    a ||
      (((a = document.createElement("div")).id = "loading-bar"),
      document.body.appendChild(a)),
    Object.assign(a.style, {
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "9999",
      width: "0",
      height: "1px",
      opacity: "0",
      background: "rgba(128, 128, 128, 0.9)",
      transition: "opacity 0.6s ease-in, width 3s ease-in",
    }),
    a
  );
}
