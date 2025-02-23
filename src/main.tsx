import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Computer from "./Computer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Computer />
  </StrictMode>
);
