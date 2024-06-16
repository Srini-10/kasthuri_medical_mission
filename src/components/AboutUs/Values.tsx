import React from "react";
import Image from "../../assets/Doctor.jpeg";
import Design from "../../assets/Heart_Beat.svg";
import "./css/Value.css";

function Values() {
  return (
    <>
      <div className="Value">
        <img
          src={Design}
          className="Design_Image w-72 opacity-50 absolute ml-[77%] mt-[-60px]"
          alt=""
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
        <h1 className="Value_Title text-[65px] flex gap-3 ml-[140px] mt-10 text-black font-bold leading-[90px]">
          Our
          <p className="text-emerald-400">Values</p>
        </h1>
        <div className="Value_Main scale-[90%] mt-[-40px] -py-[50px]">
          <span className="Value_Containers mx-36 grid-cols-3 grid gap-10 mt-3 mb-4">
            <div className="Value_Div1 rounded-xl relative h-[230px] bg-emerald-50 shadow-md mt-36">
              <span className="absolute bg-emerald-700 w-[370px] text-white text-center align-baseline text-[34px] font-bold mt-[40px] shadow-xl rounded-md -ml-[6px] h-[60px]">
                Compassion
              </span>
              <p className="mt-[115px] text-[15px] p-3">
                We demonstrate empathy and kindness in every patient
                interaction, recognizing their unique needs and concerns.
              </p>
            </div>
            <div className="Value_Div2 rounded-xl relative h-[230px] bg-emerald-50 shadow-md">
              <span className="absolute bg-emerald-700 w-[370px] text-white text-center align-baseline text-[34px] font-bold mt-[40px] shadow-xl rounded-md -ml-[6px] h-[60px]">
                Excellence
              </span>
              <p className="mt-[115px] text-[15px] p-3">
                We strive for excellence in medical education, ensuring high
                standards of teaching, learning, and patient care.
              </p>
            </div>
            <div className="Value_Div3 rounded-xl relative h-[230px] bg-emerald-50 shadow-md mt-36">
              <span className="absolute bg-emerald-700 w-[370px] text-white text-center align-baseline text-[34px] font-bold mt-[40px] shadow-xl rounded-md -ml-[6px] h-[60px]">
                Integrity
              </span>
              <p className="mt-[115px] text-[15px] p-3">
                We uphold honesty and transparency in all our interactions,
                fostering trust and credibility within our community
              </p>
            </div>
          </span>
          <span className="Value_Containers2 mx-36 px-32 grid-cols-2 grid gap-12 mt-5 mb-4">
            <div className="Value_Div4 rounded-xl relative h-[240px] bg-emerald-50 shadow-md">
              <span className="absolute bg-emerald-700 w-[435px] text-white text-center align-baseline text-[34px] font-bold mt-[40px] shadow-xl rounded-md -ml-[6px] h-[60px]">
                Diversity and Inclusion
              </span>
              <p className="mt-[115px] text-[15px] p-4">
                We celebrate diversity and promote an inclusive environment
                where all individuals are valued and respected.
              </p>
            </div>
            <div className="Value_Div5 rounded-xl relative h-[240px] bg-emerald-50 shadow-md">
              <span className="absolute bg-emerald-700 w-[435px] text-white text-center align-baseline text-[34px] font-bold mt-[40px] shadow-xl rounded-md -ml-[6px] h-[60px]">
                Collaboration
              </span>
              <p className="mt-[115px] text-[15px] p-4">
                We foster teamwork and cooperation among students, faculty, and
                healthcare professionals to achieve shared goals.
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Values;
