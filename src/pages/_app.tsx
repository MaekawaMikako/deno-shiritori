import Header from "../components/Header.tsx";
import "../styles/app.css";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
