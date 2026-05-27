import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './HomeServices.css';

import { servicesData } from '../../../data/servicesData'

// Select only services you want in homepage
const homeServices = [
  servicesData.find(service => service.id === '2d-reinforcement-detailing'),
  servicesData.find(service => service.id === '3d-rebar-modelling'),
  servicesData.find(service => service.id === 'bar-bending-schedules'),
  servicesData.find(service => service.id === 'rebar-estimation'),
];

// Service Card Component
const ServiceCard = ({ data, className = '' }) => {
  const navigate = useNavigate();

  const goToServiceDetail = () => {
    navigate(`/services/${data.id}`);
  };

  return (
    <motion.div
      className={`serviceCard ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={data.cardImage}
        alt={data.title}
        loading="lazy"
      />

      <div className="serviceOverlay">
        <div>
          <h3>
            {data.title} <br /> {data.subtitle}
          </h3>

          <p>{data.tagline}</p>
        </div>

        <button
          className="serviceBtn"
          onClick={goToServiceDetail}
          aria-label={`View ${data.title}`}
        >
          <FiArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
};

const HomeServices = () => {
  return (
    <section
      className="homeServices"
      id="HomeServices"
      aria-label="Our most requested services"
    >
      <div className="homeServices-container">

        <div className="homeServices-header">
          <span>POPULAR</span>
          <h2>Our Most Requested Services</h2>
        </div>

        <div className="homeServices-layout">

          {/* Large Card */}
          <ServiceCard
            data={homeServices[0]}
            className="largeCard"
          />

          {/* Right Grid */}
          <div className="smallGrid">
            <ServiceCard data={homeServices[1]} />
            <ServiceCard data={homeServices[2]} />
            <ServiceCard
              data={homeServices[3]}
              className="wideCard"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeServices;