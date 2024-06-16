import React from "react";
import Tick from "../../assets/Tick.svg";
import Icon1 from "../../assets/Clinic-Building.svg";
import Icon2 from "../../assets/Doctor_Icon.svg";
import Icon3 from "../../assets/Inject.svg";
import "./css/Services.css";

const Services = () => {
  return (
    <>
      <div
        id="Services"
        className="Services_Main text-[30px] w-[100%] h-[400px] font-bold pt-10"
      >
        <div className="pt-3 w-[80%] mx-auto text-center">
          <p className="Services_Title text-[35px] text-black font-bold leading-[70px]">
            We aiming the Best{" "}
            <span className="text-emerald-400">Experience Services</span>{" "}
            Provided
          </p>
          <p className="Services_Sub text-[14px] px-24 mt-[-8px] mb-[10px] text-gray-600 font-normal w-[100%] leading-[20px]">
            Experience top-tier education and comprehensive support at our
            institution, tailored to empower you for a successful medical
            career.
          </p>
        </div>
        <div className="Services_Points gap-5 mx-auto justify-center mt-[27px] flex">
          <span className="py-2 gap-3 w-[350px]">
            <img
              className="w-[55px] h-auto"
              src={Icon1}
              alt=""
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div>
              <h1 className="text-[20px] mt-[3px] font-bold">
                Advanced Curriculum and Facilities
              </h1>
              <p className="text-[12px] mt-2 font-normal">
                Our curriculum integrates academic learning with hands-on
                clinical practice, supported by state-of-the-art labs and
                simulated patient environments. Continuously updated, our
                programs ensure students learn the latest medical advancements.
              </p>
            </div>
          </span>
          <span className="py-2 gap-3 w-[350px]">
            <img
              className="w-[55px] h-auto"
              src={Icon2}
              alt=""
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div>
              <h1 className="text-[20px] mt-[3px] font-bold">
                Expert Faculty and Mentorship
              </h1>
              <p className="text-[12px] mt-2 font-normal">
                Our experienced faculty provides personalized guidance and
                mentorship, helping students with career planning and
                professional development. Small class sizes ensure
                individualized attention, while workshops enhance soft skills
                and research capabilities.
              </p>
            </div>
          </span>
          <span className="py-2 gap-3 w-[350px]">
            <img
              className="w-[55px] h-auto"
              src={Icon3}
              alt=""
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div>
              <h1 className="text-[20px] mt-[3px] font-bold">
                Clinical Training and Experience
              </h1>
              <p className="text-[12px] mt-2 font-normal">
                We offer extensive clinical rotations and internships through
                top hospitals and clinics, providing essential real-world
                experience. Students also engage in community health initiatives
                and have opportunities for global exchanges, broadening their
                medical perspectives.
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
export default Services;
