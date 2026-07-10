import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-melting-red text-cream hover:bg-soft-pink hover:text-melting-red border-2 border-melting-red",
  secondary:
    "bg-cream text-melting-red border-2 border-melting-red hover:bg-soft-pink hover:border-soft-pink",
  outline:
    "bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-melting-red",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-base transition-colors duration-200 focus-visible:outline-offset-4";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripping non-DOM props before the spread below
  const { href, variant: _v, className: _c, children: _ch, ...rest } = props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
