import React from 'react';
import {
  FiHome,
  FiGrid,
  FiMap,
  FiSettings,
} from 'react-icons/fi';

import './AboutHero.css';
import AboutH from '../../../assets/images/About/AboutHero.png';

const AboutHero = () => {
  const scrollToNext = () => {
    document.getElementById('about-journey')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="about-hero"
      aria-label="Hero section - rebar detailing experts"
    >
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
        {/* LEFT */}
        <div className="about-left about-fade-in-left">
          <div className="about-label about-slide-in">
            <span className="about-label-line" aria-hidden="true" />

            <span className="about-label-text">
              GLOBAL REBAR DETAILING EXPERTS
            </span>
          </div>

          <h1 className="about-heading">
            <span className="about-heading-line about-heading-line-1">
              Transforming Design
            </span>

            <span className="about-heading-line about-heading-line-2 about-text-gold">
              into
            </span>

            <span className="about-heading-line about-heading-line-3">
              Buildable Reinforcement
            </span>
          </h1>

          <p className="about-desc about-slide-in">
            Advanced rebar detailing and BIM modelling that improves
            constructability, coordination, and project efficiency.
          </p>

          {/* CTA BUTTON */}
          <div className="about-button-row about-slide-in">
            <button
              className="about-btn"
              onClick={scrollToNext}
              aria-label="Explore our journey"
            >
              Explore Journey

              <span
                className="about-btn-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right about-fade-in-right">
          {[
            {
              icon: FiHome,
              title: 'Residential',
              desc: 'Apartments, villas, High-Rise Towers',
            },
            {
              icon: FiGrid,
              title: 'Commercial',
              desc: 'Office Buildings, Malls, Hotels',
            },
            {
              icon: FiMap,
              title: 'Infrastructure',
              desc: 'Bridges, Metro, Highways',
            },
            {
              icon: FiSettings,
              title: 'Industrial',
              desc: 'Factories, Warehouses, Manufacturing Plants',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="about-card about-card-hover"
            >
              <card.icon
                className="about-card-icon"
                aria-hidden="true"
              />

              <h4 className="about-card-title">
                {card.title}
              </h4>

              <p className="about-card-desc">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;