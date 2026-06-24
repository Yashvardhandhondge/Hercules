import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Confidentiality | KYB Hercules",
  description: "How we protect your data. No sharing, secure records, encrypted communication.",
};

const sections = [
  { id: "", title: "No data sharing", body: "We do not sell, rent, or share your personal or health data with third parties for marketing or advertising. Data is used only to provide your care, process payments (via compliant gateways), and meet legal obligations where required." },
  { id: "", title: "Secure records", body: "Your health records, intake forms, and consultation notes are stored with encryption (AES-256 at rest) and accessed only by authorised personnel and the clinicians involved in your care. We comply with applicable data protection laws (e.g. DPDP Act 2023, HIPAA where relevant)." },
  { id: "", title: "Encrypted communication", body: "Our site and tele-consultation platform use TLS 1.3 for data in transit. Video/audio calls are encrypted. We do not record calls without your explicit consent where required by law." },
  { id: "", title: "Client anonymity respected", body: "You may use an alias when booking and during consultations. We offer options such as camera-off (incognito) calls and a Quick Exit button so you can leave the site instantly. Billing appears under a neutral descriptor (e.g. KYB Wellness), and we offer unbranded packaging for physical products." },
  { id: "terms", title: "Terms & conditions", body: "[Full terms would be linked or embedded here. Covers use of the platform, eligibility (18+), and acceptable use.]" },
  { id: "refund", title: "Refund policy", body: "[Refund policy for consultations and kits would be stated here\u2014e.g. cancellation windows, unused kit returns.]" },
  { id: "disclaimer", title: "Disclaimer", body: "KYB Hercules is not a replacement for emergency medical care. If you have a medical emergency, seek immediate help from a hospital or emergency services. Our platform is for non-emergency, elective male sexual health guidance. We recommend you share relevant health information with your primary care provider where appropriate. Age restriction: 18+ only." },
  { id: "", title: "Right to be forgotten", body: "Under applicable law (e.g. DPDP Act 2023), you have the right to request deletion of your data. A clear \u201CRight to be Forgotten\u201D / data deletion option is available in your account settings (or via contact). We will process requests in line with our legal obligations." },
];

export default function PrivacyPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(64px,8vw,100px) clamp(20px,5vw,40px)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", top: "-15%", left: "-10%", width: "55%", height: "85%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.18), transparent 60%)", filter: "blur(22px)", animation: "floatGlow 18s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <p data-reveal style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#e3c07e" }}>Trust</p>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(34px,5.4vw,60px)", color: "#f7f3ea" }}>
            Privacy &amp; <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Confidentiality</span>
          </h1>
          <p data-reveal style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8" }}>This page builds trust more than marketing. We mean what we say.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          {sections.map((s, i) => (
            <div key={i} id={s.id || undefined} data-reveal style={{ background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "32px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "22px", color: "#0c1322" }}>{s.title}</h2>
              <p style={{ margin: "14px 0 0", fontSize: "15.5px", lineHeight: 1.68, color: "#3a4252" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
