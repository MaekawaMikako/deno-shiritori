(function (o) {
  var i = o.createElement("div"),
    n = o.createElement("h2"),
    t = o.createElement("p"),
    r = {
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "999",
      width: "100%",
      padding: "30px 0",
      margin: "0",
      backgroundColor: "#fff9cc",
      textAlign: "center",
      borderBottom: "1px solid #eee",
      boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
    },
    d = {
      padding: "0",
      margin: "0",
      lineHeight: "1.2",
      fontSize: "24px",
      fontWeight: "700",
      color: "#000",
    },
    a = {
      padding: "6px 0 0 0",
      margin: "0",
      lineHeight: "1.2",
      fontSize: "15px",
      color: "#454545",
    };
  for (var e in r) i.style[e] = r[e];
  for (var e in d) n.style[e] = d[e];
  for (var e in a) t.style[e] = a[e];
  (n.innerText = "Your browser is out of date!"),
    (t.innerHTML =
      'This site requires <a href="https://caniuse.com/es6-module" style="font-weight:500;color:#000;text-decoration:underline;">ES module</a>, please upgrade your browser.'),
    i.appendChild(n),
    i.appendChild(t),
    o.body.appendChild(i);
})(window.document);
