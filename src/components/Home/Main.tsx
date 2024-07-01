import React, { useState, useEffect } from "react";
import Doctor from "../../assets/Doctor.jpeg";
import { Button } from "@nextui-org/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import People1 from "../../assets/People1.png";
import People2 from "../../assets/People2.png";
import People3 from "../../assets/People3.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./css/Main.css";

function Main() {
  return (
    <>
      <div className="Main w-full mt-[60px] overflow-hidden relative">
        <div className="Main_Img overflow-hidden w-[100%] h-[730px]">
          <LazyLoadImage
            src={Doctor}
            alt="Doctor"
            effect="blur"
            className="brightness-[70%] mt-[-110px] Bg_Main"
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
        <div className="w-[1170px] mx-auto">
          <div className="Main_Over absolute mt-[-600px] ml-0">
            <div className="Design_Main flex absolute ml-[990px] mt-[-50px] backdrop-blur-sm justify-end gap-2 rounded-xl p-1 w-[165px] items-center bg-transparent border-2 border-emerald-400">
              <LazyLoadImage
                src={People2}
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
                src={People3}
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
                src={People1}
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
              AFFILIATED TO NATIONAL UNIVERSITY OF MEDICINE SCIENCE. <br />
              <p className="flex">
                APPROVED BY CENTRAL MEDICAL COUNCIL OF INDIA{" "}
                <span className="text-emerald-400">(</span>
                <span className="text-white">CMC</span>
                <span className="text-emerald-400">)</span>. <br />
              </p>
              <p className="mt-2">
                REGULATION ON MEDICAL EDUCATION COURSES. <br />
                <p className="flex">
                  CERTIFICATE, DIPLOMA, DEGREE 1997 OF
                  <span className="text-emerald-400">(</span>
                  <span className="text-white">MCI</span>
                  <span className="text-emerald-400">)</span>.
                </p>
              </p>
            </p>
            <Link to="#getStarted">
              <Button className="Get_Started bg-emerald-400 text-[16px] font-medium rounded-md mt-10 pt-2 pb-2 pl-5 pr-5">
                Get Started
              </Button>
            </Link>
            <p className="Main_Quote mt-[135px] font-medium w-[420px] rounded-3xl p-0.5 px-1 ml-[80px] bg-transparent backdrop-blur-[2px] text-gray-300">
              To cure sometimes, to relieve often, to comfort always.
            </p>
            <div className="Success flex flex-row absolute ml-[650px] mt-[-55px] backdrop-blur-sm gap-2 rounded-tl-xl p-1 h-[120px] min-w-[5500px] items-center bg-transparent border-t-2 border-l-2 border-emerald-400">
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
        </div>
      </div>
    </>
  );
}

export default Main;
