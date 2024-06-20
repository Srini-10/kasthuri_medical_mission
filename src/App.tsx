import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

import Nav from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Course from "./pages/Courses.tsx";
import Details from "./pages/Details.tsx";
import Book from "./pages/BookApp.tsx";
import "./App.css";
import Oops from "./assets/Oops.svg";
import Specialist from "./pages/Specialist.tsx";
// import other components here

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation, e.g., data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this to your actual data fetching duration
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
          <div className="loader-container">
            <PuffLoader color="#36D7B7" loading={loading} size={150} />
          </div>
        ) : (
          <>
            <p className="App_Content hidden">
              <img src={Oops} alt="" className="w-[150px] mx-auto mb-0" />
              "This device is not compatible with this website."
            </p>
            <div className="App_Main">
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Specialist" element={<Specialist />} />
                <Route path="/About_Us" element={<AboutUs />} />
                <Route path="/Courses" element={<Course />} />
                <Route path="/Course_Details" element={<Details />} />
                <Route path="/Contact_Us" element={<ContactUs />} />
                <Route path="/Book_Appointment" element={<Book />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
