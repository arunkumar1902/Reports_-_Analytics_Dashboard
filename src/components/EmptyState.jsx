import React from "react";
import '../styles/EmptyState.css'

export default function EmptyState() {
  return (
    <div className="report-empty">

      <div className="empty-icon">
        <i className="fa fa-bar-chart"></i>
      </div>

      <h3>No reports found</h3>

      <p>Try changing your search or filter criteria.</p>

    </div>
  );
}
