// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX, HiSearch } from "react-icons/hi";
import logo from "../assets/13.png"; // <-- add this import

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Mission", to: "/mission-vision" },
  { label: "Sectors", to: "/sectors" },
  { label: "Brands & Products", to: "/brands-products" },
  { label: "Coffee Solutions", to: "/coffee-solutions" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-left">
            <div className="navbar-logo-circle">
              <img
                src={logo}
                alt="Future Foodstuff logo"
                className="navbar-logo-img"
              />
            </div>
            <div className="navbar-title-wrapper">
              <p className="navbar-title-main">Future Foodstuff</p>
              <p className="navbar-title-sub">Trading Company LLC</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  "navbar-link" + (isActive ? " active" : "")
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button className="navbar-icon-btn">
              <HiSearch size={18} color="#6b7280" />
            </button>

            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </nav>

          {/* Mobile side */}
          <div className="navbar-right-mobile">
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ fontSize: "0.75rem", padding: "0.45rem 0.9rem" }}
            >
              Contact
            </Link>
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiX size={22} /> : <HiOutlineMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  "navbar-mobile-link" + (isActive ? " active" : "")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
