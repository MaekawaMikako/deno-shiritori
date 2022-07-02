import Header from "../components/header/index.tsx";
import "../styles/app.css";

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
