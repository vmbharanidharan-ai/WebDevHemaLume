import HemaLumeMark from "./HemaLumeMark";

type Props = {
  className?: string;
  markSize?: number;
  href?: string;
};

/**
 * Brand lockup: mark + HemaLume wordmark.
 * Accessible name lives on the link; SVG is decorative.
 */
export default function HemaLumeLogo({ className = "", markSize = 28, href = "#top" }: Props) {
  return (
    <a className={`hemalume-logo ${className}`} href={href} aria-label="HemaLume home">
      <HemaLumeMark size={markSize} />
      <span className="hemalume-wordmark">HemaLume</span>
    </a>
  );
}
