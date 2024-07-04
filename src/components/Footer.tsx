/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./css/Footer.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <>
      <div className="footer-container bottom-0">
        <div className="footer-content">
          <div className="footer-section">
            <h1 className="footer-title">Kasthuri Medical Mission</h1>
            <p className="footer-description">
              To cure sometimes, to relieve often, to comfort always.
            </p>
          </div>
          <div className="footer-links mt-[100px] text-gray-700">
            <ul className="footer-list gap-4">
              <li className="footer-list-item">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/About_Us">About Us</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/Courses">Our Courses</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/Contact_Us">Contact Us</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/Founder">Our Founder</Link>
              </li>
            </ul>
          </div>
          <div className="footer-appointment">
            <h1 className="appointment-title">Appointment</h1>
            <p className="appointment-description">
              Book your appointment with us today!
            </p>
            <Link to="/Book_Appointment" aria-current="page">
              <Button className="appointment-button">Book Appointment</Button>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2024 Kasthuri Medical Mission's. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
