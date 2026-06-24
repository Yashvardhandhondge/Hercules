"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "ed", label: "Erectile Health", href: "/ed" },
  { id: "svc", label: "Services", href: "/services" },
  { id: "how", label: "How It Works", href: "/how-it-works" },
  { id: "kits", label: "At-Home Kits", href: "/kits" },
];

export function EdNav() {
  const pathname = usePathname();
  const activeId = pathname?.startsWith("/ed") ? "ed" : "home";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        borderBottom: "1px solid rgba(231,192,126,0.1)",
        background: "rgba(10,15,26,0.72)",
        backdropFilter: "saturate(160%) blur(16px)",
        WebkitBackdropFilter: "saturate(160%) blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "16px clamp(16px,4vw,40px)",
          paddingRight: "clamp(140px,16vw,176px)",
        }}
      >
        <Link
          href="/"
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            gap: "11px",
            padding: 0,
            fontFamily: "var(--font-ed-serif)",
            fontSize: "23px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "#f5f1e8",
            textDecoration: "none",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "9px",
              background: "linear-gradient(135deg,#e3c07e,#b5832f 55%,#8a6420)",
              color: "#231708",
              fontFamily: "var(--font-ed-serif)",
              fontSize: "18px",
              fontWeight: 600,
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45),0 4px 12px rgba(138,100,32,0.4)",
            }}
          >
            H
          </span>
          KYB{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(120deg,#e3c07e,#caa05a 60%,#b5832f)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Hercules
          </span>
        </Link>

        <nav
          className="nav-scroll"
          aria-label="Main"
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
            overflowX: "auto",
            scrollbarWidth: "none",
            padding: "2px",
          }}
        >
          {navItems.map((item) => {
            const active = item.id === activeId;
            return (
              <Link
                key={item.id}
                href={item.href}
                style={{
                  flex: "0 0 auto",
                  whiteSpace: "nowrap",
                  padding: "8px 14px",
                  borderRadius: "9px",
                  fontSize: "14px",
                  transition: "color .2s, background .2s",
                  fontWeight: active ? 600 : 500,
                  color: active ? "#f5f1e8" : "#9aa6ba",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/ed/assessment"
          style={{
            flex: "0 0 auto",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "11px",
            padding: "11px 19px",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3),0 6px 18px rgba(149,110,38,0.35)",
            transition: "transform .25s,box-shadow .25s",
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Assessment
        </Link>
      </div>
    </header>
  );
}
