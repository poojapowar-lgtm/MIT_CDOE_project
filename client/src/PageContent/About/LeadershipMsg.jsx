import React from "react";
import "./leadership.css";

export const leadershipData = [
  {
    id: 1,
    sectionTitle: "From the desk of Founder father and President",
    name: "Rev. Prof. Dr. Vishwanath D. Karad",
    designation: `Founder Father & President, MIT Art, Design and Technology University
Creator & Visionary Leader — Vishwaraj Baug, Loni Kalbhor, Pune, India`,
    image: "/assets/images/home/VD_sir.jpg",
    quote: "ओम नमो जी आद्ा, वेद प्रतिाद्या। जय जय स्वसंवेद्य, आत्मरूपा",
    description: [
      "Rev. Prof. Dr. Vishwanath D. Karad is the towering visionary behind the MIT Group of Institutions and the Founder Father and President of MIT Art, Design and Technology University. His lifelong mission has been the transformation of education into a vehicle for peace, social revolution, and national development.",
      "Dr. Karad established the MAEER (Maharashtra Academy of Engineering Educational and Research) trust and in 1983 created the first private engineering college in Pune — an institution that has since grown into one of India's most respected higher education ecosystems with 84+ institutions and 70,000+ students.",
      "His philosophy is rooted in the ancient tradition of holistic education — one that develops the complete human being: physically, intellectually, emotionally, and spiritually. The Vishwaraj Baug campus itself is a manifestation of this philosophy — a sprawling, lush green space where students are encouraged to engage in yoga, meditation, sports, and spiritual elevation alongside rigorous academics.",
      "Dr. Karad is also the visionary behind the creation of the World's Largest Dome at Vishwaraj Baug — a symbol of the university's commitment to universal peace, harmony, and knowledge."
    ]
  },
  {
    id: 2,
    sectionTitle: "From the desk of Hon.Executive President",
    name: "Hon. Prof. Dr. Mangesh T. Karad",
    designation: `Executive President, MIT Art, Design and Technology University Loni Kalbhor, Pune, India`,
    image: "/assets/images/home/MK-sir.webp",
    quote: "Universities are the reflection of the societies, collective knowledge & wisdom.",
    description: [
      "Dr. Mangesh T. Karad serves as the Executive President of MIT Art, Design and Technology University. He is widely recognized as a dynamic and progressive academic leader who has been instrumental in steering MIT-ADT towards becoming a truly New-Age University for Innovation and Entrepreneurship.",
      "Under his leadership, MIT-ADT University has made significant strides in research, innovation, and academic quality. He has been a passionate advocate for Intellectual Property Rights (IPR) literacy and has championed the creation of a mass IPR movement across India.",
      "As an eminent educationist and visionary administrator, Dr. Mangesh Karad has emphasized the Academic-Industry Interface as a cornerstone of the university's academic philosophy. His efforts have resulted in the university securing 400+ copyrights, 65+ patents, 20+ designs, and 179+ research projects, creating a robust innovation ecosystem.",
      "He has also been a strong proponent of semiconductor self-reliance for India, organizing national seminars and conferences on cutting-edge technology to bring together policy-makers, academics, and industry leaders."
    ]
  },
  {
    id: 3,
    sectionTitle: "From The Desk Hon.Executive Director",
    name: "Dr. Sunita Karad",
    designation: `Executive Director, MIT Art, Design and Technology University
Vishwaraj Baug, Loni Kalbhor, Pune, India`,
    image: "/assets/images/home/Dr.Sunita_karad.png",
    quote: "The Centre for Open and Distance Education (CDOE) remains dedicated to nurturing adaptable, innovative, and responsible leaders who can learn continuously, innovate confidently, and lead effectively in an ever-evolving global business environment.",
    description: [
      "The Centre for Open and Distance Education (CDOE) is established with a vision to provide high-quality, industry-relevant education through flexible and inclusive learning modes. The Centre is committed to extending opportunities for higher education to a diverse learner community, including working professionals, entrepreneurs, and aspiring managers, by removing barriers of time and location.",
      "India’s rapidly evolving economic landscape—particularly in sectors such as Logistics and Supply Chain Management, Marketing, Human Resource, Fin-Tech, Digital Marketing and International Business—has created an unprecedented demand for skilled and competent professionals.",
      "CDOE addresses this need by offering carefully designed programs that integrate academic rigor with practical relevance. The curriculum emphasizes applied learning through case studies, industry-oriented assignments, digital tools, ERP exposure, and contemporary management practices, ensuring that learners are well prepared to face real-world challenges.",
      "CDOE strives to emerge as a centre of excellence in management and professional education by maintaining high standards of teaching, continuous curriculum enrichment, and academic innovation.",
      "In today’s fast-changing world, traditional leadership models are increasingly inadequate. Rapid technological transformation and globalization demand a new generation of leaders who are agile, digitally competent, and globally aware.",
      "Through its sector-focused approach and flexible delivery modes, CDOE contributes to the development of industry-ready professionals capable of addressing complex organizational and societal challenges. The Centre emphasizes the development of techno-managers who can effectively integrate management principles with digital technologies, data analytics, and modern business tools in the context of Industry 4.0."
    ]
  }
];

const LeadershipMsg = () => {
  return (
    <div className="leadership-container">
      {leadershipData.map((leader) => (
        <div key={leader.id}>

          <h2 className="innerpage-title" style={{border:"none"}}>{leader.sectionTitle}</h2>

          <div className="leader-card">
            <div className="leader-section">

              <div className="leader-image">
                <img src={leader.image} alt={leader.name} />
              </div>

              <div className="leader-content">
                <h2 className="innerpage-subtitle">{leader.name}</h2>

                <p className="leader-designation">
                  {leader.designation}
                </p>

                {leader.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

            </div>

            <p style={{ textAlign: "center", color: "green" }}>
              <b>"{leader.quote}"</b>
            </p>

          </div>

        </div>
      ))}
    </div>
  );
};

export default LeadershipMsg;
