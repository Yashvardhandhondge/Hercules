"use client";

export function EdQuickExit() {
  const handleExit = () => {
    try {
      window.location.replace("https://www.google.com");
    } catch {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <button
      type="button"
      onClick={handleExit}
      aria-label="Quick exit — leave this site immediately"
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 95,
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(18,26,42,0.82)",
        color: "#f5f1e8",
        border: "1px solid rgba(231,192,126,0.22)",
        borderRadius: "12px",
        padding: "10px 15px",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: ".01em",
        cursor: "pointer",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(5,8,14,0.4)",
        transition: "background .2s,transform .2s,border-color .2s",
        fontFamily: "var(--font-ed-sans)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(10,15,26,0.95)";
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.borderColor = "rgba(231,192,126,0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(18,26,42,0.82)";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.borderColor = "rgba(231,192,126,0.22)";
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "6px",
          height: "6px",
          borderRadius: "999px",
          background: "#e3c07e",
          boxShadow: "0 0 8px rgba(227,192,126,0.8)",
        }}
      />
      Quick Exit
      <span aria-hidden="true" style={{ fontSize: "14px", lineHeight: "1" }}>
        &#8599;
      </span>
    </button>
  );
}
