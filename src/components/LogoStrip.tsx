"use client";

import { useLocale } from "@/lib/locale";

export function LogoStrip() {
  const { t } = useLocale();

  return (
    <section
      id="logos"
      style={{
        padding: "40px 64px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.14em",
          color: "rgba(234,246,255,0.5)",
          marginBottom: 28,
        }}
      >
        {t.logos.kicker}
      </div>
      <div
        className="logo-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 24,
          alignItems: "center",
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {t.logos.items.map((l, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: 500,
              color: "rgba(234,246,255,0.5)",
              letterSpacing: "-0.01em",
            }}
          >
            {l}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #logos { padding: 32px 24px !important; }
          .logo-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 16px !important; }
        }
        @media (max-width: 480px) {
          #logos { padding: 28px 16px !important; }
          .logo-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .logo-grid > div { font-size: 15px !important; }
        }
      `}</style>
    </section>
  );
}
