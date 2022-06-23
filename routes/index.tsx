import { Head, Link } from "aleph/react";

export default function Index() {
  return (
    <div className="screen index">
      <Head>
        <title>deno-shiritori</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      <h1>
        ことばであそぼう
      </h1>
      <p>
        でぃーのしりとりへようこそ<br />{" "}
        ここではひらがなしかつかえません<br />{" "}
        いっしょにしりとりであそびましょう
      </p>
      <nav>
        <Link role="button" to="/todos">
          げーむすたーと
        </Link>
      </nav>
    </div>
  );
}
