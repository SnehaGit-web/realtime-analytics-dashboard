import { createSlice } from "@reduxjs/toolkit";

const MAX_DATA_POINTS = 20;

const initialState = {
  liveMetrics: {
    activeUsers: 0,
    requestsPerSecond: 0,
    errorRate: 0,
    avgResponseTime: 0,
  },
  timeSeries: [], // [{ timestamp, activeUsers, requestsPerSecond, errorRate }]
  trafficBySource: [], // [{ name, value }]
  status: "disconnected", // disconnected | connecting | connected | error
  lastUpdated: null,
};

const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    setConnectionStatus(state, action) {
      state.status = action.payload;
    },
    receiveMetrics(state, action) {
      const data = action.payload;
      state.liveMetrics = {
        activeUsers: data.activeUsers,
        requestsPerSecond: data.requestsPerSecond,
        errorRate: data.errorRate,
        avgResponseTime: data.avgResponseTime,
      };
      // Keep a rolling window of time-series data
      state.timeSeries.push({
        timestamp: data.timestamp,
        activeUsers: data.activeUsers,
        requestsPerSecond: data.requestsPerSecond,
        errorRate: data.errorRate,
      });
      if (state.timeSeries.length > MAX_DATA_POINTS) {
        state.timeSeries.shift();
      }
      state.trafficBySource = data.trafficBySource;
      state.lastUpdated = data.timestamp;
    },
    resetMetrics() {
      return initialState;
    },
  },
});

// Selectors
export const selectLiveMetrics = (state) => state.metrics.liveMetrics;
export const selectTimeSeries = (state) => state.metrics.timeSeries;
export const selectTrafficBySource = (state) => state.metrics.trafficBySource;
export const selectConnectionStatus = (state) => state.metrics.status;
export const selectLastUpdated = (state) => state.metrics.lastUpdated;

export const { setConnectionStatus, receiveMetrics, resetMetrics } = metricsSlice.actions;
export default metricsSlice.reducer;
