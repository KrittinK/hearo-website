"use client";

import { PhoneAppScreen } from "./PhoneAppScreen";
import { useLocale } from "@/lib/locale";

export function Channels() {
  const { t } = useLocale();

  return (
    <section id="channels" style={{ padding: "120px 64px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 80,
          alignItems: "center",
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {/* Left: content */}
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
            {t.channels.kicker}
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            <span className="glow-text">{t.channels.title1}</span>
            <br />
            <span style={{ color: "rgba(234,246,255,0.4)" }}>
              {t.channels.title2}
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(234,246,255,0.6)",
              marginTop: 20,
              lineHeight: 1.6,
              maxWidth: 440,
            }}
          >
            {t.channels.body}
          </p>

          {/* Checklist */}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {t.channels.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "start", gap: 14 }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 6,
                    marginTop: 1,
                    background: "rgba(122,215,245,0.15)",
                    border: "1px solid rgba(122,215,245,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B4ECFF",
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <span
                  style={{
                    fontSize: 14,
                    color: "rgba(234,246,255,0.85)",
                    lineHeight: 1.5,
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: three phones */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {(["listening", "alert", "history"] as const).map((v, i) => (
            <div
              key={v}
              style={{
                width: 200,
                transform:
                  i === 1
                    ? "translateY(-20px) scale(1.05)"
                    : `rotate(${i === 0 ? -3 : 3}deg)`,
                transformOrigin: "bottom center",
              }}
            >
              <div className="phone-frame">
                <PhoneAppScreen variant={v} />
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 14,
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 10,
                  color: "rgba(234,246,255,0.5)",
                  letterSpacing: "0.08em",
                }}
              >
                {v.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #channels { padding: 80px 40px !important; }
          #channels > div { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 768px) {
          #channels { padding: 64px 24px !important; }
          #channels > div > div:last-child > div { width: 160px !important; }
        }
      `}</style>
    </section>
  );
}
