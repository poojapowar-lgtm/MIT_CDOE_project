import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const courseData = [
  { title: "BBA : Digital Marketing (3 Years)" },
  { title: "BBA : International Business (3 Years)" },
  { title: "B.Com : Computer Applications (3 Years)" },
  { title: "MBA : Finance Technology (2 Years)" },
  { title: "MBA : Logistics and Supply Chain Management (2 Years)" },
  { title: "MBA : Human Resource Management (2 Years)" },
  { title: "MBA : Marketing Management (2 Years)" },
];

const Programmes = () => {
  return (
    <div>
      <h2 className="innerpage-title">Approved Programs — Open & Distance Learning</h2>
      {/* <ul className="page-list">
        <li><b>BBA : </b> Digital Marketing (3 Years)</li>
        <li><b>BBA : </b> International Business (3 Years)</li>
        <li><b>B.Com : </b> Computer Applications (3 Years)</li>
        <li><b>MBA : </b> Finance Technology (2 Years)</li>
        <li><b>MBA : </b> Logistics and Supply Chain Management (2 Years)</li>
        <li><b>MBA : </b> Human Resource Management (2 Years)</li>
        <li><b>MBA : </b> Marketing Management (2 Years)</li>
      </ul> */}

       <ul className="icon-list" >
         {courseData.map((item, index) => (
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

export default Programmes;
