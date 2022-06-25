import { Head, Link } from "aleph/react";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const fn = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      console.log(data);
    };
    fn();
  }, []);
  return (
    <div className="screen index">
      <Head>
        <title>deno-shiritori</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      <h1>ことばであそぼう</h1>
      <p>
        でぃーのしりとりへようこそ
        <br /> ここではひらがなしかつかえません
        <br /> いっしょにしりとりであそびましょう
      </p>
      <nav>
        <Link role="button" to="/game">
          げーむすたーと
        </Link>
      </nav>
    </div>
  );
}
