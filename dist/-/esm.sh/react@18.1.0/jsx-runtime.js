var n = ((e) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
    ? new Proxy(e, {
        get: (r, t) => (typeof require != "undefined" ? require : r)[t],
      })
    : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
import b from "/-/esm.sh/v86/react@18.1.0/esnext/react.js";
var P = Object.create,
  d = Object.defineProperty,
  g = Object.getOwnPropertyDescriptor,
  w = Object.getOwnPropertyNames,
  q = Object.getPrototypeOf,
  E = Object.prototype.hasOwnProperty,
  L = ((e) =>
    typeof n < "u"
      ? n
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (r, t) => (typeof n < "u" ? n : r)[t] })
      : e)(function (e) {
    if (typeof n < "u") return n.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  }),
  _ = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
  h = (e, r, t, u) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let f of w(r))
        !E.call(e, f) &&
          f !== t &&
          d(e, f, {
            get: () => r[f],
            enumerable: !(u = g(r, f)) || u.enumerable,
          });
    return e;
  },
  v = (e, r, t) => (
    (t = e != null ? P(q(e)) : {}),
    h(
      r || !e || !e.__esModule
        ? d(t, "default", { value: e, enumerable: !0 })
        : t,
      e
    )
  ),
  R = _((e) => {
    "use strict";
    var r = b,
      t = Symbol.for("react.element"),
      u = Symbol.for("react.fragment"),
      f = Object.prototype.hasOwnProperty,
      x =
        r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      j = { key: !0, ref: !0, __self: !0, __source: !0 };
    function l(s, o, y) {
      var a,
        p = {},
        i = null,
        c = null;
      y !== void 0 && (i = "" + y),
        o.key !== void 0 && (i = "" + o.key),
        o.ref !== void 0 && (c = o.ref);
      for (a in o) f.call(o, a) && !j.hasOwnProperty(a) && (p[a] = o[a]);
      if (s && s.defaultProps)
        for (a in ((o = s.defaultProps), o)) p[a] === void 0 && (p[a] = o[a]);
      return {
        $$typeof: t,
        type: s,
        key: i,
        ref: c,
        props: p,
        _owner: x.current,
      };
    }
    (e.Fragment = u), (e.jsx = l), (e.jsxs = l);
  }),
  O = _((e, r) => {
    "use strict";
    r.exports = R();
  }),
  S = v(O()),
  m = v(O()),
  { Fragment: T, jsx: $, jsxs: C } = m,
  { default: k, ...N } = m,
  D = S.default ?? k ?? N;
export { T as Fragment, D as default, $ as jsx, C as jsxs };
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
