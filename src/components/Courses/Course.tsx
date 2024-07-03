import React, { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Tick from "../../assets/Tick.svg";
import Footer from "../Footer.tsx";
import { Button } from "@nextui-org/react";
import "./css/Course.css";

const Course = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isNewPopupVisible, setIsNewPopupVisible] = useState(false); // New state for the second popup
  const [selectedCourse, setSelectedCourse] = useState(null);
  const popupRef = useRef(null);

  const togglePopup = (course) => {
    setSelectedCourse(course);
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleNewPopup = () => {
    setIsNewPopupVisible(!isNewPopupVisible);
  };
  // Toggle no-scroll class on body element when popups are visible
  useEffect(() => {
    if (isPopupVisible || isNewPopupVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isPopupVisible, isNewPopupVisible]);
  // Close the popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
        setIsNewPopupVisible(false); // Also handle the new popup
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const courses = [
    {
      title: "BMS & CMP",
      description:
        "Beneficiary of Medicine and Services (BMS) & Characterized Medicine Services (CMP)",
      details: ["2 Years Duration", "4 Semesters", "12 Subjects"],
      semesters: [
        // Semester1
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester2
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester3
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester4
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester5
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester6
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester7
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester8
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester9
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester10
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester11
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester12
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester13
        ["Hello World", "Hello World", "Hello World", "Hello World"],
      ],
    },
    {
      title: "DM & S",
      description: "Diploma of Medicine and Services (DM & S)",
      details: ["4 Years Duration", "8 Semesters", "24 Subjects"],
      semesters: [
        // Semester1
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester2
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester3
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester4
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester5
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester6
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester7
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester8
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester9
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester10
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester11
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester12
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester13
        ["Hello World", "Hello World", "Hello World", "Hello World"],
      ],
    },
    {
      title: "BGMS",
      description: "Bachelor of General Medicine and Surgery (BGMS)",
      details: ["6.5 Years Duration", "13 Semesters", "39 Subjects"],
      semesters: [
        // Semester1
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester2
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester3
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester4
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester5
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester6
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester7
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester8
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester9
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester10
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester11
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester12
        ["Hello World", "Hello World", "Hello World", "Hello World"],
        // Semester13
        ["Hello World", "Hello World", "Hello World", "Hello World"],
      ],
    },
  ];

  return (
    <>
      <div>
        <div className="Optional_Course_Main Course_Main mt-[60px] pt-[20px] bg-emerald-50 h-[75vh]">
          <div className="Course_Contents ml-20">
            <h1 className="Course_Title text-[40px] flex mt-8 gap-2 font-bold">
              Provide The Best
              <p className="text-emerald-400">Medical Courses</p>
            </h1>
            <p className="Course_Sub text-[15px] mt-0 text-start">
              Empowering Future Healthcare Leaders with Excellence in Education.
            </p>
          </div>
          <div className="Course_Containers max-w-[1250px] mx-auto grid-cols-3 scale-[90%] mb-24 grid gap-4 justify-center mt-0">
            {courses.map((course, index) => (
              <div
                key={index}
                className="Optional_Card Card rounded-xl p-4 hover:shadow-xl w-[400px] h-[412px] bg-white"
              >
                <div className="flex gap-2 justify-start">
                  <LazyLoadImage
                    className="w-[70px] h-[70px]"
                    src={Tick}
                    alt=""
                    effect="blur"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                  <h1 className="text-[27px] mt-[18px] font-bold">
                    {course.title}
                  </h1>
                </div>
                <p className="text-[15px] mt-4 text-start">
                  {course.description}
                </p>
                <div className="mt-[20px] bg-slate-100 p-[12px] rounded-md">
                  {course.details.map((detail, idx) => (
                    <li key={idx} className="list-none flex gap-1 mt-2">
                      <LazyLoadImage
                        className="w-[17px] h-auto"
                        src={Tick}
                        alt=""
                        effect="blur"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <p>{detail}</p>
                    </li>
                  ))}
                </div>
                <Button
                  className="Optional_Button bg-transparency hover:bg-emerald-400 text-[16px] font-medium border-2 border-emerald-400 rounded-md mt-4 pt-2 pb-2 pl-5 pr-5"
                  onClick={() => togglePopup(course)}
                >
                  Know More
                </Button>
              </div>
            ))}
          </div>
        </div>
        {isPopupVisible && (
          <div
            className="popup-overlay"
            onClick={() => setIsPopupVisible(false)}
          >
            <div className="popup-container bg-emerald-50" ref={popupRef}>
              <div className="popup-content">
                <div className="popup-header">
                  <h1 className="popup-title text-emerald-400">
                    {selectedCourse.title}
                  </h1>
                  <button
                    className="popup-close"
                    onClick={() => setIsPopupVisible(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="popup-body">
                  <p className="font-medium text-[17px]">
                    {selectedCourse.description}
                  </p>
                  <ul className="ml-6 text-gray-600 list-disc">
                    {selectedCourse.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <h1 className="mt-10 font-bold text-[30px] text-emerald-400">
                    Subjects
                  </h1>
                  <div className="grid grid-cols-2 mt-3 gap-4">
                    {selectedCourse.semesters.map((semester, index) => (
                      <div className="popup-subjects ml-2 mt-2" key={index}>
                        <h1 className="font-bold text-[16px]">
                          Semester {index + 1}
                        </h1>
                        <p className="font-medium ml-3 text-gray-500">
                          {semester.join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="popup-footer">
                  <Button
                    onClick={() => togglePopup(null)}
                    className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-md"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isNewPopupVisible && (
          <div
            className="popup-overlay"
            onClick={() => setIsNewPopupVisible(false)}
          >
            <div className="popup-container bg-emerald-50" ref={popupRef}>
              <div className="popup-content">
                <div className="popup-header">
                  <h1 className="popup-title flex gap-2 text-emerald-400">
                    Our Curriculum{" "}
                    <p className="text-gray-500 flex gap-0.5">
                      <p className="text-black">(</p>Subject wise
                      <p className="text-black">)</p>
                    </p>
                  </h1>
                  {/* <button
                    className="popup-close"
                    onClick={() => setIsNewPopupVisible(false)}
                  >
                    &times;
                  </button> */}
                </div>
                <div className="popup-body">
                  <p className="font-semibold mt-10 text-[17px]">
                    Pre-Clinical Subjects of Phase I
                  </p>
                  <ul className="ml-6 text-gray-600 list-disc">
                    <li>Human Anatomy</li>
                    <li>Human Physiology including Bio-Physics</li>
                    <li>Biochemistry</li>
                    <li>Introduction to Humanities and Community Medicine</li>
                  </ul>
                  <p className="font-semibold mt-4 text-[17px]">
                    Para-Clinical Subjects of Phase I
                  </p>
                  <ul className="ml-6 text-gray-600 list-disc">
                    <li>Pathology</li>
                    <li>Microbiology</li>
                    <li>Pharmacology</li>
                    <li>Forensic Medicine including Toxicology</li>
                    <li>Community Medicine</li>
                  </ul>
                  <p className="font-semibold mt-4 text-[17px]">
                    Clinical Subjects of Phase II Phase III
                  </p>
                  <div className="Popup_Grid_Points grid">
                    <ul className="Popup_Grid_Ul ml-6 text-gray-600 mt-2 list-disc">
                      <p className="font-medium text-emerald-400 ml-[-15px] text-[17px]">
                        1. Medicine and it's allied specialties
                      </p>
                      <li>Medicine</li>
                      <li>Pediatrics</li>
                      <li>Psychiatry</li>
                      <li>Dermatology and Sexually Transmitted Diseases</li>
                      <li>Tuberculosis and Respiratory Diseases</li>
                    </ul>
                    <ul className="ml-6 text-gray-600 mt-2 list-disc">
                      <p className="font-medium text-emerald-400 ml-[-15px] text-[17px]">
                        1. Medicine and it's allied specialties
                      </p>
                      <li>Medicine</li>
                      <li>Pediatrics</li>
                      <li>Psychiatry</li>
                      <li>Dermatology and Sexually Transmitted Diseases</li>
                      <li>Tuberculosis and Respiratory Diseases</li>
                    </ul>
                  </div>
                </div>
                <div className="popup-footer popup-footer2">
                  <Button
                    onClick={() => setIsNewPopupVisible(false)}
                    className="popup_footer2_Button bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-md"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="Optional_Curriculum_Button flex justify-center pb-10 min-w-[100%] bg-emerald-50 mt-[-540]">
          <Button
            className="bg-emerald-400 relative hover:bg-emerald-500 text-black font-medium px-4 py-2 rounded-md"
            onClick={toggleNewPopup}
          >
            Know more about our Curriculum
          </Button>
        </div>
        <div className="Course_Footer mt-2 z-50">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Course;
