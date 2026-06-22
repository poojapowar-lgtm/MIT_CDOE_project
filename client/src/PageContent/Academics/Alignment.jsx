import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const alignmentData = [
  {
    title: "Multidisciplinary and Interdisciplinary Credit Framework enabling holistic education, academic flexibility, and integration of diverse knowledge domains in line with NEP-2020."
  },
  {
    title: "Outcome-Based, Learner-Centric Pedagogy focused on clearly defined learning outcomes, student engagement, and personalized learning pathways."
  },
  {
    title: "Highly Qualified Faculty with Strong Industry Exposure to bridge theory and practice, enhance employability, and ensure curriculum relevance."
  },
  {
    title: "Active Learning and Critical Thinking through Project-Based Learning (PBL) encouraging inquiry, creativity, collaboration, and real-world application of knowledge."
  },
  {
    title: "Problem-Solving and Experiential Learning through hands-on activities, laboratories, simulations, and case-based approaches."
  },
  {
    title: "Inclusive and Equitable Education Practices ensuring access, participation, and success for learners from diverse socio-economic and cultural backgrounds."
  },
  {
    title: "Constructivist Approach to Learning promoting self-directed learning, reflection, and knowledge creation rather than rote memorization."
  },
  {
    title: "Skill-Oriented Training Integrated with AI and Digital Tools to enhance analytical, technological, and future-ready competencies."
  },
  {
    title: "Industry-Oriented Desk Research and Field Exposure fostering data-driven decision-making, research aptitude, and professional preparedness."
  },
  {
    title: "Mandatory Internship and Apprenticeship Components aligned with NEP-2020 to strengthen experiential learning, industry engagement, and career readiness."
  }
];

const Alignment = () => {
  return (
    <div>
      <h2 className="innerpage-title">Alignment with NEP 2020</h2>

      <p>CDOE’s curriculum and pedagogy are fully aligned with the National Education Policy (NEP) 2020, ensuring learners benefit from a modern, flexible, and future-ready framework:</p>
      {/* <ul className="page-list">
        <li>Multidisciplinary and Interdisciplinary Credit Framework enabling holistic education, academic flexibility, and integration of diverse knowledge domains in line with NEP-2020.</li>
        <li>Outcome-Based, Learner-Centric Pedagogy focused on clearly defined learning outcomes, student engagement, and personalized learning pathways.</li>
        <li>Highly Qualified Faculty with Strong Industry Exposure to bridge theory and practice, enhance employability, and ensure curriculum relevance.</li>
        <li>Active Learning and Critical Thinking through Project-Based Learning (PBL) encouraging inquiry, creativity, collaboration, and real-world application of knowledge.</li>
        <li>Problem-Solving and Experiential Learning through hands-on activities, laboratories, simulations, and case-based approaches.</li>
        <li>Inclusive and Equitable Education Practices ensuring access, participation, and success for learners from diverse socio-economic and cultural backgrounds.</li>
        <li>Constructivist Approach to Learning promoting self-directed learning, reflection, and knowledge creation rather than rote memorization.</li>
        <li>Skill-Oriented Training Integrated with AI and Digital Tools to enhance analytical, technological, and future-ready competencies.</li>
        <li>Industry-Oriented Desk Research and Field Exposure fostering data-driven decision-making, research aptitude, and professional preparedness.</li>
        <li>Mandatory Internship and Apprenticeship Components aligned with NEP-2020 to strengthen experiential learning, industry engagement, and career readiness.</li>
      </ul> */}

      <ul className="icon-list" >
        {alignmentData.map((item, index) => (
          <li style={{ width: "1100px" }} key={index}>
            <div className="list-title">
              <TbArrowBadgeRightFilled className="icon" />
              {item.title}:
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Alignment;
