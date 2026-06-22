import React, { useState } from "react";
import "./Banner.css";


const Banner = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="banner-container">
        <div className="banner-image">
          {/* Card Inside Image */}
          {/* <div className="banner-card">
            <h2 className="banner-title">
             Center for Distance and Online Education (CDOE) at MIT-ADT University
            </h2>
          </div> */}
        </div>
      </div>

      {/* Vertical Button */}
      {/* {!showForm && (
        <button
          className="enquiry-btn"
          onClick={() => setShowForm(true)}
        >
          Enquiry
        </button>
      )} */}

      {/* Popup Form */}
      {/* {showForm && (
        <div className="enquiry-modal">
          <div className="enquiry-content">
            <span
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ✖
            </span>

            <EnquiryForm />
          </div>
        </div>
      )} */}
    </>
  );
};

export default Banner;