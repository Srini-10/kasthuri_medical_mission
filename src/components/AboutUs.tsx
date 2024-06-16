import React from "react";
import About from "./AboutUs/AboutUs.tsx";
import Services from "./AboutUs/Services.tsx";
import Values from "./AboutUs/Values.tsx";
import News from "./AboutUs/News.tsx";
import Side from "./AboutUs/Side.tsx";
import Testimonial from "./AboutUs/Testimonial.tsx";
import Footer from "./Footer.tsx";
import Content from "./AboutUs/Content.tsx";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="flex gap-0 mt-[60px]">
          <span className="Main_About w-[92%]">
            <About />
          </span>
          <span className="Side_About w-[24%] gap-0 ml-[-210px] pl-0 border-gray-100 border-l-1 border-b-1">
            <Side />
          </span>
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
