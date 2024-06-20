import React from "react";
import Doctor from "../../assets/Doctor.jpeg";
import { Button } from "@nextui-org/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./css/Main.css";

function Main() {
  return (
    <>
      <div className="Main w-full mt-[60px] overflow-hidden relative">
        <div className="Main_Img overflow-hidden w-[100%] h-[92.5vh]">
          <LazyLoadImage
            src={Doctor}
            alt="Doctor"
            effect="blur"
            className="brightness-[70%] Bg_Main"
            style={{
              height: "auto",
              width: "100%",
              userSelect: "none",
              pointerEvents: "none",
            }}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
        <div className="Main_Over absolute mt-[-600px] ml-32">
          <div className="Design_Main flex absolute ml-[990px] mt-[-50px] backdrop-blur-sm justify-end gap-2 rounded-xl p-1 w-[165px] items-center bg-transparent border-2 border-emerald-400">
            <LazyLoadImage
              src="https://avatars.githubusercontent.com/u/30373425?v=4"
              alt="Doctor"
              effect="blur"
              className="brightness-100 rounded-full border-gray-300 border-1"
              style={{
                width: "25px",
                height: "25px",
                userSelect: "none",
                pointerEvents: "none",
              }}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <LazyLoadImage
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              alt="Doctor"
              effect="blur"
              className="brightness-100 rounded-full border-gray-300 border-1 ml-[-20px]"
              style={{
                minWidth: "25px",
                height: "25px",
                userSelect: "none",
                pointerEvents: "none",
              }}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <LazyLoadImage
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="Doctor"
              effect="blur"
              className="brightness-100 rounded-full border-gray-300 border-1 ml-[-20px]"
              style={{
                minWidth: "25px",
                height: "25px",
                userSelect: "none",
                pointerEvents: "none",
              }}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <p className="text-white text-[10px] font-medium justify-center pr-1">
              3000+
              <br />
              Students Trained
            </p>
          </div>

          <h1 className="Main_Name text-[90px] text-white font-bold ml-[-4px] leading-[90px]">
            Kasthuri Medical
            <br />
            <p className="text-emerald-400">Mission</p>
          </h1>
          <p className="Sub_Name text-gray-200 w-[580px] font-semibold mt-2">
            ( AFFILIATED TO NATIONAL UNIVERSITY OF MEDICINE SCIENCE ) <br />(
            APPROVED BY CENTRAL MEDICAL COUNCIL OF INDIA (CMC) )
          </p>
          <Link to="#getStarted">
            <Button className="Get_Started bg-emerald-400 text-[16px] font-medium rounded-md mt-10 pt-2 pb-2 pl-5 pr-5">
              Get Started
            </Button>
          </Link>
        </div>
        <p className="Main_Quote absolute mt-[-85px] font-medium ml-[215px] text-gray-300">
          To cure sometimes, to relieve often, to comfort always.
        </p>
        <div className="Success flex flex-row absolute ml-[740px] mt-[-120px] backdrop-blur-md gap-2 rounded-tl-xl p-1 h-[120px] w-[700px] items-center bg-transparent border-t-2 border-l-2 border-emerald-400">
          <div className="Success_Main flex p-5 gap-[35px]">
            <p className="Font_Main text-white text-[15px] pr-1">
              <b className="text-[30px]">30+</b>
              <br />
              Years of experience
            </p>
            <p className="Font_Main text-white text-[15px] pr-1">
              <b className="text-[30px]">10+</b>
              <br />
              Medical Trainers
            </p>
            <p className="Font_Main text-white text-[15px] pr-1">
              <b className="text-[30px]">5+</b>
              <br />
              Laboratories
            </p>
            <p className="Font_Main text-white text-[15px] pr-1">
              <b className="text-[30px]">3000+</b>
              <br />
              Students Trained
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
