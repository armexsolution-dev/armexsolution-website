import React from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFile, 
  FiCheckCircle,
  FiSend
} from 'react-icons/fi';
import './UploadCV.css';

const UploadCV = () => {
  return (
    <section className="ucv-section">
      <div className="ucv-container">
        
        {/* Header */}
        <div className="ucv-header">
          <span className="ucv-subtitle">APPLY NOW</span>
          <h2 className="ucv-title">
            Upload Your <span>CV</span>
          </h2>
          <p className="ucv-desc">
            No current openings? No problem. Send us your CV and we'll keep you in mind for future opportunities
          </p>
        </div>

        <div className="ucv-grid">
          
          {/* Left - Email CTA Card (replaces form) */}
          <div className="ucv-email-card">
            <div className="ucv-email-icon-wrapper">
              <FiMail className="ucv-email-icon" />
            </div>
            <h3 className="ucv-email-title">Send Us Your Resume</h3>
            <p className="ucv-email-desc">
              We are always looking for talented professionals to join our growing team. 
              Email your CV along with a brief introduction to our HR team.
            </p>
            
            <div className="ucv-email-address">
              <span className="ucv-email-label">HR Email Address</span>
              <a href="mailto:careers@armexsolutions.com?subject=Job%20Application%20-%20CV%20Attached&body=Dear%20HR%20Team,%0A%0APlease%20find%20my%20resume%20attached.%20I%20am%20interested%20in%20the%20following%20position%3A%0A%0A%5BInsert%20position%20title%5D%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D" 
                 className="ucv-email-link">
                careers@armexsolutions.com
                <FiSend className="ucv-email-send-icon" />
              </a>
            </div>

            <div className="ucv-email-instructions">
              <h4>What to include in your email:</h4>
              <ul>
                <li><FiCheckCircle /> Updated resume (PDF or DOC)</li>
                <li><FiCheckCircle /> Position you're interested in</li>
                <li><FiCheckCircle /> Brief cover message / introduction</li>
                <li><FiCheckCircle /> Portfolio or work samples (optional)</li>
              </ul>
            </div>

            <div className="ucv-email-note">
              <FiFile className="ucv-note-icon" />
              <p>We accept .pdf, .doc, .docx files (Max 5MB). All applications are kept confidential.</p>
            </div>
          </div>

          {/* Right - Contact Info (unchanged) */}
          <div className="ucv-info-card">
            <h3 className="ucv-info-title">HR Contact</h3>
            
            <div className="ucv-info-list">
              <div className="ucv-info-item">
                <FiMail className="ucv-info-icon" />
                <div>
                  <span className="ucv-info-label">Email</span>
                  <a href="mailto:careers@armexsolutions.com">career@armexsolution.com</a>
                </div>
              </div>

              <div className="ucv-info-item">
                <FiPhone className="ucv-info-icon" />
                <div>
                  <span className="ucv-info-label">Phone</span>
                  <a href="tel:+919840000000">+91-98400 00000</a>
                </div>
              </div>

              <div className="ucv-info-item">
                <FiMapPin className="ucv-info-icon" />
                <div>
                  <span className="ucv-info-label">Office</span>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="ucv-note">
              <FiFile className="ucv-note-icon" />
              <p>
                We accept .pdf, .doc, .docx files (Max 5MB). 
                All applications are kept confidential and reviewed by our HR team.
              </p>
            </div>

            <div className="ucv-privacy">
              <FiCheckCircle className="ucv-privacy-icon" />
              <span>Your data is protected by our privacy policy</span>
            </div>
          </div>

        </div>

        {/* Bottom Note (unchanged) */}
        <div className="ucv-bottom-note">
          <p>
            By submitting your application, you agree to our 
            <a href="/privacy-policy"> Privacy Policy</a> and 
            <a href="/terms-conditions"> Terms of Service</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default UploadCV;