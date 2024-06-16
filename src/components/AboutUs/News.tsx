import React from "react";
import Image from "../../assets/Doctor.jpeg";
import "./css/News.css";

function News() {
  return (
    <>
      <div className="News_Main w-[84%]">
        <h1 className="News_Title text-[75px] flex gap-0 ml-16 mt-24 text-black font-bold leading-[90px]">
          New
          <p className="text-emerald-400">s</p>
        </h1>
        <div className="News_Img grid grid-cols-3 mx-16 gap-3 mt-2 mb-4">
          <img src={Image} alt="" className="rounded-xl" />
          <img src={Image} alt="" className="rounded-xl" />
          <img src={Image} alt="" className="rounded-xl" />
          <img src={Image} alt="" className="rounded-xl" />
          <img src={Image} alt="" className="rounded-xl" />
          <img src={Image} alt="" className="rounded-xl" />
        </div>
      </div>
    </>
  );
}

export default News;
