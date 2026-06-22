import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const advantageData = [
  { title: "100% Online Programme" },
  { title: "Live Online Interactive Sessions" },
  { title: "Peer-to-Peer Doubt Sharing & Solving Sessions" },
  { title: "24×7 Access to World Class Advanced Learning Management System" },
  { title: "Online Degree Equally Credible as Offline Degree" },
  { title: "Online Assessments as per UGC Guidelines" },
  { title: "Access to Recorded Sessions to Learn at Your Own Pace" },
];

const Advantages = () => {
  return (
    <div>
      <h2 className="innerpage-title">Advantages of CDOE</h2>
      {/* <ul className="page-list">
        <li>100% Online Programme</li>
        <li>Live Online Interactive Sessions</li>
        <li>Peer-to-Peer Doubt Sharing & Solving Sessions</li>
        <li>24×7 Access to World Class Advanced Learning Management System</li>
        <li>Online Degree Equally Credible as Offline Degree</li>
        <li>Online Assessments as per UGC Guidelines</li>
        <li>Access to Recorded Sessions to Learn at Your Own Pace</li>
      </ul> */}

      <ul className="icon-list">
        {advantageData.map((item, index) => (
          <li key={index} style={{maxWidth:"700px"}}>
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

export default Advantages;
