import { Head, useData, Link } from "aleph/react";
import { useEffect, useState } from "react";
import { Button } from "../components/button/index.tsx";

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
  useEffect(() => {
    if (words) {
      const wordlist = words.map((obj) => obj.message);
      setDisplayWordList(wordlist.slice(-step));
    }
  }, []);

  return (
    <div className="game">
      <Head>
        <title>Game</title>
        <meta
          name="description"
          content="A shiritori game powered by Aleph.js"
        />
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
            return alert("げーむおーばー");
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

      <Button>
        <Link role="button" to="/game">
          はじめから
        </Link>
      </Button>

      <Button>
        <a>いちじていし</a>
      </Button>

      <Button>
        <a>るーる</a>
      </Button>
    </div>
  );
};

export default Game;
