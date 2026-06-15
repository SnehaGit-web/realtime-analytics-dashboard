import React from "react";
import "./MetricCard.css";

/**
 * MetricCard - displays a single KPI with label, value, and optional trend.
 */
export function MetricCard({ label, value, unit = "", trend }) {
  const trendClass = trend > 0 ? "trend-up" : trend < 0 ? "trend-down" : "trend-neutral";

  return (
    <div className="metric-card">
      <span className="metric-label">{label}</span>
      <div className="metric-value">
        {value}
        {unit && <span className="metric-unit"> {unit}</span>}
      </div>
      {trend !== undefined && (
        <span className={`metric-trend ${trendClass}`}>
          {trend > 0 ? "▲" : trend < 0 ? "▼" : "—"} {Math.abs(trend)}%
        </span>
      )}
    </div>
  );
}
