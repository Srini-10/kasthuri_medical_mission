import React from "react";
import { Button } from "@nextui-org/react";
import Logo from "../../assets/Doctor.jpeg";

function Works() {
  return (
    <>
      <div className="text-[30px] font-bold pt-10 h-[550px]">
        <div className="pt-3 w-[50%] mx-auto text-center">
          <p className="text-[35px] text-black font-bold leading-[70px]">
            Expert <span className="text-emerald-400">Faculties</span>
          </p>
          <p className="text-[14px] text-gray-600 font-normal w-[100%] leading-[20px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            quia veniam expedita itaque temporibus nihil consequuntur
            dignissimos dolores esse quibusdam porro tenetur,
          </p>
        </div>

        <div className="flex gap-[10px] justify-center mx-auto mt-14">
          <div className="mt-3 hover:bg-emerald-50 transition duration-300 ease-in-out shadow-sm w-[300px] pl-5 pt-3 pb-3 pr-5 rounded-lg">
            <span className="">
              <img
                src={Logo}
                alt=""
                className="w-[60px] h-[60px] absolute mt-[-95px] rounded-xl"
              />
              <h1 className="mt-5">Obstetrics</h1>
            </span>
            <p className="text-[15px] mt-1 font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="bg-white text-[16px] w-full font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
              Learn More
            </Button>
          </div>
          <div className="mt-3 hover:bg-emerald-50 shadow-sm w-[300px] pl-5 pt-3 pb-3 pr-5 rounded-lg">
            <span className="">
              <img
                src={Logo}
                alt=""
                className="w-[60px] h-[60px] absolute mt-[-95px] rounded-xl"
              />
              <h1 className="mt-5">Obstetrics</h1>
            </span>
            <p className="text-[15px] mt-1 font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="bg-white text-[16px] w-full font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
              Learn More
            </Button>
          </div>
          <div className="mt-3 hover:bg-emerald-50 shadow-sm w-[300px] pl-5 pt-3 pb-3 pr-5 rounded-lg">
            <span className="">
              <img
                src={Logo}
                alt=""
                className="w-[60px] h-[60px] absolute mt-[-95px] rounded-xl"
              />
              <h1 className="mt-5">Obstetrics</h1>
            </span>
            <p className="text-[15px] mt-1 font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="bg-white text-[16px] w-full font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
              Learn More
            </Button>
          </div>
          <div className="mt-3 hover:bg-emerald-50 shadow-sm w-[300px] pl-5 pt-3 pb-3 pr-5 rounded-lg">
            <span className="">
              <img
                src={Logo}
                alt=""
                className="w-[60px] h-[60px] absolute mt-[-95px] rounded-xl"
              />
              <h1 className="mt-5">Obstetrics</h1>
            </span>
            <p className="text-[15px] mt-1 font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="bg-white text-[16px] w-full font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
