import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HomeHero.css';

import HomeHero1 from '../../../assets/images/Home/HomeHero1.png';
import HomeHero2 from '../../../assets/images/Home/HomeHero2.png';
import HomeHero3 from '../../../assets/images/Home/HomeHero3.jpeg';
import HomeHero4 from '../../../assets/images/Home/HomeHero4.png';
import HomeHero5 from '../../../assets/images/Home/HomeHero5.png';
import HomeHero6 from '../../../assets/images/Home/HomeHero6.png';

const heroSlides = [
  {
    id: 1,
    image: HomeHero1,
    title: 'BIM DRIVEN',
    title2: '3D REBAR MODELLING',
    description: 'Intelligent BIM-based reinforcement modelling delivering precise spatial coordination, constructability validation, and clash-free reinforcement layouts.'
  },
  {
    id: 2,
    image: HomeHero2,
    title: 'PRECISION 2D REINFORCEMENT DETAILING &',
    title2: 'SHOP DRAWINGS',
    description: 'High-accuracy reinforcement detailing and fabrication-ready shop drawings ensuring clarity, compliance, and seamless on-site execution.'
  },
  {
    id: 3,
    image: HomeHero3,
    title: 'OPTIMIZED',
    title2: 'BAR BENDING SCHEDULES (BBS)',
    description: 'Data-driven bar bending schedules generated from detailed models to maximize fabrication efficiency and minimize material waste.'
  },
  {
    id: 4,
    image: HomeHero4,
    title: 'MODEL-BASED',
    title2: 'REBAR ESTIMATION & QUANTITY INTELLIGENCE',
    description: 'Advanced reinforcement quantity analysis derived from BIM models for reliable cost planning, procurement strategy, and material control.'
  },
  {
    id: 5,
    image: HomeHero5,
    title: 'INTEGRATED GA DRAWINGS &',
    title2: 'STRUCTURAL COORDINATION',
    description: 'Comprehensive general arrangement drawings ensuring structural alignment, design clarity, and multidisciplinary coordination.'
  },
  {
    id: 6,
    image: HomeHero6,
    title: 'SITE SUPPORT &',
    title2: 'REINFORCEMENT RECONCILIATION',
    description: 'End-to-end technical support including site coordination, reinforcement validation, and quantity reconciliation for project accuracy.'
  }
];

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const scrollToIntro = () => {
    const section = document.getElementById('home-intro');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home-hero" aria-label="Homepage hero slider">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={setSwiper}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* SEO hidden image */}
              <img src={slide.image} alt={slide.title} loading="lazy" style={{ display: 'none' }} />

              <div className="overlay-gradient"></div>
              <div className="overlay-bottom"></div>

              <div className="hero-content">
                <div className="title-block">
                  <h1 className="title-line1">{slide.title}</h1>
                  <p className="title-line2">{slide.title2}</p>
                </div>

                <p className="description">{slide.description}</p>

                <div className="HHbutton-row">
                  <button
                    className="HHbtn-primary"
                    onClick={scrollToIntro}
                    aria-label="Explore more about services"
                  >
                    Explore More
                    <span className="HHbtn-arrow">→</span>
                  </button>
                </div>
              </div>

              <div className="slide-counter">
                <span className="counter-current">0{activeIndex + 1}</span>
                <span className="counter-total">/0{heroSlides.length}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-nav">
        <button className="nav-btn prev-btn" onClick={() => swiper?.slidePrev()}>
          ← PREV
        </button>
        <span className="nav-divider">|</span>
        <button className="nav-btn next-btn" onClick={() => swiper?.slideNext()}>
          NEXT →
        </button>
      </div>
    </section>
  );
};

export default HomeHero;