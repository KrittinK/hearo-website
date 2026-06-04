"use client";

import { useLocale } from "@/lib/locale";

export function PilotStory() {
  const { t } = useLocale();
  const stats = t.pilot.stats;

  return (
    <section id="pilot" style={{ padding: "120px 64px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {/* Left: photo placeholder */}
        <div
          className="placeholder-tile"
          style={{ height: 480 }}
          role="img"
          aria-label="Bangkok pilot — Deaf/HoH user with device"
        >
          BANGKOK PILOT · PHOTO · DEAF/HOH USER WITH DEVICE
        </div>

        {/* Right: content */}
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
            {t.pilot.kicker}
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            <span className="glow-text">{t.pilot.title}</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(234,246,255,0.6)",
              marginTop: 24,
              lineHeight: 1.6,
              maxWidth: 480,
            }}
          >
            {t.pilot.body}
          </p>

          {/* Stats */}
          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    color: i === 1 ? "#FFE600" : "#F2F9FF",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(234,246,255,0.55)",
                    marginTop: 6,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="btn-hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 36,
              padding: "14px 22px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 500,
              background: "#FFE600",
              color: "#1E3FB8",
              textDecoration: "none",
            }}
          >
            {t.pilot.cta} →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #pilot { padding: 80px 40px !important; }
          #pilot > div { grid-template-columns: 1fr !important; }
          #pilot > div > div:first-child { height: 320px !important; }
        }
        @media (max-width: 768px) {
          #pilot { padding: 64px 24px !important; }
        }
      `}</style>
    </section>
  );
}
