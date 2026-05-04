import React from 'react';
import {
  FiCheckCircle,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiLayers,
  FiCpu,
  FiEye,
  FiArrowRight,
} from 'react-icons/fi';
import './QualityProcess.css';

import AboutQP1 from '../../../assets/images/About/AboutQP1.jpg';
import AboutQP2 from '../../../assets/images/About/AboutQP2.jpg';
import AboutQP3 from '../../../assets/images/About/AboutQP3.jpg';
import AboutQP4 from '../../../assets/images/About/AboutQP4.jpg';

const QualityProcess = () => {
  const processSteps = [
    {
      image: AboutQP1,
      title: 'Code Compliance',
      description: 'Every drawing aligned with BS, Eurocode, ACI, ASTM, IS standards',
      color: '#C9A22D',
      step: '01',
      alt: 'Code compliance documentation review',
    },
    {
      image: AboutQP2,
      title: 'Accuracy Checks',
      description: 'Multi-level review system to eliminate errors',
      color: '#0F766E',
      step: '02',
      alt: 'Engineer reviewing reinforcement drawings for accuracy',
    },
    {
      image: AboutQP3,
      title: 'Client-Centric',
      description: 'Clear, buildable documentation for smooth approvals',
      color: '#C9A22D',
      step: '03',
      alt: 'Client consultation meeting',
    },
    {
      image: AboutQP4,
      title: 'Continuous Improvement',
      description: 'Regular training and system upgrades',
      color: '#0F766E',
      step: '04',
      alt: 'Team training and system upgrade session',
    },
  ];

  const qualityPillars = [
    { title: 'Precision', icon: <FiTarget />, color: '#C9A22D' },
    { title: 'Compliance', icon: <FiShield />, color: '#0F766E' },
    { title: 'Efficiency', icon: <FiCpu />, color: '#C9A22D' },
    { title: 'Reliability', icon: <FiCheckCircle />, color: '#0F766E' },
  ];

  return (
    <section className="qp-section" aria-label="Quality and process – our commitment to excellence">
      {/* Animated Background */}
      <div className="qp-bg" aria-hidden="true">
        <div className="qp-bg-gradient"></div>
        <div className="qp-bg-grid"></div>
        <div className="qp-bg-dots"></div>
      </div>

      <div className="qp-container">
        {/* Header */}
        <div className="qp-header">
          <div className="qp-header-badge">
            <FiCheckCircle className="qp-badge-icon" aria-hidden="true" />
            <span>QUALITY FIRST</span>
          </div>
          <h2 className="qp-title">
            Quality & <span>Process</span>
          </h2>
          <div className="qp-title-decoration" aria-hidden="true">
            <span className="qp-decoration-line"></span>
            <span className="qp-decoration-dot"></span>
            <span className="qp-decoration-line"></span>
          </div>
          <p className="qp-desc">
            Quality is not an afterthought — it is embedded in every stage of our detailing workflow
          </p>
        </div>

        {/* Process Flow */}
        <div className="qp-process">
          {processSteps.map((step, index) => (
            <div key={index} className="qp-process-step">
              <div className="qp-step-number" style={{ background: step.color }}>
                {step.step}
              </div>
              <div className="qp-step-icon" style={{ background: `${step.color}15`, borderColor: step.color }}>
                <img src={step.image} alt={step.alt} className="qp-step-img" loading="lazy" />
              </div>
              <div className="qp-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="qp-step-connector" aria-hidden="true">
                  <div className="qp-connector-line"></div>
                  <div className="qp-connector-dot"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quality Pillars */}
        <div className="qp-pillars">
          <div className="qp-pillars-header">
            <span className="qp-pillars-subtitle">OUR QUALITY PILLARS</span>
            <h3>
              Built on <span>Excellence</span>
            </h3>
          </div>
          <div className="qp-pillars-grid">
            {qualityPillars.map((pillar, index) => (
              <div key={index} className="qp-pillar-card" style={{ '--pillar-color': pillar.color }}>
                <div className="qp-pillar-icon" style={{ background: `${pillar.color}15`, color: pillar.color }} aria-hidden="true">
                  {pillar.icon}
                </div>
                <h4>{pillar.title}</h4>
                <div className="qp-pillar-bar" aria-hidden="true"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Statement */}
        <div className="qp-statement">
          <div className="qp-statement-icon" aria-hidden="true">
            <FiLayers />
          </div>
          <p>
            Each project undergoes systematic internal reviews and quality checks to verify
            completeness, accuracy, and coordination before final delivery to the client.
          </p>
          <div className="qp-statement-glow" aria-hidden="true"></div>
        </div>

        {/* Bottom Wave */}
        <div className="qp-wave" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="rgba(201,162,45,0.05)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;