type Props = {
  className?: string;
  size?: number;
};

/**
 * HemaLume mark — stylized microscopic field of view.
 * Thin FOV ring with irregular stroked cellular forms; one biological instrument mark.
 */
export default function HemaLumeMark({ className = "", size = 28 }: Props) {
  return (
    <svg
      className={`hemalume-mark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="#8A2940"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Field of view */}
        <circle cx="16" cy="16" r="13.15" />

        {/* Irregular cellular colony — sizes/positions uneven; some kiss the FOV edge */}
        <circle cx="11.6" cy="12.8" r="3.55" />
        <circle cx="19.9" cy="11.9" r="2.45" />
        <circle cx="20.6" cy="18.7" r="3.05" />
        <circle cx="13.4" cy="20.9" r="2.35" />
        <circle cx="9.35" cy="18.15" r="1.7" />
        <circle cx="16.55" cy="15.35" r="1.55" />
        <circle cx="23.4" cy="14.55" r="1.4" />
        {/* Partial cell clipped against FOV (drawn full; ring reads as aperture) */}
        <circle cx="15.9" cy="6.85" r="1.85" />
      </g>
    </svg>
  );
}
