import Image from "next/image";

export default function HeroMicroscopy() {
  return (
    <>
      <div
        className="hero-microscopy-bg"
        aria-hidden="true"
        style={{ backgroundImage: "url(/hero-microscopy-field.png)" }}
      />

      <div className="microscope-frame" aria-label="Optical microscopy field of a stained blood smear">
        <div className="microscope-image">
          <Image
            src="/hero-microscopy-lens.png"
            alt="High-detail stained blood-smear microscopy"
            width={1600}
            height={1600}
            quality={95}
            className="microscope-image-img"
            priority
          />
        </div>
        <div className="microscope-crosshairs" aria-hidden="true">
          <span className="tick tick-n" />
          <span className="tick tick-e" />
          <span className="tick tick-s" />
          <span className="tick tick-w" />
          <span className="cross-h" />
          <span className="cross-v" />
        </div>
      </div>

      <p className="hero-annotation">
        Small details.
        <br />
        Bigger impact.
      </p>
    </>
  );
}
