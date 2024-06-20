import React from "react";
import { Link } from "react-router-dom";
import SpecialistDetails from "../components/Specialist/SpecialistDetails.tsx";
import AboutSpecialist from "../components/Specialist/About_Specialist.tsx";

const Specialist = () => {
  return (
    <>
      <SpecialistDetails />
      <AboutSpecialist />
    </>
  );
};

export default Specialist;
