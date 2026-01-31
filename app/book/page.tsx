import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Consultation | KYB Hercules",
  description: "Book a private consultation. Calendar booking, session types, transparent pricing. Your identity remains confidential.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--kyb-navy)] sm:text-4xl">
        Book Consultation
      </h1>
      <p className="mt-4 text-[var(--kyb-text-muted)]">
        Choose your session type, pick a slot, and pay securely. Your identity remains confidential.
      </p>

      <div className="mt-8 rounded-xl border border-[var(--kyb-border)] bg-[var(--kyb-bronze-muted)] p-4 text-sm font-medium text-[var(--kyb-navy)]">
        Your identity remains confidential. You may use an alias when booking.
      </div>

      {/* Prototype: mock booking UI */}
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <section className="rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-[var(--kyb-navy)]">Session type</h2>
          <ul className="mt-4 space-y-3">
            {[
              { name: "First consultation (45 min)", price: "₹1,499" },
              { name: "Follow-up (30 min)", price: "₹999" },
              { name: "Multi-session package (3 sessions)", price: "₹3,499" },
            ].map((s) => (
              <li
                key={s.name}
                className="flex cursor-pointer items-center justify-between rounded-lg border border-[var(--kyb-border)] p-3 transition hover:border-[var(--kyb-bronze)] hover:bg-[var(--kyb-bronze-muted)]"
              >
                <span className="text-[var(--kyb-charcoal)]">{s.name}</span>
                <span className="font-semibold text-[var(--kyb-navy)]">{s.price}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-[var(--kyb-navy)]">Select date & time</h2>
          <p className="mt-2 text-sm text-[var(--kyb-text-muted)]">
            [Prototype: Calendar and slot picker would integrate here]
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Mon 3 Feb", "Tue 4 Feb", "Wed 5 Feb", "10:00", "11:00", "14:00"].map((slot) => (
              <button
                key={slot}
                type="button"
                className="rounded-lg border border-[var(--kyb-border)] py-2 text-sm font-medium text-[var(--kyb-charcoal)] transition hover:border-[var(--kyb-bronze)] hover:bg-[var(--kyb-bronze-muted)]"
              >
                {slot}
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-10 rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-[var(--kyb-navy)]">Your details (secure form)</h2>
        <p className="mt-2 text-sm text-[var(--kyb-text-muted)]">
          Encrypted. Optional: use an alias for display name.
        </p>
        <form className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--kyb-slate)]">
              Display name (alias ok)
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Alex"
              className="mt-1 w-full max-w-md rounded-lg border border-[var(--kyb-border)] px-3 py-2 text-[var(--kyb-navy)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--kyb-slate)]">
              Email (for confirmation)
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full max-w-md rounded-lg border border-[var(--kyb-border)] px-3 py-2 text-[var(--kyb-navy)]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--kyb-slate)]">
              Phone (for reminders, discreet wording)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 "
              className="mt-1 w-full max-w-md rounded-lg border border-[var(--kyb-border)] px-3 py-2 text-[var(--kyb-navy)]"
            />
          </div>
        </form>
      </section>

      <section className="mt-10 rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-[var(--kyb-navy)]">Payment</h2>
        <p className="mt-2 text-sm text-[var(--kyb-text-muted)]">
          [Prototype: Razorpay / CCAvenue integration. UPI, cards, EMI. Billing descriptor: &quot;KYB Wellness&quot;.]
        </p>
        <button
          type="button"
          className="mt-4 rounded-full bg-[var(--kyb-bronze)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--kyb-bronze-light)]"
        >
          Proceed to payment
        </button>
      </section>
    </div>
  );
}
