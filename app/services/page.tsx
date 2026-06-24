import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | KYB Hercules",
  description: "Sexual performance guidance, PE counselling, erectile health, libido, and more. Confidential support.",
};

const services = [
  { id: "performance", title: "Sexual Performance Guidance", what: "Structured support to understand and improve sexual performance in a science-based way.", who: "Men who want to address performance concerns without stigma or guesswork.", session: "Assessment, education, and a clear plan\u2014no pressure, no sensationalism.", outcomes: "Clarity on factors affecting performance and actionable steps." },
  { id: "pe", title: "Premature Ejaculation Counselling", what: "Evidence-based approaches to timing and control, with specialist support.", who: "Men seeking professional guidance on PE rather than quick-fix myths.", session: "Private discussion, possible exercises or protocols, and follow-up.", outcomes: "Structured improvement and reduced anxiety around timing." },
  { id: "erectile", title: "Erectile Health Education", what: "Understanding erectile function, lifestyle factors, and when to consider tests or treatment.", who: "Men who want to understand causes and options in a confidential setting.", session: "Education, history-taking, and recommendations (lifestyle, tests, or treatment).", outcomes: "Informed next steps and, where appropriate, a treatment or testing plan." },
  { id: "libido", title: "Libido & Mental Factors", what: "Exploring drive, stress, relationship dynamics, and psychological contributors.", who: "Men whose libido or motivation has changed and want a clear, non-judgmental view.", session: "Discussion of lifestyle, stress, and mental factors; possible hormone testing.", outcomes: "Understanding of contributors and a tailored plan." },
  { id: "anxiety", title: "Relationship Performance Anxiety", what: "Addressing anxiety linked to performance within relationships.", who: "Men who feel pressure or worry in intimate situations.", session: "Confidential space to discuss anxiety and evidence-based strategies.", outcomes: "Reduced anxiety and practical coping strategies." },
  { id: "lifestyle", title: "Lifestyle Optimization", what: "Sleep, stress, fitness, and nutrition in the context of sexual health.", who: "Men who want to optimize overall health and its impact on sexual function.", session: "Review of habits and targeted recommendations.", outcomes: "Clear lifestyle adjustments that support sexual health." },
  { id: "testing", title: "Sexual Testing Guidance", what: "When and how to use at-home or lab tests (semen analysis, hormones, etc.).", who: "Men considering fertility or hormone testing who want expert guidance.", session: "Explanation of tests, interpretation, and next steps.", outcomes: "Informed decisions about testing and follow-up." },
];

export default function ServicesPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(64px,8vw,100px) clamp(20px,5vw,40px)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", top: "-15%", left: "-8%", width: "55%", height: "85%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.2), transparent 60%)", filter: "blur(22px)", animation: "floatGlow 16s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <p data-reveal style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#e3c07e" }}>What we offer</p>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(34px,5.4vw,60px)", color: "#f7f3ea" }}>
            <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Services</span>
          </h1>
          <p data-reveal style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8" }}>Clear categories. Confidential support. Evidence-backed guidance.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          {services.map((s) => (
            <article key={s.id} id={s.id} data-reveal style={{ background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "32px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "22px", color: "#0c1322" }}>{s.title}</h2>
              <div style={{ marginTop: "18px", display: "grid", gap: "14px" }}>
                {[
                  { label: "What it is", val: s.what },
                  { label: "Who it\u2019s for", val: s.who },
                  { label: "What happens in session", val: s.session },
                  { label: "Expected outcomes", val: s.outcomes },
                ].map((item) => (
                  <div key={item.label}>
                    <dt style={{ fontSize: "12px", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#9a6e26", marginBottom: "4px" }}>{item.label}</dt>
                    <dd style={{ margin: 0, fontSize: "15px", lineHeight: 1.62, color: "#3a4252" }}>{item.val}</dd>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)", color: "#fff", borderRadius: "14px", padding: "17px 32px", fontSize: "16px", fontWeight: 600, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 30px rgba(149,110,38,0.38)" }}>
            Book Consultation <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
