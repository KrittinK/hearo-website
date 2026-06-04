"use client";

import { DashboardPreview } from "./DashboardPreview";
import { PhoneAppScreen } from "./PhoneAppScreen";
import { useLocale } from "@/lib/locale";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        padding: "80px 64px 100px",
        overflow: "hidden",
        minHeight: "90vh",
      }}
    >
      {/* Background glows */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,168,225,0.4) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 200,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,230,0,0.25) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      {/* Grid overlay */}
      <div className="hero-grid" />

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px 6px 6px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: 12,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 999,
                background: "#FFE600",
                color: "#1E3FB8",
                fontWeight: 600,
                fontSize: 11,
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              NEW
            </span>
            <span style={{ color: "rgba(234,246,255,0.8)" }}>{t.hero.badge}</span>
            <span style={{ color: "rgba(234,246,255,0.4)" }}>→</span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 500,
              fontSize: "clamp(54px, 6vw, 88px)",
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              margin: 0,
            }}
          >
            <span className="glow-text">{t.hero.title1}</span>
            <br />
            <span className="glow-text">{t.hero.title2}</span>
            <br />
            <span style={{ color: "#FFE600" }}>{t.hero.title3}</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 19,
              color: "rgba(234,246,255,0.65)",
              marginTop: 28,
              maxWidth: 520,
              lineHeight: 1.55,
            }}
          >
            {t.hero.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            <a
              href="#contact"
              className="btn-hover"
              style={{
                padding: "14px 22px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 500,
                background: "#fff",
                color: "#1E3FB8",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {t.hero.cta1} →
            </a>
            <button
              className="btn-hover"
              style={{
                padding: "14px 22px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 500,
                background: "rgba(255,255,255,0.06)",
                color: "#F2F9FF",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 12,
                  padding: "2px 6px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 4,
                }}
              >
                ⌘K
              </span>
              {t.hero.cta2}
            </button>
          </div>

          {/* Metrics */}
          <div
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {t.hero.metrics.map((m, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 11,
                    color: "rgba(234,246,255,0.5)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 500,
                    marginTop: 6,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: product mockup */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 14,
              boxShadow: "0 40px 80px -20px rgba(0,168,225,0.4)",
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 12,
              }}
            >
              {["rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)"].map(
                (bg, i) => (
                  <div
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: bg,
                    }}
                  />
                )
              )}
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  color: "rgba(234,246,255,0.45)",
                }}
              >
                hearo.app/listen
              </div>
            </div>
            <DashboardPreview />
          </div>

          {/* Floating phone */}
          <div
            style={{
              position: "absolute",
              right: -40,
              bottom: -60,
              width: 200,
            }}
          >
            <div className="phone-frame">
              <PhoneAppScreen variant="alert" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #hero { padding: 60px 40px 80px !important; }
          #hero > div > div { grid-template-columns: 1fr !important; }
          #hero .floating-phone { display: none; }
        }
        @media (max-width: 768px) {
          #hero { padding: 48px 24px 64px !important; }
        }
      `}</style>
    </section>
  );
}
