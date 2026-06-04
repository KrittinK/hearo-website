"use client";

import { useLocale } from "@/lib/locale";

export function FinalCTA() {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      style={{
        padding: "120px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(0,168,225,0.3), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: 840,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(48px, 6vw, 80px)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          <span className="glow-text">{t.cta.title1}</span>
          <br />
          <span style={{ color: "#FFE600" }}>{t.cta.title2}</span>
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "rgba(234,246,255,0.65)",
            marginTop: 28,
            maxWidth: 560,
            margin: "28px auto 0",
            lineHeight: 1.55,
          }}
        >
          {t.cta.body}
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:contact@hearo.app"
            className="btn-hover"
            style={{
              padding: "16px 28px",
              borderRadius: 12,
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
            {t.cta.button1} →
          </a>
          <a
            href="#pilot"
            className="btn-hover"
            style={{
              padding: "16px 28px",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 500,
              background: "rgba(255,255,255,0.06)",
              color: "#F2F9FF",
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
          >
            {t.cta.button2}
          </a>
        </div>

        <div
          style={{
            marginTop: 28,
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 13,
            color: "rgba(234,246,255,0.55)",
          }}
        >
          contact@hearo.app
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
