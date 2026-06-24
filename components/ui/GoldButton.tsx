"use client";

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
  size?: "default" | "large";
  className?: string;
}

export function GoldButton({
  children,
  onClick,
  href,
  showArrow = true,
  size = "default",
  className = "",
}: GoldButtonProps) {
  const styles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "var(--font-ed-sans)",
    fontWeight: 600,
    fontSize: size === "large" ? "16.5px" : "16px",
    color: "#fff",
    background:
      "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)",
    border: "none",
    borderRadius: "14px",
    padding: size === "large" ? "18px 36px" : "17px 32px",
    cursor: "pointer",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.3),0 12px 34px rgba(149,110,38,0.42)",
    transition: "transform .28s cubic-bezier(.16,1,.3,1),box-shadow .28s",
    textDecoration: "none",
  };

  const handleHover = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-3px)";
    el.style.boxShadow =
      "inset 0 1px 0 rgba(255,255,255,0.4),0 20px 50px rgba(181,131,47,0.6)";
  };

  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "none";
    el.style.boxShadow =
      "inset 0 1px 0 rgba(255,255,255,0.3),0 12px 34px rgba(149,110,38,0.42)";
  };

  if (href) {
    return (
      <a
        href={href}
        style={styles}
        className={className}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {children}
        {showArrow && (
          <span aria-hidden="true">&#8594;</span>
        )}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={styles}
      className={className}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {children}
      {showArrow && (
        <span aria-hidden="true">&#8594;</span>
      )}
    </button>
  );
}
