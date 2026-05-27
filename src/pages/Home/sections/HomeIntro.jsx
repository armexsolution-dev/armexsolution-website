import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './HomeIntro.css';

import HomeIntro1 from '../../../assets/images/Home/HomeIntro1.png';
import HomeIntro2 from '../../../assets/images/Home/HomeIntro2.jpeg';
import HomeIntro3 from '../../../assets/images/Home/HomeIntro3.png';

const standards = [
  {
    text: 'British Standards (BS 8666)',
    color: '#C9A22D',
  },
  {
    text: 'American Standards (ACI 318)',
    color: '#243F88',
  },
  {
    text: 'European Standards (Eurocode 2)',
    color: '#C9A22D',
  },
  {
    text: 'Australian Standards (AS 3600)',
    color: '#243F88',
  },
  {
    text: 'Indian Standards (IS 456/ SP 34/ IS 2502)',
    color: '#C9A22D',
  },
];

const collageImages = [
  {
    src: HomeIntro1,
    alt: 'Rebar construction site',
    className: 'homeIntro-collageMain',
  },
  {
    src: HomeIntro2,
    alt: 'Steel reinforcement bars',
    className: 'homeIntro-collageSmall',
  },
  {
    src: HomeIntro3,
    alt: 'Construction worker with rebar',
    className: 'homeIntro-collageSmall',
  },
];

const HomeIntro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const goToServices = () => {
    window.location.href = '/services';
  };

  return (
    <section
      className="homeIntro"
      id="home-intro"
      ref={ref}
      aria-label="Company introduction"
    >
      <div
        className="homeIntro-whiteBg"
        aria-hidden="true"
      />

      <div className="homeIntro-container">
        {/* LEFT SIDE */}
        <motion.div
          className="homeIntro-imageCollage"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="homeIntro-collageGrid">
            {collageImages.map((image, index) => (
              <motion.div
                key={index}
                className={`homeIntro-collageItem ${image.className}`}
                whileHover={{
                  scale:
                    image.className === 'homeIntro-collageMain'
                      ? 1.02
                      : 1.05,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />

                {image.className ===
                  'homeIntro-collageMain' && (
                  <div className="homeIntro-imageOverlay" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
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
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            Precision in <span>Every Bar</span>
          </motion.h2>

          <motion.p
            className="homeIntro-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            ARMEX SOLUTIONS delivers accurate,
            code-compliant rebar detailing for
            global construction projects.
            Advanced BIM workflows ensure
            clash-free coordination every time.
          </motion.p>

          {/* STANDARDS */}
          <motion.div
            className="homeIntro-standards"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
          >
            {standards.map((item, index) => (
              <span
                key={index}
                className="homeIntro-standard"
                style={{
                  borderColor: item.color,
                  color: item.color,
                }}
              >
                {item.text}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
          >
            <div className="HIbutton-row">
              <button
                className="HIbtn-primary"
                onClick={goToServices}
                aria-label="Explore more about services"
              >
                Explore Services

                <span
                  className="HIbtn-arrow"
                  aria-hidden="true"
                >
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