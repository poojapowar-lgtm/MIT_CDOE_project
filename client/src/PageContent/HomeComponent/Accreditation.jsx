import React from "react";
import "./Accreditation.css";

const Accreditation = () => {
  const Logos = [
    { id: 1, src: "/assets/images/home/NAAC_Logo.png", alt: "Logo 1" },
    { id: 2, src: "/assets/images/home/Ranking1.png", alt: "Logo 2" },
    { id: 3, src: "/assets/images/home/Ranking2.png", alt: "Logo 3" },
    { id: 4, src: "/assets/images/home/Ranking3.png", alt: "Logo 4" },
    { id: 5, src: "/assets/images/home/Ranking4.png", alt: "Logo 5" },
    { id: 6, src: "/assets/images/home/dasca-logo.png", alt: "Logo 6" },
  ];

  const globalData = [
    {
      icon: "/assets/images/icons/accreditation.png",
      title: "NAAC Accreditation",
      description: "MIT-ADT University has been accredited with the NAAC 'A' Grade with a CGPA of 3.11,confirming its commitment to academic quality, infrastructure, and student outcomes.",
    },
    {
      icon: "/assets/images/icons/accreditation.png",
      title: "NIRF Rankings",
      description: [
        "Ranked at position 258 under the Engineering Category in NIRF (National Institutional Ranking Framework) 2025.",
        "Positioned in the Band of 51–100 in the Innovation Category under NIRF."
      ]
    },
    {
      icon: "/assets/images/icons/accreditation.png",
      title: "ARIIA Recognition",
      description: "Ranked in the Band 'EXCELLENT' for ARIIA 2021 by the Ministry of Education, Government of India, for outstanding Innovation and Entrepreneurship initiatives.",
    },
    {
      icon: "/assets/images/icons/accreditation.png",
      title: "Ministry of Education — Star Rating",
      description: "Received 5-Star Rating for exemplary performance in 2020 by the Ministry of Education's Innovation Council, Government of India, for promoting start-ups and incubation opportunities.",
    },
    {
      icon: "/assets/images/icons/accreditation.png",
      title: "MANET Accreditation",
      description: "MAEER's Maharashtra Academy of Naval Education and Training (MANET) has received the prestigious 'Ship In Campus' accreditation from the Directorate General of Shipping.",
    },
    {
      icon: "/assets/images/icons/accreditation.png",
      title: "DASCA Accreditation",
      description: "MIT-ADT University Pune became the first university in Maharashtra to earn DASCA (Data Science Council of America) accreditation for its AI and Data Science programmes.",
    },
    {
      icon: "/assets/images/icons/accreditation.png",
      title: "Management Institute Rankings",
      description: [
        "MITCOM (MIT College of Management) has been graded AA+ by Careers 360.",
        "Ranked at 67th position among the Top Business Schools of India by the Times B-School Survey."
      ]
    },
  ];

  return (
    <section className="global-section">
      <h2 className="title">Accreditation & Ranking</h2>

      <div className="logo-slider">
        <div className="logo-track">
          {[...Logos, ...Logos].map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="accreditation-container" style={{ margin: "0 auto", width: "85%" }}>
        {globalData.map((item, index) => (
          <div className="accreditation-card" key={index}>

            {/* Row: Icon + Title */}
            <h3 className="accreditation-name" style={{ textAlign: "left" }}>
              <img src="/assets/images/icons/circle.png" alt="icon" className="title-icon" />
              <span>{item.title}</span>
            </h3>

            {/* Description below */}
            {Array.isArray(item.description) ? (
              <div className="page-text">
                {item.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            ) : (
              <p >{item.description}</p>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Accreditation;