import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const enrollData = [
  {
    title: "Working professionals seeking to upskill or reskill without leaving their jobs."
  },
  {
    title: "Individuals with mobility or time constraints, such as caregivers, homemakers, or those with health challenges."
  },
  {
    title: "Anyone seeking quality education through a digitally empowered platform that supports self-paced learning."
  },
  {
    title: "Students from remote regions with limited access to traditional education."
  },
  {
    title: "Learners from marginalized backgrounds who need flexible and inclusive learning opportunities."
  }
];

const Enroll = () => {
  return (
    <div>
      <h2 className="innerpage-title">Who Should Enroll ?</h2>
      {/* <ul className="page-list">
        <li>Working professionals seeking to upskill or reskill without leaving their jobs.</li>
        <li>Individuals with mobility or time constraints, such as caregivers, homemakers, or those with health challenges.</li>
        <li>Anyone seeking quality education through a digitally empowered platform that supports self-paced learning.</li>
        <li>Students from remote regions with limited access to traditional education.</li>
        <li>Learners from marginalized backgrounds who need flexible and inclusive learning opportunities.</li>
      </ul> */}
       <ul className="icon-list">
         {enrollData.map((item, index) => (
           <li key={index}>
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

export default Enroll;
