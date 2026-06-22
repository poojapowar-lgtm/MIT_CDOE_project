import React from "react";

const feeStructure = [
  {
    title: "BBA — Duration: 3 Years:",
    columns: ["Particular", "1st Year", "2nd Year", "3rd Year"],
    data: [
      { particular: "Tuition Fee", firstYear: "20,000/-", secondYear: "20,000/-", thirdYear: "23,500/-" },
      { particular: "Development Fee", firstYear: "13,000/-", secondYear: "13,000/-", thirdYear: "13,000/-" },
      { particular: "University Fee", firstYear: "7,000/-", secondYear: "7,000/-", thirdYear: "7,000/-" },
      { particular: "Total Fee", firstYear: "40,000/-", secondYear: "40,000/-", thirdYear: "43,500/-" },
      { particular: "Grand Total", firstYear: "1,23,500/-", secondYear: "", thirdYear: "" }
    ]
  },
  {
    title: "MBA — Duration: 2 Years:",
    columns: ["Particular", "1st Year", "2nd Year", ""],
    data: [
      { particular: "Tuition Fee", firstYear: "40,000/-", secondYear: "43,500/-" , thirdYear: ""},
      { particular: "Development Fee", firstYear: "20,000/-", secondYear: "20,000/-"  ,thirdYear: ""},
      { particular: "University Fee", firstYear: "15,000/-", secondYear: "15,000/-",thirdYear: "" },
      { particular: "Total Fee", firstYear: "75,000/-", secondYear: "78,500/-",thirdYear: "" },
      { particular: "Grand Total", firstYear: "1,53,500/-", secondYear: "" ,thirdYear: ""}
    ]
  },
  {
    title: "B.Com CA — Duration: 3 Years:",
    columns: ["Particular", "1st Year", "2nd Year", "3rd Year"],
    data: [
      { particular: "Tuition Fee", firstYear: "20,000/-", secondYear: "20,000/-", thirdYear: "20,000/-" },
      { particular: "Development Fee", firstYear: "10,000/-", secondYear: "10,000/-", thirdYear: "10,000/-" },
      { particular: "University Fee", firstYear: "5,000/-", secondYear: "5,000/-", thirdYear: "5,000/-" },
      { particular: "Total Fee", firstYear: "35,000/-", secondYear: "35,000/-", thirdYear: "35,000/-" },
      { particular: "Grand Total", firstYear: "1,05,000/-", secondYear: "", thirdYear: "" }
    ]
  }
];

const Fees = () => {
  return (
    <>
      <h2 className="innerpage-title">Fee Structure</h2>
<div className="tables-wrapper">
  {feeStructure.map((section, index) => (
    <div key={index}>
      <h2 className="innerpage-subtitle">{section.title}</h2>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {section.columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {section.data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ))}
</div>

<h2 className="innerpage-title">Key Distinguishers </h2>
      <ul className="page-list">
        <li>Attractive Meritorious Scholarships and EWS Scheme available</li>
        <li>Corporate discounts for bulk admissions</li>
        <li>10% EWS Quota is over and above sanctioned intake for the respective programme</li>
        <li>15% NRI/PIO/OCI/FN quota is over and above the sectioned intake for all programmes</li>
        <li>Fees for NRI/PIO/OCI/FN candidates will be 1.5 times higher than that of Indian Candidates</li>
      </ul>

    </>
  )
};

export default Fees;
