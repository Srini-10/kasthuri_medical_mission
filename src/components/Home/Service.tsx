import React from "react";
import { Button } from "@nextui-org/react";
import Icon1 from "../../assets/Medicine-Chest.svg";
import Icon2 from "../../assets/Microscope.svg";
import Icon3 from "../../assets/Stethoscope.svg";
import "./css/Services.css";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <div className="Service_Main text-[30px] font-bold pl-32 pt-10">
        <div className="pt-3">
          <p className="Service_Title text-[70px] text-black font-bold ml-[-4px] leading-[70px]">
            Our Featured
            <br />
            <p className="text-emerald-400">Services</p>
          </p>
        </div>
        <div className="Container_Service grid grid-cols-2 justify-between w-[90%] gap-[0px] mt-1">
          <div className="Containers mt-3 hover:bg-emerald-50 pl-4 pt-3 pb-3 pr-2 rounded-lg">
            <span className="flex">
              <img
                src={Icon1}
                alt=""
                className="w-[60px] h-[60px] rounded-xl"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h1 className="mt-3 ml-5">Comprehensive Medical Courses</h1>
            </span>
            <p className="text-[15px] w-[100%] mt-3 font-normal text-gray-700">
              Our courses cover a wide range of medical subjects, from basic
              sciences to advanced clinical skills. Designed by experienced
              educators and medical professionals, our curriculum ensures a deep
              understanding of medical concepts and practices.
            </p>
            <Link to="/Courses">
              <Button className="bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="Containers mt-3 hover:bg-emerald-50 pl-4 pt-3 pb-3 pr-2 rounded-lg">
            <span className="flex">
              <img
                src={Icon2}
                alt=""
                className="w-[60px] h-[60px] rounded-xl"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h1 className="PT_Service mt-3 ml-5"> Personalized Tutoring </h1>
            </span>
            <p className="text-[15px] w-[100%] mt-3 font-normal text-gray-700">
              Receive one-on-one tutoring from experienced medical
              professionals. Our personalized approach helps students grasp
              complex topics and excel in their studies.
            </p>
            <Link to="/Courses">
              <Button className="bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="Containers mt-3 hover:bg-emerald-50 pl-4 pt-3 pb-3 pr-2 rounded-lg">
            <span className="flex">
              <img
                src={Icon3}
                alt=""
                className="w-[60px] h-[60px] rounded-xl"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h1 className="PT_Service mt-3 ml-5">
                {" "}
                Clinical Skills Training{" "}
              </h1>
            </span>
            <p className="text-[15px] w-[100%] mt-3 font-normal text-gray-700">
              Gain hands-on experience with our clinical skills training
              sessions. Learn essential techniques and procedures in a simulated
              environment to build confidence and proficiency.
            </p>
            <Link to="/Courses">
              <Button className="bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
