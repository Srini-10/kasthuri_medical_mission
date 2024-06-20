import React from "react";
import { Link } from "react-router-dom";
import Doctor from "../../assets/Subramanian.png";
import { Button } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./css/SpecialistDetails.css";

const SpecialistDetails = () => {
  return (
    <>
      <div className="SD_Main flex justify-between gap-10 mt-[60px]">
        <div className="Specialist_Img w-[90%] mt-[-60px] ml-10 pt-[60px] h-[100vh] overflow-hidden">
          <LazyLoadImage
            width={600}
            src={Doctor}
            alt=""
            effect="blur"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
            className=""
          />
        </div>
        <div className="Container_Design absolute ml-[72%] mt-14 rotate-[-60deg] transform scale-y-[-1] scale-x-[-1]">
          <Player
            autoplay
            loop
            src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
            style={{ height: "auto", width: "300px" }}
          />
        </div>

        <div className="SD_Contents mt-20">
          <h1 className="SD_Hello text-[32px] text-emerald-400">Hello, I am</h1>
          <h1 className="SD_Name text-black font-bold text-[75px]">
            <p className="">Major</p>Dr.P.A.Subramanian{" "}
            <p className="text-gray-400">AMC</p>
          </h1>
          <p>M.D.ARCGP, (London), Ph.D. (USA)</p>
          <div className="mt-10 gap-6 flex">
            <Link to="#About_Me">
              <Button className="rounded-md font-medium border-1 border-emerald-400 bg-emerald-400">
                About Me
              </Button>
            </Link>
            <Link to="/Contact_Us">
              <Button className="rounded-md font-medium bg-transparent border-1 border-emerald-400">
                Contact Us
              </Button>
            </Link>
          </div>
          <p className="SD_Sub mt-16 text-[15px] w-[90%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            voluptates esse reiciendis fugiat? Ea veritatis fuga tempora nemo?
            Eos perspiciatis vitae nihil exercitationem cum maiores hic
            necessitatibus optio eius dolor.
          </p>
        </div>
      </div>
    </>
  );
};

export default SpecialistDetails;
