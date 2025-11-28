// src/pages/CoffeeSolutions.jsx
import { Link } from "react-router-dom";
import coffeeMachine from "../assets/Picture1.jpg";   // <- update path/name
import coffeeVideo from "../assets/Media1.mp4";      // <- update path/name

export default function CoffeeSolutions() {
  return (
    <section className="section section--white">
      {/* Heading */}
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Office coffee solutions</p>
          <h1 className="section-title">Nescafé coffee solutions for workplaces</h1>
          <p className="section-description">
            From small offices to large corporate headquarters, we help design coffee
            setups that keep teams energised and guests impressed.
          </p>
        </div>
      </div>

      {/* ✨ FEATURED MEDIA BAND */}
      <div className="coffee-media-shell">
        <div className="coffee-media-glow coffee-media-glow--left" />
        <div className="coffee-media-glow coffee-media-glow--right" />

        <div className="coffee-media-strip">
          {/* Left machine */}
          <div className="coffee-media-side-wrapper">
            <div className="coffee-media-side-card">
              <img
                src={coffeeMachine}
                alt="Nescafé coffee machine"
                className="coffee-media-side"
              />
              <p className="coffee-media-side-label">Compact offices</p>
            </div>
          </div>

          {/* Center video */}
          <div className="coffee-media-center">
            <div className="coffee-media-badge">NESCAFÉ Professional</div>
            <video
              className="coffee-media-video"
              src={coffeeVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Right machine */}
          <div className="coffee-media-side-wrapper coffee-media-side-right">
            <div className="coffee-media-side-card">
              <img
                src={coffeeMachine}
                alt="Nescafé coffee machine"
                className="coffee-media-side"
              />
              <p className="coffee-media-side-label">Large workplaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="container">
        <div className="coffee-grid">
          <div>
            <h2 className="hero-mini-title">What we provide</h2>
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1.2rem",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              <li>Nescafé coffee machines suitable for different office sizes.</li>
              <li>Supply of coffee, milk and related ingredients.</li>
              <li>Installation, set-up and basic staff training.</li>
              <li>Regular refilling and preventive maintenance visits.</li>
            </ul>

            <h2 className="hero-mini-title" style={{ marginTop: "1.5rem" }}>
              How it works
            </h2>
            <ol
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1.2rem",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              <li>Contact us to book a free visit or consultation.</li>
              <li>We assess your space, team size and consumption needs.</li>
              <li>We recommend suitable machine models and packages.</li>
              <li>Our team installs and maintains the solution for you.</li>
            </ol>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact" className="btn btn-primary">
                Book a free consultation
              </Link>
              <a
                href="https://wa.me/971524045727"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="coffee-sidecard">
            <h2 className="hero-mini-title">Why choose our coffee solutions?</h2>
            <p
              className="hero-mini-text"
              style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}
            >
              We don&apos;t just place a machine; we support the entire experience –
              from product selection to service response times – so your team always
              has access to reliable, good-quality coffee.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "0.8rem",
                marginTop: "1.2rem",
              }}
            >
              <div className="stat-card">
                <p className="stat-value" style={{ fontSize: "1.1rem" }}>
                  50+
                </p>
                <p className="stat-label">Office installs</p>
              </div>
              <div className="stat-card">
                <p className="stat-value" style={{ fontSize: "1.1rem" }}>
                  99%
                </p>
                <p className="stat-label">Machine uptime</p>
              </div>
            </div>

            <p
              style={{
                marginTop: "1.2rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              Looking for a specific Nescafé machine model? Mention it in your
              inquiry and we&apos;ll confirm availability and options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
