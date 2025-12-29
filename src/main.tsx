// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Centralized SEO provider
import App from "./App";
import "./index.css";
import DevErrorBoundary from "./components/DevErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DevErrorBoundary>
          <App />
        </DevErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);