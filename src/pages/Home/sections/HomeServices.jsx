import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './HomeServices.css';

import HomeMRS1 from '../../../assets/images/Home/HomeMRS1.png';
import HomeMRS2 from '../../../assets/images/Home/HomeMRS2.png';
import HomeMRS3 from '../../../assets/images/Home/HomeMRS3.png';
import HomeMRS4 from '../../../assets/images/Home/HomeMRS4.png';

const services = [
  {
    title: '2D SHOP DRAWINGS',
    subtitle: 'Constructible RO drawings',
    image: HomeMRS1,
    alt: '2D shop drawings for reinforcement detailing',
  },
  {
    title: '3D BIM MODELLING',
    subtitle: '3D reinforcement modeling',
    image: HomeMRS2,
    alt: '3D BIM modelling for rebar placement',
  },
  {
    title: 'BAR BENDING SCHEDULE',
    subtitle: 'Fabrication ready BBS',
    image: HomeMRS3,
    alt: 'Bar bending schedule for fabrication',
  },
  {
    title: 'REBAR ESTIMATION',
    subtitle: 'Accurate quantity take-offs',
    image: HomeMRS4,
    alt: 'Rebar estimation and quantity take-offs',
  },
];

// Service Card Component
const ServiceCard = ({ data, className = '' }) => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate('/services');
  };

  return (
    <motion.div
      className={`serviceCard ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img src={data.image} alt={data.alt} loading="lazy" />
      <div className="serviceOverlay">
        <div>
          <h3>{data.title}</h3>
          <p>{data.subtitle}</p>
        </div>
        <button
          className="serviceBtn"
          onClick={goToServices}
          aria-label={`View ${data.title} services`}
        >
          <FiArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
};

const HomeServices = () => {
  return (
    <section className="homeServices" id="HomeServices" aria-label="Our most requested services">
      <div className="homeServices-container">
        <div className="homeServices-header">
          <span>POPULAR</span>
          <h2>Our Most Requested Services</h2>
        </div>

        <div className="homeServices-layout">
          {/* Large Card */}
          <ServiceCard data={services[0]} className="largeCard" />

          {/* Right Grid */}
          <div className="smallGrid">
            <ServiceCard data={services[1]} />
            <ServiceCard data={services[2]} />
            <ServiceCard data={services[3]} className="wideCard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;