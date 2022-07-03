import { Link } from "https://deno.land/x/aleph@1.0.0-alpha.71/framework/react/mod.ts";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div>
        <h1>
          <a>
            <Link to="/">でぃーのしりとり</Link>
          </a>
        </h1>
      </div>
    </header>
  );
}
