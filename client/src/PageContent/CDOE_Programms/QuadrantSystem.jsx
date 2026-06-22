import React from "react";


const QuadrantData = {
  columns: ["Quadrant", "Component", "Description", "Mode"],
  data: [
    {
      quadrant: "Quadrant I",
      component: "e-Tutorial",
      description: "Video lectures, animations, simulations, virtual labs; minimum 30 minutes per credit hour of course content",
      mode: "Digital / Online"
    },
    {
      quadrant: "Quadrant II",
      component: "e-Content",
      description: "Structured e-text (PDF/e-Book), web resources, reference material, case studies, industry scenarios",
      mode: "Digital / Print"
    },
    {
      quadrant: "Quadrant III",
      component: "Discussion Board & Self-Assessment",
      description: "Discussion forums, FAQs, Q&A sessions, quizzes, self-assessment exercises, assignments",
      mode: "Online / Interactive"
    },
    {
      quadrant: "Quadrant IV",
      component: "Live / Online Sessions",
      description: "Live webinars, contact classes, guest lectures, Mentor sessions, doubt-clearing sessions, virtual classroom",
      mode: "Live / Synchronous"
    },

  ]
};

const QuadrantSystem = () => {
  return (
    <div>
      <h2 className="innerpage-title">Quadrant System</h2>

      <p>The CDOE, MIT ADT University, follows the Four-Quadrant approach for the development and delivery of e-content as prescribed by the University Grants Commission (UGC) through its Distance Education Bureau (DEB). The Quadrant System ensures that all distance and online learning programmes maintain high pedagogical standards and provide rich, multi-modal learning experiences to students.</p>

      <p><b>The Quadrant System is mandated under UGC (Open and Distance Learning Programmes and Online Programmes) Regulations, 2020.</b></p>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {QuadrantData.columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {QuadrantData.data.map((row, index) => (
              <tr key={index}>
                <td>{row.quadrant}</td>
                <td>{row.component}</td>
                <td>{row.description}</td>
                <td>{row.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>Each course/paper offered under the CDOE programmes is developed and delivered following all four quadrants to ensure holistic academic experience. Subject Matter Experts (SMEs) are engaged for content creation under each quadrant. All e-content is hosted on the University's dedicated Learning Management System (LMS).</p>
    </div>
  );

};

export default QuadrantSystem;
