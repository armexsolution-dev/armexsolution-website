import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/Services/sections/ServiceDetail";
import ContactUs from "./pages/ContactUs/ContactUs";
import Career from "./pages/Career/Career";
import Sitemap from "./pages/Sitemap/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "services", element: <Services /> },
        { path: "services/:serviceId", element: <ServiceDetail /> },
        { path: "contact-us", element: <ContactUs /> },
        { path: "career", element: <Career /> },
        { path: "sitemap", element: <Sitemap /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-and-conditions", element: <TermsConditions /> },
      ],
    },
  ],
  {
    scrollRestoration: false,  // 👈 ADD THIS LINE
  }
);

export default router;