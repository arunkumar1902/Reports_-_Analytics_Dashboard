import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function ProjectBarChart({ data }) {
  return (
    <div className="chart-wrapper">

      <div className="chart-heading">

        <div>
          <h3>Projects Overview</h3>
          <p>Number of projects created each month</p>
        </div>

      </div>

      <div className="bar-chart-container">

        <ResponsiveContainer width="100%" height="100%" >
          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef0f5" />

            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#858a9c" }} />

            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#858a9c" }} />

            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }} />

            <Bar dataKey="projects" fill="#6366f1" radius={[5, 5, 0, 0]} maxBarSize={45} />

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

