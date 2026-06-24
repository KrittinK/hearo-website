import Image from "next/image";

interface HearoMarkProps {
  size?: number;
}

export function HearoMark({ size = 40 }: HearoMarkProps) {
  return (
    <Image
      src="/Hearo.png"
      alt="Hearo logo mark"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
      unoptimized
    />
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
