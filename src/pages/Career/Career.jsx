import React, { useEffect } from 'react';
import SEO from '../../seo/SEO'; // ✅ SEO IMPORT

import CareerHero from './sections/CareerHero';
import UploadCV from './sections/UploadCV';
import './Career.css';
import AvailableOpenings from './sections/AvailableOpenings';

const Career = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      {/* ✅ SEO ADDED */}
      <SEO page="career" />

      <main className="career-page">
        <CareerHero />
        <AvailableOpenings/>
        <UploadCV />
      </main>
    </>
  );
};

export default Career;