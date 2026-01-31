import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "At-Home Kits | KYB Hercules",
  description: "At-home semen analysis and hormone kits. Discreet packaging and neutral billing.",
};

const kits = [
  {
    id: "semen",
    name: "At-Home Semen Analysis Kit",
    shortDesc: "Lab-grade sample collection with discreet pickup and results in your secure vault.",
    price: "₹4,999",
    features: ["Discreet packaging", "Sample collection at home", "Logistics pickup (Delhivery/BlueDart)", "Results in your Health Vault", "Optional doctor review"],
  },
  {
    id: "hormone",
    name: "Hormone Profile Kit",
    shortDesc: "At-home hormone testing with clear reporting and specialist interpretation.",
    price: "₹3,499",
    features: ["Finger-prick or saliva sample", "Key hormones (e.g. testosterone)", "Results in your Health Vault", "Optional consultation to discuss results"],
  },
];

export default function KitsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--kyb-navy)] sm:text-4xl">
        At-Home Kits
      </h1>
      <p className="mt-4 text-[var(--kyb-text-muted)]">
        Specialized diagnostics. Neutral billing (e.g. &quot;KYB Wellness&quot;). Unbranded packaging available.
      </p>

      <div className="mt-10 space-y-8">
        {kits.map((kit) => (
          <article
            key={kit.id}
            className="rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">{kit.name}</h2>
                <p className="mt-2 text-[var(--kyb-charcoal)]">{kit.shortDesc}</p>
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-[var(--kyb-slate)]">
                  {kit.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="font-display text-2xl font-bold text-[var(--kyb-navy)]">{kit.price}</p>
                <button
                  type="button"
                  className="mt-3 rounded-full bg-[var(--kyb-bronze)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--kyb-bronze-light)]"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-[var(--kyb-border)] bg-[var(--kyb-trust-bg)] p-6">
        <h3 className="font-display font-semibold text-[var(--kyb-navy)]">Discreet checkout</h3>
        <p className="mt-2 text-sm text-[var(--kyb-charcoal)]">
          Billing appears as a neutral descriptor (e.g. KYB Wellness). You can request unbranded packaging at checkout. Sample pickup is scheduled privately with temperature-controlled tracking.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link href="/book" className="text-sm font-semibold text-[var(--kyb-bronze)] hover:underline">
          Or book a consultation first to discuss which kit is right for you →
        </Link>
      </div>
    </div>
  );
}
