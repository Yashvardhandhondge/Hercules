import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | KYB Hercules",
  description: "Book, intake, consult, plan, follow-up. Clear process for confidential male sexual health support.",
};

const steps = [
  {
    step: 1,
    title: "Book an appointment",
    body: "Choose a time that works for you. Session types and pricing are shown upfront. Payment is secure and discreet (billing may appear as e.g. KYB Wellness).",
  },
  {
    step: 2,
    title: "Private intake form",
    body: "Before your consultation, you complete a confidential intake. This helps the specialist understand your situation and use the session time effectively. Your answers are encrypted and only used for your care.",
  },
  {
    step: 3,
    title: "Consultation",
    body: "Video or audio call with a qualified specialist (urologist, andrologist, or sexologist). You can use an alias and turn the camera off if you prefer (incognito call). The conversation is private and non-judgmental.",
  },
  {
    step: 4,
    title: "Structured plan",
    body: "You receive a clear plan: lifestyle changes, tests (e.g. at-home kits), prescriptions if needed, or follow-up sessions. Everything is documented in your secure portal.",
  },
  {
    step: 5,
    title: "Follow-up support",
    body: "Ongoing support via your portal: lab reports, e-prescriptions, and optional follow-up consultations. You can track progress and revisit your plan when needed.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--kyb-navy)] sm:text-4xl">
        How It Works
      </h1>
      <p className="mt-4 text-[var(--kyb-text-muted)]">
        Process clarity. No guesswork. Men need to know exactly what to expect.
      </p>

      <ol className="mt-12 space-y-10">
        {steps.map(({ step, title, body }) => (
          <li key={step} className="flex gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--kyb-bronze)] font-display text-lg font-bold text-white">
              {step}
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">{title}</h2>
              <p className="mt-2 text-[var(--kyb-charcoal)] leading-relaxed">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 rounded-xl border border-[var(--kyb-border)] bg-[var(--kyb-trust-bg)] p-6">
        <p className="text-sm font-medium text-[var(--kyb-navy)]">
          Your identity remains confidential at every step. Need to leave quickly? Use the Quick Exit button (bottom right).
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/book"
          className="inline-flex rounded-full bg-[var(--kyb-bronze)] px-8 py-3.5 font-semibold text-white transition hover:bg-[var(--kyb-bronze-light)]"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
