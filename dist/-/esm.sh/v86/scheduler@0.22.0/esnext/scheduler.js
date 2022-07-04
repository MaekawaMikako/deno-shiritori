/* esm.sh - esbuild bundle(scheduler@0.22.0) esnext production */
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
var U = Object.create;
var $ = Object.defineProperty;
var X = Object.getOwnPropertyDescriptor;
var Z = Object.getOwnPropertyNames;
var ee = Object.getPrototypeOf,
  ne = Object.prototype.hasOwnProperty;
var B = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var te = (e, n, t, l) => {
  if ((n && typeof n == "object") || typeof n == "function")
    for (let i of Z(n))
      !ne.call(e, i) &&
        i !== t &&
        $(e, i, {
          get: () => n[i],
          enumerable: !(l = X(n, i)) || l.enumerable,
        });
  return e;
};
var D = (e, n, t) => (
  (t = e != null ? U(ee(e)) : {}),
  te(
    n || !e || !e.__esModule
      ? $(t, "default", { value: e, enumerable: !0 })
      : t,
    e
  )
);
var K = B((r) => {
  "use strict";
  function T(e, n) {
    var t = e.length;
    e.push(n);
    e: for (; 0 < t; ) {
      var l = (t - 1) >>> 1,
        i = e[l];
      if (0 < g(i, n)) (e[l] = n), (e[t] = i), (t = l);
      else break e;
    }
  }
  function o(e) {
    return e.length === 0 ? null : e[0];
  }
  function k(e) {
    if (e.length === 0) return null;
    var n = e[0],
      t = e.pop();
    if (t !== n) {
      e[0] = t;
      e: for (var l = 0, i = e.length, y = i >>> 1; l < y; ) {
        var f = 2 * (l + 1) - 1,
          x = e[f],
          b = f + 1,
          m = e[b];
        if (0 > g(x, t))
          b < i && 0 > g(m, x)
            ? ((e[l] = m), (e[b] = t), (l = b))
            : ((e[l] = x), (e[f] = t), (l = f));
        else if (b < i && 0 > g(m, t)) (e[l] = m), (e[b] = t), (l = b);
        else break e;
      }
    }
    return n;
  }
  function g(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return t !== 0 ? t : e.id - n.id;
  }
  typeof performance == "object" && typeof performance.now == "function"
    ? ((q = performance),
      (r.unstable_now = function () {
        return q.now();
      }))
    : ((I = Date),
      (O = I.now()),
      (r.unstable_now = function () {
        return I.now() - O;
      }));
  var q,
    I,
    O,
    s = [],
    c = [],
    re = 1,
    a = null,
    u = 3,
    P = !1,
    p = !1,
    d = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    A = typeof clearTimeout == "function" ? clearTimeout : null,
    W = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function L(e) {
    for (var n = o(c); n !== null; ) {
      if (n.callback === null) k(c);
      else if (n.startTime <= e)
        k(c), (n.sortIndex = n.expirationTime), T(s, n);
      else break;
      n = o(c);
    }
  }
  function N(e) {
    if (((d = !1), L(e), !p))
      if (o(s) !== null) (p = !0), M(F);
      else {
        var n = o(c);
        n !== null && j(N, n.startTime - e);
      }
  }
  function F(e, n) {
    (p = !1), d && ((d = !1), A(v), (v = -1)), (P = !0);
    var t = u;
    try {
      for (
        L(n), a = o(s);
        a !== null && (!(a.expirationTime > n) || (e && !J()));

      ) {
        var l = a.callback;
        if (typeof l == "function") {
          (a.callback = null), (u = a.priorityLevel);
          var i = l(a.expirationTime <= n);
          (n = r.unstable_now()),
            typeof i == "function" ? (a.callback = i) : a === o(s) && k(s),
            L(n);
        } else k(s);
        a = o(s);
      }
      if (a !== null) var y = !0;
      else {
        var f = o(c);
        f !== null && j(N, f.startTime - n), (y = !1);
      }
      return y;
    } finally {
      (a = null), (u = t), (P = !1);
    }
  }
  var w = !1,
    h = null,
    v = -1,
    G = 5,
    H = -1;
  function J() {
    return !(r.unstable_now() - H < G);
  }
  function C() {
    if (h !== null) {
      var e = r.unstable_now();
      H = e;
      var n = !0;
      try {
        n = h(!0, e);
      } finally {
        n ? _() : ((w = !1), (h = null));
      }
    } else w = !1;
  }
  var _;
  typeof W == "function"
    ? (_ = function () {
        W(C);
      })
    : typeof MessageChannel < "u"
    ? ((E = new MessageChannel()),
      (Y = E.port2),
      (E.port1.onmessage = C),
      (_ = function () {
        Y.postMessage(null);
      }))
    : (_ = function () {
        z(C, 0);
      });
  var E, Y;
  function M(e) {
    (h = e), w || ((w = !0), _());
  }
  function j(e, n) {
    v = z(function () {
      e(r.unstable_now());
    }, n);
  }
  r.unstable_IdlePriority = 5;
  r.unstable_ImmediatePriority = 1;
  r.unstable_LowPriority = 4;
  r.unstable_NormalPriority = 3;
  r.unstable_Profiling = null;
  r.unstable_UserBlockingPriority = 2;
  r.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  r.unstable_continueExecution = function () {
    p || P || ((p = !0), M(F));
  };
  r.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e
      ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        )
      : (G = 0 < e ? Math.floor(1e3 / e) : 5);
  };
  r.unstable_getCurrentPriorityLevel = function () {
    return u;
  };
  r.unstable_getFirstCallbackNode = function () {
    return o(s);
  };
  r.unstable_next = function (e) {
    switch (u) {
      case 1:
      case 2:
      case 3:
        var n = 3;
        break;
      default:
        n = u;
    }
    var t = u;
    u = n;
    try {
      return e();
    } finally {
      u = t;
    }
  };
  r.unstable_pauseExecution = function () {};
  r.unstable_requestPaint = function () {};
  r.unstable_runWithPriority = function (e, n) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var t = u;
    u = e;
    try {
      return n();
    } finally {
      u = t;
    }
  };
  r.unstable_scheduleCallback = function (e, n, t) {
    var l = r.unstable_now();
    switch (
      (typeof t == "object" && t !== null
        ? ((t = t.delay), (t = typeof t == "number" && 0 < t ? l + t : l))
        : (t = l),
      e)
    ) {
      case 1:
        var i = -1;
        break;
      case 2:
        i = 250;
        break;
      case 5:
        i = 1073741823;
        break;
      case 4:
        i = 1e4;
        break;
      default:
        i = 5e3;
    }
    return (
      (i = t + i),
      (e = {
        id: re++,
        callback: n,
        priorityLevel: e,
        startTime: t,
        expirationTime: i,
        sortIndex: -1,
      }),
      t > l
        ? ((e.sortIndex = t),
          T(c, e),
          o(s) === null &&
            e === o(c) &&
            (d ? (A(v), (v = -1)) : (d = !0), j(N, t - l)))
        : ((e.sortIndex = i), T(s, e), p || P || ((p = !0), M(F))),
      e
    );
  };
  r.unstable_shouldYield = J;
  r.unstable_wrapCallback = function (e) {
    var n = u;
    return function () {
      var t = u;
      u = n;
      try {
        return e.apply(this, arguments);
      } finally {
        u = t;
      }
    };
  };
});
var R = B((oe, Q) => {
  "use strict";
  Q.exports = K();
});
var S = D(R()),
  V = D(R()),
  {
    unstable_now: se,
    unstable_IdlePriority: ce,
    unstable_ImmediatePriority: fe,
    unstable_LowPriority: be,
    unstable_NormalPriority: pe,
    unstable_Profiling: _e,
    unstable_UserBlockingPriority: de,
    unstable_cancelCallback: ve,
    unstable_continueExecution: ye,
    unstable_forceFrameRate: me,
    unstable_getCurrentPriorityLevel: ge,
    unstable_getFirstCallbackNode: he,
    unstable_next: ke,
    unstable_pauseExecution: Pe,
    unstable_requestPaint: we,
    unstable_runWithPriority: xe,
    unstable_scheduleCallback: Ie,
    unstable_shouldYield: Ce,
    unstable_wrapCallback: Ee,
  } = V,
  { default: le, ...ie } = V,
  Te = S.default ?? le ?? ie;
export {
  Te as default,
  ce as unstable_IdlePriority,
  fe as unstable_ImmediatePriority,
  be as unstable_LowPriority,
  pe as unstable_NormalPriority,
  _e as unstable_Profiling,
  de as unstable_UserBlockingPriority,
  ve as unstable_cancelCallback,
  ye as unstable_continueExecution,
  me as unstable_forceFrameRate,
  ge as unstable_getCurrentPriorityLevel,
  he as unstable_getFirstCallbackNode,
  ke as unstable_next,
  se as unstable_now,
  Pe as unstable_pauseExecution,
  we as unstable_requestPaint,
  xe as unstable_runWithPriority,
  Ie as unstable_scheduleCallback,
  Ce as unstable_shouldYield,
  Ee as unstable_wrapCallback,
};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
