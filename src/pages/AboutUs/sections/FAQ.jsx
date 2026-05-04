import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiMail,
  FiPhone
} from "react-icons/fi";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What information is required to start a project?",
      answer: "To begin a rebar detailing project, we typically require the following information:\n\nConcrete GA (General Arrangement) drawings in PDF or CAD format\nProject program or schedule, including the required review timeline\nRebar design notes, including lap lengths, concrete cover, and special detailing requirements\nProject standards and applicable codes\nProject title sheet in AutoCAD .DWG format\n\nProviding these documents helps us ensure accurate reinforcement detailing and smooth project coordination."
    },
    {
      question: "What types of structures do you work on?",
      answer: "We provide detailing for a wide range of structures including:\n\nResidential buildings\nCommercial buildings\nBridges and infrastructure\nWind turbine foundations\nIndustrial plants\nStadiums and large structures"
    },
    {
      question: "What software do you use for rebar detailing?",
      answer: "Our team works with industry-leading software including:\n\nRebar CAD and CADS RC\nAutodesk Revit\nAutoCAD\nNavisworks for clash detection\n\nThese tools ensure accurate and buildable reinforcement models."
    },
    {
      question: "How quickly can you deliver rebar shop drawings?",
      answer: "Delivery time depends on the project size and complexity. Smaller projects may take a few days, while large infrastructure projects may take longer. We always work closely with clients to meet project deadlines."
    },
    {
      question: "What deliverables do you provide?",
      answer: "Our typical deliverables include:\n\nRebar shop drawings\nBar bending schedules (BBS)\n3D rebar models\nFabrication drawings\nIFC / BIM models"
    },
    {
      question: "Which international standards do you follow?",
      answer: "We provide rebar detailing services based on international standards including:\n\nACI / CRSI (USA)\nBS 8666 (UK)\nEurocode 2 (Europe)\nAS 3600 (Australia)\nIS 456 / SP34 (India)\n\nWe can adapt our detailing to match the project specifications and local codes."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section className="faq-section" aria-label="Frequently asked questions">
      <div className="faq-container-fluid">
        {/* Header */}
        <div className="faq-header">
          <span className="faq-subtitle">HAVE QUESTIONS?</span>
          <h2 className="faq-title">
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className="faq-grid-2col">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${openIndex === index ? 'faq-open' : ''}`}
                onClick={() => toggleFAQ(index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="faq-question-left">
                  <FiHelpCircle className="faq-question-icon" aria-hidden="true" />
                  <h3>{faq.question}</h3>
                </div>
                <span className="faq-toggle" aria-hidden="true">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>

              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Contact */}
        <div className="faq-compact-contact">
          <div className="faq-compact-content">
            <FiHelpCircle className="faq-compact-icon" aria-hidden="true" />
            <span>Still have questions?</span>
            <a href="mailto:admin@armexsolution.com" className="faq-compact-link" aria-label="Email us">
              <FiMail aria-hidden="true" /> admin@armexsolution.com
            </a>
            <a href="tel:+919342761826" className="faq-compact-link" aria-label="Call us">
              <FiPhone aria-hidden="true" /> +91 93427 61826
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;