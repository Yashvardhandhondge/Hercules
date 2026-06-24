import { GoldButton } from "@/components/ui/GoldButton";

export function ClosingCta() {
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
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "64%",
          height: "150%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.16), transparent 58%)",
          filter: "blur(22px)",
          animation: "floatGlow 18s ease-in-out infinite",
        }}
      />

      <div
        data-reveal
        style={{
          position: "relative",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-ed-serif)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            fontSize: "clamp(34px,5.4vw,60px)",
            color: "#f7f3ea",
          }}
        >
          Take the first{" "}
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
            private
          </span>{" "}
          step.
        </h2>
        <p
          style={{
            margin: "20px auto 0",
            maxWidth: "500px",
            fontSize: "17px",
            lineHeight: 1.62,
            color: "#aab6c8",
          }}
        >
          A validated, 2-minute assessment. Confidential, evidence-based, and
          entirely yours.
        </p>

        <div style={{ marginTop: "36px" }}>
          <GoldButton href="/ed/assessment" size="large">
            Start Confidential Assessment
          </GoldButton>
        </div>
      </div>

      <p
        style={{
          position: "relative",
          maxWidth: "760px",
          margin: "52px auto 0",
          paddingTop: "30px",
          borderTop: "1px solid rgba(231,192,126,0.14)",
          fontSize: "12.5px",
          lineHeight: 1.7,
          color: "#6b7689",
          textAlign: "center",
        }}
      >
        For men aged 18 and over. This page provides general educational
        information and is not a substitute for professional medical advice,
        diagnosis, or treatment &mdash; and not a substitute for emergency
        medical care. If you experience chest pain, an erection lasting more
        than 4 hours, or another medical emergency, seek urgent care
        immediately.
      </p>
    </section>
  );
}
