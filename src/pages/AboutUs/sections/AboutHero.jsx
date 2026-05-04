import React, { useEffect, useRef } from 'react';
import {
  FiAward,
  FiCheckCircle,
  FiTool,
  FiHeadphones,
  FiHome,
  FiGrid,
  FiMap,
  FiSettings,
  FiArrowRight,
} from 'react-icons/fi';
import './AboutHero.css';
import AboutH from '../../../assets/images/About/AboutHero.png';

const AboutHero = () => {
  const scrollToNext = () => {
    document.getElementById('about-journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  const statRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    statRefs.current.forEach((ref) => ref && observer.observe(ref));
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-hero" aria-label="Hero section - rebar detailing experts">
      <div className="about-hero-bg">
        <img
          src={AboutH}
          alt="Modern construction site with steel reinforcement"
          className="about-bg-image"
          loading="lazy"
        />
        <div className="about-overlay" aria-hidden="true" />
        <div className="about-particles" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="about-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="about-wrapper">
        <div className="about-left about-fade-in-left">
          <div className="about-label about-slide-in">
            <span className="about-label-line" aria-hidden="true" />
            <span className="about-label-text">GLOBAL REBAR DETAILING EXPERTS</span>
          </div>

          <h1 className="about-heading">
            <span className="about-heading-line about-heading-line-1">Transforming Design</span>
            <span className="about-heading-line about-heading-line-2 about-text-gold">into</span>
            <span className="about-heading-line about-heading-line-3">Buildable Reinforcement</span>
          </h1>

          <p className="about-desc about-slide-in">
            Advanced rebar detailing and BIM modelling that improves constructability, coordination,
            and project efficiency.
          </p>

          <button className="about-btn about-slide-in" onClick={scrollToNext} aria-label="Explore our journey">
            <span className="about-btn-text">Explore Journey</span>
            <FiArrowRight className="about-btn-icon" aria-hidden="true" />
          </button>

          <div className="about-stats">
            {[
              { icon: FiAward, value: '10+', label: 'Years', delay: 0.1 },
              { icon: FiCheckCircle, value: '99%', label: 'On-Time Delivery', delay: 0.2 },
              { icon: FiTool, value: '100%', label: 'Buildability', delay: 0.3 },
              { icon: FiHeadphones, value: '24/7', label: 'Support', delay: 0.4 },
            ].map((stat, index) => (
              <div
                key={index}
                className="about-stat about-stat-hover"
                ref={(el) => (statRefs.current[index] = el)}
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <stat.icon className="about-stat-icon" aria-hidden="true" />
                <div className="about-stat-content">
                  <h3 className="about-stat-value">{stat.value}</h3>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right about-fade-in-right">
          {[
            { icon: FiHome, title: 'Residential', desc: 'Apartments, villas, High-Rise Towers', delay: 0.3 },
            { icon: FiGrid, title: 'Commercial', desc: 'Office Buildings, Malls, Hotels', delay: 0.4 },
            { icon: FiMap, title: 'Infrastructure', desc: 'Bridges, Metro, Highways', delay: 0.5 },
            { icon: FiSettings, title: 'Industrial', desc: 'Factories, Warehouses, Manufacturing Plants', delay: 0.6 },
          ].map((card, index) => (
            <div
              key={index}
              className="about-card about-card-hover"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <card.icon className="about-card-icon" aria-hidden="true" />
              <h4 className="about-card-title">{card.title}</h4>
              <p className="about-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;