import React from "react";
import "./vision_mission.css";

const visionData = [
  {
    img: "/assets/images/about/vision.webp",
    title: "Our Vision",
    description: [
      "To be the world's foremost Maritime Training Academy and to be recognized as a leading maritime educational institution",
      "To emerge as the global leader in the area of technical education commensurate with the dynamic global scenario for the benefit of mankind",
      "To build state-of-the-art infrastructure for the education of future cadets",
      "To make India proud by providing the industry with marine officers and seafarers who hold world-class standards of discipline, decency, diligence & humility in their conduct",
      "To build an academy which encourages values and propagates a culture of peace, and promote a learning institution well-known for providing the world with marine officers that exemplify world-class leadership performance, worthy of our customer's trust.",
    ],
  },
  {
    img: "/assets/images/about/mission.webp",
    title: "Our Mission",
    description: [
      "To provide high-quality, cadet-centered education and lifelong learning opportunities for the communities we serve.",
      "At MANET Pune, students pursue their goals in an environment that values diversity, individuality, mutual respect and the free exchange of ideas. We're committed to promoting value-based education system along with the latest professional techniques to give total satisfaction to the cadets, their parents, the statutory bodies and the shipping industry.",
      "We shall also strive to develop the cadets into physically strong, mentally alert, intellectually sharp and spiritually elevated winning personalities. These cadets with a sense of discipline, decency, decorum, dignity and character will truly become model global citizens committed to the cause of serving the entire humanity through the maritime profession.",
      "MANET Pune is committed to being an instrument of optimistic change in the maritime industry for the ultimate benefit of society. For all those who undertake education and training at the institute, MANET shall facilitate acquisition of the right learning, right skills and the right attitude, thereby promoting in them a passion for the profession.",
      "In accordance with its holistic culture and its value system, the institute will promote - • Respect for oneself and others. • Cultivation of a spirit of inquiry and independent thinking.• Development of physical and mental capacities of the cadets.",
    ],
  },
  {
    img: "/assets/images/about/our_values.webp",
    title: "Our Core Values",
    description: [
      "Regard for contrary opinion.",
      "Respect and dignity for all.",
      "Regard for creativity and innovation.",
      "Adherence to ethical, moral values and character education.",
      "Discipline in every walk of life.",
      "Committed to providing our students knowledge, skill and discipline through world-class infrastructure, relevant curriculum that responds to the complex and evolving needs of the maritime industry and experienced and qualified teachers.",
      "Committed to an environment that values student success, development and personal growth.",
      "Universal peace, social progress and human dignity.",
      "Concern for protection of the environment.",
      "Respect for cultural diversity.",
      "Regard for law.",
      "Transparency in every action.",
      "Professional touch to everything",
      "Compassion to the disadvantaged.",
    ],
  },
];

const VisionMission = () => {
  return (
    <div>
      <h1 className="title">Vision, Mission & Our Values</h1>
      <hr />
        <section className="vision-mission-section">
          <div className="vm-grid">
            {visionData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="vm-card">
                  <img src={item.img} alt={item.title} className="vm-image" />
                  <h3 className="vm-card-title">{item.title}</h3>
                  {/* <p className="vm-description">{item.description}</p> */}
                  <ul className="page-content-lists ">
                    {Array.isArray(item.description) ? (
                      item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))
                    ) : (
                      <li>{item.description}</li>
                    )}
                  </ul>
                </div>

                {/* Horizontal divider between cards */}
                {index < visionData.length - 1 && (
                  <div className="vm-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
     
    </div>
  );
};

export default VisionMission;
