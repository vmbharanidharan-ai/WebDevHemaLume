import Image from "next/image";
import Reveal from "../components/Reveal";
import MicroscopyField from "../components/MicroscopyField";
import DeviceMockup from "../components/DeviceMockup";

const steps = [
  ["01", "Collect", "Fingerstick sample prepared as a standardized smear."],
  ["02", "Check", "On-device quality control evaluates the captured field."],
  ["03", "Triage", "Local analysis flags cellular patterns that may need urgent review."],
  ["04", "Connect", "Flagged cases can sync for specialist review when connectivity is available."]
];

const capabilities = [
  ["01", "Universal", "Designed to work across common smartphone models."],
  ["02", "Standardized", "Guided sample collection and smear preparation."],
  ["03", "Offline", "Image processing is intended to run locally on-device."]
];

const offlineFlow = [
  ["01", "SAMPLE"],
  ["02", "PHONE"],
  ["03", "ON-DEVICE ANALYSIS"],
  ["04", "TRIAGE"],
  ["05", "SPECIALIST REVIEW"]
];

function CapabilityIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="8" y="3.5" width="8" height="17" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6.2h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 19c3.2-2.7 5.2-5.1 5.2-7.6A5.2 5.2 0 0 0 12 6.2 5.2 5.2 0 0 0 6.8 11.4c0 2.5 2 4.9 5.2 7.6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.5 9.2c1.7-1.8 3.9-2.8 6.5-2.8s4.8 1 6.5 2.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7.8 12c1.1-1.1 2.5-1.7 4.2-1.7s3.1.6 4.2 1.7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="16.2" r="1.2" fill="currentColor" />
      <path d="M6 18.5 18.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HemaLume home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>HemaLume</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#problem">Problem</a>
          <a href="#technology">Technology</a>
          <a href="#workflow">How it works</a>
          <a href="#research">Research</a>
        </nav>
        <a className="outline-button header-button" href="mailto:hello@hemalume.com">
          Contact
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            <a href="#problem">Problem</a>
            <a href="#technology">Technology</a>
            <a href="#workflow">How it works</a>
            <a href="#research">Research</a>
            <a href="mailto:hello@hemalume.com">Contact</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-wash" />
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">Point-of-care hematology triage</p>
            <h1>
              From a drop
              <br />
              to a decision.
            </h1>
            <p className="hero-sub">
              HemaLume is an offline blood-smear triage system designed for frontline clinics where specialist
              hematology may be out of reach.
            </p>
            <a className="primary-button" href="#technology">
              Explore HemaLume <span>→</span>
            </a>
          </Reveal>
        </div>
        <div className="hero-microscopy">
          <MicroscopyField variant="hero" />
          <span className="hero-note">
            Small details.
            <br />
            <b>Bigger impact.</b>
          </span>
        </div>
        <div className="scroll-cue">
          <span />
          Scroll to explore
        </div>
      </section>

      <section className="section problem" id="problem">
        <div className="section-index">
          01 <span>The problem</span>
        </div>
        <div className="problem-grid">
          <Reveal>
            <h2>
              Somewhere between
              <br />
              a child&apos;s first symptom
              <br />
              and a specialist&apos;s office
              <br />
              is a gap.
            </h2>
            <p>
              In many low-resource settings, that gap can become weeks. For children who may have leukemia, those
              weeks matter.
            </p>
            <a className="text-link" href="#impact">
              The impact <span>→</span>
            </a>
          </Reveal>
          <Reveal delay={100} className="timeline-wrap">
            <div className="timeline">
              <div className="timeline-node child-node">
                <div className="node-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M6.5 19c1.2-3.2 3-4.8 5.5-4.8S16.3 15.8 17.5 19" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <small>FIRST SYMPTOM</small>
                <span>At home or in the community</span>
              </div>
              <div className="timeline-line">
                <b>
                  WEEKS
                  <br />
                  CAN PASS
                </b>
              </div>
              <div className="timeline-node hospital-node">
                <div className="node-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 20V7.5h14V20" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M9 20v-5h6v5M12 7.5V4.8M10.2 6.2h3.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <small>SPECIALIST CARE</small>
                <span>Too far. Too slow. Too limited.</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="floating-cells cells-a" />
        <div className="floating-cells cells-b" />
      </section>

      <section className="section solution" id="technology">
        <div className="section-index">
          02 <span>The solution</span>
        </div>
        <div className="solution-grid">
          <Reveal className="solution-copy">
            <h2>
              A powerful tool.
              <br />
              Built for the real world.
            </h2>
            <p>
              HemaLume combines a standardized collection approach, a low-cost optical dock, and on-device analysis to
              help frontline health workers identify which children may need urgent specialist referral — without
              requiring a laboratory, a hematologist on site, or continuous internet.
            </p>
          </Reveal>
          <Reveal delay={120} className="device-wrap">
            <div className="device-photo-frame">
              <Image
                src="/hemalume-device-reference.png"
                alt="Conceptual HemaLume kit: smartphone in an optical dock with smear slide, vial, and collection tools"
                width={1200}
                height={900}
                className="device-photo"
                priority
              />
            </div>
            <div className="device-fallback" aria-hidden="true">
              <DeviceMockup mode="kit" />
            </div>
          </Reveal>
          <Reveal delay={180} className="capability-list">
            {capabilities.map(([num, title, text], index) => (
              <div className="capability" key={num}>
                <div className="capability-icon">
                  <CapabilityIcon index={index} />
                </div>
                <div>
                  <small>{title}</small>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <div className="section-index">
          03 <span>How it works</span>
        </div>
        <div className="workflow-head">
          <Reveal>
            <h2>
              From sample to
              <br />
              specialist — step by step.
            </h2>
          </Reveal>
        </div>
        <div className="steps">
          {steps.map(([num, title, text], i) => (
            <Reveal key={num} delay={i * 80} className="step-card">
              <div className="step-visual">
                {i < 3 ? (
                  <MicroscopyField variant={i === 1 ? "quality" : i === 2 ? "soft" : "hero"} />
                ) : (
                  <div className="offline-orb" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                      <path d="M14 24h20M24 14v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".35" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="step-number">{num}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="offline-section" id="offline">
        <div className="offline-left">
          <div className="section-index inverse">
            04 <span>Offline by design</span>
          </div>
          <Reveal>
            <h2>No cloud required.</h2>
            <p>
              The internet is optional.
              <br />
              The decision cannot be.
            </p>
            <div className="offline-flow">
              {offlineFlow.map(([n, label]) => (
                <div key={n}>
                  <span>{n}</span>
                  <b>{label}</b>
                  <i>→</i>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="offline-visual">
          <div className="phone-hand">
            <div className="hand-placeholder" />
            <div className="phone-large">
              <div className="phone-screen">
                <MicroscopyField variant="hero" />
                <div className="triage-chip">TRIAGE SIGNAL</div>
                <div className="triage-result">URGENT REFERRAL</div>
                <div className="triage-sub">Queue for specialist review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section device-section" id="device">
        <div className="section-index">
          05 <span>The device</span>
        </div>
        <div className="device-section-grid">
          <Reveal>
            <h2>
              Designed for the clinic,
              <br />
              not the laboratory.
            </h2>
            <p>
              A phone-agnostic optical dock with fixed optics, illumination, and a slide stage — intended to capture
              usable smear images in the field. Visuals here communicate design direction, not a finalized manufactured
              product.
            </p>
            <a className="outline-button dark-button" href="#technology">
              See the system <span>→</span>
            </a>
          </Reveal>
          <Reveal delay={100} className="device-exploded">
            <DeviceMockup mode="exploded" />
            <div className="callout c1">
              Smartphone
              <br />
              <small>common models</small>
            </div>
            <div className="callout c2">Universal dock</div>
            <div className="callout c3">Fixed optics</div>
            <div className="callout c4">Illumination</div>
            <div className="callout c5">Slide stage</div>
          </Reveal>
          <div className="device-capabilities">
            {capabilities.map(([num, title, text]) => (
              <div key={num}>
                <span>{num}</span>
                <b>{title}</b>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="impact-image">
          <div className="impact-atmosphere" />
          <div className="impact-micro">
            <MicroscopyField variant="soft" />
          </div>
          <p className="impact-caption">Presence over spectacle.</p>
        </div>
        <div className="impact-copy">
          <div className="section-index">
            06 <span>The why</span>
          </div>
          <Reveal>
            <h2>
              The goal isn&apos;t
              <br />
              to diagnose a child.
            </h2>
            <h3>It&apos;s to make sure the right child gets seen.</h3>
            <p>
              HemaLume is being developed as a triage aid — helping frontline workers recognize when a case may deserve
              urgent specialist attention, even when that specialist is far away. It is not intended to independently
              diagnose leukemia.
            </p>
            <a className="text-link" href="#research">
              Learn more <span>→</span>
            </a>
          </Reveal>
        </div>
        <div className="impact-side">
          <span>
            Better triage.
            <br />
            <b>More lives.</b>
          </span>
          <div className="mountains" />
        </div>
      </section>

      <section className="section difference" id="research">
        <div className="section-index">
          07 <span>The difference</span>
        </div>
        <Reveal>
          <h2>
            Built for a different
            <br />
            environment.
          </h2>
        </Reveal>
        <div className="compare-grid">
          <div className="compare-col muted">
            <small>CONVENTIONAL DIGITAL PATHOLOGY</small>
            <div>
              Patient <span>↓</span>
            </div>
            <div>
              Blood sample <span>↓</span>
            </div>
            <div>
              Laboratory <span>↓</span>
            </div>
            <div>
              Scanner <span>↓</span>
            </div>
            <div>
              Connectivity <span>↓</span>
            </div>
            <div>Specialist</div>
          </div>
          <div className="compare-divider">vs.</div>
          <div className="compare-col featured">
            <small>HEMALUME</small>
            <div>
              Patient <span>↓</span>
            </div>
            <div>
              Fingerstick <span>↓</span>
            </div>
            <div>
              HemaLume <span>↓</span>
            </div>
            <div>
              On-device triage <span>↓</span>
            </div>
            <div>
              Specialist review
              <br />
              <em>when connected</em>
            </div>
          </div>
        </div>
        <div className="difference-line">
          <span />
          We aren&apos;t trying to replace the laboratory.
          <br />
          <b>We&apos;re trying to reach the patient before the laboratory is available.</b>
        </div>
      </section>

      <section className="research-strip">
        <div>
          <span>Research direction</span>
          <strong>Pediatric leukemia first.</strong>
          <p>Then a broader hematology triage platform.</p>
        </div>
        <div>
          <span>Current focus</span>
          <strong>Field variability</strong>
          <p>Sample quality, on-device inference, and referral workflow.</p>
        </div>
        <div>
          <span>Next step</span>
          <strong>Pilot validation</strong>
          <p>Partner with clinics and specialists to test the workflow in context.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-copy">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            HemaLume
          </div>
          <p>Point-of-care hematology triage.</p>
          <h2>
            A specialist shouldn&apos;t have
            <br />
            to be in the room for the
            <br />
            first decision to be made.
          </h2>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@hemalume.com">
            Contact <span>→</span>
          </a>
          <a href="#technology">
            Learn more <span>→</span>
          </a>
        </div>
        <div className="footer-cells">
          <MicroscopyField variant="dark" />
        </div>
      </footer>
    </main>
  );
}
