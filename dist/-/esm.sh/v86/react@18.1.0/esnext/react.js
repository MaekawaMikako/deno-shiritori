var X = Object.create,
  L = Object.defineProperty,
  Z = Object.getOwnPropertyDescriptor,
  ee = Object.getOwnPropertyNames,
  te = Object.getPrototypeOf,
  re = Object.prototype.hasOwnProperty,
  V = (r, a) => () => (a || r((a = { exports: {} }).exports, a), a.exports),
  ne = (r, a, y, m) => {
    if ((a && typeof a == "object") || typeof a == "function")
      for (let d of ee(a))
        !re.call(r, d) &&
          d !== y &&
          L(r, d, {
            get: () => a[d],
            enumerable: !(m = Z(a, d)) || m.enumerable,
          });
    return r;
  },
  F = (r, a, y) => (
    (y = r != null ? X(te(r)) : {}),
    ne(
      a || !r || !r.__esModule
        ? L(y, "default", { value: r, enumerable: !0 })
        : y,
      r
    )
  ),
  ue = V((r) => {
    "use strict";
    var a = Symbol.for("react.element"),
      y = Symbol.for("react.portal"),
      m = Symbol.for("react.fragment"),
      d = Symbol.for("react.strict_mode"),
      M = Symbol.for("react.profiler"),
      A = Symbol.for("react.provider"),
      q = Symbol.for("react.context"),
      z = Symbol.for("react.forward_ref"),
      B = Symbol.for("react.suspense"),
      H = Symbol.for("react.memo"),
      W = Symbol.for("react.lazy"),
      g = Symbol.iterator;
    function Y(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (g && e[g]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var w = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      j = Object.assign,
      k = {};
    function _(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = k),
        (this.updater = n || w);
    }
    (_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      });
    function $() {}
    $.prototype = _.prototype;
    function h(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = k),
        (this.updater = n || w);
    }
    var S = (h.prototype = new $());
    (S.constructor = h), j(S, _.prototype), (S.isPureReactComponent = !0);
    var x = Array.isArray,
      I = Object.prototype.hasOwnProperty,
      R = { current: null },
      P = { key: !0, ref: !0, __self: !0, __source: !0 };
    function T(e, t, n) {
      var o,
        u = {},
        c = null,
        l = null;
      if (t != null)
        for (o in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (c = "" + t.key),
        t))
          I.call(t, o) && !P.hasOwnProperty(o) && (u[o] = t[o]);
      var f = arguments.length - 2;
      if (f === 1) u.children = n;
      else if (1 < f) {
        for (var s = Array(f), p = 0; p < f; p++) s[p] = arguments[p + 2];
        u.children = s;
      }
      if (e && e.defaultProps)
        for (o in ((f = e.defaultProps), f)) u[o] === void 0 && (u[o] = f[o]);
      return {
        $$typeof: a,
        type: e,
        key: c,
        ref: l,
        props: u,
        _owner: R.current,
      };
    }
    function G(e, t) {
      return {
        $$typeof: a,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function C(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function J(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (n) {
          return t[n];
        })
      );
    }
    var D = /\/+/g;
    function O(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? J("" + e.key)
        : t.toString(36);
    }
    function v(e, t, n, o, u) {
      var c = typeof e;
      (c === "undefined" || c === "boolean") && (e = null);
      var l = !1;
      if (e === null) l = !0;
      else
        switch (c) {
          case "string":
          case "number":
            l = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case a:
              case y:
                l = !0;
            }
        }
      if (l)
        return (
          (l = e),
          (u = u(l)),
          (e = o === "" ? "." + O(l, 0) : o),
          x(u)
            ? ((n = ""),
              e != null && (n = e.replace(D, "$&/") + "/"),
              v(u, t, n, "", function (p) {
                return p;
              }))
            : u != null &&
              (C(u) &&
                (u = G(
                  u,
                  n +
                    (!u.key || (l && l.key === u.key)
                      ? ""
                      : ("" + u.key).replace(D, "$&/") + "/") +
                    e
                )),
              t.push(u)),
          1
        );
      if (((l = 0), (o = o === "" ? "." : o + ":"), x(e)))
        for (var f = 0; f < e.length; f++) {
          c = e[f];
          var s = o + O(c, f);
          l += v(c, t, n, s, u);
        }
      else if (((s = Y(e)), typeof s == "function"))
        for (e = s.call(e), f = 0; !(c = e.next()).done; )
          (c = c.value), (s = o + O(c, f++)), (l += v(c, t, n, s, u));
      else if (c === "object")
        throw (
          ((t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return l;
    }
    function b(e, t, n) {
      if (e == null) return e;
      var o = [],
        u = 0;
      return (
        v(e, o, "", "", function (c) {
          return t.call(n, c, u++);
        }),
        o
      );
    }
    function K(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (n) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = n));
            },
            function (n) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = n));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var i = { current: null },
      E = { transition: null },
      Q = {
        ReactCurrentDispatcher: i,
        ReactCurrentBatchConfig: E,
        ReactCurrentOwner: R,
      };
    (r.Children = {
      map: b,
      forEach: function (e, t, n) {
        b(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          b(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          b(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!C(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    }),
      (r.Component = _),
      (r.Fragment = m),
      (r.Profiler = M),
      (r.PureComponent = h),
      (r.StrictMode = d),
      (r.Suspense = B),
      (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
      (r.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              "."
          );
        var o = j({}, e.props),
          u = e.key,
          c = e.ref,
          l = e._owner;
        if (t != null) {
          if (
            (t.ref !== void 0 && ((c = t.ref), (l = R.current)),
            t.key !== void 0 && (u = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var f = e.type.defaultProps;
          for (s in t)
            I.call(t, s) &&
              !P.hasOwnProperty(s) &&
              (o[s] = t[s] === void 0 && f !== void 0 ? f[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
          f = Array(s);
          for (var p = 0; p < s; p++) f[p] = arguments[p + 2];
          o.children = f;
        }
        return {
          $$typeof: a,
          type: e.type,
          key: u,
          ref: c,
          props: o,
          _owner: l,
        };
      }),
      (r.createContext = function (e) {
        return (
          (e = {
            $$typeof: q,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (e.Provider = { $$typeof: A, _context: e }),
          (e.Consumer = e)
        );
      }),
      (r.createElement = T),
      (r.createFactory = function (e) {
        var t = T.bind(null, e);
        return (t.type = e), t;
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: z, render: e };
      }),
      (r.isValidElement = C),
      (r.lazy = function (e) {
        return { $$typeof: W, _payload: { _status: -1, _result: e }, _init: K };
      }),
      (r.memo = function (e, t) {
        return { $$typeof: H, type: e, compare: t === void 0 ? null : t };
      }),
      (r.startTransition = function (e) {
        var t = E.transition;
        E.transition = {};
        try {
          e();
        } finally {
          E.transition = t;
        }
      }),
      (r.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (r.useCallback = function (e, t) {
        return i.current.useCallback(e, t);
      }),
      (r.useContext = function (e) {
        return i.current.useContext(e);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e) {
        return i.current.useDeferredValue(e);
      }),
      (r.useEffect = function (e, t) {
        return i.current.useEffect(e, t);
      }),
      (r.useId = function () {
        return i.current.useId();
      }),
      (r.useImperativeHandle = function (e, t, n) {
        return i.current.useImperativeHandle(e, t, n);
      }),
      (r.useInsertionEffect = function (e, t) {
        return i.current.useInsertionEffect(e, t);
      }),
      (r.useLayoutEffect = function (e, t) {
        return i.current.useLayoutEffect(e, t);
      }),
      (r.useMemo = function (e, t) {
        return i.current.useMemo(e, t);
      }),
      (r.useReducer = function (e, t, n) {
        return i.current.useReducer(e, t, n);
      }),
      (r.useRef = function (e) {
        return i.current.useRef(e);
      }),
      (r.useState = function (e) {
        return i.current.useState(e);
      }),
      (r.useSyncExternalStore = function (e, t, n) {
        return i.current.useSyncExternalStore(e, t, n);
      }),
      (r.useTransition = function () {
        return i.current.useTransition();
      }),
      (r.version = "18.1.0");
  }),
  N = V((r, a) => {
    "use strict";
    a.exports = ue();
  }),
  oe = F(N()),
  U = F(N()),
  {
    Children: ce,
    Component: fe,
    Fragment: le,
    Profiler: ie,
    PureComponent: pe,
    StrictMode: ye,
    Suspense: de,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _e,
    cloneElement: me,
    createContext: ve,
    createElement: be,
    createFactory: Ee,
    createRef: he,
    forwardRef: Se,
    isValidElement: Re,
    lazy: Ce,
    memo: Oe,
    startTransition: ge,
    unstable_act: we,
    useCallback: je,
    useContext: ke,
    useDebugValue: $e,
    useDeferredValue: xe,
    useEffect: Ie,
    useId: Pe,
    useImperativeHandle: Te,
    useInsertionEffect: De,
    useLayoutEffect: Le,
    useMemo: Ve,
    useReducer: Fe,
    useRef: Ne,
    useState: Ue,
    useSyncExternalStore: Me,
    useTransition: Ae,
    version: qe,
  } = U,
  { default: ae, ...se } = U,
  ze = oe.default ?? ae ?? se;
export {
  ce as Children,
  fe as Component,
  le as Fragment,
  ie as Profiler,
  pe as PureComponent,
  ye as StrictMode,
  de as Suspense,
  _e as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  me as cloneElement,
  ve as createContext,
  be as createElement,
  Ee as createFactory,
  he as createRef,
  ze as default,
  Se as forwardRef,
  Re as isValidElement,
  Ce as lazy,
  Oe as memo,
  ge as startTransition,
  we as unstable_act,
  je as useCallback,
  ke as useContext,
  $e as useDebugValue,
  xe as useDeferredValue,
  Ie as useEffect,
  Pe as useId,
  Te as useImperativeHandle,
  De as useInsertionEffect,
  Le as useLayoutEffect,
  Ve as useMemo,
  Fe as useReducer,
  Ne as useRef,
  Ue as useState,
  Me as useSyncExternalStore,
  Ae as useTransition,
  qe as version,
};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
