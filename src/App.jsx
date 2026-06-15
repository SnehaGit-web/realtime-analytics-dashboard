import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "@store/slices/uiSlice";
import { Header } from "@components/layout/Header";
import { ErrorBoundary } from "@components/ui/ErrorBoundary";
import { Overview } from "@pages/Overview";
import "./app.css";

export default function App() {
  const theme = useSelector(selectTheme);

  // Apply theme to root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}
