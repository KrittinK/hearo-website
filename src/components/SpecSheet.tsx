"use client";

import { useLocale } from "@/lib/locale";

export function SpecSheet() {
  const { t } = useLocale();

  return (
    <section
      id="spec"
      style={{
        padding: "120px 64px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 60,
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {/* Left */}
        <div>
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
            {t.spec.kicker}
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            <span className="glow-text">{t.spec.title}</span>
          </h2>
        </div>

        {/* Right: spec sections */}
        <div>
          {t.spec.sections.map((sec, i) => (
            <div
              key={i}
              style={{
                paddingBottom: 32,
                marginBottom: 32,
                borderBottom:
                  i < t.spec.sections.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  color: "rgba(234,246,255,0.5)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                {sec.title}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                }}
              >
                {sec.rows.map((r, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 14,
                      paddingBottom: 14,
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: "rgba(234,246,255,0.6)" }}>{r.k}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        color: "#F2F9FF",
                        fontSize: 13,
                        textAlign: "right",
                      }}
                    >
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #spec { padding: 80px 40px !important; }
          #spec > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          #spec { padding: 64px 24px !important; }
          #spec > div > div:last-child > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
