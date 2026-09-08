import React from "react";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function RevenueChart({ data }) {
  return (
    <div className="chart-wrapper">

      <div className="chart-heading">
        <div>
          <h3>Revenue Overview</h3>
          <p>Monthly revenue performance</p>
        </div>
        <span className="chart-label">Revenue</span>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
          
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1" >
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef0f5" />

            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#858a9c" }} />

            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#858a9c" }} 
              tickFormatter={(value) => `₹${value / 100000}L` } />

            <Tooltip formatter={(value) => `₹${Number(value).toLocaleString("en-IN")}`}
              contentStyle={{ borderRadius: "8px",  border: "1px solid #e5e7eb" }} />

            <Area type="monotone" dataKey="revenue" stroke="#4f46e5"
              strokeWidth={3} fill="url(#revenueGradient)" activeDot={{ r: 6 }} />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

