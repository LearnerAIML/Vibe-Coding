"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive tasks with intelligent agents that adapt to real business context.",
  },
  {
    title: "Real-time Analytics",
    description:
      "Monitor execution health, throughput, and outcomes with live operational visibility.",
  },
  {
    title: "Smart Workflows",
    description:
      "Orchestrate conditional, multi-step pipelines across product, ops, and support.",
  },
  {
    title: "Multi-model Support",
    description:
      "Route tasks across different model families for quality, latency, and cost balance.",
  },
  {
    title: "Security & Compliance",
    description:
      "Protect data with role-based controls, auditability, and compliance-ready patterns.",
  },
  {
    title: "API-first Architecture",
    description:
      "Integrate deeply with your stack using robust APIs and predictable contracts.",
  },
] as const;

export default function FeaturesSection() {
  const hoveredCardIndexRef = useRef(0);
  const previousIsDesktopRef = useRef<boolean | null>(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleViewportChange = () => {
      const isDesktop = mediaQuery.matches;

      if (previousIsDesktopRef.current === null) {
        previousIsDesktopRef.current = isDesktop;
        return;
      }

      if (previousIsDesktopRef.current && !isDesktop) {
        setMobileOpenIndex(hoveredCardIndexRef.current);
      }

      previousIsDesktopRef.current = isDesktop;
    };

    handleViewportChange();

    window.addEventListener("resize", handleViewportChange);
    return () => {
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return (
    <section
      role="region"
      aria-labelledby="features-section-title"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <header className="mb-8 border-b border-mysticMint pb-6">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-nocturnalExpedition">
          Platform Features
        </p>
        <h2
          id="features-section-title"
          className="mt-3 font-heading text-3xl text-oceanicNoir sm:text-4xl"
        >
          Built for velocity, reliability, and deep integration.
        </h2>
      </header>

      <article className="hidden md:grid md:grid-cols-6 md:auto-rows-[170px] md:gap-4">
        {FEATURES.map((feature, index) => {
          const sizeClass =
            index === 0
              ? "md:col-span-3 md:row-span-2"
              : index === 1
                ? "md:col-span-3"
                : index === 2
                  ? "md:col-span-2 md:row-span-2"
                  : index === 3
                    ? "md:col-span-2"
                    : index === 4
                      ? "md:col-span-2"
                      : "md:col-span-2";

          return (
            <article
              key={feature.title}
              className={`rounded-2xl border border-mysticMint bg-arcticPowder p-5 transition-colors duration-150 ease-out hover:border-deepSaffron hover:bg-mysticMint/40 ${sizeClass}`}
              onMouseEnter={() => {
                hoveredCardIndexRef.current = index;
              }}
            >
              <h3 className="font-heading text-xl text-oceanicNoir">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-nocturnalExpedition">
                {feature.description}
              </p>
            </article>
          );
        })}
      </article>

      <article className="space-y-3 md:hidden">
        {FEATURES.map((feature, index) => {
          const isOpen = mobileOpenIndex === index;

          return (
            <section
              key={feature.title}
              className="overflow-hidden rounded-xl border border-mysticMint bg-arcticPowder"
            >
              <h3>
                <button
                  type="button"
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${feature.title}`}
                  aria-expanded={isOpen}
                  aria-controls={`feature-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-150 ease-out hover:bg-mysticMint/40"
                  onClick={() => {
                    setMobileOpenIndex((currentIndex) =>
                      currentIndex === index ? -1 : index,
                    );
                  }}
                >
                  <span className="font-heading text-lg text-oceanicNoir">
                    {feature.title}
                  </span>
                  <span
                    className={`font-heading text-xl text-deepSaffron transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <article
                id={`feature-panel-${index}`}
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  isOpen ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-4 pb-4 text-sm leading-relaxed text-nocturnalExpedition">
                  {feature.description}
                </p>
              </article>
            </section>
          );
        })}
      </article>
    </section>
  );
}