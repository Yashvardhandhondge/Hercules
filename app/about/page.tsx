import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KYB Hercules",
  description: "Our philosophy, scientific approach, and commitment to private, judgment-free male sexual health.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--kyb-navy)] sm:text-4xl">
        About KYB Hercules
      </h1>

      <div className="mt-10 space-y-10 text-[var(--kyb-charcoal)]">
        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Philosophy</h2>
          <p className="mt-3 leading-relaxed">
            KYB Hercules is built on the belief that male sexual health deserves the same clarity, science, and respect as any other health domain. We are not a clinic or a therapy center—we are a performance literacy and health system. Our goal is to provide structured, evidence-backed guidance so you can make informed decisions without shame or sensationalism.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Scientific Approach</h2>
          <p className="mt-3 leading-relaxed">
            Our recommendations are grounded in current medical and scientific evidence. We work with qualified specialists—urologists, andrologists, and sexologists—and offer at-home diagnostics that meet clinical standards. We do not promise instant fixes or miracle results; we offer confidential support and a clear path based on your situation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Ethics & Non-Judgment</h2>
          <p className="mt-3 leading-relaxed">
            We operate with a strict non-judgment policy. Your choices, history, and concerns are met with professionalism and discretion. We use zero shame language and avoid casual or sensational copy. Our tone is clinical but warm, respectful, and masculine-confidence oriented—never dismissive or preachy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Privacy Commitment</h2>
          <p className="mt-3 leading-relaxed">
            Your identity and data are protected. We use encryption, discreet billing descriptors, and optional unbranded packaging. You can use an alias during consultations and exit the site quickly if needed. We do not sell your data and comply with applicable privacy regulations (e.g. DPDP Act 2023, HIPAA where relevant).
          </p>
        </section>

        <p className="border-l-4 border-[var(--kyb-bronze)] bg-[var(--kyb-bronze-muted)] py-2 pl-4 text-sm font-medium text-[var(--kyb-navy)]">
          No exaggerated claims. No miracle language. Just confidential, evidence-backed guidance.
        </p>
      </div>
    </div>
  );
}
