import { App } from "https://deno.land/x/aleph@1.0.0-alpha.71/framework/react/mod.ts";
import { hydrateRoot } from "https://esm.sh/react-dom@18.1.0/client";

hydrateRoot(document.querySelector("#root")!, <App />);
