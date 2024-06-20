import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../../assets/kmm.png";
import Tick from "../../assets/Tick.svg";
import "./css/AboutUs.css";

const About = () => {
  return (
    <>
      <div className="About_Main bg-emerald-50 w-[84%] py-[30px] px-[0] flex justify-center gap-[50px] h-auto mt-[0px]">
        <div className="About_Img w-[450px] bg-white rounded-lg">
          <LazyLoadImage
            src={Logo}
            alt=""
            className="About_Image ml-[70px] select-none mt-[5px] rounded-full lazy-load-image"
            effect="blur"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
        <div className="About_Contents w-[500px]">
          <h1 className="About_Title text-[35px] font-bold flex gap-2">
            About <p className="text-emerald-400">Us</p>
          </h1>
          <p className="About_Sub text-[14px]">
            The Kasthuri Medical Mission for public service. Public health to
            promote Medical education. Health science and to educate in regular
            education system for medical students. This is an independent
            degree, diploma and certificate granting mission of tertiary
            education in the field of medical science. The Overall mission is
            issue the teach and conduct medical training classes and educate the
            people on health, nutrition, sanitation and personal hygiene.
          </p>
          <div className="About_Points gap-3 mt-[15px]">
            <span className="flex py-2 gap-3">
              <LazyLoadImage
                className="w-[170px]"
                src={Tick}
                alt=""
                effect="blur"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[5px] font-bold">Mission</h1>
                <p className="text-[12px]">
                  At Kasthuri Medical Mission, our mission is to empower
                  individuals with the knowledge and skills to become
                  compassionate and competent doctors. We are dedicated to
                  fostering the next generation of healthcare leaders.
                </p>
              </div>
            </span>
            <span className="flex py-2 gap-3">
              <LazyLoadImage
                className="w-[120px]"
                src={Tick}
                alt=""
                effect="blur"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div>
                <h1 className="text-[15px] mt-[5px] font-bold">Vision</h1>
                <p className="text-[12px]">
                  To redefine medical education by providing innovative and
                  accessible learning experiences that prepare students for the
                  complexities of modern healthcare.
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
