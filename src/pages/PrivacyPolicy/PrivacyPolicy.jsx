import React, { useState, useEffect } from "react";
import SEO from "../../seo/SEO"; // ✅ SEO IMPORT

import { 
  FiShield, 
  FiLock, 
  FiEye, 
  FiDatabase, 
  FiInfo,
  FiUsers,
  FiMail,
  FiClock,
  FiCpu,
  FiArrowRight
} from "react-icons/fi";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  // ✅ Optional: scroll to top (safe add, no UI change)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    {
      id: 0,
      icon: <FiInfo />,
      title: "Introduction",
      content: "ARMEX Solutions India Private Limited ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our rebar detailing and BIM coordination services. We comply with applicable data protection laws and industry best practices to ensure your personal information is handled securely and responsibly."
    },
    {
      id: 1,
      icon: <FiDatabase />,
      title: "Information Collection",
      content: "We collect information you provide directly to us, such as your name, email address, phone number, company name, and project details when you fill out contact forms, request quotes, or communicate with us. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages. This helps us improve our services and user experience."
    },
    {
      id: 2,
      icon: <FiCpu />,
      title: "How We Use Information",
      content: "We use the information we collect to respond to your inquiries, provide our rebar detailing services, process your requests, send administrative information, improve our website, analyze trends, and comply with legal obligations. We do not sell your personal information to third parties. Your data is used only for legitimate business purposes directly related to the services you request from us."
    },
    {
      id: 3,
      icon: <FiShield />,
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted using SSL/TLS technology and stored on secure servers with restricted access. We conduct regular security audits and maintain compliance with industry standards to ensure your information remains protected at all times."
    },
    {
      id: 4,
      icon: <FiUsers />,
      title: "Information Sharing",
      content: "We do not share your personal information with third parties except when necessary to provide our services (such as with trusted service providers who assist us in operating our website and conducting our business), when required by law, or with your explicit consent. Any third-party service providers are contractually obligated to keep your information confidential and secure."
    },
    {
      id: 5,
      icon: <FiEye />,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at admin@armexsolutions.com. We will respond to your request within 48 hours. You also have the right to lodge a complaint with a data protection authority if you believe your rights have been violated."
    },
    {
      id: 6,
      icon: <FiMail />,
      title: "Communications",
      content: "We may send you service-related emails or project updates. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails. We will never spam you or share your email address with third parties for marketing purposes. Transactional emails related to your projects will continue even if you opt out of marketing."
    },
    {
      id: 7,
      icon: <FiClock />,
      title: "Policy Updates",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically for any changes. Continued use of our services after changes constitutes acceptance of the updated policy."
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
      <SEO page="privacyPolicy" />

      <section className="pp-section">
        <div className="pp-container">
          
          {/* Header */}
          <div className="pp-header">
            <span className="pp-subtitle">PRIVACY POLICY</span>
            <h1 className="pp-title">
              Your Privacy <span>Matters</span>
            </h1>
            <p className="pp-desc">
              Last updated: March 15, 2025
            </p>
          </div>

          {/* Main Content */}
          <div className="pp-main">
            
            {/* Tabs */}
            <div className="pp-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`pp-tab ${activeTab === index ? 'pp-tab-active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="pp-tab-icon">{tab.icon}</span>
                  <span className="pp-tab-title">{tab.title}</span>
                  <FiArrowRight className="pp-tab-arrow" />
                </button>
              ))}
            </div>

            {/* Content */}
            <div className={`pp-content ${contentVisible ? 'pp-content-visible' : ''}`}>
              <div className="pp-content-card">
                <div className="pp-content-header">
                  <span className="pp-content-badge">
                    SECTION {String(activeTab + 1).padStart(2, '0')}
                  </span>
                  <h2>{tabs[activeTab].title}</h2>
                </div>
                <div className="pp-content-body">
                  <p>{tabs[activeTab].content}</p>
                </div>
                <div className="pp-content-footer">
                  <div className="pp-progress">
                    <div 
                      className="pp-progress-bar" 
                      style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="pp-page-indicator">
                    {activeTab + 1} / {tabs.length}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact */}
          <div className="pp-contact">
            <div className="pp-contact-item">
              <FiMail className="pp-contact-icon" />
              <a href="mailto:admin@armexsolution.com">admin@armexsolution.com</a>
            </div>
            <div className="pp-contact-divider"></div>
            <div className="pp-contact-item">
              <FiShield className="pp-contact-icon" />
              <span>Chennai, India</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;