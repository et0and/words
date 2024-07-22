"use client";

import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";
import MarkovChain from "./utils/markovChain";
import FadingText from "./components/FadingText";
import { fetchText } from "./utils/fetchText";

export default function Home() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function generateSequence() {
      try {
        const sampleText = await fetchText("/words/words.txt");
        const markovChain = new MarkovChain(sampleText);
        const newSequence = markovChain.generateSequence(500);
        setSequence(newSequence);
      } catch (error) {
        console.error("Failed to generate sequence:", error);
      } finally {
        setIsLoading(false);
      }
    }

    generateSequence();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <ClipLoader
          color={"#ffffff"}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl">
        <FadingText words={sequence} />
      </div>
    </main>
  );
}
