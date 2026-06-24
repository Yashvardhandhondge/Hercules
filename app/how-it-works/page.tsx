import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | KYB Hercules",
  description: "Book, intake, consult, plan, follow-up. Clear process for confidential male sexual health support.",
};

const steps = [
  { n: "1", title: "Book an appointment", body: "Choose a time that works for you. Session types and pricing are shown upfront. Payment is secure and discreet (billing may appear as e.g. KYB Wellness)." },
  { n: "2", title: "Private intake form", body: "Before your consultation, you complete a confidential intake. This helps the specialist understand your situation and use the session time effectively. Your answers are encrypted and only used for your care." },
  { n: "3", title: "Consultation", body: "Video or audio call with a qualified specialist (urologist, andrologist, or sexologist). You can use an alias and turn the camera off if you prefer (incognito call). The conversation is private and non-judgmental." },
  { n: "4", title: "Structured plan", body: "You receive a clear plan: lifestyle changes, tests (e.g. at-home kits), prescriptions if needed, or follow-up sessions. Everything is documented in your secure portal." },
  { n: "5", title: "Follow-up support", body: "Ongoing support via your portal: lab reports, e-prescriptions, and optional follow-up consultations. You can track progress and revisit your plan when needed." },
];

export default function HowItWorksPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(64px,8vw,100px) clamp(20px,5vw,40px)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", top: "-20%", right: "-10%", width: "50%", height: "80%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.18), transparent 60%)", filter: "blur(22px)", animation: "floatGlow 17s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <p data-reveal style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#e3c07e" }}>The process</p>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(34px,5.4vw,60px)", color: "#f7f3ea" }}>
            How it <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>works</span>
          </h1>
          <p data-reveal style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8" }}>Process clarity. No guesswork. Men need to know exactly what to expect.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          {steps.map((s) => (
            <div key={s.n} data-reveal style={{ display: "flex", gap: "22px", background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "28px 26px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
              <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "999px", background: "linear-gradient(135deg,#f0d9a8,#caa05a 50%,#9a6e26)", color: "#2c1f0a", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "20px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5),0 8px 20px rgba(149,110,38,0.28)" }}>{s.n}</div>
              <div>
                <h2 style={{ margin: 0, fontWeight: 600, fontSize: "18px", color: "#0c1322" }}>{s.title}</h2>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: 1.65, color: "#54607a" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "820px", margin: "32px auto 0" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "20px 24px", borderRadius: "16px", background: "linear-gradient(180deg,rgba(199,149,71,0.1),rgba(199,149,71,0.05))", border: "1px solid rgba(181,131,47,0.22)" }}>
            <span style={{ flex: "0 0 auto", marginTop: "1px", color: "#9a6e26" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-5M12 8h.01" /></svg></span>
            <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.6, color: "#3a3326" }}>Your identity remains confidential at every step. Need to leave quickly? Use the Quick Exit button (top right).</p>
          </div>
          <div style={{ marginTop: "36px", textAlign: "center" }}>
            <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)", color: "#fff", borderRadius: "14px", padding: "17px 32px", fontSize: "16px", fontWeight: 600, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 30px rgba(149,110,38,0.38)" }}>
              Book Consultation <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
