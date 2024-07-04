import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/Mail.svg";
import Location from "../../assets/Location.svg";
import "./css/FindUs.css";
import { Link } from "react-router-dom";

const FindUs = () => {
  return (
    <>
      <div className="FindUs_Main mt-[500px] pl-32 mb-[40px] pr-32">
        <h1 className="FindUs_Title text-[35px] flex gap-2 font-bold">
          Find Us <p className="text-emerald-400">Here</p>
        </h1>
        <div className="FindUs_Main_Grid grid w-[100%] grid-cols-3 mt-[30px] gap-3">
          <Link to="tel:6383134299">
            <div className="FindUs_Grid FindUs_Grid1 bg-emerald-100 p-2 flex gap-2 rounded-lg w-[100%] h-[60px]">
              <LazyLoadImage
                src={Phone}
                alt="Phone Icon"
                className="lazy-load-image"
                effect="blur"
                width="45px"
              />
              <span className="FindUs_Numbers mt-[2px]">
                <h1 className="font-bold">Phone:</h1>
                <p className="text-[14px]">+91 0123456789</p>
              </span>
            </div>
          </Link>
          <Link target="_blank" to="mailto:kasthurimedicalmission@gmail.com">
            <div className="FindUs_Grid FindUs_Grid2 bg-emerald-100 p-2 flex gap-2 rounded-lg w-[100%] h-[60px]">
              <LazyLoadImage
                src={Mail}
                alt="Mail Icon"
                className="lazy-load-image"
                effect="blur"
                width="45px"
              />
              <span className="FindUs_Numbers mt-[2px]">
                <h1 className="font-bold">Email:</h1>
                <p className="text-[14px]">kasthurimedicalmission@gmail.com</p>
              </span>
            </div>
          </Link>
          <Link
            target="_blank"
            to="https://www.google.com/maps/place/Major+Dr.+P.+A.+Subramanian+residency/@11.701263,78.174427,18z/data=!4m6!3m5!1s0x3babf1007e26ff5b:0x8cb781e48048bfce!8m2!3d11.7012632!4d78.1744271!16s%2Fg%2F11y48nlwdx?hl=en&entry=ttu"
          >
            <div className="FindUs_Grid FindUs_Grid3 bg-emerald-100 p-2 flex gap-2 rounded-lg w-[100%] h-[60px]">
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
          </Link>
        </div>
        <div className="FindUs_Map mt-4">
          <iframe
            title="map"
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
