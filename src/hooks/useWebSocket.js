import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { MockWebSocket } from "@services/mockWebSocket";
import { receiveMetrics, setConnectionStatus } from "@store/slices/metricsSlice";

/**
 * useWebSocket - manages WebSocket lifecycle and dispatches metrics to Redux.
 * Automatically reconnects on unmount/remount.
 */
export function useWebSocket() {
  const dispatch = useDispatch();
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new MockWebSocket(
      (data) => dispatch(receiveMetrics(data)),
      (status) => dispatch(setConnectionStatus(status))
    );
    wsRef.current = ws;
    ws.connect();

    return () => {
      ws.disconnect();
    };
  }, [dispatch]);
}
