export default function HemaLumeMark({ className = "", size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      className={`hemalume-mark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14.25" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="16" cy="9.2" r="2.35" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="22.6" cy="16.4" r="2.55" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="16.1" cy="22.9" r="2.2" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="9.4" cy="15.8" r="2.45" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="12.2" cy="12.4" r="1.05" fill="currentColor" opacity="0.55" />
      <circle cx="19.6" cy="12.8" r="0.9" fill="currentColor" opacity="0.45" />
      <circle cx="19.2" cy="20.2" r="0.85" fill="currentColor" opacity="0.4" />
      <circle cx="12.6" cy="19.8" r="0.95" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
