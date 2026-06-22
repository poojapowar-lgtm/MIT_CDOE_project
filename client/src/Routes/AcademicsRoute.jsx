import React from "react";
import { Route } from "react-router-dom";
import Academics from "../Pages/Academics";
import Programmes from "../PageContent/Academics/Programmes";
import Advantages from "../PageContent/Academics/Advantages";
import Alignment from "../PageContent/Academics/Alignment";
import OBE from "../PageContent/Academics/OBE";
import Fees from "../PageContent/Academics/Fees";
import Featuers from "../PageContent/Academics/Featuers";


export const AcademicsRoute = (
  <Route path="academics" element={<Academics />}>
    <Route index element={<Programmes />} />
    <Route path="cdoe-programmes" element={<Programmes />} />
    <Route path="featuers" element={<Featuers />} />
    <Route path="advantages" element={<Advantages />} />
    <Route path="alignment-NEP" element={<Alignment />} />
    <Route path="obe" element={<OBE />} />
    <Route path="fee-structure" element={<Fees />} />
  </Route>
);
