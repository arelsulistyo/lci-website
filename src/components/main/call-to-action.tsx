"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function CallToAction() {
  return (
    <section className="max-w-7xl py-16 mx-auto">
      <BackgroundGradient className="relative overflow-hidden rounded-[22px] h-48  bg-white dark:bg-zinc-900">
        <BackgroundGradientAnimation size="20%" />
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Xypher
          </p>
        </div>
      </BackgroundGradient>
    </section>
  );
}
