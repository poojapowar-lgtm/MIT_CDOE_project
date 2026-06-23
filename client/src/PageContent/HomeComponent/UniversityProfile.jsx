import React from "react";
import "./UniversityProfile.css";

const UniversityProfile = () => {
  return (
    <section className="university-profile">
      {/* Title */}

      <h1 className="title">Profile of the University</h1>
      <div className="profile-text">
        <p>MIT-ADT University was formally established in the year 2016 by the Government of Maharashtra
          vide the MIT Art, Design and Technology University Act, 2015 (Mah. Act No. XXXIX of 2015) and
          has been in academic operation since the academic year 2016–17.
          The University Grant Commission (UGC), New Delhi, recognized MIT Art, Design and Technology
          University, Pune vide its letter No. F-8-33/2015 (CPP-I/PU), dated 10th November 2016, empowering
          it to issue degrees as specified in Section 22 of the UGC Act, 1956.
          The MIT Group acquired the land at Rajbaug, Loni Kalbhor — formerly owned by the late legendary
          Indian actor Shri Raj Kapoor — in 2001. This serene campus, spread over approximately 85 acres on
          the banks of the Mula-Mutha river, became the embodiment of Rev. Dr. Vishwanath Karad's dream of
          a world-class, value-based institution deeply rooted in the ideals of peace, spirituality, and
          development.</p>
      </div>

      <div className="campus-content">

        {/* Left Side */}
        <div className="campus-left">
          <img src="/assets/images/home/inner_bnr.jpg" alt="Campus" className="campus-img" />
        </div>

        {/* Right Side Image */}
        <div className="campus-right">

          <ul className="page-list ">
            <h2 className="subtitle" style={{borderTop:"none", borderBottom:"1px solid goldenrod"}}>University Highlights:</h2>
            <li><b>Campus Area:</b> 85+ Acres at Rajbaug, Loni Kalbhor, Pune – 412201, Maharashtra, India</li>
            <li><b>Type:</b> Autonomous Private University (State Legislature Act)</li>
            <li><b>Established:</b> 2015 (Act); Operational since 2016–17</li>
            <li><b>UGC Recognition:</b> Yes — F-8-33/2015 (CPP-I/PU), dated 10th November 2016</li>
            <li><b>Constituent Schools:</b> 17 Schools across multiple Faculties</li>
            <li><b>Programmes Offered:</b> UG, PG, and Doctoral programmes in Art, Design, Engineering,
              Management, and more</li>
            <li><b>Student Enrollment:</b> 12,000+ students (and growing)</li>
            <li><b>Faculty Members:</b> 110+ Faculty Mentors</li>
            <li><b>Campus Recruiters:</b> 300+ companies visit annually</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UniversityProfile;
