import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { HashProvider } from "./contexts/HashContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HashProvider>
);
