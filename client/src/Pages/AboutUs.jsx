import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const AboutUs = () => {
  const location = useLocation();

  const menu = [
    { name: "About MIT-ADT", path: "about-mit" },
    { name: "University Statute", path: "university-statute" },
    // { name: "Leadership Message", path: "leadership-message" },
    { name: "From the desk of Founder Father and President ", path: "founder" },
    { name: "From the desk of Hon. Executive President", path: "president" },
    { name: "From the desk of Hon. Executive Director", path: "director" },
    { name: "Vision & Mission", path: "vision" },
    { name: "Leadership", path: "leadership" },
    { name: "Governance", path: "governance" },
  ];

  // Title mapping
  const titleMap = {
    "about-mit": "About MIT-ADT",
    "university-statute": "University Statute",
    "founder": "From the desk of Founder Father and President",
    "president": "From the desk of Hon. Executive President",
    "director": "From the desk of Hon. Executive Director",
    // "leadership-message": "Leadership Message",
    "Vision & Mission": "vision",
    "leadership": "Leadership",
    "governance": "Governance",
  };

  // Get dynamic title based on route
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key),
    );

    return matchedKey ? titleMap[matchedKey] : "About MIT-ADT";
  };

  const title = getTitle();

  const bgImage = "/assets/images/home/inner_bnr.jpg";

  return (
    <>
      <InnerBanner bgImage={bgImage} title={title} />

      <div className="page-layout">
        <Sidebar menuItems={menu} />
        <div className="page-content">
          <Outlet />
        </div>


      </div>
    </>
  );
};

export default AboutUs;
