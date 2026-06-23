"use client";

import { useLocale } from "@/lib/locale";

export function Pipeline() {
  const { t } = useLocale();

  return (
    <section
      id="pipeline"
      style={{
        padding: "120px 64px",
        background: "linear-gradient(180deg, transparent, rgba(0,168,225,0.08))",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 720,
          margin: "0 auto 72px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 12,
            color: "#FFE600",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          {t.pipeline.kicker}
        </div>
        <h2
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            margin: 0,
          }}
        >
          <span className="glow-text">{t.pipeline.title}</span>
        </h2>
      </div>

      {/* Steps */}
      <div
        className="pipeline-grid"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {/* Connector line */}
        <div
          className="pipeline-connector"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 24,
            left: "12.5%",
            right: "12.5%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(122,215,245,0.4), #FFE600, rgba(122,215,245,0.4), transparent)",
          }}
        />

        {t.pipeline.steps.map((s, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: "28px 24px",
              paddingTop: 44,
              position: "relative",
            }}
          >
            {/* Step badge */}
            <div
              style={{
                position: "absolute",
                top: -10,
                left: 24,
                padding: "4px 10px",
                borderRadius: 999,
                background: i === 1 ? "#FFE600" : "rgba(122,215,245,0.2)",
                border: i === 1 ? "none" : "1px solid rgba(122,215,245,0.3)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                color: i === 1 ? "#1E3FB8" : "#B4ECFF",
                fontWeight: 600,
              }}
            >
              STEP 0{i + 1}
            </div>

            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 11,
                color: "rgba(234,246,255,0.5)",
                letterSpacing: "0.08em",
              }}
            >
              {s.code}
            </div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 500,
                marginTop: 8,
                letterSpacing: "-0.02em",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(234,246,255,0.6)",
                marginTop: 10,
                lineHeight: 1.55,
              }}
            >
              {s.desc}
            </p>

            {s.metric && (
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  color: "rgba(234,246,255,0.7)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{s.metric.label}</span>
                <span style={{ color: "#FFE600" }}>{s.metric.value}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #pipeline { padding: 80px 40px !important; }
          .pipeline-grid { grid-template-columns: 1fr 1fr !important; }
          .pipeline-connector { display: none !important; }
        }
        @media (max-width: 768px) {
          #pipeline { padding: 64px 24px !important; }
        }
        @media (max-width: 560px) {
          #pipeline { padding: 56px 16px !important; }
          .pipeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
