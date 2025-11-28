// src/pages/Sectors.jsx
const sectors = [
  {
    title: "HORECA",
    description:
      "Hotels, restaurants, cafés and catering companies relying on consistent supplies and quality ingredients.",
    icon: "🍽️",
  },
  {
    title: "Modern Trade & Retail",
    description:
      "Supermarkets, groceries and convenience stores across the UAE stocking everyday essentials and speciality items.",
    icon: "🛒",
  },
  {
    title: "Corporate & Offices",
    description:
      "Office pantries, staff canteens and meeting spaces supported with snacks, beverages and coffee solutions.",
    icon: "🏢",
  },
  {
    title: "Institutions",
    description:
      "Schools, hospitals and government entities served with tailored product portfolios and service models.",
    icon: "🏫",
  },
];

export default function Sectors() {
  return (
    <>
      {/* TOP HERO – like your old “Our Sectors” banner */}
      <section className="sectors-hero">
        <div className="sectors-hero-overlay">
          <div className="container sectors-hero-inner">
            <p className="sectors-hero-kicker">Our sectors</p>
            <h1 className="sectors-hero-title">Our Sectors</h1>
            <p className="sectors-hero-text">
              Wholesale food supply and coffee solutions for hotels, retailers,
              offices and institutions across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO + GRID – uses your new copy */}
      <section className="section section--white">
        <div className="container">
          <div className="sectors-intro">
            <h2 className="sectors-intro-title">
              Wholesale food supply across key sectors
            </h2>
            <p className="sectors-intro-text">
              For years, Future Foodstuff Trading Company L.L.C. has been a
              trusted wholesale food supplier, delivering consistent quality,
              dependable service and sector-specific product ranges. We
              understand the importance of reliable supply and work to exceed
              expectations on every order.
            </p>
          </div>

          <div className="sectors-grid sectors-grid--detail">
            {sectors.map((sector) => (
              <article key={sector.title} className="sector-card sector-card--detail">
                <div className="sector-card-icon">{sector.icon}</div>
                <div>
                  <h2 className="sector-card-title">{sector.title}</h2>
                  <p className="sector-card-text">{sector.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
