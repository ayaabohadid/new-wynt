type Props = { size?: number };

export default function BrandLogo({ size = 30 }: Props) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <rect width="100" height="100" rx="22" fill="#6C3AED" />
        <path
          d="M20 32 L34 72 L50 42 L66 72 L80 32"
          stroke="white"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
