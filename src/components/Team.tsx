"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";

const PORTRAITS = [
  { src: "/team/Ploy.png", name: "Ploy" },
  { src: "/team/Roong.jpg", name: "Roong" },
];

export function Team() {
  const { t } = useLocale();

  return (
    <section
      id="team"
      style={{
        padding: "120px 64px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 720, marginBottom: 56 }}>
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
          {t.team.kicker}
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
          <span className="glow-text">{t.team.title}</span>
        </h2>
      </div>

      {/* Member cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          maxWidth: 1312,
          margin: "0 auto",
        }}
      >
        {t.team.members.map((m, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 28,
              display: "flex",
              gap: 24,
            }}
          >
            {/* Portrait */}
            <div
              style={{
                width: 180,
                height: 220,
                borderRadius: 14,
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <Image
                src={PORTRAITS[i].src}
                alt={`Portrait of ${m.name}`}
                fill
                unoptimized
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  color: "#FFE600",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {m.role}
              </div>
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  marginTop: 4,
                  letterSpacing: "-0.02em",
                }}
              >
                {m.name}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(234,246,255,0.6)",
                  marginTop: 12,
                  lineHeight: 1.55,
                }}
              >
                {m.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #team { padding: 80px 40px !important; }
          #team > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          #team { padding: 64px 24px !important; }
          #team > div:last-child > div { flex-direction: column !important; }
          #team > div:last-child > div > div:first-child { width: 100% !important; height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
