import React from "react";
import { Route } from "react-router-dom";
import ContactUs from "../Pages/ContactUs";
import Connect from "../PageContent/ContactUs/Contact";



export const ContactRoute = (
  <Route path="contact" element={<ContactUs />}>
    <Route index element={<Connect />} />
    <Route path="connect" element={<Connect />} />
  </Route>
);
