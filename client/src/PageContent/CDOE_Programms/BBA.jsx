import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BBAdata = {
  columns: ["Particulars", "Details"],
  data: [
    {
      particulars: "Programme Name",
      details: "Bachelor of Business Administration (BBA)",
    },
    {
      particulars: "Duration",
      details: "3 Years (6 Semesters)",
    },
    {
      particulars: "Mode",
      details: "Distance / Online",
    },
    {
      particulars: "Eligibility",
      details: "10+2 / HSC or equivalent from a recognised board with minimum 45% marks",
    },
    {
      particulars: "Total Credits",
      details: "144 Credits",
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
      details: "Equivalent to Regular BBA as per UGC Regulations 2020",
    },
    {
      particulars: "Lateral Entry",
      details: "Diploma holders may seek admission to Second Year (Semester III) subject to eligibility",
    },
  ]
}

const BBA = () => {
  return (
    <div>
      <h2 className="innerpage-title">BBA Programmes</h2>
      <p>The Bachelor of Business Administration (BBA) programme is offered through Distance and Online mode as per UGC-DEB regulations and duly approved by the Distance Education Bureau, UGC, New Delhi.</p>
      <ul className="page-list">
        <li><b>BBA:</b> Digital Marketing (3 Years)</li>
        <li><b>BBA:</b> International Business (3 Years) </li>
        <li><b>B.Com :</b> Computer Applications (3 Years) </li>
      </ul>

      <h2 className="innerpage-title">Equivalence of Degree</h2>
      <p>The BBA degree awarded by MIT ADT University through the Centre for Distance and Online Education is equivalent to the BBA degree awarded through regular/conventional mode as per:</p>
      <ul className="page-list">
        <li>UGC (Open and Distance Learning Programmes and Online Programmes) Regulations, 2020.</li>
        <li>Association of Indian Universities (AIU) recognition guidelines.</li>
        <li>Maharashtra Public Universities Act, 2016.</li>
        <li>National Academic Depository (NAD) registered degrees.</li>
      </ul>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {BBAdata.columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {BBAdata.data.map((row, index) => (
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

export default BBA;
