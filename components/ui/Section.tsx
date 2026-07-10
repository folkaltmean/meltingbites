import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
};

export function Section({ children, id, className = "", containerClassName = "", as = "section" }: SectionProps) {
  const Tag = as;
  return (
    <Tag id={id} className={`w-full ${className}`}>
      <div className={`mx-auto max-w-6xl px-6 py-16 sm:py-24 ${containerClassName}`}>{children}</div>
    </Tag>
  );
}
