import React, { memo } from "react";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/**
 * LiveLineChart - renders a rolling time-series line chart.
 * Memoized to avoid unnecessary re-renders when other state changes.
 */
export const LiveLineChart = memo(function LiveLineChart({ data }) {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Active Users & Requests / sec</h3>
      <ResponsiveContainer width="100%" height={280}>
        <ReLineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="timestamp" tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} />
          <YAxis tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} />
          <Tooltip
            contentStyle={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="activeUsers"
            name="Active Users"
            stroke="var(--color-accent)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="requestsPerSecond"
            name="Req/sec"
            stroke="var(--color-success)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
});
