"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [yesButton, setYesButton] = useState(false);
  const [isYesButtonHovered, setIsyesButtonHovered] = useState(false);
  const [isNoButtonHovered, setIsNoButtonHovered] = useState(false);
  const [showBigHearts, setShowBigHearts] = useState(false);
  const [yesButtonIndex, setYesButtonIndex] = useState(0);

  const buttonTexts = [
    "Yesss",
    "Sure",
    "Absolutely",
    "Of Course",
    "I'd Love That",
    "I Agree",
  ];

  const handleFirstButtonClick = () => {
    setYesButton(true);
    setShowBigHearts(true);

    setTimeout(() => {
      setShowBigHearts(false);
    }, 3000);
  };

  const handleSecondButtonClick = () => {
    setIsNoButtonHovered(true);
    setYesButton(false);
    setYesButtonIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
  };

  return (
    <main className="flex flex-col flex-1 items-center min-h-screen p-24 text-white gap-12">
      <div className=" flex flex-col items-center justify-between h-full gap-6">
        <div className="relative overflow-hidden">
          <div className="relative z-50">
            <Image
              unoptimized
              className="aspect-square z-50"
              src={`${
                yesButton
                  ? "/kisses.gif"
                  : isNoButtonHovered
                  ? "/angry.gif"
                  : "/shy.gif"
              }`}
              alt="panadas"
              width={140}
              height={180}
            />
          </div>
          {showBigHearts && (
            <div className="absolute inset-2 z-10">
              <Image
                src="/big-hearts.gif"
                alt="big hearts"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          )}
        </div>

        <h1 className="self-center h-6 min-w-32 text-2xl font-semibold text-center tracking-wide">
          {yesButton
            ? "Yaaaaaaaay!"
            : isNoButtonHovered
            ? "You Cannot Say No"
            : "Would You Go Out On a Date With Me??"}
        </h1>
      </div>

      <div className="relative flex justify-between gap-2 text-nowrap md:mt-0 mt-6">
        {isYesButtonHovered && (
          <>
            <Image
              src={"/hearts.gif"}
              alt="hearts"
              width={30}
              height={27}
              className="absolute -top-8 -left-3"
            />
            <Image
              src={"/hearts.gif"}
              alt="hearts"
              width={30}
              height={27}
              className="absolute -top-8 md:right-[95px] right-[85px]"
            />
          </>
        )}

        <button
          onMouseEnter={() => {
            setIsyesButtonHovered(true);
          }}
          onMouseLeave={() => {
            setIsyesButtonHovered(false);
          }}
          onClick={handleFirstButtonClick}
          className="p-3 z-10 font-semibold transition-colors bg-blue-400 rounded shadow-md sm:text-xl hover:bg-blue-500 ring-1 ring-gray-100 duration-400 xs:text-md">
          {buttonTexts[yesButtonIndex]}
        </button>

        <button
          onClick={handleSecondButtonClick}
          onMouseEnter={() => {
            setIsNoButtonHovered(true);
            setYesButton(false);
            setShowBigHearts(false);
          }}
          onMouseLeave={() => {
            setIsNoButtonHovered(false);
          }}
          className={`p-2 w-full font-semibold transition-all bg-red-400 rounded shadow-md cursor-default sm:text-xl hover:bg-red-500 ring-1 ring-gray-100 duration-400 xs:text-md ${
            isNoButtonHovered && "translate-y-24 rotate-45 "
          }`}>
          Sorry, No
        </button>
      </div>
    </main>
  );
}
