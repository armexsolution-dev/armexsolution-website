import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiBox, 
  FiLayers, 
  FiGrid, 
  FiPieChart, 
  FiMap, 
  FiTool, 
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";
import { servicesData } from "../../../data/servicesData";
import "./ServiceCategories.css";

const ServiceCategories = () => {
  const location = useLocation();
  const hasRestored = useRef(false);

  // Save scroll position continuously (as a backup)
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem("sc_scrollPos", window.scrollY);
    };
    window.addEventListener("scroll", saveScroll);
    saveScroll();
    return () => window.removeEventListener("scroll", saveScroll);
  }, []);

  // Restore scroll position when component mounts (e.g., after back navigation)
  useLayoutEffect(() => {
    // Prevent double restoration
    if (hasRestored.current) return;

    // 1. Check if we have a pending restoration flag
    const needRestore = sessionStorage.getItem("sc_needRestore") === "true";
    // 2. Get the saved scroll target
    let targetScroll = sessionStorage.getItem("sc_targetScroll");

    if (needRestore && targetScroll !== null) {
      const scrollPos = parseInt(targetScroll, 10);
      // Wait for all content (images, fonts) to settle
      const doScroll = () => {
        window.scrollTo({ top: scrollPos, behavior: "auto" });
        hasRestored.current = true;
        // Clean up flags
        sessionStorage.removeItem("sc_needRestore");
        sessionStorage.removeItem("sc_targetScroll");
      };
      if (document.readyState === "complete") {
        setTimeout(doScroll, 20);
      } else {
        window.addEventListener("load", () => setTimeout(doScroll, 20));
      }
    } else {
      // If no restoration needed, ensure we are at the top? No, keep normal.
      hasRestored.current = true;
    }
  }, []);

  const getIcon = (title) => {
    const iconMap = {
      '3D REBAR': <FiBox />,
      '2D SHOP': <FiLayers />,
      'BAR BENDING': <FiGrid />,
      'REBAR': <FiPieChart />,
      'GA': <FiMap />,
      'SITE': <FiTool />
    };
    return iconMap[title] || <FiBox />;
  };

  return (
    <section className="sc-section" id="ServiceCat" aria-label="Service categories">
      <div className="sc-pattern" aria-hidden="true"></div>

      <div className="sc-container">
        {/* Header */}
        <div className="sc-header">
          <span className="sc-subtitle">OUR SERVICES</span>
          <h2 className="sc-title">
            Comprehensive <span>Rebar Detailing</span> Solutions
          </h2>
          <p className="sc-desc">
            End-to-end reinforcement detailing services backed by BIM technology and international standards
          </p>
        </div>

        {/* Grid */}
        <div className="sc-grid">
          {servicesData.map((service) => (
            <Link 
              to={`/services/${service.id}`}
              key={service.id}
              className="sc-card"
              style={{ '--card-color': '#C9A22D' }}
              state={{ fromCategories: true }}
              onClick={() => {
                // *CRITICAL*: Save the current scroll position before navigation
                sessionStorage.setItem("sc_targetScroll", window.scrollY);
              }}
            >
              <div className="sc-card-image">
                <img 
                  src={service.cardImage} 
                  alt={`${service.title} ${service.subtitle} service`}
                  loading="lazy"
                />
                <div className="sc-image-overlay" aria-hidden="true"></div>
              </div>

              <div className="sc-card-content">
                <div className="sc-card-icon" aria-hidden="true">{getIcon(service.title)}</div>
                <h3 className="sc-card-title">
                  {service.title} <span>{service.subtitle}</span>
                </h3>
                <p className="sc-card-desc">{service.shortDesc}</p>
                <div className="sc-card-footer">
                  <span className="sc-card-link">
                    Learn More <FiArrowRight className="sc-link-icon" aria-hidden="true" />
                  </span>
                  <div className="sc-card-shine" aria-hidden="true"></div>
                </div>
              </div>

              <div className="sc-card-badge" aria-label="Premium service">
                <FiCheckCircle aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="sc-cta">
          <p>Need a custom solution for your project?</p>

          <Link to="/contact-us" className="sc-cta-btn">
            Contact Our Experts
            <span className="sc-btn-arrow">
              <FiArrowRight aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;