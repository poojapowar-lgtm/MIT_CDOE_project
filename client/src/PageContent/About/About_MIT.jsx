import React from "react";
import "./about_mit.css";


const AboutMIT = () => {
  const universityHighlights = [
    {
      title: "Campus & Type",
      description: "85+ Acres at Rajbaug, Loni Kalbhor, Pune – 412201, Maharashtra, India. Autonomous Private University (State Legislature Act)."
    },
    {
      title: "Established & UGC",
      description: "Established: 2015 (Act); Operational since 2016–17. UGC Recognition: F-8-33/2015 (CPP-I/PU), dated 10th November 2016."
    },
    {
      title: "Schools & Programmes",
      description: "17 Schools across multiple Faculties. UG, PG, and Doctoral programmes in Art, Design, Engineering, Management, and more."
    },
    {
      title: "Students & Faculty",
      description: "12,000+ students (and growing). 110+ Faculty Mentors."
    },
    {
      title: "Placements",
      description: "300+ companies visit annually for campus recruitment."
    }
  ];



  return (
    <div className="aboutmit-container">
      <h2 className="innerpage-title">About MIT-ADT University</h2>
      <h3 className="innerpage-subtitle">Genesis and Evolution:</h3>
      {/* <div className="aboutmit-image">
        <img src="/assets/images/home/inner_bnr.jpg" alt="About MIT ADT" />
      </div> */}

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
      <p>
        MIT Art, Design and Technology University (MIT-ADT University) is an autonomous private university located at Rajbaug Loni Kalbhor, Pune, Maharashtra, India. It is part of the well-established MIT Group of Institutions, founded by the visionary educationist Rev. Prof. Dr. Vishwanath D. Karad.
        The roots of the MIT Group trace back to the early 1980s, when dedicated academics and social thinkers established the Maharashtra Academy of Engineering Educational and Research (MAEER) trust. On 1st May 1983, MAEER presented the first private engineering college — MIT — to the city of Pune. Over the decades, the MIT Group expanded into a vast network of higher education institutions, with more than 10 campuses across Maharashtra, over 70,000 students, and 84+ institutions by 2015.
        MIT Art, Design and Technology University represents a bold leap towards world-class education — a vision translated into reality by the committed members of the MIT Group of Institutions. This write-up is a comprehensive overview of the university's ethos, leadership, governance framework, recognitions, and institutional policies.

      </p>
      <p>
        At its heart, MIT-ADT University aspires to nurture learners who are not merely academically accomplished, but are physically fit, intellectually sharp, mentally alert, and spiritually elevated. The university has been deliberately designed to produce Innovators, Business Leaders, Scientists, Social Transformers, and Nation Builders.
        The university's unique approach combines world-class curricula with project-based learning, industry-aligned programmes, and a robust campus-to-corporate transformation framework. With over 400+ copyrights, 65+ patents, 20+ designs, and 179+ research projects, MIT-ADT has firmly positioned itself on the national and global research map.
        The university is a multidisciplinary institution, uniquely amalgamating Art, Design, and Technology under one roof. The architecture of the campus is inspired by the conceptual matrix of Saptarishi, Saptarang, and Saptaswar, creating a world-class aesthetic environment that blends peace, serenity, and academic excellence.

      </p>

      <h3 className="innerpage-subtitle">Profile of the University:</h3>
      <div className="profile-content">


        {/* Left Side Text */}
        <div className="about-text">
          <p>MIT-ADT University was formally established in the year 2016 by the Government of Maharashtra
            vide the MIT Art, Design and Technology University Act, 2015 (Mah. Act No. XXXIX of 2015) and
            has been in academic operation since the academic year 2016–17.
            The University Grant Commission (UGC), New Delhi, recognized MIT Art, Design and Technology
            University, Pune vide its letter No. F-8-33/2015 (CPP-I/PU), dated 10th November 2016, empowering
            it to issue degrees as specified in Section 22 of the UGC Act, 1956.
          </p>
          <p>
            The MIT Group acquired the land at Rajbaug, Loni Kalbhor — formerly owned by the late legendary
            Indian actor Shri Raj Kapoor — in 2001. This serene campus, spread over approximately 85 acres on
            the banks of the Mula-Mutha river, became the embodiment of Rev. Dr. Vishwanath Karad's dream of
            a world-class, value-based institution deeply rooted in the ideals of peace, spirituality, and
            development.</p>
        </div>
        <div className="about-image ">
          <img src="/assets/images/home/inner_bnr.jpg" alt="Campus" />
        </div>

      </div>
      <div>

        <div className="profile-container" style={{ padding: "20px 0" }}>
          {universityHighlights.map((item, index) => (
            <div className="profile-card" key={index}>
              {/* Title */}
              <h3 className="profile-name">
                <span>{item.title}</span>
              </h3>
              {/* Description */}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
};

export default AboutMIT;
