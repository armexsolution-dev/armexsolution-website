import React from 'react';
import {
  FiMail,
  FiFile,
  FiCheckCircle,
  FiSend
} from 'react-icons/fi';

import careerImage from '../../../assets/images/Career/Cv.png';

import './UploadCV.css';

const UploadCV = () => {
  return (
    <section className="ucv-section" id="upload-section">
      <div className="ucv-container">

        {/* Header */}
        <div className="ucv-header">

          <span className="ucv-subtitle">
            APPLY NOW
          </span>

          <h2 className="ucv-title">
            Upload Your <span>CV</span>
          </h2>

          <p className="ucv-desc">
            No current openings? No problem. Send us your CV and
            we'll keep you in mind for future opportunities
          </p>

        </div>

        {/* Main Grid */}
        <div className="ucv-grid">

          {/* LEFT CARD */}
          <div className="ucv-email-card">

            <div className="ucv-card-inner">

              {/* Icon */}
              <div className="ucv-email-icon-wrapper">
                <FiMail className="ucv-email-icon" />
              </div>

              {/* Title */}
              <h3 className="ucv-email-title">
                Send Us Your Resume
              </h3>

              {/* Description */}
              <p className="ucv-email-desc">
                We are always looking for talented professionals to
                join our growing team. Email your CV along with a
                brief introduction to our HR team.
              </p>

              {/* Email CTA */}
              <div className="ucv-email-address">

                <span className="ucv-email-label">
                  HR Email Address
                </span>

                <a
                  href="mailto:admin@armexsolution.com.com?subject=Job%20Application%20-%20CV%20Attached"
                  className="ucv-email-link"
                >
                   admin@armexsolution.com

                  <FiSend className="ucv-email-send-icon" />
                </a>

              </div>

              {/* Instructions */}
              <div className="ucv-email-instructions">

                <h4>
                  What to include in your email:
                </h4>

                <ul>

                  <li>
                    <FiCheckCircle />
                    Updated resume (PDF or DOC)
                  </li>

                  <li>
                    <FiCheckCircle />
                    Position you're interested in
                  </li>

                  <li>
                    <FiCheckCircle />
                    Brief cover message / introduction
                  </li>

                  <li>
                    <FiCheckCircle />
                    Portfolio or work samples (optional)
                  </li>

                </ul>

              </div>

              {/* Note */}
              <div className="ucv-email-note">

                <FiFile className="ucv-note-icon" />

                <p>
                  We accept .pdf, .doc, .docx files (Max 5MB).
                  All applications are kept confidential.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="ucv-image-card">

            <img
              src={careerImage}
              alt="Career"
              className="ucv-image"
            />

            <div className="ucv-image-overlay">

              <div className="ucv-overlay-content">

                <span className="ucv-overlay-tag">
                  CAREER OPPORTUNITIES
                </span>

                <h3>
                  Shape Your Future With Our Team
                </h3>

                <p>
                  Join a workplace that values innovation,
                  collaboration, and long-term professional growth.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Note */}
        <div className="ucv-bottom-note">

          <p>
            By submitting your application, you agree to our
            <a href="/privacy-policy"> Privacy Policy</a>
            and
            <a href="/terms-conditions"> Terms of Service</a>.
          </p>

        </div>

      </div>
    </section>
  );
};

export default UploadCV;