import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const listData = [
  {
    title: "Massive Growth",
    desc: "900% growth since inception — fastest in education history",
  },
  {
    title: "Market Value",
    desc: "$687 billion projected U.S. online learning industry by 2030",
  },
  {
    title: "Student Participation",
    desc: "30% of U.S. students have taken at least one online course",
  },
  {
    title: "Women in Lead",
    desc: "Women are more likely than men to enroll in online programs",
  },
  {
    title: "Global Reach",
    desc: "200+ million learners joined a MOOC last year",
  },
  {
    title: "Career Motivation",
    desc: "30% of learners pursue online degrees for better jobs",
  },
  {
    title: "Eco Impact",
    desc: "85% fewer CO2 emissions per student — a sustainable model",
  },
  {
    title: "Efficiency",
    desc: "Study time cut by up to 60%, with higher engagement",
  },
];

const Featuers = () => {
  return (
    <div>
      <h2 className="innerpage-title">Key Insights – Global Rise of Online Learning</h2>

      <p>The global online education sector is witnessing unprecedented momentum. CDOE’s programs are aligned with this megatrend, offering industry-relevant, digitally-delivered programs:</p>
      {/* <ul className="page-list">
        <li><b>Massive Growth: </b>900% growth since inception — fastest in education history</li>
        <li><b>Market Value: </b>$687 billion projected U.S. online learning industry by 2030</li>
        <li><b>Student Participation: </b>30% of U.S. students have taken at least one online course</li>
        <li><b>Women in Lead: </b>Women are more likely than men to enroll in online programs</li>
        <li><b>Global Reach: </b>200+ million learners joined a MOOC last year</li>
        <li><b>Career Motivation: </b>30% of learners pursue online degrees for better jobs</li>
        <li><b>Eco Impact: </b>85% fewer CO2 emissions per student — a sustainable model</li>
        <li><b>Efficiency: </b>Study time cut by up to 60%, with higher engagement</li>
      </ul> */}
      <ul className="icon-list">
        {listData.map((item, index) => (
          <li key={index}>
            <div className="list-title">
              <TbArrowBadgeRightFilled className="icon" />
              {item.title}:
            </div>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Featuers;
