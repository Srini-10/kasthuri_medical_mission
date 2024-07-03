import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import DisableZoom from "./DisableZoom.tsx";

import Nav from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Course from "./pages/Courses.tsx";
import Book from "./pages/BookApp.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Founders from "./pages/Founders.tsx";
import "./App.css";
import NotSupportedPage from "./pages/NotSupportedScreen/NotSupportedPage.tsx";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate data fetching delay

    // Clean up timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="App">
      <div className="Not_Supported_Screen_Alert hidden">
        {/* Browser Zoom Disabling */}
        <DisableZoom />
        {/* Not Supported Screen Ratios and Media Queries */}
        <NotSupportedPage />
      </div>
      <div className="App_Main">
        <Nav />
        {loading ? (
          <div className="loader-container text-emerald-400">
            <Spinner id="Spinner" color="default" />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Founder" element={<Founders />} />
            <Route path="/About_Us" element={<AboutUs />} />
            <Route path="/Courses" element={<Course />} />
            <Route path="/Contact_Us" element={<ContactUs />} />
            <Route path="/Book_Appointment" element={<Book />} />
            {/* Route for handling unknown paths */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
