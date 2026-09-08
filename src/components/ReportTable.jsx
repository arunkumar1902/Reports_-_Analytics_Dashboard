import React from "react";
import '../styles/ReportTable.css'

export default function ReportTable({ reports }) {

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "status-completed";

      case "In Progress":
        return "status-progress";

      case "Pending":
        return "status-pending";

      case "Cancelled":
        return "status-cancelled";

      default:
        return "";
    }
  };

  return (
    <div className="report-table-wrapper">

      <table className="report-table">

        <thead>
          <tr>
            <th>Project</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Progress</th>
            <th>Revenue</th>
          </tr>
        </thead>

        <tbody>

          {reports.map((report) => (

            <tr key={report.id}>

              <td>
                <div className="project-name">
                  <div className="project-avatar">
                    {report.project.charAt(0)}
                  </div>
                  <span>{report.project}</span>
                </div>
              </td>

              <td>{report.owner}</td>
              <td><span className={`status-badge ${getStatusClass(report.status)}`}> {report.status} </span></td>
              <td>{report.startDate}</td>
              <td>{report.endDate}</td>

              <td>
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div className="progress-value" style={{width: `${report.progress}%`}} ></div>
                  </div>
                  <span>{report.progress}%</span>
                </div>
              </td>

              <td><strong>₹ {report.revenue.toLocaleString("en-IN")}</strong></td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

