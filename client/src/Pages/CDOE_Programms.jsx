import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const CDOE_Programms = () => {
  const location = useLocation();


  const menu = [
    { name: "MBA Programmes", path: "mba-programmes" },
    { name: "BBA Programmes", path: "bba-programmes" },
    { name: "Quadrant System", path: "quadrant-systems" },
  ];

  // Title mapping
  const titleMap = {
    "mba-programmes": "MBA Programmes",
    "bba-programmes": "BBA Programmes",
    "quadrant-systems": "Quadrant System",
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

export default CDOE_Programms;
