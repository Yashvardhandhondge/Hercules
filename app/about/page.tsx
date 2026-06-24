import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KYB Hercules",
  description: "Our philosophy, scientific approach, and commitment to private, judgment-free male sexual health.",
};

const sections = [
  { title: "Philosophy", body: "KYB Hercules is built on the belief that male sexual health deserves the same clarity, science, and respect as any other health domain. We are not a clinic or a therapy center\u2014we are a performance literacy and health system. Our goal is to provide structured, evidence-backed guidance so you can make informed decisions without shame or sensationalism." },
  { title: "Scientific approach", body: "Our recommendations are grounded in current medical and scientific evidence. We work with qualified specialists\u2014urologists, andrologists, and sexologists\u2014and offer at-home diagnostics that meet clinical standards. We do not promise instant fixes or miracle results; we offer confidential support and a clear path based on your situation." },
  { title: "Ethics & non-judgment", body: "We operate with a strict non-judgment policy. Your choices, history, and concerns are met with professionalism and discretion. We use zero shame language and avoid casual or sensational copy. Our tone is clinical but warm, respectful, and masculine-confidence oriented\u2014never dismissive or preachy." },
  { title: "Privacy commitment", body: "Your identity and data are protected. We use encryption, discreet billing descriptors, and optional unbranded packaging. You can use an alias during consultations and exit the site quickly if needed. We do not sell your data and comply with applicable privacy regulations (e.g. DPDP Act 2023, HIPAA where relevant)." },
];

export default function AboutPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(64px,8vw,100px) clamp(20px,5vw,40px)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", top: "-15%", right: "-8%", width: "55%", height: "85%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.2), transparent 60%)", filter: "blur(22px)", animation: "floatGlow 16s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <p data-reveal style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#e3c07e" }}>About us</p>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(34px,5.4vw,60px)", color: "#f7f3ea" }}>
            Know You <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Better</span>
          </h1>
          <p data-reveal style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8" }}>India&rsquo;s first structured male sexual health guidance platform.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((s) => (
            <div key={s.title} data-reveal style={{ background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "32px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "22px", color: "#0c1322" }}>{s.title}</h2>
              <p style={{ margin: "14px 0 0", fontSize: "15.5px", lineHeight: 1.68, color: "#3a4252" }}>{s.body}</p>
            </div>
          ))}
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "20px 24px", borderRadius: "16px", background: "linear-gradient(180deg,rgba(199,149,71,0.1),rgba(199,149,71,0.05))", border: "1px solid rgba(181,131,47,0.22)" }}>
            <span style={{ flex: "0 0 auto", marginTop: "1px", color: "#9a6e26" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-5M12 8h.01" /></svg></span>
            <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.6, color: "#3a3326", fontWeight: 500 }}>No exaggerated claims. No miracle language. Just confidential, evidence-backed guidance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
