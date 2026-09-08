import React from "react";
import '../styles/ReportStatistics.css'

export default function ReportStatistics({ stats }) {
  return (
    <div className="report-stats">

      {stats.map((stat) => (
        <div className="report-stat-card" key={stat.id} >

          <div className="stat-top">
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>

            <span className={`stat-change ${stat.changeType}`} > {stat.change} </span>
          </div>

          <div className="stat-content">
            <p>{stat.title}</p>
            <h2>{stat.value}</h2>
          </div>

        </div>
      ))}

    </div>
  );
}

