import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Info from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Info />
  </StrictMode>
);
