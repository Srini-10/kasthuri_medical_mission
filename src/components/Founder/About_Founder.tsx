/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import "./css/Founder_Details.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure,
} from "@nextui-org/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Tick from "../../assets/Tick.svg";
import Record1 from "../../assets/Records/Record1.jpg";
import Record2 from "../../assets/Records/Record2.jpg";
import Record3 from "../../assets/Records/Record3.jpg";
import Record4 from "../../assets/Records/Record4.jpg";
import Record5 from "../../assets/Records/Record5.jpg";
import Record6 from "../../assets/Records/Record6.jpg";
import "./css/About_Founder.css";
import { Player } from "@lottiefiles/react-lottie-player";
import LazyLoad from "react-lazyload";

const AboutFounder = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    React.useState<ModalProps["scrollBehavior"]>("inside");

  return (
    <>
      <div
        id="About_Me"
        className="About_Me w-full max-h-[800px] bg-emerald-50 pt-[10px]"
      >
        <div className="SD_MainAS w-[1260px] gap-10 mx-auto justify-center flex">
          <div className="Container_Design absolute ml-[-150px] mt-20 rotate-[50deg] transform scale-y-[-1]">
            <Player
              autoplay
              loop
              src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
              style={{ height: "auto", width: "300px" }}
            />
          </div>
          <div className="SD_Contents mt-24 ml-0">
            <h1 className="SD_About text-[25px] text-emerald-400">About</h1>
            <p className="SD_Name text-black flex font-bold text-[55px]">
              Major
            </p>
            <h1 className="SD_Name SD_Name_D text-black flex gap-3 font-bold text-[50px]">
              Dr.P.A.Subramanian{" "}
              <p className="SD_Name_AMC text-gray-400">A.M.C.,</p>
            </h1>
            <p>MRCGP (London), Ph.D., (USA)</p>
            <p className="SD_Sub mt-10 text-[14px] max-w-[95%]">
              Retirement marks the end of a long and fulfilling career in
              medicine, but it also opens the door
              <br className="Breaks" /> to new opportunities for impactful
              contributions. Establishing a low-cost medical college can be an
              incredibly rewarding endeavor for a retired doctor, driven by
              several compelling reasons:
            </p>
            <div className="SD_Points mt-[10px] p-2 w-[100%] grid grid-cols-2 rounded-md">
              <li className="list-none m-1 flex gap-2">
                <LazyLoadImage
                  effect="blur"
                  className="w-[23px] h-auto"
                  src={Tick}
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <p className="text-[13px]">⁠Discovered Medicine for diabetes</p>
              </li>
              <li className="list-none m-1 flex gap-2">
                <LazyLoadImage
                  effect="blur"
                  className="w-[23px] h-auto"
                  src={Tick}
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <p className="text-[13px]">
                  Appreciation Ceremony in US University
                </p>
              </li>
              <li className="list-none m-1 flex gap-2">
                <LazyLoadImage
                  effect="blur"
                  className="w-[23px] h-auto"
                  src={Tick}
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <p className="text-[13px]">
                  Initiated Free Medical Camp for poor people
                </p>
              </li>
            </div>
            <p className="SD_Add mt-6 bg-emerald-400 rounded-md p-3 text-[14px] w-[95%]">
              <b>Major Dr. P.A.Subramanian A.M.C.,</b> was part of{" "}
              <b>Bharath Nirman</b> and served as an advisor of late former
              President of India, <b>Indira Gandhi,</b> as well as to Finance
              Minister <b>Bahuguna Ji.</b>
            </p>
            <Button
              onClick={onOpen}
              className="Achievements rounded-md mt-8 w-[90%] mx-auto font-medium border-1 border-emerald-400 bg-transparent hidden"
            >
              My Achievements
            </Button>
            <button
              onClick={onOpen}
              className="ClickHereM cursor-pointer hidden absolute mt-[-92px] ml-[115px] overflow-hidden max-w-[210px] max-h-[180px]"
            >
              <iframe
                onClick={onOpen}
                className="ClickHere_Hand cursor-pointer"
                src="https://lottie.host/embed/dffdabe2-2da1-4e45-9cb7-8d1ed171c2a9/v7lywKwXyk.json"
              ></iframe>
              <h1 className="ClickHere absolute mt-[-45px] ml-[120px] cursor-pointer text-gray-800">
                Click Here!
              </h1>
            </button>

            {/* <h1 className="mt-24 text-[20px] font-medium w-52 flex gap-2 text-emerald-400 ml-[70%]">
            Click Images to Know more{" "}
            <p className="text-[50px] mt-[-13px]">👉</p>
          </h1> */}
          </div>

          <div className="flex flex-col gap-2">
            <div className="ModalContainer">
              {" "}
              {/* Centering container */}
              <Modal
                isOpen={isOpen}
                size="5xl"
                onOpenChange={onOpenChange}
                scrollBehavior={scrollBehavior}
                className="PopupContainer flex justify-center mx-auto min-h-[90vh] min-w-[1260px] my-auto items-center"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col text-[25px] gap-1">
                        My Achievements
                      </ModalHeader>
                      <ModalBody className="popup-body mx-3 gap-10">
                        <div className="Popup1_Founder">
                          <div className="Popup_Container flex gap-4">
                            <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record1}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Appreciation Ceremony <br />
                                <p>
                                  Major Dr.P.A.Subramanian AMC had been honoured
                                  in america round table conference for the best
                                  doctor of medicine{" "}
                                </p>
                              </p>
                            </div>
                            <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record2}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC initiated India's
                                First Free medical consulting for poor people in
                                the specialization of Dental medicine.
                              </p>
                            </div>
                            <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record3}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC had also been a
                                part of Political gatherings int National Fort
                                gatherings under the guidance of Late former
                                Chief minister of Tamilnadu Thiru Karunanidhi
                                (Kalaignar )
                              </p>
                            </div>
                          </div>
                          <div className="Popup_Container flex gap-4">
                            <div className="Img_Model_Container Img_Model_Container2 flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record4}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC deeply committed to
                                social and political engagement, tirelessly
                                advocates for the betterment of society. His
                                participation in various gatherings exemplifies
                                a steadfast dedication to uplifting the
                                community, ensuring that the voices of the
                                people are heard and their needs addressed.
                              </p>
                            </div>
                            <div className="Img_Model_Container Img_Model_Container2 flex flex-col h-[100%] mt-[-150px] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record5}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                In addition to his unwavering commitment to
                                social and political engagement, Major
                                Dr.P.A.Subramanian AMC has distinguished himself
                                as a trusted advisor to numerous politicians and
                                high-level individuals. His extensive knowledge
                                and insight have been instrumental in shaping
                                policy decisions and guiding leaders
                              </p>
                            </div>
                            <div className="Img_Model_Container Img_Model_Container2 flex flex-col h-[100%] mt-[-150px] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record6}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC had received the
                                official letter from late Ms.Indira gandhi for
                                Bharath Nirman as an All-India Organization to
                                promote nd take up constructive Programme in all
                                walks of life
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="Popup2_Founder hidden">
                          <div className="Popup_Container flex gap-4">
                            <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record1}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Appreciation Ceremony <br />
                                <p>
                                  Major Dr.P.A.Subramanian AMC had been honoured
                                  in america round table conference for the best
                                  doctor of medicine{" "}
                                </p>
                              </p>
                            </div>
                            <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record2}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC initiated India's
                                First Free medical consulting for poor people in
                                the specialization of Dental medicine.
                              </p>
                            </div>
                          </div>
                          <div className="Popup_Container mt-8 flex gap-4">
                            <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record3}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC had also been a
                                part of Political gatherings int National Fort
                                gatherings under the guidance of Late former
                                Chief minister of Tamilnadu Thiru Karunanidhi
                                (Kalaignar )
                              </p>
                            </div>
                            <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record4}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC deeply committed to
                                social and political engagement, tirelessly
                                advocates for the betterment of society. His
                                participation in various gatherings exemplifies
                                a steadfast dedication to uplifting the
                                community, ensuring that the voices of the
                                people are heard and their needs addressed.
                              </p>
                            </div>
                          </div>
                          <div className="Popup_Container mt-44 flex gap-4">
                            <div className="Img_Model_Container flex flex-col h-[100%] mt-[-150px] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record5}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                In addition to his unwavering commitment to
                                social and political engagement, Major
                                Dr.P.A.Subramanian AMC has distinguished himself
                                as a trusted advisor to numerous politicians and
                                high-level individuals. His extensive knowledge
                                and insight have been instrumental in shaping
                                policy decisions and guiding leaders
                              </p>
                            </div>
                            <div className="Img_Model_Container flex flex-col h-[100%] mt-[-150px] bg-gray-100 p-3 rounded-xl gap-2">
                              <LazyLoadImage
                                src={Record6}
                                alt=""
                                effect="blur"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                className="Img_Rec grayscale bg-black rounded-xl"
                              />
                              <p className="text-[14px] text-justify font-medium mt-2">
                                Major Dr.P.A.Subramanian AMC had received the
                                official letter from late Ms.Indira gandhi for
                                Bharath Nirman as an All-India Organization to
                                promote nd take up constructive Programme in all
                                walks of life
                              </p>
                            </div>
                          </div>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onClick={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>

          <div className="Specialist_Img Specialist_ImgF w-[100%] grid grid-cols-2 gap-3 mt-[50px] mr-1 -ml-10 pt-[80px] h-[720px] overflow-hidden">
            <LazyLoad effect="blur">
              <button
                onClick={onOpen}
                className="Image_Records w-full overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0 relative"
              >
                <LazyLoadImage
                  src={Record1}
                  alt=""
                  effect="blur"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                  className="Img_Rec bg-black"
                />
              </button>
            </LazyLoad>
            <LazyLoad effect="blur">
              <button onClick={onOpen} className="relative">
                <button
                  onClick={onOpen}
                  className="Image_Records w-full overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0 relative"
                >
                  <LazyLoadImage
                    src={Record2}
                    alt=""
                    effect="blur"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                    className="Img_Rec bg-black"
                  />
                </button>
              </button>
            </LazyLoad>
            <LazyLoad effect="blur">
              <button onClick={onOpen} className="relative">
                <button
                  onClick={onOpen}
                  className="Image_Records w-full overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-20 relative"
                >
                  <LazyLoadImage
                    src={Record3}
                    alt=""
                    effect="blur"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                    className="Img_Rec bg-black"
                  />
                </button>
              </button>
            </LazyLoad>
            <LazyLoad effect="blur">
              <button onClick={onOpen} className="relative">
                <button
                  onClick={onOpen}
                  className="Image_Records w-full overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-20 relative"
                >
                  <LazyLoadImage
                    src={Record4}
                    alt=""
                    effect="blur"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                    className="Img_Rec bg-black"
                  />
                </button>
              </button>
            </LazyLoad>
            <LazyLoad effect="blur">
              <button onClick={onOpen} className="relative">
                <button
                  onClick={onOpen}
                  className="Image_Records w-full overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-20 relative"
                >
                  <LazyLoadImage
                    src={Record5}
                    alt=""
                    effect="blur"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                    className="Img_Rec bg-black"
                  />
                </button>
              </button>
            </LazyLoad>
            <LazyLoad effect="blur">
              <div className="relative" onClick={onOpen}>
                <button
                  onClick={onOpen}
                  className="Image_Records w-full overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-20 relative"
                >
                  <LazyLoadImage
                    src={Record6}
                    alt=""
                    effect="blur"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                    className="Img_Rec bg-black"
                  />
                </button>
                <button
                  onClick={onOpen}
                  className="absolute mt-[-172px] z-50 ml-0 max-w-[100%] max-h-[180px]"
                >
                  <iframe
                    onClick={onOpen}
                    className=" cursor-pointer"
                    src="https://lottie.host/embed/dffdabe2-2da1-4e45-9cb7-8d1ed171c2a9/v7lywKwXyk.json"
                  ></iframe>
                  <h1 className="ClickHere absolute mt-[-50px] ml-[120px] cursor-pointer text-gray-800">
                    Click Here!
                  </h1>
                </button>
              </div>
            </LazyLoad>
            {/* <div className="absolute mt-[440px] ml-[315px]">
            <iframe src="https://lottie.host/embed/dffdabe2-2da1-4e45-9cb7-8d1ed171c2a9/v7lywKwXyk.json"></iframe>
            <h1 className="ClickHere -mt-10 ml-32 text-gray-800">
              Click Here!
            </h1>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFounder;
