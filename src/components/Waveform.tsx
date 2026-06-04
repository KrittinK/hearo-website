"use client";

interface WaveformProps {
  bars?: number;
  height?: number;
  color?: string;
  thick?: number;
  active?: boolean;
}

export function Waveform({
  bars = 32,
  height = 80,
  color = "currentColor",
  thick = 4,
  active = true,
}: WaveformProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        height,
        color,
        flexShrink: 0,
      }}
      role="img"
      aria-label="Sound waveform visualization"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const h =
          Math.min(100, 15 + (Math.sin(i * 0.9) * 0.5 + 0.5) * 70 + (i % 3) * 5);
        return (
          <div
            key={i}
            className={active ? "wave-bar" : ""}
            style={{
              height: `${h}%`,
              width: thick,
              background: "currentColor",
              borderRadius: 9999,
              animationDelay: `${(i * 0.07) % 1.2}s`,
              opacity: active ? 1 : 0.4,
              flexShrink: 0,
            }}
          />
        );
      })}
    </div>
  );
}
