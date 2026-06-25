import React from "react";
import "./inner_banner.css";
import Breadcrumb from "./Breadcrumb";

const InnerBanner = ({ title, bgImage }) => {
  return (
    <div className="innerbanner-container">
      <div className="innerbanner-image">
        <img src={bgImage} alt="banner" />
        <Breadcrumb/>
        {/* <div className="innerbanner-card">
          <h2 className="innerbanner-title">{title}</h2>
        </div> */}
      </div>
    </div>
  );
};

export default InnerBanner;
