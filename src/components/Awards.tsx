"use client";

import { useLocale } from "@/lib/locale";

export function Awards() {
  const { t } = useLocale();

  return (
    <section id="awards" style={{ padding: "80px 64px" }}>
      <div
        style={{
          padding: "40px 48px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(0,168,225,0.25), rgba(255,230,0,0.28))",
          border: "1px solid rgba(122,215,245,0.25)",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 32,
          alignItems: "center",
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {/* Medal */}
        <div
          role="img"
          aria-label="Medal"
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "rgba(255,230,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            border: "1px solid rgba(255,230,0,0.4)",
            flexShrink: 0,
          }}
        >
          🏅
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11,
              color: "#FFE600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {t.awards.kicker}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              marginTop: 4,
              letterSpacing: "-0.015em",
            }}
          >
            {t.awards.title}
          </div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(234,246,255,0.6)",
              marginTop: 4,
            }}
          >
            {t.awards.sub}
          </div>
        </div>

        {/* Year */}
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            color: "rgba(234,246,255,0.5)",
            letterSpacing: "0.08em",
          }}
        >
          {t.awards.date}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #awards { padding: 48px 24px !important; }
          #awards > div { grid-template-columns: 1fr !important; padding: 24px !important; }
          #awards > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
