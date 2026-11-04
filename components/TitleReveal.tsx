"use client";

import { useEffect } from "react";

const REAL_TITLE = "Kashmiri Lessons with Fayk for Arousha";

/**
 * Shows the fake "Japan" title, crosses it out, then reveals the real one.
 * The animation is pure CSS; this component only swaps the browser tab title
 * (link previews keep the Japan disguise from the page metadata).
 */
export default function TitleReveal() {
  useEffect(() => {
    const t = setTimeout(() => {
      document.title = REAL_TITLE;
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="title-reveal">
      <p className="fake-title" aria-hidden="true">
        Overcoming the Language Barrier in Japan
      </p>
      <h1 className="real-title">
        Kashmiri Lessons <span className="with">with Fayk</span>{" "}
        <span className="for">for Arousha</span>
      </h1>
    </div>
  );
}
