import React from "react";
import "./AboutMIT.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutMIT = () => {
  const navigate = useNavigate();

  return (
    <section className="about">
      <h1 className="main-title">Who We Are!</h1>

      <div className="about-content">
        <div className="about-image ">
          <img src="/assets/images/home/inner_bnr.jpg" alt="Campus" />
        </div>

        {/* Left Side Text */}
        <div className="about-text">
          <p>
            MIT Art, Design and Technology University (MIT-ADT University) is an autonomous private
            university located at Rajbaug Loni Kalbhor, Pune, Maharashtra, India. It is part of the well-
            established MIT Group of Institutions, founded by the visionary educationist Rev. Prof. Dr.
            Vishwanath D. Karad. The roots of the MIT Group trace back to the early 1980s, when dedicated academics and social
            thinkers established the Maharashtra Academy of Engineering Educational and Research (MAEER)
            trust. On 1st May 1983, MAEER presented the first private engineering college — MIT — to the city
            of Pune. Over the decades, the MIT Group expanded into a vast network of higher education
            institutions, with more than 10 campuses across Maharashtra, over 70,000 students, and 84+
            institutions by 2015.
          </p>
          <p>MIT Art, Design and Technology University represents a bold leap towards world-class education —
            a vision translated into reality by the committed members of the MIT Group of Institutions. This
            write-up is a comprehensive overview of the university's ethos, leadership, governance framework,
            recognitions, and institutional policies.</p>

          {/* Button */}
          <button
            className="know-btn"
            onClick={() => navigate("/aboutus/about-mit")}
          >
            Know More
          </button>
        </div>


      </div>
    </section>
  );
};

export default AboutMIT;
