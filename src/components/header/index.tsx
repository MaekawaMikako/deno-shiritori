import { Link } from "aleph/react";
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
