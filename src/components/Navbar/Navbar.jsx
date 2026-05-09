import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiHome,
  HiOutlineCube,
  HiOutlinePhone,
  HiInformationCircle,
  HiArrowRight,
} from "react-icons/hi";

import NavLogo from "../../assets/images/logo.svg";

import "./Navbar.css";

const navLinks = [
  {
    path: "/",
    label: "Home",
    icon: <HiHome />,
  },

  {
    path: "/about-us",
    label: "About Us",
    icon: <HiOutlineCube />,
  },

  {
    path: "/services",
    label: "Services",
    icon: <HiOutlineCube />,
  },

  {
    path: "/contact-us",
    label: "Contact Us",
    icon: <HiInformationCircle />,
  },

];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          {/* LOGO */}
          <Link to="/" className="navbar__logo">
            <img
              src={NavLogo}
              alt="Armex Solutions"
              className="navbar__logo-img"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="navbar__menu">
            {navLinks.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`navbar__link ${
                  location.pathname === path
                    ? "navbar__link--active"
                    : ""
                }`}
              >
                <span className="navbar__icon">{icon}</span>

                <span>{label}</span>

                {location.pathname === path && (
                  <span className="navbar__active-line"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* BUTTON */}
          <Link to="/contact-us" className="navbar__btn">
            <span>Get Quote</span>

            <HiArrowRight />
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`mobile-overlay ${
          menuOpen ? "mobile-overlay--open" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`mobile-drawer ${
          menuOpen ? "mobile-drawer--open" : ""
        }`}
      >
        <button
          className="mobile-drawer__close"
          onClick={() => setMenuOpen(false)}
        >
          <HiOutlineX />
        </button>

        <nav className="mobile-drawer__nav">
          {navLinks.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`mobile-drawer__link ${
                location.pathname === path
                  ? "mobile-drawer__link--active"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{icon}</span>

              <span>{label}</span>
            </Link>
          ))}

          <Link
            to="/contact-us"
            className="mobile-drawer__btn"
            onClick={() => setMenuOpen(false)}
          >
            <span>Get Quote</span>

            <HiArrowRight />
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;