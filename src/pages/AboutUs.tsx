import React from "react";
import About from "../components/AboutUs/AboutUs.tsx";
import Services from "../components/AboutUs/Services.tsx";
import Values from "../components/AboutUs/Values.tsx";
import Testimonial from "../components/AboutUs/Testimonial.tsx";
import Footer from "../components/Footer.tsx";
import Content from "../components/AboutUs/Content.tsx";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="flex gap-0 mt-[60px]">
          <About />
        </div>
        <div>
          <Services />
          <Values />
          <Content />
          <Testimonial />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
