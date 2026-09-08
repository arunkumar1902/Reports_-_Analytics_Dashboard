import React from "react";
import '../styles/ReportFilters.css'

export default function ReportFilters({ search, setSearch, status, setStatus, dateRange, setDateRange, onRefresh }) {
  return (
    <div className="report-filters">

      <div className="filter-left">
        <div className="report-search">

          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search projects or owners..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button type="button" className="clear-search" onClick={() => setSearch("")} >
              <i className="fa fa-times"></i>
            </button>
          )}

        </div>

        <div className="filter-group">

          <i className="fa fa-calendar"></i>
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="Today"> Today </option>
            <option value="This Week"> This Week </option>
            <option value="This Month"> This Month </option>
            <option value="This Year"> This Year </option>
            <option value="Last Year"> Last Year </option>
          </select>

        </div>

        <div className="filter-group">

          <i className="fa fa-filter"></i>
          <select value={status} onChange={(e) => setStatus(e.target.value)} >
            <option value="All"> All Status </option>
            <option value="Completed"> Completed </option>
            <option value="In Progress"> In Progress </option>
            <option value="Pending"> Pending </option>
            <option value="Cancelled"> Cancelled </option>
          </select>

        </div>

      </div>

      <button type="button" className="refresh-btn" onClick={onRefresh} >
        <i className="fa fa-refresh"></i>
        <span>Refresh</span>
      </button>

    </div>
  );
}

