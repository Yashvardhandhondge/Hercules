import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | KYB Hercules",
  description: "Sexual performance guidance, PE counselling, erectile health, libido, and more. Confidential support.",
};

const services = [
  {
    id: "performance",
    title: "Sexual Performance Guidance",
    what: "Structured support to understand and improve sexual performance in a science-based way.",
    who: "Men who want to address performance concerns without stigma or guesswork.",
    session: "Assessment, education, and a clear plan—no pressure, no sensationalism.",
    outcomes: "Clarity on factors affecting performance and actionable steps.",
  },
  {
    id: "pe",
    title: "Premature Ejaculation Counselling",
    what: "Evidence-based approaches to timing and control, with specialist support.",
    who: "Men seeking professional guidance on PE rather than quick-fix myths.",
    session: "Private discussion, possible exercises or protocols, and follow-up.",
    outcomes: "Structured improvement and reduced anxiety around timing.",
  },
  {
    id: "erectile",
    title: "Erectile Health Education",
    what: "Understanding erectile function, lifestyle factors, and when to consider tests or treatment.",
    who: "Men who want to understand causes and options in a confidential setting.",
    session: "Education, history-taking, and recommendations (lifestyle, tests, or treatment).",
    outcomes: "Informed next steps and, where appropriate, a treatment or testing plan.",
  },
  {
    id: "libido",
    title: "Libido & Mental Factors",
    what: "Exploring drive, stress, relationship dynamics, and psychological contributors.",
    who: "Men whose libido or motivation has changed and want a clear, non-judgmental view.",
    session: "Discussion of lifestyle, stress, and mental factors; possible hormone testing.",
    outcomes: "Understanding of contributors and a tailored plan.",
  },
  {
    id: "anxiety",
    title: "Relationship Performance Anxiety",
    what: "Addressing anxiety linked to performance within relationships.",
    who: "Men who feel pressure or worry in intimate situations.",
    session: "Confidential space to discuss anxiety and evidence-based strategies.",
    outcomes: "Reduced anxiety and practical coping strategies.",
  },
  {
    id: "lifestyle",
    title: "Lifestyle Optimization",
    what: "Sleep, stress, fitness, and nutrition in the context of sexual health.",
    who: "Men who want to optimize overall health and its impact on sexual function.",
    session: "Review of habits and targeted recommendations.",
    outcomes: "Clear lifestyle adjustments that support sexual health.",
  },
  {
    id: "testing",
    title: "Sexual Testing Guidance",
    what: "When and how to use at-home or lab tests (semen analysis, hormones, etc.).",
    who: "Men considering fertility or hormone testing who want expert guidance.",
    session: "Explanation of tests, interpretation, and next steps.",
    outcomes: "Informed decisions about testing and follow-up.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--kyb-navy)] sm:text-4xl">
        Services
      </h1>
      <p className="mt-4 text-[var(--kyb-text-muted)]">
        Clear categories. Confidential support. Evidence-backed guidance.
      </p>

      <div className="mt-12 space-y-12">
        {services.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm"
          >
            <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">{s.title}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-[var(--kyb-slate)]">What it is</dt>
                <dd className="mt-0.5 text-[var(--kyb-charcoal)]">{s.what}</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--kyb-slate)]">Who it&apos;s for</dt>
                <dd className="mt-0.5 text-[var(--kyb-charcoal)]">{s.who}</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--kyb-slate)]">What happens in session</dt>
                <dd className="mt-0.5 text-[var(--kyb-charcoal)]">{s.session}</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--kyb-slate)]">Expected outcomes</dt>
                <dd className="mt-0.5 text-[var(--kyb-charcoal)]">{s.outcomes}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/book"
          className="inline-flex rounded-full bg-[var(--kyb-bronze)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--kyb-bronze-light)]"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
