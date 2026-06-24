const symptoms = [
  "Difficulty getting an erection",
  "Trouble keeping an erection during sex",
  "Erections that aren\u2019t firm enough for penetration",
  "Needing more stimulation than before",
  "Less confidence, or more anxiety around sex",
  "It\u2019s starting to affect how you feel day to day",
];

export function SymptomsGrid() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)",
        background: "#f4efe6",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(199,149,71,0.07), transparent 60%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: "1040px", margin: "0 auto" }}>
        <div
          data-reveal
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
        >
          <p
            style={{
              margin: "0 0 16px",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "#9a6e26",
            }}
          >
            Recognising it
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              fontSize: "clamp(32px,5vw,54px)",
              color: "#0c1322",
            }}
          >
            Is this you?
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: "17px",
              lineHeight: 1.62,
              color: "#54607a",
            }}
          >
            Occasional difficulty is normal. When it&rsquo;s frequent or
            persistent, it&rsquo;s worth understanding why &mdash; calmly, and
            with evidence.
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit,minmax(264px,1fr))",
          }}
        >
          {symptoms.map((s, i) => (
            <div
              key={i}
              data-reveal
              data-stagger=""
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "15px",
                padding: "22px 24px",
                borderRadius: "18px",
                background: "linear-gradient(180deg,#fffdf8,#faf6ec)",
                border: "1px solid rgba(20,32,58,0.07)",
                boxShadow:
                  "0 1px 2px rgba(8,12,20,0.04),0 10px 26px rgba(8,12,20,0.05)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "0 0 auto",
                  marginTop: "1px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "26px",
                  height: "26px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg,rgba(199,149,71,0.18),rgba(181,131,47,0.08))",
                  border: "1px solid rgba(181,131,47,0.28)",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9a6e26"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12l4.5 4.5L19 7" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: "15.5px",
                  lineHeight: 1.5,
                  color: "#3a4252",
                }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>

        <p
          data-reveal
          style={{
            margin: "36px auto 0",
            maxWidth: "640px",
            textAlign: "center",
            fontSize: "15px",
            lineHeight: 1.62,
            color: "#54607a",
          }}
        >
          Recognising one or more of these doesn&rsquo;t mean something is wrong
          with you. It just means a short, private check-in could help.
        </p>
      </div>
    </section>
  );
}
