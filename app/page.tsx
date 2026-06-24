import Link from "next/link";

const highlightCards = [
  {
    title: "Erectile Health",
    badge: "Flagship",
    desc: "Understand what\u2019s going on and what to do next \u2014 starting with a private, 2-minute assessment.",
    cta: "Start assessment",
    href: "/ed",
    featured: true,
  },
  {
    title: "Tele-Consultations",
    badge: "Private",
    desc: "Discreet video sessions with urologists, andrologists, and sexologists. Optional incognito mode.",
    cta: "Learn more",
    href: "/book",
    featured: false,
  },
  {
    title: "At-Home Kits",
    badge: "Discreet",
    desc: "Semen analysis and hormone kits with neutral packaging and discreet billing.",
    cta: "Learn more",
    href: "/kits",
    featured: false,
  },
];

const pillars = [
  { title: "Confidential by design", desc: "Encrypted, alias-friendly, discreet billing." },
  { title: "Evidence-based", desc: "Validated tools and specialist care \u2014 no hype." },
  { title: "For men 18+", desc: "Private guidance, on your terms." },
];

const howSteps = [
  { n: "1", title: "Assess privately", desc: "A short, validated questionnaire \u2014 about two minutes, fully confidential." },
  { n: "2", title: "Consult a specialist", desc: "Discreet video or audio session with the right expert for you." },
  { n: "3", title: "Get a structured plan", desc: "Evidence-based next steps tailored to you. No miracle claims." },
  { n: "4", title: "Follow up & adjust", desc: "We track progress with you and refine over time." },
];

