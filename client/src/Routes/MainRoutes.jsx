import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { AboutRoute } from "./AboutRoute";
import { AcademicsRoute } from "./AcademicsRoute";
import { CDOE_ProgrammsRoute } from "./CDOE_ProgrammsRoute";
import { AdmissionsRoute } from "./AdmissionsRoute";
import { ContactRoute } from "./ContactRoute";



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {AboutRoute}
      {AcademicsRoute}
      {CDOE_ProgrammsRoute}
      {AdmissionsRoute}
      {ContactRoute}

    </Routes>
  );
};

export default MainRoutes;
