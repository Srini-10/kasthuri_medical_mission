import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../../assets/kmm.png";
import Tick from "../../assets/Tick.svg";
import "./css/AboutUs.css";
import Side from "./Side.tsx";

const About = () => {
  return (
    <>
      <div className="About_MainA max-w-[82%] py-[0px] px-[0] flex justify-center gap-[0px] h-auto mt-[0px]">
        <div className="About_Sub_MainA flex bg-emerald-50 min-w-[118.5%] gap-[44px] pl-[22%] pr-[50px] pt-[20px] pb-[30px]">
          <div className="About_ImgA min-w-[400px] justify-center mx-auto bg-white rounded-lg">
            <LazyLoadImage
              src={Logo}
              alt=""
              className="About_ImageA w-[100%] select-none mt-[-5px] ml-[1px] rounded-full lazy-load-image"
              effect="blur"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
          <div className="About_Img_2A hidden">
            <LazyLoadImage
              src={Logo}
              alt=""
              className="About_ImageA w-[100%] select-none mt-[-5px] ml-[1px] rounded-full lazy-load-image"
              effect="blur"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
          <div className="About_ContentsA">
            <h1 className="About_TitleA text-[35px] font-bold flex gap-2">
              About <p className="text-emerald-400">Us</p>
            </h1>
            <p className="About_SubA text-[14px]">
              The Kasthuri Medical Mission for public service. Public health to
              promote Medical education. Health science and to educate in
              regular education system for medical students. This is an
              independent degree, diploma and certificate granting mission of
              tertiary education in the field of medical science. The Overall
              mission is issue the teach and conduct medical training classes
              and educate the people on health, nutrition, sanitation and
              personal hygiene.
            </p>
            <div className="About_PointsA gap-3 mt-[25px]">
              <span className="flex py-2 gap-3">
                <LazyLoadImage
                  className="About_Points_ImgA max-w-[50px]"
                  src={Tick}
                  alt=""
                  effect="blur"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="About_Points_TxtA">
                  <h1 className="text-[15px] mt-[5px] font-bold">Vision</h1>
                  <p className="text-[12px]">
                    To redefine medical education by providing innovative and
                    accessible learning experiences that prepare students for
                    the complexities of modern healthcare.
                  </p>
                </div>
              </span>
              <span className="flex py-2 gap-3">
                <LazyLoadImage
                  className="About_Points_ImgA max-w-[50px]"
                  src={Tick}
                  alt=""
                  effect="blur"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="About_Points_TxtA">
                  <h1 className="text-[15px] mt-[5px] font-bold">Mission</h1>
                  <p className="text-[12px]">
                    At Kasthuri Medical Mission, our mission is to empower
                    individuals with the knowledge and skills to become
                    compassionate and competent doctors. We are dedicated to
                    fostering the next generation of healthcare leaders.
                  </p>
                </div>
              </span>
              <div className="Points-Separator">
                <div className="flex Point-Separator-Cont">
                  <span className="flex py-2 gap-3">
                    <LazyLoadImage
                      className="About_Points_ImgA max-w-[50px]"
                      src={Tick}
                      alt=""
                      effect="blur"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="About_Points_TxtA">
                      <h1 className="text-[15px] mt-[5px] font-bold">
                        Our Moto
                      </h1>
                      <p className="text-[12px] w-[235px]">
                        Knowledge for Medicine of Humanity.
                      </p>
                    </div>
                  </span>
                  <span className="flex py-2 gap-3">
                    <LazyLoadImage
                      className="About_Points_ImgA max-w-[50px]"
                      src={Tick}
                      alt=""
                      effect="blur"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="About_Points_TxtA">
                      <h1 className="text-[15px] mt-[5px] font-bold">
                        Quality
                      </h1>
                      <p className="text-[12px]">
                        To give Purity and Perfection of Rain Drops in Medical
                        Education.
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Side_AboutA min-w-[300px] bg-white border-gray-100 border-l-1 border-b-1">
          <Side />
        </div>
      </div>
    </>
  );
};

export default About;
