import React from "react";
import { FiEye, FiTarget } from "react-icons/fi";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vm-section" aria-label="Vision and mission of the company">
      <div className="vm-container">
        {/* Compact header */}
        <div className="vm-header">
          <div className="vm-header-line" aria-hidden="true"></div>
          <span className="vm-header-text">vision / mission</span>
          <div className="vm-header-line" aria-hidden="true"></div>
        </div>

        {/* Horizontal split layout */}
        <div className="vm-split">
          {/* Vision side */}
          <div className="vm-side vision-side">
            <div className="vm-side-icon" aria-hidden="true">
              <FiEye />
            </div>
            <div className="vm-side-label">01</div>
            <h3 className="vm-side-heading">
              Redefining the Future of <br />Reinforcement Engineering
            </h3>
            <p className="vm-side-text">
              Our vision is to transform the future of construction by delivering innovative
              reinforcement engineering solutions that enhance structural strength, efficiency,
              and reliability. We strive to become a globally trusted partner in advancing
              smarter and more buildable reinforcement systems.
            </p>
            <div className="vm-side-marker" aria-hidden="true"></div>
          </div>

          {/* Vertical divider with diamond */}
          <div className="vm-divider-vertical" aria-hidden="true">
            <div className="vm-diamond"></div>
          </div>

          {/* Mission side */}
          <div className="vm-side mission-side">
            <div className="vm-side-icon" aria-hidden="true">
              <FiTarget />
            </div>
            <div className="vm-side-label">02</div>
            <h3 className="vm-side-heading">
              Empowering Construction with <br />Smarter Reinforcement
            </h3>
            <p className="vm-side-text">
              Our mission is to support the construction industry with smarter, buildable,
              and efficient reinforcement engineering solutions. By combining engineering
              expertise, advanced technology, and industry experience, we help contractors
              and engineers deliver stronger, safer, and more reliable structures.
            </p>
            <div className="vm-side-marker" aria-hidden="true"></div>
          </div>
        </div>

        {/* Compact bottom accent */}
        <div className="vm-bottom" aria-hidden="true">
          <span className="vm-bottom-dot"></span>
          <span className="vm-bottom-dot"></span>
          <span className="vm-bottom-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;