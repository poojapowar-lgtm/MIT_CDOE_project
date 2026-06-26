import React from "react";
import "./CDOEPurpose.css";

const CDOEPurpose = () => {
  const CDOEPurposeData = [
    {
      title: "Democratizing education",
      description: "Expanding access to meaningful academic opportunities across diverse populations"
    },
    {
      title: "Providing second chances",
      description: "Enabling individuals to resume or continue their education regardless of prior disruptions."
    },
    {
      title: "Encouraging lifelong learning",
      description: "Designing industry relevant programs that promote continuous skill advancement."
    },
    {
      title: "Contributing to national development",
      description: "Supporting the creation of a skilled, employable, and future-ready workforce aligned with national priorities."
    },
  ]
  return (
    <section className="university-profile">

      <h1 className="innerpage-title">Purpose of the CDOE Initiative</h1>

      <div className="campus-content">
        {/* left Side */}
        <div className="campus-left">
          <p>At its core, the Center for Distance and Online Education (CDOE) initiative reflects the ethos of educational democratization. It is designed to remove barriers to learning and create pathways for inclusive academic participation. Special attention is given to learners from marginalized backgrounds, rural communities, and those with time or mobility constraints.</p>
          <div className="profile-container">
            {CDOEPurposeData.map((item, index) => (
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

        {/* right Side */}
        <div className="campus-right">
          <img src="/assets/images/home/inner_bnr.jpg" alt="Campus" className="campus-img" />
        </div>


      </div>
    </section>
  );
};

export default CDOEPurpose;
