import { Link } from "https://deno.land/x/aleph@1.0.0-alpha.71/framework/react/mod.ts";

export const E404 = () => {
  return (
    <div className="screen e404">
      <h2>Ooooooops, nothing here!</h2>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </div>
  );
};

export default E404;
