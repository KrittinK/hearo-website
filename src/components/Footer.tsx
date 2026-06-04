"use client";

import { Wordmark } from "./HearoMark";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer
      style={{
        padding: "56px 64px 32px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          gap: 40,
          paddingBottom: 36,
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <div>
          <Wordmark size={28} color="#F2F9FF" />
          <p
            style={{
              marginTop: 16,
              fontSize: 13,
              color: "rgba(234,246,255,0.55)",
              maxWidth: 300,
              lineHeight: 1.5,
            }}
          >
            {t.footer.tag}
          </p>
        </div>

        {/* Link columns */}
        {t.footer.cols.map((c, i) => (
          <div key={i}>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 11,
                color: "rgba(234,246,255,0.5)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              {c.title}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 13,
                color: "rgba(234,246,255,0.8)",
              }}
            >
              {c.items.map((it) => (
                <a
                  key={it}
                  href="#"
                  style={{
                    textDecoration: "none",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#FFE600")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "rgba(234,246,255,0.8)")
                  }
                >
                  {it}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          fontFamily: "var(--font-geist-mono), monospace",
          color: "rgba(234,246,255,0.45)",
          letterSpacing: "0.04em",
          maxWidth: 1312,
          margin: "0 auto",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>© 2025 HEARO · BANGKOK</span>
        <span>ACCESSIBLE BY DEFAULT · BUILT IN THAILAND</span>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer { padding: 48px 40px 24px !important; }
          footer > div:first-child { grid-template-columns: 1fr 1fr 1fr !important; }
          footer > div:first-child > div:first-child { grid-column: span 3; }
        }
        @media (max-width: 768px) {
          footer { padding: 40px 24px 24px !important; }
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer > div:first-child > div:first-child { grid-column: span 2; }
        }
      `}</style>
    </footer>
  );
}
