import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Tick from "../../assets/Tick.svg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./css/Side.css";

const Side = () => {
  return (
    <>
      <div className="mt-[25px] p-2 mx-3 bg-slate-50 rounded-md">
        <div>
          <h1 className="font-bold">Service Featured</h1>
          <p className="text-[13px] mt-[5px]">
            Your success is our lasting legacy.
          </p>
          <div className="mt-[20px] bg-slate-200 p-2 rounded-md">
            <li className="list-none flex gap-1">
              <LazyLoadImage
                src={Tick}
                alt=""
                className="w-[17px] h-auto lazy-load-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <p className="text-[14px]">Comprehensive Medical Courses</p>
            </li>
            <li className="list-none flex gap-1">
              <LazyLoadImage
                src={Tick}
                alt=""
                className="w-[17px] h-auto lazy-load-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <p className="text-[14px]">Personalized Tutoring</p>
            </li>
            <li className="list-none flex gap-1">
              <LazyLoadImage
                src={Tick}
                alt=""
                className="w-[17px] h-auto lazy-load-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <p className="text-[14px]">Clinical Skills Training</p>
            </li>
          </div>
          <Link to="#Services">
            <Button className="bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-3 pt-2 pb-2 pl-5 pr-5">
              Know More
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-[45px] p-2 mx-3">
        <h1 className="font-bold">We'll Provide</h1>
        <div className="mt-[20px] p-2 grid grid-cols-1 leading-7 rounded-md">
          <li className="list-none flex gap-1">
            <LazyLoadImage
              src={Tick}
              alt=""
              className="w-[17px] h-auto lazy-load-image"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <p>BMS & CMP</p>
          </li>
          <li className="list-none flex gap-1">
            <LazyLoadImage
              src={Tick}
              alt=""
              className="w-[17px] h-auto lazy-load-image"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <p>DM & S</p>
          </li>
          <li className="list-none flex gap-1">
            <LazyLoadImage
              src={Tick}
              alt=""
              className="w-[17px] h-auto lazy-load-image"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <p>BGMS</p>
          </li>
        </div>
      </div>
    </>
  );
};

export default Side;
