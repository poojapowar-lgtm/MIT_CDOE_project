import React from "react";
import "./vision.css";


const Vision = () => {
  const visionData = [
    {
      img: "/assets/images/icons/vision.png",
      title: "Vision",
      description: ["Centre for Distance and Online Education (CDOE) envisions itself as a leader in open and distance education, centre of academic empowerment, digital innovation, and learner development, driven by a spirit of excellence, commitment, flexibility, and to nurture the talent in flexible mode."],
    },
    {
      img: "/assets/images/icons/mission.png",
      title: "Mission",
      description: [" Centre for Distance and Online Education (CDOE) mission emphasizes learner empowerment, global relevance, and social responsibility. It strives to create transformative learning experiences through the strategic integration of technology, partnerships, and forward-looking pedagogy in the digital age."],
    },

    {
      img: "/assets/images/icons/objectives.png",
      title: "Objectives",
      description: [
        "The primary objective of the Centre for Distance and Online Education (CDOE) program is to create a learner-centric, inclusive, and digitally empowered platform that equips students with the knowledge and tools required to excel in today’s dynamic world.",
        "This initiative is a direct reflection of MIT-ADT University’s vision to deliver academic excellence through innovation, inclusivity, and global relevance with social economic development."
      ]
    },
    {
      img: "/assets/images/icons/purpose.png",
      title: "Purpose",
      description: [
        "At its core, the Centre for Distance and Online Education (CDOE) initiative reflects the ethos of educational democratization.",
        "It is designed to remove barriers to learning and create pathways for inclusive academic participation. Special attention is given to learners from marginalized backgrounds, rural communities, and those with time or mobility constraints."
      ]
    },

  ];


  return (
    <div className="aboutmit-container">
      <h2 className="innerpage-title">Vision & Mission</h2>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="vm-grid">
          {visionData.map((item, index) => (
            <div className="vm-card" key={index}>
              <img src={item.img} alt={item.title} className="vm-image" />

              {/* Optional title */}
              <h2 className="vm-card-title">{item.title}</h2>

              <ul className="vm-list" >
                {Array.isArray(item.description) ? (
                  item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))
                ) : (
                  <li>{item.description}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>

  );
};

export default Vision;
