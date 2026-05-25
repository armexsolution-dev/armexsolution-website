import React, { useState } from 'react';
import {
  FiMail,
  FiFile,
  FiBriefcase,
  FiSend,
  FiUser,
  FiPhone
} from 'react-icons/fi';

import careerImage from '../../../assets/images/Career/Cv.png';
import './UploadCV.css';

const UploadCV = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

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

          {/* ================= LEFT SIDE FORM ================= */}
          <div className="ucv-email-card">
            <div className="ucv-card-inner">

              <div className="ucv-email-icon-wrapper">
                <FiBriefcase className="ucv-email-icon" />
              </div>

              <h3 className="ucv-email-title">
                Apply for a Position
              </h3>

              <p className="ucv-email-desc">
                No file upload needed. Fill the form and submit your application.
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

                {/* POSITION DROPDOWN */}
                <div className="ucv-input-group">
                  <FiBriefcase />

                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Position</option>

                    <option value="BIM Engineer">
                      BIM Engineer
                    </option>

                    <option value="Structural Detailer">
                      Structural Detailer
                    </option>

                    <option value="Rebar Detailing Engineer">
                      Rebar Detailing Engineer
                    </option>

                    <option value="Civil Draftsman">
                      Civil Draftsman
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

                {/* SUBMIT BUTTON */}
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

              {/* NOTE */}
              <div className="ucv-email-note">
                <FiFile className="ucv-note-icon" />

                <p>
                  Your application will be reviewed by our HR team. We will contact you if shortlisted.
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
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