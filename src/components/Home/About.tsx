import React from "react";
import { Button } from "@nextui-org/react";
import Design from "../../assets/Clinic-Building.svg";
import HeartBeat from "../../assets/Heart-Beat.svg";
import Tick from "../../assets/Tick.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./css/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About_Main1 bg-emerald-100 text-[30px] max-h-[480px] font-bold pl-0 pt-7">
      <div className="About_Main_Title pt-0">
        <div id="getStarted" className="Started absolute mt-[-68px]"></div>
      </div>
      <div className="Flex_About max-w-[880px] mx-auto gap-[20px] pl-0 mt-[-10px] flex">
        <div className="Flex_About_Div ml-[-150px] pl-0">
          <p className="About_Title text-[32px] mt-2 -mb-2 text-emerald-400 font-bold leading-[70px]">
            About Us
          </p>
          <p className="Sub_About text-[45px] leading-[110%] mt-1 font-bold text-black">
            The Kasthuri Medical Mission
            <span className="Sub_About_Span max-w-[880px] text-[15px] text-gray-700 font-normal mt-2 leading-[140%] block">
              Welcome to Kasthuri Medical Mission, A Public Health mission to
              promote Medical education, Health science and to Educate in
              regular education system for medical students.where we are
              dedicated to transforming medical education and empowering
              aspiring medical professionals. Join us in our mission to learn
              high-quality medical education which is accessible to all.
            </span>
          </p>
          <div className="Points gap-3 grid grid-cols-2 ml-[-3px] mb-2 mt-[25px]">
            <span className="flex py-0 gap-3">
              <LazyLoadImage
                src={Tick}
                alt=""
                className="Point2_Img w-[50px] h-auto"
                effect="blur"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[15px] font-bold">
                  Expert Faculty and Mentorship
                </h1>
              </div>
            </span>
            <span className="Point2 flex py-0 ml-[-80px] gap-3">
              <LazyLoadImage
                src={Tick}
                alt=""
                className="Point2_Img w-[50px] h-auto"
                effect="blur"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[15px] font-bold">
                  Advanced Curriculum and Facilities
                </h1>
              </div>
            </span>
            <span className="flex mt-[-8px] py-0 gap-3">
              <LazyLoadImage
                src={Tick}
                alt=""
                className="Point2_Img w-[50px] h-auto"
                effect="blur"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[15px] font-bold">
                  Clinical Training and Experience
                </h1>
              </div>
            </span>
            <span className="Point2 flex mt-[-8px] py-0 ml-[-80px] gap-3">
              <LazyLoadImage
                src={Tick}
                alt=""
                className="Point2_Img w-[50px] h-auto"
                effect="blur"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[15px] font-bold">
                  Opportunities for Research
                </h1>
              </div>
            </span>
          </div>
          <Link to="/About_Us">
            <Button className="About_Button bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-10 mb-[50px] pt-2 pb-2 pl-5 pr-5">
              Know More
            </Button>
          </Link>
        </div>
        <div className="About_Img_Container1 relative w-[0px] mt-[80px] ml-[-50px]">
          <div className="w-[100px] absolute mt-[-20px] ml-[240px]">
            <LazyLoadImage
              src={HeartBeat}
              alt=""
              effect="blur"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
          <LazyLoadImage
            src={Design}
            alt="Doctor"
            className="About_Img1 min-w-[380px] mt-3"
            effect="blur"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
