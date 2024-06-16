import React from "react";
import BookForm from "./BookForm.tsx";
import Doctor from "../../assets/Contact_Doctor.png";
import Tick from "../../assets/Tick.svg";
import "./css/Book.css";
import Contact from "./Contact.tsx";

const Book = () => {
  return (
    <>
      <div className="Book_Main mt-[60px] mb-[50px]">
        <div className="Book_Header pl-20 pr-20 relative flex justify-between pt-[25px] pb-[0px] bg-emerald-100">
          <div className="Book_Title">
            <h1 className="text-[60px] mt-[80px] leading-[42px] gap-2 font-bold">
              Don't Let Your Health
              <p className="text-emerald-400">Take a Backseat!</p>
            </h1>
            <p className="Book_Sub text-[14px] mt-[3px] text-gray-700">
              Book your appointment with our specialists today.
            </p>
          </div>
          <div className="Book_Design h-[300px] mt-[-35px] overflow-hidden">
            <img
              className="w-[350px] relative h-[auto]"
              src={Doctor}
              alt=""
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div className="Book_Design_Cont1 absolute mt-[-300px] ml-[-230px] bg-gray-50 shadow-sm rounded-xl p-3">
              <span className="flex py-2 gap-3">
                <img
                  className="w-[38px] h-[38px] border-2 border-gray-300 rounded-[100%]"
                  src={Tick}
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div>
                  <h1 className="text-[15px] mt-[1px] font-bold">
                    Excellence in Care
                  </h1>
                  <p className="text-[12px] text-gray-700">
                    Discover our Story.
                  </p>
                  <br />
                  <span className="Book_Design_Cont1_Span ml-[-55px] mt-[-18px] w-[190px] shadow-sm opacity-90 h-[32px] absolute bg-white rounded-full">
                    <p className="text-[12px] text-gray-500 font-medium ml-[15px] mt-[6px]">
                      Discover our Story.
                    </p>
                  </span>
                </div>
              </span>
            </div>
            <div className="Book_Design_Cont2 absolute mt-[-170px] ml-[240px] bg-gray-50 shadow-sm rounded-lg p-2">
              <span className="flex py-2 gap-[10px]">
                <div className="Book_Design_Cont2_Div bg-gray-300 rounded-sm p-1">
                  <img
                    className="w-[35px] h-[35px] rounded-[100%]"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
                <div className="pr-[2px]">
                  <h1 className="text-[18px] mt-[1px] font-bold">1000+</h1>
                  <p className="text-[12px] text-gray-700">Trained Students</p>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="Book_Form_Contact bg-white relative flex gap-[100px] mt-[20px] ml-[30px] px-10 pt-10 pb-0 mb-0 rounded-xl w-[90%]">
          <BookForm />
          <Contact />
        </div>
      </div>
    </>
  );
};
export default Book;
