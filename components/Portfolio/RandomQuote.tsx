"use client";

import { useTheme } from "next-themes";

export default function RandomQuote() {
  const { theme } = useTheme();

  const imgSrc =
    theme === "dark"
      ? "https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark"
      : "https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light";

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 animate-fade-in-blur">
      <div className="flex justify-center items-center">
        <img src={imgSrc} alt="Random Quote" />
      </div>
    </div>
  );
}
