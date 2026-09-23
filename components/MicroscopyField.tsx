"use client";

type Variant = "hero" | "soft" | "dark" | "quality";

type Cell = {
  x: number;
  y: number;
  size: number;
  rot: number;
  delay: number;
  duration: number;
  kind: "rbc" | "wbc" | "platelet" | "cluster";
  stain: number;
};

function buildCells(variant: Variant): Cell[] {
  const count = variant === "hero" ? 42 : variant === "dark" ? 36 : 28;
  const cells: Cell[] = [];

  for (let i = 0; i < count; i += 1) {
    const seed = (i * 7919 + 104729) % 1000;
    const x = ((i * 37 + 13 + (seed % 17)) % 94) + 2;
    const y = ((i * 61 + 9 + (seed % 23)) % 88) + 3;
    const kindRoll = seed % 17;
    const kind: Cell["kind"] =
      kindRoll === 0 || kindRoll === 11
        ? "wbc"
        : kindRoll === 3 || kindRoll === 14
          ? "cluster"
          : kindRoll === 7
            ? "platelet"
            : "rbc";

    const base =
      kind === "wbc" ? 7.2 : kind === "cluster" ? 9.4 : kind === "platelet" ? 2.4 : 4.1 + (seed % 18) / 10;

    cells.push({
      x,
      y,
      size: base,
      rot: (seed * 13) % 360,
      delay: (seed % 40) / 10,
      duration: 18 + (seed % 14),
      kind,
      stain: seed % 5
    });
  }

  return cells;
}

export default function MicroscopyField({ variant = "hero" }: { variant?: Variant }) {
  const cells = buildCells(variant);

  return (
    <div className={`micro-field micro-${variant}`} aria-label="Stylized blood smear microscopy field" role="img">
      <div className="micro-wash" />
      <div className="micro-grain" />
      <div className="micro-drift">
        {cells.map((cell, i) => (
          <span
            key={`${variant}-${i}`}
            className={`cell cell-${cell.kind} stain-${cell.stain}`}
            style={
              {
                left: `${cell.x}%`,
                top: `${cell.y}%`,
                width: `${cell.size}%`,
                height: `${cell.size}%`,
                "--rot": `${cell.rot}deg`,
                "--delay": `${cell.delay}s`,
                "--duration": `${cell.duration}s`
              } as React.CSSProperties
            }
          >
            <i />
            {cell.kind === "wbc" && <em />}
            {cell.kind === "cluster" && (
              <>
                <b />
                <b />
              </>
            )}
          </span>
        ))}
      </div>
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
