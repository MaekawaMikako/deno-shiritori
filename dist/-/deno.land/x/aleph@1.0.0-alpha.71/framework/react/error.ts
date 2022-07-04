import {
  Component as a,
  createElement as b,
} from "/-/esm.sh/react@18.1.0?v=181c93324c9";
export class ErrorBoundary extends a {
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  render() {
    return this.state.error instanceof Error
      ? b(this.props.Handler, { error: this.state.error })
      : this.props.children;
  }
  constructor(a) {
    super(a), (this.state = { error: null });
  }
}
export function Err({ error: { status: a, message: c }, fullscreen: d }) {
  return b(
    "div",
    {
      style: d
        ? {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            fontSize: 18,
          }
        : {
            boxSizing: "border-box",
            width: "96%",
            height: "96%",
            margin: "auto",
            border: "1px solid rgba(255,0,0,0.5)",
            backgroundColor: "rgba(255,0,0,0.05)",
            borderRadius: "8px",
            padding: "1.5rem 2rem",
            color: "red",
            textAlign: "center",
          },
    },
    a && b("strong", { style: { fontWeight: "600" } }, a),
    a && b("small", { style: { opacity: 0.5, padding: "0 6px" } }, "-"),
    c
  );
}
