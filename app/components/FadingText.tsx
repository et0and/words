"use client";

import React, { useState, useEffect } from "react";

interface FadingTextProps {
  words: string[];
}

const FadingText: React.FC<FadingTextProps> = ({ words }) => {
  const [visibleWords, setVisibleWords] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setVisibleWords((prevWords) => [...prevWords, words[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="space-x-1">
      {visibleWords.map((word, index) => (
        <span
          key={index}
          className="inline-block transition-opacity duration-200 ease-in-out opacity-0 animate-fade-in"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default FadingText;
