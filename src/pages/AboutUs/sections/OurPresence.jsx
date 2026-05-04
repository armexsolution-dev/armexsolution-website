import React from "react";
import "./OurPresence.css";
import AboutMap from '../../../assets/images/About/AboutMap.png';

const OurPresence = ({ mapImage }) => {
  const certifications = [
    { name: "UK" },
    { name: "USA" },
    { name: "UAE" },
    { name: "KSA" },
    { name: "INDIA" },
  ];

  const imageSrc = mapImage || AboutMap;

  return (
    <section className="op-section" aria-label="Global presence – serving international markets">
      <div className="op-container">
        {/* Header */}
        <div className="op-header">
          <span className="op-subtitle">GLOBAL PRESENCE</span>
          <h2 className="op-title">
            Serving <span>International Markets</span>
          </h2>
        </div>

        {/* Map Image with Effects */}
        <div className="op-map-real">
          <div className="op-map-image-wrapper">
            <img
              src={imageSrc}
              alt="Stylish world map highlighting global rebar detailing service locations"
              className="op-map-image"
              loading="lazy"
            />
          </div>
          <div className="op-scan-overlay" aria-hidden="true"></div>
        </div>

        {/* Certifications / Regions */}
        <div className="op-cert-simple">
          {certifications.map((cert, index) => (
            <div key={index} className="op-cert-badge">
              <span>{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;