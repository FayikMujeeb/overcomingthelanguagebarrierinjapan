// All lesson content lives here. Edit this file to add, fix or reorder phrases.
//
// RULES (please keep them):
// - `script` is the Perso-Arabic Kashmiri. Leave it "" until a native speaker
//   or reliable source has checked it. Never guess it from the romanization.
// - Set `verified: true` only after that check. Unverified phrases show a
//   "draft" badge on the site.
// - `pronunciation` is the easy-to-read romanization Arousha actually reads.
// - `audio` is a path under /public, e.g. "/audio/thank-you.mp3". Leave it out
//   if there is no clip; the play button then simply doesn't appear.
// - Arousha is a woman, so use the feminine forms where a phrase changes with
//   the speaker's or listener's gender.

export type Phrase = {
  id: string;
  english: string;
  pronunciation: string;
  script: string;
  verified: boolean;
  audio?: string;
  /** Optional extra context shown under the phrase, in Fayk's voice. */
  note?: string;
};

export type Lesson = {
  id: string;
  title: string;
  intro: string;
  /** Optional "fun fact" box shown at the end of the lesson. */
  funFact?: string;
  phrases: Phrase[];
};

// Shown front and centre at the top of the page.
// All romanizations were written or approved by Fayk (native speaker, Kulgam), 2026-11-04.
// `script` stays "" until the Perso-Arabic spelling is checked too.
export const featured: Lesson = {
  id: "plans",
  title: "Plans with Fayk",
  intro: "The phrases you'll actually use. Learn these first.",
  phrases: [
    {
      id: "go-running",
      english: "Let's go running",
      pronunciation: "Dorni ha gasov",
      script: "",
      verified: true,
    },
    {
      id: "dakshin-coffee",
      english: "Let's go to Dakshin for coffee",
      pronunciation: "Kofi cheni ha gasov Dakhsin",
      script: "",
      verified: true,
    },
    {
      id: "watch-movie",
      english: "Let's watch a movie",
      pronunciation: "Tala laag kanh filma wilma",
      script: "",
      verified: true,
      note: "“Filma wilma” = “a movie or whatever”. Very casual. Very Fayk.",
    },
    {
      id: "smoke",
      english: "Let's smoke a cigarette",
      pronunciation: "Zaale teli Four Square akha",
      script: "",
      verified: true,
    },
  ],
};

export const lessons: Lesson[] = [
  {
    id: "greetings",
    title: "Greetings",
    intro: "First impressions matter. Say these and every Kashmiri aunty will offer you tea.",
    phrases: [
      {
        id: "peace",
        english: "Peace be upon you",
        pronunciation: "Assalamu alaikum",
        script: "",
        verified: true,
      },
      {
        id: "how-are-you",
        english: "How are you?",
        pronunciation: "Tuhi kyah chhu haal?",
        script: "",
        verified: true,
      },
      {
        id: "i-am-fine",
        english: "I am fine",
        pronunciation: "Bi chhas theek",
        script: "",
        verified: true,
        note: "This is the version for a woman speaking. Yes, Kashmiri cares who's talking.",
      },
      {
        id: "thank-you",
        english: "Thank you",
        pronunciation: "Shukriya",
        script: "",
        verified: true,
      },
      {
        id: "goodbye",
        english: "Goodbye",
        pronunciation: "Khuda hafiz",
        script: "",
        verified: true,
      },
      {
        id: "good-night",
        english: "Good night",
        pronunciation: "Shabe khair",
        script: "",
        verified: true,
      },
    ],
  },
  {
    id: "about-me",
    title: "All about Arousha",
    intro: "The essentials for introducing yourself, and for admitting defeat.",
    phrases: [
      {
        id: "kulgam-sorry",
        english: "I'm sorry, I can't speak Kashmiri. I'm from Kulgam.",
        pronunciation: "Mazraath maaf, be hez chas Kesher, magar me chane Kesher tagaan",
        script: "",
        verified: true,
      },
      {
        id: "my-name",
        english: "My name is Arousha",
        pronunciation: "Myon naav chhu Arousha",
        script: "",
        verified: true,
      },
      {
        id: "i-speak-kashmiri",
        english: "I speak Kashmiri",
        pronunciation: "Bi chhas koshur kathan karan",
        script: "",
        verified: true,
        note: "A bold claim. Use with confidence and a straight face.",
      },
      {
        id: "dont-understand",
        english: "I don't understand",
        pronunciation: "Mye chhu ne fikri traan",
        script: "",
        verified: true,
        note: "You'll be using this one a lot. No shame.",
      },
    ],
  },
  {
    id: "basics",
    title: "The basics",
    intro: "Small words, big power.",
    funFact:
      "Kashmiri puts the verb in second place in a sentence, just like German. So technically you're also learning a bit of German. You're welcome.",
    phrases: [
      {
        id: "yes",
        english: "Yes",
        pronunciation: "Aa",
        script: "",
        verified: true,
      },
      {
        id: "no",
        english: "No",
        pronunciation: "Ne",
        script: "",
        verified: true,
      },
      {
        id: "what-is-this",
        english: "What is this?",
        pronunciation: "Yi kyah chhu?",
        script: "",
        verified: true,
      },
    ],
  },
  {
    id: "food",
    title: "Food (the important lesson)",
    intro: "In Kashmir, love is measured in how many times someone asks if you've eaten.",
    phrases: [
      {
        id: "have-you-eaten",
        english: "Have you eaten?",
        pronunciation: "Batte khyov?",
        script: "",
        verified: true,
      },
      {
        id: "noon-chai",
        english: "Tea with salt and milk",
        pronunciation: "Noon chai",
        script: "",
        verified: true,
        note: "Pink. Salty. Non-negotiable. Do not ask for sugar.",
      },
    ],
  },
  {
    id: "celebrations",
    title: "Celebrations",
    intro: "For when you need to impress at a party.",
    phrases: [
      {
        id: "happy-birthday",
        english: "Happy birthday",
        pronunciation: "Cze chui zahdoh mubarak",
        script: "",
        verified: true,
      },
    ],
  },
  {
    id: "fun",
    title: "Life lessons",
    intro: "Wisdom from your teacher.",
    phrases: [
      {
        id: "one-language",
        english: "One language is never enough",
        pronunciation: "Akh zabaan che ne zanh kaefi",
        script: "",
        verified: true,
        note: "Which is why Japanese comes after this. Obviously.",
      },
    ],
  },
];

/** Teasing lines Fayk says when a card is turned over. Add more freely. */
export const faykQuips: string[] = [
  "Say it out loud. Nobody's listening. (I'm listening.)",
  "Perfect. Your accent is almost not terrible.",
  "Japan is impressed already.",
  "Gold star. Well, a walnut-coloured star.",
  "Try saying it three times fast.",
  "You got this. Probably.",
  "Fayk approves. Mostly.",
  "Wow, practically a native. A native of somewhere.",
];
