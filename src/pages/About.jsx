// src/pages/About.jsx
export default function About() {
  return (
    <section className="section section--white">
      <div className="container">
        {/* Top intro block */}
        <div className="section-header">
          <p className="section-eyebrow">About Us</p>
          <h1 className="section-title">
            Future Foodstuff Trading Company LLC
          </h1>
        </div>

        <div className="about-top-grid">
          <div className="about-intro">
            <p>
           Future food stuff Trading Company. L.L.C. is one of the reputed names in the food business world of Abu Dhabi. Their Business dates to more than 2 decades, especially in distribution of all Kind of Foodstuff and Non food Items like disposables food containers, Foam plates. Paper cups ,Plastic cups an aluminum foil. The Company with its activities has an aggregate Annual Turnover of more than AED 35 Million as on Dec.2022
            </p>
            <p>
              After taking over the company Mr. Rajesh Kalwani is assisted and supported by a team of professional Manager, Accountants, Marketing & Sales Executive, with the help of every one Mr. Rajesh Kalwani made very good relations will all Giant Suppliers as well as Giant chain of customers.
            </p>
          </div>

          <div className="about-highlight-grid">
            <div className="about-highlight-card">
              <div className="about-highlight-icon">📦</div> {/* Changed emoji */}
              <h3>FMCG Distribution</h3>
              <p>
                Dry, chilled and ambient food &amp; beverage products for
                modern trade, traditional trade and HORECA.
              </p>
            </div>
            <div className="about-highlight-card">
              <div className="about-highlight-icon">🌟</div> {/* Changed emoji */}
              <h3>Long-Term Partnerships</h3>
              <p>
                Representing leading international and regional brands with a
                relationship-driven approach.
              </p>
            </div>
            <div className="about-highlight-card">
              <div className="about-highlight-icon">🌍</div> {/* Changed emoji */}
              <h3>End-to-End Service</h3>
              <p>
                From warehousing and fleet management to merchandising and
                after-sales support.
              </p>
            </div>
          </div>
        </div>

        {/* --- Our journey – clean story cards --- */}
        <div className="about-journey">
          <h2 className="about-journey-title">Our Journey</h2>

          <div className="about-journey-grid">
            <div className="about-journey-card">
              <div className="about-journey-chip">
                <span className="about-journey-year">2001</span>
                <span className="about-journey-tag">Foundation</span>
              </div>
              <p>
                Future Foodstuff Trading Company L.L.C. is established by{" "}
                <strong>Mr. Prabhu Tharwani</strong>, former senior manager at Al
                Maya Group, laying the foundation of a dedicated food distribution
                business in Abu Dhabi.
              </p>
            </div>

            <div className="about-journey-card">
              <div className="about-journey-chip">
                <span className="about-journey-year">2005</span>
                <span className="about-journey-tag">New Ownership</span>
              </div>
              <p>
                Ownership is taken over by <strong>Mr. Rajesh Kalwani</strong>.
                From this point onward the company grows under the stewardship of
                the Kalwani family, expanding its brand portfolio and customer
                base.
              </p>
            </div>

            <div className="about-journey-card">
              <div className="about-journey-chip">
                <span className="about-journey-year">2018</span>
                <span className="about-journey-tag">Retail Expansion</span>
              </div>
              <p>
                The company diversifies into retail by launching{" "}
                <strong>Future Star Supermarket</strong> in Mussafah, Abu Dhabi,
                strengthening its presence in modern trade and front-of-store
                execution.
              </p>
            </div>

            <div className="about-journey-card">
              <div className="about-journey-chip">
                <span className="about-journey-year">2021 &amp; beyond</span>
                <span className="about-journey-tag">Growth &amp; Portfolio</span>
              </div>
              <p>
                A renewed growth strategy focuses on building{" "}
                <strong>multi-category brand portfolios</strong> and expanding
                coverage across all Emirates – bringing more choice and better
                service to our customers.
              </p>
            </div>
          </div>
        </div>


{/* --- Our Clients --- */}
        <div className="about-clients">
          <h2 className="about-clients-title">Our Clients</h2>
          <p className="about-clients-subtitle">
            We are proud to serve a prestigious portfolio of clients across the UAE,
            including leading names in hospitality, catering and food distribution.
            Our long-standing partnerships reflect our commitment to quality,
            reliability and customer satisfaction.
          </p>

          <div className="about-clients-grid">
            <div className="about-clients-col">
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>National Corporation for Tourism &amp; Hotels</span>
              </div>
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>Abu Dhabi National Hotels Co – Compass Middle East</span>
              </div>
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>Al Jazeera International Catering L.L.C.</span>
              </div>
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>Kelvin Catering Service Emirates L.L.C.</span>
              </div>
            </div>

            <div className="about-clients-col">
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>Global Emirates Service Co L.L.C.</span>
              </div>
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>Zee Stores L.L.C.</span>
              </div>
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>Abu Dhabi National Foodstuff Co.</span>
              </div>
              <div className="about-client-item">
                <span className="about-client-icon">✓</span>
                <span>Apex Alwataniah Catering Service</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}