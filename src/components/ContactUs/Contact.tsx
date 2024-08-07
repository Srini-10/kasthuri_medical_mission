import React from "react";
import ContactForm from "./ContactForm.tsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Doctor from "../../assets/Contact_Doctor.png";
import Tick from "../../assets/Tick.svg";
import FindUs from "./FindUs.tsx";
import "./css/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="Contact_Main mt-[60px] mb-[50px]">
        <div className="Contact_Header_Main w-[100%] bg-emerald-100">
          <div className="Contact_Header pl-[5%] pr-[8%] max-w-[100%] justify-between mx-auto relative flex pt-[25px] pb-[0px]">
            <div className="Contact_Title">
              <h1 className="text-[60px] flex mt-[80px] gap-2 font-bold">
                Contact
                <b className="text-emerald-400 font-bold">Us</b>
              </h1>
              <p className="text-[14px] mt-[-3px] text-gray-700">
                Connect with us for inquiries, assistance, or feedback. We're
                here to help!
              </p>
            </div>
            <div className="Contact_Design h-[300px] mt-[-35px] overflow-hidden">
              <LazyLoadImage
                src={Doctor}
                alt=""
                className="Contact_Design_Img w-[350px] relative h-[auto] lazy-load-image"
                effect="blur"
              />
              <div className="Contact_Design_Cont1 absolute mt-[-300px] ml-[-230px] bg-gray-50 shadow-sm rounded-xl p-3">
                <span className="Contact_Design_Cont1_Image flex py-2 gap-3">
                  <LazyLoadImage
                    effect="blur"
                    className="Contact_Design_Cont1_Img w-[38px] h-[38px] border-2 border-gray-300 rounded-[100%]"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <div className="Contact_Design_Cont1_Cont">
                    <h1 className="text-[15px] mt-[1px] font-bold">
                      Excellence in Care
                    </h1>
                    <p className="text-[12px] text-gray-700">
                      Discover our Story.
                    </p>
                    <br />
                    <span className="Contact_Design_Cont1_Span ml-[-55px] mt-[-18px] w-[190px] shadow-sm opacity-90 h-[32px] absolute bg-white rounded-full">
                      <p className="text-[12px] text-gray-500 font-medium ml-[15px] mt-[6px]">
                        Discover our Story.
                      </p>
                    </span>
                  </div>
                </span>
              </div>
              <div className="Contact_Design_Cont2 absolute mt-[-170px] ml-[240px] bg-gray-50 shadow-sm rounded-lg p-2">
                <span className="Contact_Design_Cont2_Image flex py-2 gap-[10px]">
                  <div className="Contact_Design_Cont2_Div h-[40px] w-[40px] bg-gray-300 rounded-sm p-0.5">
                    <LazyLoadImage
                      effect="blur"
                      className="Contact_Design_Cont2_Img w-[35px] h-[35px] rounded-[100%]"
                      src={Tick}
                      alt=""
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                  <div className="Contact_Design_Cont2_Cont pr-[2px]">
                    <h1 className="text-[18px] mt-[1px] font-bold">1000+</h1>
                    <p className="text-[12px] text-gray-700">
                      Trained Students
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Contact_Form bg-white shadow-md absolute -mt-[70px] px-6 py-10 rounded-xl left-1/2 transform -translate-x-1/2 w-[830px] h-[480px]">
          <ContactForm />
        </div>
        <div className="Contact_Form2 hidden">
          <ContactForm />
        </div>
      </div>
      <FindUs />
    </>
  );
};

export default Contact;
