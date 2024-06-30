import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Form from "../../assets/Folder.svg";
import "./css/Contact.css";
import { Link } from "@nextui-org/react";

const Contact = () => {
  return (
    <>
      <div className="Contact_Main2 relative w-[28%] ml-[90px]">
        <div>
          <h1 className="Contact_Title2 text-[35px] text-black gap-2 mt-2 flex font-bold">
            Contact <p className="text-emerald-400">Us</p>
          </h1>
          <div className="Contact_Contents flex">
            <LazyLoadImage
              className="Contact_Img mt-[25px] ml-[-30px] rounded-xl lazy-load-image"
              src={Form}
              alt=""
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div className="Contact_Text mt-[100px] ml-[-20px] font-sans">
              <div className="mt-[10px]">
                <h1 className="Contact_Sub text-[20px] font-semibold">Phone</h1>
                <Link href="tel:0123456789">
                  <p className="Contact_P text-[14px] text-gray-500 font-medium">
                    +91 0123456789
                  </p>
                </Link>
              </div>
              <div className="mt-[20px]">
                <h1 className="Contact_Sub text-[20px] font-semibold">
                  Email Us
                </h1>
                <Link
                  target="_blank"
                  href="mailto:kasthurimedicalmission@gmail.com"
                >
                  <p className="Contact_P text-[14px] text-gray-500 font-medium">
                    kasthurimedicalmission@gmail.com
                  </p>
                </Link>
              </div>
              <div className="mt-[20px]">
                <h1 className="Contact_Sub text-[20px] font-semibold">
                  Our Location
                </h1>

                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Major+Dr.+P.+A.+Subramanian+residency/@11.701263,78.174427,18z/data=!4m6!3m5!1s0x3babf1007e26ff5b:0x8cb781e48048bfce!8m2!3d11.7012632!4d78.1744271!16s%2Fg%2F11y48nlwdx?hl=en&entry=ttu"
                >
                  <p className="Contact_P text-[14px] text-gray-500 font-medium">
                    Salem, Tamil Nadu
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
