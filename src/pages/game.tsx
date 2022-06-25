import { Head, useData } from "aleph/react";
import React, { useEffect, useState, KeyboardEvent } from 'react'

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
  get: () => {
    return store;
  },
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
  delete: () => {
    return store;
  },
};

export default function Words() {
  const { data: { words }, isMutating, mutation } = useData<Store>();

  return (
    <div className="game">
      <Head>
        <title>Game</title>
        <meta name="description" content="A shiritori game powered by Aleph.js" />
      </Head>
      <h1>
        <span>しりとりはじまりはじまり</span>
      </h1>
      <table>
            <tbody>
                {words.map((word, i) => {
                    return (
                        <tr>
                            <td>
                                {++i}
                            </td>
                            <td>
                                {word.message}
                            </td>
                        </tr>
                    )})}
            </tbody>
        </table>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const fd = new FormData(form);
          const message = fd.get("message")?.toString().trim();
          if (message) {
            await mutation.put({ message }, {
              // optimistic update data without waiting for the server response
              optimisticUpdate: (data) => {
                return {
                  words: [...data.words, { id: 0, message, completed: false }],
                };
              },
              // replace the data with the new data that is from the server response
              replace: true,
            });
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
    </div>
  );
}
