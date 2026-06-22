import React from "react";
import { Route } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import AboutMIT from "../PageContent/About/About_MIT";
import Leadership from "../PageContent/About/Leadership";
import LeadershipMsg from "../PageContent/About/LeadershipMsg";
import UniversityStatute from "../PageContent/About/UniversityStatute";
import Governance from "../PageContent/About/Governance";




export const AboutRoute = (
  <Route path="aboutus" element={<AboutUs />}>
    <Route index element={<AboutMIT />} />
    <Route path="about-mit" element={<AboutMIT />} />
    <Route path="leadership" element={<Leadership />} />
    <Route path="leadership-message" element={<LeadershipMsg />} />
    <Route path="university-statute" element={<UniversityStatute />} />
    <Route path="governance" element={<Governance />} />
  </Route>
);
