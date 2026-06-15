import React from "react";
import { useWebSocket } from "@hooks/useWebSocket";
import { useMetrics } from "@hooks/useMetrics";
import { MetricCard } from "@components/ui/MetricCard";
import { LiveLineChart } from "@components/charts/LineChart";
import { TrafficPieChart } from "@components/charts/PieChart";
import "./Overview.css";

export function Overview() {
  useWebSocket(); // Starts WS connection, dispatches to Redux

  const { liveMetrics, timeSeries, trafficBySource } = useMetrics();
  const { activeUsers, requestsPerSecond, errorRate, avgResponseTime } = liveMetrics;

  return (
    <main className="overview">
      <section className="metrics-grid">
        <MetricCard label="Active Users" value={activeUsers.toLocaleString()} />
        <MetricCard label="Requests / sec" value={requestsPerSecond} />
        <MetricCard label="Error Rate" value={errorRate} unit="%" />
        <MetricCard label="Avg Response Time" value={avgResponseTime} unit="ms" />
      </section>

      <section className="charts-grid">
        <LiveLineChart data={timeSeries} />
        <TrafficPieChart data={trafficBySource} />
      </section>
    </main>
  );
}
