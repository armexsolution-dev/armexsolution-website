import React from 'react';
import { FiCheckCircle, FiGlobe, FiCpu, FiTrendingUp } from 'react-icons/fi';
import './WhoWeAre.css';

const WhoWeAre = () => {
  const features = [
    {
      icon: <FiCheckCircle />,
      title: 'Precision Driven',
      desc: 'Delivering accurate, buildable reinforcement detailing solutions',
    },
    {
      icon: <FiGlobe />,
      title: 'Global Reach',
      desc: 'Empowering construction teams worldwide',
    },
    {
      icon: <FiCpu />,
      title: 'BIM Integrated',
      desc: 'Advanced BIM-driven workflows for efficiency',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Industry Standards',
      desc: 'Setting new benchmarks for quality and accuracy',
    },
  ];

  return (
    <section className="wwa-section" id="about-journey" aria-label="Who we are - company introduction">
      <div className="wwa-container">
        {/* Left Content */}
        <div className="wwa-content">
          <span className="wwa-subtitle">WHO WE ARE</span>
          <h2 className="wwa-title">
            Engineering Expertise <span>behind</span> Stronger Structures.
          </h2>
          <p className="wwa-desc">
            At ARMEX Solutions India, we specialize in delivering precise and buildable reinforcement
            detailing services that empower construction teams worldwide.
          </p>
          <p className="wwa-desc">
            Founded with a vision to raise industry standards, we combine technical depth, global code
            compliance, and advanced BIM-driven workflows to provide detailing solutions that meet the highest
            levels of accuracy and efficiency.
          </p>
        </div>

        {/* Right Features Grid */}
        <div className="wwa-grid">
          {features.map((feature, index) => (
            <div key={index} className="wwa-card">
              <div className="wwa-card-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="wwa-card-title">{feature.title}</h3>
              <p className="wwa-card-desc">{feature.desc}</p>
              <div className="wwa-card-shine" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;