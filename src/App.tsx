import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import AboutUs from "./components/AboutUs.tsx";
import ContactUs from "./components/ContactUs.tsx";
import Course from "./components/Courses.tsx";
import Details from "./components/Details.tsx";
import Book from "./components/BookApp.tsx";
import "./App.css";
import Oops from "./assets/Oops.svg";
import SpecialistDetails from "./components/Specialist/SpecialistDetails.tsx";
// import other components here

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p className="App_Content hidden">
          <img src={Oops} alt="" className="w-[150px] mx-auto mb-0" />
          "This device is not compatible with this website."
        </p>
        <div className="App_Main">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Specialist_Details" element={<SpecialistDetails />} />
            <Route path="/About_Us" element={<AboutUs />} />
            <Route path="/Courses" element={<Course />} />
            <Route path="/Course_Details" element={<Details />} />
            <Route path="/Contact_Us" element={<ContactUs />} />
            <Route path="/Book_Appointment" element={<Book />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
