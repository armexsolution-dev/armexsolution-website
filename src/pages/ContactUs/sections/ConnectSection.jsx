import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import "./ConnectSection.css";
import ContactCon1 from '../../../assets/images/Contact/ContactConnection1.png';
import ContactCon2 from '../../../assets/images/Contact/ContactConnection2.png';
import ContactCon3 from '../../../assets/images/Contact/ContactConnection3.png';

const ConnectSection = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cn-image-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("contactF");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    {
      url: ContactCon1,
      alt: "Team collaboration at work",
      delay: "0s",
      rotate: "-3deg",
      top: "0%",
      left: "0%"
    },
    {
      url: ContactCon2,
      alt: "Engineer reviewing rebar drawings",
      delay: "0.15s",
      rotate: "2deg",
      top: "30%",
      left: "45%"
    },
    {
      url: ContactCon3,
      alt: "Construction site planning",
      delay: "0.3s",
      rotate: "-1deg",
      top: "60%",
      left: "15%"
    }
  ];

  return (
    <section className="cn-section" aria-label="Connect with us – start your project">
      <div className="cn-bg-pattern" aria-hidden="true"></div>

      <div className="cn-container">
        {/* LEFT: Image collage */}
        <div className="cn-collage">
          {images.map((img, index) => (
            <div
              key={index}
              className="cn-collage-item"
              ref={(el) => (imageRefs.current[index] = el)}
              style={{
                animationDelay: img.delay,
                top: img.top,
                left: img.left,
                transform: `rotate(${img.rotate})`
              }}
            >
              <img src={img.url} alt={img.alt} loading="lazy" />
              <div className="cn-image-glow" aria-hidden="true"></div>
            </div>
          ))}
          <div className="cn-accent-dot" aria-hidden="true"></div>
        </div>

        {/* RIGHT: Content */}
        <div className="cn-content">
          <div className="cn-content-wrapper">
            <span className="cn-subtitle">CONNECT WITH US</span>
            <h2 className="cn-title">
              Ready to start <span>your project?</span>
            </h2>
            <p className="cn-desc">
              Share your requirements with us and get expert assistance within 2 hours
            </p>

            <button className="cn-hint" onClick={handleScroll} aria-label="Fill the contact form">
              <span>Fill the form below</span>
              <FiArrowRight className="cn-hint-icon" aria-hidden="true" />
              <div className="cn-hint-glow" aria-hidden="true"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className="cn-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="cn-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ConnectSection;