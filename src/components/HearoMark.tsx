interface HearoMarkProps {
  size?: number;
  purple?: string;
  orange?: string;
}

export function HearoMark({
  size = 40,
  purple = "#00A8E1",
  orange = "#FFE600",
}: HearoMarkProps) {
  return (
    <svg
      width={size}
      height={size * (60 / 52)}
      viewBox="0 0 52 60"
      fill="none"
      aria-label="Hearo logo mark"
      role="img"
    >
      <path
        d="M26 2C12.7 2 2 12.4 2 25.2c0 10.2 6.6 18.6 15 25.4 4 3.2 6.7 5.8 9 7.4 2.3-1.6 5-4.2 9-7.4 8.4-6.8 15-15.2 15-25.4C50 12.4 39.3 2 26 2z"
        fill={purple}
      />
      <path
        d="M19 16c0-3.3 3.4-6 7.5-6s7.5 2.7 7.5 6c0 2-.8 3.4-2.1 5-1.6 1.9-2.4 3-2.4 5.2 0 2.6 2 3.2 2 5.6 0 2.6-2.2 4.2-4.5 4.2"
        stroke={orange}
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="15" cy="22" r="1.6" fill={orange} />
      <circle cx="12" cy="30" r="1.6" fill={orange} />
      <circle cx="18" cy="34" r="1.6" fill={orange} />
      <path
        d="M15 22 L9 22 M12 30 L7 30 M18 34 L13 38"
        stroke={orange}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({
  size = 28,
  color = "#F2F9FF",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <HearoMark size={size} />
      <span
        style={{
          fontWeight: 600,
          fontSize: size * 0.72,
          letterSpacing: "-0.02em",
          color,
        }}
      >
        Hearo
      </span>
    </div>
  );
}
