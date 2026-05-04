import React, { useEffect, useLayoutEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiHome, FiGrid, FiMap, FiSettings } from 'react-icons/fi';
import { getServiceById } from '../../../data/servicesData';
import SEO from '../../../seo/SEO';
import './ServiceDetail.css';

const industriesData = [
  { icon: <FiHome />, title: 'Residential', desc: 'Apartments, villas, High-Rise Towers' },
  { icon: <FiGrid />, title: 'Commercial', desc: 'Office Buildings, Malls, Hotels' },
  { icon: <FiMap />, title: 'Infrastructure', desc: 'Bridges, Metro, Highways' },
  { icon: <FiSettings />, title: 'Industrial', desc: 'Factories, Warehouses, Manufacturing Plants' },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const service = getServiceById(serviceId);

  useLayoutEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
      return;
    }

    // 1. Disable browser's automatic scroll restoration globally
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. If we came from the categories page (state or referrer), set the restoration flag
    const cameFromCategories = location.state?.fromCategories || 
                               document.referrer.includes('/services') && !document.referrer.includes('/services/');
    
    if (cameFromCategories) {
      // Signal to categories page that it should restore scroll when we go back
      sessionStorage.setItem("sc_needRestore", "true");
      // The target scroll is already saved by Categories (sc_targetScroll)
    } else {
      // If direct access, ensure no stale flag
      sessionStorage.removeItem("sc_needRestore");
      sessionStorage.removeItem("sc_targetScroll");
    }

    // 3. Force scroll to top – multiple strategies for reliability
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    const timer = setTimeout(scrollToTop, 10);
    window.addEventListener('load', scrollToTop);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', scrollToTop);
    };
  }, [service, navigate, serviceId, location.state]);

  if (!service) {
    return null;
  }

  return (
    <>
      <SEO
        title={`${service.title} | ARMEX SOLUTIONS`}
        description={service.description}
        canonical={`https://www.armexsolutions.com/services/${serviceId}`}
      />

      <main className="sd-creative">
        {/* Custom Back link – also triggers the restoration flag */}
        <Link 
          to="/services" 
          className="sd-back"
          state={{ fromDetail: true }}
          onClick={() => {
            // Ensure the categories page knows to restore scroll
            sessionStorage.setItem("sc_needRestore", "true");
          }}
        >
          <FiArrowLeft /> Back
        </Link>

        {/* Hero Section */}
        <div className="sd-hero">
          <div className="sd-hero-bg">
            <img src={service.bgImage} alt={service.title} />
            <div className="sd-hero-overlay" aria-hidden="true"></div>
          </div>
          <div className="sd-hero-content">
            <span className="sd-hero-sub">{service.subtitle}</span>
            <h1 className="sd-hero-title">{service.title}</h1>
            <p className="sd-hero-tagline">{service.tagline}</p>
          </div>
        </div>

        {/* Industries Section */}
        <div className="sd-card sd-card-full">
          <h3 className="sd-card-title">Industries</h3>
          <div className="sd-industries-grid">
            {industriesData.map((item, index) => (
              <div className="sd-industry-card" key={index}>
                <div className="sd-industry-icon" aria-hidden="true">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description Card */}
        <div className="sd-desc-card">
          <p>{service.description}</p>
        </div>

        {/* Features & Benefits Grid */}
        <div className="sd-grid-2col">
          <div className="sd-card">
            <h3 className="sd-card-title">Key Features</h3>
            <ul className="sd-list">
              {service.features.map((feature, index) => (
                <li key={index} className="sd-list-item">
                  <FiCheckCircle className="sd-list-icon" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sd-card">
            <h3 className="sd-card-title">Benefits</h3>
            <ul className="sd-list">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="sd-list-item">
                  <FiCheckCircle className="sd-list-icon" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="sd-cta">
          <h3>Need this service for your project?</h3>
          <Link to="/contact-us" className="sd-cta-btn">
            Contact Us Now
          </Link>
        </div>
      </main>
    </>
  );
};

export default ServiceDetail;