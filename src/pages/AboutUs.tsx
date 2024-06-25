import React from "react";
import About from "../components/AboutUs/AboutUs.tsx";
import Services from "../components/AboutUs/Services.tsx";
import Values from "../components/AboutUs/Values.tsx";
import News from "../components/AboutUs/News.tsx";
import Side from "../components/AboutUs/Side.tsx";
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
          {/* <News /> */}
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
