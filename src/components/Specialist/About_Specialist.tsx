import React from "react";
import { Link } from "react-router-dom";
import "./css/SpecialistDetails.css";
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
import "./css/About_Specialist.css";
import { Player } from "@lottiefiles/react-lottie-player";
import LazyLoad from "react-lazyload";

const AboutSpecialist = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    React.useState<ModalProps["scrollBehavior"]>("inside");

  return (
    <>
      <div
        id="About_Me"
        className="SD_MainAS flex bg-emerald-50 justify-between gap-10 pt-[10px]"
      >
        <div className="Container_Design absolute ml-[36%] mt-20 rotate-[50deg] transform scale-y-[-1]">
          <Player
            autoplay
            loop
            src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
            style={{ height: "auto", width: "300px" }}
          />
        </div>
        <div className="SD_Contents mt-24 ml-32">
          <h1 className="SD_About text-[25px] text-emerald-400">About Me</h1>
          <h1 className="SD_Name text-black font-bold text-[60px]">
            <p className="">Major</p>Dr.P.A.Subramanian{" "}
            <p className="text-gray-400">AMC</p>
          </h1>
          <p>M.D.ARCGP, (London), Ph.D. (USA)</p>
          <p className="SD_Sub mt-9 text-[14px] w-[90%]">
            All BMS and CMP qualified persons do not practice surgery,
            Obstetrics and Radiation therapy in any form.
          </p>
          <div className="SD_Points mt-[25px] p-2 w-[70%] grid grid-cols-2 rounded-md">
            <li className="list-none m-1 flex gap-2">
              <LazyLoadImage
                effect="blur"
                className="w-[23px] h-auto"
                src={Tick}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <p>About Topics</p>
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
              <p>About Topics</p>
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
              <p>About Topics</p>
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
              <p>About Topics</p>
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
              <p>About Topics</p>
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
              <p>About Topics</p>
            </li>
          </div>
          <p className="SD_Add mt-6 bg-emerald-400 rounded-md p-3 text-[14px] w-[90%]">
            <b className="text-white mr-[2px]">*</b>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            voluptates esse reiciendis fugiat? Ea veritatis fuga tempora nemo?
            Eos perspiciatis vitae nihil exercitationem cum maiores hic
            necessitatibus optio eius dolor.
          </p>
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
              className="flex justify-center mx-auto min-h-[90vh] min-w-[85%]  my-auto items-center"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col text-[25px] gap-1">
                      My Achievements
                    </ModalHeader>
                    <ModalBody className=" mx-3 gap-10">
                      <div className="flex gap-4">
                        <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                          <LazyLoadImage
                            src={Record1}
                            alt=""
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                            className="Img_Rec bg-black rounded-xl"
                          />
                          <p className="text-[14px] text-justify font-medium mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                        </div>
                        <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                          <LazyLoadImage
                            src={Record2}
                            alt=""
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                            className="Img_Rec bg-black rounded-xl"
                          />
                          <p className="text-[14px] text-justify font-medium mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                        </div>
                        <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                          <LazyLoadImage
                            src={Record3}
                            alt=""
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                            className="Img_Rec bg-black rounded-xl"
                          />
                          <p className="text-[14px] text-justify font-medium mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="Img_Model_Container flex flex-col h-[100%] bg-gray-100 p-3 rounded-xl gap-2">
                          <LazyLoadImage
                            src={Record4}
                            alt=""
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                            className="Img_Rec bg-black rounded-xl"
                          />
                          <p className="text-[14px] text-justify font-medium mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                        </div>
                        <div className="Img_Model_Container flex flex-col h-[100%] mt-[-150px] bg-gray-100 p-3 rounded-xl gap-2">
                          <LazyLoadImage
                            src={Record5}
                            alt=""
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                            className="Img_Rec bg-black rounded-xl"
                          />
                          <p className="text-[14px] text-justify font-medium mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                        </div>
                        <div className="Img_Model_Container flex flex-col h-[100%] mt-[-150px] bg-gray-100 p-3 rounded-xl gap-2">
                          <LazyLoadImage
                            src={Record6}
                            alt=""
                            effect="blur"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                            className="Img_Rec bg-black rounded-xl"
                          />
                          <p className="text-[14px] text-justify font-medium mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className="Specialist_Img w-[90%] grid grid-cols-2 gap-3 mt-[50px] mr-10 -ml-10 pt-[80px] h-[92vh] overflow-hidden">
          <LazyLoad effect="blur">
            <button
              onClick={onOpen}
              className="Image_Records w-[100%] overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0"
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
            <button
              onClick={onOpen}
              className="Image_Records w-[100%] overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0"
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
          </LazyLoad>
          <LazyLoad effect="blur">
            <button
              onClick={onOpen}
              className="Image_Records w-[100%] overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0"
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
          </LazyLoad>
          <LazyLoad effect="blur">
            <button
              onClick={onOpen}
              className="Image_Records w-[100%] overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0"
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
          </LazyLoad>
          <LazyLoad effect="blur">
            <button
              onClick={onOpen}
              className="Image_Records w-[100%] overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0"
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
          </LazyLoad>

          <LazyLoad effect="blur">
            <button
              onClick={onOpen}
              className="Image_Records w-[100%] overflow-hidden max-h-[180px] min-h-[180px] shadow-md border-1 brightness-[85%] border-gray-300 rounded-md -mt-0"
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
          </LazyLoad>
        </div>
      </div>
    </>
  );
};

export default AboutSpecialist;
