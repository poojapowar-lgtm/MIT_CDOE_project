import React from "react";
import "./leadership.css";
import { leadershipData } from "./LeadershipData";
import { useParams } from "react-router-dom";

const LeadershipMsg = () => {
  const { type } = useParams(); // 👈 get route param

  const filteredLeader = leadershipData.filter(
    (leader) => leader.type === type
  );

  return (
    <div className="leadership-container">
      {filteredLeader.map((leader) => (
        <div key={leader.id}>
          <h2 className="innerpage-title" style={{ border: "none" }}>
            {leader.name}
          </h2>

          <p className="leader-designation">
            {leader.designation}
          </p>

          <div className="leader-card">
            <div className="leader-section">

              <div className="leader-image">
                <img src={leader.image} alt={leader.name} />
              </div>

              <div className="leader-content">
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