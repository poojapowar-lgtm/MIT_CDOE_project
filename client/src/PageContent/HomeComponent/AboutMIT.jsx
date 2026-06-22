import React from "react";
import "./AboutMIT.css";
import { useState } from "react";

const AboutMIT = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="national-rank">
      <h1 className="title">ABOUT MIT ADT UNIVERSITY</h1>
      <h2 className="subtitle">Genesis and Evolution</h2>

      <div className="rank-content">
        {/* Left Side Text */}
        <div className="rank-text">
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
          {/* Hidden / expandable content */}
          {readMore && (
            <>
              <p>At its heart, MIT-ADT University aspires to nurture learners who are not merely academically
                accomplished, but are physically fit, intellectually sharp, mentally alert, and spiritually elevated. The
                university has been deliberately designed to produce Innovators, Business Leaders, Scientists, Social
                Transformers, and Nation Builders.</p>
              <p>The university's unique approach combines world-class curricula with project-based learning,
                industry-aligned programmes, and a robust campus-to-corporate transformation framework. With over
                400+ copyrights, 65+ patents, 20+ designs, and 179+ research projects, MIT-ADT has firmly
                positioned itself on the national and global research map. The university is a multidisciplinary institution, uniquely amalgamating Art, Design, and Technology
                under one roof. The architecture of the campus is inspired by the conceptual matrix of Saptarishi,
                Saptarang, and Saptaswar, creating a world-class aesthetic environment that blends peace, serenity,
                and academic excellence.</p>
            </>
          )}

          {/* Button */}
          <button
            className="read-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutMIT;
