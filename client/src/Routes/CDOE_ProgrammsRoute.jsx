import React from "react";
import { Route } from "react-router-dom";
import CDOE_Programms from "../Pages/CDOE_Programms";
import MBA from "../PageContent/CDOE_Programms/MBA";
import BBA from "../PageContent/CDOE_Programms/BBA";
import QuadrantSystem from "../PageContent/CDOE_Programms/QuadrantSystem";


export const CDOE_ProgrammsRoute = (
  <Route path="programmes" element={<CDOE_Programms />}>
    <Route index element={<MBA />} />
    <Route path="mba-programmes" element={<MBA />} />
    <Route path="bba-programmes" element={<BBA />} />
    <Route path="quadrant-systems" element={<QuadrantSystem />} />
  </Route>
);
