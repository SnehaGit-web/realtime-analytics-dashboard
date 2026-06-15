import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MetricCard } from "@components/ui/MetricCard";

describe("MetricCard", () => {
  it("renders the label and value", () => {
    render(<MetricCard label="Active Users" value={1500} />);
    expect(screen.getByText("Active Users")).toBeInTheDocument();
    expect(screen.getByText("1500")).toBeInTheDocument();
  });

  it("renders a unit when provided", () => {
    render(<MetricCard label="Error Rate" value={0.5} unit="%" />);
    expect(screen.getByText("%", { exact: false })).toBeInTheDocument();
  });

  it("shows upward trend indicator when trend is positive", () => {
    render(<MetricCard label="Users" value={100} trend={5} />);
    expect(screen.getByText(/▲/)).toBeInTheDocument();
  });

  it("shows downward trend indicator when trend is negative", () => {
    render(<MetricCard label="Users" value={100} trend={-3} />);
    expect(screen.getByText(/▼/)).toBeInTheDocument();
  });

  it("does not render trend when trend is undefined", () => {
    render(<MetricCard label="Users" value={100} />);
    expect(screen.queryByText(/▲|▼/)).not.toBeInTheDocument();
  });
});