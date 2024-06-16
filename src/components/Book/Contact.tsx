import React from "react";
import Form from "../../assets/Folder.svg";
import "./css/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="Contact_Main relative w-[28%] ml-[90px]">
        <h1 className="Contact_Title text-[35px] text-black gap-2 mt-2 flex font-bold">
          Contact <p className="text-emerald-400">Us</p>
        </h1>
        <div className="Contact_Contents flex">
          <img
            className="Contact_Img mt-[25px] ml-[-30px] rounded-xl"
            src={Form}
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
          <div className="Contact_Text mt-[100px] ml-[-20px] font-sans">
            <div className="mt-[10px]">
              <h1 className="Contact_Sub text-[20px] font-semibold">Phone</h1>
              <p className="Contact_P text-[14px] text-gray-500 font-medium">
                +91 6383134299
              </p>
            </div>
            <div className="mt-[20px]">
              <h1 className="Contact_Sub text-[20px] font-semibold">
                Email Us
              </h1>
              <p className="Contact_P text-[14px] text-gray-500 font-medium">
                abcd1234@gmail.com
              </p>
            </div>
            <div className="mt-[20px]">
              <h1 className="Contact_Sub text-[20px] font-semibold">
                Our Location
              </h1>
              <p className="Contact_P text-[14px] text-gray-500 font-medium">
                Salem, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
