"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import { computeScore, getSeverity } from "@/lib/scoring";

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([
    null, null, null, null, null,
  ]);
  const advanceTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const choose = useCallback(
    (value: number) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[step] = value;
        return next;
      });
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      advanceTimer.current = setTimeout(() => {
        if (step < 4) {
          setStep((s) => s + 1);
          setAnimKey((k) => k + 1);
        }
      }, 340);
    },
    [step]
  );

  const submit = useCallback(() => {
    const score = computeScore(answers);
    const sev = getSeverity(score);
    fetch("/api/ed-assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers, score, severity: sev.key }),
      keepalive: true,
    }).catch(() => {});
    sessionStorage.setItem(
      "ed-result",
      JSON.stringify({ answers, score, severity: sev.key })
    );
    router.push("/ed/result");
  }, [answers, router]);

  const back = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    if (step === 0) {
      router.push("/ed");
    } else {
      setStep((s) => s - 1);
      setAnimKey((k) => k + 1);
    }
  }, [step, router]);

  const next = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    if (step < 4) {
      setStep((s) => s + 1);
      setAnimKey((k) => k + 1);
    } else {
      submit();
    }
  }, [step, submit]);

  const q = questions[step];
  const currentAnswer = answers[step];
  const isLast = step === 4;
  const canContinue = currentAnswer !== null;
  const progress = ((step + 1) / 5) * 100;

  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg,#f4efe6,#ece6d8)",
      }}
    >
      {/* Sticky header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
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
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px",
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
              <span aria-hidden="true">&#8592;</span> Exit
            </button>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#9a9079",
                letterSpacing: ".01em",
              }}
            >
              Question {step + 1} of 5
            </span>
          </div>
          {/* Progress bar */}
          <div
            style={{
              marginTop: "14px",
              height: "7px",
              borderRadius: "999px",
              background: "#e3dac8",
              overflow: "hidden",
              boxShadow: "inset 0 1px 2px rgba(8,12,20,0.06)",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg,#9a6e26,#e3c07e,#b5832f)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2.6s linear infinite",
                transition: "width .45s cubic-bezier(.16,1,.3,1)",
                boxShadow: "0 0 12px rgba(199,149,71,0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Question content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "clamp(36px,7vw,76px) clamp(16px,5vw,28px)",
        }}
      >
        <div
          key={animKey}
          style={{
            width: "100%",
            maxWidth: "600px",
            animation: "stepIn .5s cubic-bezier(.16,1,.3,1) both",
          }}
        >
          {step === 0 && (
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "11.5px",
                fontWeight: 600,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#9a6e26",
              }}
            >
              Confidential check-in
            </p>
          )}
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 600,
              color: "#9a9079",
            }}
          >
            Over the past 6 months&hellip;
          </p>
          <h1
            style={{
              margin: "14px 0 0",
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: 1.18,
              fontSize: "clamp(25px,4.4vw,36px)",
              color: "#0c1322",
            }}
          >
            {q.prompt}
          </h1>

          {/* Options */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {q.options.map((opt) => {
              const selected = currentAnswer === opt.v;
              return (
                <button
                  key={opt.v}
                  type="button"
                  onClick={() => choose(opt.v)}
                  aria-pressed={selected}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    padding: "17px 19px",
                    borderRadius: "15px",
                    fontSize: "16px",
                    lineHeight: 1.35,
                    fontWeight: 500,
                    transition:
                      "border-color .18s, background .18s, box-shadow .18s, transform .18s",
                    fontFamily: "inherit",
                    border: selected
                      ? "1.5px solid #b5832f"
                      : "1px solid rgba(20,32,58,0.12)",
                    background: selected
                      ? "linear-gradient(180deg,rgba(199,149,71,0.12),rgba(199,149,71,0.05))"
                      : "#fffdf8",
                    color: selected ? "#0c1322" : "#3a4252",
                    boxShadow: selected
                      ? "0 6px 18px rgba(181,131,47,0.16)"
                      : "0 1px 2px rgba(8,12,20,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    if (!selected) {
                      e.currentTarget.style.borderColor =
                        "rgba(181,131,47,0.45)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selected) {
                      e.currentTarget.style.borderColor =
                        "rgba(20,32,58,0.12)";
                      e.currentTarget.style.transform = "none";
                    }
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "0 0 auto",
                      width: "22px",
                      height: "22px",
                      borderRadius: "999px",
                      border: selected
                        ? "6px solid #b5832f"
                        : "2px solid #cdbf9f",
                      transition: "border .18s",
                    }}
                  />
                  <span style={{ flex: 1 }}>{opt.l}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <div
            style={{
              marginTop: "34px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <button
              type="button"
              onClick={back}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fffdf8",
                color: "#3a4252",
                border: "1px solid rgba(20,32,58,0.12)",
                borderRadius: "13px",
                padding: "14px 22px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "border-color .2s,transform .2s",
                fontFamily: "var(--font-ed-sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(20,32,58,0.3)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(20,32,58,0.12)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <span aria-hidden="true">&#8592;</span>{" "}
              {step === 0 ? "Exit" : "Back"}
            </button>

            <button
              type="button"
              onClick={next}
              disabled={!canContinue}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "none",
                borderRadius: "13px",
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: canContinue ? "pointer" : "not-allowed",
                transition:
                  "transform .25s, box-shadow .25s, background .25s",
                background: canContinue
                  ? "linear-gradient(135deg,#caa05a 0%,#b5832f 52%,#9a6e26 100%)"
                  : "#e3dac8",
                color: canContinue ? "#fff" : "#a89f88",
                boxShadow: canContinue
                  ? "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 26px rgba(149,110,38,0.34)"
                  : "none",
                fontFamily: "var(--font-ed-sans)",
              }}
              onMouseEnter={(e) => {
                if (canContinue) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 1px 0 rgba(255,255,255,0.4),0 16px 36px rgba(181,131,47,0.5)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                if (canContinue) {
                  e.currentTarget.style.boxShadow =
                    "inset 0 1px 0 rgba(255,255,255,0.3),0 10px 26px rgba(149,110,38,0.34)";
                }
              }}
            >
              {isLast ? "See my results" : "Continue"}{" "}
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>

          {/* Trust text */}
          <p
            style={{
              margin: "30px 0 0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#7a7460",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                background: "#2f7d5b",
                flex: "0 0 auto",
              }}
            />
            Your answers stay on this device until you submit.
          </p>
          <p
            style={{
              margin: "14px 0 0",
              fontSize: "12px",
              lineHeight: 1.6,
              color: "#a39c8a",
            }}
          >
            Based on the IIEF-5 (Sexual Health Inventory for Men), a validated
            screening questionnaire. For men 18+. Not a diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}
