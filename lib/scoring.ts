export type SeverityKey = "none" | "mild" | "mildmod" | "mod" | "severe";

export interface SeverityInfo {
  key: SeverityKey;
  label: string;
  color: string;
  summary: string;
  title: string;
  body: string;
  primaryCta: { label: string; href?: string; ed?: boolean };
  secondaryCta: { label: string; href: string };
}

export function computeScore(answers: (number | null)[]): number {
  if (answers.every((x) => x != null)) {
    return answers.reduce((x, y) => x + (y || 0), 0);
  }
  return 14;
}

export function getSeverity(score: number): SeverityInfo {
  if (score >= 22)
    return {
      key: "none",
      label: "No current indication",
      color: "#2f7d5b",
      summary:
        "Your responses don\u2019t currently point to erectile dysfunction. That\u2019s reassuring. If anything changes, or you have other concerns, you\u2019re always welcome to check back in.",
      title: "Keep doing what works",
      body: "No action is needed right now. If you\u2019d like, explore evidence-based lifestyle guidance to keep things on track \u2014 or talk to a specialist anytime.",
      primaryCta: { label: "Explore lifestyle guidance", ed: true },
      secondaryCta: { label: "Talk to a specialist", href: "/book" },
    };

  if (score >= 17)
    return {
      key: "mild",
      label: "Mild",
      color: "#b5832f",
      summary:
        "Your responses suggest mild erectile difficulties. This is common, and very often improves with simple, evidence-based steps.",
      title: "Start with education and a quick check",
      body: "Mild difficulties often respond to lifestyle and stress factors. A discreet at-home test can rule out simple physical causes, and a specialist is there if you want one.",
      primaryCta: { label: "View at-home test kits", href: "/kits" },
      secondaryCta: { label: "Talk to a specialist", href: "/book" },
    };

  if (score >= 12)
    return {
      key: "mildmod",
      label: "Mild to moderate",
      color: "#c2741f",
      summary:
        "Your responses suggest mild-to-moderate difficulties. A short, confidential consultation can help identify what\u2019s driving it and the right next step.",
      title: "A confidential consultation is a good next step",
      body: "A specialist can help pinpoint physical and psychological factors and suggest a structured plan. At-home tests can add useful context beforehand.",
      primaryCta: {
        label: "Book confidential consultation",
        href: "/book",
      },
      secondaryCta: { label: "View at-home test kits", href: "/kits" },
    };

  if (score >= 8)
    return {
      key: "mod",
      label: "Moderate",
      color: "#bb5e22",
      summary:
        "Your responses suggest moderate difficulties. We recommend a confidential consultation with a specialist to understand the cause and discuss options.",
      title: "We recommend a specialist consultation",
      body: "Moderate difficulties are very treatable once the cause is understood. A confidential session will help identify the right structured plan for you.",
      primaryCta: {
        label: "Book confidential consultation",
        href: "/book",
      },
      secondaryCta: { label: "View at-home test kits", href: "/kits" },
    };

  return {
    key: "severe",
    label: "Severe",
    color: "#a8472a",
    summary:
      "Your responses suggest more significant difficulties. Speaking with a specialist soon is a good step \u2014 many underlying causes are very treatable.",
    title: "We recommend speaking with a specialist soon",
    body: "This isn\u2019t cause for alarm, but it is worth proper attention. A confidential consultation will help identify the cause and the right path forward.",
    primaryCta: {
      label: "Book confidential consultation",
      href: "/book",
    },
    secondaryCta: { label: "View at-home test kits", href: "/kits" },
  };
}
