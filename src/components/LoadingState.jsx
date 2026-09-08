import React from "react";
import '../styles/LoadingState.css'

export default function LoadingState() {
  return (
    <div className="report-loading">

      <div className="loading-spinner">
        <i className="fa fa-spinner fa-spin"></i>
      </div>

      <h3>Loading reports...</h3>

      <p>Please wait while we prepare your analytics.</p>

    </div>
  );
}

