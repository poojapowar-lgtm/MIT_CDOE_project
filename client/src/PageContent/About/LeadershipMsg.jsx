import React from "react";
import "./leadership.css";
import { leadershipData } from "./LeadershipData";
import { useParams } from "react-router-dom";

const LeadershipMsg = () => {
  const { type } = useParams(); // get route param

  const filteredLeader = leadershipData.filter(
    (leader) => leader.type === type
  );

  const toArray = (val) => {
    if (!val) return [];
    return Array.isArray(val) ? val : [val];
  };

  const getImage = (val) => {
    if (!val) return "";
    return Array.isArray(val) ? val[0] : val;
  };

  return (
    <div className="leadership-container">
      {filteredLeader.map((leader) => {

        const description1 = toArray(leader.description1);
        const description2 = toArray(leader.description2);
        const description3 = toArray(leader.description3);
        const description4 = toArray(leader.description4);
        const description5 = toArray(leader.description5);

        const image1 = getImage(leader.image1);
        const image2 = getImage(leader.image2);
        const image3 = toArray(leader.image3);
        const image4 = getImage(leader.image4);

        return (
          <div key={leader.id}>

            <h2 className="innerpage-title">{leader.name}</h2>

            <h3 className="sectionSubtitle">
              {leader.sectionSubtitle}
            </h3>

            {/* SECTION 1 */}
            <div className="row">
              <div className="text">
                {description1.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="image">
                {image1 && <img src={image1} alt={leader.name} />}
              </div>
            </div>

            {/* QUOTE 1 */}
            {leader.quote1 && <p className="quote">"{leader.quote1}"</p>}

            <h3 className="sectionSubtitle">
              {leader.sectionSubtitle2}
            </h3>

            {/* SECTION 2 */}
            <div className="row">
              <div className="image">
                {image2 && <img src={image2} alt="leader" />}
              </div>
              <div className="">
                {description2.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="text">
              {description3.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* SECTION 3 → CENTER IMAGE */}
            {image3.length > 0 && (
              <div className="center-image">
                {image3.map((img, index) => (
                  <img key={index} src={img} alt={`leader-${index}`} />
                ))}
              </div>
            )}


            {/* DESCRIPTION 4 */}
            <div className="full-text">
              {description4.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* QUOTE 2 */}
            {leader.quote2 && <p className="quote">"{leader.quote2}"</p>}

            {/* SECTION 4 */}
            <div className="row">
              <div className="text">
                {description5.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="image">
                {image4 && <img src={image4} alt="leader" />}
              </div>
            </div>

            {/* QUOTE 3 */}
            {leader.quote3 && <p className="quote">"{leader.quote3}"</p>}

          </div>
        );
      })}
    </div>
  );
};

export default LeadershipMsg;