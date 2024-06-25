import React from "react";
import Scroll from "./Carousel.tsx";
import Map from "../../assets/Map.png";
import People1 from "../../assets/People1.png";
import People2 from "../../assets/People2.png";
import People3 from "../../assets/People3.png";
import People4 from "../../assets/People4.png";
import People5 from "../../assets/People5.png";
import People6 from "../../assets/People6.png";
import People7 from "../../assets/People7.png";
import Locate from "../../assets/Locate.png";
import "./css/Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="Test_Main min-w-[100%] mt-[-80px]">
        <div className="Test_Map relative mt-[120px] h-[650px] bg-emerald-100 w-[100%] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <img className="Test_Map_Img w-[930px]" src={Map} alt="" />
          <div className="relative">
            <span className="absolute ml-[-170px] mt-[80px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People1}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
            <span className="absolute ml-[-440px] mt-[0px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People2}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
            <span className="absolute ml-[-310px] mt-[-40px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People3}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
            <span className="absolute ml-[-90px] mt-[-200px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People4}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
            <span className="absolute ml-[-910px] mt-[-210px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People5}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
            <span className="absolute ml-[-600px] mt-[-280px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People6}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
            <span className="absolute ml-[-700px] mt-[-0px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People7}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
            <span className="absolute ml-[-400px] mt-[-190px]">
              <img
                className="w-[35px] h-[35px] p-1 absolute rounded-full"
                src={People7}
                alt=""
              />
              <img className="w-[35px]" src={Locate} alt="" />
            </span>
          </div>
        </div>
        <div className="Test_Base bg-emerald-100 opacity-60 absolute w-[100%] h-[650px] mt-[-650px]"></div>
        <div className="Test_Base2 text-black text-center absolute pt-[30px] w-[100%] h-[610px] mt-[-620px]">
          <h1 className="Test_Title text-[17px] w-[80%] mx-auto text-gray-700 font-medium">
            Testimonials
          </h1>
          <h1 className="Test_Sub text-[35px] mt-2 justify-center font-semibold flex gap-2">
            What People Say <p className="text-emerald-400">About Us</p>
          </h1>
          <div className="Text_Carousel absolute w-[100%] text-black h-[420px] mt-[40px] left-1/2 transform -translate-x-1/2 opacity-100">
            <Scroll />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
