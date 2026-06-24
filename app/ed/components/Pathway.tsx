const pathway = [
  {
    n: "1",
    title: "Confidential assessment",
    desc: "A short, validated questionnaire (~2 min) to understand your situation. Private from the first tap.",
  },
  {
    n: "2",
    title: "Specialist consultation",
    desc: "A discreet video or audio session with a urologist, andrologist, or sexologist \u2014 on your schedule.",
  },
  {
    n: "3",
    title: "Structured plan",
    desc: "Evidence-based next steps tailored to you: lifestyle, tests, or treatment. No miracle claims.",
  },
  {
    n: "4",
    title: "Follow-up & adjust",
    desc: "We track progress with you and refine the plan over time. Confidential throughout.",
  },
];

export function Pathway() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)",
        background: "#f4efe6",
      }}
    >
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
        <div
          data-reveal
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
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
            The pathway
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
            Your path, step by step
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: "17px",
              lineHeight: 1.62,
              color: "#54607a",
            }}
          >
            Clear, structured, and confidential from the first tap to follow-up.
          </p>
        </div>

        <div
          style={{
            marginTop: "56px",
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit,minmax(244px,1fr))",
          }}
        >
          {pathway.map((p) => (
            <div
              key={p.n}
              data-reveal
              data-stagger=""
              style={{
                position: "relative",
                background: "linear-gradient(180deg,#fffdf8,#faf6ec)",
                border: "1px solid rgba(20,32,58,0.07)",
                borderRadius: "22px",
                padding: "30px",
                boxShadow:
                  "0 1px 2px rgba(8,12,20,0.04),0 12px 30px rgba(8,12,20,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "999px",
                  background: "#0c1322",
                  color: "#e3c07e",
                  fontFamily: "var(--font-ed-serif)",
                  fontWeight: 600,
                  fontSize: "20px",
                  border: "1px solid rgba(231,192,126,0.3)",
                  boxShadow: "inset 0 0 0 1px rgba(231,192,126,0.08)",
                }}
              >
                {p.n}
              </div>
              <h3
                style={{
                  margin: "20px 0 0",
                  fontFamily: "var(--font-ed-sans)",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#0c1322",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "14.5px",
                  lineHeight: 1.62,
                  color: "#54607a",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
