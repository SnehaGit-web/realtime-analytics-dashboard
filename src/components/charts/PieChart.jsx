import React, { memo } from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

export const TrafficPieChart = memo(function TrafficPieChart({ data }) {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Traffic by Source</h3>
      <ResponsiveContainer width="100%" height={280}>
        <RePieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            isAnimationActive={false}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
            }}
          />
          <Legend />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
});
