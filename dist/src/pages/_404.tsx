import {
  jsx as o,
  jsxs as e,
} from "/-/esm.sh/react@18.1.0/jsx-runtime?v=181c93324c9";
import { Link as r } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/react/mod.ts?v=181c93324c9";
var s = () =>
    e("div", {
      className: "screen e404",
      children: [
        o("h2", { children: "Ooooooops, nothing here!" }),
        o("p", {
          children: o(r, { to: "/", children: "Go back to the homepage" }),
        }),
      ],
    }),
  c = s;
export { s as E404, c as default };
