import React from 'react';
import { 
  FiTrendingUp, 
  FiUsers, 
  FiAward, 
  FiGlobe, 
  FiClock,
  FiCoffee 
} from 'react-icons/fi';
import './WhyJoinUs.css';

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <FiTrendingUp />,
      title: "Career Growth",
      desc: "Continuous learning opportunities and clear career progression paths"
    },
    {
      icon: <FiUsers />,
      title: "Expert Team",
      desc: "Work with experienced professionals in structural engineering"
    },
    {
      icon: <FiGlobe />,
      title: "Global Projects",
      desc: "Work on international projects across USA, UK, UAE & more"
    },
    {
      icon: <FiAward />,
      title: "Skill Development",
      desc: "Regular training on latest software and industry standards"
    },
    {
      icon: <FiClock />,
      title: "Flexible Hours",
      desc: "Work-life balance with flexible working arrangements"
    },
    {
      icon: <FiCoffee />,
      title: "Great Culture",
      desc: "Collaborative environment with supportive team culture"
    }
  ];

  return (
    <section className="wju-section" id='upload-section'>
      <div className="wju-container">
        
        {/* Header */}
        <div className="wju-header">
          <span className="wju-subtitle">WHY JOIN US</span>
          <h2 className="wju-title">
            Grow Your <span>Career</span> With ARMEX
          </h2>
          <p className="wju-desc">
            We offer more than just a job – we offer a career with purpose
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="wju-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="wju-card">
              <div className="wju-card-icon">{benefit.icon}</div>
              <h3 className="wju-card-title">{benefit.title}</h3>
              <p className="wju-card-desc">{benefit.desc}</p>
              <div className="wju-card-shine"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyJoinUs;