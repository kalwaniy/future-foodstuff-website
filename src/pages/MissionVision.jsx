// src/pages/MissionVision.jsx
export default function MissionVision() {
  return (
    <section className="section section--white">
      <div className="container mv-wrapper">
        {/* Header */}
        <div className="mv-header">
          <p className="section-eyebrow">Purpose</p>
          <h1 className="section-title">Vision, mission &amp; values</h1>
          <p className="section-description mv-header-text">
            Clear direction, consistent standards and strong values guide every
            partnership we build in the food and beverage industry.
          </p>
        </div>

        {/* Main two cards: Vision + Mission */}
        <div className="mv-main-grid">
          <article className="mv-card mv-card--primary">
            <div className="mv-card-top">
              <div className="mv-icon">
                <span role="img" aria-label="Vision">
                  👁️
                </span>
              </div>
              <div>
                <p className="mv-label">Vision</p>
                <h2 className="mv-title">Our Vision</h2>
              </div>
            </div>
            <p className="mv-text">
              To be one of the most reliable and respected partners for food
              and beverage distribution in the UAE, recognised for quality,
              service and trust.
            </p>
          </article>

          <article className="mv-card mv-card--primary">
            <div className="mv-card-top">
              <div className="mv-icon mv-icon--accent">
                <span role="img" aria-label="Mission">
                  🎯
                </span>
              </div>
              <div>
                <p className="mv-label">Mission</p>
                <h2 className="mv-title">Our Mission</h2>
              </div>
            </div>
            <p className="mv-text">
              To consistently deliver the right products, at the right time, in
              the right condition, while supporting our customers&apos; growth
              with flexible and responsive service.
            </p>
          </article>
        </div>

        {/* Secondary cards: Values + Promise */}
        <div className="mv-secondary-grid">
          <article className="mv-card mv-card--soft">
            <div className="mv-card-top">
              <div className="mv-icon mv-icon--soft">
                <span role="img" aria-label="Values">
                  💚
                </span>
              </div>
              <div>
                <p className="mv-label">Values</p>
                <h2 className="mv-title">Our Values</h2>
              </div>
            </div>
            <ul className="mv-list">
              <li>Reliability &amp; consistency</li>
              <li>Integrity in all dealings</li>
              <li>Long-term partnerships</li>
              <li>Respect for people &amp; products</li>
            </ul>
          </article>

          <article className="mv-card mv-card--soft">
            <div className="mv-card-top">
              <div className="mv-icon mv-icon--soft">
                <span role="img" aria-label="Promise">
                  🤝
                </span>
              </div>
              <div>
                <p className="mv-label">Promise</p>
                <h2 className="mv-title">Our Promise</h2>
              </div>
            </div>
            <p className="mv-text">
              To treat every customer&apos;s shelves, kitchens and pantries as
              if they were our own – with attention to detail, care and
              accountability.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
