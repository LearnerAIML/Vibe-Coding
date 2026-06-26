"use client";

import { useEffect, useRef } from "react";

type BillingCycle = "monthly" | "annual";
type CurrencyCode = "USD" | "INR" | "EUR";

export const PRICING_MATRIX = {
  annualMultiplier: 0.8,
  currencyTariffs: {
    USD: { multiplier: 1, symbol: "$" },
    INR: { multiplier: 83.5, symbol: "₹" },
    EUR: { multiplier: 0.92, symbol: "€" },
  },
  tiers: [
    {
      name: "Starter",
      baseMonthlyUSD: 29,
      description: "For solo builders automating lightweight workflows.",
    },
    {
      name: "Pro",
      baseMonthlyUSD: 79,
      description: "For growing teams shipping AI operations daily.",
    },
    {
      name: "Enterprise",
      baseMonthlyUSD: 199,
      description: "For multi-team orchestration with governance controls.",
    },
  ],
} as const;

export default function PricingSection() {
  const billingRef = useRef<BillingCycle>("monthly");
  const currencyRef = useRef<CurrencyCode>("USD");
  const priceNodeRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const updatePriceTextNodes = () => {
    const tariff = PRICING_MATRIX.currencyTariffs[currencyRef.current];
    const billingMultiplier =
      billingRef.current === "annual" ? PRICING_MATRIX.annualMultiplier : 1;

    PRICING_MATRIX.tiers.forEach((tier, index) => {
      const node = priceNodeRefs.current[index];

      if (!node) {
        return;
      }

      const amount = Math.round(
        tier.baseMonthlyUSD * tariff.multiplier * billingMultiplier,
      );

      node.innerText = `${tariff.symbol}${amount.toLocaleString("en-US")}`;
    });
  };

  useEffect(() => {
    updatePriceTextNodes();
  }, []);

  return (
    <section
      role="region"
      aria-labelledby="pricing-section-title"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <header className="mb-8 flex flex-col gap-5 border-b border-mysticMint pb-6 lg:flex-row lg:items-end lg:justify-between">
        <article className="space-y-3">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-nocturnalExpedition">
            Pricing Matrix
          </p>
          <h2
            id="pricing-section-title"
            className="font-heading text-3xl text-oceanicNoir sm:text-4xl"
          >
            Pick a plan built for your automation velocity.
          </h2>
        </article>

        <form className="flex flex-col gap-4 sm:flex-row sm:items-center" aria-label="Pricing controls">
          <fieldset className="flex items-center rounded-xl border border-mysticMint bg-mysticMint/60 p-1">
            <legend className="sr-only">Billing cycle</legend>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="billing"
                value="monthly"
                className="peer sr-only"
                defaultChecked
                onChange={() => {
                  billingRef.current = "monthly";
                  updatePriceTextNodes();
                }}
              />
              <span className="inline-flex rounded-lg px-4 py-2 text-sm font-medium text-nocturnalExpedition transition-colors duration-150 ease-out peer-checked:bg-forsythia peer-checked:text-oceanicNoir">
                Monthly
              </span>
            </label>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="billing"
                value="annual"
                className="peer sr-only"
                onChange={() => {
                  billingRef.current = "annual";
                  updatePriceTextNodes();
                }}
              />
              <span className="inline-flex rounded-lg px-4 py-2 text-sm font-medium text-nocturnalExpedition transition-colors duration-150 ease-out peer-checked:bg-forsythia peer-checked:text-oceanicNoir">
                Annual
              </span>
            </label>
          </fieldset>

          <label className="font-heading text-xs uppercase tracking-[0.12em] text-nocturnalExpedition">
            Currency
            <select
              name="currency"
              defaultValue="USD"
              className="mt-1 block w-full rounded-lg border border-mysticMint bg-arcticPowder px-3 py-2 text-base text-oceanicNoir focus:border-deepSaffron focus:outline-none"
              onChange={(event) => {
                currencyRef.current = event.target.value as CurrencyCode;
                updatePriceTextNodes();
              }}
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </form>
      </header>

      <article className="overflow-hidden rounded-2xl border border-mysticMint bg-arcticPowder">
        <table className="w-full border-collapse">
          <caption className="sr-only">Pricing tiers for Starter, Pro, and Enterprise plans</caption>
          <thead>
            <tr className="border-b border-mysticMint bg-mysticMint/40 text-left">
              <th scope="col" className="px-5 py-4 font-heading text-sm uppercase tracking-[0.12em] text-nocturnalExpedition">
                Plan
              </th>
              <th scope="col" className="px-5 py-4 font-heading text-sm uppercase tracking-[0.12em] text-nocturnalExpedition">
                Description
              </th>
              <th scope="col" className="px-5 py-4 text-right font-heading text-sm uppercase tracking-[0.12em] text-nocturnalExpedition">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {PRICING_MATRIX.tiers.map((tier, index) => (
              <tr key={tier.name} className="border-b border-mysticMint last:border-b-0">
                <th scope="row" className="px-5 py-5 font-heading text-lg text-oceanicNoir">
                  {tier.name}
                </th>
                <td className="px-5 py-5 text-nocturnalExpedition">{tier.description}</td>
                <td className="px-5 py-5 text-right">
                  <span
                    ref={(node) => {
                      priceNodeRefs.current[index] = node;
                    }}
                    className="data-number inline-block min-w-28 font-heading text-2xl text-oceanicNoir"
                  >
                    --
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-nocturnalExpedition">
                    per month equivalent
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}