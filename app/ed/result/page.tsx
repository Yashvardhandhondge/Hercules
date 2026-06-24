"use client";
import { useRouter } from "next/navigation";
import { getSeverity } from "@/lib/scoring";
import { useScoreCounter } from "@/lib/hooks/useScoreCounter";
import { useSyncExternalStore } from "react";

function getSnapshot(): { score: number } | null {
  const raw = sessionStorage.getItem("ed-result");
  if (!raw) return null;
  return JSON.parse(raw);
}
function getServerSnapshot(): { score: number } | null {
  return null;
}
function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function ResultContent({ score }: { score: number }) {
  const router = useRouter();
  const sev = getSeverity(score);
  const displayScore = useScoreCounter(score);
  const markerLeft = Math.max(0, Math.min(100, ((displayScore - 5) / 20) * 100));

  const handlePrimary = () => {
    if (sev.primaryCta.ed) {
      router.push("/ed");
    } else if (sev.primaryCta.href) {
      window.location.href = sev.primaryCta.href;
    }
  };
  const handleSecondary = () => {
    window.location.href = sev.secondaryCta.href;
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        background: "linear-gradient(180deg,#f4efe6,#ece6d8)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "rgba(244,239,230,0.86)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(20,32,58,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "18px clamp(16px,5vw,28px)",
            paddingRight: "clamp(118px,16vw,156px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            onClick={() => router.push("/ed")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              color: "#54607a",
              padding: 0,
              transition: "color .2s",
              fontFamily: "var(--font-ed-sans)",
            }}
          >
            <span aria-hidden="true">&#8592;</span> Back to overview
          </button>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12.5px",
              fontWeight: 600,
              color: "#2f7d5b",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                background: "#2f7d5b",
              }}
            />
            Saved privately
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "clamp(40px,6vw,64px) clamp(16px,5vw,28px)",
        }}
      >
        <div data-reveal>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#9a6e26",
            }}
          >
            Your private summary
          </p>
          <h1
            style={{
              margin: "14px 0 0",
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 1.06,
              fontSize: "clamp(32px,5.2vw,50px)",
              color: "#0c1322",
            }}
          >
            This is guidance,{" "}
            <span style={{ fontStyle: "italic", color: "#9a6e26" }}>
              not a verdict
            </span>
            .
          </h1>
        </div>

        {/* Score card */}
        <div
          data-reveal
          data-stagger=""
          style={{
            marginTop: "32px",
            position: "relative",
            background: "linear-gradient(180deg,#fffdf8,#faf6ec)",
            border: "1px solid rgba(20,32,58,0.08)",
            borderRadius: "24px",
            padding: "clamp(26px,4vw,38px)",
            boxShadow:
              "0 1px 2px rgba(8,12,20,0.04),0 20px 50px rgba(8,12,20,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#8a7a55",
                  letterSpacing: ".02em",
                }}
              >
                IIEF-5 score
              </span>
              <div
                style={{
                  fontFamily: "var(--font-ed-serif)",
                  fontWeight: 600,
                  fontSize: "clamp(52px,11vw,68px)",
                  lineHeight: 0.92,
                  color: "#0c1322",
                  marginTop: "4px",
                }}
              >
                {displayScore}
                <span
                  style={{
                    fontSize: "24px",
                    color: "#a39c8a",
                    fontWeight: 500,
                  }}
                >
                  {" "}
                  / 25
                </span>
              </div>
            </div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: ".02em",
                padding: "8px 16px",
                borderRadius: "999px",
                color: "#fff",
                background: sev.color,
                whiteSpace: "nowrap",
                boxShadow: `0 6px 18px ${sev.color}55`,
              }}
            >
              {sev.label}
            </span>
          </div>

          {/* Severity meter */}
          <div
            style={{
              marginTop: "28px",
              position: "relative",
              height: "12px",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg,#a8472a,#bb5e22,#c2741f,#b5832f,#2f7d5b)",
              boxShadow: "inset 0 1px 2px rgba(8,12,20,0.12)",
            }}
          />
          <div style={{ position: "relative", height: 0 }}>
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: `calc(${markerLeft}% - 8px)`,
                width: "16px",
                height: "16px",
                borderRadius: "999px",
                background: "#fffdf8",
                border: `3px solid ${sev.color}`,
                boxShadow: `0 0 0 4px ${sev.color}33, 0 4px 10px rgba(8,12,20,0.3)`,
                transition: "left .2s linear",
              }}
            />
          </div>
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11.5px",
              color: "#a39c8a",
              fontWeight: 500,
            }}
          >
            <span>Severe (5)</span>
            <span>None (25)</span>
          </div>
          <p
            style={{
              margin: "24px 0 0",
              fontSize: "16px",
              lineHeight: 1.68,
              color: "#3a4252",
            }}
          >
            {sev.summary}
          </p>
        </div>

        {/* Recommended next step */}
        <div
          data-reveal
          data-stagger=""
          style={{
            marginTop: "20px",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(155deg,#0c1322,#070b12)",
            borderRadius: "24px",
            padding: "clamp(26px,4vw,38px)",
            boxShadow: "0 20px 50px rgba(8,12,20,0.18)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-40%",
              right: "-10%",
              width: "50%",
              height: "160%",
              background:
                "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.18), transparent 60%)",
              filter: "blur(20px)",
            }}
          />
          <p
            style={{
              position: "relative",
              margin: 0,
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#e3c07e",
            }}
          >
            Recommended next step
          </p>
          <h2
            style={{
              position: "relative",
              margin: "14px 0 0",
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 600,
              fontSize: "24px",
              color: "#f7f3ea",
            }}
          >
            {sev.title}
          </h2>
          <p
            style={{
              position: "relative",
              margin: "12px 0 0",
              fontSize: "15px",
              lineHeight: 1.62,
              color: "#aab6c8",
            }}
          >
            {sev.body}
          </p>
          <div
            style={{
              position: "relative",
              marginTop: "26px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <button
              type="button"
              onClick={handlePrimary}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "13px",
                padding: "15px 28px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 26px rgba(149,110,38,0.4)",
                transition: "transform .25s,box-shadow .25s",
                fontFamily: "var(--font-ed-sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.4),0 16px 38px rgba(181,131,47,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 26px rgba(149,110,38,0.4)";
              }}
            >
              {sev.primaryCta.label}{" "}
              <span aria-hidden="true">&#8594;</span>
            </button>
            <button
              type="button"
              onClick={handleSecondary}
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.05)",
                color: "#f5f1e8",
                border: "1px solid rgba(231,192,126,0.28)",
                borderRadius: "13px",
                padding: "15px 24px",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background .25s,transform .25s",
                fontFamily: "var(--font-ed-sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {sev.secondaryCta.label}
            </button>
          </div>
        </div>

        {/* Retake */}
        <div
          data-reveal
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem("ed-result");
              router.push("/ed/assessment");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              color: "#54607a",
              padding: "8px 0",
              transition: "color .2s",
              fontFamily: "var(--font-ed-sans)",
            }}
          >
            <span aria-hidden="true">&#8635;</span> Retake assessment
          </button>
        </div>

        {/* Disclaimer */}
        <p
          data-reveal
          style={{
            margin: "30px 0 0",
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
            padding: "20px 24px",
            borderRadius: "16px",
            background:
              "linear-gradient(180deg,rgba(199,149,71,0.1),rgba(199,149,71,0.05))",
            border: "1px solid rgba(181,131,47,0.22)",
            fontSize: "13px",
            lineHeight: 1.66,
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
          This result is for general guidance only and is not a diagnosis. For
          men 18+. It is not a substitute for professional or emergency medical
          care. If you have chest pain, an erection lasting more than 4 hours,
          or another emergency, seek urgent care immediately.
        </p>
      </div>
    </div>
  );
}

export default function ResultPage() {
  const router = useRouter();
  const result = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (!result) {
    router.replace("/ed");
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg,#f4efe6,#ece6d8)",
        }}
      />
    );
  }

  return <ResultContent score={result.score} />;
}
