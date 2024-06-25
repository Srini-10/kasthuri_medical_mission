import React from "react";
import { Button, Link } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./css/Works.css";

function Works() {
  return (
    <>
      <div className="Works_Main text-[30px] font-bold pt-10 h-[570px]">
        <div className="pt-3 w-[50%] mx-auto text-center">
          <p className="Works_Title text-[35px] text-black font-bold leading-[70px]">
            How it <span className="text-emerald-400">Works?</span>
          </p>
          <p className="Works_Sub text-[14px] text-gray-600 font-normal w-[100%] leading-[20px]">
            Follow the below instructions to get your courses on your pocket
          </p>
        </div>
        <div className="Container_Works absolute justify-between ml-[370px] gap-[100px] flex mb-[-30px] mt-[30px]">
          <div className="Container_Design rotate-[30deg] transform scale-y-[-1]">
            <Player
              autoplay
              loop
              src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
              style={{ height: "auto", width: "300px" }}
            />
          </div>
          <div className="Container_Design rotate-[-35deg] mt-[-30px] transform">
            <Player
              autoplay
              loop
              src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
              style={{ height: "auto", width: "300px" }}
            />
          </div>
        </div>
        <div className="Container_Works flex gap-[10px] relative justify-center mx-auto">
          <div className="mt-3 w-[380px] pt-5 flex flex-col items-center rounded-lg">
            <span className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-xl bg-gray-200 text-center p-2">
                01
              </div>
              <h1 className="mt-3">Contact Us</h1>
            </span>
            <p className="text-[15px] mt-3 font-normal text-gray-700 text-center">
              Start by contacting us via telephone to discuss the program and
              your goals.
            </p>
          </div>
          <div className="mt-3 w-[380px] pt-5 flex flex-col items-center rounded-lg">
            <span className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-xl bg-gray-200 text-center p-2">
                02
              </div>
              <h1 className="mt-3 Works_SA">Schedule an Appointment</h1>
            </span>
            <p className="text-[15px] mt-3 font-normal text-gray-700 text-center">
              Request an appointment to visit us in person and learn more about
              our offerings.
            </p>
          </div>
          <div className="mt-3 w-[400px] pt-5 flex flex-col items-center rounded-lg">
            <span className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-xl bg-gray-200 text-center p-2">
                03
              </div>
              <h1 className="mt-3">Registration</h1>
            </span>
            <p className="text-[15px] mt-3 font-normal text-gray-700 text-center">
              Complete your registration at our office to enroll in the program
              and begin your journey towards a career in medicine.
            </p>
          </div>
        </div>
        <div className="flex gap-[10px] relative mt-16 justify-center mx-auto">
          <Link href="/Book_Appointment">
            <Button className="text-[20px] bg-emerald-400 py-3 px-4 text-black rounded-lg font-medium leading-[70px]">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Works;
