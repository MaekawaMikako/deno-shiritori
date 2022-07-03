import { Head, useData, Link } from "aleph/react";
import { useEffect, useState } from "react";
import { Button } from "../components/button/index.tsx";
import { Modal } from "../components/modal/index.tsx";
import "../styles/game.css";

export type Word = {
  id: number;
  message: string;
};

export type Store = {
  words: Word[];
};

const INITIAL_STORE: Store = {
  words: [{ id: 0, message: "しりとり" }],
};

const store: Store = {
  words: JSON.parse(
    window.localStorage?.getItem("words") || JSON.stringify(INITIAL_STORE.words)
  ),
};

export const data: Data<Store, Store> = {
  cacheTtl: 0, // no cache
  get: () => {
    if (store.words.length == 0) {
      return INITIAL_STORE;
    }
    return store;
  },
  put: async (req) => {
    const { message } = await req.json();
    if (typeof message === "string") {
      store.words.push({ id: Date.now(), message });
      window.localStorage?.setItem("words", JSON.stringify(store.words));
    }
    return store;
  },
  patch: async (req) => {
    const { id, message } = await req.json();
    const word = store.words.find((word) => word.id === id);
    if (word) {
      if (typeof message === "string") {
        word.message = message;
      }
      window.localStorage?.setItem("words", JSON.stringify(store.words));
    }
    return store;
  },
  delete: () => {
    store.words = [...INITIAL_STORE.words];
    window.localStorage?.setItem("words", JSON.stringify(INITIAL_STORE.words));
    return INITIAL_STORE;
  },
};

export const Game = () => {
  const step = 3;
  const {
    data: { words },
    isMutating,
    mutation,
  } = useData<Store>();
  const [displayWordList, setDisplayWordList] = useState<string[]>([]);
  const [showRule, setShowRule] = useState(true);
  const [showGameOver, setShowGameOver] = useState(false);

  useEffect(() => {
    if (words.length > 0) {
      const wordlist = words.map((obj) => obj.message);
      setDisplayWordList(wordlist.slice(-step));
    }
  }, []);

  const gameOver = () => {
    setShowGameOver(true);
  };

  const reset = () => {
    mutation.delete(undefined, "replace");
    setDisplayWordList(INITIAL_STORE.words.map((word) => word.message));
  };

  return (
    <div className="screen game">
      <Head>
        <title>Game</title>
        <meta name="description" content="しりとりする" />
      </Head>
      <div className="game-contents-container">
        <div className="words-contents-container">
          {words.length > 0 && (
            <div className="recent-words-container">
              {words.length > 1 && (
                <div className="recent-words">
                  {displayWordList.map((word, i) => (
                    <p className="recent-word">
                      {words.length - displayWordList.length + i} {word}
                    </p>
                  ))}
                </div>
              )}
              <p className="most-recent-word">
                {words.length} <span>{words.slice(-1)[0].message}</span>
              </p>
            </div>
          )}
        </div>
        <div className="operation-conatainer">
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
                      words: [...data.words, { id: Date.now(), message }],
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
            <Button onClick={reset}>
              <Link role="button" to="/game">
                はじめから
              </Link>
            </Button>
            <Button onClick={() => setShowRule(true)}>
              <a>るーる</a>
            </Button>
          </div>
        </div>
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
                <Link onClick={reset} role="button" to="/game">
                  はじめから
                </Link>
              </Button>
              <Button>
                <Link role="button" to="/">
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
