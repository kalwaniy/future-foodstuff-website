// src/pages/CoffeeSolutions.jsx
import { Link } from "react-router-dom";

// Media band
import coffeeMachineSoluble from "../assets/98.png"; // export from PDF
import coffeeMachineBeans from "../assets/99.png";     // export from PDF
import coffeeVideo from "../assets/Media1.mp4";

// Product images (optional but recommended)
import beansPortfolioImg from "../assets/97.png";    // page 4/5 collage
import premiumProductsImg from "../assets/96.png"; // page 6 collage

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product55.jpg";
import product6 from "../assets/product6.png";


export default function CoffeeSolutions() {
  return (
    <section className="section section--white">
      {/* HEADING */}
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Office coffee solutions</p>
          <h1 className="section-title">
            NESCAFÉ coffee machines & products for workplaces
          </h1>
          <p className="section-description">
            From small offices to large corporate headquarters, we help design coffee
            setups that keep teams energised and guests impressed – powered by
            NESCAFÉ Professional machines and ingredients.
          </p>
        </div>
      </div>

      {/* ✨ FEATURED MEDIA BAND */}
      <div className="coffee-media-shell">
        <div className="coffee-media-glow coffee-media-glow--left" />
        <div className="coffee-media-glow coffee-media-glow--right" />

        <div className="coffee-media-strip">
          {/* Left machine – soluble */}
          <div className="coffee-media-side-wrapper">
            <div className="coffee-media-side-card">
              <img
                src={coffeeMachineSoluble}
                alt="NESCAFÉ soluble coffee machine"
                className="coffee-media-side"
              />
              <p className="coffee-media-side-label">Soluble coffee solution</p>
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

          {/* Right machine – beans */}
          <div className="coffee-media-side-wrapper coffee-media-side-right">
            <div className="coffee-media-side-card">
              <img
                src={coffeeMachineBeans}
                alt="NESCAFÉ beans coffee machine"
                className="coffee-media-side"
              />
              <p className="coffee-media-side-label">Beans coffee solution</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID (overview + why us) */}
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
              <li>NESCAFÉ Professional coffee machines for different office sizes.</li>
              <li>NESCAFÉ coffee, NESTEA tea and cocoa products, and milk solutions.</li>
              <li>Installation, set-up and basic staff training.</li>
              <li>Regular refilling support and preventive maintenance visits.</li>
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
              <li>We assess your space, headcount and expected consumption.</li>
              <li>We recommend the right machine package and ingredient mix.</li>
              <li>Our team installs the machine and supports you with service.</li>
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
              We don&apos;t just place a machine; we support the entire experience – from
              product selection to response times – so your team always has access to
              reliable, good-quality coffee throughout the day.
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
                  70+
                </p>
                <p className="stat-label">cups per day capacity</p>
              </div>
              <div className="stat-card">
                <p className="stat-value" style={{ fontSize: "1.1rem" }}>
                  6
                </p>
                <p className="stat-label">ingredient canisters</p>
              </div>
            </div>

            <p
              style={{
                marginTop: "1.2rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              Looking for a specific NESCAFÉ machine model or drink? Mention it in your
              inquiry and we&apos;ll confirm availability and options.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: CHOOSE YOUR NESCAFÉ SOLUTION */}
      <div className="section section--cream">
        <div className="container">
          <div className="section-header section-header--row">
            <div>
              <p className="section-eyebrow">Packages</p>
              <h2 className="section-title" style={{ fontSize: "1.6rem" }}>
                Choose the solution that fits your office
              </h2>
              <p className="section-description">
                Two simple machine packages with clear beverage menus – one based on
                soluble coffee and one with whole beans for a barista-style experience.
              </p>
            </div>
          </div>

          <div className="mv-main-grid">
            {/* Soluble package */}
            <div className="mv-card mv-card--primary mv-card--soft">
              <div className="mv-card-top">
                <div className="mv-icon mv-icon--soft">☕</div>
                <div>
                  <p className="mv-label">Soluble coffee solution</p>
                  <h3 className="mv-title">NESCAFÉ Soluble Coffee Solutions</h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Starting from <strong>AED 875</strong> per month
                  </p>
                </div>
              </div>
              <p className="mv-text">
                Ideal for offices that want a compact machine with a strong menu of
                coffee, tea and chocolate drinks.
              </p>
              <div className="mv-list">
                <strong style={{ fontSize: "0.8rem" }}>Standard drinks:</strong>
                <ul>
                  <li>Espresso / Double Espresso</li>
                  <li>Americano</li>
                  <li>Cappuccino</li>
                  <li>Café Latte</li>
                  <li>Café Mocha</li>
                  <li>Hot Chocolate</li>
                </ul>
                <strong style={{ fontSize: "0.8rem" }}>Premium drinks:</strong>
                <ul>
                  <li>Caramel Cappuccino</li>
                  <li>NESTEA Cardamom Tea</li>
                  <li>NESTEA Masala Tea</li>
                </ul>
              </div>
            </div>

            {/* Beans package */}
            <div className="mv-card">
              <div className="mv-card-top">
                <div className="mv-icon mv-icon--accent">🌱</div>
                <div>
                  <p className="mv-label">Beans coffee solution</p>
                  <h3 className="mv-title">NESCAFÉ BEANS Coffee Solutions</h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Starting from <strong>AED 1,400</strong> per month
                  </p>
                </div>
              </div>
              <p className="mv-text">
                For workplaces that want freshly ground coffee and an even broader
                espresso-based menu.
              </p>
              <div className="mv-list">
                <strong style={{ fontSize: "0.8rem" }}>Standard drinks:</strong>
                <ul>
                  <li>Ristretto / Espresso / Double Espresso</li>
                  <li>Lungo &amp; Americano (with or without milk)</li>
                  <li>Cappuccino, Latte Macchiato, Mocha</li>
                  <li>Hot Chocolate, Espresso Macchiato</li>
                </ul>
                <strong style={{ fontSize: "0.8rem" }}>Premium drinks:</strong>
                <ul>
                  <li>Caramel Cappuccino</li>
                  <li>NESTEA Cardamom Tea</li>
                  <li>NESTEA Masala Tea</li>
                </ul>
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: "1.3rem",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            Pricing is indicative and depends on your final menu, expected consumption
            and ingredient mix. We&apos;ll provide a tailored quote after a short site
            visit.
          </p>
        </div>
      </div>

      {/* SECTION: COFFEE & TEA PRODUCTS */}
      <div className="section section--white">
        <div className="container">
          <div className="section-header section-header--row">
            <div>
              <p className="section-eyebrow">Coffee &amp; tea range</p>
              <h2 className="section-title" style={{ fontSize: "1.6rem" }}>
                What goes into every cup
              </h2>
              <p className="section-description">
                A curated portfolio of NESCAFÉ coffee beans, soluble coffees and NESTEA
                tea &amp; cocoa products to match different taste profiles.
              </p>
            </div>
          </div>

          <div className="mv-secondary-grid">
            {/* Beans portfolio */}
            <div className="mv-card">
              {beansPortfolioImg && (
                <div
                  style={{
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    marginBottom: "0.8rem",
                  }}
                >
                  <img
                    src={beansPortfolioImg}
                    alt="NESCAFÉ whole bean portfolio"
                  />
                </div>
              )}
              <div className="mv-card-top" style={{ marginBottom: "0.4rem" }}>
                <div className="mv-icon">🌍</div>
                <div>
                  <p className="mv-label">Whole bean portfolio</p>
                  <h3 className="mv-title">NESCAFÉ Roast &amp; Ground</h3>
                </div>
              </div>
              <p className="mv-text">
                A selection of NESCAFÉ beans with different roast profiles, including:
              </p>
              <ul className="mv-list">
                <li>
                  <strong>Intenso</strong> – strong body, low acidity, cocoa notes.
                </li>
                <li>
                  <strong>Espresso</strong> – full-bodied with dark chocolate and
                  hazelnut notes.
                </li>
                <li>
                  <strong>Superiore</strong> – 100% Arabica from Rainforest Alliance
                  Certified farms, with sweet almond notes.
                </li>
              </ul>
            </div>

            {/* Premium soluble + tea */}
            <div className="mv-card">
              {premiumProductsImg && (
                <div
                  style={{
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    marginBottom: "0.8rem",
                  }}
                >
                  <img
                    src={premiumProductsImg}
                    alt="NESCAFÉ premium coffee and NESTEA tea products"
                  />
                </div>
              )}
              <div className="mv-card-top" style={{ marginBottom: "0.4rem" }}>
                <div className="mv-icon mv-icon--accent">✨</div>
                <div>
                  <p className="mv-label">Premium mixes</p>
                  <h3 className="mv-title">Coffee, tea &amp; cocoa</h3>
                </div>
              </div>
              <p className="mv-text">
                Popular NESCAFÉ and NESTEA products used in our machines:
              </p>
              <ul className="mv-list">
                <li>NESCAFÉ 3-in-1 coffee</li>
                <li>NESCAFÉ Caramel Cappuccino</li>
                <li>NESTEA Cardamom Tea &amp; Masala Tea</li>
                <li>NESTLÉ Cacao Mix Milky</li>
                <li>NESCAFÉ Semi-Skimmed Milk solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT MARQUEE */}
<div className="section section--cream" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
  <div className="container">

    <p className="section-eyebrow">Our Products</p>
    <h2 className="section-title" style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
      NESCAFÉ & NESTEA Product Range
    </h2>

    <div className="product-marquee">
      <div className="product-marquee-track">
        {[product1, product2, product3, product4, product5, product6,
          product1, product2, product3, product4, product5, product6].map((img, i) => (
          <div className="product-marquee-item" key={i}>
            <img src={img} alt="product" />
          </div>
        ))}
      </div>
    </div>

  </div>
</div>


      {/* SECTION: MACHINE SPECS + SERVICE SUMMARY */}
      <div className="section section--cream">
        <div className="container">
          <div className="coffee-grid">
            {/* Specs */}
            <div className="mv-card mv-card--soft">
              <div className="mv-card-top">
                <div className="mv-icon">🛠</div>
                <div>
                  <p className="mv-label">Machine details</p>
                  <h3 className="mv-title">Compact footprint, professional build</h3>
                </div>
              </div>
              <ul className="mv-list">
                <li>10&quot; touch screen with modern UI.</li>
                <li>From 70+ cups per day capacity.</li>
                <li>8–11 menu selections, 6 ingredient canisters.</li>
                <li>Espresso cup stand &amp; 3.4L hot water boiler.</li>
                <li>
                  Approx. dimensions: H 60 cm × W 42.2 cm × D 56.8 cm (32 kg).
                </li>
              </ul>
            </div>

            {/* Service */}
            <div className="mv-card">
              <div className="mv-card-top">
                <div className="mv-icon mv-icon--accent">🤝</div>
                <div>
                  <p className="mv-label">Service &amp; support</p>
                  <h3 className="mv-title">We handle the coffee operation</h3>
                </div>
              </div>
              <p className="mv-text">
                The machine and technical service are provided as part of a commercial
                agreement with minimum monthly consumption. You focus on serving great
                coffee – we take care of:
              </p>
              <ul className="mv-list">
                <li>Machine installation and commissioning.</li>
                <li>Periodic maintenance and breakdown support.</li>
                <li>Supply of NESCAFÉ / NESTEA ingredients and cups.</li>
                <li>Basic staff training on daily cleaning and refilling.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
