import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Education & Blog | KYB Hercules",
  description: "Evidence-based articles on male sexual health: myths vs facts, performance anxiety, lifestyle, and more.",
};

const posts = [
  { slug: "myths-vs-facts", title: "Male Sexual Health: Myths vs Facts", excerpt: "Separating evidence from common misconceptions." },
  { slug: "performance-anxiety", title: "Performance Anxiety: What the Science Says", excerpt: "Understanding anxiety and evidence-backed approaches." },
  { slug: "porn-and-brain", title: "Pornography and the Brain", excerpt: "Neutral, science-based overview of consumption and impact." },
  { slug: "testosterone-lifestyle", title: "Testosterone and Lifestyle Factors", excerpt: "Sleep, stress, exercise, and diet\u2014what actually matters." },
  { slug: "sleep-sexual-health", title: "Sleep and Sexual Health", excerpt: "How sleep affects desire, function, and recovery." },
  { slug: "stress-erection", title: "Stress and Erection: The Link", excerpt: "Why stress affects performance and what helps." },
];

export default function BlogPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(64px,8vw,100px) clamp(20px,5vw,40px)" }}>
        <div className="floaty" aria-hidden="true" style={{ position: "absolute", bottom: "-25%", right: "-8%", width: "50%", height: "80%", background: "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.18), transparent 60%)", filter: "blur(22px)", animation: "floatGlow 17s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <p data-reveal style={{ margin: "0 0 16px", fontSize: "11.5px", fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "#e3c07e" }}>Education</p>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(34px,5.4vw,60px)", color: "#f7f3ea" }}>
            Evidence-based <span style={{ fontStyle: "italic", background: "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>articles</span>
          </h1>
          <p data-reveal style={{ margin: "20px 0 0", maxWidth: "560px", fontSize: "clamp(16px,2.1vw,19px)", lineHeight: 1.65, color: "#aab6c8" }}>No sensationalism\u2014just clarity.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} data-reveal style={{ display: "block", background: "linear-gradient(180deg,#fffdf8,#faf6ec)", border: "1px solid rgba(20,32,58,0.07)", borderRadius: "22px", padding: "28px 30px", boxShadow: "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)", transition: "border-color .3s, box-shadow .3s, transform .3s" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "20px", color: "#0c1322" }}>{post.title}</h2>
              <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: 1.62, color: "#54607a" }}>{post.excerpt}</p>
              <span style={{ marginTop: "14px", display: "inline-block", fontSize: "14px", fontWeight: 600, color: "#9a6e26" }}>Read more &#8594;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
