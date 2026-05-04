import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiHome,
  HiInformationCircle,
  HiOutlineCube,
  HiOutlinePhone,
} from "react-icons/hi";
import NavLogo from "../../assets/images/logo.svg";
import "./Navbar.css";

const navLinks = [
  { path: "/", label: "Home", icon: <HiHome /> },
  { path: "/about-us", label: "About Us", icon: <HiInformationCircle /> },
  { path: "/services", label: "Services", icon: <HiOutlineCube /> },
  { path: "/contact-us", label: "Contact Us", icon: <HiOutlinePhone /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Body scroll lock (stable)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [menuOpen]);

  // ESC key support
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-box">
            <img
              src={NavLogo}
              alt="Armex Business Solutions"
              className="navbar__logo-img"
              loading="eager"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__link${
                location.pathname === path ? " navbar__link--active" : ""
              }`}
            >
              <span className="navbar__link-icon">{icon}</span>
              {label}
              <span className="navbar__link-bar" />
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Gold Line */}
      <div className="navbar__gold-line" />

      {/* Overlay */}
      <div
        className={`mobile-overlay${
          menuOpen ? " mobile-overlay--open" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`mobile-drawer${
          menuOpen ? " mobile-drawer--open" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mobile-drawer__close"
          onClick={() => setMenuOpen(false)}
        >
          <HiOutlineX />
        </button>

        <nav className="mobile-drawer__nav">
          {navLinks.map(({ path, label, icon }, i) => (
            <Link
              key={path}
              to={path}
              className={`mobile-drawer__link${
                location.pathname === path
                  ? " mobile-drawer__link--active"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}
              style={{ "--i": i }}
            >
              <span className="mobile-drawer__icon">{icon}</span>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;