import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Confidentiality | KYB Hercules",
  description: "How we protect your data. No sharing, secure records, encrypted communication. Your anonymity respected.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--kyb-navy)] sm:text-4xl">
        Privacy & Confidentiality
      </h1>
      <p className="mt-4 text-[var(--kyb-text-muted)]">
        This page builds trust more than marketing. We mean what we say.
      </p>

      <div className="mt-10 space-y-10 text-[var(--kyb-charcoal)]">
        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">No data sharing</h2>
          <p className="mt-3 leading-relaxed">
            We do not sell, rent, or share your personal or health data with third parties for marketing or advertising. Data is used only to provide your care, process payments (via compliant gateways), and meet legal obligations where required.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Secure records</h2>
          <p className="mt-3 leading-relaxed">
            Your health records, intake forms, and consultation notes are stored with encryption (AES-256 at rest) and accessed only by authorised personnel and the clinicians involved in your care. We comply with applicable data protection laws (e.g. DPDP Act 2023, HIPAA where relevant).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Encrypted communication</h2>
          <p className="mt-3 leading-relaxed">
            Our site and tele-consultation platform use TLS 1.3 for data in transit. Video/audio calls are encrypted. We do not record calls without your explicit consent where required by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Client anonymity respected</h2>
          <p className="mt-3 leading-relaxed">
            You may use an alias when booking and during consultations. We offer options such as camera-off (incognito) calls and a Quick Exit button so you can leave the site instantly. Billing appears under a neutral descriptor (e.g. KYB Wellness), and we offer unbranded packaging for physical products.
          </p>
        </section>

        <section id="terms">
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Terms & conditions</h2>
          <p className="mt-3 leading-relaxed">
            [Prototype: Full terms would be linked or embedded here. Covers use of the platform, eligibility (18+), and acceptable use.]
          </p>
        </section>

        <section id="refund">
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Refund policy</h2>
          <p className="mt-3 leading-relaxed">
            [Prototype: Refund policy for consultations and kits would be stated here—e.g. cancellation windows, unused kit returns.]
          </p>
        </section>

        <section id="disclaimer">
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Disclaimer</h2>
          <p className="mt-3 leading-relaxed">
            KYB Hercules is not a replacement for emergency medical care. If you have a medical emergency, seek immediate help from a hospital or emergency services. Our platform is for non-emergency, elective male sexual health guidance. We recommend you share relevant health information with your primary care provider where appropriate. Age restriction: 18+ only.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--kyb-navy)]">Right to be forgotten</h2>
          <p className="mt-3 leading-relaxed">
            Under applicable law (e.g. DPDP Act 2023), you have the right to request deletion of your data. A clear &quot;Right to be Forgotten&quot; / data deletion option is available in your account settings (or via contact). We will process requests in line with our legal obligations.
          </p>
        </section>
      </div>
    </div>
  );
}
