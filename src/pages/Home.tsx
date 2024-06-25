import React from "react";
import Main from "../components/Home/Main.tsx";
import Service from "../components/Home/Service.tsx";
import About from "../components/Home/About.tsx";
// import Dept from "./Home/Dept.tsx";
import WCU from "../components/Home/WCU.tsx";
// import Faculties from "./Home/Faculties.tsx";
import Works from "../components/Home/Works.tsx";
import Specialist from "../components/Home/Founder.tsx";
import Footer from "../components/Footer.tsx";

function Home() {
  return (
    <>
      <Main />
      <About />
      {/* <Dept /> */}
      <Service />
      <WCU />
      {/* <Faculties /> */}
      <Works />
      <Specialist />
      <Footer />
    </>
  );
}

export default Home;
