import React, { useState, useEffect } from 'react';
import {
  FiTarget,
  FiGlobe,
  FiUsers,
  FiCpu,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiShield,
  FiZap,
} from 'react-icons/fi';
import './WhatsApart.css';

const features = [
  {
    id: '01',
    title: 'Precision & Constructability',
    desc: 'We deliver accurate and practical reinforcement drawings for smooth construction.',
    icon: <FiTarget />,
    longDesc:
      'We deliver reinforcement drawings that are not only technically accurate but also practical and fully constructible on site, ensuring smooth fabrication and installation.',
  },
  {
    id: '02',
    title: 'Global Standards Compliance',
    desc: 'Our detailing services comply with BS, ACI, Eurocode, AS, IS, and GCC requirements.',
    icon: <FiGlobe />,
    longDesc:
      'Our detailing services comply with international standards including BS, ACI, Eurocode, AS, IS, and GCC authority requirements, ensuring seamless integration with global project specifications.',
  },
  {
    id: '03',
    title: 'Experienced Professionals',
    desc: 'Our team brings deep expertise in structural engineering across projects worldwide.',
    icon: <FiUsers />,
    longDesc:
      'Our team brings strong expertise in structural engineering and reinforcement detailing, with extensive experience supporting residential, commercial, industrial, and infrastructure projects.',
  },
  {
    id: '04',
    title: 'BIM-Driven Workflow',
    desc: 'We develop coordinated, clash-free reinforcement models.',
    icon: <FiCpu />,
    longDesc:
      'Using skilled technical expertise and industry-leading software including AutoCAD, CADS RC/RebarCAD, Revit, and Navisworks, we deliver coordinated, clash-free reinforcement detailing solutions that support efficient and accurate project delivery.',
  },
  {
    id: '05',
    title: 'Quality-Controlled Deliverables',
    desc: 'Every drawing undergoes rigorous quality checks.',
    icon: <FiCheckCircle />,
    longDesc:
      'Every drawing and bar bending schedule undergoes internal quality checks to ensure accuracy, completeness, and compliance before delivery.',
  },
  {
    id: '06',
    title: 'Timely Delivery',
    desc: 'We deliver projects on schedule without compromise.',
    icon: <FiClock />,
    longDesc:
      'We understand the importance of project timelines and are committed to delivering detailing services on schedule without compromising quality.',
  },
];

const orbitAngles = [0, 60, 120, 180, 240, 300];

function polarToXY(angleDeg, r) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + r * Math.cos(rad),
    y: 50 + r * Math.sin(rad),
  };
}

export default function WhatsApart() {
  const [active, setActive] = useState(0);
  const [anim, setAnim] = useState(false);
  const R = 38;

  const handleClick = (i) => {
    if (i === active) return;
    setAnim(true);
    setActive(i);
    setTimeout(() => setAnim(false), 500);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnim(true);
      setActive((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      setTimeout(() => setAnim(false), 250);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const item = features[active];

  return (
    <section className="wsu-section" aria-label="What sets us apart – our advantages">
      <div className="wsu-header">
        <span className="wsu-eyebrow">OUR ADVANTAGE</span>
        <h2 className="wsu-title">
          What Sets <span>Us Apart</span>
        </h2>
      </div>

      <div className="wsu-body">
        {/* Orbit SVG */}
        <div className="wsu-orbit-wrap">
          <svg viewBox="0 0 100 100" className="wsu-orbit-svg" aria-label="Interactive feature navigator">
            <circle cx="50" cy="50" r={R} className="wsu-ring" />

            {features.map((f, i) => {
              const pos = polarToXY(orbitAngles[i], R);
              const activeP = active === i;

              return (
                <g
                  key={i}
                  onClick={() => handleClick(i)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${f.title}`}
                  aria-current={activeP ? 'step' : undefined}
                >
                  <line x1="50" y1="50" x2={pos.x} y2={pos.y} className={activeP ? 'wsu-line-active' : 'wsu-line'} />
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={activeP ? 5.5 : 4.5}
                    className={activeP ? 'wsu-dot-active' : 'wsu-dot'}
                  />
                  <text x={pos.x} y={pos.y} className="wsu-num">
                    {f.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Content Panel */}
        <div className={`wsu-panel ${anim ? 'fade-out' : 'fade-in'}`}>
          <div className="wsu-panel-header">
            <div className="wsu-icon" aria-hidden="true">
              {item.icon}
            </div>
            <span className="wsu-badge">{item.id}</span>
          </div>

          <h3>{item.title}</h3>
          <p className="wsu-desc">{item.desc}</p>

          <div className="wsu-expand">
            <p>{item.longDesc}</p>
          </div>

          <div className="wsu-tags">
            <span>
              <FiTrendingUp aria-hidden="true" /> Industry
            </span>
            <span>
              <FiShield aria-hidden="true" /> Certified
            </span>
            <span>
              <FiZap aria-hidden="true" /> Efficient
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}