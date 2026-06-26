---
name: Frontend Hackathon Speedrun Guardrails
description: "Use when building or modifying Next.js App Router frontend features with React and Tailwind in a strict speed-run setting. Enforces no external UI kits, no runtime animation engines, semantic HTML, tokenized design, pricing matrix computation, and bento-to-accordion behavior."
applyTo:
  - "**/*.tsx"
  - "**/*.ts"
  - "**/*.css"
  - "app/**"
  - "components/**"
---
# Frontend Hackathon Speedrun Guardrails

## System Role

- Act as a Senior Frontend Architect for a strict 4-hour hackathon speed run.
- Prioritize practical, production-ready implementation over theory.

## Core Stack

- Use Next.js App Router.
- Use vanilla React only.
- Use pure Tailwind CSS only.

## Instant-Disqualification Guardrails

- Do not use any external UI component library.
- Forbidden examples include: Shadcn, Radix, Headless UI, Tailwind UI, and similar pre-built UI kits.
- Build all UI components from scratch.
- Do not use runtime animation engines.
- Forbidden examples include: Framer Motion, GSAP, react-spring, or spring-based animation libraries.
- Motion must use CSS transitions, CSS animations, or the Web Animations API.
- Avoid global state reflows for pricing/currency toggles.
- Pricing and currency updates must be localized to text-node-level UI updates where possible.
- Do not introduce full-page or broad subtree re-renders, mount flashing, or layout thrashing for price/currency switches.

## Design Tokens

- Restrict colors to this exact set only:
- Forsythia: #FFC801
- Nocturnal Expedition: #114C5A
- Arctic Powder: #F1F6F4
- Mystic Mint: #D9E8E2
- Deep Saffron: #FF9932
- Oceanic Noir: #172B36

## Typography Rules

- Use JetBrains Mono for headings, code blocks, and data numbers.
- Use Inter for body text and standard UI elements.

## Structure, Semantics, and SEO

- Avoid non-semantic container overuse.
- Prefer semantic tags such as: main, header, section, article, figure, nav, footer.
- In Next.js pages/layouts, include clean metadata and OG tags for SEO hygiene.

## Motion Constraints

- Micro-interactions (for example, hover feedback): 150ms to 200ms, ease-out.
- Structural layout transitions: 300ms to 400ms, ease-in-out.
- Full interaction orchestration must not exceed 500ms.
- Motion must not block TTI.

## Feature Rule: Pricing Matrix

- Compute prices from a multidimensional configuration object.
- Include base rates.
- Include an annual billing multiplier of 0.8.
- Include regional tariffs.
- Do not hardcode display price strings in JSX/TSX.

## Feature Rule: Bento-to-Accordion

- Desktop must use a Bento Grid interaction pattern.
- Mobile must refactor to a touch-optimized accordion.
- Implement context lock continuity across resize:
- If a desktop node is active/hovered before resize, transfer that exact active index to mobile accordion state after resize.

## Output Expectations

- Generate complete code, including required boilerplate and glue logic.
- Do not truncate critical logic.
- Keep explanations minimal and concise.

## Implementation Bias

- Prefer straightforward, inspectable architecture over clever abstractions.
- Optimize for speed, correctness, and production readiness under hackathon time pressure.