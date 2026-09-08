import React, { useMemo } from "react";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function StatusBreakdown({ reports }) {

  const statusData = useMemo(() => {
    return [
      {
        name: "Completed",
        value: reports.filter(
          (item) => item.status === "Completed"
        ).length,
      },
      {
        name: "In Progress",
        value: reports.filter(
          (item) => item.status === "In Progress"
        ).length,
      },
      {
        name: "Pending",
        value: reports.filter(
          (item) => item.status === "Pending"
        ).length,
      },
      {
        name: "Cancelled",
        value: reports.filter(
          (item) => item.status === "Cancelled"
        ).length,
      },
    ].filter((item) => item.value > 0);
  }, [reports]);

  const COLORS = [ "#22c55e", "#3b82f6", "#f59e0b", "#ef4444" ];

  const total = reports.length;

  return (
    <div className="chart-wrapper">

      <div className="chart-heading">
        <div>
          <h3>Status Breakdown</h3>
          <p> Current project status distribution </p>
        </div>
      </div>

      <div className="donut-container">

        {statusData.length > 0 ? (

          <ResponsiveContainer width="100%" height="100%" >
            <PieChart>

              <Pie
                data={statusData}
                cx="50%"
                cy="45%"
                innerRadius={65}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >

                {statusData.map(
                  (entry, index) => (
                    <Cell key={`cell-${index}`} fill={ COLORS[index % COLORS.length] } />
                  )
                )}

              </Pie>

              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />

              <text
                x="50%"
                y="43%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="donut-total"
              > {total} </text>

              <text
                x="50%"
                y="51%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="donut-label"
              > Projects </text>

            </PieChart>
          </ResponsiveContainer>

        ) : (

          <div className="chart-empty">
            No status data available
          </div>

        )}

      </div>

    </div>
  );
}

