import React from "react";
import { Button } from "@nextui-org/react";
import Icon from "../../assets/Doctor_Icon.svg";
import Icon1 from "../../assets/Clinic-Building.svg";
import Icon2 from "../../assets/Inject.svg";
import Icon3 from "../../assets/Doctor_Icon.svg";
import Icon4 from "../../assets/Medicine.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./css/WCU.css";

function WCU() {
  return (
    <>
      <div className="WCU_Main bg-emerald-50 flex flex-auto text-[30px] font-bold pl-0 pt-10 h-[460px]">
        <div className="w-[1180px] mx-auto flex">
          <div className="bg-white rounded-lg mt-[-10px] h-[400px]">
            <LazyLoadImage
              src={Icon}
              alt=""
              className="WCU_Img w-[480px] h-[375px] mt-[15px] rounded-xl"
              effect="blur"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
          <div className="WCU_Title mt-[-20px] ml-[50px]">
            <div className="pt-0">
              <p className="Title text-[30px] text-emerald-400 font-bold leading-[70px]">
                Why choose us?
              </p>
            </div>
            <div className="gap-[80px]">
              <div>
                <p className="WCU_Sub font-semibold text-[17px] text-gray-700 mt-[-10px] leading-[110%] w-[500px]">
                  India's Only institution to have Beneficiary of Medicine and
                  Services (BMS) Certificate
                </p>
                <div className="Container_Main mt-4 gap-10">
                  <div className="Container_WCU flex gap-3 scale-[97%]">
                    <Button className="Button1 bg-white text-[16px] font-medium border-2 border-emerald-400 rounded-md h-32 w-80">
                      <div className="p-0 justify-start">
                        <span className="flex ml-[-15px]">
                          <LazyLoadImage
                            src={Icon1}
                            alt=""
                            className="w-[40px] h-[40px] rounded-lg"
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                          />
                          <h1 className="mt-2 text-[25px] ml-3">
                            Expert Curriculum
                          </h1>
                        </span>
                        <p className="text-[13px] ml-[-15px] mt-2 text-left font-normal text-gray-600">
                          Comprehensive curriculum designed by
                          <br />
                          experienced medical educators
                        </p>
                      </div>
                    </Button>
                    <Button className="Button2 bg-white text-[16px] font-medium border-2 border-emerald-400 rounded-md h-32 w-80">
                      <div className="p-0 justify-start">
                        <span className="flex">
                          <LazyLoadImage
                            src={Icon2}
                            alt=""
                            className="w-[40px] h-[40px] rounded-lg"
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                          />
                          <h1 className="mt-2 text-[25px] ml-3">
                            Practical learning
                          </h1>
                        </span>
                        <p className="text-[13px] mt-2 text-left font-normal text-gray-600">
                          Hands-on clinical training in state-of-the-art
                          <br /> facilities
                        </p>
                      </div>
                    </Button>
                  </div>
                  <div className="Container_WCU mt-3 flex gap-3 scale-[97%]">
                    <Button className="Button3 bg-white text-[16px] font-medium border-2 border-emerald-400 rounded-md h-32 w-80">
                      <div className="p-0 justify-start">
                        <span className="flex ml-[-10px]">
                          <LazyLoadImage
                            src={Icon3}
                            alt=""
                            className="w-[40px] h-[40px] rounded-lg"
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                          />
                          <h1 className="mt-2 text-[25px] ml-3">
                            Personal Mentors
                          </h1>
                        </span>
                        <p className="text-[13px] ml-[-10px] mt-2 text-left font-normal text-gray-600">
                          Personalized support and mentorship from <br />
                          healthcare professionals
                        </p>
                      </div>
                    </Button>
                    <Button className="Button4 bg-white text-[16px] font-medium border-2 border-emerald-400 rounded-md h-32 w-80">
                      <div className="p-0 justify-start">
                        <span className="flex">
                          <LazyLoadImage
                            src={Icon4}
                            alt=""
                            className="w-[40px] h-[40px] ml-3 rounded-lg"
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                          />
                          <h1 className="mt-2 text-[25px] ml-3">
                            Holistic Patient Care
                          </h1>
                        </span>
                        <p className="text-[13px] mt-2 ml-3 text-left font-normal text-gray-600">
                          We emphasize holistic care, combining medical <br />
                          skills, empathy, and ethical decision-making.
                        </p>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WCU;
