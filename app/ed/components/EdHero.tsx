import { GoldButton } from "@/components/ui/GoldButton";

export function EdHero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(168deg,#0c1322 0%,#0a0f1a 55%,#070b12 100%)",
        padding: "clamp(64px,8vw,120px) clamp(20px,5vw,40px)",
      }}
    >
      {/* Floaties */}
      <div
        className="floaty"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-16%",
          right: "-6%",
          width: "58%",
          height: "90%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(199,149,71,0.24), transparent 60%)",
          filter: "blur(22px)",
          animation: "floatGlow 15s ease-in-out infinite",
        }}
      />
      <div
        className="floaty"
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-24%",
          left: "-8%",
          width: "50%",
          height: "78%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(46,74,120,0.42), transparent 64%)",
          filter: "blur(24px)",
          animation: "floatGlow2 20s ease-in-out infinite",
        }}
      />
      {/* Top gold line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,rgba(231,192,126,0.55),transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1220px",
          margin: "0 auto",
          display: "grid",
          gap: "clamp(44px,5vw,80px)",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          alignItems: "center",
        }}
      >
        {/* Left text */}
        <div data-reveal>
          <p
            style={{
              margin: "0 0 22px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              color: "#e3c07e",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "28px",
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,rgba(231,192,126,0.8))",
              }}
            />
            Erectile Health
          </p>

          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.01,
              fontSize: "clamp(38px,5.8vw,68px)",
              color: "#f7f3ea",
            }}
          >
            Erectile difficulties are common &mdash; and{" "}
            <span
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(118deg,#f0d9a8,#e3c07e 45%,#c79547)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              treatable
            </span>
            .
          </h1>

          <p
            style={{
              margin: "24px 0 0",
              maxWidth: "520px",
              fontSize: "clamp(16px,2.1vw,19px)",
              lineHeight: 1.65,
              color: "#aab6c8",
            }}
          >
            A private, evidence-based way to understand what&rsquo;s going on
            &mdash; and what to do next. About two minutes. No clinic visit, no
            judgment.
          </p>

          <div
            style={{
              marginTop: "38px",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <GoldButton href="/ed/assessment" size="large">
              Start Confidential Assessment
            </GoldButton>
            <a
              href="#understanding"
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#f5f1e8",
                border: "1px solid rgba(231,192,126,0.28)",
                borderRadius: "14px",
                padding: "17px 26px",
                fontSize: "16px",
                fontWeight: 500,
                backdropFilter: "blur(8px)",
                transition: "background .25s,border-color .25s,transform .25s",
                textDecoration: "none",
              }}
            >
              How ED works
            </a>
          </div>

          <p style={{ marginTop: "26px", fontSize: "13px", color: "#717d92" }}>
            Free &middot; Anonymous &middot; ~2 minutes &middot; For men 18+
          </p>
        </div>

        {/* Assessment preview card (frosted) */}
        <div
          data-reveal
          data-stagger=""
          style={{
            // @ts-expect-error --sd
            "--sd": "120ms",
            position: "relative",
            background:
              "linear-gradient(180deg,rgba(255,253,248,0.98),rgba(248,244,236,0.96))",
            border: "1px solid rgba(231,192,126,0.3)",
            borderRadius: "24px",
            padding: "30px",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.6) inset,0 40px 90px rgba(5,8,14,0.5),0 8px 24px rgba(5,8,14,0.3)",
            maxWidth: "440px",
            width: "100%",
            justifySelf: "center",
          }}
        >
          {/* Gradient border overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "24px",
              padding: "1px",
              background:
                "linear-gradient(140deg,rgba(231,192,126,0.6),transparent 40%)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#8a7a55",
              }}
            >
              Confidential assessment
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
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
                  animation: "pulseDot 2s infinite",
                }}
              />
              Private
            </span>
          </div>

          {/* Progress bar */}
          <div
            style={{
              marginTop: "18px",
              height: "7px",
              borderRadius: "999px",
              background: "#e9e1d0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "100%",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg,#b5832f,#e3c07e,#b5832f)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2.6s linear infinite",
              }}
            />
          </div>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: "12px",
              color: "#9a9079",
            }}
          >
            Question 2 of 5
          </p>

          <p
            style={{
              margin: "20px 0 0",
              fontFamily: "var(--font-ed-serif)",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: 1.28,
              color: "#0c1322",
            }}
          >
            How often were your erections hard enough for penetration?
          </p>

          {/* Mock options */}
          <div
            style={{
              marginTop: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderRadius: "13px",
                border: "1px solid #e6ddcb",
                fontSize: "14.5px",
                color: "#3a4252",
              }}
            >
              Almost always or always
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderRadius: "13px",
                border: "1.5px solid #b5832f",
                background:
                  "linear-gradient(180deg,rgba(199,149,71,0.12),rgba(199,149,71,0.06))",
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#0c1322",
                boxShadow: "0 4px 14px rgba(181,131,47,0.16)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "999px",
                  border: "6px solid #b5832f",
                  flex: "0 0 auto",
                }}
              />
              Most times
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderRadius: "13px",
                border: "1px solid #e6ddcb",
                fontSize: "14.5px",
                color: "#3a4252",
              }}
            >
              Sometimes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
