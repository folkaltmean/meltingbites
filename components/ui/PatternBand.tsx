import type { ReactNode } from "react";

const PATTERNS = {
  1: "/brand/patterns/pattern-01.jpg", // red bg, pink stripes
  2: "/brand/patterns/pattern-02.jpg", // olive bg, pink stripes
  3: "/brand/patterns/pattern-03.jpg", // pink bg, red stripes
  4: "/brand/patterns/pattern-04.jpg", // butter tonal stripes
  5: "/brand/patterns/pattern-05.jpg", // pink bg, red stripes (light)
  6: "/brand/patterns/pattern-06.jpg", // olive tonal stripes
  7: "/brand/patterns/pattern-07.jpg", // deep-red tonal stripes
} as const;

type PatternBandProps = {
  pattern: keyof typeof PATTERNS;
  children: ReactNode;
  rounded?: "top" | "bottom" | "both" | "none";
  className?: string;
  contentClassName?: string;
  as?: "section" | "div" | "footer";
};

const roundedClasses: Record<NonNullable<PatternBandProps["rounded"]>, string> = {
  top: "rounded-t-[2.5rem] sm:rounded-t-[4rem]",
  bottom: "rounded-b-[2.5rem] sm:rounded-b-[4rem]",
  both: "rounded-[2.5rem] sm:rounded-[4rem]",
  none: "",
};

export function PatternBand({
  pattern,
  children,
  rounded = "none",
  className = "",
  contentClassName = "",
  as = "section",
}: PatternBandProps) {
  const Tag = as;
  return (
    <Tag
      className={`relative w-full overflow-hidden bg-repeat ${roundedClasses[rounded]} ${className}`}
      style={{ backgroundImage: `url(${PATTERNS[pattern]})`, backgroundSize: "480px auto" }}
    >
      <div className={`relative mx-auto max-w-6xl px-6 py-16 sm:py-20 ${contentClassName}`}>
        {children}
      </div>
    </Tag>
  );
}
