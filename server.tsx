import { App } from "https://deno.land/x/aleph@1.0.0-alpha.71/framework/react/mod.ts";
import { serve } from "https://deno.land/x/aleph@1.0.0-alpha.71/server/mod.ts";
import { renderToReadableStream } from "https://esm.sh/react-dom@18.1.0/server";

serve({
  routes: "./src/pages/**/*.{tsx,ts}",
  ssr: {
    // when set `dataDefer` to `true`, the router will loading data as defer
    // please check https://alephjs.org/docs/react/router/data-defer
    dataDefer: false,
    render: (ctx) => renderToReadableStream(<App ssrContext={ctx} />, ctx),
  },
});
