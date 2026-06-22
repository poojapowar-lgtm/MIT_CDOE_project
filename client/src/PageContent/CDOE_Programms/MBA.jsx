import React from "react";

const MBAdata = {
  columns: ["Particulars", "Details"],
  data: [
    {
      particulars: "Programme Name",
      details: "Master of Business Administration (MBA)",
    },
    {
      particulars: "Duration",
      details: "2 Years (4 Semesters)",
    },
    {
      particulars: "Mode",
      details: "Distance / Online",
    },
    {
      particulars: "Eligibility",
      details: "Graduate in any discipline with minimum 50% marks (45% for reserved category)",
    }, {
      particulars: "Total Credits",
      details: "96 Credits",
    },
    {
      particulars: "Awarding Authority",
      details: "MIT ADT University, Pune",
    },
    {
      particulars: "UGC-DEB Approval",
      details: "Approved | Reference No.: [DEB Ref. No.]",
    },
    {
      particulars: "Equivalence",
      details: "Equivalent to Regular MBA as per UGC Regulations 2020",
    },
    {
      particulars: "AICTE Approval",
      details: "[As applicable]",
    },
  ]
};

const MBA = () => {
  return (
    <div>
      <h2 className="innerpage-title">MBA Programmes</h2>
      <p>The Master of Business Administration (MBA) programme is offered through Distance and Online mode as per UGC-DEB regulations and duly approved by the Distance Education Bureau, UGC, New Delhi.</p>
      <ul className="page-list">
        <li><b>MBA:</b> Finance Technology (2 Years)	</li>
        <li><b>MBA:</b> Logistics and Supply Chain Management (2 Years) </li>
        <li><b>MBA:</b> Human Resource Management (2 Years) </li>
        <li><b>MBA:</b> Marketing Management (2 Years) 	</li>
      </ul>

      <h2 className="innerpage-title">Equivalence of Degree</h2>
      <p>The MBA degree awarded by MIT ADT University through the Centre for Distance and Online Education is equivalent to the MBA degree awarded through regular/conventional mode as per:</p>
      <ul className="page-list">
        <li>UGC (Open and Distance Learning Programmes and Online Programmes) Regulations, 2020.</li>
        <li>Association of Indian Universities (AIU) recognition guidelines.</li>
        <li>University Grants Commission notification on equivalence of Distance Education degrees with regular mode degrees.</li>
        <li>Maharashtra Public Universities Act, 2016.</li>
      </ul>


      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {MBAdata.columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {MBAdata.data.map((row, index) => (
              <tr key={index}>
                <td>{row.particulars}</td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );

};

export default MBA;
