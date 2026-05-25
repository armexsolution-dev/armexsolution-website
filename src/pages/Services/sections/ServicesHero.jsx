import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./ServicesHero.css";

import SerHero1 from '../../../assets/images/Service/Service1.png'
import SerHero2 from '../../../assets/images/Service/Service2.png'
import SerHero3 from '../../../assets/images/Service/Service3.png'
import SerHero4 from '../../../assets/images/Service/Service4.png'
import SerHero5 from '../../../assets/images/Service/Service5.png'
import SerHero6 from '../../../assets/images/Service/Service6.png'

const services = [
  {
    title: "3D REBAR",
    subtitle: "MODELLING",
    description: "Intelligent 3D reinforcement models with clash detection and constructability validation for complex structures.",
    bg: SerHero1,
    card: SerHero1,
  },
  {
    title: "2D SHOP",
    subtitle: "DRAWINGS",
    description: "Fabrication-ready reinforcement shop drawings with clear bar placement, spacing, and bending details.",
    bg: SerHero2,
    card: SerHero2,
  },
  {
    title: "BAR BENDING",
    subtitle: "SCHEDULES",
    description: "Accurate bar bending schedules with bar marks, shape codes, cutting lengths, and quantities for fabrication.",
    bg: SerHero3,
    card: SerHero3,
  },
  {
    title: "REBAR",
    subtitle: "ESTIMATION",
    description: "Precise rebar quantity takeoffs and weight calculations for project planning and cost management.",
    bg: SerHero4,
    card: SerHero4,
  },
  {
    title: "GA",
    subtitle: "DRAWINGS",
    description: "Clear general arrangement drawings showing overall reinforcement layout and structural configuration.",
    bg: SerHero5,
    card: SerHero5,
  },
  {
    title: "SITE",
    subtitle: "SUPPORT",
    description: "Technical support for on-site implementation, drawing clarifications, and quantity reconciliation.",
    bg: SerHero6,
    card: SerHero6,
  },
];

export default function ServiceHero() {
  const [startIndex, setStartIndex] = useState(0);
  const [active, setActive] = useState(0);
  const cardsPerPage = 4;

  const nextSlide = () => {
    const newActive = (active + 1) % services.length;
    setActive(newActive);

    if (newActive >= startIndex + cardsPerPage) {
      setStartIndex(newActive - cardsPerPage + 1);
    }
  };

  const prevSlide = () => {
    const newActive = (active - 1 + services.length) % services.length;
    setActive(newActive);

    if (newActive < startIndex) {
      setStartIndex(newActive);
    }
  };

  const visibleServices = services.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const scrollToServices = () => {
    const section = document.getElementById('services-list');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="sh-hero">

      {/* ✅ FIXED BACKGROUND (consistent fade) */}
      <div
        key={active}
        className="sh-bg sh-visible"
        style={{ backgroundImage: `url(${services[active].bg})` }}
        aria-label={`Background for ${services[active].title} ${services[active].subtitle}`}
      ></div>

      <div className="sh-overlay"></div>

      <div className="sh-container">
        <div className="sh-content">
          <span className="sh-subtitle">
            {services[active].subtitle}
          </span>

          <h1 className="sh-title">
            {services[active].title}
          </h1>

          <p className="sh-desc">
            {services[active].description}
          </p>

          {/* BUTTON */}
          <div className="sh-button-row">
            <button
              className="sh-btn"
              onClick={scrollToServices}
              aria-label="Explore more about services"
            >
              Explore Services

              <span
                className="sh-btn-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>
        </div>

        <div
          className="sh-cards"
          aria-label="Service navigation cards"
        >
          {visibleServices.map((service, index) => {
            const actualIndex = startIndex + index;

            return (
              <div
                key={actualIndex}
                className={`sh-card ${
                  active === actualIndex ? "sh-active" : ""
                }`}
                onClick={() => setActive(actualIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === 'Enter' && setActive(actualIndex)
                }
                aria-label={`Select ${service.title} ${service.subtitle}`}
              >
                <img
                  src={service.card}
                  alt={`${service.title} ${service.subtitle}`}
                  className="sh-card-img"
                  loading="lazy"
                />

                <div className="sh-card-overlay"></div>

                <div className="sh-card-content">
                  <span className="sh-card-title">
                    {service.title}
                  </span>

                  <span className="sh-card-subtitle">
                    {service.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sh-nav-bottom">
          <button
            className="sh-nav-circle"
            onClick={prevSlide}
            aria-label="Previous service"
          >
            <FiChevronLeft />
          </button>

          <button
            className="sh-nav-circle"
            onClick={nextSlide}
            aria-label="Next service"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}