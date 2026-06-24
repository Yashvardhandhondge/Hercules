const physicalFactors = [
  "Blood flow & heart health",
  "Blood pressure & cholesterol",
  "Diabetes & blood sugar",
  "Hormones (e.g. testosterone)",
  "Some medications",
  "Smoking, alcohol & sleep",
];

const psychFactors = [
  "Stress & anxiety",
  "Performance pressure",
  "Low mood",
  "Relationship dynamics",
  "Expectations & habits",
  "Fatigue & burnout",
];

export function UnderstandingED() {
  return (
    <section
      id="understanding"
      style={{
        position: "relative",
        padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)",
        background: "#ece6d8",
        borderTop: "1px solid rgba(20,32,58,0.06)",
        borderBottom: "1px solid rgba(20,32,58,0.06)",
        scrollMarginTop: "80px",
      }}
    >
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "700px" }}>
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
            The science
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
            Understanding ED
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: "17px",
              lineHeight: 1.68,
              color: "#54607a",
            }}
          >
            An erection depends on blood flow, nerves, hormones, and mindset
            working together. When one part is off, the rest can follow.
            That&rsquo;s why ED usually has a mix of physical and psychological
            causes &mdash; and why the right next step is different for everyone.
          </p>
        </div>

        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit,minmax(284px,1fr))",
          }}
        >
          {/* Physical factors */}
          <div
            data-reveal
            data-stagger=""
            style={{
              background: "linear-gradient(180deg,#fffdf8,#faf6ec)",
              border: "1px solid rgba(20,32,58,0.07)",
              borderRadius: "22px",
              padding: "32px",
              boxShadow:
                "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "13px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,rgba(199,149,71,0.16),rgba(181,131,47,0.06))",
                  border: "1px solid rgba(181,131,47,0.22)",
                  color: "#9a6e26",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
                </svg>
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-ed-serif)",
                  fontWeight: 600,
                  fontSize: "22px",
                  color: "#0c1322",
                }}
              >
                Physical factors
              </h3>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "13px",
              }}
            >
              {physicalFactors.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "15px",
                    color: "#3a4252",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "0 0 auto",
                      width: "7px",
                      height: "7px",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg,#e3c07e,#b5832f)",
                    }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Psychological factors */}
          <div
            data-reveal
            data-stagger=""
            style={{
              background: "linear-gradient(180deg,#fffdf8,#faf6ec)",
              border: "1px solid rgba(20,32,58,0.07)",
              borderRadius: "22px",
              padding: "32px",
              boxShadow:
                "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "13px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,rgba(199,149,71,0.16),rgba(181,131,47,0.06))",
                  border: "1px solid rgba(181,131,47,0.22)",
                  color: "#9a6e26",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 2a4.5 4.5 0 0 0-4.5 4.5c0 .9.26 1.74.7 2.45A4.5 4.5 0 0 0 7 17.5 4.5 4.5 0 0 0 12 22V2a2.5 2.5 0 0 0-2.5 0z" />
                  <path d="M12 2a2.5 2.5 0 0 1 2.5 0A4.5 4.5 0 0 1 19 6.5c0 .9-.26 1.74-.7 2.45A4.5 4.5 0 0 1 17 17.5 4.5 4.5 0 0 1 12 22" />
                </svg>
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-ed-serif)",
                  fontWeight: 600,
                  fontSize: "22px",
                  color: "#0c1322",
                }}
              >
                Psychological factors
              </h3>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "13px",
              }}
            >
              {psychFactors.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "15px",
                    color: "#3a4252",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "0 0 auto",
                      width: "7px",
                      height: "7px",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg,#e3c07e,#b5832f)",
                    }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          data-reveal
          style={{
            margin: "28px 0 0",
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
            padding: "20px 24px",
            borderRadius: "16px",
            background:
              "linear-gradient(180deg,rgba(199,149,71,0.1),rgba(199,149,71,0.05))",
            border: "1px solid rgba(181,131,47,0.22)",
            fontSize: "14.5px",
            lineHeight: 1.6,
            color: "#3a3326",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flex: "0 0 auto",
              marginTop: "1px",
              color: "#9a6e26",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-5M12 8h.01" />
            </svg>
          </span>
          There&rsquo;s no single pill that fits everyone, and we&rsquo;ll never
          claim there is. This is general educational information &mdash; not
          personal medical advice.
        </p>
      </div>
    </section>
  );
}
