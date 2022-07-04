import { createContext as a } from "/-/esm.sh/react@18.1.0?v=181c93324c9";
export const RouterContext = a({
  url: new URL("http://localhost/"),
  params: {},
});
RouterContext.displayName = "RouterContext";
export const DataContext = a({
  data: void 0,
  isMutating: !1,
  mutation: {
    post: () => Promise.resolve(new Response(null)),
    put: () => Promise.resolve(new Response(null)),
    patch: () => Promise.resolve(new Response(null)),
    delete: () => Promise.resolve(new Response(null)),
  },
  reload: () => Promise.resolve(void 0),
});
DataContext.displayName = "DataContext";
export const ForwardPropsContext = a({ props: {} });
ForwardPropsContext.displayName = "ForwardPropsContext";
