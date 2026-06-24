import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Consultation | KYB Hercules",
  description: "Book a private consultation. Session types, transparent pricing. Your identity remains confidential.",
};

const sessions = [
  { name: "First consultation (45 min)", price: "\u20B91,499" },
  { name: "Follow-up (30 min)", price: "\u20B9999" },
  { name: "Multi-session package (3 sessions)", price: "\u20B93,499" },
];

export default function BookPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(64px,8vw,100px) clamp(20px,5vw,40px)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", top: "-20%", left: "-8%", width: "50%", height: "80%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.2), transparent 60%)", filter: "blur(22px)", animation: "floatGlow 17s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <p data-reveal style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#e3c07e" }}>Consultations</p>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(34px,5.4vw,60px)", color: "#f7f3ea" }}>
            Book a <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>consultation</span>
          </h1>
          <p data-reveal style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8" }}>Choose your session type, pick a slot, and pay securely. Your identity remains confidential.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          {/* Alias note */}
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "18px 22px", borderRadius: "16px", background: "linear-gradient(180deg,rgba(199,149,71,0.1),rgba(199,149,71,0.05))", border: "1px solid rgba(181,131,47,0.22)", marginBottom: "32px" }}>
            <span style={{ flex: "0 0 auto", marginTop: "1px", color: "#9a6e26" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg></span>
            <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.6, color: "#3a3326", fontWeight: 500 }}>Your identity remains confidential. You may use an alias when booking.</p>
          </div>

          <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
            {/* Session types */}
            <div style={{ background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "28px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "20px", color: "#0c1322" }}>Session type</h2>
              <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {sessions.map((s) => (
                  <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderRadius: "15px", border: "1px solid rgba(20,32,58,0.08)", background: "rgba(255,255,255,0.5)", cursor: "pointer", transition: "border-color .18s" }}>
                    <span style={{ fontSize: "15px", color: "#3a4252" }}>{s.name}</span>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#0c1322" }}>{s.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Date & time */}
            <div style={{ background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "28px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "20px", color: "#0c1322" }}>Select date &amp; time</h2>
              <p style={{ margin: "10px 0 18px", fontSize: "14px", color: "#54607a" }}>[Calendar and slot picker would integrate here]</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                {["Mon 3 Feb", "Tue 4 Feb", "Wed 5 Feb", "10:00", "11:00", "14:00"].map((slot) => (
                  <button key={slot} type="button" style={{ padding: "12px", borderRadius: "13px", border: "1px solid rgba(20,32,58,0.08)", background: "rgba(255,255,255,0.5)", fontSize: "14px", fontWeight: 500, color: "#3a4252", cursor: "pointer", transition: "border-color .18s" }}>{slot}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ marginTop: "24px", background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "28px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "20px", color: "#0c1322" }}>Your details (secure form)</h2>
            <p style={{ margin: "8px 0 20px", fontSize: "14px", color: "#54607a" }}>Encrypted. Optional: use an alias for display name.</p>
            <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { id: "name", label: "Display name (alias ok)", type: "text", placeholder: "e.g. Alex" },
                { id: "email", label: "Email (for confirmation)", type: "email", placeholder: "you@example.com" },
                { id: "phone", label: "Phone (for reminders, discreet wording)", type: "tel", placeholder: "+91 " },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#8a7a55", marginBottom: "6px", letterSpacing: ".02em" }}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder} style={{ width: "100%", maxWidth: "400px", padding: "12px 16px", borderRadius: "13px", border: "1px solid rgba(20,32,58,0.12)", background: "rgba(255,255,255,0.6)", fontSize: "15px", color: "#0c1322", fontFamily: "inherit" }} />
                </div>
              ))}
            </form>
          </div>

          {/* Payment */}
          <div style={{ marginTop: "24px", background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "28px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "20px", color: "#0c1322" }}>Payment</h2>
            <p style={{ margin: "8px 0 18px", fontSize: "14px", color: "#54607a" }}>Razorpay / CCAvenue integration. UPI, cards, EMI. Billing descriptor: &ldquo;KYB Wellness&rdquo;.</p>
            <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)", color: "#fff", border: "none", borderRadius: "14px", padding: "17px 32px", fontSize: "16px", fontWeight: 600, cursor: "pointer", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 30px rgba(149,110,38,0.38)" }}>
              Proceed to payment <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
