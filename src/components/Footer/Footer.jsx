import "./Footer.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import FootLogo from "../../assets/images/logo.svg";
import { servicesData } from "../../data/servicesData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="as-footer" role="contentinfo">
      <div className="as-footer-container">
        {/* Brand Section */}
        <section className="as-footer-col">
          <div className="as-footer-logo-box">
            <img src={FootLogo} alt="Armex Solutions Logo" />
          </div>

          <p className="as-footer-tagline">
            ARMEX SOLUTIONS is a globally trusted provider of precision-engineered,
            buildable, and code-compliant rebar detailing services, empowering
            construction teams to deliver structurally sound and efficient projects
            worldwide.
          </p>
        </section>

        {/* Services Navigation */}
        <nav className="as-footer-col" aria-label="Services">
          <h3 className="as-footer-heading">Services</h3>

          <ul className="as-footer-list">
            {servicesData.map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`}>
                  {service.tagline}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Links */}
        <nav className="as-footer-col" aria-label="Quick links">
          <h3 className="as-footer-heading">Quick Links</h3>

          <ul className="as-footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/career">Careers</Link></li>
          </ul>
        </nav>

        {/* Contact Section */}
        <section className="as-footer-col">
          <h3 className="as-footer-heading">Contact</h3>

          <address className="as-footer-contact">
            <p>India · Global Delivery</p>

            <p>
              <a href="mailto:admin@armexsolution.com">
                admin@armexsolution.com
              </a>
            </p>

            <p>
              <a href="tel:+919342761826">
                +91 93427 61826
              </a>
            </p>
          </address>

          {/* CTA Button */}
          <div className="as-footer-button-row">
            <Link to="/contact-us">
              <button
                className="as-footer-cta-button"
                aria-label="Get in touch with 24/7 support"
              >
                Get in Touch

                <span
                  className="as-footer-btn-arrow"
                  aria-hidden="true"
                >
                  →
                </span>

                <span className="as-footer-cta-support">
                  24/7 Support
                </span>
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="as-footer-bottom">
        <p>© {year} ARMEX SOLUTIONS. All Rights Reserved.</p>

        <div
          className="as-footer-social"
          aria-label="Social media links"
        >
          <a
            href="https://www.linkedin.com/in/armex-solutions-451770407/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.instagram.com/armexsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="as-footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>

          <span aria-hidden="true">|</span>

          <Link to="/terms-and-conditions">Terms</Link>

          <span aria-hidden="true">|</span>

          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;