const testimonials = [
  { quote: "Finally a place that doesn\u2019t feel like a shady ad. Clear, professional, and private.", tag: "M, 32" },
  { quote: "The at-home kit was discreet. Consultation was to the point and helpful.", tag: "Anonymous" },
  { quote: "Evidence-backed and no pressure. Exactly what I was looking for.", tag: "K, 28" },
];

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      {/* ─── Hero ─── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 52%,#070b12 100%)",
          padding: "clamp(80px,11vw,148px) clamp(20px,5vw,40px) clamp(72px,9vw,120px)",
        }}
      >
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", top: "-12%", left: "-8%", width: "60%", height: "80%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.22), transparent 62%)", filter: "blur(20px)", animation: "floatGlow 16s ease-in-out infinite" }} />
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", bottom: "-20%", right: "-6%", width: "48%", height: "72%", background: "radial-gradient(circle at 50% 50%, rgba(46,74,120,0.4), transparent 64%)", filter: "blur(22px)", animation: "floatGlow2 19s ease-in-out infinite" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(231,192,126,0.55),transparent)" }} />

        <div style={{ position: "relative", maxWidth: "1220px", margin: "0 auto", display: "grid", gap: "clamp(40px,6vw,80px)", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", alignItems: "center" }}>
          <div>
            <p data-reveal style={{ margin: "0 0 26px", display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".26em", textTransform: "uppercase", color: "#e3c07e" }}>
              <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "linear-gradient(90deg,transparent,rgba(231,192,126,0.8))" }} />
              Know You Better
            </p>
            <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.032em", lineHeight: 0.99, fontSize: "clamp(42px,7.4vw,84px)", color: "#f7f3ea", // @ts-expect-error --sd
              "--sd": "60ms" }}>
              Men&rsquo;s health, handled{" "}
              <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>privately</span>
              {" "}&amp; with science.
            </h1>
            <p data-reveal style={{ margin: "30px 0 0", maxWidth: "520px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8", // @ts-expect-error --sd
              "--sd": "140ms" }}>
              Evidence-backed guidance, confidential consultations, and discreet at-home diagnostics &mdash; for men 18+ who want clarity, not shame.
            </p>
            <div data-reveal style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "14px", // @ts-expect-error --sd
              "--sd": "220ms" }}>
              <Link href="/ed" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)", color: "#fff", borderRadius: "14px", padding: "17px 32px", fontSize: "16px", fontWeight: 600, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 30px rgba(149,110,38,0.38),0 2px 6px rgba(5,8,14,0.3)", transition: "transform .28s cubic-bezier(.16,1,.3,1),box-shadow .28s" }}>
                Explore Erectile Health <span aria-hidden="true">&#8594;</span>
              </Link>
              <Link href="/ed/assessment" style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.045)", color: "#f5f1e8", border: "1px solid rgba(231,192,126,0.28)", borderRadius: "14px", padding: "17px 28px", fontSize: "16px", fontWeight: 500, backdropFilter: "blur(8px)", transition: "background .25s,border-color .25s,transform .25s" }}>
                Take the 2-min assessment
              </Link>
            </div>
            <p data-reveal style={{ marginTop: "28px", fontSize: "13px", color: "#717d92", // @ts-expect-error --sd
              "--sd": "300ms" }}>
              Free &middot; Anonymous &middot; For men 18+
            </p>
          </div>

          {/* Pillars */}
          <div data-reveal style={{ display: "flex", flexDirection: "column", gap: "14px", // @ts-expect-error --sd
            "--sd": "200ms" }}>
            {pillars.map((p) => (
              <div key={p.title} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 22px", borderRadius: "18px", background: "linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))", border: "1px solid rgba(231,192,126,0.14)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(5,8,14,0.3)" }}>
                <span aria-hidden="true" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,rgba(231,192,126,0.18),rgba(181,131,47,0.08))", border: "1px solid rgba(231,192,126,0.22)", color: "#e3c07e" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" /></svg>
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "15.5px", color: "#f5f1e8" }}>{p.title}</div>
                  <div style={{ marginTop: "3px", fontSize: "13px", lineHeight: 1.5, color: "#94a0b4" }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Highlight Cards ─── */}
      <section style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(199,149,71,0.07), transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "1220px", margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: "680px" }}>
            <p style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#9a6e26" }}>What we do</p>
            <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.04, fontSize: "clamp(32px,4.8vw,52px)", color: "#0c1322" }}>
              A structured health system &mdash; <span style={{ fontStyle: "italic", color: "#9a6e26" }}>not a clinic ad</span>.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: "17px", lineHeight: 1.62, color: "#54607a" }}>Confidential support built around privacy, evidence, and follow-through.</p>
          </div>
          <div style={{ marginTop: "48px", display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))" }}>
            {highlightCards.map((c) => (
              <Link key={c.title} href={c.href} data-reveal style={{
                display: "flex", flexDirection: "column", textAlign: "left", borderRadius: "22px", padding: "32px", transition: "border-color .3s, box-shadow .3s, transform .3s",
                background: c.featured ? "linear-gradient(165deg,#0f1730,#0b1322)" : "linear-gradient(180deg,#fffdf8,#faf6ec)",
                border: c.featured ? "1px solid rgba(231,192,126,0.22)" : "1px solid rgba(20,32,58,0.08)",
                boxShadow: c.featured ? "0 1px 0 rgba(231,192,126,0.1) inset, 0 18px 44px rgba(8,12,20,0.28)" : "0 1px 2px rgba(8,12,20,0.04), 0 14px 34px rgba(8,12,20,0.06)",
              }}>
                <span style={{ alignSelf: "flex-start", marginTop: "0", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", padding: "5px 11px", borderRadius: "999px",
                  background: c.featured ? "rgba(231,192,126,0.14)" : "rgba(181,131,47,0.1)",
                  color: c.featured ? "#e3c07e" : "#9a6e26",
                }}>{c.badge}</span>
                <h3 style={{ margin: "14px 0 0", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "24px", color: c.featured ? "#f7f3ea" : "#0c1322" }}>{c.title}</h3>
                <p style={{ margin: "12px 0 0", fontSize: "15px", lineHeight: 1.62, flex: 1, color: c.featured ? "#aab6c8" : "#54607a" }}>{c.desc}</p>
                <span style={{ marginTop: "22px", fontSize: "14px", fontWeight: 600, color: c.featured ? "#e3c07e" : "#9a6e26" }}>{c.cta} <span aria-hidden="true">&#8594;</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#ece6d8", borderTop: "1px solid rgba(20,32,58,0.06)", borderBottom: "1px solid rgba(20,32,58,0.06)" }}>
        <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
          <div data-reveal style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#9a6e26" }}>The process</p>
            <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(32px,4.8vw,52px)", color: "#0c1322" }}>How it works</h2>
          </div>
          <div style={{ marginTop: "56px", display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {howSteps.map((step) => (
              <div key={step.n} data-reveal style={{ background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "30px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 12px 30px rgba(8,12,20,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "54px", height: "54px", borderRadius: "999px", background: "linear-gradient(135deg,#f0d9a8,#caa05a 50%,#9a6e26)", color: "#2c1f0a", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "23px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5),0 8px 20px rgba(149,110,38,0.28)" }}>{step.n}</div>
                <h3 style={{ margin: "22px 0 0", fontWeight: 600, fontSize: "18px", color: "#0c1322" }}>{step.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: 1.62, color: "#54607a" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Confidentiality Band ─── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "clamp(80px,9vw,124px) clamp(20px,5vw,40px)", background: "linear-gradient(160deg,#0c1322,#070b12)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: "70%", height: "140%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.14), transparent 60%)", filter: "blur(20px)", animation: "floatGlow 18s ease-in-out infinite" }} />
        <div data-reveal style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(30px,4.4vw,46px)", color: "#f7f3ea" }}>
            Your identity remains{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 50%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>confidential</span>.
          </h2>
          <p style={{ margin: "20px auto 0", maxWidth: "560px", fontSize: "16px", lineHeight: 1.68, color: "#aab6c8" }}>
            Encryption, optional aliases, discreet billing (e.g. &ldquo;KYB Wellness&rdquo;), and unbranded packaging on request. Quick-exit the site anytime.
          </p>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
          <div data-reveal style={{ textAlign: "center" }}>
            <p style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#9a6e26" }}>Voices</p>
            <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(32px,4.8vw,52px)", color: "#0c1322" }}>What men say</h2>
            <p style={{ margin: "14px auto 0", maxWidth: "520px", fontSize: "15px", color: "#54607a" }}>Anonymous feedback, shared with permission.</p>
          </div>
          <div style={{ marginTop: "48px", display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit,minmax(286px,1fr))" }}>
            {testimonials.map((t, i) => (
              <blockquote key={i} data-reveal style={{ margin: 0, background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "32px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
                <span aria-hidden="true" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 600, fontSize: "56px", lineHeight: "0.3", background: "linear-gradient(135deg,#e3c07e,#b5832f)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>&ldquo;</span>
                <p style={{ margin: "20px 0 0", fontFamily: "var(--font-serif)", fontSize: "18.5px", lineHeight: 1.5, color: "#26303f" }}>{t.quote}</p>
                <cite style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "10px", fontStyle: "normal", fontSize: "13px", fontWeight: 600, letterSpacing: ".02em", color: "#8a7a55" }}>
                  <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "linear-gradient(90deg,#b5832f,transparent)" }} />
                  {t.tag}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div data-reveal style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(30px,4.6vw,52px)", color: "#0c1322" }}>Ready when you are.</h2>
          <p style={{ margin: "18px 0 0", fontSize: "17px", lineHeight: 1.62, color: "#54607a" }}>Start with a private, 2-minute assessment. Nothing is shared until you choose to.</p>
          <Link href="/ed/assessment" style={{ marginTop: "34px", display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)", color: "#fff", borderRadius: "14px", padding: "17px 34px", fontSize: "16px", fontWeight: 600, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 30px rgba(149,110,38,0.38)", transition: "transform .28s,box-shadow .28s" }}>
            Start Confidential Assessment <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
