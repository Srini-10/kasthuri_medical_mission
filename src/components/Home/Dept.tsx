import React from "react";
import { Button } from "@nextui-org/react";
import Logo from "../../assets/Doctor.jpeg";

function Dept() {
  return (
    <>
      <div className="bg-white text-[30px] font-bold pt-10 h-[500px]">
        <div className="pt-3">
          <p className="text-[50px] text-black font-bold gap-3 justify-center flex leading-[70px]">
            Our <p className="text-emerald-400">Departments</p>
          </p>
        </div>
        <div className="flex gap-[80px] justify-evenly ml-16 mr-16 mt-10">
          <div className="mt-3">
            <span className="flex">
              <img src={Logo} alt="" className="w-[60px] h-[60px] rounded-xl" />
              <h1 className="mt-3 ml-5">Obstetrics</h1>
            </span>
            <p className="text-[15px] w-[340px] mt-3 font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis facilis eos, incidunt nisi vel quae nulla
              necessitatibus.
            </p>
            <Button className="bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
              Learn More
            </Button>
          </div>
          <div className="mt-3">
            <span className="flex">
              <img src={Logo} alt="" className="w-[60px] h-[60px] rounded-xl" />
              <h1 className="mt-3 ml-5">Obstetrics</h1>
            </span>
            <p className="text-[15px] w-[340px] mt-3 font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis facilis eos, incidunt nisi vel quae nulla
              necessitatibus.
            </p>
            <Button className="bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
              Learn More
            </Button>
          </div>
          <div className="mt-3">
            <span className="flex">
              <img src={Logo} alt="" className="w-[60px] h-[60px] rounded-xl" />
              <h1 className="mt-3 ml-5">Obstetrics</h1>
            </span>
            <p className="text-[15px] w-[340px] mt-3 font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis facilis eos, incidunt nisi vel quae nulla
              necessitatibus.
            </p>
            <Button className="bg-transparency text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dept;
