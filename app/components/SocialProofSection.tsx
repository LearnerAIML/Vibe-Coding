const TESTIMONIALS = [
  {
    quote:
      "We replaced five manual handoffs with one automated flow and cut turnaround time by 62% in three weeks.",
    author: "Maya Chen",
    role: "Head of Operations, Fluxline",
  },
  {
    quote:
      "The analytics layer gave us instant confidence. We can trace every automation decision in real time.",
    author: "Ravi Patel",
    role: "Product Lead, Northbound AI",
  },
  {
    quote:
      "Our support team now ships proactive resolutions before customers escalate. This changed our SLA trajectory.",
    author: "Elena Torres",
    role: "Director of CX, Harbor Cloud",
  },
] as const;

export default function SocialProofSection() {
  return (
    <section
      role="region"
      aria-labelledby="social-proof-title"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <header className="mb-8 border-b border-mysticMint pb-6">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-nocturnalExpedition">
          Social Proof
        </p>
        <h2
          id="social-proof-title"
          className="mt-3 font-heading text-3xl text-oceanicNoir sm:text-4xl"
        >
          Trusted by teams shipping automation at scale.
        </h2>
      </header>

      <article className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="rounded-2xl border border-mysticMint bg-arcticPowder p-6 text-oceanicNoir transition-transform duration-150 ease-out hover:-translate-y-1"
          >
            <blockquote className="text-base leading-relaxed text-nocturnalExpedition">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="mt-5 border-t border-mysticMint pt-4">
              <p className="font-heading text-sm text-oceanicNoir">
                {testimonial.author}
              </p>
              <p className="mt-1 text-sm text-nocturnalExpedition/85">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </article>
    </section>
  );
}