import React from "react";
import Main from "./Home/Main.tsx";
import Service from "./Home/Service.tsx";
import About from "./Home/About.tsx";
// import Dept from "./Home/Dept.tsx";
import WCU from "./Home/WCU.tsx";
// import Faculties from "./Home/Faculties.tsx";
import Works from "./Home/Works.tsx";
import Specialist from "./Home/Specialist.tsx";
import Footer from "./Footer.tsx";

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
