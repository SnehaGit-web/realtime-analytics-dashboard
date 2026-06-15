import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectTheme } from "@store/slices/uiSlice";
import { selectConnectionStatus, selectLastUpdated } from "@store/slices/metricsSlice";
import "./Header.css";

export function Header() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const status = useSelector(selectConnectionStatus);
  const lastUpdated = useSelector(selectLastUpdated);

  const statusColor = {
    connected: "var(--color-success)",
    connecting: "var(--color-warning)",
    disconnected: "var(--color-danger)",
    error: "var(--color-danger)",
  }[status];

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Analytics Dashboard</h1>
        <span className="connection-status" style={{ color: statusColor }}>
          ● {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="header-right">
        {lastUpdated && (
          <span className="last-updated">Updated {lastUpdated}</span>
        )}
        <button
          className="theme-toggle"
          onClick={() => dispatch(toggleTheme())}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
