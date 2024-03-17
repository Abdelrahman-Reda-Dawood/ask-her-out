"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [sureButton, setSureButton] = useState(false);
  const [isSecondButtonHovered, setIsSecondButtonHovered] = useState(false);

  const [buttonTextIndex, setButtonTextIndex] = useState(0);

  const buttonTexts = [
    "Sure",
    "Absolutely",
    "Of Course",
    "I'd Love That",
    "I Agree",
  ];

  const handleSecondButtonClick = () => {
    setIsSecondButtonHovered(true);
    setSureButton(false); // Reset the first button text
    setButtonTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length); // Cycle through the texts
  };

  return (
    <main className="flex flex-col flex-wrap items-center min-h-screen p-24 text-white gap-14">
      <div className="flex flex-col items-center justify-between h-full gap-3">
        <Image
          unoptimized
          className="aspect-square"
          src={`${
            sureButton
              ? "/kisses.gif"
              : isSecondButtonHovered
              ? "/angry.gif"
              : "/shy.gif"
          }`}
          alt="panadas"
          width={140}
          height={180}
        />
        <h1 className="self-center h-6 text-2xl font-semibold text-center">
          {sureButton
            ? "Yaaaaaaaay!"
            : isSecondButtonHovered
            ? "You Cannot Say No"
            : "Would You Go Out On a Date With Me??"}
        </h1>
      </div>

      <div className="flex justify-between gap-2 text-nowrap">
        <button
          onClick={() => {
            setSureButton(true);
          }}
          className="p-2 font-semibold transition-colors bg-blue-400 rounded shadow-md sm:text-2xl hover:bg-blue-500 ring-1 ring-gray-100 duration-400 xs:text-md">
          {buttonTexts[buttonTextIndex]}
        </button>

        <button
          onClick={handleSecondButtonClick}
          onMouseEnter={() => {
            setIsSecondButtonHovered(true);
          }}
          onMouseLeave={() => {
            setIsSecondButtonHovered(false);
          }}
          className="p-2 font-semibold transition-all bg-red-400 rounded shadow-md cursor-default sm:text-2xl hover:bg-red-500 sm:hover:opacity-0 ring-1 ring-gray-100 duration-400 xs:text-md">
          Sorry, No
        </button>
      </div>
    </main>
  );
}
