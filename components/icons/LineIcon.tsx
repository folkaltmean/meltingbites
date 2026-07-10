export function LineIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      role="img"
      aria-label="LINE"
    >
      <path
        d="M12 2C6.48 2 2 5.66 2 10.17c0 4.04 3.55 7.42 8.35 8.06.32.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .87.55 1.08-.46 5.8-3.42 7.92-5.85C21.34 13.6 22 12 22 10.17 22 5.66 17.52 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M9.5 8.5v4.2m2-4.2 1.9 2.6m0 0V8.5m0 2.6 1.9-2.6M6 8.5v4.2h1.6M15.6 8.5h-1.9v4.2h1.9"
        stroke="#fff"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
