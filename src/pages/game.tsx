import { Head, useData, Link } from "aleph/react";
import { useCallback, useEffect, useRef, useState } from "react";
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

const changeLastChar = (e: string) => {
  let lastChar = "";
  if (e.slice(-1) === "ー") {
    lastChar = e.slice(-2).slice(0, 1);
  } else {
    lastChar = e.slice(-1);
  }
  if (lastChar === "ぁ") {
    return "あ";
  } else if (lastChar === "ぃ") {
    return "い";
  } else if (lastChar === "ぅ") {
    return "う";
  } else if (lastChar === "ぇ") {
    return "え";
  } else if (lastChar === "ぉ") {
    return "お";
  } else if (lastChar === "っ") {
    return "つ";
  } else if (lastChar === "ゃ") {
    return "や";
  } else if (lastChar === "ゅ") {
    return "ゆ";
  } else if (lastChar === "ょ") {
    return "よ";
  } else if (lastChar === "ゎ") {
    return "わ";
  }
  return lastChar;
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const randomWords = ["しりとり", "でぃーの", "じぐ", "めがね", "さばえ"];

const INITIAL_STORE: Store = {
  words: [{ id: 0, message: randomWords[getRandomInt(randomWords.length)] }],
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
    store.words = [
      { id: 0, message: randomWords[getRandomInt(randomWords.length)] },
    ];
    window.localStorage?.setItem("words", JSON.stringify(store.words));
    return store;
  },
};

export const Game = () => {
  const step = 3;
  const limitCount = 5;
  const intervalRef: { current: number | null | undefined } = useRef(null);
  const {
    data: { words },
    isMutating,
    mutation,
  } = useData<Store>();
  const [displayWordList, setDisplayWordList] = useState<string[]>([]);
  const [showRule, setShowRule] = useState(true);
  const [showGameOver, setShowGameOver] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [count, setCount] = useState(limitCount);
  useEffect(() => {
    if (words.length > 0) {
      setDisplayWordList(words.map((word) => word.message).slice(-step));
    }
  }, []);
  useEffect(() => {
    if (count === 0) {
      gameOver();
    }
  }, [count]);

  const startCount = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
  }, []);

  const stopCount = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const resetCount = () => {
    setCount(limitCount);
    startCount();
  };

  const gameOver = () => {
    setShowGameOver(true);
    setGameEnd(true);
    stopCount();
  };

  const restart = () => {
    mutation.delete(undefined, "replace");
    setDisplayWordList(INITIAL_STORE.words.map((word) => word.message));
    setGameEnd(false);
    stopCount();
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
                <div className="container">
                  <div className="recent-words">
                    {displayWordList.map((word, i) => (
                      <p className="recent-word">
                        {words.length - displayWordList.length + i} {word}
                      </p>
                    ))}
                  </div>
                  <div className="timer">
                    <p className="time">
                      あと
                      <br />
                      <span>{count}</span>
                      びょう
                    </p>
                  </div>
                </div>
              )}
              <p className="most-recent-word">
                {words.length} <span>{words.slice(-1)[0].message}</span>
              </p>
            </div>
          )}
        </div>
        <div className="operation-conatainer">
          {gameEnd === false && (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const message = fd.get("message")?.toString().trim();
                const firstChar = (message ?? "").charAt(0);
                const lastChar = changeLastChar(words.slice(-1)[0].message);
                if (words.map((word) => word.message).includes(message ?? "")) {
                  return gameOver();
                }
                if (/[ん]$/.test(message ?? "")) {
                  return gameOver();
                }
                if (/[^ぁ-ん]ー/.test(message ?? "")) {
                  return alert("ひらがなをつかってね\n");
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
                  setDisplayWordList(
                    words.map((word) => word.message).slice(-step)
                  );
                  resetCount();
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
          )}
          <div className="buttons">
            <Button onClick={restart}>
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
              きごうやこもじでおっわたら
              <br />
              “てくのろじー”
              <br />
              ”じしょ”
              <br />
              ”ようかん”
              <br />
              のようにちょくぜんのもじや
              <br />
              こもじをおおきくしたもじからつづけましょう．
              <br />
              <br />
              なんとなく1もじのことばは
              <br />
              ずるいきがするのでさけてください．
              <br />
              <br />
              つぎのことばをこたえるまでの
              <br />
              せいげんじかんは{limitCount}びょうです．
              <br />
              <br />
              おなじことばは1かいだけ．
              <br />
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
              {words.length}たんごもつづいたよ!
              <br />
              <br />
              またあそんでね．
            </p>
            <div className="game-over-buttons">
              <Button
                onClick={() => {
                  setShowGameOver(false);
                  restart();
                }}
              >
                <a>はじめから</a>
              </Button>
              <Button onClick={restart}>
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
