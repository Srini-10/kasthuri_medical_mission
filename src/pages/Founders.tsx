import React from "react";
import { Link } from "react-router-dom";
import FounderDetails from "../components/Founder/Founder_Details.tsx";
import AboutFounder from "../components/Founder/About_Founder.tsx";
import Footer from "../components/Footer.tsx";

const Founders = () => {
  return (
    <>
      <FounderDetails />
      <AboutFounder />
      <Footer />
    </>
  );
};

export default Founders;
