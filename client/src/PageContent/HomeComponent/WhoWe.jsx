import React from "react";
import "./WhoWe.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const WhoWe = () => {
  // const navigate = useNavigate();

  return (
    <section className="about">
      <h1 className="innerpage-title">Who We Are!</h1>

      <div className="about-content">
        <div className="about-image ">
          <img src="/assets/images/home/inner_bnr.jpg" alt="Campus" />
        </div>

        {/* Left Side Text */}
        <div className="about-text">
          <p>In today’s evolving educational landscape, accessibility, inclusivity, and adaptability are vital to a meaningful and future-ready academic experience. Recognizing this, MIT Art, Design and Technology University (MIT-ADT University) has launched its Center for Distance and Online Education (CDOE) initiative—a strategic endeavor to bridge educational disparities and ensure equitable learning opportunities for all.
          </p>
          <p>The Center for Distance and Online Education (CDOE) platform represents a comprehensive, technology-enabled academic ecosystem that extends beyond the boundaries of conventional classrooms. It empowers learners to pursue knowledge, build skills, and realize their academic and professional aspirations—anytime, anywhere.</p>
          <p>Whether you’re a working professional seeking to upskill, a homemaker managing family responsibilities, a rural learner with limited access to traditional institutions, or someone aiming to resume interrupted education— Center for Distance and Online Education (CDOE) at MIT-ADT University makes continuous, flexible, and enriching learning a reality
          </p>
          <p>The primary objective of the Center for Distance and Online Education (CDOE) program is to create a learner-centric, inclusive, and digitally empowered platform that equips students with the knowledge and tools required to excel in today’s dynamic world. This initiative is a direct reflection of MIT-ADT Universities vision to deliver academic excellence through innovation, inclusivity, and global relevance with Social economic development.</p>
          {/* <button
            className="know-btn"
            onClick={() => navigate("/aboutus/about-mit")}
          >
            Know More
          </button> */}
        </div>


      </div>
    </section>
  );
};

export default WhoWe;
