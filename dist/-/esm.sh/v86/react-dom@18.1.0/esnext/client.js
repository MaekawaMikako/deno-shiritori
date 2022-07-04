/* esm.sh - esbuild bundle(react-dom@18.1.0/client) esnext production */
import __react_dom$ from "/-/esm.sh/v86/react-dom@18.1.0/esnext/react-dom.js";
var f = Object.create;
var s = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var E = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf,
  d = Object.prototype.hasOwnProperty;
var m = ((t) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
    ? new Proxy(t, {
        get: (o, e) => (typeof require != "undefined" ? require : o)[e],
      })
    : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});
var p = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var h = (t, o, e, a) => {
  if ((o && typeof o == "object") || typeof o == "function")
    for (let r of E(o))
      !d.call(t, r) &&
        r !== e &&
        s(t, r, {
          get: () => o[r],
          enumerable: !(a = y(o, r)) || a.enumerable,
        });
  return t;
};
var u = (t, o, e) => (
  (e = t != null ? f(_(t)) : {}),
  h(
    o || !t || !t.__esModule
      ? s(e, "default", { value: t, enumerable: !0 })
      : e,
    t
  )
);
var i = p((n) => {
  "use strict";
  var c = __react_dom$;
  (n.createRoot = c.createRoot), (n.hydrateRoot = c.hydrateRoot);
  var g;
});
var l = u(i()),
  R = u(i()),
  { createRoot: P, hydrateRoot: $ } = R,
  { default: C, ...N } = R,
  v = l.default ?? C ?? N;
export { P as createRoot, v as default, $ as hydrateRoot };
