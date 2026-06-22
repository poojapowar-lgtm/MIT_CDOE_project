import React from "react";
import { Route } from "react-router-dom";
import Admission from "../Pages/Admission";
import WhyCDOE from "../PageContent/Admissions/WhyCDOE";
import Enroll from "../PageContent/Admissions/Enroll";



export const AdmissionsRoute = (
  <Route path="admissions" element={<Admission />}>
    <Route index element={<WhyCDOE />} />
    <Route path="why-cdoe" element={<WhyCDOE />} />
    <Route path="who-enroll" element={<Enroll />} />
  </Route>
);
