import React, { useState } from 'react';
import {
  FiMail,
  FiFileText,
  FiBriefcase,
  FiSend,
  FiUser,
  FiPhone,
  FiAward
} from 'react-icons/fi';

import careerImage from '../../../assets/images/Career/Cv.png';
import './UploadCV.css';

const UploadCV = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS connect later
    console.log("Submitted Data:", formData);

    // Show success message
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });

    // Hide message after 5 sec
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="ucv-section" id="upload-section">
      <div className="ucv-container">

        {/* HEADER */}
        <div className="ucv-header">
          <span className="ucv-subtitle">APPLY NOW</span>

          <h2 className="ucv-title">
            Job Application <span>Form</span>
          </h2>

          <p className="ucv-desc">
            Fill out the form below and our HR team will contact you if your profile matches.
          </p>
        </div>

        {/* GRID */}
        <div className="ucv-grid">

          {/* LEFT SIDE */}
          <div className="ucv-email-card">
            <div className="ucv-card-inner">

              <div className="ucv-email-icon-wrapper">
                <FiBriefcase className="ucv-email-icon" />
              </div>

              <h3 className="ucv-email-title">
                Apply for a Position
              </h3>

              <p className="ucv-email-desc">
                Complete the form below to submit your application.
              </p>

              {/* FORM */}
              <form className="ucv-form" onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="ucv-input-group">
                  <FiUser />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="ucv-input-group">
                  <FiMail />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="ucv-input-group">
                  <FiPhone />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* POSITION */}
                <div className="ucv-input-group">
                  <FiBriefcase />

                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Position</option>

                    <option value="Rebar Detailer">
                      Rebar Detailer
                    </option>

                    <option value="Senior Rebar Detailer">
                      Senior Rebar Detailer
                    </option>

                    <option value="Rebar Checker">
                      Rebar Checker
                    </option>
                  </select>
                </div>

                {/* EXPERIENCE */}
                <div className="ucv-input-group">
                  <FiAward />

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Experience</option>

                    <option value="2-4 Years">
                      2-4 Years
                    </option>

                    <option value="4-6 Years">
                      4-6 Years
                    </option>

                    <option value="6+ Years">
                      6+ Years
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  placeholder="Tell us about your experience..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />

                {/* BUTTON */}
                <div className="button-row">
                  <button
                    type="submit"
                    className="btn-primary"
                    aria-label="Submit job application"
                  >
                    Submit Application

                    <span className="btn-arrow">
                      <FiSend />
                    </span>
                  </button>
                </div>

              </form>

              {/* SUCCESS MESSAGE */}
              {isSubmitted && (
                <div className="ucv-email-note">
                  <FiFileText className="ucv-note-icon" />

                  <p>
                    Your application has been submitted successfully. Our HR team will review your profile and contact you if shortlisted.
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="ucv-right-wrapper">

            <div className="ucv-right-top">
              <span className="ucv-info-tag">
                CAREER OPPORTUNITIES
              </span>

              <h3 className="ucv-info-title">
                Shape Your Future With Our Team
              </h3>

              <p className="ucv-info-desc">
                Join a workplace that values innovation, collaboration, and long-term professional growth.
              </p>
            </div>

            <div className="ucv-right-bottom">
              <img src={careerImage} alt="Career" />

              <div className="ucv-image-overlay"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default UploadCV;