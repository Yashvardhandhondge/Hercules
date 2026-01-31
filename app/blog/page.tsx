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
  { slug: "testosterone-lifestyle", title: "Testosterone and Lifestyle Factors", excerpt: "Sleep, stress, exercise, and diet—what actually matters." },
  { slug: "sleep-sexual-health", title: "Sleep and Sexual Health", excerpt: "How sleep affects desire, function, and recovery." },
  { slug: "stress-erection", title: "Stress and Erection: The Link", excerpt: "Why stress affects performance and what helps." },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[var(--kyb-navy)] sm:text-4xl">
        Education & Blog
      </h1>
      <p className="mt-4 text-[var(--kyb-text-muted)]">
        Evidence-based articles for SEO and authority. No sensationalism—just clarity.
      </p>

      <ul className="mt-12 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-[var(--kyb-border)] bg-white p-6 shadow-sm transition hover:border-[var(--kyb-bronze)] hover:shadow-md"
            >
              <h2 className="font-display text-lg font-semibold text-[var(--kyb-navy)]">{post.title}</h2>
              <p className="mt-2 text-sm text-[var(--kyb-text-muted)]">{post.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-medium text-[var(--kyb-bronze)]">
                Read more →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
