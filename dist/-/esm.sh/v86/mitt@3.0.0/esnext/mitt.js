/* esm.sh - esbuild bundle(mitt@3.0.0) esnext production */
function n(t) {
  return {
    all: (t = t || new Map()),
    on: function (e, f) {
      var i = t.get(e);
      i ? i.push(f) : t.set(e, [f]);
    },
    off: function (e, f) {
      var i = t.get(e);
      i && (f ? i.splice(i.indexOf(f) >>> 0, 1) : t.set(e, []));
    },
    emit: function (e, f) {
      var i = t.get(e);
      i &&
        i.slice().map(function (c) {
          c(f);
        }),
        (i = t.get("*")) &&
          i.slice().map(function (c) {
            c(e, f);
          });
    },
  };
}
export { n as default };
