import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import logoNescafe from "../assets/8.png";
import logoUnilever from "../assets/9.png";
import logoReckitt from "../assets/10.png";
import logoNestle from "../assets/12.png";
import logoPepsi from "../assets/7.png";
import logoEkaterra from "../assets/11.png";
import uaeMap from "../assets/112.png";


const stats = [
  { label: "B2B Customers", value: "350+" },
  { label: "Employees", value: "50+" },
  { label: "Delivery Vehicles", value: "30+" },
  { label: "Products", value: "1000+" },
];

const brandLogoImages = [
  { src: logoNescafe, alt: "Nescafé" },
  { src: logoUnilever, alt: "Unilever" },
  { src: logoReckitt, alt: "Reckitt" },
  { src: logoNestle, alt: "Nestlé" },
  { src: logoPepsi, alt: "PepsiCo" },
  { src: logoEkaterra, alt: "Ekaterra" },
];


const sectors = [
  {
    title: "HORECA",
    description: "Hotels, restaurants, cafés & catering services across the UAE.",
  },
  {
    title: "Modern Trade & Retail",
    description: "Supermarkets, groceries and convenience stores.",
  },
  {
    title: "Corporate & Offices",
    description: "Office pantries and corporate coffee solutions.",
  },
  {
    title: "Institutions",
    description: "Schools, hospitals and government entities.",
  },
];

const categories = [
  {
    title: "Rice & Grains",
    description: "Premium basmati, jasmine and specialty rice varieties.",
  },
  {
    title: "Nuts & Dried Fruits",
    description: "Carefully sourced nuts and fruits for retail & HORECA.",
  },
  {
    title: "Snacks & Confectionery",
    description: "Leading global brands for every aisle and counter.",
  },
  {
    title: "Spices & Ingredients",
    description: "Kitchen essentials for professional chefs.",
  },
  {
    title: "Beverages",
    description: "Coffee, tea, juices and more.",
  },
  {
    title: "Coffee Solutions",
    description: "Nescafé office machines with full service.",
  },
];

const brandLogos = ["Nescafé", "Unilever", "Reckitt", "Nestlé", "PepsiCo"];

const brandImages = [
  { src: img1, alt: "Rice & grains" },
  { src: img2, alt: "Nuts & dried fruits" },
  { src: img3, alt: "Snacks & confectionery" },
  { src: img4, alt: "Spices & ingredients" },
  { src: img5, alt: "Home & personal care" },
  { src: img6, alt: "Nescafé coffee solutions" },
];



