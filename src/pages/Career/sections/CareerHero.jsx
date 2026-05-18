import React from 'react';
import { FiArrowDown, FiBriefcase } from 'react-icons/fi';
import heroPattern from '../../../assets/images/Career/CareerHero.png'
import './CareerHero.css';

const CareerHero = () => {
  return (
    <section className="ch-career-hero">
      {/* Background Image */}
      <div className="ch-hero-bg">
        <img 
          src={heroPattern} 
          alt="Team collaboration at ARMEX Solutions"
        />
        <div className="ch-hero-overlay"></div>
      </div>

      <div className="ch-hero-container">
        {/* Floating accent icon */}
        <div className="ch-hero-icon" aria-hidden="true">
          <FiBriefcase />
        </div>

        {/* Content */}
        <div className="ch-hero-content">
          <span className="ch-hero-subtitle">JOIN OUR TEAM</span>

          <h1 className="ch-hero-title">
            Build Your <span>Career</span> With Us
          </h1>

          <p className="ch-hero-desc">
            Be part of a team that delivers precision engineering solutions to global construction projects.
            We're always looking for talented individuals to grow with us.
          </p>

          <button
            className="ch-hero-btn"
            onClick={() => {
              document
                .getElementById('upload-section')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Careers
            <FiArrowDown className="ch-btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;