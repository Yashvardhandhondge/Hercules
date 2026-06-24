import type { Metadata } from "next";
import Link from "next/link";

const content: Record<string, { title: string; body: string }> = {
  "myths-vs-facts": { title: "Male Sexual Health: Myths vs Facts", body: "Many beliefs about male sexual health are based on culture or marketing, not evidence. This article separates common myths from what research actually shows\u2014so you can make informed decisions without shame or misinformation." },
  "performance-anxiety": { title: "Performance Anxiety: What the Science Says", body: "Performance anxiety is a well-documented phenomenon. We outline what the science says about causes, contributing factors, and evidence-backed strategies\u2014without stigma or oversimplification." },
  "porn-and-brain": { title: "Pornography and the Brain", body: "A neutral, science-based overview of how consumption may affect the brain and behaviour. No moralising\u2014just current evidence and practical takeaways for those who want to understand the link." },
  "testosterone-lifestyle": { title: "Testosterone and Lifestyle Factors", body: "Sleep, stress, exercise, and diet all influence testosterone and sexual health. We summarise what actually moves the needle and what doesn\u2019t\u2014so you can focus on changes that matter." },
  "sleep-sexual-health": { title: "Sleep and Sexual Health", body: "Poor sleep affects desire, function, and recovery. This piece covers the evidence and simple steps to improve sleep in the context of sexual health." },
  "stress-erection": { title: "Stress and Erection: The Link", body: "Stress and erectile function are connected through well-understood pathways. We explain why and what evidence-based approaches can help\u2014from lifestyle to professional support." },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = content[slug];
  return { title: post ? `${post.title} | KYB Hercules Blog` : "Blog | KYB Hercules" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = content[slug];

  if (!post) {
    return (
      <div style={{ position: "relative", zIndex: 2, minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4efe6" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px", color: "#54607a" }}>Post not found.</p>
          <Link href="/blog" style={{ marginTop: "16px", display: "inline-block", fontSize: "14px", fontWeight: 600, color: "#9a6e26" }}>&#8592; Back to Education</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)", padding: "clamp(48px,6vw,80px) clamp(20px,5vw,40px)" }}>
        <div style={{ position: "relative", maxWidth: "720px", margin: "0 auto" }}>
          <Link href="/blog" data-reveal style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 600, color: "#e3c07e", marginBottom: "20px" }}>&#8592; Education &amp; Blog</Link>
          <h1 data-reveal style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(28px,4.4vw,44px)", color: "#f7f3ea" }}>{post.title}</h1>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,6vw,80px) clamp(20px,5vw,40px)", background: "#f4efe6" }}>
        <article style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.72, color: "#3a4252" }}>{post.body}</p>
          <p style={{ marginTop: "32px", fontSize: "14px", color: "#9a9079", fontStyle: "italic" }}>[Full article content would appear here. Tone: clinical but warm, evidence-based.]</p>
        </article>
      </section>
    </div>
  );
}
