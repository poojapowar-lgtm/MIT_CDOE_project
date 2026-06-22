import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const WhyCDOEdata = [
  {
    title: "Flexibility",
    desc: "Learn at your own pace and schedule, ideal for working professionals or those with other commitments."
  },
  {
    title: "Accessibility",
    desc: "Study from anywhere without the need to relocate or commute."
  },
  {
    title: "Quality Education",
    desc: "Benefit from MIT-ADT’s strong academic reputation and experienced faculty."
  },
  {
    title: "Diverse Programs",
    desc: "Choose from a wide range of courses tailored to various career paths."
  },
  {
    title: "Interactive Learning",
    desc: "Engage in virtual classrooms, discussions, and assignments using advanced digital tools."
  },
  {
    title: "Networking Opportunities",
    desc: "Connect with peers and professionals across the globe."
  }
];

const WhyCDOE = () => {
  return (
    <div>
      <h2 className="innerpage-title">CDOE — Why Join?</h2>
      {/* <ul className="page-list">
        <li><b>Flexibility:</b> Learn at your own pace and schedule, ideal for working professionals or those with other commitments.</li>
        <li><b>Accessibility:</b> Study from anywhere without the need to relocate or commute.</li>
        <li><b>Quality Education:</b> Benefit from MIT-ADT’s strong academic reputation and experienced faculty.</li>
        <li><b>Diverse Programs:</b> Choose from a wide range of courses tailored to various career paths.</li>
        <li><b>Interactive Learning:</b> Engage in virtual classrooms, discussions, and assignments using advanced digital tools. </li>
        <li><b>Networking Opportunities:</b> Connect with peers and professionals across the globe.</li>
      </ul> */}

      <ul className="icon-list">
        {WhyCDOEdata.map((item, index) => (
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

export default WhyCDOE;
