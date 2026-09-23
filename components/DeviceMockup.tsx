import MicroscopyField from "./MicroscopyField";

type DeviceMockupProps = {
  mode?: "kit" | "exploded";
};

export default function DeviceMockup({ mode = "kit" }: DeviceMockupProps) {
  return (
    <div
      className={`device-scene device-scene-${mode}`}
      aria-label="Conceptual illustration of the HemaLume optical reader with smartphone dock"
    >
      <div className="device-shadow" />

      <div className="device-assembly">
        <div className="device-base">
          <div className="slide-stage">
            <div className="slide">
              <span className="smear" />
            </div>
          </div>
          <div className="illumination" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>

        <div className="optics-column">
          <div className="optics-barrel" />
          <div className="optics-lens">
            <i />
          </div>
          <div className="optics-collar" />
        </div>

        <div className="universal-dock">
          <div className="dock-rail" />
          <div className="dock-cradle" />
        </div>

        <div className="device-phone">
          <div className="phone-bezel">
            <div className="phone-notch" />
            <div className="phone-screen">
              <MicroscopyField variant="quality" />
              <div className="screen-ui">
                <span>HEMALUME</span>
                <strong>Image quality</strong>
                <em>PASS</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mode === "kit" && (
        <>
          <div className="kit-item vial" aria-hidden="true">
            <span className="vial-cap" />
            <span className="vial-fill" />
          </div>
          <div className="kit-item lancet" aria-hidden="true" />
          <div className="kit-item slide-pack" aria-hidden="true">
            <span />
          </div>
          <div className="kit-item swab" aria-hidden="true" />
        </>
      )}
    </div>
  );
}
