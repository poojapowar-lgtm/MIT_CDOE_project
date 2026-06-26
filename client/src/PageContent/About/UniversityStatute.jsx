import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const UniversityStatute = () => {
  const MITVisionData = [
    {
      img: "/assets/images/icons/mit-vision.png",
      title: "Our Vision",
      description: [" MIT Art, Design and Technology University aspires to be the University of Eminence by amalgamating Art, Design, Science and Technology. The University aims to have a transformative impact on society through holistic education, multidisciplinary research ethos, innovation, and entrepreneurial culture."],
    },
    {
      img: "/assets/images/icons/goal.png",
      title: "Our Mission",
      description: [
        " The Mission of MIT Art, Design and Technology University is to provide impetus to faculty, learners, and staff by developing their innate intellectual capabilities, creative abilities, and entrepreneurial mindset for the socio-economic development of the nation.",
        "Empower learners to become adaptive and agile global professionals through unique specialized programs building academia-industrial partnerships.",
        "Nurture learners to be intellectually curious, technologically equipped, mentally sound, physically fit, spiritually elevated, socio-culturally sensitive, and environmentally conscious through continuous holistic education for the ever-evolving world.",
        "Provide technology-enabled, learner-driven curriculum, value-added courses, simulated learning environments, state-of-the-art infrastructure, and opportunities for community engagement.",
        "Foster a culture of innovation, entrepreneurship, and research to position MIT-ADT graduates as national and global leaders."
      ],
    },
  ];


  return (
    <div className="aboutmit-container">
      <h2 className="innerpage-title">University Statute</h2>
      <p>MIT Art, Design and Technology University was established under the MIT Art, Design and Technology University Act, 2015 (Maharashtra Act No. XXXIX of 2015), which was published in the Maharashtra Government Gazette on 21st August 2015. The university was incorporated as a distinct private university in June 2016.</p>

      <p>The Statutes of the University govern all aspects of academic, administrative, and financial functioning. Key statutory provisions include:</p>

      <ul className="page-list">
        <li>The university is empowered to award degrees as specified under Section 22 of the UGC Act, 1956.</li>
        <li>It operates as an autonomous private university under the aegis of the MAEER (Maharashtra Academy of Engineering Educational and Research) trust</li>
        <li>All programmes are offered at the main campus in regular mode with the approval of statutory bodies and councils wherever required.</li>
        <li>The Act defines the constitution, powers, and functions of all statutory bodies — the Governing Body, Board of Management, Academic Council, Finance Committee, and Board of Examinations.</li>
        <li>The university follows the National Education Policy (NEP) 2020 framework to align its curricula with national educational priorities.</li>
        <li>It has an Internal Quality Assurance Cell (IQAC) to continuously monitor and enhance academic quality.</li>
      </ul>

      <p>A Code of Conduct governs the behaviour of students, faculty, and staff, promoting an ethical and harmonious campus community.</p>


      {/* Vision & Mission */}
      <h2 className="innerpage-subtitle">Vision & Mission:</h2>
      <section className="mit-vision-section">
        <div className="mit-vm-grid">
          {MITVisionData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="mit-vm-card">
                <img src={item.img} alt={item.title} className="mit-vm-image" />
                <h3 className="mit-vm-card-title">{item.title}</h3>
                {/* <p className="vm-description">{item.description}</p> */}
                <ul className="page-list ">
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
              {index < MITVisionData.length - 1 && (
                <div className="mit-vm-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UniversityStatute;
