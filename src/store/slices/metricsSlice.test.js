import metricsReducer, {
  receiveMetrics,
  setConnectionStatus,
  resetMetrics,
  selectLiveMetrics,
  selectConnectionStatus,
} from "@store/slices/metricsSlice";

const mockData = {
  timestamp: "12:00:00",
  activeUsers: 1500,
  requestsPerSecond: 420,
  errorRate: 0.5,
  avgResponseTime: 95,
  trafficBySource: [{ name: "Direct", value: 300 }],
};

describe("metricsSlice", () => {
  it("should return the initial state", () => {
    const state = metricsReducer(undefined, { type: "@@INIT" });
    expect(state.status).toBe("disconnected");
    expect(state.timeSeries).toHaveLength(0);
  });

  it("should update live metrics on receiveMetrics", () => {
    const state = metricsReducer(undefined, receiveMetrics(mockData));
    expect(state.liveMetrics.activeUsers).toBe(1500);
    expect(state.liveMetrics.errorRate).toBe(0.5);
    expect(state.timeSeries).toHaveLength(1);
  });

  it("should cap timeSeries at 20 entries", () => {
    let state = metricsReducer(undefined, { type: "@@INIT" });
    for (let i = 0; i < 25; i++) {
      state = metricsReducer(state, receiveMetrics({ ...mockData, activeUsers: i }));
    }
    expect(state.timeSeries.length).toBeLessThanOrEqual(20);
  });

  it("should update connection status", () => {
    const state = metricsReducer(undefined, setConnectionStatus("connected"));
    expect(state.status).toBe("connected");
  });

  it("should reset to initial state", () => {
    let state = metricsReducer(undefined, receiveMetrics(mockData));
    state = metricsReducer(state, resetMetrics());
    expect(state.liveMetrics.activeUsers).toBe(0);
    expect(state.timeSeries).toHaveLength(0);
  });

  it("selectors return correct slices", () => {
    const state = { metrics: metricsReducer(undefined, receiveMetrics(mockData)) };
    expect(selectLiveMetrics(state).activeUsers).toBe(1500);
    expect(selectConnectionStatus(state)).toBe("disconnected");
  });
});
