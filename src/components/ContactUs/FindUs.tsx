import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/Mail.svg";
import Location from "../../assets/Location.svg";
import "./css/FindUs.css";

const FindUs = () => {
  return (
    <>
      <div className="FindUs_Main mt-[500px] pl-32 mb-[40px] pr-32">
        <h1 className="FindUs_Title text-[35px] flex gap-2 font-bold">
          Find Us <p className="text-emerald-400">Here</p>
        </h1>
        <div className="FindUs_Main_Grid grid w-[100%] grid-cols-3 mt-[30px] gap-3">
          <div className="FindUs_Grid bg-emerald-100 p-2 flex gap-2 rounded-lg w-[100%] h-[60px]">
            <LazyLoadImage
              src={Phone}
              alt="Phone Icon"
              className="lazy-load-image"
              effect="blur"
              width="45px"
            />
            <span className="FindUs_Numbers mt-[2px]">
              <h1 className="font-bold">Phone:</h1>
              <p className="text-[14px]">+91 6383134299</p>
            </span>
          </div>
          <div className="FindUs_Grid bg-emerald-100 p-2 flex gap-2 rounded-lg w-[100%] h-[60px]">
            <LazyLoadImage
              src={Mail}
              alt="Mail Icon"
              className="lazy-load-image"
              effect="blur"
              width="45px"
            />
            <span className="FindUs_Numbers mt-[2px]">
              <h1 className="font-bold">Email:</h1>
              <p className="text-[14px]">abcd1234@gmail.com</p>
            </span>
          </div>
          <div className="FindUs_Grid bg-emerald-100 p-2 flex gap-2 rounded-lg w-[100%] h-[60px]">
            <LazyLoadImage
              src={Location}
              alt="Location Icon"
              className="lazy-load-image"
              effect="blur"
              width="45px"
            />
            <span className="FindUs_Numbers mt-[2px]">
              <h1 className="font-bold">Location:</h1>
              <p className="text-[14px]">Salem, Tamil Nadu</p>
            </span>
          </div>
        </div>
        <div className="FindUs_Map mt-4">
          <iframe
            className="rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577.9134304335166!2d78.17440195484654!3d11.70128787018313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1007e26ff5b%3A0x8cb781e48048bfce!2sMajor%20Dr.%20P.%20A.%20Subramanian%20residency!5e0!3m2!1sen!2sin!4v1717760477495!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default FindUs;
