"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtextRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const animatedNodes = [headlineRef.current, subtextRef.current, ctaRef.current];

    animatedNodes.forEach((node, index) => {
      if (!node) {
        return;
      }

      const staggerMs = index * 80;
      const holdOffset = Math.min(staggerMs / 400, 0.4);

      node.animate(
        [
          { opacity: 0, transform: "translateY(20px)", offset: 0 },
          { opacity: 0, transform: "translateY(20px)", offset: holdOffset },
          { opacity: 1, transform: "translateY(0)", offset: 1 },
        ],
        {
          duration: 400,
          easing: "ease-out",
          fill: "forwards",
        },
      );
    });
  }, []);

  return (
    <header
      role="region"
      aria-labelledby="hero-section-title"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20"
    >
      <article className="max-w-4xl space-y-7">
        <p className="font-heading text-xs uppercase tracking-[0.24em] text-nocturnalExpedition/80">
          AI Automation SaaS
        </p>
        <h1
          id="hero-section-title"
          ref={headlineRef}
          className="font-heading text-4xl leading-tight text-oceanicNoir opacity-0 sm:text-6xl"
        >
          Automate high-impact operations with precision-tuned AI workflows.
        </h1>
        <p
          ref={subtextRef}
          className="max-w-2xl text-base leading-relaxed text-nocturnalExpedition/90 opacity-0 sm:text-lg"
        >
          Vibe Automate turns repetitive execution into durable systems by
          combining intelligent orchestration, live visibility, and
          integration-first architecture.
        </p>
        <nav ref={ctaRef} aria-label="Primary call to action" className="flex flex-wrap gap-3 opacity-0">
          <button
            type="button"
            className="rounded-xl bg-forsythia px-6 py-3 font-heading text-sm uppercase tracking-[0.12em] text-oceanicNoir transition-colors duration-150 ease-out hover:bg-deepSaffron"
          >
            Start Free Trial
          </button>
          <button
            type="button"
            className="rounded-xl border border-nocturnalExpedition px-6 py-3 font-heading text-sm uppercase tracking-[0.12em] text-nocturnalExpedition transition-colors duration-150 ease-out hover:bg-mysticMint"
          >
            Book Demo
          </button>
        </nav>
      </article>
    </header>
  );
}