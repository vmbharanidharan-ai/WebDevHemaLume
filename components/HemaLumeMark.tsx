type Props = {
  className?: string;
  size?: number;
  /** Use on dark backgrounds (footer). */
  variant?: "brand" | "light";
};

/**
 * HemaLume mark — traced from design-reference.png header logo.
 * Circular cluster of variable dots (cell / smear morphology), deep magenta.
 * Hollow center; ~20 filled circles; not a flower, face, loader, or cross.
 */
export default function HemaLumeMark({ className = "", size = 28, variant = "brand" }: Props) {
  const fill = variant === "light" ? "#F4E8EC" : "#82283F";

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
      <g fill={fill}>
        {/* Outer + mid ring — clockwise from top; radii vary like reference */}
        <circle cx="16.22" cy="6.22" r="2.35" />
        <circle cx="20.65" cy="6.60" r="1.35" />
        <circle cx="19.77" cy="11.16" r="1.95" />
        <circle cx="25.34" cy="10.28" r="1.55" />
        <circle cx="22.30" cy="13.95" r="2.45" />
        <circle cx="26.35" cy="15.97" r="2.15" />
        <circle cx="25.59" cy="20.02" r="1.45" />
        <circle cx="21.54" cy="20.28" r="2.25" />
        <circle cx="23.56" cy="23.82" r="1.85" />
        <circle cx="19.51" cy="26.61" r="1.55" />
        <circle cx="16.09" cy="26.48" r="2.05" />
        <circle cx="15.84" cy="21.80" r="1.65" />
        <circle cx="12.42" cy="24.46" r="1.25" />
        <circle cx="8.88" cy="23.19" r="1.95" />
        <circle cx="10.90" cy="18.63" r="1.95" />
        <circle cx="6.35" cy="19.90" r="1.85" />
        <circle cx="6.35" cy="13.95" r="1.85" />
        <circle cx="8.37" cy="10.40" r="1.75" />
        <circle cx="11.16" cy="8.00" r="1.65" />
        <circle cx="13.44" cy="11.29" r="2.05" />
      </g>
    </svg>
  );
}
