/**
 * MockWebSocket simulates a WebSocket server for demo purposes.
 * Replace the WS_URL and remove this file when connecting to a real backend.
 */

const SOURCES = ["Direct", "Organic Search", "Paid Ads", "Social", "Referral"];

function generateMetrics() {
  return {
    timestamp: new Date().toLocaleTimeString(),
    activeUsers: Math.floor(Math.random() * 500) + 1200,
    requestsPerSecond: Math.floor(Math.random() * 200) + 300,
    errorRate: parseFloat((Math.random() * 2).toFixed(2)),
    avgResponseTime: Math.floor(Math.random() * 100) + 80,
    trafficBySource: SOURCES.map((name) => ({
      name,
      value: Math.floor(Math.random() * 400) + 50,
    })),
  };
}

export class MockWebSocket {
  constructor(onMessage, onStatusChange) {
    this.onMessage = onMessage;
    this.onStatusChange = onStatusChange;
    this.interval = null;
    this.connected = false;
  }

  connect() {
    this.onStatusChange("connecting");
    // Simulate connection delay
    setTimeout(() => {
      this.connected = true;
      this.onStatusChange("connected");
      this.interval = setInterval(() => {
        if (this.connected) {
          this.onMessage(generateMetrics());
        }
      }, 1500);
    }, 800);
  }

  disconnect() {
    this.connected = false;
    clearInterval(this.interval);
    this.onStatusChange("disconnected");
  }
}
