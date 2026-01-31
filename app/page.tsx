import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--kyb-navy)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--kyb-bronze-muted),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--kyb-bronze-light)]">
            India&apos;s First Structured Male Sexual Health Platform
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Private. Scientific. Judgment-Free Male Sexual Health Guidance.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Evidence-backed support, confidential consultations, and at-home diagnostics. For men 18+ who want clarity—not judgment.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="rounded-full bg-[var(--kyb-bronze)] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--kyb-bronze-light)]"
            >
              Book Consultation
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-slate-500 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + Who it's for */}
      <section className="border-b border-[var(--kyb-border)] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--kyb-navy)] sm:text-3xl">
                What KYB Hercules Does
              </h2>
              <p className="mt-4 text-[var(--kyb-text-muted)] leading-relaxed">
                We combine at-home diagnostic kits, specialist tele-consultations (urologists, andrologists, sexologists), and a structured health approach. No clinic visits required. Your identity and data stay confidential.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--kyb-navy)] sm:text-3xl">
                Who It&apos;s For
              </h2>
              <p className="mt-4 text-[var(--kyb-text-muted)] leading-relaxed">
                Men 18+ seeking evidence-based guidance on sexual health, fertility, performance, or lifestyle factors—without shame or sensationalism. We&apos;re a performance literacy and health system, not a clinic or therapy center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-b border-[var(--kyb-border)] bg-[var(--kyb-trust-bg)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-2xl font-bold text-[var(--kyb-navy)] sm:text-3xl">
            Services Overview
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kyb-text-muted)]">
            Confidential support tailored to your needs.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tele-Consultations",
                desc: "Private video calls with urologists, andrologists, and sexologists. Optional incognito mode.",
                href: "/book",
              },
              {
                title: "At-Home Kits",
                desc: "Semen analysis and hormone kits. Discreet packaging and neutral billing.",
                href: "/kits",
              },
              {
                title: "Health Quiz & Plan",
                desc: "Logic-based intake and a structured improvement plan based on your answers.",
                href: "/how-it-works",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm transition hover:border-[var(--kyb-bronze)] hover:shadow-md"
              >
                <h3 className="font-display font-semibold text-[var(--kyb-navy)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--kyb-text-muted)]">{item.desc}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[var(--kyb-bronze)]">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-semibold text-[var(--kyb-bronze)] hover:underline">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* How it works (compact) */}
      <section className="border-b border-[var(--kyb-border)] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-2xl font-bold text-[var(--kyb-navy)] sm:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kyb-text-muted)]">
            Simple, clear steps. No guesswork.
          </p>
          <ol className="mx-auto mt-12 max-w-3xl space-y-8">
            {[
              "Book an appointment at a time that suits you.",
              "Complete a private intake form before your consultation.",
              "Have your confidential consultation (video or audio).",
              "Receive a structured plan and any prescriptions or test recommendations.",
              "Get follow-up support and track progress in your portal.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--kyb-bronze-muted)] font-display font-bold text-[var(--kyb-bronze)]">
                  {i + 1}
                </span>
                <span className="pt-1.5 text-[var(--kyb-charcoal)]">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="rounded-full border border-[var(--kyb-charcoal)] px-6 py-2.5 text-sm font-semibold text-[var(--kyb-navy)] transition hover:bg-[var(--kyb-trust-bg)]"
            >
              Full process
            </Link>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="border-b border-[var(--kyb-border)] bg-[var(--kyb-navy)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Confidentiality Assured
          </h2>
          <p className="mt-4 text-slate-300">
            Your identity, data, and conversations are protected. We use encryption, discreet billing (e.g. &quot;KYB Wellness&quot;), and unbranded packaging where requested. You can use an alias and quick-exit the site at any time.
          </p>
        </div>
      </section>

      {/* Testimonials (anonymous) */}
      <section className="border-b border-[var(--kyb-border)] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-2xl font-bold text-[var(--kyb-navy)] sm:text-3xl">
            What Men Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kyb-text-muted)]">
            Anonymous feedback from users.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { quote: "Finally a place that doesn't feel like a shady ad. Clear, professional, and private.", tag: "M, 32" },
              { quote: "The at-home kit was discreet. Consultation was to the point and helpful.", tag: "Anonymous" },
              { quote: "Evidence-backed and no pressure. Exactly what I was looking for.", tag: "K, 28" },
            ].map((t, i) => (
              <blockquote key={i} className="rounded-xl bg-[var(--kyb-trust-bg)] p-6">
                <p className="text-[var(--kyb-charcoal)]">&quot;{t.quote}&quot;</p>
                <cite className="mt-3 block text-sm not-italic text-[var(--kyb-text-muted)]">— {t.tag}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--kyb-trust-bg)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-[var(--kyb-navy)] sm:text-3xl">
            Ready for Confidential Support?
          </h2>
          <p className="mt-4 text-[var(--kyb-text-muted)]">
            Book a consultation or explore at-home kits. Your identity remains confidential.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="rounded-full bg-[var(--kyb-bronze)] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--kyb-bronze-light)]"
            >
              Book Consultation
            </Link>
            <Link
              href="/kits"
              className="rounded-full border border-[var(--kyb-charcoal)] bg-white px-8 py-3.5 text-base font-semibold text-[var(--kyb-navy)] transition hover:bg-[var(--kyb-border)]"
            >
              View At-Home Kits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
