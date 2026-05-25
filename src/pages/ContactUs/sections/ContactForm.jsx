import React, { useState } from "react";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiUser,
  FiSend,
  FiMessageSquare,
  FiCheckCircle
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./ContactForm.css";

import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: "Corporate Office",
    line1: "Chennai, Tamil Nadu, India - 600001"
  },
  {
    icon: <FiMail />,
    title: "Mail Us",
    line1: "admin@armexsolution.com",
    link: "mailto:admin@armexsolution.com"
  },
  {
    icon: <FiPhone />,
    title: "Call Us",
    line1: "+91 93427 61826",
    link: "tel:+919342761826"
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    line1: "Chat on WhatsApp",
    link: "https://wa.me/919342761826"
  },
  {
    icon: <FiClock />,
    title: "Support",
    line1: "24/7 Assistance"
  }
];

const services = [
  "BIM-Driven 3D Rebar Modelling",
  "Precision 2D Reinforcement Detailing & Shop Drawings",
  "Optimized Bar Bending Schedules (BBS)",
  "Model-Based Rebar Estimation & Quantity Intelligence",
  "Integrated GA Drawings & Structural Coordination",
  "Site Support & Reinforcement Reconciliation"
];

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);

  const [status, setStatus] = useState({
    submitted: false,
    message: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          submitted: true,
          message: "Thank you! We'll contact you within 2 hours."
        });

        setTimeout(() => {
          setStatus({
            submitted: false,
            message: ""
          });

          setFormData(initialForm);
        }, 3000);
      })
      .catch(() => {
        setStatus({
          submitted: true,
          message: "Failed to send message. Please try again."
        });

        setTimeout(() => {
          setStatus({
            submitted: false,
            message: ""
          });
        }, 3000);
      });
  };

  return (
    <section
      className="cf-section"
      id="contactF"
      aria-label="Contact form section"
    >
      <div className="cf-bg-gradient" aria-hidden="true"></div>

      <div className="cf-shape cf-shape-1" aria-hidden="true"></div>
      <div className="cf-shape cf-shape-2" aria-hidden="true"></div>
      <div className="cf-shape cf-shape-3" aria-hidden="true"></div>

      <div className="cf-container">
        {/* Header */}
        <div className="cf-header">
          <span className="cf-subtitle">CONTACT US</span>

          <h2 className="cf-title">
            Get In <span>Touch</span>
          </h2>

          <p className="cf-desc">
            Have a question or ready to start your project? Reach out to us and
            our team will assist you quickly.
          </p>
        </div>

        <div className="cf-grid">
          {/* Contact Info */}
          <div className="cf-info">
            <h3 className="cf-info-title">Contact Information</h3>

            <div className="cf-info-grid">
              {contactInfo.map((item, i) => (
                <div key={i} className="cf-info-card">
                  <div className="cf-info-icon">
                    {item.icon}
                  </div>

                  <div className="cf-info-content">
                    <h4>{item.title}</h4>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="cf-info-link"
                        target={
                          item.link.includes("wa.me")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.link.includes("wa.me")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.line1}
                      </a>
                    ) : (
                      <p className="cf-info-text">{item.line1}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="cf-form-wrapper">
            <div className="cf-form-card">
              <p className="cf-form-title">
                Our Experts Can Help You Get the Best Out of Your Business
              </p>

              {status.submitted ? (
                <div className="cf-success">
                  <FiCheckCircle
                    className="cf-success-icon"
                    aria-hidden="true"
                  />

                  <p>{status.message}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="cf-form"
                  noValidate
                >
                  {[
                    {
                      label: "Full Name *",
                      name: "name",
                      icon: <FiUser />,
                      type: "text",
                      required: true,
                      placeholder: "Full Name"
                    },
                    {
                      label: "Email Address *",
                      name: "email",
                      icon: <FiMail />,
                      type: "email",
                      required: true,
                      placeholder: "abc@example.com"
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      icon: <FiPhone />,
                      type: "tel",
                      placeholder: "+91 98400 00000"
                    }
                  ].map((field, i) => (
                    <div key={i} className="cf-field">
                      <label htmlFor={field.name}>{field.label}</label>

                      <div className="cf-field-input">
                        {field.icon}

                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="cf-field">
                    <label htmlFor="service">
                      Service Interested In
                    </label>

                    <div className="cf-field-input">
                      <FiMessageSquare className="cf-field-icon" />

                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>

                        {services.map((s, i) => (
                          <option key={i} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="cf-field cf-field-full">
                    <label htmlFor="message">
                      Your Message *
                    </label>

                    <div className="cf-field-input cf-textarea">
                      <FiMessageSquare className="cf-field-icon" />

                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* UPDATED BUTTON */}
                  <button type="submit" className="cf-submit-btn">
                    <span>Send Message</span>

                    <span className="cf-submit-arrow">→</span>
                  </button>

                  <p className="cf-privacy">
                    By submitting, you agree to our privacy policy.
                    We'll respond within 2 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;