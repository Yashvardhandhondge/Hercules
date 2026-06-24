export function EdFooter() {
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
          display: "flex",
          flexWrap: "wrap",
          gap: "28px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-ed-serif)",
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
          <p style={{ margin: "12px 0 0", fontSize: "13px", maxWidth: "380px", lineHeight: 1.62 }}>
            Private, scientific, judgment-free male sexual health guidance. For men 18+.
          </p>
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: "#566073", maxWidth: "360px", lineHeight: 1.62 }}>
          &copy; KYB Hercules. General information only &mdash; not a substitute for professional or emergency medical care.
        </p>
      </div>
    </footer>
  );
}
