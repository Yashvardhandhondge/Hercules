import type { Metadata } from "next";
import Link from "next/link";

const content: Record<string, { title: string; body: string }> = {
  "myths-vs-facts": {
    title: "Male Sexual Health: Myths vs Facts",
    body: "Many beliefs about male sexual health are based on culture or marketing, not evidence. This article separates common myths from what research actually shows—so you can make informed decisions without shame or misinformation.",
  },
  "performance-anxiety": {
    title: "Performance Anxiety: What the Science Says",
    body: "Performance anxiety is a well-documented phenomenon. We outline what the science says about causes, contributing factors, and evidence-backed strategies—without stigma or oversimplification.",
  },
  "porn-and-brain": {
    title: "Pornography and the Brain",
    body: "A neutral, science-based overview of how consumption may affect the brain and behaviour. No moralising—just current evidence and practical takeaways for those who want to understand the link.",
  },
  "testosterone-lifestyle": {
    title: "Testosterone and Lifestyle Factors",
    body: "Sleep, stress, exercise, and diet all influence testosterone and sexual health. We summarise what actually moves the needle and what doesn’t—so you can focus on changes that matter.",
  },
  "sleep-sexual-health": {
    title: "Sleep and Sexual Health",
    body: "Poor sleep affects desire, function, and recovery. This piece covers the evidence and simple steps to improve sleep in the context of sexual health.",
  },
  "stress-erection": {
    title: "Stress and Erection: The Link",
    body: "Stress and erectile function are connected through well-understood pathways. We explain why and what evidence-based approaches can help—from lifestyle to professional support.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = content[slug];
  return {
    title: post ? `${post.title} | KYB Hercules Blog` : "Blog | KYB Hercules",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = content[slug];

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <p>Post not found.</p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--kyb-bronze)] hover:underline">
          Back to Education
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-[var(--kyb-bronze)] hover:underline">
        ← Education & Blog
      </Link>
      <h1 className="mt-4 font-display text-3xl font-bold text-[var(--kyb-navy)]">{post.title}</h1>
      <p className="mt-6 leading-relaxed text-[var(--kyb-charcoal)]">{post.body}</p>
      <p className="mt-8 text-sm text-[var(--kyb-text-muted)]">
        [Prototype: Full article content would appear here. Tone: clinical but warm, evidence-based.]
      </p>
    </article>
  );
}
