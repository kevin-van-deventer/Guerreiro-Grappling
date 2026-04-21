/**
 * PageHero — Reusable hero section modelled on the Rules page design.
 *
 * Props:
 *   title        – Main H1 text (plain string, first word / phrase before highlight)
 *   highlight    – The accented word(s) rendered in `text-primary`
 *   eyebrow      – Small uppercase label below the divider bar
 *   ghostWord    – Large watermark word rendered faintly in the background (e.g. "LAW", "SCHEDULE")
 *   accentColor  – Tailwind color class for the divider bar (defaults to "bg-secondary")
 */

import React from "react";

interface PageHeroProps {
  title: string;
  highlight: string;
  eyebrow: string;
  ghostWord?: string;
  accentColor?: string;
}

export function PageHero({
  title,
  highlight,
  eyebrow,
  ghostWord,
  accentColor = "bg-secondary",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-28 pb-10 md:pt-[104px] md:pb-12 px-4 md:px-8 overflow-hidden bg-surface-container">
      {/* Ghost watermark */}
      {ghostWord && (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-headline font-black text-[30vw] leading-none tracking-tighter text-on-surface select-none uppercase">
            {ghostWord}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 text-center space-y-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-black leading-[0.9] tracking-tighter uppercase italic">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <div className={`h-2 w-32 mx-auto ${accentColor}`} />
        <p className="font-label font-bold text-primary uppercase tracking-[0.4em] text-sm md:text-base italic">
          {eyebrow}
        </p>
      </div>
    </section>
  );
}