export default function Home() {
  const marqueeBrands = [...brandLogoImages, ...brandLogoImages]; // repeat for smooth loop

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-grid">
            {/* Left */}
            <div>
              <p className="badge">Since 2001 • Trusted UAE Distributor</p>

              <h1 className="hero-title">
                Future Foodstuff for your <span>best future.</span>
              </h1>

              <p className="hero-text">
                Future Foodstuff Trading Company LLC is a leading distributor of
                food & beverage products, connecting world-class FMCG brands
                with businesses across the UAE.
              </p>

              <div className="hero-actions">
                <Link to="/brands-products" className="btn btn-primary">
                  View product catalogue
                  <HiArrowRight size={16} />
                </Link>
                <Link to="/coffee-solutions" className="btn btn-secondary">
                  Office coffee solutions
                </Link>
              </div>

              
            </div>

            {/* Right “cards” */}
            <div className="hero-right-wrap">
              <div className="hero-blob hero-blob--orange" />
              <div className="hero-blob hero-blob--green" />

              <div className="hero-right-grid">
                <div>
                  <div className="hero-mini-card hero-mini-card--white">
                    <h3 className="hero-mini-title">1000+ SKUs</h3>
                    <p className="hero-mini-text">
                      Wide portfolio spanning dry, chilled and ambient
                      categories.
                    </p>
                  </div>
                  <div
                    className="hero-mini-card hero-mini-card--green"
                    style={{ marginTop: "1rem" }}
                  >
                    <h3 className="hero-mini-title">
                      Cold chain &amp; dry deliveries
                    </h3>
                    <p className="hero-mini-text">
                      Reliable distribution with a dedicated fleet across the
                      UAE.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="hero-mini-card hero-mini-card--white">
                    <h3 className="hero-mini-title">Coffee solutions</h3>
                    <p className="hero-mini-text">
                      Nescafé machines, ingredients, maintenance and training.
                    </p>
                  </div>
                  <div
                    className="hero-mini-card hero-mini-card--orange"
                    style={{ marginTop: "1rem" }}
                  >
                    <h3 className="hero-mini-title">20+ years experience</h3>
                    <p className="hero-mini-text">
                      Serving hotels, offices and retailers since 2001.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-stat">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <p className="stat-value">{item.value}</p>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* UAE COVERAGE MAP */}
<section className="section section--cream" data-animate="fade-up">
  <div className="container">
    <div className="uae-coverage">
      <div className="uae-coverage-map">
        <p className="uae-coverage-kicker">Nationwide coverage</p>
        <h2 className="uae-coverage-title">
          Delivering across key Emirates in the UAE
        </h2>
        <p className="uae-coverage-text">
          Our fleet services major commercial hubs daily – ensuring on-time
          deliveries to hotels, retailers and offices.
        </p>

     <div className="uae-map-card">
  <img
    src={uaeMap}
    alt="UAE coverage map"
    className="uae-map-img"
  />

  <div className="uae-map-dot uae-map-dot--abudhabi">
    <span>Abu Dhabi</span>
  </div>
  <div className="uae-map-dot uae-map-dot--alain">
    <span>Al Ain</span>
  </div>
  <div className="uae-map-dot uae-map-dot--dubai">
    <span>Dubai</span>
  </div>
  <div className="uae-map-dot uae-map-dot--sharjah">
    <span>Sharjah</span>
  </div>
  <div className="uae-map-dot uae-map-dot--rak">
    <span>RAK</span>
  </div>
  <div className="uae-map-dot uae-map-dot--fujairah">
    <span>Fujairah</span>
  </div>
  <div className="uae-map-dot uae-map-dot--uaq">
    <span>UAQ</span>
  </div>
  <div className="uae-map-dot uae-map-dot--ajman">
    <span>Ajman</span>
  </div>
</div>

      </div>

      <div className="uae-coverage-list">
        <h3 className="hero-mini-title">Where we deliver</h3>
        <ul className="uae-list">
          <li> Abu Dhabi &amp; Mussafah industrial area</li>
          <li> Dubai &amp; surrounding free zones</li>
          <li> Sharjah &amp; Northern Emirates</li>
          <li> Al Ain &amp; nearby institutions</li>
          <li> Ras Al Khaimah (RAK)</li>
          <li> Fujairah </li>
          <li> Ajman </li>
          <li> Umm Al Quwain (UAQ)</li>
        </ul>
        <p className="hero-mini-text" style={{ marginTop: "0.6rem" }}>
          Need delivery to another emirate? <strong>Talk to our team</strong> and
          we&apos;ll confirm routes and lead times.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* WHAT WE DO / SECTORS */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header section-header--row">
            <div>
              <p className="section-eyebrow">What we do</p>
              <h2 className="section-title">
                Supplying food &amp; beverage solutions across sectors
              </h2>
              <p className="section-description">
                From HORECA to corporate offices, we partner with businesses of
                all sizes to keep shelves stocked and pantries ready.
              </p>
            </div>
            <Link to="/sectors" className="section-header-right-link">
              Explore all sectors
              <HiArrowRight size={16} />
            </Link>
          </div>

          <div className="sectors-grid">
            {sectors.map((sector) => (
              <div key={sector.title} className="sector-card">
                <h3 className="hero-mini-title">{sector.title}</h3>
                <p className="hero-mini-text" style={{ marginTop: "0.35rem" }}>
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section section--white">
        <div className="container">
          <div
            className="section-header"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <p className="section-eyebrow">Brands &amp; categories</p>
            <h2 className="section-title">
              A portfolio that works hard for your shelves
            </h2>
            <p
              className="section-description"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              We curate products from leading global brands and trusted regional
              suppliers, covering everyday essentials to speciality items.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => (
              <div key={cat.title} className="category-card">
                <div>
                  <h3 className="hero-mini-title">{cat.title}</h3>
                  <p
                    className="hero-mini-text"
                    style={{ marginTop: "0.35rem" }}
                  >
                    {cat.description}
                  </p>
                </div>
                <Link
                  to="/brands-products"
                  className="section-header-right-link"
                  style={{ marginTop: "0.9rem", fontSize: "0.8rem" }}
                >
                  View related products
                  <HiArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND GALLERY (6 photos) */}
      <section className="section section--white">
        <div className="container">
          <div
            className="section-header"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <h2 className="section-title">Brand that gives you best</h2>
          </div>

          <div className="brand-gallery-grid">
            {brandImages.map((img) => (
              <div className="brand-gallery-item" key={img.alt}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOVING BRAND LOGOS STRIP */}
       {/* MOVING BRAND LOGOS STRIP */}
      <section className="section section--cream">
        <div className="container">
          <div
            className="section-header"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <h2 className="section-title">Brands</h2>
          </div>

          <div className="brand-marquee">
            <div className="brand-marquee-track">
              {marqueeBrands.map((logo, idx) => (
                <div key={logo.alt + idx} className="brand-marquee-logo">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* COFFEE SOLUTIONS HIGHLIGHT */}
      <section className="section section-coffee">
        <div className="container section-coffee-inner">
          <div className="coffee-grid">
            <div>
              <p className="section-eyebrow" style={{ color: "#bbf7d0" }}>
                Office coffee solutions
              </p>
              <h2 className="section-title" style={{ color: "#f9fafb" }}>
                Bring café-quality coffee to your workplace
              </h2>
              <p
                className="section-description"
                style={{ color: "#d1fae5", maxWidth: "32rem" }}
              >
                We provide end-to-end Nescafé coffee solutions – machines,
                ingredients, installation, training and regular maintenance – so
                your team can enjoy great coffee every day.
              </p>
              <ul
                style={{
                  marginTop: "0.75rem",
                  marginBottom: "0.75rem",
                  paddingLeft: "1.1rem",
                  fontSize: "0.9rem",
                  color: "#e5fdf4",
                }}
              >
                <li>Free site visit &amp; consultation</li>
                <li>Flexible packages for all office sizes</li>
                <li>Regular refilling and preventive maintenance</li>
              </ul>
              <div className="hero-actions">
                <Link to="/coffee-solutions" className="btn btn-primary">
                  Book free demo
                  <HiArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline-light">
                  Talk to our team
                </Link>
              </div>
            </div>

            <div>
              <div className="coffee-sidecard">
                <p className="section-eyebrow" style={{ color: "#0f766e" }}>
                  Why offices choose us
                </p>
                <p
                  className="hero-mini-text"
                  style={{ fontSize: "0.9rem", color: "#4b5563" }}
                >
                  “Future Foodstuff handled everything – from installation to
                  regular servicing. Our staff love the coffee, and we never
                  worry about running out.”
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#9ca3af",
                    marginTop: "0.4rem",
                  }}
                >
                  HR Manager, Abu Dhabi
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "0.6rem",
                    marginTop: "1rem",
                    textAlign: "center",
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
                    <p className="stat-label">Uptime</p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-value" style={{ fontSize: "1.1rem" }}>
                      24/7
                    </p>
                    <p className="stat-label">Service support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--cream">
        <div className="container">
          <div className="final-cta-box">
            <div>
              <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
                Ready to stock your business with quality products?
              </h2>
              <p className="section-description">
                Share a few details about your requirements and our team will
                get back to you with tailored options and pricing.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link to="/contact" className="btn btn-primary">
                Request a quote
              </Link>
              <a
                href="https://wa.me/971524045727"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
