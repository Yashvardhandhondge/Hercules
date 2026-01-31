"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/kits", label: "At-Home Kits" },
  { href: "/book", label: "Book Consultation" },
  { href: "/blog", label: "Education" },
  { href: "/privacy", label: "Privacy" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--kyb-border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-[var(--kyb-navy)]"
        >
          KYB <span className="text-[var(--kyb-bronze)]">Hercules</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--kyb-slate)] transition hover:text-[var(--kyb-navy)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Link
            href="/book"
            className="rounded-full bg-[var(--kyb-bronze)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--kyb-bronze-light)]"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 rounded-full bg-[var(--kyb-navy)]" />
          <span className="block h-0.5 w-5 rounded-full bg-[var(--kyb-navy)]" />
          <span className="block h-0.5 w-5 rounded-full bg-[var(--kyb-navy)]" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--kyb-border)] bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--kyb-slate)] hover:bg-[var(--kyb-trust-bg)] hover:text-[var(--kyb-navy)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[var(--kyb-bronze)] px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
