import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <Login />,
    accessType: "",
    private: false,
    key: 1,
  },
  {
    path: "/home",
    element: <Home />,
    accessType: "",
    private: true,
    key: 1,
  },
];

export default routes;
