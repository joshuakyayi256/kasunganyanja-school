import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import DevErrorBoundary from "./components/DevErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DevErrorBoundary>
        <App />
      </DevErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
