import React from "react";

const GovernanceData = [
  {
    title: "Board of Management",
    desc: "The Board of Management oversees the administrative and financial operations of the university. Key members include the Vice Chancellor, Executive Director, Deans, Faculty Representatives, Pro Vice Chancellors, External Experts, and Senior Administrative Officers."
  },
  {
    title: "Academic Council",
    desc: "The Academic Council is responsible for maintaining standards of teaching, examination, and research. It comprises the Vice Chancellor as Chairman, Pro Vice Chancellors, Deans of all Faculties, Directors of Schools, external academic experts, and the Registrar as Member Secretary."
  },
  {
    title: "Finance Committee",
    desc: "The Finance Committee oversees the financial health and budgetary matters of the university. It is chaired by the Vice Chancellor and includes the Registrar, Controller of Examinations, financial experts nominated by the Sponsoring Body, and the Chief Finance & Accounts Officer as Member Secretary."
  },
  {
    title: "Board of Examinations",
    desc: "The Board of Examinations supervises all examination-related activities. It is chaired by the Vice Chancellor and includes Deans of all Faculties and the Controller of Examinations as Member Secretary."
  }
]

const govboardData = [
  {
    title: "Prof. Dr. Vishwanath D. Karad",
    desgination:
      "President",
  },
  {
    title: "Prof. Dr. Mangesh T. Karad",
    desgination:
      "Trust Nominee (Eminent Educationist)",
  },
  {
    title: "Prof. Dr. Rajesh Siddavatam ",
    desgination: "Vice Chancellor",
  },
  {
    title: "Mr. Rahul Karad ",
    desgination: "Member Nominated by Sponsoring Body",
  },
  {
    title: "Prof. Prakash Joshi ",
    desgination: "Member Nominated by Sponsoring Body",
  },
  {
    title: "Dr. Suchitra Nagare ",
    desgination: "Member Nominated by Sponsoring Body",
  },
  {
    title: "Shri. Vinayak Ghaisas ",
    desgination: "Member Nominated by Sponsoring Body",
  },
  {
    title: "Shri. Munir Sayyed ",
    desgination: "Member Nominated by the President",
  },
  {
    title: "Dr. Mahendra Ranjekar ",
    desgination: "Member Nominated by State Government",
  },
  {
    title: "Shri Sanjay Kulkarni ",
    desgination: "Member Nominated by State Government",
  },
  {
    title: "Dr. A.S. Kiran Kumar  ",
    desgination: "Member Nominated by the President",
  },
  {
    title: "Prof. Dr. G.D. Yadav ",
    desgination: "Member Nominated by the President",
  },
  {
    title: "Prof. Dr. Mahesh Chopade ",
    desgination: "Registrar & Member Secretary",
  },
];

const Governance = () => {
  return (
    <>
      <h2 className="innerpage-title">Governance</h2>
      <p>MIT-ADT University follows a robust multi-layered governance structure as mandated under the MIT Art, Design and Technology University Act, 2015 and UGC guidelines. The governance framework encompasses the following key statutory bodies:</p>

      {/* section 1 */}
      <div className="board-body-container">
        {GovernanceData.map((item, index) => (
          <div className="board-card" key={index}>
            <h3 className="board-name">
              <img src="/assets/images/icons/circle.png" alt="icon" className="title-icon" />
              <span>{item.title}</span>
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* section 2 */}
      <h2 className="innerpage-subtitle">Governing Body</h2>
      <p style={{ textAlign: "center" }}>The Governing Body is the apex authority of the university. Its composition includes:</p>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {govboardData.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td
                  className="board-desg"
                  dangerouslySetInnerHTML={{ __html: item.desgination }}
                ></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </>
  );
};

export default Governance;
