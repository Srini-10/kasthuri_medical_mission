/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Main from "../components/Home/Main.tsx";
import Service from "../components/Home/Service.tsx";
import About from "../components/Home/About.tsx";
import WCU from "../components/Home/WCU.tsx";
import Works from "../components/Home/Works.tsx";
import Specialist from "../components/Home/Founder.tsx";
import Footer from "../components/Footer.tsx";

import Notify from "./NotificationPopup/Notify.tsx";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  return (
    <>
      <Main />

      {/* Popup Information Alert Box */}
      {/* <Notify /> */}

      <About />
      <Service />
      <WCU />
      <Works />
      <Specialist />
      <Footer />
    </>
  );
}

export default Home;
