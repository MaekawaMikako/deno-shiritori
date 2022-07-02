import { Head, useData, Link } from "aleph/react";
import { useEffect, useState } from "react";
import { Button } from "../components/button/index.tsx";
import { Modal } from "../components/modal/index.tsx";
import "../styles/game.css";

export type Word = {
  id: number;
  message: string;
  completed: boolean;
};

export type Store = {
  words: Word[];
};

const store: Store = {
  words: JSON.parse(window.localStorage?.getItem("words") || "[]"),
};

export const data: Data<Store, Store> = {
  cacheTtl: 0, // no cache
  get: () => store,
  put: async (req) => {
    const { message } = await req.json();
    if (typeof message === "string") {
      store.words.push({ id: Date.now(), message, completed: false });
      window.localStorage?.setItem("words", JSON.stringify(store.words));
    }
    return store;
  },
  patch: async (req) => {
    const { id, message, completed } = await req.json();
    const word = store.words.find((word) => word.id === id);
    if (word) {
      if (typeof message === "string") {
        word.message = message;
      }
      if (typeof completed === "boolean") {
        word.completed = completed;
      }
      window.localStorage?.setItem("words", JSON.stringify(store.words));
    }
    return store;
  },
  delete: () => store,
};

export const Game = () => {
  const step = 5;
  const {
    data: { words },
    isMutating,
    mutation,
  } = useData<Store>();
  const [displayWordList, setDisplayWordList] = useState<string[]>([]);
  const [showRule, setShowRule] = useState(true);
  const [showGameOver, setShowGameOver] = useState(false);

  useEffect(() => {
    if (words) {
      const wordlist = words.map((obj) => obj.message);
      setDisplayWordList(wordlist.slice(-step));
    }
  }, []);

  const gameOver = () => {
    setShowGameOver(true);
  };

  return (
    <div className="screen game">
      <Head>
        <title>Game</title>
        <meta name="description" content="しりとりする" />
      </Head>
      <h1>しりとりはじまりはじまり</h1>
      {words.length > step &&
        displayWordList.map((word, i) => (
          <p className="recent-words">
            {words.length - step + i} {word}
          </p>
        ))}
      <p className="most-recent-word">
        {words.length} {words.slice(-1)[0].message}
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const fd = new FormData(form);
          const message = fd.get("message")?.toString().trim();
          const firstChar = (message ?? "").charAt(0);
          const lastChar = words
            .slice(-1)[0]
            .message.charAt(words.slice(-1)[0].message.length - 1);
          if (/[ん]$/.test(message ?? "")) {
            return gameOver();
          }
          if (/[ぁぃぅぇぉっゃゅょゎ]/.test(message ?? "")) {
            return alert("ぜんぶおおもじでかいてね");
          }
          if (/[^ぁ-ん]/.test(message ?? "")) {
            return alert("ひらがなをつかってね\nきごうもだめだよ");
          }
          if (firstChar !== lastChar) {
            return alert("まえのことばにつながってないよ");
          }
          if ((message ?? "").length < 2) {
            alert("それはずるいからやめてほしいなぁ…");
          }
          if (message) {
            await mutation.put(
              { message },
              {
                // optimistic update data without waiting for the server response
                optimisticUpdate: (data) => ({
                  words: [...data.words, { id: 0, message, completed: false }],
                }),
                // replace the data with the new data that is from the server response
                replace: true,
              }
            );
            const wordlist = words.map((obj) => obj.message);
            setDisplayWordList(wordlist.slice(-step));
            form.reset();
            setTimeout(() => {
              form.querySelector("input")?.focus();
            }, 0);
          }
        }}
      >
        <input
          type="text"
          name="message"
          placeholder="つぎのことばをにゅうりょくしてね"
          autoFocus
          autoComplete="off"
          disabled={!!isMutating}
        />
      </form>
      <div className="buttons">
        <Button>
          <Link role="button" to="/game">
            はじめから
          </Link>
        </Button>
        <Button onClick={() => setShowRule(true)}>
          <a>るーる</a>
        </Button>
      </div>
      <Modal
        title="るーる"
        content={
          <div>
            <p>
              ひらがなしかつかってはいけません．
              <br />
              <br />
              きごうやこもじもつかってはいけません．
              <br />
              “でぃーの”→”でいの”
              <br />
              のようにかきかえましょう．
              <br />
              <br />
              なんとなく1もじのことばは
              <br />
              ずるいきがするのでさけてください．
              <br />
              <br />
              つぎのことばをこたえるまでの
              <br />
              せいげんじかんは15びょうです．
              <br />
              おもいつかなかったらげーむおーばー!
              <br />
              がんばってね．
            </p>
          </div>
        }
        show={showRule}
        setShow={setShowRule}
      />
      <Modal
        title="げーむおーばー"
        content={
          <div>
            <p>
              どんまい!
              <br />
              <br />
              またあそんでね．
            </p>
            <div className="game-over-buttons">
              <Button>
                <Link role="button" to="/game">
                  はじめから
                </Link>
              </Button>
              <Button>
                <Link role="button" to="/index">
                  げーむとっぷへ
                </Link>
              </Button>
            </div>
          </div>
        }
        show={showGameOver}
        setShow={setShowGameOver}
      />
    </div>
  );
};

export default Game;
