import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "@/app/router";
import "virtual:svg-icons-register";
import './style.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={createBrowserRouter(routes)} />
  // </React.StrictMode>
);
