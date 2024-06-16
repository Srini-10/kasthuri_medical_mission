import React from "react";
import Tick from "../../assets/Tick.svg";
import Footer from "../Footer.tsx";
import { Button, Link } from "@nextui-org/react";
import "./css/Course.css";

const Course = () => {
  return (
    <>
      <div>
        <div className="Course_Main mt-[60px] pt-[20px] bg-emerald-50 h-[600px]">
          <div className="Course_Contents ml-20">
            <h1 className="Course_Title text-[40px] flex mt-8 gap-2 font-bold">
              Provide The Best
              <p className="text-emerald-400">Medical Courses</p>
            </h1>
            <p className="Course_Sub text-[15px] mt-0 text-start">
              Empowering Future Healthcare Leaders with Excellence in Education.
            </p>
          </div>
          <div className="Course_Containers w-[88%] mx-auto grid-cols-3 scale-[90%] mb-24 grid gap-4 justify-center h-[800px] mt-0">
            <div className="Card rounded-xl p-4 hover:shadow-xl w-[400px] h-[412px] bg-white">
              <div className="flex gap-2 justify-start">
                <img
                  className="w-[70px] h-[70px]"
                  src={Tick}
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <h1 className="text-[27px] mt-[18px] font-bold">
                  Excellence in Care
                </h1>
              </div>
              <p className="text-[15px] mt-4 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis tenetur nam voluptates reprehenderit rerum, illo
              </p>
              <div className="mt-[20px] bg-slate-100 p-[12px] rounded-md">
                <li className="list-none flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
                <li className="list-none mt-2 flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
                <li className="list-none mt-2 flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
              </div>
              {/* <Link href="/Course_Details"> */}
                <Button className="bg-transparency hover:bg-emerald-400 text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
                  Know More
                </Button>
              {/* </Link> */}
            </div>
            <div className="Card rounded-xl p-4 hover:shadow-xl w-[400px] h-[412px] bg-white">
              <div className="flex gap-2 justify-start">
                <img
                  className="w-[70px] h-[70px]"
                  src={Tick}
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <h1 className="text-[27px] mt-[18px] font-bold">
                  Excellence in Care
                </h1>
              </div>
              <p className="text-[15px] mt-4 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis tenetur nam voluptates reprehenderit rerum, illo
              </p>
              <div className="mt-[20px] bg-slate-100 p-[12px] rounded-md">
                <li className="list-none flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
                <li className="list-none mt-2 flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
                <li className="list-none mt-2 flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
              </div>
              {/* <Link href="/Course_Details"> */}
                <Button className="bg-transparency hover:bg-emerald-400 text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
                  Know More
                </Button>
              {/* </Link> */}
            </div>
            <div className="Card rounded-xl p-4 hover:shadow-xl w-[400px] h-[412px] bg-white">
              <div className="flex gap-2 justify-start">
                <img
                  className="w-[70px] h-[70px]"
                  src={Tick}
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <h1 className="text-[27px] mt-[18px] font-bold">
                  Excellence in Care
                </h1>
              </div>
              <p className="text-[15px] mt-4 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis tenetur nam voluptates reprehenderit rerum, illo
              </p>
              <div className="mt-[20px] bg-slate-100 p-[12px] rounded-md">
                <li className="list-none flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
                <li className="list-none mt-2 flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
                <li className="list-none mt-2 flex gap-1">
                  <img
                    className="w-[17px] h-auto"
                    src={Tick}
                    alt=""
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <p>hello</p>
                </li>
              </div>
              {/* <Link href="/Course_Details"> */}
                <Button className="bg-transparency hover:bg-emerald-400 text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5">
                  Know More
                </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="Course_Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Course;
