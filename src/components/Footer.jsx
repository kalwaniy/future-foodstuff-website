export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-heading">
              Future Foodstuff Trading Company LLC
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
                marginBottom: "0.4rem",
              }}
            >
              Your trusted partner for food &amp; beverage distribution and
              office coffee solutions across the UAE.
            </p>
            <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
              admin@futurefoodstuff.com
              <br />
              +971 52 404 5727
            </p>
          </div>

          <div>
            <p className="footer-heading">Useful links</p>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/sectors">Our Sectors</a>
              </li>
              <li>
                <a href="/brands-products">Brands &amp; Products</a>
              </li>
              <li>
                <a href="/coffee-solutions">Coffee Solutions</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Connect with us</p>
            <div className="footer-pill-row">
              <a
                href="https://www.instagram.com/futurefoodstufftrading2001/"
                target="_blank"
                rel="noreferrer"
                className="footer-pill"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Future Foodstuff Trading Company LLC.
            All rights reserved.
          </span>
          <span>Website redesigned by Yash.</span>
        </div>
      </div>
    </footer>
  );
}
