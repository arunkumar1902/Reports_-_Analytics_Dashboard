import React, { useMemo, useState } from "react";
import "../styles/ReportsDashboard.css";
import ReportFilters from "../components/ReportFilters";
import LoadingState from "../components/LoadingState";
import ReportStatistics from "../components/ReportStatistics";
import RevenueChart from "../components/RevenueChart";
import StatusBreakdown from "../components/StatusBreakdown";
import ProjectBarChart from "../components/ProjectBarChart";
import EmptyState from "../components/EmptyState";
import ReportTable from "../components/ReportTable";
import { monthlyData, reportData } from "../data/reportData";

export default function ReportsDashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [dateRange, setDateRange] = useState("This Year");
  const [loading, setLoading] = useState(false);

  const filteredReports = useMemo(() => {
    return reportData.filter((report) => {
      const searchValue = search.toLowerCase().trim();
      const matchesSearch = report.project.toLowerCase().includes(searchValue) ||
        report.owner.toLowerCase().includes(searchValue);
      const matchesStatus =status === "All" || report.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const stats = useMemo(() => {
    const totalProjects = filteredReports.length;
    const completedProjects = filteredReports.filter( (item) => item.status === "Completed" ).length;
    const inProgressProjects = filteredReports.filter( (item) => item.status === "In Progress" ).length;
    const totalRevenue = filteredReports.reduce( (total, item) => total + item.revenue, 0 );

    return [
      {
        id: 1,
        title: "Total Projects",
        value: totalProjects,
        icon: "fa fa-folder",
        change: "+12.5%",
        changeType: "positive",
      },
      {
        id: 2,
        title: "Completed",
        value: completedProjects,
        icon: "fa fa-check-circle",
        change: "+8.2%",
        changeType: "positive",
      },
      {
        id: 3,
        title: "In Progress",
        value: inProgressProjects,
        icon: "fa fa-clock-o",
        change: "+5.4%",
        changeType: "positive",
      },
      {
        id: 4,
        title: "Total Revenue",
        value: `₹${(totalRevenue / 100000).toFixed(1)}L`,
        icon: "fa fa-inr",
        change: "+18.7%",
        changeType: "positive",
      },
    ];
  }, [filteredReports]);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleExport = () => {
    if (filteredReports.length === 0) {
      return;
    }

    const headers = [ "Project", "Owner", "Status", "Start Date", "End Date", "Progress", "Revenue" ];

    const rows = filteredReports.map((report) => [
      report.project,
      report.owner,
      report.status,
      report.startDate,
      report.endDate,
      `${report.progress}%`,
      report.revenue,
    ]);

    const csvContent = [ 
      headers.join(","),
      ...rows.map((row) => row.map((value) => `"${value}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "reports-analytics.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="reports-page">

      <div className="reports-header">
        <div className="reports-header-content">
          <h1>Reports & Analytics</h1>
          <p> Monitor project performance, status, and revenue insights. </p>
        </div>

        <button type="button" className="export-btn" onClick={handleExport} >
          <i className="fa fa-download"></i>
          <span>Export Report</span>
        </button>
      </div>

      <ReportFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        dateRange={dateRange}
        setDateRange={setDateRange}
        onRefresh={handleRefresh}
      />

      {loading ? ( <LoadingState /> ) : (
        <>
          <ReportStatistics stats={stats} />

          <div className="charts-grid">
            <div className="chart-card revenue-chart-card">
              <RevenueChart data={monthlyData} />
            </div>

            <div className="chart-card status-chart-card">
              <StatusBreakdown
                reports={filteredReports}
              />
            </div>
          </div>

          <div className="chart-card bar-chart-card">
            <ProjectBarChart data={monthlyData} />
          </div>

          <div className="reports-table-section">
            <div className="section-title">
              <div>
                <h2>Report Data</h2>
                <p>Detailed project performance information</p>
              </div>

              <span className="record-count"> {filteredReports.length} records </span>
            </div>

            {filteredReports.length === 0 ? (<EmptyState />) : (<ReportTable reports={filteredReports} />)}

          </div>
        </>
      )}

    </div>
  );
}

