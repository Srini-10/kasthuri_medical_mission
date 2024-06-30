import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BookForm from "./BookForm.tsx";
import Contact from "./Contact.tsx";
import Doctor from "../../assets/Contact_Doctor.png";
import Tick from "../../assets/Tick.svg";
import "./css/Book.css";

const Book = () => {
  return (
    <>
      <div className="Book_Main mt-[60px] mb-[50px]">
        <div className="bg-emerald-100">
          <div className="Book_Header pl-20 pr-20 w-[1430px] mx-auto relative flex justify-between pt-[25px] pb-[0px] bg-emerald-100">
            <div className="Book_Title">
              <h1 className="text-[60px] mt-[80px] w-[500px] leading-[42px] gap-2 font-bold">
                Don't Let Your Health
                <br />
                <b className="text-emerald-400 font-bold">Take a Backseat!</b>
              </h1>
              <p className="Book_Sub text-[14px] mt-[3px] text-gray-700">
                Book your appointment with our specialists today.
              </p>
            </div>
            <div className="Contact_Design2 h-[300px] mt-[-35px] overflow-hidden">
              <LazyLoadImage
                src={Doctor}
                alt=""
                className="Contact_Design_Image2 w-[350px] relative h-[auto] lazy-load-image"
                effect="blur"
              />

              <div className="Contact_Design_Contents">
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
        </div>
        <div className="Book_Form_Contact w-[1430px] mx-auto bg-white relative flex gap-[60px] mt-[20px] ml-[30px] px-10 pt-10 pb-0 mb-0 rounded-xl">
          <BookForm />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Book;
