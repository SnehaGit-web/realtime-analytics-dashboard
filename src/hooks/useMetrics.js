import { useSelector } from "react-redux";
import {
  selectLiveMetrics,
  selectTimeSeries,
  selectTrafficBySource,
  selectConnectionStatus,
  selectLastUpdated,
} from "@store/slices/metricsSlice";

/**
 * useMetrics - convenient hook to access all metrics state.
 */
export function useMetrics() {
  const liveMetrics = useSelector(selectLiveMetrics);
  const timeSeries = useSelector(selectTimeSeries);
  const trafficBySource = useSelector(selectTrafficBySource);
  const status = useSelector(selectConnectionStatus);
  const lastUpdated = useSelector(selectLastUpdated);

  return { liveMetrics, timeSeries, trafficBySource, status, lastUpdated };
}
