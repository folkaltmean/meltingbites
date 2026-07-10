import Image from "next/image";

const STAMP_SRC = {
  "bite-me": {
    red: "/brand/stamps/stamp-bite-me-red.png",
    pink: "/brand/stamps/stamp-bite-me-pink.png",
  },
  "freshly-baked": {
    red: "/brand/stamps/stamp-freshly-baked-red.png",
    pink: "/brand/stamps/stamp-freshly-baked-pink.png",
  },
  "made-with-love": {
    red: "/brand/stamps/stamp-made-with-love-red.png",
    pink: "/brand/stamps/stamp-made-with-love-pink.png",
  },
} as const;

const STAMP_ALT: Record<keyof typeof STAMP_SRC, string> = {
  "bite-me": 'Hand-drawn stamp reading "Bite me Please!"',
  "freshly-baked": 'Hand-drawn heart-shaped stamp reading "Freshly Baked"',
  "made-with-love": 'Hand-drawn bitten-cookie stamp reading "Made with Love"',
};

type StampName = keyof typeof STAMP_SRC;

type StampProps = {
  name: StampName;
  color?: "red" | "pink";
  size?: number;
  rotate?: number;
  className?: string;
};

export function Stamp({ name, color = "red", size = 120, rotate = -6, className = "" }: StampProps) {
  return (
    <Image
      src={STAMP_SRC[name][color]}
      alt={STAMP_ALT[name]}
      width={size}
      height={size}
      className={`select-none drop-shadow-sm ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}
