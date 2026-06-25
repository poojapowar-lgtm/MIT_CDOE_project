import React from "react";
import "./about_mit.css";


const AboutMIT = () => {
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
      <h2 className="innerpage-title">About MIT-ADT University</h2>

      <div className="aboutmit-image">
        {/* <img src="/assets/images/home/inner_bnr.jpg" alt="About MIT ADT" /> */}
      </div>

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

export default AboutMIT;
