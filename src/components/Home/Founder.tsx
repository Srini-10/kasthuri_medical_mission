import React from "react";
import { Button } from "@nextui-org/react";
import Doctor from "../../assets/Subramanian.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./css/Founder.css";

const Founder = () => {
  return (
    <>
      <div className="Specialist_Main flex justify-center items-center h-[480px] bg-emerald-50">
        <div className="Specialist_Container w-[1080px] items-center relative bg-emerald-400 max-h-[220px] mb-[-100px] pl-14 py-10 rounded-xl">
          <h1 className="Specialist_Name flex gap-2 text-black font-bold text-[42px]">
            Major <p>Dr.P.A.Subramanian <b className="font-bold text-gray-600">A.M.C.,</b></p>
          </h1>
          <p className="Specialist_Sub text-gray-700">
            MRCGP (London), Ph.D., (USA)
          </p>
          <Link to="/Founder">
            <Button className="Specialist_Button mt-6 bg-white rounded-md font-medium">
              Know More
            </Button>
          </Link>
        </div>
        <div className="Specialist_Img1 w-[370px] ml-[670px] mt-[-101px] absolute max-h-[420px] overflow-hidden">
          <LazyLoadImage
            width={380}
            src={Doctor}
            alt=""
            effect="blur"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>
    </>
  );
};

export default Founder;
