import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "At-Home Kits | KYB Hercules",
  description: "At-home semen analysis and hormone kits. Discreet packaging and neutral billing.",
};

const kits = [
  { id: "semen", name: "At-Home Semen Analysis Kit", desc: "Lab-grade sample collection with discreet pickup and results in your secure vault.", price: "\u20B94,999", features: ["Discreet packaging", "Sample collection at home", "Logistics pickup (Delhivery/BlueDart)", "Results in your Health Vault", "Optional doctor review"] },
  { id: "hormone", name: "Hormone Profile Kit", desc: "At-home hormone testing with clear reporting and specialist interpretation.", price: "\u20B93,499", features: ["Finger-prick or saliva sample", "Key hormones (e.g. testosterone)", "Results in your Health Vault", "Optional consultation to discuss results"] },
];

export default function KitsPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(64px,8vw,100px) clamp(20px,5vw,40px)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", bottom: "-30%", left: "-10%", width: "50%", height: "90%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.18), transparent 60%)", filter: "blur(22px)", animation: "floatGlow 18s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <p data-reveal style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#e3c07e" }}>Diagnostics</p>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(34px,5.4vw,60px)", color: "#f7f3ea" }}>
            At-Home <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Kits</span>
          </h1>
          <p data-reveal style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8" }}>Specialized diagnostics. Neutral billing (e.g. &ldquo;KYB Wellness&rdquo;). Unbranded packaging available.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          {kits.map((kit) => (
            <div key={kit.id} data-reveal style={{ background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "32px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ flex: "1 1 300px" }}>
                  <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "22px", color: "#0c1322" }}>{kit.name}</h2>
                  <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: 1.62, color: "#54607a" }}>{kit.desc}</p>
                  <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {kit.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#3a4252" }}>
                        <span style={{ flex: "0 0 auto", width: "6px", height: "6px", borderRadius: "999px", background: "linear-gradient(135deg,#e3c07e,#b5832f)" }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 600, color: "#0c1322" }}>{kit.price}</div>
                  <button type="button" style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", background: "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)", color: "#fff", border: "none", borderRadius: "13px", padding: "13px 24px", fontSize: "14px", fontWeight: 600, cursor: "pointer", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3),0 8px 20px rgba(149,110,38,0.35)" }}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "820px", margin: "32px auto 0" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "20px 24px", borderRadius: "16px", background: "linear-gradient(180deg,rgba(199,149,71,0.1),rgba(199,149,71,0.05))", border: "1px solid rgba(181,131,47,0.22)" }}>
            <span style={{ flex: "0 0 auto", marginTop: "1px", color: "#9a6e26" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg></span>
            <div>
              <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "#0c1322" }}>Discreet checkout</p>
              <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: 1.6, color: "#54607a" }}>Billing appears as a neutral descriptor (e.g. KYB Wellness). Unbranded packaging on request. Sample pickup is scheduled privately.</p>
            </div>
          </div>
          <p style={{ marginTop: "28px", textAlign: "center" }}>
            <Link href="/book" style={{ fontSize: "14px", fontWeight: 600, color: "#9a6e26" }}>Or book a consultation first to discuss which kit is right for you &#8594;</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
