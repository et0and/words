import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Words",
  description: "When listening to the wind, maybe I can learn something.",
  openGraph: {
    title: "Words",
    description: "When listening to the wind, maybe I can learn something.",
    url: "https://work.tom.so/words",
    siteName: "Words",
    locale: "en_NZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Words",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/words/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/words/og.png" />
        <meta
          name="description"
          content="When listening to the wind, maybe I can learn something."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/words/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/words/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/words/favicon-16x16.png"
        />
        <link rel="manifest" href="/words/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
