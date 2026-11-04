import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Figtree, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const body = Figtree({ variable: "--font-body", subsets: ["latin"] });
// Naskh covers the Kashmiri-specific letters (e.g. ٲ in کٲشُر) and diacritics.
const naskh = Noto_Naskh_Arabic({
  variable: "--font-kashmiri",
  subsets: ["arabic"],
  weight: ["400", "600"],
});

// The disguise: link previews and the browser tab say "Japan".
// The real title only appears once the page is open.
const disguiseTitle = "Overcoming the Language Barrier in Japan";
const disguiseDescription =
  "A practical guide to overcoming the language barrier in Japan: essential phrases, etiquette and tips for your first trip.";

export const metadata: Metadata = {
  title: disguiseTitle,
  description: disguiseDescription,
  openGraph: {
    title: disguiseTitle,
    description: disguiseDescription,
    type: "website",
    siteName: disguiseTitle,
  },
  twitter: {
    card: "summary",
    title: disguiseTitle,
    description: disguiseDescription,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  themeColor: "#2b1c12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${naskh.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
