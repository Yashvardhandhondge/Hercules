import Link from "next/link";

const footerLinks = {
  platform: [
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/kits", label: "At-Home Kits" },
    { href: "/book", label: "Book Consultation" },
  ],
  learn: [
    { href: "/about", label: "About KYB Hercules" },
    { href: "/blog", label: "Education & Blog" },
    { href: "/privacy", label: "Privacy & Confidentiality" },
  ],
  legal: [
    { href: "/privacy#terms", label: "Terms & Conditions" },
    { href: "/privacy#refund", label: "Refund Policy" },
    { href: "/privacy#disclaimer", label: "Disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--kyb-border)] bg-[var(--kyb-navy)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold">
              KYB <span className="text-[var(--kyb-bronze-light)]">Hercules</span>
            </p>
            <p className="mt-1 text-xs text-slate-400">Know You Better</p>
            <p className="mt-2 text-sm text-slate-300">
              Private. Scientific. Judgment-free male sexual health guidance.
            </p>
            <p className="mt-2 text-xs text-slate-400">18+ only. Not a replacement for emergency care.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Platform</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Learn</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Legal</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} KYB Hercules. Confidential. Evidence-backed.</p>
        </div>
      </div>
    </footer>
  );
}
