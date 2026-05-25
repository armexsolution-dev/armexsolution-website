import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HomeIntro.css';

import HomeIntro1 from '../../../assets/images/Home/HomeIntro1.png';
import HomeIntro2 from '../../../assets/images/Home/HomeIntro2.jpeg';
import HomeIntro3 from '../../../assets/images/Home/HomeIntro3.png';

const HomeIntro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToServices = () => {
    document.getElementById('HomeServices')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="homeIntro" id="home-intro" ref={ref} aria-label="Company introduction">
      <div className="homeIntro-whiteBg" aria-hidden="true" />

      <div className="homeIntro-container">
        {/* Left Column - Image Collage */}
        <motion.div
          className="homeIntro-imageCollage"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="homeIntro-collageGrid">
            <motion.div
              className="homeIntro-collageItem homeIntro-collageMain"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={HomeIntro1} alt="Rebar construction site" loading="lazy" />
              <div className="homeIntro-imageOverlay" />
            </motion.div>

            <motion.div
              className="homeIntro-collageItem homeIntro-collageSmall"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={HomeIntro2} alt="Steel reinforcement bars" loading="lazy" />
            </motion.div>

            <motion.div
              className="homeIntro-collageItem homeIntro-collageSmall"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={HomeIntro3} alt="Construction worker with rebar" loading="lazy" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          className="homeIntro-content"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="homeIntro-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Precision in <span>Every Bar</span>
          </motion.h2>

          <motion.p
            className="homeIntro-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            ARMEX SOLUTIONS delivers accurate, code-compliant rebar detailing
            for global construction projects. Advanced BIM workflows ensure
            clash-free coordination every time.
          </motion.p>

          {/* Standards */}
          <motion.div
            className="homeIntro-standards"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span
              className="homeIntro-standard"
              style={{ borderColor: '#C9A22D', color: '#C9A22D' }}
            >
              British Standards (BS 8666)
            </span>

            <span
              className="homeIntro-standard"
              style={{ borderColor: '#243F88', color: '#243F88' }}
            >
              American Standards (ACI 318)
            </span>

            <span
              className="homeIntro-standard"
              style={{ borderColor: '#C9A22D', color: '#C9A22D' }}
            >
              European Standards (Eurocode 2)
            </span>

            <span
              className="homeIntro-standard"
              style={{ borderColor: '#243F88', color: '#243F88' }}
            >
              Australian Standards (AS 3600)
            </span>

            <span
              className="homeIntro-standard"
              style={{ borderColor: '#C9A22D', color: '#C9A22D' }}
            >
              Indian Standards (IS 456/ SP 34/ IS 2502)
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="button-row">
              <button
                className="btn-primary"
                onClick={scrollToServices}
                aria-label="Explore more about services"
              >
                Explore Services
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeIntro;