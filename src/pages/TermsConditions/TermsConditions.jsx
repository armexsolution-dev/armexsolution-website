import React, { useState } from "react";
import SEO from "../../seo/SEO"; // ✅ SEO IMPORT

import { 
  FiFileText, 
  FiLock, 
  FiGlobe, 
  FiUsers, 
  FiBriefcase,
  FiShield,
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiArrowRight
} from "react-icons/fi";
import "./TermsConditions.css";

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  const tabs = [
    {
      id: 0,
      icon: <FiFileText />,
      title: "Introduction",
      content: "Welcome to ARMEX Solutions India Private Limited. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access our services. We provide rebar detailing and BIM coordination services to clients worldwide."
    },
    {
      id: 1,
      icon: <FiBriefcase />,
      title: "Services",
      content: "ARMEX Solutions provides professional rebar detailing, 3D BIM modeling, bar bending schedules, rebar estimation, GA drawings, and site support services. All services are delivered based on project-specific requirements and international standards including BS 8666, Eurocode 2, ACI 318, and IS Codes. We reserve the right to modify or discontinue any service without prior notice."
    },
    {
      id: 2,
      icon: <FiUsers />,
      title: "Client Obligations",
      content: "Clients agree to provide accurate and complete project information, including structural drawings, specifications, and any other required documentation. Clients must ensure they have the right to use all materials provided to us. Delays in providing necessary information may affect project timelines. Clients are responsible for final approval of all deliverables."
    },
    {
      id: 3,
      icon: <FiLock />,
      title: "Intellectual Property",
      content: "All deliverables, including drawings, models, schedules, and other materials created by ARMEX Solutions remain our intellectual property until full payment is received. Upon full payment, clients receive a non-exclusive license to use the deliverables for the intended project. We retain the right to use generalized project data for portfolio and marketing purposes."
    },
    {
      id: 4,
      icon: <FiShield />,
      title: "Confidentiality",
      content: "Both parties agree to maintain the confidentiality of all proprietary information shared during the course of the project. We implement strict security measures to protect client data. Confidential information shall not be disclosed to third parties without consent, except as required by law. This obligation survives termination of the agreement."
    },
    {
      id: 5,
      icon: <FiGlobe />,
      title: "International Standards",
      content: "All deliverables are prepared in accordance with applicable international standards as specified by the client. We comply with BS 8666 (UK), Eurocode 2 (Europe), ACI 318 (USA), and IS Codes (India). Clients are responsible for specifying which standards apply to their project. We do not guarantee compliance with unspecified standards."
    },
    {
      id: 6,
      icon: <FiAlertCircle />,
      title: "Limitation of Liability",
      content: "ARMEX Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific project. We do not guarantee that our services will be error-free or uninterrupted. Clients are encouraged to review all deliverables thoroughly."
    },
    {
      id: 7,
      icon: <FiClock />,
      title: "Project Timelines",
      content: "Project timelines are estimates provided in good faith based on the information available. Actual delivery times may vary depending on project complexity, client responsiveness, and unforeseen circumstances. We strive to meet agreed deadlines but shall not be liable for delays beyond our reasonable control. Rush services may incur additional charges."
    },
    {
      id: 8,
      icon: <FiCheckCircle />,
      title: "Revisions & Approvals",
      content: "We include a reasonable number of revisions as part of our service. Major changes outside the original scope may be subject to additional charges. Clients must provide clear feedback within a reasonable timeframe. Final approval of deliverables constitutes acceptance of the work. Further changes after approval may be treated as new revisions."
    },
    {
      id: 9,
      icon: <FiMail />,
      title: "Contact Information",
      content: "For questions about these Terms and Conditions, please contact us at admin@armexsolutions.com or call +91-98400 00000. Our office is located in Chennai, India. We aim to respond to all inquiries within 48 hours. These terms were last updated on March 15, 2025, and supersede all previous versions."
    }
  ];

  const handleTabClick = (index) => {
    setContentVisible(false);
    setTimeout(() => {
      setActiveTab(index);
      setContentVisible(true);
    }, 200);
  };

  return (
    <>
      {/* ✅ SEO ADDED */}
      <SEO page="terms" />

      <section className="tc-section">
        <div className="tc-container">
          
          {/* Header */}
          <div className="tc-header">
            <span className="tc-subtitle">LEGAL AGREEMENT</span>
            <h1 className="tc-title">
              Terms & <span>Conditions</span>
            </h1>
            <p className="tc-desc">
              Last updated: March 15, 2025 · Version 2.0
            </p>
          </div>

          {/* Status Bar */}
          <div className="tc-status-bar">
            <div className="tc-status-item">
              <span className="tc-status-label">DOCUMENT</span>
              <span className="tc-status-value">TERMS_v2.0</span>
            </div>
            <div className="tc-status-divider"></div>
            <div className="tc-status-item">
              <span className="tc-status-label">SECTIONS</span>
              <span className="tc-status-value">{tabs.length}</span>
            </div>
            <div className="tc-status-divider"></div>
            <div className="tc-status-item">
              <span className="tc-status-label">STATUS</span>
              <span className="tc-status-value">ACTIVE</span>
            </div>
            <div className="tc-status-divider"></div>
            <div className="tc-status-item">
              <span className="tc-status-label">EFFECTIVE</span>
              <span className="tc-status-value">15 MAR 2025</span>
            </div>
          </div>

          {/* Main Content with Tabs */}
          <div className="tc-main">
            
            {/* Tabs */}
            <div className="tc-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`tc-tab ${activeTab === index ? 'tc-tab-active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="tc-tab-icon">{tab.icon}</span>
                  <span className="tc-tab-title">{tab.title}</span>
                  <FiArrowRight className="tc-tab-arrow" />
                  <span className="tc-tab-number">{String(index + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className={`tc-content ${contentVisible ? 'tc-content-visible' : ''}`}>
              <div className="tc-content-card">
                <div className="tc-content-header">
                  <span className="tc-content-badge">
                    SECTION {String(activeTab + 1).padStart(2, '0')}
                  </span>
                  <h2>{tabs[activeTab].title}</h2>
                </div>
                <div className="tc-content-body">
                  <p>{tabs[activeTab].content}</p>
                </div>
                <div className="tc-content-footer">
                  <div className="tc-progress">
                    <div 
                      className="tc-progress-bar" 
                      style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="tc-page-indicator">
                    {activeTab + 1} / {tabs.length}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Acceptance */}
          <div className="tc-acceptance">
            <FiCheckCircle className="tc-acceptance-icon" />
            <span>By using our services, you agree to these Terms and Conditions</span>
          </div>

          {/* Contact */}
          <div className="tc-contact">
            <div className="tc-contact-item">
              <FiMail className="tc-contact-icon" />
              <a href="mailto:admin@armexsolution.com">admin@armexsolution.com</a>
            </div>
            <div className="tc-contact-divider"></div>
            <div className="tc-contact-item">
              <FiShield className="tc-contact-icon" />
              <span>Chennai, India</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default TermsConditions;