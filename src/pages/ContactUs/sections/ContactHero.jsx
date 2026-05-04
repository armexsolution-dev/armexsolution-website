import React from "react";
import "./ContactHero.css";
import ContactH from '../../../assets/images/Contact/ContactHero.png';

const ContactHero = () => {
  return (
    <section className="c-hero" aria-label="Contact hero section">
      <div className="c-hero-bg">
        <img 
          src={ContactH}
          alt="Contact ARMEX Solutions – Rebar detailing experts"
          loading="eager"
        />
        <div className="c-hero-overlay" aria-hidden="true"></div>
        <div className="c-hero-shape c-shape-1" aria-hidden="true"></div>
        <div className="c-hero-shape c-shape-2" aria-hidden="true"></div>
        <div className="c-hero-shape c-shape-3" aria-hidden="true"></div>
      </div>

      <div className="c-hero-container">
        <div className="c-hero-title-block">
          <span className="c-hero-subtitle">GET IN TOUCH</span>
          <h1 className="c-hero-title">
            Let's <span>Connect</span>
          </h1>
          <p className="c-hero-desc">
            Ready to discuss your project? We're just a message away.
          </p>
        </div>

        <div className="c-hero-stats">
          <div className="c-stat">
            <span className="c-stat-number">24/7</span>
            <span className="c-stat-label">Support</span>
          </div>
          <div className="c-stat-divider" aria-hidden="true"></div>
          <div className="c-stat">
            <span className="c-stat-number">100%</span>
            <span className="c-stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;