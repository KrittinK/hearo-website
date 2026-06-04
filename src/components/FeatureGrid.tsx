"use client";

import { useLocale } from "@/lib/locale";

export function FeatureGrid() {
  const { t } = useLocale();

  return (
    <section id="features" style={{ padding: "120px 64px" }}>
      {/* Header */}
      <div style={{ maxWidth: 720, marginBottom: 72 }}>
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
          {t.features.kicker}
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
          <span className="glow-text">{t.features.title1}</span>
          <br />
          <span style={{ color: "rgba(234,246,255,0.4)" }}>
            {t.features.title2}
          </span>
        </h2>
      </div>

      {/* Mosaic grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 1,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {t.features.items.map((f, i) => (
          <div
            key={i}
            style={{
              gridColumn: f.span,
              background: "#1E3FB8",
              padding: "36px 32px",
              minHeight: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Icon tile */}
              <div
                aria-hidden="true"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg, rgba(122,215,245,0.2), rgba(255,230,0,0.1))",
                  border: "1px solid rgba(122,215,245,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  marginTop: 24,
                  letterSpacing: "-0.02em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(234,246,255,0.6)",
                  marginTop: 10,
                  lineHeight: 1.55,
                }}
              >
                {f.desc}
              </p>
            </div>
            {f.tag && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 10,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "rgba(255,230,0,0.22)",
                    color: "#FFE600",
                    letterSpacing: "0.06em",
                  }}
                >
                  {f.tag}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #features { padding: 80px 40px !important; }
          #features > div:last-child { grid-template-columns: repeat(3, 1fr) !important; }
          #features > div:last-child > div { grid-column: span 1 !important; min-height: 220px !important; }
        }
        @media (max-width: 768px) {
          #features { padding: 64px 24px !important; }
          #features > div:last-child { grid-template-columns: 1fr !important; }
          #features > div:last-child > div { min-height: 180px !important; }
        }
      `}</style>
    </section>
  );
}
