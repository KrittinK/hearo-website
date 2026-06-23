"use client";

import { Waveform } from "./Waveform";

const LOG_ROWS = [
  { t: "08:41:02", e: "fire_alarm · kitchen", c: "0.96", a: "ALERTED", hot: true },
  { t: "08:38:14", e: "doorbell · front", c: "0.97", a: "NOTIFIED" },
  { t: "08:22:07", e: "phone_ring · living", c: "0.91", a: "NOTIFIED" },
  { t: "07:54:49", e: "ambient · baseline", c: "—", a: "LOGGED" },
];

export function DashboardPreview() {
  return (
    <div
      className="dash"
      style={{
        background: "#1E3FB8",
        borderRadius: 10,
        padding: 24,
        minHeight: 420,
        position: "relative",
      }}
    >
      {/* Status row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            className="live-dot"
            role="status"
            aria-label="Live monitoring active"
          />
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11,
              color: "rgba(234,246,255,0.6)",
              letterSpacing: "0.08em",
            }}
          >
            MONITORING · 08:41 LOCAL
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            color: "rgba(234,246,255,0.4)",
          }}
        >
          MODEL v4.2.1 · 8 CLASSES
        </span>
      </div>

      {/* Waveform visualization */}
      <div
        style={{
          marginTop: 24,
          height: 110,
          color: "#B4ECFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Waveform bars={48} height={110} thick={3} />
        {/* Detection marker */}
        <div
          style={{
            position: "absolute",
            left: "55%",
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(180deg, transparent, #FFE600, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "57%",
            top: 16,
            padding: "5px 9px",
            borderRadius: 6,
            background: "#FFE600",
            color: "#1E3FB8",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
          }}
        >
          FIRE_ALARM · 0.96
        </div>
      </div>

      {/* Detection log */}
      <div
        style={{
          marginTop: 24,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          className="dash-row"
          style={{
            padding: "9px 14px",
            background: "rgba(255,255,255,0.03)",
            display: "grid",
            gridTemplateColumns: "80px 1fr 100px 70px",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            color: "rgba(234,246,255,0.5)",
            letterSpacing: "0.08em",
          }}
          role="row"
        >
          <span>TIME</span>
          <span>EVENT</span>
          <span>CONFIDENCE</span>
          <span>ACTION</span>
        </div>
        {LOG_ROWS.map((r, i) => (
          <div
            key={i}
            className="dash-row"
            style={{
              padding: "9px 14px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "grid",
              gridTemplateColumns: "80px 1fr 100px 70px",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11,
              color: r.hot ? "#FFE600" : "rgba(234,246,255,0.75)",
              background: r.hot ? "rgba(255,230,0,0.14)" : "transparent",
            }}
            role="row"
          >
            <span>{r.t}</span>
            <span>{r.e}</span>
            <span>{r.c}</span>
            <span style={{ fontWeight: 600 }}>{r.a}</span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dash { padding: 16px !important; min-height: 0 !important; }
          .dash-row { grid-template-columns: 60px 1fr 52px 58px !important; gap: 4px; font-size: 9px !important; padding: 8px 10px !important; }
        }
      `}</style>
    </div>
  );
}
