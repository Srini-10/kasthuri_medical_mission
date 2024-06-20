import { Button } from "@nextui-org/react";
import React from "react";
import Doctor from "../../assets/Subramanian.png";
import "./css/Specialist.css";
import { Link } from "react-router-dom";

const Specialist = () => {
  return (
    <>
      <div className="Specialist_Main flex justify-center items-center h-[480px] bg-emerald-50">
        <div className="Specialist_Container w-[75%] items-center relative bg-emerald-400 h-[30vh] mb-[-100px] pl-14 py-10 rounded-xl">
          <h1 className="Specialist_Name text-black font-bold text-[45px]">
            Major Dr.P.A.Subramanian AMC
          </h1>
          <p className="Specialist_Sub text-gray-700">
            M.D.ARCGP, (London), Ph.D. (USA)
          </p>
          <Link to="../../pages/Specialist.tsx">
            <Button className="Specialist_Button mt-6 bg-white rounded-md font-medium">
              Know More
            </Button>
          </Link>
        </div>
        <div className="Specialist_Img w-[370px] ml-[670px] mt-[-89px] absolute h-[425px] overflow-hidden">
          <img
            width={400}
            src={Doctor}
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>
    </>
  );
};

export default Specialist;
