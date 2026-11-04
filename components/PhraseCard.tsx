"use client";

import { useRef, useState } from "react";
import type { Phrase } from "@/data/phrases";

type Props = {
  phrase: Phrase;
  quip: string;
  learned: boolean;
  onToggleLearned: () => void;
  size?: "large" | "normal";
};

export default function PhraseCard({ phrase, quip, learned, onToggleLearned, size = "normal" }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [audioFailed, setAudioFailed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (!phrase.audio) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(phrase.audio);
      audioRef.current.onerror = () => setAudioFailed(true);
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => setAudioFailed(true));
  };

  const pending = !phrase.pronunciation;

  return (
    <article className={`card card-${size} ${revealed ? "is-revealed" : ""} ${learned ? "is-learned" : ""}`}>
      <div className="card-top">
        <span className="card-label">English</span>
        {!phrase.verified && !pending && (
          <span className="badge" title="Not yet checked by a native speaker">
            Draft
          </span>
        )}
      </div>

      <p className="english">{phrase.english}</p>

      {!revealed ? (
        <button type="button" className="reveal" onClick={() => setRevealed(true)}>
          Show Kashmiri
        </button>
      ) : (
        <div className="answer">
          {phrase.script && (
            <p className="ks" lang="ks" dir="rtl">
              {phrase.script}
            </p>
          )}
          {pending ? (
            <p className="pending">Fayk is still writing this one. Check back soon.</p>
          ) : (
            <>
              <span className="card-label">Say it</span>
              <p className="pronunciation">{phrase.pronunciation}</p>
            </>
          )}
          {phrase.note && <p className="note">{phrase.note}</p>}
          {!pending && <p className="quip">Fayk: {quip}</p>}
        </div>
      )}

      <div className="card-actions">
        {phrase.audio && !audioFailed && (
          <button type="button" className="btn-ghost" onClick={play} aria-label={`Play ${phrase.english}`}>
            ▶ Listen
          </button>
        )}
        {phrase.audio && audioFailed && <span className="muted">Fayk has lost his voice.</span>}
        {revealed && !pending && (
          <button
            type="button"
            className={`btn-learned ${learned ? "on" : ""}`}
            onClick={onToggleLearned}
            aria-pressed={learned}
          >
            {learned ? "✓ Learned" : "Mark as learned"}
          </button>
        )}
      </div>
    </article>
  );
}
