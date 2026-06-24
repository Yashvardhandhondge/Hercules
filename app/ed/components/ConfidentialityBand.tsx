function IconSvg({ name }: { name: "lock" | "clipboard" | "exit" }) {
  const p = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "lock") {
    return (
      <svg {...p}>
        <rect x="4" y="11" width="16" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    );
  }
  if (name === "clipboard") {
    return (
      <svg {...p}>
        <path d="M9 4h6a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a1 1 0 0 1 1-1z" />
      </svg>
    );
  }
  // exit
  return (
    <svg {...p}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

const trustBadges: {
  icon: "lock" | "clipboard" | "exit";
  title: string;
  desc: string;
}[] = [
  {
    icon: "lock",
    title: "Encrypted & private",
    desc: "Your data is encrypted and never sold. Use an alias whenever you like.",
  },
  {
    icon: "clipboard",
    title: "Discreet billing",
    desc: "Neutral descriptors (e.g. \u201CKYB Wellness\u201D) and unbranded packaging on request.",
  },
  {
    icon: "exit",
    title: "Quick exit, anytime",
    desc: "Leave the site instantly with one tap \u2014 no trace left on screen.",
  },
];

export function ConfidentialityBand() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px,9vw,124px) clamp(20px,5vw,40px)",
        background: "linear-gradient(160deg,#0c1322,#070b12)",
      }}
    >
      <div
        className="floaty"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          right: "8%",
          width: "46%",
          height: "120%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.14), transparent 60%)",
          filter: "blur(22px)",
          animation: "floatGlow 17s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        <div
          data-reveal
          style={{
            textAlign: "center",
            maxWidth: "660px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              fontSize: "clamp(30px,4.2vw,48px)",
              color: "#f7f3ea",
            }}
          >
            Your identity remains{" "}
            <span
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(118deg,#f0d9a8,#e3c07e 50%,#c79547)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              confidential
            </span>
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "540px",
              fontSize: "16px",
              lineHeight: 1.68,
              color: "#aab6c8",
            }}
          >
            Privacy isn&rsquo;t a feature here &mdash; it&rsquo;s the
            foundation.
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gap: "18px",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          }}
        >
          {trustBadges.map((b) => (
            <div
              key={b.title}
              data-reveal
              data-stagger=""
              style={{
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))",
                border: "1px solid rgba(231,192,126,0.14)",
                borderRadius: "20px",
                padding: "28px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 32px rgba(5,8,14,0.3)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "46px",
                  height: "46px",
                  borderRadius: "13px",
                  background:
                    "linear-gradient(135deg,rgba(231,192,126,0.2),rgba(181,131,47,0.06))",
                  border: "1px solid rgba(231,192,126,0.24)",
                  color: "#e3c07e",
                }}
              >
                <IconSvg name={b.icon} />
              </span>
              <h3
                style={{
                  margin: "18px 0 0",
                  fontFamily: "var(--font-ed-sans)",
                  fontWeight: 600,
                  fontSize: "16.5px",
                  color: "#f5f1e8",
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "14px",
                  lineHeight: 1.58,
                  color: "#8e99ad",
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
