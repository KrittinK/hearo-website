"use client";

import { useState, useEffect } from "react";
import { Wordmark } from "./HearoMark";
import { useLocale } from "@/lib/locale";

export function Nav() {
  const { lang, t, setLang } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.product, href: "#features" },
    { label: t.nav.how, href: "#pipeline" },
    { label: t.nav.pilot, href: "#pilot" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.docs, href: "#" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 64px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(20px)",
        background: scrolled
          ? "rgba(11,26,102,0.85)"
          : "rgba(11,26,102,0.7)",
        transition: "background 300ms ease",
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
        <a href="#" aria-label="Hearo home">
          <Wordmark size={28} color="#F2F9FF" />
        </a>

        {/* Desktop nav links */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            gap: 28,
            fontSize: 14,
            color: "rgba(234,246,255,0.7)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ transition: "color 150ms ease" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#FFE600")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(234,246,255,0.7)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Language toggle */}
        <div
          role="group"
          aria-label="Language selection"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: "3px",
            borderRadius: 8,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontSize: 11,
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          {(["en", "th"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              style={{
                padding: "4px 10px",
                borderRadius: 6,
                background:
                  lang === l ? "rgba(255,255,255,0.14)" : "transparent",
                color:
                  lang === l
                    ? "#F2F9FF"
                    : "rgba(234,246,255,0.55)",
                cursor: "pointer",
                border: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
                transition: "background 150ms ease, color 150ms ease",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className="nav-signin"
          style={{
            padding: "9px 16px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            background: "rgba(255,255,255,0.06)",
            color: "#F2F9FF",
            border: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {t.nav.signin}
        </button>

        <a
          href="#contact"
          className="btn-hover nav-contact"
          style={{
            padding: "9px 16px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            background: "#FFE600",
            color: "#1E3FB8",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {t.nav.contact} →
        </a>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          style={{
            display: "none",
            width: 38,
            height: 38,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            lineHeight: 1,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            color: "#F2F9FF",
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "12px 16px 20px",
            background: "rgba(11,26,102,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 8px",
                fontSize: 16,
                color: "rgba(234,246,255,0.85)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 12,
              padding: "12px 16px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 500,
              background: "rgba(255,255,255,0.06)",
              color: "#F2F9FF",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {t.nav.signin}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav { padding: 16px 24px !important; }
          .desktop-nav { display: none !important; }
          .nav-signin { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
        @media (max-width: 480px) {
          nav { padding: 14px 16px !important; }
          .nav-contact { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
