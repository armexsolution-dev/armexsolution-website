import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import SEO from "../../seo/SEO";

import ContactHero from "./sections/ContactHero.jsx";
import "./ContactUs.css";
import ConnectSection from "./sections/ConnectSection.jsx";
import ContactForm from "./sections/ContactForm.jsx";

const Contact = () => {
const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
}, [location]);
  return (
    <>
      <SEO page="contact" />

      <ContactHero />

      <ConnectSection />

      <ContactForm />
    </>
  );
};

export default Contact;