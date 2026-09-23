import Image from "next/image";

export default function HeroMicroscopy() {
  return (
    <div className="hero-scope" aria-label="Optical microscopy field of a stained blood smear">
      <div className="hero-scope-field">
        <Image
          src="/hero-microscopy-field.png"
          alt=""
          fill
          sizes="(max-width: 768px) 90vw, 52vw"
          className="hero-scope-field-img"
          priority
        />
      </div>

      <div className="hero-scope-lens">
        <div className="hero-scope-lens-clip">
          <Image
            src="/hero-microscopy-lens.png"
            alt="Stained blood-smear microscopy detail"
            width={776}
            height={776}
            className="hero-scope-lens-img"
            priority
          />
        </div>
        <div className="hero-scope-reticle" aria-hidden="true">
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
