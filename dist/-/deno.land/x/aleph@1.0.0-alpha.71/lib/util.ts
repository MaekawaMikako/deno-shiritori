export default {
  utf8TextEncoder: new TextEncoder(),
  utf8TextDecoder: new TextDecoder(),
  isInt(a) {
    return "number" == typeof a && !Number.isNaN(a) && Number.isInteger(a);
  },
  isUint(a) {
    return this.isInt(a) && a >= 0;
  },
  isFilledString(a) {
    return "string" == typeof a && a.length > 0;
  },
  isFilledArray(a) {
    return Array.isArray(a) && a.length > 0;
  },
  isPlainObject(a) {
    return (
      null !== a &&
      "object" == typeof a &&
      Object.getPrototypeOf(a) === Object.prototype
    );
  },
  isLikelyHttpURL(b) {
    let a = b.slice(0, 8).toLowerCase();
    return "https://" === a || "http://" === a.slice(0, 7);
  },
  startsWithAny(a, ...b) {
    for (let c of b) if (a.startsWith(c)) return !0;
    return !1;
  },
  endsWithAny(a, ...b) {
    for (let c of b) if (a.endsWith(c)) return !0;
    return !1;
  },
  trimPrefix(a, b) {
    return "" !== b && a.startsWith(b) ? a.slice(b.length) : a;
  },
  trimSuffix(a, b) {
    return "" !== b && a.endsWith(b) ? a.slice(0, -b.length) : a;
  },
  pick(b, ...d) {
    let c = {};
    for (let a of d) a in b && (c[a] = b[a]);
    return c;
  },
  splitBy(a, c, d = !1) {
    let b = d ? a.lastIndexOf(c) : a.indexOf(c);
    return b >= 0 ? [a.slice(0, b), a.slice(b + 1)] : [a, ""];
  },
  toHex(a) {
    let b = new Uint8Array(a);
    return [...b].map((a) => a.toString(16).padStart(2, "0")).join("");
  },
  async hmacSign(a, b, c = "SHA-256") {
    let d = await crypto.subtle.importKey(
        "raw",
        this.utf8TextEncoder.encode(b),
        { name: "HMAC", hash: { name: c } },
        !1,
        ["sign", "verify"]
      ),
      e = await crypto.subtle.sign("HMAC", d, this.utf8TextEncoder.encode(a));
    return this.toHex(e);
  },
  computeHash(b, a) {
    return crypto.subtle
      .digest(b, "string" == typeof a ? this.utf8TextEncoder.encode(a) : a)
      .then((a) => this.toHex(a));
  },
  prettyBytes(a) {
    let b = Math.floor(Math.log(a) / Math.log(1024));
    return `${Math.round((100 * a) / Math.pow(1024, b)) / 100}${
      ["", "K", "M", "G", "T", "P", "E"][b]
    }B`;
  },
  splitPath(a) {
    return a
      .split(/[\/\\]+/g)
      .filter((a) => "" !== a && "." !== a)
      .reduce((a, b) => (".." === b ? a.pop() : a.push(b), a), []);
  },
  cleanPath(a) {
    return "/" + this.splitPath(a).join("/");
  },
  debounce(a, b) {
    let c;
    return function (d, ...e) {
      null !== c && clearTimeout(c),
        (c = setTimeout(() => {
          (c = null), a(...e);
        }, b));
    };
  },
};
