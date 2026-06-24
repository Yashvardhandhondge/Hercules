"use client";
import { useState } from "react";

const faqDefs = [
  {
    q: "Is ED actually treatable?",
    a: "For the large majority of men, yes. Erectile difficulties usually have identifiable causes \u2014 physical, psychological, or both \u2014 and most respond well to the right approach. This is general information, not a personal diagnosis.",
  },
  {
    q: "I\u2019m young. Can I still have ED?",
    a: "Yes. ED isn\u2019t only an older-man issue. In younger men it\u2019s more often linked to stress, anxiety, sleep, or lifestyle \u2014 which are very workable once understood.",
  },
  {
    q: "Could it be a sign of a health problem?",
    a: "Sometimes. Because erections depend on healthy blood flow, persistent ED can occasionally be an early signal worth discussing with a clinician. A consultation helps put it in context.",
  },
  {
    q: "Is this private? Who sees my answers?",
    a: "Your assessment answers stay on your device until you choose to submit, and we handle them privacy-first. Billing is discreet and you can use an alias.",
  },
  {
    q: "What happens in a consultation?",
    a: "A confidential video or audio conversation with a specialist. They\u2019ll ask about your history, answer your questions, and suggest a structured plan or any tests \u2014 no pressure.",
  },
  {
    q: "Will I be put on medication automatically?",
    a: "No. There\u2019s no one-size-fits-all pill, and we won\u2019t pretend there is. Any recommendation is tailored to you, and the choice is always yours.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(72px,9vw,120px) clamp(20px,5vw,40px)",
        background: "#ece6d8",
        borderTop: "1px solid rgba(20,32,58,0.06)",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
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
            Questions
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
            Myths, facts &amp; questions
          </h2>
        </div>

        <div
          style={{
            marginTop: "44px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {faqDefs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                data-reveal
                data-stagger=""
                style={{
                  background: "linear-gradient(180deg,#fffdf8,#faf6ec)",
                  border: open
                    ? "1px solid rgba(181,131,47,0.35)"
                    : "1px solid rgba(20,32,58,0.08)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  transition: "border-color .25s, box-shadow .25s",
                  boxShadow: open
                    ? "0 12px 32px rgba(149,110,38,0.12)"
                    : "0 1px 2px rgba(8,12,20,0.04)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "18px",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "24px 26px",
                    fontFamily: "var(--font-ed-serif)",
                    fontWeight: 600,
                    fontSize: "18.5px",
                    color: "#0c1322",
                  }}
                >
                  {faq.q}
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "0 0 auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      borderRadius: "999px",
                      background: open
                        ? "linear-gradient(135deg,#caa05a,#9a6e26)"
                        : "#ece6d8",
                      color: open ? "#fff" : "#9a6e26",
                      fontSize: "20px",
                      fontWeight: 400,
                      transition:
                        "transform .3s cubic-bezier(.16,1,.3,1), background .25s",
                      transform: open ? "rotate(135deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: open ? "1fr" : "0fr",
                    transition:
                      "grid-template-rows .32s cubic-bezier(.16,1,.3,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      style={{
                        margin: 0,
                        padding: "0 26px 26px",
                        fontSize: "15px",
                        lineHeight: 1.68,
                        color: "#54607a",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
