import type { APIHandler } from "https://deno.land/x/aleph/types.d.ts";

export const handler: APIHandler = ({ response: Response }) => {
  response.json({ name: "Aleph" });
};
