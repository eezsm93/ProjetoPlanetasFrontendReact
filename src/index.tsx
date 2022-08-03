import React from "react";
import { render } from "react-dom";
import MainRoutes from "./routes/MainRoutes";

render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>,
  document.getElementById("root"),
);
