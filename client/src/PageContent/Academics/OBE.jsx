import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const OBEdata = [
  {
    title: "Focus on Measurable Learning Outcomes: Clearly defined Course & Program Outcomes ensure targeted learning achievements."
  },
  {
    title: "Alignment of Content and Assessment: LMS-based modules and assessments are mapped directly to learning outcomes."
  },
  {
    title: "Competency-Based Progression: Learners advance upon demonstrating mastery of each outcome."
  },
  {
    title: "Technology-Driven Learning Analytics: Real-time tracking of engagement and achievement supports data-driven teaching."
  },
  {
    title: "Flexible and Personalized Learning Paths: Adaptive online platforms tailor resources based on learner progress."
  },
  {
    title: "Feedback and Continuous Improvement: Analytics-driven insights enhance instructional design and learning experience."
  },
  {
    title: "Global Employability and Skill Development: Outcome-aligned curriculum prepares students for global careers."
  }
];

const OBE = () => {
  return (
    <div>
      <h2 className="innerpage-title">Outcome-Based Education (OBE)</h2>
      {/* <ul className="page-list">
        <li>Focus on Measurable Learning Outcomes: Clearly defined Course & Program Outcomes ensure targeted learning achievements.</li>
        <li>Alignment of Content and Assessment: LMS-based modules and assessments are mapped directly to learning outcomes.</li>
        <li>Competency-Based Progression: Learners advance upon demonstrating mastery of each outcome.</li>
        <li>Technology-Driven Learning Analytics: Real-time tracking of engagement and achievement supports data-driven teaching.</li>
        <li>Flexible and Personalized Learning Paths: Adaptive online platforms tailor resources based on learner progress.</li>
        <li>Feedback and Continuous Improvement: Analytics-driven insights enhance instructional design and learning experience.</li>
        <li>Global Employability and Skill Development: Outcome-aligned curriculum prepares students for global careers.</li>
      </ul> */}
             <ul className="icon-list">
               {OBEdata.map((item, index) => (
                 <li style={{width:"1000px"}} key={index}>
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

export default OBE;
