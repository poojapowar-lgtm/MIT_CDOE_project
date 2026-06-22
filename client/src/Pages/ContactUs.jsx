import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const ContactUs = () => {
  const location = useLocation();

  const menu = [
    { name: "Contact with Us", path: "connect" },
  ];

  // Title mapping
  const titleMap = {
    "connect": "Contact With Us",
  };

  // Get dynamic title based on route
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key),
    );

    return matchedKey ? titleMap[matchedKey] : "Contact With Us";
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

export default ContactUs;
