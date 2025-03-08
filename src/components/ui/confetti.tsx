"use client";

import { useRef } from "react";

import { Confetti, type ConfettiRef } from "../magicui/confetti";

export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-red-400 to-yellow-300/80 bg-clip-text text-center text-6xl font-semibold font-serif leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Wishing you a Happy Women's Day
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}

