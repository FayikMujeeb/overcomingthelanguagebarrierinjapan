"use client";

import { useEffect, useState } from "react";
import PhraseCard from "@/components/PhraseCard";
import TitleReveal from "@/components/TitleReveal";
import ChinarLeaf from "@/components/ChinarLeaf";
import type { Lesson } from "@/data/phrases";

const STORAGE_KEY = "koshur-learned-v1";

function loadLearned(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function saveLearned(ids: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Private browsing etc. Progress just won't be remembered.
  }
}

type Props = { featured: Lesson; lessons: Lesson[]; quips: string[] };

export default function Course({ featured, lessons, quips }: Props) {
  const [learned, setLearned] = useState<string[]>([]);
  const [open, setOpen] = useState<string | null>(lessons[0]?.id ?? null);

  useEffect(() => {
    // Read saved progress after mount (localStorage isn't available on the server).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLearned(loadLearned());
  }, []);

  const toggle = (id: string) => {
    setLearned((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      saveLearned(next);
      return next;
    });
  };

  const learnable = [featured, ...lessons].flatMap((l) => l.phrases.filter((p) => p.pronunciation));
  const learnedCount = learnable.filter((p) => learned.includes(p.id)).length;
  const pct = learnable.length ? Math.round((learnedCount / learnable.length) * 100) : 0;

  let q = 0;
  const quip = () => quips[q++ % quips.length];

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="brand">
            <ChinarLeaf className="brand-leaf" />
            <span>
              Koshur <span className="brand-sub">with Fayk</span>
            </span>
          </a>
          <div className="progress-pill" aria-label={`${learnedCount} of ${learnable.length} phrases learned`}>
            <span className="progress-track">
              <span className="progress-fill" style={{ width: `${pct}%` }} />
            </span>
            <span>
              {learnedCount}/{learnable.length}
            </span>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="kicker">A private course · Class size: one</p>
              <TitleReveal />
              <p className="intro">
                Welcome to the most exclusive language school in the world. Tap a card to see the
                Kashmiri, say it out loud, and try not to embarrass yourself.
              </p>
              <blockquote className="motto">
                <p>“Godde hech koshur, pata karakh japani.”</p>
                <cite>Master ji Fayk Seab</cite>
              </blockquote>
            </div>

            <div className="hero-tile" aria-label="Koshur, the Kashmiri name for Kashmiri">
              <span className="tile-label">You are learning</span>
              <span className="tile-ks" lang="ks" dir="rtl">
                کٲشُر
              </span>
              <span className="tile-roman">Koshur</span>
              <span className="tile-caption">what Kashmiris call their language</span>
            </div>
          </div>
        </section>

        <section className="featured wrap" aria-labelledby="featured-title">
          <div className="section-head">
            <p className="kicker">Start here</p>
            <h2 id="featured-title">{featured.title}</h2>
            <p className="section-intro">{featured.intro}</p>
          </div>
          <div className="featured-grid">
            {featured.phrases.map((p) => (
              <PhraseCard
                key={p.id}
                phrase={p}
                quip={quip()}
                size="large"
                learned={learned.includes(p.id)}
                onToggleLearned={() => toggle(p.id)}
              />
            ))}
          </div>
        </section>

        <section className="units wrap" aria-labelledby="units-title">
          <div className="section-head">
            <p className="kicker">The course</p>
            <h2 id="units-title">Units</h2>
          </div>

          <ol className="unit-list">
            {lessons.map((lesson, i) => {
              const done = lesson.phrases.filter((p) => learned.includes(p.id)).length;
              const isOpen = open === lesson.id;
              return (
                <li key={lesson.id} id={lesson.id} className={`unit ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="unit-head"
                    onClick={() => setOpen(isOpen ? null : lesson.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="unit-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="unit-titles">
                      <span className="unit-title">{lesson.title}</span>
                      <span className="unit-intro">{lesson.intro}</span>
                    </span>
                    <span className="unit-meta">
                      {done}/{lesson.phrases.length}
                      <span className="chev" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="unit-body">
                      <div className="card-grid">
                        {lesson.phrases.map((p) => (
                          <PhraseCard
                            key={p.id}
                            phrase={p}
                            quip={quip()}
                            learned={learned.includes(p.id)}
                            onToggleLearned={() => toggle(p.id)}
                          />
                        ))}
                      </div>
                      {lesson.funFact && (
                        <aside className="fun-fact">
                          <strong>Fayk’s fun fact</strong>
                          <p>{lesson.funFact}</p>
                        </aside>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      </main>

      <footer className="footer wrap">
        <p>Every phrase approved by Master ji Fayk Seab, Kulgam’s finest.</p>
        <p className="muted">Made with noon chai and questionable teaching methods.</p>
      </footer>
    </>
  );
}
