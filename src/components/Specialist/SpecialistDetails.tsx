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
      <div className="SD_Main h-[672px] w-[1350px] gap-10 mx-auto justify-center grid grid-cols-2 mt-[60px]">
        <div className="Specialist_Img w-[100%] mt-[-60px] ml-10 pt-[60px] h-[732px] overflow-hidden">
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
        <div className="Container_Design absolute ml-[1050px] mt-14 rotate-[-60deg] transform scale-y-[-1] scale-x-[-1]">
          <Player
            autoplay
            loop
            src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
            style={{ height: "auto", width: "300px" }}
          />
        </div>

        <div className="SD_Contents mt-20">
          <h1 className="SD_Hello text-[32px] text-emerald-400">Hello, I am</h1>
          <p className="SD_Name text-black flex font-bold text-[55px]">Major</p>
          <h1 className="SD_Name text-black flex gap-3 font-bold text-[50px]">
            Dr.P.A.Subramanian <p className="text-gray-400">A.M.C.,</p>
          </h1>
          <p>MRCGP (London), Ph.D., (USA)</p>
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
          <p className="mt-12 text-[15px] w-[90%] text-gray-700">
            Giving Back to the Community and Shaping Future Healthcare Leaders
          </p>
          <p className="SD_Sub mt-6 text-[15px] w-[90%]">
            Major Dr.P.A.Subramanian AMC initiated India's First Free medical
            consulting for poor people in the specialization of Dental medicine.{" "}
            <b>
              He also wanted to make India, 1 doctor for every 100 people in
              India.
            </b>
          </p>
          <div className="Animation -mt-1 ml-[25%]">
            {/* <Button className="rounded-md font-medium border-1 border-emerald-400 bg-emerald-400">
              Scroll to Read More!
            </Button> */}
            <iframe src="https://lottie.host/embed/834baa49-1156-4ce6-a5ed-f1bdb4ce962a/08Oz7byq5J.json"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistDetails;
