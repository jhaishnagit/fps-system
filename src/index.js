import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import { ToastProvider } from "./context/ToastContext";
import "./assets/css/global.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);
