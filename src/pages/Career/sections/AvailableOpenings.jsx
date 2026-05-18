import React from 'react';
import {
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiArrowRight,
  FiCheckCircle,
} from 'react-icons/fi';

import './AvailableOpenings.css';

const AvailableOpenings = () => {
  const openings = [
  {
    title: 'Rebar Detailer',
    location: 'Chennai, India',
    type: 'Full Time',
    experience: '2–4 Years Experience',
    description:
      'Prepare accurate rebar detailing drawings, bar bending schedules, and reinforcement layouts for large-scale structural projects.',
    skills: [
      'AutoCAD',
      'Rebar Detailing',
      'BBS Preparation',
      'Structural Drawings',
    ],
  },

  {
    title: 'Senior Rebar Detailer',
    location: 'Chennai, India',
    type: 'Full Time',
    experience: '4–5 Years Experience',
    description:
      'Lead rebar detailing activities, review reinforcement drawings, and coordinate with project teams to ensure high-quality deliverables.',
    skills: [
      'Advanced Rebar Detailing',
      'Team Coordination',
      'Bar Bending Schedule',
      'Project Handling',
    ],
  },

  {
    title: 'Rebar Checker',
    location: 'Chennai, India',
    type: 'Full Time',
    experience: '6–8 Years Experience',
    description:
      'Review and verify rebar detailing drawings, ensure compliance with project standards, and maintain accuracy in reinforcement documentation.',
    skills: [
      'Quality Checking',
      'Rebar Standards',
      'Drawing Verification',
      'Construction Coordination',
    ],
  },
];

  const handleScroll = () => {
    const section = document.getElementById('upload-section');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="ao-section" id="openings-section">

      <div className="ao-container">

        {/* Header */}
        <div className="ao-header">

          <span className="ao-subtitle">
            CAREER OPENINGS
          </span>

          <h2 className="ao-title">
            Explore Our <span>Available Roles</span>
          </h2>

          <p className="ao-desc">
            Join our growing team and build your future with exciting
            projects, global exposure, and continuous career growth.
          </p>

        </div>

        {/* Grid */}
        <div className="ao-grid">

          {openings.map((job, index) => (

            <div className="ao-card" key={index}>

              <div className="ao-topbar"></div>

              {/* Role */}
              <div className="ao-role-wrap">

                <h3 className="ao-role">
                  {job.title}
                </h3>

                <span className="ao-badge">
                  Hiring Now
                </span>

              </div>

              {/* Meta */}
              <div className="ao-meta">

                <div className="ao-meta-item">
                  <FiMapPin />
                  <span>{job.location}</span>
                </div>

                <div className="ao-meta-item">
                  <FiBriefcase />
                  <span>{job.type}</span>
                </div>

                <div className="ao-meta-item">
                  <FiClock />
                  <span>{job.experience}</span>
                </div>

              </div>

              {/* Description */}
              <p className="ao-description">
                {job.description}
              </p>

              {/* Skills */}
              <div className="ao-skills">

                {job.skills.map((skill, idx) => (

                  <div className="ao-skill" key={idx}>
                    <FiCheckCircle />
                    <span>{skill}</span>
                  </div>

                ))}

              </div>

              {/* Button */}
              <button
                type="button"
                className="ao-btn"
                onClick={handleScroll}
              >
                Apply Now
                <FiArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AvailableOpenings;