// src/pages/Contact.jsx
export default function Contact() {
  return (
    <section className="section section--cream">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-title">Let&apos;s talk about your requirements</h1>
          <p className="section-description">
            Share a few details about your business and product needs. Our team will
            get back to you with tailored suggestions and next steps.
          </p>
        </div>

        <div className="contact-layout">
          {/* FORM */}
          <form
            className="card contact-card"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Hook this form up to email/API later.");
            }}
          >
            <div className="contact-grid-two">
              <div className="contact-field">
                <label className="contact-label" htmlFor="name">
                  Name<span className="contact-required">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="contact-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="contact-input"
                  placeholder="Company / organisation"
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="email">
                  Email<span className="contact-required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="contact-input"
                  placeholder="name@company.com"
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="contact-input"
                  placeholder="+971 ..."
                />
              </div>
            </div>

            <div className="contact-field contact-field--full">
              <label className="contact-label" htmlFor="message">
                What are you looking for?
              </label>
              <textarea
                id="message"
                rows={4}
                className="contact-textarea"
                placeholder="Example: regular delivery of snacks and beverages to our offices in Dubai..."
              />
            </div>

            <div className="contact-actions">
              <button type="submit" className="btn btn-primary">
                Submit enquiry
              </button>
              <p className="contact-hint">
                By submitting, you agree to be contacted by our team regarding your
                enquiry.
              </p>
            </div>
          </form>

          {/* SIDE INFO PANEL */}
          <aside className="card contact-info-card">
            <h2 className="contact-info-title">Prefer to talk directly?</h2>
            <p className="contact-info-text">
              Reach out using any of the channels below. We&apos;re happy to discuss
              your requirements and suggest suitable options.
            </p>

            <div className="contact-info-block">
              <p className="contact-info-label">Email</p>
              <a href="mailto:admin@futurefoodstuff.com" className="contact-info-link">
                admin@futurefoodstuff.com
              </a>
            </div>

            <div className="contact-info-block">
              <p className="contact-info-label">Phone</p>
              <a href="tel:+971524045727" className="contact-info-link">
                +971 52 404 5727
              </a>
            </div>

            <div className="contact-info-block">
              <p className="contact-info-label">WhatsApp</p>
              <a
                href="https://wa.me/971566037687"
                target="_blank"
                rel="noreferrer"
                className="contact-info-link contact-info-link--whatsapp"
              >
                Message us on WhatsApp
              </a>
            </div>

            <div className="contact-info-footnote">
              Typical response time: within 1–2 business days.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
