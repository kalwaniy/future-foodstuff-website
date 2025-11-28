// src/pages/BrandsProducts.jsx
import riceImg from "../assets/24.jpg";
import pulsesImg from "../assets/25.jpg";
import nutsImg from "../assets/30.jpg";
import snacksImg from "../assets/33.jpg";
import spicesImg from "../assets/55.jpg";
import beveragesImg from "../assets/beverages.jpg";

const categoryCards = [
  {
    title: "Rice & Grains",
    examples:
      "Basmati, jasmine, long-grain, short-grain and speciality rice for every kitchen.",
    image: riceImg,
    tag: "Staples",
  },
  {
    title: "Pulses & Lentils",
    examples:
      "Chickpeas, lentils, beans and more for foodservice, caterers and retail.",
    image: pulsesImg,
    tag: "Protein",
  },
  {
    title: "Nuts & Dried Fruits",
    examples:
      "Almonds, cashews, pistachios, raisins and premium dried fruit blends.",
    image: nutsImg,
    tag: "Premium",
  },
  {
    title: "Snacks & Confectionery",
    examples:
      "Chips, biscuits, chocolates and impulse products for modern trade and HORECA.",
    image: snacksImg,
    tag: "On-the-go",
  },
  {
    title: "Spices & Ingredients",
    examples:
      "Core ingredients, herbs and spices for professional chefs and central kitchens.",
    image: spicesImg,
    tag: "Flavour",
  },
  {
    title: "Beverages",
    examples:
      "Coffee, tea, juices, water and soft drinks, including Nescafé office solutions.",
    image: beveragesImg,
    tag: "Refreshment",
  },
];

const brands = ["Nescafé", "Nestlé", "Unilever", "Reckitt", "PepsiCo"];

export default function BrandsProducts() {
  // repeat cards once for smooth scrolling strip
  const scrollerItems = [...categoryCards, ...categoryCards];

  return (
    <section className="section section--cream">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <p className="section-eyebrow">Brands &amp; products</p>
          <h1 className="section-title">A curated portfolio of trusted brands</h1>
          <p className="section-description">
            We work closely with leading international and regional manufacturers
            to build a portfolio that delivers value to retailers, foodservice
            customers and offices alike.
          </p>
        </div>

        {/* MOVING STRIP OF CATEGORY IMAGES */}
        <div className="bp-scroller">
          <div className="bp-scroller-track">
            {scrollerItems.map((cat, idx) => (
              <div className="bp-scroller-item" key={cat.title + idx}>
                <img src={cat.image} alt={cat.title} />
                <div className="bp-scroller-overlay">
                  <span className="bp-scroller-tag">{cat.tag}</span>
                  <p className="bp-scroller-title">{cat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GRID OF CATEGORY CARDS */}
        <h2 className="bp-subtitle">Categories we cover</h2>
        <div className="bp-grid">
          {categoryCards.map((cat) => (
            <article className="bp-card" key={cat.title}>
              <div className="bp-card-image-wrap">
                <img src={cat.image} alt={cat.title} />
                <span className="bp-card-tag">{cat.tag}</span>
              </div>
              <div className="bp-card-body">
                <h3>{cat.title}</h3>
                <p>{cat.examples}</p>
              </div>
            </article>
          ))}
        </div>

        {/* BRAND ROW */}
        <div className="bp-brand-row">
          <p className="bp-brand-label">Selected partner brands</p>
          <div className="bp-brand-pill-row">
            {brands.map((name) => (
              <span key={name} className="brand-pill">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
