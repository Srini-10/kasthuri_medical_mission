import React from "react";
import { Button } from "@nextui-org/react";
import Design from "../../assets/Clinic-Building.svg";
import HeartBeat from "../../assets/Heart-Beat.svg";
import Tick from "../../assets/Tick.svg";
import "./css/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About_Main bg-emerald-100 text-[30px] font-bold pl-32 pt-7">
      <div className="About_Main_Title pt-0">
        <div id="getStarted" className="Started absolute mt-[-68px]"></div>
        <p className="About_Title text-[30px] text-emerald-400 font-bold leading-[70px]">
          About Us
        </p>
      </div>
      <div className="Flex_About gap-[80px] mt-[-10px] flex">
        <div>
          <p className="Sub_About text-[45px] leading-[110%] mt-1 font-bold text-black">
            The Kasthuri Medical Mission
            <span className="Sub_About_Span text-[19px] text-gray-700 font-normal mt-2 leading-[140%] block">
              Welcome to Kasthuri Medical Mission, A Public Health mission to
              promote Medical education, Health science and to Educate in
              regular education system for medical students.where we are
              dedicated to transforming medical education and empowering
              aspiring medical professionals. Join us in our mission to learn
              high-quality medical education which is accessible to all.
            </span>
          </p>
          <div className="Points gap-3 grid grid-cols-2 ml-[-3px] mb-2 mt-[15px]">
            <span className="flex py-1 gap-3">
              <img
                className="w-[50px] h-auto"
                src={Tick}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[15px] font-bold">
                  Expert Faculty and Mentorship
                </h1>
              </div>
            </span>
            <span className="Point2 flex py-1 ml-[-45px] gap-3">
              <img
                className="w-[50px] h-auto"
                src={Tick}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[15px] font-bold">
                  Advanced Curriculum and Facilities
                </h1>
              </div>
            </span>
            <span className="flex py-1 gap-3">
              {" "}
              <img
                className="w-[50px] h-auto"
                src={Tick}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[15px] font-bold">
                  Clinical Training and Experience
                </h1>
              </div>
            </span>
          </div>
          <Link to="/About_Us">
            <Button className="About_Button bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-32 mb-[-50px] pt-2 pb-2 pl-5 pr-5">
              Know More
            </Button>
          </Link>
        </div>
        <div className="About_Img_Container absolute w-[0px] mt-[30px] ml-[900px]">
          <div className="w-[100px] absolute mt-[-50px] right-[-320px]">
            <img src={HeartBeat} alt="" />
          </div>
          <img
            src={Design}
            alt="Doctor"
            className="About_Img absolute"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
