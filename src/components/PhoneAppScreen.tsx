"use client";

import { Waveform } from "./Waveform";
import { HearoMark, Wordmark } from "./HearoMark";

type Variant = "listening" | "alert" | "history";

export function PhoneAppScreen({ variant = "alert" }: { variant?: Variant }) {
  return (
    <div className="phone-screen">
      <div className="phone-notch" />
      <div
        style={{
          padding: "20px 26px 8px",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        <span>9:41</span>
        <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontSize: 10 }}>●●●●</span>
          <span>100%</span>
        </span>
      </div>

      {variant === "alert" && <AlertScreen />}
      {variant === "listening" && <ListeningScreen />}
      {variant === "history" && <HistoryScreen />}
    </div>
  );
}

function AlertScreen() {
  return (
    <div
      style={{
        padding: "14px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        height: "calc(100% - 44px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <HearoMark size={22} />
          <span style={{ fontWeight: 600, fontSize: 15 }}>Hearo</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            color: "#22c55e",
          }}
        >
          <span className="live-dot" style={{ width: 7, height: 7 }} />
          LIVE
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(180deg, #F97316 0%, #FFCC00 100%)",
          borderRadius: 24,
          padding: "22px 18px",
          color: "#fff",
          boxShadow: "0 16px 32px -12px rgba(249,115,22,0.5)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            opacity: 0.9,
          }}
        >
          CRITICAL · DETECTED NOW
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginTop: 8,
            lineHeight: 1.05,
          }}
        >
          Fire alarm
        </div>
        <div style={{ fontSize: 12, opacity: 0.92, marginTop: 6 }}>
          Detected in the kitchen · 92% confidence
        </div>
        <div
          style={{ marginTop: 14, display: "flex", alignItems: "center", height: 32 }}
        >
          <Waveform bars={18} height={32} thick={3} />
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 12,
              padding: "9px 0",
              textAlign: "center",
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            I&apos;m safe
          </div>
          <div
            style={{
              flex: 1,
              background: "#fff",
              color: "#FFCC00",
              borderRadius: 12,
              padding: "9px 0",
              textAlign: "center",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            Alert contacts
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 10,
          color: "rgba(11,6,20,0.6)",
          letterSpacing: "0.1em",
        }}
      >
        ACTIVE CHANNELS
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {(
          [
            ["Vibration", true],
            ["Visual", true],
            ["Watch", true],
            ["Contacts", false],
          ] as [string, boolean][]
        ).map(([label, on]) => (
          <div
            key={label}
            style={{
              flex: 1,
              padding: "8px 4px",
              borderRadius: 10,
              background: on ? "rgba(0,168,225,0.12)" : "rgba(11,6,20,0.04)",
              color: on ? "#00A8E1" : "rgba(11,6,20,0.4)",
              textAlign: "center",
              fontSize: 9,
              fontWeight: 500,
              border: on
                ? "1px solid rgba(0,168,225,0.2)"
                : "1px solid rgba(11,6,20,0.08)",
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function ListeningScreen() {
  return (
    <div
      style={{
        padding: "14px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
        height: "calc(100% - 44px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Wordmark size={20} color="#0B0614" />
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            color: "rgba(11,6,20,0.5)",
          }}
        >
          HOME · 1 MIC
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          width: "100%",
        }}
      >
        <div style={{ position: "relative", width: 160, height: 160 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1.5px solid #00A8E1",
                animation: `hearo-pulse-ring 2.4s ease-out ${i * 0.8}s infinite`,
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              inset: 28,
              borderRadius: "50%",
              background: "linear-gradient(180deg, #00A8E1 0%, #1E3FB8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 16px 40px -8px rgba(0,168,225,0.5)",
            }}
          >
            <div style={{ color: "#fff" }}>
              <Waveform bars={8} height={36} thick={3} />
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#0B0614",
            }}
          >
            Listening
          </div>
          <div
            style={{ fontSize: 12, color: "rgba(11,6,20,0.55)", marginTop: 4 }}
          >
            AI is monitoring · 8 sound types
          </div>
        </div>

        <div
          style={{
            width: "100%",
            background: "rgba(11,6,20,0.05)",
            borderRadius: 12,
            padding: "10px 12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 10,
              fontFamily: "var(--font-geist-mono), monospace",
              color: "rgba(11,6,20,0.5)",
              letterSpacing: "0.08em",
            }}
          >
            <span>AMBIENT</span>
            <span>34 dB · QUIET</span>
          </div>
          <div style={{ marginTop: 8, color: "#00A8E1" }}>
            <Waveform bars={22} height={24} thick={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryScreen() {
  const items = [
    { when: "Just now", what: "Doorbell", where: "Front door", tone: "medium" },
    { when: "22 min ago", what: "Phone ringing", where: "Living room", tone: "medium" },
    { when: "2 hrs ago", what: "Smoke detector", where: "Kitchen", tone: "critical" },
    { when: "Yesterday", what: "Baby crying", where: "Nursery", tone: "high" },
  ];

  return (
    <div
      style={{
        padding: "14px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Wordmark size={20} color="#0B0614" />
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "#0B0614",
        }}
      >
        Today
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 12,
              background:
                it.tone === "critical"
                  ? "rgba(249,115,22,0.08)"
                  : "rgba(11,6,20,0.04)",
              border:
                it.tone === "critical"
                  ? "1px solid rgba(249,115,22,0.2)"
                  : "1px solid transparent",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background:
                  it.tone === "critical" ? "#F97316" : "#00A8E1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Waveform bars={4} height={14} thick={2} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#0B0614" }}>
                {it.what}
              </div>
              <div style={{ fontSize: 10, color: "rgba(11,6,20,0.55)" }}>
                {it.where} · {it.when}
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                color: "rgba(11,6,20,0.4)",
              }}
            >
              ›
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
