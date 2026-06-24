import Link from "next/link";

const footerLinks = {
  platform: [
    { href: "/ed", label: "Erectile Health" },
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
};

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        background: "#06090f",
        color: "#8e99ad",
        padding: "clamp(48px,6vw,72px) clamp(20px,5vw,40px)",
        borderTop: "1px solid rgba(231,192,126,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: "21px",
                color: "#f7f3ea",
              }}
            >
              KYB{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(120deg,#e3c07e,#b5832f)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Hercules
              </span>
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "11.5px", color: "#6b7689" }}>
              Know You Better
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "13px", maxWidth: "320px", lineHeight: 1.62 }}>
              Private, scientific, judgment-free male sexual health guidance. For men 18+.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h3 style={{ margin: 0, fontSize: "11.5px", fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#aab6c8" }}>
              Platform
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0" }}>
              {footerLinks.platform.map((link) => (
                <li key={link.href} style={{ marginTop: "10px" }}>
                  <Link href={link.href} style={{ fontSize: "14px", color: "#8e99ad", transition: "color .2s" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn links */}
          <div>
            <h3 style={{ margin: 0, fontSize: "11.5px", fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#aab6c8" }}>
              Learn
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0" }}>
              {footerLinks.learn.map((link) => (
                <li key={link.href} style={{ marginTop: "10px" }}>
                  <Link href={link.href} style={{ fontSize: "14px", color: "#8e99ad", transition: "color .2s" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(231,192,126,0.08)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ margin: 0, fontSize: "12px", color: "#566073" }}>
            &copy; KYB Hercules. Confidential. Evidence-backed.
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#566073", maxWidth: "400px" }}>
            General information only &mdash; not a substitute for professional or emergency medical care. 18+ only.
          </p>
        </div>
      </div>
    </footer>
  );
}
