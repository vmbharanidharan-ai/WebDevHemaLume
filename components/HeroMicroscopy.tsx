import Image from "next/image";

export default function HeroMicroscopy() {
  return (
    <div className="hero-scope" aria-label="Optical microscopy field of a stained blood smear">
      <div className="hero-scope-field" aria-hidden="true">
        <Image
          src="/hero-microscopy-field.png"
          alt=""
          fill
          sizes="(max-width: 768px) 92vw, 54vw"
          className="hero-scope-field-img"
          priority
        />
      </div>

      <div className="hero-scope-lens">
        <div className="hero-scope-lens-clip">
          <Image
            src="/hero-microscopy-lens.png"
            alt="High-detail stained blood-smear microscopy"
            width={1600}
            height={1600}
            quality={95}
            className="hero-scope-lens-img"
            priority
          />
          <div className="hero-scope-inner-ring" aria-hidden="true" />
        </div>
        <div className="hero-scope-reticle" aria-hidden="true">
          <span className="ring ring-outer" />
          <span className="ring ring-inner" />
          <span className="tick tick-n" />
          <span className="tick tick-e" />
          <span className="tick tick-s" />
          <span className="tick tick-w" />
        </div>
        <div className="hero-scope-glass" aria-hidden="true" />
      </div>

      <p className="hero-note">
        Small details.
        <br />
        <b>Bigger impact.</b>
      </p>
    </div>
  );
}
