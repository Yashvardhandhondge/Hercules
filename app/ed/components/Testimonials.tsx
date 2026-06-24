const testimonials = [
  {
    quote:
      "I\u2019d been avoiding this for two years. Doing it from my phone, privately, made all the difference.",
    tag: "Anonymous, 34",
  },
  {
    quote:
      "No shady ads, no pressure. Just a clear explanation and a plan that actually made sense.",
    tag: "M, 41",
  },
  {
    quote:
      "Turns out it was mostly stress and sleep. Knowing that took a real weight off my shoulders.",
    tag: "Anonymous, 29",
  },
];

export function Testimonials() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)",
        background: "#f4efe6",
      }}
    >
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
        <div data-reveal style={{ textAlign: "center" }}>
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
            Voices
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              fontSize: "clamp(32px,4.8vw,52px)",
              color: "#0c1322",
            }}
          >
            In their words
          </h2>
          <p
            style={{
              margin: "14px auto 0",
              maxWidth: "520px",
              fontSize: "15px",
              color: "#54607a",
            }}
          >
            Anonymous, shared with permission.
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit,minmax(286px,1fr))",
          }}
        >
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              data-reveal
              data-stagger=""
              style={{
                margin: 0,
                position: "relative",
                background: "linear-gradient(180deg,#fffdf8,#faf6ec)",
                border: "1px solid rgba(20,32,58,0.07)",
                borderRadius: "22px",
                padding: "32px",
                boxShadow:
                  "0 1px 2px rgba(8,12,20,0.04),0 14px 34px rgba(8,12,20,0.06)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-ed-serif)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "56px",
                  lineHeight: "0.3",
                  background: "linear-gradient(135deg,#e3c07e,#b5832f)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                &ldquo;
              </span>
              <p
                style={{
                  margin: "20px 0 0",
                  fontFamily: "var(--font-ed-serif)",
                  fontSize: "18.5px",
                  lineHeight: 1.5,
                  color: "#26303f",
                }}
              >
                {t.quote}
              </p>
              <cite
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontStyle: "normal",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: ".02em",
                  color: "#8a7a55",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg,#b5832f,transparent)",
                  }}
                />
                {t.tag}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
