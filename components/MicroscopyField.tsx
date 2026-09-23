"use client";

import Image from "next/image";

type Variant = "hero" | "soft" | "dark" | "quality" | "collect" | "check" | "triage" | "connect";

const ASSET: Partial<Record<Variant, string>> = {
  collect: "/workflow-micro-collect.png",
  check: "/workflow-micro-check.png",
  triage: "/workflow-micro-triage.png",
  soft: "/workflow-micro-triage.png",
  quality: "/workflow-micro-check.png",
  dark: "/workflow-micro-connect.png",
  connect: "/workflow-micro-connect.png",
  hero: "/hero-microscopy-lens.png"
};

export default function MicroscopyField({ variant = "hero" }: { variant?: Variant }) {
  const src = ASSET[variant] ?? "/hero-microscopy-lens.png";

  return (
    <div className={`micro-field micro-${variant}`} aria-label="Stylized blood smear microscopy field" role="img">
      <Image src={src} alt="" fill sizes="220px" className="micro-photo" />
      <div className="micro-wash" />
      <div className="micro-grain" />
      {variant === "quality" && (
        <div className="quality-frame">
          <span>FIELD COVERAGE</span>
          <b>PASS</b>
        </div>
      )}
      {variant === "hero" && (
        <>
          <div className="micro-lens-ring" />
          <div className="micro-crosshair" aria-hidden="true" />
        </>
      )}
      {variant === "dark" && <div className="micro-dark-glow" />}
      <div className="micro-vignette" />
    </div>
  );
}
